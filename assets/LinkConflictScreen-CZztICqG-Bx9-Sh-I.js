import{r as y,j as e,a1 as D,w as $,ak as N,al as B}from"./vendor-react-DSMResu1.js";import{L as W,b as R,f as P,h as z}from"./ModalFooter-DKyozrEX-BzwucGEz.js";import{e as U,b as _,a as V,i}from"./privyHost-_0LgbINE.js";import{i as q}from"./StackedContainer-B2vaEl56-CuNAOZJV.js";import{d as E}from"./Address-9aHCoAYt-Cl3bxmDk.js";import{e as G}from"./capitalizeFirstLetter-DmLYqXsO-tV1Idewc.js";import"./index-Cg-A2vun.js";import"./vendor-query-DxDSQ3I8.js";import"./vendor-ethers-Cg-evgET.js";import"./vendor-wagmi-OILVNHfs.js";import"./vendor-icons-BXGiZuyb.js";import"./vendor-charts-CYZL7y4I.js";const H=i.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${n=>n.color??"var(--privy-color-accent)"};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
  }
`;function J(n){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",...n,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),e.jsx("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]})}const L=({onTransfer:n,isTransferring:o,transferSuccess:r})=>e.jsx(R,{...r?{success:!0,children:"Success!"}:{warn:!0,loading:o,onClick:n,children:"Transfer and delete account"}}),M=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
`,w=i.div`
  display: flex;
  flex-direction: column;
  && p {
    font-size: 14px;
  }
  width: 100%;
  gap: 16px;
`,I=i.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  border: 1px solid var(--privy-color-foreground-4) !important;
  border-radius: var(--privy-border-radius-md);
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  gap: 8px;
`,K=i(N)`
  position: relative;
  width: ${({$iconSize:n})=>`${n}px`};
  height: ${({$iconSize:n})=>`${n}px`};
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,O=i(B)`
  position: relative;
  width: 15px;
  height: 15px;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,Q=i.ol`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  text-align: left;
`,A=i.li`
  font-size: 14px;
  list-style-type: auto;
  list-style-position: outside;
  margin-left: 1rem;
  margin-bottom: 0.5rem; /* Adjust the margin as needed */

  &:last-child {
    margin-bottom: 0; /* Remove margin from the last item */
  }
