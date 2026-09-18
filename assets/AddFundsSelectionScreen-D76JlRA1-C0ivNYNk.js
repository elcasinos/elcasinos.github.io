import{hA as x,f8 as y,f9 as C,dk as i,hB as g,dl as e,fs as l}from"./index-26z5Yfo3.js";import{n as j}from"./styles-DVyDvTdj-BrPobwUP.js";import{i as a,l as c,s as d,Q as k}from"./styles-tjTwTW2h-Bvm6i94p.js";import{c as w}from"./createLucideIcon-Dzgf3fLk.js";import{C as b}from"./credit-card-Dl9fYCND.js";import"./ScreenLayout-DTsWfKKs-Dhqj4fla.js";import"./ModalFooter-DKyozrEX-BF-lHNKI.js";import"./Screen-DMmH56yL-CqxrIlBw.js";import"./index-CWARkn2w-iGo3LWCP.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],u=w("banknote",v),B={component:()=>{let r=x(),{onUserCloseViaDialogOrKeybindRef:s}=y(),p=C(),t=i.useRef(!1);i.useEffect(()=>{r&&(t.current=!1)},[r]);let o=i.useCallback(async()=>{!t.current&&r&&(t.current=!0,g(),await r.onCancel())},[r]);return i.useEffect(()=>(s.current=o,()=>{s.current===o&&(s.current=null)}),[o,s]),r?r.error?e.jsx(a,{icon:u,iconVariant:"warning",title:"Unable to add funds",subtitle:r.error,showClose:!0,onClose:o,primaryCta:{label:"Close",onClick:o}}):e.jsx(a,{icon:u,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:!0,onClose:o,children:e.jsxs(j,{style:{marginTop:"1rem"},$colorScheme:p.appearance.palette.colorScheme,children:[r.startFiat&&e.jsxs(c,{onClick:async()=>{var n;t.current||(t.current=!0,await((n=r.startFiat)==null?void 0:n.call(r)))},children:[e.jsx(h,{children:e.jsx(b,{})}),e.jsxs(f,{children:[e.jsx(d,{children:"Pay with fiat"}),e.jsx(m,{children:"Apple Pay, Google Pay, or debit card"})]})]}),r.startCrypto&&e.jsxs(c,{onClick:async()=>{var n;t.current||(t.current=!0,await((n=r.startCrypto)==null?void 0:n.call(r)))},children:[e.jsx(h,{children:e.jsx(k,{})}),e.jsxs(f,{children:[e.jsx(d,{children:"Transfer from wallet"}),e.jsx(m,{children:"Send crypto from any wallet"})]})]})]})}):null}};let h=l.span`
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
`,f=l.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,m=l.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;export{B as AddFundsSelectionScreen,B as default};
