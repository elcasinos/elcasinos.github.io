import{r as s,j as e}from"./vendor-react-Dw-pcWBf.js";import{k as x,g as y,s as C,_ as j,b as l}from"./privyHost-Cvd-gicO.js";import{n as b}from"./styles-DVyDvTdj-UrFi_rDP.js";import{i as a,l as c,s as u}from"./styles-tjTwTW2h-JbHnqdno.js";import{bM as d,bN as g,bO as w}from"./vendor-icons-C8Uws_5i.js";import"./index-CZsIgxSU.js";import"./preload-helper-C1FmrZbK.js";import"./vendor-ethers-DExdCeEr.js";import"./vendor-supabase-kOjTseMU.js";import"./vendor-wagmi-BXbL8uxF.js";import"./ScreenLayout-DTsWfKKs-Cv3BcPQn.js";import"./ModalFooter-DKyozrEX-DTE6M29K.js";import"./Screen-DMmH56yL-TrqTyPsc.js";import"./index-CWARkn2w-D8D5VWeu.js";const z={component:()=>{let r=x(),{onUserCloseViaDialogOrKeybindRef:n}=y(),h=C(),t=s.useRef(!1);s.useEffect(()=>{r&&(t.current=!1)},[r]);let o=s.useCallback(async()=>{!t.current&&r&&(t.current=!0,j(),await r.onCancel())},[r]);return s.useEffect(()=>(n.current=o,()=>{n.current===o&&(n.current=null)}),[o,n]),r?r.error?e.jsx(a,{icon:d,iconVariant:"warning",title:"Unable to add funds",subtitle:r.error,showClose:!0,onClose:o,primaryCta:{label:"Close",onClick:o}}):e.jsx(a,{icon:d,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:!0,onClose:o,children:e.jsxs(b,{style:{marginTop:"1rem"},$colorScheme:h.appearance.palette.colorScheme,children:[r.startFiat&&e.jsxs(c,{onClick:async()=>{var i;t.current||(t.current=!0,await((i=r.startFiat)==null?void 0:i.call(r)))},children:[e.jsx(m,{children:e.jsx(g,{})}),e.jsxs(p,{children:[e.jsx(u,{children:"Pay with fiat"}),e.jsx(f,{children:"Apple Pay, Google Pay, or debit card"})]})]}),r.startCrypto&&e.jsxs(c,{onClick:async()=>{var i;t.current||(t.current=!0,await((i=r.startCrypto)==null?void 0:i.call(r)))},children:[e.jsx(m,{children:e.jsx(w,{})}),e.jsxs(p,{children:[e.jsx(u,{children:"Transfer from wallet"}),e.jsx(f,{children:"Send crypto from any wallet"})]})]})]})}):null}};let m=l.span`
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
`;export{z as AddFundsSelectionScreen,z as default};
