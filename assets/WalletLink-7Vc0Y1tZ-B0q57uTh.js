import{fp as j,dl as n,fl as g,ft as o}from"./index-B5z1r2tA.js";import{l as $,i as a,n as d,c as p}from"./ethers-DKNnmkib-hKYMytnC.js";import{r as k}from"./getFormattedUsdFromLamports-De3U9GlO-C446pzMl.js";import{t as y}from"./transaction-BNTP-bFm-CrebgH-D.js";const O=({weiQuantities:e,tokenPrice:r,tokenSymbol:l})=>{let t=a(e),i=r?d(t,r):void 0,s=p(t,l);return n.jsx(c,{children:i||s})},P=({weiQuantities:e,tokenPrice:r,tokenSymbol:l})=>{let t=a(e),i=r?d(t,r):void 0,s=p(t,l);return n.jsx(c,{children:i?n.jsxs(n.Fragment,{children:[n.jsx(S,{children:"USD"}),i==="<$0.01"?n.jsxs(x,{children:[n.jsx(h,{children:"<"}),"$0.01"]}):i]}):s})},D=({quantities:e,tokenPrice:r,tokenSymbol:l="SOL",tokenDecimals:t=9})=>{let i=e.reduce((f,u)=>f+u,0n),s=r&&l==="SOL"&&t===9?k(i,r):void 0,m=l==="SOL"&&t===9?y(i):`${j(i,t)} ${l}`;return n.jsx(c,{children:s?n.jsx(n.Fragment,{children:s==="<$0.01"?n.jsxs(x,{children:[n.jsx(h,{children:"<"}),"$0.01"]}):s}):m})};let c=o.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,S=o.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,h=o.span`
  font-size: 10px;
`,x=o.span`
  display: flex;
  align-items: center;
`;function v(e,r){return`https://explorer.solana.com/account/${e}?chain=${r}`}const F=e=>n.jsx(w,{href:e.chainType==="ethereum"?$(e.chainId,e.walletAddress):v(e.walletAddress,e.chainId),target:"_blank",children:g(e.walletAddress)});let w=o.a`
  &:hover {
    text-decoration: underline;
  }
`;export{F as S,D as f,P as h,O as p};
