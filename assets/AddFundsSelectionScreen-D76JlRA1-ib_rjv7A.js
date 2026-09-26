import{r as s,j as e}from"./vendor-react-Dw-pcWBf.js";import{m as x,b as y,a as C,n as j,i as a}from"./privyHost-TYhCn0ho.js";import{n as g}from"./styles-DVyDvTdj-9iEjysi7.js";import{i as l,l as c,s as u}from"./styles-tjTwTW2h-DHUern63.js";import"./vendor-wagmi-B1Ud2aV8.js";import{aV as d,aW as b,aX as w}from"./vendor-icons-CaM6nBRi.js";import"./index-CpTLJ7sb.js";import"./vendor-query-CymX7U7d.js";import"./vendor-ethers-Bhe0LPGS.js";import"./ScreenLayout-DTsWfKKs-BtE3vYz4.js";import"./ModalFooter-DKyozrEX-BIAKrTvv.js";import"./Screen-DMmH56yL-Cd792YXs.js";import"./index-CWARkn2w-Bl1itpQW.js";const B={component:()=>{let r=x(),{onUserCloseViaDialogOrKeybindRef:i}=y(),h=C(),t=s.useRef(!1);s.useEffect(()=>{r&&(t.current=!1)},[r]);let o=s.useCallback(async()=>{!t.current&&r&&(t.current=!0,j(),await r.onCancel())},[r]);return s.useEffect(()=>(i.current=o,()=>{i.current===o&&(i.current=null)}),[o,i]),r?r.error?e.jsx(l,{icon:d,iconVariant:"warning",title:"Unable to add funds",subtitle:r.error,showClose:!0,onClose:o,primaryCta:{label:"Close",onClick:o}}):e.jsx(l,{icon:d,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:!0,onClose:o,children:e.jsxs(g,{style:{marginTop:"1rem"},$colorScheme:h.appearance.palette.colorScheme,children:[r.startFiat&&e.jsxs(c,{onClick:async()=>{var n;t.current||(t.current=!0,await((n=r.startFiat)==null?void 0:n.call(r)))},children:[e.jsx(m,{children:e.jsx(b,{})}),e.jsxs(p,{children:[e.jsx(u,{children:"Pay with fiat"}),e.jsx(f,{children:"Apple Pay, Google Pay, or debit card"})]})]}),r.startCrypto&&e.jsxs(c,{onClick:async()=>{var n;t.current||(t.current=!0,await((n=r.startCrypto)==null?void 0:n.call(r)))},children:[e.jsx(m,{children:e.jsx(w,{})}),e.jsxs(p,{children:[e.jsx(u,{children:"Transfer from wallet"}),e.jsx(f,{children:"Send crypto from any wallet"})]})]})]})}):null}};let m=a.span`
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
`,p=a.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,f=a.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;export{B as AddFundsSelectionScreen,B as default};
