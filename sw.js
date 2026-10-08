/* Midgard Finance service worker — offline app shell + fast repeat loads.
 * Never caches chain reads (/rpc) or cross-origin requests (RPC, CDNs, esm.sh).
 * HTML and un-hashed public files are network-first (so a deploy shows up on the first load);
 * content-hashed /assets/ are cache-first (a hashed URL never changes, so a cached copy is never stale). */
const CACHE = "elcasino-v4"; // bumped: drops the v3 cache (old 1.8 MB logo / hero, re-fetched assets)
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./elcasino_logo.png"];
const MAX_ASSETS = 450;       // old deploys' hashed files are trimmed past this (oldest first)
async function trim(cache) {
  const keys = await cache.keys();
  const assets = keys.filter((k) => /\/assets\//.test(k.url));
  if (assets.length > MAX_ASSETS) await Promise.all(assets.slice(0, assets.length - MAX_ASSETS).map((k) => cache.delete(k)));
}

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE).catch(() => {})));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  let url;
  try { url = new URL(req.url); } catch { return; }
  if (url.origin !== location.origin) return;     // RPC, CDNs, esm.sh, fonts — untouched
  if (url.pathname.startsWith("/rpc")) return;     // never cache on-chain reads

  // Navigations / HTML: network-first, fall back to the cached shell offline.
  if (req.mode === "navigate" || req.headers.get("accept")?.includes("text/html")) {
    e.respondWith(
      fetch(req).then((res) => {
        // only the app shell is the offline fallback — never a share page (/w/<game>.html) or another HTML file
        if (res.ok && (url.pathname === "/" || url.pathname.endsWith("/index.html"))) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }

  // Content-hashed build assets (/assets/name-<hash>.ext) never change under the same URL:
  // cache-first — a cached copy is served with NO network request at all (it used to re-download
  // every asset on every visit "in the background"); a miss is fetched once and kept.
  if (/\/assets\/[^/]+-[\w-]{8,}\.[a-z0-9]+$/i.test(url.pathname)) {
    e.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        if (cached) return cached;
        const res = await fetch(req);
        if (res && res.ok) { cache.put(req, res.clone()).then(() => trim(cache)).catch(() => {}); }
        return res;
      })
    );
    return;
  }

  // Un-hashed IMAGES (gallery, og, game art, logos): stale-while-revalidate — the cached copy shows at once and
  // the network is asked again at most every 12 h (a changed image still lands, just on the next visit). Saves a
  // round-trip per image per visit and keeps GitHub Pages bandwidth down.
  if (/\.(?:webp|png|jpe?g|svg|gif|avif)$/i.test(url.pathname)) {
    e.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        const stamp = cached ? Number(cached.headers.get("x-sw-at") || 0) : 0;
        const refresh = () => fetch(req).then(async (res) => {
          if (res && res.ok) {
            const body = await res.clone().blob();
            const h = new Headers(res.headers); h.set("x-sw-at", String(Date.now()));
            cache.put(req, new Response(body, { status: res.status, statusText: res.statusText, headers: h })).catch(() => {});
          }
          return res;
        });
        if (cached) { if (Date.now() - stamp > 12 * 3600_000) refresh().catch(() => {}); return cached; }
        return refresh();
      })
    );
    return;
  }

  // Everything else keeps its name across deploys (public/ files): network-first, so a deploy
  // shows up on the FIRST load; the cache is only the offline fallback.
  e.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {}); }
      return res;
    }).catch(() => caches.match(req))
  );
});

/* ── Web push (VAPID) ─────────────────────────────────────────────────────── */
self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch { try { d = { body: e.data.text() }; } catch {} }
  const title = d.title || "EL-Casino";
  const opts = {
    body: d.body || "",
    icon: d.icon || "./elcasino_logo.png",
    badge: "./elcasino_logo.png",
    tag: d.tag,           // same tag collapses duplicates so pushes don't stack up
    renotify: false,
    data: { url: d.url || "./#/notifications" },
  };
  e.waitUntil((async () => {
    // the app is open and in front → it shows the event itself (bell, cards); no system popup on top
    const wins = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    if (wins.some((c) => c.visibilityState === "visible" && c.focused)) return;
    await self.registration.showNotification(title, opts);
  })());
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || "./#/notifications";
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of all) { if ("focus" in c) { c.focus(); try { c.navigate(url); } catch {} return; } }
    if (self.clients.openWindow) return self.clients.openWindow(url);
  })());
});
