import{dk as h,dl as e,fs as l}from"./index-26z5Yfo3.js";import{C as p}from"./check-B-um_E8N.js";import{C as g}from"./copy-DyujvcJG.js";let a=l.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  && {
    color: var(--privy-color-foreground);
    font-weight: 500;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`,u=l.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,x=l(p)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,f=l(g)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;function C({children:r,iconOnly:c,value:t,hideCopyIcon:s,onCopy:o,iconSize:i=14,...n}){let[m,d]=h.useState(!1);return e.jsxs(a,{...n,onClick:()=>{navigator.clipboard.writeText(t||(typeof r=="string"?r:"")).then(()=>o==null?void 0:o()).catch(console.error),d(!0),setTimeout(()=>d(!1),1500)},children:[r," ",m?e.jsxs(u,{children:[e.jsx(x,{size:i})," ",!c&&"Copied"]}):!s&&e.jsx(f,{size:i})]})}const k=({value:r,includeChildren:c,children:t,...s})=>{let[o,i]=h.useState(!1),n=()=>{navigator.clipboard.writeText(r).catch(console.error),i(!0),setTimeout(()=>i(!1),1500)};return e.jsxs(e.Fragment,{children:[c?e.jsx(a,{...s,onClick:n,children:t}):e.jsx(e.Fragment,{children:t}),e.jsx(a,{...s,onClick:n,children:o?e.jsx(u,{children:e.jsx(x,{})}):e.jsx(f,{})})]})};export{k as h,C as p};
