import{r as n,j as a}from"./vendor-react-Dw-pcWBf.js";import{U as M,aC as N,e as O}from"./vendor-wagmi-B1Ud2aV8.js";import{p as k,e as z,b as F,bF as I,ax as C,cK as E,cL as b,z as P,i as u}from"./privyHost-xyLifhRG.js";import{h as q}from"./CopyToClipboard-i_OQSBJr-CI-BUCKC.js";import{d as $}from"./Layouts-BMRfo5hw-C5ozzrT8.js";import{a as V,i as J}from"./JsonTree-BHzNC-ic-IKGboCiM.js";import{n as K}from"./ScreenLayout-DTsWfKKs-BTPcHWSD.js";import{bw as U}from"./vendor-icons-Dvai9xh2.js";import"./vendor-query-CymX7U7d.js";import"./index-CiN-_W3X.js";import"./vendor-ethers-CusRo0PP.js";import"./ModalFooter-DKyozrEX-Bp-d8DBB.js";import"./Screen-DMmH56yL-gadyG8jn.js";import"./index-CWARkn2w-CSexMUwQ.js";const H=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let Q=e=>{if(!M(e))return e;try{let s=N(e);return s.includes("�")?e:s}catch{return e}},W=e=>{try{let s=O.decode(e),i=new TextDecoder().decode(s);return i.includes("�")?e:i}catch{return e}},B=e=>{let{types:s,primaryType:i,...l}=e.typedData;return a.jsxs(a.Fragment,{children:[a.jsx(Z,{data:l}),a.jsx(q,{text:(o=e.typedData,JSON.stringify(o,null,2)),itemName:"full payload to clipboard"})," "]});var o};const G=({method:e,messageData:s,copy:i,iconUrl:l,isLoading:o,success:m,walletProxyIsLoading:g,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>a.jsx(K,{title:i.title,subtitle:i.description,showClose:!0,onClose:p,icon:U,iconVariant:"subtle",helpText:x?a.jsx(Y,{children:x}):void 0,primaryCta:{label:i.buttonText,onClick:c,disabled:o||m||g,loading:o},secondaryCta:d?{label:"Not now",onClick:y,disabled:o||m||g}:void 0,watermark:!0,children:a.jsxs($,{children:[l?a.jsx(H,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,a.jsxs(X,{children:[e==="personal_sign"&&a.jsx(T,{children:Q(s)}),e==="eth_signTypedData_v4"&&a.jsx(B,{typedData:s}),e==="solana_signMessage"&&a.jsx(T,{children:W(s)})]})]})}),ge={component:()=>{let{authenticated:e}=k(),{initializeWalletProxy:s,closePrivyModal:i}=z(),{navigate:l,data:o,onUserCloseViaDialogOrKeybindRef:m}=F(),[g,x]=n.useState(!0),[d,c]=n.useState(""),[y,p]=n.useState(),[f,w]=n.useState(null),[R,S]=n.useState(!1);n.useEffect(()=>{e||l("LandingScreen")},[e]),n.useEffect(()=>{s(I).then(r=>{x(!1),r||(c("An error has occurred, please try again."),p(new C(new E(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:j,data:_,confirmAndSign:v,onSuccess:D,onFailure:L,uiOptions:t}=o.signMessage,A={title:(t==null?void 0:t.title)||"Sign message",description:(t==null?void 0:t.description)||"Signing this message will not cost you any fees.",buttonText:(t==null?void 0:t.buttonText)||"Sign and continue"},h=r=>{r?D(r):L(y||new C(new E("The user rejected the request.",b.E4001_USER_REJECTED_REQUEST.eipCode))),i({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{w(null),c(""),p(void 0)},200)};return m.current=()=>{h(f)},a.jsx(G,{method:j,messageData:_,copy:A,iconUrl:t!=null&&t.iconUrl&&typeof t.iconUrl=="string"?t.iconUrl:void 0,isLoading:R,success:f!==null,walletProxyIsLoading:g,errorMessage:d,isCancellable:t==null?void 0:t.isCancellable,onSign:async()=>{S(!0),c("");try{let r=await v();w(r),S(!1),setTimeout(()=>{h(r)},P)}catch(r){console.error(r),c("An error has occurred, please try again."),p(new C(new E(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let X=u.div`
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
`,T=u(J)`
  margin-top: 0;
`;export{ge as SignRequestScreen,G as SignRequestView,ge as default};
