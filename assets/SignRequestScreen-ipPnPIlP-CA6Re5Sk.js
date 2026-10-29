import{r as n,j as i}from"./vendor-react-Df0SfSI6.js";import{N,_ as M,b as O}from"./vendor-wagmi-5xrLe7nK.js";import{d as k,l as z,g as I,bv as P,an as E,cA as b,cB as C,o as q,b as u}from"./privyHost-P_3g8Mdk.js";import{h as F}from"./CopyToClipboard-i_OQSBJr-DwsPy8Ey.js";import{d as $}from"./Layouts-BMRfo5hw-Buc1b547.js";import{a as V,i as J}from"./JsonTree-BHzNC-ic-Cr9Khx0K.js";import{n as B}from"./ScreenLayout-DTsWfKKs-DTdsaFZl.js";import"./hooks.module-BjwsZOoR.js";import{cu as H}from"./vendor-icons-CnhLjC4p.js";import"./preload-helper-C1FmrZbK.js";import"./index-BXBMNjGf.js";import"./vendor-ethers-Crfx5rr9.js";import"./vendor-supabase-kOjTseMU.js";import"./index.es-D3K2Hu6N.js";import"./browser-ponyfill-DVXcND2N.js";import"./ModalFooter-DKyozrEX-CzGBj5WB.js";import"./Screen-DMmH56yL-g2oetu3N.js";import"./index-CWARkn2w-hiPKuA9_.js";const K=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let Q=e=>{if(!N(e))return e;try{let r=M(e);return r.includes("�")?e:r}catch{return e}},U=e=>{try{let r=O.decode(e),s=new TextDecoder().decode(r);return s.includes("�")?e:s}catch{return e}},W=e=>{let{types:r,primaryType:s,...l}=e.typedData;return i.jsxs(i.Fragment,{children:[i.jsx(Z,{data:l}),i.jsx(F,{text:(o=e.typedData,JSON.stringify(o,null,2)),itemName:"full payload to clipboard"})," "]});var o};const G=({method:e,messageData:r,copy:s,iconUrl:l,isLoading:o,success:m,walletProxyIsLoading:g,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>i.jsx(B,{title:s.title,subtitle:s.description,showClose:!0,onClose:p,icon:H,iconVariant:"subtle",helpText:x?i.jsx(Y,{children:x}):void 0,primaryCta:{label:s.buttonText,onClick:c,disabled:o||m||g,loading:o},secondaryCta:d?{label:"Not now",onClick:y,disabled:o||m||g}:void 0,watermark:!0,children:i.jsxs($,{children:[l?i.jsx(K,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,i.jsxs(X,{children:[e==="personal_sign"&&i.jsx(w,{children:Q(r)}),e==="eth_signTypedData_v4"&&i.jsx(W,{typedData:r}),e==="solana_signMessage"&&i.jsx(w,{children:U(r)})]})]})}),fe={component:()=>{let{authenticated:e}=k(),{initializeWalletProxy:r,closePrivyModal:s}=z(),{navigate:l,data:o,onUserCloseViaDialogOrKeybindRef:m}=I(),[g,x]=n.useState(!0),[d,c]=n.useState(""),[y,p]=n.useState(),[f,T]=n.useState(null),[R,S]=n.useState(!1);n.useEffect(()=>{e||l("LandingScreen")},[e]),n.useEffect(()=>{r(P).then(a=>{x(!1),a||(c("An error has occurred, please try again."),p(new E(new b(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:j,data:_,confirmAndSign:v,onSuccess:D,onFailure:A,uiOptions:t}=o.signMessage,L={title:(t==null?void 0:t.title)||"Sign message",description:(t==null?void 0:t.description)||"Signing this message will not cost you any fees.",buttonText:(t==null?void 0:t.buttonText)||"Sign and continue"},h=a=>{a?D(a):A(y||new E(new b("The user rejected the request.",C.E4001_USER_REJECTED_REQUEST.eipCode))),s({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{T(null),c(""),p(void 0)},200)};return m.current=()=>{h(f)},i.jsx(G,{method:j,messageData:_,copy:L,iconUrl:t!=null&&t.iconUrl&&typeof t.iconUrl=="string"?t.iconUrl:void 0,isLoading:R,success:f!==null,walletProxyIsLoading:g,errorMessage:d,isCancellable:t==null?void 0:t.isCancellable,onSign:async()=>{S(!0),c("");try{let a=await v();T(a),S(!1),setTimeout(()=>{h(a)},q)}catch(a){console.error(a),c("An error has occurred, please try again."),p(new E(new b(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let X=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Y=u.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,Z=u(V)`
  margin-top: 0;
`,w=u(J)`
  margin-top: 0;
`;export{fe as SignRequestScreen,G as SignRequestView,fe as default};
