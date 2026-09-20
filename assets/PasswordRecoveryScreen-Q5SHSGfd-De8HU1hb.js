import{an as a,as as e}from"./index-D9X8xWLP.js";import{F as _}from"./ShieldCheckIcon-CSztnC2l.js";import{cN as T,cb as E,c5 as F,dF as I,dG as N,dm as U,c7 as p,ct as W}from"./privyHost-BW3H4FX_.js";import{b as V}from"./ModalFooter-DKyozrEX-YoY4YKOu.js";import{l as H}from"./Layouts-BMRfo5hw-C4daJqEq.js";import{g as M,h as O,y as q,w as z,k as B}from"./shared-DEkT-Gv3-BwPVYEUc.js";import{w as t}from"./Screen-DMmH56yL-DPA44KJX.js";import"./index-CWARkn2w-B1HJDhmJ.js";const se={component:()=>{let[o,y]=a.useState(!0),{authenticated:m,user:b}=T(),{walletProxy:i,closePrivyModal:v,createAnalyticsEvent:x,client:j}=E(),{navigate:k,data:A,onUserCloseViaDialogOrKeybindRef:$}=F(),[l,C]=a.useState(void 0),[f,d]=a.useState(""),[c,w]=a.useState(!1),{entropyId:u,entropyIdVerifier:S,onCompleteNavigateTo:g,onSuccess:h,onFailure:P}=A.recoverWallet,n=(r="User exited before their wallet could be recovered")=>{v({shouldCallAuthOnSuccess:!1}),P(typeof r=="string"?new U(r):r)};return $.current=n,a.useEffect(()=>{if(!m)return n("User must be authenticated and have a Privy wallet before it can be recovered")},[m]),e.jsxs(t,{children:[e.jsx(t.Header,{icon:_,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:n}),e.jsx(t.Body,{children:e.jsx(D,{children:e.jsxs("div",{children:[e.jsxs(M,{children:[e.jsx(O,{type:o?"password":"text",onChange:r=>(s=>{s&&C(s)})(r.target.value),disabled:c,style:{paddingRight:"2.3rem"}}),e.jsx(q,{style:{right:"0.75rem"},children:o?e.jsx(z,{onClick:()=>y(!1)}):e.jsx(B,{onClick:()=>y(!0)})})]}),!!f&&e.jsx(G,{children:f})]})})}),e.jsxs(t.Footer,{children:[e.jsx(t.HelpText,{children:e.jsxs(H,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(t.Actions,{children:e.jsx(K,{loading:c||!i,disabled:!l,onClick:async()=>{w(!0);let r=await j.getAccessToken(),s=I(b,u);if(!r||!s||l===null)return n("User must be authenticated and have a Privy wallet before it can be recovered");try{x({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:s.address}}),await(i==null?void 0:i.recover({accessToken:r,entropyId:u,entropyIdVerifier:S,recoveryPassword:l})),d(""),g?k(g):v({shouldCallAuthOnSuccess:!1}),h==null||h(s),x({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:s.address}})}catch(R){N(R)?d("Invalid recovery password, please try again."):d("An error has occurred, please try again.")}finally{w(!1)}},$hideAnimations:!u&&c,children:"Recover your account"})}),e.jsx(t.Watermark,{})]})]})}};let D=p.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,G=p.div`
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
`;export{se as PasswordRecoveryScreen,se as default};
