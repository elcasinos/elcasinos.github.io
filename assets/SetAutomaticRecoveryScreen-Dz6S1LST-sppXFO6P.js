import{fM as R,f5 as U,f3 as M,dk as f,dl as e,g7 as v,gD as j,fI as P,fn as W}from"./index-DmrMAqEU.js";import{F as A}from"./ExclamationTriangleIcon-DggYOOkV.js";import{F as V}from"./LockClosedIcon-Bu0-cpss.js";import{L as S,u as b,h as k}from"./ModalFooter-DKyozrEX-CT2YEprz.js";import{r as D}from"./Subtitle-CV-2yKE4-D9_i-0PE.js";import{e as T}from"./Title-BnzYV3Is-glWMrcwm.js";const H=W.div`
  && {
    border-width: 4px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${l=>l.$color??"var(--privy-color-accent)"};
  border-radius: 50%;
`,z={component:()=>{var p;let{user:l}=R(),{client:$,walletProxy:u,refreshSessionAndUser:C,closePrivyModal:i}=U(),s=M(),{entropyId:m,entropyIdVerifier:E}=((p=s.data)==null?void 0:p.recoverWallet)??{},[n,h]=f.useState(!1),[c,F]=f.useState(null),[d,g]=f.useState(null);function y(){var r,o,t,a;if(!n){if(d)return(o=(r=s.data)==null?void 0:r.setWalletPassword)==null||o.onFailure(d),void i();if(!c)return(a=(t=s.data)==null?void 0:t.setWalletPassword)==null||a.onFailure(Error("User exited set recovery flow")),void i()}}s.onUserCloseViaDialogOrKeybindRef.current=y;let I=!(!n&&!c);return e.jsxs(e.Fragment,d?{children:[e.jsx(S,{onClose:y},"header"),e.jsx(H,{$color:"var(--privy-color-error)",style:{alignSelf:"center"},children:e.jsx(A,{height:38,width:38,stroke:"var(--privy-color-error)"})}),e.jsx(T,{style:{marginTop:"0.5rem"},children:"Something went wrong"}),e.jsx(v,{style:{minHeight:"2rem"}}),e.jsx(b,{onClick:()=>g(null),children:"Try again"}),e.jsx(k,{})]}:{children:[e.jsx(S,{onClose:y},"header"),e.jsx(V,{style:{width:"3rem",height:"3rem",alignSelf:"center"}}),e.jsx(T,{style:{marginTop:"0.5rem"},children:"Automatically secure your account"}),e.jsx(D,{style:{marginTop:"1rem"},children:"When you log into a new device, you’ll only need to authenticate to access your account. Never get logged out if you forget your password."}),e.jsx(v,{style:{minHeight:"2rem"}}),e.jsx(b,{loading:n,disabled:I,onClick:()=>async function(){h(!0);try{let r=await $.getAccessToken(),o=j(l,m);if(!r||!u||!o)return;if(!(await u.setRecovery({accessToken:r,entropyId:m,entropyIdVerifier:E,existingRecoveryMethod:o.recoveryMethod,recoveryMethod:"privy"})).entropyId)throw Error("Unable to set recovery on wallet");let t=await C();if(!t)throw Error("Unable to set recovery on wallet");let a=j(t,o.address);if(!a)throw Error("Unabled to set recovery on wallet");F(!!t),setTimeout(()=>{var w,x;(x=(w=s.data)==null?void 0:w.setWalletPassword)==null||x.onSuccess(a),i()},P)}catch(r){g(r)}finally{h(!1)}}(),children:c?"Success":"Confirm"}),e.jsx(k,{})]})}};export{z as SetAutomaticRecoveryScreen,z as default};
