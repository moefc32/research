var fn=Array.isArray,un=Array.prototype.indexOf,Wn=Array.from,Xn=Object.defineProperty,V=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,_n=Object.prototype,cn=Array.prototype,kt=Object.getPrototypeOf,Rt=Object.isExtensible;function Qn(t){return typeof t=="function"}const te=()=>{};function ne(t){return t()}function Pt(t){for(var e=0;e<t.length;e++)t[e]()}const x=2,Ct=4,it=8,gt=16,D=32,B=64,et=128,T=256,rt=512,E=1024,b=2048,M=4096,j=8192,ot=16384,vn=32768,Ft=65536,ee=1<<17,hn=1<<19,Mt=1<<20,pt=1<<21,G=Symbol("$state"),re=Symbol("legacy props"),ae=Symbol("");function Lt(t){return t===this.v}function pn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function qt(t){return!pn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function En(t){throw new Error("https://svelte.dev/e/effect_orphan")}function yn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function le(){throw new Error("https://svelte.dev/e/hydration_failed")}function se(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function fe(){J=!0}const ue=1,ie=2,oe=4,_e=8,ce=16,ve=1,he=2,pe=4,de=8,we=16,Ee=1,ye=2,ge=4,Te=1,me=2,An="[",xn="[!",In="]",Yt={},y=Symbol(),Ae="http://www.w3.org/1999/xhtml",xe="http://www.w3.org/2000/svg";function Rn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let p=null;function Nt(t){p=t}function Ie(t,e=!1,n){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};J&&!e&&(p.l={s:null,u:null,r1:[],r2:mt(!1)}),kn(()=>{r.d=!0})}function Re(t){const e=p;if(e!==null){const i=e.e;if(i!==null){var n=h,r=v;e.e=null;try{for(var a=0;a<i.length;a++){var l=i[a];st(l.effect),H(l.reaction),Zt(l.fn)}}finally{st(n),H(r)}}p=e.p,e.m=!0}return{}}function _t(){return!J||p!==null&&p.l===null}function q(t){if(typeof t!="object"||t===null||G in t)return t;const e=kt(t);if(e!==_n&&e!==cn)return t;var n=new Map,r=fn(t),a=S(0),l=v,i=u=>{var s=v;H(l);var f=u();return H(s),f};return r&&n.set("length",S(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&gn();var _=n.get(s);return _===void 0?(_=i(()=>S(f.value)),n.set(s,_)):O(_,i(()=>q(f.value))),!0},deleteProperty(u,s){var f=n.get(s);if(f===void 0)s in u&&n.set(s,i(()=>S(y)));else{if(r&&typeof s=="string"){var _=n.get("length"),o=Number(s);Number.isInteger(o)&&o<_.v&&O(_,o)}O(f,y),Ot(a)}return!0},get(u,s,f){var A;if(s===G)return t;var _=n.get(s),o=s in u;if(_===void 0&&(!o||(A=V(u,s))!=null&&A.writable)&&(_=i(()=>S(q(o?u[s]:y))),n.set(s,_)),_!==void 0){var c=Y(_);return c===y?void 0:c}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var _=n.get(s);_&&(f.value=Y(_))}else if(f===void 0){var o=n.get(s),c=o==null?void 0:o.v;if(o!==void 0&&c!==y)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return f},has(u,s){var c;if(s===G)return!0;var f=n.get(s),_=f!==void 0&&f.v!==y||Reflect.has(u,s);if(f!==void 0||h!==null&&(!_||(c=V(u,s))!=null&&c.writable)){f===void 0&&(f=i(()=>S(_?q(u[s]):y)),n.set(s,f));var o=Y(f);if(o===y)return!1}return _},set(u,s,f,_){var It;var o=n.get(s),c=s in u;if(r&&s==="length")for(var A=f;A<o.v;A+=1){var Q=n.get(A+"");Q!==void 0?O(Q,y):A in u&&(Q=i(()=>S(y)),n.set(A+"",Q))}o===void 0?(!c||(It=V(u,s))!=null&&It.writable)&&(o=i(()=>S(void 0)),O(o,i(()=>q(f))),n.set(s,o)):(c=o.v!==y,O(o,i(()=>q(f))));var tt=Reflect.getOwnPropertyDescriptor(u,s);if(tt!=null&&tt.set&&tt.set.call(_,f),!c){if(r&&typeof s=="string"){var xt=n.get("length"),ht=Number(s);Number.isInteger(ht)&&ht>=xt.v&&O(xt,ht+1)}Ot(a)}return!0},ownKeys(u){Y(a);var s=Reflect.ownKeys(u).filter(o=>{var c=n.get(o);return c===void 0||c.v!==y});for(var[f,_]of n)_.v!==y&&!(f in u)&&s.push(f);return s},setPrototypeOf(){Tn()}})}function Ot(t,e=1){O(t,t.v+e)}function Tt(t){var e=x|b,n=v!==null&&(v.f&x)!==0?v:null;return h===null||n!==null&&(n.f&T)!==0?e|=T:h.f|=Mt,{ctx:p,deps:null,effects:null,equals:Lt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??h}}function Ne(t){const e=Tt(t);return nn(e),e}function Oe(t){const e=Tt(t);return e.equals=qt,e}function jt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)F(e[n])}}function Nn(t){for(var e=t.parent;e!==null;){if((e.f&x)===0)return e;e=e.parent}return null}function Ht(t){var e,n=h;st(Nn(t));try{jt(t),e=ln(t)}finally{st(n)}return e}function Bt(t){var e=Ht(t),n=(k||(t.f&T)!==0)&&t.deps!==null?M:E;R(t,n),t.equals(e)||(t.v=e,t.wv=rn())}const $=new Map;function mt(t,e){var n={f:0,v:t,reactions:null,equals:Lt,rv:0,wv:0};return n}function S(t,e){const n=mt(t);return nn(n),n}function be(t,e=!1){var r;const n=mt(t);return e||(n.equals=qt),J&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(n),n}function O(t,e,n=!1){v!==null&&!N&&_t()&&(v.f&(x|gt))!==0&&!(w!=null&&w.includes(t))&&mn();let r=n?q(e):e;return On(t,r)}function On(t,e){if(!t.equals(e)){var n=t.v;W?$.set(t,e):$.set(t,n),t.v=e,(t.f&x)!==0&&((t.f&b)!==0&&Ht(t),R(t,(t.f&T)===0?E:M)),t.wv=rn(),Ut(t,b),_t()&&h!==null&&(h.f&E)!==0&&(h.f&(D|B))===0&&(m===null?jn([t]):m.push(t))}return e}function De(t,e=1){var n=Y(t),r=e===1?n++:n--;return O(t,n),r}function Ut(t,e){var n=t.reactions;if(n!==null)for(var r=_t(),a=n.length,l=0;l<a;l++){var i=n[l],u=i.f;(u&b)===0&&(!r&&i===h||(R(i,e),(u&(E|T))!==0&&((u&x)!==0?Ut(i,M):vt(i))))}}function Vt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function Se(t){C=t}let I;function Z(t){if(t===null)throw Vt(),Yt;return I=t}function ke(){return Z(L(I))}function Pe(t){if(C){if(L(I)!==null)throw Vt(),Yt;I=t}}function Ce(t=1){if(C){for(var e=t,n=I;e--;)n=L(n);I=n}}function Fe(){for(var t=0,e=I;;){if(e.nodeType===8){var n=e.data;if(n===In){if(t===0)return e;t-=1}else(n===An||n===xn)&&(t+=1)}var r=L(e);e.remove(),e=r}}var bt,bn,Dn,Gt,Kt;function Me(){if(bt===void 0){bt=window,bn=document,Dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Gt=V(e,"firstChild").get,Kt=V(e,"nextSibling").get,Rt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Rt(n)&&(n.__t=void 0)}}function dt(t=""){return document.createTextNode(t)}function wt(t){return Gt.call(t)}function L(t){return Kt.call(t)}function Le(t,e){if(!C)return wt(t);var n=wt(I);if(n===null)n=I.appendChild(dt());else if(e&&n.nodeType!==3){var r=dt();return n==null||n.before(r),Z(r),r}return Z(n),n}function qe(t,e){if(!C){var n=wt(t);return n instanceof Comment&&n.data===""?L(n):n}return I}function Ye(t,e=1,n=!1){let r=C?I:t;for(var a;e--;)a=r,r=L(r);if(!C)return r;var l=r==null?void 0:r.nodeType;if(n&&l!==3){var i=dt();return r===null?a==null||a.after(i):r.before(i),Z(i),i}return Z(r),r}function je(t){t.textContent=""}function $t(t){h===null&&v===null&&En(),v!==null&&(v.f&T)!==0&&h===null&&wn(),W&&dn()}function Sn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function U(t,e,n,r=!0){var a=h,l={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|b,first:null,fn:e,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(n)try{At(l),l.f|=vn}catch(s){throw F(l),s}else e!==null&&vt(l);var i=n&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Mt|et))===0;if(!i&&r&&(a!==null&&Sn(l,a),v!==null&&(v.f&x)!==0)){var u=v;(u.effects??(u.effects=[])).push(l)}return l}function kn(t){const e=U(it,null,!1);return R(e,E),e.teardown=t,e}function Pn(t){$t();var e=h!==null&&(h.f&D)!==0&&p!==null&&!p.m;if(e){var n=p;(n.e??(n.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=Zt(t);return r}}function He(t){return $t(),Cn(t)}function Be(t){const e=U(B,t,!0);return(n={})=>new Promise(r=>{n.outro?Ln(e,()=>{F(e),r(void 0)}):(F(e),r(void 0))})}function Zt(t){return U(Ct,t,!1)}function Cn(t){return U(it,t,!0)}function Ue(t,e=[],n=Tt){const r=e.map(n);return Fn(()=>t(...r.map(Y)))}function Fn(t,e=0){return U(it|gt|e,t,!0)}function Ve(t,e=!0){return U(it|D,t,!0,e)}function zt(t){var e=t.teardown;if(e!==null){const n=W,r=v;St(!0),H(null);try{e.call(null)}finally{St(n),H(r)}}}function Jt(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&B)!==0?n.parent=null:F(n,e),n=r}}function Mn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&D)===0&&F(e),e=n}}function F(t,e=!0){var n=!1;if((e||(t.f&hn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:L(r);r.remove(),r=l}n=!0}Jt(t,e&&!n),ut(t,0),R(t,ot);var i=t.transitions;if(i!==null)for(const s of i)s.stop();zt(t);var u=t.parent;u!==null&&u.first!==null&&Wt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Wt(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Ln(t,e){var n=[];Xt(t,n,!0),qn(n,()=>{F(t),e&&e()})}function qn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function Xt(t,e,n){if((t.f&j)===0){if(t.f^=j,t.transitions!==null)for(const i of t.transitions)(i.is_global||n)&&e.push(i);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Ft)!==0||(r.f&D)!==0;Xt(r,e,l?n:!1),r=a}}}function Ge(t){Qt(t,!0)}function Qt(t,e){if((t.f&j)!==0){t.f^=j,(t.f&E)===0&&(t.f^=E),X(t)&&(R(t,b),vt(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&Ft)!==0||(n.f&D)!==0;Qt(n,a?e:!1),n=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&l.in()}}let z=[],Et=[];function tn(){var t=z;z=[],Pt(t)}function Yn(){var t=Et;Et=[],Pt(t)}function Ke(t){z.length===0&&queueMicrotask(tn),z.push(t)}function Dt(){z.length>0&&tn(),Et.length>0&&Yn()}let nt=!1,at=!1,lt=null,P=!1,W=!1;function St(t){W=t}let K=[];let v=null,N=!1;function H(t){v=t}let h=null;function st(t){h=t}let w=null;function nn(t){v!==null&&v.f&pt&&(w===null?w=[t]:w.push(t))}let d=null,g=0,m=null;function jn(t){m=t}let en=1,ft=0,k=!1;function rn(){return++en}function X(t){var o;var e=t.f;if((e&b)!==0)return!0;if((e&M)!==0){var n=t.deps,r=(e&T)!==0;if(n!==null){var a,l,i=(e&rt)!==0,u=r&&h!==null&&!k,s=n.length;if(i||u){var f=t,_=f.parent;for(a=0;a<s;a++)l=n[a],(i||!((o=l==null?void 0:l.reactions)!=null&&o.includes(f)))&&(l.reactions??(l.reactions=[])).push(f);i&&(f.f^=rt),u&&_!==null&&(_.f&T)===0&&(f.f^=T)}for(a=0;a<s;a++)if(l=n[a],X(l)&&Bt(l),l.wv>t.wv)return!0}(!r||h!==null&&!k)&&R(t,E)}return!1}function Hn(t,e){for(var n=e;n!==null;){if((n.f&et)!==0)try{n.fn(t);return}catch{n.f^=et}n=n.parent}throw nt=!1,t}function Bn(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function ct(t,e,n,r){if(nt){if(n===null&&(nt=!1),Bn(e))throw t;return}n!==null&&(nt=!0);{Hn(t,e);return}}function an(t,e,n=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];w!=null&&w.includes(t)||((l.f&x)!==0?an(l,e,!1):e===l&&(n?R(l,b):(l.f&E)!==0&&R(l,M),vt(l)))}}function ln(t){var A;var e=d,n=g,r=m,a=v,l=k,i=w,u=p,s=N,f=t.f;d=null,g=0,m=null,k=(f&T)!==0&&(N||!P||v===null),v=(f&(D|B))===0?t:null,w=null,Nt(t.ctx),N=!1,ft++,t.f|=pt;try{var _=(0,t.fn)(),o=t.deps;if(d!==null){var c;if(ut(t,g),o!==null&&g>0)for(o.length=g+d.length,c=0;c<d.length;c++)o[g+c]=d[c];else t.deps=o=d;if(!k)for(c=g;c<o.length;c++)((A=o[c]).reactions??(A.reactions=[])).push(t)}else o!==null&&g<o.length&&(ut(t,g),o.length=g);if(_t()&&m!==null&&!N&&o!==null&&(t.f&(x|M|b))===0)for(c=0;c<m.length;c++)an(m[c],t);return a!==t&&(ft++,m!==null&&(r===null?r=m:r.push(...m))),_}finally{d=e,g=n,m=r,v=a,k=l,w=i,Nt(u),N=s,t.f^=pt}}function Un(t,e){let n=e.reactions;if(n!==null){var r=un.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&x)!==0&&(d===null||!d.includes(e))&&(R(e,M),(e.f&(T|rt))===0&&(e.f^=rt),jt(e),ut(e,0))}function ut(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Un(t,n[r])}function At(t){var e=t.f;if((e&ot)===0){R(t,E);var n=h,r=p,a=P;h=t,P=!0;try{(e&gt)!==0?Mn(t):Jt(t),zt(t);var l=ln(t);t.teardown=typeof l=="function"?l:null,t.wv=en;var i=t.deps,u}catch(s){ct(s,t,n,r||t.ctx)}finally{P=a,h=n}}}function Vn(){try{yn()}catch(t){if(lt!==null)ct(t,lt,null);else throw t}}function sn(){var t=P;try{var e=0;for(P=!0;K.length>0;){e++>1e3&&Vn();var n=K,r=n.length;K=[];for(var a=0;a<r;a++){var l=Kn(n[a]);Gn(l)}$.clear()}}finally{at=!1,P=t,lt=null}}function Gn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(ot|j))===0)try{X(r)&&(At(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Wt(r):r.fn=null))}catch(a){ct(a,r,null,r.ctx)}}}function vt(t){at||(at=!0,queueMicrotask(sn));for(var e=lt=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(B|D))!==0){if((n&E)===0)return;e.f^=E}}K.push(e)}function Kn(t){for(var e=[],n=t;n!==null;){var r=n.f,a=(r&(D|B))!==0,l=a&&(r&E)!==0;if(!l&&(r&j)===0){if((r&Ct)!==0)e.push(n);else if(a)n.f^=E;else{var i=v;try{v=n,X(n)&&At(n)}catch(f){ct(f,n,null,n.ctx)}finally{v=i}}var u=n.first;if(u!==null){n=u;continue}}var s=n.parent;for(n=n.next;n===null&&s!==null;)n=s.next,s=s.parent}return e}function $n(t){var e;for(Dt();K.length>0;)at=!0,sn(),Dt();return e}async function $e(){await Promise.resolve(),$n()}function Y(t){var e=t.f,n=(e&x)!==0;if(v!==null&&!N){if(!(w!=null&&w.includes(t))){var r=v.deps;t.rv<ft&&(t.rv=ft,d===null&&r!==null&&r[g]===t?g++:d===null?d=[t]:(!k||!d.includes(t))&&d.push(t))}}else if(n&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&T)===0&&(a.f^=T)}return n&&(a=t,X(a)&&Bt(a)),W&&$.has(t)?$.get(t):t.v}function Zn(t){var e=N;try{return N=!0,t()}finally{N=e}}const zn=-7169;function R(t,e){t.f=t.f&zn|e}function Ze(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(G in t)yt(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&G in n&&yt(n)}}}function yt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{yt(t[r],e)}catch{}const n=kt(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=on(n);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}function ze(t){p===null&&Rn(),J&&p.l!==null?Jn(p).m.push(t):Pn(()=>{const e=Zn(t);if(typeof e=="function")return e})}function Jn(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}export{$n as $,Se as A,Ge as B,V as C,se as D,Ft as E,Oe as F,qt as G,An as H,q as I,O as J,de as K,ee as L,re as M,J as N,he as O,pe as P,ve as Q,be as R,G as S,we as T,y as U,mt as V,De as W,Qn as X,Zt as Y,Cn as Z,Ke as _,ke as a,Xn as a0,ze as a1,S as a2,$e as a3,Ne as a4,H as a5,st as a6,v as a7,h as a8,kn as a9,ue as aA,On as aB,ie as aC,_e as aD,Xt as aE,qn as aF,F as aG,ce as aH,Ae as aI,kt as aJ,ae as aK,on as aL,xe as aM,pn as aN,fn as aa,dt as ab,hn as ac,L as ad,wt as ae,Dn as af,Te as ag,me as ah,Me as ai,Yt as aj,In as ak,Vt as al,le as am,je as an,Wn as ao,Be as ap,gt as aq,vn as ar,ge as as,Ee as at,te as au,ye as av,Ce as aw,bn as ax,oe as ay,j as az,Fn as b,Ve as c,I as d,p as e,Pn as f,Zn as g,C as h,ne as i,Y as j,Ze as k,Tt as l,fe as m,Ie as n,qe as o,Ln as p,Re as q,Pt as r,Ye as s,Ue as t,He as u,Le as v,Pe as w,xn as x,Fe as y,Z as z};
