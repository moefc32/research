import{i as qe,j as Le,k as ke,t as B,a as P,s as ae,n as Ce,c as ge}from"../chunks/6zaghs6r.js";import{i as he}from"../chunks/HV0njaDE.js";import{h as te,a as je,d as be,b as De,E as We,c as He,aB as Fe,ah as Be,ae as Ye,M as Me,L as Oe,D as Ie,p as Re,N as Ge,aC as Ve,az as ze,s as N,v as k,w as h,t as oe,j,n as ye,o as ve,Q as Je,q as we,a7 as Ke,B as ue,aD as fe}from"../chunks/C2O07fyf.js";import{b as Se,c as $e,e as le,i as de,a as xe,d as Ne,s as re,f as Ee,t as Qe}from"../chunks/dkxbmFY5.js";import{p as V,l as pe,s as Ae,i as Ue}from"../chunks/BJyKr7we.js";function Ze(w,b,m,i,r,n){let e=te;te&&je();var s,p,t=null;te&&be.nodeType===1&&(t=be,je());var u=te?be:w,a,d=$e;De(()=>{const l=b()||null;var v=Fe;if(l!==s){var y=$e;Se(d),a&&(l===null?Re(a,()=>{a=null,p=null}):l===p?Ge(a):(Ve(a),ke(!1))),l&&l!==p&&(a=He(()=>{if(t=te?t:document.createElementNS(v,l),qe(t,t),i){te&&Le(l)&&t.append(document.createComment(""));var g=te?Be(t):t.appendChild(Ye());te&&(g===null?Me(!1):Oe(g)),i(t,g)}Ie.nodes_end=t,u.before(t)})),s=l,s&&(p=s),ke(!0),Se(y)}},We),e&&(Me(!0),Oe(u))}var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function et(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var Pe={exports:{}};(function(w,b){(function(m,i){w.exports=i()})(Xe,function(){return function(m){function i(n){if(r[n])return r[n].exports;var e=r[n]={exports:{},id:n,loaded:!1};return m[n].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}var r={};return i.m=m,i.c=r,i.p="dist/",i(0)}([function(m,i,r){function n(f){return f&&f.__esModule?f:{default:f}}var e=Object.assign||function(f){for(var E=1;E<arguments.length;E++){var F=arguments[E];for(var U in F)Object.prototype.hasOwnProperty.call(F,U)&&(f[U]=F[U])}return f},s=r(1),p=(n(s),r(6)),t=n(p),u=r(7),a=n(u),d=r(8),l=n(d),v=r(9),y=n(v),g=r(10),S=n(g),T=r(11),A=n(T),D=r(14),Y=n(D),q=[],J=!1,M={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},H=function(){var f=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(f&&(J=!0),J)return q=(0,A.default)(q,M),(0,S.default)(q,M.once),q},Q=function(){q=(0,Y.default)(),H()},c=function(){q.forEach(function(f,E){f.node.removeAttribute("data-aos"),f.node.removeAttribute("data-aos-easing"),f.node.removeAttribute("data-aos-duration"),f.node.removeAttribute("data-aos-delay")})},o=function(f){return f===!0||f==="mobile"&&y.default.mobile()||f==="phone"&&y.default.phone()||f==="tablet"&&y.default.tablet()||typeof f=="function"&&f()===!0},x=function(f){M=e(M,f),q=(0,Y.default)();var E=document.all&&!window.atob;return o(M.disable)||E?c():(M.disableMutationObserver||l.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),M.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",M.easing),document.querySelector("body").setAttribute("data-aos-duration",M.duration),document.querySelector("body").setAttribute("data-aos-delay",M.delay),M.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?H(!0):M.startEvent==="load"?window.addEventListener(M.startEvent,function(){H(!0)}):document.addEventListener(M.startEvent,function(){H(!0)}),window.addEventListener("resize",(0,a.default)(H,M.debounceDelay,!0)),window.addEventListener("orientationchange",(0,a.default)(H,M.debounceDelay,!0)),window.addEventListener("scroll",(0,t.default)(function(){(0,S.default)(q,M.once)},M.throttleDelay)),M.disableMutationObserver||l.default.ready("[data-aos]",Q),q)};m.exports={init:x,refresh:H,refreshHard:Q}},function(m,i){},,,,,function(m,i){(function(r){function n(o,x,f){function E(_){var L=W,ee=R;return W=R=void 0,Z=_,z=o.apply(ee,L)}function F(_){return Z=_,$=setTimeout(ie,x),X?E(_):z}function U(_){var L=_-C,ee=_-Z,_e=x-L;return K?Q(_e,G-ee):_e}function ne(_){var L=_-C,ee=_-Z;return C===void 0||L>=x||L<0||K&&ee>=G}function ie(){var _=c();return ne(_)?ce(_):void($=setTimeout(ie,U(_)))}function ce(_){return $=void 0,O&&W?E(_):(W=R=void 0,z)}function me(){$!==void 0&&clearTimeout($),Z=0,W=C=R=$=void 0}function se(){return $===void 0?z:ce(c())}function I(){var _=c(),L=ne(_);if(W=arguments,R=this,C=_,L){if($===void 0)return F(C);if(K)return $=setTimeout(ie,x),E(C)}return $===void 0&&($=setTimeout(ie,x)),z}var W,R,G,z,$,C,Z=0,X=!1,K=!1,O=!0;if(typeof o!="function")throw new TypeError(d);return x=u(x)||0,s(f)&&(X=!!f.leading,K="maxWait"in f,G=K?H(u(f.maxWait)||0,x):G,O="trailing"in f?!!f.trailing:O),I.cancel=me,I.flush=se,I}function e(o,x,f){var E=!0,F=!0;if(typeof o!="function")throw new TypeError(d);return s(f)&&(E="leading"in f?!!f.leading:E,F="trailing"in f?!!f.trailing:F),n(o,x,{leading:E,maxWait:x,trailing:F})}function s(o){var x=typeof o>"u"?"undefined":a(o);return!!o&&(x=="object"||x=="function")}function p(o){return!!o&&(typeof o>"u"?"undefined":a(o))=="object"}function t(o){return(typeof o>"u"?"undefined":a(o))=="symbol"||p(o)&&M.call(o)==v}function u(o){if(typeof o=="number")return o;if(t(o))return l;if(s(o)){var x=typeof o.valueOf=="function"?o.valueOf():o;o=s(x)?x+"":x}if(typeof o!="string")return o===0?o:+o;o=o.replace(y,"");var f=S.test(o);return f||T.test(o)?A(o.slice(2),f?2:8):g.test(o)?l:+o}var a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d="Expected a function",l=NaN,v="[object Symbol]",y=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,T=/^0o[0-7]+$/i,A=parseInt,D=(typeof r>"u"?"undefined":a(r))=="object"&&r&&r.Object===Object&&r,Y=(typeof self>"u"?"undefined":a(self))=="object"&&self&&self.Object===Object&&self,q=D||Y||Function("return this")(),J=Object.prototype,M=J.toString,H=Math.max,Q=Math.min,c=function(){return q.Date.now()};m.exports=e}).call(i,function(){return this}())},function(m,i){(function(r){function n(c,o,x){function f(O){var _=I,L=W;return I=W=void 0,C=O,G=c.apply(L,_)}function E(O){return C=O,z=setTimeout(ne,o),Z?f(O):G}function F(O){var _=O-$,L=O-C,ee=o-_;return X?H(ee,R-L):ee}function U(O){var _=O-$,L=O-C;return $===void 0||_>=o||_<0||X&&L>=R}function ne(){var O=Q();return U(O)?ie(O):void(z=setTimeout(ne,F(O)))}function ie(O){return z=void 0,K&&I?f(O):(I=W=void 0,G)}function ce(){z!==void 0&&clearTimeout(z),C=0,I=$=W=z=void 0}function me(){return z===void 0?G:ie(Q())}function se(){var O=Q(),_=U(O);if(I=arguments,W=this,$=O,_){if(z===void 0)return E($);if(X)return z=setTimeout(ne,o),f($)}return z===void 0&&(z=setTimeout(ne,o)),G}var I,W,R,G,z,$,C=0,Z=!1,X=!1,K=!0;if(typeof c!="function")throw new TypeError(a);return o=t(o)||0,e(x)&&(Z=!!x.leading,X="maxWait"in x,R=X?M(t(x.maxWait)||0,o):R,K="trailing"in x?!!x.trailing:K),se.cancel=ce,se.flush=me,se}function e(c){var o=typeof c>"u"?"undefined":u(c);return!!c&&(o=="object"||o=="function")}function s(c){return!!c&&(typeof c>"u"?"undefined":u(c))=="object"}function p(c){return(typeof c>"u"?"undefined":u(c))=="symbol"||s(c)&&J.call(c)==l}function t(c){if(typeof c=="number")return c;if(p(c))return d;if(e(c)){var o=typeof c.valueOf=="function"?c.valueOf():c;c=e(o)?o+"":o}if(typeof c!="string")return c===0?c:+c;c=c.replace(v,"");var x=g.test(c);return x||S.test(c)?T(c.slice(2),x?2:8):y.test(c)?d:+c}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a="Expected a function",d=NaN,l="[object Symbol]",v=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,S=/^0o[0-7]+$/i,T=parseInt,A=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,D=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,Y=A||D||Function("return this")(),q=Object.prototype,J=q.toString,M=Math.max,H=Math.min,Q=function(){return Y.Date.now()};m.exports=n}).call(i,function(){return this}())},function(m,i){function r(u){var a=void 0,d=void 0;for(a=0;a<u.length;a+=1)if(d=u[a],d.dataset&&d.dataset.aos||d.children&&r(d.children))return!0;return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function e(){return!!n()}function s(u,a){var d=window.document,l=n(),v=new l(p);t=a,v.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(u){u&&u.forEach(function(a){var d=Array.prototype.slice.call(a.addedNodes),l=Array.prototype.slice.call(a.removedNodes),v=d.concat(l);if(r(v))return t()})}Object.defineProperty(i,"__esModule",{value:!0});var t=function(){};i.default={isSupported:e,ready:s}},function(m,i){function r(d,l){if(!(d instanceof l))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var e=function(){function d(l,v){for(var y=0;y<v.length;y++){var g=v[y];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(l,g.key,g)}}return function(l,v,y){return v&&d(l.prototype,v),y&&d(l,y),l}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,t=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=function(){function d(){r(this,d)}return e(d,[{key:"phone",value:function(){var l=n();return!(!s.test(l)&&!p.test(l.substr(0,4)))}},{key:"mobile",value:function(){var l=n();return!(!t.test(l)&&!u.test(l.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();i.default=new a},function(m,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(e,s,p){var t=e.node.getAttribute("data-aos-once");s>e.position?e.node.classList.add("aos-animate"):typeof t<"u"&&(t==="false"||!p&&t!=="true")&&e.node.classList.remove("aos-animate")},n=function(e,s){var p=window.pageYOffset,t=window.innerHeight;e.forEach(function(u,a){r(u,t+p,s)})};i.default=n},function(m,i,r){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var e=r(12),s=n(e),p=function(t,u){return t.forEach(function(a,d){a.node.classList.add("aos-init"),a.position=(0,s.default)(a.node,u.offset)}),t};i.default=p},function(m,i,r){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var e=r(13),s=n(e),p=function(t,u){var a=0,d=0,l=window.innerHeight,v={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(d=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(t=document.querySelectorAll(v.anchor)[0]),a=(0,s.default)(t).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=t.offsetHeight/2;break;case"bottom-bottom":a+=t.offsetHeight;break;case"top-center":a+=l/2;break;case"bottom-center":a+=l/2+t.offsetHeight;break;case"center-center":a+=l/2+t.offsetHeight/2;break;case"top-top":a+=l;break;case"bottom-top":a+=t.offsetHeight+l;break;case"center-top":a+=t.offsetHeight/2+l}return v.anchorPlacement||v.offset||isNaN(u)||(d=u),a+d};i.default=p},function(m,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(n){for(var e=0,s=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)e+=n.offsetLeft-(n.tagName!="BODY"?n.scrollLeft:0),s+=n.offsetTop-(n.tagName!="BODY"?n.scrollTop:0),n=n.offsetParent;return{top:s,left:e}};i.default=r},function(m,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(n){return n=n||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(n,function(e){return{node:e}})};i.default=r}])})})(Pe);var tt=Pe.exports;const at=et(tt);function rt(w){if(!w)return"-";const b=new Date(w);if(isNaN(b.getTime()))return"-";const m={weekday:"long",day:"numeric",month:"long",year:"numeric"};return b.toLocaleString("en-US",m).trim()}var ot=B('<section class="mb-5 px-3 pt-[120px] pb-5 bg-[linear-gradient(to_bottom_left,rgba(33,150,243,0.75),rgba(76,175,80,0.75))] bg-fixed text-white text-center h-[250px]"></section> <div class="flex flex-col items-center gap-4 mx-12 -mt-36"><div class="avatar"><div class="w-44 border-white border-4 rounded-full"><img src="/og.png" alt="Faizal Chan."></div></div> <div class="flex flex-col items-center gap-1"><div class="text-3xl">Faizal Chan.</div> <div class="text-gray-500">Researcher, Non-Fiction Writer</div></div> <hr class="my-1 bg-gray-300 w-[50px] h-[5px] border-0"></div>',1);function nt(w){var b=ot();ze(2),P(w,b)}var it=B('<div class="card flex gap-4 p-4 w-full border-[1px] border-gray-300 shadow-lg" data-aos="fade-up"><div class="flex flex-col gap-1"><span class="text-xl truncate w-full"> </span> <span class="text-gray-500 truncate w-full"> </span></div> <span class="badge badge-sm badge-success text-white font-semibold"> </span></div>'),st=B('<div class="flex flex-col gap-6 w-full lg:w-1/2"><h2 class="pb-2 text-lg border-b-[1px] border-gray-300">Educational Background</h2> <div class="flex flex-col gap-4"></div></div>');function lt(w,b){let m=V(b,"education",8);var i=st(),r=N(k(i),2);le(r,5,m,de,(n,e)=>{var s=it(),p=k(s),t=k(p),u=k(t,!0);h(t);var a=N(t,2),d=k(a);h(a),h(p);var l=N(p,2),v=k(l);h(l),h(s),oe(()=>{ae(u,j(e).title),ae(d,`${j(e).department??""}, ${j(e).university??""}`),ae(v,`${j(e).startYear??""} - ${j(e).endYear??""}`)}),P(n,s)}),h(r),h(i),P(w,i)}/**
 * @license lucide-svelte v0.461.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ct=Ce("<svg><!><!></svg>");function Te(w,b){const m=pe(b,["children","$$slots","$$events","$$legacy"]),i=pe(m,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ye(b,!1);let r=V(b,"name",8,void 0),n=V(b,"color",8,"currentColor"),e=V(b,"size",8,24),s=V(b,"strokeWidth",8,2),p=V(b,"absoluteStrokeWidth",8,!1),t=V(b,"iconNode",24,()=>[]);const u=(...y)=>y.filter((g,S,T)=>!!g&&T.indexOf(g)===S).join(" ");he();var a=ct();let d;var l=k(a);le(l,1,t,de,(y,g)=>{let S=()=>j(g)[0],T=()=>j(g)[1];var A=ge(),D=ve(A);Ze(D,S,!0,(Y,q)=>{let J;oe(()=>J=Ne(Y,J,{...T()}))}),P(y,A)});var v=N(l);xe(v,b,"default",{}),h(a),oe((y,g)=>d=Ne(a,d,{...dt,...i,width:e(),height:e(),stroke:n(),"stroke-width":y,class:g}),[()=>p()?Number(s())*24/Number(e()):s(),()=>u("lucide-icon","lucide",r()?`lucide-${r()}`:"",m.class)],Je),P(w,a),we()}function ut(w,b){const m=pe(b,["children","$$slots","$$events","$$legacy"]);Te(w,Ae({name:"calendar-days"},()=>m,{iconNode:[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]],children:(r,n)=>{var e=ge(),s=ve(e);xe(s,b,"default",{}),P(r,e)},$$slots:{default:!0}}))}function ft(w,b){const m=pe(b,["children","$$slots","$$events","$$legacy"]);Te(w,Ae({name:"file"},()=>m,{iconNode:[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]],children:(r,n)=>{var e=ge(),s=ve(e);xe(s,b,"default",{}),P(r,e)},$$slots:{default:!0}}))}var pt=B('<span class="text-gray-500 text-sm truncate w-full"> </span>'),vt=B('<div class="flex"><div class="px-3 pt-[5px]"><!></div> <div class="flex flex-col gap-2 w-full"><div class="text-lg line-clamp-2 w-full"><a target="_blank"> </a></div> <div class="flex items-center gap-2"><span class="badge badge-sm badge-warning font-semibold"> </span> <!></div></div></div>'),mt=B('<div class="flex flex-col gap-6 w-full lg:w-1/2"><h2 class="pb-2 text-lg border-b-[1px] border-gray-300">Scientific Publications</h2> <div class="flex flex-col gap-4 lg:max-h-[320px] overflow-y-auto"></div></div>');function bt(w,b){let m=V(b,"publication",8);var i=mt(),r=N(k(i),2);le(r,5,m,de,(n,e)=>{var s=vt(),p=k(s),t=k(p);ft(t,{size:18}),h(p);var u=N(p,2),a=k(u),d=k(a),l=k(d,!0);h(d),h(a);var v=N(a,2),y=k(v),g=k(y,!0);h(y);var S=N(y,2);{var T=A=>{var D=pt(),Y=k(D,!0);h(D),oe(()=>{re(D,"title",j(e).journal),ae(Y,j(e).journal)}),P(A,D)};Ue(S,A=>{j(e).journal&&A(T)})}h(v),h(u),h(s),oe(()=>{re(a,"title",j(e).title),re(d,"href",j(e).url),ae(l,j(e).title),ae(g,j(e).year)}),P(n,s)}),h(r),h(i),P(w,i)}var gt=B('<div class="card flex gap-4 p-4 w-full border-[1px] border-gray-300 shadow-lg" data-aos="fade-up"><a target="_blank" class="block bg-contain! w-full aspect-9/1"></a></div>'),ht=B('<div class="flex flex-col gap-6 w-full"><h2 class="pb-2 text-lg border-b-[1px] border-gray-300">Research Portfolio Platforms</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"></div></div>');function yt(w,b){let m=V(b,"platform",8);var i=ht(),r=N(k(i),2);le(r,5,m,de,(n,e)=>{var s=gt(),p=k(s);h(s),oe(()=>{re(s,"title",j(e).name),re(p,"href",j(e).link),Ee(p,`background: url(/platform/${j(e).class??""}.webp) center center no-repeat;`)}),P(n,s)}),h(r),h(i),P(w,i)}var wt=B('<div class="flex gap-3" data-aos="fade-up"><div class="bg-cover! w-[250px] aspect-2/1 rounded-sm border-[1px] border-gray-300"></div> <div class="flex flex-col gap-2 w-full"><div class="text-xl line-clamp-2 w-full"><a target="_blank"> </a></div> <div class="flex items-center gap-2 text-gray-500"><!> <span class="text-sm"> </span></div></div></div>'),xt=B('<div class="flex flex-col gap-6 w-full lg:w-2/3"><h2 class="pb-2 text-lg border-b-[1px] border-gray-300">Latest Article</h2> <div class="flex flex-col gap-4"></div> <a target="_blank" class="btn btn-primary self-center">Browse More...</a></div>');function _t(w,b){ye(b,!1);let m=V(b,"medium",8);he();var i=xt(),r=N(k(i),2);le(r,5,()=>m().posts,de,(e,s)=>{var p=wt(),t=k(p),u=N(t,2),a=k(u),d=k(a),l=k(d,!0);h(d),h(a);var v=N(a,2),y=k(v);ut(y,{size:16});var g=N(y,2),S=k(g,!0);h(g),h(v),h(u),h(p),oe(()=>{Ee(t,`background: url(${j(s).image??""}) center center no-repeat;`),re(a,"title",j(s).title),re(d,"href",j(s).url),ae(l,j(s).title),ae(S,j(s).date)}),P(e,p)}),h(r);var n=N(r,2);h(i),oe(()=>re(n,"href",m().url)),P(w,i),we()}var kt=B('<!> <main class="flex flex-1 flex-col gap-9 mx-12 my-6"><div class="flex flex-col lg:flex-row gap-9 w-full"><!> <!></div> <!> <div class="flex flex-col-reverse lg:flex-row items-start gap-12 w-full"><!> <aside class="flex flex-col items-center gap-6 p-6 bg-[#7289da] text-white w-full lg:w-1/3 rounded-lg shadow-lg lg:sticky lg:top-[110px]"><div class="pt-[100px] bg-[url(/discord.webp)] bg-[center_top] bg-no-repeat bg-[length:100px] text-xl text-center max-w-[400px]">Want to be a great academic researcher? Join our Discord server!</div> <a href="https://link.mf-chan.com/belajar-riset" target="_blank" class="btn btn-lg btn-outline hover:text-[#7289da]">Access Now, Free!</a></aside></div></main>',1);function Nt(w,b){ye(b,!1);let m=!0,i=fe([]),r=fe([]),n=fe([]),e=fe({});Ke(async()=>{at.init();try{const g=await fetch("https://api.mf-chan.com/research"),{data:S}=await g.json();ue(i,S.education),ue(r,S.publication),ue(n,S.platform);const T=S.medium;T.posts.forEach(A=>{A.date=rt(A.date)}),ue(e,T),m=!1}catch(g){console.error(g),Qe.error("Cannot fetch data from the backend, please try again later!")}}),he();var s=kt(),p=ve(s);nt(p);var t=N(p,2),u=k(t),a=k(u);lt(a,{get education(){return j(i)}});var d=N(a,2);bt(d,{get publication(){return j(r)}}),h(u);var l=N(u,2);yt(l,{get platform(){return j(n)}});var v=N(l,2),y=k(v);_t(y,{get medium(){return j(e)}}),ze(2),h(v),h(t),P(w,s),we()}export{Nt as component};
