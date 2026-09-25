import{r as f,j as t}from"./vendor-react-DSMResu1.js";import{p as P,b as z,bt as D,bu as E,c9 as V,A as R,i as w}from"./privyHost-CaFLl_90.js";import{h as Y}from"./CopyableText-CQapvaMr-B3GJ0hDn.js";import{n as C}from"./ScreenLayout-DTsWfKKs-Cag_3O_Y.js";import{t as M}from"./InfoBanner-Cb3p1z12-DArAor1Y.js";import{w as K,c as O,p as q}from"./SelectSourceAsset-CXcAyH34-BC9jFw3T.js";import"./vendor-wagmi-OILVNHfs.js";import{bv as H,bg as N,b0 as X,b6 as U}from"./vendor-icons-CiQfAMQ7.js";import"./index-BICUplDg.js";import"./vendor-query-DxDSQ3I8.js";import"./vendor-ethers-Cg-evgET.js";import"./vendor-charts-CYZL7y4I.js";import"./ModalFooter-DKyozrEX-B-EBDWhy.js";import"./Screen-DMmH56yL-CGS6uORS.js";import"./index-CWARkn2w-BfU2XR4M.js";const G=e=>{try{return e.location.origin}catch{return}},J=({data:e,onClose:a})=>t.jsx(C,{showClose:!0,onClose:a,title:"Initiate bank transfer",subtitle:"Use the details below to complete a bank transfer from your bank.",primaryCta:{label:"Done",onClick:a},watermark:!1,footerText:"Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately",children:t.jsx(Q,{children:(V[e.deposit_instructions.asset]||[]).map(([u,y],g)=>{let d=e.deposit_instructions[u];if(!d||Array.isArray(d))return null;let o=u==="asset"?d.toUpperCase():d,h=o.length>100?`${o.slice(0,9)}...${o.slice(-9)}`:o;return t.jsxs(Z,{children:[t.jsx(ee,{children:y}),t.jsx(Y,{value:o,includeChildren:R,children:t.jsx(te,{children:h})})]},g)})})});let Q=w.ol`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;
  flex-direction: column;

  && {
    padding: 0 1rem;
  }
`,Z=w.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid var(--privy-color-border-default);
  }

  & > {
    :nth-child(1) {
      flex-basis: 30%;
    }

    :nth-child(2) {
      flex-basis: 60%;
    }
  }
