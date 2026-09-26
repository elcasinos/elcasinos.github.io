import{j as n}from"./vendor-react-Dw-pcWBf.js";import{U as j,i as l}from"./privyHost-CnWLjDaL.js";import{l as g,i as c,n as d,c as p}from"./ethers-DKNnmkib-BnCSnLE1.js";import{r as $}from"./getFormattedUsdFromLamports-De3U9GlO-C446pzMl.js";import{t as k}from"./transaction-BNTP-bFm-CrebgH-D.js";import{aw as y}from"./vendor-wagmi-B1Ud2aV8.js";const U=({weiQuantities:e,tokenPrice:r,tokenSymbol:o})=>{let i=c(e),t=r?d(i,r):void 0,s=p(i,o);return n.jsx(a,{children:t||s})},D=({weiQuantities:e,tokenPrice:r,tokenSymbol:o})=>{let i=c(e),t=r?d(i,r):void 0,s=p(i,o);return n.jsx(a,{children:t?n.jsxs(n.Fragment,{children:[n.jsx(S,{children:"USD"}),t==="<$0.01"?n.jsxs(h,{children:[n.jsx(m,{children:"<"}),"$0.01"]}):t]}):s})},F=({quantities:e,tokenPrice:r,tokenSymbol:o="SOL",tokenDecimals:i=9})=>{let t=e.reduce((f,u)=>f+u,0n),s=r&&o==="SOL"&&i===9?$(t,r):void 0,x=o==="SOL"&&i===9?k(t):`${y(t,i)} ${o}`;return n.jsx(a,{children:s?n.jsx(n.Fragment,{children:s==="<$0.01"?n.jsxs(h,{children:[n.jsx(m,{children:"<"}),"$0.01"]}):s}):x})};let a=l.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,S=l.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,m=l.span`
  font-size: 10px;
`,h=l.span`
  display: flex;
  align-items: center;
`;function v(e,r){return`https://explorer.solana.com/account/${e}?chain=${r}`}const I=e=>n.jsx(w,{href:e.chainType==="ethereum"?g(e.chainId,e.walletAddress):v(e.walletAddress,e.chainId),target:"_blank",children:j(e.walletAddress)});let w=l.a`
  &:hover {
    text-decoration: underline;
  }
`;export{I as S,F as f,D as h,U as p};
