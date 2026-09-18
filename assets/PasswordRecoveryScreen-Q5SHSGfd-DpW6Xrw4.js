import{dk as a,fS as _,fb as T,f9 as E,dl as e,gJ as I,gK as F,gr as U,ft as p,fA as W}from"./index-B5z1r2tA.js";import{F as N}from"./ShieldCheckIcon-6-5xBJ6k.js";import{b as V}from"./ModalFooter-DKyozrEX-BDBBb-3k.js";import{l as H}from"./Layouts-BMRfo5hw-4Mq3Vzak.js";import{g as K,h as M,y as O,w as q,k as z}from"./shared-DEkT-Gv3-BXQQY4Qu.js";import{w as t}from"./Screen-DMmH56yL-BG7LE4YA.js";import"./index-CWARkn2w-DUlOYVvD.js";const re={component:()=>{let[o,y]=a.useState(!0),{authenticated:f,user:b}=_(),{walletProxy:i,closePrivyModal:m,createAnalyticsEvent:v,client:j}=T(),{navigate:k,data:A,onUserCloseViaDialogOrKeybindRef:$}=E(),[n,S]=a.useState(void 0),[x,d]=a.useState(""),[c,g]=a.useState(!1),{entropyId:u,entropyIdVerifier:C,onCompleteNavigateTo:w,onSuccess:h,onFailure:P}=A.recoverWallet,l=(r="User exited before their wallet could be recovered")=>{m({shouldCallAuthOnSuccess:!1}),P(typeof r=="string"?new U(r):r)};return $.current=l,a.useEffect(()=>{if(!f)return l("User must be authenticated and have a Privy wallet before it can be recovered")},[f]),e.jsxs(t,{children:[e.jsx(t.Header,{icon:N,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:l}),e.jsx(t.Body,{children:e.jsx(B,{children:e.jsxs("div",{children:[e.jsxs(K,{children:[e.jsx(M,{type:o?"password":"text",onChange:r=>(s=>{s&&S(s)})(r.target.value),disabled:c,style:{paddingRight:"2.3rem"}}),e.jsx(O,{style:{right:"0.75rem"},children:o?e.jsx(q,{onClick:()=>y(!1)}):e.jsx(z,{onClick:()=>y(!0)})})]}),!!x&&e.jsx(D,{children:x})]})})}),e.jsxs(t.Footer,{children:[e.jsx(t.HelpText,{children:e.jsxs(H,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(t.Actions,{children:e.jsx(J,{loading:c||!i,disabled:!n,onClick:async()=>{g(!0);let r=await j.getAccessToken(),s=I(b,u);if(!r||!s||n===null)return l("User must be authenticated and have a Privy wallet before it can be recovered");try{v({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:s.address}}),await(i==null?void 0:i.recover({accessToken:r,entropyId:u,entropyIdVerifier:C,recoveryPassword:n})),d(""),w?k(w):m({shouldCallAuthOnSuccess:!1}),h==null||h(s),v({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:s.address}})}catch(R){F(R)?d("Invalid recovery password, please try again."):d("An error has occurred, please try again.")}finally{g(!1)}},$hideAnimations:!u&&c,children:"Recover your account"})}),e.jsx(t.Watermark,{})]})]})}};let B=p.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,D=p.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,J=p(V)`
  ${({$hideAnimations:o})=>o&&W`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{re as PasswordRecoveryScreen,re as default};
