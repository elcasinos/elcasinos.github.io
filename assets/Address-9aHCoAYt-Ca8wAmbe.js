import{dk as p,dl as e,fl as d,ft as t}from"./index-B5z1r2tA.js";import{f}from"./ModalFooter-DKyozrEX-BDBBb-3k.js";import{C as m}from"./check--fTO3FIr.js";import{C as x}from"./copy-1_2j3Win.js";const v=({address:r,showCopyIcon:i,url:n,className:a})=>{let[s,l]=p.useState(!1);function c(o){o.stopPropagation(),navigator.clipboard.writeText(r).then(()=>l(!0)).catch(console.error)}return p.useEffect(()=>{if(s){let o=setTimeout(()=>l(!1),3e3);return()=>clearTimeout(o)}},[s]),e.jsxs(h,n?{children:[e.jsx(g,{title:r,className:a,href:`${n}/address/${r}`,target:"_blank",children:d(r)}),i&&e.jsx(f,{onClick:c,size:"sm",style:{gap:"0.375rem"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(m,{size:16})]}:{children:["Copy",e.jsx(x,{size:16})]})})]}:{children:[e.jsx(u,{title:r,className:a,children:d(r)}),i&&e.jsx(f,{onClick:c,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(m,{size:14})]}:{children:["Copy",e.jsx(x,{size:14})]})})]})};let h=t.span`
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
`;export{v as d};
