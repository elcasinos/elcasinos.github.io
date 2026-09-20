import{as as l}from"./index-gaSBhqxQ.js";import{cs as c,ct as s,c7 as n}from"./privyHost-D6f8JCAQ.js";import{i as t}from"./LoadingSkeleton-BMsgO5PV-DLlEHG-z.js";const u=({children:o,color:i,isLoading:r,isPulsing:e,...a})=>l.jsx(g,{$color:i,$isLoading:r,$isPulsing:e,...a,children:o});let g=n.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${o=>{let i,r;o.$color==="green"&&(i="var(--privy-color-success-dark)",r="var(--privy-color-success-light)"),o.$color==="red"&&(i="var(--privy-color-error)",r="var(--privy-color-error-light)"),o.$color==="gray"&&(i="var(--privy-color-foreground-2)",r="var(--privy-color-background-2)");let e=c`
      from, to {
        background-color: ${r};
      }

      50% {
        background-color: rgba(${r}, 0.8);
      }
    `;return s`
      color: ${i};
      background-color: ${r};
      ${o.$isPulsing&&s`
        animation: ${e} 3s linear infinite;
      `};
    `}}

  ${t}
`;export{u as n};
