import{dk as a,fR as _,fa as I,f8 as T,dl as e,gI as E,gJ as F,gq as U,fs as p,fz as W}from"./index-C0QDr7dm.js";import{F as N}from"./ShieldCheckIcon-z3dLaL2I.js";import{b as V}from"./ModalFooter-DKyozrEX-0KX_tkmH.js";import{l as H}from"./Layouts-BMRfo5hw-BSNh5PSp.js";import{g as q,h as z,y as M,w as O,k as B}from"./shared-DEkT-Gv3-BPPnjJdD.js";import{w as t}from"./Screen-DMmH56yL-D6FI8tpx.js";import"./index-CWARkn2w-D1TLhhH1.js";const re={component:()=>{let[o,y]=a.useState(!0),{authenticated:f,user:b}=_(),{walletProxy:i,closePrivyModal:m,createAnalyticsEvent:v,client:j}=I(),{navigate:k,data:A,onUserCloseViaDialogOrKeybindRef:$}=T(),[n,C]=a.useState(void 0),[x,d]=a.useState(""),[c,g]=a.useState(!1),{entropyId:u,entropyIdVerifier:R,onCompleteNavigateTo:w,onSuccess:h,onFailure:S}=A.recoverWallet,l=(r="User exited before their wallet could be recovered")=>{m({shouldCallAuthOnSuccess:!1}),S(typeof r=="string"?new U(r):r)};return $.current=l,a.useEffect(()=>{if(!f)return l("User must be authenticated and have a Privy wallet before it can be recovered")},[f]),e.jsxs(t,{children:[e.jsx(t.Header,{icon:N,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:l}),e.jsx(t.Body,{children:e.jsx(D,{children:e.jsxs("div",{children:[e.jsxs(q,{children:[e.jsx(z,{type:o?"password":"text",onChange:r=>(s=>{s&&C(s)})(r.target.value),disabled:c,style:{paddingRight:"2.3rem"}}),e.jsx(M,{style:{right:"0.75rem"},children:o?e.jsx(O,{onClick:()=>y(!1)}):e.jsx(B,{onClick:()=>y(!0)})})]}),!!x&&e.jsx(J,{children:x})]})})}),e.jsxs(t.Footer,{children:[e.jsx(t.HelpText,{children:e.jsxs(H,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(t.Actions,{children:e.jsx(K,{loading:c||!i,disabled:!n,onClick:async()=>{g(!0);let r=await j.getAccessToken(),s=E(b,u);if(!r||!s||n===null)return l("User must be authenticated and have a Privy wallet before it can be recovered");try{v({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:s.address}}),await(i==null?void 0:i.recover({accessToken:r,entropyId:u,entropyIdVerifier:R,recoveryPassword:n})),d(""),w?k(w):m({shouldCallAuthOnSuccess:!1}),h==null||h(s),v({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:s.address}})}catch(P){F(P)?d("Invalid recovery password, please try again."):d("An error has occurred, please try again.")}finally{g(!1)}},$hideAnimations:!u&&c,children:"Recover your account"})}),e.jsx(t.Watermark,{})]})]})}};let D=p.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,J=p.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,K=p(V)`
  ${({$hideAnimations:o})=>o&&W`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{re as PasswordRecoveryScreen,re as default};
