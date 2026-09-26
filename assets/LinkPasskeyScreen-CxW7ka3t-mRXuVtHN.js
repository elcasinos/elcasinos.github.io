import{r as m,j as e}from"./vendor-react-Dw-pcWBf.js";import{i as n,p as A,ad as I,e as L,b as N,t as b,v as g,j as P,f as S}from"./privyHost-C1rXJ4kB.js";import{a as $,c as v}from"./TodoList-DnyULl18-TZ4yX3Je.js";import{n as j}from"./ScreenLayout-DTsWfKKs-DEme53jC.js";import{b1 as z,b2 as C,b3 as B}from"./vendor-icons-CaM6nBRi.js";import"./index-DXrzfgRT.js";import"./vendor-wagmi-B1Ud2aV8.js";import"./vendor-query-CymX7U7d.js";import"./vendor-ethers-Bhe0LPGS.js";import"./ModalFooter-DKyozrEX-DaFfi_mE.js";import"./Screen-DMmH56yL-TNVNQ3-_.js";import"./index-CWARkn2w-CWtUNYQf.js";const U=({passkeys:i,name:c,isLoading:u,errorReason:f,success:o,expanded:a,onLinkPasskey:y,onUnlinkPasskey:t,onExpand:r,onBack:s,onClose:l})=>o?e.jsx(j,{title:"Passkeys updated",icon:z,iconVariant:"success",primaryCta:{label:"Done",onClick:l},onClose:l,watermark:!0}):a?e.jsx(j,{icon:C,title:"Your passkeys",onBack:s,onClose:l,watermark:!0,children:e.jsx(E,{passkeys:i,expanded:a,onUnlink:t,onExpand:r})}):e.jsxs(j,{icon:C,title:"Set up passkey verification",subtitle:"Verify with passkey",primaryCta:{label:"Add new passkey",onClick:y,loading:u},onClose:l,watermark:!0,helpText:f||void 0,children:[i.length===0?e.jsx(_,{}):e.jsx(T,{children:e.jsx(E,{passkeys:i,expanded:a,onUnlink:t,onExpand:r})}),c?e.jsxs(W,{children:[e.jsx(D,{children:"New Passkey Name"}),e.jsx(M,{children:c})]}):null]});let T=n.div`
  margin-bottom: 0.75rem;
`,W=n.div`
  margin-top: 0.25rem;
`,D=n.div`
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,M=n.div`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  line-height: 1.25rem;
`,E=({passkeys:i,expanded:c,onUnlink:u,onExpand:f})=>{let[o,a]=m.useState([]),y=c?i.length:2;return e.jsxs("div",{children:[e.jsx(R,{children:"Your passkeys"}),e.jsxs(F,{children:[i.slice(0,y).map(t=>{var s;return e.jsxs(q,{children:[e.jsxs("div",{children:[e.jsx(Y,{children:(r=t,r.authenticatorName?r.createdWithBrowser?`${r.authenticatorName} on ${r.createdWithBrowser}`:r.authenticatorName:r.createdWithBrowser?r.createdWithOs?`${r.createdWithBrowser} on ${r.createdWithOs}`:`${r.createdWithBrowser}`:"Unknown device")}),e.jsxs(K,{children:["Last used:"," ",((s=t.latestVerifiedAt??t.firstVerifiedAt)==null?void 0:s.toLocaleString())??"N/A"]})]}),e.jsx(H,{disabled:o.includes(t.credentialId),onClick:()=>(async l=>{a(d=>d.concat([l])),await u(l),a(d=>d.filter(x=>x!==l))})(t.credentialId),children:o.includes(t.credentialId)?e.jsx(S,{}):e.jsx(B,{size:16})})]},t.credentialId);var r}),i.length>2&&!c&&e.jsx(V,{onClick:f,children:"View all"})]})]})},_=()=>e.jsxs($,{style:{color:"var(--privy-color-foreground)"},children:[e.jsx(v,{children:"Verify with Touch ID, Face ID, PIN, or hardware key"}),e.jsx(v,{children:"Takes seconds to set up and use"}),e.jsx(v,{children:"Use your passkey to verify transactions and login to your account"})]});const le={component:()=>{var w;let{user:i}=A(),{unlink:c}=I(),{linkWithPasskey:u,closePrivyModal:f}=L(),{data:o}=N(),a=i==null?void 0:i.linkedAccounts.filter(p=>p.type==="passkey"),[y,t]=m.useState(!1),[r,s]=m.useState(""),[l,d]=m.useState(!1),[x,k]=m.useState(!1);return m.useEffect(()=>{a.length===0&&k(!1)},[a.length]),e.jsx(U,{passkeys:a,name:(w=o==null?void 0:o.passkeyAuthModalData)==null?void 0:w.name,isLoading:y,errorReason:r,success:l,expanded:x,onLinkPasskey:()=>{var p;t(!0),u({name:(p=o==null?void 0:o.passkeyAuthModalData)==null?void 0:p.name}).then(()=>d(!0)).catch(h=>{if(h instanceof b){if(h.privyErrorCode===g.CANNOT_LINK_MORE_OF_TYPE)return void s("Cannot link more passkeys to account.");if(h.privyErrorCode===g.PASSKEY_NOT_ALLOWED)return void s("Passkey request timed out or rejected by user.")}s("Unknown error occurred.")}).finally(()=>{t(!1)})},onUnlinkPasskey:async p=>(t(!0),await c({credentialId:p}).then(()=>d(!0)).catch(h=>{h instanceof b&&h.privyErrorCode===g.MISSING_MFA_CREDENTIALS?s("Cannot unlink a passkey enrolled in MFA"):s("Unknown error occurred.")}).finally(()=>{t(!1)})),onExpand:()=>k(!0),onBack:()=>k(!1),onClose:()=>f()})}},ce=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`;let O=P`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`;const V=n.button`
  ${O}
`;let F=n.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0 0;
  flex-grow: 1;
  width: 100%;
`,R=n.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`,Y=n.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,K=n.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,q=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid var(--privy-color-border-default) !important;
  width: 100%;
  height: 5em;
`,G=P`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`,H=n.button`
  ${G}
`;export{ce as DoubleIconWrapper,V as LinkButton,le as LinkPasskeyScreen,U as LinkPasskeyView,le as default};