`,ee=w.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'calt' off;

  /* text-xs/font-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  text-align: left;
  flex-shrink: 0;
`,te=w.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;

  /* text-sm/font-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  text-align: right;
  word-break: break-all;
`;const se=({onClose:e})=>t.jsx(C,{showClose:!0,onClose:e,icon:U,iconVariant:"error",title:"Something went wrong",subtitle:"We couldn't complete account setup. This isn't caused by anything you did.",primaryCta:{label:"Close",onClick:e},watermark:!0}),re=({onClose:e,reason:a})=>{let u=a?a.charAt(0).toLowerCase()+a.slice(1):void 0;return t.jsx(C,{showClose:!0,onClose:e,icon:U,iconVariant:"error",title:"Identity verification failed",subtitle:u?`We can't complete identity verification because ${u}. Please try again or contact support for assistance.`:"We couldn't verify your identity. Please try again or contact support for assistance.",primaryCta:{label:"Close",onClick:e},watermark:!0})},oe=({onClose:e,email:a})=>t.jsx(C,{showClose:!0,onClose:e,icon:N,title:"Identity verification in progress",subtitle:"We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.",primaryCta:{label:"Done",onClick:e},watermark:!0,children:t.jsxs(M,{theme:"light",children:["You'll receive an email at ",a," once approved with instructions for completing your deposit."]})}),ae=({onClose:e,onAcceptTerms:a,isLoading:u})=>t.jsx(C,{showClose:!0,onClose:e,icon:H,title:"Verify your identity to continue",subtitle:"Finish verification with Persona — it takes just a few minutes and requires a government ID.",helpText:t.jsxs(t.Fragment,{children:[`This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge's`," ",t.jsx("a",{href:"https://www.bridge.xyz/legal",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"})," ","and"," ",t.jsx("a",{href:"https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]}),primaryCta:{label:"Accept and continue",onClick:a,loading:u},watermark:!0}),ie=({onClose:e})=>t.jsx(C,{showClose:!0,onClose:e,icon:X,iconVariant:"success",title:"Identity verified successfully",subtitle:"We've successfully verified your identity. Now initiate a bank transfer to view instructions.",primaryCta:{label:"Initiate bank transfer",onClick:()=>{},loading:!0},watermark:!0}),ne=({opts:e,onClose:a,onEditSourceAsset:u,onSelectAmount:y,isLoading:g})=>t.jsxs(C,{showClose:!0,onClose:a,headerTitle:`Buy ${e.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:"Continue",onClick:y,loading:g},watermark:!0,children:[t.jsx(O,{currency:e.source.selectedAsset,inputMode:"decimal",autoFocus:!0}),t.jsx(q,{selectedAsset:e.source.selectedAsset,onEditSourceAsset:u})]}),le=({onClose:e,onAcceptTerms:a,onSelectAmount:u,onSelectSource:y,onEditSourceAsset:g,opts:d,state:o,email:h,isLoading:n})=>o.status==="select-amount"?t.jsx(ne,{onClose:e,onSelectAmount:u,onEditSourceAsset:g,opts:d,isLoading:n}):o.status==="select-source-asset"?t.jsx(K,{onSelectSource:y,opts:d,isLoading:n}):o.status==="kyc-prompt"?t.jsx(ae,{onClose:e,onAcceptTerms:a,opts:d,isLoading:n}):o.status==="kyc-incomplete"?t.jsx(oe,{onClose:e,email:h}):o.status==="kyc-success"?t.jsx(ie,{onClose:e}):o.status==="kyc-error"?t.jsx(re,{onClose:e,reason:o.reason}):o.status==="account-details"?t.jsx(J,{onClose:e,data:o.data}):o.status==="create-customer-error"||o.status==="get-customer-error"?t.jsx(se,{onClose:e}):null,je={component:()=>{let{user:e}=P(),a=z().data;if(!(a!=null&&a.FundWithBankDepositScreen))throw Error("Missing data");let{onSuccess:u,onFailure:y,opts:g,createOrUpdateCustomer:d,getCustomer:o,getOrCreateVirtualAccount:h}=a.FundWithBankDepositScreen,[n,A]=f.useState(g),[v,r]=f.useState({status:"select-amount"}),[x,l]=f.useState(null),[T,i]=f.useState(!1),b=f.useRef(null),_=f.useCallback(async()=>{var k,m;let s;i(!0),l(null);try{s=await o({kycRedirectUrl:window.location.origin})}catch(c){if(!c||typeof c!="object"||!("status"in c)||c.status!==404)return r({status:"get-customer-error"}),l(c),void i(!1)}if(!s)try{s=await d({hasAcceptedTerms:!1,kycRedirectUrl:window.location.origin})}catch(c){return r({status:"create-customer-error"}),l(c),void i(!1)}if(!s)return r({status:"create-customer-error"}),l(Error("Unable to create customer")),void i(!1);if(s.status==="not_started"&&s.kyc_url)return r({status:"kyc-prompt",kycUrl:s.kyc_url}),void i(!1);if(s.status==="not_started")return r({status:"get-customer-error"}),l(Error("Unexpected user state")),void i(!1);if(s.status==="rejected")return r({status:"kyc-error",reason:(m=(k=s.rejection_reasons)==null?void 0:k[0])==null?void 0:m.reason}),l(Error("User KYC rejected.")),void i(!1);if(s.status==="incomplete")return r({status:"kyc-incomplete"}),void i(!1);if(s.status!=="active")return r({status:"get-customer-error"}),l(Error("Unexpected user state")),void i(!1);s.status;try{let c=await h({destination:n.destination,provider:n.provider,source:{asset:n.source.selectedAsset}});r({status:"account-details",data:c})}catch(c){return r({status:"create-customer-error"}),l(c),void i(!1)}},[n]),L=f.useCallback(async()=>{var c,S;if(l(null),i(!0),v.status!=="kyc-prompt")return l(Error("Unexpected state")),void i(!1);let s=D({location:v.kycUrl});if(await d({hasAcceptedTerms:!0}),!s)return l(Error("Unable to begin kyc flow.")),i(!1),void r({status:"create-customer-error"});b.current=new AbortController;let k=await(async(p,B)=>{let j=await E({operation:async()=>({done:G(p)===window.location.origin,closed:p.closed}),until:({done:F,closed:I})=>F||I,delay:0,interval:500,attempts:360,signal:B});return j.status==="aborted"?(p.close(),{status:"aborted"}):j.status==="max_attempts"?{status:"timeout"}:j.result.done?(p.close(),{status:"redirected"}):{status:"closed"}})(s,b.current.signal);if(k.status==="aborted")return;if(k.status==="closed")return void i(!1);k.status;let m=await E({operation:()=>o({}),until:p=>p.status==="active"||p.status==="rejected",delay:0,interval:2e3,attempts:60,signal:b.current.signal});if(m.status!=="aborted"){if(m.status==="max_attempts")return r({status:"kyc-incomplete"}),void i(!1);if(m.status,m.result.status==="rejected")return r({status:"kyc-error",reason:(S=(c=m.result.rejection_reasons)==null?void 0:c[0])==null?void 0:S.reason}),l(Error("User KYC rejected.")),void i(!1);if(m.result.status!=="active")return r({status:"kyc-incomplete"}),void i(!1);s.closed||s.close(),m.result.status;try{r({status:"kyc-success"});let p=await h({destination:n.destination,provider:n.provider,source:{asset:n.source.selectedAsset}});r({status:"account-details",data:p})}catch(p){r({status:"create-customer-error"}),l(p)}finally{i(!1)}}},[r,l,i,d,h,v,n,b]),W=f.useCallback(s=>{r({status:"select-amount"}),A({...n,source:{...n.source,selectedAsset:s}})},[r,A]),$=f.useCallback(()=>{r({status:"select-source-asset"})},[r]);return t.jsx(le,{onClose:f.useCallback(async()=>{var s;(s=b.current)==null||s.abort(),x?y(x):await u()},[x,b]),opts:n,state:v,isLoading:T,email:e.email.address,onAcceptTerms:L,onSelectAmount:_,onSelectSource:W,onEditSourceAsset:$})}};export{je as FundWithBankDepositScreen,je as default};
