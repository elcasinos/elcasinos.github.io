import{r as p,j as t}from"./vendor-react-Df0SfSI6.js";import{g as F,s as T,l as I,o as w,p as y,b8 as O,c as _,b as n}from"./privyHost-P_3g8Mdk.js";import{h as q}from"./CopyToClipboard-i_OQSBJr-DwsPy8Ey.js";import{n as B}from"./OpenLink-CUpJ1mOr-CuvhDzGc.js";import{x as E}from"./QrCode-CpGkVlXb-BOkdtXdz.js";import{n as A}from"./ScreenLayout-DTsWfKKs-DTdsaFZl.js";import{l as h}from"./farcaster-DPlSjvF5-CBgG0q4w.js";import"./index-BXBMNjGf.js";import"./preload-helper-C1FmrZbK.js";import"./vendor-ethers-Crfx5rr9.js";import"./vendor-supabase-kOjTseMU.js";import"./vendor-icons-CnhLjC4p.js";import"./hooks.module-BjwsZOoR.js";import"./vendor-wagmi-5xrLe7nK.js";import"./index.es-D3K2Hu6N.js";import"./browser-ponyfill-DVXcND2N.js";import"./dijkstra-D_NXgYpA.js";import"./ModalFooter-DKyozrEX-CzGBj5WB.js";import"./Screen-DMmH56yL-g2oetu3N.js";import"./index-CWARkn2w-hiPKuA9_.js";let S="#8a63d2";const M=({appName:u,loading:d,success:i,errorMessage:e,connectUri:r,onBack:s,onClose:c,onOpenFarcaster:o})=>t.jsx(A,y||d?O?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},primaryCta:r&&o?{label:"Open Farcaster app",onClick:o}:void 0,onBack:s,onClose:c,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!e},onBack:s,onClose:c,watermark:!0,children:r&&y&&t.jsx(R,{children:t.jsx(B,{text:"Take me to Farcaster",url:r,color:S})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,onBack:s,onClose:c,watermark:!0,children:t.jsxs(L,{children:[t.jsx(N,{children:r?t.jsx(E,{url:r,size:275,squareLogoElement:h}):t.jsx(z,{children:t.jsx(_,{})})}),t.jsxs(P,{children:[t.jsx(V,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&t.jsx(q,{text:r,itemName:"link",color:S})]})]})});let R=n.div`
  margin-top: 24px;
`,L=n.div`
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
`;const ne={component:()=>{let{lastScreen:u,navigateBack:d,data:i}=F(),e=T(),{requestFarcasterSignerStatus:r,closePrivyModal:s}=I(),[c,o]=p.useState(void 0),[k,v]=p.useState(!1),[j,x]=p.useState(!1),g=p.useRef([]),a=i==null?void 0:i.farcasterSigner;p.useEffect(()=>{let b=Date.now(),l=setInterval(async()=>{if(!(a!=null&&a.public_key))return clearInterval(l),void o({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});a.status==="approved"&&(clearInterval(l),v(!1),x(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w)));let m=await r(a==null?void 0:a.public_key),C=Date.now()-b;m.status==="approved"?(clearInterval(l),v(!1),x(!0),g.current.push(setTimeout(()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0}),w))):C>3e5?(clearInterval(l),o({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):m.status==="revoked"&&(clearInterval(l),o({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))},2e3);return()=>{clearInterval(l),g.current.forEach(m=>clearTimeout(m))}},[]);let f=(a==null?void 0:a.status)==="pending_approval"?a.signer_approval_url:void 0;return t.jsx(M,{appName:e.name,loading:k,success:j,errorMessage:c,connectUri:f,onBack:u?d:void 0,onClose:s,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{ne as FarcasterSignerStatusScreen,M as FarcasterSignerStatusView,ne as default};
