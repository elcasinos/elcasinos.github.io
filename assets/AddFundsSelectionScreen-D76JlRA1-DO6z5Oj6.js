import{r as s,j as e}from"./vendor-react-DSMResu1.js";import{m as x,b as y,a as C,n as j,i as a}from"./privyHost-02JqVeNC.js";import{n as g}from"./styles-DVyDvTdj-BRgZ6rkA.js";import{i as l,l as c,s as u}from"./styles-tjTwTW2h-dyZ60K-2.js";import"./vendor-wagmi-OILVNHfs.js";import{aV as d,aW as b,aX as w}from"./vendor-icons-Bl9VIV1I.js";import"./index-D76zBJ4x.js";import"./vendor-query-DxDSQ3I8.js";import"./vendor-ethers-Cg-evgET.js";import"./vendor-charts-CYZL7y4I.js";import"./ScreenLayout-DTsWfKKs-DLZchEiR.js";import"./ModalFooter-DKyozrEX-DqDog1Rc.js";import"./Screen-DMmH56yL-DQqQzjcw.js";import"./index-CWARkn2w-DaVA3uS0.js";const D={component:()=>{let r=x(),{onUserCloseViaDialogOrKeybindRef:n}=y(),h=C(),t=s.useRef(!1);s.useEffect(()=>{r&&(t.current=!1)},[r]);let o=s.useCallback(async()=>{!t.current&&r&&(t.current=!0,j(),await r.onCancel())},[r]);return s.useEffect(()=>(n.current=o,()=>{n.current===o&&(n.current=null)}),[o,n]),r?r.error?e.jsx(l,{icon:d,iconVariant:"warning",title:"Unable to add funds",subtitle:r.error,showClose:!0,onClose:o,primaryCta:{label:"Close",onClick:o}}):e.jsx(l,{icon:d,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:!0,onClose:o,children:e.jsxs(g,{style:{marginTop:"1rem"},$colorScheme:h.appearance.palette.colorScheme,children:[r.startFiat&&e.jsxs(c,{onClick:async()=>{var i;t.current||(t.current=!0,await((i=r.startFiat)==null?void 0:i.call(r)))},children:[e.jsx(m,{children:e.jsx(b,{})}),e.jsxs(p,{children:[e.jsx(u,{children:"Pay with fiat"}),e.jsx(f,{children:"Apple Pay, Google Pay, or debit card"})]})]}),r.startCrypto&&e.jsxs(c,{onClick:async()=>{var i;t.current||(t.current=!0,await((i=r.startCrypto)==null?void 0:i.call(r)))},children:[e.jsx(m,{children:e.jsx(w,{})}),e.jsxs(p,{children:[e.jsx(u,{children:"Transfer from wallet"}),e.jsx(f,{children:"Send crypto from any wallet"})]})]})]})}):null}};let m=a.span`
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
`;export{D as AddFundsSelectionScreen,D as default};
