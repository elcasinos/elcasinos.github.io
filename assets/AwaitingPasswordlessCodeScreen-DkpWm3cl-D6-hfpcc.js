import{r as u,j as r,B as re,C as oe,D as te}from"./vendor-react-Dw-pcWBf.js";import{g as ae,s as Q,l as ne,d as ie,o as G,a5 as y,j as g,a6 as se,p as le,b as S}from"./privyHost-B8_vgoSy.js";import{o as ce}from"./Layouts-BMRfo5hw-CsX__SGN.js";import{n as de}from"./Link-DTncR-24-C_aPQ6y3.js";import{a as ue}from"./shouldProceedtoEmbeddedWalletCreationFlow-DDzHjOUJ-QsZ7wN2S.js";import{n as pe}from"./ScreenLayout-DTsWfKKs-rh8L5-8y.js";import"./index-Dxd-s6nc.js";import"./preload-helper-C1FmrZbK.js";import"./vendor-ethers-DUDe0QEX.js";import"./vendor-supabase-kOjTseMU.js";import"./vendor-icons-DltxYJIW.js";import"./vendor-wagmi-BXbL8uxF.js";import"./ModalFooter-DKyozrEX-DRwpjSZl.js";import"./Screen-DMmH56yL-i-t7QPx8.js";import"./index-CWARkn2w-BbAP8jG3.js";const me=({contactMethod:a,authFlow:C,emailDomain:R,appName:E="Privy",whatsAppEnabled:I=!1,onBack:s,onCodeSubmit:T,onResend:D,errorMessage:p,success:h=!1,resendCountdown:M=0,onInvalidInput:_,onClearError:m})=>{let[c,N]=u.useState(Z);u.useEffect(()=>{p||N(Z)},[p]);let b=async x=>{var v;x.preventDefault();let n=x.currentTarget.value.replace(" ","");if(n==="")return;if(isNaN(Number(n)))return void(_==null?void 0:_("Code should be numeric"));m==null||m();let f=Number((v=x.currentTarget.name)==null?void 0:v.charAt(5)),l=[...n||[""]].slice(0,J-f),t=[...c.slice(0,f),...l,...c.slice(f+l.length)];N(t);let A=Math.min(Math.max(f+l.length,0),J-1);if(!isNaN(Number(x.currentTarget.value))){let o=document.querySelector(`input[name=code-${A}]`);o==null||o.focus()}if(t.every(o=>o&&!isNaN(+o))){let o=document.querySelector(`input[name=code-${A}]`);o==null||o.blur(),await(T==null?void 0:T(t.join("")))}};return r.jsx(pe,{title:"Enter confirmation code",subtitle:r.jsxs("span",C==="email"?{children:["Please check ",r.jsx(ee,{children:a})," for an email from"," ",R??"privy.io"," and enter your code below."]}:{children:["Please check ",r.jsx(ee,{children:a})," for a",I?" WhatsApp":""," message from ",E," and enter your code below."]}),icon:C==="email"?re:oe,onBack:s,showBack:!0,helpText:r.jsxs(ge,{children:[r.jsxs("span",{children:["Didn't get ",C==="email"?"an email":"a message","?"]}),M?r.jsxs(Ee,{children:[r.jsx(te,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),r.jsx("span",{children:"Code sent"})]}):r.jsx(de,{as:"button",size:"sm",onClick:D,children:"Resend code"})]}),children:r.jsx(he,{children:r.jsx(ce,{children:r.jsxs(xe,{children:[r.jsx("div",{children:c.map((x,n)=>r.jsx("input",{name:`code-${n}`,type:"text",value:c[n],onChange:b,onKeyUp:f=>{f.key==="Backspace"&&(l=>{if(m==null||m(),N([...c.slice(0,l),"",...c.slice(l+1)]),l>0){let t=document.querySelector(`input[name=code-${l-1}]`);t==null||t.focus()}})(n)},inputMode:"numeric",autoFocus:n===0,pattern:"[0-9]",className:`${h?"success":""} ${p?"fail":""}`,autoComplete:le?"one-time-code":"off"},n))}),r.jsx(ye,{$fail:!!p,$success:h,children:r.jsx("span",{children:p==="Invalid or expired verification code"?"Incorrect code":p||(h?"Success!":"")})})]})})})})};let J=6,Z=Array(6).fill("");var w,k,fe=((w=fe||{})[w.RESET_AFTER_DELAY=0]="RESET_AFTER_DELAY",w[w.CLEAR_ON_NEXT_VALID_INPUT=1]="CLEAR_ON_NEXT_VALID_INPUT",w),ve=((k=ve||{})[k.EMAIL=0]="EMAIL",k[k.SMS=1]="SMS",k);const $e={component:()=>{var U,F,P;let{navigate:a,lastScreen:C,navigateBack:R,setModalData:E,onUserCloseViaDialogOrKeybindRef:I}=ae(),s=Q(),{closePrivyModal:T,resendEmailCode:D,resendSmsCode:p,getAuthMeta:h,loginWithCode:M,updateWallets:_,createAnalyticsEvent:m}=ne(),{authenticated:c,logout:N,user:b}=ie(),{whatsAppEnabled:x}=Q(),[n,f]=u.useState(!1),[l,t]=u.useState(null),[A,v]=u.useState(null),[o,L]=u.useState(0);I.current=()=>null;let j=(U=h())!=null&&U.email?0:1,$=j===0?((F=h())==null?void 0:F.email)||"":((P=h())==null?void 0:P.phoneNumber)||"",O=G-500;return u.useEffect(()=>{if(o){let i=setTimeout(()=>{L(o-1)},1e3);return()=>clearTimeout(i)}},[o]),u.useEffect(()=>{if(c&&n&&b){if(s!=null&&s.legal.requireUsersAcceptTerms&&!b.hasAcceptedTerms){let i=setTimeout(()=>{a("AffirmativeConsentScreen")},O);return()=>clearTimeout(i)}if(ue(b,s.embeddedWallets)){let i=setTimeout(()=>{E({createWallet:{onSuccess:()=>{},onFailure:d=>{console.error(d),m({eventName:"embedded_wallet_creation_failure_logout",payload:{error:d,screen:"AwaitingPasswordlessCodeScreen"}}),N()},callAuthOnSuccessOnClose:!0}}),a("EmbeddedWalletOnAccountCreateScreen")},O);return()=>clearTimeout(i)}{_();let i=setTimeout(()=>T({shouldCallAuthOnSuccess:!0,isSuccess:!0}),G);return()=>clearTimeout(i)}}},[c,n,b]),u.useEffect(()=>{if(l&&A===0){let i=setTimeout(()=>{t(null),v(null);let d=document.querySelector("input[name=code-0]");d==null||d.focus()},1400);return()=>clearTimeout(i)}},[l,A]),r.jsx(me,{contactMethod:$,authFlow:j===0?"email":"sms",emailDomain:s==null?void 0:s.appearance.emailDomain,appName:s==null?void 0:s.name,whatsAppEnabled:x,onBack:()=>R(),onCodeSubmit:async i=>{var d,W,B,q,V,K,z,X,Y,H;try{await M(i),f(!0)}catch(e){if(e instanceof y&&e.privyErrorCode===g.INVALID_CREDENTIALS)t("Invalid or expired verification code"),v(0);else if(e instanceof y&&e.privyErrorCode===g.CANNOT_LINK_MORE_OF_TYPE)t(e.message);else{if(e instanceof y&&e.privyErrorCode===g.USER_LIMIT_REACHED)return console.error(new se(e).toString()),void a("UserLimitReachedScreen");if(e instanceof y&&e.privyErrorCode===g.USER_DOES_NOT_EXIST)return void a("AccountNotFoundScreen");if(e instanceof y&&e.privyErrorCode===g.LINKED_TO_ANOTHER_USER)return E({errorModalData:{error:e,previousScreen:C??"AwaitingPasswordlessCodeScreen"}}),void a("ErrorScreen",!1);if(e instanceof y&&e.privyErrorCode===g.DISALLOWED_PLUS_EMAIL)return E({inlineError:{error:e}}),void a("ConnectOrCreateScreen",!1);if(e instanceof y&&e.privyErrorCode===g.ACCOUNT_TRANSFER_REQUIRED&&((W=(d=e.data)==null?void 0:d.data)!=null&&W.nonce))return E({accountTransfer:{nonce:(q=(B=e.data)==null?void 0:B.data)==null?void 0:q.nonce,account:$,displayName:(z=(K=(V=e.data)==null?void 0:V.data)==null?void 0:K.account)==null?void 0:z.displayName,linkMethod:j===0?"email":"sms",embeddedWalletAddress:(H=(Y=(X=e.data)==null?void 0:X.data)==null?void 0:Y.otherUser)==null?void 0:H.embeddedWalletAddress}}),void a("LinkConflictScreen");t("Issue verifying code"),v(0)}}},onResend:async()=>{L(30),j===0?await D():await p()},errorMessage:l||void 0,success:n,resendCountdown:o,onInvalidInput:i=>{t(i),v(1)},onClearError:()=>{A===1&&(t(null),v(null))}})}};let he=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`,xe=S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-sm);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-sm);
      padding: 8px 10px;
      height: 48px;
      width: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--privy-color-foreground);
      transition: all 0.2s ease;
    }

    > input:focus {
      border: 1px solid var(--privy-color-foreground);
      box-shadow: 0 0 0 1px var(--privy-color-foreground);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-border-success);
      background: var(--privy-color-success-bg);
    }

    > input.fail {
      border: 1px solid var(--privy-color-border-error);
      background: var(--privy-color-error-bg);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0);
    }
    33% {
      transform: translate(-1px, 0);
    }
    67% {
      transform: translate(-1px, 0);
    }
    100% {
      transform: translate(1px, 0);
    }
  }
`,ye=S.div`
  line-height: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${a=>a.$success?"var(--privy-color-success-dark)":a.$fail?"var(--privy-color-error-dark)":"transparent"};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`,ge=S.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`,Ee=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`,ee=S.span`
  font-weight: 500;
  word-break: break-all;
  color: var(--privy-color-foreground);
`;export{$e as AwaitingPasswordlessCodeScreen,me as AwaitingPasswordlessCodeScreenView,$e as default};
