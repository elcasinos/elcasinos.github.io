import{r as u,j as r,B as re,C as oe,D as ae}from"./vendor-react-DSMResu1.js";import{b as te,a as Q,e as ie,p as ne,z as G,af as y,v as g,ag as se,A as le,i as S}from"./privyHost-BXhUX5OP.js";import{o as ce}from"./Layouts-BMRfo5hw-MQhgMehS.js";import{n as de}from"./Link-DTncR-24-DwjeSAsW.js";import{a as ue}from"./shouldProceedtoEmbeddedWalletCreationFlow-DDzHjOUJ-C6I48T2Y.js";import{n as pe}from"./ScreenLayout-DTsWfKKs-DsZzCYYt.js";import"./vendor-wagmi-OILVNHfs.js";import"./index-DgzIq63w.js";import"./vendor-query-DxDSQ3I8.js";import"./vendor-ethers-Cg-evgET.js";import"./vendor-icons-BXGiZuyb.js";import"./vendor-charts-CYZL7y4I.js";import"./ModalFooter-DKyozrEX-BR3Y1Gjl.js";import"./Screen-DMmH56yL-2uN2kUxN.js";import"./index-CWARkn2w-mz2ve7yo.js";const me=({contactMethod:t,authFlow:C,emailDomain:R,appName:E="Privy",whatsAppEnabled:I=!1,onBack:s,onCodeSubmit:T,onResend:D,errorMessage:p,success:h=!1,resendCountdown:M=0,onInvalidInput:_,onClearError:m})=>{let[c,N]=u.useState(Z);u.useEffect(()=>{p||N(Z)},[p]);let b=async x=>{var v;x.preventDefault();let i=x.currentTarget.value.replace(" ","");if(i==="")return;if(isNaN(Number(i)))return void(_==null?void 0:_("Code should be numeric"));m==null||m();let f=Number((v=x.currentTarget.name)==null?void 0:v.charAt(5)),l=[...i||[""]].slice(0,J-f),a=[...c.slice(0,f),...l,...c.slice(f+l.length)];N(a);let A=Math.min(Math.max(f+l.length,0),J-1);if(!isNaN(Number(x.currentTarget.value))){let o=document.querySelector(`input[name=code-${A}]`);o==null||o.focus()}if(a.every(o=>o&&!isNaN(+o))){let o=document.querySelector(`input[name=code-${A}]`);o==null||o.blur(),await(T==null?void 0:T(a.join("")))}};return r.jsx(pe,{title:"Enter confirmation code",subtitle:r.jsxs("span",C==="email"?{children:["Please check ",r.jsx(ee,{children:t})," for an email from"," ",R??"privy.io"," and enter your code below."]}:{children:["Please check ",r.jsx(ee,{children:t})," for a",I?" WhatsApp":""," message from ",E," and enter your code below."]}),icon:C==="email"?re:oe,onBack:s,showBack:!0,helpText:r.jsxs(ge,{children:[r.jsxs("span",{children:["Didn't get ",C==="email"?"an email":"a message","?"]}),M?r.jsxs(Ee,{children:[r.jsx(ae,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),r.jsx("span",{children:"Code sent"})]}):r.jsx(de,{as:"button",size:"sm",onClick:D,children:"Resend code"})]}),children:r.jsx(he,{children:r.jsx(ce,{children:r.jsxs(xe,{children:[r.jsx("div",{children:c.map((x,i)=>r.jsx("input",{name:`code-${i}`,type:"text",value:c[i],onChange:b,onKeyUp:f=>{f.key==="Backspace"&&(l=>{if(m==null||m(),N([...c.slice(0,l),"",...c.slice(l+1)]),l>0){let a=document.querySelector(`input[name=code-${l-1}]`);a==null||a.focus()}})(i)},inputMode:"numeric",autoFocus:i===0,pattern:"[0-9]",className:`${h?"success":""} ${p?"fail":""}`,autoComplete:le?"one-time-code":"off"},i))}),r.jsx(ye,{$fail:!!p,$success:h,children:r.jsx("span",{children:p==="Invalid or expired verification code"?"Incorrect code":p||(h?"Success!":"")})})]})})})})};let J=6,Z=Array(6).fill("");var w,k,fe=((w=fe||{})[w.RESET_AFTER_DELAY=0]="RESET_AFTER_DELAY",w[w.CLEAR_ON_NEXT_VALID_INPUT=1]="CLEAR_ON_NEXT_VALID_INPUT",w),ve=((k=ve||{})[k.EMAIL=0]="EMAIL",k[k.SMS=1]="SMS",k);const $e={component:()=>{var U,F,P;let{navigate:t,lastScreen:C,navigateBack:R,setModalData:E,onUserCloseViaDialogOrKeybindRef:I}=te(),s=Q(),{closePrivyModal:T,resendEmailCode:D,resendSmsCode:p,getAuthMeta:h,loginWithCode:M,updateWallets:_,createAnalyticsEvent:m}=ie(),{authenticated:c,logout:N,user:b}=ne(),{whatsAppEnabled:x}=Q(),[i,f]=u.useState(!1),[l,a]=u.useState(null),[A,v]=u.useState(null),[o,L]=u.useState(0);I.current=()=>null;let j=(U=h())!=null&&U.email?0:1,$=j===0?((F=h())==null?void 0:F.email)||"":((P=h())==null?void 0:P.phoneNumber)||"",O=G-500;return u.useEffect(()=>{if(o){let n=setTimeout(()=>{L(o-1)},1e3);return()=>clearTimeout(n)}},[o]),u.useEffect(()=>{if(c&&i&&b){if(s!=null&&s.legal.requireUsersAcceptTerms&&!b.hasAcceptedTerms){let n=setTimeout(()=>{t("AffirmativeConsentScreen")},O);return()=>clearTimeout(n)}if(ue(b,s.embeddedWallets)){let n=setTimeout(()=>{E({createWallet:{onSuccess:()=>{},onFailure:d=>{console.error(d),m({eventName:"embedded_wallet_creation_failure_logout",payload:{error:d,screen:"AwaitingPasswordlessCodeScreen"}}),N()},callAuthOnSuccessOnClose:!0}}),t("EmbeddedWalletOnAccountCreateScreen")},O);return()=>clearTimeout(n)}{_();let n=setTimeout(()=>T({shouldCallAuthOnSuccess:!0,isSuccess:!0}),G);return()=>clearTimeout(n)}}},[c,i,b]),u.useEffect(()=>{if(l&&A===0){let n=setTimeout(()=>{a(null),v(null);let d=document.querySelector("input[name=code-0]");d==null||d.focus()},1400);return()=>clearTimeout(n)}},[l,A]),r.jsx(me,{contactMethod:$,authFlow:j===0?"email":"sms",emailDomain:s==null?void 0:s.appearance.emailDomain,appName:s==null?void 0:s.name,whatsAppEnabled:x,onBack:()=>R(),onCodeSubmit:async n=>{var d,W,B,q,V,z,K,X,Y,H;try{await M(n),f(!0)}catch(e){if(e instanceof y&&e.privyErrorCode===g.INVALID_CREDENTIALS)a("Invalid or expired verification code"),v(0);else if(e instanceof y&&e.privyErrorCode===g.CANNOT_LINK_MORE_OF_TYPE)a(e.message);else{if(e instanceof y&&e.privyErrorCode===g.USER_LIMIT_REACHED)return console.error(new se(e).toString()),void t("UserLimitReachedScreen");if(e instanceof y&&e.privyErrorCode===g.USER_DOES_NOT_EXIST)return void t("AccountNotFoundScreen");if(e instanceof y&&e.privyErrorCode===g.LINKED_TO_ANOTHER_USER)return E({errorModalData:{error:e,previousScreen:C??"AwaitingPasswordlessCodeScreen"}}),void t("ErrorScreen",!1);if(e instanceof y&&e.privyErrorCode===g.DISALLOWED_PLUS_EMAIL)return E({inlineError:{error:e}}),void t("ConnectOrCreateScreen",!1);if(e instanceof y&&e.privyErrorCode===g.ACCOUNT_TRANSFER_REQUIRED&&((W=(d=e.data)==null?void 0:d.data)!=null&&W.nonce))return E({accountTransfer:{nonce:(q=(B=e.data)==null?void 0:B.data)==null?void 0:q.nonce,account:$,displayName:(K=(z=(V=e.data)==null?void 0:V.data)==null?void 0:z.account)==null?void 0:K.displayName,linkMethod:j===0?"email":"sms",embeddedWalletAddress:(H=(Y=(X=e.data)==null?void 0:X.data)==null?void 0:Y.otherUser)==null?void 0:H.embeddedWalletAddress}}),void t("LinkConflictScreen");a("Issue verifying code"),v(0)}}},onResend:async()=>{L(30),j===0?await D():await p()},errorMessage:l||void 0,success:i,resendCountdown:o,onInvalidInput:n=>{a(n),v(1)},onClearError:()=>{A===1&&(a(null),v(null))}})}};let he=S.div`
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
  color: ${t=>t.$success?"var(--privy-color-success-dark)":t.$fail?"var(--privy-color-error-dark)":"transparent"};
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
