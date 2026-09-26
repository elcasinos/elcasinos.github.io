import{r as c,j as e}from"./vendor-react-Dw-pcWBf.js";import{i as r}from"./privyHost-D3twHXT-.js";import{f as p}from"./ModalFooter-DKyozrEX-6lXjxYFS.js";import{e as f}from"./ErrorMessage-D8VaAP5m-ZrMRypCM.js";import{r as x}from"./LabelXs-oqZNqbm_-Bl8FzjM7.js";import{d as h}from"./Address-9aHCoAYt-BEctysuK.js";import{d as g}from"./shared-FM0rljBt-K_ZX-im0.js";import{a$ as j,b0 as u}from"./vendor-icons-CaM6nBRi.js";let v=r(g)`
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
`,$=r(p)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const P=({errMsg:t,balance:o,address:a,className:d,title:n,showCopyButton:m=!1})=>{let[s,l]=c.useState(!1);return c.useEffect(()=>{if(s){let i=setTimeout(()=>l(!1),3e3);return()=>clearTimeout(i)}},[s]),e.jsxs("div",{children:[n&&e.jsx(w,{children:n}),e.jsx(v,{className:d,$state:t?"error":void 0,children:e.jsxs(y,{children:[e.jsxs(C,{children:[e.jsx(h,{address:a,showCopyIcon:!1}),o!==void 0&&e.jsx(b,{children:o})]}),m&&e.jsx($,{onClick:function(i){i.stopPropagation(),navigator.clipboard.writeText(a).then(()=>l(!0)).catch(console.error)},size:"sm",children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(j,{size:14})]}:{children:["Copy",e.jsx(u,{size:14})]})})]})}),t&&e.jsx(z,{children:t})]})};export{P as j};
