import{dl as d,dm as e,fl as r}from"./index-C_lEipy0.js";import{f as p}from"./ModalFooter-DKyozrEX-B5HEZn4-.js";import{e as f}from"./ErrorMessage-D8VaAP5m-CrAkgAKB.js";import{r as x}from"./LabelXs-oqZNqbm_-zFO9zNg9.js";import{d as h}from"./Address-9aHCoAYt-DrPcaHhI.js";import{d as g}from"./shared-FM0rljBt-DnmTv0Ni.js";import{C as j}from"./check-QEbjJ7c9.js";import{C as u}from"./copy-DUEofp8i.js";let v=r(g)`
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
`,w=r.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,b=r(x)`
  text-align: left;
  margin-bottom: 0.5rem;
`,z=r(f)`
  margin-top: 0.25rem;
`,E=r(p)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const P=({errMsg:t,balance:i,address:a,className:m,title:l,showCopyButton:c=!1})=>{let[s,n]=d.useState(!1);return d.useEffect(()=>{if(s){let o=setTimeout(()=>n(!1),3e3);return()=>clearTimeout(o)}},[s]),e.jsxs("div",{children:[l&&e.jsx(b,{children:l}),e.jsx(v,{className:m,$state:t?"error":void 0,children:e.jsxs(y,{children:[e.jsxs(C,{children:[e.jsx(h,{address:a,showCopyIcon:!1}),i!==void 0&&e.jsx(w,{children:i})]}),c&&e.jsx(E,{onClick:function(o){o.stopPropagation(),navigator.clipboard.writeText(a).then(()=>n(!0)).catch(console.error)},size:"sm",children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(j,{size:14})]}:{children:["Copy",e.jsx(u,{size:14})]})})]})}),t&&e.jsx(z,{children:t})]})};export{P as j};
