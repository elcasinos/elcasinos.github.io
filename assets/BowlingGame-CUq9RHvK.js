var yu=Object.defineProperty;var Mu=(r,t,e)=>t in r?yu(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var le=(r,t,e)=>Mu(r,typeof t!="symbol"?t+"":t,e);import{j as ht,r as ie}from"./vendor-react-Df0SfSI6.js";import{U as Eu}from"./UsdChip-cUZ8cRth.js";import{r as bu}from"./resultSignal-Bi2rtu40.js";import{k as wu}from"./gatesEngine-D16ycE6m.js";import{r as bl,s as wl}from"./vendor-ethers-Crfx5rr9.js";import{u as Tu}from"./bowlingAssets-BhBJBh0X.js";import{u as Au,A as Cu,B as Ru,F as Tl,S as Al,N as Cl,C as Pu,c as qs}from"./AudioToggles-D-lRu-og.js";import{a as Lu}from"./ControlsTabs-DsU8Y_rp.js";import{u as Nu,c as Iu,d as Du,B as Uu}from"./tableSource-BuwKJdd6.js";import{s as Kr}from"./tableSfx-COOCTST-.js";import{a as Rl}from"./ShowGameV5-CJaeye_b.js";import{l as Fu,B as Ou,s as Bu}from"./GatesGame-DbhGyl_y.js";import{cv as zu,az as ku,aK as Gu,Q as Pl}from"./index-DCj9V2F1.js";import{e as Ll,a5 as Vu,bI as Hu}from"./vendor-icons-C_2NPD5Y.js";import"./lane-CbVljHWS.js";import"./logo-B3yMrhtK.js";import"./rabbit-Csho1gCK.js";import"./artLoader-6YFxoqMY.js";import"./gameCore-D6oDU9Gy.js";import"./casinoGame-CQUlVtff.js";import"./betfeed-B5vCYfb7.js";import"./preload-helper-C1FmrZbK.js";import"./vendor-supabase-kOjTseMU.js";import"./balanceBus-aehUOLES.js";import"./v5errors-BJsWs6pt.js";import"./App-D7FEH5RA.js";import"./fitBet-BN4-KL6E.js";import"./gatesAssets-CyDvl4n4.js";import"./bg-BKjrDaNJ.js";import"./rabbit-cast-L4cPgqzP.js";import"./sym-0-DV3I-Dox.js";import"./elgatesRoom-D5CHM9RL.js";import"./ElGatesGameV4-DqYWxX4t.js";const Ir=[150,100,150,250,400,600,900,1300,1700,1850,2600],lh=45,Hr=10,Ns=11,bn=[{key:"pins",label:"Pin Count",sub:"7+ pins",pays:[0,0,0,0,0,0,0,3502,7005,9107,13311,16814]},{key:"spare",label:"Spare+",sub:"spare or strike",pays:[0,0,0,0,0,0,0,0,0,0,25330,25330]},{key:"strike",label:"Strike",sub:"strike only",pays:[0,0,0,0,0,0,0,0,0,0,0,38461]},{key:"turkey",label:"Triple Strike",sub:"3 balls · 2–3 strikes",pays:[0,0,11721,468871]}],fn=3,Wu=(r,t)=>bn[r].pays[t]??0,ch=r=>Math.max(...bn[r].pays);function Nl(r){let t=r.mod(1e4);for(let e=0;e<=10;e++){if(t<Ir[e])return e;t-=Ir[e]}return 10}function Xu(r,t){return qu(wu(r),t)}function qu(r,t){if(t===fn){const s=[];let o=0,a=0;for(let l=0;l<3;l++){const c=Nl(r);c===10&&o++,a|=c<<4*l,s.push({k1:c,k2:0,outcome:c===10?Ns:c})}return{mode:t,frames:s,outcome:o,result:a}}const e=Nl(r);let n=0;if(e<10)for(let s=0;s<10-e;s++)r.mod(100)<lh&&n++;const i=e===10?Ns:e+n===10?Hr:e+n;return{mode:t,frames:[{k1:e,k2:n,outcome:i}],outcome:i,result:e|n<<4}}function Yu(r,t,e=0){let n=BigInt(bl(wl(["bytes32","string","uint8"],[r,"pins",e])));const i=u=>{const d=Number(n%BigInt(u));return n=n/BigInt(u)||BigInt(bl(wl(["uint256"],[n+7n]))),d},o=[...[0,1,2,4,3,5,7,8,6,9]];for(let u=0;u<o.length;u++){const d=Math.min(o.length-1,u+i(3));[o[u],o[d]]=[o[d],o[u]]}const a=o.slice(0,t.k1),c=o.slice(t.k1).slice(0,t.k2);return[a,c]}function Zu(){const r=(n,i)=>{let s=1;for(let o=1;o<=i;o++)s=s*(n-i+o)/o;return s},t=new Array(12).fill(0),e=lh/100;for(let n=0;n<=10;n++){const i=Ir[n]/1e4;if(n===10){t[Ns]+=i;continue}const s=10-n;for(let o=0;o<=s;o++){const a=i*r(s,o)*e**o*(1-e)**(s-o);o===s?t[Hr]+=a:t[n+o]+=a}}return t}function $u(){const r=Ir[10]/1e4;return[(1-r)**3,3*r*(1-r)**2,3*r*r*(1-r),r**3]}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="186",Ku=0,Il=1,Ju=2,Ar=1,hh=2,Ts=3,Ti=0,$e=1,Tn=2,$n=0,Rs=1,Dl=2,Ul=3,Fl=4,Qu=5,ji=100,ju=101,td=102,ed=103,nd=104,id=200,sd=201,rd=202,od=203,uh=204,dh=205,ad=206,ld=207,cd=208,hd=209,ud=210,dd=211,fd=212,pd=213,md=214,qo=0,Yo=1,Zo=2,Is=3,$o=4,Ko=5,Jo=6,Qo=7,fh=0,gd=1,vd=2,Ln=0,ph=1,mh=2,gh=3,za=4,vh=5,_h=6,xh=7,Sh=300,Ai=301,as=302,Jr=303,Qr=304,Wr=306,jo=1e3,Zn=1001,ta=1002,Fe=1003,_d=1004,Ys=1005,Ve=1006,jr=1007,Ei=1008,je=1009,yh=1010,Mh=1011,Ds=1012,ka=1013,In=1014,Rn=1015,Dn=1016,Ga=1017,Va=1018,Us=1020,Eh=35902,bh=35899,wh=1021,Th=1022,pn=1023,jn=1026,bi=1027,Ah=1028,Ha=1029,Ci=1030,Wa=1031,Xa=1033,Cr=33776,Rr=33777,Pr=33778,Lr=33779,ea=35840,na=35841,ia=35842,sa=35843,ra=36196,oa=37492,aa=37496,la=37488,ca=37489,Dr=37490,ha=37491,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,va=37814,_a=37815,xa=37816,Sa=37817,ya=37818,Ma=37819,Ea=37820,ba=37821,wa=36492,Ta=36494,Aa=36495,Ca=36283,Ra=36284,Ur=36285,Pa=36286,xd=3200,La=0,Sd=1,hi="",Ue="srgb",Fr="srgb-linear",Or="linear",de="srgb",to=7680,yd=519,Md=512,Ed=513,bd=514,qa=515,wd=516,Td=517,Ya=518,Ad=519,Ch=35044,Ol="300 es",Pn=2e3,Fs=2001;function Cd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Os(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rd(){const r=Os("canvas");return r.style.display="block",r}const Bl={};function Br(...r){const t="THREE."+r.shift();console.log(t,...r)}function Rh(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Yt(...r){r=Rh(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function re(...r){r=Rh(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ss(...r){const t=r.join(" ");t in Bl||(Bl[t]=!0,Yt(...r))}function Pd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ld={[qo]:Yo,[Zo]:Jo,[$o]:Qo,[Is]:Ko,[Yo]:qo,[Jo]:Zo,[Qo]:$o,[Ko]:Is};class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eo=Math.PI/180,zr=180/Math.PI;function Kn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[r&255]+ke[r>>8&255]+ke[r>>16&255]+ke[r>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function ee(r,t,e){return Math.max(t,Math.min(e,r))}function Nd(r,t){return(r%t+t)%t}function no(r,t,e){return(1-e)*r+e*t}function An(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function me(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const cl=class cl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cl.prototype.isVector2=!0;let gt=cl,Jn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],f=s[o+1],p=s[o+2],v=s[o+3];if(d!==v||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*v;m<0&&(h=-h,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){const _=Math.acos(m),T=Math.sin(_);g=Math.sin(g*_)/T,a=Math.sin(a*_)/T,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+v*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+v*a;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+u*d+l*f-c*h,t[e+1]=l*p+u*h+c*d-a*f,t[e+2]=c*p+u*f+a*h-l*d,t[e+3]=u*p-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};const hl=class hl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hl.prototype.isVector3=!0;let H=hl;const io=new H,zl=new Jn,ul=class ul{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],v=i[0],m=i[3],g=i[6],_=i[1],T=i[4],x=i[7],b=i[2],M=i[5],C=i[8];return s[0]=o*v+a*_+l*b,s[3]=o*m+a*T+l*M,s[6]=o*g+a*x+l*C,s[1]=c*v+u*_+d*b,s[4]=c*m+u*T+d*M,s[7]=c*g+u*x+d*C,s[2]=h*v+f*_+p*b,s[5]=h*m+f*T+p*M,s[8]=h*g+f*x+p*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,p=e*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=d*v,t[1]=(i*c-u*n)*v,t[2]=(a*n-i*o)*v,t[3]=h*v,t[4]=(u*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(so.makeScale(t,e)),this}rotate(t){return ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(so.makeRotation(-t)),this}translate(t,e){return ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(so.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ul.prototype.isMatrix3=!0;let $t=ul;const so=new $t,kl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){const r={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(i.r=rs(i.r),i.g=rs(i.g),i.b=rs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?Or:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Fr]:{primaries:t,whitePoint:n,transfer:Or,toXYZ:kl,fromXYZ:Gl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:de,toXYZ:kl,fromXYZ:Gl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),r}const se=Id();function Qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function rs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ii;class Dd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ii===void 0&&(Ii=Os("canvas")),Ii.width=t.width,Ii.height=t.height;const i=Ii.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Os("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ud=0;class Za{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ro(i[o].image)):s.push(ro(i[o]))}else s=ro(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ro(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Dd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}let Fd=0;const oo=new H;class Oe extends Pi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Zn,i=Zn,s=Ve,o=Ei,a=pn,l=je,c=Oe.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Kn(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oo).x}get height(){return this.source.getSize(oo).y}get depth(){return this.source.getSize(oo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jo:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jo:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Sh;Oe.DEFAULT_ANISOTROPY=1;const dl=class dl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,x=(f+1)/2,b=(g+1)/2,M=(u+h)/4,C=(d+v)/4,S=(p+m)/4;return T>x&&T>b?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=M/n,s=C/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=M/i,s=S/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=C/s,i=S/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dl.prototype.isVector4=!0;let Me=dl;class Od extends Pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},s=new Oe(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Za(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Od{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ph extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bd extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Vr=class Vr{constructor(t,e,n,i,s,o,a,l,c,u,d,h,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,d,h,f,p,v,m)}set(t,e,n,i,s,o,a,l,c,u,d,h,f,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,p=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=h-v*c,e[9]=-a*l,e[2]=v-h*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,p=c*u,v=c*d;e[0]=h+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=v+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,p=c*u,v=c*d;e[0]=h-v*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,p=a*u,v=a*d;e[0]=l*u,e[4]=p*c-f,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*u,e[4]=v-h*d,e[8]=p*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+p,e[10]=h-v*d}else if(t.order==="XZY"){const h=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+v,e[5]=o*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,kd)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ii.crossVectors(n,Ke),ii.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ii.crossVectors(n,Ke)),ii.normalize(),Zs.crossVectors(Ke,ii),i[0]=ii.x,i[4]=Zs.x,i[8]=Ke.x,i[1]=ii.y,i[5]=Zs.y,i[9]=Ke.y,i[2]=ii.z,i[6]=Zs.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],_=n[3],T=n[7],x=n[11],b=n[15],M=i[0],C=i[4],S=i[8],A=i[12],P=i[1],D=i[5],k=i[9],N=i[13],L=i[2],I=i[6],U=i[10],q=i[14],W=i[3],O=i[7],J=i[11],V=i[15];return s[0]=o*M+a*P+l*L+c*W,s[4]=o*C+a*D+l*I+c*O,s[8]=o*S+a*k+l*U+c*J,s[12]=o*A+a*N+l*q+c*V,s[1]=u*M+d*P+h*L+f*W,s[5]=u*C+d*D+h*I+f*O,s[9]=u*S+d*k+h*U+f*J,s[13]=u*A+d*N+h*q+f*V,s[2]=p*M+v*P+m*L+g*W,s[6]=p*C+v*D+m*I+g*O,s[10]=p*S+v*k+m*U+g*J,s[14]=p*A+v*N+m*q+g*V,s[3]=_*M+T*P+x*L+b*W,s[7]=_*C+T*D+x*I+b*O,s[11]=_*S+T*k+x*U+b*J,s[15]=_*A+T*N+x*q+b*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15],_=l*f-c*h,T=a*f-c*d,x=a*h-l*d,b=o*f-c*u,M=o*h-l*u,C=o*d-a*u;return e*(v*_-m*T+g*x)-n*(p*_-m*b+g*M)+i*(p*T-v*b+g*C)-s*(p*x-v*M+m*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+i*(s*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],_=e*a-n*o,T=e*l-i*o,x=e*c-s*o,b=n*l-i*a,M=n*c-s*a,C=i*c-s*l,S=u*v-d*p,A=u*m-h*p,P=u*g-f*p,D=d*m-h*v,k=d*g-f*v,N=h*g-f*m,L=_*N-T*k+x*D+b*P-M*A+C*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=(a*N-l*k+c*D)*I,t[1]=(i*k-n*N-s*D)*I,t[2]=(v*C-m*M+g*b)*I,t[3]=(h*M-d*C-f*b)*I,t[4]=(l*P-o*N-c*A)*I,t[5]=(e*N-i*P+s*A)*I,t[6]=(m*x-p*C-g*T)*I,t[7]=(u*C-h*x+f*T)*I,t[8]=(o*k-a*P+c*S)*I,t[9]=(n*P-e*k-s*S)*I,t[10]=(p*M-v*x+g*_)*I,t[11]=(d*x-u*M-f*_)*I,t[12]=(a*A-o*D-l*S)*I,t[13]=(e*D-n*A+i*S)*I,t[14]=(v*T-p*b-m*_)*I,t[15]=(u*b-d*T+h*_)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,p=s*d,v=o*u,m=o*d,g=a*d,_=l*c,T=l*u,x=l*d,b=n.x,M=n.y,C=n.z;return i[0]=(1-(v+g))*b,i[1]=(f+x)*b,i[2]=(p-T)*b,i[3]=0,i[4]=(f-x)*M,i[5]=(1-(h+g))*M,i[6]=(m+_)*M,i[7]=0,i[8]=(p+T)*C,i[9]=(m-_)*C,i[10]=(1-(h+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Di.set(i[0],i[1],i[2]).length();const a=Di.set(i[4],i[5],i[6]).length(),l=Di.set(i[8],i[9],i[10]).length();s<0&&(o=-o),cn.copy(this);const c=1/o,u=1/a,d=1/l;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Pn,l=!1){const c=this.elements,u=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let p,v;if(l)p=s/(o-s),v=o*s/(o-s);else if(a===Pn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Fs)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Pn,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,v;if(l)p=1/(o-s),v=o/(o-s);else if(a===Pn)p=-2/(o-s),v=-(o+s)/(o-s);else if(a===Fs)p=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Vr.prototype.isMatrix4=!0;let ye=Vr;const Di=new H,cn=new ye,zd=new H(0,0,0),kd=new H(1,1,1),ii=new H,Zs=new H,Ke=new H,Vl=new ye,Hl=new Jn;class fi{constructor(t=0,e=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gd=0;const Wl=new H,Ui=new Jn,On=new ye,$s=new H,ds=new H,Vd=new H,Hd=new Jn,Xl=new H(1,0,0),ql=new H(0,1,0),Yl=new H(0,0,1),Zl={type:"added"},Wd={type:"removed"},Fi={type:"childadded",child:null},ao={type:"childremoved",child:null};class Pe extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new H,e=new fi,n=new Jn,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new $t}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$s.copy(t):$s.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(ds,$s,this.up):On.lookAt($s,ds,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(On),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wd),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pe.DEFAULT_UP=new H(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class es extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xd={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new es;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function co(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=Nd(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=co(o,s,t+1/3),this.g=co(o,s,t),this.b=co(o,s,t-1/3)}return se.colorSpaceToWorking(this,i),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=Nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return se.workingToColorSpace(Ge.copy(this),t),Math.round(ee(Ge.r*255,0,255))*65536+Math.round(ee(Ge.g*255,0,255))*256+Math.round(ee(Ge.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,i=Ge.g,s=Ge.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Ue){se.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,i=Ge.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Ks);const n=no(si.h,Ks.h,e),i=no(si.s,Ks.s,e),s=no(si.l,Ks.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new jt;jt.NAMES=Nh;class $a{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new $a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qd extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const hn=new H,Bn=new H,ho=new H,zn=new H,Oi=new H,Bi=new H,$l=new H,uo=new H,fo=new H,po=new H,mo=new Me,go=new Me,vo=new Me;class an{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){hn.subVectors(i,e),Bn.subVectors(n,e),ho.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Bn),l=hn.dot(ho),c=Bn.dot(Bn),u=Bn.dot(ho),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return mo.setScalar(0),go.setScalar(0),vo.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),vo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(mo,s.x),o.addScaledVector(go,s.y),o.addScaledVector(vo,s.z),o}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),Bn.subVectors(t,e),hn.cross(Bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),hn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Oi.subVectors(i,n),Bi.subVectors(s,n),uo.subVectors(t,n);const l=Oi.dot(uo),c=Bi.dot(uo);if(l<=0&&c<=0)return e.copy(n);fo.subVectors(t,i);const u=Oi.dot(fo),d=Bi.dot(fo);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Oi,o);po.subVectors(t,s);const f=Oi.dot(po),p=Bi.dot(po);if(p>=0&&f<=p)return e.copy(s);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Bi,a);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return $l.subVectors(s,i),a=(d-u)/(d-u+(f-p)),e.copy(i).addScaledVector($l,a);const g=1/(m+v+h);return o=v*g,a=h*g,e.copy(n).addScaledVector(Oi,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Vs{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(t.matrixWorld),this.union(Js)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Qs.subVectors(this.max,fs),zi.subVectors(t.a,fs),ki.subVectors(t.b,fs),Gi.subVectors(t.c,fs),ri.subVectors(ki,zi),oi.subVectors(Gi,ki),mi.subVectors(zi,Gi);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-mi.z,mi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,mi.z,0,-mi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-mi.y,mi.x,0];return!_o(e,zi,ki,Gi,Qs)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,zi,ki,Gi,Qs))?!1:(js.crossVectors(ri,oi),e=[js.x,js.y,js.z],_o(e,zi,ki,Gi,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const kn=[new H,new H,new H,new H,new H,new H,new H,new H],un=new H,Js=new Vs,zi=new H,ki=new H,Gi=new H,ri=new H,oi=new H,mi=new H,fs=new H,Qs=new H,js=new H,gi=new H;function _o(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gi.fromArray(r,s);const a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ae=new H,tr=new gt;let Yd=0;class Nn extends Pi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ch,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ih extends Nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dh extends Nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Be extends Nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Zd=new Vs,ps=new H,xo=new H;let Ka=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(xo)),this.expandByPoint(ps.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$d=0;const rn=new ye,So=new Pe,Vi=new H,Je=new Vs,ms=new Vs,De=new H;class en extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cd(t)?Dh:Ih)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return So.lookAt(t),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Be(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ka);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(Je.min,ms.min),Je.expandByPoint(De),De.addVectors(Je.max,ms.max),Je.expandByPoint(De)):(Je.expandByPoint(ms.min),Je.expandByPoint(ms.max))}Je.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)De.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(De));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)De.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(t,c),De.add(Vi)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new H,l[S]=new H;const c=new H,u=new H,d=new H,h=new gt,f=new gt,p=new gt,v=new H,m=new H;function g(S,A,P){c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,P),h.fromBufferAttribute(s,S),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,P),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),a[S].add(v),a[A].add(v),a[P].add(v),l[S].add(m),l[A].add(m),l[P].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let S=0,A=_.length;S<A;++S){const P=_[S],D=P.start,k=P.count;for(let N=D,L=D+k;N<L;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const T=new H,x=new H,b=new H,M=new H;function C(S){b.fromBufferAttribute(i,S),M.copy(b);const A=a[S];T.copy(A),T.sub(b.multiplyScalar(b.dot(A))).normalize(),x.crossVectors(M,A);const D=x.dot(l[S])<0?-1:1;o.setXYZW(S,T.x,T.y,T.z,D)}for(let S=0,A=_.length;S<A;++S){const P=_[S],D=P.start,k=P.count;for(let N=D,L=D+k;N<L;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new Nn(h,u,d)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ch,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const We=new H;class kr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new kr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yo=new H,Jd=new H,Qd=new $t;class ci{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=yo.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(yo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qd.getNormalMatrix(t),i=this.coplanarPoint(yo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let jd=0,hs=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Rs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=dh,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Uh extends hs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hi;const gs=new H,Wi=new H,Xi=new H,qi=new gt,vs=new gt,Fh=new ye,er=new H,_s=new H,nr=new H,Kl=new gt,Mo=new gt,Jl=new gt;class tf extends Pe{constructor(t=new Uh){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new en;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kd(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new kr(n,3,0,!1)),Hi.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),Fh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;ir(er.set(-.5,-.5,0),Xi,o,Wi,i,s),ir(_s.set(.5,-.5,0),Xi,o,Wi,i,s),ir(nr.set(.5,.5,0),Xi,o,Wi,i,s),Kl.set(0,0),Mo.set(1,0),Jl.set(1,1);let a=t.ray.intersectTriangle(er,_s,nr,!1,gs);if(a===null&&(ir(_s.set(-.5,.5,0),Xi,o,Wi,i,s),Mo.set(0,1),a=t.ray.intersectTriangle(er,nr,_s,!1,gs),a===null))return;const l=t.ray.origin.distanceTo(gs);l<t.near||l>t.far||e.push({distance:l,point:gs.clone(),uv:an.getInterpolation(gs,er,_s,nr,Kl,Mo,Jl,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ir(r,t,e,n,i,s){qi.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(vs.x=s*qi.x-i*qi.y,vs.y=i*qi.x+s*qi.y):vs.copy(qi),r.copy(t),r.x+=vs.x,r.y+=vs.y,r.applyMatrix4(Fh)}const Gn=new H,Eo=new H,sr=new H,rr=new H;let ef=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Eo.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),rr.copy(this.origin).sub(Eo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(sr),a=rr.dot(this.direction),l=-rr.dot(sr),c=rr.lengthSq(),u=Math.abs(1-o*o);let d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=s*u,d>=0)if(h>=-p)if(h<=p){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Eo).addScaledVector(sr,h),f}intersectSphere(t,e){if(t.radius<0)return null;Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,p=e.x-o.x,v=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,T=n.z-o.z,x=Math.abs(l),b=Math.abs(c),M=Math.abs(u);let C,S,A,P,D,k,N,L,I,U,q,W;if(x>=b&&x>=M?(A=l,k=d,I=p,W=g,l>=0?(C=c,S=u,P=h,D=f,N=v,L=m,U=_,q=T):(C=u,S=c,P=f,D=h,N=m,L=v,U=T,q=_)):b>=M?(A=c,k=h,I=v,W=_,c>=0?(C=u,S=l,P=f,D=d,N=m,L=p,U=T,q=g):(C=l,S=u,P=d,D=f,N=p,L=m,U=g,q=T)):(A=u,k=f,I=m,W=T,u>=0?(C=l,S=c,P=d,D=h,N=p,L=v,U=g,q=_):(C=c,S=l,P=h,D=d,N=v,L=p,U=_,q=g)),A===0)return null;const O=C/A,J=S/A,V=1/A,et=P-O*k,ft=D-J*k,zt=N-O*I,Gt=L-J*I,Zt=U-O*W,j=q-J*W,st=Zt*Gt-j*zt,St=et*j-ft*Zt,Ht=zt*ft-Gt*et;if(i){if(st<0||St<0||Ht<0)return null}else if((st<0||St<0||Ht<0)&&(st>0||St>0||Ht>0))return null;const bt=st+St+Ht;if(bt===0)return null;const Xt=V*(st*k+St*I+Ht*W);return(bt>0?Xt<0:Xt>0)?null:this.at(Xt/bt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Yn extends hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ql=new ye,vi=new ef,or=new Ka,jl=new H,ar=new H,lr=new H,cr=new H,bo=new H,hr=new H,tc=new H,ur=new H;class pe extends Pe{constructor(t=new en,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){hr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(bo.fromBufferAttribute(d,t),o?hr.addScaledVector(bo,u):hr.addScaledVector(bo.sub(e),u))}e.add(hr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(or.containsPoint(vi.origin)===!1&&(vi.intersectSphere(or,jl)===null||vi.origin.distanceToSquared(jl)>(t.far-t.near)**2))&&(Ql.copy(s).invert(),vi.copy(t.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,b=T;x<b;x+=3){const M=a.getX(x),C=a.getX(x+1),S=a.getX(x+2);i=dr(this,g,t,n,c,u,d,M,C,S),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const _=a.getX(m),T=a.getX(m+1),x=a.getX(m+2);i=dr(this,o,t,n,c,u,d,_,T,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,b=T;x<b;x+=3){const M=x,C=x+1,S=x+2;i=dr(this,g,t,n,c,u,d,M,C,S),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const _=m,T=m+1,x=m+2;i=dr(this,o,t,n,c,u,d,_,T,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function nf(r,t,e,n,i,s,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ti,a),l===null)return null;ur.copy(a),ur.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:r}}function dr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ar),r.getVertexPosition(l,lr),r.getVertexPosition(c,cr);const u=nf(r,t,e,n,ar,lr,cr,tc);if(u){const d=new H;an.getBarycoord(tc,ar,lr,cr,d),i&&(u.uv=an.getInterpolatedAttribute(i,a,l,c,d,new gt)),s&&(u.uv1=an.getInterpolatedAttribute(s,a,l,c,d,new gt)),o&&(u.normal=an.getInterpolatedAttribute(o,a,l,c,d,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};an.getNormal(ar,lr,cr,h.normal),u.face=h,u.barycoord=d}return u}class sf extends Oe{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Fe,u=Fe,d,h){super(null,o,a,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _i=new Ka,rf=new gt(.5,.5),fr=new H;class Ja{constructor(t=new ci,e=new ci,n=new ci,i=new ci,s=new ci,o=new ci){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],p=s[8],v=s[9],m=s[10],g=s[11],_=s[12],T=s[13],x=s[14],b=s[15];if(i[0].setComponents(c-o,f-u,g-p,b-_).normalize(),i[1].setComponents(c+o,f+u,g+p,b+_).normalize(),i[2].setComponents(c+a,f+d,g+v,b+T).normalize(),i[3].setComponents(c-a,f-d,g-v,b-T).normalize(),n)i[4].setComponents(l,h,m,x).normalize(),i[5].setComponents(c-l,f-h,g-m,b-x).normalize();else if(i[4].setComponents(c-l,f-h,g-m,b-x).normalize(),e===Pn)i[5].setComponents(c+l,f+h,g+m,b+x).normalize();else if(e===Fs)i[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);const e=rf.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fr.x=i.normal.x>0?t.max.x:t.min.x,fr.y=i.normal.y>0?t.max.y:t.min.y,fr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Oh extends Oe{constructor(t=[],e=Ai,n,i,s,o,a,l,c,u){super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bh extends Oe{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bs extends Oe{constructor(t,e,n=In,i,s,o,a=Fe,l=Fe,c,u=jn,d=1){if(u!==jn&&u!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Za(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class of extends Bs{constructor(t,e=In,n=Ai,i,s,o=Fe,a=Fe,l,c=jn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zh extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Cn extends en{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(d,2));function p(v,m,g,_,T,x,b,M,C,S,A){const P=x/C,D=b/S,k=x/2,N=b/2,L=M/2,I=C+1,U=S+1;let q=0,W=0;const O=new H;for(let J=0;J<U;J++){const V=J*D-N;for(let et=0;et<I;et++){const ft=et*P-k;O[v]=ft*_,O[m]=V*T,O[g]=L,c.push(O.x,O.y,O.z),O[v]=0,O[m]=0,O[g]=M>0?1:-1,u.push(O.x,O.y,O.z),d.push(et/C),d.push(1-J/S),q+=1}}for(let J=0;J<S;J++)for(let V=0;V<C;V++){const et=h+V+I*J,ft=h+V+I*(J+1),zt=h+(V+1)+I*(J+1),Gt=h+(V+1)+I*J;l.push(et,ft,Gt),l.push(ft,zt,Gt),W+=6}a.addGroup(f,W,A),f+=W,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new gt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new H,i=[],s=[],o=[],a=new H,l=new ye;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ee(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(ee(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qa extends Fn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class af extends Qa{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ja(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const ec=new H,nc=new H,wo=new ja,To=new ja,Ao=new ja;class lf extends Fn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new H){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(nc.subVectors(i[0],i[1]).add(i[0]),c=nc);const d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(ec.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ec),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),wo.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,v,m),To.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,v,m),Ao.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,v,m)}else this.curveType==="catmullrom"&&(wo.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),To.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Ao.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(wo.calc(l),To.calc(l),Ao.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new H().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ic(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function cf(r,t){const e=1-r;return e*e*t}function hf(r,t){return 2*(1-r)*r*t}function uf(r,t){return r*r*t}function Ps(r,t,e,n){return cf(r,t)+hf(r,e)+uf(r,n)}function df(r,t){const e=1-r;return e*e*e*t}function ff(r,t){const e=1-r;return 3*e*e*r*t}function pf(r,t){return 3*(1-r)*r*r*t}function mf(r,t){return r*r*r*t}function Ls(r,t,e,n,i){return df(r,t)+ff(r,e)+pf(r,n)+mf(r,i)}class kh extends Fn{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ls(t,i.x,s.x,o.x,a.x),Ls(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gf extends Fn{constructor(t=new H,e=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new H){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ls(t,i.x,s.x,o.x,a.x),Ls(t,i.y,s.y,o.y,a.y),Ls(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gh extends Fn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends Fn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends Fn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ps(t,i.x,s.x,o.x),Ps(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _f extends Fn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ps(t,i.x,s.x,o.x),Ps(t,i.y,s.y,o.y),Ps(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(ic(a,l.x,c.x,u.x,d.x),ic(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new gt().fromArray(i))}return this}}var Na=Object.freeze({__proto__:null,ArcCurve:af,CatmullRomCurve3:lf,CubicBezierCurve:kh,CubicBezierCurve3:gf,EllipseCurve:Qa,LineCurve:Gh,LineCurve3:vf,QuadraticBezierCurve:Vh,QuadraticBezierCurve3:_f,SplineCurve:Hh});class xf extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Na[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Na[i.type]().fromJSON(i))}return this}}class sc extends xf{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Gh(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Vh(this.currentPoint.clone(),new gt(t,e),new gt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new kh(this.currentPoint.clone(),new gt(t,e),new gt(n,i),new gt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Qa(t,e,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let Wh=class extends sc{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new sc().fromJSON(i))}return this}};function Sf(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Xh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=wf(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let u=a,d=l;for(let h=e;h<i;h+=e){const f=r[h],p=r[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return zs(s,o,e,a,l,c,0),o}function Xh(r,t,e,n,i){let s;if(i===Ff(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=rc(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=rc(o/n|0,r[o],r[o+1],s);return s&&ls(s,s.next)&&(Gs(s),s=s.next),s}function Ri(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Gs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zs(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Pf(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Mf(r,n,i,s):yf(r)){t.push(l.i,r.i,c.i),Gs(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Ef(Ri(r),t),zs(r,t,e,n,i,s,2)):o===2&&bf(r,t,e,n,i,s):zs(Ri(r),t,e,n,i,s,1);break}}}function yf(r){const t=r.prev,e=r,n=r.next;if(Ee(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(i,s,o),d=Math.min(a,l,c),h=Math.max(i,s,o),f=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&As(i,a,s,l,o,c,p.x,p.y)&&Ee(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Mf(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Ee(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,d=s.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),v=Math.max(a,l,c),m=Math.max(u,d,h),g=Ia(f,p,t,e,n),_=Ia(v,m,t,e,n);let T=r.prevZ,x=r.nextZ;for(;T&&T.z>=g&&x&&x.z<=_;){if(T.x>=f&&T.x<=v&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&As(a,u,l,d,c,h,T.x,T.y)&&Ee(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&As(a,u,l,d,c,h,x.x,x.y)&&Ee(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=g;){if(T.x>=f&&T.x<=v&&T.y>=p&&T.y<=m&&T!==i&&T!==o&&As(a,u,l,d,c,h,T.x,T.y)&&Ee(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&As(a,u,l,d,c,h,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ef(r,t){let e=r;do{const n=e.prev,i=e.next.next;!ls(n,i)&&Yh(n,e,e.next,i)&&ks(n,i)&&ks(i,n)&&(t.push(n.i,e.i,i.i),Gs(e),Gs(e.next),e=r=i),e=e.next}while(e!==r);return Ri(e)}function bf(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&If(o,a)){let l=Zh(o,a);o=Ri(o,o.next),l=Ri(l,l.next),zs(o,t,e,n,i,s,0),zs(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function wf(r,t,e,n){const i=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Xh(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Nf(c))}i.sort(Tf);for(let s=0;s<i.length;s++)e=Af(i[s],e);return e}function Tf(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Af(r,t){const e=Cf(r,t);if(!e)return t;const n=Zh(e,r);return Ri(n,n.next),Ri(e,e.next)}function Cf(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;if(ls(r,e))return e;do{if(ls(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&qh(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);ks(e,r)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Rf(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Rf(r,t){return Ee(r.prev,r,t.prev)<0&&Ee(t.next,r,r.next)<0}function Pf(r,t,e,n){let i=r;do i.z===0&&(i.z=Ia(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Lf(i)}function Lf(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function Ia(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Nf(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function qh(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function As(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&qh(r,t,e,n,i,s,o,a)}function If(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Df(r,t)&&(ks(r,t)&&ks(t,r)&&Uf(r,t)&&(Ee(r.prev,r,t.prev)||Ee(r,t.prev,t))||ls(r,t)&&Ee(r.prev,r,r.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ls(r,t){return r.x===t.x&&r.y===t.y}function Yh(r,t,e,n){const i=mr(Ee(r,t,e)),s=mr(Ee(r,t,n)),o=mr(Ee(e,n,r)),a=mr(Ee(e,n,t));return!!(i!==s&&o!==a||i===0&&pr(r,e,t)||s===0&&pr(r,n,t)||o===0&&pr(e,r,n)||a===0&&pr(e,t,n))}function pr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function mr(r){return r>0?1:r<0?-1:0}function Df(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Yh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ks(r,t){return Ee(r.prev,r,r.next)<0?Ee(r,t,r.next)>=0&&Ee(r,r.prev,t)>=0:Ee(r,t,r.prev)<0||Ee(r,r.next,t)<0}function Uf(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Zh(r,t){const e=Da(r.i,r.x,r.y),n=Da(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function rc(r,t,e,n){const i=Da(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Da(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ff(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Of{static triangulate(t,e,n=2){return Sf(t,e,n)}}class ns{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return ns.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];oc(t),ac(n,t);let o=t.length;e.forEach(oc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,ac(n,e[l]);const a=Of.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function oc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function ac(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class tl extends en{constructor(t=new Wh([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Be(i,3)),this.setAttribute("uv",new Be(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Bf;let T,x=!1,b,M,C,S;if(g){T=g.getSpacedPoints(u),x=!0,h=!1;const rt=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(u,rt),M=new H,C=new H,S=new H}h||(m=0,f=0,p=0,v=0);const A=a.extractPoints(c);let P=A.shape;const D=A.holes;if(!ns.isClockWise(P)){P=P.reverse();for(let rt=0,at=D.length;rt<at;rt++){const ut=D[rt];ns.isClockWise(ut)&&(D[rt]=ut.reverse())}}function N(rt){const ut=10000000000000001e-36;let lt=rt[0];for(let vt=1;vt<=rt.length;vt++){const Wt=vt%rt.length,kt=rt[Wt],Vt=kt.x-lt.x,qt=kt.y-lt.y,F=Vt*Vt+qt*qt,ae=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(lt.x),Math.abs(lt.y)),te=ut*ae*ae;if(F<=te){rt.splice(Wt,1),vt--;continue}lt=kt}}N(P),D.forEach(N);const L=D.length,I=P;for(let rt=0;rt<L;rt++){const at=D[rt];P=P.concat(at)}function U(rt,at,ut){return at||re("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(at,ut)}const q=P.length;function W(rt,at,ut){let lt,vt,Wt;const kt=rt.x-at.x,Vt=rt.y-at.y,qt=ut.x-rt.x,F=ut.y-rt.y,ae=kt*kt+Vt*Vt,te=kt*F-Vt*qt;if(Math.abs(te)>Number.EPSILON){const R=Math.sqrt(ae),y=Math.sqrt(qt*qt+F*F),X=at.x-Vt/R,$=at.y+kt/R,tt=ut.x-F/y,ct=ut.y+qt/y,xt=((tt-X)*F-(ct-$)*qt)/(kt*F-Vt*qt);lt=X+kt*xt-rt.x,vt=$+Vt*xt-rt.y;const nt=lt*lt+vt*vt;if(nt<=2)return new gt(lt,vt);Wt=Math.sqrt(nt/2)}else{let R=!1;kt>Number.EPSILON?qt>Number.EPSILON&&(R=!0):kt<-Number.EPSILON?qt<-Number.EPSILON&&(R=!0):Math.sign(Vt)===Math.sign(F)&&(R=!0),R?(lt=-Vt,vt=kt,Wt=Math.sqrt(ae)):(lt=kt,vt=Vt,Wt=Math.sqrt(ae/2))}return new gt(lt/Wt,vt/Wt)}const O=[];for(let rt=0,at=I.length,ut=at-1,lt=rt+1;rt<at;rt++,ut++,lt++)ut===at&&(ut=0),lt===at&&(lt=0),O[rt]=W(I[rt],I[ut],I[lt]);const J=[];let V,et=O.concat();for(let rt=0,at=L;rt<at;rt++){const ut=D[rt];V=[];for(let lt=0,vt=ut.length,Wt=vt-1,kt=lt+1;lt<vt;lt++,Wt++,kt++)Wt===vt&&(Wt=0),kt===vt&&(kt=0),V[lt]=W(ut[lt],ut[Wt],ut[kt]);J.push(V),et=et.concat(V)}let ft;if(m===0)ft=ns.triangulateShape(I,D);else{const rt=[],at=[];for(let ut=0;ut<m;ut++){const lt=ut/m,vt=f*Math.cos(lt*Math.PI/2),Wt=p*Math.sin(lt*Math.PI/2)+v;for(let kt=0,Vt=I.length;kt<Vt;kt++){const qt=U(I[kt],O[kt],Wt);St(qt.x,qt.y,-vt),lt===0&&rt.push(qt)}for(let kt=0,Vt=L;kt<Vt;kt++){const qt=D[kt];V=J[kt];const F=[];for(let ae=0,te=qt.length;ae<te;ae++){const R=U(qt[ae],V[ae],Wt);St(R.x,R.y,-vt),lt===0&&F.push(R)}lt===0&&at.push(F)}}ft=ns.triangulateShape(rt,at)}const zt=ft.length,Gt=p+v;for(let rt=0;rt<q;rt++){const at=h?U(P[rt],et[rt],Gt):P[rt];x?(C.copy(b.normals[0]).multiplyScalar(at.x),M.copy(b.binormals[0]).multiplyScalar(at.y),S.copy(T[0]).add(C).add(M),St(S.x,S.y,S.z)):St(at.x,at.y,0)}for(let rt=1;rt<=u;rt++)for(let at=0;at<q;at++){const ut=h?U(P[at],et[at],Gt):P[at];x?(C.copy(b.normals[rt]).multiplyScalar(ut.x),M.copy(b.binormals[rt]).multiplyScalar(ut.y),S.copy(T[rt]).add(C).add(M),St(S.x,S.y,S.z)):St(ut.x,ut.y,d/u*rt)}for(let rt=m-1;rt>=0;rt--){const at=rt/m,ut=f*Math.cos(at*Math.PI/2),lt=p*Math.sin(at*Math.PI/2)+v;for(let vt=0,Wt=I.length;vt<Wt;vt++){const kt=U(I[vt],O[vt],lt);St(kt.x,kt.y,d+ut)}for(let vt=0,Wt=D.length;vt<Wt;vt++){const kt=D[vt];V=J[vt];for(let Vt=0,qt=kt.length;Vt<qt;Vt++){const F=U(kt[Vt],V[Vt],lt);x?St(F.x,F.y+T[u-1].y,T[u-1].x+ut):St(F.x,F.y,d+ut)}}}Zt(),j();function Zt(){const rt=i.length/3;if(h){let at=0,ut=q*at;for(let lt=0;lt<zt;lt++){const vt=ft[lt];Ht(vt[2]+ut,vt[1]+ut,vt[0]+ut)}at=u+m*2,ut=q*at;for(let lt=0;lt<zt;lt++){const vt=ft[lt];Ht(vt[0]+ut,vt[1]+ut,vt[2]+ut)}}else{for(let at=0;at<zt;at++){const ut=ft[at];Ht(ut[2],ut[1],ut[0])}for(let at=0;at<zt;at++){const ut=ft[at];Ht(ut[0]+q*u,ut[1]+q*u,ut[2]+q*u)}}n.addGroup(rt,i.length/3-rt,0)}function j(){const rt=i.length/3;let at=0;st(I,at),at+=I.length;for(let ut=0,lt=D.length;ut<lt;ut++){const vt=D[ut];st(vt,at),at+=vt.length}n.addGroup(rt,i.length/3-rt,1)}function st(rt,at){let ut=rt.length;for(;--ut>=0;){const lt=ut;let vt=ut-1;vt<0&&(vt=rt.length-1);for(let Wt=0,kt=u+m*2;Wt<kt;Wt++){const Vt=q*Wt,qt=q*(Wt+1),F=at+lt+Vt,ae=at+vt+Vt,te=at+vt+qt,R=at+lt+qt;bt(F,ae,te,R)}}}function St(rt,at,ut){l.push(rt),l.push(at),l.push(ut)}function Ht(rt,at,ut){Xt(rt),Xt(at),Xt(ut);const lt=i.length/3,vt=_.generateTopUV(n,i,lt-3,lt-2,lt-1);Kt(vt[0]),Kt(vt[1]),Kt(vt[2])}function bt(rt,at,ut,lt){Xt(rt),Xt(at),Xt(lt),Xt(at),Xt(ut),Xt(lt);const vt=i.length/3,Wt=_.generateSideWallUV(n,i,vt-6,vt-3,vt-2,vt-1);Kt(Wt[0]),Kt(Wt[1]),Kt(Wt[3]),Kt(Wt[1]),Kt(Wt[2]),Kt(Wt[3])}function Xt(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function Kt(rt){s.push(rt.x),s.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return zf(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Na[i.type]().fromJSON(i)),new tl(n,t.options)}}const Bf={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new gt(s,o),new gt(a,l),new gt(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[i*3],f=t[i*3+1],p=t[i*3+2],v=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new gt(o,1-l),new gt(c,1-d),new gt(h,1-p),new gt(v,1-g)]:[new gt(a,1-l),new gt(u,1-d),new gt(f,1-p),new gt(m,1-g)]}};function zf(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class el extends en{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ee(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/e,d=new H,h=new gt,f=new H,p=new H,v=new H;let m=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=e;_++){const T=n+_*u*i,x=Math.sin(T),b=Math.cos(T);for(let M=0;M<=t.length-1;M++){d.x=t[M].x*x,d.y=t[M].y,d.z=t[M].x*b,o.push(d.x,d.y,d.z),h.x=_/e,h.y=M/(t.length-1),a.push(h.x,h.y);const C=l[3*M+0]*x,S=l[3*M+1],A=l[3*M+0]*b;c.push(C,S,A)}}for(let _=0;_<e;_++)for(let T=0;T<t.length-1;T++){const x=T+_*t.length,b=x,M=x+t.length,C=x+t.length+1,S=x+1;s.push(b,M,S),s.push(C,S,M)}this.setIndex(s),this.setAttribute("position",new Be(o,3)),this.setAttribute("uv",new Be(a,2)),this.setAttribute("normal",new Be(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.points,t.segments,t.phiStart,t.phiLength)}}class Qe extends en{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],p=[],v=[],m=[];for(let g=0;g<u;g++){const _=g*h-o;for(let T=0;T<c;T++){const x=T*d-s;p.push(x,-_,0),v.push(0,0,1),m.push(T/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const T=_+c*g,x=_+c*(g+1),b=_+1+c*(g+1),M=_+1+c*g;f.push(T,x,M),f.push(x,b,M)}this.setIndex(f),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.widthSegments,t.heightSegments)}}class nl extends en{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new H,h=new H,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const _=[],T=g/n,x=o+T*a,b=t*Math.cos(x),M=Math.sqrt(t*t-b*b);let C=0;g===0&&o===0?C=.5/e:g===n&&l===Math.PI&&(C=-.5/e);for(let S=0;S<=e;S++){const A=S/e,P=i+A*s;d.x=-M*Math.cos(P),d.y=b,d.z=M*Math.sin(P),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(A+C,1-T),_.push(c++)}u.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const T=u[g][_+1],x=u[g][_],b=u[g+1][_],M=u[g+1][_+1];(g!==0||o>0)&&f.push(T,x,M),(g!==n-1||l<Math.PI)&&f.push(x,b,M)}this.setIndex(f),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function cs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];if(lc(i))i.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(lc(i[0])){const s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Xe(r){const t={};for(let e=0;e<r.length;e++){const n=cs(r[e]);for(const i in n)t[i]=n[i]}return t}function lc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function kf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function $h(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Gf={clone:cs,merge:Xe};var Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new jt().setHex(i.value);break;case"v2":this.uniforms[n].value=new gt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Wf extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ts extends hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xi extends ts{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xf extends hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qf extends hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Co={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(cc(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!cc(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function cc(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Yf{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zf=new Yf;class il{constructor(t){this.manager=t!==void 0?t:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}il.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yi=new WeakMap;class $f extends il{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Co.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let d=Yi.get(o);d===void 0&&(d=[],Yi.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=Os("img");function l(){u(),e&&e(this);const d=Yi.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Yi.delete(this),s.manager.itemEnd(t)}function c(d){u(),i&&i(d),Co.remove(`image:${t}`);const h=Yi.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}Yi.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Co.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class Ro extends il{constructor(t){super(t)}load(t,e,n,i){const s=new Oe,o=new $f(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Xr extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Kf extends Xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Po=new ye,hc=new H,uc=new H;class sl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(hc),uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Po,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===Fs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const gr=new H,vr=new Jn,xn=new H;class Kh extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(gr,vr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,vr,xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(gr,vr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,vr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new H,dc=new gt,fc=new gt;class Ze extends Kh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,dc,fc),e.subVectors(fc,dc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(eo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Jf extends sl{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=zr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Qf extends Xr{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Jf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class jf extends sl{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0}}class _r extends Xr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class rl extends Kh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class tp extends sl{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ep extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new tp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Zi=-90,$i=1;class np extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ze(Zi,$i,t,e);i.layers=this.layers,this.add(i);const s=new Ze(Zi,$i,t,e);s.layers=this.layers,this.add(s);const o=new Ze(Zi,$i,t,e);o.layers=this.layers,this.add(o);const a=new Ze(Zi,$i,t,e);a.layers=this.layers,this.add(a);const l=new Ze(Zi,$i,t,e);l.layers=this.layers,this.add(l);const c=new Ze(Zi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ip extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const fl=class fl{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};fl.prototype.isMatrix2=!0;let pc=fl;function mc(r,t,e,n){const i=sp(n);switch(e){case wh:return r*t;case Ah:return r*t/i.components*i.byteLength;case Ha:return r*t/i.components*i.byteLength;case Ci:return r*t*2/i.components*i.byteLength;case Wa:return r*t*2/i.components*i.byteLength;case Th:return r*t*3/i.components*i.byteLength;case pn:return r*t*4/i.components*i.byteLength;case Xa:return r*t*4/i.components*i.byteLength;case Cr:case Rr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Lr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case na:case sa:return Math.max(r,16)*Math.max(t,8)/4;case ea:case ia:return Math.max(r,8)*Math.max(t,8)/2;case ra:case oa:case la:case ca:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case aa:case Dr:case ha:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case fa:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case pa:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ma:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ga:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case va:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xa:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ya:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ba:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case wa:case Ta:case Aa:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ca:case Ra:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ur:case Pa:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sp(r){switch(r){case je:case yh:return{byteLength:1,components:1};case Ds:case Mh:case Dn:return{byteLength:2,components:1};case Ga:case Va:return{byteLength:2,components:4};case In:case ka:case Rn:return{byteLength:4,components:1};case Eh:case bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jh(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function rp(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:op,alphahash_pars_fragment:ap,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:dp,aomap_pars_fragment:fp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:vp,bsdfs:_p,iridescence_fragment:xp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:bp,color_fragment:wp,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:Cp,common:Rp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Np,displacementmap_vertex:Ip,emissivemap_fragment:Dp,emissivemap_pars_fragment:Up,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:kp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:Hp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Zp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Kp,lights_pars_begin:Jp,lights_toon_fragment:jp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:om,lights_fragment_end:am,lightprobes_pars_fragment:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:_m,morphinstance_vertex:xm,morphcolor_vertex:Sm,morphnormal_vertex:ym,morphtarget_pars_vertex:Mm,morphtarget_vertex:Em,normal_fragment_begin:bm,normal_fragment_maps:wm,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:Cm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Im,opaque_fragment:Dm,packing:Um,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:zm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:Zm,skinnormal_vertex:$m,specularmap_fragment:Km,specularmap_pars_fragment:Jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:jm,transmission_fragment:t0,transmission_pars_fragment:e0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:s0,worldpos_vertex:r0,background_vert:o0,background_frag:a0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:h0,cube_frag:u0,depth_vert:d0,depth_frag:f0,distance_vert:p0,distance_frag:m0,equirect_vert:g0,equirect_frag:v0,linedashed_vert:_0,linedashed_frag:x0,meshbasic_vert:S0,meshbasic_frag:y0,meshlambert_vert:M0,meshlambert_frag:E0,meshmatcap_vert:b0,meshmatcap_frag:w0,meshnormal_vert:T0,meshnormal_frag:A0,meshphong_vert:C0,meshphong_frag:R0,meshphysical_vert:P0,meshphysical_frag:L0,meshtoon_vert:N0,meshtoon_frag:I0,points_vert:D0,points_frag:U0,shadow_vert:F0,shadow_frag:O0,sprite_vert:B0,sprite_frag:z0},Mt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},wn={basic:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Xe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Xe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Xe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Xe([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Xe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Xe([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Xe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Xe([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Xe([Mt.common,Mt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Xe([Mt.lights,Mt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};wn.physical={uniforms:Xe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const xr={r:0,b:0,g:0},k0=new ye,Qh=new $t;Qh.set(-1,0,0,0,1,0,0,0,1);function G0(r,t,e,n,i,s){const o=new jt(0);let a=i===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){const x=_.backgroundBlurriness>0;T=t.get(T,x)}return T}function p(_){let T=!1;const x=f(_);x===null?m(o,a):x&&x.isColor&&(m(x,1),T=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(_,T){const x=f(T);x&&(x.isCubeTexture||x.mapping===Wr)?(c===void 0&&(c=new pe(new Cn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:cs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qh),c.material.toneMapped=se.getTransfer(x.colorSpace)!==de,(u!==x||d!==x.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new pe(new Qe(2,2),new Un({name:"BackgroundMaterial",uniforms:cs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=se.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,T){_.getRGB(xr,$h(r)),e.buffers.color.setClear(xr.r,xr.g,xr.b,T,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,T=1){o.set(_),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:v,dispose:g}}function V0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(D,k,N,L,I){let U=!1;const q=d(D,L,N,k);s!==q&&(s=q,c(s.object)),U=f(D,L,N,I),U&&p(D,L,N,I),I!==null&&t.update(I,r.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(D,k,N,L),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function d(D,k,N,L){const I=L.wireframe===!0;let U=n[k.id];U===void 0&&(U={},n[k.id]=U);const q=D.isInstancedMesh===!0?D.id:0;let W=U[q];W===void 0&&(W={},U[q]=W);let O=W[N.id];O===void 0&&(O={},W[N.id]=O);let J=O[I];return J===void 0&&(J=h(l()),O[I]=J),J}function h(D){const k=[],N=[],L=[];for(let I=0;I<e;I++)k[I]=0,N[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:N,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,k,N,L){const I=s.attributes,U=k.attributes;let q=0;const W=N.getAttributes();for(const O in W)if(W[O].location>=0){const V=I[O];let et=U[O];if(et===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(et=D.instanceColor)),V===void 0||V.attribute!==et||et&&V.data!==et.data)return!0;q++}return s.attributesNum!==q||s.index!==L}function p(D,k,N,L){const I={},U=k.attributes;let q=0;const W=N.getAttributes();for(const O in W)if(W[O].location>=0){let V=U[O];V===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));const et={};et.attribute=V,V&&V.data&&(et.data=V.data),I[O]=et,q++}s.attributes=I,s.attributesNum=q,s.index=L}function v(){const D=s.newAttributes;for(let k=0,N=D.length;k<N;k++)D[k]=0}function m(D){g(D,0)}function g(D,k){const N=s.newAttributes,L=s.enabledAttributes,I=s.attributeDivisors;N[D]=1,L[D]===0&&(r.enableVertexAttribArray(D),L[D]=1),I[D]!==k&&(r.vertexAttribDivisor(D,k),I[D]=k)}function _(){const D=s.newAttributes,k=s.enabledAttributes;for(let N=0,L=k.length;N<L;N++)k[N]!==D[N]&&(r.disableVertexAttribArray(N),k[N]=0)}function T(D,k,N,L,I,U,q){q===!0?r.vertexAttribIPointer(D,k,N,I,U):r.vertexAttribPointer(D,k,N,L,I,U)}function x(D,k,N,L){v();const I=L.attributes,U=N.getAttributes(),q=k.defaultAttributeValues;for(const W in U){const O=U[W];if(O.location>=0){let J=I[W];if(J===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const V=J.normalized,et=J.itemSize,ft=t.get(J);if(ft===void 0)continue;const zt=ft.buffer,Gt=ft.type,Zt=ft.bytesPerElement,j=Gt===r.INT||Gt===r.UNSIGNED_INT||J.gpuType===ka;if(J.isInterleavedBufferAttribute){const st=J.data,St=st.stride,Ht=J.offset;if(st.isInstancedInterleavedBuffer){for(let bt=0;bt<O.locationSize;bt++)g(O.location+bt,st.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let bt=0;bt<O.locationSize;bt++)m(O.location+bt);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let bt=0;bt<O.locationSize;bt++)T(O.location+bt,et/O.locationSize,Gt,V,St*Zt,(Ht+et/O.locationSize*bt)*Zt,j)}else{if(J.isInstancedBufferAttribute){for(let st=0;st<O.locationSize;st++)g(O.location+st,J.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let st=0;st<O.locationSize;st++)m(O.location+st);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let st=0;st<O.locationSize;st++)T(O.location+st,et/O.locationSize,Gt,V,et*Zt,et/O.locationSize*st*Zt,j)}}else if(q!==void 0){const V=q[W];if(V!==void 0)switch(V.length){case 2:r.vertexAttrib2fv(O.location,V);break;case 3:r.vertexAttrib3fv(O.location,V);break;case 4:r.vertexAttrib4fv(O.location,V);break;default:r.vertexAttrib1fv(O.location,V)}}}}_()}function b(){A();for(const D in n){const k=n[D];for(const N in k){const L=k[N];for(const I in L){const U=L[I];for(const q in U)u(U[q].object),delete U[q];delete L[I]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;const k=n[D.id];for(const N in k){const L=k[N];for(const I in L){const U=L[I];for(const q in U)u(U[q].object),delete U[q];delete L[I]}}delete n[D.id]}function C(D){for(const k in n){const N=n[k];for(const L in N){const I=N[L];if(I[D.id]===void 0)continue;const U=I[D.id];for(const q in U)u(U[q].object),delete U[q];delete I[D.id]}}}function S(D){for(const k in n){const N=n[k],L=D.isInstancedMesh===!0?D.id:0,I=N[L];if(I!==void 0){for(const U in I){const q=I[U];for(const W in q)u(q[W].object),delete q[W];delete I[U]}delete N[L],Object.keys(N).length===0&&delete n[k]}}}function A(){P(),o=!0,s!==i&&(s=i,c(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function H0(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function W0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==pn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const S=C===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==je&&C!==Rn&&!S&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Yt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),M=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:x,maxSamples:b,samples:M}}function X0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ci,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const _=s?0:n,T=_*4;let x=g.clippingState||null;l.value=x,x=u(p,h,T,f);for(let b=0;b!==T;++b)x[b]=e[b];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,p){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,x=f;T!==v;++T,x+=4)o.copy(d[T]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const is=4,q0=6,Y0=20,Z0=256,xs=new rl,gc=new jt;let Lo=null,No=0,Io=0,Do=!1;const $0=new H,Si=new H;class vc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=$0}=s;Lo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,No,Io),this._renderer.xr.enabled=Do,t.scissorTest=!1,Ki(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Dn,format:pn,colorSpace:Fr,depthBuffer:!1},i=_c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=K0(s)),this._blurMaterial=Q0(s,t,e),this._ggxMaterial=J0(s,t,e)}return i}_compileMaterial(t){const e=new pe(new en,t);this._renderer.compile(e,xs)}_sceneToCubeUV(t,e,n,i,s){const l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(gc),d.toneMapping=Ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new Cn,new Yn({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let g=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,g=!0):(m.color.copy(gc),g=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const b=this._cubeSize;Ki(i,x*b,T>2?b:0,b,b),d.setRenderTarget(i),g&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ai||t.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ki(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:p}=this,v=this._sizeLods[n],m=3*v*(n>p-is?n-p+is:0),g=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Ki(s,m,g,3*v,2*v),i.setRenderTarget(s),i.render(a,xs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Ki(t,m,g,3*v,2*v),i.setRenderTarget(t),i.render(a,xs)}_blur(t,e,n,i){const s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],d=3*u*(i>this._lodMax-is?i-this._lodMax+is:0),h=4*(this._cubeSize-u);Ki(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(l,xs)}}function K0(r){const t=[],e=[];let n=r;const i=r-is+1+q0;for(let s=0;s<i;s++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,p=new Float32Array(f*h*d),v=new Float32Array(f*h*d);for(let g=0;g<d;g++){const _=g%3*2/3-1,T=g>2?0:-1,x=[_,T,0,_+2/3,T,0,_+2/3,T+1,0,_,T,0,_+2/3,T+1,0,_,T+1,0];p.set(x,f*h*g);for(let b=0;b<h;b++){const M=u[b*2]*2-1,C=u[b*2+1]*2-1;g===0?Si.set(1,C,M):g===1?Si.set(-M,1,-C):g===2?Si.set(-M,C,1):g===3?Si.set(-1,C,-M):g===4?Si.set(-M,-1,C):Si.set(M,C,-1),Si.toArray(v,(g*h+b)*f)}}const m=new en;m.setAttribute("position",new Nn(p,f)),m.setAttribute("outputDirection",new Nn(v,f)),e.push(new pe(m,null)),n>is&&n--}return{lodMeshes:e,sizeLods:t}}function _c(r,t,e){const n=new gn(r,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function J0(r,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Q0(r,t,e){return new Un({name:"SphericalGaussianBlur",defines:{SAMPLES:Y0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function xc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Sc(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function qr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class jh extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Oh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Cn(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:$n});s.uniforms.tEquirect.value=e;const o=new pe(i,s),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Ve),new np(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}function j0(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Jr||f===Qr)if(t.has(h)){const p=t.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new jh(p.height);return v.fromEquirectangularTexture(r,h),t.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,p=f===Jr||f===Qr,v=f===Ai||f===as;if(p||v){let m=e.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new vc(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const _=h.image;return p&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new vc(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Jr?h.mapping=Ai:f===Qr&&(h.mapping=as),h}function l(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function tg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ss("WebGLRenderer: "+n+" extension not supported."),i}}}function eg(r,t,e,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const _=f.array;v=f.version;for(let T=0,x=_.length;T<x;T+=3){const b=_[T+0],M=_[T+1],C=_[T+2];h.push(b,M,M,C,C,b)}}else{const _=p.array;v=p.version;for(let T=0,x=_.length/3-1;T<x;T+=3){const b=T+0,M=T+1,C=T+2;h.push(b,M,M,C,C,b)}}const m=new(p.count>=65535?Dh:Ih)(h,1);m.version=v;const g=s.get(d);g&&t.remove(g),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function ng(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*o),e.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*o,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ig(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function sg(r,t,e){const n=new WeakMap,i=new Me;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let A=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let T=0;f===!0&&(T=1),p===!0&&(T=2),v===!0&&(T=3);let x=a.attributes.position.count*T,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const M=new Float32Array(x*b*4*d),C=new Ph(M,x,b,d);C.type=Rn,C.needsUpdate=!0;const S=T*4;for(let P=0;P<d;P++){const D=m[P],k=g[P],N=_[P],L=x*b*4*P;for(let I=0;I<D.count;I++){const U=I*S;f===!0&&(i.fromBufferAttribute(D,I),M[L+U+0]=i.x,M[L+U+1]=i.y,M[L+U+2]=i.z,M[L+U+3]=0),p===!0&&(i.fromBufferAttribute(k,I),M[L+U+4]=i.x,M[L+U+5]=i.y,M[L+U+6]=i.z,M[L+U+7]=0),v===!0&&(i.fromBufferAttribute(N,I),M[L+U+8]=i.x,M[L+U+9]=i.y,M[L+U+10]=i.z,M[L+U+11]=N.itemSize===4?i.w:1)}}h={count:d,texture:C,size:new gt(x,b)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function rg(r,t,e,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=t.get(c,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const og={[ph]:"LINEAR_TONE_MAPPING",[mh]:"REINHARD_TONE_MAPPING",[gh]:"CINEON_TONE_MAPPING",[za]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[vh]:"CUSTOM_TONE_MAPPING"};function ag(r,t,e,n,i,s){const o=new gn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new en;c.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Be([0,2,0,0,2,0],2));const u=new Wf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new pe(c,u),h=new rl(-1,1,1,-1,0,1);let f=null,p=null,v=!1,m,g=null,_=[],T=!1;this.setSize=function(x,b){o.setSize(x,b),a!==null&&a.setSize(x,b),l!==null&&l.setSize(x,b);for(let M=0;M<_.length;M++){const C=_[M];C.setSize&&C.setSize(x,b)}},this.setEffects=function(x){_=x,T=_.length>0&&_[0].isRenderPass===!0;const b=o.width,M=o.height;_.length>0&&a===null&&(a=new gn(b,M,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(b,M,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){const S=_[C];S.setSize&&S.setSize(b,M)}},this.begin=function(x,b){if(v||x.toneMapping===Ln&&_.length===0)return!1;if(g=b,b!==null){const M=b.width,C=b.height;(o.width!==M||o.height!==C)&&this.setSize(M,C)}return T===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=Ln,!0},this.hasRenderPass=function(){return T},this.end=function(x,b){x.toneMapping=m,v=!0;let M=o,C=a;for(let S=0;S<_.length;S++){const A=_[S];A.enabled!==!1&&(A.render(x,C,M,b),A.needsSwap!==!1&&(M=C,C=C===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,u.defines={},se.getTransfer(f)===de&&(u.defines.SRGB_TRANSFER="");const S=og[p];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(g),x.render(d,h),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const tu=new Oe,Ua=new Bs(1,1),eu=new Ph,nu=new Bd,iu=new Oh,yc=[],Mc=[],Ec=new Float32Array(16),bc=new Float32Array(9),wc=new Float32Array(4);function us(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=yc[i];if(s===void 0&&(s=new Float32Array(i),yc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ne(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Yr(r,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function lg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function cg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2fv(this.addr,t),Ie(e,t)}}function hg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;r.uniform3fv(this.addr,t),Ie(e,t)}}function ug(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4fv(this.addr,t),Ie(e,t)}}function dg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Ne(e,n))return;wc.set(n),r.uniformMatrix2fv(this.addr,!1,wc),Ie(e,n)}}function fg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Ne(e,n))return;bc.set(n),r.uniformMatrix3fv(this.addr,!1,bc),Ie(e,n)}}function pg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Ne(e,n))return;Ec.set(n),r.uniformMatrix4fv(this.addr,!1,Ec),Ie(e,n)}}function mg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function gg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2iv(this.addr,t),Ie(e,t)}}function vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3iv(this.addr,t),Ie(e,t)}}function _g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4iv(this.addr,t),Ie(e,t)}}function xg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Sg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2uiv(this.addr,t),Ie(e,t)}}function yg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3uiv(this.addr,t),Ie(e,t)}}function Mg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4uiv(this.addr,t),Ie(e,t)}}function Eg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ua.compareFunction=e.isReversedDepthBuffer()?Ya:qa,s=Ua):s=tu,e.setTexture2D(t||s,i)}function bg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nu,i)}function wg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||iu,i)}function Tg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||eu,i)}function Ag(r){switch(r){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return vg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return Sg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Cg(r,t){r.uniform1fv(this.addr,t)}function Rg(r,t){const e=us(t,this.size,2);r.uniform2fv(this.addr,e)}function Pg(r,t){const e=us(t,this.size,3);r.uniform3fv(this.addr,e)}function Lg(r,t){const e=us(t,this.size,4);r.uniform4fv(this.addr,e)}function Ng(r,t){const e=us(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Ig(r,t){const e=us(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Dg(r,t){const e=us(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ug(r,t){r.uniform1iv(this.addr,t)}function Fg(r,t){r.uniform2iv(this.addr,t)}function Og(r,t){r.uniform3iv(this.addr,t)}function Bg(r,t){r.uniform4iv(this.addr,t)}function zg(r,t){r.uniform1uiv(this.addr,t)}function kg(r,t){r.uniform2uiv(this.addr,t)}function Gg(r,t){r.uniform3uiv(this.addr,t)}function Vg(r,t){r.uniform4uiv(this.addr,t)}function Hg(r,t,e){const n=this.cache,i=t.length,s=Yr(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Ua:o=tu;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Wg(r,t,e){const n=this.cache,i=t.length,s=Yr(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||nu,s[o])}function Xg(r,t,e){const n=this.cache,i=t.length,s=Yr(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||iu,s[o])}function qg(r,t,e){const n=this.cache,i=t.length,s=Yr(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||eu,s[o])}function Yg(r){switch(r){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Lg;case 35674:return Ng;case 35675:return Ig;case 35676:return Dg;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}class Zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}}class $g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}}class Kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Tc(r,t){r.seq.push(t),r.map[t.id]=t}function Jg(r,t,e){const n=r.name,i=n.length;for(Uo.lastIndex=0;;){const s=Uo.exec(n),o=Uo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Tc(e,c===void 0?new Zg(a,r,t):new $g(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Kg(a),Tc(e,d)),e=d}}}class Nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Jg(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ac(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Qg=37297;let jg=0;function tv(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Cc=new $t;function ev(r){se._getMatrix(Cc,se.workingColorSpace,r);const t=`mat3( ${Cc.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(r)){case Or:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Rc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+tv(r.getShaderSource(t),a)}else return s}function nv(r,t){const e=ev(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const iv={[ph]:"Linear",[mh]:"Reinhard",[gh]:"Cineon",[za]:"ACESFilmic",[_h]:"AgX",[xh]:"Neutral",[vh]:"Custom"};function sv(r,t){const e=iv[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new H;function rv(){se.getLuminanceCoefficients(Sr);const r=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function av(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Cs(r){return r!==""}function Pc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(r){return r.replace(cv,uv)}const hv=new Map;function uv(r,t){let e=Qt[t];if(e===void 0){const n=hv.get(t);if(n!==void 0)e=Qt[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fa(e)}const dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(r){return r.replace(dv,fv)}function fv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ic(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const pv={[Ar]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function mv(r){return pv[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gv={[Ai]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE_UV"};function vv(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":gv[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const _v={[as]:"ENVMAP_MODE_REFRACTION"};function xv(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_v[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sv={[fh]:"ENVMAP_BLENDING_MULTIPLY",[gd]:"ENVMAP_BLENDING_MIX",[vd]:"ENVMAP_BLENDING_ADD"};function yv(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Sv[r.combine]||"ENVMAP_BLENDING_NONE"}function Mv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ev(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=mv(e),c=vv(e),u=xv(e),d=yv(e),h=Mv(e),f=ov(e),p=av(s),v=i.createProgram();let m,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Cs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Cs).join(`
`),g.length>0&&(g+=`
`)):(m=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),g=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?sv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,nv("linearToOutputTexel",e.outputColorSpace),rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),o=Fa(o),o=Pc(o,e),o=Lc(o,e),a=Fa(a),a=Pc(a,e),a=Lc(a,e),o=Nc(o),a=Nc(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=_+m+o,x=_+g+a,b=Ac(i,i.VERTEX_SHADER,T),M=Ac(i,i.FRAGMENT_SHADER,x);i.attachShader(v,b),i.attachShader(v,M),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(D){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(v)||"",N=i.getShaderInfoLog(b)||"",L=i.getShaderInfoLog(M)||"",I=k.trim(),U=N.trim(),q=L.trim();let W=!0,O=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,b,M);else{const J=Rc(i,b,"vertex"),V=Rc(i,M,"fragment");re("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+J+`
`+V)}else I!==""?Yt("WebGLProgram: Program Info Log:",I):(U===""||q==="")&&(O=!1);O&&(D.diagnostics={runnable:W,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:q,prefix:g}})}i.deleteShader(b),i.deleteShader(M),S=new Nr(i,v),A=lv(i,v)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(v,Qg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=M,this}let bv=0;class wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tv(t),e.set(t,n)),n}}class Tv{constructor(t){this.id=bv++,this.code=t,this.usedTimes=0}}function Av(r){return r===Ci||r===Dr||r===Ur}function Cv(r,t,e,n,i,s){const o=new Lh,a=new wv,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,A,P,D,k,N){const L=D.fog,I=k.geometry,U=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,q=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,W=t.get(S.envMap||U,q),O=W&&W.mapping===Wr?W.image.height:null,J=f[S.type];S.precision!==null&&(h=n.getMaxPrecision(S.precision),h!==S.precision&&Yt("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const V=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,et=V!==void 0?V.length:0;let ft=0;I.morphAttributes.position!==void 0&&(ft=1),I.morphAttributes.normal!==void 0&&(ft=2),I.morphAttributes.color!==void 0&&(ft=3);let zt,Gt,Zt,j;if(J){const ve=wn[J];zt=ve.vertexShader,Gt=ve.fragmentShader}else{zt=S.vertexShader,Gt=S.fragmentShader;const ve=a.getVertexShaderStage(S),he=a.getFragmentShaderStage(S);a.update(S,ve,he),Zt=ve.id,j=he.id}const st=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),Ht=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,Xt=!!S.map,Kt=!!S.matcap,rt=!!W,at=!!S.aoMap,ut=!!S.lightMap,lt=!!S.bumpMap&&S.wireframe===!1,vt=!!S.normalMap,Wt=!!S.displacementMap,kt=!!S.emissiveMap,Vt=!!S.metalnessMap,qt=!!S.roughnessMap,F=S.anisotropy>0,ae=S.clearcoat>0,te=S.dispersion>0,R=S.retroreflectivity>0,y=S.iridescence>0,X=S.sheen>0,$=S.transmission>0,tt=F&&!!S.anisotropyMap,ct=ae&&!!S.clearcoatMap,xt=ae&&!!S.clearcoatNormalMap,nt=ae&&!!S.clearcoatRoughnessMap,z=y&&!!S.iridescenceMap,K=y&&!!S.iridescenceThicknessMap,At=X&&!!S.sheenColorMap,pt=X&&!!S.sheenRoughnessMap,dt=!!S.specularMap,Lt=!!S.specularColorMap,Ft=!!S.specularIntensityMap,Ut=$&&!!S.transmissionMap,B=$&&!!S.thicknessMap,mt=!!S.gradientMap,it=!!S.alphaMap,_t=S.alphaTest>0,wt=!!S.alphaHash,ot=!!S.extensions;let Ot=Ln;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ot=r.toneMapping);const Nt={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:zt,fragmentShader:Gt,defines:S.defines,customVertexShaderID:Zt,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&k.instanceColor!==null,instancingMorph:Ht&&k.morphTexture!==null,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Xt,matcap:Kt,envMap:rt,envMapMode:rt&&W.mapping,envMapCubeUVHeight:O,aoMap:at,lightMap:ut,bumpMap:lt,normalMap:vt,displacementMap:Wt,emissiveMap:kt,normalMapObjectSpace:vt&&S.normalMapType===Sd,normalMapTangentSpace:vt&&S.normalMapType===La,packedNormalMap:vt&&S.normalMapType===La&&Av(S.normalMap.format),metalnessMap:Vt,roughnessMap:qt,anisotropy:F,anisotropyMap:tt,clearcoat:ae,clearcoatMap:ct,clearcoatNormalMap:xt,clearcoatRoughnessMap:nt,dispersion:te,retroreflection:R,iridescence:y,iridescenceMap:z,iridescenceThicknessMap:K,sheen:X,sheenColorMap:At,sheenRoughnessMap:pt,specularMap:dt,specularColorMap:Lt,specularIntensityMap:Ft,transmission:$,transmissionMap:Ut,thicknessMap:B,gradientMap:mt,opaque:S.transparent===!1&&S.blending===Rs&&S.alphaToCoverage===!1,alphaMap:it,alphaTest:_t,alphaHash:wt,combine:S.combine,mapUv:Xt&&p(S.map.channel),aoMapUv:at&&p(S.aoMap.channel),lightMapUv:ut&&p(S.lightMap.channel),bumpMapUv:lt&&p(S.bumpMap.channel),normalMapUv:vt&&p(S.normalMap.channel),displacementMapUv:Wt&&p(S.displacementMap.channel),emissiveMapUv:kt&&p(S.emissiveMap.channel),metalnessMapUv:Vt&&p(S.metalnessMap.channel),roughnessMapUv:qt&&p(S.roughnessMap.channel),anisotropyMapUv:tt&&p(S.anisotropyMap.channel),clearcoatMapUv:ct&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:xt&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:K&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&p(S.sheenRoughnessMap.channel),specularMapUv:dt&&p(S.specularMap.channel),specularColorMapUv:Lt&&p(S.specularColorMap.channel),specularIntensityMapUv:Ft&&p(S.specularIntensityMap.channel),transmissionMapUv:Ut&&p(S.transmissionMap.channel),thicknessMapUv:B&&p(S.thicknessMap.channel),alphaMapUv:it&&p(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(vt||F),vertexNormals:!!I.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(Xt||it),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||I.attributes.normal===void 0&&vt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ft,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Xt&&S.map.isVideoTexture===!0&&se.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:kt&&S.emissiveMap.isVideoTexture===!0&&se.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Tn,flipSided:S.side===$e,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ot&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&S.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function m(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(A,S),_(A,S),A.push(r.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function g(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numSunLights),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numSunLightShadows),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function T(S){const A=f[S.type];let P;if(A){const D=wn[A];P=Gf.clone(D.uniforms)}else P=S.uniforms;return P}function x(S,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new Ev(r,A,S,i),c.push(P),u.set(A,P)),P}function b(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function M(S){a.remove(S)}function C(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:b,releaseShaderCache:M,programs:c,dispose:C}}function Rv(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Pv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Dc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Uc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,v,m,g){let _=r[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:g},r[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=o(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=m,_.group=g),t++,_}function l(h,f,p,v,m,g,_){_.reversedDepth===!0&&(m=-m);const T=a(h,f,p,v,m,g);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):e.push(T)}function c(h,f,p,v,m,g){const _=a(h,f,p,v,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):e.unshift(_)}function u(h,f){e.length>1&&e.sort(h||Pv),n.length>1&&n.sort(f||Dc),i.length>1&&i.sort(f||Dc)}function d(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function Lv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Uc,r.set(n,[o])):i>=s.length?(o=new Uc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Nv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new jt};break;case"SpotLight":e={position:new H,direction:new H,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=e,e}}}function Iv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Dv=0;function Uv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Fv(r){const t=new Nv,e=Iv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new ye,o=new ye;function a(c){let u=0,d=0,h=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,_=0,T=0,x=0,b=0,M=0,C=0,S=0,A=0,P=0;c.sort(Uv);for(let k=0,N=c.length;k<N;k++){const L=c[k],I=L.color,U=L.intensity,q=L.distance;let W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ci?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=I.r*U,d+=I.g*U,h+=I.b*U;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],U);P++}else if(L.isSunLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,V=e.get(L);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=V,n.sunShadowMap[p]=W;const et=J.getViewportCount();for(let ft=0;ft<et;ft++)n.sunShadowMatrix[v+ft]=J.getMatrix(ft),n.sunShadowCascade[v+ft]=J._cascadeData[ft];v+=et,p++}n.sun[f]=O,f++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,V=e.get(L);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=O,m++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(I).multiplyScalar(U),O.distance=q,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[_]=O;const J=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,J.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=W,C++}_++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(I).multiplyScalar(U),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=O,T++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const J=L.shadow,V=e.get(L);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=O,g++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(U),O.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[x]=O,x++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==T||D.hemiLength!==x||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==C||D.numSpotMaps!==S||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=T,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+S-A,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=T,D.hemiLength=x,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=C,D.numSpotMaps=S,D.numLightProbes=P,n.version=Dv++)}function l(c,u){let d=0,h=0,f=0,p=0,v=0,m=0;const g=u.matrixWorldInverse;for(let _=0,T=c.length;_<T;_++){const x=c[_];if(x.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(g),d++}else if(x.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),h++}else if(x.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Fc(r){const t=new Fv(r),e=[],n=[],i=[];function s(h){d.camera=h,e.length=0,n.length=0,i.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){i.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Ov(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Fc(r),t.set(i,[a])):s>=o.length?(a=new Fc(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kv=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Gv=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Oc=new ye,Ss=new H,Fo=new H;function Vv(r,t,e){let n=new Ja;const i=new gt,s=new gt,o=new Me,a=new Xf,l=new qf,c={},u=e.maxTextureSize,d={[Ti]:$e,[$e]:Ti,[Tn]:Tn},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Bv,fragmentShader:zv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new en;p.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pe(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let g=this.type;this.render=function(M,C,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===hh&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);const A=r.getRenderTarget(),P=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),k=r.state;k.setBlending($n),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=g!==this.type;N&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(I=>I.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,I=M.length;L<I;L++){const U=M[L],q=U.shadow;if(q===void 0){Yt("WebGLShadowMap:",U,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const W=q.getFrameExtents();i.multiply(W),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,q.mapSize.y=s.y));const O=r.state.buffers.depth.getReversed();if(q.camera._reversedDepth=O,q.map===null||N===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ts){if(U.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new gn(i.x,i.y,{format:Ci,type:Dn,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),q.map.texture.name=U.name+".shadowMap",q.map.depthTexture=new Bs(i.x,i.y,Rn),q.map.depthTexture.name=U.name+".shadowMapDepth",q.map.depthTexture.format=jn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Fe,q.map.depthTexture.magFilter=Fe}else U.isPointLight?(q.map=new jh(i.x),q.map.depthTexture=new of(i.x,In)):(q.map=new gn(i.x,i.y),q.map.depthTexture=new Bs(i.x,i.y,In)),q.map.depthTexture.name=U.name+".shadowMap",q.map.depthTexture.format=jn,this.type===Ar?(q.map.depthTexture.compareFunction=O?Ya:qa,q.map.depthTexture.minFilter=Ve,q.map.depthTexture.magFilter=Ve):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Fe,q.map.depthTexture.magFilter=Fe);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==i.x||q.map.height!==i.y)&&q.map.setSize(i.x,i.y);const J=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();U.isPointLight!==!0&&q.updateMatrices(U,S);for(let V=0;V<J;V++){const et=q.getCamera(V);if(U.isPointLight){const ft=q.camera,zt=q.matrix,Gt=U.distance||ft.far;Gt!==ft.far&&(ft.far=Gt,ft.updateProjectionMatrix()),Ss.setFromMatrixPosition(U.matrixWorld),ft.position.copy(Ss),Fo.copy(ft.position),Fo.add(kv[V]),ft.up.copy(Gv[V]),ft.lookAt(Fo),ft.updateMatrixWorld(),zt.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Oc.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Oc,ft.coordinateSystem,ft.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)r.setRenderTarget(q.map,V),r.clear();else{V===0&&(r.setRenderTarget(q.map),r.clear());const ft=q.getViewport(V);o.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),k.viewport(o)}n=q.getFrustum(V),x(C,S,et,U,this.type)}q.isPointLightShadow!==!0&&this.type===Ts&&_(q,S),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(A,P,D)};function _(M,C){const S=t.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new gn(i.x,i.y,{format:Ci,type:Dn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(C,null,S,h,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(C,null,S,f,v,null)}function T(M,C,S,A){let P=null;const D=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)P=D;else if(P=S.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=P.uuid,N=C.uuid;let L=c[k];L===void 0&&(L={},c[k]=L);let I=L[N];I===void 0&&(I=P.clone(),L[N]=I,C.addEventListener("dispose",b)),P=I}if(P.visible=C.visible,P.wireframe=C.wireframe,A===Ts?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const k=r.properties.get(P);k.light=S}return P}function x(M,C,S,A,P){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Ts)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const N=t.update(M),L=M.material;if(Array.isArray(L)){const I=N.groups;for(let U=0,q=I.length;U<q;U++){const W=I[U],O=L[W.materialIndex];if(O&&O.visible){const J=T(M,O,A,P);M.onBeforeShadow(r,M,C,S,N,J,W),r.renderBufferDirect(S,null,N,J,M,W),M.onAfterShadow(r,M,C,S,N,J,W)}}}else if(L.visible){const I=T(M,L,A,P);M.onBeforeShadow(r,M,C,S,N,I,null),r.renderBufferDirect(S,null,N,I,M,null),M.onAfterShadow(r,M,C,S,N,I,null)}}const k=M.children;for(let N=0,L=k.length;N<L;N++)x(k[N],C,S,A,P)}function b(M){M.target.removeEventListener("dispose",b);for(const S in c){const A=c[S],P=M.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function Hv(r,t){function e(){let B=!1;const mt=new Me;let it=null;const _t=new Me(0,0,0,0);return{setMask:function(wt){it!==wt&&!B&&(r.colorMask(wt,wt,wt,wt),it=wt)},setLocked:function(wt){B=wt},setClear:function(wt,ot,Ot,Nt,ve){ve===!0&&(wt*=Nt,ot*=Nt,Ot*=Nt),mt.set(wt,ot,Ot,Nt),_t.equals(mt)===!1&&(r.clearColor(wt,ot,Ot,Nt),_t.copy(mt))},reset:function(){B=!1,it=null,_t.set(-1,0,0,0)}}}function n(){let B=!1,mt=!1,it=null,_t=null,wt=null;return{setReversed:function(ot){if(mt!==ot){const Ot=t.get("EXT_clip_control");ot?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),mt=ot;const Nt=wt;wt=null,this.setClear(Nt)}},getReversed:function(){return mt},setTest:function(ot){ot?st(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(ot){it!==ot&&!B&&(r.depthMask(ot),it=ot)},setFunc:function(ot){if(mt&&(ot=Ld[ot]),_t!==ot){switch(ot){case qo:r.depthFunc(r.NEVER);break;case Yo:r.depthFunc(r.ALWAYS);break;case Zo:r.depthFunc(r.LESS);break;case Is:r.depthFunc(r.LEQUAL);break;case $o:r.depthFunc(r.EQUAL);break;case Ko:r.depthFunc(r.GEQUAL);break;case Jo:r.depthFunc(r.GREATER);break;case Qo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=ot}},setLocked:function(ot){B=ot},setClear:function(ot){wt!==ot&&(wt=ot,mt&&(ot=1-ot),r.clearDepth(ot))},reset:function(){B=!1,it=null,_t=null,wt=null,mt=!1}}}function i(){let B=!1,mt=null,it=null,_t=null,wt=null,ot=null,Ot=null,Nt=null,ve=null;return{setTest:function(he){B||(he?st(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(he){mt!==he&&!B&&(r.stencilMask(he),mt=he)},setFunc:function(he,ln,vn){(it!==he||_t!==ln||wt!==vn)&&(r.stencilFunc(he,ln,vn),it=he,_t=ln,wt=vn)},setOp:function(he,ln,vn){(ot!==he||Ot!==ln||Nt!==vn)&&(r.stencilOp(he,ln,vn),ot=he,Ot=ln,Nt=vn)},setLocked:function(he){B=he},setClear:function(he){ve!==he&&(r.clearStencil(he),ve=he)},reset:function(){B=!1,mt=null,it=null,_t=null,wt=null,ot=null,Ot=null,Nt=null,ve=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],v=null,m=!1,g=null,_=null,T=null,x=null,b=null,M=null,C=null,S=new jt(0,0,0),A=0,P=!1,D=null,k=null,N=null,L=null,I=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,W=0;const O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),q=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),q=W>=2);let J=null,V={};const et=r.getParameter(r.SCISSOR_BOX),ft=r.getParameter(r.VIEWPORT),zt=new Me().fromArray(et),Gt=new Me().fromArray(ft);function Zt(B,mt,it,_t){const wt=new Uint8Array(4),ot=r.createTexture();r.bindTexture(B,ot),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<it;Ot++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(mt,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(mt+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return ot}const j={};j[r.TEXTURE_2D]=Zt(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Zt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Zt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Zt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(Is),lt(!1),vt(Il),st(r.CULL_FACE),at($n);function st(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function St(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function Ht(B,mt){return h[B]!==mt?(r.bindFramebuffer(B,mt),h[B]=mt,B===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=mt),B===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=mt),!0):!1}function bt(B,mt){let it=p,_t=!1;if(B){it=f.get(mt),it===void 0&&(it=[],f.set(mt,it));const wt=B.textures;if(it.length!==wt.length||it[0]!==r.COLOR_ATTACHMENT0){for(let ot=0,Ot=wt.length;ot<Ot;ot++)it[ot]=r.COLOR_ATTACHMENT0+ot;it.length=wt.length,_t=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,_t=!0);_t&&r.drawBuffers(it)}function Xt(B){return v!==B?(r.useProgram(B),v=B,!0):!1}const Kt={[ji]:r.FUNC_ADD,[ju]:r.FUNC_SUBTRACT,[td]:r.FUNC_REVERSE_SUBTRACT};Kt[ed]=r.MIN,Kt[nd]=r.MAX;const rt={[id]:r.ZERO,[sd]:r.ONE,[rd]:r.SRC_COLOR,[uh]:r.SRC_ALPHA,[ud]:r.SRC_ALPHA_SATURATE,[cd]:r.DST_COLOR,[ad]:r.DST_ALPHA,[od]:r.ONE_MINUS_SRC_COLOR,[dh]:r.ONE_MINUS_SRC_ALPHA,[hd]:r.ONE_MINUS_DST_COLOR,[ld]:r.ONE_MINUS_DST_ALPHA,[dd]:r.CONSTANT_COLOR,[fd]:r.ONE_MINUS_CONSTANT_COLOR,[pd]:r.CONSTANT_ALPHA,[md]:r.ONE_MINUS_CONSTANT_ALPHA};function at(B,mt,it,_t,wt,ot,Ot,Nt,ve,he){if(B===$n){m===!0&&(St(r.BLEND),m=!1);return}if(m===!1&&(st(r.BLEND),m=!0),B!==Qu){if(B!==g||he!==P){if((_!==ji||b!==ji)&&(r.blendEquation(r.FUNC_ADD),_=ji,b=ji),he)switch(B){case Rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dl:r.blendFunc(r.ONE,r.ONE);break;case Ul:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:re("WebGLState: Invalid blending: ",B);break}else switch(B){case Rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ul:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",B);break}T=null,x=null,M=null,C=null,S.set(0,0,0),A=0,g=B,P=he}return}wt=wt||mt,ot=ot||it,Ot=Ot||_t,(mt!==_||wt!==b)&&(r.blendEquationSeparate(Kt[mt],Kt[wt]),_=mt,b=wt),(it!==T||_t!==x||ot!==M||Ot!==C)&&(r.blendFuncSeparate(rt[it],rt[_t],rt[ot],rt[Ot]),T=it,x=_t,M=ot,C=Ot),(Nt.equals(S)===!1||ve!==A)&&(r.blendColor(Nt.r,Nt.g,Nt.b,ve),S.copy(Nt),A=ve),g=B,P=!1}function ut(B,mt){B.side===Tn?St(r.CULL_FACE):st(r.CULL_FACE);let it=B.side===$e;mt&&(it=!it),lt(it),B.blending===Rs&&B.transparent===!1?at($n):at(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const _t=B.stencilWrite;a.setTest(_t),_t&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),kt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){D!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),D=B)}function vt(B){B!==Ku?(st(r.CULL_FACE),B!==k&&(B===Il?r.cullFace(r.BACK):B===Ju?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),k=B}function Wt(B){B!==N&&(q&&r.lineWidth(B),N=B)}function kt(B,mt,it){B?(st(r.POLYGON_OFFSET_FILL),(L!==mt||I!==it)&&(L=mt,I=it,o.getReversed()&&(mt=-mt),r.polygonOffset(mt,it))):St(r.POLYGON_OFFSET_FILL)}function Vt(B){B?st(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function qt(B){B===void 0&&(B=r.TEXTURE0+U-1),J!==B&&(r.activeTexture(B),J=B)}function F(B,mt,it){it===void 0&&(J===null?it=r.TEXTURE0+U-1:it=J);let _t=V[it];_t===void 0&&(_t={type:void 0,texture:void 0},V[it]=_t),(_t.type!==B||_t.texture!==mt)&&(J!==it&&(r.activeTexture(it),J=it),r.bindTexture(B,mt||j[B]),_t.type=B,_t.texture=mt)}function ae(){const B=V[J];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function te(){try{r.compressedTexImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function y(){try{r.texSubImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function X(){try{r.texSubImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function tt(){try{r.compressedTexSubImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function ct(){try{r.texStorage2D(...arguments)}catch(B){re("WebGLState:",B)}}function xt(){try{r.texStorage3D(...arguments)}catch(B){re("WebGLState:",B)}}function nt(){try{r.texImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function z(){try{r.texImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function K(B){return d[B]!==void 0?d[B]:r.getParameter(B)}function At(B,mt){d[B]!==mt&&(r.pixelStorei(B,mt),d[B]=mt)}function pt(B){zt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),zt.copy(B))}function dt(B){Gt.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Gt.copy(B))}function Lt(B,mt){let it=c.get(mt);it===void 0&&(it=new WeakMap,c.set(mt,it));let _t=it.get(B);_t===void 0&&(_t=r.getUniformBlockIndex(mt,B.name),it.set(B,_t))}function Ft(B,mt){const _t=c.get(mt).get(B);l.get(mt)!==_t&&(r.uniformBlockBinding(mt,_t,B.__bindingPointIndex),l.set(mt,_t))}function Ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},J=null,V={},h={},f=new WeakMap,p=[],v=null,m=!1,g=null,_=null,T=null,x=null,b=null,M=null,C=null,S=new jt(0,0,0),A=0,P=!1,D=null,k=null,N=null,L=null,I=null,zt.set(0,0,r.canvas.width,r.canvas.height),Gt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:St,bindFramebuffer:Ht,drawBuffers:bt,useProgram:Xt,setBlending:at,setMaterial:ut,setFlipSided:lt,setCullFace:vt,setLineWidth:Wt,setPolygonOffset:kt,setScissorTest:Vt,activeTexture:qt,bindTexture:F,unbindTexture:ae,compressedTexImage2D:te,compressedTexImage3D:R,texImage2D:nt,texImage3D:z,pixelStorei:At,getParameter:K,updateUBOMapping:Lt,uniformBlockBinding:Ft,texStorage2D:ct,texStorage3D:xt,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:$,compressedTexSubImage3D:tt,scissor:pt,viewport:dt,reset:Ut}}function Wv(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return p?new OffscreenCanvas(R,y):Os("canvas")}function m(R,y,X){let $=1;const tt=te(R);if((tt.width>X||tt.height>X)&&($=X/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ct=Math.floor($*tt.width),xt=Math.floor($*tt.height);h===void 0&&(h=v(ct,xt));const nt=y?v(ct,xt):h;return nt.width=ct,nt.height=xt,nt.getContext("2d").drawImage(R,0,0,ct,xt),Yt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ct+"x"+xt+")."),nt}else return"data"in R&&Yt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function g(R){return R.generateMipmaps}function _(R){r.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,y,X,$,tt,ct=!1){if(R!==null){if(r[R]!==void 0)return r[R];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xt;$&&(xt=t.get("EXT_texture_norm16"),xt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=y;if(y===r.RED&&(X===r.FLOAT&&(nt=r.R32F),X===r.HALF_FLOAT&&(nt=r.R16F),X===r.UNSIGNED_BYTE&&(nt=r.R8),X===r.UNSIGNED_SHORT&&xt&&(nt=xt.R16_EXT),X===r.SHORT&&xt&&(nt=xt.R16_SNORM_EXT)),y===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(nt=r.R8UI),X===r.UNSIGNED_SHORT&&(nt=r.R16UI),X===r.UNSIGNED_INT&&(nt=r.R32UI),X===r.BYTE&&(nt=r.R8I),X===r.SHORT&&(nt=r.R16I),X===r.INT&&(nt=r.R32I)),y===r.RG&&(X===r.FLOAT&&(nt=r.RG32F),X===r.HALF_FLOAT&&(nt=r.RG16F),X===r.UNSIGNED_BYTE&&(nt=r.RG8),X===r.UNSIGNED_SHORT&&xt&&(nt=xt.RG16_EXT),X===r.SHORT&&xt&&(nt=xt.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(nt=r.RG8UI),X===r.UNSIGNED_SHORT&&(nt=r.RG16UI),X===r.UNSIGNED_INT&&(nt=r.RG32UI),X===r.BYTE&&(nt=r.RG8I),X===r.SHORT&&(nt=r.RG16I),X===r.INT&&(nt=r.RG32I)),y===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(nt=r.RGB8UI),X===r.UNSIGNED_SHORT&&(nt=r.RGB16UI),X===r.UNSIGNED_INT&&(nt=r.RGB32UI),X===r.BYTE&&(nt=r.RGB8I),X===r.SHORT&&(nt=r.RGB16I),X===r.INT&&(nt=r.RGB32I)),y===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(nt=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(nt=r.RGBA16UI),X===r.UNSIGNED_INT&&(nt=r.RGBA32UI),X===r.BYTE&&(nt=r.RGBA8I),X===r.SHORT&&(nt=r.RGBA16I),X===r.INT&&(nt=r.RGBA32I)),y===r.RGB&&(X===r.UNSIGNED_SHORT&&xt&&(nt=xt.RGB16_EXT),X===r.SHORT&&xt&&(nt=xt.RGB16_SNORM_EXT),X===r.UNSIGNED_INT_5_9_9_9_REV&&(nt=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(nt=r.R11F_G11F_B10F)),y===r.RGBA){const z=ct?Or:se.getTransfer(tt);X===r.FLOAT&&(nt=r.RGBA32F),X===r.HALF_FLOAT&&(nt=r.RGBA16F),X===r.UNSIGNED_BYTE&&(nt=z===de?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT&&xt&&(nt=xt.RGBA16_EXT),X===r.SHORT&&xt&&(nt=xt.RGBA16_SNORM_EXT),X===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function b(R,y){let X;return R?y===null||y===In||y===Us?X=r.DEPTH24_STENCIL8:y===Rn?X=r.DEPTH32F_STENCIL8:y===Ds&&(X=r.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===In||y===Us?X=r.DEPTH_COMPONENT24:y===Rn?X=r.DEPTH_COMPONENT32F:y===Ds&&(X=r.DEPTH_COMPONENT16),X}function M(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fe&&R.minFilter!==Ve?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function S(R){const y=R.target;y.removeEventListener("dispose",S),D(y)}function A(R){const y=n.get(R);if(y.__webglInit===void 0)return;const X=R.source,$=f.get(X);if($){const tt=$[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&P(R),Object.keys($).length===0&&f.delete(X)}n.remove(R)}function P(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const X=R.source,$=f.get(X);delete $[y.__cacheKey],o.memory.textures--}function D(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let tt=0;tt<y.__webglFramebuffer[$].length;tt++)r.deleteFramebuffer(y.__webglFramebuffer[$][tt]);else r.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)r.deleteFramebuffer(y.__webglFramebuffer[$]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=R.textures;for(let $=0,tt=X.length;$<tt;$++){const ct=n.get(X[$]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(X[$])}n.remove(R)}let k=0;function N(){k=0}function L(){return k}function I(R){k=R}function U(){const R=k;return R>=i.maxTextures&&Yt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),k+=1,R}function q(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function W(R,y){const X=n.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){const $=R.image;if($===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(X,R,y);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+y)}function O(R,y){const X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){St(X,R,y);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+y)}function J(R,y){const X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){St(X,R,y);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+y)}function V(R,y){const X=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&X.__version!==R.version){Ht(X,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+y)}const et={[jo]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[ta]:r.MIRRORED_REPEAT},ft={[Fe]:r.NEAREST,[_d]:r.NEAREST_MIPMAP_NEAREST,[Ys]:r.NEAREST_MIPMAP_LINEAR,[Ve]:r.LINEAR,[jr]:r.LINEAR_MIPMAP_NEAREST,[Ei]:r.LINEAR_MIPMAP_LINEAR},zt={[Md]:r.NEVER,[Ad]:r.ALWAYS,[Ed]:r.LESS,[qa]:r.LEQUAL,[bd]:r.EQUAL,[Ya]:r.GEQUAL,[wd]:r.GREATER,[Td]:r.NOTEQUAL};function Gt(R,y){if(y.type===Rn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ve||y.magFilter===jr||y.magFilter===Ys||y.magFilter===Ei||y.minFilter===Ve||y.minFilter===jr||y.minFilter===Ys||y.minFilter===Ei)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,et[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,et[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,et[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ft[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ft[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,zt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Fe||y.minFilter!==Ys&&y.minFilter!==Ei||y.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Zt(R,y){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const $=y.source;let tt=f.get($);tt===void 0&&(tt={},f.set($,tt));const ct=q(y);if(ct!==R.__cacheKey){tt[ct]===void 0&&(tt[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),tt[ct].usedTimes++;const xt=tt[R.__cacheKey];xt!==void 0&&(tt[R.__cacheKey].usedTimes--,xt.usedTimes===0&&P(y)),R.__cacheKey=ct,R.__webglTexture=tt[ct].texture}return X}function j(R,y,X){return Math.floor(Math.floor(R/X)/y)}function st(R,y,X,$){const ct=R.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,X,$,y.data);else{ct.sort((At,pt)=>At.start-pt.start);let xt=0;for(let At=1;At<ct.length;At++){const pt=ct[xt],dt=ct[At],Lt=pt.start+pt.count,Ft=j(dt.start,y.width,4),Ut=j(pt.start,y.width,4);dt.start<=Lt+1&&Ft===Ut&&j(dt.start+dt.count-1,y.width,4)===Ft?pt.count=Math.max(pt.count,dt.start+dt.count-pt.start):(++xt,ct[xt]=dt)}ct.length=xt+1;const nt=e.getParameter(r.UNPACK_ROW_LENGTH),z=e.getParameter(r.UNPACK_SKIP_PIXELS),K=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let At=0,pt=ct.length;At<pt;At++){const dt=ct[At],Lt=Math.floor(dt.start/4),Ft=Math.ceil(dt.count/4),Ut=Lt%y.width,B=Math.floor(Lt/y.width),mt=Ft,it=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(r.UNPACK_SKIP_ROWS,B),e.texSubImage2D(r.TEXTURE_2D,0,Ut,B,mt,it,X,$,y.data)}R.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,nt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,z),e.pixelStorei(r.UNPACK_SKIP_ROWS,K)}}function St(R,y,X){let $=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=r.TEXTURE_3D);const tt=Zt(R,y),ct=y.source;e.bindTexture($,R.__webglTexture,r.TEXTURE0+X);const xt=n.get(ct);if(ct.version!==xt.__version||tt===!0){if(e.activeTexture(r.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const it=se.getPrimaries(se.workingColorSpace),_t=y.colorSpace===hi?null:se.getPrimaries(y.colorSpace),wt=y.colorSpace===hi||it===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let z=m(y.image,!1,i.maxTextureSize);z=ae(y,z);const K=s.convert(y.format,y.colorSpace),At=s.convert(y.type);let pt=x(y.internalFormat,K,At,y.normalized,y.colorSpace,y.isVideoTexture);Gt($,y);let dt;const Lt=y.mipmaps,Ft=y.isVideoTexture!==!0,Ut=xt.__version===void 0||tt===!0,B=ct.dataReady,mt=M(y,z);if(y.isDepthTexture)pt=b(y.format===bi,y.type),Ut&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,pt,z.width,z.height):e.texImage2D(r.TEXTURE_2D,0,pt,z.width,z.height,0,K,At,null));else if(y.isDataTexture)if(Lt.length>0){Ft&&Ut&&e.texStorage2D(r.TEXTURE_2D,mt,pt,Lt[0].width,Lt[0].height);for(let it=0,_t=Lt.length;it<_t;it++)dt=Lt[it],Ft?B&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,dt.width,dt.height,K,At,dt.data):e.texImage2D(r.TEXTURE_2D,it,pt,dt.width,dt.height,0,K,At,dt.data);y.generateMipmaps=!1}else Ft?(Ut&&e.texStorage2D(r.TEXTURE_2D,mt,pt,z.width,z.height),B&&st(y,z,K,At)):e.texImage2D(r.TEXTURE_2D,0,pt,z.width,z.height,0,K,At,z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&Ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,pt,Lt[0].width,Lt[0].height,z.depth);for(let it=0,_t=Lt.length;it<_t;it++)if(dt=Lt[it],y.format!==pn)if(K!==null)if(Ft){if(B)if(y.layerUpdates.size>0){const wt=mc(dt.width,dt.height,y.format,y.type);for(const ot of y.layerUpdates){const Ot=dt.data.subarray(ot*wt/dt.data.BYTES_PER_ELEMENT,(ot+1)*wt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,ot,dt.width,dt.height,1,K,Ot)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,dt.width,dt.height,z.depth,K,dt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,it,pt,dt.width,dt.height,z.depth,0,dt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?B&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,dt.width,dt.height,z.depth,K,At,dt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,it,pt,dt.width,dt.height,z.depth,0,K,At,dt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ft&&Ut&&e.texStorage2D(r.TEXTURE_2D,mt,pt,Lt[0].width,Lt[0].height);for(let it=0,_t=Lt.length;it<_t;it++)dt=Lt[it],y.format!==pn?K!==null?Ft?B&&e.compressedTexSubImage2D(r.TEXTURE_2D,it,0,0,dt.width,dt.height,K,dt.data):e.compressedTexImage2D(r.TEXTURE_2D,it,pt,dt.width,dt.height,0,dt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?B&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,dt.width,dt.height,K,At,dt.data):e.texImage2D(r.TEXTURE_2D,it,pt,dt.width,dt.height,0,K,At,dt.data)}else if(y.isDataArrayTexture)if(Ft){if(Ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,pt,z.width,z.height,z.depth),B)if(y.layerUpdates.size>0){const it=mc(z.width,z.height,y.format,y.type);for(const _t of y.layerUpdates){const wt=z.data.subarray(_t*it/z.data.BYTES_PER_ELEMENT,(_t+1)*it/z.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,z.width,z.height,1,K,At,wt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,K,At,z.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,pt,z.width,z.height,z.depth,0,K,At,z.data);else if(y.isData3DTexture)Ft?(Ut&&e.texStorage3D(r.TEXTURE_3D,mt,pt,z.width,z.height,z.depth),B&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,K,At,z.data)):e.texImage3D(r.TEXTURE_3D,0,pt,z.width,z.height,z.depth,0,K,At,z.data);else if(y.isFramebufferTexture){if(Ut)if(Ft)e.texStorage2D(r.TEXTURE_2D,mt,pt,z.width,z.height);else{let it=z.width,_t=z.height;for(let wt=0;wt<mt;wt++)e.texImage2D(r.TEXTURE_2D,wt,pt,it,_t,0,K,At,null),it>>=1,_t>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const it=r.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),z.parentNode!==it){it.appendChild(z),d.add(y),it.onpaint=_t=>{const wt=_t.changedElements;for(const ot of d)wt.includes(ot.image)&&(ot.needsUpdate=!0)},it.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,z);else{const wt=r.RGBA,ot=r.RGBA,Ot=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,wt,ot,Ot,z)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Ft&&Ut){const it=te(Lt[0]);e.texStorage2D(r.TEXTURE_2D,mt,pt,it.width,it.height)}for(let it=0,_t=Lt.length;it<_t;it++)dt=Lt[it],Ft?B&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,K,At,dt):e.texImage2D(r.TEXTURE_2D,it,pt,K,At,dt);y.generateMipmaps=!1}else if(Ft){if(Ut){const it=te(z);e.texStorage2D(r.TEXTURE_2D,mt,pt,it.width,it.height)}B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,K,At,z)}else e.texImage2D(r.TEXTURE_2D,0,pt,K,At,z);g(y)&&_($),xt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ht(R,y,X){if(y.image.length!==6)return;const $=Zt(R,y),tt=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+X);const ct=n.get(tt);if(tt.version!==ct.__version||$===!0){e.activeTexture(r.TEXTURE0+X);const xt=se.getPrimaries(se.workingColorSpace),nt=y.colorSpace===hi?null:se.getPrimaries(y.colorSpace),z=y.colorSpace===hi||xt===nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const K=y.isCompressedTexture||y.image[0].isCompressedTexture,At=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let ot=0;ot<6;ot++)!K&&!At?pt[ot]=m(y.image[ot],!0,i.maxCubemapSize):pt[ot]=At?y.image[ot].image:y.image[ot],pt[ot]=ae(y,pt[ot]);const dt=pt[0],Lt=s.convert(y.format,y.colorSpace),Ft=s.convert(y.type),Ut=x(y.internalFormat,Lt,Ft,y.normalized,y.colorSpace),B=y.isVideoTexture!==!0,mt=ct.__version===void 0||$===!0,it=tt.dataReady;let _t=M(y,dt);Gt(r.TEXTURE_CUBE_MAP,y);let wt;if(K){B&&mt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,Ut,dt.width,dt.height);for(let ot=0;ot<6;ot++){wt=pt[ot].mipmaps;for(let Ot=0;Ot<wt.length;Ot++){const Nt=wt[Ot];y.format!==pn?Lt!==null?B?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot,0,0,Nt.width,Nt.height,Lt,Nt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot,Ut,Nt.width,Nt.height,0,Nt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot,0,0,Nt.width,Nt.height,Lt,Ft,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot,Ut,Nt.width,Nt.height,0,Lt,Ft,Nt.data)}}}else{if(wt=y.mipmaps,B&&mt){wt.length>0&&_t++;const ot=te(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,Ut,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(At){B?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,pt[ot].width,pt[ot].height,Lt,Ft,pt[ot].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Ut,pt[ot].width,pt[ot].height,0,Lt,Ft,pt[ot].data);for(let Ot=0;Ot<wt.length;Ot++){const ve=wt[Ot].image[ot].image;B?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot+1,0,0,ve.width,ve.height,Lt,Ft,ve.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot+1,Ut,ve.width,ve.height,0,Lt,Ft,ve.data)}}else{B?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Lt,Ft,pt[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Ut,Lt,Ft,pt[ot]);for(let Ot=0;Ot<wt.length;Ot++){const Nt=wt[Ot];B?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot+1,0,0,Lt,Ft,Nt.image[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot+1,Ut,Lt,Ft,Nt.image[ot])}}}g(y)&&_(r.TEXTURE_CUBE_MAP),ct.__version=tt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function bt(R,y,X,$,tt,ct){const xt=s.convert(X.format,X.colorSpace),nt=s.convert(X.type),z=x(X.internalFormat,xt,nt,X.normalized,X.colorSpace),K=n.get(y),At=n.get(X);if(At.__renderTarget=y,!K.__hasExternalTextures){const pt=Math.max(1,y.width>>ct),dt=Math.max(1,y.height>>ct);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,ct,z,pt,dt,y.depth,0,xt,nt,null):e.texImage2D(tt,ct,z,pt,dt,0,xt,nt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),qt(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,tt,At.__webglTexture,0,Vt(y)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,tt,At.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(R,y,X){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){const $=y.depthTexture,tt=$&&$.isDepthTexture?$.type:null,ct=b(y.stencilBuffer,tt),xt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qt(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(y),ct,y.width,y.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(y),ct,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ct,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,R)}else{const $=y.textures;for(let tt=0;tt<$.length;tt++){const ct=$[tt],xt=s.convert(ct.format,ct.colorSpace),nt=s.convert(ct.type),z=x(ct.internalFormat,xt,nt,ct.normalized,ct.colorSpace);qt(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(y),z,y.width,y.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(y),z,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,z,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Kt(R,y,X){const $=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=n.get(y.depthTexture);if(tt.__renderTarget=y,(!tt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),tt.__webglTexture===void 0){tt.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),Gt(r.TEXTURE_CUBE_MAP,y.depthTexture);const K=s.convert(y.depthTexture.format),At=s.convert(y.depthTexture.type);let pt;y.depthTexture.format===jn?pt=r.DEPTH_COMPONENT24:y.depthTexture.format===bi&&(pt=r.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,pt,y.width,y.height,0,K,At,null)}}else W(y.depthTexture,0);const ct=tt.__webglTexture,xt=Vt(y),nt=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,z=y.depthTexture.format===bi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===jn)qt(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,z,nt,ct,0,xt):r.framebufferTexture2D(r.FRAMEBUFFER,z,nt,ct,0);else if(y.depthTexture.format===bi)qt(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,z,nt,ct,0,xt):r.framebufferTexture2D(r.FRAMEBUFFER,z,nt,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(R){const y=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=$}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let $=0;$<6;$++)Kt(y.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?Kt(y.__webglFramebuffer[0],R,0):Kt(y.__webglFramebuffer,R,0)}else if(X){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=r.createRenderbuffer(),Xt(y.__webglDepthbuffer[$],R,!1);else{const tt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,ct)}}else{const $=R.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Xt(y.__webglDepthbuffer,R,!1);else{const tt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,ct)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(R,y,X){const $=n.get(R);y!==void 0&&bt($.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&rt(R)}function ut(R){const y=R.texture,X=n.get(R),$=n.get(y);R.addEventListener("dispose",S);const tt=R.textures,ct=R.isWebGLCubeRenderTarget===!0,xt=tt.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=y.version,o.memory.textures++),ct){X.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[nt]=[];for(let z=0;z<y.mipmaps.length;z++)X.__webglFramebuffer[nt][z]=r.createFramebuffer()}else X.__webglFramebuffer[nt]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let nt=0;nt<y.mipmaps.length;nt++)X.__webglFramebuffer[nt]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(xt)for(let nt=0,z=tt.length;nt<z;nt++){const K=n.get(tt[nt]);K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&qt(R)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let nt=0;nt<tt.length;nt++){const z=tt[nt];X.__webglColorRenderbuffer[nt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[nt]);const K=s.convert(z.format,z.colorSpace),At=s.convert(z.type),pt=x(z.internalFormat,K,At,z.normalized,z.colorSpace,R.isXRRenderTarget===!0),dt=Vt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,pt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,X.__webglColorRenderbuffer[nt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Gt(r.TEXTURE_CUBE_MAP,y);for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0)for(let z=0;z<y.mipmaps.length;z++)bt(X.__webglFramebuffer[nt][z],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,z);else bt(X.__webglFramebuffer[nt],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);g(y)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let nt=0,z=tt.length;nt<z;nt++){const K=tt[nt],At=n.get(K);let pt=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,At.__webglTexture),Gt(pt,K),bt(X.__webglFramebuffer,R,K,r.COLOR_ATTACHMENT0+nt,pt,0),g(K)&&_(pt)}e.unbindTexture()}else{let nt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(nt,$.__webglTexture),Gt(nt,y),y.mipmaps&&y.mipmaps.length>0)for(let z=0;z<y.mipmaps.length;z++)bt(X.__webglFramebuffer[z],R,y,r.COLOR_ATTACHMENT0,nt,z);else bt(X.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,nt,0);g(y)&&_(nt),e.unbindTexture()}R.depthBuffer&&rt(R)}function lt(R){const y=R.textures;for(let X=0,$=y.length;X<$;X++){const tt=y[X];if(g(tt)){const ct=T(R),xt=n.get(tt).__webglTexture;e.bindTexture(ct,xt),_(ct),e.unbindTexture()}}}const vt=[],Wt=[];function kt(R){if(R.samples>0){if(qt(R)===!1){const y=R.textures,X=R.width,$=R.height;let tt=r.COLOR_BUFFER_BIT;const ct=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(R),nt=y.length>1;if(nt)for(let K=0;K<y.length;K++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const z=R.texture.mipmaps;z&&z.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let K=0;K<y.length;K++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),nt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[K]);const At=n.get(y[K]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,X,$,0,0,X,$,tt,r.NEAREST),l===!0&&(vt.length=0,Wt.length=0,vt.push(r.COLOR_ATTACHMENT0+K),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(vt.push(ct),Wt.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),nt)for(let K=0;K<y.length;K++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,xt.__webglColorRenderbuffer[K]);const At=n.get(y[K]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,At,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Vt(R){return Math.min(i.maxSamples,R.samples)}function qt(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function ae(R,y){const X=R.colorSpace,$=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Fr&&X!==hi&&(se.getTransfer(X)===de?($!==pn||tt!==je)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",X)),y}function te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=O,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=at,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Xv(r,t){function e(n,i=hi){let s;const o=se.getTransfer(i);if(n===je)return r.UNSIGNED_BYTE;if(n===Ga)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===yh)return r.BYTE;if(n===Mh)return r.SHORT;if(n===Ds)return r.UNSIGNED_SHORT;if(n===ka)return r.INT;if(n===In)return r.UNSIGNED_INT;if(n===Rn)return r.FLOAT;if(n===Dn)return r.HALF_FLOAT;if(n===wh)return r.ALPHA;if(n===Th)return r.RGB;if(n===pn)return r.RGBA;if(n===jn)return r.DEPTH_COMPONENT;if(n===bi)return r.DEPTH_STENCIL;if(n===Ah)return r.RED;if(n===Ha)return r.RED_INTEGER;if(n===Ci)return r.RG;if(n===Wa)return r.RG_INTEGER;if(n===Xa)return r.RGBA_INTEGER;if(n===Cr||n===Rr||n===Pr||n===Lr)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ea||n===na||n===ia||n===sa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ea)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===na)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ia)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===oa||n===aa||n===la||n===ca||n===Dr||n===ha)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ra||n===oa)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===aa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===la)return s.COMPRESSED_R11_EAC;if(n===ca)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Dr)return s.COMPRESSED_RG11_EAC;if(n===ha)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===_a||n===xa||n===Sa||n===ya||n===Ma||n===Ea||n===ba)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ua)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ea)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===Ta||n===Aa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===wa)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ca||n===Ra||n===Ur||n===Pa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ca)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ur)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new zh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:qv,fragmentShader:Yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends Pi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",m=new Zv,g={},_=e.getContextAttributes();let T=null,x=null;const b=[],M=[],C=new gt;let S=null,A=null;const P=new Ze;P.viewport=new Me;const D=new Ze;D.viewport=new Me;const k=[P,D],N=new ip;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=b[j];return st===void 0&&(st=new lo,b[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=b[j];return st===void 0&&(st=new lo,b[j]=st),st.getGripSpace()},this.getHand=function(j){let st=b[j];return st===void 0&&(st=new lo,b[j]=st),st.getHandSpace()};function U(j){const st=M.indexOf(j.inputSource);if(st===-1)return;const St=b[st];St!==void 0&&(St.update(j.inputSource,j.frame,c||o),St.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",W);for(let j=0;j<b.length;j++){const st=M[j];st!==null&&(M[j]=null,b[j].disconnect(st))}L=null,I=null,m.reset();for(const j in g)delete g[j];if(t.setRenderTarget(T),f=null,h=null,d=null,i=null,x=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(C.width,C.height,!1),A!==null){const j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",q),i.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ht=null,bt=null;_.depth&&(bt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=_.stencil?bi:jn,Ht=_.stencil?Us:In);const Xt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Xt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new gn(h.textureWidth,h.textureHeight,{format:pn,type:je,depthTexture:new Bs(h.textureWidth,h.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const St={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,St),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new gn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(j){for(let st=0;st<j.removed.length;st++){const St=j.removed[st],Ht=M.indexOf(St);Ht>=0&&(M[Ht]=null,b[Ht].disconnect(St))}for(let st=0;st<j.added.length;st++){const St=j.added[st];let Ht=M.indexOf(St);if(Ht===-1){for(let Xt=0;Xt<b.length;Xt++)if(Xt>=M.length){M.push(St),Ht=Xt;break}else if(M[Xt]===null){M[Xt]=St,Ht=Xt;break}if(Ht===-1)break}const bt=b[Ht];bt&&bt.connect(St)}}const O=new H,J=new H;function V(j,st,St){O.setFromMatrixPosition(st.matrixWorld),J.setFromMatrixPosition(St.matrixWorld);const Ht=O.distanceTo(J),bt=st.projectionMatrix.elements,Xt=St.projectionMatrix.elements,Kt=bt[14]/(bt[10]-1),rt=bt[14]/(bt[10]+1),at=(bt[9]+1)/bt[5],ut=(bt[9]-1)/bt[5],lt=(bt[8]-1)/bt[0],vt=(Xt[8]+1)/Xt[0],Wt=Kt*lt,kt=Kt*vt,Vt=Ht/(-lt+vt),qt=Vt*-lt;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(qt),j.translateZ(Vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),bt[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const F=Kt+Vt,ae=rt+Vt,te=Wt-qt,R=kt+(Ht-qt),y=at*rt/ae*F,X=ut*rt/ae*F;j.projectionMatrix.makePerspective(te,R,y,X,F,ae),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function et(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let st=j.near,St=j.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(St=m.depthFar)),N.near=D.near=P.near=st,N.far=D.far=P.far=St,(L!==N.near||I!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,I=N.far),N.layers.mask=j.layers.mask|6,P.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;const Ht=j.parent,bt=N.cameras;et(N,Ht);for(let Xt=0;Xt<bt.length;Xt++)et(bt[Xt],Ht);bt.length===2?V(N,P,D):N.projectionMatrix.copy(P.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),ft(j,N,Ht)};function ft(j,st,St){St===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return g[j]};let zt=null;function Gt(j,st){if(u=st.getViewerPose(c||o),p=st,u!==null){const St=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ht=!1;St.length!==N.cameras.length&&(N.cameras.length=0,Ht=!0);for(let rt=0;rt<St.length;rt++){const at=St[rt];let ut=null;if(f!==null)ut=f.getViewport(at);else{const vt=d.getViewSubImage(h,at);ut=vt.viewport,rt===0&&(t.setRenderTargetTextures(x,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(x))}let lt=k[rt];lt===void 0&&(lt=new Ze,lt.layers.enable(rt),lt.viewport=new Me,k[rt]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ut.x,ut.y,ut.width,ut.height),rt===0&&(N.matrix.copy(lt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ht===!0&&N.cameras.push(lt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const rt=d.getDepthInformation(St[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,i.renderState)}if(bt&&bt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let rt=0;rt<St.length;rt++){const at=St[rt].camera;if(at){let ut=g[at];ut||(ut=new zh,g[at]=ut);const lt=d.getCameraImage(at);ut.sourceTexture=lt}}}}for(let St=0;St<b.length;St++){const Ht=M[St],bt=b[St];Ht!==null&&bt!==void 0&&bt.update(Ht,st,c||o)}zt&&zt(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),p=null}const Zt=new Jh;Zt.setAnimationLoop(Gt),this.setAnimationLoop=function(j){zt=j},this.dispose=function(){}}}const Kv=new ye,su=new $t;su.set(-1,0,0,0,1,0,0,0,1);function Jv(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$h(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,T,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),v(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$e&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$e&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=t.get(g),T=_.envMap,x=_.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(su),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=T*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$e&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qv(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const M=b.program;n.uniformBlockBinding(x,M)}function c(x,b){let M=i[x.id];M===void 0&&(m(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",_));const C=b.program;n.updateUBOMapping(x,C);const S=t.render.frame;s[x.id]!==S&&(h(x),s[x.id]=S)}function u(x){const b=d();x.__bindingPointIndex=b;const M=r.createBuffer(),C=x.__size,S=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,M),M}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=i[x.id],M=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let S=0,A=M.length;S<A;S++){const P=M[S];if(Array.isArray(P))for(let D=0,k=P.length;D<k;D++)f(P[D],S,D,C);else f(P,S,0,C)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,b,M,C){if(v(x,b,M,C)===!0){const S=x.__offset,A=x.value;if(Array.isArray(A)){let P=0;for(let D=0;D<A.length;D++){const k=A[D],N=g(k);p(k,x.__data,P),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,S,x.__data)}}function p(x,b,M){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,M)}function v(x,b,M,C){const S=x.value,A=b+"_"+M;if(C[A]===void 0)return typeof S=="number"||typeof S=="boolean"?C[A]=S:ArrayBuffer.isView(S)?C[A]=S.slice():C[A]=S.clone(),!0;{const P=C[A];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return C[A]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(P.equals(S)===!1)return P.copy(S),!0}}return!1}function m(x){const b=x.uniforms;let M=0;const C=16;for(let A=0,P=b.length;A<P;A++){const D=Array.isArray(b[A])?b[A]:[b[A]];for(let k=0,N=D.length;k<N;k++){const L=D[k],I=Array.isArray(L.value)?L.value:[L.value];for(let U=0,q=I.length;U<q;U++){const W=I[U],O=g(W),J=M%C,V=J%O.boundary,et=J+V;M+=V,et!==0&&C-et<O.storage&&(M+=C-et),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=O.storage}}}const S=M%C;return S>0&&(M+=C-S),x.__size=M,x.__cache={},this}function g(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",x),b}function _(x){const b=x.target;b.removeEventListener("dispose",_);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function T(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:T}}const jv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function t_(){return Sn===null&&(Sn=new sf(jv,16,16,Ci,Dn),Sn.name="DFG_LUT",Sn.minFilter=Ve,Sn.magFilter=Ve,Sn.wrapS=Zn,Sn.wrapT=Zn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class e_{constructor(t={}){const{canvas:e=Rd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=je}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=f,m=new Set([Xa,Wa,Ha]),g=new Set([je,In,Ds,Us,Ga,Va]),_=new Uint32Array(4),T=new Int32Array(4),x=new H;let b=null,M=null;const C=[],S=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,k=null,N=null,L=null,I=null;this._outputColorSpace=Ue;let U=0,q=0,W=null,O=-1,J=null;const V=new Me,et=new Me;let ft=null;const zt=new jt(0);let Gt=0,Zt=e.width,j=e.height,st=1,St=null,Ht=null;const bt=new Me(0,0,Zt,j),Xt=new Me(0,0,Zt,j);let Kt=!1;const rt=new Ja;let at=!1,ut=!1;const lt=new ye,vt=new H,Wt=new Me,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function qt(){return W===null?st:1}let F=n;function ae(w,G){return e.getContext(w,G)}let te,R,y,X,$,tt,ct,xt,nt,z,K,At,pt,dt,Lt,Ft,Ut,B,mt,it,_t,wt,ot;try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",ln,!1),F===null){const G="webgl2";if(F=ae(G,w),F===null)throw ae(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(w){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",ln,!1),re("WebGLRenderer: "+w.message),w}function Ot(){te=new tg(F),te.init(),_t=new Xv(F,te),R=new W0(F,te,t,_t),y=new Hv(F,te),R.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),N=F.createFramebuffer(),L=F.createFramebuffer(),I=F.createFramebuffer(),X=new ig(F),$=new Rv,tt=new Wv(F,te,y,$,R,_t,X),ct=new j0(P),xt=new rp(F),wt=new V0(F,xt),nt=new eg(F,xt,X,wt),z=new rg(F,nt,xt,wt,X),B=new sg(F,R,tt),Lt=new X0($),K=new Cv(P,ct,te,R,wt,Lt),At=new Jv(P,$),pt=new Lv,dt=new Ov(te),Ut=new G0(P,ct,y,z,p,l),Ft=new Vv(P,z,R),ot=new Qv(F,X,R,y),mt=new H0(F,te,X),it=new ng(F,te,X),X.programs=K.programs,P.capabilities=R,P.extensions=te,P.properties=$,P.renderLists=pt,P.shadowMap=Ft,P.state=y,P.info=X}v!==je&&(A=new ag(v,e.width,e.height,a,i,s));const Nt=new $v(P,F);this.xr=Nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(Zt,j,!1))},this.getSize=function(w){return w.set(Zt,j)},this.setSize=function(w,G,Q=!0){if(Nt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=w,j=G,e.width=Math.floor(w*st),e.height=Math.floor(G*st),Q===!0&&(e.style.width=w+"px",e.style.height=G+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(Zt*st,j*st).floor()},this.setDrawingBufferSize=function(w,G,Q){Zt=w,j=G,st=Q,e.width=Math.floor(w*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(v===je){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(bt)},this.setViewport=function(w,G,Q,Y){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,G,Q,Y),y.viewport(V.copy(bt).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy(Xt)},this.setScissor=function(w,G,Q,Y){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,G,Q,Y),y.scissor(et.copy(Xt).multiplyScalar(st).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(w){y.setScissorTest(Kt=w)},this.setOpaqueSort=function(w){St=w},this.setTransparentSort=function(w){Ht=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,Q=!0){let Y=0;if(w){let Z=!1;if(W!==null){const Tt=W.texture.format;Z=m.has(Tt)}if(Z){const Tt=W.texture.type,Rt=g.has(Tt),Et=Ut.getClearColor(),It=Ut.getClearAlpha(),Bt=Et.r,Jt=Et.g,ne=Et.b;Rt?(_[0]=Bt,_[1]=Jt,_[2]=ne,_[3]=It,F.clearBufferuiv(F.COLOR,0,_)):(T[0]=Bt,T[1]=Jt,T[2]=ne,T[3]=It,F.clearBufferiv(F.COLOR,0,T))}else Y|=F.COLOR_BUFFER_BIT}G&&(Y|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",ln,!1),Ut.dispose(),pt.dispose(),dt.dispose(),$.dispose(),ct.dispose(),z.dispose(),wt.dispose(),ot.dispose(),K.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",ml),Nt.removeEventListener("sessionend",gl),pi.stop()};function ve(w){w.preventDefault(),Br("WebGLRenderer: Context Lost."),D=!0}function he(){Br("WebGLRenderer: Context Restored."),D=!1;const w=X.autoReset,G=Ft.enabled,Q=Ft.autoUpdate,Y=Ft.needsUpdate,Z=Ft.type;Ot(),X.autoReset=w,Ft.enabled=G,Ft.autoUpdate=Q,Ft.needsUpdate=Y,Ft.type=Z}function ln(w){re("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function vn(w){const G=w.target;G.removeEventListener("dispose",vn),pu(G)}function pu(w){mu(w),$.remove(w)}function mu(w){const G=$.get(w).programs;G!==void 0&&(G.forEach(function(Q){K.releaseProgram(Q)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,Q,Y,Z,Tt){G===null&&(G=kt);const Rt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Et=_u(w,G,Q,Y,Z);y.setMaterial(Y,Rt);let It=Q.index,Bt=1;if(Y.wireframe===!0){if(It=nt.getWireframeAttribute(Q),It===void 0)return;Bt=2}const Jt=Q.drawRange,ne=Q.attributes.position;let Dt=Jt.start*Bt,ue=(Jt.start+Jt.count)*Bt;Tt!==null&&(Dt=Math.max(Dt,Tt.start*Bt),ue=Math.min(ue,(Tt.start+Tt.count)*Bt)),It!==null?(Dt=Math.max(Dt,0),ue=Math.min(ue,It.count)):ne!=null&&(Dt=Math.max(Dt,0),ue=Math.min(ue,ne.count));const Te=ue-Dt;if(Te<0||Te===1/0)return;wt.setup(Z,Y,Et,Q,It);let xe,ge=mt;if(It!==null&&(xe=xt.get(It),ge=it,ge.setIndex(xe)),Z.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*qt()),ge.setMode(F.LINES)):ge.setMode(F.TRIANGLES);else if(Z.isLine){let ze=Y.linewidth;ze===void 0&&(ze=1),y.setLineWidth(ze*qt()),Z.isLineSegments?ge.setMode(F.LINES):Z.isLineLoop?ge.setMode(F.LINE_LOOP):ge.setMode(F.LINE_STRIP)}else Z.isPoints?ge.setMode(F.POINTS):Z.isSprite&&ge.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(te.get("WEBGL_multi_draw"))ge.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ze=Z._multiDrawStarts,Ct=Z._multiDrawCounts,He=Z._multiDrawCount,oe=It?xt.get(It).bytesPerElement:1,sn=$.get(Y).currentProgram.getUniforms();for(let _n=0;_n<He;_n++)sn.setValue(F,"_gl_DrawID",_n),ge.render(ze[_n]/oe,Ct[_n])}else if(Z.isInstancedMesh)ge.renderInstances(Dt,Te,Z.count);else if(Q.isInstancedBufferGeometry){const ze=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ct=Math.min(Q.instanceCount,ze);ge.renderInstances(Dt,Te,Ct)}else ge.render(Dt,Te)};function pl(w,G,Q,Y){k!==null&&w.isNodeMaterial&&k.setObject(Y,w),at===!0&&Lt.setState(w,Q,!1),w.transparent===!0&&w.side===Tn&&w.forceSinglePass===!1?(w.side=$e,w.needsUpdate=!0,Xs(w,G,Y),w.side=Ti,w.needsUpdate=!0,Xs(w,G,Y),w.side=Tn):Xs(w,G,Y)}this.compile=function(w,G,Q=null){Q===null&&(Q=w),k!==null&&k.renderStart(w,G,Q),M=dt.get(Q),M.init(G),S.push(M),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),w!==Q&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights(),k!==null&&k.updateLights(M.state.lightsArray),ut=this.localClippingEnabled,at=Lt.init(this.clippingPlanes,ut),at===!0&&Lt.setGlobalState(this.clippingPlanes,G),k!==null&&Ft.render(M.state.shadowsArray,Q,G);const Y=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Rt=0;Rt<Tt.length;Rt++){const Et=Tt[Rt];pl(Et,Q,G,Z),Y.add(Et)}else pl(Tt,Q,G,Z),Y.add(Tt)}),M=S.pop(),k!==null&&k.renderEnd(),Y},this.compileAsync=function(w,G,Q=null){const Y=this.compile(w,G,Q);return new Promise(Z=>{function Tt(){if(Y.forEach(function(Rt){const It=$.get(Rt).currentProgram;(It===void 0||It.isReady())&&Y.delete(Rt)}),Y.size===0){Z(w);return}setTimeout(Tt,10)}te.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Zr=null;function gu(w){Zr&&Zr(w)}function ml(){pi.stop()}function gl(){pi.start()}const pi=new Jh;pi.setAnimationLoop(gu),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(w){Zr=w,Nt.setAnimationLoop(w),w===null?pi.stop():pi.start()},Nt.addEventListener("sessionstart",ml),Nt.addEventListener("sessionend",gl),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(w,G);const Q=Nt.enabled===!0&&Nt.isPresenting===!0,Y=A!==null&&(W===null||Q)&&A.begin(P,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(G),G=Nt.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,G,W),M=dt.get(w,S.length),M.init(G),M.state.textureUnits=tt.getTextureUnits(),S.push(M),lt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),rt.setFromProjectionMatrix(lt,Pn,G.reversedDepth),ut=this.localClippingEnabled,at=Lt.init(this.clippingPlanes,ut),b=pt.get(w,C.length),b.init(),C.push(b),Nt.enabled===!0&&Nt.isPresenting===!0){const Rt=P.xr.getDepthSensingMesh();Rt!==null&&$r(Rt,G,-1/0,P.sortObjects)}$r(w,G,0,P.sortObjects),b.finish(),k!==null&&k.updateLights(M.state.lightsArray),P.sortObjects===!0&&b.sort(St,Ht),Vt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Vt&&Ut.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Lt.beginShadows();const Z=M.state.shadowsArray;if(Ft.render(Z,w,G),at===!0&&Lt.endShadows(),(Y&&A.hasRenderPass())===!1){const Rt=b.opaque,Et=b.transmissive;if(M.setupLights(),G.isArrayCamera){const It=G.cameras;if(Et.length>0)for(let Bt=0,Jt=It.length;Bt<Jt;Bt++){const ne=It[Bt];_l(Rt,Et,w,ne)}Vt&&Ut.render(w);for(let Bt=0,Jt=It.length;Bt<Jt;Bt++){const ne=It[Bt];vl(b,w,ne,ne.viewport)}}else Et.length>0&&_l(Rt,Et,w,G),Vt&&Ut.render(w),vl(b,w,G)}W!==null&&q===0&&(tt.updateMultisampleRenderTarget(W),tt.updateRenderTargetMipmap(W)),Y&&A.end(P),w.isScene===!0&&w.onAfterRender(P,w,G),wt.resetDefaultState(),O=-1,J=null,S.pop(),S.length>0?(M=S[S.length-1],tt.setTextureUnits(M.state.textureUnits),at===!0&&Lt.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,k!==null&&k.renderEnd()};function $r(w,G,Q,Y){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(rt)){Y&&Wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);const Rt=z.update(w),Et=w.material;Et.visible&&b.push(w,Rt,Et,Q,Wt.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(rt))){const Rt=z.update(w),Et=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Wt.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Wt.copy(Rt.boundingSphere.center)),Wt.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(Et)){const It=Rt.groups;for(let Bt=0,Jt=It.length;Bt<Jt;Bt++){const ne=It[Bt],Dt=Et[ne.materialIndex];Dt&&Dt.visible&&b.push(w,Rt,Dt,Q,Wt.z,ne,G)}}else Et.visible&&b.push(w,Rt,Et,Q,Wt.z,null,G)}}const Tt=w.children;for(let Rt=0,Et=Tt.length;Rt<Et;Rt++)$r(Tt[Rt],G,Q,Y)}function vl(w,G,Q,Y){const{opaque:Z,transmissive:Tt,transparent:Rt}=w;M.setupLightsView(Q),at===!0&&Lt.setGlobalState(P.clippingPlanes,Q),Y&&y.viewport(V.copy(Y)),Z.length>0&&Ws(Z,G,Q),Tt.length>0&&Ws(Tt,G,Q),Rt.length>0&&Ws(Rt,G,Q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function _l(w,G,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){const Dt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new gn(1,1,{generateMipmaps:!0,type:Dt?Dn:je,minFilter:Ei,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}const Tt=M.state.transmissionRenderTarget[Y.id],Rt=Y.viewport||V;Tt.setSize(Rt.z*P.transmissionResolutionScale,Rt.w*P.transmissionResolutionScale);const Et=P.getRenderTarget(),It=P.getActiveCubeFace(),Bt=P.getActiveMipmapLevel();P.setRenderTarget(Tt),P.getClearColor(zt),Gt=P.getClearAlpha(),Gt<1&&P.setClearColor(16777215,.5),P.clear(),Vt&&Ut.render(Q);const Jt=P.toneMapping;P.toneMapping=Ln;const ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),at===!0&&Lt.setGlobalState(P.clippingPlanes,Y),Ws(w,Q,Y),tt.updateMultisampleRenderTarget(Tt),tt.updateRenderTargetMipmap(Tt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ue=0,Te=G.length;ue<Te;ue++){const xe=G[ue],{object:ge,geometry:ze,material:Ct,group:He}=xe;if(Ct.side===Tn&&ge.layers.test(Y.layers)){const oe=Ct.side;Ct.side=$e,Ct.needsUpdate=!0,xl(ge,Q,Y,ze,Ct,He),Ct.side=oe,Ct.needsUpdate=!0,Dt=!0}}Dt===!0&&(tt.updateMultisampleRenderTarget(Tt),tt.updateRenderTargetMipmap(Tt))}P.setRenderTarget(Et,It,Bt),P.setClearColor(zt,Gt),ne!==void 0&&(Y.viewport=ne),P.toneMapping=Jt}function Ws(w,G,Q){const Y=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Tt=w.length;Z<Tt;Z++){const Rt=w[Z],{object:Et,geometry:It,group:Bt}=Rt;let Jt=Rt.material;Jt.allowOverride===!0&&Y!==null&&(Jt=Y),Et.layers.test(Q.layers)&&xl(Et,G,Q,It,Jt,Bt)}}function xl(w,G,Q,Y,Z,Tt){k!==null&&Z.isNodeMaterial&&k.setObject(w,Z),w.onBeforeRender(P,G,Q,Y,Z,Tt),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(P,G,Q,Y,w,Tt),Z.transparent===!0&&Z.side===Tn&&Z.forceSinglePass===!1?(Z.side=$e,Z.needsUpdate=!0,P.renderBufferDirect(Q,G,Y,Z,w,Tt),Z.side=Ti,Z.needsUpdate=!0,P.renderBufferDirect(Q,G,Y,Z,w,Tt),Z.side=Tn):P.renderBufferDirect(Q,G,Y,Z,w,Tt),w.onAfterRender(P,G,Q,Y,Z,Tt)}function Xs(w,G,Q){G.isScene!==!0&&(G=kt);const Y=$.get(w),Z=M.state.lights,Tt=M.state.shadowsArray,Rt=Z.state.version,Et=K.getParameters(w,Z.state,Tt,G,Q,M.state.lightProbeGridArray),It=K.getProgramCacheKey(Et);let Bt=Y.programs;Y.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;const Jt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Y.envMap=ct.get(w.envMap||Y.environment,Jt),Y.envMapRotation=Y.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",vn),Bt=new Map,Y.programs=Bt);let ne=Bt.get(It);if(ne!==void 0){if(Y.currentProgram===ne&&Y.lightsStateVersion===Rt)return yl(w,Et),ne}else Et.uniforms=K.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,Q,Et),w.onBeforeCompile(Et,P),ne=K.acquireProgram(Et,It),Bt.set(It,ne),Y.uniforms=Et.uniforms;const Dt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Dt.clippingPlanes=Lt.uniform),yl(w,Et),Y.needsLights=Su(w),Y.lightsStateVersion=Rt,Y.needsLights&&(Dt.ambientLightColor.value=Z.state.ambient,Dt.lightProbe.value=Z.state.probe,Dt.sunLights.value=Z.state.sun,Dt.sunLightShadows.value=Z.state.sunShadow,Dt.directionalLights.value=Z.state.directional,Dt.directionalLightShadows.value=Z.state.directionalShadow,Dt.spotLights.value=Z.state.spot,Dt.spotLightShadows.value=Z.state.spotShadow,Dt.rectAreaLights.value=Z.state.rectArea,Dt.ltc_1.value=Z.state.rectAreaLTC1,Dt.ltc_2.value=Z.state.rectAreaLTC2,Dt.pointLights.value=Z.state.point,Dt.pointLightShadows.value=Z.state.pointShadow,Dt.hemisphereLights.value=Z.state.hemi,Dt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Dt.sunShadowCascade.value=Z.state.sunShadowCascade,Dt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Dt.spotLightMatrix.value=Z.state.spotLightMatrix,Dt.spotLightMap.value=Z.state.spotLightMap,Dt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=ne,Y.uniformsList=null,ne}function Sl(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Nr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function yl(w,G){const Q=$.get(w);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function vu(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let Q=0,Y=w.length;Q<Y;Q++){const Z=w[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function _u(w,G,Q,Y,Z){G.isScene!==!0&&(G=kt),tt.resetTextureUnits();const Tt=G.fog,Rt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,Et=W===null?P.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:se.workingColorSpace,It=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Bt=ct.get(Y.envMap||Rt,It),Jt=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ne=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Dt=!!Q.morphAttributes.position,ue=!!Q.morphAttributes.normal,Te=!!Q.morphAttributes.color;let xe=Ln;Y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(xe=P.toneMapping);const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ze=ge!==void 0?ge.length:0,Ct=$.get(Y),He=M.state.lights;if(at===!0&&(ut===!0||w!==J)){const _e=w===J&&Y.id===O;Lt.setState(Y,w,_e)}let oe=!1;Y.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==He.state.version||Ct.outputColorSpace!==Et||Z.isBatchedMesh&&Ct.batching===!1||!Z.isBatchedMesh&&Ct.batching===!0||Z.isBatchedMesh&&Ct.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ct.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ct.instancing===!1||!Z.isInstancedMesh&&Ct.instancing===!0||Z.isSkinnedMesh&&Ct.skinning===!1||!Z.isSkinnedMesh&&Ct.skinning===!0||Z.isInstancedMesh&&Ct.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ct.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ct.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ct.instancingMorph===!1&&Z.morphTexture!==null||Ct.envMap!==Bt||Y.fog===!0&&Ct.fog!==Tt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Lt.numPlanes||Ct.numIntersection!==Lt.numIntersection)||Ct.vertexAlphas!==Jt||Ct.vertexTangents!==ne||Ct.morphTargets!==Dt||Ct.morphNormals!==ue||Ct.morphColors!==Te||Ct.toneMapping!==xe||Ct.morphTargetsCount!==ze||!!Ct.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Ct.__version=Y.version);let sn=Ct.currentProgram;oe===!0&&(sn=Xs(Y,G,Z),k&&Y.isNodeMaterial&&k.onUpdateProgram(Y,sn,Ct));let _n=!1,ti=!1,Li=!1;const fe=sn.getUniforms(),be=Ct.uniforms;if(y.useProgram(sn.program)&&(_n=!0,ti=!0,Li=!0),Y.id!==O&&(O=Y.id,ti=!0),Ct.needsLights){const _e=vu(M.state.lightProbeGridArray,Z);Ct.lightProbeGrid!==_e&&(Ct.lightProbeGrid=_e,ti=!0)}if(_n||J!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),fe.setValue(F,"projectionMatrix",w.projectionMatrix),fe.setValue(F,"viewMatrix",w.matrixWorldInverse);const ni=fe.map.cameraPosition;ni!==void 0&&ni.setValue(F,vt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&fe.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&fe.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,ti=!0,Li=!0)}if(Ct.needsLights&&(He.state.sunShadowMap.length>0&&fe.setValue(F,"sunShadowMap",He.state.sunShadowMap,tt),He.state.directionalShadowMap.length>0&&fe.setValue(F,"directionalShadowMap",He.state.directionalShadowMap,tt),He.state.spotShadowMap.length>0&&fe.setValue(F,"spotShadowMap",He.state.spotShadowMap,tt),He.state.pointShadowMap.length>0&&fe.setValue(F,"pointShadowMap",He.state.pointShadowMap,tt)),Z.isSkinnedMesh){fe.setOptional(F,Z,"bindMatrix"),fe.setOptional(F,Z,"bindMatrixInverse");const _e=Z.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),fe.setValue(F,"boneTexture",_e.boneTexture,tt))}Z.isBatchedMesh&&(fe.setOptional(F,Z,"batchingTexture"),fe.setValue(F,"batchingTexture",Z._matricesTexture,tt),fe.setOptional(F,Z,"batchingIdTexture"),fe.setValue(F,"batchingIdTexture",Z._indirectTexture,tt),fe.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&fe.setValue(F,"batchingColorTexture",Z._colorsTexture,tt));const ei=Q.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&B.update(Z,Q,sn),(ti||Ct.receiveShadow!==Z.receiveShadow)&&(Ct.receiveShadow=Z.receiveShadow,fe.setValue(F,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(be.envMapIntensity.value=G.environmentIntensity),be.dfgLUT!==void 0&&(be.dfgLUT.value=t_()),ti){if(fe.setValue(F,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&xu(be,Li),Tt&&Y.fog===!0&&At.refreshFogUniforms(be,Tt),At.refreshMaterialUniforms(be,Y,st,j,M.state.transmissionRenderTarget[w.id]),Ct.needsLights&&Ct.lightProbeGrid){const _e=Ct.lightProbeGrid;be.probesSH.value=_e.texture,be.probesMin.value.copy(_e.boundingBox.min),be.probesMax.value.copy(_e.boundingBox.max),be.probesResolution.value.copy(_e.resolution)}Nr.upload(F,Sl(Ct),be,tt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Nr.upload(F,Sl(Ct),be,tt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&fe.setValue(F,"center",Z.center),fe.setValue(F,"modelViewMatrix",Z.modelViewMatrix),fe.setValue(F,"normalMatrix",Z.normalMatrix),fe.setValue(F,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const _e=Y.uniformsGroups;for(let ni=0,Ni=_e.length;ni<Ni;ni++){const El=_e[ni];ot.update(El,sn),ot.bind(El,sn)}}return sn}function xu(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Su(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,G,Q){const Y=$.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),$.get(w.texture).__webglTexture=G,$.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const Q=$.get(w);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,Q=0){W=w,U=G,q=Q;let Y=null,Z=!1,Tt=!1;if(w){const Et=$.get(w);if(Et.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,Et.__webglFramebuffer),V.copy(w.viewport),et.copy(w.scissor),ft=w.scissorTest,y.viewport(V),y.scissor(et),y.setScissorTest(ft),O=-1;return}else if(Et.__webglFramebuffer===void 0)tt.setupRenderTarget(w);else if(Et.__hasExternalTextures)tt.rebindTextures(w,$.get(w.texture).__webglTexture,$.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Jt=w.depthTexture;if(Et.__boundDepthTexture!==Jt){if(Jt!==null&&$.has(Jt)&&(w.width!==Jt.image.width||w.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Tt=!0);const Bt=$.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[G])?Y=Bt[G][Q]:Y=Bt[G],Z=!0):w.samples>0&&tt.useMultisampledRTT(w)===!1?Y=$.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?Y=Bt[Q]:Y=Bt,V.copy(w.viewport),et.copy(w.scissor),ft=w.scissorTest}else V.copy(bt).multiplyScalar(st).floor(),et.copy(Xt).multiplyScalar(st).floor(),ft=Kt;if(Q!==0&&(Y=N),y.bindFramebuffer(F.FRAMEBUFFER,Y)&&y.drawBuffers(w,Y),y.viewport(V),y.scissor(et),y.setScissorTest(ft),Z){const Et=$.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Et.__webglTexture,Q)}else if(Tt){const Et=G;for(let It=0;It<w.textures.length;It++){const Bt=$.get(w.textures[It]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+It,Bt.__webglTexture,Q,Et)}}else if(w!==null&&Q!==0){const Et=$.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Et.__webglTexture,Q)}O=-1};function Ml(w){const G=$.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=R.textureFormatReadable(w.format),G.__typeReadable=R.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,Q,Y,Z,Tt,Rt,Et=0){if(!(w&&w.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){y.bindFramebuffer(F.FRAMEBUFFER,It);try{const Bt=w.textures[Et],Jt=Bt.format,ne=Bt.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Et);const Dt=Ml(Bt);if(Dt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-Y&&Q>=0&&Q<=w.height-Z&&F.readPixels(G,Q,Y,Z,_t.convert(Jt),_t.convert(ne),Tt)}finally{const Bt=W!==null?$.get(W).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(w,G,Q,Y,Z,Tt,Rt,Et=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It)if(G>=0&&G<=w.width-Y&&Q>=0&&Q<=w.height-Z){y.bindFramebuffer(F.FRAMEBUFFER,It);const Bt=w.textures[Et],Jt=Bt.format,ne=Bt.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Et);const Dt=Ml(Bt);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(G,Q,Y,Z,_t.convert(Jt),_t.convert(ne),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Te=W!==null?$.get(W).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Te);const xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Pd(F,xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ue),F.deleteSync(xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,Q=0){const Y=Math.pow(2,-Q),Z=Math.floor(w.image.width*Y),Tt=Math.floor(w.image.height*Y),Rt=G!==null?G.x:0,Et=G!==null?G.y:0;tt.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Rt,Et,Z,Tt),y.unbindTexture()},this.copyTextureToTexture=function(w,G,Q=null,Y=null,Z=0,Tt=0){let Rt,Et,It,Bt,Jt,ne,Dt,ue,Te;const xe=w.isCompressedTexture?w.mipmaps[Tt]:w.image;if(Q!==null)Rt=Q.max.x-Q.min.x,Et=Q.max.y-Q.min.y,It=Q.isBox3?Q.max.z-Q.min.z:1,Bt=Q.min.x,Jt=Q.min.y,ne=Q.isBox3?Q.min.z:0;else{const be=Math.pow(2,-Z);Rt=Math.floor(xe.width*be),Et=Math.floor(xe.height*be),w.isDataArrayTexture?It=xe.depth:w.isData3DTexture?It=Math.floor(xe.depth*be):It=1,Bt=0,Jt=0,ne=0}Y!==null?(Dt=Y.x,ue=Y.y,Te=Y.z):(Dt=0,ue=0,Te=0);const ge=_t.convert(G.format),ze=_t.convert(G.type);let Ct;G.isData3DTexture?(tt.setTexture3D(G,0),Ct=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(tt.setTexture2DArray(G,0),Ct=F.TEXTURE_2D_ARRAY):(tt.setTexture2D(G,0),Ct=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const He=y.getParameter(F.UNPACK_ROW_LENGTH),oe=y.getParameter(F.UNPACK_IMAGE_HEIGHT),sn=y.getParameter(F.UNPACK_SKIP_PIXELS),_n=y.getParameter(F.UNPACK_SKIP_ROWS),ti=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Bt),y.pixelStorei(F.UNPACK_SKIP_ROWS,Jt),y.pixelStorei(F.UNPACK_SKIP_IMAGES,ne);const Li=w.isDataArrayTexture||w.isData3DTexture,fe=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const be=$.get(w),ei=$.get(G),_e=$.get(be.__renderTarget),ni=$.get(ei.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,_e.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Ni=0;Ni<It;Ni++)Li&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(w).__webglTexture,Z,ne+Ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(G).__webglTexture,Tt,Te+Ni)),F.blitFramebuffer(Bt,Jt,Rt,Et,Dt,ue,Rt,Et,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||$.has(w)){const be=$.get(w),ei=$.get(G);y.bindFramebuffer(F.READ_FRAMEBUFFER,L),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let _e=0;_e<It;_e++)Li?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.__webglTexture,Z,ne+_e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,Z),fe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ei.__webglTexture,Tt,Te+_e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ei.__webglTexture,Tt),Z!==0?F.blitFramebuffer(Bt,Jt,Rt,Et,Dt,ue,Rt,Et,F.COLOR_BUFFER_BIT,F.NEAREST):fe?F.copyTexSubImage3D(Ct,Tt,Dt,ue,Te+_e,Bt,Jt,Rt,Et):F.copyTexSubImage2D(Ct,Tt,Dt,ue,Bt,Jt,Rt,Et);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else fe?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ct,Tt,Dt,ue,Te,Rt,Et,It,ge,ze,xe.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Ct,Tt,Dt,ue,Te,Rt,Et,It,ge,xe.data):F.texSubImage3D(Ct,Tt,Dt,ue,Te,Rt,Et,It,ge,ze,xe):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,Dt,ue,Rt,Et,ge,ze,xe.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,Dt,ue,xe.width,xe.height,ge,xe.data):F.texSubImage2D(F.TEXTURE_2D,Tt,Dt,ue,Rt,Et,ge,ze,xe);y.pixelStorei(F.UNPACK_ROW_LENGTH,He),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),y.pixelStorei(F.UNPACK_SKIP_PIXELS,sn),y.pixelStorei(F.UNPACK_SKIP_ROWS,_n),y.pixelStorei(F.UNPACK_SKIP_IMAGES,ti),Tt===0&&G.generateMipmaps&&F.generateMipmap(Ct),y.unbindTexture()},this.initRenderTarget=function(w){$.get(w).__webglFramebuffer===void 0&&tt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?tt.setTextureCube(w,0):w.isData3DTexture?tt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?tt.setTexture2DArray(w,0):tt.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){U=0,q=0,W=null,y.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class mn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new mn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],p=n[8],v=i[0],m=i[1],g=i[2],_=i[3],T=i[4],x=i[5],b=i[6],M=i[7],C=i[8];return s[0]=o*v+a*_+l*b,s[1]=o*m+a*T+l*M,s[2]=o*g+a*x+l*C,s[3]=c*v+u*_+d*b,s[4]=c*m+u*T+d*M,s[5]=c*g+u*x+d*C,s[6]=h*v+f*_+p*b,s[7]=h*m+f*T+p*M,s[8]=h*g+f*x+p*C,e}scale(t,e){e===void 0&&(e=new mn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let u;const d=4;let h;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){u=d;do h=d-u,s[h+i*o]+=s[h+i*a];while(--u);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];u=d;do h=d-u,s[h+i*a]=h<=o?0:s[h+i*a]-s[h+i*o]*f;while(--u)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new mn);const e=3,n=6,i=n_;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const u=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=u;do d=u-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const h=i[s+n*o]/i[s+n*s];c=u;do d=u-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*h;while(--c)}}while(--a);s=2;do{o=s-1;do{const h=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*h;while(--c)}while(o--)}while(--s);s=2;do{const h=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*h;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,u=e*a,d=e*l,h=n*a,f=n*l,p=i*l,v=s*o,m=s*a,g=s*l,_=this.elements;return _[3*0+0]=1-(h+p),_[3*0+1]=u-g,_[3*0+2]=d+m,_[3*1+0]=u+g,_[3*1+1]=1-(c+p),_[3*1+2]=f-v,_[3*2+0]=d-m,_[3*2+1]=f+v,_[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new mn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const n_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new mn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new E);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=i_,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=s_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Bc),Bc.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const i_=new E,s_=new E,Bc=new E;class nn{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,zc),c=zc),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new nn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=kc,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=kc,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(p<0||f>p)}}const zc=new E,kc=[new E,new E,new E,new E,new E,new E,new E,new E];class Gc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class ru{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class we{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=r_,i=o_;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new we);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+i*c-s*l,e.y=i*u+o*l+s*a-n*c,e.z=s*u+o*c+n*l-i*a,e.w=o*u-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new we);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new we),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*s-l*i,d=c*i+l*n-o*s,h=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=u*c+f*-o+d*-l-h*-a,e.y=d*c+f*-a+h*-o-u*-l,e.z=h*c+f*-l+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),i=Math.asin(2*u),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a-l*c*u):i==="YXZ"?(this.x=l*o*a+s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a+l*c*u):i==="ZXY"?(this.x=l*o*a-s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a-l*c*u):i==="ZYX"?(this.x=l*o*a-s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a+l*c*u):i==="YZX"?(this.x=l*o*a+s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a-l*c*u):i==="XZY"&&(this.x=l*o*a-s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a+l*c*u),this}clone(){return new we(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new we);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,d=t.w,h,f,p,v,m;return f=i*l+s*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),v=Math.sin((1-e)*h)/p,m=Math.sin(e*h)/p):(v=1-e,m=e),n.x=v*i+m*l,n.y=v*s+m*c,n.z=v*o+m*u,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new we);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(s*d+o*u-a*c),i.y+=h*(o*d+a*l-s*u),i.z+=h*(a*d+s*c-o*l),i.w+=h*(-s*l-o*c-a*u),i}}const r_=new E,o_=new E,a_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Pt{constructor(t){t===void 0&&(t={}),this.id=Pt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Pt.idCounter=0;Pt.types=a_;class ce{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new we,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ce.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ce.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),n.vsub(t,i),e.conjugate(Vc),Vc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new E),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Vc=new we;class os extends Pt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Pt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];os.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new E,o=new E;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const u=new E;let d=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){u.copy(n.faceNormals[p]),s.vmult(u,u);const v=u.dot(o);v>h&&(h=v,d=p)}const f=[];for(let p=0;p<n.faces[d].length;p++){const v=n.vertices[n.faces[d][p]],m=new E;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new E,u=new E,d=new E,h=new E,f=new E,p=new E;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);const _=m.testSepAxis(c,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const g=a?a.length:m.faces.length;for(let _=0;_<g;_++){const T=a?a[_]:_;c.copy(m.faceNormals[T]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],u);const _=m.testSepAxis(u,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(u))}else{const g=l?l.length:t.faces.length;for(let _=0;_<g;_++){const T=l?l[_]:_;u.copy(t.faceNormals[T]),s.vmult(u,u);const x=m.testSepAxis(u,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],f),h.cross(f,p),!p.almostZero()){p.normalize();const T=m.testSepAxis(p,t,e,n,i,s);if(T===!1)return!1;T<v&&(v=T,o.copy(p))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;os.project(a,t,n,i,Oo),os.project(e,t,s,o,Bo);const l=Oo[0],c=Oo[1],u=Bo[0],d=Bo[1];if(l<d||u<c)return!1;const h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(t,e){const n=new E,i=new E;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new E,c=new E,u=new E,d=new E,h=new E,f=new E,p=new E,v=new E,m=this,g=[],_=i,T=g;let x=-1,b=Number.MAX_VALUE;for(let P=0;P<m.faces.length;P++){l.copy(m.faceNormals[P]),n.vmult(l,l);const D=l.dot(t);D<b&&(b=D,x=P)}if(x<0)return;const M=m.faces[x];M.connectedFaces=[];for(let P=0;P<m.faces.length;P++)for(let D=0;D<m.faces[P].length;D++)M.indexOf(m.faces[P][D])!==-1&&P!==x&&M.connectedFaces.indexOf(P)===-1&&M.connectedFaces.push(P);const C=M.length;for(let P=0;P<C;P++){const D=m.vertices[M[P]],k=m.vertices[M[(P+1)%C]];D.vsub(k,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(D),n.vmult(f,f),e.vadd(f,f);const N=M.connectedFaces[P];p.copy(this.faceNormals[N]);const L=this.getPlaneConstantOfFace(N);v.copy(p),n.vmult(v,v);const I=L-v.dot(e);for(this.clipFaceAgainstPlane(_,T,v,I);_.length;)_.shift();for(;T.length;)_.push(T.shift())}p.copy(this.faceNormals[x]);const S=this.getPlaneConstantOfFace(x);v.copy(p),n.vmult(v,v);const A=S-v.dot(e);for(let P=0;P<_.length;P++){let D=v.dot(_[P])+A;if(D<=s&&(console.log(`clamped: depth=${D} to minDist=${s}`),D=s),D<=o){const k=_[P];if(D<=1e-6){const N={point:k,normal:v,depth:D};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+i,s<0)if(o<0){const d=new E;d.copy(c),e.push(d)}else{const d=new E;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new E;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,u,d,h=new E;for(let f=0;f<s.length;f++){h.copy(s[f]),e.vmult(h,h),t.vadd(h,h);const p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new E;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new E;t.vsub(l,c);const u=a.dot(c),d=new E;s.vsub(l,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=l_;let l=0,c=0;const u=c_,d=t.vertices;u.setZero(),ce.vectorToLocalFrame(n,i,e,a),ce.pointToLocalFrame(n,i,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Oo=[],Bo=[];new E;const l_=new E,c_=new E;class ui extends Pt{constructor(t){super({type:Pt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=E,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new os({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),ui.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)li.set(s[o][0],s[o][1],s[o][2]),e.vmult(li,li),t.vadd(li,li),n(li.x,li.y,li.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;yn[0].set(s.x,s.y,s.z),yn[1].set(-s.x,s.y,s.z),yn[2].set(-s.x,-s.y,s.z),yn[3].set(-s.x,-s.y,-s.z),yn[4].set(s.x,-s.y,-s.z),yn[5].set(s.x,s.y,-s.z),yn[6].set(-s.x,s.y,-s.z),yn[7].set(s.x,-s.y,s.z);const o=yn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=yn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const li=new E,yn=[new E,new E,new E,new E,new E,new E,new E,new E],ol={DYNAMIC:1,STATIC:2,KINEMATIC:4},al={AWAKE:0,SLEEPY:1,SLEEPING:2};class yt extends ru{constructor(t){t===void 0&&(t={}),super(),this.id=yt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?yt.STATIC:yt.DYNAMIC,typeof t.type==typeof yt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=yt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new we,this.initQuaternion=new we,this.previousQuaternion=new we,this.interpolatedQuaternion=new we,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new mn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new mn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new nn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=yt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===yt.SLEEPING&&this.dispatchEvent(yt.wakeupEvent)}sleep(){this.sleepState=yt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===yt.AWAKE&&n<i?(this.sleepState=yt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(yt.sleepyEvent)):e===yt.SLEEPY&&n>i?this.wakeUp():e===yt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(yt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===yt.SLEEPING||this.type===yt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new E,s=new we;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=h_,o=u_,a=this.quaternion,l=this.aabb,c=d_;for(let u=0;u!==i;u++){const d=t[u];a.vmult(e[u],s),s.vadd(this.position,s),a.mult(n[u],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=f_,i=p_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==yt.DYNAMIC)return;this.sleepState===yt.SLEEPING&&this.wakeUp();const n=m_;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==yt.DYNAMIC)return;const n=g_,i=v_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===yt.DYNAMIC&&(this.sleepState===yt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==yt.DYNAMIC)return;this.sleepState===yt.SLEEPING&&this.wakeUp();const n=e,i=__;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=x_;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==yt.DYNAMIC)return;const n=S_,i=y_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=M_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ui.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===yt.DYNAMIC||this.type===yt.KINEMATIC)||this.sleepState===yt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const p=d.elements,v=this.angularFactor,m=l.x*v.x,g=l.y*v.y,_=l.z*v.z;s.x+=t*(p[0]*m+p[1]*g+p[2]*_),s.y+=t*(p[3]*m+p[4]*g+p[5]*_),s.z+=t*(p[6]*m+p[7]*g+p[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}yt.idCounter=0;yt.COLLIDE_EVENT_NAME="collide";yt.DYNAMIC=ol.DYNAMIC;yt.STATIC=ol.STATIC;yt.KINEMATIC=ol.KINEMATIC;yt.AWAKE=al.AWAKE;yt.SLEEPY=al.SLEEPY;yt.SLEEPING=al.SLEEPING;yt.wakeupEvent={type:"wakeup"};yt.sleepyEvent={type:"sleepy"};yt.sleepEvent={type:"sleep"};const h_=new E,u_=new we,d_=new nn,f_=new mn,p_=new mn;new mn;const m_=new E,g_=new E,v_=new E,__=new E,x_=new E,S_=new E,y_=new E,M_=new E;class E_{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&yt.STATIC||t.sleepState===yt.SLEEPING)&&(e.type&yt.STATIC||e.sleepState===yt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=b_;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=w_,i=T_,s=A_,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const b_=new E;new E;new we;new E;const w_={keys:[]},T_=[],A_=[];new E;new E;new E;class C_ extends E_{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Gr{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let ou,au,lu,cu,hu,uu,du;const ll={CLOSEST:1,ANY:2,ALL:4};ou=Pt.types.SPHERE;au=Pt.types.PLANE;lu=Pt.types.BOX;cu=Pt.types.CYLINDER;hu=Pt.types.CONVEXPOLYHEDRON;uu=Pt.types.HEIGHTFIELD;du=Pt.types.TRIMESH;class Re{get[ou](){return this._intersectSphere}get[au](){return this._intersectPlane}get[lu](){return this._intersectBox}get[cu](){return this._intersectConvex}get[hu](){return this._intersectConvex}get[uu](){return this._intersectHeightfield}get[du](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Re.ANY,this.result=new Gr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Re.ANY,this.result=e.result||new Gr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Hc),zo.length=0,t.broadphase.aabbQuery(t,Hc,zo),this.intersectBodies(zo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=R_,s=P_;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(W_(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const u=new E;o.vsub(n,u);const d=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const p=new E,v=new E,m=new E;o.vsub(n,p);const g=-c.dot(p)/f;l.scale(g,v),o.vadd(v,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=L_;o.from.copy(this.from),o.to.copy(this.to),ce.pointToLocalFrame(n,e,o.from,o.from),ce.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=N_;let l,c,u,d;l=c=0,u=d=t.data.length-1;const h=new nn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(f,p,!1),ce.pointToWorldFrame(n,e,t.pillarOffset,yr),this._intersectConvex(t.pillarConvex,e,yr,i,s,Wc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),ce.pointToWorldFrame(n,e,t.pillarOffset,yr),this._intersectConvex(t.pillarConvex,e,yr,i,s,Wc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,f=I_,p=D_;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1);else{const v=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=U_,l=Xc,c=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,p=this.from,v=this.to,m=p.distanceTo(v),g=c?c.length:u.length,_=this.result;for(let T=0;!_.shouldStop&&T<g;T++){const x=c?c[T]:T,b=u[x],M=h[x],C=e,S=n;l.copy(d[b[0]]),C.vmult(l,l),l.vadd(S,l),l.vsub(p,l),C.vmult(M,a);const A=f.dot(a);if(Math.abs(A)<this.precision)continue;const P=a.dot(l)/A;if(!(P<0)){f.scale(P,qe),qe.vadd(p,qe),dn.copy(d[b[0]]),C.vmult(dn,dn),S.vadd(dn,dn);for(let D=1;!_.shouldStop&&D<b.length-1;D++){Mn.copy(d[b[D]]),En.copy(d[b[D+1]]),C.vmult(Mn,Mn),C.vmult(En,En),S.vadd(Mn,Mn),S.vadd(En,En);const k=qe.distanceTo(p);!(Re.pointInTriangle(qe,dn,Mn,En)||Re.pointInTriangle(qe,Mn,dn,En))||k>m||this.reportIntersection(a,qe,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=F_,l=V_,c=H_,u=Xc,d=O_,h=B_,f=z_,p=G_,v=k_,m=t.indices;t.vertices;const g=this.from,_=this.to,T=this.direction;c.position.copy(n),c.quaternion.copy(e),ce.vectorToLocalFrame(n,e,T,d),ce.pointToLocalFrame(n,e,g,h),ce.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();const x=h.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let b=0,M=l.length;!this.result.shouldStop&&b!==M;b++){const C=l[b];t.getNormal(C,a),t.getVertex(m[C*3],dn),dn.vsub(h,u);const S=d.dot(a),A=a.dot(u)/S;if(A<0)continue;d.scale(A,qe),qe.vadd(h,qe),t.getVertex(m[C*3+1],Mn),t.getVertex(m[C*3+2],En);const P=qe.distanceSquared(h);!(Re.pointInTriangle(qe,Mn,dn,En)||Re.pointInTriangle(qe,dn,Mn,En))||P>x||(ce.vectorToWorldFrame(e,a,v),ce.pointToWorldFrame(n,e,qe,p),this.reportIntersection(v,p,s,i,C))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Re.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Re.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case Re.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Mi),n.vsub(e,ys),t.vsub(e,ko);const s=Mi.dot(Mi),o=Mi.dot(ys),a=Mi.dot(ko),l=ys.dot(ys),c=ys.dot(ko);let u,d;return(u=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&u+d<s*l-o*o}}Re.CLOSEST=ll.CLOSEST;Re.ANY=ll.ANY;Re.ALL=ll.ALL;const Hc=new nn,zo=[],ys=new E,ko=new E,R_=new E,P_=new we,qe=new E,dn=new E,Mn=new E,En=new E;new E;new Gr;const Wc={faceList:[0]},yr=new E,L_=new Re,N_=[],I_=new E,D_=new E,U_=new E;new E;new E;const Xc=new E,F_=new E,O_=new E,B_=new E,z_=new E,k_=new E,G_=new E;new nn;const V_=[],H_=new ce,Mi=new E,Mr=new E;function W_(r,t,e){e.vsub(r,Mi);const n=Mi.dot(t);return t.scale(n,Mr),Mr.vadd(r,Mr),e.distanceTo(Mr)}class X_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class qc{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Hs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Hs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new qc,this.jacobianElementB=new qc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return s.scale(c,Yc),a.scale(u,Zc),n.invInertiaWorldSolve.vmult(o,$c),i.invInertiaWorldSolve.vmult(l,Kc),t.multiplyVectors(Yc,$c)+e.multiplyVectors(Zc,Kc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,Er),c+=Er.dot(t.rotational),l.vmult(e.rotational,Er),c+=Er.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=q_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Hs.idCounter=0;const Yc=new E,Zc=new E,$c=new E,Kc=new E,Er=new E,q_=new E;class Y_ extends Hs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=Z_,c=$_,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const p=K_,v=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(s.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);const _=g.dot(p),T=this.restitution+1,x=T*h.dot(g)-T*u.dot(g)+f.dot(c)-d.dot(l),b=this.computeGiMf();return-_*e-x*n-t*b}getImpactVelocityAlongNormal(){const t=J_,e=Q_,n=j_,i=tx,s=ex;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Z_=new E,$_=new E,K_=new E,J_=new E,Q_=new E,j_=new E,tx=new E,ex=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Jc extends Hs{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=nx,o=ix,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const nx=new E,ix=new E;class di{constructor(t,e,n){n=X_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=di.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}di.idCounter=0;class wi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=wi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}wi.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Re;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class sx extends Pt{constructor(t){if(super({type:Pt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new E);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new E;new E;new E;new E;new E;new E;new E;new E;new E;class Qc extends os{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],l=[],c=[],u=[],d=Math.cos,h=Math.sin;o.push(new E(-e*h(0),-n*.5,e*d(0))),c.push(0),o.push(new E(-t*h(0),n*.5,t*d(0))),u.push(1);for(let p=0;p<s;p++){const v=2*Math.PI/s*(p+1),m=2*Math.PI/s*(p+.5);p<s-1?(o.push(new E(-e*h(v),-n*.5,e*d(v))),c.push(2*p+2),o.push(new E(-t*h(v),n*.5,t*d(v))),u.push(2*p+3),l.push([2*p,2*p+1,2*p+3,2*p+2])):l.push([2*p,2*p+1,1,0]),(s%2===1||p<s/2)&&a.push(new E(-h(m),0,d(m)))}l.push(c),a.push(new E(0,1,0));const f=[];for(let p=0;p<u.length;p++)f.push(u[u.length-p-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=Pt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new nn;new E;new nn;new E;new E;new E;new E;new E;new E;new E;new nn;new E;new ce;new nn;class rx{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class ox extends rx{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let d,h,f,p,v,m;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const g=lx,_=cx,T=ax;g.length=a,_.length=a,T.length=a;for(let x=0;x!==a;x++){const b=o[x];T[x]=0,_[x]=b.computeB(u),g[x]=1/b.computeC()}if(a!==0){for(let M=0;M!==c;M++){const C=l[M],S=C.vlambda,A=C.wlambda;S.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let M=0;M!==a;M++){const C=o[M];d=_[M],h=g[M],m=T[M],v=C.computeGWlambda(),f=h*(d-v-C.eps*m),m+f<C.minForce?f=C.minForce-m:m+f>C.maxForce&&(f=C.maxForce-m),T[M]+=f,p+=f>0?f:-f,C.addToWlambda(f)}if(p*p<s)break}for(let M=0;M!==c;M++){const C=l[M],S=C.velocity,A=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),S.vadd(C.vlambda,S),C.wlambda.vmul(C.angularFactor,C.wlambda),A.vadd(C.wlambda,A)}let x=o.length;const b=1/u;for(;x--;)o[x].multiplier=T[x]*b}return n}}const ax=[],lx=[],cx=[];class hx{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class ux extends hx{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const Se={sphereSphere:Pt.types.SPHERE,spherePlane:Pt.types.SPHERE|Pt.types.PLANE,boxBox:Pt.types.BOX|Pt.types.BOX,sphereBox:Pt.types.SPHERE|Pt.types.BOX,planeBox:Pt.types.PLANE|Pt.types.BOX,convexConvex:Pt.types.CONVEXPOLYHEDRON,sphereConvex:Pt.types.SPHERE|Pt.types.CONVEXPOLYHEDRON,planeConvex:Pt.types.PLANE|Pt.types.CONVEXPOLYHEDRON,boxConvex:Pt.types.BOX|Pt.types.CONVEXPOLYHEDRON,sphereHeightfield:Pt.types.SPHERE|Pt.types.HEIGHTFIELD,boxHeightfield:Pt.types.BOX|Pt.types.HEIGHTFIELD,convexHeightfield:Pt.types.CONVEXPOLYHEDRON|Pt.types.HEIGHTFIELD,sphereParticle:Pt.types.PARTICLE|Pt.types.SPHERE,planeParticle:Pt.types.PLANE|Pt.types.PARTICLE,boxParticle:Pt.types.BOX|Pt.types.PARTICLE,convexParticle:Pt.types.PARTICLE|Pt.types.CONVEXPOLYHEDRON,cylinderCylinder:Pt.types.CYLINDER,sphereCylinder:Pt.types.SPHERE|Pt.types.CYLINDER,planeCylinder:Pt.types.PLANE|Pt.types.CYLINDER,boxCylinder:Pt.types.BOX|Pt.types.CYLINDER,convexCylinder:Pt.types.CONVEXPOLYHEDRON|Pt.types.CYLINDER,heightfieldCylinder:Pt.types.HEIGHTFIELD|Pt.types.CYLINDER,particleCylinder:Pt.types.PARTICLE|Pt.types.CYLINDER,sphereTrimesh:Pt.types.SPHERE|Pt.types.TRIMESH,planeTrimesh:Pt.types.PLANE|Pt.types.TRIMESH};class dx{get[Se.sphereSphere](){return this.sphereSphere}get[Se.spherePlane](){return this.spherePlane}get[Se.boxBox](){return this.boxBox}get[Se.sphereBox](){return this.sphereBox}get[Se.planeBox](){return this.planeBox}get[Se.convexConvex](){return this.convexConvex}get[Se.sphereConvex](){return this.sphereConvex}get[Se.planeConvex](){return this.planeConvex}get[Se.boxConvex](){return this.boxConvex}get[Se.sphereHeightfield](){return this.sphereHeightfield}get[Se.boxHeightfield](){return this.boxHeightfield}get[Se.convexHeightfield](){return this.convexHeightfield}get[Se.sphereParticle](){return this.sphereParticle}get[Se.planeParticle](){return this.planeParticle}get[Se.boxParticle](){return this.boxParticle}get[Se.convexParticle](){return this.convexParticle}get[Se.cylinderCylinder](){return this.convexConvex}get[Se.sphereCylinder](){return this.sphereConvex}get[Se.planeCylinder](){return this.planeConvex}get[Se.boxCylinder](){return this.boxConvex}get[Se.convexCylinder](){return this.convexConvex}get[Se.heightfieldCylinder](){return this.heightfieldCylinder}get[Se.particleCylinder](){return this.particleCylinder}get[Se.sphereTrimesh](){return this.sphereTrimesh}get[Se.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new ux,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Y_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=s.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,v=p.length?p.pop():new Jc(n,i,h*f),m=p.length?p.pop():new Jc(n,i,h*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-h*f,v.maxForce=m.maxForce=h*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];yi.setZero(),Ji.setZero(),Qi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(yi.vadd(e.ni,yi),Ji.vadd(e.ri,Ji),Qi.vadd(e.rj,Qi)):(yi.vsub(e.ni,yi),Ji.vadd(e.rj,Ji),Qi.vadd(e.ri,Qi));const o=1/t;Ji.scale(o,n.ri),Qi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),yi.normalize(),yi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=mx,c=gx,u=fx,d=px;for(let h=0,f=t.length;h!==f;h++){const p=t[h],v=e[h];let m=null;p.material&&v.material&&(m=n.getContactMaterial(p.material,v.material)||null);const g=p.type&yt.KINEMATIC&&v.type&yt.STATIC||p.type&yt.STATIC&&v.type&yt.KINEMATIC||p.type&yt.KINEMATIC&&v.type&yt.KINEMATIC;for(let _=0;_<p.shapes.length;_++){p.quaternion.mult(p.shapeOrientations[_],l),p.quaternion.vmult(p.shapeOffsets[_],u),u.vadd(p.position,u);const T=p.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],c),v.quaternion.vmult(v.shapeOffsets[x],d),d.vadd(v.position,d);const b=v.shapes[x];if(!(T.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&T.collisionFilterGroup)||u.distanceTo(d)>T.boundingSphereRadius+b.boundingSphereRadius)continue;let M=null;T.material&&b.material&&(M=n.getContactMaterial(T.material,b.material)||null),this.currentContactMaterial=M||m||n.defaultContactMaterial;const C=T.type|b.type,S=this[C];if(S){let A=!1;T.type<b.type?A=S.call(this,T,b,u,d,l,c,p,v,T,b,g):A=S.call(this,b,T,d,u,c,l,v,p,T,b,g),A&&g&&(n.shapeOverlapKeeper.set(T.id,b.id),n.bodyOverlapKeeper.set(p.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,u,d){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,br),h.ni.scale(h.ni.dot(br),jc),br.vsub(jc,h.rj),-br.dot(h.ni)<=t.radius){if(d)return!0;const f=h.ri,p=h.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(i,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,u,d){const h=this.v3pool,f=Vx;n.vsub(i,wr),e.getSideNormals(f,o);const p=t.radius;let v=!1;const m=Wx,g=Xx,_=qx;let T=null,x=0,b=0,M=0,C=null;for(let U=0,q=f.length;U!==q&&v===!1;U++){const W=zx;W.copy(f[U]);const O=W.length();W.normalize();const J=wr.dot(W);if(J<O+p&&J>0){const V=kx,et=Gx;V.copy(f[(U+1)%3]),et.copy(f[(U+2)%3]);const ft=V.length(),zt=et.length();V.normalize(),et.normalize();const Gt=wr.dot(V),Zt=wr.dot(et);if(Gt<ft&&Gt>-ft&&Zt<zt&&Zt>-zt){const j=Math.abs(J-O-p);if((C===null||j<C)&&(C=j,b=Gt,M=Zt,T=O,m.copy(W),g.copy(V),_.copy(et),x++,d))return!0}}}if(x){v=!0;const U=this.createContactEquation(a,l,t,e,c,u);m.scale(-p,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(T,m),g.scale(b,g),m.vadd(g,m),_.scale(M,_),m.vadd(_,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let S=h.get();const A=Hx;for(let U=0;U!==2&&!v;U++)for(let q=0;q!==2&&!v;q++)for(let W=0;W!==2&&!v;W++)if(S.set(0,0,0),U?S.vadd(f[0],S):S.vsub(f[0],S),q?S.vadd(f[1],S):S.vsub(f[1],S),W?S.vadd(f[2],S):S.vsub(f[2],S),i.vadd(S,A),A.vsub(n,A),A.lengthSquared()<p*p){if(d)return!0;v=!0;const O=this.createContactEquation(a,l,t,e,c,u);O.ri.copy(A),O.ri.normalize(),O.ni.copy(O.ri),O.ri.scale(p,O.ri),O.rj.copy(S),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}h.release(S),S=null;const P=h.get(),D=h.get(),k=h.get(),N=h.get(),L=h.get(),I=f.length;for(let U=0;U!==I&&!v;U++)for(let q=0;q!==I&&!v;q++)if(U%3!==q%3){f[q].cross(f[U],P),P.normalize(),f[U].vadd(f[q],D),k.copy(n),k.vsub(D,k),k.vsub(i,k);const W=k.dot(P);P.scale(W,N);let O=0;for(;O===U%3||O===q%3;)O++;L.copy(n),L.vsub(N,L),L.vsub(D,L),L.vsub(i,L);const J=Math.abs(W),V=L.length();if(J<f[O].length()&&V<p){if(d)return!0;v=!0;const et=this.createContactEquation(a,l,t,e,c,u);D.vadd(N,et.rj),et.rj.copy(et.rj),L.negate(et.ni),et.ni.normalize(),et.ri.copy(et.rj),et.ri.vadd(i,et.ri),et.ri.vsub(n,et.ri),et.ri.normalize(),et.ri.scale(p,et.ri),et.ri.vadd(n,et.ri),et.ri.vsub(a.position,et.ri),et.rj.vadd(i,et.rj),et.rj.vsub(l.position,et.rj),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult)}}h.release(P,D,k,N,L)}planeBox(t,e,n,i,s,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,u,d,h,f){const p=aS;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,p,h,f)){const v=[],m=lS;t.clipAgainstHull(n,s,e,i,o,p,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(d)return!0;const T=this.createContactEquation(a,l,t,e,c,u),x=T.ri,b=T.rj;p.negate(T.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,x),b.copy(v[_].point),x.vsub(n,x),b.vsub(i,b),x.vadd(n,x),x.vsub(a.position,x),b.vadd(i,b),b.vsub(l.position,b),this.result.push(T),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,s,o,a,l,c,u,d){const h=this.v3pool;n.vsub(i,Yx);const f=e.faceNormals,p=e.faces,v=e.vertices,m=t.radius;let g=!1;for(let _=0;_!==v.length;_++){const T=v[_],x=Jx;o.vmult(T,x),i.vadd(x,x);const b=Kx;if(x.vsub(n,b),b.lengthSquared()<m*m){if(d)return!0;g=!0;const M=this.createContactEquation(a,l,t,e,c,u);M.ri.copy(b),M.ri.normalize(),M.ni.copy(M.ri),M.ri.scale(m,M.ri),x.vsub(i,M.rj),M.ri.vadd(n,M.ri),M.ri.vsub(a.position,M.ri),M.rj.vadd(i,M.rj),M.rj.vsub(l.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult);return}}for(let _=0,T=p.length;_!==T&&g===!1;_++){const x=f[_],b=p[_],M=Qx;o.vmult(x,M);const C=jx;o.vmult(v[b[0]],C),C.vadd(i,C);const S=tS;M.scale(-m,S),n.vadd(S,S);const A=eS;S.vsub(C,A);const P=A.dot(M),D=nS;if(n.vsub(C,D),P<0&&D.dot(M)>0){const k=[];for(let N=0,L=b.length;N!==L;N++){const I=h.get();o.vmult(v[b[N]],I),i.vadd(I,I),k.push(I)}if(Bx(k,M,n)){if(d)return!0;g=!0;const N=this.createContactEquation(a,l,t,e,c,u);M.scale(-m,N.ri),M.negate(N.ni);const L=h.get();M.scale(-P,L);const I=h.get();M.scale(-m,I),n.vsub(i,N.rj),N.rj.vadd(I,N.rj),N.rj.vadd(L,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),h.release(L),h.release(I),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let U=0,q=k.length;U!==q;U++)h.release(k[U]);return}else for(let N=0;N!==b.length;N++){const L=h.get(),I=h.get();o.vmult(v[b[(N+1)%b.length]],L),o.vmult(v[b[(N+2)%b.length]],I),i.vadd(L,L),i.vadd(I,I);const U=Zx;I.vsub(L,U);const q=$x;U.unit(q);const W=h.get(),O=h.get();n.vsub(L,O);const J=O.dot(q);q.scale(J,W),W.vadd(L,W);const V=h.get();if(W.vsub(n,V),J>0&&J*J<U.lengthSquared()&&V.lengthSquared()<m*m){if(d)return!0;const et=this.createContactEquation(a,l,t,e,c,u);W.vsub(i,et.rj),W.vsub(n,et.ni),et.ni.normalize(),et.ni.scale(m,et.ri),et.rj.vadd(i,et.rj),et.rj.vsub(l.position,et.rj),et.ri.vadd(n,et.ri),et.ri.vsub(a.position,et.ri),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult);for(let ft=0,zt=k.length;ft!==zt;ft++)h.release(k[ft]);h.release(L),h.release(I),h.release(W),h.release(V),h.release(O);return}h.release(L),h.release(I),h.release(W),h.release(V),h.release(O)}for(let N=0,L=k.length;N!==L;N++)h.release(k[N])}}}planeConvex(t,e,n,i,s,o,a,l,c,u,d){const h=iS,f=sS;f.set(0,0,1),s.vmult(f,f);let p=0;const v=rS;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,u),T=oS;f.scale(f.dot(v),T),h.vsub(T,T),T.vsub(n,_.ri),_.ni.copy(f),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,u,d){const h=e.data,f=t.radius,p=e.elementSize,v=SS,m=xS;ce.pointToLocalFrame(i,o,n,m);let g=Math.floor((m.x-f)/p)-1,_=Math.ceil((m.x+f)/p)+1,T=Math.floor((m.y-f)/p)-1,x=Math.ceil((m.y+f)/p)+1;if(_<0||x<0||g>h.length||T>h[0].length)return;g<0&&(g=0),_<0&&(_=0),T<0&&(T=0),x<0&&(x=0),g>=h.length&&(g=h.length-1),_>=h.length&&(_=h.length-1),x>=h[0].length&&(x=h[0].length-1),T>=h[0].length&&(T=h[0].length-1);const b=[];e.getRectMinMax(g,T,_,x,b);const M=b[0],C=b[1];if(m.z-f>C||m.z+f<M)return;const S=this.result;for(let A=g;A<_;A++)for(let P=T;P<x;P++){const D=S.length;let k=!1;if(e.getConvexTrianglePillar(A,P,!1),ce.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&k||(e.getConvexTrianglePillar(A,P,!0),ce.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&k))return!0;if(S.length-D>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,u,d){const h=e.data,f=e.elementSize,p=t.boundingSphereRadius,v=vS,m=_S,g=gS;ce.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-p)/f)-1,T=Math.ceil((g.x+p)/f)+1,x=Math.floor((g.y-p)/f)-1,b=Math.ceil((g.y+p)/f)+1;if(T<0||b<0||_>h.length||x>h[0].length)return;_<0&&(_=0),T<0&&(T=0),x<0&&(x=0),b<0&&(b=0),_>=h.length&&(_=h.length-1),T>=h.length&&(T=h.length-1),b>=h[0].length&&(b=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const M=[];e.getRectMinMax(_,x,T,b,M);const C=M[0],S=M[1];if(!(g.z-p>S||g.z+p<C))for(let A=_;A<T;A++)for(let P=x;P<b;P++){let D=!1;if(e.getConvexTrianglePillar(A,P,!1),ce.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&D||(e.getConvexTrianglePillar(A,P,!0),ce.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&D))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,u,d){const h=dS;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const p=this.createContactEquation(l,a,e,t,c,u);h.normalize(),p.rj.copy(h),p.rj.scale(t.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,u,d){const h=cS;h.set(0,0,1),a.quaternion.vmult(h,h);const f=hS;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=uS;h.scale(h.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,u,d){let h=-1;const f=pS,p=mS;let v=null;const m=fS;if(m.copy(i),m.vsub(n,m),s.conjugate(th),th.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,_=t.faces.length;g!==_;g++){const T=[t.worldVertices[t.faces[g][0]]],x=t.worldFaceNormals[g];i.vsub(T[0],eh);const b=-x.dot(eh);if(v===null||Math.abs(b)<Math.abs(v)){if(d)return!0;v=b,h=g,f.copy(x)}}if(h!==-1){const g=this.createContactEquation(l,a,e,t,c,u);f.scale(v,p),p.vadd(i,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,T=g.rj;_.vadd(i,_),_.vsub(l.position,_),T.vadd(n,T),T.vsub(a.position,T),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,u,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,u,d)}particleCylinder(t,e,n,i,s,o,a,l,c,u,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,u,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,u,d){const h=bx,f=wx,p=Tx,v=Ax,m=Cx,g=Rx,_=Ix,T=Ex,x=yx,b=Dx;ce.pointToLocalFrame(i,o,n,m);const M=t.radius;_.lowerBound.set(m.x-M,m.y-M,m.z-M),_.upperBound.set(m.x+M,m.y+M,m.z+M),e.getTrianglesInAABB(_,b);const C=Mx,S=t.radius*t.radius;for(let N=0;N<b.length;N++)for(let L=0;L<3;L++)if(e.getVertex(e.indices[b[N]*3+L],C),C.vsub(m,x),x.lengthSquared()<=S){if(T.copy(C),ce.pointToWorldFrame(i,o,T,C),C.vsub(n,x),d)return!0;let I=this.createContactEquation(a,l,t,e,c,u);I.ni.copy(x),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.copy(C),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let N=0;N<b.length;N++)for(let L=0;L<3;L++){e.getVertex(e.indices[b[N]*3+L],h),e.getVertex(e.indices[b[N]*3+(L+1)%3],f),f.vsub(h,p),m.vsub(f,g);const I=g.dot(p);m.vsub(h,g);let U=g.dot(p);if(U>0&&I<0&&(m.vsub(h,g),v.copy(p),v.normalize(),U=g.dot(v),v.scale(U,g),g.vadd(h,g),g.distanceTo(m)<t.radius)){if(d)return!0;const W=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,W.ni),W.ni.normalize(),W.ni.scale(t.radius,W.ri),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),ce.pointToWorldFrame(i,o,g,g),g.vsub(l.position,W.rj),ce.vectorToWorldFrame(o,W.ni,W.ni),ce.vectorToWorldFrame(o,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}const A=Px,P=Lx,D=Nx,k=Sx;for(let N=0,L=b.length;N!==L;N++){e.getTriangleVertices(b[N],A,P,D),e.getNormal(b[N],k),m.vsub(A,g);let I=g.dot(k);if(k.scale(I,g),m.vsub(g,g),I=g.distanceTo(m),Re.pointInTriangle(g,A,P,D)&&I<t.radius){if(d)return!0;let U=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),ce.pointToWorldFrame(i,o,g,g),g.vsub(l.position,U.rj),ce.vectorToWorldFrame(o,U.ni,U.ni),ce.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}b.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,u,d){const h=new E,f=vx;f.set(0,0,1),s.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,h);const v=new E;v.copy(h),ce.pointToWorldFrame(i,o,v,h);const m=_x;if(h.vsub(n,m),f.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,u);_.ni.copy(f);const T=xx;f.scale(m.dot(f),T),h.vsub(T,T),_.ri.copy(T),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const yi=new E,Ji=new E,Qi=new E,fx=new E,px=new E,mx=new we,gx=new we,vx=new E,_x=new E,xx=new E,Sx=new E,yx=new E;new E;const Mx=new E,Ex=new E,bx=new E,wx=new E,Tx=new E,Ax=new E,Cx=new E,Rx=new E,Px=new E,Lx=new E,Nx=new E,Ix=new nn,Dx=[],br=new E,jc=new E,Ux=new E,Fx=new E,Ox=new E;function Bx(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Ux;r[(s+1)%i].vsub(o,a);const l=Fx;a.cross(t,l);const c=Ox;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const wr=new E,zx=new E,kx=new E,Gx=new E,Vx=[new E,new E,new E,new E,new E,new E],Hx=new E,Wx=new E,Xx=new E,qx=new E,Yx=new E,Zx=new E,$x=new E,Kx=new E,Jx=new E,Qx=new E,jx=new E,tS=new E,eS=new E,nS=new E;new E;new E;const iS=new E,sS=new E,rS=new E,oS=new E,aS=new E,lS=new E,cS=new E,hS=new E,uS=new E,dS=new E,th=new we,fS=new E;new E;const pS=new E,eh=new E,mS=new E,gS=new E,vS=new E,_S=[0],xS=new E,SS=new E;class nh{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const u=n[l];for(;u>i[a];)a++;c=u===i[a],c||ih(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||ih(e,u)}}}function ih(r,t){r.push((t&4294901760)>>16,t&65535)}const Go=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class yS{constructor(){this.data={keys:[]}}get(t,e){const n=Go(t,e);return this.data[n]}set(t,e,n){const i=Go(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Go(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class MS extends ru{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new C_,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new ox,this.constraints=[],this.narrowphase=new dx(this),this.collisionMatrix=new Gc,this.collisionMatrixPrevious=new Gc,this.bodyOverlapKeeper=new nh,this.shapeOverlapKeeper=new nh,this.contactmaterials=[],this.contactMaterialTable=new yS,this.defaultMaterial=new wi("default"),this.defaultContactMaterial=new di(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Gr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Re.ALL,n.from=t,n.to=e,n.callback=i,Vo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Re.ANY,n.from=t,n.to=e,n.result=i,Vo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Re.CLOSEST,n.from=t,n.to=e,n.result=i,Vo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof yt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Le.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Le.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Le.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=AS,i=CS,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=yt.DYNAMIC;let h=-1/0;const f=this.constraints,p=TS;l.length();const v=l.x,m=l.y,g=l.z;let _=0;for(c&&(h=Le.now()),_=0;_!==s;_++){const N=o[_];if(N.type===d){const L=N.force,I=N.mass;L.x+=I*v,L.y+=I*m,L.z+=I*g}}for(let N=0,L=this.subsystems.length;N!==L;N++)this.subsystems[N].update();c&&(h=Le.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=Le.now()-h);let T=f.length;for(_=0;_!==T;_++){const N=f[_];if(!N.collideConnected)for(let L=n.length-1;L>=0;L-=1)(N.bodyA===n[L]&&N.bodyB===i[L]||N.bodyB===n[L]&&N.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),c&&(h=Le.now());const x=wS,b=e.length;for(_=0;_!==b;_++)x.push(e[_]);e.length=0;const M=this.frictionEquations.length;for(_=0;_!==M;_++)p.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,p),c&&(u.narrowphase=Le.now()-h),c&&(h=Le.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=e.length;for(let N=0;N!==C;N++){const L=e[N],I=L.bi,U=L.bj,q=L.si,W=L.sj;let O;if(I.material&&U.material?O=this.getContactMaterial(I.material,U.material)||this.defaultContactMaterial:O=this.defaultContactMaterial,O.friction,I.material&&U.material&&(I.material.friction>=0&&U.material.friction>=0&&I.material.friction*U.material.friction,I.material.restitution>=0&&U.material.restitution>=0&&(L.restitution=I.material.restitution*U.material.restitution)),a.addEquation(L),I.allowSleep&&I.type===yt.DYNAMIC&&I.sleepState===yt.SLEEPING&&U.sleepState===yt.AWAKE&&U.type!==yt.STATIC){const J=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),V=U.sleepSpeedLimit**2;J>=V*2&&(I.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===yt.DYNAMIC&&U.sleepState===yt.SLEEPING&&I.sleepState===yt.AWAKE&&I.type!==yt.STATIC){const J=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),V=I.sleepSpeedLimit**2;J>=V*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,U,!0),this.collisionMatrixPrevious.get(I,U)||(Ms.body=U,Ms.contact=L,I.dispatchEvent(Ms),Ms.body=I,U.dispatchEvent(Ms)),this.bodyOverlapKeeper.set(I.id,U.id),this.shapeOverlapKeeper.set(q.id,W.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Le.now()-h,h=Le.now()),_=0;_!==s;_++){const N=o[_];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(T=f.length,_=0;_!==T;_++){const N=f[_];N.update();for(let L=0,I=N.equations.length;L!==I;L++){const U=N.equations[L];a.addEquation(U)}}a.solve(t,this),c&&(u.solve=Le.now()-h),a.removeAllEquations();const S=Math.pow;for(_=0;_!==s;_++){const N=o[_];if(N.type&d){const L=S(1-N.linearDamping,t),I=N.velocity;I.scale(L,I);const U=N.angularVelocity;if(U){const q=S(1-N.angularDamping,t);U.scale(q,U)}}}this.dispatchEvent(bS),c&&(h=Le.now());const P=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,P,D);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Le.now()-h),this.stepnumber+=1,this.dispatchEvent(ES);let k=!0;if(this.allowSleep)for(k=!1,_=0;_!==s;_++){const N=o[_];N.sleepTick(this.time),N.sleepState!==yt.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Vn,Hn),t){for(let s=0,o=Vn.length;s<o;s+=2)Es.bodyA=this.getBodyById(Vn[s]),Es.bodyB=this.getBodyById(Vn[s+1]),this.dispatchEvent(Es);Es.bodyA=Es.bodyB=null}if(e){for(let s=0,o=Hn.length;s<o;s+=2)bs.bodyA=this.getBodyById(Hn[s]),bs.bodyB=this.getBodyById(Hn[s+1]),this.dispatchEvent(bs);bs.bodyA=bs.bodyB=null}Vn.length=Hn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Vn,Hn),n){for(let s=0,o=Vn.length;s<o;s+=2){const a=this.getShapeById(Vn[s]),l=this.getShapeById(Vn[s+1]);Wn.shapeA=a,Wn.shapeB=l,a&&(Wn.bodyA=a.body),l&&(Wn.bodyB=l.body),this.dispatchEvent(Wn)}Wn.bodyA=Wn.bodyB=Wn.shapeA=Wn.shapeB=null}if(i){for(let s=0,o=Hn.length;s<o;s+=2){const a=this.getShapeById(Hn[s]),l=this.getShapeById(Hn[s+1]);Xn.shapeA=a,Xn.shapeB=l,a&&(Xn.bodyA=a.body),l&&(Xn.bodyB=l.body),this.dispatchEvent(Xn)}Xn.bodyA=Xn.bodyB=Xn.shapeA=Xn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new nn;const Vo=new Re,Le=globalThis.performance||{};if(!Le.now){let r=Date.now();Le.timing&&Le.timing.navigationStart&&(r=Le.timing.navigationStart),Le.now=()=>Date.now()-r}new E;const ES={type:"postStep"},bS={type:"preStep"},Ms={type:yt.COLLIDE_EVENT_NAME,body:null,contact:null},wS=[],TS=[],AS=[],CS=[],Vn=[],Hn=[],Es={type:"beginContact",bodyA:null,bodyB:null},bs={type:"endContact",bodyA:null,bodyB:null},Wn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Xn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ce=1.066,Ye=.24,on=.109,Oa=-18,RS=.264,PS=.305,Ho=-16.2,qn=7.2,Wo=1,Xo=2,ws=4,sh=8,tn=(()=>{const r=[[0],[1,2],[3,4,5],[6,7,8,9]],t=new Array(10);return r.forEach((e,n)=>e.forEach((i,s)=>{t[i]=[(s-(e.length-1)/2)*PS,Oa-n*RS]})),t})();function LS(){const r=document.createElement("canvas");r.width=512,r.height=4096;const t=r.getContext("2d"),e=39,n=r.width/e;for(let o=0;o<e;o++){const a=30+o%3*3+Math.random()*4,l=62+Math.random()*8;t.fillStyle=`hsl(${a} 58% ${l}%)`,t.fillRect(o*n,0,n,r.height),t.fillStyle="rgba(90,50,10,.18)",t.fillRect(o*n,0,1,r.height);for(let c=0;c<40;c++)t.fillStyle=`rgba(120,70,20,${Math.random()*.08})`,t.fillRect(o*n+Math.random()*n,Math.random()*r.height,1,30+Math.random()*120)}const i=o=>r.height*(1-o/20);t.fillStyle="#6b2f12";for(const o of[5,10,15,20,25,30,35]){const a=o*n+n/2,l=i(4.6+Math.abs(o-20)*.03);t.beginPath(),t.moveTo(a,l-60),t.lineTo(a-7,l+20),t.lineTo(a+7,l+20),t.closePath(),t.fill()}for(const o of[3,5,8,11,14,25,28,31,34,36])t.beginPath(),t.arc(o*n+n/2,i(2.1),5,0,Math.PI*2),t.fill();t.fillStyle="rgba(60,30,10,.5)";for(const[o,a]of tn)t.beginPath(),t.ellipse((o+Ce/2)/Ce*r.width,i(-a),9,3,0,0,Math.PI*2),t.fill();const s=new Bh(r);return s.colorSpace=Ue,s.anisotropy=8,s}function rh(){const r=document.createElement("canvas");r.width=64,r.height=512;const t=r.getContext("2d");t.fillStyle="#fbfbf7",t.fillRect(0,0,64,512);const e=(i,s)=>{t.fillStyle="#d61f2c",t.fillRect(0,512*(1-s),64,512*(s-i))};e(.64,.675),e(.7,.735);const n=new Bh(r);return n.colorSpace=Ue,n}function oh(){const r=[[0,0],[.026,0],[.04,.012],[.055,.06],[.06,.11],[.057,.15],[.045,.2],[.03,.245],[.023,.27],[.024,.295],[.03,.325],[.032,.345],[.028,.365],[.017,.378],[0,.382]];return new el(r.map(([t,e])=>new gt(t,e)),28)}class NS{constructor(t,e,n){le(this,"renderer");le(this,"scene",new qd);le(this,"camera");le(this,"world",new MS({gravity:new E(0,-9.82,0)}));le(this,"pins",[]);le(this,"ball");le(this,"raf",0);le(this,"last",0);le(this,"ro");le(this,"aimArrow");le(this,"bowler",null);le(this,"gutGeo");le(this,"sweepBar");le(this,"ballQ",new Jn);le(this,"tweens",[]);le(this,"bowlerAnim",null);le(this,"dropY",0);le(this,"gutMat");le(this,"camGoal",{pos:new H(0,1.25,3.2),look:new H(0,.25,-18)});le(this,"camLook",new H(0,.25,-18));le(this,"shake",0);le(this,"scripted",null);le(this,"scriptT",0);le(this,"events",{});le(this,"aim",{x:0,hook:0});le(this,"slowmo",!0);le(this,"timeScale",1);le(this,"showAim",!0);le(this,"stats",{nudged:0,forced:0});le(this,"loop",t=>{var s;const e=Math.min(.033,(t-this.last)/1e3)*this.timeScale;this.last=t,this.scripted&&this.scripted(e),this.world.step(1/120,e,6);const n=this.ball.body;if(this.showAim&&(n.position.x=this.aim.x,n.position.z=.6,this.ballQ.identity()),this.ball.mesh.position.set(n.position.x,n.position.y,n.position.z),n.type===yt.DYNAMIC)this.ballQ.set(n.quaternion.x,n.quaternion.y,n.quaternion.z,n.quaternion.w);else if(!this.showAim){const o=n.angularVelocity,a=Math.hypot(o.x,o.y,o.z);a>0&&this.ballQ.premultiply(new Jn().setFromAxisAngle(new H(o.x/a,o.y/a,o.z/a),a*e))}this.ball.mesh.quaternion.copy(this.ballQ);for(const o of this.tweens)o.t+=e,o.fn(Math.min(1,o.t/o.dur)),o.t>=o.dur&&((s=o.done)==null||s.call(o));this.tweens=this.tweens.filter(o=>o.t<o.dur);for(const o of this.pins)if(!o.gone&&(o.mesh.position.set(o.body.position.x,o.body.position.y,o.body.position.z),o.mesh.quaternion.set(o.body.quaternion.x,o.body.quaternion.y,o.body.quaternion.z,o.body.quaternion.w),!o.target&&o.wob.amp>.002)){o.wob.t+=e;const a=o.wob.amp*Math.exp(-o.wob.t*2.2)*Math.sin(o.wob.t*14);o.mesh.quaternion.multiply(new Jn().setFromAxisAngle(o.wob.ax,a)),o.wob.t>2.5&&(o.wob.amp=0)}if(this.aimArrow.visible=this.showAim,this.showAim&&(this.aimArrow.position.x=0,this.aimArrow.rotation.y=0,this.aimArrow.children.forEach((o,a)=>{const l=a/(this.aimArrow.children.length-1);o.position.x=this.aim.x+this.aim.hook*.26*l*l,o.rotation.z=-this.aim.hook*.5*l})),this.bowler){const o=this.bowler,a=o.material,l=.16,c=this.bowlerAnim;if(this.showAim&&!c)o.position.set(this.aim.x-l,.5+Math.sin(t/520)*.006,1.95),a.rotation=0,a.opacity=1;else if(c){c.t+=e;const u=1.15,d=Math.min(1,c.t/u);if(c.t<u)o.position.set(c.x0-l,.5+Math.abs(Math.sin(d*Math.PI*4))*.035*(1-d*.6)-d*d*.06,1.95-1.33*(d*(2-d))),a.rotation=-.08*d*d;else{const h=Math.min(1,(c.t-u)/.5);o.position.set(c.x0-l,.44+h*.04,.62-h*.06),a.rotation=-.08+h*.11,a.opacity=Math.max(0,1-Math.max(0,c.t-u-.25)*1.6)}this.showAim&&(this.bowlerAnim=null)}}const i=this.camera;i.position.lerp(this.camGoal.pos,Math.min(1,e*3.2)),this.shake>0&&(this.shake=Math.max(0,this.shake-e),i.position.x+=(Math.random()-.5)*this.shake*.05,i.position.y+=(Math.random()-.5)*this.shake*.04),this.camLook.lerp(this.camGoal.look,Math.min(1,e*3)),i.lookAt(this.camLook),this.renderer.render(this.scene,i),this.raf=requestAnimationFrame(this.loop)});this.canvas=t,this.art=e,this.renderer=new e_({canvas:t,antialias:!n,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(n?1:2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=Ue,this.renderer.toneMapping=za,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!n,this.renderer.shadowMap.type=hh,this.camera=new Ze(46,1,.05,80),this.camera.position.copy(this.camGoal.pos),this.scene.background=new jt("#0a0716"),this.scene.fog=new $a("#0a0716",24,40),this.build(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.last=performance.now(),this.raf=requestAnimationFrame(this.loop)}build(){const t=this.scene,e=this.world;e.allowSleep=!0,e.solver.iterations=12,t.add(new Kf("#d6ddff","#3a1a40",1.25));const n=new ep("#fff1dc",1.6);n.position.set(.6,6,3),n.target.position.set(0,0,-10),t.add(n,n.target);for(const W of[-3,-8,-13]){const O=new _r("#ffe7c2",5,7);O.position.set(0,2.4,W),t.add(O)}const i=new Qf("#fff4e0",140,12,.55,.5,1.2);i.position.set(0,3.2,-15.5),i.target.position.set(0,0,-18.4),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),i.shadow.bias=-4e-4,t.add(i,i.target);const s=new _r("#ff4fd8",6,9);s.position.set(-1.6,1.4,-14),t.add(s);const o=new _r("#3fb6ff",6,9);o.position.set(1.6,1.4,-14),t.add(o);const a=new _r("#ffd9a8",4,10);a.position.set(0,2.2,1),t.add(a);const l=new pe(new Qe(Ce,20),new xi({map:LS(),roughness:.28,clearcoat:1,clearcoatRoughness:.08}));l.rotation.x=-Math.PI/2,l.position.set(0,0,-10),l.receiveShadow=!0,t.add(l);const c=new ts({color:"#a3acbf",metalness:.75,roughness:.3,side:Tn}),u=Ye/2,d=new Wh;d.moveTo(-u,0),d.absarc(0,0,u,Math.PI,Math.PI*2,!1),d.lineTo(u+.012,0),d.absarc(0,0,u+.012,Math.PI*2,Math.PI,!0),d.closePath();const h=new tl(d,{depth:21,bevelEnabled:!1,curveSegments:18});this.gutGeo=h,this.gutMat=c;for(const W of[-1,1]){const O=new pe(h,c);O.position.set(W*(Ce/2+u),0,-20.5),O.receiveShadow=!0,t.add(O);const J=new pe(new Cn(.12,.1,22),new ts({color:"#0e0c1c",roughness:.6}));J.position.set(W*(Ce/2+Ye+.06),.03,-10),t.add(J);const V=new pe(new Cn(.03,.03,22),new Yn({color:W<0?"#ff3fd0":"#35b8ff"}));V.position.set(W*(Ce/2+Ye+.02),.09,-10),t.add(V)}const f=new pe(new Qe(Ce+2*Ye+.4,5),new xi({color:"#c79257",roughness:.4,clearcoat:.6}));f.rotation.x=-Math.PI/2,f.position.set(0,-.001,2.5),t.add(f);const p=new pe(new Qe(Ce+2*Ye,.02),new Yn({color:"#ff2a55"}));p.rotation.x=-Math.PI/2,p.position.set(0,.001,0),t.add(p);const v=new pe(new Qe(3,2),new ts({color:"#050408"}));v.rotation.x=-Math.PI/2,v.position.set(0,-.25,-20.9),t.add(v);const m=this.art.lane?(()=>{const W=new Ro().load(this.art.lane);return W.colorSpace=Ue,W.repeat.set(1,.36),W.offset.set(0,.64),new Yn({map:W})})():new Yn({color:"#1a1036"}),g=new pe(new Qe(10,4.4),m);g.position.set(0,1.9,-20.8),t.add(g);const _=new pe(new Cn(Ce+2*Ye,.09,.05),new ts({color:"#c7ccd8",metalness:.8,roughness:.25}));_.position.set(0,1.6,-17.55),_.visible=!1,t.add(_),this.sweepBar=_;const T=new pe(new Qe(14,30),new ts({color:"#120a1f",roughness:.85}));T.rotation.x=-Math.PI/2,T.position.set(0,-.14,-8),t.add(T);const x=new xi({map:l.material.map,roughness:.35,clearcoat:.8}),b=oh(),M=new xi({map:rh(),roughness:.2,clearcoat:1});for(const W of[-3.2,-1.6,1.6,3.2]){const O=new pe(new Qe(Ce,20),x);O.rotation.x=-Math.PI/2,O.position.set(W,0,-10),O.receiveShadow=!0,t.add(O);for(const et of[-1,1]){const ft=new pe(h,c);ft.position.set(W+et*(Ce/2+Ye/2),0,-20.5),t.add(ft)}const J=new pe(new Qe(Ce+2*Ye,5),f.material);J.rotation.x=-Math.PI/2,J.position.set(W,-.001,2.5),t.add(J);for(const[et,ft]of tn){const zt=new pe(b,M);zt.position.set(W+et,0,ft),zt.castShadow=!0,t.add(zt)}const V=new pe(new Cn(.03,.03,22),new Yn({color:W<0?"#ff3fd0":"#35b8ff"}));V.position.set(W+(W<0?-1:1)*(Ce/2+Ye+.02),.09,-10),t.add(V)}for(const W of[-2.4,-.8,.8,2.4]){const O=new pe(new Cn(.08,.02,22),new Yn({color:"#fff3d6"}));O.position.set(W,3.1,-9),t.add(O)}const C=new wi("lane"),S=new wi("pin"),A=new wi("ball");e.addContactMaterial(new di(C,S,{friction:.35,restitution:.15})),e.addContactMaterial(new di(C,A,{friction:.04,restitution:.05})),e.addContactMaterial(new di(A,S,{friction:.08,restitution:.55})),e.addContactMaterial(new di(S,S,{friction:.2,restitution:.45}));const P=(W,O,J=C)=>{const V=new yt({mass:0,material:J,collisionFilterGroup:Wo,collisionFilterMask:Xo|ws});return V.addShape(W),V.position.set(...O),e.addBody(V),V};P(new ui(new E(Ce/2,.05,10.8)),[0,-.05,-9.2]);for(const W of[-1,1])P(new ui(new E(Ye/2,.05,10.8)),[W*(Ce/2+Ye/2),-.11,-9.2]),P(new ui(new E(.05,.6,1.8)),[W*(Ce/2+Ye+.05),.5,-18.6]);P(new ui(new E(1.2,.05,1.2)),[0,-.3,-20.6]),P(new ui(new E(1.2,.8,.05)),[0,.5,-21.2]);const D=oh(),k=new xi({map:rh(),roughness:.18,clearcoat:1,clearcoatRoughness:.05});tn.forEach(W=>{const O=new pe(D,k);O.castShadow=!0,O.receiveShadow=!0;const J=new es;O.position.y=-.14,J.add(O),t.add(J);const V=new yt({mass:1.55,material:S,angularDamping:.25,linearDamping:.05,sleepSpeedLimit:.08});V.addShape(new Qc(.05,.055,.2,10),new E(0,-.04,0)),V.addShape(new Qc(.03,.045,.18,10),new E(0,.15,0)),e.addBody(V);const et={mesh:J,body:V,home:W,target:!1,up:!0,wob:{t:0,amp:0,ax:new H(1,0,0)},gone:!1};V.addEventListener("collide",ft=>{var Gt,Zt,j,st;const zt=Math.abs(((Zt=(Gt=ft.contact)==null?void 0:Gt.getImpactVelocityAlongNormal)==null?void 0:Zt.call(Gt))??0);zt>.4&&((st=(j=this.events).onHit)==null||st.call(j,Math.min(1,zt/5))),!et.target&&zt>.15&&(et.wob={t:0,amp:Math.min(.12,.03+zt*.03),ax:new H(Math.random()-.5,0,Math.random()-.5).normalize()})}),this.pins.push(et)}),this.rackPins(tn.map((W,O)=>O));let N;if(this.art.ball){const W=new Ro().load(this.art.ball);W.colorSpace=Ue,N=new xi({map:W,roughness:.12,clearcoat:1,clearcoatRoughness:.03,metalness:.1})}else N=new xi({color:"#3b2fd6",roughness:.12,clearcoat:1});const L=new pe(new nl(on,40,28),N);L.castShadow=!0,t.add(L);const I=new yt({mass:7,material:A,type:yt.KINEMATIC,collisionFilterGroup:Xo,collisionFilterMask:Wo|ws,linearDamping:.02,angularDamping:.02});I.addShape(new sx(on)),I.allowSleep=!1,e.addBody(I),this.ball={mesh:L,body:I},this.holdBall();const U=new es,q=new Yn({color:"#7dd3fc",transparent:!0,opacity:.85});for(let W=0;W<14;W++){const O=new pe(new Qe(.025,.18),q);O.rotation.x=-Math.PI/2,O.position.set(0,.004,-.6-W*.42),U.add(O)}if(this.aimArrow=U,t.add(U),this.art.rabbit){const W=new Ro().load(this.art.rabbit);W.colorSpace=Ue;const O=new tf(new Uh({map:W,transparent:!0,depthWrite:!1}));O.scale.set(.72,1,1),O.position.set(-.55,.5,1),t.add(O),this.bowler=O}}resize(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t/e<.9?58:46,this.camera.updateProjectionMatrix())}rackPins(t){this.pins.forEach((e,n)=>{const i=t.includes(n);e.gone=!i,e.up=i,e.target=!1,e.wob.amp=0,e.mesh.visible=i;const s=e.body;s.type=yt.STATIC,s.mass=0,s.updateMassProperties(),s.position.set(e.home[0],.14,e.home[1]),s.quaternion.set(0,0,0,1),s.velocity.setZero(),s.angularVelocity.setZero(),s.collisionFilterGroup=sh,s.collisionFilterMask=i?ws:0,e.mesh.position.set(e.home[0],.14,e.home[1]),e.mesh.quaternion.identity()})}holdBall(){const t=this.ball.body;t.type=yt.KINEMATIC,t.velocity.setZero(),t.angularVelocity.setZero(),t.position.set(this.aim.x,on,.6),t.quaternion.set(0,0,0,1),this.ball.mesh.visible=!this.bowler}standingPins(){return this.pins.map((t,e)=>!t.gone&&!this.isDown(t)?e:-1).filter(t=>t>=0)}planLine(t,e,n,i=!1){if(!t.length)return null;const s=(.6-Ho)/qn,o=Ce/2-on-.02;let a=null;for(let l=-.44;l<=.44;l+=.01)for(let c=-.09;c<=.09;c+=.005){const u=qn*Math.sin(c),d=2*(n+u*s-l)/(s*s),h=u-d*s;if(!i&&(Math.abs(d)>1.1||Math.abs(h)>.55))continue;let f=!0;for(let T=1;T<12;T++){const x=s*T/12,b=n+h*x+.5*d*x*x;if(Math.abs(b)>o){f=!1;break}}if(!f&&!i)continue;const p=Math.sin(c),v=-Math.cos(c);let m=0,g=0;for(const T of e){const[x,b]=tn[T],M=x-l,C=b-Ho;if(M*p+C*v<0)continue;Math.abs(M*v-C*p)<on+.055&&(t.includes(T)?(g++,m+=3):m-=12)}g||(m-=30);const _=this.aim.hook;m-=_===0?Math.abs(d)*4:Math.sign(d)===_?Math.abs(Math.abs(d)-.45)*2:6+Math.abs(d)*4,m-=Math.abs(h)*3,(!a||m>a.score)&&(a={xe:l,th:c,v0:h,a:d,score:m})}return a??(i?null:this.planLine(t,e,n,!0))}roll(t){const{knock:e,standing:n}=t;this.pins.forEach((S,A)=>{if(S.gone)return;const P=e.includes(A);S.target=P;const D=S.body;P&&(D.type=yt.DYNAMIC,D.mass=1.55,D.updateMassProperties(),D.collisionFilterGroup=ws,D.collisionFilterMask=Wo|Xo|ws|sh,D.wakeUp())});const i=this.aim.x,s=this.planLine(e,n,i),o=(.6-Ho)/qn,a=this.aim.hook!==0?this.aim.hook:i>=0?1:-1,l=a*(Ce/2),c=a*(Ce/2+Ye/2),u=o*.62,d=a*.04,h=2*(l-i-d*u)/(u*u),f=(.6+20.4)/qn;let p=()=>{};const v=()=>{var S,A;p=((A=(S=this.events).onRollStart)==null?void 0:A.call(S,(s?o:f)+.4))??(()=>{})};this.showAim=!1;const m=this.ball.body;m.type=yt.KINEMATIC;let g=!1;this.scriptT=0;const _=new Set,T=new Map;let x=0,b=0,M=!1;const C=this.bowler?1.15:0;return this.bowlerAnim=this.bowler?{t:0,x0:i}:null,new Promise(S=>{let A=-1,P=0,D=C===0;D&&v(),this.scripted=k=>{var O,J;if(this.scriptT+=k,!D){const V=this.scriptT/C;if(this.camGoal.pos.set(i*.5,1.3-V*.15,3.9-V*1.3),V<1)return!1;D=!0,this.scriptT=0,this.ball.mesh.visible=!0,this.dropY=.16,v()}const N=this.scriptT;if(!s||N<o){const V=.6-qn*N;let et,ft,zt=on;if(s?(et=i+s.v0*N+.5*s.a*N*N,ft=s.v0+s.a*N):M?(et=x,ft=b):(et=i+d*N+.5*h*N*N,ft=d+h*N,Math.abs(et)>=Ce/2&&(M=!0,x=et,b=ft)),M){b+=((c-x)*40-b*9)*k,x+=b*k,et=x,ft=b;const Gt=Math.min(1,Math.abs(x-l)/(Ye/2));zt=on-(on+.011)*Gt}return this.dropY>0&&(this.dropY=Math.max(0,this.dropY-k*.9),zt+=this.dropY*this.dropY*6),m.position.set(et,zt,V),m.velocity.set(ft,0,-qn),m.angularVelocity.set(-qn/on,0,-ft/on),this.followCam(V),!s&&V<=-20.4?(p(),this.ball.mesh.visible=!1,this.scripted=null,setTimeout(S,450),!0):!1}if(m.type!==yt.DYNAMIC){const V=s.v0+s.a*o;m.type=yt.DYNAMIC,m.mass=7,m.updateMassProperties(),m.allowSleep=!1,m.wakeUp(),m.quaternion.set(this.ballQ.x,this.ballQ.y,this.ballQ.z,this.ballQ.w),m.velocity.set(V,0,-qn),m.angularVelocity.set(-qn/on,0,-V/on),A=N}const L=m.position.z,I=m.position.x;this.followCam(L),this.timeScale=this.slowmo&&N-A<1.1&&L>Oa-1.2?.38:1;for(const V of this.pins){if(!V.target||V.gone||_.has(V))continue;const[et,ft]=V.home,zt=Math.abs(et-I);if(L>ft+.3+zt*.9||N-(T.get(V)??(T.set(V,N),N))<zt*.35)continue;_.add(V);const Gt=new E((et-I)*1.6+(Math.random()-.5)*.4,.15,-1).unit(),Zt=2.6+Math.random()*1.6-Math.min(1.2,zt*.8);V.body.wakeUp(),V.body.applyImpulse(Gt.scale(Zt),new E(V.body.position.x,V.body.position.y+.12,V.body.position.z)),V.body.angularVelocity.set((Math.random()-.5)*6,(Math.random()-.5)*8,(Math.random()-.5)*6)}this.pins.filter(V=>V.target&&!V.gone&&this.isDown(V)).length,!g&&L<Oa+.25&&(g=!0,p(),this.shake=.5,(J=(O=this.events).onCrash)==null||J.call(O,e.length));const U=N-A,q=this.pins.filter(V=>V.target&&!this.isDown(V));if(q.length&&U>1.7&&P<2&&U>1.7+P*.7){P++,this.stats.nudged++;for(const V of q){const et=new E(Math.random()-.5,0,-.6).unit();V.body.wakeUp(),V.body.applyImpulse(et.scale(.9),new E(V.body.position.x,V.body.position.y+.2,V.body.position.z))}}if(q.length&&U>3.2)for(const V of q)this.forceFall(V),this.stats.forced++;const W=this.pins.every(V=>!V.target||V.body.sleepState===yt.SLEEPING||V.body.velocity.length()<.3||V.body.position.y<-.1);return U>1.5&&W&&!q.length||U>4.2?(p(),this.timeScale=1,this.scripted=null,setTimeout(S,350),!0):!1}})}isDown(t){if(t.gone)return!0;const e=new E(0,1,0);return t.body.quaternion.vmult(e).y<.75||t.body.position.y<.05}forceFall(t){const e=t.body;e.type=yt.KINEMATIC,e.velocity.setZero(),e.angularVelocity.setZero();const n=new we;n.setFromAxisAngle(new E(1,0,.3).unit(),-Math.PI/2),e.quaternion.copy(n),e.position.y=.06}tween(t,e){return new Promise(n=>this.tweens.push({t:0,dur:t,fn:e,done:n}))}async sweep(){const t=this.standingPinsAfter(),e=this.pins.filter((s,o)=>!s.gone&&!t.includes(o));this.camGoal.pos.set(0,.75,-14.2),this.camGoal.look.set(0,.2,-18);const n=this.sweepBar;n.visible=!0,await this.tween(.35,s=>{n.position.y=1.6-1.52*s});const i=e.map(s=>({p:s,x:s.body.position.x,z:s.body.position.z,y:s.body.position.y}));e.forEach(s=>{s.body.type=yt.KINEMATIC,s.body.velocity.setZero(),s.body.angularVelocity.setZero(),s.body.collisionFilterMask=0}),await this.tween(.6,s=>{n.position.z=-17.55-1.7*s;for(const o of i){const a=Math.min(o.z,n.position.z-.08);o.p.body.position.set(o.x,a<-19?o.y-(-19-a)*.8:o.y,a)}}),await this.tween(.35,s=>{n.position.y=.08+1.52*s}),n.position.set(0,1.6,-17.55),n.visible=!1,this.rackPins(t),this.holdBall(),this.showAim=!0,this.camGoal.pos.set(0,1.25,3.2),this.camGoal.look.set(0,.25,-18)}standingPinsAfter(){return this.pins.map((t,e)=>!t.gone&&!this.isDown(t)?e:-1).filter(t=>t>=0)}reset(){this.rackPins(tn.map((t,e)=>e)),this.holdBall(),this.showAim=!0,this.camGoal.pos.set(0,1.25,3.2),this.camGoal.look.set(0,.25,-18)}followCam(t){const e=Math.max(-14.6,t+2.6),n=Math.max(-.5,Math.min(.5,this.ball.body.position.x));this.camGoal.pos.set(n*.55,e<-10?.72:1.05,e),this.camGoal.look.set(n*.35,.25,-18)}dispose(){cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.scene.traverse(t=>{var n,i;(i=(n=t.geometry)==null?void 0:n.dispose)==null||i.call(n);const e=t.material;(Array.isArray(e)?e:e?[e]:[]).forEach(s=>{var o,a,l;(a=(o=s.map)==null?void 0:o.dispose)==null||a.call(o),(l=s.dispose)==null||l.call(s)})})}}const IS=Rl.abi??Rl,DS=Zu(),US=$u();function Ty({address:r}){return r?ht.jsx(OS,{address:r}):ht.jsx(FS,{})}function FS(){return ht.jsx(fu,{src:Iu()})}function OS({address:r}){const t=Nu(r,{abi:IS,commitFn:"roll",committedEvent:"FrameCommitted",settledEvent:"FrameSettled",label:"ELCAS BOWLING",key:"bowling",args:(e,n)=>[n,e.mode],seedArg:2,payoutArg:6,extra:e=>ht.jsxs("span",{children:["RTP ",(e/100).toFixed(1),"% · 4 modes · up to ",(ch(fn)/1e4*e/1e4).toFixed(1),"×"]}),how:ht.jsx(ht.Fragment,{children:"Commit + reveal. The frame is drawn from a future block hash (ball 1 from a fixed skill table, ball 2 knocks each standing pin with 45%); FrameSettled carries the seed and this page replays it — previewRoll(seed, mode) checks it on-chain. Your line and hook shape how the frame looks, not the count."})});return ht.jsx(fu,{src:t})}function ah(r,t){return r===fn?t===3?"3 strikes · TRIPLE STRIKE":`${t} strike${t===1?"":"s"}`:t===Ns?"Strike":t===Hr?"Spare":`${t} pins`}const Tr=(r,t,e)=>e?t==null||r===10?"":r+t===10?"/":t===0?"–":String(t):r===10?"X":r===0?"–":String(r),BS=[{v:-1,label:"◄ Hook"},{v:0,label:"Straight"},{v:1,label:"Hook ►"}];function zS(r){if(r.length<2||r.includes(0))return!1;const t=new Set;let e=0;for(const n of r){if(t.has(n))continue;e++;const i=[n];for(t.add(n);i.length;){const s=i.pop();for(const o of r){if(t.has(o))continue;Math.hypot(tn[s][0]-tn[o][0],tn[s][1]-tn[o][1])<.33&&(t.add(o),i.push(o))}}}return e>=2}function kS({down:r,split:t}){const e=tn.map(l=>l[0]),n=tn.map(l=>l[1]),i=Math.min(...e),s=Math.max(...e),o=Math.min(...n),a=Math.max(...n);return ht.jsxs("div",{className:`bw-pinmap ${t?"split":""}`,"aria-label":`${10-r.size} pins standing`,children:[ht.jsx("svg",{viewBox:"-10 -10 120 100",children:tn.map(([l,c],u)=>{const d=(l-i)/(s-i)*100,h=(c-o)/(a-o)*80;return ht.jsx("circle",{cx:d,cy:h,r:"8.5",className:r.has(u)?"dn":"up"},u)})}),t&&ht.jsx("b",{children:"SPLIT!"})]})}function fu({src:r}){var nt;const t=r.symbol,e=r.rtpBP/1e4,n=Tu(),i=zu(),s=ku(),[o,a]=ie.useState(r.onChain?"":"5"),[l,c]=ie.useState(1),[u,d]=ie.useState(0),[h,f]=ie.useState(1),[p,v]=ie.useState(!1),[m,g]=ie.useState(!1),[_,T]=ie.useState([]),[x,b]=ie.useState(null),[M,C]=ie.useState(null);ie.useEffect(()=>{M&&bu()},[M]);const[S,A]=ie.useState(null),[P,D]=ie.useState(!1),[k,N]=ie.useState([]),[L,I]=ie.useState(Fu),[U,q]=ie.useState(null),[W,O]=ie.useState(new Set),[J,V]=ie.useState(!1),[et,ft]=ie.useState(null),[zt,Gt]=ie.useState(null),[Zt,j]=ie.useState(null),st=ie.useRef(()=>{});st.current=z=>{z>0&&ft({k:performance.now(),n:z})};const St=ie.useRef(0),Ht=ie.useRef(!0);ie.useEffect(()=>(Ht.current=!0,()=>{Ht.current=!1}),[]);const bt=ch(l)/1e4*e,Xt={...r,balance:U??r.balance},Kt=Du(Xt,o,a,bt,p);ie.useEffect(()=>{var z;(z=r.setDraft)==null||z.call(r,Kt.betN>0?{bet:Kt.betN,mode:l}:null)},[Kt.betN,l]);const rt=ie.useRef(.15);rt.current=p?.8:.2;const[at,ut]=ie.useState(!1);ie.useEffect(()=>{if(p){ut(!0);return}const z=setTimeout(()=>ut(!1),4e3);return()=>clearTimeout(z)},[p]),Au("dice",rt,at);const lt=ie.useRef(null),vt=ie.useRef(null),[Wt,kt]=ie.useState(!1);ie.useEffect(()=>{if(!n||!lt.current)return;let z=null;try{z=new NS(lt.current,{lane:n.lane,ball:n.ball,rabbit:null},i),z.events={onHit:K=>Kr.pin(K),onCrash:K=>{Kr.crash(K),st.current(K)},onRollStart:K=>Kr.roll(K)},z.slowmo=!i,vt.current=z}catch{kt(!0)}return()=>{z==null||z.dispose(),vt.current=null}},[n,i]),ie.useEffect(()=>{vt.current&&(vt.current.aim={x:u,hook:h})},[u,h,n]);const Vt=ie.useRef(null),[qt,F]=ie.useState(0);function ae(z){p||(z.target.setPointerCapture(z.pointerId),Vt.current={x:z.clientX,y:z.clientY,line:u,pts:[[z.clientX,z.clientY]]})}function te(z){const K=Vt.current;if(!K||p)return;K.pts.push([z.clientX,z.clientY]);const At=lt.current.getBoundingClientRect(),pt=K.y-z.clientY;if(F(Math.max(0,Math.min(1,pt/(At.height*.35)))),pt<24)d(Math.max(-.4,Math.min(.4,K.line+(z.clientX-K.x)/At.width*1.4)));else if(K.pts.length>3){const dt=K.pts.findIndex(([,Ut])=>K.y-Ut>=24),[Lt]=K.pts[Math.max(0,dt)],Ft=z.clientX-Lt;f(Math.abs(Ft)<At.width*.04?0:Ft>0?1:-1)}}function R(z){const K=Vt.current;if(Vt.current=null,F(0),!K||p)return;const At=lt.current.getBoundingClientRect();K.y-z.clientY>At.height*.18&&$()}const y=z=>new Promise(K=>setTimeout(K,P?z*.5:z)),X=z=>b(K=>({t:z,n:((K==null?void 0:K.n)??0)+1}));async function $(){var At;if(A(null),C(null),!r.ready){A("Loading room…");return}const z=Kt.fitNow();if("err"in z){A(z.err);return}if(r.gate&&z.bet===Kt.betN){A(r.gate);return}Kt.setNote(null);const K=vt.current;v(!0),b(null),T([]),O(new Set),V(!1),j(null),Gt(null),K==null||K.reset();try{g(!0),St.current=0;const pt=await r.play({bet:z.bet,mode:l}).finally(()=>{Ht.current&&g(!1)});if(pt&&St.current){const Ut=(performance.now()-St.current)/1e3;Ut>=1.5&&Ut<=30&&I(B=>{const mt=Math.min(20,Math.max(2,B*.6+Ut*.4));return Bu(mt),mt})}if(!pt)return;r.balance!=null&&q(r.balance-z.bet);const dt=Xu(pt.seed,l);for(let Ut=0;Ut<dt.frames.length;Ut++){const B=dt.frames[Ut],[mt,it]=Yu(pt.seed,B,Ut);Ut>0&&(K==null||K.reset(),O(new Set),V(!1),await y(500)),T(ot=>[...ot,{k1:B.k1,k2:null}]),K&&await K.roll({knock:mt,standing:K.standingPins(),aimX:u,hook:h}),O(new Set(mt));const _t=dt.frames.slice(0,Ut+1).filter(ot=>ot.k1===10).length;if(B.k1===10){X("STRIKE!"),qs("milestone",1),Gt({k:performance.now(),big:l===fn&&_t===3}),l===fn&&j(`${_t} of 3 strikes${_t>=2?" · paying":""}`),await y(900);continue}if(l===fn){{const ot=dt.frames.length-1-Ut;j(`${_t} of 3 strikes · ${_t>=2?"paying":_t+ot>=2?`${ot} ball${ot===1?"":"s"} left`:"no pay"}`)}await y(400);continue}const wt=[0,1,2,3,4,5,6,7,8,9].filter(ot=>!mt.includes(ot));zS(wt)&&(V(!0),X("SPLIT!")),j(l===2?"No strike — ball 2 is for show":l===1?`${10-B.k1} pin${10-B.k1===1?"":"s"} left for the spare`:B.k1>=7?"In the money — every pin adds":`${7-B.k1} more pin${7-B.k1===1?"":"s"} to get paid`),await y(500),K&&await K.sweep(),await y(200),K&&await K.roll({knock:it,standing:K.standingPins(),aimX:u,hook:h}),T(ot=>ot.map((Ot,Nt)=>Nt===Ut?{...Ot,k2:B.k2}:Ot)),O(new Set([...mt,...it])),B.k1+B.k2===10&&(X("SPARE!"),qs("milestone",1),Gt({k:performance.now(),big:!1}),await y(700))}const Lt=pt.payout??z.bet*Wu(l,dt.outcome)*e/1e4,Ft=z.bet>0?Lt/z.bet:0;C({roll:dt,payout:Lt,x:Ft}),j(null),Lt>0?qs(Ft>=10?"bigwin":"win",Ft>=10?2:1):qs("lose"),(At=r.settle)==null||At.call(r,Lt),N(Ut=>{var B;return[{id:(((B=Ut[0])==null?void 0:B.id)??0)+1,label:l===fn?`${dt.outcome}X`:dt.outcome===Ns?"X":dt.outcome===Hr?"/":String(dt.outcome),x:Ft,f:dt.frames.map(mt=>({k1:mt.k1,k2:l===fn?null:mt.k2}))},...Ut].slice(0,14)})}catch(pt){A((pt==null?void 0:pt.message)||"Roll failed.")}finally{v(!1),q(null)}}const tt=m?r.stage??"reveal":null;ie.useEffect(()=>{tt&&tt!=="approve"&&!St.current&&(St.current=performance.now())},[tt]);const ct=z=>z>=10?z.toFixed(1):z.toFixed(2),xt=bn[l].pays.map((z,K)=>({o:K,bp:z,p:(l===fn?US:DS)[K]})).filter(z=>z.bp>0).reverse();return ht.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-4",children:[ht.jsxs("div",{className:"bw-stage relative overflow-hidden rounded-2xl",children:[ht.jsx("div",{className:"absolute top-3 right-3 z-40 rounded-full bg-black/60 p-1 ring-1 ring-sky-300/40 backdrop-blur",children:ht.jsx(Cu,{})}),ht.jsxs("div",{className:"bw-head",children:[n!=null&&n.logo?ht.jsx("img",{src:n.logo,alt:"ELCAS Bowling",className:"bw-logo",draggable:!1}):ht.jsx("div",{className:"bw-title",children:"ELCAS BOWLING"}),ht.jsx("div",{className:"bw-board",children:(l===fn?[0,1,2]:[0]).map(z=>{const K=_[z];return ht.jsxs("div",{className:"bw-frame",children:[ht.jsx("span",{children:K?Tr(K.k1,K.k2,!1):""}),ht.jsx("span",{children:K?Tr(K.k1,K.k2,!0):""}),ht.jsx("b",{children:K?l===fn?K.k1===10?"X":K.k1:K.k2==null?"":K.k1===10?"X":K.k1+K.k2===10?"/":K.k1+K.k2:""})]},z)})})]}),ht.jsxs("div",{className:"bw-3d",children:[ht.jsx("canvas",{ref:lt,className:`bw-canvas ${p?"":"aim"}`,onPointerDown:ae,onPointerMove:te,onPointerUp:R,onPointerCancel:()=>{Vt.current=null,F(0)}}),qt>0&&!p&&ht.jsxs("div",{className:"bw-flick",children:[ht.jsx("i",{style:{height:`${qt*100}%`}}),ht.jsx("span",{children:qt>=.5?"RELEASE!":"FLICK UP"})]}),Wt&&ht.jsx("div",{className:"bw-noscene",children:"3D isn't available on this device."}),!p&&!M&&ht.jsx("div",{className:"bw-hint",children:"drag sideways to line up · flick up to throw · curve the flick to hook"}),m&&ht.jsxs("div",{className:"bw-hint wait",children:[ht.jsx(Ll,{size:12,className:"animate-spin"})," ",r.status??"Chalking up…"]}),ht.jsx(kS,{down:W,split:J}),(Zt||!p&&!M)&&ht.jsx("div",{className:"bw-goal",children:Zt??ht.jsxs(ht.Fragment,{children:[ht.jsx("b",{children:bn[l].label})," · ",bn[l].sub," pays up to ",ct(bt),"×"]})}),et&&p&&ht.jsxs("div",{className:"bw-count",children:[ht.jsx("b",{children:et.n})," PIN",et.n===1?"":"S"]},et.k),et&&p&&!i&&ht.jsx("div",{className:"bw-flash","aria-hidden":!0},`f${et.k}`),zt&&ht.jsx("div",{className:`bw-party ${zt.big?"big":""}`,"aria-hidden":!0,children:!i&&Array.from({length:zt.big?44:26}).map((z,K)=>ht.jsx("i",{style:{left:`${(K*37+7)%100}%`,animationDelay:`${K%11*.06}s`,"--h":`${K*53%360}`,"--w":`${K%5*16-32}px`}},K))},zt.k),x&&ht.jsx("div",{className:"bw-banner",children:n!=null&&n.strike&&x.t.startsWith("STRIKE")?ht.jsx("img",{src:n.strike,alt:"STRIKE"}):x.t},x.n),tt&&ht.jsx(Ou,{stage:tt,status:r.status,eta:Math.round(L*2)/2})]}),ht.jsx("div",{className:"bw-strip",children:M&&!p?ht.jsxs("div",{className:`bw-res ${M.payout>0?M.x>=10?"big":"won":"lost"}`,children:[ht.jsx("span",{className:"bw-res-h",children:ah(l,M.roll.outcome).toUpperCase()}),M.payout>0?ht.jsxs("span",{className:"bw-res-amt",children:[ht.jsxs("b",{children:["+",Gu(M.payout)," ",ht.jsx("i",{children:t})]}),ht.jsxs("em",{children:[ct(M.x),"×"]}),Pl(M.payout,s)&&ht.jsx(Eu,{usd:Pl(M.payout,s),size:"sm"})]}):ht.jsx("span",{className:"bw-res-amt",children:ht.jsxs("b",{className:"dim",children:["no pay in ",bn[l].label]})})]},`r${((nt=k[0])==null?void 0:nt.id)??0}`):ht.jsx("div",{className:"bw-strip-idle",children:p?m?r.status??"Chalking up…":"Rolling…":`${bn[l].label}: ${bn[l].sub} · best ${ct(bt)}×`})}),k.length>0&&ht.jsxs("div",{className:"bw-hist",children:[ht.jsx("span",{children:"LAST FRAMES"}),k.map(z=>ht.jsxs("div",{className:`bw-card ${z.x>0?"w":""}`,title:z.x>0?`${ct(z.x)}×`:"no pay",children:[ht.jsx("div",{className:"bw-card-f",children:z.f.map((K,At)=>ht.jsxs("span",{children:[ht.jsx("i",{children:Tr(K.k1,K.k2,!1)}),K.k2!=null&&ht.jsx("i",{children:Tr(K.k1,K.k2,!0)})]},At))}),ht.jsx("b",{children:z.x>0?`${ct(z.x)}×`:"—"})]},z.id)),(()=>{const z=k.reduce((K,At)=>At.x>((K==null?void 0:K.x)??0)?At:K,null);return z?ht.jsxs("em",{className:"bw-best",children:["BEST ",ct(z.x),"×"]}):null})()]})]}),ht.jsx(Lu,{children:ht.jsxs(Ru,{className:"bw-controls",theme:"bowling",children:[ht.jsx(Uu,{src:Xt,bet:o,setBet:z=>{a(z),Kt.setNote(null)},quick:Kt.quick,busy:p,maxBet:Kt.maxBet}),ht.jsx(Tl,{label:"Mode",hint:bn[l].sub,children:ht.jsx(Al,{value:l,onChange:z=>c(z),disabled:p,cols:4,options:bn.map((z,K)=>({v:K,label:z.label}))})}),ht.jsxs(Tl,{label:"Your line",hint:u===0?"centre":`${Math.round(Math.abs(u)*100)} cm ${u<0?"left":"right"}`,children:[ht.jsx("input",{type:"range",min:-40,max:40,value:Math.round(u*100),onChange:z=>d(Number(z.target.value)/100),disabled:p,className:"bw-range"}),ht.jsx("div",{className:"mt-1.5",children:ht.jsx(Al,{value:h,onChange:z=>f(z),disabled:p,cols:3,options:BS.map(z=>({v:z.v,label:z.label}))})})]}),ht.jsx("div",{className:"bw-pay",children:xt.map(z=>ht.jsxs("div",{className:"bw-pay-row",children:[ht.jsx("span",{children:ah(l,z.o)}),ht.jsxs("em",{children:[(z.p*100).toFixed(z.p<.01?2:1),"%"]}),ht.jsxs("b",{children:[ct(z.bp/1e4*e),"×"]})]},z.o))}),S||!p&&Kt.betN>0&&!r.checking&&r.gate?ht.jsx(Cl,{children:S||r.gate}):ht.jsx(Cl,{tone:"warn",children:Kt.note}),ht.jsxs("div",{className:"flex items-center gap-2",children:[ht.jsx("button",{onClick:()=>D(z=>!z),title:"Turbo",className:`bw-turbo ${P?"on":""}`,children:ht.jsx(Vu,{size:16})}),ht.jsx("button",{onClick:$,disabled:p||!(Kt.betN>0),className:"bw-go flex-1",children:p?ht.jsxs(ht.Fragment,{children:[ht.jsx(Ll,{size:16,className:"animate-spin"})," ",m?r.status??"Sending…":"Rolling…"]}):ht.jsxs(ht.Fragment,{children:[ht.jsx(Hu,{size:16})," ROLL"]})})]}),r.foot??ht.jsx(Pu,{minBet:void 0,decimals:0,extra:ht.jsxs("span",{children:["RTP ",(e*100).toFixed(1),"% · best ",ct(bt),"×"]}),how:ht.jsx(ht.Fragment,{children:"Set your line and hook, then roll one frame: ball 1, then ball 2 at the pins left standing. Pin Count pays 7+ pins, Spare+ pays a spare or strike, Strike pays a strike, Triple Strike bowls three first balls and pays two or three strikes."})})]})})]})}export{Ty as BowlingGame};
