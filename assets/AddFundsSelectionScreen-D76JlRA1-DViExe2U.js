import{r as s,j as e}from"./vendor-react-Df0SfSI6.js";import{k as x,g as y,s as C,_ as j,b as l}from"./privyHost-P_3g8Mdk.js";import{n as b}from"./styles-DVyDvTdj-D-7lsPMr.js";import{i as a,l as c,s as m}from"./styles-tjTwTW2h-C0xGqXrB.js";import"./hooks.module-BjwsZOoR.js";import{bU as u,bV as g,bW as w}from"./vendor-icons-CnhLjC4p.js";import"./index-BXBMNjGf.js";import"./preload-helper-C1FmrZbK.js";import"./vendor-ethers-Crfx5rr9.js";import"./vendor-supabase-kOjTseMU.js";import"./vendor-wagmi-5xrLe7nK.js";import"./index.es-D3K2Hu6N.js";import"./browser-ponyfill-DVXcND2N.js";import"./ScreenLayout-DTsWfKKs-DTdsaFZl.js";import"./ModalFooter-DKyozrEX-CzGBj5WB.js";import"./Screen-DMmH56yL-g2oetu3N.js";import"./index-CWARkn2w-hiPKuA9_.js";const K={component:()=>{let r=x(),{onUserCloseViaDialogOrKeybindRef:n}=y(),h=C(),t=s.useRef(!1);s.useEffect(()=>{r&&(t.current=!1)},[r]);let o=s.useCallback(async()=>{!t.current&&r&&(t.current=!0,j(),await r.onCancel())},[r]);return s.useEffect(()=>(n.current=o,()=>{n.current===o&&(n.current=null)}),[o,n]),r?r.error?e.jsx(a,{icon:u,iconVariant:"warning",title:"Unable to add funds",subtitle:r.error,showClose:!0,onClose:o,primaryCta:{label:"Close",onClick:o}}):e.jsx(a,{icon:u,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:!0,onClose:o,children:e.jsxs(b,{style:{marginTop:"1rem"},$colorScheme:h.appearance.palette.colorScheme,children:[r.startFiat&&e.jsxs(c,{onClick:async()=>{var i;t.current||(t.current=!0,await((i=r.startFiat)==null?void 0:i.call(r)))},children:[e.jsx(d,{children:e.jsx(g,{})}),e.jsxs(p,{children:[e.jsx(m,{children:"Pay with fiat"}),e.jsx(f,{children:"Apple Pay, Google Pay, or debit card"})]})]}),r.startCrypto&&e.jsxs(c,{onClick:async()=>{var i;t.current||(t.current=!0,await((i=r.startCrypto)==null?void 0:i.call(r)))},children:[e.jsx(d,{children:e.jsx(w,{})}),e.jsxs(p,{children:[e.jsx(m,{children:"Transfer from wallet"}),e.jsx(f,{children:"Send crypto from any wallet"})]})]})]})}):null}};let d=l.span`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-icon-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`,p=l.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,f=l.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;export{K as AddFundsSelectionScreen,K as default};
