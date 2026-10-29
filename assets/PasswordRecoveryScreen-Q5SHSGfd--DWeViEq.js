import{r as a,j as e,am as _}from"./vendor-react-Df0SfSI6.js";import{d as T,l as E,g as I,bz as U,cq as W,b2 as F,b as h,f as N}from"./privyHost-P_3g8Mdk.js";import{b as V}from"./ModalFooter-DKyozrEX-CzGBj5WB.js";import{l as H}from"./Layouts-BMRfo5hw-Buc1b547.js";import{g as q,h as z,y as M,w as O,k as B}from"./shared-DEkT-Gv3-BR5qdC4l.js";import{w as s}from"./Screen-DMmH56yL-g2oetu3N.js";import"./hooks.module-BjwsZOoR.js";import"./index-BXBMNjGf.js";import"./preload-helper-C1FmrZbK.js";import"./vendor-ethers-Crfx5rr9.js";import"./vendor-supabase-kOjTseMU.js";import"./vendor-icons-CnhLjC4p.js";import"./vendor-wagmi-5xrLe7nK.js";import"./index.es-D3K2Hu6N.js";import"./browser-ponyfill-DVXcND2N.js";import"./index-CWARkn2w-hiPKuA9_.js";const ce={component:()=>{let[o,m]=a.useState(!0),{authenticated:y,user:g}=T(),{walletProxy:i,closePrivyModal:v,createAnalyticsEvent:x,client:j}=E(),{navigate:k,data:A,onUserCloseViaDialogOrKeybindRef:$}=I(),[n,C]=a.useState(void 0),[f,d]=a.useState(""),[c,w]=a.useState(!1),{entropyId:p,entropyIdVerifier:S,onCompleteNavigateTo:b,onSuccess:u,onFailure:P}=A.recoverWallet,l=(r="User exited before their wallet could be recovered")=>{v({shouldCallAuthOnSuccess:!1}),P(typeof r=="string"?new F(r):r)};return $.current=l,a.useEffect(()=>{if(!y)return l("User must be authenticated and have a Privy wallet before it can be recovered")},[y]),e.jsxs(s,{children:[e.jsx(s.Header,{icon:_,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:l}),e.jsx(s.Body,{children:e.jsx(D,{children:e.jsxs("div",{children:[e.jsxs(q,{children:[e.jsx(z,{type:o?"password":"text",onChange:r=>(t=>{t&&C(t)})(r.target.value),disabled:c,style:{paddingRight:"2.3rem"}}),e.jsx(M,{style:{right:"0.75rem"},children:o?e.jsx(O,{onClick:()=>m(!1)}):e.jsx(B,{onClick:()=>m(!0)})})]}),!!f&&e.jsx(K,{children:f})]})})}),e.jsxs(s.Footer,{children:[e.jsx(s.HelpText,{children:e.jsxs(H,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(s.Actions,{children:e.jsx(L,{loading:c||!i,disabled:!n,onClick:async()=>{w(!0);let r=await j.getAccessToken(),t=U(g,p);if(!r||!t||n===null)return l("User must be authenticated and have a Privy wallet before it can be recovered");try{x({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:t.address}}),await(i==null?void 0:i.recover({accessToken:r,entropyId:p,entropyIdVerifier:S,recoveryPassword:n})),d(""),b?k(b):v({shouldCallAuthOnSuccess:!1}),u==null||u(t),x({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:t.address}})}catch(R){W(R)?d("Invalid recovery password, please try again."):d("An error has occurred, please try again.")}finally{w(!1)}},$hideAnimations:!p&&c,children:"Recover your account"})}),e.jsx(s.Watermark,{})]})]})}};let D=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,K=h.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,L=h(V)`
  ${({$hideAnimations:o})=>o&&N`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{ce as PasswordRecoveryScreen,ce as default};
