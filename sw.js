/* Midgard Finance service worker — offline app shell + fast repeat loads.
 * Never caches chain reads (/rpc) or cross-origin requests (RPC, CDNs, esm.sh).
 * HTML and un-hashed public files are network-first (so a deploy shows up on the first load);
 * only content-hashed /assets/ are stale-while-revalidate (immutable, safe from cache). */
const CACHE = "elcasino-v3"; // bumped: drops caches that held stale public/ files
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./elcasino_logo.png", "./elcasino_logo.png", "./elcasino_logo.png"];

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
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put("./index.html", copy)).catch(() => {});
        return res;
      }).catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }

  // Content-hashed build assets (/assets/name-<hash>.ext) never change under the same URL:
  // serve from cache instantly, refresh in the background.
  if (/\/assets\/[^/]+-[\w-]{8,}\.[a-z0-9]+$/i.test(url.pathname)) {
    e.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req).then((res) => { if (res && res.ok) cache.put(req, res.clone()); return res; }).catch(() => cached);
        return cached || network;
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
  const title = d.title || "Midgard";
  const opts = {
    body: d.body || "",
    icon: d.icon || "./elcasino_logo.png",
    badge: "./elcasino_logo.png",
    tag: d.tag,           // same tag collapses duplicates so pushes don't stack up
    renotify: false,
    data: { url: d.url || "./#/notifications" },
  };
  e.waitUntil(self.registration.showNotification(title, opts));
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
