import{fS as k,fb as M,f9 as N,dk as r,hZ as O,fY as E,gU as C,gV as b,dl as a,fO as z,ft as p,g0 as I,h_ as q,h$ as P}from"./index-B5z1r2tA.js";import{h as $}from"./CopyToClipboard-i_OQSBJr-BIRDhGv3.js";import{d as F}from"./Layouts-BMRfo5hw-4Mq3Vzak.js";import{a as V,i as H}from"./JsonTree-BHzNC-ic-DqWyqMaz.js";import{n as J}from"./ScreenLayout-DTsWfKKs-CT-bIfYU.js";import{c as U}from"./createLucideIcon-CfJSllxl.js";import"./ModalFooter-DKyozrEX-BDBBb-3k.js";import"./Screen-DMmH56yL-BG7LE4YA.js";import"./index-CWARkn2w-DUlOYVvD.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Q=U("square-pen",K),W=p.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let Y=e=>{if(!I(e))return e;try{let s=q(e);return s.includes("�")?e:s}catch{return e}},Z=e=>{try{let s=P.decode(e),i=new TextDecoder().decode(s);return i.includes("�")?e:i}catch{return e}},B=e=>{let{types:s,primaryType:i,...l}=e.typedData;return a.jsxs(a.Fragment,{children:[a.jsx(te,{data:l}),a.jsx($,{text:(o=e.typedData,JSON.stringify(o,null,2)),itemName:"full payload to clipboard"})," "]});var o};const G=({method:e,messageData:s,copy:i,iconUrl:l,isLoading:o,success:g,walletProxyIsLoading:m,errorMessage:h,isCancellable:d,onSign:c,onCancel:f,onClose:u})=>a.jsx(J,{title:i.title,subtitle:i.description,showClose:!0,onClose:u,icon:Q,iconVariant:"subtle",helpText:h?a.jsx(ee,{children:h}):void 0,primaryCta:{label:i.buttonText,onClick:c,disabled:o||g||m,loading:o},secondaryCta:d?{label:"Not now",onClick:f,disabled:o||g||m}:void 0,watermark:!0,children:a.jsxs(F,{children:[l?a.jsx(W,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,a.jsxs(X,{children:[e==="personal_sign"&&a.jsx(w,{children:Y(s)}),e==="eth_signTypedData_v4"&&a.jsx(B,{typedData:s}),e==="solana_signMessage"&&a.jsx(w,{children:Z(s)})]})]})}),ue={component:()=>{let{authenticated:e}=k(),{initializeWalletProxy:s,closePrivyModal:i}=M(),{navigate:l,data:o,onUserCloseViaDialogOrKeybindRef:g}=N(),[m,h]=r.useState(!0),[d,c]=r.useState(""),[f,u]=r.useState(),[y,T]=r.useState(null),[_,S]=r.useState(!1);r.useEffect(()=>{e||l("LandingScreen")},[e]),r.useEffect(()=>{s(O).then(n=>{h(!1),n||(c("An error has occurred, please try again."),u(new E(new C(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:R,data:v,confirmAndSign:j,onSuccess:D,onFailure:L,uiOptions:t}=o.signMessage,A={title:(t==null?void 0:t.title)||"Sign message",description:(t==null?void 0:t.description)||"Signing this message will not cost you any fees.",buttonText:(t==null?void 0:t.buttonText)||"Sign and continue"},x=n=>{n?D(n):L(f||new E(new C("The user rejected the request.",b.E4001_USER_REJECTED_REQUEST.eipCode))),i({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{T(null),c(""),u(void 0)},200)};return g.current=()=>{x(y)},a.jsx(G,{method:R,messageData:v,copy:A,iconUrl:t!=null&&t.iconUrl&&typeof t.iconUrl=="string"?t.iconUrl:void 0,isLoading:_,success:y!==null,walletProxyIsLoading:m,errorMessage:d,isCancellable:t==null?void 0:t.isCancellable,onSign:async()=>{S(!0),c("");try{let n=await j();T(n),S(!1),setTimeout(()=>{x(n)},z)}catch(n){console.error(n),c("An error has occurred, please try again."),u(new E(new C(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>x(null),onClose:()=>x(y)})}};let X=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ee=p.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,te=p(V)`
  margin-top: 0;
`,w=p(H)`
  margin-top: 0;
`;export{ue as SignRequestScreen,G as SignRequestView,ue as default};
