import{j as n}from"./vendor-react-Dw-pcWBf.js";import{ab as s,j as a,i as c}from"./privyHost-DbTV3Hor.js";import{i as t}from"./LoadingSkeleton-BMsgO5PV-CDWW7og_.js";const u=({children:o,color:i,isLoading:r,isPulsing:e,...l})=>n.jsx(g,{$color:i,$isLoading:r,$isPulsing:e,...l,children:o});let g=c.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${o=>{let i,r;o.$color==="green"&&(i="var(--privy-color-success-dark)",r="var(--privy-color-success-light)"),o.$color==="red"&&(i="var(--privy-color-error)",r="var(--privy-color-error-light)"),o.$color==="gray"&&(i="var(--privy-color-foreground-2)",r="var(--privy-color-background-2)");let e=s`
      from, to {
        background-color: ${r};
      }

      50% {
        background-color: rgba(${r}, 0.8);
      }
    `;return a`
      color: ${i};
      background-color: ${r};
      ${o.$isPulsing&&a`
        animation: ${e} 3s linear infinite;
      `};
    `}}

  ${t}
`;export{u as n};
