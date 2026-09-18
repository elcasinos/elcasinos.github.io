import{fb as j,dm as n,f7 as g,fl as o}from"./index-CNCpb7om.js";import{l as $,i as a,n as d,c as h}from"./ethers-DKNnmkib-DyBX2Oas.js";import{r as k}from"./getFormattedUsdFromLamports-De3U9GlO-C446pzMl.js";import{t as y}from"./transaction-BNTP-bFm-CrebgH-D.js";const O=({weiQuantities:e,tokenPrice:r,tokenSymbol:l})=>{let i=a(e),t=r?d(i,r):void 0,s=h(i,l);return n.jsx(c,{children:t||s})},P=({weiQuantities:e,tokenPrice:r,tokenSymbol:l})=>{let i=a(e),t=r?d(i,r):void 0,s=h(i,l);return n.jsx(c,{children:t?n.jsxs(n.Fragment,{children:[n.jsx(S,{children:"USD"}),t==="<$0.01"?n.jsxs(x,{children:[n.jsx(p,{children:"<"}),"$0.01"]}):t]}):s})},D=({quantities:e,tokenPrice:r,tokenSymbol:l="SOL",tokenDecimals:i=9})=>{let t=e.reduce((f,u)=>f+u,0n),s=r&&l==="SOL"&&i===9?k(t,r):void 0,m=l==="SOL"&&i===9?y(t):`${j(t,i)} ${l}`;return n.jsx(c,{children:s?n.jsx(n.Fragment,{children:s==="<$0.01"?n.jsxs(x,{children:[n.jsx(p,{children:"<"}),"$0.01"]}):s}):m})};let c=o.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,S=o.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,p=o.span`
  font-size: 10px;
`,x=o.span`
  display: flex;
  align-items: center;
`;function v(e,r){return`https://explorer.solana.com/account/${e}?chain=${r}`}const F=e=>n.jsx(b,{href:e.chainType==="ethereum"?$(e.chainId,e.walletAddress):v(e.walletAddress,e.chainId),target:"_blank",children:g(e.walletAddress)});let b=o.a`
  &:hover {
    text-decoration: underline;
  }
`;export{F as S,D as f,P as h,O as p};
