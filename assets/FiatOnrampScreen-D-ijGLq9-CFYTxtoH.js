import{_ as At}from"./vendor-wagmi-OILVNHfs.js";import{j as o,r as _,aa as Pt,ab as Lt,ac as It,ad as $t,ae as Tt,af as Nt,ag as Rt}from"./vendor-react-DSMResu1.js";import{b as Mt,bj as T,bk as Ft,bl as M,bm as Dt,bn as $e,bo as g,bp as Bt,bq as tt,br as Ut,bs as de,bt as qt,bu as Te,a as be,bv as zt,Q as rt,v as W,bw as Vt,i as x,U as Ot,bx as qe,by as Kt,bz as Yt,bA as Ht,bB as Wt,bC as Qt,bD as Zt}from"./privyHost-CQ5MxjbC.js";import{w as Xt,c as Gt,p as Jt}from"./SelectSourceAsset-CXcAyH34-DpzbDz0F.js";import{t as ot}from"./WarningBanner-ZZqCEtZK-BZCyzrnF.js";import{n as Q}from"./ScreenLayout-DTsWfKKs-sMi3qT8J.js";import{a as er}from"./ModalFooter-DKyozrEX-DibeWrUt.js";import{y as tr}from"./ConnectPhoneForm-BClRnco--Cjlw0FxL.js";import{p as rr}from"./CopyableText-CQapvaMr-Bfk4coc3.js";import{t as or}from"./InfoBanner-Cb3p1z12-CMcBpQrr.js";import{t as nr,h as ir}from"./GooglePay-B53WnudL-DF4eFh5-.js";import{aX as pe,bl as sr,b6 as nt,b0 as it,ba as ar,bm as Se,b8 as ze,bn as lr,bo as st,bp as at,bq as cr,b5 as dr,a$ as ur,br as mr,bs as pr,bt as fe,bu as yr}from"./vendor-icons-BXGiZuyb.js";import"./vendor-query-DxDSQ3I8.js";import"./index-CfaEq-IE.js";import"./vendor-ethers-Cg-evgET.js";import"./vendor-charts-CYZL7y4I.js";import"./Screen-DMmH56yL-IuiYNejF.js";import"./index-CWARkn2w-C0d6Rm6X.js";import"./Chip-CZKIKt9K-Bv9dqO0e.js";import"./LoadingSkeleton-BMsgO5PV-C6a4wlZg.js";const hr=e=>{g({amount:e,localQuotes:[],localSelectedQuote:null,quotesWarning:null,quotesErrors:null,isLoading:!0});let{opts:t}=M();tt(e,t)},Ve=async()=>{let{error:e,state:t,isLoading:r,onFailure:n,onSuccess:i}=M();Dt(),$e();let s=(({state:a,error:l,isLoading:d})=>l?{type:"failure",error:l}:a.status==="provider-success"?{type:"success",value:{status:"confirmed"}}:a.status==="provider-confirming"||((c,u)=>c.status==="stripe-flow"&&c.step==="confirm-checkout"&&u)(a,d)?{type:"success",value:{status:"submitted"}}:{type:"failure",error:Error("User exited flow")})({state:t,error:e,isLoading:r});s.type==="success"?await i(s.value):n(s.error)},Z=async(e,{environment:t})=>(await e.fetchPrivyRoute(zt,{query:{environment:t}})).data,Ce=(e,t,r="us",n)=>{if(r==="eu")return lt(t,n);let i=c=>t.includes(c),s=i("first_name")&&i("last_name"),a=i("address_line_1")&&i("address_city")&&i("address_state")&&i("address_postal_code"),l=i("dob"),d=i("id_number");return e==="l0"?s?a?null:"collect-address":"collect-name":s?l?d?a?null:"collect-address":"collect-ssn":"collect-dob":"collect-name"},lt=(e,t)=>{let r=n=>e.includes(n);if(t!=="pending"&&t!=="verified"&&t!=="rejected"){if(!r("first_name")||!r("last_name"))return"collect-name";if(!r("dob"))return"collect-dob";if(!r("nationalities"))return"collect-nationality";if(!r("birth_city")||!r("birth_country"))return"collect-birth-location";if(!r("address_line_1"))return"collect-address"}return r("identifiers")?r("attestation")?t!=="verified"?"verify-documents":null:"eu-attestation":"collect-identifiers"},ie=e=>{let t=["collect-name","collect-dob","collect-nationality","collect-birth-location","collect-address","collect-identifiers","eu-attestation","verify-documents","select-payment"],r=t.indexOf(e);return r===-1?"select-payment":t[r+1]??"select-payment"},ct=e=>{var t;return(t=e==null?void 0:e.find(r=>r.tier==="l2"))==null?void 0:t.verification_status},dt=e=>{var t,r;return((r=(t=e==null?void 0:e.find(n=>n.tier==="l2"&&n.verification_status==="rejected"))==null?void 0:t.verification_errors)==null?void 0:r.includes("user_has_reached_max_verification_attempts"))??!1};let A=e=>e.replace(/[\s/-]/g,"").toUpperCase(),re=e=>A(e).split("").map(Number),P=(e,t,r)=>Number(e.slice(t,r)),I=(e,t,r)=>e>=t&&e<=r,z=e=>I(e,1,12),B=e=>I(e,1,31),ut=e=>Math.floor(e/10)+e%10,O=(e,t,r)=>{let n=re(e);return r(t.reduce((i,s,a)=>i+n[a]*s,0))===n[t.length]},Oe=e=>{let t=re(e),r=[1,2,3,4,5,6,7,8,9,1].reduce((i,s,a)=>i+t[a]*s,0),n=r%11;return n===10&&(n=(r=[3,4,5,6,7,8,9,1,2,3].reduce((i,s,a)=>i+t[a]*s,0))%11)==10&&(n=0),n===t[10]},Ke=(e,t)=>{let r=re(e);return(10-t.reduce((n,i,s)=>n+ut(r[s]*i),0)%10)%10===r[t.length]},fr={at_stn:e=>{let t=A(e);return/^\d{9}$/.test(t)&&Ke(t,[1,2,1,2,1,2,1,2])},be_nrn:e=>{let t=A(e);if(!/^\d{11}$/.test(t)||!z(P(t,2,4))||!B(P(t,4,6)))return!1;let r=Number(t.slice(0,9)),n=P(t,9,11);return 97-r%97===n||97-+`2${t.slice(0,9)}`%97===n},bg_ucn:e=>{let t=A(e),r=P(t,2,4);return/^\d{10}$/.test(t)&&(I(r,1,12)||I(r,21,32)||I(r,41,52))&&B(P(t,4,6))&&O(t,[2,4,8,5,10,9,7,3,6],n=>n%11==10?0:n%11)},hr_oib:e=>/^\d{11}$/.test(A(e))&&(t=>{let r=re(t),n=10;for(let s=0;s<10;s++){let a=(r[s]+n)%10;a===0&&(a=10),n=2*a%11}let i=11-n;return i===10&&(i=0),i===r[10]})(A(e)),cy_tic:e=>{let t=A(e);if(!/^[069]\d{7}[A-Z]$/.test(t))return!1;let r={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21};return String.fromCharCode(65+([0,2,4,6].reduce((n,i)=>n+r[t[i]],0)+[1,3,5,7].reduce((n,i)=>n+Number(t[i]),0))%26)===t[8]},cz_rc:e=>{let t=A(e),r=P(t,2,4);return/^\d{9,10}$/.test(t)&&(I(r,1,12)||I(r,51,62)||t.length===10&&(I(r,21,32)||I(r,71,82)))&&B(P(t,4,6))},dk_cpr:e=>{let t=A(e);return/^\d{10}$/.test(t)&&B(P(t,0,2))&&z(P(t,2,4))&&O(t,[4,3,2,7,6,5,4,3,2],r=>{let n=r%11;return n===1?-1:n===0?0:11-n})},ee_ik:e=>{let t=A(e);return/^\d{11}$/.test(t)&&I(P(t,0,1),1,6)&&z(P(t,3,5))&&B(P(t,5,7))&&I(P(t,7,10),1,710)&&Oe(t)},es_nif:e=>{let t=A(e);return!!/^([KLMXYZ]?\d{7}[A-Z]|\d{8}[A-Z])$/.test(t)&&"TRWAGMYFPDXBNJZSQVHLCKE"[Number(/^\d/.test(t)?t.slice(0,8):`${{X:"0",Y:"1",Z:"2",K:"0",L:"0",M:"0"}[t[0]]}${t.slice(1,8)}`)%23]===t[8]},fi_hetu:e=>{let t=e.replace(/\s/g,"").toUpperCase();return!!/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}[+\-A-FU-Y]\d{3}[A-Z0-9]$/.test(t)&&"0123456789ABCDEFHJKLMNPRSTUVWXY"[+`${t.slice(0,6)}${t.slice(7,10)}`%31]===t[10]},fr_nir:e=>{let t=A(e);return/^[0-3]\d{12}$/.test(t)&&String(Number(t.slice(0,10))%511).padStart(3,"0")===t.slice(10)},fr_spi:e=>{let t=A(e);return/^[0-3]\d{12}$/.test(t)&&String(Number(t.slice(0,10))%511).padStart(3,"0")===t.slice(10)},de_stn:e=>{let t=A(e);if(/^\d{13}$/.test(t))return t[4]==="0";if(!/^\d{11}$/.test(t)||t[0]==="0"||/(\d)\1\1/.test(t)||![...new Set(t.slice(0,10))].map(i=>t.slice(0,10).split(i).length-1).some(i=>i===2||i===3))return!1;let r=re(t),n=10;for(let i=0;i<10;i++){let s=(r[i]+n)%10;s===0&&(s=10),n=2*s%11}return(11-n==10?0:11-n)===r[10]},gr_afm:e=>/^\d{9}$/.test(A(e)),hu_ad:e=>/^8\d{9}$/.test(A(e))&&O(A(e),[1,2,3,4,5,6,7,8,9],t=>t%11),ie_ppsn:e=>{let t=A(e);if(!/^\d{7}[A-W][A-IW]?$/.test(t))return!1;let r=(9*(t.length===9?t[8]==="W"?0:t.charCodeAt(8)-64:0)+[8,7,6,5,4,3,2].reduce((n,i,s)=>n+Number(t[s])*i,0))%23;return(r===0?"W":String.fromCharCode(64+r))===t[7]},is_kt:e=>{let t=A(e);return/^\d{10}$/.test(t)&&B(P(t,0,2))&&z(P(t,2,4))&&(t[9]==="9"||t[9]==="0")},it_cf:e=>{let t=A(e);if(!/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/.test(t)||!"ABCDEHLMPRST".includes(t[8])||![...Array(31).keys()].some(i=>P(t,9,11)===i+1||P(t,9,11)===i+41))return!1;let r={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21,A:1,B:0,C:5,D:7,E:9,F:13,G:15,H:17,I:19,J:21,K:2,L:4,M:18,N:20,O:11,P:3,Q:6,R:8,S:12,T:14,U:16,V:10,W:22,X:25,Y:24,Z:23},n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((i,s,a)=>({...i,[s]:a<10?a:a-10}),{});return String.fromCharCode(65+t.slice(0,15).split("").reduce((i,s,a)=>i+((a+1)%2?r[s]:n[s]),0)%26)===t[15]},lv_pk:e=>{let t=A(e);return/^(0[1-9]|[12]\d|3[01])(0[0-9]|1[0-2])\d{7}$|^32\d{9}$/.test(t)&&(t.startsWith("32")||["0","1","2"].includes(t[6]))},lt_ak:e=>{let t=A(e);return/^\d{11}$/.test(t)&&I(P(t,0,1),1,6)&&z(P(t,3,5))&&B(P(t,5,7))&&Oe(t)},lu_nif:e=>{let t=A(e);return!!(/^\d{13}$/.test(t)&&I(P(t,0,4),1800,2100)&&z(P(t,4,6))&&B(P(t,6,8)))&&[2,1,2,1,2,1,2,1,2,1,2,1].reduce((r,n,i)=>r+ut(Number(t[i])*n),0)%10==0&&(r=>{let n=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],i=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],s=0,a=re(r).reverse();for(let l=0;l<a.length;l++)s=n[s][i[l%8][a[l]]];return s===0})(`${t.slice(0,11)}${t[12]}`)},mt_nic:e=>{let t=A(e);return/^\d{7}[MGAPLHBZ]$/.test(t)||/^\d{9}$/.test(t)&&["11","22","33","44","55","66","77","88"].includes(t.slice(0,2))},mt_pp:e=>/^\d{7}$/.test(A(e)),nl_bsn:e=>/^\d{9}$/.test(A(e))&&O(A(e),[9,8,7,6,5,4,3,2],t=>t%11==10?-1:t%11),pl_nip:e=>/^\d{10}$/.test(A(e))&&O(A(e),[6,5,7,2,3,4,5,6,7],t=>t%11==10?-1:t%11),pl_pesel:e=>{let t=A(e),r=P(t,2,4);return/^\d{11}$/.test(t)&&(z(r)||I(r,21,32)||I(r,41,52)||I(r,61,72)||I(r,81,92))&&B(P(t,4,6))&&O(t,[1,3,7,9,1,3,7,9,1,3],n=>(10-n%10)%10)},pt_nif:e=>/^\d{9}$/.test(A(e))&&O(A(e),[9,8,7,6,5,4,3,2],t=>{let r=11-t%11;return r>=10?0:r}),ro_cnp:e=>{let t=A(e),r=P(t,7,9),n=t[0]==="9"&&t.slice(1,4)==="000";return/^\d{13}$/.test(t)&&I(P(t,0,1),1,9)&&(n||z(P(t,3,5))&&B(P(t,5,7)))&&(I(r,1,47)||r===51||r===52)&&O(t,[2,7,9,1,4,6,3,5,8,2,7,9],i=>i%11==10?1:i%11)},sk_rc:e=>{let t=A(e),r=P(t,2,4);return/^\d{9,10}$/.test(t)&&(z(r)||I(r,51,62))&&B(P(t,4,6))},si_pin:e=>{let t=A(e);return/^\d{8}$/.test(t)&&I(P(t,0,7),1e6,9999999)&&O(t,[8,7,6,5,4,3,2],r=>{let n=11-r%11;return n===10?0:n===11?-1:n})},se_pin:e=>{let t=A(e);if(!/^\d{10}$|^\d{12}$/.test(t))return!1;if(t.length===12){if(!["18","19","20"].includes(t.slice(0,2)))return!1;t=t.slice(2)}let r=P(t,4,6);return z(P(t,2,4))&&(B(r)||I(r,61,91))&&Ke(t,[2,1,2,1,2,1,2,1,2])}};const je={ee_ik:"39901011231",es_nif:"00000000T",is_kt:"0101000000",it_cf:"AAAAAA00A01A000H",mt_nic:"0000000M",mt_pp:"0000000",pl_pesel:"44051401458",pl_nip:"8567346215"},te={at_stn:"Steuernummer (Austria)",be_nrn:"National Registration Number (Belgium)",bg_ucn:"Unified Civil Number (Bulgaria)",hr_oib:"OIB (Croatia)",cy_tic:"Tax Identification Code (Cyprus)",cz_rc:"Rodné číslo (Czech Republic)",dk_cpr:"CPR (Denmark)",ee_ik:"Isikukood (Estonia)",es_nif:"NIF (Spain)",fi_hetu:"HETU (Finland)",fr_spi:"Numéro fiscal (France)",fr_nir:"NIR (France)",de_stn:"Steuer-ID (Germany)",gr_afm:"AFM (Greece)",hu_ad:"Adóazonosító (Hungary)",ie_ppsn:"PPSN (Ireland)",is_kt:"Kennitala (Iceland)",it_cf:"Codice fiscale (Italy)",lv_pk:"Personas kods (Latvia)",lt_ak:"Asmens kodas (Lithuania)",lu_nif:"NIF (Luxembourg)",mt_nic:"National Identity Card (Malta)",mt_pp:"Passport (Malta)",nl_bsn:"BSN (Netherlands)",pl_pesel:"PESEL (Poland)",pl_nip:"NIP (Poland)",pt_nif:"NIF (Portugal)",ro_cnp:"CNP (Romania)",sk_rc:"Rodné číslo (Slovakia)",si_pin:"EMŠO (Slovenia)",se_pin:"Personnummer (Sweden)"},S=()=>{let e=M().stripeSession;if(!e)throw Error("No active Stripe onramp session");return e},b=()=>{var r;let{stripeSession:e,controller:t}=M();return e!==null&&!(((r=t.current)==null?void 0:r.signal.aborted)??1)},se=()=>{let{controller:e}=M();if(!e.current)throw Error("No active abort controller");return e.current.signal},mt=async()=>{let e=S().onramp;if(!e.getMissingIdentifiers)throw Error("Stripe onramp getMissingIdentifiers is unavailable");let t=await e.getMissingIdentifiers();if(!b())return!1;let r=S();return g({stripeSession:{...r,context:{...r.context,kycMissingIdentifiers:t.identifiers,kycMissingAlternatives:t.alternatives}}}),(({identifiers:n})=>n.length>0)(t)},pt=({stripeKycRegion:e,sourceCurrency:t})=>{if(e==="eu"||e==="us")return e;let r=t.toUpperCase();if(r==="EUR")return"eu";if(r==="USD")return"us";throw Error(`Unsupported source currency for Stripe onramp: ${r}`)},xe=e=>({providedFields:e.status==="active"?e.provided_fields:[],kycTiers:e.status==="active"?e.kyc_tiers:void 0}),ue=({customer:e,region:t})=>e.status==="active"&&(t==="eu"?((r,n)=>n==="verified"&&r.includes("identifiers")&&r.includes("attestation"))(e.provided_fields,ct(e.kyc_tiers)):e.verifications.some(r=>r.status==="verified")),oe=async({customer:e,region:t,tier:r="l0"})=>{let{providedFields:n,kycTiers:i}=xe(e);if(t!=="eu")return Ce(r,n,t);if(dt(i))throw Error("Document verification was rejected. Contact Stripe support for help.");let s=(({kycTiers:a,providedFields:l})=>{let d=ct(a);return lt(l,d)})({kycTiers:i,providedFields:n});return s!=="collect-identifiers"||await mt()||(s=ie("collect-identifiers")),s},yt=e=>e?"privyErrorCode"in e&&typeof e.privyErrorCode=="string"?e.privyErrorCode:"code"in e&&typeof e.code=="string"?e.code:null:null,G=({eventType:e,error:t,errorCode:r,attempt:n,context:i,stripeSessionId:s})=>{let a=T.getState();if(!a)return;let l=a.stripeSession,d=i??(l==null?void 0:l.context.config);d&&a.privy.track({name:"stripe_onramp_client_operation",properties:{event_type:e,error_code:r??yt(t instanceof Error?t:null),privy_session_id:d.sessionId,stripe_session_id:s??(l==null?void 0:l.context.stripeSessionId),source_currency:a.opts.source.selectedAsset.toLowerCase(),destination_currency:a.opts.destination.asset.toLowerCase(),destination_network:d.network,environment:d.environment,...n===void 0?{}:{attempt:n}}})},ht=e=>(e instanceof Error?e.message:String(e)).toLowerCase().includes("user is not authenticated"),$=(e,t="flow_failed")=>{let r=e instanceof Error?e:Error(String(e));if(console.error("[FiatOnramp:Stripe]",r),ht(r))return G({eventType:"link_auth_error",error:r}),void g({state:{status:"stripe-flow",step:"choose-email"},error:null,stripeElement:null,isLoading:!1});G({eventType:t,error:r}),g({state:{status:"provider-error"},error:r,isLoading:!1})};let gr={path:"/api/v1/onramp/stripe/transaction_limits",method:"GET"};const me=async()=>{let e=S(),{opts:t,amount:r}=M(),n=vr(r);try{let i=await(async(a,l)=>await a.fetchPrivyRoute(gr,{query:{environment:l.environment,destination_chain:l.destinationChain,wallet_address:l.walletAddress}}))(e.privy,{environment:e.context.config.environment,destinationChain:t.destination.chain,walletAddress:t.destination.address}),s=xr({limits:i,sourceCurrency:t.source.selectedAsset});return s===null||n<=s}catch{return!0}};let vr=e=>{let t=e.trim();if(!/^\d+(?:\.\d*)?$/.test(t))throw Error("Enter a valid amount and try again.");let r=Number.parseFloat(t);if(!Number.isFinite(r))throw Error("Enter a valid amount and try again.");return r},xr=({limits:e,sourceCurrency:t})=>{let r=Object.values(e.limits[`${t.toLowerCase()}.fiat`]??{}).flat();return r.length?Math.max(...r.map(n=>n.limit)):null};const ne=async({customer:e,loader:t,tier:r})=>{if(!b())return;let{providedFields:n}=xe(e),i=S(),s=i.context.kycRegion??"us",a=r??(({customer:c,region:u})=>{if(c.status!=="active")return null;if(u==="eu")return ue({customer:c,region:u})?null:"l2";let y=f=>{var h;return(h=c.kyc_tiers)==null?void 0:h.some(C=>C.tier===f&&C.verification_status==="verified")};return y("l2")?null:y("l1")?"l2":y("l0")?"l1":"l0"})({customer:e,region:s});if(!a)throw new rt("Checkout failed: transaction_limit_reached",void 0,W.ONRAMP_TRANSACTION_LIMIT_REACHED);if(s==="eu"){let c=await oe({customer:e,region:s});if(!b())return;if(!c)throw Error("Stripe could not continue identity verification. Try again.");return void g({stripeSession:{...i=S(),context:{...i.context,...t?{documentVerificationAction:{type:"retry-payment",loader:t}}:{},kycTier:a,kycProvidedFields:n}},state:{status:"stripe-flow",step:c},isLoading:!1})}let l=await oe({customer:e,region:s,tier:a});if(!b())return;let d={...(i=S()).context,...a==="l2"&&t?{documentVerificationAction:{type:"retry-payment",loader:t}}:{},kycTier:a,kycProvidedFields:n};if(l)g({stripeSession:{...i,context:d},state:{status:"stripe-flow",step:l},isLoading:!1});else{if(a!=="l2")throw Error("Stripe could not continue identity verification. Try again.");g({stripeSession:{...i,context:d},state:{status:"stripe-flow",step:"verify-documents"},isLoading:!1})}},ft=async(e,{environment:t})=>(await e.fetchPrivyRoute(Kt,{query:{environment:t}})).data,br=["aptos","avalanche","arbitrum","base","bitcoin","ethereum","optimism","polygon","solana","stellar","sui","tempo","worldchain","xrpl"],gt=2e3,vt=e=>{if((t=>br.some(r=>r===t))(e))return e;throw Error(`Unsupported Stripe onramp network: ${e}`)},xt=async(e,t)=>await e.fetchPrivyRoute(Wt,{body:{session_id:t.sessionId,environment:t.environment,session:t.session}}),Cr=e=>{var r,n;let t=wr((r=e==null?void 0:e.source_currency)==null?void 0:r.toLowerCase());return{currencySymbol:t,paymentMethodLabel:null,fee:e!=null&&e.fee&&t?`${t}${e.fee}`:null,destinationAmount:kr(e==null?void 0:e.destination_amount),destinationToken:((n=e==null?void 0:e.destination_currency)==null?void 0:n.toUpperCase())??null,destinationNetwork:_r(e==null?void 0:e.destination_network),sourceAmount:(e==null?void 0:e.source_total_amount)??null,quoteExpiresAt:(e==null?void 0:e.quote_expiration)??null}};let wr=e=>e==="usd"?"$":e==="eur"?"€":e==="gbp"?"£":null,kr=e=>e?e.replace(/\.0+$/,"").replace(/(\.\d*?)0+$/,"$1"):null,_r=e=>e?e.split(/[-_]/).map(t=>`${t.slice(0,1).toUpperCase()}${t.slice(1)}`).join(" "):null;const Sr=e=>{let t=bt(e);if(t===W.ONRAMP_MINIMUM_IDENTITY_VERIFICATION_REQUIRED)return"l0";if(t===W.ONRAMP_IDENTITY_VERIFICATION_REQUIRED)return"l1";if(t===W.ONRAMP_DOCUMENT_VERIFICATION_REQUIRED)return"l2";if(t==="crypto_onramp_missing_minimum_identity_verification")return"l0";if(t==="crypto_onramp_missing_identity_verification")return"l1";if(t==="crypto_onramp_missing_document_verification")return"l2";let r=Er(e);return r.includes("crypto_onramp_missing_minimum_identity_verification")?"l0":r.includes("crypto_onramp_missing_identity_verification")?"l1":r.includes("crypto_onramp_missing_document_verification")?"l2":r.toLowerCase().includes("minimum identity verification")?"l0":r.toLowerCase().includes("identity verification")?"l1":r.toLowerCase().includes("document verification")?"l2":null},jr=e=>{let t=bt(e);return t===W.ONRAMP_TRANSACTION_LIMIT_REACHED||t==="transaction_limit_reached"||t==="crypto_onramp_transaction_limit_reached"};let bt=e=>{if(!e||typeof e!="object")return null;if("code"in e&&typeof e.code=="string")return e.code;if("error"in e){let t=e.error;if(t&&typeof t=="object"&&"code"in t&&typeof t.code=="string")return t.code}return null},Er=e=>{if(!e)return"";let t=[];if(e instanceof Error?t.push(e.name,e.message):t.push(String(e)),typeof e=="object"&&("code"in e&&t.push(String(e.code)),"type"in e&&t.push(String(e.type)),"error"in e)){let r=e.error;typeof r=="object"&&r&&"message"in r&&t.push(String(r.message)),typeof r=="object"&&r&&"code"in r&&t.push(String(r.code))}return t.join(" ")};const Ct=(e,t)=>{let r=e.find(i=>i.id===t);if(!(r!=null&&r.card))return null;let n=r.card.brand?`${r.card.brand.charAt(0).toUpperCase()}${r.card.brand.slice(1)}`:"Card";return r.card.last4?`${n} •••• ${r.card.last4}`:n},Ne=async({paymentToken:e,loader:t})=>{let r=S();try{let n,i,{opts:s,amount:a}=M(),{config:l,cryptoCustomerId:d}=r.context;if(!d)throw Error("Missing cryptoCustomerId");t==="inline"?g({stripeSession:{...r,context:{...r.context,paymentToken:e}},isLoading:!0}):t==="screen"&&g({stripeSession:{...r,context:{...r.context,paymentToken:e}},state:{status:"stripe-flow",step:"checkout"},isLoading:!1});let c={crypto_customer_id:d,payment_token:e,source_amount:a||"0",source_currency:s.source.selectedAsset.toUpperCase(),destination_currency:s.destination.asset,destination_network:l.network,wallet_address:s.destination.address};try{let h=await xt(r.privy,{sessionId:l.sessionId,environment:l.environment,session:c});n=h.id,i=h.transaction_details}catch(h){let C=Sr(h);if(!C&&!jr(h))throw h;if(!b())return;let j=await Z(r.privy,{environment:l.environment});return await ne({customer:j,loader:t,tier:C})}if(!b())return;let u=S().context.paymentMethodLabel??null;if(!u)try{let h=await ft(r.privy,{environment:l.environment});u=Ct(h,e)}catch{}let y={...Cr(i),paymentMethodLabel:u},f=S();g({stripeSession:{...f,context:{...f.context,stripeSessionId:n,checkoutDetails:y}},stripeConfirmCheckoutDetails:y,state:{status:"stripe-flow",step:"confirm-checkout"},isLoading:!1})}catch(n){$(n)}},J=async e=>{let t=S();try{let{opts:r}=M(),n=t.context.config.network,i=await(async(l,{environment:d})=>(await l.fetchPrivyRoute(Vt,{query:{environment:d}})).data)(t.privy,{environment:t.context.config.environment});if(!b())return;if(!i.some(l=>l.wallet_address===r.destination.address&&l.network===n)){try{await t.onramp.registerWalletAddress(r.destination.address,vt(n))}catch(l){if(console.warn("[FiatOnramp:Stripe] registerWalletAddress failed:",l),ht(l))return void $(l);G({eventType:"wallet_registration_error",error:l})}if(!b())return}if(!(e!=null&&e.skipTokenCheck)){let l=[];try{l=await ft(t.privy,{environment:t.context.config.environment})}catch{}if(!b())return;if(l.length>0){let d=new Set,c=l.filter(y=>{var h,C;let f=`${y.type}:${((h=y.card)==null?void 0:h.brand)??""}:${((C=y.card)==null?void 0:C.last4)??""}`;return!d.has(f)&&(d.add(f),!0)}),u=S();return void g({stripeSession:{...u,context:{...u.context,savedPaymentTokens:c}},state:{status:"stripe-flow",step:"select-payment"},isLoading:!1})}}g({stripeElement:null,state:{status:"stripe-flow",step:"payment"},isLoading:!1});let s=t.context.kycRegion??"us",a=await de(t.onramp.collectPaymentMethod({payment_method_types:s==="eu"?["card"]:["card","us_bank_account"],wallets:{applePay:"auto",googlePay:"auto"}},l=>{if(b()){if(!l.cryptoPaymentToken)return void $(Error("Payment method selection was cancelled"),"flow_cancelled");Ne({paymentToken:l.cryptoPaymentToken,loader:"screen"})}}).catch(l=>($(l),null)),3e4,se());b()&&a&&g({stripeElement:a})}catch(r){$(r)}},Ar=async()=>{var y,f;let e,t=Ut();if(!t)return;let r=t.provider;if(r==="stripe"||r==="stripe-sandbox"){g({isLoading:!0});let{opts:h,amount:C,getProviderUrl:j,email:v,phone:w,privy:m}=M();try{let L=await j({source:{asset:h.source.selectedAsset.toUpperCase(),amount:C||"0"},destination:{asset:h.destination.asset,chain:h.destination.chain,address:h.destination.address},provider:t.provider,sub_provider:t.sub_provider??void 0,payment_method:t.payment_method}),p=Pr(L),E=r==="stripe"?"production":"sandbox",k={publishableKey:p.publishable_key,network:p.network,sessionId:p.session_id,userEmail:v??"",userPhone:w,environment:E};try{await(async(X,H)=>{let U;$e();try{({loadCryptoOnrampAndInitialize:U}=await At(()=>import("./stripe.esm-BGHuCpFf.js"),[],import.meta.url))}catch{throw Error("@stripe/crypto is required for Stripe onramp but could not be loaded. Ensure the package is installed.")}let{controller:ye}=M();ye.current=new AbortController;let he=await de(Promise.resolve(U(H.publishableKey,{theme:"stripe"})),15e3,ye.current.signal);if(!he)throw Error("Stripe crypto SDK unavailable");let ae=crypto.randomUUID();g({stripeSession:{id:ae,onramp:he,privy:X,context:{sessionId:ae,config:H}}})})(m,k)}catch(X){throw G({eventType:"sdk_init_error",error:X,context:k}),X}let F=S();if(!F)return;let D=await Z(F.privy,{environment:E});if(!b())return;if(D.status==="active"){let X=S(),H=pt({stripeKycRegion:D.kyc_region,sourceCurrency:h.source.selectedAsset});g({stripeSession:{...X,context:{...X.context,cryptoCustomerId:D.crypto_customer_id,kycRegion:H,kycProvidedFields:D.provided_fields}},isLoading:!0}),await(async({authIntentId:U,onReady:ye})=>{let he=S(),ae=!1,ke=async()=>{if(!ae){ae=!0;try{await ye()}catch(ee){if(!b())return;$(ee)}}};if(!U)return void await ke();let _e=null;try{_e=await de(he.onramp.authenticate(U,ee=>{b()&&(ee.result==="success"?ke():$(Error(`Link authentication ${ee.result}`)))}),3e4,se())}catch(ee){return b()?(G({eventType:"link_auth_error",error:ee}),void g({state:{status:"stripe-flow",step:"choose-email"},isLoading:!1})):void 0}b()&&(_e?g({state:{status:"stripe-flow",step:"authenticating"},stripeElement:_e,isLoading:!1}):await ke())})({authIntentId:D.link_auth_intent_id,onReady:async()=>{if(b())if(H==="eu")if(ue({customer:D,region:H})){let U=await me();if(b()){if(!U)return await ne({customer:D});await J()}}else{let U=await oe({customer:D,region:H})??"collect-name";if(!b())return;g({state:{status:"stripe-flow",step:U},isLoading:!1})}else if(ue({customer:D,region:H})){let U=await me();if(!b())return;if(!U)return await ne({customer:D});await J()}else g({state:{status:"stripe-flow",step:"collect-name"},isLoading:!1})}})}else g({state:{status:"stripe-flow",step:"choose-email"},isLoading:!1})}catch(L){console.error("[FiatOnramp:Stripe] Init failed:",L),g({state:{status:"provider-error"},isLoading:!1,error:Error("Something went wrong setting up checkout. Please try again.")})}return}let n=qt();if(!n)return void g({state:{status:"provider-error"},error:Error("Unable to open payment window")});g({isLoading:!0});let{opts:i,amount:s,getProviderUrl:a,getStatus:l,controller:d}=M(),c=()=>{try{n.closed||n.close()}catch{}};d.current=new AbortController;try{let h=await a({source:{asset:i.source.selectedAsset.toUpperCase(),amount:s||"0"},destination:{asset:i.destination.asset,chain:i.destination.chain,address:i.destination.address},provider:t.provider,sub_provider:t.sub_provider??void 0,payment_method:t.payment_method,redirect_url:window.location.origin});if(h.type!=="url")throw Error("Expected URL response for popup-based provider");n.location.href=h.url,e=h.session_id}catch{return c(),void g({state:{status:"provider-error"},isLoading:!1,error:Error("Unable to start payment session")})}g({isLoading:!1}),g({state:{status:"provider-confirming"}});let u=await Te({operation:()=>l({session_id:e,provider:t.provider}),until:h=>h.status==="completed"||h.status==="failed"||h.status==="cancelled",delay:0,interval:2e3,attempts:210,signal:d.current.signal});if(u.status!=="aborted"){if(u.status==="max_attempts")return c(),u.error?(console.error(u.error),void g({state:{status:"select-amount"},isLoading:!1,error:Error("Unable to check payment status. Please try again.")})):void g({state:{status:"provider-error"},error:Error("Could not confirm payment status yet.")});((y=u.result)==null?void 0:y.status)==="completed"?(c(),g({state:{status:"provider-success"}})):(c(),g({state:{status:"provider-error"},error:Error(`Transaction ${((f=u.result)==null?void 0:f.status)??"failed"}`)}))}};let Pr=e=>{if(e&&typeof e=="object"&&"publishable_key"in e&&"network"in e&&"session_id"in e)return e;throw Error("Unexpected response shape from provider_session_url for Stripe")};const Lr=()=>{let e=Bt();e&&e.length>0&&g({state:{status:"select-payment-method",quotes:e}})},Ir=()=>{g({state:{status:"select-source-asset"},localQuotes:[],localSelectedQuote:null,quotesWarning:null,quotesErrors:null})},$r=()=>{g({error:null,state:{status:"select-amount"}})},Tr=e=>{g({localSelectedQuote:e,state:{status:"select-amount"}})},Nr=e=>{let{opts:t,amount:r}=M(),n={...t,source:{...t.source,selectedAsset:e}};g({opts:n,state:{status:"select-amount"},localQuotes:[],localSelectedQuote:null,quotesWarning:null,quotesErrors:null,isLoading:!0}),tt(r,n)},Re=({element:e,minHeight:t,bleed:r=!1})=>{let n=_.useRef(null);return _.useEffect(()=>(n.current&&e&&n.current.replaceChildren(e),()=>{n.current&&n.current.replaceChildren()}),[e]),o.jsx("div",{ref:n,style:{minHeight:t,margin:r?"0 -1rem":void 0}})},Me=(e,t)=>{var r;return e!=="collect-address"||t.kycRegion!=="eu"||(r=t.kycAddress)!=null&&r.country?e:"collect-country"},q=e=>{b()&&g({state:{status:"stripe-flow",step:Me(e,S().context)}})},Rr=({city:e,country:t})=>{let r=S(),n=r.context,i=[...n.kycProvidedFields??[],"birth_city","birth_country"];g({stripeSession:{...r,context:{...n,kycBirthCity:e,kycBirthCountry:t,kycProvidedFields:i}}}),q(ie("collect-birth-location"))},Mr=async(e,t)=>(await e.fetchPrivyRoute(Ht,{params:{session_id:t}})).client_secret,Ae=async(e,t)=>{let r=await e.fetchPrivyRoute(Yt,{params:{session_id:t}});return{quoteExpiresAt:r.quote_expiration,sourceTotalAmount:r.source_total_amount,fee:r.fee,destinationAmount:r.destination_amount}},Fr=e=>{if(!e||typeof e!="object")return null;let t=e.transaction_details;return(t==null?void 0:t.last_error)??null};let Dr=new Set(["transaction_limit_reached","location_not_supported","transaction_failed"]),Br=e=>e==="transaction_limit_reached"?new rt("Checkout failed: transaction_limit_reached",void 0,W.ONRAMP_TRANSACTION_LIMIT_REACHED):Error(`Checkout failed: ${e??"unknown error"}`),Ur=e=>!!(e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"&&e.message.toLowerCase().includes("quote expired"));const Ye=async()=>{let e=S();try{let{stripeSessionId:t}=e.context;if(!t)throw Error("Missing stripeSessionId");g({isLoading:!0});for(let r=0;r<3;r++){let n;if(!b())return;try{n=await e.onramp.performCheckout(t,async s=>await Mr(e.privy,s))}catch(s){if(!Ur(s))throw s;G({eventType:"checkout_error",error:s,errorCode:"quote_expired",attempt:r+1,stripeSessionId:t}),await Ae(e.privy,t);continue}if(n.successful)return b()?void g({state:{status:"provider-success"},isLoading:!1}):void 0;let i=Fr(n);if(G({eventType:"checkout_error",errorCode:i,attempt:r+1,stripeSessionId:t}),!i||Dr.has(i))throw Br(i);if(!b())return;if(i==="charged_with_expired_quote")await Ae(e.privy,t);else if(i==="quote_rate_drifted"){let{opts:s,amount:a}=M(),{config:l,cryptoCustomerId:d,paymentToken:c}=e.context;if(!d||!c)throw Error("Cannot recreate session: missing customer or payment token");t=(await xt(e.privy,{sessionId:l.sessionId,environment:l.environment,session:{crypto_customer_id:d,payment_token:c,source_amount:a||"0",source_currency:s.source.selectedAsset.toUpperCase(),destination_currency:s.destination.asset,destination_network:l.network,wallet_address:s.destination.address}})).id;let u=S();g({stripeSession:{...u,context:{...u.context,stripeSessionId:t}}})}else{if(i==="missing_kyc"){let s=await Z(e.privy,{environment:e.context.config.environment});if(!b())return;let{providedFields:a}=xe(s),l=S(),d=l.context.kycRegion??"us",c=await oe({customer:s,region:d,tier:"l0"});if(!b())return;if(l=S(),!c)throw Error("Checkout failed: missing_kyc but all fields already provided");return void g({stripeSession:{...l,context:{...l.context,documentVerificationAction:{type:"retry-checkout"},kycTier:"l0",kycProvidedFields:a}},state:{status:"stripe-flow",step:c}})}if(i==="missing_document_verification"){let s=await Z(e.privy,{environment:e.context.config.environment});if(!b())return;let{providedFields:a}=xe(s),l=S(),d=l.context.kycRegion??"us",c=await oe({customer:s,region:d,tier:"l2"});if(!b())return;let u={...(l=S()).context,documentVerificationAction:{type:"retry-checkout"},kycTier:"l2",kycProvidedFields:a};return c?void g({stripeSession:{...l,context:u},state:{status:"stripe-flow",step:c},isLoading:!1}):void g({stripeSession:{...l,context:u},state:{status:"stripe-flow",step:"verify-documents"},isLoading:!1})}if(i!=="missing_consumer_wallet")throw Error(`Checkout failed: ${i}`);{let{opts:s}=M();await e.onramp.registerWalletAddress(s.destination.address,vt(e.context.config.network))}}}throw Error("Checkout failed after maximum retry attempts")}catch(t){$(t)}},K=[{code:"AT",name:"Austria"},{code:"BE",name:"Belgium"},{code:"BG",name:"Bulgaria"},{code:"HR",name:"Croatia"},{code:"CY",name:"Cyprus"},{code:"CZ",name:"Czech Republic"},{code:"DK",name:"Denmark"},{code:"EE",name:"Estonia"},{code:"FI",name:"Finland"},{code:"FR",name:"France"},{code:"DE",name:"Germany"},{code:"GR",name:"Greece"},{code:"HU",name:"Hungary"},{code:"IS",name:"Iceland"},{code:"IE",name:"Ireland"},{code:"IT",name:"Italy"},{code:"LV",name:"Latvia"},{code:"LT",name:"Lithuania"},{code:"LU",name:"Luxembourg"},{code:"MT",name:"Malta"},{code:"NL",name:"Netherlands"},{code:"PL",name:"Poland"},{code:"PT",name:"Portugal"},{code:"RO",name:"Romania"},{code:"SK",name:"Slovakia"},{code:"SI",name:"Slovenia"},{code:"ES",name:"Spain"},{code:"SE",name:"Sweden"}],wt=new Set(K.map(e=>e.code)),qr=e=>{if(!wt.has(e))return void $(Error("Stripe EU onramp is not available in this country"));let t=S(),r=t.context,n=r.cryptoCustomerId?"collect-address":"create-link-account";g({stripeSession:{...t,context:{...r,kycRegion:"eu",kycAddress:{...r.kycAddress??{addressLine1:"",city:"",state:"",postalCode:""},country:e}}},state:{status:"stripe-flow",step:n}})},kt=async(e,{email:t,environment:r})=>(await e.fetchPrivyRoute(Qt,{body:{email:t,environment:r}})).data,He=e=>{let t=S();g({stripeSession:{...t,context:{...t.context,...e}}})},_t=async(e,t)=>{let r=S();try{if(await(async(a,{authIntentId:l,cryptoCustomerId:d,environment:c})=>{await a.fetchPrivyRoute(Zt,{body:{auth_intent_id:l,crypto_customer_id:d,environment:c}})})(r.privy,{authIntentId:t,cryptoCustomerId:e,environment:r.context.config.environment}),!b())return;He({cryptoCustomerId:e});let n=await Z(r.privy,{environment:r.context.config.environment});if(!b())return;if(n.status!=="active")throw Error("Session unexpectedly inactive after authentication");let{opts:i}=M(),s=pt({stripeKycRegion:n.kyc_region,sourceCurrency:i.source.selectedAsset});if(He({kycRegion:s,kycProvidedFields:n.provided_fields}),s==="eu")if(ue({customer:n,region:s})){let a=await me();if(!b())return;if(!a)return await ne({customer:n});await J()}else{let a=await oe({customer:n,region:s})??"collect-name";if(!b())return;q(a)}else if(ue({customer:n,region:s})){let a=await me();if(!b())return;if(!a)return await ne({customer:n});await J()}else q("collect-name")}catch(n){$(n)}},zr=async e=>{let t=S();try{g({isLoading:!0});let r=await kt(t.privy,{email:e,environment:t.context.config.environment});if(!b())return;if(g({isLoading:!1}),r.status==="no_account"){let{opts:n}=M(),i=n.source.selectedAsset.toUpperCase()==="EUR";g({stripeSession:{...t,context:{...t.context,pendingEmail:e}},state:{status:"stripe-flow",step:i?"collect-country":"create-link-account"},email:e})}else{g({stripeSession:{...t,context:{...t.context,authIntentId:r.id,pendingEmail:e}},state:{status:"stripe-flow",step:"authenticating"},email:e});let n=await de(t.onramp.authenticate(r.id,i=>{b()&&(i.result==="success"&&i.crypto_customer_id?_t(i.crypto_customer_id,r.id):$(Error(`Link authentication ${i.result}`)))}),3e4,se());b()&&n&&g({stripeElement:n})}}catch(r){$(r)}},Vr=async e=>{let t=S(),r=t.context,n=t.onramp,i=await n.updateKycInfo(e).catch(a=>($(a),null));if(!i)return;let s=[...r.kycProvidedFields??[]];i.completed&&s.push("identifiers"),g({stripeSession:{...t,context:{...r,kycProvidedFields:s,kycMissingIdentifiers:i.identifiers??[],kycMissingAlternatives:i.alternatives??[],kycInvalidIdentifiers:i.invalid_identifiers??[]}}}),i.completed&&q(ie("collect-identifiers"))},we=async()=>{let e=S();try{let{kycSsn:t,kycTier:r,kycRegion:n,config:i}=e.context,s={...Or(e.context),...Kr(e.context),...Yr(e.context),...Hr(e.context),...Wr(e.context)};if(q("kyc"),await e.onramp.submitKycInfo(s),t){let c=S();g({stripeSession:{...c,context:{...c.context,kycSsn:void 0}}})}if(!b())return;let a=n==="eu"?"l2":r==="l2"?"l1":r??"l0",l=await Te({operation:()=>Z(e.privy,{environment:i.environment}),until:c=>{var u,y;if(c.status!=="active")return!1;if(n==="eu"){let f=(u=c.kyc_tiers)==null?void 0:u.find(h=>h.tier==="l2");return(f==null?void 0:f.verification_status)==="pending"||(f==null?void 0:f.verification_status)==="verified"}if((y=c.kyc_tiers)!=null&&y.length){let f=c.kyc_tiers.find(h=>h.tier===a);if(f)return f.verification_status==="verified"}return c.verifications.some(f=>f.status==="verified")},delay:0,interval:gt,attempts:Math.ceil(30),signal:se()});if(!b()||l.status==="aborted")return;if(l.status==="max_attempts")throw Error("KYC verification timed out");let d=await me();if(!b())return;if(!d)return await ne({customer:l.result});if(r==="l2"){let c=S(),u=c.context.documentVerificationAction??{type:"retry-payment",loader:"screen"};return void g({stripeSession:{...c,context:{...c.context,documentVerificationAction:u}},state:{status:"stripe-flow",step:"verify-documents"},isLoading:!1})}await J()}catch(t){$(t)}};let Or=({kycName:e})=>e?{given_name:e.firstName,surname:e.lastName}:{},Kr=({kycDob:e})=>e?{date_of_birth:{day:e.day,month:e.month,year:e.year}}:{},Yr=({kycRegion:e,kycSsn:t})=>e!=="eu"&&t?{id_number:{type:"us_ssn",value:t}}:{},Hr=({kycAddress:e})=>e?{address:{line1:e.addressLine1,city:e.city,...e.state?{state:e.state}:{},postal_code:e.postalCode,country:e.country}}:{},Wr=({kycRegion:e,kycNationalities:t,kycBirthCity:r,kycBirthCountry:n})=>e==="eu"?{...t!=null&&t.length?{nationalities:t}:{},...r?{birth_city:r}:{},...n?{birth_country:n}:{}}:{};const Qr=async e=>{var s;let t=S(),r=t.context,n=(s=r.kycAddress)==null?void 0:s.country;if(!(r.kycRegion!=="eu"||n&&wt.has(n)))return void $(Error("Stripe EU onramp is not available in this country"));let i=r.kycRegion==="eu"&&n?{...e,country:n}:e;g({stripeSession:{...t,context:{...r,kycAddress:i,kycProvidedFields:[...r.kycProvidedFields??[],"address_line_1","address_city",...i.state?["address_state"]:[],"address_postal_code"]}}}),r.kycRegion!=="eu"?await we():await(async()=>{let a=S();try{let{kycName:l,kycDob:d,kycAddress:c,kycNationalities:u,kycBirthCity:y,kycBirthCountry:f}=a.context,h={...l?{given_name:l.firstName,surname:l.lastName}:{},...d?{date_of_birth:{day:d.day,month:d.month,year:d.year}}:{},...c?{address:{line1:c.addressLine1,city:c.city,...c.state?{state:c.state}:{},postal_code:c.postalCode,country:c.country}}:{},...u!=null&&u.length?{nationalities:u}:{},...y?{birth_city:y}:{},...f?{birth_country:f}:{}};if(q("kyc"),await a.onramp.submitKycInfo(h),!b())return;let C=await mt();if(!b())return;q(C?"collect-identifiers":ie("collect-identifiers"))}catch(l){$(l)}})()},Zr=({day:e,month:t,year:r})=>{let n=S(),i=n.context,s=i.kycTier??"l1",a=i.kycRegion??"us",l=[...i.kycProvidedFields??[],"dob"],d=Ce(s,l,a),c={...i,kycDob:{day:e,month:t,year:r},kycProvidedFields:l},u=d?{status:"stripe-flow",step:Me(d,c)}:void 0;g({stripeSession:{...n,context:c},...u?{state:u}:{}}),d||we()},Xr=({firstName:e,lastName:t})=>{let r=S(),n=r.context,i=n.kycTier??"l0",s=n.kycRegion??"us",a=[...n.kycProvidedFields??[],"first_name","last_name"],l=Ce(i,a,s),d={...n,kycName:{firstName:e,lastName:t},kycProvidedFields:a},c=l?{status:"stripe-flow",step:Me(l,d)}:void 0;g({stripeSession:{...r,context:d},...c?{state:c}:{}}),l||we()},Gr=e=>{let t=S(),r=t.context,n=r.kycTier??"l1",i=[...r.kycProvidedFields??[],"id_number"],s=Ce(n,i);g({stripeSession:{...t,context:{...r,kycSsn:e,kycProvidedFields:i}},...s?{state:{status:"stripe-flow",step:s}}:{}}),s||we()},St=e=>{var t;return(t=e.kycAddress)!=null&&t.country?e.kycAddress.country:"US"},Pe=async e=>{let t=S();try{let r=t.context.pendingEmail;if(!r)throw Error("No email in session context");if(e==="create"){let s=t.context.config.userPhone;if(!s)return void q("collect-contact");let a=St(t.context),l=await t.onramp.registerLinkUser(r,s,a);if(!b())return;if(!l.created)throw Error("Failed to register Stripe Link account")}let n=await kt(t.privy,{email:r,environment:t.context.config.environment});if(!b())return;if(n.status!=="created")throw Error("Failed to create Link auth intent after registration");g({stripeSession:{...t,context:{...t.context,authIntentId:n.id}},state:{status:"stripe-flow",step:"authenticating"}});let i=await de(t.onramp.authenticate(n.id,s=>{b()&&(s.result==="success"&&s.crypto_customer_id?_t(s.crypto_customer_id,n.id):$(Error(`Link authentication ${s.result}`)))}),3e4,se());b()&&i&&g({stripeElement:i})}catch(r){$(r)}},Jr=e=>{let t=S(),r=t.context,n=[...r.kycProvidedFields??[],"nationalities"];g({stripeSession:{...t,context:{...r,kycNationalities:e,kycProvidedFields:n}}}),q(ie("collect-nationality"))},eo=e=>{let t=S(),r=Ct([e],e.id);g({stripeSession:{...t,context:{...t.context,paymentToken:e.id,paymentMethodLabel:r}}}),Ne({paymentToken:e.id,loader:"inline"})},to=async e=>{let t=S();try{let r=t.context.pendingEmail;if(!r)throw Error("No email in session context");let n=St(t.context),i=await t.onramp.registerLinkUser(r,e,n);if(!b())return;if(!i.created)throw Error("Failed to register Stripe Link account");await Pe("connect")}catch(r){$(r)}},ro=async()=>{try{if(!b())return;let e=S(),t=e.context.stripeSessionId;if(!t)return;let r=await Ae(e.privy,t);if(!b())return;let n=e.context.checkoutDetails;if(n){let i=n.currencySymbol,s={...n,quoteExpiresAt:r.quoteExpiresAt,sourceAmount:r.sourceTotalAmount??n.sourceAmount,destinationAmount:r.destinationAmount??n.destinationAmount,fee:r.fee&&i?`${i}${r.fee}`:n.fee};g({stripeConfirmCheckoutDetails:s})}}catch(e){$(e)}},Fe=({height:e=24,...t})=>o.jsxs("svg",{height:e,viewBox:"120 0 72 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[o.jsx("path",{d:"M132.258 24C138.856 24 144.205 18.6274 144.205 12C144.205 5.37257 138.856 0 132.258 0C125.66 0 120.312 5.37257 120.312 12C120.312 18.6274 125.66 24 132.258 24Z",fill:"#00D66F"}),o.jsx("path",{d:"M156.317 3.81824C156.317 2.69024 157.263 1.77344 158.377 1.77344C159.49 1.77344 160.436 2.69504 160.436 3.81824C160.436 4.94144 159.524 5.88704 158.377 5.88704C157.23 5.88704 156.317 4.97024 156.317 3.81824Z",fill:"#011E0F"}),o.jsx("path",{d:"M150.205 2.06143H153.789V22.2214H150.205V2.06143Z",fill:"#011E0F"}),o.jsx("path",{d:"M160.188 7.82143H156.575V22.2214H160.188V7.82143Z",fill:"#011E0F"}),o.jsx("path",{d:"M186.16 14.5319C188.879 12.8519 190.728 10.3511 191.459 7.81665H187.847C186.905 10.2359 184.745 12.0551 182.37 12.8279V2.05665H178.758V22.2167H182.37V16.2214C185.128 16.9126 187.307 19.3079 188.052 22.2167H191.689C191.134 19.1639 189.056 16.3079 186.16 14.5319Z",fill:"#011E0F"}),o.jsx("path",{d:"M166.591 9.43425C167.537 8.17185 169.382 7.43744 170.878 7.43744C173.668 7.43744 175.976 9.48705 175.981 12.5831V22.2167H172.369V13.3846C172.369 12.1126 171.805 10.6438 169.974 10.6438C167.824 10.6438 166.586 12.5591 166.586 14.8007V22.2262H162.974V7.83104H166.591V9.43425Z",fill:"#011E0F"}),o.jsx("path",{d:"M131.61 4.7998H127.958C128.668 7.80941 130.743 10.3822 133.339 11.9998C130.738 13.6174 128.668 16.1902 127.958 19.1998H131.61C132.515 16.4158 135.021 13.9966 138.1 13.5022V10.4926C135.016 10.003 132.51 7.58381 131.61 4.7998Z",fill:"#011E0F"})]});function De({children:e}){var t;return o.jsx(oo,{theme:((t=be())==null?void 0:t.appearance.palette.colorScheme)??"light",children:e??"You're in a sandbox environment"})}let oo=x(ot)`
  margin: 1rem 0;
`;const N=({isSandbox:e,children:t,...r})=>{let n=T(i=>{var s;return((s=i==null?void 0:i.opts)==null?void 0:s.environment)==="sandbox"});return e??n?o.jsxs(Q,{...r,children:[o.jsx(De,{}),t]}):o.jsx(Q,{...r,children:t})},Y=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,R=x.input`
  && {
    width: 100%;
    padding: 0.625rem 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${e=>e.$hasError?"var(--privy-color-error-dark)":"var(--privy-color-foreground)"};
    background: var(--privy-color-background);
    border: 1px solid
      ${e=>e.$hasError?"var(--privy-color-border-error)":"var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-sm, 0.5rem);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.15s ease;

    &:focus {
      border-color: ${e=>e.$hasError?"var(--privy-color-border-error)":"var(--privy-color-accent)"};
      box-shadow: ${e=>e.$hasError?"none":"0 0 0 1px var(--privy-color-accent-light)"};
    }

    &::placeholder {
      color: ${e=>e.$hasError?"var(--privy-color-error-dark)":"var(--privy-color-foreground-3)"};
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`,V=x.p`
  && {
    color: var(--privy-color-error-dark);
    font-size: 0.8125rem;
  }
`,Be=x.select`
  && {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${e=>e.$hasError?"var(--privy-color-error)":"var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.15s ease;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    padding-right: 2rem;

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 1px var(--privy-color-accent-light);
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`,ve=x.div`
  display: flex;
  gap: 0.5rem;
`,no=x(Lt)`
  width: 100%;
`,io=x.div`
  position: relative;
  width: 100%;
`,Le=x(It)`
  && {
    width: 100%;
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${e=>e.$hasError?"var(--privy-color-error)":"var(--privy-color-foreground-4)"};
    border-radius: 0.5rem;
    outline: none;
    box-sizing: border-box;
    transition:
      border-color 0.15s ease,
      box-shadow 0.15s ease,
      background-color 0.15s ease;

    &:hover:not(:disabled) {
      border-color: var(--privy-color-foreground-3);
    }

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 2px var(--privy-color-accent-light);
    }

    &::placeholder {
      color: var(--privy-color-foreground-3);
    }

    &:disabled {
      color: var(--privy-color-foreground-3);
      background: var(--privy-color-background-2);
      cursor: not-allowed;
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`,so=x.span`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  color: var(--privy-color-foreground-2);
  pointer-events: none;
  transform: translateY(-50%);

  ${Le}:focus + & {
    color: var(--privy-color-accent);
  }

  ${Le}:disabled + & {
    color: var(--privy-color-foreground-3);
  }
`,ao=Pt,lo=x($t)`
  z-index: 2147483647;
`,co=x(Tt)`
  width: var(--anchor-width);
  max-height: min(16rem, var(--available-height));
  overflow: auto;
  padding: 0.25rem 0;
  font-family: inherit;
  background: var(--privy-color-background);
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 8%);
  box-sizing: border-box;
`,uo=x(Nt)`
  display: flex;
  flex-direction: column;
  gap: 0;
`,mo=x.span`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  line-height: 1rem;
`,po=x(Rt)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  min-height: 2.125rem;
  padding: 0 0.75rem;
  font-family: inherit;
  color: var(--privy-color-foreground);
  background: transparent;
  border: 0;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  span {
    font-family: inherit;
  }

  &:hover,
  &[data-highlighted] {
    background: var(--privy-color-background-2);
  }

  &[data-focus-visible] {
    background: var(--privy-color-background-2);
    box-shadow: inset 0 0 0 1px var(--privy-color-accent-light);
  }

  &[data-selected] {
    background: transparent;
    color: var(--privy-color-foreground);
  }

  &[data-disabled] {
    color: var(--privy-color-foreground-3);
    cursor: not-allowed;
  }
