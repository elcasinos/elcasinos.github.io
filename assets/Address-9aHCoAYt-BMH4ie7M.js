import{r as p,j as e}from"./vendor-react-DSMResu1.js";import{U as d,i as t}from"./privyHost-DJB5PgRS.js";import{f as m}from"./ModalFooter-DKyozrEX-BrFHknv7.js";import{aZ as x,a_ as f}from"./vendor-icons-p9zyA3Yf.js";const v=({address:r,showCopyIcon:i,url:a,className:n})=>{let[s,c]=p.useState(!1);function l(o){o.stopPropagation(),navigator.clipboard.writeText(r).then(()=>c(!0)).catch(console.error)}return p.useEffect(()=>{if(s){let o=setTimeout(()=>c(!1),3e3);return()=>clearTimeout(o)}},[s]),e.jsxs(h,a?{children:[e.jsx(j,{title:r,className:n,href:`${a}/address/${r}`,target:"_blank",children:d(r)}),i&&e.jsx(m,{onClick:l,size:"sm",style:{gap:"0.375rem"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(x,{size:16})]}:{children:["Copy",e.jsx(f,{size:16})]})})]}:{children:[e.jsx(u,{title:r,className:n,children:d(r)}),i&&e.jsx(m,{onClick:l,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(x,{size:14})]}:{children:["Copy",e.jsx(f,{size:14})]})})]})};let h=t.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,u=t.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,j=t.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;export{v as d};
