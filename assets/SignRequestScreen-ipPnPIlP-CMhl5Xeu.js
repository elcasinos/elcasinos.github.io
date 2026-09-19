import{ap as o,ar as a}from"./index-DU4alX5q.js";import{cN as M,c7 as N,c5 as k,eq as O,cT as E,dQ as C,dR as T,cJ as q,cb as u,cX as z,er as I,es as P}from"./privyHost-qA3x5rf5.js";import{h as F}from"./CopyToClipboard-i_OQSBJr-ILKgdkcY.js";import{d as $}from"./Layouts-BMRfo5hw-Ag4RyEa4.js";import{a as J,i as V}from"./JsonTree-BHzNC-ic-kXZq4PnL.js";import{n as H}from"./ScreenLayout-DTsWfKKs-B7Jk97iD.js";import{c as Q}from"./createLucideIcon-TorIJRCr.js";import"./ModalFooter-DKyozrEX-BQ_N8ITH.js";import"./Screen-DMmH56yL-eDfpoA6u.js";import"./index-CWARkn2w-B1Em5qN4.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],U=Q("square-pen",K),W=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let X=e=>{if(!z(e))return e;try{let s=I(e);return s.includes("�")?e:s}catch{return e}},B=e=>{try{let s=P.decode(e),i=new TextDecoder().decode(s);return i.includes("�")?e:i}catch{return e}},G=e=>{let{types:s,primaryType:i,...l}=e.typedData;return a.jsxs(a.Fragment,{children:[a.jsx(te,{data:l}),a.jsx(F,{text:(r=e.typedData,JSON.stringify(r,null,2)),itemName:"full payload to clipboard"})," "]});var r};const Y=({method:e,messageData:s,copy:i,iconUrl:l,isLoading:r,success:g,walletProxyIsLoading:m,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>a.jsx(H,{title:i.title,subtitle:i.description,showClose:!0,onClose:p,icon:U,iconVariant:"subtle",helpText:x?a.jsx(ee,{children:x}):void 0,primaryCta:{label:i.buttonText,onClick:c,disabled:r||g||m,loading:r},secondaryCta:d?{label:"Not now",onClick:y,disabled:r||g||m}:void 0,watermark:!0,children:a.jsxs($,{children:[l?a.jsx(W,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,a.jsxs(Z,{children:[e==="personal_sign"&&a.jsx(w,{children:X(s)}),e==="eth_signTypedData_v4"&&a.jsx(G,{typedData:s}),e==="solana_signMessage"&&a.jsx(w,{children:B(s)})]})]})}),ue={component:()=>{let{authenticated:e}=M(),{initializeWalletProxy:s,closePrivyModal:i}=N(),{navigate:l,data:r,onUserCloseViaDialogOrKeybindRef:g}=k(),[m,x]=o.useState(!0),[d,c]=o.useState(""),[y,p]=o.useState(),[f,b]=o.useState(null),[R,S]=o.useState(!1);o.useEffect(()=>{e||l("LandingScreen")},[e]),o.useEffect(()=>{s(O).then(n=>{x(!1),n||(c("An error has occurred, please try again."),p(new E(new C(d,T.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:_,data:v,confirmAndSign:j,onSuccess:D,onFailure:L,uiOptions:t}=r.signMessage,A={title:(t==null?void 0:t.title)||"Sign message",description:(t==null?void 0:t.description)||"Signing this message will not cost you any fees.",buttonText:(t==null?void 0:t.buttonText)||"Sign and continue"},h=n=>{n?D(n):L(y||new E(new C("The user rejected the request.",T.E4001_USER_REJECTED_REQUEST.eipCode))),i({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{b(null),c(""),p(void 0)},200)};return g.current=()=>{h(f)},a.jsx(Y,{method:_,messageData:v,copy:A,iconUrl:t!=null&&t.iconUrl&&typeof t.iconUrl=="string"?t.iconUrl:void 0,isLoading:R,success:f!==null,walletProxyIsLoading:m,errorMessage:d,isCancellable:t==null?void 0:t.isCancellable,onSign:async()=>{S(!0),c("");try{let n=await j();b(n),S(!1),setTimeout(()=>{h(n)},q)}catch(n){console.error(n),c("An error has occurred, please try again."),p(new E(new C(d,T.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let Z=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ee=u.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,te=u(J)`
  margin-top: 0;
`,w=u(V)`
  margin-top: 0;
`;export{ue as SignRequestScreen,Y as SignRequestView,ue as default};
