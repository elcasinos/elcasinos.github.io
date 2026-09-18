import{hB as x,f9 as y,fa as C,dk as i,hC as g,dl as e,ft as l}from"./index-B5z1r2tA.js";import{n as j}from"./styles-DVyDvTdj-C87eDO99.js";import{i as a,l as c,s as d,Q as k}from"./styles-tjTwTW2h-B3EEKGkd.js";import{c as w}from"./createLucideIcon-CfJSllxl.js";import{C as b}from"./credit-card-B9L5Ov-m.js";import"./ScreenLayout-DTsWfKKs-CT-bIfYU.js";import"./ModalFooter-DKyozrEX-BDBBb-3k.js";import"./Screen-DMmH56yL-BG7LE4YA.js";import"./index-CWARkn2w-DUlOYVvD.js";/**
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
