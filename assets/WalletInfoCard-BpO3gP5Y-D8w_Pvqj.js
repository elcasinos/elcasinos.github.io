import{dk as d,dl as e,fs as r}from"./index-C0QDr7dm.js";import{f as p}from"./ModalFooter-DKyozrEX-0KX_tkmH.js";import{e as f}from"./ErrorMessage-D8VaAP5m-DINPhzZq.js";import{r as x}from"./LabelXs-oqZNqbm_-QqKNZaUv.js";import{d as h}from"./Address-9aHCoAYt-Dwgxp6Ym.js";import{d as g}from"./shared-FM0rljBt-D2_IVTTp.js";import{C as j}from"./check-mL95iOlv.js";import{C as u}from"./copy-DsZB28xG.js";let v=r(g)`
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
`,k=r(p)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const P=({errMsg:s,balance:i,address:a,className:c,title:n,showCopyButton:m=!1})=>{let[t,l]=d.useState(!1);return d.useEffect(()=>{if(t){let o=setTimeout(()=>l(!1),3e3);return()=>clearTimeout(o)}},[t]),e.jsxs("div",{children:[n&&e.jsx(b,{children:n}),e.jsx(v,{className:c,$state:s?"error":void 0,children:e.jsxs(y,{children:[e.jsxs(C,{children:[e.jsx(h,{address:a,showCopyIcon:!1}),i!==void 0&&e.jsx(w,{children:i})]}),m&&e.jsx(k,{onClick:function(o){o.stopPropagation(),navigator.clipboard.writeText(a).then(()=>l(!0)).catch(console.error)},size:"sm",children:e.jsxs(e.Fragment,t?{children:["Copied",e.jsx(j,{size:14})]}:{children:["Copy",e.jsx(u,{size:14})]})})]})}),s&&e.jsx(z,{children:s})]})};export{P as j};
