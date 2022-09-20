(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Mr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const bh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wh=Mr(bh);function Ra(t){return!!t||t===""}function kr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=be(s)?Sh(s):kr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(be(t))return t;if(pe(t))return t}}const Ih=/;(?![^(]*\))/g,Th=/:(.+)/;function Sh(t){const e={};return t.split(Ih).forEach(n=>{if(n){const s=n.split(Th);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Dr(t){let e="";if(be(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Dr(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rh=t=>be(t)?t:t==null?"":B(t)||pe(t)&&(t.toString===Pa||!$(t.toString))?JSON.stringify(t,xa,2):String(t),xa=(t,e)=>e&&e.__v_isRef?xa(t,e.value):vn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Na(e)?{[`Set(${e.size})`]:[...e.values()]}:pe(e)&&!B(e)&&!Oa(e)?String(e):e,ue={},yn=[],Xe=()=>{},xh=()=>!1,Nh=/^on[^a-z]/,di=t=>Nh.test(t),Lr=t=>t.startsWith("onUpdate:"),Ne=Object.assign,Fr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ah=Object.prototype.hasOwnProperty,G=(t,e)=>Ah.call(t,e),B=Array.isArray,vn=t=>pi(t)==="[object Map]",Na=t=>pi(t)==="[object Set]",$=t=>typeof t=="function",be=t=>typeof t=="string",Hr=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Aa=t=>pe(t)&&$(t.then)&&$(t.catch),Pa=Object.prototype.toString,pi=t=>Pa.call(t),Ph=t=>pi(t).slice(8,-1),Oa=t=>pi(t)==="[object Object]",zr=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$s=Mr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_i=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Oh=/-(\w)/g,Tn=_i(t=>t.replace(Oh,(e,n)=>n?n.toUpperCase():"")),Mh=/\B([A-Z])/g,Hn=_i(t=>t.replace(Mh,"-$1").toLowerCase()),Ma=_i(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oi=_i(t=>t?`on${Ma(t)}`:""),cs=(t,e)=>!Object.is(t,e),Mi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},js=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},kh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vo;const Dh=()=>Vo||(Vo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let lt;class Lh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&lt&&(this.parent=lt,this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=lt;try{return lt=this,e()}finally{lt=n}}}on(){lt=this}off(){lt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Fh(t,e=lt){e&&e.active&&e.effects.push(t)}const Br=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ka=t=>(t.w&Mt)>0,Da=t=>(t.n&Mt)>0,Hh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Mt},zh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ka(i)&&!Da(i)?i.delete(t):e[n++]=i,i.w&=~Mt,i.n&=~Mt}e.length=n}},Zi=new WeakMap;let es=0,Mt=1;const er=30;let qe;const Kt=Symbol(""),tr=Symbol("");class $r{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fh(this,s)}run(){if(!this.active)return this.fn();let e=qe,n=Rt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,Rt=!0,Mt=1<<++es,es<=er?Hh(this):jo(this),this.fn()}finally{es<=er&&zh(this),Mt=1<<--es,qe=this.parent,Rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(jo(this),this.onStop&&this.onStop(),this.active=!1)}}function jo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rt=!0;const La=[];function zn(){La.push(Rt),Rt=!1}function Bn(){const t=La.pop();Rt=t===void 0?!0:t}function $e(t,e,n){if(Rt&&qe){let s=Zi.get(t);s||Zi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Br()),Fa(i)}}function Fa(t,e){let n=!1;es<=er?Da(t)||(t.n|=Mt,n=!ka(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function vt(t,e,n,s,i,r){const o=Zi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&B(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":B(t)?zr(n)&&l.push(o.get("length")):(l.push(o.get(Kt)),vn(t)&&l.push(o.get(tr)));break;case"delete":B(t)||(l.push(o.get(Kt)),vn(t)&&l.push(o.get(tr)));break;case"set":vn(t)&&l.push(o.get(Kt));break}if(l.length===1)l[0]&&nr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);nr(Br(a))}}function nr(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&qo(s);for(const s of n)s.computed||qo(s)}function qo(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Bh=Mr("__proto__,__v_isRef,__isVue"),Ha=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Hr)),$h=Wr(),Wh=Wr(!1,!0),Uh=Wr(!0),Ko=Vh();function Vh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=J(this);for(let r=0,o=this.length;r<o;r++)$e(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(J)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){zn();const s=J(this)[e].apply(this,n);return Bn(),s}}),t}function Wr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?lf:Ua:e?Wa:$a).get(s))return s;const o=B(s);if(!t&&o&&G(Ko,i))return Reflect.get(Ko,i,r);const l=Reflect.get(s,i,r);return(Hr(i)?Ha.has(i):Bh(i))||(t||$e(s,"get",i),e)?l:Re(l)?o&&zr(i)?l:l.value:pe(l)?t?Va(l):Rs(l):l}}const jh=za(),qh=za(!0);function za(t=!1){return function(n,s,i,r){let o=n[s];if(Sn(o)&&Re(o)&&!Re(i))return!1;if(!t&&(!qs(i)&&!Sn(i)&&(o=J(o),i=J(i)),!B(n)&&Re(o)&&!Re(i)))return o.value=i,!0;const l=B(n)&&zr(s)?Number(s)<n.length:G(n,s),a=Reflect.set(n,s,i,r);return n===J(r)&&(l?cs(i,o)&&vt(n,"set",s,i):vt(n,"add",s,i)),a}}function Kh(t,e){const n=G(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&vt(t,"delete",e,void 0),s}function Gh(t,e){const n=Reflect.has(t,e);return(!Hr(e)||!Ha.has(e))&&$e(t,"has",e),n}function Yh(t){return $e(t,"iterate",B(t)?"length":Kt),Reflect.ownKeys(t)}const Ba={get:$h,set:jh,deleteProperty:Kh,has:Gh,ownKeys:Yh},Qh={get:Uh,set(t,e){return!0},deleteProperty(t,e){return!0}},Xh=Ne({},Ba,{get:Wh,set:qh}),Ur=t=>t,mi=t=>Reflect.getPrototypeOf(t);function ks(t,e,n=!1,s=!1){t=t.__v_raw;const i=J(t),r=J(e);n||(e!==r&&$e(i,"get",e),$e(i,"get",r));const{has:o}=mi(i),l=s?Ur:n?qr:us;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Ds(t,e=!1){const n=this.__v_raw,s=J(n),i=J(t);return e||(t!==i&&$e(s,"has",t),$e(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ls(t,e=!1){return t=t.__v_raw,!e&&$e(J(t),"iterate",Kt),Reflect.get(t,"size",t)}function Go(t){t=J(t);const e=J(this);return mi(e).has.call(e,t)||(e.add(t),vt(e,"add",t,t)),this}function Yo(t,e){e=J(e);const n=J(this),{has:s,get:i}=mi(n);let r=s.call(n,t);r||(t=J(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?cs(e,o)&&vt(n,"set",t,e):vt(n,"add",t,e),this}function Qo(t){const e=J(this),{has:n,get:s}=mi(e);let i=n.call(e,t);i||(t=J(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&vt(e,"delete",t,void 0),r}function Xo(){const t=J(this),e=t.size!==0,n=t.clear();return e&&vt(t,"clear",void 0,void 0),n}function Fs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=J(o),a=e?Ur:t?qr:us;return!t&&$e(l,"iterate",Kt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Hs(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=vn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Ur:e?qr:us;return!e&&$e(r,"iterate",a?tr:Kt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wt(t){return function(...e){return t==="delete"?!1:this}}function Jh(){const t={get(r){return ks(this,r)},get size(){return Ls(this)},has:Ds,add:Go,set:Yo,delete:Qo,clear:Xo,forEach:Fs(!1,!1)},e={get(r){return ks(this,r,!1,!0)},get size(){return Ls(this)},has:Ds,add:Go,set:Yo,delete:Qo,clear:Xo,forEach:Fs(!1,!0)},n={get(r){return ks(this,r,!0)},get size(){return Ls(this,!0)},has(r){return Ds.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:Fs(!0,!1)},s={get(r){return ks(this,r,!0,!0)},get size(){return Ls(this,!0)},has(r){return Ds.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:Fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hs(r,!1,!1),n[r]=Hs(r,!0,!1),e[r]=Hs(r,!1,!0),s[r]=Hs(r,!0,!0)}),[t,n,e,s]}const[Zh,ef,tf,nf]=Jh();function Vr(t,e){const n=e?t?nf:tf:t?ef:Zh;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(G(n,i)&&i in s?n:s,i,r)}const sf={get:Vr(!1,!1)},rf={get:Vr(!1,!0)},of={get:Vr(!0,!1)},$a=new WeakMap,Wa=new WeakMap,Ua=new WeakMap,lf=new WeakMap;function af(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cf(t){return t.__v_skip||!Object.isExtensible(t)?0:af(Ph(t))}function Rs(t){return Sn(t)?t:jr(t,!1,Ba,sf,$a)}function uf(t){return jr(t,!1,Xh,rf,Wa)}function Va(t){return jr(t,!0,Qh,of,Ua)}function jr(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=cf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Cn(t){return Sn(t)?Cn(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function qs(t){return!!(t&&t.__v_isShallow)}function ja(t){return Cn(t)||Sn(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function qa(t){return js(t,"__v_skip",!0),t}const us=t=>pe(t)?Rs(t):t,qr=t=>pe(t)?Va(t):t;function Ka(t){Rt&&qe&&(t=J(t),Fa(t.dep||(t.dep=Br())))}function Ga(t,e){t=J(t),t.dep&&nr(t.dep)}function Re(t){return!!(t&&t.__v_isRef===!0)}function hf(t){return Ya(t,!1)}function ff(t){return Ya(t,!0)}function Ya(t,e){return Re(t)?t:new df(t,e)}class df{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:us(e)}get value(){return Ka(this),this._value}set value(e){const n=this.__v_isShallow||qs(e)||Sn(e);e=n?e:J(e),cs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:us(e),Ga(this))}}function gt(t){return Re(t)?t.value:t}const pf={get:(t,e,n)=>gt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Qa(t){return Cn(t)?t:new Proxy(t,pf)}var Xa;class _f{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Xa]=!1,this._dirty=!0,this.effect=new $r(e,()=>{this._dirty||(this._dirty=!0,Ga(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=J(this);return Ka(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Xa="__v_isReadonly";function mf(t,e,n=!1){let s,i;const r=$(t);return r?(s=t,i=Xe):(s=t.get,i=t.set),new _f(s,i,r||!i,n)}function xt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){gi(r,e,n)}return i}function Je(t,e,n,s){if($(t)){const r=xt(t,e,n,s);return r&&Aa(r)&&r.catch(o=>{gi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Je(t[r],e,n,s));return i}function gi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){xt(a,null,10,[t,o,l]);return}}gf(t,n,i,s)}function gf(t,e,n,s=!0){console.error(t)}let hs=!1,sr=!1;const Te=[];let ct=0;const En=[];let _t=null,Vt=0;const Ja=Promise.resolve();let Kr=null;function Za(t){const e=Kr||Ja;return t?e.then(this?t.bind(this):t):e}function yf(t){let e=ct+1,n=Te.length;for(;e<n;){const s=e+n>>>1;fs(Te[s])<t?e=s+1:n=s}return e}function Gr(t){(!Te.length||!Te.includes(t,hs&&t.allowRecurse?ct+1:ct))&&(t.id==null?Te.push(t):Te.splice(yf(t.id),0,t),ec())}function ec(){!hs&&!sr&&(sr=!0,Kr=Ja.then(nc))}function vf(t){const e=Te.indexOf(t);e>ct&&Te.splice(e,1)}function Cf(t){B(t)?En.push(...t):(!_t||!_t.includes(t,t.allowRecurse?Vt+1:Vt))&&En.push(t),ec()}function Jo(t,e=hs?ct+1:0){for(;e<Te.length;e++){const n=Te[e];n&&n.pre&&(Te.splice(e,1),e--,n())}}function tc(t){if(En.length){const e=[...new Set(En)];if(En.length=0,_t){_t.push(...e);return}for(_t=e,_t.sort((n,s)=>fs(n)-fs(s)),Vt=0;Vt<_t.length;Vt++)_t[Vt]();_t=null,Vt=0}}const fs=t=>t.id==null?1/0:t.id,Ef=(t,e)=>{const n=fs(t)-fs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nc(t){sr=!1,hs=!0,Te.sort(Ef);const e=Xe;try{for(ct=0;ct<Te.length;ct++){const n=Te[ct];n&&n.active!==!1&&xt(n,null,14)}}finally{ct=0,Te.length=0,tc(),hs=!1,Kr=null,(Te.length||En.length)&&nc()}}function bf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ue;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ue;f&&(i=n.map(_=>_.trim())),h&&(i=n.map(kh))}let l,a=s[l=Oi(e)]||s[l=Oi(Tn(e))];!a&&r&&(a=s[l=Oi(Hn(e))]),a&&Je(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Je(c,t,6,i)}}function sc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!$(t)){const a=c=>{const u=sc(c,e,!0);u&&(l=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(pe(t)&&s.set(t,null),null):(B(r)?r.forEach(a=>o[a]=null):Ne(o,r),pe(t)&&s.set(t,o),o)}function yi(t,e){return!t||!di(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,Hn(e))||G(t,e))}let ze=null,vi=null;function Ks(t){const e=ze;return ze=t,vi=t&&t.type.__scopeId||null,e}function ic(t){vi=t}function rc(){vi=null}function ye(t,e=ze,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ll(-1);const r=Ks(e),o=t(...i);return Ks(r),s._d&&ll(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function ki(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:g,inheritAttrs:A}=t;let R,N;const F=Ks(t);try{if(n.shapeFlag&4){const Z=i||s;R=at(u.call(Z,Z,h,r,_,f,g)),N=a}else{const Z=e;R=at(Z.length>1?Z(r,{attrs:a,slots:l,emit:c}):Z(r,null)),N=e.props?a:wf(a)}}catch(Z){ns.length=0,gi(Z,t,1),R=ne(Rn)}let K=R;if(N&&A!==!1){const Z=Object.keys(N),{shapeFlag:Ae}=K;Z.length&&Ae&7&&(o&&Z.some(Lr)&&(N=If(N,o)),K=xn(K,N))}return n.dirs&&(K=xn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),R=K,Ks(F),R}const wf=t=>{let e;for(const n in t)(n==="class"||n==="style"||di(n))&&((e||(e={}))[n]=t[n]);return e},If=(t,e)=>{const n={};for(const s in t)(!Lr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Tf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Zo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!yi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Zo(s,o,c):!0:!!o;return!1}function Zo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!yi(n,r))return!0}return!1}function Sf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Rf=t=>t.__isSuspense;function xf(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Cf(t)}function Ws(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function Nt(t,e,n=!1){const s=Se||ze;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&$(e)?e.call(s.proxy):e}}const el={};function Us(t,e,n){return oc(t,e,n)}function oc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ue){const l=Se;let a,c=!1,u=!1;if(Re(t)?(a=()=>t.value,c=qs(t)):Cn(t)?(a=()=>t,s=!0):B(t)?(u=!0,c=t.some(N=>Cn(N)||qs(N)),a=()=>t.map(N=>{if(Re(N))return N.value;if(Cn(N))return _n(N);if($(N))return xt(N,l,2)})):$(t)?e?a=()=>xt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Je(t,l,3,[f])}:a=Xe,e&&s){const N=a;a=()=>_n(N())}let h,f=N=>{h=R.onStop=()=>{xt(N,l,4)}};if(ps)return f=Xe,e?n&&Je(e,l,3,[a(),u?[]:void 0,f]):a(),Xe;let _=u?[]:el;const g=()=>{if(!!R.active)if(e){const N=R.run();(s||c||(u?N.some((F,K)=>cs(F,_[K])):cs(N,_)))&&(h&&h(),Je(e,l,3,[N,_===el?void 0:_,f]),_=N)}else R.run()};g.allowRecurse=!!e;let A;i==="sync"?A=g:i==="post"?A=()=>Pe(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),A=()=>Gr(g));const R=new $r(a,A);return e?n?g():_=R.run():i==="post"?Pe(R.run.bind(R),l&&l.suspense):R.run(),()=>{R.stop(),l&&l.scope&&Fr(l.scope.effects,R)}}function Nf(t,e,n){const s=this.proxy,i=be(t)?t.includes(".")?lc(s,t):()=>s[t]:t.bind(s,s);let r;$(e)?r=e:(r=e.handler,n=e);const o=Se;Nn(this);const l=oc(i,r.bind(s),n);return o?Nn(o):Gt(),l}function lc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function _n(t,e){if(!pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))_n(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)_n(t[n],e);else if(Na(t)||vn(t))t.forEach(n=>{_n(n,e)});else if(Oa(t))for(const n in t)_n(t[n],e);return t}function ac(t){return $(t)?{setup:t,name:t.name}:t}const ts=t=>!!t.type.__asyncLoader,cc=t=>t.type.__isKeepAlive;function Af(t,e){uc(t,"a",e)}function Pf(t,e){uc(t,"da",e)}function uc(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ci(e,s,n),n){let i=n.parent;for(;i&&i.parent;)cc(i.parent.vnode)&&Of(s,e,n,i),i=i.parent}}function Of(t,e,n,s){const i=Ci(e,t,s,!0);hc(()=>{Fr(s[e],i)},n)}function Ci(t,e,n=Se,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;zn(),Nn(n);const l=Je(e,n,t,o);return Gt(),Bn(),l});return s?i.unshift(r):i.push(r),r}}const Ct=t=>(e,n=Se)=>(!ps||t==="sp")&&Ci(t,e,n),Mf=Ct("bm"),kf=Ct("m"),Df=Ct("bu"),Lf=Ct("u"),Ff=Ct("bum"),hc=Ct("um"),Hf=Ct("sp"),zf=Ct("rtg"),Bf=Ct("rtc");function $f(t,e=Se){Ci("ec",t,e)}function zt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(zn(),Je(a,n,8,[t.el,l,t,e]),Bn())}}const Wf=Symbol();function Di(t,e,n={},s,i){if(ze.isCE||ze.parent&&ts(ze.parent)&&ze.parent.isCE)return ne("slot",e==="default"?null:{name:e},s&&s());let r=t[e];r&&r._c&&(r._d=!1),nt();const o=r&&fc(r(n)),l=ld(He,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function fc(t){return t.some(e=>Qs(e)?!(e.type===Rn||e.type===He&&!fc(e.children)):!0)?t:null}const ir=t=>t?wc(t)?Zr(t)||t.proxy:ir(t.parent):null,Gs=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ir(t.parent),$root:t=>ir(t.root),$emit:t=>t.emit,$options:t=>Yr(t),$forceUpdate:t=>t.f||(t.f=()=>Gr(t.update)),$nextTick:t=>t.n||(t.n=Za.bind(t.proxy)),$watch:t=>Nf.bind(t)}),Uf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ue&&G(s,e))return o[e]=1,s[e];if(i!==ue&&G(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&G(c,e))return o[e]=3,r[e];if(n!==ue&&G(n,e))return o[e]=4,n[e];rr&&(o[e]=0)}}const u=Gs[e];let h,f;if(u)return e==="$attrs"&&$e(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ue&&G(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,G(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ue&&G(i,e)?(i[e]=n,!0):s!==ue&&G(s,e)?(s[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ue&&G(t,o)||e!==ue&&G(e,o)||(l=r[0])&&G(l,o)||G(s,o)||G(Gs,o)||G(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let rr=!0;function Vf(t){const e=Yr(t),n=t.proxy,s=t.ctx;rr=!1,e.beforeCreate&&tl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:g,activated:A,deactivated:R,beforeDestroy:N,beforeUnmount:F,destroyed:K,unmounted:Z,render:Ae,renderTracked:De,renderTriggered:ht,errorCaptured:on,serverPrefetch:st,expose:bt,inheritAttrs:ft,components:Ve,directives:ln,filters:an}=e;if(c&&jf(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const se=o[ae];$(se)&&(s[ae]=se.bind(n))}if(i){const ae=i.call(n,n);pe(ae)&&(t.data=Rs(ae))}if(rr=!0,r)for(const ae in r){const se=r[ae],Le=$(se)?se.bind(n,n):$(se.get)?se.get.bind(n,n):Xe,un=!$(se)&&$(se.set)?se.set.bind(n):Xe,dt=Ue({get:Le,set:un});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>dt.value,set:it=>dt.value=it})}if(l)for(const ae in l)dc(l[ae],s,n,ae);if(a){const ae=$(a)?a.call(n):a;Reflect.ownKeys(ae).forEach(se=>{Ws(se,ae[se])})}u&&tl(u,t,"c");function me(ae,se){B(se)?se.forEach(Le=>ae(Le.bind(n))):se&&ae(se.bind(n))}if(me(Mf,h),me(kf,f),me(Df,_),me(Lf,g),me(Af,A),me(Pf,R),me($f,on),me(Bf,De),me(zf,ht),me(Ff,F),me(hc,Z),me(Hf,st),B(bt))if(bt.length){const ae=t.exposed||(t.exposed={});bt.forEach(se=>{Object.defineProperty(ae,se,{get:()=>n[se],set:Le=>n[se]=Le})})}else t.exposed||(t.exposed={});Ae&&t.render===Xe&&(t.render=Ae),ft!=null&&(t.inheritAttrs=ft),Ve&&(t.components=Ve),ln&&(t.directives=ln)}function jf(t,e,n=Xe,s=!1){B(t)&&(t=or(t));for(const i in t){const r=t[i];let o;pe(r)?"default"in r?o=Nt(r.from||i,r.default,!0):o=Nt(r.from||i):o=Nt(r),Re(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function tl(t,e,n){Je(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function dc(t,e,n,s){const i=s.includes(".")?lc(n,s):()=>n[s];if(be(t)){const r=e[t];$(r)&&Us(i,r)}else if($(t))Us(i,t.bind(n));else if(pe(t))if(B(t))t.forEach(r=>dc(r,e,n,s));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&Us(i,r,t)}}function Yr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ys(a,c,o,!0)),Ys(a,e,o)),pe(e)&&r.set(e,a),a}function Ys(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ys(t,r,n,!0),i&&i.forEach(o=>Ys(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=qf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const qf={data:nl,props:$t,emits:$t,methods:$t,computed:$t,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:$t,directives:$t,watch:Gf,provide:nl,inject:Kf};function nl(t,e){return e?t?function(){return Ne($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Kf(t,e){return $t(or(t),or(e))}function or(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xe(t,e){return t?[...new Set([].concat(t,e))]:e}function $t(t,e){return t?Ne(Ne(Object.create(null),t),e):e}function Gf(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const s in e)n[s]=xe(t[s],e[s]);return n}function Yf(t,e,n,s=!1){const i={},r={};js(r,Ei,1),t.propsDefaults=Object.create(null),pc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:uf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Qf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=J(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(yi(t.emitsOptions,f))continue;const _=e[f];if(a)if(G(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const g=Tn(f);i[g]=lr(a,l,g,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{pc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!G(e,h)&&((u=Hn(h))===h||!G(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=lr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!G(e,h)&&!0)&&(delete r[h],c=!0)}c&&vt(t,"set","$attrs")}function pc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if($s(a))continue;const c=e[a];let u;i&&G(i,u=Tn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:yi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=J(n),c=l||ue;for(let u=0;u<r.length;u++){const h=r[u];n[h]=lr(i,a,h,c[h],t,!G(c,h))}}return o}function lr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=G(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&$(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Nn(i),s=c[n]=a.call(null,e),Gt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Hn(n))&&(s=!0))}return s}function _c(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!$(t)){const u=h=>{a=!0;const[f,_]=_c(h,e,!0);Ne(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return pe(t)&&s.set(t,yn),yn;if(B(r))for(let u=0;u<r.length;u++){const h=Tn(r[u]);sl(h)&&(o[h]=ue)}else if(r)for(const u in r){const h=Tn(u);if(sl(h)){const f=r[u],_=o[h]=B(f)||$(f)?{type:f}:f;if(_){const g=ol(Boolean,_.type),A=ol(String,_.type);_[0]=g>-1,_[1]=A<0||g<A,(g>-1||G(_,"default"))&&l.push(h)}}}const c=[o,l];return pe(t)&&s.set(t,c),c}function sl(t){return t[0]!=="$"}function il(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function rl(t,e){return il(t)===il(e)}function ol(t,e){return B(e)?e.findIndex(n=>rl(n,t)):$(e)&&rl(e,t)?0:-1}const mc=t=>t[0]==="_"||t==="$stable",Qr=t=>B(t)?t.map(at):[at(t)],Xf=(t,e,n)=>{if(e._n)return e;const s=ye((...i)=>Qr(e(...i)),n);return s._c=!1,s},gc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(mc(i))continue;const r=t[i];if($(r))e[i]=Xf(i,r,s);else if(r!=null){const o=Qr(r);e[i]=()=>o}}},yc=(t,e)=>{const n=Qr(e);t.slots.default=()=>n},Jf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),js(e,"_",n)):gc(e,t.slots={})}else t.slots={},e&&yc(t,e);js(t.slots,Ei,1)},Zf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ue;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ne(i,e),!n&&l===1&&delete i._):(r=!e.$stable,gc(e,i)),o=e}else e&&(yc(t,e),o={default:1});if(r)for(const l in i)!mc(l)&&!(l in o)&&delete i[l]};function vc(){return{app:null,config:{isNativeTag:xh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ed=0;function td(t,e){return function(s,i=null){$(s)||(s=Object.assign({},s)),i!=null&&!pe(i)&&(i=null);const r=vc(),o=new Set;let l=!1;const a=r.app={_uid:ed++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:vd,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(a,...u)):$(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=ne(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Zr(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function ar(t,e,n,s,i=!1){if(B(t)){t.forEach((f,_)=>ar(f,e&&(B(e)?e[_]:e),n,s,i));return}if(ts(s)&&!i)return;const r=s.shapeFlag&4?Zr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ue?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(be(c)?(u[c]=null,G(h,c)&&(h[c]=null)):Re(c)&&(c.value=null)),$(a))xt(a,l,12,[o,u]);else{const f=be(a),_=Re(a);if(f||_){const g=()=>{if(t.f){const A=f?u[a]:a.value;i?B(A)&&Fr(A,r):B(A)?A.includes(r)||A.push(r):f?(u[a]=[r],G(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,G(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Pe(g,n)):g()}}}const Pe=xf;function nd(t){return sd(t)}function sd(t,e){const n=Dh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=Xe,cloneNode:g,insertStaticContent:A}=t,R=(d,p,m,C=null,v=null,I=null,x=!1,w=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Kn(d,p)&&(C=M(d),We(d,v,I,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:k,shapeFlag:P}=p;switch(E){case Xr:N(d,p,m,C);break;case Rn:F(d,p,m,C);break;case Li:d==null&&K(p,m,C,x);break;case He:ln(d,p,m,C,v,I,x,w,T);break;default:P&1?De(d,p,m,C,v,I,x,w,T):P&6?an(d,p,m,C,v,I,x,w,T):(P&64||P&128)&&E.process(d,p,m,C,v,I,x,w,T,ce)}k!=null&&v&&ar(k,d&&d.ref,I,p||d,!p)},N=(d,p,m,C)=>{if(d==null)s(p.el=l(p.children),m,C);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},F=(d,p,m,C)=>{d==null?s(p.el=a(p.children||""),m,C):p.el=d.el},K=(d,p,m,C)=>{[d.el,d.anchor]=A(d.children,p,m,C,d.el,d.anchor)},Z=({el:d,anchor:p},m,C)=>{let v;for(;d&&d!==p;)v=f(d),s(d,m,C),d=v;s(p,m,C)},Ae=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),i(d),d=m;i(p)},De=(d,p,m,C,v,I,x,w,T)=>{x=x||p.type==="svg",d==null?ht(p,m,C,v,I,x,w,T):bt(d,p,v,I,x,w,T)},ht=(d,p,m,C,v,I,x,w)=>{let T,E;const{type:k,props:P,shapeFlag:D,transition:H,patchFlag:Q,dirs:ie}=d;if(d.el&&g!==void 0&&Q===-1)T=d.el=g(d.el);else{if(T=d.el=o(d.type,I,P&&P.is,P),D&8?u(T,d.children):D&16&&st(d.children,T,null,C,v,I&&k!=="foreignObject",x,w),ie&&zt(d,null,C,"created"),P){for(const fe in P)fe!=="value"&&!$s(fe)&&r(T,fe,null,P[fe],I,d.children,C,v,S);"value"in P&&r(T,"value",null,P.value),(E=P.onVnodeBeforeMount)&&ot(E,C,d)}on(T,d,d.scopeId,x,C)}ie&&zt(d,null,C,"beforeMount");const re=(!v||v&&!v.pendingBranch)&&H&&!H.persisted;re&&H.beforeEnter(T),s(T,p,m),((E=P&&P.onVnodeMounted)||re||ie)&&Pe(()=>{E&&ot(E,C,d),re&&H.enter(T),ie&&zt(d,null,C,"mounted")},v)},on=(d,p,m,C,v)=>{if(m&&_(d,m),C)for(let I=0;I<C.length;I++)_(d,C[I]);if(v){let I=v.subTree;if(p===I){const x=v.vnode;on(d,x,x.scopeId,x.slotScopeIds,v.parent)}}},st=(d,p,m,C,v,I,x,w,T=0)=>{for(let E=T;E<d.length;E++){const k=d[E]=w?Tt(d[E]):at(d[E]);R(null,k,p,m,C,v,I,x,w)}},bt=(d,p,m,C,v,I,x)=>{const w=p.el=d.el;let{patchFlag:T,dynamicChildren:E,dirs:k}=p;T|=d.patchFlag&16;const P=d.props||ue,D=p.props||ue;let H;m&&Bt(m,!1),(H=D.onVnodeBeforeUpdate)&&ot(H,m,p,d),k&&zt(p,d,m,"beforeUpdate"),m&&Bt(m,!0);const Q=v&&p.type!=="foreignObject";if(E?ft(d.dynamicChildren,E,w,m,C,Q,I):x||Le(d,p,w,null,m,C,Q,I,!1),T>0){if(T&16)Ve(w,p,P,D,m,C,v);else if(T&2&&P.class!==D.class&&r(w,"class",null,D.class,v),T&4&&r(w,"style",P.style,D.style,v),T&8){const ie=p.dynamicProps;for(let re=0;re<ie.length;re++){const fe=ie[re],je=P[fe],hn=D[fe];(hn!==je||fe==="value")&&r(w,fe,je,hn,v,d.children,m,C,S)}}T&1&&d.children!==p.children&&u(w,p.children)}else!x&&E==null&&Ve(w,p,P,D,m,C,v);((H=D.onVnodeUpdated)||k)&&Pe(()=>{H&&ot(H,m,p,d),k&&zt(p,d,m,"updated")},C)},ft=(d,p,m,C,v,I,x)=>{for(let w=0;w<p.length;w++){const T=d[w],E=p[w],k=T.el&&(T.type===He||!Kn(T,E)||T.shapeFlag&70)?h(T.el):m;R(T,E,k,null,C,v,I,x,!0)}},Ve=(d,p,m,C,v,I,x)=>{if(m!==C){for(const w in C){if($s(w))continue;const T=C[w],E=m[w];T!==E&&w!=="value"&&r(d,w,E,T,x,p.children,v,I,S)}if(m!==ue)for(const w in m)!$s(w)&&!(w in C)&&r(d,w,m[w],null,x,p.children,v,I,S);"value"in C&&r(d,"value",m.value,C.value)}},ln=(d,p,m,C,v,I,x,w,T)=>{const E=p.el=d?d.el:l(""),k=p.anchor=d?d.anchor:l("");let{patchFlag:P,dynamicChildren:D,slotScopeIds:H}=p;H&&(w=w?w.concat(H):H),d==null?(s(E,m,C),s(k,m,C),st(p.children,m,k,v,I,x,w,T)):P>0&&P&64&&D&&d.dynamicChildren?(ft(d.dynamicChildren,D,m,v,I,x,w),(p.key!=null||v&&p===v.subTree)&&Cc(d,p,!0)):Le(d,p,m,k,v,I,x,w,T)},an=(d,p,m,C,v,I,x,w,T)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?v.ctx.activate(p,m,C,x,T):cn(p,m,C,v,I,x,T):me(d,p,T)},cn=(d,p,m,C,v,I,x)=>{const w=d.component=dd(d,C,v);if(cc(d)&&(w.ctx.renderer=ce),pd(w),w.asyncDep){if(v&&v.registerDep(w,ae),!d.el){const T=w.subTree=ne(Rn);F(null,T,p,m)}return}ae(w,d,p,m,v,I,x)},me=(d,p,m)=>{const C=p.component=d.component;if(Tf(d,p,m))if(C.asyncDep&&!C.asyncResolved){se(C,p,m);return}else C.next=p,vf(C.update),C.update();else p.el=d.el,C.vnode=p},ae=(d,p,m,C,v,I,x)=>{const w=()=>{if(d.isMounted){let{next:k,bu:P,u:D,parent:H,vnode:Q}=d,ie=k,re;Bt(d,!1),k?(k.el=Q.el,se(d,k,x)):k=Q,P&&Mi(P),(re=k.props&&k.props.onVnodeBeforeUpdate)&&ot(re,H,k,Q),Bt(d,!0);const fe=ki(d),je=d.subTree;d.subTree=fe,R(je,fe,h(je.el),M(je),d,v,I),k.el=fe.el,ie===null&&Sf(d,fe.el),D&&Pe(D,v),(re=k.props&&k.props.onVnodeUpdated)&&Pe(()=>ot(re,H,k,Q),v)}else{let k;const{el:P,props:D}=p,{bm:H,m:Q,parent:ie}=d,re=ts(p);if(Bt(d,!1),H&&Mi(H),!re&&(k=D&&D.onVnodeBeforeMount)&&ot(k,ie,p),Bt(d,!0),P&&z){const fe=()=>{d.subTree=ki(d),z(P,d.subTree,d,v,null)};re?p.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=ki(d);R(null,fe,m,C,d,v,I),p.el=fe.el}if(Q&&Pe(Q,v),!re&&(k=D&&D.onVnodeMounted)){const fe=p;Pe(()=>ot(k,ie,fe),v)}(p.shapeFlag&256||ie&&ts(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Pe(d.a,v),d.isMounted=!0,p=m=C=null}},T=d.effect=new $r(w,()=>Gr(E),d.scope),E=d.update=()=>T.run();E.id=d.uid,Bt(d,!0),E()},se=(d,p,m)=>{p.component=d;const C=d.vnode.props;d.vnode=p,d.next=null,Qf(d,p.props,C,m),Zf(d,p.children,m),zn(),Jo(),Bn()},Le=(d,p,m,C,v,I,x,w,T=!1)=>{const E=d&&d.children,k=d?d.shapeFlag:0,P=p.children,{patchFlag:D,shapeFlag:H}=p;if(D>0){if(D&128){dt(E,P,m,C,v,I,x,w,T);return}else if(D&256){un(E,P,m,C,v,I,x,w,T);return}}H&8?(k&16&&S(E,v,I),P!==E&&u(m,P)):k&16?H&16?dt(E,P,m,C,v,I,x,w,T):S(E,v,I,!0):(k&8&&u(m,""),H&16&&st(P,m,C,v,I,x,w,T))},un=(d,p,m,C,v,I,x,w,T)=>{d=d||yn,p=p||yn;const E=d.length,k=p.length,P=Math.min(E,k);let D;for(D=0;D<P;D++){const H=p[D]=T?Tt(p[D]):at(p[D]);R(d[D],H,m,null,v,I,x,w,T)}E>k?S(d,v,I,!0,!1,P):st(p,m,C,v,I,x,w,T,P)},dt=(d,p,m,C,v,I,x,w,T)=>{let E=0;const k=p.length;let P=d.length-1,D=k-1;for(;E<=P&&E<=D;){const H=d[E],Q=p[E]=T?Tt(p[E]):at(p[E]);if(Kn(H,Q))R(H,Q,m,null,v,I,x,w,T);else break;E++}for(;E<=P&&E<=D;){const H=d[P],Q=p[D]=T?Tt(p[D]):at(p[D]);if(Kn(H,Q))R(H,Q,m,null,v,I,x,w,T);else break;P--,D--}if(E>P){if(E<=D){const H=D+1,Q=H<k?p[H].el:C;for(;E<=D;)R(null,p[E]=T?Tt(p[E]):at(p[E]),m,Q,v,I,x,w,T),E++}}else if(E>D)for(;E<=P;)We(d[E],v,I,!0),E++;else{const H=E,Q=E,ie=new Map;for(E=Q;E<=D;E++){const Fe=p[E]=T?Tt(p[E]):at(p[E]);Fe.key!=null&&ie.set(Fe.key,E)}let re,fe=0;const je=D-Q+1;let hn=!1,$o=0;const qn=new Array(je);for(E=0;E<je;E++)qn[E]=0;for(E=H;E<=P;E++){const Fe=d[E];if(fe>=je){We(Fe,v,I,!0);continue}let rt;if(Fe.key!=null)rt=ie.get(Fe.key);else for(re=Q;re<=D;re++)if(qn[re-Q]===0&&Kn(Fe,p[re])){rt=re;break}rt===void 0?We(Fe,v,I,!0):(qn[rt-Q]=E+1,rt>=$o?$o=rt:hn=!0,R(Fe,p[rt],m,null,v,I,x,w,T),fe++)}const Wo=hn?id(qn):yn;for(re=Wo.length-1,E=je-1;E>=0;E--){const Fe=Q+E,rt=p[Fe],Uo=Fe+1<k?p[Fe+1].el:C;qn[E]===0?R(null,rt,m,Uo,v,I,x,w,T):hn&&(re<0||E!==Wo[re]?it(rt,m,Uo,2):re--)}}},it=(d,p,m,C,v=null)=>{const{el:I,type:x,transition:w,children:T,shapeFlag:E}=d;if(E&6){it(d.component.subTree,p,m,C);return}if(E&128){d.suspense.move(p,m,C);return}if(E&64){x.move(d,p,m,ce);return}if(x===He){s(I,p,m);for(let P=0;P<T.length;P++)it(T[P],p,m,C);s(d.anchor,p,m);return}if(x===Li){Z(d,p,m);return}if(C!==2&&E&1&&w)if(C===0)w.beforeEnter(I),s(I,p,m),Pe(()=>w.enter(I),v);else{const{leave:P,delayLeave:D,afterLeave:H}=w,Q=()=>s(I,p,m),ie=()=>{P(I,()=>{Q(),H&&H()})};D?D(I,Q,ie):ie()}else s(I,p,m)},We=(d,p,m,C=!1,v=!1)=>{const{type:I,props:x,ref:w,children:T,dynamicChildren:E,shapeFlag:k,patchFlag:P,dirs:D}=d;if(w!=null&&ar(w,null,m,d,!0),k&256){p.ctx.deactivate(d);return}const H=k&1&&D,Q=!ts(d);let ie;if(Q&&(ie=x&&x.onVnodeBeforeUnmount)&&ot(ie,p,d),k&6)O(d.component,m,C);else{if(k&128){d.suspense.unmount(m,C);return}H&&zt(d,null,p,"beforeUnmount"),k&64?d.type.remove(d,p,m,v,ce,C):E&&(I!==He||P>0&&P&64)?S(E,p,m,!1,!0):(I===He&&P&384||!v&&k&16)&&S(T,p,m),C&&jn(d)}(Q&&(ie=x&&x.onVnodeUnmounted)||H)&&Pe(()=>{ie&&ot(ie,p,d),H&&zt(d,null,p,"unmounted")},m)},jn=d=>{const{type:p,el:m,anchor:C,transition:v}=d;if(p===He){y(m,C);return}if(p===Li){Ae(d);return}const I=()=>{i(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:x,delayLeave:w}=v,T=()=>x(m,I);w?w(d.el,I,T):T()}else I()},y=(d,p)=>{let m;for(;d!==p;)m=f(d),i(d),d=m;i(p)},O=(d,p,m)=>{const{bum:C,scope:v,update:I,subTree:x,um:w}=d;C&&Mi(C),v.stop(),I&&(I.active=!1,We(x,d,p,m)),w&&Pe(w,p),Pe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},S=(d,p,m,C=!1,v=!1,I=0)=>{for(let x=I;x<d.length;x++)We(d[x],p,m,C,v)},M=d=>d.shapeFlag&6?M(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ee=(d,p,m)=>{d==null?p._vnode&&We(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,m),Jo(),tc(),p._vnode=d},ce={p:R,um:We,m:it,r:jn,mt:cn,mc:st,pc:Le,pbc:ft,n:M,o:t};let W,z;return e&&([W,z]=e(ce)),{render:ee,hydrate:W,createApp:td(ee,W)}}function Bt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Cc(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Tt(i[r]),l.el=o.el),n||Cc(o,l))}}function id(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const rd=t=>t.__isTeleport,He=Symbol(void 0),Xr=Symbol(void 0),Rn=Symbol(void 0),Li=Symbol(void 0),ns=[];let Ge=null;function nt(t=!1){ns.push(Ge=t?null:[])}function od(){ns.pop(),Ge=ns[ns.length-1]||null}let ds=1;function ll(t){ds+=t}function Ec(t){return t.dynamicChildren=ds>0?Ge||yn:null,od(),ds>0&&Ge&&Ge.push(t),t}function ut(t,e,n,s,i,r){return Ec(q(t,e,n,s,i,r,!0))}function ld(t,e,n,s,i){return Ec(ne(t,e,n,s,i,!0))}function Qs(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const Ei="__vInternal",bc=({key:t})=>t!=null?t:null,Vs=({ref:t,ref_key:e,ref_for:n})=>t!=null?be(t)||Re(t)||$(t)?{i:ze,r:t,k:e,f:!!n}:t:null;function q(t,e=null,n=null,s=0,i=null,r=t===He?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bc(e),ref:e&&Vs(e),scopeId:vi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Jr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=be(n)?8:16),ds>0&&!o&&Ge&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ge.push(a),a}const ne=ad;function ad(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Wf)&&(t=Rn),Qs(t)){const l=xn(t,e,!0);return n&&Jr(l,n),ds>0&&!r&&Ge&&(l.shapeFlag&6?Ge[Ge.indexOf(t)]=l:Ge.push(l)),l.patchFlag|=-2,l}if(yd(t)&&(t=t.__vccOpts),e){e=cd(e);let{class:l,style:a}=e;l&&!be(l)&&(e.class=Dr(l)),pe(a)&&(ja(a)&&!B(a)&&(a=Ne({},a)),e.style=kr(a))}const o=be(t)?1:Rf(t)?128:rd(t)?64:pe(t)?4:$(t)?2:0;return q(t,e,n,s,i,o,r,!0)}function cd(t){return t?ja(t)||Ei in t?Ne({},t):t:null}function xn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?ud(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&bc(l),ref:e&&e.ref?n&&i?B(i)?i.concat(Vs(e)):[i,Vs(e)]:Vs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor}}function Y(t=" ",e=0){return ne(Xr,null,t,e)}function at(t){return t==null||typeof t=="boolean"?ne(Rn):B(t)?ne(He,null,t.slice()):typeof t=="object"?Tt(t):ne(Xr,null,String(t))}function Tt(t){return t.el===null||t.memo?t:xn(t)}function Jr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Jr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ei in e)?e._ctx=ze:i===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),s&64?(n=16,e=[Y(e)]):n=8);t.children=e,t.shapeFlag|=n}function ud(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Dr([e.class,s.class]));else if(i==="style")e.style=kr([e.style,s.style]);else if(di(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ot(t,e,n,s=null){Je(t,e,7,[n,s])}const hd=vc();let fd=0;function dd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||hd,r={uid:fd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_c(s,i),emitsOptions:sc(s,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bf.bind(null,r),t.ce&&t.ce(r),r}let Se=null;const Nn=t=>{Se=t,t.scope.on()},Gt=()=>{Se&&Se.scope.off(),Se=null};function wc(t){return t.vnode.shapeFlag&4}let ps=!1;function pd(t,e=!1){ps=e;const{props:n,children:s}=t.vnode,i=wc(t);Yf(t,n,i,e),Jf(t,s);const r=i?_d(t,e):void 0;return ps=!1,r}function _d(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qa(new Proxy(t.ctx,Uf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?gd(t):null;Nn(t),zn();const r=xt(s,t,0,[t.props,i]);if(Bn(),Gt(),Aa(r)){if(r.then(Gt,Gt),e)return r.then(o=>{al(t,o,e)}).catch(o=>{gi(o,t,0)});t.asyncDep=r}else al(t,r,e)}else Ic(t,e)}function al(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Qa(e)),Ic(t,n)}let cl;function Ic(t,e,n){const s=t.type;if(!t.render){if(!e&&cl&&!s.render){const i=s.template||Yr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ne(Ne({isCustomElement:r,delimiters:l},o),a);s.render=cl(i,c)}}t.render=s.render||Xe}Nn(t),zn(),Vf(t),Bn(),Gt()}function md(t){return new Proxy(t.attrs,{get(e,n){return $e(t,"get","$attrs"),e[n]}})}function gd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=md(t))},slots:t.slots,emit:t.emit,expose:e}}function Zr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qa(qa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)}}))}function yd(t){return $(t)&&"__vccOpts"in t}const Ue=(t,e)=>mf(t,e,ps);function Tc(t,e,n){const s=arguments.length;return s===2?pe(e)&&!B(e)?Qs(e)?ne(t,null,[e]):ne(t,e):ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qs(n)&&(n=[n]),ne(t,e,n))}const vd="3.2.39",Cd="http://www.w3.org/2000/svg",jt=typeof document<"u"?document:null,ul=jt&&jt.createElement("template"),Ed={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?jt.createElementNS(Cd,t):jt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>jt.createTextNode(t),createComment:t=>jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ul.innerHTML=s?`<svg>${t}</svg>`:t;const l=ul.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function bd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function wd(t,e,n){const s=t.style,i=be(n);if(n&&!i){for(const r in n)cr(s,r,n[r]);if(e&&!be(e))for(const r in e)n[r]==null&&cr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const hl=/\s*!important$/;function cr(t,e,n){if(B(n))n.forEach(s=>cr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Id(t,e);hl.test(n)?t.setProperty(Hn(s),n.replace(hl,""),"important"):t[s]=n}}const fl=["Webkit","Moz","ms"],Fi={};function Id(t,e){const n=Fi[e];if(n)return n;let s=Tn(e);if(s!=="filter"&&s in t)return Fi[e]=s;s=Ma(s);for(let i=0;i<fl.length;i++){const r=fl[i]+s;if(r in t)return Fi[e]=r}return e}const dl="http://www.w3.org/1999/xlink";function Td(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dl,e.slice(6,e.length)):t.setAttributeNS(dl,e,n);else{const r=wh(e);n==null||r&&!Ra(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Sd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ra(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[Sc,Rd]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ur=0;const xd=Promise.resolve(),Nd=()=>{ur=0},Ad=()=>ur||(xd.then(Nd),ur=Sc());function Pd(t,e,n,s){t.addEventListener(e,n,s)}function Od(t,e,n,s){t.removeEventListener(e,n,s)}function Md(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=kd(e);if(s){const c=r[e]=Dd(s,i);Pd(t,l,c,a)}else o&&(Od(t,l,o,a),r[e]=void 0)}}const pl=/(?:Once|Passive|Capture)$/;function kd(t){let e;if(pl.test(t)){e={};let s;for(;s=t.match(pl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),e]}function Dd(t,e){const n=s=>{const i=s.timeStamp||Sc();(Rd||i>=n.attached-1)&&Je(Ld(s,n.value),e,5,[s])};return n.value=t,n.attached=Ad(),n}function Ld(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const _l=/^on[a-z]/,Fd=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?bd(t,s,i):e==="style"?wd(t,n,s):di(e)?Lr(e)||Md(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hd(t,e,s,i))?Sd(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Td(t,e,s,i))};function Hd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&_l.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_l.test(e)&&be(n)?!1:e in t}const zd=Ne({patchProp:Fd},Ed);let ml;function Bd(){return ml||(ml=nd(zd))}const $d=(...t)=>{const e=Bd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Wd(s);if(!i)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Wd(t){return be(t)?document.querySelector(t):t}const Ud="/assets/logo.da9b9095.svg";/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const pn=typeof window<"u";function Vd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Hi(t,e){const n={};for(const s in e){const i=e[s];n[s]=et(i)?i.map(t):t(i)}return n}const ss=()=>{},et=Array.isArray,jd=/\/$/,qd=t=>t.replace(jd,"");function zi(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Qd(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Kd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Gd(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&An(e.matched[s],n.matched[i])&&Rc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function An(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Yd(t[n],e[n]))return!1;return!0}function Yd(t,e){return et(t)?yl(t,e):et(e)?yl(e,t):t===e}function yl(t,e){return et(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Qd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var _s;(function(t){t.pop="pop",t.push="push"})(_s||(_s={}));var is;(function(t){t.back="back",t.forward="forward",t.unknown=""})(is||(is={}));function Xd(t){if(!t)if(pn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qd(t)}const Jd=/^[^#]+#/;function Zd(t,e){return t.replace(Jd,"#")+e}function ep(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const bi=()=>({left:window.pageXOffset,top:window.pageYOffset});function tp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=ep(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vl(t,e){return(history.state?history.state.position-e:-1)+t}const hr=new Map;function np(t,e){hr.set(t,e)}function sp(t){const e=hr.get(t);return hr.delete(t),e}let ip=()=>location.protocol+"//"+location.host;function xc(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),gl(a,"")}return gl(n,t)+s+i}function rp(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=xc(t,location),g=n.value,A=e.value;let R=0;if(f){if(n.value=_,e.value=f,o&&o===g){o=null;return}R=A?f.position-A.position:0}else s(_);i.forEach(N=>{N(n.value,g,{delta:R,type:_s.pop,direction:R?R>0?is.forward:is.back:is.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return r.push(_),_}function u(){const{history:f}=window;!f.state||f.replaceState(te({},f.state,{scroll:bi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:h}}function Cl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?bi():null}}function op(t){const{history:e,location:n}=window,s={value:xc(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:ip()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=te({},e.state,Cl(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=te({},i.value,e.state,{forward:a,scroll:bi()});r(u.current,u,!0);const h=te({},Cl(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function lp(t){t=Xd(t);const e=op(t),n=rp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:Zd.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ap(t){return typeof t=="string"||t&&typeof t=="object"}function Nc(t){return typeof t=="string"||typeof t=="symbol"}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ac=Symbol("");var El;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(El||(El={}));function Pn(t,e){return te(new Error,{type:t,[Ac]:!0},e)}function pt(t,e){return t instanceof Error&&Ac in t&&(e==null||!!(t.type&e))}const bl="[^/]+?",cp={sensitive:!1,strict:!1,start:!0,end:!0},up=/[.+*?^${}()[\]/\\]/g;function hp(t,e){const n=te({},cp,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(up,"\\$&"),_+=40;else if(f.type===1){const{value:g,repeatable:A,optional:R,regexp:N}=f;r.push({name:g,repeatable:A,optional:R});const F=N||bl;if(F!==bl){_+=10;try{new RegExp(`(${F})`)}catch(Z){throw new Error(`Invalid custom RegExp for param "${g}" (${F}): `+Z.message)}}let K=A?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(K=R&&c.length<2?`(?:/${K})`:"/"+K),R&&(K+="?"),i+=K,_+=20,R&&(_+=-8),A&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",g=r[f-1];h[g.name]=_&&g.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:g,repeatable:A,optional:R}=_,N=g in c?c[g]:"";if(et(N)&&!A)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const F=et(N)?N.join("/"):N;if(!F)if(R)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=F}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function fp(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function dp(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=fp(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(wl(s))return 1;if(wl(i))return-1}return i.length-s.length}function wl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const pp={type:0,value:""},_p=/[a-zA-Z0-9_]/;function mp(t){if(!t)return[[]];if(t==="/")return[[pp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:_p.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function gp(t,e,n){const s=hp(mp(t.path),n),i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function yp(t,e){const n=[],s=new Map;e=Sl({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,g=vp(u);g.aliasOf=f&&f.record;const A=Sl(e,u),R=[g];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const Z of K)R.push(te({},g,{components:f?f.record.components:g.components,path:Z,aliasOf:f?f.record:g}))}let N,F;for(const K of R){const{path:Z}=K;if(h&&Z[0]!=="/"){const Ae=h.record.path,De=Ae[Ae.length-1]==="/"?"":"/";K.path=h.record.path+(Z&&De+Z)}if(N=gp(K,h,A),f?f.alias.push(N):(F=F||N,F!==N&&F.alias.push(N),_&&u.name&&!Tl(N)&&o(u.name)),g.children){const Ae=g.children;for(let De=0;De<Ae.length;De++)r(Ae[De],N,f&&f.children[De])}f=f||N,a(N)}return F?()=>{o(F)}:ss}function o(u){if(Nc(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&dp(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Pc(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Tl(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},g,A;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Pn(1,{location:u});A=f.record.name,_=te(Il(h.params,f.keys.filter(F=>!F.optional).map(F=>F.name)),u.params&&Il(u.params,f.keys.map(F=>F.name))),g=f.stringify(_)}else if("path"in u)g=u.path,f=n.find(F=>F.re.test(g)),f&&(_=f.parse(g),A=f.record.name);else{if(f=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!f)throw Pn(1,{location:u,currentLocation:h});A=f.record.name,_=te({},h.params,u.params),g=f.stringify(_)}const R=[];let N=f;for(;N;)R.unshift(N.record),N=N.parent;return{name:A,path:g,params:_,matched:R,meta:Ep(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Il(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function vp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Cp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Cp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Tl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ep(t){return t.reduce((e,n)=>te(e,n.meta),{})}function Sl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Pc(t,e){return e.children.some(n=>n===t||Pc(t,n))}const Oc=/#/g,bp=/&/g,wp=/\//g,Ip=/=/g,Tp=/\?/g,Mc=/\+/g,Sp=/%5B/g,Rp=/%5D/g,kc=/%5E/g,xp=/%60/g,Dc=/%7B/g,Np=/%7C/g,Lc=/%7D/g,Ap=/%20/g;function eo(t){return encodeURI(""+t).replace(Np,"|").replace(Sp,"[").replace(Rp,"]")}function Pp(t){return eo(t).replace(Dc,"{").replace(Lc,"}").replace(kc,"^")}function fr(t){return eo(t).replace(Mc,"%2B").replace(Ap,"+").replace(Oc,"%23").replace(bp,"%26").replace(xp,"`").replace(Dc,"{").replace(Lc,"}").replace(kc,"^")}function Op(t){return fr(t).replace(Ip,"%3D")}function Mp(t){return eo(t).replace(Oc,"%23").replace(Tp,"%3F")}function kp(t){return t==null?"":Mp(t).replace(wp,"%2F")}function Xs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Dp(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Mc," "),o=r.indexOf("="),l=Xs(o<0?r:r.slice(0,o)),a=o<0?null:Xs(r.slice(o+1));if(l in e){let c=e[l];et(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Rl(t){let e="";for(let n in t){const s=t[n];if(n=Op(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(et(s)?s.map(r=>r&&fr(r)):[s&&fr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Lp(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=et(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Fp=Symbol(""),xl=Symbol(""),to=Symbol(""),Fc=Symbol(""),dr=Symbol("");function Gn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function St(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Pn(4,{from:n,to:e})):h instanceof Error?l(h):ap(h)?l(Pn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function Bi(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Hp(l)){const c=(l.__vccOpts||l)[e];c&&i.push(St(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Vd(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&St(f,n,s,r,o)()}))}}return i}function Hp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nl(t){const e=Nt(to),n=Nt(Fc),s=Ue(()=>e.resolve(gt(t.to))),i=Ue(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(An.bind(null,u));if(f>-1)return f;const _=Al(a[c-2]);return c>1&&Al(u)===_&&h[h.length-1].path!==_?h.findIndex(An.bind(null,a[c-2])):f}),r=Ue(()=>i.value>-1&&$p(n.params,s.value.params)),o=Ue(()=>i.value>-1&&i.value===n.matched.length-1&&Rc(n.params,s.value.params));function l(a={}){return Bp(a)?e[gt(t.replace)?"replace":"push"](gt(t.to)).catch(ss):Promise.resolve()}return{route:s,href:Ue(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const zp=ac({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nl,setup(t,{slots:e}){const n=Rs(Nl(t)),{options:s}=Nt(to),i=Ue(()=>({[Pl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Pl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Tc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),pr=zp;function Bp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $p(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!et(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Al(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pl=(t,e,n)=>t!=null?t:e!=null?e:n,Wp=ac({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Nt(dr),i=Ue(()=>t.route||s.value),r=Nt(xl,0),o=Ue(()=>{let c=gt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=Ue(()=>i.value.matched[o.value]);Ws(xl,Ue(()=>o.value+1)),Ws(Fp,l),Ws(dr,i);const a=hf();return Us(()=>[a.value,l.value,t.name],([c,u,h],[f,_,g])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!An(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return Ol(n.default,{Component:f,route:c});const _=h.props[u],g=_?_===!0?c.params:typeof _=="function"?_(c):_:null,R=Tc(f,te({},g,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Ol(n.default,{Component:R,route:c})||R}}});function Ol(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Hc=Wp;function Up(t){const e=yp(t.routes,t),n=t.parseQuery||Dp,s=t.stringifyQuery||Rl,i=t.history,r=Gn(),o=Gn(),l=Gn(),a=ff(It);let c=It;pn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hi.bind(null,y=>""+y),h=Hi.bind(null,kp),f=Hi.bind(null,Xs);function _(y,O){let S,M;return Nc(y)?(S=e.getRecordMatcher(y),M=O):M=y,e.addRoute(M,S)}function g(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function A(){return e.getRoutes().map(y=>y.record)}function R(y){return!!e.getRecordMatcher(y)}function N(y,O){if(O=te({},O||a.value),typeof y=="string"){const z=zi(n,y,O.path),d=e.resolve({path:z.path},O),p=i.createHref(z.fullPath);return te(z,d,{params:f(d.params),hash:Xs(z.hash),redirectedFrom:void 0,href:p})}let S;if("path"in y)S=te({},y,{path:zi(n,y.path,O.path).path});else{const z=te({},y.params);for(const d in z)z[d]==null&&delete z[d];S=te({},y,{params:h(y.params)}),O.params=h(O.params)}const M=e.resolve(S,O),ee=y.hash||"";M.params=u(f(M.params));const ce=Kd(s,te({},y,{hash:Pp(ee),path:M.path})),W=i.createHref(ce);return te({fullPath:ce,hash:ee,query:s===Rl?Lp(y.query):y.query||{}},M,{redirectedFrom:void 0,href:W})}function F(y){return typeof y=="string"?zi(n,y,a.value.path):te({},y)}function K(y,O){if(c!==y)return Pn(8,{from:O,to:y})}function Z(y){return ht(y)}function Ae(y){return Z(te(F(y),{replace:!0}))}function De(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:S}=O;let M=typeof S=="function"?S(y):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=F(M):{path:M},M.params={}),te({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function ht(y,O){const S=c=N(y),M=a.value,ee=y.state,ce=y.force,W=y.replace===!0,z=De(S);if(z)return ht(te(F(z),{state:typeof z=="object"?te({},ee,z.state):ee,force:ce,replace:W}),O||S);const d=S;d.redirectedFrom=O;let p;return!ce&&Gd(s,M,S)&&(p=Pn(16,{to:d,from:M}),un(M,M,!0,!1)),(p?Promise.resolve(p):st(d,M)).catch(m=>pt(m)?pt(m,2)?m:Le(m):ae(m,d,M)).then(m=>{if(m){if(pt(m,2))return ht(te({replace:W},F(m.to),{state:typeof m.to=="object"?te({},ee,m.to.state):ee,force:ce}),O||d)}else m=ft(d,M,!0,W,ee);return bt(d,M,m),m})}function on(y,O){const S=K(y,O);return S?Promise.reject(S):Promise.resolve()}function st(y,O){let S;const[M,ee,ce]=Vp(y,O);S=Bi(M.reverse(),"beforeRouteLeave",y,O);for(const z of M)z.leaveGuards.forEach(d=>{S.push(St(d,y,O))});const W=on.bind(null,y,O);return S.push(W),fn(S).then(()=>{S=[];for(const z of r.list())S.push(St(z,y,O));return S.push(W),fn(S)}).then(()=>{S=Bi(ee,"beforeRouteUpdate",y,O);for(const z of ee)z.updateGuards.forEach(d=>{S.push(St(d,y,O))});return S.push(W),fn(S)}).then(()=>{S=[];for(const z of y.matched)if(z.beforeEnter&&!O.matched.includes(z))if(et(z.beforeEnter))for(const d of z.beforeEnter)S.push(St(d,y,O));else S.push(St(z.beforeEnter,y,O));return S.push(W),fn(S)}).then(()=>(y.matched.forEach(z=>z.enterCallbacks={}),S=Bi(ce,"beforeRouteEnter",y,O),S.push(W),fn(S))).then(()=>{S=[];for(const z of o.list())S.push(St(z,y,O));return S.push(W),fn(S)}).catch(z=>pt(z,8)?z:Promise.reject(z))}function bt(y,O,S){for(const M of l.list())M(y,O,S)}function ft(y,O,S,M,ee){const ce=K(y,O);if(ce)return ce;const W=O===It,z=pn?history.state:{};S&&(M||W?i.replace(y.fullPath,te({scroll:W&&z&&z.scroll},ee)):i.push(y.fullPath,ee)),a.value=y,un(y,O,S,W),Le()}let Ve;function ln(){Ve||(Ve=i.listen((y,O,S)=>{if(!jn.listening)return;const M=N(y),ee=De(M);if(ee){ht(te(ee,{replace:!0}),M).catch(ss);return}c=M;const ce=a.value;pn&&np(vl(ce.fullPath,S.delta),bi()),st(M,ce).catch(W=>pt(W,12)?W:pt(W,2)?(ht(W.to,M).then(z=>{pt(z,20)&&!S.delta&&S.type===_s.pop&&i.go(-1,!1)}).catch(ss),Promise.reject()):(S.delta&&i.go(-S.delta,!1),ae(W,M,ce))).then(W=>{W=W||ft(M,ce,!1),W&&(S.delta&&!pt(W,8)?i.go(-S.delta,!1):S.type===_s.pop&&pt(W,20)&&i.go(-1,!1)),bt(M,ce,W)}).catch(ss)}))}let an=Gn(),cn=Gn(),me;function ae(y,O,S){Le(y);const M=cn.list();return M.length?M.forEach(ee=>ee(y,O,S)):console.error(y),Promise.reject(y)}function se(){return me&&a.value!==It?Promise.resolve():new Promise((y,O)=>{an.add([y,O])})}function Le(y){return me||(me=!y,ln(),an.list().forEach(([O,S])=>y?S(y):O()),an.reset()),y}function un(y,O,S,M){const{scrollBehavior:ee}=t;if(!pn||!ee)return Promise.resolve();const ce=!S&&sp(vl(y.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return Za().then(()=>ee(y,O,ce)).then(W=>W&&tp(W)).catch(W=>ae(W,y,O))}const dt=y=>i.go(y);let it;const We=new Set,jn={currentRoute:a,listening:!0,addRoute:_,removeRoute:g,hasRoute:R,getRoutes:A,resolve:N,options:t,push:Z,replace:Ae,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:cn.add,isReady:se,install(y){const O=this;y.component("RouterLink",pr),y.component("RouterView",Hc),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(a)}),pn&&!it&&a.value===It&&(it=!0,Z(i.location).catch(ee=>{}));const S={};for(const ee in It)S[ee]=Ue(()=>a.value[ee]);y.provide(to,O),y.provide(Fc,Rs(S)),y.provide(dr,a);const M=y.unmount;We.add(y),y.unmount=function(){We.delete(y),We.size<1&&(c=It,Ve&&Ve(),Ve=null,a.value=It,it=!1,me=!1),M()}}};return jn}function fn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Vp(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>An(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>An(c,a))||i.push(a))}return[n,s,i]}const Ht=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},jp=t=>(ic("data-v-3ba3ab19"),t=t(),rc(),t),qp={class:"greetings"},Kp={class:"green"},Gp=jp(()=>q("h3",null,[Y(" You\u2019ve successfully created a project with "),q("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),Y(" + "),q("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),Y(". ")],-1)),Yp={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(nt(),ut("div",qp,[q("h1",Kp,Rh(t.msg),1),Gp]))}},Qp=Ht(Yp,[["__scopeId","data-v-3ba3ab19"]]);const Xp=t=>(ic("data-v-fc484609"),t=t(),rc(),t),Jp=Xp(()=>q("img",{alt:"Vue logo",class:"logo",src:Ud,width:"125",height:"125"},null,-1)),Zp={class:"wrapper"},e_=Y("Home"),t_=Y("About"),n_={__name:"App",setup(t){return(e,n)=>(nt(),ut(He,null,[q("header",null,[Jp,q("div",Zp,[ne(Qp,{msg:"You did it!"}),q("nav",null,[ne(gt(pr),{to:"/"},{default:ye(()=>[e_]),_:1}),ne(gt(pr),{to:"/about"},{default:ye(()=>[t_]),_:1})])])]),ne(gt(Hc))],64))}},s_=Ht(n_,[["__scopeId","data-v-fc484609"]]),i_="modulepreload",r_=function(t){return"/"+t},Ml={},o_=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=r_(i),i in Ml)return;Ml[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":i_,r||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),r)return new Promise((a,c)=>{l.addEventListener("load",a),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};const l_={},a_={class:"item"},c_={class:"details"};function u_(t,e){return nt(),ut("div",a_,[q("i",null,[Di(t.$slots,"icon",{},void 0,!0)]),q("div",c_,[q("h3",null,[Di(t.$slots,"heading",{},void 0,!0)]),Di(t.$slots,"default",{},void 0,!0)])])}const Yn=Ht(l_,[["render",u_],["__scopeId","data-v-f1b0f727"]]),h_={},f_={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},d_=q("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),p_=[d_];function __(t,e){return nt(),ut("svg",f_,p_)}const m_=Ht(h_,[["render",__]]),g_={},y_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},v_=q("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),C_=[v_];function E_(t,e){return nt(),ut("svg",y_,C_)}const b_=Ht(g_,[["render",E_]]),w_={},I_={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},T_=q("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),S_=[T_];function R_(t,e){return nt(),ut("svg",I_,S_)}const x_=Ht(w_,[["render",R_]]),N_={},A_={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},P_=q("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),O_=[P_];function M_(t,e){return nt(),ut("svg",A_,O_)}const k_=Ht(N_,[["render",M_]]),D_={},L_={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},F_=q("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),H_=[F_];function z_(t,e){return nt(),ut("svg",L_,H_)}const B_=Ht(D_,[["render",z_]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw $n(e)},$n=function(t){return new Error("Firebase Database ("+zc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},no={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},$c=function(t){const e=Bc(t);return no.encodeByteArray(e,!0)},Wc=function(t){return $c(t).replace(/\./g,"")},kl=function(t){try{return no.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t){return ms(void 0,t)}function ms(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!U_(n)||(t[n]=ms(t[n],e[n]));return t}function U_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V_())}function j_(){return typeof self=="object"&&self.self===self}function q_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vc(){return zc.NODE_ADMIN===!0}function K_(){return typeof indexedDB=="object"}function G_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="FirebaseError";class Wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Y_,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Q_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Wn(i,l,s)}}function Q_(t,e){return t.replace(X_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const X_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=gs(kl(r[0])||""),n=gs(kl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},J_=function(t){const e=jc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Z_=function(t){const e=jc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function On(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Js(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function _r(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ll(r)&&Ll(o)){if(!_r(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ll(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function nm(t,e){const n=new sm(t,e);return n.subscribe.bind(n)}class sm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");im(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=$i),i.error===void 0&&(i.error=$i),i.complete===void 0&&(i.complete=$i);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function im(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $i(){}function qc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ii=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new so;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(am(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lm(t){return t===Wt?void 0:t}function am(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new om(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=[];var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Kc={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},um=oe.INFO,hm={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},fm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=hm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oo{constructor(e){this.name=e,this._logLevel=um,this._logHandler=fm,this._userLogHandler=null,ro.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}function dm(t){ro.forEach(e=>{e.setLogLevel(t)})}function pm(t,e){for(const n of ro){let s=null;e&&e.level&&(s=Kc[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,r,...o)=>{const l=o.map(a=>{if(a==null)return null;if(typeof a=="string")return a;if(typeof a=="number"||typeof a=="boolean")return a.toString();if(a instanceof Error)return a.message;try{return JSON.stringify(a)}catch{return null}}).filter(a=>a).join(" ");r>=(s!=null?s:i.logLevel)&&t({level:oe[r].toLowerCase(),message:l,args:o,type:i.name})}}}const _m=(t,e)=>e.some(n=>t instanceof n);let Fl,Hl;function mm(){return Fl||(Fl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gm(){return Hl||(Hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gc=new WeakMap,mr=new WeakMap,Yc=new WeakMap,Wi=new WeakMap,lo=new WeakMap;function ym(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(At(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gc.set(n,t)}).catch(()=>{}),lo.set(e,t),e}function vm(t){if(mr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});mr.set(t,e)}let gr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cm(t){gr=t(gr)}function Em(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ui(this),e,...n);return Yc.set(s,e.sort?e.sort():[e]),At(s)}:gm().includes(t)?function(...e){return t.apply(Ui(this),e),At(Gc.get(this))}:function(...e){return At(t.apply(Ui(this),e))}}function bm(t){return typeof t=="function"?Em(t):(t instanceof IDBTransaction&&vm(t),_m(t,mm())?new Proxy(t,gr):t)}function At(t){if(t instanceof IDBRequest)return ym(t);if(Wi.has(t))return Wi.get(t);const e=bm(t);return e!==t&&(Wi.set(t,e),lo.set(e,t)),e}const Ui=t=>lo.get(t);function wm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=At(o);return s&&o.addEventListener("upgradeneeded",a=>{s(At(o.result),a.oldVersion,a.newVersion,At(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Im=["get","getKey","getAll","getAllKeys","count"],Tm=["put","add","delete","clear"],Vi=new Map;function zl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vi.get(e))return Vi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Tm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Im.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Vi.set(e,r),r}Cm(t=>({...t,get:(e,n,s)=>zl(e,n)||t.get(e,n,s),has:(e,n)=>!!zl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yr="@firebase/app",Bl="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new oo("@firebase/app"),xm="@firebase/app-compat",Nm="@firebase/analytics-compat",Am="@firebase/analytics",Pm="@firebase/app-check-compat",Om="@firebase/app-check",Mm="@firebase/auth",km="@firebase/auth-compat",Dm="@firebase/database",Lm="@firebase/database-compat",Fm="@firebase/functions",Hm="@firebase/functions-compat",zm="@firebase/installations",Bm="@firebase/installations-compat",$m="@firebase/messaging",Wm="@firebase/messaging-compat",Um="@firebase/performance",Vm="@firebase/performance-compat",jm="@firebase/remote-config",qm="@firebase/remote-config-compat",Km="@firebase/storage",Gm="@firebase/storage-compat",Ym="@firebase/firestore",Qm="@firebase/firestore-compat",Xm="firebase",Jm="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]",Zm={[yr]:"fire-core",[xm]:"fire-core-compat",[Am]:"fire-analytics",[Nm]:"fire-analytics-compat",[Om]:"fire-app-check",[Pm]:"fire-app-check-compat",[Mm]:"fire-auth",[km]:"fire-auth-compat",[Dm]:"fire-rtdb",[Lm]:"fire-rtdb-compat",[Fm]:"fire-fn",[Hm]:"fire-fn-compat",[zm]:"fire-iid",[Bm]:"fire-iid-compat",[$m]:"fire-fcm",[Wm]:"fire-fcm-compat",[Um]:"fire-perf",[Vm]:"fire-perf-compat",[jm]:"fire-rc",[qm]:"fire-rc-compat",[Km]:"fire-gcs",[Gm]:"fire-gcs-compat",[Ym]:"fire-fst",[Qm]:"fire-fst-compat","fire-js":"fire-js",[Xm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Map,ys=new Map;function Zs(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qc(t,e){t.container.addOrOverwriteComponent(e)}function kn(t){const e=t.name;if(ys.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;ys.set(e,t);for(const n of kt.values())Zs(n,t);return!0}function ao(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function eg(t,e,n=Xt){ao(t,e).clearInstance(n)}function tg(){ys.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new wi("app","Firebase",ng);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=Jm;function Xc(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Xt,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});const i=kt.get(s);if(i){if(_r(t,i.options)&&_r(n,i.config))return i;throw Dt.create("duplicate-app",{appName:s})}const r=new cm(s);for(const l of ys.values())r.addComponent(l);const o=new sg(t,n,r);return kt.set(s,o),o}function Jc(t=Xt){const e=kt.get(t);if(!e)throw Dt.create("no-app",{appName:t});return e}function ig(){return Array.from(kt.values())}async function Zc(t){const e=t.name;kt.has(e)&&(kt.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Pt(t,e,n){var s;let i=(s=Zm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(l.join(" "));return}kn(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function eu(t,e){if(t!==null&&typeof t!="function")throw Dt.create("invalid-log-argument");pm(t,e)}function tu(t){dm(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="firebase-heartbeat-database",og=1,vs="firebase-heartbeat-store";let ji=null;function nu(){return ji||(ji=wm(rg,og,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vs)}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),ji}async function lg(t){var e;try{return(await nu()).transaction(vs).objectStore(vs).get(su(t))}catch(n){if(n instanceof Wn)Qt.warn(n.message);else{const s=Dt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Qt.warn(s.message)}}}async function $l(t,e){var n;try{const i=(await nu()).transaction(vs,"readwrite");return await i.objectStore(vs).put(e,su(t)),i.done}catch(s){if(s instanceof Wn)Qt.warn(s.message);else{const i=Dt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Qt.warn(i.message)}}}function su(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=1024,cg=30*24*60*60*1e3;class ug{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=cg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wl(),{heartbeatsToSend:n,unsentEntries:s}=hg(this._heartbeatsCache.heartbeats),i=Wc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wl(){return new Date().toISOString().substring(0,10)}function hg(t,e=ag){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ul(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ul(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K_()?G_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ul(t){return Wc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){kn(new Mn("platform-logger",e=>new Sm(e),"PRIVATE")),kn(new Mn("heartbeat",e=>new ug(e),"PRIVATE")),Pt(yr,Bl,t),Pt(yr,Bl,"esm2017"),Pt("fire-js","")}dg("");const pg=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:co,_DEFAULT_ENTRY_NAME:Xt,_addComponent:Zs,_addOrOverwriteComponent:Qc,_apps:kt,_clearComponents:tg,_components:ys,_getProvider:ao,_registerComponent:kn,_removeServiceInstance:eg,deleteApp:Zc,getApp:Jc,getApps:ig,initializeApp:Xc,onLog:eu,registerVersion:Pt,setLogLevel:tu,FirebaseError:Wn},Symbol.toStringTag,{value:"Module"})),Vl="@firebase/database",jl="0.13.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu="";function _g(t){iu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:gs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mg(e)}}catch{}return new gg},qt=ru("localStorage"),vr=ru("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new oo("@firebase/database"),yg=function(){let t=1;return function(){return t++}}(),ou=function(t){const e=rm(t),n=new tm;n.update(e);const s=n.digest();return no.encodeByteArray(s)},xs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xs.apply(null,s):typeof s=="object"?e+=Ee(s):e+=s,e+=" "}return e};let Yt=null,ql=!0;const vg=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(bn.logLevel=oe.VERBOSE,Yt=bn.log.bind(bn),e&&vr.set("logging_enabled",!0)):typeof t=="function"?Yt=t:(Yt=null,vr.remove("logging_enabled"))},we=function(...t){if(ql===!0&&(ql=!1,Yt===null&&vr.get("logging_enabled")===!0&&vg(!0)),Yt){const e=xs.apply(null,t);Yt(e)}},Ns=function(t){return function(...e){we(t,...e)}},Cr=function(...t){const e="FIREBASE INTERNAL ERROR: "+xs(...t);bn.error(e)},Jt=function(...t){const e=`FIREBASE FATAL ERROR: ${xs(...t)}`;throw bn.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+xs(...t);bn.warn(e)},Cg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Eg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dn="[MIN_NAME]",Zt="[MAX_NAME]",Un=function(t,e){if(t===e)return 0;if(t===Dn||e===Zt)return-1;if(e===Dn||t===Zt)return 1;{const n=Kl(t),s=Kl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},bg=function(t,e){return t===e?0:t<e?-1:1},Qn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},uo=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ee(e[s]),n+=":",n+=uo(t[e[s]]);return n+="}",n},au=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const cu=function(t){b(!lu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},wg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ig=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Tg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Sg=new RegExp("^-?(0*)\\d{1,10}$"),Rg=-2147483648,xg=2147483647,Kl=function(t){if(Sg.test(t)){const e=Number(t);if(e>=Rg&&e<=xg)return e}return null},As=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ng=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Er{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Er.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="5",uu="v",hu="s",fu="r",du="f",pu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_u="ls",mu="p",br="ac",gu="websocket",yu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Mg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vu(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===gu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Mg(t)&&(n.ns=t.namespace);const i=[];return ke(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.counters_={}}incrementCounter(e,n=1){tt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return W_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi={},Ki={};function fo(t){const e=t.toString();return qi[e]||(qi[e]=new kg),qi[e]}function Dg(t,e){const n=t.toString();return Ki[n]||(Ki[n]=e()),Ki[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&As(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="start",Fg="close",Hg="pLPCommand",zg="pRTLPCB",Cu="id",Eu="pw",bu="ser",Bg="cb",$g="seg",Wg="ts",Ug="d",Vg="dframe",wu=1870,Iu=30,jg=wu-Iu,qg=25e3,Kg=3e4;class mn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ns(e),this.stats_=fo(n),this.urlFn=a=>(this.appCheckToken&&(a[br]=this.appCheckToken),vu(n,yu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Lg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kg)),Eg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new po((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gl)this.id=l,this.password=a;else if(o===Fg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Gl]="t",s[bu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Bg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[uu]=ho,this.transportSessionId&&(s[hu]=this.transportSessionId),this.lastSessionId&&(s[_u]=this.lastSessionId),this.applicationId&&(s[mu]=this.applicationId),this.appCheckToken&&(s[br]=this.appCheckToken),typeof location<"u"&&location.hostname&&pu.test(location.hostname)&&(s[fu]=du);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){mn.forceAllow_=!0}static forceDisallow(){mn.forceDisallow_=!0}static isAvailable(){return mn.forceAllow_?!0:!mn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wg()&&!Ig()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$c(n),i=au(s,jg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Vg]="t",s[Cu]=e,s[Eu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class po{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yg(),window[Hg+this.uniqueCallbackIdentifier]=e,window[zg+this.uniqueCallbackIdentifier]=n,this.myIFrame=po.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){we("frame writing exception"),l.stack&&we(l.stack),we(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cu]=this.myID,e[Eu]=this.myPW,e[bu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Iu+s.length<=wu;){const o=this.pendingSegs.shift();s=s+"&"+$g+i+"="+o.seg+"&"+Wg+i+"="+o.ts+"&"+Ug+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(qg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=16384,Yg=45e3;let ei=null;typeof MozWebSocket<"u"?ei=MozWebSocket:typeof WebSocket<"u"&&(ei=WebSocket);class Ke{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ns(this.connId),this.stats_=fo(n),this.connURL=Ke.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[uu]=ho,typeof location<"u"&&location.hostname&&pu.test(location.hostname)&&(o[fu]=du),n&&(o[hu]=n),s&&(o[_u]=s),i&&(o[br]=i),r&&(o[mu]=r),vu(e,gu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{let s;Vc(),this.mySock=new ei(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ei!==null&&!Ke.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=gs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=au(n,Gg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Yg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[mn,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ke&&Ke.isAvailable();let s=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ke];else{const i=this.transports_=[];for(const r of Cs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=6e4,Xg=5e3,Jg=10*1024,Zg=100*1024,Gi="t",Yl="d",ey="s",Ql="r",ty="e",Xl="o",Jl="a",Zl="n",ea="p",ny="h";class sy{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ns("c:"+this.id+":"),this.transportManager_=new Cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=rs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Zg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Jg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gi in e){const n=e[Gi];n===Jl?this.upgradeIfSecondaryHealthy_():n===Ql?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qn("t",e),s=Qn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ea,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qn("t",e),s=Qn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qn(Gi,e);if(Yl in e){const s=e[Yl];if(n===ny)this.onHandshake_(s);else if(n===Zl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ey?this.onConnectionShutdown_(s):n===Ql?this.onReset_(s):n===ty?Cr("Server Error: "+s):n===Xl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ho!==s&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),rs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Qg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ea,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Su{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ti}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=32,na=768;class le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new le("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Lt(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function Ru(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function iy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function ge(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof le)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new le(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=V(t),s=V(e);if(n===null)return e;if(n===s)return Oe(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _o(t,e){if(Lt(t)!==Lt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ye(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Lt(t)>Lt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ry{constructor(e,n){this.errorPrefix_=n,this.parts_=xu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ii(this.parts_[s]);Au(this)}}function oy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ii(e),Au(t)}function ly(t){const e=t.parts_.pop();t.byteLength_-=Ii(e),t.parts_.length>0&&(t.byteLength_-=1)}function Au(t){if(t.byteLength_>na)throw new Error(t.errorPrefix_+"has a key path longer than "+na+" bytes ("+t.byteLength_+").");if(t.parts_.length>ta)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ta+") or object contains a cycle "+Ut(t))}function Ut(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Su{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new mo}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=1e3,ay=60*5*1e3,sa=30*1e3,cy=1.3,uy=3e4,hy="server_kill",ia=3;class yt extends Tu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=yt.nextPersistentConnectionId_++,this.log_=Ns("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xn,this.maxReconnectDelay_=ay,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Vc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ee(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new so,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;yt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tt(e,"w")){const s=On(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Z_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=J_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cr("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uy&&(this.reconnectDelay_=Xn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new sy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Be(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(hy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Be(h),a())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dl(this.interruptReasons_)&&(this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>uo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new le(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ia&&(this.reconnectDelay_=sa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ia&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+iu.replace(/\./g,"-")]=1,Uc()?e["framework.cordova"]=1:q_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ti.getInstance().currentlyOnline();return Dl(this.interruptReasons_)&&e}}yt.nextPersistentConnectionId_=0;yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new U(Dn,e),i=new U(Dn,n);return this.compare(s,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs;class Pu extends Ti{static get __EMPTY_NODE(){return zs}static set __EMPTY_NODE(e){zs=e}compare(e,n){return Un(e.name,n.name)}isDefinedOn(e){throw $n("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Zt,zs)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,zs)}toString(){return".key"}}const wn=new Pu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Ce.RED,this.left=i!=null?i:Me.EMPTY_NODE,this.right=r!=null?r:Me.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class fy{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,n=Me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Bs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Bs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Bs(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new fy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t,e){return Un(t.name,e.name)}function go(t,e){return Un(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr;function py(t){wr=t}const Ou=function(t){return typeof t=="number"?"number:"+cu(t):"string:"+t},Mu=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tt(e,".sv"),"Priority must be a string or number.")}else b(t===wr||t.isEmpty(),"priority of unexpected type.");b(t===wr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mu(this.priorityNode_)}static set __childrenNodeConstructor(e){ra=e}static get __childrenNodeConstructor(){return ra}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:V(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=V(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Lt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ou(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=cu(this.value_):e+=this.value_,this.lazyHash_=ou(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),r=ve.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku,Du;function _y(t){ku=t}function my(t){Du=t}class gy extends Ti{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Un(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Zt,new ve("[PRIORITY-POST]",Du))}makePost(e,n){const s=ku(e);return new U(n,new ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new gy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=Math.log(2);class vy{constructor(e){const n=r=>parseInt(Math.log(r)/yy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ni=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,null,null);{const _=parseInt(u/2,10)+a,g=i(a,_),A=i(_+1,c);return h=t[_],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,g,A)}},r=function(a){let c=null,u=null,h=t.length;const f=function(g,A){const R=h-g,N=h;h-=g;const F=i(R+1,N),K=t[R],Z=n?n(K):K;_(new Ce(Z,K.node,A,null,F))},_=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const A=a.nextBitIsOne(),R=Math.pow(2,a.count-(g+1));A?f(R,Ce.BLACK):(f(R,Ce.BLACK),f(R,Ce.RED))}return u},o=new vy(t.length),l=r(o);return new Me(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi;const dn={};class mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(dn&&_e,"ChildrenNode.ts has not been loaded"),Yi=Yi||new mt({".priority":dn},{".priority":_e}),Yi}get(e){const n=On(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Me?n:null}hasIndex(e){return tt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==wn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(U.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ni(s,e.getCompare()):l=dn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new mt(u,c)}addToIndexes(e,n){const s=Js(this.indexes_,(i,r)=>{const o=On(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===dn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ni(l,o.getCompare())}else return dn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new mt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Js(this.indexes_,i=>{if(i===dn)return i;{const r=n.get(e.name);return r?i.remove(new U(e.name,r)):i}});return new mt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn;class L{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Mu(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jn||(Jn=new L(new Me(go),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jn:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new U(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Jn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=V(e);if(s===null)return n;{b(V(e)!==".priority"||Lt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(he(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ou(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ou(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new U(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ps?-1:0}withIndex(e){if(e===wn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cy extends L{constructor(){super(new Me(go),L.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Ps=new Cy;Object.defineProperties(U,{MIN:{value:new U(Dn,L.EMPTY_NODE)},MAX:{value:new U(Zt,Ps)}});Pu.__EMPTY_NODE=L.EMPTY_NODE;ve.__childrenNodeConstructor=L;py(Ps);my(Ps);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=!0;function Ie(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,Ie(e))}if(!(t instanceof Array)&&Ey){const n=[];let s=!1;if(ke(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ie(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return L.EMPTY_NODE;const r=ni(n,dy,o=>o.name,go);if(s){const o=ni(n,_e.getCompare());return new L(r,Ie(e),new mt({".priority":o},{".priority":_e}))}else return new L(r,Ie(e),mt.Default)}else{let n=L.EMPTY_NODE;return ke(t,(s,i)=>{if(tt(t,s)&&s.substring(0,1)!=="."){const r=Ie(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ie(e))}}_y(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by extends Ti{constructor(e){super(),this.indexPath_=e,b(!j(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Un(e.name,n.name):r}makePost(e,n){const s=Ie(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new U(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Ps);return new U(Zt,e)}toString(){return xu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends Ti{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Un(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const s=Ie(e);return new U(n,s)}toString(){return".value"}}const Iy=new wy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return{type:"value",snapshotNode:t}}function Ln(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Es(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ty(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Es(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ln(n,s)):o.trackChildChange(bs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(Es(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(bs(i,r,o))}else s.trackChildChange(Ln(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.indexedFilter_=new yo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ws.getStartPost_(e),this.endPost_=ws.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new U(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,l)=>{r.matches(new U(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.rangedFilter_=new ws(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new U(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new U(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(bs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Es(n,h));const A=l.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Ln(f.name,f.node)),A.updateImmediateChild(f.name,f.node)):A}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Es(c.name,c.node)),r.trackChildChange(Ln(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new vo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ry(t){return t.loadsAllData()?new yo(t.getIndex()):t.hasLimit()?new Sy(t):new ws(t)}function oa(t){const e={};if(t.isDefault())return e;let n;return t.index_===_e?n="$priority":t.index_===Iy?n="$value":t.index_===wn?n="$key":(b(t.index_ instanceof by,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_&&(e.startAt=Ee(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ee(t.indexStartName_))),t.endSet_&&(e.endAt=Ee(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ee(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function la(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Tu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ns("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=si.getListenId_(e,s),l={};this.listens_[o]=l;const a=oa(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),On(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=si.getListenId_(e,n);delete this.listens_[s]}get(e){const n=oa(e._queryParams),s=e._path.toString(),i=new so;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+em(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=gs(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){return{value:null,children:new Map}}function Fu(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=V(e);t.children.has(s)||t.children.set(s,ii());const i=t.children.get(s);e=he(e),Fu(i,e,n)}}function Ir(t,e,n){t.value!==null?n(e,t.value):Ny(t,(s,i)=>{const r=new le(e.toString()+"/"+s);Ir(i,r,n)})}function Ny(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ke(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=10*1e3,Py=30*1e3,Oy=5*60*1e3;class My{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ay(e);const s=aa+(Py-aa)*Math.random();rs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ke(e,(i,r)=>{r>0&&tt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),rs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Oy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qe||(Qe={}));function Hu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Co(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Eo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Qe.ACK_USER_WRITE,this.source=Hu()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(e));return new ri(X(),n,this.revert)}}else return b(V(this.path)===e,"operationForChild called for unrelated child."),new ri(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.source=e,this.path=n,this.type=Qe.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Is(this.source,X()):new Is(this.source,he(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Qe.OVERWRITE}operationForChild(e){return j(this.path)?new en(this.source,X(),this.snap.getImmediateChild(e)):new en(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Qe.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new le(e));return n.isEmpty()?null:n.value?new en(this.source,X(),n.value):new Ts(this.source,X(),n)}else return b(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ts(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Dy(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ty(o.childName,o.snapshotNode))}),Zn(t,i,"child_removed",e,s,n),Zn(t,i,"child_added",e,s,n),Zn(t,i,"child_moved",r,s,n),Zn(t,i,"child_changed",e,s,n),Zn(t,i,"value",e,s,n),i}function Zn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Fy(t,l,a)),o.forEach(l=>{const a=Ly(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Ly(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Fy(t,e,n){if(e.childName==null||n.childName==null)throw $n("Should only compare child_ events.");const s=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e){return{eventCache:t,serverCache:e}}function os(t,e,n,s){return Si(new tn(e,n,s),t.serverCache)}function zu(t,e,n,s){return Si(t.eventCache,new tn(e,n,s))}function Tr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;const Hy=()=>(Qi||(Qi=new Me(bg)),Qi);class de{constructor(e,n=Hy()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return ke(e,(s,i)=>{n=n.set(new le(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(j(e))return null;{const s=V(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(he(e),n);return r!=null?{path:ge(new le(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=V(e),s=this.children.get(n);return s!==null?s.subtree(he(e)):new de(null)}}set(e,n){if(j(e))return new de(n,this.children);{const s=V(e),r=(this.children.get(s)||new de(null)).set(he(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=V(e),s=this.children.get(n);if(s){const i=s.remove(he(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=V(e),s=this.children.get(n);return s?s.get(he(e)):null}}setTree(e,n){if(j(e))return n;{const s=V(e),r=(this.children.get(s)||new de(null)).setTree(he(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ge(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(j(e))return null;{const r=V(e),o=this.children.get(r);return o?o.findOnPath_(he(e),ge(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(j(e))return this;{this.value&&s(n,this.value);const i=V(e),r=this.children.get(i);return r?r.foreachOnPath_(he(e),ge(n,i),s):new de(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ge(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.writeTree_=e}static empty(){return new Ze(new de(null))}}function ls(t,e,n){if(j(e))return new Ze(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Oe(i,e);return r=r.updateChild(o,n),new Ze(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new Ze(r)}}}function ca(t,e,n){let s=t;return ke(n,(i,r)=>{s=ls(s,ge(e,i),r)}),s}function ua(t,e){if(j(e))return Ze.empty();{const n=t.writeTree_.setTree(e,new de(null));return new Ze(n)}}function Sr(t,e){return sn(t,e)!=null}function sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function ha(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new U(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new U(s,i.value))}),e}function Ot(t,e){if(j(e))return t;{const n=sn(t,e);return n!=null?new Ze(new de(n)):new Ze(t.writeTree_.subtree(e))}}function Rr(t){return t.writeTree_.isEmpty()}function Fn(t,e){return Bu(X(),t.writeTree_,e)}function Bu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Bu(ge(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ge(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t,e){return Vu(e,t)}function zy(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ls(t.visibleWrites,e,n)),t.lastWriteId=s}function By(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function $y(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Wy(l,s.path)?i=!1:Ye(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Uy(t),!0;if(s.snap)t.visibleWrites=ua(t.visibleWrites,s.path);else{const l=s.children;ke(l,a=>{t.visibleWrites=ua(t.visibleWrites,ge(s.path,a))})}return!0}else return!1}function Wy(t,e){if(t.snap)return Ye(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ye(ge(t.path,n),e))return!0;return!1}function Uy(t){t.visibleWrites=$u(t.allWrites,Vy,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Vy(t){return t.visible}function $u(t,e,n){let s=Ze.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ye(n,o)?(l=Oe(n,o),s=ls(s,l,r.snap)):Ye(o,n)&&(l=Oe(o,n),s=ls(s,X(),r.snap.getChild(l)));else if(r.children){if(Ye(n,o))l=Oe(n,o),s=ca(s,l,r.children);else if(Ye(o,n))if(l=Oe(o,n),j(l))s=ca(s,X(),r.children);else{const a=On(r.children,V(l));if(a){const c=a.getChild(he(l));s=ls(s,X(),c)}}}else throw $n("WriteRecord should have .snap or .children")}}return s}function Wu(t,e,n,s,i){if(!s&&!i){const r=sn(t.visibleWrites,e);if(r!=null)return r;{const o=Ot(t.visibleWrites,e);if(Rr(o))return n;if(n==null&&!Sr(o,X()))return null;{const l=n||L.EMPTY_NODE;return Fn(o,l)}}}else{const r=Ot(t.visibleWrites,e);if(!i&&Rr(r))return n;if(!i&&n==null&&!Sr(r,X()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ye(c.path,e)||Ye(e,c.path))},l=$u(t.allWrites,o,e),a=n||L.EMPTY_NODE;return Fn(l,a)}}}function jy(t,e,n){let s=L.EMPTY_NODE;const i=sn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ot(t.visibleWrites,e);return n.forEachChild(_e,(o,l)=>{const a=Fn(Ot(r,new le(o)),l);s=s.updateImmediateChild(o,a)}),ha(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ot(t.visibleWrites,e);return ha(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qy(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ge(e,n);if(Sr(t.visibleWrites,r))return null;{const o=Ot(t.visibleWrites,r);return Rr(o)?i.getChild(n):Fn(o,i.getChild(n))}}function Ky(t,e,n,s){const i=ge(e,n),r=sn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ot(t.visibleWrites,i);return Fn(o,s.getNode().getImmediateChild(n))}else return null}function Gy(t,e){return sn(t.visibleWrites,e)}function Yy(t,e,n,s,i,r,o){let l;const a=Ot(t.visibleWrites,e),c=sn(a,X());if(c!=null)l=c;else if(n!=null)l=Fn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Qy(){return{visibleWrites:Ze.empty(),allWrites:[],lastWriteId:-1}}function oi(t,e,n,s){return Wu(t.writeTree,t.treePath,e,n,s)}function wo(t,e){return jy(t.writeTree,t.treePath,e)}function fa(t,e,n,s){return qy(t.writeTree,t.treePath,e,n,s)}function li(t,e){return Gy(t.writeTree,ge(t.treePath,e))}function Xy(t,e,n,s,i,r){return Yy(t.writeTree,t.treePath,e,n,s,i,r)}function Io(t,e,n){return Ky(t.writeTree,t.treePath,e,n)}function Uu(t,e){return Vu(ge(t.treePath,e),t.writeTree)}function Vu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,bs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Es(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ln(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,bs(s,e.snapshotNode,i.oldSnap));else throw $n("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ju=new Zy;class To{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new tn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Io(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),r=Xy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t){return{filter:t}}function tv(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nv(t,e,n,s,i){const r=new Jy;let o,l;if(n.type===Qe.OVERWRITE){const c=n;c.source.fromUser?o=xr(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=ai(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Qe.MERGE){const c=n;c.source.fromUser?o=iv(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Nr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Qe.ACK_USER_WRITE){const c=n;c.revert?o=lv(t,e,c.path,s,i,r):o=rv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Qe.LISTEN_COMPLETE)o=ov(t,e,n.path,s,r);else throw $n("Unknown operation type: "+n.type);const a=r.getChanges();return sv(e,o,a),{viewCache:o,changes:a}}function sv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Tr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Lu(Tr(e)))}}function qu(t,e,n,s,i,r){const o=e.eventCache;if(li(s,n)!=null)return e;{let l,a;if(j(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=nn(e),u=c instanceof L?c:L.EMPTY_NODE,h=wo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=oi(s,nn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=V(n);if(c===".priority"){b(Lt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=fa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=he(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=fa(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Io(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return os(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function ai(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=V(n);if(!a.isCompleteForPath(n)&&Lt(n)>1)return e;const g=he(n),R=a.getNode().getImmediateChild(_).updateChild(g,s);_===".priority"?c=u.updatePriority(a.getNode(),R):c=u.updateChild(a.getNode(),_,R,g,ju,null)}const h=zu(e,c,a.isFullyInitialized()||j(n),u.filtersNodes()),f=new To(i,h,r);return qu(t,h,n,i,f,l)}function xr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new To(i,e,r);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=os(e,c,!0,t.filter.filtersNodes());else{const h=V(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=os(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=he(n),_=l.getNode().getImmediateChild(h);let g;if(j(f))g=s;else{const A=u.getCompleteChild(h);A!=null?Ru(f)===".priority"&&A.getChild(Nu(f)).isEmpty()?g=A:g=A.updateChild(f,s):g=L.EMPTY_NODE}if(_.equals(g))a=e;else{const A=t.filter.updateChild(l.getNode(),h,g,f,u,o);a=os(e,A,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function da(t,e){return t.eventCache.isCompleteForChild(e)}function iv(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ge(n,a);da(e,V(u))&&(l=xr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ge(n,a);da(e,V(u))||(l=xr(t,l,u,c,i,r,o))}),l}function pa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Nr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;j(n)?c=s:c=new de(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),g=pa(t,_,f);a=ai(t,a,new le(h),g,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const g=e.serverCache.getNode().getImmediateChild(h),A=pa(t,g,f);a=ai(t,a,new le(h),A,i,r,o,l)}}),a}function rv(t,e,n,s,i,r,o){if(li(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ai(t,e,n,a.getNode().getChild(n),i,r,l,o);if(j(n)){let c=new de(null);return a.getNode().forEachChild(wn,(u,h)=>{c=c.set(new le(u),h)}),Nr(t,e,n,c,i,r,l,o)}else return e}else{let c=new de(null);return s.foreach((u,h)=>{const f=ge(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Nr(t,e,n,c,i,r,l,o)}}function ov(t,e,n,s,i){const r=e.serverCache,o=zu(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return qu(t,o,n,s,ju,i)}function lv(t,e,n,s,i,r){let o;if(li(s,n)!=null)return e;{const l=new To(s,e,i),a=e.eventCache.getNode();let c;if(j(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=oi(s,nn(e));else{const h=e.serverCache.getNode();b(h instanceof L,"serverChildren would be complete if leaf node"),u=wo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=V(n);let h=Io(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,he(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,L.EMPTY_NODE,he(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oi(s,nn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||li(s,X())!=null,os(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new yo(s.getIndex()),r=Ry(s);this.processor_=ev(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),u=new tn(a,o.isFullyInitialized(),i.filtersNodes()),h=new tn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Si(h,u),this.eventGenerator_=new ky(this.query_)}get query(){return this.query_}}function cv(t){return t.viewCache_.serverCache.getNode()}function uv(t,e){const n=nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function _a(t){return t.eventRegistrations_.length===0}function hv(t,e){t.eventRegistrations_.push(e)}function ma(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ga(t,e,n,s){e.type===Qe.MERGE&&e.source.queryId!==null&&(b(nn(t.viewCache_),"We should always have a full cache before handling merges"),b(Tr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=nv(t.processor_,i,e,n,s);return tv(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ku(t,r.changes,r.viewCache.eventCache.getNode(),null)}function fv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(Ln(r,o))}),n.isFullyInitialized()&&s.push(Lu(n.getNode())),Ku(t,s,n.getNode(),e)}function Ku(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Dy(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;class dv{constructor(){this.views=new Map}}function pv(t){b(!ci,"__referenceConstructor has already been defined"),ci=t}function _v(){return b(ci,"Reference.ts has not been loaded"),ci}function mv(t){return t.views.size===0}function So(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),ga(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ga(o,e,n,s));return r}}function gv(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=oi(n,i?s:null),a=!1;l?a=!0:s instanceof L?(l=wo(n,s),a=!1):(l=L.EMPTY_NODE,a=!1);const c=Si(new tn(l,a,!1),new tn(s,i,!1));return new av(e,c)}return o}function yv(t,e,n,s,i,r){const o=gv(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hv(o,n),fv(o,n)}function vv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ft(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ma(c,n,s)),_a(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ma(a,n,s)),_a(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ft(t)&&r.push(new(_v())(e._repo,e._path)),{removed:r,events:o}}function Gu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function In(t,e){let n=null;for(const s of t.views.values())n=n||uv(s,e);return n}function Yu(t,e){if(e._queryParams.loadsAllData())return Ri(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Qu(t,e){return Yu(t,e)!=null}function Ft(t){return Ri(t)!=null}function Ri(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;function Cv(t){b(!ui,"__referenceConstructor has already been defined"),ui=t}function Ev(){return b(ui,"Reference.ts has not been loaded"),ui}let bv=1;class ya{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=Qy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wv(t,e,n,s,i){return zy(t.pendingWriteTree_,e,n,s,i),i?Os(t,new en(Hu(),e,n)):[]}function gn(t,e,n=!1){const s=By(t.pendingWriteTree_,e);if($y(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(X(),!0):ke(s.children,o=>{r=r.set(new le(o),!0)}),Os(t,new ri(s.path,r,n))}else return[]}function xi(t,e,n){return Os(t,new en(Co(),e,n))}function Iv(t,e,n){const s=de.fromObject(n);return Os(t,new Ts(Co(),e,s))}function Tv(t,e){return Os(t,new Is(Co(),e))}function Sv(t,e,n){const s=Ro(t,n);if(s){const i=xo(s),r=i.path,o=i.queryId,l=Oe(r,e),a=new Is(Eo(o),l);return No(t,r,a)}else return[]}function Ar(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Qu(o,e))){const a=vv(o,e,n,s);mv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Ft(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=Nv(f);for(let g=0;g<_.length;++g){const A=_[g],R=A.query,N=eh(t,A);t.listenProvider_.startListening(as(R),hi(t,R),N.hashFn,N.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(as(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Ni(f));t.listenProvider_.stopListening(as(f),_)}))}Av(t,c)}return l}function Rv(t,e,n,s){const i=Ro(t,s);if(i!=null){const r=xo(i),o=r.path,l=r.queryId,a=Oe(o,e),c=new en(Eo(l),a,n);return No(t,o,c)}else return[]}function xv(t,e,n,s){const i=Ro(t,s);if(i){const r=xo(i),o=r.path,l=r.queryId,a=Oe(o,e),c=de.fromObject(n),u=new Ts(Eo(l),a,c);return No(t,o,u)}else return[]}function va(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const g=Oe(f,i);r=r||In(_,g),o=o||Ft(_)});let l=t.syncPointTree_.get(i);l?(o=o||Ft(l),r=r||In(l,X())):(l=new dv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,g)=>{const A=In(g,X());A&&(r=r.updateImmediateChild(_,A))}));const c=Qu(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ni(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Pv();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=bo(t.pendingWriteTree_,i);let h=yv(l,e,n,u,r,a);if(!c&&!o&&!s){const f=Yu(l,e);h=h.concat(Ov(t,e,f))}return h}function Xu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Oe(o,e),c=In(l,a);if(c)return c});return Wu(i,e,r,n,!0)}function Os(t,e){return Ju(e,t.syncPointTree_,null,bo(t.pendingWriteTree_,X()))}function Ju(t,e,n,s){if(j(t.path))return Zu(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=In(i,X()));let r=[];const o=V(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Uu(s,o);r=r.concat(Ju(l,a,c,u))}return i&&(r=r.concat(So(i,t,s,n))),r}}function Zu(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=In(i,X()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Uu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Zu(u,l,a,c)))}),i&&(r=r.concat(So(i,t,s,n))),r}function eh(t,e){const n=e.query,s=hi(t,n);return{hashFn:()=>(cv(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Sv(t,n._path,s):Tv(t,n._path);{const r=Tg(i,n);return Ar(t,n,null,r)}}}}function hi(t,e){const n=Ni(e);return t.queryToTagMap.get(n)}function Ni(t){return t._path.toString()+"$"+t._queryIdentifier}function Ro(t,e){return t.tagToQueryMap.get(e)}function xo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function No(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=bo(t.pendingWriteTree_,e);return So(s,n,i,null)}function Nv(t){return t.fold((e,n,s)=>{if(n&&Ft(n))return[Ri(n)];{let i=[];return n&&(i=Gu(n)),ke(s,(r,o)=>{i=i.concat(o)}),i}})}function as(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ev())(t._repo,t._path):t}function Av(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ni(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Pv(){return bv++}function Ov(t,e,n){const s=e._path,i=hi(t,e),r=eh(t,n),o=t.listenProvider_.startListening(as(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Ft(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!j(c)&&u&&Ft(u))return[Ri(u).query];{let f=[];return u&&(f=f.concat(Gu(u).map(_=>_.query))),ke(h,(_,g)=>{f=f.concat(g)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(as(u),hi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ao(n)}node(){return this.node_}}class Po{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new Po(this.syncTree_,n)}node(){return Xu(this.syncTree_,this.path_)}}const Mv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ca=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return kv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Dv(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},kv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Dv=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Lv=function(t,e,n,s){return Oo(e,new Po(n,t),s)},Fv=function(t,e,n){return Oo(t,new Ao(e),n)};function Oo(t,e,n){const s=t.getPriority().val(),i=Ca(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ca(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,Ie(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ve(i))),o.forEachChild(_e,(l,a)=>{const c=Oo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ko(t,e){let n=e instanceof le?e:new le(e),s=t,i=V(n);for(;i!==null;){const r=On(s.node.children,i)||{children:{},childCount:0};s=new Mo(i,s,r),n=he(n),i=V(n)}return s}function Vn(t){return t.node.value}function th(t,e){t.node.value=e,Pr(t)}function nh(t){return t.node.childCount>0}function Hv(t){return Vn(t)===void 0&&!nh(t)}function Ai(t,e){ke(t.node.children,(n,s)=>{e(new Mo(n,t,s))})}function sh(t,e,n,s){n&&!s&&e(t),Ai(t,i=>{sh(i,e,!0,s)}),n&&s&&e(t)}function zv(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ms(t){return new le(t.parent===null?t.name:Ms(t.parent)+"/"+t.name)}function Pr(t){t.parent!==null&&Bv(t.parent,t.name,t)}function Bv(t,e,n){const s=Hv(n),i=tt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Pr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=/[\[\].#$\/\u0000-\u001F\u007F]/,Wv=/[\[\].#$\u0000-\u001F\u007F]/,Xi=10*1024*1024,ih=function(t){return typeof t=="string"&&t.length!==0&&!$v.test(t)},rh=function(t){return typeof t=="string"&&t.length!==0&&!Wv.test(t)},Uv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rh(t)},oh=function(t,e,n){const s=n instanceof le?new ry(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ut(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ut(s)+" with contents = "+e.toString());if(lu(e))throw new Error(t+"contains "+e.toString()+" "+Ut(s));if(typeof e=="string"&&e.length>Xi/3&&Ii(e)>Xi)throw new Error(t+"contains a string greater than "+Xi+" utf8 bytes "+Ut(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ke(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ih(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ut(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oy(s,o),oh(t,l,s),ly(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ut(s)+" in addition to actual children.")}},lh=function(t,e,n,s){if(!(s&&n===void 0)&&!rh(n))throw new Error(qc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Vv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),lh(t,e,n,s)},jv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ih(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Uv(n))throw new Error(qc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ah(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!_o(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ch(t,e,n){ah(t,n),uh(t,s=>_o(s,e))}function rn(t,e,n){ah(t,n),uh(t,s=>Ye(s,e)||Ye(e,s))}function uh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Kv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Kv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yt&&we("event: "+n.toString()),As(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="repo_interrupt",Yv=25;class Qv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ii(),this.transactionQueueTree_=new Mo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xv(t,e,n){if(t.stats_=fo(t.repoInfo_),t.forceRestClient_||Ng())t.server_=new si(t.repoInfo_,(s,i,r,o)=>{Ea(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ba(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new yt(t.repoInfo_,e,(s,i,r,o)=>{Ea(t,s,i,r,o)},s=>{ba(t,s)},s=>{Zv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Dg(t.repoInfo_,()=>new My(t.stats_,t.server_)),t.infoData_=new xy,t.infoSyncTree_=new ya({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=xi(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Do(t,"connected",!1),t.serverSyncTree_=new ya({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);rn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Jv(t){const n=t.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hh(t){return Mv({timestamp:Jv(t)})}function Ea(t,e,n,s,i){t.dataUpdateCount++;const r=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Js(n,c=>Ie(c));o=xv(t.serverSyncTree_,r,a,i)}else{const a=Ie(n);o=Rv(t.serverSyncTree_,r,a,i)}else if(s){const a=Js(n,c=>Ie(c));o=Iv(t.serverSyncTree_,r,a)}else{const a=Ie(n);o=xi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Fo(t,r)),rn(t.eventQueue_,l,o)}function ba(t,e){Do(t,"connected",e),e===!1&&tC(t)}function Zv(t,e){ke(e,(n,s)=>{Do(t,n,s)})}function Do(t,e,n){const s=new le("/.info/"+e),i=Ie(n);t.infoData_.updateSnapshot(s,i);const r=xi(t.infoSyncTree_,s,i);rn(t.eventQueue_,s,r)}function eC(t){return t.nextWriteId_++}function tC(t){fh(t,"onDisconnectEvents");const e=hh(t),n=ii();Ir(t.onDisconnect_,X(),(i,r)=>{const o=Lv(i,r,t.serverSyncTree_,e);Fu(n,i,o)});let s=[];Ir(n,X(),(i,r)=>{s=s.concat(xi(t.serverSyncTree_,i,r));const o=oC(t,i);Fo(t,o)}),t.onDisconnect_=ii(),rn(t.eventQueue_,X(),s)}function nC(t,e,n){let s;V(e._path)===".info"?s=va(t.infoSyncTree_,e,n):s=va(t.serverSyncTree_,e,n),ch(t.eventQueue_,e._path,s)}function wa(t,e,n){let s;V(e._path)===".info"?s=Ar(t.infoSyncTree_,e,n):s=Ar(t.serverSyncTree_,e,n),ch(t.eventQueue_,e._path,s)}function sC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Gv)}function fh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function dh(t,e,n){return Xu(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Lo(t,e=t.transactionQueueTree_){if(e||Pi(t,e),Vn(e)){const n=_h(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&iC(t,Ms(e),n)}else nh(e)&&Ai(e,n=>{Lo(t,n)})}function iC(t,e,n){const s=n.map(c=>c.currentWriteId),i=dh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Oe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{fh(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(gn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Pi(t,ko(t.transactionQueueTree_,e)),Lo(t,t.transactionQueueTree_),rn(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)As(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Be("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Fo(t,e)}},o)}function Fo(t,e){const n=ph(t,e),s=Ms(n),i=_h(t,n);return rC(t,i,s),s}function rC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Oe(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(gn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Yv)u=!0,h="maxretry",i=i.concat(gn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=dh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){oh("transaction failed: Data returned ",_,a.path);let g=Ie(_);typeof _=="object"&&_!=null&&tt(_,".priority")||(g=g.updatePriority(f.getPriority()));const R=a.currentWriteId,N=hh(t),F=Fv(g,f,N);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=F,a.currentWriteId=eC(t),o.splice(o.indexOf(R),1),i=i.concat(wv(t.serverSyncTree_,a.path,F,a.currentWriteId,a.applyLocally)),i=i.concat(gn(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",i=i.concat(gn(t.serverSyncTree_,a.currentWriteId,!0))}rn(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Pi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)As(s[l]);Lo(t,t.transactionQueueTree_)}function ph(t,e){let n,s=t.transactionQueueTree_;for(n=V(e);n!==null&&Vn(s)===void 0;)s=ko(s,n),e=he(e),n=V(e);return s}function _h(t,e){const n=[];return mh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function mh(t,e,n){const s=Vn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ai(e,i=>{mh(t,i,n)})}function Pi(t,e){const n=Vn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,th(e,n.length>0?n:void 0)}Ai(e,s=>{Pi(t,s)})}function oC(t,e){const n=Ms(ph(t,e)),s=ko(t.transactionQueueTree_,e);return zv(s,i=>{Ji(t,i)}),Ji(t,s),sh(s,i=>{Ji(t,i)}),n}function Ji(t,e){const n=Vn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?th(e,void 0):n.length=r+1,rn(t.eventQueue_,Ms(e),i);for(let o=0;o<s.length;o++)As(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function aC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ia=function(t,e){const n=cC(t),s=n.namespace;n.domain==="firebase.com"&&Jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Cg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Og(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new le(n.pathString)}},cC=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=lC(t.substring(u,h)));const f=aC(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class yh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return j(this._path)?null:Ru(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=la(this._queryParams),n=uo(e);return n==="{}"?"default":n}get _queryObject(){return la(this._queryParams)}isEqual(e){if(e=io(e),!(e instanceof Ho))return!1;const n=this._repo===e._repo,s=_o(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+iy(this._path)}}class Et extends Ho{constructor(e,n){super(e,n,new vo,!1)}get parent(){const e=Nu(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ss{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new le(e),s=fi(this.ref,e);return new Ss(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ss(i,fi(this.ref,s),_e)))}hasChild(e){const n=new le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function hC(t,e){return t=io(t),t._checkNotDeleted("ref"),e!==void 0?fi(t._root,e):t._root}function fi(t,e){return t=io(t),V(t._path)===null?Vv("child","path",e,!1):lh("child","path",e,!1),new Et(t._repo,ge(t._path,e))}class zo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new gh("value",this,new Ss(e.snapshotNode,new Et(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yh(this,e,n):null}matches(e){return e instanceof zo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Bo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yh(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=fi(new Et(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new gh(e.type,this,new Ss(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Bo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function fC(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{wa(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new uC(n,r||void 0),l=e==="value"?new zo(o):new Bo(e,o);return nC(t._repo,t,l),()=>wa(t._repo,t,l)}function dC(t,e,n,s){return fC(t,"value",e,n,s)}pv(Et);Cv(Et);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="FIREBASE_DATABASE_EMULATOR_HOST",Or={};let _C=!1;function mC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ia(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[pC]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ia(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Er(Er.OWNER):new Pg(t.name,t.options,e);jv("Invalid Firebase Database URL",o),j(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yC(l,t,u,new Ag(t.name,n));return new vC(h,t)}function gC(t,e){const n=Or[e];(!n||n[t.key]!==t)&&Jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sC(t),delete n[t.key]}function yC(t,e,n,s){let i=Or[e.name];i||(i={},Or[e.name]=i);let r=i[t.toURLString()];return r&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Qv(t,_C,n,s),i[t.toURLString()]=r,r}class vC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function CC(t=Jc(),e){return ao(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){_g(co),kn(new Mn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return mC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Pt(Vl,jl,t),Pt(Vl,jl,"esm2017")}yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};EC();const bC=Y("Documentation"),wC=Y(" Vue\u2019s "),IC=q("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),TC=Y(" provides you with all information you need to get started. "),SC=Y("Tooling"),RC=Y(" This project is served and bundled with "),xC=q("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),NC=Y(". The recommended IDE setup is "),AC=q("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),PC=Y(" + "),OC=q("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),MC=Y(". If you need to test your components and web pages, check out "),kC=q("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),DC=Y(" and "),LC=q("a",{href:"https://on.cypress.io/component",target:"_blank"},"Cypress Component Testing",-1),FC=Y(". "),HC=q("br",null,null,-1),zC=Y(" More instructions are available in "),BC=q("code",null,"README.md",-1),$C=Y(". "),WC=Y("Ecosystem"),UC=Y(" Get official tools and libraries for your project: "),VC=q("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),jC=Y(", "),qC=q("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),KC=Y(", "),GC=q("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),YC=Y(", and "),QC=q("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),XC=Y(". If you need more resources, we suggest paying "),JC=q("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),ZC=Y(" a visit. "),eE=Y("Community"),tE=Y(" Got stuck? Ask your question on "),nE=q("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),sE=Y(", our official Discord server, or "),iE=q("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),rE=Y(". You should also subscribe to "),oE=q("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),lE=Y(" and follow the official "),aE=q("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),cE=Y(" twitter account for latest news in the Vue world. "),uE=Y("Support Vue"),hE=Y(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),fE=q("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),dE=Y(". "),pE={data(){return{message:"Hello World!"}},methods:{login(){const t=CC(),e=hC(t,"users");console.log(e),dC(e,n=>{const s=n.val();console.log(s)})}}},_E=Object.assign(pE,{__name:"TheWelcome",setup(t){return(e,n)=>(nt(),ut(He,null,[q("button",{onClick:n[0]||(n[0]=(...s)=>e.login&&e.login(...s))},"Reverse Message"),ne(Yn,null,{icon:ye(()=>[ne(m_)]),heading:ye(()=>[bC]),default:ye(()=>[wC,IC,TC]),_:1}),ne(Yn,null,{icon:ye(()=>[ne(b_)]),heading:ye(()=>[SC]),default:ye(()=>[RC,xC,NC,AC,PC,OC,MC,kC,DC,LC,FC,HC,zC,BC,$C]),_:1}),ne(Yn,null,{icon:ye(()=>[ne(x_)]),heading:ye(()=>[WC]),default:ye(()=>[UC,VC,jC,qC,KC,GC,YC,QC,XC,JC,ZC]),_:1}),ne(Yn,null,{icon:ye(()=>[ne(k_)]),heading:ye(()=>[eE]),default:ye(()=>[tE,nE,sE,iE,rE,oE,lE,aE,cE]),_:1}),ne(Yn,null,{icon:ye(()=>[ne(B_)]),heading:ye(()=>[uE]),default:ye(()=>[hE,fE,dE]),_:1})],64))}}),mE={__name:"HomeView",setup(t){return(e,n)=>(nt(),ut("main",null,[ne(_E)]))}},gE=Up({history:lp("/"),routes:[{path:"/",name:"home",component:mE},{path:"/about",name:"about",component:()=>o_(()=>import("./AboutView.6d97d33a.js"),["assets/AboutView.6d97d33a.js","assets/AboutView.4d995ba2.css"])}]});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n){this._delegate=e,this.firebase=n,Zs(e,new Mn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Zc(this._delegate)))}_getService(e,n=Xt){var s;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((s=i.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Xt){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Zs(this._delegate,e)}_addOrOverwriteComponent(e){Qc(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ta=new wi("app-compat","Firebase",vE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){const e={},n={__esModule:!0,initializeApp:r,app:i,registerVersion:Pt,setLogLevel:tu,onLog:eu,apps:null,SDK_VERSION:co,INTERNAL:{registerComponent:l,removeApp:s,useAsService:a,modularAPIs:pg}};n.default=n,Object.defineProperty(n,"apps",{get:o});function s(c){delete e[c]}function i(c){if(c=c||Xt,!tt(e,c))throw Ta.create("no-app",{appName:c});return e[c]}i.App=t;function r(c,u={}){const h=Xc(c,u);if(tt(e,h.name))return e[h.name];const f=new t(h,n);return e[h.name]=f,f}function o(){return Object.keys(e).map(c=>e[c])}function l(c){const u=c.name,h=u.replace("-compat","");if(kn(c)&&c.type==="PUBLIC"){const f=(_=i())=>{if(typeof _[h]!="function")throw Ta.create("invalid-app-argument",{appName:u});return _[h]()};c.serviceProps!==void 0&&ms(f,c.serviceProps),n[h]=f,t.prototype[h]=function(..._){return this._getService.bind(this,u).apply(this,c.multipleInstances?_:[])}}return c.type==="PUBLIC"?n[h]:null}function a(c,u){return u==="serverAuth"?null:u}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(){const t=CE(yE);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:vh,extendNamespace:e,createSubscribe:nm,ErrorFactory:wi,deepExtend:ms});function e(n){ms(t,n)}return t}const EE=vh();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new oo("@firebase/app-compat"),bE="@firebase/app-compat",wE="0.1.34";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){Pt(bE,wE,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(j_()&&self.firebase!==void 0){Sa.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Sa.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ch=EE;IE();var TE="firebase",SE="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ch.registerVersion(TE,SE,"app-compat");const RE="AIzaSyB8cvs-f2z2rzyCgV9hpsUapseMqZQMNt0",xE="repu-table.firebaseapp.com",NE="https://repu-table-default-rtdb.firebaseio.com",AE="repu-table",PE="repu-table.appspot.com",OE="1067494522826",ME="1:1067494522826:web:8a98fd2a5f0ee0bbe75933",kE={apiKey:RE,authDomain:xE,databaseURL:NE,projectId:AE,storageBucket:PE,messagingSenderId:OE,appId:ME};const Eh=$d(s_);Ch.initializeApp(kE);Eh.use(gE);Eh.mount("#app");export{Ht as _,q as a,ut as c,nt as o};
