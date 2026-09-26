import{r as s,j as e}from"./vendor-react-Dw-pcWBf.js";import{m as x,b as y,a as C,n as j,i as a}from"./privyHost-Db5WiOT-.js";import{n as g}from"./styles-DVyDvTdj-J5D5KZMO.js";import{i as l,l as c,s as u}from"./styles-tjTwTW2h-HqkQnEw3.js";import"./vendor-wagmi-B1Ud2aV8.js";import{aW as d,aX as b,aY as w}from"./vendor-icons-Dvai9xh2.js";import"./index-SfUyUg-A.js";import"./vendor-query-CymX7U7d.js";import"./vendor-ethers-CusRo0PP.js";import"./ScreenLayout-DTsWfKKs-Ba7UD95H.js";import"./ModalFooter-DKyozrEX-BJRoLd1o.js";import"./Screen-DMmH56yL-D0dbxhSE.js";import"./index-CWARkn2w-DwZ_ZJRl.js";const B={component:()=>{let r=x(),{onUserCloseViaDialogOrKeybindRef:i}=y(),h=C(),t=s.useRef(!1);s.useEffect(()=>{r&&(t.current=!1)},[r]);let o=s.useCallback(async()=>{!t.current&&r&&(t.current=!0,j(),await r.onCancel())},[r]);return s.useEffect(()=>(i.current=o,()=>{i.current===o&&(i.current=null)}),[o,i]),r?r.error?e.jsx(l,{icon:d,iconVariant:"warning",title:"Unable to add funds",subtitle:r.error,showClose:!0,onClose:o,primaryCta:{label:"Close",onClick:o}}):e.jsx(l,{icon:d,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:!0,onClose:o,children:e.jsxs(g,{style:{marginTop:"1rem"},$colorScheme:h.appearance.palette.colorScheme,children:[r.startFiat&&e.jsxs(c,{onClick:async()=>{var n;t.current||(t.current=!0,await((n=r.startFiat)==null?void 0:n.call(r)))},children:[e.jsx(m,{children:e.jsx(b,{})}),e.jsxs(p,{children:[e.jsx(u,{children:"Pay with fiat"}),e.jsx(f,{children:"Apple Pay, Google Pay, or debit card"})]})]}),r.startCrypto&&e.jsxs(c,{onClick:async()=>{var n;t.current||(t.current=!0,await((n=r.startCrypto)==null?void 0:n.call(r)))},children:[e.jsx(m,{children:e.jsx(w,{})}),e.jsxs(p,{children:[e.jsx(u,{children:"Transfer from wallet"}),e.jsx(f,{children:"Send crypto from any wallet"})]})]})]})}):null}};let m=a.span`
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
