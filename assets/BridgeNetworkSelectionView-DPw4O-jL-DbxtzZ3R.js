import{F as N,J as P,Z as w,b as t}from"./privyHost-B8_vgoSy.js";import{n as I}from"./getErc20Balance-DHgWH7_1-CU-zpa4K.js";import{r as R,j as e,q as U,s as E,y as q,v as z,w as D,x as J}from"./vendor-react-Dw-pcWBf.js";import{u as O,h as Q}from"./ModalFooter-DKyozrEX-DRwpjSZl.js";import{c as W,s as Y}from"./Layouts-BMRfo5hw-CsX__SGN.js";import{t as Z}from"./FundWalletMethodHeader-CkyJhN9p-BpYzaqVa.js";import{s as $,e as g,n as G}from"./Value-DTgR824E-Bs5ZVEBQ.js";import{e as H}from"./ErrorMessage-D8VaAP5m-CvbkO3So.js";import{r as K}from"./Subtitle-CV-2yKE4-C1gY_ncD.js";import{e as L}from"./Title-BnzYV3Is-CEDQA8Us.js";import{e as F}from"./getChainName-DjpPdUSc-c2urPd0g.js";import{n as M}from"./Chip-CZKIKt9K-CLe4H3W1.js";import{w as V}from"./TransferOrBridgeLoadingScreen-DUbPtRQe-DiJKUw5T.js";import{d as X,e as _}from"./shared-FM0rljBt-_A1RA13K.js";import{t as C}from"./formatErc20TokenAmount-BuPk9xcy-CkAr4Oc0.js";import{c as k}from"./ethers-DKNnmkib-ZVSZwuCs.js";import{a as ee,p as re,s as ae,c as ne,l as ie}from"./styles-C9oLwuTf-D9XzXyNI.js";import{m as se,n as te}from"./vendor-wagmi-BXbL8uxF.js";const Re=({chains:i,appId:r,address:a,rpcConfig:c})=>Promise.all(i.map(async n=>{let l=se({chain:n,transport:te(N(n,c,r))}),m=await l.getBalance({address:a}).catch(()=>0n),h=null,s=P[n.id];if(s){let{balance:p}=await I({address:a,chain:n,rpcConfig:c,appId:r,erc20Address:s});h=p}return{balance:m,erc20Balance:h,erc20Address:s,chain:n}})),oe=({balance:i,className:r,chain:a})=>e.jsx(X,{className:r,$state:void 0,children:e.jsx(x,{balance:i,chain:a})}),x=({balance:i,chain:r})=>e.jsxs(e.Fragment,{children:[e.jsxs(ce,{children:[e.jsx(de,{chainId:typeof r=="object"?r.id:"solana"}),e.jsx(G,{children:typeof r=="object"?r.name:F(r)})]}),e.jsxs(M,{isLoading:!1,isPulsing:!1,color:"gray",children:[e.jsx(le,{children:e.jsx(D,{})}),i]})]});let ce=t.div`
  display: flex;
  align-items: center;
`,le=t.div`
  height: 0.75rem;
  width: 0.75rem;
  margin-right: 0.2rem;
`,de=t(V)`
  height: 1.25rem;
  width: 1.25rem;
  display: inline-block;
  margin-right: 0.5rem;
  border-radius: 4px;
`;const me=({options:i,onSelect:r,selected:a,className:c})=>e.jsxs(U,{as:he,children:[e.jsxs(E,{as:ge,children:[e.jsx(x,{balance:a.balance,chain:a.chain}),e.jsx(b,{height:16})]}),e.jsx(q,{as:pe,className:c,children:i.map((n,l)=>e.jsx(z,{as:ue,onClick:()=>r(l),children:e.jsx(x,{balance:n.balance,chain:n.chain})},l))})]});let he=t.div`
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
`,b=t(J)`
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
`;const Ue=({displayName:i,errorMessage:r,configuredFundingChain:a,formattedBalance:c,fundingAmount:n,fundingCurrency:l,fundingAmountInUsd:m,options:h,selectedOption:s,isPreparing:p,isSubmitting:j,addressToFund:S,fundingWalletAddress:T,onSubmit:A,onSelect:B,onAmountChange:y})=>{let v=R.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(Z,{}),e.jsx(W,{}),e.jsx(L,{children:"Transfer from another network"}),e.jsxs(K,{children:["You need more funds on the"," ",typeof a=="object"?a.name:F(a)," ","network. Bridge from another blockchain network."]}),e.jsxs(ee,{style:{marginTop:"2rem"},children:[e.jsxs(re,{onClick:()=>{var o;return(o=v.current)==null?void 0:o.focus()},children:[e.jsx(ae,{ref:v,value:n,onChange:o=>{let d=o.target.value;if(/^[0-9.]*$/.test(d)&&d.split(".").length-1<=1){let f=/\.$/.test(d)?".":"",u=Number(d.replace(/\.$/,"")||"0");if(Number.isNaN(u))return void y("0");y(u.toString()+f)}}}),e.jsx(ne,{children:l})]}),m&&e.jsx(ie,{children:m})]}),e.jsxs($,{style:{marginTop:"1.5rem"},children:[e.jsx(g,{children:"From"}),e.jsx(g,{children:w(T)})]}),e.jsx(me,{selected:{chain:s.chain,balance:s.isErc20Quote?C({amount:s.erc20Balance??0n,decimals:6})+" USDC":k(s.balance,s.chain.nativeCurrency.symbol,3,!0)},options:h.map(({chain:o,balance:d,isErc20Quote:f,erc20Balance:u})=>({chain:o,balance:f?C({amount:u??0n,decimals:6})+" USDC":k(d,o.nativeCurrency.symbol,3,!0)})),onSelect:B}),e.jsxs($,{style:{marginTop:"1.5rem"},children:[e.jsx(g,{children:"To"}),e.jsx(g,{children:w(S)})]}),e.jsx(oe,{chain:a,balance:c}),e.jsx(H,{style:{marginTop:"1rem"},children:r}),e.jsxs(O,{style:{marginTop:"1rem"},loading:j||p,disabled:p||j,onClick:A,children:["Confirm with ",i]}),e.jsx(Y,{}),e.jsx(Q,{})]})};export{Re as U,Ue as X};
