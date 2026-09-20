import{an as u,as as a}from"./index-Cyxh5THh.js";import{c5 as F,c6 as T,cb as I,cJ as w,cL as y,ds as O,cG as _,c7 as n}from"./privyHost-BZhCHjjf.js";import{h as q}from"./CopyToClipboard-i_OQSBJr-djHrycjB.js";import{n as B}from"./OpenLink-CUpJ1mOr-DekzVrOW.js";import{x as E}from"./QrCode-CpGkVlXb-DFmSYXqD.js";import{n as A}from"./ScreenLayout-DTsWfKKs-CXMu5NQv.js";import{l as h}from"./farcaster-DPlSjvF5-DIHQgVcW.js";import"./dijkstra-D_NXgYpA.js";import"./ModalFooter-DKyozrEX-CNhwb79p.js";import"./Screen-DMmH56yL-QhWm-nc7.js";import"./index-CWARkn2w-CL-HNRj4.js";let S="#8a63d2";const L=({appName:d,loading:m,success:i,errorMessage:e,connectUri:r,onBack:s,onClose:c,onOpenFarcaster:o})=>a.jsx(A,y||m?O?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${d} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},primaryCta:r&&o?{label:"Open Farcaster app",onClick:o}:void 0,onBack:s,onClose:c,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},onBack:s,onClose:c,watermark:!0,children:r&&y&&a.jsx(M,{children:a.jsx(B,{text:"Take me to Farcaster",url:r,color:S})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${d} to add casts, likes, follows, and more on your behalf.`,onBack:s,onClose:c,watermark:!0,children:a.jsxs(R,{children:[a.jsx(N,{children:r?a.jsx(E,{url:r,size:275,squareLogoElement:h}):a.jsx(z,{children:a.jsx(_,{})})}),a.jsxs(P,{children:[a.jsx(V,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&a.jsx(q,{text:r,itemName:"link",color:S})]})]})});let M=n.div`
  margin-top: 24px;
`,R=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,N=n.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,P=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,V=n.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,z=n.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const $={component:()=>{let{lastScreen:d,navigateBack:m,data:i}=F(),e=T(),{requestFarcasterSignerStatus:r,closePrivyModal:s}=I(),[c,o]=u.useState(void 0),[k,v]=u.useState(!1),[j,x]=u.useState(!1),g=u.useRef([]),t=i==null?void 0:i.farcasterSigner;u.useEffect(()=>{let b=Date.now(),l=setInterval(async()=>{if(!(t!=null&&t.public_key))return clearInterval(l),void o({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});t.status==="approved"&&(clearInterval(l),v(!1),x(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w)));let p=await r(t==null?void 0:t.public_key),C=Date.now()-b;p.status==="approved"?(clearInterval(l),v(!1),x(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w))):C>3e5?(clearInterval(l),o({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):p.status==="revoked"&&(clearInterval(l),o({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))},2e3);return()=>{clearInterval(l),g.current.forEach(p=>clearTimeout(p))}},[]);let f=(t==null?void 0:t.status)==="pending_approval"?t.signer_approval_url:void 0;return a.jsx(L,{appName:e.name,loading:k,success:j,errorMessage:c,connectUri:f,onBack:d?m:void 0,onClose:s,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{$ as FarcasterSignerStatusScreen,L as FarcasterSignerStatusView,$ as default};
