import{d as X,w as tt,t as E,a as T,c as at,e as et,s as rt,f as it,g as ot}from"../chunks/C8OQ47bi.js";import{i as D}from"../chunks/COf2Bn32.js";import{D as U,E as nt,at as st,au as ct,a1 as ft,g as vt,av as dt,aw as lt,a0 as ut,a3 as pt,ax as I,ay as ht,a9 as W,aa as H,ab as mt,n as L,t as M,q,w as C,v as F,j as k,o as B,l as P,s as N,az as K,aA as gt}from"../chunks/BD_HF1J2.js";import{c as _t,o as wt,D as xt,e as bt,t as yt,s as j,T as Tt,a as Ct}from"../chunks/BiMveAVa.js";import{p as At,i as St,s as kt}from"../chunks/CLDzGfql.js";import{c as Ft}from"../chunks/D_NxLT2A.js";import{g as It}from"../chunks/DpsNWn0i.js";const Nt=()=>performance.now(),x={tick:a=>requestAnimationFrame(a),now:()=>Nt(),tasks:new Set};function V(){const a=x.now();x.tasks.forEach(t=>{t.c(a)||(x.tasks.delete(t),t.f())}),x.tasks.size!==0&&x.tick(V)}function Et(a){let t;return x.tasks.size===0&&x.tick(V),{promise:new Promise(e=>{x.tasks.add(t={c:a,f:e})}),abort(){x.tasks.delete(t)}}}function z(a,t){tt(()=>{a.dispatchEvent(new CustomEvent(t))})}function Ot(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function Y(a){const t={},e=a.split(";");for(const i of e){const[r,n]=i.split(":");if(!r||n===void 0)break;const o=Ot(r.trim());t[o]=n.trim()}return t}const Rt=a=>a;function zt(a,t,e){var i=_t,r,n,o,c=null;i.a??(i.a={element:a,measure(){r=this.element.getBoundingClientRect()},apply(){if(o==null||o.abort(),n=this.element.getBoundingClientRect(),r.left!==n.left||r.right!==n.right||r.top!==n.top||r.bottom!==n.bottom){const l=t()(this.element,{from:r,to:n},e==null?void 0:e());o=$(this.element,l,void 0,1,()=>{o==null||o.abort(),o=void 0})}},fix(){if(!a.getAnimations().length){var{position:l,width:u,height:d}=getComputedStyle(a);if(l!=="absolute"&&l!=="fixed"){var f=a.style;c={position:f.position,width:f.width,height:f.height,transform:f.transform},f.position="absolute",f.width=u,f.height=d;var s=a.getBoundingClientRect();if(r.left!==s.left||r.top!==s.top){var v=`translate(${r.left-s.left}px, ${r.top-s.top}px)`;f.transform=f.transform?`${f.transform} ${v}`:v}}}},unfix(){if(c){var l=a.style;l.position=c.position,l.width=c.width,l.height=c.height,l.transform=c.transform}}}),i.a.element=a}function Z(a,t,e,i){var r=(a&lt)!==0,n=(a&ht)!==0,o=r&&n,c=(a&dt)!==0,l=o?"both":r?"in":"out",u,d=t.inert,f=t.style.overflow,s,v;function w(){var h=mt,A=U;W(null),H(null);try{return u??(u=e()(t,(i==null?void 0:i())??{},{direction:l}))}finally{W(h),H(A)}}var m={is_global:c,in(){var h;if(t.inert=d,!r){v==null||v.abort(),(h=v==null?void 0:v.reset)==null||h.call(v);return}n||s==null||s.abort(),z(t,"introstart"),s=$(t,w(),v,1,()=>{z(t,"introend"),s==null||s.abort(),s=u=void 0,t.style.overflow=f})},out(h){if(!n){h==null||h(),u=void 0;return}t.inert=!0,z(t,"outrostart"),v=$(t,w(),s,0,()=>{z(t,"outroend"),h==null||h()})},stop:()=>{s==null||s.abort(),v==null||v.abort()}},p=U;if((p.transitions??(p.transitions=[])).push(m),r&&X){var g=c;if(!g){for(var _=p.parent;_&&_.f&nt;)for(;(_=_.parent)&&!(_.f&st););g=!_||(_.f&ct)!==0}g&&ft(()=>{vt(()=>m.in())})}}function $(a,t,e,i,r){var n=i===1;if(ut(t)){var o,c=!1;return pt(()=>{if(!c){var p=t({direction:n?"in":"out"});o=$(a,p,e,i,r)}}),{abort:()=>{c=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(e==null||e.deactivate(),!(t!=null&&t.duration))return r(),{abort:I,deactivate:I,reset:I,t:()=>i};const{delay:l=0,css:u,tick:d,easing:f=Rt}=t;var s=[];if(n&&e===void 0&&(d&&d(0,1),u)){var v=Y(u(0,1));s.push(v,v)}var w=()=>1-i,m=a.animate(s,{duration:l});return m.onfinish=()=>{var p=(e==null?void 0:e.t())??1-i;e==null||e.abort();var g=i-p,_=t.duration*Math.abs(g),h=[];if(_>0){var A=!1;if(u)for(var O=Math.ceil(_/16.666666666666668),b=0;b<=O;b+=1){var y=p+g*f(b/O),R=Y(u(y,1-y));h.push(R),A||(A=R.overflow==="hidden")}A&&(a.style.overflow="hidden"),w=()=>{var S=m.currentTime;return p+g*f(S/_)},d&&Et(()=>{if(m.playState!=="running")return!1;var S=w();return d(S,1-S),!0})}m=a.animate(h,{duration:_,fill:"forwards"}),m.onfinish=()=>{w=()=>i,d==null||d(i,1-i),r()}},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=I)},deactivate:()=>{r=I},reset:()=>{i===0&&(d==null||d(1,0))},t:()=>w()}}const Mt=!0,ea=Object.freeze(Object.defineProperty({__proto__:null,prerender:Mt},Symbol.toStringTag,{value:"Module"}));function jt(a){const t=a-1;return t*t*t+1}function G(a,{delay:t=0,duration:e=400,easing:i=jt,start:r=0,opacity:n=0}={}){const o=getComputedStyle(a),c=+o.opacity,l=o.transform==="none"?"":o.transform,u=1-r,d=c*(1-n);return{delay:t,duration:e,easing:i,css:(f,s)=>`
			transform: ${l} scale(${1-u*s});
			opacity: ${c-d*s}
		`}}function $t(a){const t=a-1;return t*t*t+1}function Lt(a,{from:t,to:e},i={}){var{delay:r=0,duration:n=b=>Math.sqrt(b)*120,easing:o=$t}=i,c=getComputedStyle(a),l=c.transform==="none"?"":c.transform,[u,d]=c.transformOrigin.split(" ").map(parseFloat);u/=a.clientWidth,d/=a.clientHeight;var f=qt(a),s=a.clientWidth/e.width/f,v=a.clientHeight/e.height/f,w=t.left+t.width*u,m=t.top+t.height*d,p=e.left+e.width*u,g=e.top+e.height*d,_=(w-p)*s,h=(m-g)*v,A=t.width/e.width,O=t.height/e.height;return{delay:r,duration:typeof n=="function"?n(Math.sqrt(_*_+h*h)):n,easing:o,css:(b,y)=>{var R=y*_,S=y*h,J=b+y*A,Q=b+y*O;return`transform: ${l} translate(${R}px, ${S}px) scale(${J}, ${Q});`}}}function qt(a){if("currentCSSZoom"in a)return a.currentCSSZoom;for(var t=a,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var Bt=E('<div class="svoast-wrapper svelte-rj1rfm"><!></div>'),Dt=E('<div class="svoast-container svelte-rj1rfm"></div>');function Ut(a,t){L(t,!0);let e=At(t,"position",3,"bottom-left");const i=wt(xt,t.animation);var r=Dt();bt(r,29,()=>yt.toasts,n=>n.id,(n,o)=>{var c=Bt(),l=F(c);{var u=f=>{var s=at();const v=P(()=>{const{component:p,...g}=k(o);return{_:p,props:g}}),w=P(()=>{var p,g;return((g=(p=k(o))==null?void 0:p.component)==null?void 0:g[0])||t.component});var m=B(s);Ft(m,()=>k(w),(p,g)=>{g(p,kt(()=>k(v).props))}),T(f,s)},d=f=>{Tt(f,{get toast(){return k(o)}})};St(l,f=>{var s,v;(v=(s=k(o))==null?void 0:s.component)!=null&&v[0]||t.component?f(u):f(d,!1)})}C(c),M(()=>j(c,"data-position",e())),Z(1,c,()=>G,()=>({start:i.start,opacity:i.opacity,duration:i.duration})),Z(2,c,()=>G,()=>({duration:i.duration})),zt(c,()=>Lt,()=>({duration:i.duration})),T(n,c)}),C(r),M(()=>j(r,"data-position",e())),T(a,r),q()}var Wt=E('<header class="fixed px-6 py-[15px] top-0 left-0 w-full z-1000"><div class="flex justify-center items-center px-6 h-[70px] bg-white/85 border-[1px] border-gray-300 rounded-xl shadow-lg backdrop-blur-xs"><button class="text-2xl me-auto cursor-pointer outline-none ring-0 active:ring-0 focus:ring-0"> </button></div></header>');function Ht(a,t){L(t,!1);function e(){window.location.pathname==="/"?window.scrollTo({top:0,behavior:"smooth"}):It("/")}D();var i=Wt(),r=F(i),n=F(r),o=F(n,!0);C(n),C(r),C(i),M(()=>rt(o,"Research")),et("click",n,()=>e()),T(a,i),q()}var Pt=E('<footer class="flex flex-col md:flex-row mx-6 mt-5 px-6 py-5 border-t-[1px] border-gray-300 text-gray-500 text-center"><div class="flex-1 text-center md:text-left"><a href="https://mf-chan.com" target="_blank" class="text-blue-500 hover:text-green-500">Mfc</a> </div> <div class="flex-1 text-center md:text-right">This web page licensed under <a href="https://opensource.org/licenses/MIT" target="_blank" class="text-blue-500 hover:text-green-500">MIT</a></div></footer>');function Yt(a,t){L(t,!1);const e=new Date().getFullYear(),i=(e>2018?"2018 - ":"")+e;D();var r=Pt(),n=F(r),o=N(F(n));o.nodeValue=` © ${i??""}`,C(n),K(2),C(r),T(a,r),q()}var Zt=ot(`<meta property="og:title"> <meta property="og:site_name" content="Faizal Chan's Website"> <meta property="og:type" content="website"> <meta property="og:description" content="Collection of research publications by Faizal Chan."> <meta property="og:image"> <script src="https://www.googletagmanager.com/gtag/js?id=UA-131278165-1" async><\/script> <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'UA-131278165-1');
    <\/script>`,1),Gt=E("<!> <!> <!> <!>",1);function ra(a,t){L(t,!1);const e="https://research.mf-chan.com/og.png";D();var i=Gt();it(l=>{var u=Zt(),d=B(u),f=N(d,8);j(f,"content",e),K(4),M(()=>{gt.title=`
        Research | Faizal Chan's Website
    `,j(d,"content","Research")}),T(l,u)});var r=B(i);Ht(r,{});var n=N(r,2);Ct(n,t,"default",{});var o=N(n,2);Yt(o,{});var c=N(o,2);Ut(c,{position:"bottom-center"}),T(a,i),q()}export{ra as component,ea as universal};
