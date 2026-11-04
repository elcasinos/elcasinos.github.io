import{r as c,j as e}from"./vendor-react-Df0SfSI6.js";import{b as r}from"./privyHost-BT2ib075.js";import{f as p}from"./ModalFooter-DKyozrEX-8Z-UBmZf.js";import{e as f}from"./ErrorMessage-D8VaAP5m-CTkP61ts.js";import{r as x}from"./LabelXs-oqZNqbm_-Sd5UZ8CC.js";import{d as h}from"./Address-9aHCoAYt-BeY81a5e.js";import{d as g}from"./shared-FM0rljBt-Q1uIruXW.js";import{c0 as j,c1 as u}from"./vendor-icons-C_2NPD5Y.js";let v=r(g)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,y=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,C=r.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,b=r.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,w=r(x)`
  text-align: left;
  margin-bottom: 0.5rem;
`,z=r(f)`
  margin-top: 0.25rem;
`,E=r(p)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const P=({errMsg:t,balance:i,address:a,className:d,title:n,showCopyButton:m=!1})=>{let[s,l]=c.useState(!1);return c.useEffect(()=>{if(s){let o=setTimeout(()=>l(!1),3e3);return()=>clearTimeout(o)}},[s]),e.jsxs("div",{children:[n&&e.jsx(w,{children:n}),e.jsx(v,{className:d,$state:t?"error":void 0,children:e.jsxs(y,{children:[e.jsxs(C,{children:[e.jsx(h,{address:a,showCopyIcon:!1}),i!==void 0&&e.jsx(b,{children:i})]}),m&&e.jsx(E,{onClick:function(o){o.stopPropagation(),navigator.clipboard.writeText(a).then(()=>l(!0)).catch(console.error)},size:"sm",children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(j,{size:14})]}:{children:["Copy",e.jsx(u,{size:14})]})})]})}),t&&e.jsx(z,{children:t})]})};export{P as j};
