import{dk as h,dl as e,ft as l}from"./index-B5z1r2tA.js";import{C as p}from"./check--fTO3FIr.js";import{C as g}from"./copy-1_2j3Win.js";let a=l.button`
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
`;function C({children:r,iconOnly:c,value:i,hideCopyIcon:n,onCopy:o,iconSize:t=14,...s}){let[m,d]=h.useState(!1);return e.jsxs(a,{...s,onClick:()=>{navigator.clipboard.writeText(i||(typeof r=="string"?r:"")).then(()=>o==null?void 0:o()).catch(console.error),d(!0),setTimeout(()=>d(!1),1500)},children:[r," ",m?e.jsxs(u,{children:[e.jsx(x,{size:t})," ",!c&&"Copied"]}):!n&&e.jsx(f,{size:t})]})}const k=({value:r,includeChildren:c,children:i,...n})=>{let[o,t]=h.useState(!1),s=()=>{navigator.clipboard.writeText(r).catch(console.error),t(!0),setTimeout(()=>t(!1),1500)};return e.jsxs(e.Fragment,{children:[c?e.jsx(a,{...n,onClick:s,children:i}):e.jsx(e.Fragment,{children:i}),e.jsx(a,{...n,onClick:s,children:o?e.jsx(u,{children:e.jsx(x,{})}):e.jsx(f,{})})]})};export{k as h,C as p};
