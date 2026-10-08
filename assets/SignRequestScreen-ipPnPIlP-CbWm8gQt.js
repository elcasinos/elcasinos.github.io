import{r as n,j as i}from"./vendor-react-Dw-pcWBf.js";import{N,Y as M,b as O}from"./vendor-wagmi-BXbL8uxF.js";import{d as k,l as z,g as I,bv as P,an as C,cB as E,cC as b,o as q,b as u}from"./privyHost-Cvd-gicO.js";import{h as F}from"./CopyToClipboard-i_OQSBJr-ZL8j_x7L.js";import{d as $}from"./Layouts-BMRfo5hw-Cuvk0SH2.js";import{a as V,i as J}from"./JsonTree-BHzNC-ic-DbvTZpR-.js";import{n as B}from"./ScreenLayout-DTsWfKKs-Cv3BcPQn.js";import{cm as H}from"./vendor-icons-C8Uws_5i.js";import"./preload-helper-C1FmrZbK.js";import"./index-CZsIgxSU.js";import"./vendor-ethers-DExdCeEr.js";import"./vendor-supabase-kOjTseMU.js";import"./ModalFooter-DKyozrEX-DTE6M29K.js";import"./Screen-DMmH56yL-TrqTyPsc.js";import"./index-CWARkn2w-D8D5VWeu.js";const K=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let Q=e=>{if(!N(e))return e;try{let s=M(e);return s.includes("�")?e:s}catch{return e}},U=e=>{try{let s=O.decode(e),a=new TextDecoder().decode(s);return a.includes("�")?e:a}catch{return e}},W=e=>{let{types:s,primaryType:a,...l}=e.typedData;return i.jsxs(i.Fragment,{children:[i.jsx(Z,{data:l}),i.jsx(F,{text:(o=e.typedData,JSON.stringify(o,null,2)),itemName:"full payload to clipboard"})," "]});var o};const Y=({method:e,messageData:s,copy:a,iconUrl:l,isLoading:o,success:m,walletProxyIsLoading:g,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>i.jsx(B,{title:a.title,subtitle:a.description,showClose:!0,onClose:p,icon:H,iconVariant:"subtle",helpText:x?i.jsx(X,{children:x}):void 0,primaryCta:{label:a.buttonText,onClick:c,disabled:o||m||g,loading:o},secondaryCta:d?{label:"Not now",onClick:y,disabled:o||m||g}:void 0,watermark:!0,children:i.jsxs($,{children:[l?i.jsx(K,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,i.jsxs(G,{children:[e==="personal_sign"&&i.jsx(w,{children:Q(s)}),e==="eth_signTypedData_v4"&&i.jsx(W,{typedData:s}),e==="solana_signMessage"&&i.jsx(w,{children:U(s)})]})]})}),xe={component:()=>{let{authenticated:e}=k(),{initializeWalletProxy:s,closePrivyModal:a}=z(),{navigate:l,data:o,onUserCloseViaDialogOrKeybindRef:m}=I(),[g,x]=n.useState(!0),[d,c]=n.useState(""),[y,p]=n.useState(),[f,T]=n.useState(null),[R,S]=n.useState(!1);n.useEffect(()=>{e||l("LandingScreen")},[e]),n.useEffect(()=>{s(P).then(r=>{x(!1),r||(c("An error has occurred, please try again."),p(new C(new E(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:j,data:_,confirmAndSign:v,onSuccess:D,onFailure:A,uiOptions:t}=o.signMessage,L={title:(t==null?void 0:t.title)||"Sign message",description:(t==null?void 0:t.description)||"Signing this message will not cost you any fees.",buttonText:(t==null?void 0:t.buttonText)||"Sign and continue"},h=r=>{r?D(r):A(y||new C(new E("The user rejected the request.",b.E4001_USER_REJECTED_REQUEST.eipCode))),a({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{T(null),c(""),p(void 0)},200)};return m.current=()=>{h(f)},i.jsx(Y,{method:j,messageData:_,copy:L,iconUrl:t!=null&&t.iconUrl&&typeof t.iconUrl=="string"?t.iconUrl:void 0,isLoading:R,success:f!==null,walletProxyIsLoading:g,errorMessage:d,isCancellable:t==null?void 0:t.isCancellable,onSign:async()=>{S(!0),c("");try{let r=await v();T(r),S(!1),setTimeout(()=>{h(r)},q)}catch(r){console.error(r),c("An error has occurred, please try again."),p(new C(new E(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let G=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,X=u.p`
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
`;export{xe as SignRequestScreen,Y as SignRequestView,xe as default};
