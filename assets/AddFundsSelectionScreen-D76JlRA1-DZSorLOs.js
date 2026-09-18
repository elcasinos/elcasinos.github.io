import{hh as x,eX as y,eY as C,dl as s,hi as g,dm as r,fl as l}from"./index-COHk665N.js";import{n as j}from"./styles-DVyDvTdj-CAzhZyML.js";import{i as a,l as c,s as d,Q as w}from"./styles-tjTwTW2h-75sfKzZR.js";import{c as b}from"./createLucideIcon-BLcblzxf.js";import{C as k}from"./credit-card-B3d33p65.js";import"./ScreenLayout-DTsWfKKs-BYfbLe6y.js";import"./ModalFooter-DKyozrEX-DreVtjcF.js";import"./Screen-DMmH56yL-DM1xecES.js";import"./index-CWARkn2w-Ct2XKxuC.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],u=b("banknote",v),M={component:()=>{let e=x(),{onUserCloseViaDialogOrKeybindRef:i}=y(),p=C(),t=s.useRef(!1);s.useEffect(()=>{e&&(t.current=!1)},[e]);let o=s.useCallback(async()=>{!t.current&&e&&(t.current=!0,g(),await e.onCancel())},[e]);return s.useEffect(()=>(i.current=o,()=>{i.current===o&&(i.current=null)}),[o,i]),e?e.error?r.jsx(a,{icon:u,iconVariant:"warning",title:"Unable to add funds",subtitle:e.error,showClose:!0,onClose:o,primaryCta:{label:"Close",onClick:o}}):r.jsx(a,{icon:u,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:!0,onClose:o,children:r.jsxs(j,{style:{marginTop:"1rem"},$colorScheme:p.appearance.palette.colorScheme,children:[e.startFiat&&r.jsxs(c,{onClick:async()=>{var n;t.current||(t.current=!0,await((n=e.startFiat)==null?void 0:n.call(e)))},children:[r.jsx(h,{children:r.jsx(k,{})}),r.jsxs(m,{children:[r.jsx(d,{children:"Pay with fiat"}),r.jsx(f,{children:"Apple Pay, Google Pay, or debit card"})]})]}),e.startCrypto&&r.jsxs(c,{onClick:async()=>{var n;t.current||(t.current=!0,await((n=e.startCrypto)==null?void 0:n.call(e)))},children:[r.jsx(h,{children:r.jsx(w,{})}),r.jsxs(m,{children:[r.jsx(d,{children:"Transfer from wallet"}),r.jsx(f,{children:"Send crypto from any wallet"})]})]})]})}):null}};let h=l.span`
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
`,m=l.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,f=l.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;export{M as AddFundsSelectionScreen,M as default};
