import{an as i,as as e}from"./index-Fwy_ge9F.js";import{e2 as x,c5 as y,c6 as C,e3 as g,c7 as a}from"./privyHost-DbU8jPGD.js";import{n as j}from"./styles-DVyDvTdj-BPLj8tT1.js";import{i as l,l as c,s as d,Q as w}from"./styles-tjTwTW2h-DAJAqv_b.js";import{c as b}from"./createLucideIcon-DOBb2JG-.js";import{C as k}from"./credit-card-BsjCBun0.js";import"./ScreenLayout-DTsWfKKs-BlMADx4G.js";import"./ModalFooter-DKyozrEX-B_mZJQ65.js";import"./Screen-DMmH56yL-0QaVYlzz.js";import"./index-CWARkn2w-CMczv_t3.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],u=b("banknote",v),Q={component:()=>{let r=x(),{onUserCloseViaDialogOrKeybindRef:s}=y(),f=C(),t=i.useRef(!1);i.useEffect(()=>{r&&(t.current=!1)},[r]);let o=i.useCallback(async()=>{!t.current&&r&&(t.current=!0,g(),await r.onCancel())},[r]);return i.useEffect(()=>(s.current=o,()=>{s.current===o&&(s.current=null)}),[o,s]),r?r.error?e.jsx(l,{icon:u,iconVariant:"warning",title:"Unable to add funds",subtitle:r.error,showClose:!0,onClose:o,primaryCta:{label:"Close",onClick:o}}):e.jsx(l,{icon:u,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:!0,onClose:o,children:e.jsxs(j,{style:{marginTop:"1rem"},$colorScheme:f.appearance.palette.colorScheme,children:[r.startFiat&&e.jsxs(c,{onClick:async()=>{var n;t.current||(t.current=!0,await((n=r.startFiat)==null?void 0:n.call(r)))},children:[e.jsx(m,{children:e.jsx(k,{})}),e.jsxs(h,{children:[e.jsx(d,{children:"Pay with fiat"}),e.jsx(p,{children:"Apple Pay, Google Pay, or debit card"})]})]}),r.startCrypto&&e.jsxs(c,{onClick:async()=>{var n;t.current||(t.current=!0,await((n=r.startCrypto)==null?void 0:n.call(r)))},children:[e.jsx(m,{children:e.jsx(w,{})}),e.jsxs(h,{children:[e.jsx(d,{children:"Transfer from wallet"}),e.jsx(p,{children:"Send crypto from any wallet"})]})]})]})}):null}};let m=a.span`
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
`,h=a.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,p=a.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;export{Q as AddFundsSelectionScreen,Q as default};
