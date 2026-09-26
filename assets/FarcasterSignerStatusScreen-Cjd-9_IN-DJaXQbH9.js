import{r as u,j as t}from"./vendor-react-Dw-pcWBf.js";import{b as F,a as T,e as I,z as w,A as y,bi as O,o as _,i as n}from"./privyHost-D3twHXT-.js";import{h as q}from"./CopyToClipboard-i_OQSBJr-BSYow5Da.js";import{n as B}from"./OpenLink-CUpJ1mOr-ygYqDr01.js";import{x as A}from"./QrCode-CpGkVlXb-DOUskOdN.js";import{n as E}from"./ScreenLayout-DTsWfKKs-CplySQsk.js";import{l as h}from"./farcaster-DPlSjvF5-BvA13vSr.js";import"./index-Bj2dz6JC.js";import"./vendor-wagmi-B1Ud2aV8.js";import"./vendor-query-CymX7U7d.js";import"./vendor-ethers-Bhe0LPGS.js";import"./vendor-icons-CaM6nBRi.js";import"./dijkstra-D_NXgYpA.js";import"./ModalFooter-DKyozrEX-6lXjxYFS.js";import"./Screen-DMmH56yL-1XVpu24O.js";import"./index-CWARkn2w-BkGtC1jA.js";let S="#8a63d2";const M=({appName:p,loading:m,success:i,errorMessage:e,connectUri:r,onBack:s,onClose:c,onOpenFarcaster:o})=>t.jsx(E,y||m?O?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${p} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},primaryCta:r&&o?{label:"Open Farcaster app",onClick:o}:void 0,onBack:s,onClose:c,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},onBack:s,onClose:c,watermark:!0,children:r&&y&&t.jsx(R,{children:t.jsx(B,{text:"Take me to Farcaster",url:r,color:S})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${p} to add casts, likes, follows, and more on your behalf.`,onBack:s,onClose:c,watermark:!0,children:t.jsxs(z,{children:[t.jsx(L,{children:r?t.jsx(A,{url:r,size:275,squareLogoElement:h}):t.jsx(V,{children:t.jsx(_,{})})}),t.jsxs(N,{children:[t.jsx(P,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&t.jsx(q,{text:r,itemName:"link",color:S})]})]})});let R=n.div`
  margin-top: 24px;
`,z=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,L=n.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,N=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,P=n.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,V=n.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const se={component:()=>{let{lastScreen:p,navigateBack:m,data:i}=F(),e=T(),{requestFarcasterSignerStatus:r,closePrivyModal:s}=I(),[c,o]=u.useState(void 0),[k,v]=u.useState(!1),[j,x]=u.useState(!1),g=u.useRef([]),a=i==null?void 0:i.farcasterSigner;u.useEffect(()=>{let b=Date.now(),l=setInterval(async()=>{if(!(a!=null&&a.public_key))return clearInterval(l),void o({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});a.status==="approved"&&(clearInterval(l),v(!1),x(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w)));let d=await r(a==null?void 0:a.public_key),C=Date.now()-b;d.status==="approved"?(clearInterval(l),v(!1),x(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w))):C>3e5?(clearInterval(l),o({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):d.status==="revoked"&&(clearInterval(l),o({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))},2e3);return()=>{clearInterval(l),g.current.forEach(d=>clearTimeout(d))}},[]);let f=(a==null?void 0:a.status)==="pending_approval"?a.signer_approval_url:void 0;return t.jsx(M,{appName:e.name,loading:k,success:j,errorMessage:c,connectUri:f,onBack:p?m:void 0,onClose:s,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{se as FarcasterSignerStatusScreen,M as FarcasterSignerStatusView,se as default};