`,yo=x.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  padding: 0;
  margin: 0.25rem 0 0;
  list-style: none;
`,ho=x.li`
  display: block;
`,fo=x(er)`
  && {
    gap: 0.375rem;
    width: auto;
    height: 2rem;
    padding: 0 0.625rem;
    color: var(--privy-color-foreground);
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;x.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md, 0.5rem);
`,x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,x.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground-3);
`,x.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--privy-color-foreground);
`;const go=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1rem 0.75rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 0.75rem;
`,vo=x.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,xo=x.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,bo=x.img`
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
`,Co=x.img`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 100px;
  border: 1.5px solid var(--privy-color-background);
  background-color: var(--privy-color-background);
`,We=x.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`,Qe=x.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--privy-color-foreground-3);
`,Ze=x.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,wo=x.div`
  display: flex;
  flex-direction: column;
`,le=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0;
  border-bottom: 1px solid var(--privy-color-foreground-4);
  font-size: 0.75rem;
  line-height: 1.125rem;

  &:last-child {
    border-bottom: none;
  }
`,ce=x.span`
  color: var(--privy-color-foreground);
  font-weight: 400;
`,ge=x.span`
  color: var(--privy-color-foreground);
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
`,ko=x.div`
  display: inline-flex;
  align-items: center;
  align-self: center;
  padding: 0.75rem 1rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 999px;
  color: var(--privy-color-foreground);
  background: var(--privy-color-background);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,_o=({onClose:e,onEmailChosen:t,onEmailBack:r,userEmail:n})=>{let[i,s]=_.useState(n??""),[a,l]=_.useState(null),[d,c]=_.useState(!1),u=async()=>{let y=i.trim();if(y)if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)){c(!0);try{await(t==null?void 0:t(y))}catch{c(!1)}}else l("Enter a valid email address");else l("Email is required")};return o.jsx(N,{showClose:!0,onClose:e,showBack:!!r,onBack:r??void 0,icon:o.jsx(Fe,{height:24}),iconVariant:"logo",title:"Add email",subtitle:"Enter your email address to continue with Link.",primaryCta:{label:"Submit",onClick:u,loading:d},watermark:!0,children:o.jsxs(Y,{children:[o.jsx(R,{type:"email",placeholder:"email@example.com",value:i,onChange:y=>{s(y.target.value),l(null)},onKeyDown:y=>y.key==="Enter"&&u(),$hasError:!!a,autoFocus:!0}),a&&o.jsx(V,{children:a})]})})};let jt={addressPlaceholder:"Street and house number",addressAriaLabel:"Street and house number",cityPlaceholder:"City",cityAriaLabel:"City",postalPlaceholder:"Postal code",postalAriaLabel:"Postal code",postalInputMode:"text",postalMaxWidth:"7rem",postalFirst:!0,missingAddressError:"Street and house number, city, and postal code are required"},Et={addressPlaceholder:"Street address",addressAriaLabel:"Street address",cityPlaceholder:"City",cityAriaLabel:"City",postalPlaceholder:"ZIP",postalAriaLabel:"ZIP code",postalInputMode:"numeric",postalMaxWidth:"6.25rem",postalFirst:!1,missingAddressError:"Street address, city, and ZIP are required",adminPlaceholder:"State",adminAriaLabel:"State",adminRequiredError:"State is required",adminMaxWidth:"5.5rem",adminOptions:["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC"]},So={US:Et,IE:{...jt,addressPlaceholder:"Street address",addressAriaLabel:"Street address",cityPlaceholder:"Town or city",cityAriaLabel:"Town or city",postalPlaceholder:"Eircode",postalAriaLabel:"Eircode",missingAddressError:"Street address, town or city, and Eircode are required",adminPlaceholder:"County",adminAriaLabel:"County",adminRequiredError:"County is required"}},jo=e=>{var t;return e==="US"?"United States":((t=K.find(r=>r.code===e))==null?void 0:t.name)??e};const Eo=({onClose:e,onAddressSubmitted:t,onBack:r})=>{let n=T(s=>{var a;return((a=s==null?void 0:s.stripeSession)==null?void 0:a.context.kycRegion)??"us"}),i=T(s=>{var a,l;return((l=(a=s==null?void 0:s.stripeSession)==null?void 0:a.context.kycAddress)==null?void 0:l.country)??""});return o.jsx(Ao,{onClose:e,onAddressSubmitted:t,onBack:r,region:n,country:n==="eu"?i:"US"})},Ao=({onClose:e,onAddressSubmitted:t,onBack:r,region:n,country:i})=>{var E;let s=n==="eu",[a,l]=_.useState(""),[d,c]=_.useState(""),[u,y]=_.useState(""),[f,h]=_.useState(""),[C,j]=_.useState(null),[v,w]=_.useState(!1),m=((k,F)=>k!=="eu"?Et:(F?So[F]:null)??jt)(n,i),L=!!m.adminPlaceholder,p=()=>{a.trim()&&d.trim()&&f.trim()?i?!L||u.trim()?(w(!0),t==null||t({addressLine1:a.trim(),city:d.trim(),state:u.trim(),postalCode:f.trim(),country:i})):j(m.adminRequiredError??"State is required"):j("Country is required"):j(m.missingAddressError)};return o.jsx(N,{showClose:!0,onClose:e,showBack:!!r,onBack:r??void 0,icon:st,title:"Add address",subtitle:"Enter your residential address as it appears on your government-issued ID.",primaryCta:{label:"Continue",onClick:p,loading:v},watermark:!0,children:o.jsxs(Y,{children:[o.jsx(R,{placeholder:m.addressPlaceholder,value:a,onChange:k=>{l(k.target.value),j(null)},onKeyDown:k=>k.key==="Enter"&&p(),$hasError:!!C&&!a.trim(),autoFocus:!0,"aria-label":m.addressAriaLabel,autoComplete:"address-line1"}),s?o.jsxs(o.Fragment,{children:[o.jsxs(ve,{children:[m.postalFirst&&o.jsx(R,{placeholder:m.postalPlaceholder,value:f,onChange:k=>{h(k.target.value),j(null)},onKeyDown:k=>k.key==="Enter"&&p(),$hasError:!!C&&!f.trim(),style:{maxWidth:m.postalMaxWidth},"aria-label":m.postalAriaLabel,autoComplete:"postal-code",inputMode:m.postalInputMode}),o.jsx(R,{placeholder:m.cityPlaceholder,value:d,onChange:k=>{c(k.target.value),j(null)},$hasError:!!C&&!d.trim(),"aria-label":m.cityAriaLabel,autoComplete:"address-level2"}),!m.postalFirst&&o.jsx(R,{placeholder:m.postalPlaceholder,value:f,onChange:k=>{h(k.target.value),j(null)},onKeyDown:k=>k.key==="Enter"&&p(),$hasError:!!C&&!f.trim(),style:{maxWidth:m.postalMaxWidth},"aria-label":m.postalAriaLabel,autoComplete:"postal-code",inputMode:m.postalInputMode})]}),o.jsxs(ve,{children:[m.adminPlaceholder&&o.jsx(R,{placeholder:m.adminPlaceholder,value:u,onChange:k=>{y(k.target.value),j(null)},$hasError:!!C&&!u.trim(),"aria-label":m.adminAriaLabel??m.adminPlaceholder,autoComplete:"address-level1"}),o.jsx(R,{value:jo(i),readOnly:!0,$hasError:!1,style:{opacity:.7},"aria-label":"Country",autoComplete:"country-name",tabIndex:-1})]})]}):o.jsxs(ve,{children:[o.jsx(R,{placeholder:m.cityPlaceholder,value:d,onChange:k=>{c(k.target.value),j(null)},$hasError:!!C&&!d.trim(),"aria-label":m.cityAriaLabel,autoComplete:"address-level2"}),o.jsxs(Be,{value:u,onChange:k=>{y(k.target.value),j(null)},$hasError:!!C&&!u,style:{maxWidth:m.adminMaxWidth},"aria-label":m.adminAriaLabel,autoComplete:"address-level1",children:[o.jsx("option",{value:"",disabled:!0,children:m.adminPlaceholder}),(E=m.adminOptions)==null?void 0:E.map(k=>o.jsx("option",{value:k,children:k},k))]}),o.jsx(R,{placeholder:m.postalPlaceholder,value:f,onChange:k=>{h(k.target.value),j(null)},onKeyDown:k=>k.key==="Enter"&&p(),$hasError:!!C&&!f.trim(),style:{maxWidth:m.postalMaxWidth},"aria-label":m.postalAriaLabel,autoComplete:"postal-code",inputMode:m.postalInputMode})]}),C&&o.jsx(V,{children:C})]})})},Po=({onClose:e,onSubmit:t})=>{let[r,n]=_.useState(""),[i,s]=_.useState(""),[a,l]=_.useState(null),d=()=>{r.trim()?i?t({city:r.trim(),country:i}):l("Birth country is required"):l("Birth city is required")};return o.jsx(N,{showClose:!0,onClose:e,icon:st,title:"Place of birth",subtitle:"Enter your city and country of birth.",primaryCta:{label:"Continue",onClick:d},watermark:!0,children:o.jsxs(Y,{children:[o.jsx(R,{placeholder:"City of birth",value:r,onChange:c=>{n(c.target.value),l(null)},onKeyDown:c=>c.key==="Enter"&&d(),$hasError:!!a&&!r.trim(),autoFocus:!0,"aria-label":"City of birth",autoComplete:"off"}),o.jsxs(Be,{value:i,onChange:c=>{s(c.target.value),l(null)},$hasError:!!a&&!i,"aria-label":"Country of birth",autoComplete:"country",children:[o.jsx("option",{value:"",disabled:!0,children:"Select birth country"}),K.map(c=>o.jsx("option",{value:c.code,children:c.name},c.code))]}),a&&o.jsx(V,{children:a})]})})},Lo=({onClose:e,onSubmit:t})=>{let[r,n]=_.useState(""),[i,s]=_.useState(null);return o.jsx(N,{showClose:!0,onClose:e,icon:at,title:"Country of residence",subtitle:"Select your country of residence. This determines your verification requirements.",primaryCta:{label:"Continue",onClick:()=>{r?t(r):s("Please select your country of residence")}},watermark:!0,children:o.jsxs(Y,{children:[o.jsxs(Be,{value:r,onChange:a=>{n(a.target.value),s(null)},$hasError:!!i,"aria-label":"Country of residence",autoComplete:"country",children:[o.jsx("option",{value:"",disabled:!0,children:"Select country"}),K.map(a=>o.jsx("option",{value:a.code,children:a.name},a.code))]}),i&&o.jsx(V,{children:i})]})})},Io=({onClose:e,onDobSubmitted:t,region:r="us"})=>{let[n,i]=_.useState(""),[s,a]=_.useState(null),l=r==="eu",d=()=>{let c=n.replace(/\D/g,""),u=Number.parseInt(c.slice(0,2),10),y=Number.parseInt(c.slice(2,4),10),f=Number.parseInt(c.slice(4,8),10),h=l?u:y,C=l?y:u,j=new Date(f,C-1,h),v=new Date,w=new Date(v.getFullYear()-18,v.getMonth(),v.getDate());c.length!==8||j.getFullYear()!==f||j.getMonth()!==C-1||j.getDate()!==h||f<1900||j>w?a("Enter a valid date of birth"):t==null||t({day:h,month:C,year:f})};return o.jsx(N,{showClose:!0,onClose:e,icon:mr,title:"Add date of birth",subtitle:"You must be at least 18 years old.",primaryCta:{label:"Continue",onClick:d},watermark:!0,children:o.jsxs(Y,{children:[o.jsx(R,{placeholder:l?"DD/MM/YYYY":"MM/DD/YYYY",value:n,onChange:c=>{i((u=>{let y=u.replace(/\D/g,"").slice(0,8);return[y.slice(0,2),y.slice(2,4),y.slice(4,8)].filter(Boolean).join("/")})(c.target.value)),a(null)},onKeyDown:c=>c.key==="Enter"&&d(),$hasError:!!s,inputMode:"numeric",maxLength:10,autoFocus:!0}),s&&o.jsx(V,{children:s})]})})},$o=({onClose:e,onSubmit:t,isSandbox:r})=>{let n=T(a=>{var l;return(l=a==null?void 0:a.stripeSession)==null?void 0:l.context.kycMissingIdentifiers}),i=T(a=>{var l;return(l=a==null?void 0:a.stripeSession)==null?void 0:l.context.kycMissingAlternatives}),s=T(a=>{var l;return(l=a==null?void 0:a.stripeSession)==null?void 0:l.context.kycInvalidIdentifiers});return o.jsx(To,{onClose:e,onSubmit:t,isSandbox:r,missingMica:n,alternatives:i,invalidIdentifiers:s})},To=({onClose:e,onSubmit:t,isSandbox:r,missingMica:n,alternatives:i,invalidIdentifiers:s})=>{let[a,l]=_.useState({}),[d,c]=_.useState({}),[u,y]=_.useState(null),[f,h]=_.useState(null),[C,j]=_.useState(null),v=m=>(r?je[m]:void 0)??a[m]??"",w=m=>{let L=v(m);return r||C===m?L:L.replace(/[^\s/-]/g,"•")};return o.jsx(N,{showClose:!0,onClose:e,icon:yr,title:"Identity verification",subtitle:"Provide your national identity numbers.",primaryCta:{label:"Continue",onClick:()=>{let m=[];for(let p of n??[]){let E=(i??[]).find(F=>F.original_missing_identifiers.includes(p.type))&&d[p.type]||p.type,k=v(E).trim();if(!k)return h(E),void y(`Please provide your ${te[E]??E}`);m.push({type:E,value:k})}let L=m.find(p=>!(({type:E,value:k})=>{let F=fr[E];return!F||F(k)})(p));if(L)return h(L.type),void y(`Enter a valid ${te[L.type]??L.type}`);t(m)}},watermark:!0,isSandbox:r,children:o.jsxs(Y,{children:[(n??[]).map(m=>{let L=(i??[]).find(p=>p.original_missing_identifiers.includes(m.type));if(L){let p=d[m.type]||m.type;return o.jsxs(ve,{children:[o.jsx("select",{value:p,onChange:E=>{c(k=>({...k,[m.type]:E.target.value})),j(null),y(null),h(null)},style:{flex:"0 0 auto",padding:"6px"},children:[m.type,...L.alternative_missing_identifiers].map(E=>o.jsx("option",{value:E,children:te[E]??E},E))}),o.jsx(R,{placeholder:te[p]??p,value:w(p),onChange:E=>{l(k=>({...k,[p]:E.target.value})),y(null),h(null)},onFocus:()=>j(p),onBlur:()=>j(null),readOnly:r&&!!je[p],$hasError:f===p||((s==null?void 0:s.includes(p))??!1)})]},m.type)}return o.jsx(R,{placeholder:te[m.type]??m.type,value:w(m.type),onChange:p=>{l(E=>({...E,[m.type]:p.target.value})),y(null),h(null)},onFocus:()=>j(m.type),onBlur:()=>j(null),readOnly:r&&!!je[m.type],$hasError:f===m.type||((s==null?void 0:s.includes(m.type))??!1)},m.type)}),u&&o.jsx(V,{children:u}),s&&s.length>0&&o.jsxs(V,{children:["Invalid format for:"," ",s.map(m=>te[m]??m).join(", ")]})]})})},No=({onClose:e,onNameSubmitted:t,isSandbox:r})=>{let[n,i]=_.useState(""),[s,a]=_.useState(r?"Verified":""),[l,d]=_.useState(null),c=()=>{n.trim()&&s.trim()?t==null||t({firstName:n.trim(),lastName:s.trim()}):d("First and last name are required")};return o.jsx(N,{showClose:!0,onClose:e,icon:pr,title:"Add name",subtitle:"Please enter your full legal name as it appears on your government-issued ID.",primaryCta:{label:"Continue",onClick:c},watermark:!0,isSandbox:r,children:o.jsxs(Y,{children:[o.jsx(R,{placeholder:"First name",value:n,onChange:u=>{i(u.target.value),d(null)},onKeyDown:u=>u.key==="Enter"&&c(),$hasError:!!l&&!n.trim(),autoFocus:!0}),o.jsx(R,{placeholder:"Last name",value:s,onChange:u=>{a(u.target.value),d(null)},onKeyDown:u=>u.key==="Enter"&&c(),$hasError:!!l&&!s.trim(),readOnly:r}),l&&o.jsx(V,{children:l})]})})},Ro=({onClose:e,onSubmit:t})=>{let[r,n]=_.useState([]),[i,s]=_.useState(""),[a,l]=_.useState(null),d=_.useRef(!1),c=K.filter(v=>!r.includes(v.code)),u=r.map(v=>K.find(w=>w.code===v)).filter(v=>!!v),y=v=>{let w=v.trim().toLowerCase();return K.find(m=>m.code.toLowerCase()===w||m.name.toLowerCase()===w)},f=v=>{let w=v.trim().toLowerCase();return w?K.filter(m=>m.code.toLowerCase().includes(w)||m.name.toLowerCase().includes(w)):K},h=f(i),C=h.map(v=>v.name),j=v=>{let w=f(v),m=y(v)??(w.length===1?w[0]:void 0);m&&(n(L=>L.includes(m.code)?L:[...L,m.code]),s(""),l(null))};return o.jsx(N,{showClose:!0,onClose:e,icon:at,title:"Nationality",subtitle:"Select your nationality or nationalities.",primaryCta:{label:"Continue",onClick:()=>{let v=y(i),w=v&&!r.includes(v.code)?[...r,v.code]:r;w.length?t(w):l("Please select at least one nationality")}},watermark:!0,children:o.jsxs(Y,{children:[o.jsxs(no,{items:C,value:null,inputValue:i,onInputValueChange:v=>{d.current&&(d.current=!1,y(v))||s(v)},onValueChange:v=>(w=>{w&&(d.current=!0,j(w))})(typeof v=="string"?v:null),children:[o.jsxs(io,{children:[o.jsx(Le,{$hasError:!!a,"aria-label":"Nationality",autoComplete:"country",disabled:!c.length,placeholder:r.length?"Add another nationality":"Search nationality",onKeyDown:v=>{v.key==="Enter"&&(v.preventDefault(),j(v.currentTarget.value))}}),o.jsx(so,{"aria-hidden":"true",children:o.jsx(cr,{size:18})})]}),o.jsx(ao,{children:o.jsx(lo,{side:"bottom",sideOffset:4,collisionAvoidance:{side:"none",align:"shift",fallbackAxisSide:"none"},children:o.jsx(co,{children:o.jsx(uo,{children:v=>{let w=h.find(m=>m.name===v);return w?o.jsxs(po,{value:w.name,children:[o.jsx("span",{children:w.name}),o.jsx(mo,{children:r.includes(w.code)?o.jsx(it,{size:16}):w.code})]},w.code):null}})})})})]}),!!u.length&&o.jsx(yo,{"aria-label":"Selected nationalities",children:u.map(v=>o.jsx(ho,{children:o.jsxs(fo,{type:"button",onClick:()=>(w=>{n(m=>m.filter(L=>L!==w)),l(null)})(v.code),"aria-label":`Remove ${v.name}`,size:"sm",children:[o.jsx("span",{children:v.name}),o.jsx(dr,{size:14})]})},v.code))}),a&&o.jsx(V,{children:a})]})})},Mo=({onClose:e,onPhoneSubmitted:t,onPhoneBack:r,defaultCountry:n})=>{let i=_.useRef(null),[s,a]=_.useState(!1),[l,d]=_.useState(!1);return o.jsx(N,{showClose:!0,onClose:e,showBack:!!r,onBack:r??void 0,icon:o.jsx(Fe,{height:24}),iconVariant:"logo",title:"Add phone number",subtitle:"Enter your phone number to continue with Link.",primaryCta:{label:"Submit",onClick:()=>{var c;(c=i.current)!=null&&c.isValid&&(d(!0),t==null||t(qe(i.current.qualifiedPhoneNumber)))},disabled:!s,loading:l},watermark:!0,children:o.jsx(tr,{stacked:!0,noIncludeSubmitButton:!0,hideRecent:!0,defaultCountry:n,onChange:c=>{i.current=c,a(c.isValid)},onSubmit:async c=>{d(!0),t==null||t(qe(c.qualifiedPhoneNumber))}})})},Fo=({onClose:e,onSsnSubmitted:t,appName:r,isSandbox:n})=>{let[i,s]=_.useState(n?"000-00-0000":""),[a,l]=_.useState(null),[d,c]=_.useState(!0),u=()=>{let y=i.replace(/\D/g,"");y.length===9?t==null||t(y):l("Enter your full 9-digit SSN")};return o.jsx(N,{showClose:!0,onClose:e,icon:ur,title:"Add social security number",subtitle:`Required to verify your identity. ${r} will not store your SSN.`,primaryCta:{label:"Continue",onClick:u},watermark:!0,isSandbox:n,children:o.jsxs(Y,{children:[o.jsx(R,{placeholder:"XXX-XX-XXXX",value:n||d?i:i.replace(/\d/g,"•"),onChange:y=>{s((f=>{let h=f.replace(/\D/g,"").slice(0,9);return[h.slice(0,3),h.slice(3,5),h.slice(5,9)].filter(Boolean).join("-")})(y.target.value)),l(null)},onFocus:()=>c(!0),onBlur:()=>c(!1),onKeyDown:y=>y.key==="Enter"&&u(),$hasError:!!a,type:"text",inputMode:"numeric",autoComplete:"off",maxLength:11,readOnly:n,autoFocus:!0}),a&&o.jsx(V,{children:a})]})})},Do=({onClose:e,amount:t,appName:r,currencySymbol:n,paymentMethodLabel:i,fee:s,destinationAmount:a,destinationToken:l,destinationNetwork:d,tokenIconUrl:c,networkIconUrl:u,opts:y,onConfirmCheckout:f,quoteExpiresAt:h,onRefreshQuote:C,initialLoading:j=!1})=>{let[v,w]=_.useState(j),[m,L]=_.useState(!1),p=_.useRef(null);_.useEffect(()=>{if(!h||!C)return;let F=Math.max(h-Date.now()-1e4,0);return p.current=setTimeout(()=>{L(!0),C().finally(()=>L(!1))},F),()=>{p.current&&clearTimeout(p.current)}},[h,C]);let E=(y==null?void 0:y.destination.address)??"",k=Ot(E,4,4);return o.jsx(N,{showClose:!0,onClose:e,title:"Approve transaction",subtitle:`${r} wants your permission for this transaction.`,primaryCta:{label:"Approve",onClick:()=>{p.current&&clearTimeout(p.current),w(!0),f==null||f()},loading:v,disabled:m},watermark:!0,isSandbox:(y==null?void 0:y.environment)==="sandbox",children:o.jsxs(go,{children:[c||u?o.jsxs(vo,{children:[o.jsxs(xo,{children:[c&&o.jsx(bo,{src:c,alt:l}),u&&o.jsx(Co,{src:u,alt:d})]}),o.jsxs(We,{children:[o.jsx(Qe,{children:"You receive"}),o.jsxs(Ze,{children:[a," ",l," on ",d]})]})]}):o.jsxs(We,{children:[o.jsx(Qe,{children:"You receive"}),o.jsxs(Ze,{children:[a," ",l," on ",d]})]}),o.jsxs(wo,{children:[o.jsxs(le,{children:[o.jsx(ce,{children:"Total amount"}),o.jsxs(ge,{children:[n,t]})]}),i&&o.jsxs(le,{children:[o.jsx(ce,{children:"From"}),o.jsx(ge,{children:i})]}),o.jsxs(le,{children:[o.jsx(ce,{children:"To"}),o.jsx(rr,{iconOnly:!0,value:E,iconSize:16,children:k})]}),o.jsxs(le,{children:[o.jsx(ce,{children:"Estimated fee"}),o.jsx(ge,{children:s})]}),o.jsxs(le,{children:[o.jsx(ce,{children:"Processing time"}),o.jsx(ge,{children:"Instant"})]})]})]})})},Bo=({onClose:e})=>{let t=_.useRef(!1),[r,n]=_.useState(null),i=T(s=>{var a;return((a=s==null?void 0:s.opts)==null?void 0:a.environment)==="sandbox"});return _.useEffect(()=>{t.current||(t.current=!0,(async()=>{let s=S().onramp;try{if(!s.promptUserAttestation)throw Error("Stripe onramp promptUserAttestation is unavailable");return await s.promptUserAttestation("eu_carf",({result:a})=>{if(b()&&a==="confirmed"){let l=S(),d=[...l.context.kycProvidedFields??[],"attestation"];g({stripeSession:{...l,context:{...l.context,kycProvidedFields:d}}}),q(ie("eu-attestation"))}})}catch(a){return $(a),null}})().then(s=>{s&&n(s)}))},[]),r?o.jsxs(o.Fragment,{children:[i?o.jsx(De,{}):null,o.jsx(Re,{element:r,minHeight:480})]}):o.jsx(N,{showClose:!0,onClose:e,iconVariant:"loading",title:"Loading attestation...",watermark:!0})},Ue=({size:e=64,...t})=>o.jsxs("svg",{width:e,height:e,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[o.jsx("path",{d:"M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z",fill:"#00D66F"}),o.jsx("path",{d:"M30.5274 12.8003H20.6587C22.5787 20.8259 28.1851 27.6867 35.1995 32.0003C28.1723 36.3139 22.5787 43.1747 20.6587 51.2003H30.5274C32.9722 43.7763 39.7435 37.3251 48.0634 36.0067V27.9811C39.7307 26.6755 32.9594 20.2243 30.5274 12.8003Z",fill:"#011E0F"})]}),Xe=({mode:e,onClose:t,onLinkAccountConfirmed:r,onLinkAccountBack:n,userEmail:i})=>{let s=be(),a=(s==null?void 0:s.name)??"This app",l=e==="connect"?{title:"Connect to Link",subtitle:`${a} uses Link for quicker and easier checkout.`,description:`${a} will be able to view your Link account details, identity information, and saved payments.`,cta:"Continue"}:{title:"Create a Link account",subtitle:"With Link, you can securely save your information for faster checkout.",description:null,cta:"Continue"};return o.jsx(N,{showClose:!0,onClose:t,showBack:!!n,onBack:n??void 0,icon:o.jsx(Ue,{size:64}),iconVariant:"logo",title:l.title,subtitle:l.subtitle,primaryCta:{label:l.cta,onClick:()=>r==null?void 0:r()},helpText:l.description??void 0,watermark:!0,children:e==="create"&&i&&o.jsx(ko,{children:i})})},Uo=({onClose:e,tokens:t,onSelectToken:r,onAddNew:n,isLoading:i})=>{var l;let[s,a]=_.useState(((l=t[0])==null?void 0:l.id)??null);return o.jsx(N,{showClose:!0,onClose:e,icon:o.jsx(Fe,{height:24}),iconVariant:"logo",title:"Select payment method",subtitle:"Choose from your saved cards. Debit cards typically have higher success rates than credit cards.",primaryCta:{label:"Continue",onClick:()=>{let d=t.find(c=>c.id===s);d&&r(d)},loading:i,disabled:!s},watermark:!0,children:o.jsx(zo,{children:o.jsxs(Vo,{children:[t.map(d=>{var c,u,y;return o.jsxs(Oo,{$selected:s===d.id,onClick:()=>a(d.id),disabled:i,children:[o.jsx(Ko,{children:o.jsx(pe,{size:16})}),o.jsxs(Yo,{children:[o.jsx(Ho,{children:qo((c=d.card)==null?void 0:c.brand,(u=d.card)==null?void 0:u.funding)}),o.jsxs(Wo,{children:[o.jsx(Qo,{children:"••••"})," ",((y=d.card)==null?void 0:y.last4)??""]})]})]},d.id)}),o.jsxs(Zo,{onClick:n,disabled:i,children:[o.jsx(lr,{size:14}),o.jsx("span",{children:"Add new card"})]})]})})})};let qo=(e,t)=>{if(!e)return"Card";let r=e.charAt(0).toUpperCase()+e.slice(1);return t?`${r} ${t.charAt(0).toUpperCase()}${t.slice(1)}`:r},zo=x.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`,Vo=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,Oo=x.button`
  && {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem;
    background: ${e=>e.$selected?"var(--privy-color-background-2)":"transparent"};
    border: ${e=>e.$selected?"1.5px solid var(--privy-color-accent)":"1px solid var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    cursor: pointer;
    transition: border-color 0.15s ease;
    box-shadow: ${e=>e.$selected?"0px 2px 6px rgba(50, 50, 93, 0.06), 0px 1px 1.5px rgba(0, 0, 0, 0.06)":"none"};
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Ko=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1rem;
  flex-shrink: 0;
  color: var(--privy-color-foreground-3);
`,Yo=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`,Ho=x.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  letter-spacing: -0.15px;
`,Wo=x.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,Qo=x.span`
  font-weight: 500;
`,Zo=x.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem;
    background: none;
    border: none;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: var(--privy-color-accent);
    cursor: pointer;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;const Xo=({element:e,isSandbox:t})=>o.jsxs(o.Fragment,{children:[t&&o.jsx(De,{children:"You're in a sandbox environment. Use 000-000 as the Link verification code."}),o.jsx(Re,{element:e,minHeight:300,bleed:!0})]}),Go=({onClose:e,onVerified:t})=>{let r=_.useRef(!1),[n,i]=_.useState(!1),s=_.useCallback(async()=>{i(!1);let a=await(async(l={})=>{var c;let d=S();try{let u=await d.onramp.verifyDocuments();if(!b())return"inactive";if((u==null?void 0:u.result)==="abandoned")return"abandoned";q("kyc");let y=await Te({operation:()=>Z(d.privy,{environment:d.context.config.environment}),until:f=>{var C;if(f.status!=="active")return!1;let h=(C=f.kyc_tiers)==null?void 0:C.find(j=>j.tier==="l2");return(h==null?void 0:h.verification_status)==="verified"},delay:0,interval:gt,attempts:Math.ceil(30),signal:se()});if(!b()||y.status==="aborted")return"inactive";if(y.status==="max_attempts"){let f=await Z(d.privy,{environment:d.context.config.environment});if(f.status==="active"){let h=(c=f.kyc_tiers)==null?void 0:c.find(C=>C.tier==="l2");if((h==null?void 0:h.verification_status)==="rejected")throw dt(f.kyc_tiers)?Error("Document verification was rejected. Contact Stripe support for help."):Error("Document verification was rejected. Try again.")}}return(l.proceedToPayment??!0)&&await J(),"done"}catch(u){return $(u),"error"}})({proceedToPayment:!t});a==="abandoned"&&i(!0),a==="done"&&(t==null||t())},[t]);return _.useEffect(()=>{r.current||(r.current=!0,s())},[s]),o.jsx(N,n?{showClose:!0,onClose:e,icon:nt,iconVariant:"error",title:"Verification canceled",subtitle:"Try again to finish identity verification.",primaryCta:{label:"Try again",onClick:s},watermark:!0}:{showClose:!0,onClose:e,iconVariant:"loading",title:"Verifying identity",subtitle:"Please complete document and selfie verification...",watermark:!0})};let Jo=[];const en=({step:e,element:t,onClose:r,isLoading:n})=>{var L;let i=be(),s=(i==null?void 0:i.name)??"This app",a=T(p=>(p==null?void 0:p.email)??null),l=T(p=>(p==null?void 0:p.amount)??""),d=T(p=>(p==null?void 0:p.opts)??null),c=T(p=>(p==null?void 0:p.stripeConfirmCheckoutDetails)??null),u=T(p=>(p==null?void 0:p.destinationCurrencyIconUrl)??null),y=T(p=>(p==null?void 0:p.destinationNetworkIconUrl)??null),f=T(p=>(p==null?void 0:p.destinationCurrencySymbol)??null),h=T(p=>{var E,k;return(k=(E=p==null?void 0:p.stripeSession)==null?void 0:E.context.kycAddress)==null?void 0:k.country}),C=T(p=>{var E;return(E=p==null?void 0:p.stripeSession)==null?void 0:E.context.savedPaymentTokens})??Jo,j=T(p=>{var E;return(E=p==null?void 0:p.stripeSession)==null?void 0:E.context.documentVerificationAction}),v=T(p=>{var E;return((E=p==null?void 0:p.stripeSession)==null?void 0:E.context.kycRegion)??"us"}),w=()=>{$e(),g({state:{status:"select-amount"},isLoading:!1})},m=j?()=>{let p=S();if((()=>{let k=S(),{documentVerificationAction:F,...D}=k.context;g({stripeSession:{...k,context:D}})})(),j.type==="retry-checkout")return void Ye();let E=p.context.paymentToken;E&&Ne({paymentToken:E,loader:j.loader})}:void 0;switch(e){case"choose-email":return o.jsx(_o,{onClose:r,onEmailChosen:zr,onEmailBack:w,userEmail:a});case"connect-link":return o.jsx(Xe,{mode:"connect",onClose:r,onLinkAccountConfirmed:()=>{Pe("connect")},onLinkAccountBack:w,userEmail:a});case"create-link-account":return o.jsx(Xe,{mode:"create",onClose:r,onLinkAccountConfirmed:()=>{Pe("create")},onLinkAccountBack:w,userEmail:a});case"collect-country":return o.jsx(Lo,{onClose:r,onSubmit:qr});case"collect-contact":return o.jsx(Mo,{onClose:r,onPhoneSubmitted:to,onPhoneBack:w,defaultCountry:h});case"collect-name":return o.jsx(No,{onClose:r,onNameSubmitted:Xr,isSandbox:(d==null?void 0:d.environment)==="sandbox"});case"collect-dob":return o.jsx(Io,{onClose:r,onDobSubmitted:Zr,region:v});case"collect-ssn":return o.jsx(Fo,{onClose:r,onSsnSubmitted:Gr,appName:s,isSandbox:(d==null?void 0:d.environment)==="sandbox"});case"collect-address":return o.jsx(Eo,{onClose:r,onAddressSubmitted:Qr,onBack:w});case"collect-nationality":return o.jsx(Ro,{onClose:r,onSubmit:Jr});case"collect-birth-location":return o.jsx(Po,{onClose:r,onSubmit:Rr});case"collect-identifiers":return o.jsx($o,{onClose:r,onSubmit:Vr,isSandbox:(d==null?void 0:d.environment)==="sandbox"});case"eu-attestation":return o.jsx(Bo,{onClose:r});case"verify-documents":return o.jsx(Go,{onClose:r,onVerified:m});case"authenticating":return o.jsx(Xo,{element:t,isSandbox:(d==null?void 0:d.environment)==="sandbox"});case"kyc":return o.jsx(N,{showClose:!0,onClose:r,iconVariant:"loading",title:"Verifying identity",subtitle:"This may take a moment...",watermark:!0,isSandbox:(d==null?void 0:d.environment)==="sandbox"});case"select-payment":return o.jsx(Uo,{onClose:r,tokens:C,onSelectToken:eo,onAddNew:()=>{J({skipTokenCheck:!0})},isLoading:n});case"payment":return o.jsx(N,{showClose:!0,onClose:r,showBack:!0,onBack:w,headerTitle:"Add payment method",subtitle:"Use a Visa or Mastercard. American Express and Discover are not supported.",watermark:!0,isSandbox:(d==null?void 0:d.environment)==="sandbox",children:o.jsx(Re,{element:t,minHeight:300})});case"confirm-checkout":return o.jsx(Do,{onClose:r,amount:(c==null?void 0:c.sourceAmount)??l,appName:s,currencySymbol:(c==null?void 0:c.currencySymbol)??"$",paymentMethodLabel:(c==null?void 0:c.paymentMethodLabel)??null,fee:(c==null?void 0:c.fee)??"Included",destinationAmount:(c==null?void 0:c.destinationAmount)??l,destinationToken:(c==null?void 0:c.destinationToken)??f??((L=d==null?void 0:d.destination.asset)==null?void 0:L.toUpperCase())??"",destinationNetwork:(c==null?void 0:c.destinationNetwork)??"",tokenIconUrl:u,networkIconUrl:y,opts:d,onConfirmCheckout:Ye,quoteExpiresAt:(c==null?void 0:c.quoteExpiresAt)??null,onRefreshQuote:ro});case"checkout":return o.jsx(N,{showClose:!0,onClose:r,iconVariant:"loading",watermark:!0,isSandbox:(d==null?void 0:d.environment)==="sandbox"});default:return null}},tn=({onClose:e})=>o.jsx(Q,{showClose:!0,onClose:e,iconVariant:"loading",title:"Processing transaction",subtitle:"Your purchase is in progress. You can leave this screen — we’ll notify you when it’s complete.",primaryCta:{label:"Done",onClick:e},watermark:!0});let Ie={title:"Something went wrong",subtitle:"We couldn't complete your transaction. Please try again.",primaryCtaLabel:"Try again"},Ge={[W.ONRAMP_UNSUPPORTED_INFORMATION]:{...Ie,subtitle:"This payment method is not available in your region. Try another payment method."},[W.ONRAMP_TRANSACTION_LIMIT_REACHED]:{title:"Purchase limit reached",subtitle:"This purchase is above the current limit. Try a smaller amount.",primaryCtaLabel:"Edit amount"}};const rn=e=>{let t=yt(e);return t&&Ge[t]?Ge[t]:e!=null&&e.message?{...Ie,subtitle:e.message}:Ie},on=({onClose:e,onRetry:t,error:r})=>{let n=rn(r);return o.jsx(Q,{showClose:!0,onClose:e,icon:nt,iconVariant:"error",title:n.title,subtitle:n.subtitle,primaryCta:{label:n.primaryCtaLabel,onClick:t},secondaryCta:{label:"Close",onClick:e},watermark:!0})},nn=({onClose:e})=>o.jsx(Q,{showClose:!0,onClose:e,icon:it,iconVariant:"success",title:"Transaction confirmed",subtitle:"Your purchase is processing. Funds should arrive in your wallet within a few minutes.",primaryCta:{label:"Done",onClick:e},watermark:!0});let sn={CREDIT_DEBIT_CARD:"card",APPLE_PAY:"Apple Pay",GOOGLE_PAY:"Google Pay",BANK:"bank deposit",BANK_TRANSFER:"bank deposit",SEPA:"bank deposit",PIX:"PIX",STRIPE_LINK:"Link"},an=e=>sn[e]??e.replace(/_/g," ").toLowerCase().replace(/^\w/,t=>t.toUpperCase()),ln={CREDIT_DEBIT_CARD:o.jsx(pe,{size:14}),APPLE_PAY:o.jsx(ze,{size:14}),GOOGLE_PAY:o.jsx(ze,{size:14}),BANK:o.jsx(Se,{size:14}),BANK_TRANSFER:o.jsx(Se,{size:14}),SEPA:o.jsx(Se,{size:14}),PIX:o.jsx(ar,{size:14}),STRIPE_LINK:o.jsx(Ue,{size:14})};const cn=({opts:e,onClose:t,onBack:r,onEditSourceAsset:n,onEditPaymentMethod:i,onContinue:s,onAmountChange:a,amount:l,selectedQuote:d,quotesWarning:c,quotesErrors:u,quotesCount:y,isLoading:f,destinationCurrencySymbol:h})=>{var w;let C=be().appearance.palette.colorScheme,j=(({destinationCurrencySymbol:m})=>m??"crypto")({destinationCurrencySymbol:h});return o.jsxs(Q,{showClose:!0,onClose:t,showBack:!!r,onBack:r,headerTitle:`Buy ${j}`,primaryCta:{label:"Continue",onClick:s,loading:f,disabled:!d},helpText:c?o.jsx(ot,{theme:C,children:o.jsx(Je,{children:o.jsxs(o.Fragment,c==="amount_too_low"?{children:[o.jsx(et,{children:"Amount too low"}),o.jsx(Ee,{children:"Please choose a higher amount to continue."})]}:{children:[o.jsx(et,{children:"Unable to get quotes"}),o.jsx(Ee,{children:((w=u==null?void 0:u[0])==null?void 0:w.error)??"Something went wrong. Please try again."})]})})}):d&&y>1?o.jsxs(un,{onClick:i,children:[(v=d.payment_method_category??d.payment_method,ln[v]??o.jsx(pe,{size:14})),o.jsxs("span",{children:["Pay with"," ",an(d.payment_method_category??d.payment_method)]}),o.jsx(sr,{size:14})]}):null,watermark:!0,children:[(d==null?void 0:d.warning)&&o.jsx(dn,{theme:C,children:o.jsx(Je,{children:o.jsx(Ee,{children:d.warning})})}),o.jsx(Gt,{currency:e.source.selectedAsset,value:l,onChange:a,inputMode:"decimal",autoFocus:!0}),o.jsx(Jt,{selectedAsset:e.source.selectedAsset,onEditSourceAsset:n})]});var v};let dn=x(or)`
  margin-bottom: 0.75rem;
`,Je=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
  min-width: 0;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  font-feature-settings:
    'calt' 0,
    'kern' 0;
  text-align: left;
