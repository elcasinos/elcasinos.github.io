import{an as p,as as e}from"./index-3hKSnm3f.js";import{cl as m,c7 as t}from"./privyHost-B9kbCZUi.js";import{f as d}from"./ModalFooter-DKyozrEX-BqZuZ1eJ.js";import{C as x}from"./check-BnFrqQib.js";import{C as f}from"./copy-DVWQQPj9.js";const k=({address:r,showCopyIcon:i,url:n,className:a})=>{let[s,c]=p.useState(!1);function l(o){o.stopPropagation(),navigator.clipboard.writeText(r).then(()=>c(!0)).catch(console.error)}return p.useEffect(()=>{if(s){let o=setTimeout(()=>c(!1),3e3);return()=>clearTimeout(o)}},[s]),e.jsxs(h,n?{children:[e.jsx(g,{title:r,className:a,href:`${n}/address/${r}`,target:"_blank",children:m(r)}),i&&e.jsx(d,{onClick:l,size:"sm",style:{gap:"0.375rem"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(x,{size:16})]}:{children:["Copy",e.jsx(f,{size:16})]})})]}:{children:[e.jsx(u,{title:r,className:a,children:m(r)}),i&&e.jsx(d,{onClick:l,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(x,{size:14})]}:{children:["Copy",e.jsx(f,{size:14})]})})]})};let h=t.span`
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
