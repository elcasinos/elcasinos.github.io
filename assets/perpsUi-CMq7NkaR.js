import{j as r,r as n}from"./vendor-react-Dw-pcWBf.js";import{O as s}from"./vendor-icons-DltxYJIW.js";const c=`
.px-card{ position:relative; border-radius:16px; isolation:isolate;
  background:linear-gradient(180deg, rgba(14,24,18,.86) 0%, rgba(9,11,11,.9) 60%, rgba(8,9,10,.92) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.04), inset 0 0 0 1px rgba(163,230,53,.11), 0 20px 40px -24px rgba(0,0,0,.9); }
.px-card::after{ content:""; position:absolute; inset:5px; pointer-events:none; border-radius:12px; opacity:.32;
  background:
    linear-gradient(#b4ff2e,#b4ff2e) top left/10px 1.5px no-repeat, linear-gradient(#b4ff2e,#b4ff2e) top left/1.5px 10px no-repeat,
    linear-gradient(#b4ff2e,#b4ff2e) bottom right/10px 1.5px no-repeat, linear-gradient(#b4ff2e,#b4ff2e) bottom right/1.5px 10px no-repeat; }
.px-hero{ position:relative; overflow:hidden; border-radius:18px; isolation:isolate;
  background:radial-gradient(120% 140% at 0% 0%, rgba(16,185,129,.10), transparent 55%), radial-gradient(90% 120% at 100% 100%, rgba(180,255,46,.06), transparent 60%), linear-gradient(180deg,#0c1611,#08090a);
  box-shadow:inset 0 0 0 1px rgba(163,230,53,.14), 0 20px 40px -24px rgba(0,0,0,.9); }
.px-hero::before{ content:""; position:absolute; inset:0; z-index:-1; opacity:.35;
  background-image:linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px); background-size:26px 26px;
  -webkit-mask-image:linear-gradient(to right, #000, transparent 75%); mask-image:linear-gradient(to right, #000, transparent 75%); }
.px-title{ background:linear-gradient(90deg,#b4ff2e,#5ef08a 55%,#34d399); -webkit-background-clip:text; background-clip:text; color:transparent; }
.px-perps{ background:linear-gradient(135deg,#b4ff2e,#4ade80); box-shadow:0 0 14px rgba(110,231,120,.3), inset 0 -2px 0 rgba(0,0,0,.18); }
.px-badge{ position:relative; overflow:hidden; isolation:isolate; display:inline-flex; align-items:center; gap:.35em; border-radius:8px; color:#050805;
  background:linear-gradient(110deg,#b4ff2e 0%,#5ef08a 35%,#b4ff2e 70%,#d9ff7a 100%); background-size:220% 100%; animation:pxBadgeShift 5s ease-in-out infinite;
  box-shadow:0 0 16px rgba(150,240,90,.35), inset 0 -2px 0 rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.45); }
.px-badge::after{ content:""; position:absolute; inset:0; z-index:-1; background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%); background-size:250% 100%; animation:pxBadgeSheen 3.2s ease-in-out infinite; }
.px-badge .pc{ transform-origin:50% 100%; animation:pxCandle 1.8s ease-in-out infinite; }
.px-badge .pc:nth-child(2){ animation-delay:.3s; } .px-badge .pc:nth-child(3){ animation-delay:.6s; }
@keyframes pxBadgeShift{ 0%,100%{ background-position:0% 0; } 50%{ background-position:100% 0; } }
@keyframes pxBadgeSheen{ 0%{ background-position:180% 0; } 55%,100%{ background-position:-80% 0; } }
@keyframes pxCandle{ 0%,100%{ transform:scaleY(1); } 50%{ transform:scaleY(.62); } }
html.gfx-lite .px-badge, html.gfx-lite .px-badge::after, html.gfx-lite .px-badge .pc{ animation:none; }
@media (prefers-reduced-motion: reduce){ .px-badge, .px-badge::after, .px-badge .pc{ animation:none; } }
.px-long{ box-shadow:0 0 18px rgba(52,211,153,.45); } .px-short{ box-shadow:0 0 18px rgba(244,63,94,.45); }
.px-flow{ position:relative; height:16px; }
.px-flow::before{ content:""; position:absolute; left:0; right:0; top:50%; height:2px; transform:translateY(-50%); border-radius:2px; background:linear-gradient(90deg, rgba(180,255,46,.2), rgba(180,255,46,.7), rgba(56,189,248,.7)); }
.px-flow i{ position:absolute; top:50%; left:0; width:6px; height:6px; margin-top:-3px; border-radius:50%; background:#b4ff2e; box-shadow:0 0 8px rgba(180,255,46,.7); animation:pxFlow 1.6s linear infinite; opacity:0; }
.px-flow i:nth-child(2){ animation-delay:.53s; } .px-flow i:nth-child(3){ animation-delay:1.06s; }
@keyframes pxFlow{ 0%{ left:0; opacity:0; } 15%{ opacity:1; } 85%{ opacity:1; } 100%{ left:calc(100% - 6px); opacity:0; } }
html.gfx-lite .px-flow i{ animation:none; opacity:0; }
.px-shimmer{ background:linear-gradient(100deg, rgba(180,255,46,.02) 20%, rgba(180,255,46,.07) 40%, rgba(180,255,46,.02) 60%); background-size:220% 100%; animation:pxShim 1.6s linear infinite; }
@keyframes pxShim{ from{ background-position:120% 0; } to{ background-position:-120% 0; } }
.px-up{ animation:pxUp .9s ease-out; } .px-down{ animation:pxDown .9s ease-out; }
@keyframes pxUp{ 0%{ color:#86efac; text-shadow:0 0 14px rgba(52,211,153,.8); } 100%{ text-shadow:none; } }
@keyframes pxDown{ 0%{ color:#fda4af; text-shadow:0 0 14px rgba(244,63,94,.8); } 100%{ text-shadow:none; } }
.px-tab{ position:relative; } .px-tab[data-on="1"]::after{ content:""; position:absolute; left:10px; right:10px; bottom:-1px; height:2px; border-radius:2px; background:linear-gradient(90deg,#b4ff2e,#34d399); box-shadow:0 0 8px rgba(180,255,46,.6); }
.px-row:hover{ background:rgba(255,255,255,.035); }
.px-cta{ background:linear-gradient(135deg,var(--a),var(--b)); box-shadow:0 8px 24px -8px var(--g), inset 0 1px 0 rgba(255,255,255,.35); transition:filter .15s, transform .1s; }
.px-cta:hover:not(:disabled){ filter:brightness(1.08); } .px-cta:active:not(:disabled){ transform:translateY(1px); }
html.gfx-lite .px-shimmer, html.gfx-lite .px-up, html.gfx-lite .px-down{ animation:none; }
@media (prefers-reduced-motion: reduce){ .px-shimmer, .px-up, .px-down{ animation:none !important; } }
.px-range{ -webkit-appearance:none; appearance:none; width:100%; height:20px; background:transparent; cursor:pointer; margin:0; }
.px-range:focus{ outline:none; }
.px-range::-webkit-slider-runnable-track{ height:6px; border-radius:999px; background:linear-gradient(90deg,#3f8f1a 0,#b4ff2e var(--p,50%),rgba(255,255,255,.09) var(--p,50%)); box-shadow:inset 0 0 0 1px rgba(180,255,46,.12); }
.px-range::-webkit-slider-thumb{ -webkit-appearance:none; appearance:none; width:16px; height:16px; margin-top:-5px; border-radius:50%; background:#0b120d; border:2px solid #b4ff2e; box-shadow:0 0 10px rgba(180,255,46,.45); transition:transform .12s; }
.px-range:active::-webkit-slider-thumb{ transform:scale(1.15); }
.px-range::-moz-range-track{ height:6px; border-radius:999px; background:rgba(255,255,255,.09); }
.px-range::-moz-range-progress{ height:6px; border-radius:999px; background:#b4ff2e; }
.px-range::-moz-range-thumb{ width:13px; height:13px; border-radius:50%; background:#0b120d; border:2px solid #b4ff2e; box-shadow:0 0 10px rgba(180,255,46,.45); }
@media (prefers-reduced-motion: reduce){ .px-flow i{ animation:none !important; } }
main .text-lime-50, main .text-lime-100, main .text-lime-200, main .text-lime-300{ color:#b4ff2e; }
main .bg-lime-400, main .bg-lime-300{ background-color:#b4ff2e; }
main .text-amber-200, main .text-amber-100{ color:#fcd34d; }
.px-cta{ color:#06120a; }
/* the calm terminal look (same as the order book): hairline borders, soft hovers, side rails */
.px-card .border-ink-600, .px-card .border-ink-700{ border-color:rgba(255,255,255,.07); }
.px-card .border-ink-800{ border-color:rgba(255,255,255,.04); }
.px-card .bg-ink-800{ background-color:rgba(255,255,255,.04); }
.px-card thead tr{ color:rgba(168,162,158,.75); }
.px-card thead th{ font-size:9px; letter-spacing:.08em; font-weight:600; padding-bottom:6px; border-bottom:1px solid rgba(255,255,255,.05); }
.px-card tbody tr{ transition:background .15s; }
.px-card tbody tr:hover{ background:rgba(255,255,255,.028); }
.px-card tbody td{ padding-top:7px; padding-bottom:7px; }
.px-card tr[data-side] td:first-child{ box-shadow:inset 2px 0 0 var(--rail); }
.px-card tr[data-side="l"]{ --rail:rgba(52,211,153,.6); } .px-card tr[data-side="s"]{ --rail:rgba(244,63,94,.6); }
.px-card .bg-ink-700{ background-color:rgba(255,255,255,.08); }
.px-card .bg-ink-900, .px-card .bg-ink-950{ background-color:rgba(0,0,0,.28); }
.px-card input.field, .px-card .field{ background:rgba(0,0,0,.3); border-color:rgba(255,255,255,.07); border-radius:10px; }
.px-card .field:focus{ border-color:rgba(180,255,46,.45); box-shadow:0 0 0 3px rgba(180,255,46,.08); }
.px-card details > summary{ transition:color .15s; }
.px-card .px-tab{ transition:color .15s; }
.px-card .px-tab:hover{ color:rgba(245,245,244,.9); }
@media (min-width:1024px){ .px-sep > * + *{ border-left:1px solid rgba(255,255,255,.05); padding-left:16px; margin-left:16px; } }
.px-pos{ background:linear-gradient(90deg, rgba(255,255,255,.03), rgba(255,255,255,.01)); box-shadow:inset 0 0 0 1px rgba(255,255,255,.05); transition:background .15s; }
.px-pos:hover{ background:linear-gradient(90deg, rgba(255,255,255,.045), rgba(255,255,255,.015)); }
.px-pos::before{ content:""; position:absolute; left:0; top:10px; bottom:10px; width:2px; border-radius:2px; }
.px-pos-l::before{ background:rgba(52,211,153,.7); } .px-pos-s::before{ background:rgba(244,63,94,.7); }
.px-well{ border-radius:12px; background:rgba(0,0,0,.25); box-shadow:inset 0 0 0 1px rgba(255,255,255,.05); }
.px-kv{ border-radius:9px; background:linear-gradient(90deg, rgba(255,255,255,.035), rgba(255,255,255,.012)); }
`;function f({token:a,size:e=22}){return a==="ELCAS"?r.jsx("img",{src:"./elcasino_logo.png",alt:"",className:"shrink-0 rounded-full ring-1 ring-lime-400/60",style:{width:e,height:e},draggable:!1}):r.jsx("img",{src:"./eth.svg",alt:"",className:"shrink-0 rounded-full bg-[#627eea] p-[3px]",style:{width:e,height:e},draggable:!1})}function h({min:a,max:e,value:t,onChange:o,step:i=1}){const p=e>a?(t-a)/(e-a)*100:0;return r.jsx("input",{type:"range",min:a,max:e,step:i,value:t,onChange:d=>o(Number(d.target.value)),className:"px-range",style:{"--p":`${p}%`}})}function u({value:a,children:e,className:t=""}){const o=n.useRef(null),[i,p]=n.useState(""),[d,x]=n.useState(0);return n.useEffect(()=>{a!=null&&o.current!=null&&a!==o.current&&(p(a>o.current?"px-up":"px-down"),x(b=>b+1)),o.current=a},[a]),r.jsx("span",{className:`${i} ${t}`,children:e},d)}function m({small:a=!1,className:e=""}){const t=a?11:14;return r.jsxs("span",{className:`px-badge font-black tracking-[0.18em] ${a?"px-2 py-0.5 text-[12px]":"px-2.5 py-[3px] text-[13px] sm:text-[15px]"} ${e}`,children:[r.jsxs("svg",{viewBox:"0 0 14 14",width:t,height:t,"aria-hidden":!0,fill:"currentColor",children:[r.jsx("rect",{className:"pc",x:"1",y:"5",width:"3",height:"8",rx:".6"}),r.jsx("rect",{className:"pc",x:"5.5",y:"2",width:"3",height:"11",rx:".6"}),r.jsx("rect",{className:"pc",x:"10",y:"6.5",width:"3",height:"6.5",rx:".6"})]}),"PERPS"]})}function k({page:a,pages:e,setPage:t}){const o="grid h-6 w-6 place-items-center rounded-md text-bone-400 transition hover:bg-white/5 hover:text-bone-50 disabled:opacity-30 disabled:hover:bg-transparent";return r.jsxs("div",{className:"flex shrink-0 items-center justify-center gap-2 border-t border-white/5 px-2 py-1.5 font-mono text-[10.5px] text-bone-400",children:[r.jsx("button",{type:"button","aria-label":"Previous page",disabled:a<=0,onClick:()=>t(a-1),className:o,children:r.jsx(s,{size:13,className:"rotate-90"})}),r.jsxs("span",{className:"tabular-nums",children:[a+1," / ",e]}),r.jsx("button",{type:"button","aria-label":"Next page",disabled:a>=e-1,onClick:()=>t(a+1),className:o,children:r.jsx(s,{size:13,className:"-rotate-90"})})]})}export{u as F,k as M,c as P,h as R,f as T,m as a};
