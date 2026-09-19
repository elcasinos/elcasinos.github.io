import{ap as p,ar as e}from"./index-DU4alX5q.js";import{cl as m,cb as t}from"./privyHost-qA3x5rf5.js";import{f as d}from"./ModalFooter-DKyozrEX-BQ_N8ITH.js";import{C as x}from"./check-DfOP04Q1.js";import{C as f}from"./copy-CuACKUDf.js";const k=({address:r,showCopyIcon:i,url:a,className:n})=>{let[s,c]=p.useState(!1);function l(o){o.stopPropagation(),navigator.clipboard.writeText(r).then(()=>c(!0)).catch(console.error)}return p.useEffect(()=>{if(s){let o=setTimeout(()=>c(!1),3e3);return()=>clearTimeout(o)}},[s]),e.jsxs(h,a?{children:[e.jsx(g,{title:r,className:n,href:`${a}/address/${r}`,target:"_blank",children:m(r)}),i&&e.jsx(d,{onClick:l,size:"sm",style:{gap:"0.375rem"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(x,{size:16})]}:{children:["Copy",e.jsx(f,{size:16})]})})]}:{children:[e.jsx(u,{title:r,className:n,children:m(r)}),i&&e.jsx(d,{onClick:l,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(x,{size:14})]}:{children:["Copy",e.jsx(f,{size:14})]})})]})};let h=t.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,u=t.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,g=t.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;export{k as d};
