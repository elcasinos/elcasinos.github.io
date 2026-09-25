import{r as n,j as a}from"./vendor-react-DSMResu1.js";import{U as M,aC as N,e as O}from"./vendor-wagmi-OILVNHfs.js";import{p as k,e as z,b as F,bF as I,ax as C,cK as E,cL as b,z as P,i as u}from"./privyHost-tqzvtuvM.js";import{h as q}from"./CopyToClipboard-i_OQSBJr-CPPfZvhk.js";import{d as $}from"./Layouts-BMRfo5hw-DelxmwgC.js";import{a as V,i as J}from"./JsonTree-BHzNC-ic-z7gCqsiy.js";import{n as K}from"./ScreenLayout-DTsWfKKs-D3hf0wle.js";import{bw as U}from"./vendor-icons-CiQfAMQ7.js";import"./vendor-query-DxDSQ3I8.js";import"./index-DkiohRKQ.js";import"./vendor-ethers-Cg-evgET.js";import"./vendor-charts-CYZL7y4I.js";import"./ModalFooter-DKyozrEX-CPUjN6m-.js";import"./Screen-DMmH56yL-L9XHY9Tq.js";import"./index-CWARkn2w-BtswzeC3.js";const H=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let Q=e=>{if(!M(e))return e;try{let i=N(e);return i.includes("�")?e:i}catch{return e}},W=e=>{try{let i=O.decode(e),s=new TextDecoder().decode(i);return s.includes("�")?e:s}catch{return e}},B=e=>{let{types:i,primaryType:s,...l}=e.typedData;return a.jsxs(a.Fragment,{children:[a.jsx(Z,{data:l}),a.jsx(q,{text:(o=e.typedData,JSON.stringify(o,null,2)),itemName:"full payload to clipboard"})," "]});var o};const G=({method:e,messageData:i,copy:s,iconUrl:l,isLoading:o,success:m,walletProxyIsLoading:g,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>a.jsx(K,{title:s.title,subtitle:s.description,showClose:!0,onClose:p,icon:U,iconVariant:"subtle",helpText:x?a.jsx(Y,{children:x}):void 0,primaryCta:{label:s.buttonText,onClick:c,disabled:o||m||g,loading:o},secondaryCta:d?{label:"Not now",onClick:y,disabled:o||m||g}:void 0,watermark:!0,children:a.jsxs($,{children:[l?a.jsx(H,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,a.jsxs(X,{children:[e==="personal_sign"&&a.jsx(T,{children:Q(i)}),e==="eth_signTypedData_v4"&&a.jsx(B,{typedData:i}),e==="solana_signMessage"&&a.jsx(T,{children:W(i)})]})]})}),xe={component:()=>{let{authenticated:e}=k(),{initializeWalletProxy:i,closePrivyModal:s}=z(),{navigate:l,data:o,onUserCloseViaDialogOrKeybindRef:m}=F(),[g,x]=n.useState(!0),[d,c]=n.useState(""),[y,p]=n.useState(),[f,w]=n.useState(null),[R,S]=n.useState(!1);n.useEffect(()=>{e||l("LandingScreen")},[e]),n.useEffect(()=>{i(I).then(r=>{x(!1),r||(c("An error has occurred, please try again."),p(new C(new E(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:j,data:_,confirmAndSign:v,onSuccess:D,onFailure:L,uiOptions:t}=o.signMessage,A={title:(t==null?void 0:t.title)||"Sign message",description:(t==null?void 0:t.description)||"Signing this message will not cost you any fees.",buttonText:(t==null?void 0:t.buttonText)||"Sign and continue"},h=r=>{r?D(r):L(y||new C(new E("The user rejected the request.",b.E4001_USER_REJECTED_REQUEST.eipCode))),s({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{w(null),c(""),p(void 0)},200)};return m.current=()=>{h(f)},a.jsx(G,{method:j,messageData:_,copy:A,iconUrl:t!=null&&t.iconUrl&&typeof t.iconUrl=="string"?t.iconUrl:void 0,isLoading:R,success:f!==null,walletProxyIsLoading:g,errorMessage:d,isCancellable:t==null?void 0:t.isCancellable,onSign:async()=>{S(!0),c("");try{let r=await v();w(r),S(!1),setTimeout(()=>{h(r)},P)}catch(r){console.error(r),c("An error has occurred, please try again."),p(new C(new E(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let X=u.div`
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
`;export{xe as SignRequestScreen,G as SignRequestView,xe as default};
