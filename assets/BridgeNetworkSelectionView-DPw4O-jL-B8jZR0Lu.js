import{V as N,a0 as P,a1 as w,i as t}from"./privyHost-Cx5d0qw3.js";import{n as I}from"./getErc20Balance-DHgWH7_1-CxXthHhM.js";import{r as R,j as e,q as U,s as q,y as E,v as z,w as D,x as O}from"./vendor-react-DSMResu1.js";import{u as Q,h as V}from"./ModalFooter-DKyozrEX-CKNg5Sms.js";import{c as W,s as Y}from"./Layouts-BMRfo5hw-B09Qba6-.js";import{t as G}from"./FundWalletMethodHeader-CkyJhN9p-QwNfZ_59.js";import{s as $,e as g,n as H}from"./Value-DTgR824E-nDr5lZoE.js";import{e as J}from"./ErrorMessage-D8VaAP5m-RDeXZzR2.js";import{r as K}from"./Subtitle-CV-2yKE4-LdNNwfAE.js";import{e as L}from"./Title-BnzYV3Is-DClRfLa-.js";import{e as F}from"./getChainName-DjpPdUSc-c2urPd0g.js";import{n as M}from"./Chip-CZKIKt9K-Bxt-NX8m.js";import{w as X}from"./TransferOrBridgeLoadingScreen-DUbPtRQe-DR-glWp2.js";import{d as Z,e as _}from"./shared-FM0rljBt-_8EWyAfq.js";import{t as C}from"./formatErc20TokenAmount-BuPk9xcy-CkAr4Oc0.js";import{c as k}from"./ethers-DKNnmkib-KP1wc0Lz.js";import{a as ee,p as re,s as ae,c as ne,l as ie}from"./styles-C9oLwuTf-CrudGkgT.js";import{q as se,r as te}from"./vendor-wagmi-OILVNHfs.js";const Re=({chains:i,appId:r,address:a,rpcConfig:c})=>Promise.all(i.map(async n=>{let l=se({chain:n,transport:te(N(n,c,r))}),m=await l.getBalance({address:a}).catch(()=>0n),h=null,s=P[n.id];if(s){let{balance:p}=await I({address:a,chain:n,rpcConfig:c,appId:r,erc20Address:s});h=p}return{balance:m,erc20Balance:h,erc20Address:s,chain:n}})),oe=({balance:i,className:r,chain:a})=>e.jsx(Z,{className:r,$state:void 0,children:e.jsx(x,{balance:i,chain:a})}),x=({balance:i,chain:r})=>e.jsxs(e.Fragment,{children:[e.jsxs(ce,{children:[e.jsx(de,{chainId:typeof r=="object"?r.id:"solana"}),e.jsx(H,{children:typeof r=="object"?r.name:F(r)})]}),e.jsxs(M,{isLoading:!1,isPulsing:!1,color:"gray",children:[e.jsx(le,{children:e.jsx(D,{})}),i]})]});let ce=t.div`
  display: flex;
  align-items: center;
`,le=t.div`
  height: 0.75rem;
  width: 0.75rem;
  margin-right: 0.2rem;
`,de=t(X)`
  height: 1.25rem;
  width: 1.25rem;
  display: inline-block;
  margin-right: 0.5rem;
  border-radius: 4px;
`;const me=({options:i,onSelect:r,selected:a,className:c})=>e.jsxs(U,{as:he,children:[e.jsxs(q,{as:ge,children:[e.jsx(x,{balance:a.balance,chain:a.chain}),e.jsx(b,{height:16})]}),e.jsx(E,{as:pe,className:c,children:i.map((n,l)=>e.jsx(z,{as:ue,onClick:()=>r(l),children:e.jsx(x,{balance:n.balance,chain:n.chain})},l))})]});let he=t.div`
  width: 100%;
  position: relative;
`,pe=t.div`
  width: 100%;
  margin-top: 0.5rem;
  position: absolute;
  background-color: var(--privy-color-background);
  border-radius: var(--privy-border-radius-md);
  overflow: hidden auto;
  box-shadow: 0 1px 2px 0 rgb(16 24 40 / 5%);
  max-height: 11.75rem;

  && {
    border: solid 1px var(--privy-color-foreground-4);
  }

  z-index: 1;
`,ue=t.button`
  width: 100%;
  display: flex;
  justify-content: space-between;

  && {
    padding: 1rem;
  }

  :not(:last-child) {
    border-bottom: solid 1px var(--privy-color-foreground-4);
  }

  :hover {
    background: var(--privy-color-background-2);
  }
`,b=t(O)`
  height: 1rem;
  margin-left: 0.5rem;
`,ge=t.button`
  ${_}

  /* Push the chip all the way to the right */
  span {
    margin-left: auto;
  }

  ${b} {
    transition: rotate 100ms ease-in;
  }

  &[aria-expanded='true'] {
    ${b} {
      rotate: -180deg;
    }
  }
`;const Ue=({displayName:i,errorMessage:r,configuredFundingChain:a,formattedBalance:c,fundingAmount:n,fundingCurrency:l,fundingAmountInUsd:m,options:h,selectedOption:s,isPreparing:p,isSubmitting:j,addressToFund:S,fundingWalletAddress:T,onSubmit:A,onSelect:B,onAmountChange:y})=>{let v=R.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(G,{}),e.jsx(W,{}),e.jsx(L,{children:"Transfer from another network"}),e.jsxs(K,{children:["You need more funds on the"," ",typeof a=="object"?a.name:F(a)," ","network. Bridge from another blockchain network."]}),e.jsxs(ee,{style:{marginTop:"2rem"},children:[e.jsxs(re,{onClick:()=>{var o;return(o=v.current)==null?void 0:o.focus()},children:[e.jsx(ae,{ref:v,value:n,onChange:o=>{let d=o.target.value;if(/^[0-9.]*$/.test(d)&&d.split(".").length-1<=1){let f=/\.$/.test(d)?".":"",u=Number(d.replace(/\.$/,"")||"0");if(Number.isNaN(u))return void y("0");y(u.toString()+f)}}}),e.jsx(ne,{children:l})]}),m&&e.jsx(ie,{children:m})]}),e.jsxs($,{style:{marginTop:"1.5rem"},children:[e.jsx(g,{children:"From"}),e.jsx(g,{children:w(T)})]}),e.jsx(me,{selected:{chain:s.chain,balance:s.isErc20Quote?C({amount:s.erc20Balance??0n,decimals:6})+" USDC":k(s.balance,s.chain.nativeCurrency.symbol,3,!0)},options:h.map(({chain:o,balance:d,isErc20Quote:f,erc20Balance:u})=>({chain:o,balance:f?C({amount:u??0n,decimals:6})+" USDC":k(d,o.nativeCurrency.symbol,3,!0)})),onSelect:B}),e.jsxs($,{style:{marginTop:"1.5rem"},children:[e.jsx(g,{children:"To"}),e.jsx(g,{children:w(S)})]}),e.jsx(oe,{chain:a,balance:c}),e.jsx(J,{style:{marginTop:"1rem"},children:r}),e.jsxs(Q,{style:{marginTop:"1rem"},loading:j||p,disabled:p||j,onClick:A,children:["Confirm with ",i]}),e.jsx(Y,{}),e.jsx(V,{})]})};export{Re as U,Ue as X};
