import{f8 as F,f9 as T,fa as I,dk as u,fN as w,dl as a,fP as y,gv as O,fK as _,fs as n}from"./index-26z5Yfo3.js";import{h as q}from"./CopyToClipboard-i_OQSBJr-Nx_xB7Zm.js";import{n as B}from"./OpenLink-CUpJ1mOr-BKQyxGri.js";import{x as E}from"./QrCode-CpGkVlXb-C20bckf-.js";import{n as A}from"./ScreenLayout-DTsWfKKs-Dhqj4fla.js";import{l as h}from"./farcaster-DPlSjvF5-BoDP1XY_.js";import"./dijkstra-D_NXgYpA.js";import"./ModalFooter-DKyozrEX-BF-lHNKI.js";import"./Screen-DMmH56yL-CqxrIlBw.js";import"./index-CWARkn2w-iGo3LWCP.js";let k="#8a63d2";const M=({appName:d,loading:m,success:i,errorMessage:e,connectUri:r,onBack:s,onClose:c,onOpenFarcaster:o})=>a.jsx(A,y||m?O?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${d} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},primaryCta:r&&o?{label:"Open Farcaster app",onClick:o}:void 0,onBack:s,onClose:c,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},onBack:s,onClose:c,watermark:!0,children:r&&y&&a.jsx(N,{children:a.jsx(B,{text:"Take me to Farcaster",url:r,color:k})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${d} to add casts, likes, follows, and more on your behalf.`,onBack:s,onClose:c,watermark:!0,children:a.jsxs(P,{children:[a.jsx(R,{children:r?a.jsx(E,{url:r,size:275,squareLogoElement:h}):a.jsx(z,{children:a.jsx(_,{})})}),a.jsxs(L,{children:[a.jsx(V,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&a.jsx(q,{text:r,itemName:"link",color:k})]})]})});let N=n.div`
  margin-top: 24px;
`,P=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,R=n.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,L=n.div`
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
`;const Z={component:()=>{let{lastScreen:d,navigateBack:m,data:i}=F(),e=T(),{requestFarcasterSignerStatus:r,closePrivyModal:s}=I(),[c,o]=u.useState(void 0),[S,v]=u.useState(!1),[j,x]=u.useState(!1),f=u.useRef([]),t=i==null?void 0:i.farcasterSigner;u.useEffect(()=>{let b=Date.now(),l=setInterval(async()=>{if(!(t!=null&&t.public_key))return clearInterval(l),void o({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});t.status==="approved"&&(clearInterval(l),v(!1),x(!0),f.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w)));let p=await r(t==null?void 0:t.public_key),C=Date.now()-b;p.status==="approved"?(clearInterval(l),v(!1),x(!0),f.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w))):C>3e5?(clearInterval(l),o({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):p.status==="revoked"&&(clearInterval(l),o({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))},2e3);return()=>{clearInterval(l),f.current.forEach(p=>clearTimeout(p))}},[]);let g=(t==null?void 0:t.status)==="pending_approval"?t.signer_approval_url:void 0;return a.jsx(M,{appName:e.name,loading:S,success:j,errorMessage:c,connectUri:g,onBack:d?m:void 0,onClose:s,onOpenFarcaster:()=>{g&&(window.location.href=g)}})}};export{Z as FarcasterSignerStatusScreen,M as FarcasterSignerStatusView,Z as default};
