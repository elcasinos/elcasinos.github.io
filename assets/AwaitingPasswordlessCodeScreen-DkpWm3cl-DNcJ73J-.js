import{dk as s,f8 as re,f9 as Q,fa as oe,fR as ae,fN as Z,dl as r,gf as E,fd as b,f_ as te,fP as ne,fs as S}from"./index-26z5Yfo3.js";import{F as ie}from"./EnvelopeIcon-CiJEU1tp.js";import{F as se}from"./PhoneIcon-DSpO8UdG.js";import{o as le}from"./Layouts-BMRfo5hw-CoYeY5e9.js";import{n as ce}from"./Link-DTncR-24-DLs-85iQ.js";import{a as de}from"./shouldProceedtoEmbeddedWalletCreationFlow-DDzHjOUJ-BkFAiMAR.js";import{n as ue}from"./ScreenLayout-DTsWfKKs-Dhqj4fla.js";import"./ModalFooter-DKyozrEX-BF-lHNKI.js";import"./Screen-DMmH56yL-CqxrIlBw.js";import"./index-CWARkn2w-iGo3LWCP.js";function pe({title:o,titleId:p,...w},f){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":p},w),o?s.createElement("title",{id:p},o):null,s.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"}))}const fe=s.forwardRef(pe),me=({contactMethod:o,authFlow:p,emailDomain:w,appName:f="Privy",whatsAppEnabled:I=!1,onBack:l,onCodeSubmit:T,onResend:M,errorMessage:m,success:x=!1,resendCountdown:D=0,onInvalidInput:_,onClearError:v})=>{let[d,N]=s.useState(J);s.useEffect(()=>{m||N(J)},[m]);let A=async y=>{var g;y.preventDefault();let n=y.currentTarget.value.replace(" ","");if(n==="")return;if(isNaN(Number(n)))return void(_==null?void 0:_("Code should be numeric"));v==null||v();let h=Number((g=y.currentTarget.name)==null?void 0:g.charAt(5)),c=[...n||[""]].slice(0,G-h),t=[...d.slice(0,h),...c,...d.slice(h+c.length)];N(t);let C=Math.min(Math.max(h+c.length,0),G-1);if(!isNaN(Number(y.currentTarget.value))){let a=document.querySelector(`input[name=code-${C}]`);a==null||a.focus()}if(t.every(a=>a&&!isNaN(+a))){let a=document.querySelector(`input[name=code-${C}]`);a==null||a.blur(),await(T==null?void 0:T(t.join("")))}};return r.jsx(ue,{title:"Enter confirmation code",subtitle:r.jsxs("span",p==="email"?{children:["Please check ",r.jsx(ee,{children:o})," for an email from"," ",w??"privy.io"," and enter your code below."]}:{children:["Please check ",r.jsx(ee,{children:o})," for a",I?" WhatsApp":""," message from ",f," and enter your code below."]}),icon:p==="email"?ie:se,onBack:l,showBack:!0,helpText:r.jsxs(Ee,{children:[r.jsxs("span",{children:["Didn't get ",p==="email"?"an email":"a message","?"]}),D?r.jsxs(be,{children:[r.jsx(fe,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),r.jsx("span",{children:"Code sent"})]}):r.jsx(ce,{as:"button",size:"sm",onClick:M,children:"Resend code"})]}),children:r.jsx(ge,{children:r.jsx(le,{children:r.jsxs(xe,{children:[r.jsx("div",{children:d.map((y,n)=>r.jsx("input",{name:`code-${n}`,type:"text",value:d[n],onChange:A,onKeyUp:h=>{h.key==="Backspace"&&(c=>{if(v==null||v(),N([...d.slice(0,c),"",...d.slice(c+1)]),c>0){let t=document.querySelector(`input[name=code-${c-1}]`);t==null||t.focus()}})(n)},inputMode:"numeric",autoFocus:n===0,pattern:"[0-9]",className:`${x?"success":""} ${m?"fail":""}`,autoComplete:ne?"one-time-code":"off"},n))}),r.jsx(ye,{$fail:!!m,$success:x,children:r.jsx("span",{children:m==="Invalid or expired verification code"?"Incorrect code":m||(x?"Success!":"")})})]})})})})};let G=6,J=Array(6).fill("");var k,R,ve=((k=ve||{})[k.RESET_AFTER_DELAY=0]="RESET_AFTER_DELAY",k[k.CLEAR_ON_NEXT_VALID_INPUT=1]="CLEAR_ON_NEXT_VALID_INPUT",k),he=((R=he||{})[R.EMAIL=0]="EMAIL",R[R.SMS=1]="SMS",R);const Ie={component:()=>{var F,P,U;let{navigate:o,lastScreen:p,navigateBack:w,setModalData:f,onUserCloseViaDialogOrKeybindRef:I}=re(),l=Q(),{closePrivyModal:T,resendEmailCode:M,resendSmsCode:m,getAuthMeta:x,loginWithCode:D,updateWallets:_,createAnalyticsEvent:v}=oe(),{authenticated:d,logout:N,user:A}=ae(),{whatsAppEnabled:y}=Q(),[n,h]=s.useState(!1),[c,t]=s.useState(null),[C,g]=s.useState(null),[a,L]=s.useState(0);I.current=()=>null;let j=(F=x())!=null&&F.email?0:1,$=j===0?((P=x())==null?void 0:P.email)||"":((U=x())==null?void 0:U.phoneNumber)||"",O=Z-500;return s.useEffect(()=>{if(a){let i=setTimeout(()=>{L(a-1)},1e3);return()=>clearTimeout(i)}},[a]),s.useEffect(()=>{if(d&&n&&A){if(l!=null&&l.legal.requireUsersAcceptTerms&&!A.hasAcceptedTerms){let i=setTimeout(()=>{o("AffirmativeConsentScreen")},O);return()=>clearTimeout(i)}if(de(A,l.embeddedWallets)){let i=setTimeout(()=>{f({createWallet:{onSuccess:()=>{},onFailure:u=>{console.error(u),v({eventName:"embedded_wallet_creation_failure_logout",payload:{error:u,screen:"AwaitingPasswordlessCodeScreen"}}),N()},callAuthOnSuccessOnClose:!0}}),o("EmbeddedWalletOnAccountCreateScreen")},O);return()=>clearTimeout(i)}{_();let i=setTimeout(()=>T({shouldCallAuthOnSuccess:!0,isSuccess:!0}),Z);return()=>clearTimeout(i)}}},[d,n,A]),s.useEffect(()=>{if(c&&C===0){let i=setTimeout(()=>{t(null),g(null);let u=document.querySelector("input[name=code-0]");u==null||u.focus()},1400);return()=>clearTimeout(i)}},[c,C]),r.jsx(me,{contactMethod:$,authFlow:j===0?"email":"sms",emailDomain:l==null?void 0:l.appearance.emailDomain,appName:l==null?void 0:l.name,whatsAppEnabled:y,onBack:()=>w(),onCodeSubmit:async i=>{var u,W,B,q,V,K,z,X,Y,H;try{await D(i),h(!0)}catch(e){if(e instanceof E&&e.privyErrorCode===b.INVALID_CREDENTIALS)t("Invalid or expired verification code"),g(0);else if(e instanceof E&&e.privyErrorCode===b.CANNOT_LINK_MORE_OF_TYPE)t(e.message);else{if(e instanceof E&&e.privyErrorCode===b.USER_LIMIT_REACHED)return console.error(new te(e).toString()),void o("UserLimitReachedScreen");if(e instanceof E&&e.privyErrorCode===b.USER_DOES_NOT_EXIST)return void o("AccountNotFoundScreen");if(e instanceof E&&e.privyErrorCode===b.LINKED_TO_ANOTHER_USER)return f({errorModalData:{error:e,previousScreen:p??"AwaitingPasswordlessCodeScreen"}}),void o("ErrorScreen",!1);if(e instanceof E&&e.privyErrorCode===b.DISALLOWED_PLUS_EMAIL)return f({inlineError:{error:e}}),void o("ConnectOrCreateScreen",!1);if(e instanceof E&&e.privyErrorCode===b.ACCOUNT_TRANSFER_REQUIRED&&((W=(u=e.data)==null?void 0:u.data)!=null&&W.nonce))return f({accountTransfer:{nonce:(q=(B=e.data)==null?void 0:B.data)==null?void 0:q.nonce,account:$,displayName:(z=(K=(V=e.data)==null?void 0:V.data)==null?void 0:K.account)==null?void 0:z.displayName,linkMethod:j===0?"email":"sms",embeddedWalletAddress:(H=(Y=(X=e.data)==null?void 0:X.data)==null?void 0:Y.otherUser)==null?void 0:H.embeddedWalletAddress}}),void o("LinkConflictScreen");t("Issue verifying code"),g(0)}}},onResend:async()=>{L(30),j===0?await M():await m()},errorMessage:c||void 0,success:n,resendCountdown:a,onInvalidInput:i=>{t(i),g(1)},onClearError:()=>{C===1&&(t(null),g(null))}})}};let ge=S.div`
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
  color: ${o=>o.$success?"var(--privy-color-success-dark)":o.$fail?"var(--privy-color-error-dark)":"transparent"};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`,Ee=S.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`,be=S.div`
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
`;export{Ie as AwaitingPasswordlessCodeScreen,me as AwaitingPasswordlessCodeScreenView,Ie as default};
