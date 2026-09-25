import{r as a,j as e,am as _}from"./vendor-react-DSMResu1.js";import{p as T,e as E,b as I,bJ as U,cA as W,bc as F,i as h,j as N}from"./privyHost-CAYGwwnU.js";import{b as V}from"./ModalFooter-DKyozrEX-GGfrnHVG.js";import{l as H}from"./Layouts-BMRfo5hw-DPgq6ysV.js";import{g as M,h as O,y as q,w as z,k as B}from"./shared-DEkT-Gv3-trDCCvbh.js";import{w as s}from"./Screen-DMmH56yL-CmvBVAQ-.js";import"./vendor-wagmi-OILVNHfs.js";import"./index-CENVYpTF.js";import"./vendor-query-DxDSQ3I8.js";import"./vendor-ethers-Cg-evgET.js";import"./vendor-icons-BXGiZuyb.js";import"./vendor-charts-CYZL7y4I.js";import"./index-CWARkn2w-tNxb7oOn.js";const le={component:()=>{let[o,m]=a.useState(!0),{authenticated:y,user:g}=T(),{walletProxy:i,closePrivyModal:v,createAnalyticsEvent:x,client:j}=E(),{navigate:k,data:A,onUserCloseViaDialogOrKeybindRef:$}=I(),[n,C]=a.useState(void 0),[f,d]=a.useState(""),[c,w]=a.useState(!1),{entropyId:p,entropyIdVerifier:S,onCompleteNavigateTo:b,onSuccess:u,onFailure:P}=A.recoverWallet,l=(r="User exited before their wallet could be recovered")=>{v({shouldCallAuthOnSuccess:!1}),P(typeof r=="string"?new F(r):r)};return $.current=l,a.useEffect(()=>{if(!y)return l("User must be authenticated and have a Privy wallet before it can be recovered")},[y]),e.jsxs(s,{children:[e.jsx(s.Header,{icon:_,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:l}),e.jsx(s.Body,{children:e.jsx(D,{children:e.jsxs("div",{children:[e.jsxs(M,{children:[e.jsx(O,{type:o?"password":"text",onChange:r=>(t=>{t&&C(t)})(r.target.value),disabled:c,style:{paddingRight:"2.3rem"}}),e.jsx(q,{style:{right:"0.75rem"},children:o?e.jsx(z,{onClick:()=>m(!1)}):e.jsx(B,{onClick:()=>m(!0)})})]}),!!f&&e.jsx(J,{children:f})]})})}),e.jsxs(s.Footer,{children:[e.jsx(s.HelpText,{children:e.jsxs(H,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(s.Actions,{children:e.jsx(K,{loading:c||!i,disabled:!n,onClick:async()=>{w(!0);let r=await j.getAccessToken(),t=U(g,p);if(!r||!t||n===null)return l("User must be authenticated and have a Privy wallet before it can be recovered");try{x({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:t.address}}),await(i==null?void 0:i.recover({accessToken:r,entropyId:p,entropyIdVerifier:S,recoveryPassword:n})),d(""),b?k(b):v({shouldCallAuthOnSuccess:!1}),u==null||u(t),x({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:t.address}})}catch(R){W(R)?d("Invalid recovery password, please try again."):d("An error has occurred, please try again.")}finally{w(!1)}},$hideAnimations:!p&&c,children:"Recover your account"})}),e.jsx(s.Watermark,{})]})]})}};let D=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,J=h.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,K=h(V)`
  ${({$hideAnimations:o})=>o&&N`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{le as PasswordRecoveryScreen,le as default};