`,et=x.span`
  font-weight: 600;
`,Ee=x.span`
  font-weight: 400;
`,un=x.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;

  && {
    padding: 0;
    color: var(--privy-color-accent);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
  }
`,mn={CREDIT_DEBIT_CARD:"Credit / debit card",APPLE_PAY:"Apple Pay",GOOGLE_PAY:"Google Pay",BANK:"Bank transfer",BANK_TRANSFER:"Bank transfer",SEPA:"SEPA",PIX:"PIX",STRIPE_LINK:"Link"},pn=e=>mn[e]??e.replace(/_/g," ").toLowerCase().replace(/^\w/,t=>t.toUpperCase()),yn={CREDIT_DEBIT_CARD:o.jsx(pe,{size:20}),APPLE_PAY:o.jsx(ir,{width:20,height:20}),GOOGLE_PAY:o.jsx(nr,{width:20,height:20}),BANK:o.jsx(fe,{size:20}),BANK_TRANSFER:o.jsx(fe,{size:20}),SEPA:o.jsx(fe,{size:20}),PIX:o.jsx(fe,{size:20}),STRIPE_LINK:o.jsx(Ue,{size:20})},hn=e=>yn[e]??o.jsx(pe,{size:20});const fn=({onClose:e,onSelectPaymentMethod:t,quotes:r,isLoading:n})=>o.jsx(Q,{showClose:!0,onClose:e,title:"Select payment method",subtitle:"Choose how you'd like to pay",watermark:!0,children:o.jsx(gn,{children:r.map((i,s)=>{let a=i.payment_method_category??i.payment_method;return o.jsx(vn,{onClick:()=>t(i),disabled:n,children:o.jsxs(xn,{children:[o.jsx(bn,{children:hn(a)}),o.jsx(Cn,{children:o.jsx(wn,{children:pn(a)})})]})},`${i.provider}-${i.payment_method}-${s}`)})})});let gn=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`,vn=x.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-md);
  border-style: solid;
  display: flex;

  && {
    padding: 1rem;
  }
`,xn=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,bn=x.div`
  color: var(--privy-color-foreground-3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Cn=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  flex: 1;
`,wn=x.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`;const kn=({onClose:e,onBack:t,onContinue:r,onAmountChange:n,onSelectSource:i,onEditSourceAsset:s,onEditPaymentMethod:a,onSelectPaymentMethod:l,onRetry:d,opts:c,state:u,amount:y,error:f,selectedQuote:h,quotesWarning:C,quotesErrors:j,destinationCurrencySymbol:v,quotesCount:w,isLoading:m,isInitialQuoteLoading:L,stripeElement:p})=>u.status==="select-amount"?L?o.jsx(Q,{showClose:!0,onClose:e,iconVariant:"loading"}):o.jsx(cn,{onClose:e,onBack:t,onContinue:r,onAmountChange:n,onEditSourceAsset:s,onEditPaymentMethod:a,opts:c,amount:y,selectedQuote:h,quotesWarning:C,quotesErrors:j,quotesCount:w,destinationCurrencySymbol:v,isLoading:m}):u.status==="select-source-asset"?o.jsx(Xt,{onSelectSource:i,opts:c,isLoading:m}):u.status==="select-payment-method"?o.jsx(fn,{onClose:e,onSelectPaymentMethod:l,quotes:u.quotes,isLoading:m}):u.status==="stripe-flow"?o.jsx(en,{step:u.step,element:p,onClose:e,isLoading:m}):u.status==="provider-confirming"?o.jsx(tn,{onClose:e}):u.status==="provider-error"?o.jsx(on,{onClose:e,onRetry:d,error:f}):u.status==="provider-success"?o.jsx(nn,{onClose:e}):null,On={component:()=>{var v;let{onUserCloseViaDialogOrKeybindRef:e}=Mt(),t=T();if(!t)return null;let{opts:r,state:n,error:i,isLoading:s,amount:a,quotesWarning:l,quotesErrors:d,localQuotes:c,localSelectedQuote:u,initialQuotes:y,initialSelectedQuote:f,destinationCurrencySymbol:h,stripeElement:C,onBack:j}=t;return e.current=Ve,o.jsx(kn,{onClose:Ve,onBack:j,opts:r,state:n,error:i,isLoading:s,isInitialQuoteLoading:y==null,amount:a,selectedQuote:Ft({localQuotes:c,localSelectedQuote:u,initialSelectedQuote:f}),quotesWarning:l,quotesErrors:d,quotesCount:((v=c??y)==null?void 0:v.length)??0,destinationCurrencySymbol:h,onAmountChange:hr,onContinue:Ar,onSelectSource:Nr,onEditSourceAsset:Ir,onEditPaymentMethod:Lr,onSelectPaymentMethod:Tr,onRetry:$r,stripeElement:C})}};export{On as FiatOnrampScreen,On as default};
