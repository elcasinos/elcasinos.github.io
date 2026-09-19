import{ar as t}from"./index-DU4alX5q.js";import{cb as e}from"./privyHost-qA3x5rf5.js";const c=({title:i,description:r,children:n,...o})=>t.jsx(l,{...o,children:t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:i}),typeof r=="string"?t.jsx("p",{children:r}):r,n]})});e(c)`
  margin-bottom: 24px;
`;const g=({title:i,description:r,icon:n,children:o,...s})=>t.jsxs(a,{...s,children:[n||null,t.jsx("h3",{children:i}),r&&typeof r=="string"?t.jsx("p",{children:r}):r,o]});let l=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`,a=e(l)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`;export{c as n,g as o};