`,X=i.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;let Y=()=>e.jsx(X,{children:e.jsx(K,{$iconSize:60})});const Z=({address:n,onClose:o,onRetry:r,onTransfer:d,isTransferring:u,transferSuccess:f})=>{var c;let{defaultChain:s}=V(),t=((c=s.blockExplorers)==null?void 0:c.default.url)??"https://etherscan.io";return e.jsxs(e.Fragment,{children:[e.jsx(W,{onClose:o,backFn:r}),e.jsxs(M,{children:[e.jsx(Y,{}),e.jsxs(w,{children:[e.jsx("h3",{children:"Check account assets before transferring"}),e.jsx("p",{children:"Before transferring, ensure there are no assets in the other account. Assets in that account will not transfer automatically and may be lost."}),e.jsxs(Q,{children:[e.jsx("p",{children:" To check your balance, you can:"}),e.jsx(A,{children:"Log out and log back into the other account, or "}),e.jsxs(A,{children:["Copy your wallet address and use a"," ",e.jsx("u",{children:e.jsx("a",{target:"_blank",href:t,children:"block explorer"})})," ","to see if the account holds any assets."]})]}),e.jsxs(I,{onClick:()=>navigator.clipboard.writeText(n).catch(console.error),children:[e.jsx($,{color:"var(--privy-color-foreground)",strokeWidth:2,height:"28px",width:"28px"}),e.jsx(E,{address:n,showCopyIcon:!1}),e.jsx(O,{})]}),e.jsx(L,{onTransfer:d,isTransferring:u,transferSuccess:f})]})]}),e.jsx(z,{})]})},pe={component:()=>{let{initiateAccountTransfer:n,closePrivyModal:o}=U(),{data:r,navigate:d,lastScreen:u,setModalData:f}=_(),[s,t]=y.useState(void 0),[c,j]=y.useState(!1),[h,p]=y.useState(!1),x=async()=>{var a,m,l,T,b,v,g,k,C,S;try{if(!((a=r==null?void 0:r.accountTransfer)!=null&&a.nonce)||!((m=r==null?void 0:r.accountTransfer)!=null&&m.account))throw Error("missing account transfer inputs");p(!0),await n({nonce:(l=r==null?void 0:r.accountTransfer)==null?void 0:l.nonce,account:(T=r==null?void 0:r.accountTransfer)==null?void 0:T.account,accountType:(b=r==null?void 0:r.accountTransfer)==null?void 0:b.linkMethod,externalWalletMetadata:(v=r==null?void 0:r.accountTransfer)==null?void 0:v.externalWalletMetadata,telegramWebAppData:(g=r==null?void 0:r.accountTransfer)==null?void 0:g.telegramWebAppData,telegramAuthResult:(k=r==null?void 0:r.accountTransfer)==null?void 0:k.telegramAuthResult,farcasterEmbeddedAddress:(C=r==null?void 0:r.accountTransfer)==null?void 0:C.farcasterEmbeddedAddress,oAuthUserInfo:(S=r==null?void 0:r.accountTransfer)==null?void 0:S.oAuthUserInfo}),j(!0),p(!1),setTimeout(o,1e3)}catch(F){f({errorModalData:{error:F,previousScreen:u||"LinkConflictScreen"}}),d("ErrorScreen",!0)}};return s?e.jsx(Z,{address:s,onClose:o,onRetry:()=>t(void 0),onTransfer:x,isTransferring:h,transferSuccess:c}):e.jsx(ee,{onClose:o,onInfo:()=>{var a;return t((a=r==null?void 0:r.accountTransfer)==null?void 0:a.embeddedWalletAddress)},onContinue:()=>{var a;return t((a=r==null?void 0:r.accountTransfer)==null?void 0:a.embeddedWalletAddress)},onTransfer:x,isTransferring:h,transferSuccess:c,data:r})}},ee=({onClose:n,onContinue:o,onInfo:r,onTransfer:d,transferSuccess:u,isTransferring:f,data:s})=>{var c,j,h,p,x,a,m;if(!((c=s==null?void 0:s.accountTransfer)!=null&&c.linkMethod)||!((j=s==null?void 0:s.accountTransfer)!=null&&j.displayName))return;let t={method:(h=s==null?void 0:s.accountTransfer)==null?void 0:h.linkMethod,handle:(p=s==null?void 0:s.accountTransfer)==null?void 0:p.displayName,disclosedAccount:(x=s==null?void 0:s.accountTransfer)!=null&&x.embeddedWalletAddress?{type:"wallet",handle:(a=s==null?void 0:s.accountTransfer)==null?void 0:a.embeddedWalletAddress}:void 0};return e.jsxs(e.Fragment,{children:[e.jsx(W,{closeable:!0}),e.jsxs(M,{children:[e.jsx(q,{children:e.jsxs("div",{children:[e.jsx(H,{color:"var(--privy-color-error)"}),e.jsx(D,{height:38,width:38,stroke:"var(--privy-color-error)"})]})}),e.jsxs(w,{children:[e.jsxs("h3",{children:[function(l){switch(l){case"sms":return"Phone number";case"email":return"Email address";case"siwe":return"Wallet address";case"siws":return"Solana wallet address";case"linkedin":return"LinkedIn profile";case"google":case"apple":case"discord":case"github":case"instagram":case"spotify":case"tiktok":case"line":case"twitch":case"twitter":case"telegram":case"farcaster":return`${G(l.replace("_oauth",""))} profile`;default:return l.startsWith("privy:")?"Cross-app account":l}}(t.method)," is associated with another account"]}),e.jsxs("p",{children:["Do you want to transfer",e.jsx("b",{children:t.handle?` ${t.handle}`:""})," to this account instead? This will delete your other account."]}),e.jsx(re,{onClick:r,disclosedAccount:t.disclosedAccount})]}),e.jsxs(w,{style:{gap:12,marginTop:12},children:[(m=s==null?void 0:s.accountTransfer)!=null&&m.embeddedWalletAddress?e.jsx(R,{onClick:o,children:"Continue"}):e.jsx(L,{onTransfer:d,transferSuccess:u,isTransferring:f}),e.jsx(P,{onClick:n,children:"No thanks"})]})]}),e.jsx(z,{})]})};function re({disclosedAccount:n,onClick:o}){return n?e.jsxs(I,{onClick:o,children:[e.jsx($,{color:"var(--privy-color-foreground)",strokeWidth:2,height:"28px",width:"28px"}),e.jsx(E,{address:n.handle,showCopyIcon:!1}),e.jsx(J,{width:15,height:15,color:"var(--privy-color-foreground-3)",style:{marginLeft:"auto"}})]}):null}export{pe as LinkConflictScreen,ee as LinkConflictScreenView,pe as default};
