import{fE as M,eZ as k,eX as N,dl as r,hF as O,fK as E,gG as C,gH as T,dm as a,fA as z,fl as p,fO as I,hG as q,hH as F}from"./index-DtUZColC.js";import{h as P}from"./CopyToClipboard-i_OQSBJr-BV--57X8.js";import{d as H}from"./Layouts-BMRfo5hw-CEVwEW0e.js";import{a as $,i as V}from"./JsonTree-BHzNC-ic-eOttisq5.js";import{n as G}from"./ScreenLayout-DTsWfKKs-Dkp9pbJI.js";import{c as J}from"./createLucideIcon-LOZq4_j2.js";import"./ModalFooter-DKyozrEX-I2JuoEPh.js";import"./Screen-DMmH56yL-Cx35tvfR.js";import"./index-CWARkn2w-DfzSBQek.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Q=J("square-pen",K),U=p.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let W=e=>{if(!I(e))return e;try{let s=q(e);return s.includes("�")?e:s}catch{return e}},X=e=>{try{let s=F.decode(e),i=new TextDecoder().decode(s);return i.includes("�")?e:i}catch{return e}},Z=e=>{let{types:s,primaryType:i,...l}=e.typedData;return a.jsxs(a.Fragment,{children:[a.jsx(te,{data:l}),a.jsx(P,{text:(o=e.typedData,JSON.stringify(o,null,2)),itemName:"full payload to clipboard"})," "]});var o};const B=({method:e,messageData:s,copy:i,iconUrl:l,isLoading:o,success:g,walletProxyIsLoading:m,errorMessage:h,isCancellable:d,onSign:c,onCancel:f,onClose:u})=>a.jsx(G,{title:i.title,subtitle:i.description,showClose:!0,onClose:u,icon:Q,iconVariant:"subtle",helpText:h?a.jsx(ee,{children:h}):void 0,primaryCta:{label:i.buttonText,onClick:c,disabled:o||g||m,loading:o},secondaryCta:d?{label:"Not now",onClick:f,disabled:o||g||m}:void 0,watermark:!0,children:a.jsxs(H,{children:[l?a.jsx(U,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,a.jsxs(Y,{children:[e==="personal_sign"&&a.jsx(w,{children:W(s)}),e==="eth_signTypedData_v4"&&a.jsx(Z,{typedData:s}),e==="solana_signMessage"&&a.jsx(w,{children:X(s)})]})]})}),ue={component:()=>{let{authenticated:e}=M(),{initializeWalletProxy:s,closePrivyModal:i}=k(),{navigate:l,data:o,onUserCloseViaDialogOrKeybindRef:g}=N(),[m,h]=r.useState(!0),[d,c]=r.useState(""),[f,u]=r.useState(),[y,b]=r.useState(null),[R,S]=r.useState(!1);r.useEffect(()=>{e||l("LandingScreen")},[e]),r.useEffect(()=>{s(O).then(n=>{h(!1),n||(c("An error has occurred, please try again."),u(new E(new C(d,T.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:_,data:v,confirmAndSign:j,onSuccess:D,onFailure:A,uiOptions:t}=o.signMessage,L={title:(t==null?void 0:t.title)||"Sign message",description:(t==null?void 0:t.description)||"Signing this message will not cost you any fees.",buttonText:(t==null?void 0:t.buttonText)||"Sign and continue"},x=n=>{n?D(n):A(f||new E(new C("The user rejected the request.",T.E4001_USER_REJECTED_REQUEST.eipCode))),i({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{b(null),c(""),u(void 0)},200)};return g.current=()=>{x(y)},a.jsx(B,{method:_,messageData:v,copy:L,iconUrl:t!=null&&t.iconUrl&&typeof t.iconUrl=="string"?t.iconUrl:void 0,isLoading:R,success:y!==null,walletProxyIsLoading:m,errorMessage:d,isCancellable:t==null?void 0:t.isCancellable,onSign:async()=>{S(!0),c("");try{let n=await j();b(n),S(!1),setTimeout(()=>{x(n)},z)}catch(n){console.error(n),c("An error has occurred, please try again."),u(new E(new C(d,T.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>x(null),onClose:()=>x(y)})}};let Y=p.div`
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
`,te=p($)`
  margin-top: 0;
`,w=p(V)`
  margin-top: 0;
`;export{ue as SignRequestScreen,B as SignRequestView,ue as default};
