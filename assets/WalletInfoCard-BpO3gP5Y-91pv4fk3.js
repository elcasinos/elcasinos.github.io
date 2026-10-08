import{r as c,j as e}from"./vendor-react-Dw-pcWBf.js";import{b as r}from"./privyHost-Cvd-gicO.js";import{f as p}from"./ModalFooter-DKyozrEX-DTE6M29K.js";import{e as f}from"./ErrorMessage-D8VaAP5m-DkB09CPs.js";import{r as x}from"./LabelXs-oqZNqbm_-CFOYjec4.js";import{d as h}from"./Address-9aHCoAYt-rf4b118y.js";import{d as g}from"./shared-FM0rljBt-BBr1FHgS.js";import{bS as j,bT as u}from"./vendor-icons-C8Uws_5i.js";let v=r(g)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,y=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,b=r.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,C=r.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,w=r(x)`
  text-align: left;
  margin-bottom: 0.5rem;
`,z=r(f)`
  margin-top: 0.25rem;
`,T=r(p)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const M=({errMsg:t,balance:i,address:a,className:d,title:n,showCopyButton:m=!1})=>{let[s,l]=c.useState(!1);return c.useEffect(()=>{if(s){let o=setTimeout(()=>l(!1),3e3);return()=>clearTimeout(o)}},[s]),e.jsxs("div",{children:[n&&e.jsx(w,{children:n}),e.jsx(v,{className:d,$state:t?"error":void 0,children:e.jsxs(y,{children:[e.jsxs(b,{children:[e.jsx(h,{address:a,showCopyIcon:!1}),i!==void 0&&e.jsx(C,{children:i})]}),m&&e.jsx(T,{onClick:function(o){o.stopPropagation(),navigator.clipboard.writeText(a).then(()=>l(!0)).catch(console.error)},size:"sm",children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(j,{size:14})]}:{children:["Copy",e.jsx(u,{size:14})]})})]})}),t&&e.jsx(z,{children:t})]})};export{M as j};
