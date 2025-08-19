(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Tt={},Hs=[],ti=()=>{},zp=()=>!1,go=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Oc=n=>n.startsWith("onUpdate:"),nn=Object.assign,Bc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Vp=Object.prototype.hasOwnProperty,gt=(n,e)=>Vp.call(n,e),Xe=Array.isArray,ks=n=>Yr(n)==="[object Map]",ar=n=>Yr(n)==="[object Set]",Pd=n=>Yr(n)==="[object Date]",Qe=n=>typeof n=="function",Wt=n=>typeof n=="string",ii=n=>typeof n=="symbol",Pt=n=>n!==null&&typeof n=="object",Bh=n=>(Pt(n)||Qe(n))&&Qe(n.then)&&Qe(n.catch),Hh=Object.prototype.toString,Yr=n=>Hh.call(n),Gp=n=>Yr(n).slice(8,-1),kh=n=>Yr(n)==="[object Object]",Hc=n=>Wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,wr=Fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Wp=/-(\w)/g,Nn=vo(n=>n.replace(Wp,(e,t)=>t?t.toUpperCase():"")),Xp=/\B([A-Z])/g,gs=vo(n=>n.replace(Xp,"-$1").toLowerCase()),_o=vo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bo=vo(n=>n?`on${_o(n)}`:""),Vi=(n,e)=>!Object.is(n,e),Ba=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ll=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Za=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ld;const xo=()=>Ld||(Ld=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kc(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Wt(i)?Kp(i):kc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Wt(n)||Pt(n))return n}const jp=/;(?![^(]*\))/g,qp=/:([^]+)/,Yp=/\/\*[^]*?\*\//g;function Kp(n){const e={};return n.replace(Yp,"").split(jp).forEach(t=>{if(t){const i=t.split(qp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function yo(n){let e="";if(Wt(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=yo(n[t]);i&&(e+=i+" ")}else if(Pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const $p="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zp=Fc($p);function zh(n){return!!n||n===""}function Jp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Kr(n[i],e[i]);return t}function Kr(n,e){if(n===e)return!0;let t=Pd(n),i=Pd(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ii(n),i=ii(e),t||i)return n===e;if(t=Xe(n),i=Xe(e),t||i)return t&&i?Jp(n,e):!1;if(t=Pt(n),i=Pt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Kr(n[a],e[a]))return!1}}return String(n)===String(e)}function zc(n,e){return n.findIndex(t=>Kr(t,e))}const Vh=n=>!!(n&&n.__v_isRef===!0),ye=n=>Wt(n)?n:n==null?"":Xe(n)||Pt(n)&&(n.toString===Hh||!Qe(n.toString))?Vh(n)?ye(n.value):JSON.stringify(n,Gh,2):String(n),Gh=(n,e)=>Vh(e)?Gh(n,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ho(i,r)+" =>"]=s,t),{})}:ar(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ho(t))}:ii(e)?Ho(e):Pt(e)&&!Xe(e)&&!kh(e)?String(e):e,Ho=(n,e="")=>{var t;return ii(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hn;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){++this._on===1&&(this.prevScope=hn,hn=this)}off(){this._on>0&&--this._on===0&&(hn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function em(){return hn}let Rt;const ko=new WeakSet;class Wh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ko.has(this)&&(ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Id(this),qh(this);const e=Rt,t=Gn;Rt=this,Gn=!0;try{return this.fn()}finally{Yh(this),Rt=e,Gn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wc(e);this.deps=this.depsTail=void 0,Id(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let Xh=0,Tr,Ar;function jh(n,e=!1){if(n.flags|=8,e){n.next=Ar,Ar=n;return}n.next=Tr,Tr=n}function Vc(){Xh++}function Gc(){if(--Xh>0)return;if(Ar){let e=Ar;for(Ar=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Tr;){let e=Tr;for(Tr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function qh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yh(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Wc(i),tm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Il(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Kh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ur)||(n.globalVersion=Ur,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Il(n))))return;n.flags|=2;const e=n.dep,t=Rt,i=Gn;Rt=n,Gn=!0;try{qh(n);const s=n.fn(n._value);(e.version===0||Vi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Rt=t,Gn=i,Yh(n),n.flags&=-3}}function Wc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Wc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function tm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Gn=!0;const $h=[];function Si(){$h.push(Gn),Gn=!1}function wi(){const n=$h.pop();Gn=n===void 0?!0:n}function Id(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Rt;Rt=void 0;try{e()}finally{Rt=t}}}let Ur=0;class nm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Rt||!Gn||Rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Rt)t=this.activeLink=new nm(Rt,this),Rt.deps?(t.prevDep=Rt.depsTail,Rt.depsTail.nextDep=t,Rt.depsTail=t):Rt.deps=Rt.depsTail=t,Zh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Rt.depsTail,t.nextDep=void 0,Rt.depsTail.nextDep=t,Rt.depsTail=t,Rt.deps===t&&(Rt.deps=i)}return t}trigger(e){this.version++,Ur++,this.notify(e)}notify(e){Vc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Gc()}}}function Zh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Dl=new WeakMap,fs=Symbol(""),Ul=Symbol(""),Nr=Symbol("");function Qt(n,e,t){if(Gn&&Rt){let i=Dl.get(n);i||Dl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Xc),s.map=i,s.key=t),s.track()}}function mi(n,e,t,i,s,r){const a=Dl.get(n);if(!a){Ur++;return}const o=l=>{l&&l.trigger()};if(Vc(),e==="clear")a.forEach(o);else{const l=Xe(n),c=l&&Hc(t);if(l&&t==="length"){const d=Number(i);a.forEach((u,h)=>{(h==="length"||h===Nr||!ii(h)&&h>=d)&&o(u)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Nr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(fs)),ks(n)&&o(a.get(Ul)));break;case"delete":l||(o(a.get(fs)),ks(n)&&o(a.get(Ul)));break;case"set":ks(n)&&o(a.get(fs));break}}Gc()}function _s(n){const e=mt(n);return e===n?e:(Qt(e,"iterate",Nr),Dn(n)?e:e.map($t))}function bo(n){return Qt(n=mt(n),"iterate",Nr),n}const im={__proto__:null,[Symbol.iterator](){return zo(this,Symbol.iterator,$t)},concat(...n){return _s(this).concat(...n.map(e=>Xe(e)?_s(e):e))},entries(){return zo(this,"entries",n=>(n[1]=$t(n[1]),n))},every(n,e){return oi(this,"every",n,e,void 0,arguments)},filter(n,e){return oi(this,"filter",n,e,t=>t.map($t),arguments)},find(n,e){return oi(this,"find",n,e,$t,arguments)},findIndex(n,e){return oi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return oi(this,"findLast",n,e,$t,arguments)},findLastIndex(n,e){return oi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return oi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Vo(this,"includes",n)},indexOf(...n){return Vo(this,"indexOf",n)},join(n){return _s(this).join(n)},lastIndexOf(...n){return Vo(this,"lastIndexOf",n)},map(n,e){return oi(this,"map",n,e,void 0,arguments)},pop(){return fr(this,"pop")},push(...n){return fr(this,"push",n)},reduce(n,...e){return Dd(this,"reduce",n,e)},reduceRight(n,...e){return Dd(this,"reduceRight",n,e)},shift(){return fr(this,"shift")},some(n,e){return oi(this,"some",n,e,void 0,arguments)},splice(...n){return fr(this,"splice",n)},toReversed(){return _s(this).toReversed()},toSorted(n){return _s(this).toSorted(n)},toSpliced(...n){return _s(this).toSpliced(...n)},unshift(...n){return fr(this,"unshift",n)},values(){return zo(this,"values",$t)}};function zo(n,e,t){const i=bo(n),s=i[e]();return i!==n&&!Dn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const sm=Array.prototype;function oi(n,e,t,i,s,r){const a=bo(n),o=a!==n&&!Dn(n),l=a[e];if(l!==sm[e]){const u=l.apply(n,r);return o?$t(u):u}let c=t;a!==n&&(o?c=function(u,h){return t.call(this,$t(u),h,n)}:t.length>2&&(c=function(u,h){return t.call(this,u,h,n)}));const d=l.call(a,c,i);return o&&s?s(d):d}function Dd(n,e,t,i){const s=bo(n);let r=t;return s!==n&&(Dn(n)?t.length>3&&(r=function(a,o,l){return t.call(this,a,o,l,n)}):r=function(a,o,l){return t.call(this,a,$t(o),l,n)}),s[e](r,...i)}function Vo(n,e,t){const i=mt(n);Qt(i,"iterate",Nr);const s=i[e](...t);return(s===-1||s===!1)&&Yc(t[0])?(t[0]=mt(t[0]),i[e](...t)):s}function fr(n,e,t=[]){Si(),Vc();const i=mt(n)[e].apply(n,t);return Gc(),wi(),i}const rm=Fc("__proto__,__v_isRef,__isVue"),Jh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ii));function am(n){ii(n)||(n=String(n));const e=mt(this);return Qt(e,"has",n),e.hasOwnProperty(n)}class Qh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?gm:sf:r?nf:tf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Xe(e);if(!s){let l;if(a&&(l=im[t]))return l;if(t==="hasOwnProperty")return am}const o=Reflect.get(e,t,tn(e)?e:i);return(ii(t)?Jh.has(t):rm(t))||(s||Qt(e,"get",t),r)?o:tn(o)?a&&Hc(t)?o:o.value:Pt(o)?s?af(o):ni(o):o}}class ef extends Qh{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Xi(r);if(!Dn(i)&&!Xi(i)&&(r=mt(r),i=mt(i)),!Xe(e)&&tn(r)&&!tn(i))return l?!1:(r.value=i,!0)}const a=Xe(e)&&Hc(t)?Number(t)<e.length:gt(e,t),o=Reflect.set(e,t,i,tn(e)?e:s);return e===mt(s)&&(a?Vi(i,r)&&mi(e,"set",t,i):mi(e,"add",t,i)),o}deleteProperty(e,t){const i=gt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&mi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ii(t)||!Jh.has(t))&&Qt(e,"has",t),i}ownKeys(e){return Qt(e,"iterate",Xe(e)?"length":fs),Reflect.ownKeys(e)}}class om extends Qh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lm=new ef,cm=new om,dm=new ef(!0);const Nl=n=>n,ra=n=>Reflect.getPrototypeOf(n);function um(n,e,t){return function(...i){const s=this.__v_raw,r=mt(s),a=ks(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),d=t?Nl:e?Ja:$t;return!e&&Qt(r,"iterate",l?Ul:fs),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:o?[d(u[0]),d(u[1])]:d(u),done:h}},[Symbol.iterator](){return this}}}}function aa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function hm(n,e){const t={get(s){const r=this.__v_raw,a=mt(r),o=mt(s);n||(Vi(s,o)&&Qt(a,"get",s),Qt(a,"get",o));const{has:l}=ra(a),c=e?Nl:n?Ja:$t;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Qt(mt(s),"iterate",fs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,a=mt(r),o=mt(s);return n||(Vi(s,o)&&Qt(a,"has",s),Qt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=mt(o),c=e?Nl:n?Ja:$t;return!n&&Qt(l,"iterate",fs),o.forEach((d,u)=>s.call(r,c(d),c(u),a))}};return nn(t,n?{add:aa("add"),set:aa("set"),delete:aa("delete"),clear:aa("clear")}:{add(s){!e&&!Dn(s)&&!Xi(s)&&(s=mt(s));const r=mt(this);return ra(r).has.call(r,s)||(r.add(s),mi(r,"add",s,s)),this},set(s,r){!e&&!Dn(r)&&!Xi(r)&&(r=mt(r));const a=mt(this),{has:o,get:l}=ra(a);let c=o.call(a,s);c||(s=mt(s),c=o.call(a,s));const d=l.call(a,s);return a.set(s,r),c?Vi(r,d)&&mi(a,"set",s,r):mi(a,"add",s,r),this},delete(s){const r=mt(this),{has:a,get:o}=ra(r);let l=a.call(r,s);l||(s=mt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&mi(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,a=s.clear();return r&&mi(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=um(s,n,e)}),t}function jc(n,e){const t=hm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(gt(t,s)&&s in i?t:i,s,r)}const fm={get:jc(!1,!1)},pm={get:jc(!1,!0)},mm={get:jc(!0,!1)};const tf=new WeakMap,nf=new WeakMap,sf=new WeakMap,gm=new WeakMap;function vm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _m(n){return n.__v_skip||!Object.isExtensible(n)?0:vm(Gp(n))}function ni(n){return Xi(n)?n:qc(n,!1,lm,fm,tf)}function rf(n){return qc(n,!1,dm,pm,nf)}function af(n){return qc(n,!0,cm,mm,sf)}function qc(n,e,t,i,s){if(!Pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=_m(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:t);return s.set(n,o),o}function zs(n){return Xi(n)?zs(n.__v_raw):!!(n&&n.__v_isReactive)}function Xi(n){return!!(n&&n.__v_isReadonly)}function Dn(n){return!!(n&&n.__v_isShallow)}function Yc(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function Ye(n){return!gt(n,"__v_skip")&&Object.isExtensible(n)&&Ll(n,"__v_skip",!0),n}const $t=n=>Pt(n)?ni(n):n,Ja=n=>Pt(n)?af(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function et(n){return of(n,!1)}function xm(n){return of(n,!0)}function of(n,e){return tn(n)?n:new ym(n,e)}class ym{constructor(e,t){this.dep=new Xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:$t(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Dn(e)||Xi(e);e=i?e:mt(e),Vi(e,t)&&(this._rawValue=e,this._value=i?e:$t(e),this.dep.trigger())}}function Vs(n){return tn(n)?n.value:n}const bm={get:(n,e,t)=>e==="__v_raw"?n:Vs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return tn(s)&&!tn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function lf(n){return zs(n)?n:new Proxy(n,bm)}class Mm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Rt!==this)return jh(this,!0),!0}get value(){const e=this.dep.track();return Kh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Em(n,e,t=!1){let i,s;return Qe(n)?i=n:(i=n.get,s=n.set),new Mm(i,s,t)}const oa={},Qa=new WeakMap;let as;function Sm(n,e=!1,t=as){if(t){let i=Qa.get(t);i||Qa.set(t,i=[]),i.push(n)}}function wm(n,e,t=Tt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=b=>s?b:Dn(b)||s===!1||s===0?gi(b,1):gi(b);let d,u,h,p,v=!1,_=!1;if(tn(n)?(u=()=>n.value,v=Dn(n)):zs(n)?(u=()=>c(n),v=!0):Xe(n)?(_=!0,v=n.some(b=>zs(b)||Dn(b)),u=()=>n.map(b=>{if(tn(b))return b.value;if(zs(b))return c(b);if(Qe(b))return l?l(b,2):b()})):Qe(n)?e?u=l?()=>l(n,2):n:u=()=>{if(h){Si();try{h()}finally{wi()}}const b=as;as=d;try{return l?l(n,3,[p]):n(p)}finally{as=b}}:u=ti,e&&s){const b=u,C=s===!0?1/0:s;u=()=>gi(b(),C)}const g=em(),m=()=>{d.stop(),g&&g.active&&Bc(g.effects,d)};if(r&&e){const b=e;e=(...C)=>{b(...C),m()}}let w=_?new Array(n.length).fill(oa):oa;const E=b=>{if(!(!(d.flags&1)||!d.dirty&&!b))if(e){const C=d.run();if(s||v||(_?C.some((L,I)=>Vi(L,w[I])):Vi(C,w))){h&&h();const L=as;as=d;try{const I=[C,w===oa?void 0:_&&w[0]===oa?[]:w,p];w=C,l?l(e,3,I):e(...I)}finally{as=L}}}else d.run()};return o&&o(E),d=new Wh(u),d.scheduler=a?()=>a(E,!1):E,p=b=>Sm(b,!1,d),h=d.onStop=()=>{const b=Qa.get(d);if(b){if(l)l(b,4);else for(const C of b)C();Qa.delete(d)}},e?i?E(!0):w=d.run():a?a(E.bind(null,!0),!0):d.run(),m.pause=d.pause.bind(d),m.resume=d.resume.bind(d),m.stop=m,m}function gi(n,e=1/0,t){if(e<=0||!Pt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,tn(n))gi(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)gi(n[i],e,t);else if(ar(n)||ks(n))n.forEach(i=>{gi(i,e,t)});else if(kh(n)){for(const i in n)gi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $r(n,e,t,i){try{return i?n(...i):n()}catch(s){Mo(s,e,t)}}function si(n,e,t,i){if(Qe(n)){const s=$r(n,e,t,i);return s&&Bh(s)&&s.catch(r=>{Mo(r,e,t)}),s}if(Xe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(si(n[r],e,t,i));return s}}function Mo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Tt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const d=o.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](n,l,c)===!1)return}o=o.parent}if(r){Si(),$r(r,null,10,[n,l,c]),wi();return}}Tm(n,t,s,i,a)}function Tm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const on=[];let $n=-1;const Gs=[];let Ni=null,Ds=0;const cf=Promise.resolve();let eo=null;function Kc(n){const e=eo||cf;return n?e.then(this?n.bind(this):n):e}function Am(n){let e=$n+1,t=on.length;for(;e<t;){const i=e+t>>>1,s=on[i],r=Fr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function $c(n){if(!(n.flags&1)){const e=Fr(n),t=on[on.length-1];!t||!(n.flags&2)&&e>=Fr(t)?on.push(n):on.splice(Am(e),0,n),n.flags|=1,df()}}function df(){eo||(eo=cf.then(hf))}function Rm(n){Xe(n)?Gs.push(...n):Ni&&n.id===-1?Ni.splice(Ds+1,0,n):n.flags&1||(Gs.push(n),n.flags|=1),df()}function Ud(n,e,t=$n+1){for(;t<on.length;t++){const i=on[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;on.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function uf(n){if(Gs.length){const e=[...new Set(Gs)].sort((t,i)=>Fr(t)-Fr(i));if(Gs.length=0,Ni){Ni.push(...e);return}for(Ni=e,Ds=0;Ds<Ni.length;Ds++){const t=Ni[Ds];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ni=null,Ds=0}}const Fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function hf(n){try{for($n=0;$n<on.length;$n++){const e=on[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$r(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<on.length;$n++){const e=on[$n];e&&(e.flags&=-2)}$n=-1,on.length=0,uf(),eo=null,(on.length||Gs.length)&&hf()}}let Mn=null,ff=null;function to(n){const e=Mn;return Mn=n,ff=n&&n.type.__scopeId||null,e}function It(n,e=Mn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Wd(-1);const r=to(e);let a;try{a=n(...s)}finally{to(r),i._d&&Wd(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Be(n,e){if(Mn===null)return n;const t=To(Mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=Tt]=e[s];r&&(Qe(r)&&(r={mounted:r,updated:r}),r.deep&&gi(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Ji(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Si(),si(l,t,8,[n.el,o,n,e]),wi())}}const Cm=Symbol("_vte"),Pm=n=>n.__isTeleport;function Zc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Zc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function pf(n,e){return Qe(n)?nn({name:n.name},e,{setup:n}):n}function mf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Rr(n,e,t,i,s=!1){if(Xe(n)){n.forEach((v,_)=>Rr(v,e&&(Xe(e)?e[_]:e),t,i,s));return}if(Cr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Rr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?To(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,d=o.refs===Tt?o.refs={}:o.refs,u=o.setupState,h=mt(u),p=u===Tt?()=>!1:v=>gt(h,v);if(c!=null&&c!==l&&(Wt(c)?(d[c]=null,p(c)&&(u[c]=null)):tn(c)&&(c.value=null)),Qe(l))$r(l,o,12,[a,d]);else{const v=Wt(l),_=tn(l);if(v||_){const g=()=>{if(n.f){const m=v?p(l)?u[l]:d[l]:l.value;s?Xe(m)&&Bc(m,r):Xe(m)?m.includes(r)||m.push(r):v?(d[l]=[r],p(l)&&(u[l]=d[l])):(l.value=[r],n.k&&(d[n.k]=l.value))}else v?(d[l]=a,p(l)&&(u[l]=a)):_&&(l.value=a,n.k&&(d[n.k]=a))};a?(g.id=-1,bn(g,t)):g()}}}xo().requestIdleCallback;xo().cancelIdleCallback;const Cr=n=>!!n.type.__asyncLoader,gf=n=>n.type.__isKeepAlive;function Lm(n,e){vf(n,"a",e)}function Im(n,e){vf(n,"da",e)}function vf(n,e,t=en){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Eo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)gf(s.parent.vnode)&&Dm(i,e,t,s),s=s.parent}}function Dm(n,e,t,i){const s=Eo(e,n,i,!0);gn(()=>{Bc(i[e],s)},t)}function Eo(n,e,t=en,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{Si();const o=Zr(t),l=si(e,t,n,a);return o(),wi(),l});return i?s.unshift(r):s.push(r),r}}const Ti=n=>(e,t=en)=>{(!Br||n==="sp")&&Eo(n,(...i)=>e(...i),t)},Um=Ti("bm"),Tn=Ti("m"),Nm=Ti("bu"),Fm=Ti("u"),Om=Ti("bum"),gn=Ti("um"),Bm=Ti("sp"),Hm=Ti("rtg"),km=Ti("rtc");function zm(n,e=en){Eo("ec",n,e)}const Vm="components";function Ws(n,e){return Wm(Vm,n,!0,e)||n}const Gm=Symbol.for("v-ndc");function Wm(n,e,t=!0,i=!1){const s=Mn||en;if(s){const r=s.type;{const o=Ig(r,!1);if(o&&(o===e||o===Nn(e)||o===_o(Nn(e))))return r}const a=Nd(s[n]||r[n],e)||Nd(s.appContext[n],e);return!a&&i?r:a}}function Nd(n,e){return n&&(n[e]||n[Nn(e)]||n[_o(Nn(e))])}function En(n,e,t,i){let s;const r=t,a=Xe(n);if(a||Wt(n)){const o=a&&zs(n);let l=!1,c=!1;o&&(l=!Dn(n),c=Xi(n),n=bo(n)),s=new Array(n.length);for(let d=0,u=n.length;d<u;d++)s[d]=e(l?c?Ja($t(n[d])):$t(n[d]):n[d],d,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(Pt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const d=o[l];s[l]=e(n[d],d,l,r)}}else s=[];return s}const Fl=n=>n?Of(n)?To(n):Fl(n.parent):null,Pr=nn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Fl(n.parent),$root:n=>Fl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>xf(n),$forceUpdate:n=>n.f||(n.f=()=>{$c(n.update)}),$nextTick:n=>n.n||(n.n=Kc.bind(n.proxy)),$watch:n=>ug.bind(n)}),Go=(n,e)=>n!==Tt&&!n.__isScriptSetup&&gt(n,e),Xm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Go(i,e))return a[e]=1,i[e];if(s!==Tt&&gt(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&gt(c,e))return a[e]=3,r[e];if(t!==Tt&&gt(t,e))return a[e]=4,t[e];Ol&&(a[e]=0)}}const d=Pr[e];let u,h;if(d)return e==="$attrs"&&Qt(n.attrs,"get",""),d(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Tt&&gt(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,gt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Go(s,e)?(s[e]=t,!0):i!==Tt&&gt(i,e)?(i[e]=t,!0):gt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==Tt&&gt(n,a)||Go(e,a)||(o=r[0])&&gt(o,a)||gt(i,a)||gt(Pr,a)||gt(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:gt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Fd(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ol=!0;function jm(n){const e=xf(n),t=n.proxy,i=n.ctx;Ol=!1,e.beforeCreate&&Od(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:d,beforeMount:u,mounted:h,beforeUpdate:p,updated:v,activated:_,deactivated:g,beforeDestroy:m,beforeUnmount:w,destroyed:E,unmounted:b,render:C,renderTracked:L,renderTriggered:I,errorCaptured:D,serverPrefetch:M,expose:S,inheritAttrs:P,components:X,directives:W,filters:$}=e;if(c&&qm(c,i,null),a)for(const j in a){const z=a[j];Qe(z)&&(i[j]=z.bind(t))}if(s){const j=s.call(t,t);Pt(j)&&(n.data=ni(j))}if(Ol=!0,r)for(const j in r){const z=r[j],he=Qe(z)?z.bind(t,t):Qe(z.get)?z.get.bind(t,t):ti,_e=!Qe(z)&&Qe(z.set)?z.set.bind(t):ti,Le=Ln({get:he,set:_e});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>Le.value,set:ke=>Le.value=ke})}if(o)for(const j in o)_f(o[j],i,t,j);if(l){const j=Qe(l)?l.call(t):l;Reflect.ownKeys(j).forEach(z=>{Ha(z,j[z])})}d&&Od(d,n,"c");function q(j,z){Xe(z)?z.forEach(he=>j(he.bind(t))):z&&j(z.bind(t))}if(q(Um,u),q(Tn,h),q(Nm,p),q(Fm,v),q(Lm,_),q(Im,g),q(zm,D),q(km,L),q(Hm,I),q(Om,w),q(gn,b),q(Bm,M),Xe(S))if(S.length){const j=n.exposed||(n.exposed={});S.forEach(z=>{Object.defineProperty(j,z,{get:()=>t[z],set:he=>t[z]=he,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===ti&&(n.render=C),P!=null&&(n.inheritAttrs=P),X&&(n.components=X),W&&(n.directives=W),M&&mf(n)}function qm(n,e,t=ti){Xe(n)&&(n=Bl(n));for(const i in n){const s=n[i];let r;Pt(s)?"default"in s?r=xi(s.from||i,s.default,!0):r=xi(s.from||i):r=xi(s),tn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Od(n,e,t){si(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function _f(n,e,t,i){let s=i.includes(".")?If(t,i):()=>t[i];if(Wt(n)){const r=e[n];Qe(r)&&ka(s,r)}else if(Qe(n))ka(s,n.bind(t));else if(Pt(n))if(Xe(n))n.forEach(r=>_f(r,e,t,i));else{const r=Qe(n.handler)?n.handler.bind(t):e[n.handler];Qe(r)&&ka(s,r,n)}}function xf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>no(l,c,a,!0)),no(l,e,a)),Pt(e)&&r.set(e,l),l}function no(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&no(n,r,t,!0),s&&s.forEach(a=>no(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Ym[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Ym={data:Bd,props:Hd,emits:Hd,methods:Er,computed:Er,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Er,directives:Er,watch:$m,provide:Bd,inject:Km};function Bd(n,e){return e?n?function(){return nn(Qe(n)?n.call(this,this):n,Qe(e)?e.call(this,this):e)}:e:n}function Km(n,e){return Er(Bl(n),Bl(e))}function Bl(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function rn(n,e){return n?[...new Set([].concat(n,e))]:e}function Er(n,e){return n?nn(Object.create(null),n,e):e}function Hd(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:nn(Object.create(null),Fd(n),Fd(e??{})):e}function $m(n,e){if(!n)return e;if(!e)return n;const t=nn(Object.create(null),n);for(const i in e)t[i]=rn(n[i],e[i]);return t}function yf(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zm=0;function Jm(n,e){return function(i,s=null){Qe(i)||(i=nn({},i)),s!=null&&!Pt(s)&&(s=null);const r=yf(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Zm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ug,get config(){return r.config},set config(d){},use(d,...u){return a.has(d)||(d&&Qe(d.install)?(a.add(d),d.install(c,...u)):Qe(d)&&(a.add(d),d(c,...u))),c},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),c},component(d,u){return u?(r.components[d]=u,c):r.components[d]},directive(d,u){return u?(r.directives[d]=u,c):r.directives[d]},mount(d,u,h){if(!l){const p=c._ceVNode||rt(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,d,h),l=!0,c._container=d,d.__vue_app__=c,To(p.component)}},onUnmount(d){o.push(d)},unmount(){l&&(si(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(d,u){return r.provides[d]=u,c},runWithContext(d){const u=Xs;Xs=c;try{return d()}finally{Xs=u}}};return c}}let Xs=null;function Ha(n,e){if(en){let t=en.provides;const i=en.parent&&en.parent.provides;i===t&&(t=en.provides=Object.create(i)),t[n]=e}}function xi(n,e,t=!1){const i=Ag();if(i||Xs){let s=Xs?Xs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Qe(e)?e.call(i&&i.proxy):e}}const bf={},Mf=()=>Object.create(bf),Ef=n=>Object.getPrototypeOf(n)===bf;function Qm(n,e,t,i=!1){const s={},r=Mf();n.propsDefaults=Object.create(null),Sf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:rf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function eg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=mt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let h=d[u];if(So(n.emitsOptions,h))continue;const p=e[h];if(l)if(gt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const v=Nn(h);s[v]=Hl(l,o,v,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{Sf(n,e,s,r)&&(c=!0);let d;for(const u in o)(!e||!gt(e,u)&&((d=gs(u))===u||!gt(e,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(s[u]=Hl(l,o,u,void 0,n,!0)):delete s[u]);if(r!==o)for(const u in r)(!e||!gt(e,u))&&(delete r[u],c=!0)}c&&mi(n.attrs,"set","")}function Sf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(wr(l))continue;const c=e[l];let d;s&&gt(s,d=Nn(l))?!r||!r.includes(d)?t[d]=c:(o||(o={}))[d]=c:So(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=mt(t),c=o||Tt;for(let d=0;d<r.length;d++){const u=r[d];t[u]=Hl(s,l,u,c[u],n,!gt(c,u))}}return a}function Hl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=gt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const d=Zr(s);i=c[t]=l.call(null,e),d()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===gs(t))&&(i=!0))}return i}const tg=new WeakMap;function wf(n,e,t=!1){const i=t?tg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Qe(n)){const d=u=>{l=!0;const[h,p]=wf(u,e,!0);nn(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!l)return Pt(n)&&i.set(n,Hs),Hs;if(Xe(r))for(let d=0;d<r.length;d++){const u=Nn(r[d]);kd(u)&&(a[u]=Tt)}else if(r)for(const d in r){const u=Nn(d);if(kd(u)){const h=r[d],p=a[u]=Xe(h)||Qe(h)?{type:h}:nn({},h),v=p.type;let _=!1,g=!0;if(Xe(v))for(let m=0;m<v.length;++m){const w=v[m],E=Qe(w)&&w.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(g=!1)}else _=Qe(v)&&v.name==="Boolean";p[0]=_,p[1]=g,(_||gt(p,"default"))&&o.push(u)}}const c=[a,o];return Pt(n)&&i.set(n,c),c}function kd(n){return n[0]!=="$"&&!wr(n)}const Jc=n=>n==="_"||n==="__"||n==="_ctx"||n==="$stable",Qc=n=>Xe(n)?n.map(Jn):[Jn(n)],ng=(n,e,t)=>{if(e._n)return e;const i=It((...s)=>Qc(e(...s)),t);return i._c=!1,i},Tf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Jc(s))continue;const r=n[s];if(Qe(r))e[s]=ng(s,r,i);else if(r!=null){const a=Qc(r);e[s]=()=>a}}},Af=(n,e)=>{const t=Qc(e);n.slots.default=()=>t},Rf=(n,e,t)=>{for(const i in e)(t||!Jc(i))&&(n[i]=e[i])},ig=(n,e,t)=>{const i=n.slots=Mf();if(n.vnode.shapeFlag&32){const s=e.__;s&&Ll(i,"__",s,!0);const r=e._;r?(Rf(i,e,t),t&&Ll(i,"_",r,!0)):Tf(e,i)}else e&&Af(n,e)},sg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=Tt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Rf(s,e,t):(r=!e.$stable,Tf(e,s)),a=e}else e&&(Af(n,e),a={default:1});if(r)for(const o in s)!Jc(o)&&a[o]==null&&delete s[o]},bn=_g;function rg(n){return ag(n)}function ag(n,e){const t=xo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:h,setScopeId:p=ti,insertStaticContent:v}=n,_=(R,x,O,G=null,ee=null,V=null,de=void 0,J=null,re=!!x.dynamicChildren)=>{if(R===x)return;R&&!pr(R,x)&&(G=N(R),ke(R,ee,V,!0),R=null),x.patchFlag===-2&&(re=!1,x.dynamicChildren=null);const{type:oe,ref:Me,shapeFlag:T}=x;switch(oe){case wo:g(R,x,O,G);break;case ji:m(R,x,O,G);break;case za:R==null&&w(x,O,G,de);break;case Ht:X(R,x,O,G,ee,V,de,J,re);break;default:T&1?C(R,x,O,G,ee,V,de,J,re):T&6?W(R,x,O,G,ee,V,de,J,re):(T&64||T&128)&&oe.process(R,x,O,G,ee,V,de,J,re,ce)}Me!=null&&ee?Rr(Me,R&&R.ref,V,x||R,!x):Me==null&&R&&R.ref!=null&&Rr(R.ref,null,V,R,!0)},g=(R,x,O,G)=>{if(R==null)i(x.el=o(x.children),O,G);else{const ee=x.el=R.el;x.children!==R.children&&c(ee,x.children)}},m=(R,x,O,G)=>{R==null?i(x.el=l(x.children||""),O,G):x.el=R.el},w=(R,x,O,G)=>{[R.el,R.anchor]=v(R.children,x,O,G,R.el,R.anchor)},E=({el:R,anchor:x},O,G)=>{let ee;for(;R&&R!==x;)ee=h(R),i(R,O,G),R=ee;i(x,O,G)},b=({el:R,anchor:x})=>{let O;for(;R&&R!==x;)O=h(R),s(R),R=O;s(x)},C=(R,x,O,G,ee,V,de,J,re)=>{x.type==="svg"?de="svg":x.type==="math"&&(de="mathml"),R==null?L(x,O,G,ee,V,de,J,re):M(R,x,ee,V,de,J,re)},L=(R,x,O,G,ee,V,de,J)=>{let re,oe;const{props:Me,shapeFlag:T,transition:y,dirs:U}=R;if(re=R.el=a(R.type,V,Me&&Me.is,Me),T&8?d(re,R.children):T&16&&D(R.children,re,null,G,ee,Wo(R,V),de,J),U&&Ji(R,null,G,"created"),I(re,R,R.scopeId,de,G),Me){for(const ne in Me)ne!=="value"&&!wr(ne)&&r(re,ne,null,Me[ne],V,G);"value"in Me&&r(re,"value",null,Me.value,V),(oe=Me.onVnodeBeforeMount)&&Kn(oe,G,R)}U&&Ji(R,null,G,"beforeMount");const Y=og(ee,y);Y&&y.beforeEnter(re),i(re,x,O),((oe=Me&&Me.onVnodeMounted)||Y||U)&&bn(()=>{oe&&Kn(oe,G,R),Y&&y.enter(re),U&&Ji(R,null,G,"mounted")},ee)},I=(R,x,O,G,ee)=>{if(O&&p(R,O),G)for(let V=0;V<G.length;V++)p(R,G[V]);if(ee){let V=ee.subTree;if(x===V||Uf(V.type)&&(V.ssContent===x||V.ssFallback===x)){const de=ee.vnode;I(R,de,de.scopeId,de.slotScopeIds,ee.parent)}}},D=(R,x,O,G,ee,V,de,J,re=0)=>{for(let oe=re;oe<R.length;oe++){const Me=R[oe]=J?Fi(R[oe]):Jn(R[oe]);_(null,Me,x,O,G,ee,V,de,J)}},M=(R,x,O,G,ee,V,de)=>{const J=x.el=R.el;let{patchFlag:re,dynamicChildren:oe,dirs:Me}=x;re|=R.patchFlag&16;const T=R.props||Tt,y=x.props||Tt;let U;if(O&&Qi(O,!1),(U=y.onVnodeBeforeUpdate)&&Kn(U,O,x,R),Me&&Ji(x,R,O,"beforeUpdate"),O&&Qi(O,!0),(T.innerHTML&&y.innerHTML==null||T.textContent&&y.textContent==null)&&d(J,""),oe?S(R.dynamicChildren,oe,J,O,G,Wo(x,ee),V):de||z(R,x,J,null,O,G,Wo(x,ee),V,!1),re>0){if(re&16)P(J,T,y,O,ee);else if(re&2&&T.class!==y.class&&r(J,"class",null,y.class,ee),re&4&&r(J,"style",T.style,y.style,ee),re&8){const Y=x.dynamicProps;for(let ne=0;ne<Y.length;ne++){const K=Y[ne],Ae=T[K],ue=y[K];(ue!==Ae||K==="value")&&r(J,K,Ae,ue,ee,O)}}re&1&&R.children!==x.children&&d(J,x.children)}else!de&&oe==null&&P(J,T,y,O,ee);((U=y.onVnodeUpdated)||Me)&&bn(()=>{U&&Kn(U,O,x,R),Me&&Ji(x,R,O,"updated")},G)},S=(R,x,O,G,ee,V,de)=>{for(let J=0;J<x.length;J++){const re=R[J],oe=x[J],Me=re.el&&(re.type===Ht||!pr(re,oe)||re.shapeFlag&198)?u(re.el):O;_(re,oe,Me,null,G,ee,V,de,!0)}},P=(R,x,O,G,ee)=>{if(x!==O){if(x!==Tt)for(const V in x)!wr(V)&&!(V in O)&&r(R,V,x[V],null,ee,G);for(const V in O){if(wr(V))continue;const de=O[V],J=x[V];de!==J&&V!=="value"&&r(R,V,J,de,ee,G)}"value"in O&&r(R,"value",x.value,O.value,ee)}},X=(R,x,O,G,ee,V,de,J,re)=>{const oe=x.el=R?R.el:o(""),Me=x.anchor=R?R.anchor:o("");let{patchFlag:T,dynamicChildren:y,slotScopeIds:U}=x;U&&(J=J?J.concat(U):U),R==null?(i(oe,O,G),i(Me,O,G),D(x.children||[],O,Me,ee,V,de,J,re)):T>0&&T&64&&y&&R.dynamicChildren?(S(R.dynamicChildren,y,O,ee,V,de,J),(x.key!=null||ee&&x===ee.subTree)&&Cf(R,x,!0)):z(R,x,O,Me,ee,V,de,J,re)},W=(R,x,O,G,ee,V,de,J,re)=>{x.slotScopeIds=J,R==null?x.shapeFlag&512?ee.ctx.activate(x,O,G,de,re):$(x,O,G,ee,V,de,re):te(R,x,re)},$=(R,x,O,G,ee,V,de)=>{const J=R.component=Tg(R,G,ee);if(gf(R)&&(J.ctx.renderer=ce),Rg(J,!1,de),J.asyncDep){if(ee&&ee.registerDep(J,q,de),!R.el){const re=J.subTree=rt(ji);m(null,re,x,O),R.placeholder=re.el}}else q(J,R,x,O,ee,V,de)},te=(R,x,O)=>{const G=x.component=R.component;if(gg(R,x,O))if(G.asyncDep&&!G.asyncResolved){j(G,x,O);return}else G.next=x,G.update();else x.el=R.el,G.vnode=x},q=(R,x,O,G,ee,V,de)=>{const J=()=>{if(R.isMounted){let{next:T,bu:y,u:U,parent:Y,vnode:ne}=R;{const Ce=Pf(R);if(Ce){T&&(T.el=ne.el,j(R,T,de)),Ce.asyncDep.then(()=>{R.isUnmounted||J()});return}}let K=T,Ae;Qi(R,!1),T?(T.el=ne.el,j(R,T,de)):T=ne,y&&Ba(y),(Ae=T.props&&T.props.onVnodeBeforeUpdate)&&Kn(Ae,Y,T,ne),Qi(R,!0);const ue=Vd(R),Re=R.subTree;R.subTree=ue,_(Re,ue,u(Re.el),N(Re),R,ee,V),T.el=ue.el,K===null&&vg(R,ue.el),U&&bn(U,ee),(Ae=T.props&&T.props.onVnodeUpdated)&&bn(()=>Kn(Ae,Y,T,ne),ee)}else{let T;const{el:y,props:U}=x,{bm:Y,m:ne,parent:K,root:Ae,type:ue}=R,Re=Cr(x);Qi(R,!1),Y&&Ba(Y),!Re&&(T=U&&U.onVnodeBeforeMount)&&Kn(T,K,x),Qi(R,!0);{Ae.ce&&Ae.ce._def.shadowRoot!==!1&&Ae.ce._injectChildStyle(ue);const Ce=R.subTree=Vd(R);_(null,Ce,O,G,R,ee,V),x.el=Ce.el}if(ne&&bn(ne,ee),!Re&&(T=U&&U.onVnodeMounted)){const Ce=x;bn(()=>Kn(T,K,Ce),ee)}(x.shapeFlag&256||K&&Cr(K.vnode)&&K.vnode.shapeFlag&256)&&R.a&&bn(R.a,ee),R.isMounted=!0,x=O=G=null}};R.scope.on();const re=R.effect=new Wh(J);R.scope.off();const oe=R.update=re.run.bind(re),Me=R.job=re.runIfDirty.bind(re);Me.i=R,Me.id=R.uid,re.scheduler=()=>$c(Me),Qi(R,!0),oe()},j=(R,x,O)=>{x.component=R;const G=R.vnode.props;R.vnode=x,R.next=null,eg(R,x.props,G,O),sg(R,x.children,O),Si(),Ud(R),wi()},z=(R,x,O,G,ee,V,de,J,re=!1)=>{const oe=R&&R.children,Me=R?R.shapeFlag:0,T=x.children,{patchFlag:y,shapeFlag:U}=x;if(y>0){if(y&128){_e(oe,T,O,G,ee,V,de,J,re);return}else if(y&256){he(oe,T,O,G,ee,V,de,J,re);return}}U&8?(Me&16&&ve(oe,ee,V),T!==oe&&d(O,T)):Me&16?U&16?_e(oe,T,O,G,ee,V,de,J,re):ve(oe,ee,V,!0):(Me&8&&d(O,""),U&16&&D(T,O,G,ee,V,de,J,re))},he=(R,x,O,G,ee,V,de,J,re)=>{R=R||Hs,x=x||Hs;const oe=R.length,Me=x.length,T=Math.min(oe,Me);let y;for(y=0;y<T;y++){const U=x[y]=re?Fi(x[y]):Jn(x[y]);_(R[y],U,O,null,ee,V,de,J,re)}oe>Me?ve(R,ee,V,!0,!1,T):D(x,O,G,ee,V,de,J,re,T)},_e=(R,x,O,G,ee,V,de,J,re)=>{let oe=0;const Me=x.length;let T=R.length-1,y=Me-1;for(;oe<=T&&oe<=y;){const U=R[oe],Y=x[oe]=re?Fi(x[oe]):Jn(x[oe]);if(pr(U,Y))_(U,Y,O,null,ee,V,de,J,re);else break;oe++}for(;oe<=T&&oe<=y;){const U=R[T],Y=x[y]=re?Fi(x[y]):Jn(x[y]);if(pr(U,Y))_(U,Y,O,null,ee,V,de,J,re);else break;T--,y--}if(oe>T){if(oe<=y){const U=y+1,Y=U<Me?x[U].el:G;for(;oe<=y;)_(null,x[oe]=re?Fi(x[oe]):Jn(x[oe]),O,Y,ee,V,de,J,re),oe++}}else if(oe>y)for(;oe<=T;)ke(R[oe],ee,V,!0),oe++;else{const U=oe,Y=oe,ne=new Map;for(oe=Y;oe<=y;oe++){const Ue=x[oe]=re?Fi(x[oe]):Jn(x[oe]);Ue.key!=null&&ne.set(Ue.key,oe)}let K,Ae=0;const ue=y-Y+1;let Re=!1,Ce=0;const fe=new Array(ue);for(oe=0;oe<ue;oe++)fe[oe]=0;for(oe=U;oe<=T;oe++){const Ue=R[oe];if(Ae>=ue){ke(Ue,ee,V,!0);continue}let Pe;if(Ue.key!=null)Pe=ne.get(Ue.key);else for(K=Y;K<=y;K++)if(fe[K-Y]===0&&pr(Ue,x[K])){Pe=K;break}Pe===void 0?ke(Ue,ee,V,!0):(fe[Pe-Y]=oe+1,Pe>=Ce?Ce=Pe:Re=!0,_(Ue,x[Pe],O,null,ee,V,de,J,re),Ae++)}const Se=Re?lg(fe):Hs;for(K=Se.length-1,oe=ue-1;oe>=0;oe--){const Ue=Y+oe,Pe=x[Ue],be=x[Ue+1],Ze=Ue+1<Me?be.el||be.placeholder:G;fe[oe]===0?_(null,Pe,O,Ze,ee,V,de,J,re):Re&&(K<0||oe!==Se[K]?Le(Pe,O,Ze,2):K--)}}},Le=(R,x,O,G,ee=null)=>{const{el:V,type:de,transition:J,children:re,shapeFlag:oe}=R;if(oe&6){Le(R.component.subTree,x,O,G);return}if(oe&128){R.suspense.move(x,O,G);return}if(oe&64){de.move(R,x,O,ce);return}if(de===Ht){i(V,x,O);for(let T=0;T<re.length;T++)Le(re[T],x,O,G);i(R.anchor,x,O);return}if(de===za){E(R,x,O);return}if(G!==2&&oe&1&&J)if(G===0)J.beforeEnter(V),i(V,x,O),bn(()=>J.enter(V),ee);else{const{leave:T,delayLeave:y,afterLeave:U}=J,Y=()=>{R.ctx.isUnmounted?s(V):i(V,x,O)},ne=()=>{T(V,()=>{Y(),U&&U()})};y?y(V,Y,ne):ne()}else i(V,x,O)},ke=(R,x,O,G=!1,ee=!1)=>{const{type:V,props:de,ref:J,children:re,dynamicChildren:oe,shapeFlag:Me,patchFlag:T,dirs:y,cacheIndex:U}=R;if(T===-2&&(ee=!1),J!=null&&(Si(),Rr(J,null,O,R,!0),wi()),U!=null&&(x.renderCache[U]=void 0),Me&256){x.ctx.deactivate(R);return}const Y=Me&1&&y,ne=!Cr(R);let K;if(ne&&(K=de&&de.onVnodeBeforeUnmount)&&Kn(K,x,R),Me&6)ie(R.component,O,G);else{if(Me&128){R.suspense.unmount(O,G);return}Y&&Ji(R,null,x,"beforeUnmount"),Me&64?R.type.remove(R,x,O,ce,G):oe&&!oe.hasOnce&&(V!==Ht||T>0&&T&64)?ve(oe,x,O,!1,!0):(V===Ht&&T&384||!ee&&Me&16)&&ve(re,x,O),G&&ht(R)}(ne&&(K=de&&de.onVnodeUnmounted)||Y)&&bn(()=>{K&&Kn(K,x,R),Y&&Ji(R,null,x,"unmounted")},O)},ht=R=>{const{type:x,el:O,anchor:G,transition:ee}=R;if(x===Ht){lt(O,G);return}if(x===za){b(R);return}const V=()=>{s(O),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(R.shapeFlag&1&&ee&&!ee.persisted){const{leave:de,delayLeave:J}=ee,re=()=>de(O,V);J?J(R.el,V,re):re()}else V()},lt=(R,x)=>{let O;for(;R!==x;)O=h(R),s(R),R=O;s(x)},ie=(R,x,O)=>{const{bum:G,scope:ee,job:V,subTree:de,um:J,m:re,a:oe,parent:Me,slots:{__:T}}=R;zd(re),zd(oe),G&&Ba(G),Me&&Xe(T)&&T.forEach(y=>{Me.renderCache[y]=void 0}),ee.stop(),V&&(V.flags|=8,ke(de,R,x,O)),J&&bn(J,x),bn(()=>{R.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},ve=(R,x,O,G=!1,ee=!1,V=0)=>{for(let de=V;de<R.length;de++)ke(R[de],x,O,G,ee)},N=R=>{if(R.shapeFlag&6)return N(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const x=h(R.anchor||R.el),O=x&&x[Cm];return O?h(O):x};let ae=!1;const se=(R,x,O)=>{R==null?x._vnode&&ke(x._vnode,null,null,!0):_(x._vnode||null,R,x,null,null,null,O),x._vnode=R,ae||(ae=!0,Ud(),uf(),ae=!1)},ce={p:_,um:ke,m:Le,r:ht,mt:$,mc:D,pc:z,pbc:S,n:N,o:n};return{render:se,hydrate:void 0,createApp:Jm(se)}}function Wo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function og(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Cf(n,e,t=!1){const i=n.children,s=e.children;if(Xe(i)&&Xe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Fi(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Cf(a,o)),o.type===wo&&(o.el=a.el),o.type===ji&&!o.el&&(o.el=a.el)}}function lg(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Pf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pf(e)}function zd(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const cg=Symbol.for("v-scx"),dg=()=>xi(cg);function ka(n,e,t){return Lf(n,e,t)}function Lf(n,e,t=Tt){const{immediate:i,deep:s,flush:r,once:a}=t,o=nn({},t),l=e&&i||!e&&r!=="post";let c;if(Br){if(r==="sync"){const p=dg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ti,p.resume=ti,p.pause=ti,p}}const d=en;o.call=(p,v,_)=>si(p,d,v,_);let u=!1;r==="post"?o.scheduler=p=>{bn(p,d&&d.suspense)}:r!=="sync"&&(u=!0,o.scheduler=(p,v)=>{v?p():$c(p)}),o.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const h=wm(n,e,o);return Br&&(c?c.push(h):l&&h()),h}function ug(n,e,t){const i=this.proxy,s=Wt(n)?n.includes(".")?If(i,n):()=>i[n]:n.bind(i,i);let r;Qe(e)?r=e:(r=e.handler,t=e);const a=Zr(this),o=Lf(s,r.bind(i),t);return a(),o}function If(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const hg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Nn(e)}Modifiers`]||n[`${gs(e)}Modifiers`];function fg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Tt;let s=t;const r=e.startsWith("update:"),a=r&&hg(i,e.slice(7));a&&(a.trim&&(s=t.map(d=>Wt(d)?d.trim():d)),a.number&&(s=t.map(Za)));let o,l=i[o=Bo(e)]||i[o=Bo(Nn(e))];!l&&r&&(l=i[o=Bo(gs(e))]),l&&si(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,si(c,n,6,s)}}function Df(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Qe(n)){const l=c=>{const d=Df(c,e,!0);d&&(o=!0,nn(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(Pt(n)&&i.set(n,null),null):(Xe(r)?r.forEach(l=>a[l]=null):nn(a,r),Pt(n)&&i.set(n,a),a)}function So(n,e){return!n||!go(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(n,e[0].toLowerCase()+e.slice(1))||gt(n,gs(e))||gt(n,e))}function Vd(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:d,props:u,data:h,setupState:p,ctx:v,inheritAttrs:_}=n,g=to(n);let m,w;try{if(t.shapeFlag&4){const b=s||i,C=b;m=Jn(c.call(C,b,d,u,p,h,v)),w=o}else{const b=e;m=Jn(b.length>1?b(u,{attrs:o,slots:a,emit:l}):b(u,null)),w=e.props?o:pg(o)}}catch(b){Lr.length=0,Mo(b,n,1),m=rt(ji)}let E=m;if(w&&_!==!1){const b=Object.keys(w),{shapeFlag:C}=E;b.length&&C&7&&(r&&b.some(Oc)&&(w=mg(w,r)),E=$s(E,w,!1,!0))}return t.dirs&&(E=$s(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Zc(E,t.transition),m=E,to(g),m}const pg=n=>{let e;for(const t in n)(t==="class"||t==="style"||go(t))&&((e||(e={}))[t]=n[t]);return e},mg=(n,e)=>{const t={};for(const i in n)(!Oc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function gg(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Gd(i,a,c):!!a;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const h=d[u];if(a[h]!==i[h]&&!So(c,h))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Gd(i,a,c):!0:!!a;return!1}function Gd(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!So(t,r))return!0}return!1}function vg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Uf=n=>n.__isSuspense;function _g(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):Rm(n)}const Ht=Symbol.for("v-fgt"),wo=Symbol.for("v-txt"),ji=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),Lr=[];let Sn=null;function Oe(n=!1){Lr.push(Sn=n?null:[])}function xg(){Lr.pop(),Sn=Lr[Lr.length-1]||null}let Or=1;function Wd(n,e=!1){Or+=n,n<0&&Sn&&e&&(Sn.hasOnce=!0)}function Nf(n){return n.dynamicChildren=Or>0?Sn||Hs:null,xg(),Or>0&&Sn&&Sn.push(n),n}function He(n,e,t,i,s,r){return Nf(f(n,e,t,i,s,r,!0))}function yg(n,e,t,i,s){return Nf(rt(n,e,t,i,s,!0))}function io(n){return n?n.__v_isVNode===!0:!1}function pr(n,e){return n.type===e.type&&n.key===e.key}const Ff=({key:n})=>n??null,Va=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Wt(n)||tn(n)||Qe(n)?{i:Mn,r:n,k:e,f:!!t}:n:null);function f(n,e=null,t=null,i=0,s=null,r=n===Ht?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ff(e),ref:e&&Va(e),scopeId:ff,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mn};return o?(ed(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Wt(t)?8:16),Or>0&&!a&&Sn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Sn.push(l),l}const rt=bg;function bg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Gm)&&(n=ji),io(n)){const o=$s(n,e,!0);return t&&ed(o,t),Or>0&&!r&&Sn&&(o.shapeFlag&6?Sn[Sn.indexOf(n)]=o:Sn.push(o)),o.patchFlag=-2,o}if(Dg(n)&&(n=n.__vccOpts),e){e=Mg(e);let{class:o,style:l}=e;o&&!Wt(o)&&(e.class=yo(o)),Pt(l)&&(Yc(l)&&!Xe(l)&&(l=nn({},l)),e.style=kc(l))}const a=Wt(n)?1:Uf(n)?128:Pm(n)?64:Pt(n)?4:Qe(n)?2:0;return f(n,e,t,i,s,a,r,!0)}function Mg(n){return n?Yc(n)||Ef(n)?nn({},n):n:null}function $s(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Eg(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ff(c),ref:e&&e.ref?t&&r?Xe(r)?r.concat(Va(e)):[r,Va(e)]:Va(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ht?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&$s(n.ssContent),ssFallback:n.ssFallback&&$s(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Zc(d,l.clone(d)),d}function we(n=" ",e=0){return rt(wo,null,n,e)}function vt(n,e){const t=rt(za,null,n);return t.staticCount=e,t}function Hi(n="",e=!1){return e?(Oe(),yg(ji,null,n)):rt(ji,null,n)}function Jn(n){return n==null||typeof n=="boolean"?rt(ji):Xe(n)?rt(Ht,null,n.slice()):io(n)?Fi(n):rt(wo,null,String(n))}function Fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:$s(n)}function ed(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ed(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ef(e)?e._ctx=Mn:s===3&&Mn&&(Mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:Mn},t=32):(e=String(e),i&64?(t=16,e=[we(e)]):t=8);n.children=e,n.shapeFlag|=t}function Eg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=yo([e.class,i.class]));else if(s==="style")e.style=kc([e.style,i.style]);else if(go(s)){const r=e[s],a=i[s];a&&r!==a&&!(Xe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Kn(n,e,t,i=null){si(n,e,7,[t,i])}const Sg=yf();let wg=0;function Tg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Sg,r={uid:wg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wf(i,s),emitsOptions:Df(i,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fg.bind(null,r),n.ce&&n.ce(r),r}let en=null;const Ag=()=>en||Mn;let so,kl;{const n=xo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};so=e("__VUE_INSTANCE_SETTERS__",t=>en=t),kl=e("__VUE_SSR_SETTERS__",t=>Br=t)}const Zr=n=>{const e=en;return so(n),n.scope.on(),()=>{n.scope.off(),so(e)}},Xd=()=>{en&&en.scope.off(),so(null)};function Of(n){return n.vnode.shapeFlag&4}let Br=!1;function Rg(n,e=!1,t=!1){e&&kl(e);const{props:i,children:s}=n.vnode,r=Of(n);Qm(n,i,r,e),ig(n,s,t||e);const a=r?Cg(n,e):void 0;return e&&kl(!1),a}function Cg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xm);const{setup:i}=t;if(i){Si();const s=n.setupContext=i.length>1?Lg(n):null,r=Zr(n),a=$r(i,n,0,[n.props,s]),o=Bh(a);if(wi(),r(),(o||n.sp)&&!Cr(n)&&mf(n),o){if(a.then(Xd,Xd),e)return a.then(l=>{jd(n,l)}).catch(l=>{Mo(l,n,0)});n.asyncDep=a}else jd(n,a)}else Bf(n)}function jd(n,e,t){Qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Pt(e)&&(n.setupState=lf(e)),Bf(n)}function Bf(n,e,t){const i=n.type;n.render||(n.render=i.render||ti);{const s=Zr(n);Si();try{jm(n)}finally{wi(),s()}}}const Pg={get(n,e){return Qt(n,"get",""),n[e]}};function Lg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Pg),slots:n.slots,emit:n.emit,expose:e}}function To(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(lf(Ye(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Pr)return Pr[t](n)},has(e,t){return t in e||t in Pr}})):n.proxy}function Ig(n,e=!0){return Qe(n)?n.displayName||n.name:n.name||e&&n.__name}function Dg(n){return Qe(n)&&"__vccOpts"in n}const Ln=(n,e)=>Em(n,e,Br);function Hf(n,e,t){const i=arguments.length;return i===2?Pt(e)&&!Xe(e)?io(e)?rt(n,null,[e]):rt(n,e):rt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&io(t)&&(t=[t]),rt(n,e,t))}const Ug="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zl;const qd=typeof window<"u"&&window.trustedTypes;if(qd)try{zl=qd.createPolicy("vue",{createHTML:n=>n})}catch{}const kf=zl?n=>zl.createHTML(n):n=>n,Ng="http://www.w3.org/2000/svg",Fg="http://www.w3.org/1998/Math/MathML",pi=typeof document<"u"?document:null,Yd=pi&&pi.createElement("template"),Og={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?pi.createElementNS(Ng,n):e==="mathml"?pi.createElementNS(Fg,n):t?pi.createElement(n,{is:t}):pi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>pi.createTextNode(n),createComment:n=>pi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Yd.innerHTML=kf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Yd.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Bg=Symbol("_vtc");function Hg(n,e,t){const i=n[Bg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Kd=Symbol("_vod"),kg=Symbol("_vsh"),zg=Symbol(""),Vg=/(^|;)\s*display\s*:/;function Gg(n,e,t){const i=n.style,s=Wt(t);let r=!1;if(t&&!s){if(e)if(Wt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ga(i,o,"")}else for(const a in e)t[a]==null&&Ga(i,a,"");for(const a in t)a==="display"&&(r=!0),Ga(i,a,t[a])}else if(s){if(e!==t){const a=i[zg];a&&(t+=";"+a),i.cssText=t,r=Vg.test(t)}}else e&&n.removeAttribute("style");Kd in n&&(n[Kd]=r?i.display:"",n[kg]&&(i.display="none"))}const $d=/\s*!important$/;function Ga(n,e,t){if(Xe(t))t.forEach(i=>Ga(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Wg(n,e);$d.test(t)?n.setProperty(gs(i),t.replace($d,""),"important"):n[i]=t}}const Zd=["Webkit","Moz","ms"],Xo={};function Wg(n,e){const t=Xo[e];if(t)return t;let i=Nn(e);if(i!=="filter"&&i in n)return Xo[e]=i;i=_o(i);for(let s=0;s<Zd.length;s++){const r=Zd[s]+i;if(r in n)return Xo[e]=r}return e}const Jd="http://www.w3.org/1999/xlink";function Qd(n,e,t,i,s,r=Zp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Jd,e.slice(6,e.length)):n.setAttributeNS(Jd,e,t):t==null||r&&!zh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ii(t)?String(t):t)}function eu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?kf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=zh(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function ki(n,e,t,i){n.addEventListener(e,t,i)}function Xg(n,e,t,i){n.removeEventListener(e,t,i)}const tu=Symbol("_vei");function jg(n,e,t,i,s=null){const r=n[tu]||(n[tu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=qg(e);if(i){const c=r[e]=$g(i,s);ki(n,o,c,l)}else a&&(Xg(n,o,a,l),r[e]=void 0)}}const nu=/(?:Once|Passive|Capture)$/;function qg(n){let e;if(nu.test(n)){e={};let i;for(;i=n.match(nu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):gs(n.slice(2)),e]}let jo=0;const Yg=Promise.resolve(),Kg=()=>jo||(Yg.then(()=>jo=0),jo=Date.now());function $g(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;si(Zg(i,t.value),e,5,[i])};return t.value=n,t.attached=Kg(),t}function Zg(n,e){if(Xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const iu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jg=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Hg(n,i,a):e==="style"?Gg(n,t,i):go(e)?Oc(e)||jg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qg(n,e,i,a))?(eu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qd(n,e,i,a,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Wt(i))?eu(n,Nn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Qd(n,e,i,a))};function Qg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&iu(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return iu(e)&&Wt(t)?!1:e in n}const Zs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Xe(e)?t=>Ba(e,t):e};function e0(n){n.target.composing=!0}function su(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yi=Symbol("_assign"),nt={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[yi]=Zs(s);const r=i||s.props&&s.props.type==="number";ki(n,e?"change":"input",a=>{if(a.target.composing)return;let o=n.value;t&&(o=o.trim()),r&&(o=Za(o)),n[yi](o)}),t&&ki(n,"change",()=>{n.value=n.value.trim()}),e||(ki(n,"compositionstart",e0),ki(n,"compositionend",su),ki(n,"change",su))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[yi]=Zs(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Za(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},In={deep:!0,created(n,e,t){n[yi]=Zs(t),ki(n,"change",()=>{const i=n._modelValue,s=Hr(n),r=n.checked,a=n[yi];if(Xe(i)){const o=zc(i,s),l=o!==-1;if(r&&!l)a(i.concat(s));else if(!r&&l){const c=[...i];c.splice(o,1),a(c)}}else if(ar(i)){const o=new Set(i);r?o.add(s):o.delete(s),a(o)}else a(zf(n,r))})},mounted:ru,beforeUpdate(n,e,t){n[yi]=Zs(t),ru(n,e,t)}};function ru(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Xe(e))s=zc(e,i.props.value)>-1;else if(ar(e))s=e.has(i.props.value);else{if(e===t)return;s=Kr(e,zf(n,!0))}n.checked!==s&&(n.checked=s)}const Js={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=ar(e);ki(n,"change",()=>{const r=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?Za(Hr(a)):Hr(a));n[yi](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,Kc(()=>{n._assigning=!1})}),n[yi]=Zs(i)},mounted(n,{value:e}){au(n,e)},beforeUpdate(n,e,t){n[yi]=Zs(t)},updated(n,{value:e}){n._assigning||au(n,e)}};function au(n,e){const t=n.multiple,i=Xe(e);if(!(t&&!i&&!ar(e))){for(let s=0,r=n.options.length;s<r;s++){const a=n.options[s],o=Hr(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=zc(e,o)>-1}else a.selected=e.has(o);else if(Kr(Hr(a),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Hr(n){return"_value"in n?n._value:n.value}function zf(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const t0=["ctrl","shift","alt","meta"],n0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>t0.some(t=>n[`${t}Key`]&&!e.includes(t))},i0=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=n0[e[a]];if(o&&o(s,e))return}return n(s,...r)})},s0=nn({patchProp:Jg},Og);let ou;function r0(){return ou||(ou=rg(s0))}const a0=(...n)=>{const e=r0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=l0(i);if(!s)return;const r=e._component;!Qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,o0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function o0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function l0(n){return Wt(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Us=typeof document<"u";function Vf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function c0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Vf(n.default)}const pt=Object.assign;function qo(n,e){const t={};for(const i in e){const s=e[i];t[i]=jn(s)?s.map(n):n(s)}return t}const Ir=()=>{},jn=Array.isArray,Gf=/#/g,d0=/&/g,u0=/\//g,h0=/=/g,f0=/\?/g,Wf=/\+/g,p0=/%5B/g,m0=/%5D/g,Xf=/%5E/g,g0=/%60/g,jf=/%7B/g,v0=/%7C/g,qf=/%7D/g,_0=/%20/g;function td(n){return encodeURI(""+n).replace(v0,"|").replace(p0,"[").replace(m0,"]")}function x0(n){return td(n).replace(jf,"{").replace(qf,"}").replace(Xf,"^")}function Vl(n){return td(n).replace(Wf,"%2B").replace(_0,"+").replace(Gf,"%23").replace(d0,"%26").replace(g0,"`").replace(jf,"{").replace(qf,"}").replace(Xf,"^")}function y0(n){return Vl(n).replace(h0,"%3D")}function b0(n){return td(n).replace(Gf,"%23").replace(f0,"%3F")}function M0(n){return n==null?"":b0(n).replace(u0,"%2F")}function kr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const E0=/\/$/,S0=n=>n.replace(E0,"");function Yo(n,e,t="/"){let i,s={},r="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,o>-1?o:e.length),s=n(r)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=R0(i??e,t),{fullPath:i+(r&&"?")+r+a,path:i,query:s,hash:kr(a)}}function w0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function lu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function T0(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Qs(e.matched[i],t.matched[s])&&Yf(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Qs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Yf(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!A0(n[t],e[t]))return!1;return!0}function A0(n,e){return jn(n)?cu(n,e):jn(e)?cu(e,n):n===e}function cu(n,e){return jn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function R0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(a).join("/")}const Ri={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zr;(function(n){n.pop="pop",n.push="push"})(zr||(zr={}));var Dr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Dr||(Dr={}));function C0(n){if(!n)if(Us){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),S0(n)}const P0=/^[^#]+#/;function L0(n,e){return n.replace(P0,"#")+e}function I0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ao=()=>({left:window.scrollX,top:window.scrollY});function D0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=I0(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function du(n,e){return(history.state?history.state.position-e:-1)+n}const Gl=new Map;function U0(n,e){Gl.set(n,e)}function N0(n){const e=Gl.get(n);return Gl.delete(n),e}let F0=()=>location.protocol+"//"+location.host;function Kf(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),lu(l,"")}return lu(t,n)+i+s}function O0(n,e,t,i){let s=[],r=[],a=null;const o=({state:h})=>{const p=Kf(n,location),v=t.value,_=e.value;let g=0;if(h){if(t.value=p,e.value=h,a&&a===v){a=null;return}g=_?h.position-_.position:0}else i(p);s.forEach(m=>{m(t.value,v,{delta:g,type:zr.pop,direction:g?g>0?Dr.forward:Dr.back:Dr.unknown})})};function l(){a=t.value}function c(h){s.push(h);const p=()=>{const v=s.indexOf(h);v>-1&&s.splice(v,1)};return r.push(p),p}function d(){const{history:h}=window;h.state&&h.replaceState(pt({},h.state,{scroll:Ao()}),"")}function u(){for(const h of r)h();r=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function uu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Ao():null}}function B0(n){const{history:e,location:t}=window,i={value:Kf(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,d){const u=n.indexOf("#"),h=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+l:F0()+n+l;try{e[d?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),t[d?"replace":"assign"](h)}}function a(l,c){const d=pt({},e.state,uu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,d,!0),i.value=l}function o(l,c){const d=pt({},s.value,e.state,{forward:l,scroll:Ao()});r(d.current,d,!0);const u=pt({},uu(i.value,l,null),{position:d.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function H0(n){n=C0(n);const e=B0(n),t=O0(n,e.state,e.location,e.replace);function i(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=pt({location:"",base:n,go:i,createHref:L0.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function k0(n){return typeof n=="string"||n&&typeof n=="object"}function $f(n){return typeof n=="string"||typeof n=="symbol"}const Zf=Symbol("");var hu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(hu||(hu={}));function er(n,e){return pt(new Error,{type:n,[Zf]:!0},e)}function li(n,e){return n instanceof Error&&Zf in n&&(e==null||!!(n.type&e))}const fu="[^/]+?",z0={sensitive:!1,strict:!1,start:!0,end:!0},V0=/[.+*?^${}()[\]/\\]/g;function G0(n,e){const t=pt({},z0,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const d=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const h=c[u];let p=40+(t.sensitive?.25:0);if(h.type===0)u||(s+="/"),s+=h.value.replace(V0,"\\$&"),p+=40;else if(h.type===1){const{value:v,repeatable:_,optional:g,regexp:m}=h;r.push({name:v,repeatable:_,optional:g});const w=m||fu;if(w!==fu){p+=10;try{new RegExp(`(${w})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${v}" (${w}): `+b.message)}}let E=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;u||(E=g&&c.length<2?`(?:/${E})`:"/"+E),g&&(E+="?"),s+=E,p+=20,g&&(p+=-8),_&&(p+=-20),w===".*"&&(p+=-50)}d.push(p)}i.push(d)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(c){const d=c.match(a),u={};if(!d)return null;for(let h=1;h<d.length;h++){const p=d[h]||"",v=r[h-1];u[v.name]=p&&v.repeatable?p.split("/"):p}return u}function l(c){let d="",u=!1;for(const h of n){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const p of h)if(p.type===0)d+=p.value;else if(p.type===1){const{value:v,repeatable:_,optional:g}=p,m=v in c?c[v]:"";if(jn(m)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const w=jn(m)?m.join("/"):m;if(!w)if(g)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);d+=w}}return d||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function W0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Jf(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=W0(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(pu(i))return 1;if(pu(s))return-1}return s.length-i.length}function pu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const X0={type:0,value:""},j0=/[a-zA-Z0-9_]/;function q0(n){if(!n)return[[]];if(n==="/")return[[X0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",d="";function u(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),a()):l===":"?(u(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:j0.test(l)?h():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:t=3:d+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),a(),s}function Y0(n,e,t){const i=G0(q0(n.path),t),s=pt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function K0(n,e){const t=[],i=new Map;e=_u({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,p){const v=!p,_=gu(u);_.aliasOf=p&&p.record;const g=_u(e,u),m=[_];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of b)m.push(gu(pt({},_,{components:p?p.record.components:_.components,path:C,aliasOf:p?p.record:_})))}let w,E;for(const b of m){const{path:C}=b;if(h&&C[0]!=="/"){const L=h.record.path,I=L[L.length-1]==="/"?"":"/";b.path=h.record.path+(C&&I+C)}if(w=Y0(b,h,g),p?p.alias.push(w):(E=E||w,E!==w&&E.alias.push(w),v&&u.name&&!vu(w)&&a(u.name)),Qf(w)&&l(w),_.children){const L=_.children;for(let I=0;I<L.length;I++)r(L[I],w,p&&p.children[I])}p=p||w}return E?()=>{a(E)}:Ir}function a(u){if($f(u)){const h=i.get(u);h&&(i.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){const h=J0(u,t);t.splice(h,0,u),u.record.name&&!vu(u)&&i.set(u.record.name,u)}function c(u,h){let p,v={},_,g;if("name"in u&&u.name){if(p=i.get(u.name),!p)throw er(1,{location:u});g=p.record.name,v=pt(mu(h.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),u.params&&mu(u.params,p.keys.map(E=>E.name))),_=p.stringify(v)}else if(u.path!=null)_=u.path,p=t.find(E=>E.re.test(_)),p&&(v=p.parse(_),g=p.record.name);else{if(p=h.name?i.get(h.name):t.find(E=>E.re.test(h.path)),!p)throw er(1,{location:u,currentLocation:h});g=p.record.name,v=pt({},h.params,u.params),_=p.stringify(v)}const m=[];let w=p;for(;w;)m.unshift(w.record),w=w.parent;return{name:g,path:_,params:v,matched:m,meta:Z0(m)}}n.forEach(u=>r(u));function d(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:a,clearRoutes:d,getRoutes:o,getRecordMatcher:s}}function mu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function gu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:$0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function $0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function vu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Z0(n){return n.reduce((e,t)=>pt(e,t.meta),{})}function _u(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function J0(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;Jf(n,e[r])<0?i=r:t=r+1}const s=Q0(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Q0(n){let e=n;for(;e=e.parent;)if(Qf(e)&&Jf(n,e)===0)return e}function Qf({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function ev(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Wf," "),a=r.indexOf("="),o=kr(a<0?r:r.slice(0,a)),l=a<0?null:kr(r.slice(a+1));if(o in e){let c=e[o];jn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function xu(n){let e="";for(let t in n){const i=n[t];if(t=y0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(jn(i)?i.map(r=>r&&Vl(r)):[i&&Vl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function tv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=jn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const nv=Symbol(""),yu=Symbol(""),nd=Symbol(""),ep=Symbol(""),Wl=Symbol("");function mr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Oi(n,e,t,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(er(4,{from:t,to:e})):h instanceof Error?l(h):k0(h)?l(er(2,{from:e,to:h})):(a&&i.enterCallbacks[s]===a&&typeof h=="function"&&a.push(h),o())},d=r(()=>n.call(i&&i.instances[s],e,t,c));let u=Promise.resolve(d);n.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function Ko(n,e,t,i,s=r=>r()){const r=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Vf(l)){const d=(l.__vccOpts||l)[e];d&&r.push(Oi(d,t,i,a,o,s))}else{let c=l();r.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const u=c0(d)?d.default:d;a.mods[o]=d,a.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&Oi(p,t,i,a,o,s)()}))}}return r}function bu(n){const e=xi(nd),t=xi(ep),i=Ln(()=>{const l=Vs(n.to);return e.resolve(l)}),s=Ln(()=>{const{matched:l}=i.value,{length:c}=l,d=l[c-1],u=t.matched;if(!d||!u.length)return-1;const h=u.findIndex(Qs.bind(null,d));if(h>-1)return h;const p=Mu(l[c-2]);return c>1&&Mu(d)===p&&u[u.length-1].path!==p?u.findIndex(Qs.bind(null,l[c-2])):h}),r=Ln(()=>s.value>-1&&ov(t.params,i.value.params)),a=Ln(()=>s.value>-1&&s.value===t.matched.length-1&&Yf(t.params,i.value.params));function o(l={}){if(av(l)){const c=e[Vs(n.replace)?"replace":"push"](Vs(n.to)).catch(Ir);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ln(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}function iv(n){return n.length===1?n[0]:n}const sv=pf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bu,setup(n,{slots:e}){const t=ni(bu(n)),{options:i}=xi(nd),s=Ln(()=>({[Eu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Eu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&iv(e.default(t));return n.custom?r:Hf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),rv=sv;function av(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function ov(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!jn(s)||s.length!==i.length||i.some((r,a)=>r!==s[a]))return!1}return!0}function Mu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Eu=(n,e,t)=>n??e??t,lv=pf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=xi(Wl),s=Ln(()=>n.route||i.value),r=xi(yu,0),a=Ln(()=>{let c=Vs(r);const{matched:d}=s.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),o=Ln(()=>s.value.matched[a.value]);Ha(yu,Ln(()=>a.value+1)),Ha(nv,o),Ha(Wl,s);const l=et();return ka(()=>[l.value,o.value,n.name],([c,d,u],[h,p,v])=>{d&&(d.instances[u]=c,p&&p!==d&&c&&c===h&&(d.leaveGuards.size||(d.leaveGuards=p.leaveGuards),d.updateGuards.size||(d.updateGuards=p.updateGuards))),c&&d&&(!p||!Qs(d,p)||!h)&&(d.enterCallbacks[u]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,d=n.name,u=o.value,h=u&&u.components[d];if(!h)return Su(t.default,{Component:h,route:c});const p=u.props[d],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,g=Hf(h,pt({},v,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return Su(t.default,{Component:g,route:c})||g}}});function Su(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const cv=lv;function dv(n){const e=K0(n.routes,n),t=n.parseQuery||ev,i=n.stringifyQuery||xu,s=n.history,r=mr(),a=mr(),o=mr(),l=xm(Ri);let c=Ri;Us&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=qo.bind(null,N=>""+N),u=qo.bind(null,M0),h=qo.bind(null,kr);function p(N,ae){let se,ce;return $f(N)?(se=e.getRecordMatcher(N),ce=ae):ce=N,e.addRoute(ce,se)}function v(N){const ae=e.getRecordMatcher(N);ae&&e.removeRoute(ae)}function _(){return e.getRoutes().map(N=>N.record)}function g(N){return!!e.getRecordMatcher(N)}function m(N,ae){if(ae=pt({},ae||l.value),typeof N=="string"){const O=Yo(t,N,ae.path),G=e.resolve({path:O.path},ae),ee=s.createHref(O.fullPath);return pt(O,G,{params:h(G.params),hash:kr(O.hash),redirectedFrom:void 0,href:ee})}let se;if(N.path!=null)se=pt({},N,{path:Yo(t,N.path,ae.path).path});else{const O=pt({},N.params);for(const G in O)O[G]==null&&delete O[G];se=pt({},N,{params:u(O)}),ae.params=u(ae.params)}const ce=e.resolve(se,ae),je=N.hash||"";ce.params=d(h(ce.params));const R=w0(i,pt({},N,{hash:x0(je),path:ce.path})),x=s.createHref(R);return pt({fullPath:R,hash:je,query:i===xu?tv(N.query):N.query||{}},ce,{redirectedFrom:void 0,href:x})}function w(N){return typeof N=="string"?Yo(t,N,l.value.path):pt({},N)}function E(N,ae){if(c!==N)return er(8,{from:ae,to:N})}function b(N){return I(N)}function C(N){return b(pt(w(N),{replace:!0}))}function L(N){const ae=N.matched[N.matched.length-1];if(ae&&ae.redirect){const{redirect:se}=ae;let ce=typeof se=="function"?se(N):se;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=w(ce):{path:ce},ce.params={}),pt({query:N.query,hash:N.hash,params:ce.path!=null?{}:N.params},ce)}}function I(N,ae){const se=c=m(N),ce=l.value,je=N.state,R=N.force,x=N.replace===!0,O=L(se);if(O)return I(pt(w(O),{state:typeof O=="object"?pt({},je,O.state):je,force:R,replace:x}),ae||se);const G=se;G.redirectedFrom=ae;let ee;return!R&&T0(i,ce,se)&&(ee=er(16,{to:G,from:ce}),Le(ce,ce,!0,!1)),(ee?Promise.resolve(ee):S(G,ce)).catch(V=>li(V)?li(V,2)?V:_e(V):z(V,G,ce)).then(V=>{if(V){if(li(V,2))return I(pt({replace:x},w(V.to),{state:typeof V.to=="object"?pt({},je,V.to.state):je,force:R}),ae||G)}else V=X(G,ce,!0,x,je);return P(G,ce,V),V})}function D(N,ae){const se=E(N,ae);return se?Promise.reject(se):Promise.resolve()}function M(N){const ae=lt.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(N):N()}function S(N,ae){let se;const[ce,je,R]=uv(N,ae);se=Ko(ce.reverse(),"beforeRouteLeave",N,ae);for(const O of ce)O.leaveGuards.forEach(G=>{se.push(Oi(G,N,ae))});const x=D.bind(null,N,ae);return se.push(x),ve(se).then(()=>{se=[];for(const O of r.list())se.push(Oi(O,N,ae));return se.push(x),ve(se)}).then(()=>{se=Ko(je,"beforeRouteUpdate",N,ae);for(const O of je)O.updateGuards.forEach(G=>{se.push(Oi(G,N,ae))});return se.push(x),ve(se)}).then(()=>{se=[];for(const O of R)if(O.beforeEnter)if(jn(O.beforeEnter))for(const G of O.beforeEnter)se.push(Oi(G,N,ae));else se.push(Oi(O.beforeEnter,N,ae));return se.push(x),ve(se)}).then(()=>(N.matched.forEach(O=>O.enterCallbacks={}),se=Ko(R,"beforeRouteEnter",N,ae,M),se.push(x),ve(se))).then(()=>{se=[];for(const O of a.list())se.push(Oi(O,N,ae));return se.push(x),ve(se)}).catch(O=>li(O,8)?O:Promise.reject(O))}function P(N,ae,se){o.list().forEach(ce=>M(()=>ce(N,ae,se)))}function X(N,ae,se,ce,je){const R=E(N,ae);if(R)return R;const x=ae===Ri,O=Us?history.state:{};se&&(ce||x?s.replace(N.fullPath,pt({scroll:x&&O&&O.scroll},je)):s.push(N.fullPath,je)),l.value=N,Le(N,ae,se,x),_e()}let W;function $(){W||(W=s.listen((N,ae,se)=>{if(!ie.listening)return;const ce=m(N),je=L(ce);if(je){I(pt(je,{replace:!0,force:!0}),ce).catch(Ir);return}c=ce;const R=l.value;Us&&U0(du(R.fullPath,se.delta),Ao()),S(ce,R).catch(x=>li(x,12)?x:li(x,2)?(I(pt(w(x.to),{force:!0}),ce).then(O=>{li(O,20)&&!se.delta&&se.type===zr.pop&&s.go(-1,!1)}).catch(Ir),Promise.reject()):(se.delta&&s.go(-se.delta,!1),z(x,ce,R))).then(x=>{x=x||X(ce,R,!1),x&&(se.delta&&!li(x,8)?s.go(-se.delta,!1):se.type===zr.pop&&li(x,20)&&s.go(-1,!1)),P(ce,R,x)}).catch(Ir)}))}let te=mr(),q=mr(),j;function z(N,ae,se){_e(N);const ce=q.list();return ce.length?ce.forEach(je=>je(N,ae,se)):console.error(N),Promise.reject(N)}function he(){return j&&l.value!==Ri?Promise.resolve():new Promise((N,ae)=>{te.add([N,ae])})}function _e(N){return j||(j=!N,$(),te.list().forEach(([ae,se])=>N?se(N):ae()),te.reset()),N}function Le(N,ae,se,ce){const{scrollBehavior:je}=n;if(!Us||!je)return Promise.resolve();const R=!se&&N0(du(N.fullPath,0))||(ce||!se)&&history.state&&history.state.scroll||null;return Kc().then(()=>je(N,ae,R)).then(x=>x&&D0(x)).catch(x=>z(x,N,ae))}const ke=N=>s.go(N);let ht;const lt=new Set,ie={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:_,resolve:m,options:n,push:b,replace:C,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:q.add,isReady:he,install(N){const ae=this;N.component("RouterLink",rv),N.component("RouterView",cv),N.config.globalProperties.$router=ae,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Vs(l)}),Us&&!ht&&l.value===Ri&&(ht=!0,b(s.location).catch(je=>{}));const se={};for(const je in Ri)Object.defineProperty(se,je,{get:()=>l.value[je],enumerable:!0});N.provide(nd,ae),N.provide(ep,rf(se)),N.provide(Wl,l);const ce=N.unmount;lt.add(N),N.unmount=function(){lt.delete(N),lt.size<1&&(c=Ri,W&&W(),W=null,l.value=Ri,ht=!1,j=!1),ce()}}};function ve(N){return N.reduce((ae,se)=>ae.then(()=>M(se)),Promise.resolve())}return ie}function uv(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(n.matched.find(c=>Qs(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Qs(c,l))||s.push(l))}return[t,i,s]}const kt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},hv={name:"Header",setup(){const n=et(!1);return{isDark:n,toggleTheme:()=>{n.value=!n.value,document.documentElement.classList.toggle("dark",n.value)}}}},fv={class:"header"},pv={class:"header-content"},mv={class:"logo"},gv={class:"nav"},vv={class:"header-actions"};function _v(n,e,t,i,s,r){const a=Ws("router-link");return Oe(),He("header",fv,[f("div",pv,[f("div",mv,[rt(a,{to:"/",class:"logo-link"},{default:It(()=>e[1]||(e[1]=[f("span",{class:"logo-text"},"Three.js",-1),f("span",{class:"logo-subtitle"},"学习指南",-1)])),_:1,__:[1]})]),f("nav",gv,[rt(a,{to:"/",class:"nav-link"},{default:It(()=>e[2]||(e[2]=[we("首页",-1)])),_:1,__:[2]}),rt(a,{to:"/tutorial",class:"nav-link"},{default:It(()=>e[3]||(e[3]=[we("教程",-1)])),_:1,__:[3]}),rt(a,{to:"/api",class:"nav-link"},{default:It(()=>e[4]||(e[4]=[we("API文档",-1)])),_:1,__:[4]}),rt(a,{to:"/examples",class:"nav-link"},{default:It(()=>e[5]||(e[5]=[we("示例",-1)])),_:1,__:[5]})]),f("div",vv,[f("button",{class:"theme-toggle",onClick:e[0]||(e[0]=(...o)=>i.toggleTheme&&i.toggleTheme(...o))},ye(i.isDark?"🌞":"🌙"),1)])])])}const xv=kt(hv,[["render",_v],["__scopeId","data-v-251bba18"]]),yv={name:"Sidebar"},bv={class:"sidebar"},Mv={class:"sidebar-content"},Ev={class:"sidebar-nav"},Sv={class:"nav-section"},wv={class:"nav-list"},Tv={class:"nav-section"},Av={class:"nav-list"},Rv={class:"nav-section"},Cv={class:"nav-list"},Pv={class:"nav-section"},Lv={class:"nav-list"},Iv={class:"nav-section"},Dv={class:"nav-list"};function Uv(n,e,t,i,s,r){const a=Ws("router-link");return Oe(),He("aside",bv,[f("div",Mv,[f("nav",Ev,[f("div",Sv,[e[3]||(e[3]=f("h3",{class:"nav-title"},"开始",-1)),f("ul",wv,[f("li",null,[rt(a,{to:"/",class:"nav-item"},{default:It(()=>e[0]||(e[0]=[we("介绍",-1)])),_:1,__:[0]})]),f("li",null,[rt(a,{to:"/tutorial/installation",class:"nav-item"},{default:It(()=>e[1]||(e[1]=[we("安装",-1)])),_:1,__:[1]})]),f("li",null,[rt(a,{to:"/tutorial/first-scene",class:"nav-item"},{default:It(()=>e[2]||(e[2]=[we("第一个场景",-1)])),_:1,__:[2]})])])]),f("div",Tv,[e[10]||(e[10]=f("h3",{class:"nav-title"},"基础概念",-1)),f("ul",Av,[f("li",null,[rt(a,{to:"/tutorial/scene",class:"nav-item"},{default:It(()=>e[4]||(e[4]=[we("场景 Scene",-1)])),_:1,__:[4]})]),f("li",null,[rt(a,{to:"/tutorial/camera",class:"nav-item"},{default:It(()=>e[5]||(e[5]=[we("相机 Camera",-1)])),_:1,__:[5]})]),f("li",null,[rt(a,{to:"/tutorial/renderer",class:"nav-item"},{default:It(()=>e[6]||(e[6]=[we("渲染器 Renderer",-1)])),_:1,__:[6]})]),f("li",null,[rt(a,{to:"/tutorial/geometry",class:"nav-item"},{default:It(()=>e[7]||(e[7]=[we("几何体 Geometry",-1)])),_:1,__:[7]})]),f("li",null,[rt(a,{to:"/tutorial/material",class:"nav-item"},{default:It(()=>e[8]||(e[8]=[we("材质 Material",-1)])),_:1,__:[8]})]),f("li",null,[rt(a,{to:"/tutorial/mesh",class:"nav-item"},{default:It(()=>e[9]||(e[9]=[we("网格 Mesh",-1)])),_:1,__:[9]})])])]),f("div",Rv,[e[13]||(e[13]=f("h3",{class:"nav-title"},"光照与阴影",-1)),f("ul",Cv,[f("li",null,[rt(a,{to:"/tutorial/lights",class:"nav-item"},{default:It(()=>e[11]||(e[11]=[we("光源",-1)])),_:1,__:[11]})]),f("li",null,[rt(a,{to:"/tutorial/shadows",class:"nav-item"},{default:It(()=>e[12]||(e[12]=[we("阴影",-1)])),_:1,__:[12]})])])]),f("div",Pv,[e[16]||(e[16]=f("h3",{class:"nav-title"},"动画",-1)),f("ul",Lv,[f("li",null,[rt(a,{to:"/tutorial/animation",class:"nav-item"},{default:It(()=>e[14]||(e[14]=[we("基础动画",-1)])),_:1,__:[14]})]),f("li",null,[rt(a,{to:"/tutorial/controls",class:"nav-item"},{default:It(()=>e[15]||(e[15]=[we("控制器",-1)])),_:1,__:[15]})])])]),f("div",Iv,[e[20]||(e[20]=f("h3",{class:"nav-title"},"示例",-1)),f("ul",Dv,[f("li",null,[rt(a,{to:"/examples/cube",class:"nav-item"},{default:It(()=>e[17]||(e[17]=[we("旋转立方体",-1)])),_:1,__:[17]})]),f("li",null,[rt(a,{to:"/examples/solar-system",class:"nav-item"},{default:It(()=>e[18]||(e[18]=[we("太阳系",-1)])),_:1,__:[18]})]),f("li",null,[rt(a,{to:"/examples/particle-system",class:"nav-item"},{default:It(()=>e[19]||(e[19]=[we("粒子系统",-1)])),_:1,__:[19]})])])])])])])}const Nv=kt(yv,[["render",Uv],["__scopeId","data-v-21c52692"]]),Fv={name:"App",components:{Header:xv,Sidebar:Nv}},Ov={id:"app"},Bv={class:"main-content"},Hv={class:"content-area"};function kv(n,e,t,i,s,r){const a=Ws("Header"),o=Ws("Sidebar"),l=Ws("router-view");return Oe(),He("div",Ov,[rt(a),f("main",Bv,[rt(o),f("div",Hv,[rt(l)])])])}const zv=kt(Fv,[["render",kv]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const id="179",js={ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vv=0,wu=1,Gv=2,Tu=0,ro=1,ds=2,Zn=3,qi=0,pn=1,vi=2,Gi=0,qs=1,Xl=2,Au=3,Ru=4,Wv=5,ls=100,Xv=101,jv=102,qv=103,Yv=104,Kv=200,$v=201,Zv=202,Jv=203,jl=204,ql=205,Qv=206,e_=207,t_=208,n_=209,i_=210,s_=211,r_=212,a_=213,o_=214,Yl=0,Kl=1,$l=2,tr=3,Zl=4,Jl=5,Ql=6,ec=7,Ro=0,l_=1,c_=2,Wi=0,d_=1,u_=2,h_=3,f_=4,p_=5,m_=6,g_=7,tp=300,nr=301,ir=302,tc=303,nc=304,Co=306,ic=1e3,us=1001,sc=1002,Wn=1003,v_=1004,la=1005,ei=1006,$o=1007,hs=1008,ri=1009,np=1010,ip=1011,Vr=1012,sd=1013,ps=1014,_i=1015,Jr=1016,rd=1017,ad=1018,Gr=1020,sp=35902,rp=1021,ap=1022,zn=1023,Wr=1026,Xr=1027,op=1028,od=1029,lp=1030,ld=1031,cd=1033,Wa=33776,Xa=33777,ja=33778,qa=33779,rc=35840,ac=35841,oc=35842,lc=35843,cc=36196,dc=37492,uc=37496,hc=37808,fc=37809,pc=37810,mc=37811,gc=37812,vc=37813,_c=37814,xc=37815,yc=37816,bc=37817,Mc=37818,Ec=37819,Sc=37820,wc=37821,Ya=36492,Tc=36494,Ac=36495,cp=36283,Rc=36284,Cc=36285,Pc=36286,__=2200,x_=2201,y_=2202,ao=2300,Lc=2301,Zo=2302,Fs=2400,Os=2401,oo=2402,dd=2500,b_=2501,M_=3200,E_=3201,Po=0,S_=1,zi="",Pn="srgb",sr="srgb-linear",lo="linear",yt="srgb",xs=7680,Cu=519,w_=512,T_=513,A_=514,dp=515,R_=516,C_=517,P_=518,L_=519,Pu=35044,Lu="300 es",Vn=2e3,jr=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ka=Math.PI/180,co=180/Math.PI;function or(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function I_(n,e){return(n%e+e)%e}function Jo(n,e,t){return(1-t)*n+t*e}function gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const D_={DEG2RAD:Ka};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3];const h=r[a+0],p=r[a+1],v=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(u!==_||l!==h||c!==p||d!==v){let g=1-o;const m=l*h+c*p+d*v+u*_,w=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const C=Math.sqrt(E),L=Math.atan2(C,m*w);g=Math.sin(g*L)/C,o=Math.sin(o*L)/C}const b=o*w;if(l=l*g+h*b,c=c*g+p*b,d=d*g+v*b,u=u*g+_*b,g===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=C,c*=C,d*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[a],h=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+d*u+l*p-c*h,e[t+1]=l*v+d*h+c*u-o*p,e[t+2]=c*v+d*p+o*h-l*u,e[t+3]=d*v-o*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),u=o(r/2),h=l(i/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*p*v,this._y=c*p*u-h*d*v,this._z=c*d*v+h*p*u,this._w=c*d*u-h*p*v;break;case"YXZ":this._x=h*d*u+c*p*v,this._y=c*p*u-h*d*v,this._z=c*d*v-h*p*u,this._w=c*d*u+h*p*v;break;case"ZXY":this._x=h*d*u-c*p*v,this._y=c*p*u+h*d*v,this._z=c*d*v+h*p*u,this._w=c*d*u-h*p*v;break;case"ZYX":this._x=h*d*u-c*p*v,this._y=c*p*u+h*d*v,this._z=c*d*v-h*p*u,this._w=c*d*u+h*p*v;break;case"YZX":this._x=h*d*u+c*p*v,this._y=c*p*u+h*d*v,this._z=c*d*v-h*p*u,this._w=c*d*u-h*p*v;break;case"XZY":this._x=h*d*u-c*p*v,this._y=c*p*u-h*d*v,this._z=c*d*v+h*p*u,this._w=c*d*u+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*d,this.y=i+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new F,Iu=new Xn;class tt{constructor(e,t,i,s,r,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],p=i[5],v=i[8],_=s[0],g=s[3],m=s[6],w=s[1],E=s[4],b=s[7],C=s[2],L=s[5],I=s[8];return r[0]=a*_+o*w+l*C,r[3]=a*g+o*E+l*L,r[6]=a*m+o*b+l*I,r[1]=c*_+d*w+u*C,r[4]=c*g+d*E+u*L,r[7]=c*m+d*b+u*I,r[2]=h*_+p*w+v*C,r[5]=h*g+p*E+v*L,r[8]=h*m+p*b+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,p=c*r-a*l,v=t*u+i*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=u*_,e[1]=(s*c-d*i)*_,e[2]=(o*i-s*a)*_,e[3]=h*_,e[4]=(d*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const el=new tt;function up(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U_(){const n=uo("canvas");return n.style.display="block",n}const Du={};function Ys(n){n in Du||(Du[n]=!0,console.warn(n))}function N_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Uu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){const n={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?lo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sr]:{primaries:e,whitePoint:i,transfer:lo,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),n}const ut=F_();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ys;class O_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ys===void 0&&(ys=uo("canvas")),ys.width=e.width,ys.height=e.height;const s=ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B_=0;class ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tl(s[a].image)):r.push(tl(s[a]))}else r=tl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?O_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H_=0;const nl=new F;class mn extends Ki{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=us,s=us,r=ei,a=hs,o=zn,l=ri,c=mn.DEFAULT_ANISOTROPY,d=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=or(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ic:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ic:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=tp;mn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],p=l[5],v=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(p+1)/2,C=(m+1)/2,L=(d+h)/4,I=(u+_)/4,D=(v+g)/4;return E>b&&E>C?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=L/i,r=I/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=L/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=I/r,s=D/r),this.set(i,s,r,t),this}let w=Math.sqrt((g-v)*(g-v)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(g-v)/w,this.y=(u-_)/w,this.z=(h-d)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k_ extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new mn(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ud(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends k_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hp extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z_ extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ca.copy(i.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),da.subVectors(this.max,vr),bs.subVectors(e.a,vr),Ms.subVectors(e.b,vr),Es.subVectors(e.c,vr),Ci.subVectors(Ms,bs),Pi.subVectors(Es,Ms),es.subVectors(bs,Es);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-es.z,es.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,es.z,0,-es.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-es.y,es.x,0];return!il(t,bs,Ms,Es,da)||(t=[1,0,0,0,1,0,0,0,1],!il(t,bs,Ms,Es,da))?!1:(ua.crossVectors(Ci,Pi),t=[ua.x,ua.y,ua.z],il(t,bs,Ms,Es,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ci=[new F,new F,new F,new F,new F,new F,new F,new F],On=new F,ca=new Qr,bs=new F,Ms=new F,Es=new F,Ci=new F,Pi=new F,es=new F,vr=new F,da=new F,ua=new F,ts=new F;function il(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ts.fromArray(n,r);const o=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),d=i.dot(ts);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const V_=new Qr,_r=new F,sl=new F;class ea{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):V_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(sl)),this.expandByPoint(_r.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const di=new F,rl=new F,ha=new F,Li=new F,al=new F,fa=new F,ol=new F;class Lo{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){rl.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(rl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ha),o=Li.dot(this.direction),l=-Li.dot(ha),c=Li.lengthSq(),d=Math.abs(1-a*a);let u,h,p,v;if(d>0)if(u=a*l-o,h=a*o-l,v=r*d,u>=0)if(h>=-v)if(h<=v){const _=1/d;u*=_,h*=_,p=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h<=-v?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c):h<=v?(u=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(rl).addScaledVector(ha,h),p}intersectSphere(e,t){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){al.subVectors(t,e),fa.subVectors(i,e),ol.crossVectors(al,fa);let a=this.direction.dot(ol),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(fa.crossVectors(Li,fa));if(l<0)return null;const c=o*this.direction.dot(al.cross(Li));if(c<0||l+c>a)return null;const d=-o*Li.dot(ol);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,i,s,r,a,o,l,c,d,u,h,p,v,_,g){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,u,h,p,v,_,g)}set(e,t,i,s,r,a,o,l,c,d,u,h,p,v,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=p,m[7]=v,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=a*d,p=a*u,v=o*d,_=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+v*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,p=l*u,v=c*d,_=c*u;t[0]=h+_*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-v,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,p=l*u,v=c*d,_=c*u;t[0]=h-_*o,t[4]=-a*u,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*d,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,p=a*u,v=o*d,_=o*u;t[0]=l*d,t[4]=v*c-p,t[8]=h*c+_,t[1]=l*u,t[5]=_*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*d,t[4]=_-h*u,t[8]=v*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+v,t[10]=h-_*u}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+_,t[5]=a*d,t[9]=p*u-v,t[2]=v*u-p,t[6]=o*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,W_)}lookAt(e,t,i){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ii.crossVectors(i,xn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ii.crossVectors(i,xn)),Ii.normalize(),pa.crossVectors(xn,Ii),s[0]=Ii.x,s[4]=pa.x,s[8]=xn.x,s[1]=Ii.y,s[5]=pa.y,s[9]=xn.y,s[2]=Ii.z,s[6]=pa.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],p=i[13],v=i[2],_=i[6],g=i[10],m=i[14],w=i[3],E=i[7],b=i[11],C=i[15],L=s[0],I=s[4],D=s[8],M=s[12],S=s[1],P=s[5],X=s[9],W=s[13],$=s[2],te=s[6],q=s[10],j=s[14],z=s[3],he=s[7],_e=s[11],Le=s[15];return r[0]=a*L+o*S+l*$+c*z,r[4]=a*I+o*P+l*te+c*he,r[8]=a*D+o*X+l*q+c*_e,r[12]=a*M+o*W+l*j+c*Le,r[1]=d*L+u*S+h*$+p*z,r[5]=d*I+u*P+h*te+p*he,r[9]=d*D+u*X+h*q+p*_e,r[13]=d*M+u*W+h*j+p*Le,r[2]=v*L+_*S+g*$+m*z,r[6]=v*I+_*P+g*te+m*he,r[10]=v*D+_*X+g*q+m*_e,r[14]=v*M+_*W+g*j+m*Le,r[3]=w*L+E*S+b*$+C*z,r[7]=w*I+E*P+b*te+C*he,r[11]=w*D+E*X+b*q+C*_e,r[15]=w*M+E*W+b*j+C*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],p=e[14],v=e[3],_=e[7],g=e[11],m=e[15];return v*(+r*l*u-s*c*u-r*o*h+i*c*h+s*o*p-i*l*p)+_*(+t*l*p-t*c*h+r*a*h-s*a*p+s*c*d-r*l*d)+g*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*d-i*c*d)+m*(-s*o*d-t*l*u+t*o*h+s*a*u-i*a*h+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],p=e[11],v=e[12],_=e[13],g=e[14],m=e[15],w=u*g*c-_*h*c+_*l*p-o*g*p-u*l*m+o*h*m,E=v*h*c-d*g*c-v*l*p+a*g*p+d*l*m-a*h*m,b=d*_*c-v*u*c+v*o*p-a*_*p-d*o*m+a*u*m,C=v*u*l-d*_*l-v*o*h+a*_*h+d*o*g-a*u*g,L=t*w+i*E+s*b+r*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=w*I,e[1]=(_*h*r-u*g*r-_*s*p+i*g*p+u*s*m-i*h*m)*I,e[2]=(o*g*r-_*l*r+_*s*c-i*g*c-o*s*m+i*l*m)*I,e[3]=(u*l*r-o*h*r-u*s*c+i*h*c+o*s*p-i*l*p)*I,e[4]=E*I,e[5]=(d*g*r-v*h*r+v*s*p-t*g*p-d*s*m+t*h*m)*I,e[6]=(v*l*r-a*g*r-v*s*c+t*g*c+a*s*m-t*l*m)*I,e[7]=(a*h*r-d*l*r+d*s*c-t*h*c-a*s*p+t*l*p)*I,e[8]=b*I,e[9]=(v*u*r-d*_*r-v*i*p+t*_*p+d*i*m-t*u*m)*I,e[10]=(a*_*r-v*o*r+v*i*c-t*_*c-a*i*m+t*o*m)*I,e[11]=(d*o*r-a*u*r-d*i*c+t*u*c+a*i*p-t*o*p)*I,e[12]=C*I,e[13]=(d*_*s-v*u*s+v*i*h-t*_*h-d*i*g+t*u*g)*I,e[14]=(v*o*s-a*_*s-v*i*l+t*_*l+a*i*g-t*o*g)*I,e[15]=(a*u*s-d*o*s+d*i*l-t*u*l-a*i*h+t*o*h)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,p=r*d,v=r*u,_=a*d,g=a*u,m=o*u,w=l*c,E=l*d,b=l*u,C=i.x,L=i.y,I=i.z;return s[0]=(1-(_+m))*C,s[1]=(p+b)*C,s[2]=(v-E)*C,s[3]=0,s[4]=(p-b)*L,s[5]=(1-(h+m))*L,s[6]=(g+w)*L,s[7]=0,s[8]=(v+E)*I,s[9]=(g-w)*I,s[10]=(1-(h+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const a=Ss.set(s[4],s[5],s[6]).length(),o=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);const c=1/r,d=1/a,u=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Vn,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s);let v,_;if(l)v=r/(a-r),_=a*r/(a-r);else if(o===Vn)v=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===jr)v=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Vn,l=!1){const c=this.elements,d=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s);let v,_;if(l)v=1/(a-r),_=a/(a-r);else if(o===Vn)v=-2/(a-r),_=-(a+r)/(a-r);else if(o===jr)v=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ss=new F,Bn=new Dt,G_=new F(0,0,0),W_=new F(1,1,1),Ii=new F,pa=new F,xn=new F,Fu=new Dt,Ou=new Xn;class Fn{constructor(e=0,t=0,i=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const Bu=new F,ws=new Xn,ui=new Dt,ma=new F,xr=new F,j_=new F,q_=new Xn,Hu=new F(1,0,0),ku=new F(0,1,0),zu=new F(0,0,1),Vu={type:"added"},Y_={type:"removed"},Ts={type:"childadded",child:null},ll={type:"childremoved",child:null};class Vt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new F,t=new Fn,i=new Xn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new tt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ma.copy(e):ma.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(xr,ma,this.up):ui.lookAt(ma,xr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ui),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,j_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new F(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new F,hi=new F,cl=new F,fi=new F,As=new F,Rs=new F,Gu=new F,dl=new F,ul=new F,hl=new F,fl=new Mt,pl=new Mt,ml=new Mt;class kn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),hi.subVectors(i,t),cl.subVectors(e,t);const a=Hn.dot(Hn),o=Hn.dot(hi),l=Hn.dot(cl),c=hi.dot(hi),d=hi.dot(cl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,p=(c*l-o*d)*h,v=(a*d-o*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return fl.setScalar(0),pl.setScalar(0),ml.setScalar(0),fl.fromBufferAttribute(e,t),pl.fromBufferAttribute(e,i),ml.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(fl,r.x),a.addScaledVector(pl,r.y),a.addScaledVector(ml,r.z),a}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),hi.subVectors(e,t),Hn.cross(hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Hn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;As.subVectors(s,i),Rs.subVectors(r,i),dl.subVectors(e,i);const l=As.dot(dl),c=Rs.dot(dl);if(l<=0&&c<=0)return t.copy(i);ul.subVectors(e,s);const d=As.dot(ul),u=Rs.dot(ul);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(As,a);hl.subVectors(e,r);const p=As.dot(hl),v=Rs.dot(hl);if(v>=0&&p<=v)return t.copy(r);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Rs,o);const g=d*v-p*u;if(g<=0&&u-d>=0&&p-v>=0)return Gu.subVectors(r,s),o=(u-d)/(u-d+(p-v)),t.copy(s).addScaledVector(Gu,o);const m=1/(g+_+h);return a=_*m,o=h*m,t.copy(i).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},ga={h:0,s:0,l:0};function gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=I_(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=gl(a,r,e+1/3),this.g=gl(a,r,e),this.b=gl(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=Pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const i=pp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return ut.workingToColorSpace(Jt.copy(this),e),Math.round(at(Jt.r*255,0,255))*65536+Math.round(at(Jt.g*255,0,255))*256+Math.round(at(Jt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Pn){ut.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,s=Jt.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(ga);const i=Jo(Di.h,ga.h,t),s=Jo(Di.s,ga.s,t),r=Jo(Di.l,ga.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new ze;ze.NAMES=pp;let K_=0;class Ai extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=or(),this.name="",this.type="Material",this.blending=qs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=ql,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jl&&(i.blendSrc=this.blendSrc),this.blendDst!==ql&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ct extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new F,va=new Ke;let $_=0;class wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pu,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pu&&(e.usage=this.usage),e}}class mp extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gp extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Z_=0;const Cn=new Dt,vl=new Vt,Cs=new F,yn=new Qr,yr=new Qr,Kt=new F;class Xt extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?gp:mp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(yn.min,yr.min),yn.expandByPoint(Kt),Kt.addVectors(yn.max,yr.max),yn.expandByPoint(Kt)):(yn.expandByPoint(yr.min),yn.expandByPoint(yr.max))}yn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Kt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Kt.add(Cs)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new F,l[D]=new F;const c=new F,d=new F,u=new F,h=new Ke,p=new Ke,v=new Ke,_=new F,g=new F;function m(D,M,S){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,S),d.sub(c),u.sub(c),p.sub(h),v.sub(h);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(_.copy(d).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(P),o[D].add(_),o[M].add(_),o[S].add(_),l[D].add(g),l[M].add(g),l[S].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,M=w.length;D<M;++D){const S=w[D],P=S.start,X=S.count;for(let W=P,$=P+X;W<$;W+=3)m(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const E=new F,b=new F,C=new F,L=new F;function I(D){C.fromBufferAttribute(s,D),L.copy(C);const M=o[D];E.copy(M),E.sub(C.multiplyScalar(C.dot(M))).normalize(),b.crossVectors(L,M);const P=b.dot(l[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,P)}for(let D=0,M=w.length;D<M;++D){const S=w[D],P=S.start,X=S.count;for(let W=P,$=P+X;W<$;W+=3)I(e.getX(W+0)),I(e.getX(W+1)),I(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,d=new F,u=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let p=0,v=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*d;for(let m=0;m<d;m++)h[v++]=c[p++]}return new wn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new Dt,ns=new Lo,_a=new ea,Xu=new F,xa=new F,ya=new F,ba=new F,_l=new F,Ma=new F,ju=new F,Ea=new F;class We extends Vt{constructor(e=new Xt,t=new ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(_l.fromBufferAttribute(u,e),a?Ma.addScaledVector(_l,d):Ma.addScaledVector(_l.sub(t),d))}t.add(Ma)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(_a.containsPoint(ns.origin)===!1&&(ns.intersectSphere(_a,Xu)===null||ns.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Wu),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const g=h[v],m=a[g.materialIndex],w=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let b=w,C=E;b<C;b+=3){const L=o.getX(b),I=o.getX(b+1),D=o.getX(b+2);s=Sa(this,m,e,i,c,d,u,L,I,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=v,m=_;g<m;g+=3){const w=o.getX(g),E=o.getX(g+1),b=o.getX(g+2);s=Sa(this,a,e,i,c,d,u,w,E,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const g=h[v],m=a[g.materialIndex],w=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=w,C=E;b<C;b+=3){const L=b,I=b+1,D=b+2;s=Sa(this,m,e,i,c,d,u,L,I,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=v,m=_;g<m;g+=3){const w=g,E=g+1,b=g+2;s=Sa(this,a,e,i,c,d,u,w,E,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function J_(n,e,t,i,s,r,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===qi,o),l===null)return null;Ea.copy(o),Ea.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ea);return c<t.near||c>t.far?null:{distance:c,point:Ea.clone(),object:n}}function Sa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,xa),n.getVertexPosition(l,ya),n.getVertexPosition(c,ba);const d=J_(n,e,t,i,xa,ya,ba,ju);if(d){const u=new F;kn.getBarycoord(ju,xa,ya,ba,u),s&&(d.uv=kn.getInterpolatedAttribute(s,o,l,c,u,new Ke)),r&&(d.uv1=kn.getInterpolatedAttribute(r,o,l,c,u,new Ke)),a&&(d.normal=kn.getInterpolatedAttribute(a,o,l,c,u,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};kn.getNormal(xa,ya,ba,h.normal),d.face=h,d.barycoord=u}return d}class Ut extends Xt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(u,2));function v(_,g,m,w,E,b,C,L,I,D,M){const S=b/I,P=C/D,X=b/2,W=C/2,$=L/2,te=I+1,q=D+1;let j=0,z=0;const he=new F;for(let _e=0;_e<q;_e++){const Le=_e*P-W;for(let ke=0;ke<te;ke++){const ht=ke*S-X;he[_]=ht*w,he[g]=Le*E,he[m]=$,c.push(he.x,he.y,he.z),he[_]=0,he[g]=0,he[m]=L>0?1:-1,d.push(he.x,he.y,he.z),u.push(ke/I),u.push(1-_e/D),j+=1}}for(let _e=0;_e<D;_e++)for(let Le=0;Le<I;Le++){const ke=h+Le+te*_e,ht=h+Le+te*(_e+1),lt=h+(Le+1)+te*(_e+1),ie=h+(Le+1)+te*_e;l.push(ke,ht,ie),l.push(ht,lt,ie),z+=6}o.addGroup(p,z,M),p+=z,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=rr(n[t]);for(const s in i)e[s]=i[s]}return e}function Q_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const ex={clone:rr,merge:an};var tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hd extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new F,qu=new Ke,Yu=new Ke;class it extends hd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,qu,Yu),t.subVectors(Yu,qu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Ls=1;class ix extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new it(Ps,Ls,e,t);s.layers=this.layers,this.add(s);const r=new it(Ps,Ls,e,t);r.layers=this.layers,this.add(r);const a=new it(Ps,Ls,e,t);a.layers=this.layers,this.add(a);const o=new it(Ps,Ls,e,t);o.layers=this.layers,this.add(o);const l=new it(Ps,Ls,e,t);l.layers=this.layers,this.add(l);const c=new it(Ps,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class _p extends mn{constructor(e=[],t=nr,i,s,r,a,o,l,c,d){super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sx extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new _p(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ut(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Gi});r.uniforms.tEquirect.value=t;const a=new We(s,r),o=t.minFilter;return t.minFilter===hs&&(t.minFilter=ei),new ix(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class wa extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rx={type:"move"};class xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class fd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=i}clone(){return new fd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Et extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yl=new F,ax=new F,ox=new tt;class Bi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=yl.subVectors(i,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ox.getNormalMatrix(e),s=this.coplanarPoint(yl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new ea,lx=new Ke(.5,.5),Ta=new F;class pd{constructor(e=new Bi,t=new Bi,i=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],p=r[7],v=r[8],_=r[9],g=r[10],m=r[11],w=r[12],E=r[13],b=r[14],C=r[15];if(s[0].setComponents(c-a,p-d,m-v,C-w).normalize(),s[1].setComponents(c+a,p+d,m+v,C+w).normalize(),s[2].setComponents(c+o,p+u,m+_,C+E).normalize(),s[3].setComponents(c-o,p-u,m-_,C-E).normalize(),i)s[4].setComponents(l,h,g,b).normalize(),s[5].setComponents(c-l,p-h,m-g,C-b).normalize();else if(s[4].setComponents(c-l,p-h,m-g,C-b).normalize(),t===Vn)s[5].setComponents(c+l,p+h,m+g,C+b).normalize();else if(t===jr)s[5].setComponents(l,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=lx.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ta.x=s.normal.x>0?e.max.x:e.min.x,Ta.y=s.normal.y>0?e.max.y:e.min.y,Ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lr extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ho=new F,fo=new F,Ku=new Dt,br=new Lo,Aa=new ea,bl=new F,$u=new F;class po extends Vt{constructor(e=new Xt,t=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ho.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ho.distanceTo(fo);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Ku.copy(s).invert(),br.copy(e.ray).applyMatrix4(Ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let _=p,g=v-1;_<g;_+=c){const m=d.getX(_),w=d.getX(_+1),E=Ra(this,e,br,l,m,w,_);E&&t.push(E)}if(this.isLineLoop){const _=d.getX(v-1),g=d.getX(p),m=Ra(this,e,br,l,_,g,v-1);m&&t.push(m)}}else{const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let _=p,g=v-1;_<g;_+=c){const m=Ra(this,e,br,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Ra(this,e,br,l,v-1,p,v-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ra(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(ho.fromBufferAttribute(o,s),fo.fromBufferAttribute(o,r),t.distanceSqToSegment(ho,fo,bl,$u)>i)return;bl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(bl);if(!(c<e.near||c>e.far))return{distance:c,point:$u.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Zu=new F,Ju=new F;class md extends po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Zu.fromBufferAttribute(t,s),Ju.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zu.distanceTo(Ju);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gd extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qu=new Dt,Ic=new Lo,Ca=new ea,Pa=new F;class xp extends Vt{constructor(e=new Xt,t=new gd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;Qu.copy(s).invert(),Ic.copy(e.ray).applyMatrix4(Qu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,_=p;v<_;v++){const g=c.getX(v);Pa.fromBufferAttribute(u,g),eh(Pa,g,l,s,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=h,_=p;v<_;v++)Pa.fromBufferAttribute(u,v),eh(Pa,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function eh(n,e,t,i,s,r,a){const o=Ic.distanceSqToPoint(n);if(o<t){const l=new F;Ic.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class yp extends mn{constructor(e,t,i=ps,s,r,a,o=Wn,l=Wn,c,d=Wr,u=1){if(d!==Wr&&d!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ud(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Io extends Xt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],p=[];let v=0;const _=[],g=i/2;let m=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(p,2));function w(){const b=new F,C=new F;let L=0;const I=(t-e)/i;for(let D=0;D<=r;D++){const M=[],S=D/r,P=S*(t-e)+e;for(let X=0;X<=s;X++){const W=X/s,$=W*l+o,te=Math.sin($),q=Math.cos($);C.x=P*te,C.y=-S*i+g,C.z=P*q,u.push(C.x,C.y,C.z),b.set(te,I,q).normalize(),h.push(b.x,b.y,b.z),p.push(W,1-S),M.push(v++)}_.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){const S=_[M][D],P=_[M+1][D],X=_[M+1][D+1],W=_[M][D+1];(e>0||M!==0)&&(d.push(S,P,W),L+=3),(t>0||M!==r-1)&&(d.push(P,X,W),L+=3)}c.addGroup(m,L,0),m+=L}function E(b){const C=v,L=new Ke,I=new F;let D=0;const M=b===!0?e:t,S=b===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,g*S,0),h.push(0,S,0),p.push(.5,.5),v++;const P=v;for(let X=0;X<=s;X++){const $=X/s*l+o,te=Math.cos($),q=Math.sin($);I.x=M*q,I.y=g*S,I.z=M*te,u.push(I.x,I.y,I.z),h.push(0,S,0),L.x=te*.5+.5,L.y=q*.5*S+.5,p.push(L.x,L.y),v++}for(let X=0;X<s;X++){const W=C+X,$=P+X;b===!0?d.push($,$+1,W):d.push($+1,$,W),D+=3}c.addGroup(m,D,b===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ta extends Io{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ta(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vd extends Xt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const E=new F,b=new F,C=new F;for(let L=0;L<t.length;L+=3)p(t[L+0],E),p(t[L+1],b),p(t[L+2],C),l(E,b,C,w)}function l(w,E,b,C){const L=C+1,I=[];for(let D=0;D<=L;D++){I[D]=[];const M=w.clone().lerp(b,D/L),S=E.clone().lerp(b,D/L),P=L-D;for(let X=0;X<=P;X++)X===0&&D===L?I[D][X]=M:I[D][X]=M.clone().lerp(S,X/P)}for(let D=0;D<L;D++)for(let M=0;M<2*(L-D)-1;M++){const S=Math.floor(M/2);M%2===0?(h(I[D][S+1]),h(I[D+1][S]),h(I[D][S])):(h(I[D][S+1]),h(I[D+1][S+1]),h(I[D+1][S]))}}function c(w){const E=new F;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(w),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function d(){const w=new F;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];const b=g(w)/2/Math.PI+.5,C=m(w)/Math.PI+.5;a.push(b,1-C)}v(),u()}function u(){for(let w=0;w<a.length;w+=6){const E=a[w+0],b=a[w+2],C=a[w+4],L=Math.max(E,b,C),I=Math.min(E,b,C);L>.9&&I<.1&&(E<.2&&(a[w+0]+=1),b<.2&&(a[w+2]+=1),C<.2&&(a[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function p(w,E){const b=w*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function v(){const w=new F,E=new F,b=new F,C=new F,L=new Ke,I=new Ke,D=new Ke;for(let M=0,S=0;M<r.length;M+=9,S+=6){w.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),L.set(a[S+0],a[S+1]),I.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),C.copy(w).add(E).add(b).divideScalar(3);const P=g(C);_(L,S+0,w,P),_(I,S+2,E,P),_(D,S+4,b,P)}}function _(w,E,b,C){C<0&&w.x===1&&(a[E]=w.x-1),b.x===0&&b.z===0&&(a[E]=C/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.vertices,e.indices,e.radius,e.details)}}class _d extends vd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _d(e.radius,e.detail)}}class Un extends Xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,p=[],v=[],_=[],g=[];for(let m=0;m<d;m++){const w=m*h-a;for(let E=0;E<c;E++){const b=E*u-r;v.push(b,-w,0),_.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){const E=w+c*m,b=w+c*(m+1),C=w+1+c*(m+1),L=w+1+c*m;p.push(E,b,L),p.push(b,C,L)}this.setIndex(p),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}class ln extends Xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new F,h=new F,p=[],v=[],_=[],g=[];for(let m=0;m<=i;m++){const w=[],E=m/i;let b=0;m===0&&a===0?b=.5/t:m===i&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const L=C/t;u.x=-e*Math.cos(s+L*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+L*r)*Math.sin(a+E*o),v.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),g.push(L+b,1-E),w.push(c++)}d.push(w)}for(let m=0;m<i;m++)for(let w=0;w<t;w++){const E=d[m][w+1],b=d[m][w],C=d[m+1][w],L=d[m+1][w+1];(m!==0||a>0)&&p.push(E,b,L),(m!==i-1||l<Math.PI)&&p.push(b,C,L)}this.setIndex(p),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class th extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cx extends Ai{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fn extends Ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dx extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ux extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function La(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function hx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function nh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function bp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class Do{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class px extends Do{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fs,endingEnd:Fs}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Os:r=e,o=2*t-i;break;case oo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Os:a=e,l=2*i-t;break;case oo:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(i-t)/(s-t),_=v*v,g=_*v,m=-h*g+2*h*_-h*v,w=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*v+1,E=(-1-p)*g+(1.5+p)*_+.5*v,b=p*g-p*_;for(let C=0;C!==o;++C)r[C]=m*a[d+C]+w*a[c+C]+E*a[l+C]+b*a[u+C];return r}}class Mp extends Do{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(i-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}}class mx extends Do{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new px(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ao:t=this.InterpolantFactoryMethodDiscrete;break;case Lc:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return Lc;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&hx(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Zo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*i,h=u-i,p=u+i;for(let v=0;v!==i;++v){const _=t[u+v];if(_!==t[h+v]||_!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Lc;class cr extends qn{constructor(e,t,i){super(e,t,i)}}cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=ao;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ep extends qn{constructor(e,t,i,s){super(e,t,i,s)}}Ep.prototype.ValueTypeName="color";class mo extends qn{constructor(e,t,i,s){super(e,t,i,s)}}mo.prototype.ValueTypeName="number";class gx extends Do{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let d=c+o;c!==d;c+=4)Xn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class na extends qn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new gx(this.times,this.values,this.getValueSize(),e)}}na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends qn{constructor(e,t,i){super(e,t,i)}}dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=ao;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends qn{constructor(e,t,i,s){super(e,t,i,s)}}qr.prototype.ValueTypeName="vector";class Dc{constructor(e="",t=-1,i=[],s=dd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=or(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(_x(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const d=fx(l);l=nh(l,1,d),c=nh(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new mo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],d=c.name.match(r);if(d&&d.length>1){const u=d[1];let h=s[u];h||(s[u]=h=[]),h.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,h,p,v,_){if(p.length!==0){const g=[],m=[];bp(p,g,m,v),g.length!==0&&_.push(new u(h,g,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let v;for(v=0;v<h.length;v++)if(h[v].morphTargets)for(let _=0;_<h[v].morphTargets.length;_++)p[h[v].morphTargets[_]]=-1;for(const _ in p){const g=[],m=[];for(let w=0;w!==h[v].morphTargets.length;++w){const E=h[v];g.push(E.time),m.push(E.morphTarget===_?1:0)}s.push(new mo(".morphTargetInfluence["+_+"]",g,m))}l=p.length*a}else{const p=".bones["+t[u].name+"]";i(qr,p+".position",h,"pos",s),i(na,p+".quaternion",h,"rot",s),i(qr,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mo;case"vector":case"vector2":case"vector3":case"vector4":return qr;case"color":return Ep;case"quaternion":return na;case"bool":case"boolean":return cr;case"string":return dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function _x(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vx(n.type);if(n.times===void 0){const t=[],i=[];bp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}class Uo extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ml=new Dt,ih=new F,sh=new F;class xd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pd,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sh),t.updateMatrixWorld(),Ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xx extends xd{constructor(){super(new it(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=co*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yx extends Uo{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new xx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rh=new Dt,Mr=new F,El=new F;class bx extends xd{constructor(){super(new it(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mr),El.copy(i.position),El.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(El),i.updateMatrixWorld(),s.makeTranslation(-Mr.x,-Mr.y,-Mr.z),rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh,i.coordinateSystem,i.reversedDepth)}}class ah extends Uo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sp extends hd{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mx extends xd{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mi extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Mx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ei extends Uo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ex extends it{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class oh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Sx{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){Xn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const a=this._workIndex*r;Xn.multiplyQuaternionsFlat(e,a,e,t,e,i),Xn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*s}}}const yd="\\[\\]\\.:\\/",wx=new RegExp("["+yd+"]","g"),bd="[^"+yd+"]",Tx="[^"+yd.replace("\\.","")+"]",Ax=/((?:WC+[\/:])*)/.source.replace("WC",bd),Rx=/(WCOD+)?/.source.replace("WCOD",Tx),Cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bd),Px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bd),Lx=new RegExp("^"+Ax+Rx+Cx+Px+"$"),Ix=["material","materials","bones","map"];class Dx{constructor(e,t,i){const s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class _t{constructor(e,t,i){this.path=t,this.parsedPath=i||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,i):new _t(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wx,"")}static parseTrackName(e){const t=Lx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Ix.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=Dx;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ux{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Fs,endingEnd:Fs};for(let c=0;c!==a;++c){const d=r[c].createInterpolant(null);o[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=x_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case b_:for(let d=0,u=l.length;d!==u;++d)l[d].evaluate(a),c[d].accumulateAdditive(o);break;case dd:default:for(let d=0,u=l.length;d!==u;++d)l[d].evaluate(a),c[d].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const a=i===y_;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===__){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=Os,s.endingEnd=Os):(e?s.endingStart=this.zeroSlopeAtStart?Os:Fs:s.endingStart=oo,t?s.endingEnd=this.zeroSlopeAtEnd?Os:Fs:s.endingEnd=oo)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const Nx=new Float32Array(1);class Fx extends Ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let u=0;u!==r;++u){const h=s[u],p=h.name;let v=d[p];if(v!==void 0)++v.referenceCount,a[u]=v;else{if(v=a[u],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,l,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;v=new Sx(_t.create(i,p,_),h.ValueTypeName,h.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,l,p),a[u]=v}o[u].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete u[h],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Mp(new Float32Array(2),new Float32Array(2),1,Nx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?Dc.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=dd),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const d=new Ux(this,a,t,i);return this._bindAction(d,c),this._addInactiveAction(d,o,r),d}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?Dc.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const d=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=d,t[d]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class lh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Uc extends md{constructor(e=10,t=10,i=4473924,s=8947848){i=new ze(i),s=new ze(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,p=0,v=-o;h<=t;h++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const _=h===r?i:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const d=new Xt;d.setAttribute("position",new Ct(l,3)),d.setAttribute("color",new Ct(c,3));const u=new lr({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const ch=new F,Ia=new F,dh=new F;class Ox extends Vt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new Xt;s.setAttribute("position",new Ct([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new lr({fog:!1,toneMapped:!1});this.lightPlane=new po(s,r),this.add(this.lightPlane),s=new Xt,s.setAttribute("position",new Ct([0,0,0,0,0,1],3)),this.targetLine=new po(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),ch.setFromMatrixPosition(this.light.matrixWorld),Ia.setFromMatrixPosition(this.light.target.matrixWorld),dh.subVectors(Ia,ch),this.lightPlane.lookAt(Ia),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ia),this.targetLine.scale.z=dh.length()}}const Da=new F,Bt=new hd;class Bx extends md{constructor(e){const t=new Xt,i=new lr({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(v,_){l(v),l(_)}function l(v){s.push(0,0,0),r.push(0,0,0),a[v]===void 0&&(a[v]=[]),a[v].push(s.length/3-1)}t.setAttribute("position",new Ct(s,3)),t.setAttribute("color",new Ct(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new ze(16755200),d=new ze(16711680),u=new ze(43775),h=new ze(16777215),p=new ze(3355443);this.setColors(c,d,u,h,p)}setColors(e,t,i,s,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,i=1,s=1;let r,a;if(Bt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Vn)r=-1,a=1;else if(this.camera.coordinateSystem===jr)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);zt("c",t,e,Bt,0,0,r),zt("t",t,e,Bt,0,0,a),zt("n1",t,e,Bt,-i,-s,r),zt("n2",t,e,Bt,i,-s,r),zt("n3",t,e,Bt,-i,s,r),zt("n4",t,e,Bt,i,s,r),zt("f1",t,e,Bt,-i,-s,a),zt("f2",t,e,Bt,i,-s,a),zt("f3",t,e,Bt,-i,s,a),zt("f4",t,e,Bt,i,s,a),zt("u1",t,e,Bt,i*.7,s*1.1,r),zt("u2",t,e,Bt,-i*.7,s*1.1,r),zt("u3",t,e,Bt,0,s*2,r),zt("cf1",t,e,Bt,-i,0,a),zt("cf2",t,e,Bt,i,0,a),zt("cf3",t,e,Bt,0,-s,a),zt("cf4",t,e,Bt,0,s,a),zt("cn1",t,e,Bt,-i,0,r),zt("cn2",t,e,Bt,i,0,r),zt("cn3",t,e,Bt,0,-s,r),zt("cn4",t,e,Bt,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function zt(n,e,t,i,s,r,a){Da.set(s,r,a).unproject(i);const o=e[n];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,d=o.length;c<d;c++)l.setXYZ(o[c],Da.x,Da.y,Da.z)}}class wp extends md{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Xt;s.setAttribute("position",new Ct(t,3)),s.setAttribute("color",new Ct(i,3));const r=new lr({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new ze,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hx extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function uh(n,e,t,i){const s=kx(i);switch(t){case rp:return n*e;case op:return n*e/s.components*s.byteLength;case od:return n*e/s.components*s.byteLength;case lp:return n*e*2/s.components*s.byteLength;case ld:return n*e*2/s.components*s.byteLength;case ap:return n*e*3/s.components*s.byteLength;case zn:return n*e*4/s.components*s.byteLength;case cd:return n*e*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ja:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:case lc:return Math.max(n,16)*Math.max(e,8)/4;case rc:case oc:return Math.max(n,8)*Math.max(e,8)/2;case cc:case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ya:case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cp:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cc:case Pc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kx(n){switch(n){case ri:case np:return{byteLength:1,components:1};case Vr:case ip:case Jr:return{byteLength:2,components:1};case rd:case ad:return{byteLength:2,components:4};case ps:case sd:case _i:return{byteLength:4,components:1};case sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zx(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,d);else{u.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<u.length;p++){const v=u[h],_=u[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,u[h]=_)}u.length=h+1;for(let p=0,v=u.length;p<v;p++){const _=u[p];n.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gx=`#ifdef USE_ALPHAHASH
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
#endif`,Wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
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
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$x=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ty=`#ifdef USE_IRIDESCENCE
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
#endif`,ny=`#ifdef USE_BUMPMAP
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
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uy=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,hy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fy=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_y="gl_FragColor = linearToOutputTexel( gl_FragColor );",xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,My=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cy=`#ifdef USE_GRADIENTMAP
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
}`,Py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Uy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ky=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zy=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zy=`#if defined( USE_POINTS_UV )
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
#endif`,Jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ib=`#ifdef USE_MORPHTARGETS
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
#endif`,sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
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
#endif`,ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Tb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
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
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nb=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fb=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vb=`uniform sampler2D t2D;
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`#include <common>
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
}`,Yb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,Kb=`#define DISTANCE
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
}`,$b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,t1=`#include <common>
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#define LAMBERT
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
}`,s1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,r1=`#define MATCAP
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
}`,a1=`#define MATCAP
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
}`,o1=`#define NORMAL
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
}`,l1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c1=`#define PHONG
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
}`,d1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,u1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,f1=`#define TOON
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
}`,p1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,m1=`uniform float size;
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
}`,g1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,_1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,x1=`uniform float rotation;
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
}`,y1=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Vx,alphahash_pars_fragment:Gx,alphamap_fragment:Wx,alphamap_pars_fragment:Xx,alphatest_fragment:jx,alphatest_pars_fragment:qx,aomap_fragment:Yx,aomap_pars_fragment:Kx,batching_pars_vertex:$x,batching_vertex:Zx,begin_vertex:Jx,beginnormal_vertex:Qx,bsdfs:ey,iridescence_fragment:ty,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:ay,color_fragment:oy,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:dy,common:uy,cube_uv_reflection_fragment:hy,defaultnormal_vertex:fy,displacementmap_pars_vertex:py,displacementmap_vertex:my,emissivemap_fragment:gy,emissivemap_pars_fragment:vy,colorspace_fragment:_y,colorspace_pars_fragment:xy,envmap_fragment:yy,envmap_common_pars_fragment:by,envmap_pars_fragment:My,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Uy,envmap_vertex:Sy,fog_vertex:wy,fog_pars_vertex:Ty,fog_fragment:Ay,fog_pars_fragment:Ry,gradientmap_pars_fragment:Cy,lightmap_pars_fragment:Py,lights_lambert_fragment:Ly,lights_lambert_pars_fragment:Iy,lights_pars_begin:Dy,lights_toon_fragment:Ny,lights_toon_pars_fragment:Fy,lights_phong_fragment:Oy,lights_phong_pars_fragment:By,lights_physical_fragment:Hy,lights_physical_pars_fragment:ky,lights_fragment_begin:zy,lights_fragment_maps:Vy,lights_fragment_end:Gy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:Xy,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:qy,map_fragment:Yy,map_pars_fragment:Ky,map_particle_fragment:$y,map_particle_pars_fragment:Zy,metalnessmap_fragment:Jy,metalnessmap_pars_fragment:Qy,morphinstance_vertex:eb,morphcolor_vertex:tb,morphnormal_vertex:nb,morphtarget_pars_vertex:ib,morphtarget_vertex:sb,normal_fragment_begin:rb,normal_fragment_maps:ab,normal_pars_fragment:ob,normal_pars_vertex:lb,normal_vertex:cb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:ub,clearcoat_normal_fragment_maps:hb,clearcoat_pars_fragment:fb,iridescence_pars_fragment:pb,opaque_fragment:mb,packing:gb,premultiplied_alpha_fragment:vb,project_vertex:_b,dithering_fragment:xb,dithering_pars_fragment:yb,roughnessmap_fragment:bb,roughnessmap_pars_fragment:Mb,shadowmap_pars_fragment:Eb,shadowmap_pars_vertex:Sb,shadowmap_vertex:wb,shadowmask_pars_fragment:Tb,skinbase_vertex:Ab,skinning_pars_vertex:Rb,skinning_vertex:Cb,skinnormal_vertex:Pb,specularmap_fragment:Lb,specularmap_pars_fragment:Ib,tonemapping_fragment:Db,tonemapping_pars_fragment:Ub,transmission_fragment:Nb,transmission_pars_fragment:Fb,uv_pars_fragment:Ob,uv_pars_vertex:Bb,uv_vertex:Hb,worldpos_vertex:kb,background_vert:zb,background_frag:Vb,backgroundCube_vert:Gb,backgroundCube_frag:Wb,cube_vert:Xb,cube_frag:jb,depth_vert:qb,depth_frag:Yb,distanceRGBA_vert:Kb,distanceRGBA_frag:$b,equirect_vert:Zb,equirect_frag:Jb,linedashed_vert:Qb,linedashed_frag:e1,meshbasic_vert:t1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:s1,meshmatcap_vert:r1,meshmatcap_frag:a1,meshnormal_vert:o1,meshnormal_frag:l1,meshphong_vert:c1,meshphong_frag:d1,meshphysical_vert:u1,meshphysical_frag:h1,meshtoon_vert:f1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:v1,shadow_frag:_1,sprite_vert:x1,sprite_frag:y1},Ee={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Qn={basic:{uniforms:an([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:an([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ze(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:an([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:an([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:an([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ze(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:an([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:an([Ee.points,Ee.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:an([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:an([Ee.common,Ee.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:an([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:an([Ee.sprite,Ee.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:an([Ee.common,Ee.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:an([Ee.lights,Ee.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Qn.physical={uniforms:an([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ua={r:0,b:0,g:0},ss=new Fn,b1=new Dt;function M1(n,e,t,i,s,r,a){const o=new ze(0);let l=r===!0?0:1,c,d,u=null,h=0,p=null;function v(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function _(E){let b=!1;const C=v(E);C===null?m(o,l):C&&C.isColor&&(m(C,1),b=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,b){const C=v(b);C&&(C.isCubeTexture||C.mapping===Co)?(d===void 0&&(d=new We(new Ut(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:rr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ss.copy(b.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(b1.makeRotationFromEuler(ss)),d.material.toneMapped=ut.getTransfer(C.colorSpace)!==yt,(u!==C||h!==C.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=C,h=C.version,p=n.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new We(new Un(2,2),new Yi({name:"BackgroundMaterial",uniforms:rr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ut.getTransfer(C.colorSpace)!==yt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||h!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=C,h=C.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,b){E.getRGB(Ua,vp(n)),i.buffers.color.setClear(Ua.r,Ua.g,Ua.b,b,a)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(o,l)},render:_,addToRenderList:g,dispose:w}}function E1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(S,P,X,W,$){let te=!1;const q=u(W,X,P);r!==q&&(r=q,c(r.object)),te=p(S,W,X,$),te&&v(S,W,X,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,b(S,P,X,W),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function d(S){return n.deleteVertexArray(S)}function u(S,P,X){const W=X.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let te=$[P.id];te===void 0&&(te={},$[P.id]=te);let q=te[W];return q===void 0&&(q=h(l()),te[W]=q),q}function h(S){const P=[],X=[],W=[];for(let $=0;$<t;$++)P[$]=0,X[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:X,attributeDivisors:W,object:S,attributes:{},index:null}}function p(S,P,X,W){const $=r.attributes,te=P.attributes;let q=0;const j=X.getAttributes();for(const z in j)if(j[z].location>=0){const _e=$[z];let Le=te[z];if(Le===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(Le=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(Le=S.instanceColor)),_e===void 0||_e.attribute!==Le||Le&&_e.data!==Le.data)return!0;q++}return r.attributesNum!==q||r.index!==W}function v(S,P,X,W){const $={},te=P.attributes;let q=0;const j=X.getAttributes();for(const z in j)if(j[z].location>=0){let _e=te[z];_e===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor));const Le={};Le.attribute=_e,_e&&_e.data&&(Le.data=_e.data),$[z]=Le,q++}r.attributes=$,r.attributesNum=q,r.index=W}function _(){const S=r.newAttributes;for(let P=0,X=S.length;P<X;P++)S[P]=0}function g(S){m(S,0)}function m(S,P){const X=r.newAttributes,W=r.enabledAttributes,$=r.attributeDivisors;X[S]=1,W[S]===0&&(n.enableVertexAttribArray(S),W[S]=1),$[S]!==P&&(n.vertexAttribDivisor(S,P),$[S]=P)}function w(){const S=r.newAttributes,P=r.enabledAttributes;for(let X=0,W=P.length;X<W;X++)P[X]!==S[X]&&(n.disableVertexAttribArray(X),P[X]=0)}function E(S,P,X,W,$,te,q){q===!0?n.vertexAttribIPointer(S,P,X,$,te):n.vertexAttribPointer(S,P,X,W,$,te)}function b(S,P,X,W){_();const $=W.attributes,te=X.getAttributes(),q=P.defaultAttributeValues;for(const j in te){const z=te[j];if(z.location>=0){let he=$[j];if(he===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){const _e=he.normalized,Le=he.itemSize,ke=e.get(he);if(ke===void 0)continue;const ht=ke.buffer,lt=ke.type,ie=ke.bytesPerElement,ve=lt===n.INT||lt===n.UNSIGNED_INT||he.gpuType===sd;if(he.isInterleavedBufferAttribute){const N=he.data,ae=N.stride,se=he.offset;if(N.isInstancedInterleavedBuffer){for(let ce=0;ce<z.locationSize;ce++)m(z.location+ce,N.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ce=0;ce<z.locationSize;ce++)g(z.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let ce=0;ce<z.locationSize;ce++)E(z.location+ce,Le/z.locationSize,lt,_e,ae*ie,(se+Le/z.locationSize*ce)*ie,ve)}else{if(he.isInstancedBufferAttribute){for(let N=0;N<z.locationSize;N++)m(z.location+N,he.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let N=0;N<z.locationSize;N++)g(z.location+N);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let N=0;N<z.locationSize;N++)E(z.location+N,Le/z.locationSize,lt,_e,Le*ie,Le/z.locationSize*N*ie,ve)}}else if(q!==void 0){const _e=q[j];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(z.location,_e);break;case 3:n.vertexAttrib3fv(z.location,_e);break;case 4:n.vertexAttrib4fv(z.location,_e);break;default:n.vertexAttrib1fv(z.location,_e)}}}}w()}function C(){D();for(const S in i){const P=i[S];for(const X in P){const W=P[X];for(const $ in W)d(W[$].object),delete W[$];delete P[X]}delete i[S]}}function L(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const X in P){const W=P[X];for(const $ in W)d(W[$].object),delete W[$];delete P[X]}delete i[S.id]}function I(S){for(const P in i){const X=i[P];if(X[S.id]===void 0)continue;const W=X[S.id];for(const $ in W)d(W[$].object),delete W[$];delete X[S.id]}}function D(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function S1(n,e,t){let i;function s(c){i=c}function r(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function a(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function o(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=d[v];t.update(p,i,1)}function l(c,d,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],d[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let v=0;for(let _=0;_<u;_++)v+=d[_]*h[_];t.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function w1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==zn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const D=I===Jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ri&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==_i&&!D)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:C,maxSamples:L}}function T1(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Bi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||i!==0||s;return s=h,i=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){const v=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||v===null||v.length===0||r&&!g)r?d(null):c();else{const w=r?0:i,E=w*4;let b=m.clippingState||null;l.value=b,b=d(v,h,E,p);for(let C=0;C!==E;++C)b[C]=t[C];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,p,v){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const m=p+_*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,b=p;E!==_;++E,b+=4)a.copy(u[E]).applyMatrix4(w,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function A1(n){let e=new WeakMap;function t(a,o){return o===tc?a.mapping=nr:o===nc&&(a.mapping=ir),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===tc||o===nc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sx(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Bs=4,hh=[.125,.215,.35,.446,.526,.582],cs=20,Sl=new Sp,fh=new ze;let wl=null,Tl=0,Al=0,Rl=!1;const os=(1+Math.sqrt(5))/2,Is=1/os,ph=[new F(-os,Is,0),new F(os,Is,0),new F(-Is,0,os),new F(Is,0,os),new F(0,os,-Is),new F(0,os,Is),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],R1=new F;class mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=R1}=r;wl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wl,Tl,Al),this._renderer.xr.enabled=Rl,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Jr,format:zn,colorSpace:sr,depthBuffer:!1},s=gh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C1(r)),this._blurMaterial=P1(r,e,t)}return s}_compileMaterial(e){const t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,i,s,r){const l=new it(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(fh),u.toneMapping=Wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new ct({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new We(new Ut,_);let m=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,m=!0):(_.color.copy(fh),m=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[E]));const C=this._cubeSize;Na(s,b*C,E>2?C:0,C,C),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===nr||e.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Na(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Sl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ph[(s-r-1)%ph.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new We(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*cs-1),_=r/v,g=isFinite(r)?1+Math.floor(d*_):cs;g>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);const m=[];let w=0;for(let I=0;I<cs;++I){const D=I/_,M=Math.exp(-D*D/2);m.push(M),I===0?w+=M:I<g&&(w+=2*M)}for(let I=0;I<m.length;I++)m[I]=m[I]/w;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=v,h.mipInt.value=E-i;const b=this._sizeLods[s],C=3*b*(s>E-Bs?s-E+Bs:0),L=4*(this._cubeSize-b);Na(t,C,L,3*b,2*b),l.setRenderTarget(t),l.render(u,Sl)}}function C1(n){const e=[],t=[],i=[];let s=n;const r=n-Bs+1+hh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Bs?l=hh[a-n+Bs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,v=6,_=3,g=2,m=1,w=new Float32Array(_*v*p),E=new Float32Array(g*v*p),b=new Float32Array(m*v*p);for(let L=0;L<p;L++){const I=L%3*2/3-1,D=L>2?0:-1,M=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];w.set(M,_*v*L),E.set(h,g*v*L);const S=[L,L,L,L,L,L];b.set(S,m*v*L)}const C=new Xt;C.setAttribute("position",new wn(w,_)),C.setAttribute("uv",new wn(E,g)),C.setAttribute("faceIndex",new wn(b,m)),e.push(C),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gh(n,e,t){const i=new ms(n,e,t);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function P1(n,e,t){const i=new Float32Array(cs),s=new F(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function vh(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function _h(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===tc||l===nc,d=l===nr||l===ir;if(c||d){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new mh(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new mh(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function I1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function D1(n,e,t,i){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(u){const h=[],p=u.index,v=u.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let E=0,b=w.length;E<b;E+=3){const C=w[E+0],L=w[E+1],I=w[E+2];h.push(C,L,L,I,I,C)}}else if(v!==void 0){const w=v.array;_=v.version;for(let E=0,b=w.length/3-1;E<b;E+=3){const C=E+0,L=E+1,I=E+2;h.push(C,L,L,I,I,C)}}else return;const g=new(up(h)?gp:mp)(h,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function d(u){const h=r.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function U1(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*a),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,h*a,v),t.update(p,i,v))}function d(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,v);let g=0;for(let m=0;m<v;m++)g+=p[m];t.update(g,i,1)}function u(h,p,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/a,p[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,_,0,v);let m=0;for(let w=0;w<v;w++)m+=p[w]*_[w];t.update(m,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function N1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function F1(n,e,t){const i=new WeakMap,s=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let S=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let C=o.attributes.position.count*b,L=1;C>e.maxTextureSize&&(L=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const I=new Float32Array(C*L*4*u),D=new hp(I,C,L,u);D.type=_i,D.needsUpdate=!0;const M=b*4;for(let P=0;P<u;P++){const X=m[P],W=w[P],$=E[P],te=C*L*4*P;for(let q=0;q<X.count;q++){const j=q*M;v===!0&&(s.fromBufferAttribute(X,q),I[te+j+0]=s.x,I[te+j+1]=s.y,I[te+j+2]=s.z,I[te+j+3]=0),_===!0&&(s.fromBufferAttribute(W,q),I[te+j+4]=s.x,I[te+j+5]=s.y,I[te+j+6]=s.z,I[te+j+7]=0),g===!0&&(s.fromBufferAttribute($,q),I[te+j+8]=s.x,I[te+j+9]=s.y,I[te+j+10]=s.z,I[te+j+11]=$.itemSize===4?s.w:1)}}h={count:u,texture:D,size:new Ke(C,L)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function O1(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Ap=new mn,xh=new yp(1,1),Rp=new hp,Cp=new z_,Pp=new _p,yh=[],bh=[],Mh=new Float32Array(16),Eh=new Float32Array(9),Sh=new Float32Array(4);function ur(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=yh[s];if(r===void 0&&(r=new Float32Array(s),yh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function No(n,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function B1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function H1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function k1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function V1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),Yt(t,i)}}function G1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Eh.set(i),n.uniformMatrix3fv(this.addr,!1,Eh),Yt(t,i)}}function W1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Mh.set(i),n.uniformMatrix4fv(this.addr,!1,Mh),Yt(t,i)}}function X1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function K1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function Z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function J1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function Q1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xh.compareFunction=dp,r=xh):r=Ap,t.setTexture2D(e||r,s)}function eM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cp,s)}function tM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pp,s)}function nM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rp,s)}function iM(n){switch(n){case 5126:return B1;case 35664:return H1;case 35665:return k1;case 35666:return z1;case 35674:return V1;case 35675:return G1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return j1;case 35668:case 35672:return q1;case 35669:case 35673:return Y1;case 5125:return K1;case 36294:return $1;case 36295:return Z1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}function sM(n,e){n.uniform1fv(this.addr,e)}function rM(n,e){const t=ur(e,this.size,2);n.uniform2fv(this.addr,t)}function aM(n,e){const t=ur(e,this.size,3);n.uniform3fv(this.addr,t)}function oM(n,e){const t=ur(e,this.size,4);n.uniform4fv(this.addr,t)}function lM(n,e){const t=ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cM(n,e){const t=ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dM(n,e){const t=ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uM(n,e){n.uniform1iv(this.addr,e)}function hM(n,e){n.uniform2iv(this.addr,e)}function fM(n,e){n.uniform3iv(this.addr,e)}function pM(n,e){n.uniform4iv(this.addr,e)}function mM(n,e){n.uniform1uiv(this.addr,e)}function gM(n,e){n.uniform2uiv(this.addr,e)}function vM(n,e){n.uniform3uiv(this.addr,e)}function _M(n,e){n.uniform4uiv(this.addr,e)}function xM(n,e,t){const i=this.cache,s=e.length,r=No(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ap,r[a])}function yM(n,e,t){const i=this.cache,s=e.length,r=No(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cp,r[a])}function bM(n,e,t){const i=this.cache,s=e.length,r=No(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pp,r[a])}function MM(n,e,t){const i=this.cache,s=e.length,r=No(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rp,r[a])}function EM(n){switch(n){case 5126:return sM;case 35664:return rM;case 35665:return aM;case 35666:return oM;case 35674:return lM;case 35675:return cM;case 35676:return dM;case 5124:case 35670:return uM;case 35667:case 35671:return hM;case 35668:case 35672:return fM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return vM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return MM}}class SM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iM(t.type)}}class wM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EM(t.type)}}class TM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Cl=/(\w+)(\])?(\[|\.)?/g;function wh(n,e){n.seq.push(e),n.map[e.id]=e}function AM(n,e,t){const i=n.name,s=i.length;for(Cl.lastIndex=0;;){const r=Cl.exec(i),a=Cl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wh(t,c===void 0?new SM(o,n,e):new wM(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new TM(o),wh(t,u)),t=u}}}class $a{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);AM(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Th(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const RM=37297;let CM=0;function PM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ah=new tt;function LM(n){ut._getMatrix(Ah,ut.workingColorSpace,n);const e=`mat3( ${Ah.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case lo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+PM(n.getShaderSource(e),o)}else return r}function IM(n,e){const t=LM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function DM(n,e){let t;switch(e){case d_:t="Linear";break;case u_:t="Reinhard";break;case h_:t="Cineon";break;case f_:t="ACESFilmic";break;case m_:t="AgX";break;case g_:t="Neutral";break;case p_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fa=new F;function UM(){ut.getLuminanceCoefficients(Fa);const n=Fa.x.toFixed(4),e=Fa.y.toFixed(4),t=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function FM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Sr(n){return n!==""}function Ch(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ph(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(n){return n.replace(BM,kM)}const HM=new Map;function kM(n,e){let t=st[e];if(t===void 0){const i=HM.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}const zM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(n){return n.replace(zM,VM)}function VM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ro?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ds?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function WM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function jM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ro:e="ENVMAP_BLENDING_MULTIPLY";break;case l_:e="ENVMAP_BLENDING_MIX";break;case c_:e="ENVMAP_BLENDING_ADD";break}return e}function qM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function YM(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=GM(t),c=WM(t),d=XM(t),u=jM(t),h=qM(t),p=NM(t),v=FM(r),_=s.createProgram();let g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Sr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Sr).join(`
`),m.length>0&&(m+=`
`)):(g=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),m=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?st.tonemapping_pars_fragment:"",t.toneMapping!==Wi?DM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,IM("linearToOutputTexel",t.outputColorSpace),UM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=Nc(a),a=Ch(a,t),a=Ph(a,t),o=Nc(o),o=Ch(o,t),o=Ph(o,t),a=Lh(a),o=Lh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=w+g+a,b=w+m+o,C=Th(s,s.VERTEX_SHADER,E),L=Th(s,s.FRAGMENT_SHADER,b);s.attachShader(_,C),s.attachShader(_,L),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(P){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(_)||"",W=s.getShaderInfoLog(C)||"",$=s.getShaderInfoLog(L)||"",te=X.trim(),q=W.trim(),j=$.trim();let z=!0,he=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,L);else{const _e=Rh(s,C,"vertex"),Le=Rh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+te+`
`+_e+`
`+Le)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(q===""||j==="")&&(he=!1);he&&(P.diagnostics={runnable:z,programLog:te,vertexShader:{log:q,prefix:g},fragmentShader:{log:j,prefix:m}})}s.deleteShader(C),s.deleteShader(L),D=new $a(s,_),M=OM(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,RM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=L,this}let KM=0;class $M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ZM(e),t.set(e,i)),i}}class ZM{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}}function JM(n,e,t,i,s,r,a){const o=new fp,l=new $M,c=new Set,d=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,P,X,W){const $=X.fog,te=W.geometry,q=M.isMeshStandardMaterial?X.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),z=j&&j.mapping===Co?j.image.height:null,he=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const _e=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Le=_e!==void 0?_e.length:0;let ke=0;te.morphAttributes.position!==void 0&&(ke=1),te.morphAttributes.normal!==void 0&&(ke=2),te.morphAttributes.color!==void 0&&(ke=3);let ht,lt,ie,ve;if(he){const ft=Qn[he];ht=ft.vertexShader,lt=ft.fragmentShader}else ht=M.vertexShader,lt=M.fragmentShader,l.update(M),ie=l.getVertexShaderID(M),ve=l.getFragmentShaderID(M);const N=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),se=W.isInstancedMesh===!0,ce=W.isBatchedMesh===!0,je=!!M.map,R=!!M.matcap,x=!!j,O=!!M.aoMap,G=!!M.lightMap,ee=!!M.bumpMap,V=!!M.normalMap,de=!!M.displacementMap,J=!!M.emissiveMap,re=!!M.metalnessMap,oe=!!M.roughnessMap,Me=M.anisotropy>0,T=M.clearcoat>0,y=M.dispersion>0,U=M.iridescence>0,Y=M.sheen>0,ne=M.transmission>0,K=Me&&!!M.anisotropyMap,Ae=T&&!!M.clearcoatMap,ue=T&&!!M.clearcoatNormalMap,Re=T&&!!M.clearcoatRoughnessMap,Ce=U&&!!M.iridescenceMap,fe=U&&!!M.iridescenceThicknessMap,Se=Y&&!!M.sheenColorMap,Ue=Y&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,be=!!M.specularColorMap,Ze=!!M.specularIntensityMap,B=ne&&!!M.transmissionMap,ge=ne&&!!M.thicknessMap,xe=!!M.gradientMap,De=!!M.alphaMap,pe=M.alphaTest>0,le=!!M.alphaHash,Fe=!!M.extensions;let Je=Wi;M.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Je=n.toneMapping);const At={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:ht,fragmentShader:lt,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ce,batchingColor:ce&&W._colorsTexture!==null,instancing:se,instancingColor:se&&W.instanceColor!==null,instancingMorph:se&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:sr,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:R,envMap:x,envMapMode:x&&j.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:G,bumpMap:ee,normalMap:V,displacementMap:h&&de,emissiveMap:J,normalMapObjectSpace:V&&M.normalMapType===S_,normalMapTangentSpace:V&&M.normalMapType===Po,metalnessMap:re,roughnessMap:oe,anisotropy:Me,anisotropyMap:K,clearcoat:T,clearcoatMap:Ae,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,dispersion:y,iridescence:U,iridescenceMap:Ce,iridescenceThicknessMap:fe,sheen:Y,sheenColorMap:Se,sheenRoughnessMap:Ue,specularMap:Pe,specularColorMap:be,specularIntensityMap:Ze,transmission:ne,transmissionMap:B,thicknessMap:ge,gradientMap:xe,opaque:M.transparent===!1&&M.blending===qs&&M.alphaToCoverage===!1,alphaMap:De,alphaTest:pe,alphaHash:le,combine:M.combine,mapUv:je&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:G&&_(M.lightMap.channel),bumpMapUv:ee&&_(M.bumpMap.channel),normalMapUv:V&&_(M.normalMap.channel),displacementMapUv:de&&_(M.displacementMap.channel),emissiveMapUv:J&&_(M.emissiveMap.channel),metalnessMapUv:re&&_(M.metalnessMap.channel),roughnessMapUv:oe&&_(M.roughnessMap.channel),anisotropyMapUv:K&&_(M.anisotropyMap.channel),clearcoatMapUv:Ae&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(M.sheenRoughnessMap.channel),specularMapUv:Pe&&_(M.specularMap.channel),specularColorMapUv:be&&_(M.specularColorMap.channel),specularIntensityMapUv:Ze&&_(M.specularIntensityMap.channel),transmissionMapUv:B&&_(M.transmissionMap.channel),thicknessMapUv:ge&&_(M.thicknessMap.channel),alphaMapUv:De&&_(M.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(V||Me),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!te.attributes.uv&&(je||De),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:W.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===yt,decodeVideoTextureEmissive:J&&M.emissiveMap.isVideoTexture===!0&&ut.getTransfer(M.emissiveMap.colorSpace)===yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vi,flipSided:M.side===pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(w(S,M),E(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function w(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function E(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const S=v[M.type];let P;if(S){const X=Qn[S];P=ex.clone(X.uniforms)}else P=M.uniforms;return P}function C(M,S){let P;for(let X=0,W=d.length;X<W;X++){const $=d[X];if($.cacheKey===S){P=$,++P.usedTimes;break}}return P===void 0&&(P=new YM(n,S,M,r),d.push(P)),P}function L(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function I(M){l.remove(M)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:C,releaseProgram:L,releaseShaderCache:I,programs:d,dispose:D}}function QM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function eE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,h,p,v,_,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:h,material:p,groupOrder:v,renderOrder:u.renderOrder,z:_,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=p,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function o(u,h,p,v,_,g){const m=a(u,h,p,v,_,g);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(u,h,p,v,_,g){const m=a(u,h,p,v,_,g);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,h){t.length>1&&t.sort(u||eE),i.length>1&&i.sort(h||Dh),s.length>1&&s.sort(h||Dh)}function d(){for(let u=e,h=n.length;u<h;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function tE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Uh,n.set(i,[a])):s>=r.length?(a=new Uh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function nE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ze};break;case"SpotLight":t={position:new F,direction:new F,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function iE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sE=0;function rE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function aE(n){const e=new nE,t=iE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new Dt,a=new Dt;function o(c){let d=0,u=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,_=0,g=0,m=0,w=0,E=0,b=0,C=0,L=0,I=0;c.sort(rE);for(let M=0,S=c.length;M<S;M++){const P=c[M],X=P.color,W=P.intensity,$=P.distance,te=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=X.r*W,u+=X.g*W,h+=X.b*W;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],W);I++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,z=t.get(P);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=q,p++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(X).multiplyScalar(W),q.distance=$,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[_]=q;const j=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,j.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[_]=j.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=te,b++}_++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(X).multiplyScalar(W),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=q,g++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const j=P.shadow,z=t.get(P);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=te,i.pointShadowMatrix[v]=P.shadow.matrix,E++}i.point[v]=q,v++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(W),q.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[m]=q,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==b||D.numSpotMaps!==C||D.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,D.directionalLength=p,D.pointLength=v,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=b,D.numSpotMaps=C,D.numLightProbes=I,i.version=sE++)}function l(c,d){let u=0,h=0,p=0,v=0,_=0;const g=d.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const E=c[m];if(E.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(E.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(E.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),h++}else if(E.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function Nh(n){const e=new aE(n),t=[],i=[];function s(d){c.camera=d,t.length=0,i.length=0}function r(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function oE(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Nh(n),e.set(s,[o])):r>=a.length?(o=new Nh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const lE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dE(n,e,t){let i=new pd;const s=new Ke,r=new Ke,a=new Mt,o=new dx({depthPacking:E_}),l=new ux,c={},d=t.maxTextureSize,u={[qi]:pn,[pn]:qi,[vi]:vi},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:lE,fragmentShader:cE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Xt;v.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new We(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let m=this.type;this.render=function(L,I,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Gi),X.buffers.depth.getReversed()?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const W=m!==Zn&&this.type===Zn,$=m===Zn&&this.type!==Zn;for(let te=0,q=L.length;te<q;te++){const j=L[te],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const he=z.getFrameExtents();if(s.multiply(he),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/he.x),s.x=r.x*he.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/he.y),s.y=r.y*he.y,z.mapSize.y=r.y)),z.map===null||W===!0||$===!0){const Le=this.type!==Zn?{minFilter:Wn,magFilter:Wn}:{};z.map!==null&&z.map.dispose(),z.map=new ms(s.x,s.y,Le),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const _e=z.getViewportCount();for(let Le=0;Le<_e;Le++){const ke=z.getViewport(Le);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),X.viewport(a),z.updateMatrices(j,Le),i=z.getFrustum(),b(I,D,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===Zn&&w(z,D),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,S,P)};function w(L,I){const D=e.update(_);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ms(s.x,s.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(I,null,D,h,_,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(I,null,D,p,_,null)}function E(L,I,D,M){let S=null;const P=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=S.uuid,W=I.uuid;let $=c[X];$===void 0&&($={},c[X]=$);let te=$[W];te===void 0&&(te=S.clone(),$[W]=te,I.addEventListener("dispose",C)),S=te}if(S.visible=I.visible,S.wireframe=I.wireframe,M===Zn?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:u[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=n.properties.get(S);X.light=D}return S}function b(L,I,D,M,S){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Zn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const W=e.update(L),$=L.material;if(Array.isArray($)){const te=W.groups;for(let q=0,j=te.length;q<j;q++){const z=te[q],he=$[z.materialIndex];if(he&&he.visible){const _e=E(L,he,M,S);L.onBeforeShadow(n,L,I,D,W,_e,z),n.renderBufferDirect(D,null,W,_e,L,z),L.onAfterShadow(n,L,I,D,W,_e,z)}}}else if($.visible){const te=E(L,$,M,S);L.onBeforeShadow(n,L,I,D,W,te,null),n.renderBufferDirect(D,null,W,te,L,null),L.onAfterShadow(n,L,I,D,W,te,null)}}const X=L.children;for(let W=0,$=X.length;W<$;W++)b(X[W],I,D,M,S)}function C(L){L.target.removeEventListener("dispose",C);for(const D in c){const M=c[D],S=L.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const uE={[Yl]:Kl,[$l]:Ql,[Zl]:ec,[tr]:Jl,[Kl]:Yl,[Ql]:$l,[ec]:Zl,[Jl]:tr};function hE(n,e){function t(){let B=!1;const ge=new Mt;let xe=null;const De=new Mt(0,0,0,0);return{setMask:function(pe){xe!==pe&&!B&&(n.colorMask(pe,pe,pe,pe),xe=pe)},setLocked:function(pe){B=pe},setClear:function(pe,le,Fe,Je,At){At===!0&&(pe*=Je,le*=Je,Fe*=Je),ge.set(pe,le,Fe,Je),De.equals(ge)===!1&&(n.clearColor(pe,le,Fe,Je),De.copy(ge))},reset:function(){B=!1,xe=null,De.set(-1,0,0,0)}}}function i(){let B=!1,ge=!1,xe=null,De=null,pe=null;return{setReversed:function(le){if(ge!==le){const Fe=e.get("EXT_clip_control");le?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ge=le;const Je=pe;pe=null,this.setClear(Je)}},getReversed:function(){return ge},setTest:function(le){le?N(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(le){xe!==le&&!B&&(n.depthMask(le),xe=le)},setFunc:function(le){if(ge&&(le=uE[le]),De!==le){switch(le){case Yl:n.depthFunc(n.NEVER);break;case Kl:n.depthFunc(n.ALWAYS);break;case $l:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case Zl:n.depthFunc(n.EQUAL);break;case Jl:n.depthFunc(n.GEQUAL);break;case Ql:n.depthFunc(n.GREATER);break;case ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=le}},setLocked:function(le){B=le},setClear:function(le){pe!==le&&(ge&&(le=1-le),n.clearDepth(le),pe=le)},reset:function(){B=!1,xe=null,De=null,pe=null,ge=!1}}}function s(){let B=!1,ge=null,xe=null,De=null,pe=null,le=null,Fe=null,Je=null,At=null;return{setTest:function(ft){B||(ft?N(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(ft){ge!==ft&&!B&&(n.stencilMask(ft),ge=ft)},setFunc:function(ft,ai,Yn){(xe!==ft||De!==ai||pe!==Yn)&&(n.stencilFunc(ft,ai,Yn),xe=ft,De=ai,pe=Yn)},setOp:function(ft,ai,Yn){(le!==ft||Fe!==ai||Je!==Yn)&&(n.stencilOp(ft,ai,Yn),le=ft,Fe=ai,Je=Yn)},setLocked:function(ft){B=ft},setClear:function(ft){At!==ft&&(n.clearStencil(ft),At=ft)},reset:function(){B=!1,ge=null,xe=null,De=null,pe=null,le=null,Fe=null,Je=null,At=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,p=[],v=null,_=!1,g=null,m=null,w=null,E=null,b=null,C=null,L=null,I=new ze(0,0,0),D=0,M=!1,S=null,P=null,X=null,W=null,$=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=j>=2);let he=null,_e={};const Le=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),ht=new Mt().fromArray(Le),lt=new Mt().fromArray(ke);function ie(B,ge,xe,De){const pe=new Uint8Array(4),le=n.createTexture();n.bindTexture(B,le),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<xe;Fe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ge+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return le}const ve={};ve[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(n.DEPTH_TEST),a.setFunc(tr),ee(!1),V(wu),N(n.CULL_FACE),O(Gi);function N(B){d[B]!==!0&&(n.enable(B),d[B]=!0)}function ae(B){d[B]!==!1&&(n.disable(B),d[B]=!1)}function se(B,ge){return u[B]!==ge?(n.bindFramebuffer(B,ge),u[B]=ge,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function ce(B,ge){let xe=p,De=!1;if(B){xe=h.get(ge),xe===void 0&&(xe=[],h.set(ge,xe));const pe=B.textures;if(xe.length!==pe.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Fe=pe.length;le<Fe;le++)xe[le]=n.COLOR_ATTACHMENT0+le;xe.length=pe.length,De=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,De=!0);De&&n.drawBuffers(xe)}function je(B){return v!==B?(n.useProgram(B),v=B,!0):!1}const R={[ls]:n.FUNC_ADD,[Xv]:n.FUNC_SUBTRACT,[jv]:n.FUNC_REVERSE_SUBTRACT};R[qv]=n.MIN,R[Yv]=n.MAX;const x={[Kv]:n.ZERO,[$v]:n.ONE,[Zv]:n.SRC_COLOR,[jl]:n.SRC_ALPHA,[i_]:n.SRC_ALPHA_SATURATE,[t_]:n.DST_COLOR,[Qv]:n.DST_ALPHA,[Jv]:n.ONE_MINUS_SRC_COLOR,[ql]:n.ONE_MINUS_SRC_ALPHA,[n_]:n.ONE_MINUS_DST_COLOR,[e_]:n.ONE_MINUS_DST_ALPHA,[s_]:n.CONSTANT_COLOR,[r_]:n.ONE_MINUS_CONSTANT_COLOR,[a_]:n.CONSTANT_ALPHA,[o_]:n.ONE_MINUS_CONSTANT_ALPHA};function O(B,ge,xe,De,pe,le,Fe,Je,At,ft){if(B===Gi){_===!0&&(ae(n.BLEND),_=!1);return}if(_===!1&&(N(n.BLEND),_=!0),B!==Wv){if(B!==g||ft!==M){if((m!==ls||b!==ls)&&(n.blendEquation(n.FUNC_ADD),m=ls,b=ls),ft)switch(B){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xl:n.blendFunc(n.ONE,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ru:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Au:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ru:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,E=null,C=null,L=null,I.set(0,0,0),D=0,g=B,M=ft}return}pe=pe||ge,le=le||xe,Fe=Fe||De,(ge!==m||pe!==b)&&(n.blendEquationSeparate(R[ge],R[pe]),m=ge,b=pe),(xe!==w||De!==E||le!==C||Fe!==L)&&(n.blendFuncSeparate(x[xe],x[De],x[le],x[Fe]),w=xe,E=De,C=le,L=Fe),(Je.equals(I)===!1||At!==D)&&(n.blendColor(Je.r,Je.g,Je.b,At),I.copy(Je),D=At),g=B,M=!1}function G(B,ge){B.side===vi?ae(n.CULL_FACE):N(n.CULL_FACE);let xe=B.side===pn;ge&&(xe=!xe),ee(xe),B.blending===qs&&B.transparent===!1?O(Gi):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const De=B.stencilWrite;o.setTest(De),De&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),J(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(B){S!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),S=B)}function V(B){B!==Vv?(N(n.CULL_FACE),B!==P&&(B===wu?n.cullFace(n.BACK):B===Gv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),P=B}function de(B){B!==X&&(q&&n.lineWidth(B),X=B)}function J(B,ge,xe){B?(N(n.POLYGON_OFFSET_FILL),(W!==ge||$!==xe)&&(n.polygonOffset(ge,xe),W=ge,$=xe)):ae(n.POLYGON_OFFSET_FILL)}function re(B){B?N(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function oe(B){B===void 0&&(B=n.TEXTURE0+te-1),he!==B&&(n.activeTexture(B),he=B)}function Me(B,ge,xe){xe===void 0&&(he===null?xe=n.TEXTURE0+te-1:xe=he);let De=_e[xe];De===void 0&&(De={type:void 0,texture:void 0},_e[xe]=De),(De.type!==B||De.texture!==ge)&&(he!==xe&&(n.activeTexture(xe),he=xe),n.bindTexture(B,ge||ve[B]),De.type=B,De.texture=ge)}function T(){const B=_e[he];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(B){ht.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ht.copy(B))}function Ue(B){lt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),lt.copy(B))}function Pe(B,ge){let xe=c.get(ge);xe===void 0&&(xe=new WeakMap,c.set(ge,xe));let De=xe.get(B);De===void 0&&(De=n.getUniformBlockIndex(ge,B.name),xe.set(B,De))}function be(B,ge){const De=c.get(ge).get(B);l.get(ge)!==De&&(n.uniformBlockBinding(ge,De,B.__bindingPointIndex),l.set(ge,De))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},he=null,_e={},u={},h=new WeakMap,p=[],v=null,_=!1,g=null,m=null,w=null,E=null,b=null,C=null,L=null,I=new ze(0,0,0),D=0,M=!1,S=null,P=null,X=null,W=null,$=null,ht.set(0,0,n.canvas.width,n.canvas.height),lt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:N,disable:ae,bindFramebuffer:se,drawBuffers:ce,useProgram:je,setBlending:O,setMaterial:G,setFlipSided:ee,setCullFace:V,setLineWidth:de,setPolygonOffset:J,setScissorTest:re,activeTexture:oe,bindTexture:Me,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:U,texImage2D:Ce,texImage3D:fe,updateUBOMapping:Pe,uniformBlockBinding:be,texStorage2D:ue,texStorage3D:Re,texSubImage2D:Y,texSubImage3D:ne,compressedTexSubImage2D:K,compressedTexSubImage3D:Ae,scissor:Se,viewport:Ue,reset:Ze}}function fE(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,d=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,y){return p?new OffscreenCanvas(T,y):uo("canvas")}function _(T,y,U){let Y=1;const ne=Me(T);if((ne.width>U||ne.height>U)&&(Y=U/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Y*ne.width),Ae=Math.floor(Y*ne.height);u===void 0&&(u=v(K,Ae));const ue=y?v(K,Ae):u;return ue.width=K,ue.height=Ae,ue.getContext("2d").drawImage(T,0,0,K,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+Ae+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function g(T){return T.generateMipmaps}function m(T){n.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,y,U,Y,ne=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=y;if(y===n.RED&&(U===n.FLOAT&&(K=n.R32F),U===n.HALF_FLOAT&&(K=n.R16F),U===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.R8UI),U===n.UNSIGNED_SHORT&&(K=n.R16UI),U===n.UNSIGNED_INT&&(K=n.R32UI),U===n.BYTE&&(K=n.R8I),U===n.SHORT&&(K=n.R16I),U===n.INT&&(K=n.R32I)),y===n.RG&&(U===n.FLOAT&&(K=n.RG32F),U===n.HALF_FLOAT&&(K=n.RG16F),U===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.RG8UI),U===n.UNSIGNED_SHORT&&(K=n.RG16UI),U===n.UNSIGNED_INT&&(K=n.RG32UI),U===n.BYTE&&(K=n.RG8I),U===n.SHORT&&(K=n.RG16I),U===n.INT&&(K=n.RG32I)),y===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.RGB8UI),U===n.UNSIGNED_SHORT&&(K=n.RGB16UI),U===n.UNSIGNED_INT&&(K=n.RGB32UI),U===n.BYTE&&(K=n.RGB8I),U===n.SHORT&&(K=n.RGB16I),U===n.INT&&(K=n.RGB32I)),y===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),U===n.UNSIGNED_INT&&(K=n.RGBA32UI),U===n.BYTE&&(K=n.RGBA8I),U===n.SHORT&&(K=n.RGBA16I),U===n.INT&&(K=n.RGBA32I)),y===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),y===n.RGBA){const Ae=ne?lo:ut.getTransfer(Y);U===n.FLOAT&&(K=n.RGBA32F),U===n.HALF_FLOAT&&(K=n.RGBA16F),U===n.UNSIGNED_BYTE&&(K=Ae===yt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(T,y){let U;return T?y===null||y===ps||y===Gr?U=n.DEPTH24_STENCIL8:y===_i?U=n.DEPTH32F_STENCIL8:y===Vr&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ps||y===Gr?U=n.DEPTH_COMPONENT24:y===_i?U=n.DEPTH_COMPONENT32F:y===Vr&&(U=n.DEPTH_COMPONENT16),U}function C(T,y){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Wn&&T.minFilter!==ei?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function L(T){const y=T.target;y.removeEventListener("dispose",L),D(y),y.isVideoTexture&&d.delete(y)}function I(T){const y=T.target;y.removeEventListener("dispose",I),S(y)}function D(T){const y=i.get(T);if(y.__webglInit===void 0)return;const U=T.source,Y=h.get(U);if(Y){const ne=Y[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(T),Object.keys(Y).length===0&&h.delete(U)}i.remove(T)}function M(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const U=T.source,Y=h.get(U);delete Y[y.__cacheKey],a.memory.textures--}function S(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let ne=0;ne<y.__webglFramebuffer[Y].length;ne++)n.deleteFramebuffer(y.__webglFramebuffer[Y][ne]);else n.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[Y]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=T.textures;for(let Y=0,ne=U.length;Y<ne;Y++){const K=i.get(U[Y]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(U[Y])}i.remove(T)}let P=0;function X(){P=0}function W(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function $(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function te(T,y){const U=i.get(T);if(T.isVideoTexture&&re(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(U,T,y);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+y)}function q(T,y){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){ve(U,T,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+y)}function j(T,y){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){ve(U,T,y);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+y)}function z(T,y){const U=i.get(T);if(T.version>0&&U.__version!==T.version){N(U,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+y)}const he={[ic]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[sc]:n.MIRRORED_REPEAT},_e={[Wn]:n.NEAREST,[v_]:n.NEAREST_MIPMAP_NEAREST,[la]:n.NEAREST_MIPMAP_LINEAR,[ei]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},Le={[w_]:n.NEVER,[L_]:n.ALWAYS,[T_]:n.LESS,[dp]:n.LEQUAL,[A_]:n.EQUAL,[P_]:n.GEQUAL,[R_]:n.GREATER,[C_]:n.NOTEQUAL};function ke(T,y){if(y.type===_i&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ei||y.magFilter===$o||y.magFilter===la||y.magFilter===hs||y.minFilter===ei||y.minFilter===$o||y.minFilter===la||y.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,he[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,he[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,he[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,_e[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wn||y.minFilter!==la&&y.minFilter!==hs||y.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ht(T,y){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",L));const Y=y.source;let ne=h.get(Y);ne===void 0&&(ne={},h.set(Y,ne));const K=$(y);if(K!==T.__cacheKey){ne[K]===void 0&&(ne[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ne[K].usedTimes++;const Ae=ne[T.__cacheKey];Ae!==void 0&&(ne[T.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(y)),T.__cacheKey=K,T.__webglTexture=ne[K].texture}return U}function lt(T,y,U){return Math.floor(Math.floor(T/U)/y)}function ie(T,y,U,Y){const K=T.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,U,Y,y.data);else{K.sort((fe,Se)=>fe.start-Se.start);let Ae=0;for(let fe=1;fe<K.length;fe++){const Se=K[Ae],Ue=K[fe],Pe=Se.start+Se.count,be=lt(Ue.start,y.width,4),Ze=lt(Se.start,y.width,4);Ue.start<=Pe+1&&be===Ze&&lt(Ue.start+Ue.count-1,y.width,4)===be?Se.count=Math.max(Se.count,Ue.start+Ue.count-Se.start):(++Ae,K[Ae]=Ue)}K.length=Ae+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let fe=0,Se=K.length;fe<Se;fe++){const Ue=K[fe],Pe=Math.floor(Ue.start/4),be=Math.ceil(Ue.count/4),Ze=Pe%y.width,B=Math.floor(Pe/y.width),ge=be,xe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Ze,B,ge,xe,U,Y,y.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function ve(T,y,U){let Y=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=n.TEXTURE_3D);const ne=ht(T,y),K=y.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+U);const Ae=i.get(K);if(K.version!==Ae.__version||ne===!0){t.activeTexture(n.TEXTURE0+U);const ue=ut.getPrimaries(ut.workingColorSpace),Re=y.colorSpace===zi?null:ut.getPrimaries(y.colorSpace),Ce=y.colorSpace===zi||ue===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let fe=_(y.image,!1,s.maxTextureSize);fe=oe(y,fe);const Se=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type);let Pe=E(y.internalFormat,Se,Ue,y.colorSpace,y.isVideoTexture);ke(Y,y);let be;const Ze=y.mipmaps,B=y.isVideoTexture!==!0,ge=Ae.__version===void 0||ne===!0,xe=K.dataReady,De=C(y,fe);if(y.isDepthTexture)Pe=b(y.format===Xr,y.type),ge&&(B?t.texStorage2D(n.TEXTURE_2D,1,Pe,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Pe,fe.width,fe.height,0,Se,Ue,null));else if(y.isDataTexture)if(Ze.length>0){B&&ge&&t.texStorage2D(n.TEXTURE_2D,De,Pe,Ze[0].width,Ze[0].height);for(let pe=0,le=Ze.length;pe<le;pe++)be=Ze[pe],B?xe&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,be.width,be.height,Se,Ue,be.data):t.texImage2D(n.TEXTURE_2D,pe,Pe,be.width,be.height,0,Se,Ue,be.data);y.generateMipmaps=!1}else B?(ge&&t.texStorage2D(n.TEXTURE_2D,De,Pe,fe.width,fe.height),xe&&ie(y,fe,Se,Ue)):t.texImage2D(n.TEXTURE_2D,0,Pe,fe.width,fe.height,0,Se,Ue,fe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){B&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Pe,Ze[0].width,Ze[0].height,fe.depth);for(let pe=0,le=Ze.length;pe<le;pe++)if(be=Ze[pe],y.format!==zn)if(Se!==null)if(B){if(xe)if(y.layerUpdates.size>0){const Fe=uh(be.width,be.height,y.format,y.type);for(const Je of y.layerUpdates){const At=be.data.subarray(Je*Fe/be.data.BYTES_PER_ELEMENT,(Je+1)*Fe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Je,be.width,be.height,1,Se,At)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,be.width,be.height,fe.depth,Se,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Pe,be.width,be.height,fe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,be.width,be.height,fe.depth,Se,Ue,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Pe,be.width,be.height,fe.depth,0,Se,Ue,be.data)}else{B&&ge&&t.texStorage2D(n.TEXTURE_2D,De,Pe,Ze[0].width,Ze[0].height);for(let pe=0,le=Ze.length;pe<le;pe++)be=Ze[pe],y.format!==zn?Se!==null?B?xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,be.width,be.height,Se,be.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?xe&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,be.width,be.height,Se,Ue,be.data):t.texImage2D(n.TEXTURE_2D,pe,Pe,be.width,be.height,0,Se,Ue,be.data)}else if(y.isDataArrayTexture)if(B){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Pe,fe.width,fe.height,fe.depth),xe)if(y.layerUpdates.size>0){const pe=uh(fe.width,fe.height,y.format,y.type);for(const le of y.layerUpdates){const Fe=fe.data.subarray(le*pe/fe.data.BYTES_PER_ELEMENT,(le+1)*pe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,Se,Ue,Fe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Se,Ue,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,Se,Ue,fe.data);else if(y.isData3DTexture)B?(ge&&t.texStorage3D(n.TEXTURE_3D,De,Pe,fe.width,fe.height,fe.depth),xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Se,Ue,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,Se,Ue,fe.data);else if(y.isFramebufferTexture){if(ge)if(B)t.texStorage2D(n.TEXTURE_2D,De,Pe,fe.width,fe.height);else{let pe=fe.width,le=fe.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Pe,pe,le,0,Se,Ue,null),pe>>=1,le>>=1}}else if(Ze.length>0){if(B&&ge){const pe=Me(Ze[0]);t.texStorage2D(n.TEXTURE_2D,De,Pe,pe.width,pe.height)}for(let pe=0,le=Ze.length;pe<le;pe++)be=Ze[pe],B?xe&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Se,Ue,be):t.texImage2D(n.TEXTURE_2D,pe,Pe,Se,Ue,be);y.generateMipmaps=!1}else if(B){if(ge){const pe=Me(fe);t.texStorage2D(n.TEXTURE_2D,De,Pe,pe.width,pe.height)}xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ue,fe)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Se,Ue,fe);g(y)&&m(Y),Ae.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function N(T,y,U){if(y.image.length!==6)return;const Y=ht(T,y),ne=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);const K=i.get(ne);if(ne.version!==K.__version||Y===!0){t.activeTexture(n.TEXTURE0+U);const Ae=ut.getPrimaries(ut.workingColorSpace),ue=y.colorSpace===zi?null:ut.getPrimaries(y.colorSpace),Re=y.colorSpace===zi||Ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,fe=y.image[0]&&y.image[0].isDataTexture,Se=[];for(let le=0;le<6;le++)!Ce&&!fe?Se[le]=_(y.image[le],!0,s.maxCubemapSize):Se[le]=fe?y.image[le].image:y.image[le],Se[le]=oe(y,Se[le]);const Ue=Se[0],Pe=r.convert(y.format,y.colorSpace),be=r.convert(y.type),Ze=E(y.internalFormat,Pe,be,y.colorSpace),B=y.isVideoTexture!==!0,ge=K.__version===void 0||Y===!0,xe=ne.dataReady;let De=C(y,Ue);ke(n.TEXTURE_CUBE_MAP,y);let pe;if(Ce){B&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ze,Ue.width,Ue.height);for(let le=0;le<6;le++){pe=Se[le].mipmaps;for(let Fe=0;Fe<pe.length;Fe++){const Je=pe[Fe];y.format!==zn?Pe!==null?B?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,Je.width,Je.height,Pe,Je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,Ze,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,Je.width,Je.height,Pe,be,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,Ze,Je.width,Je.height,0,Pe,be,Je.data)}}}else{if(pe=y.mipmaps,B&&ge){pe.length>0&&De++;const le=Me(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ze,le.width,le.height)}for(let le=0;le<6;le++)if(fe){B?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Se[le].width,Se[le].height,Pe,be,Se[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,Se[le].width,Se[le].height,0,Pe,be,Se[le].data);for(let Fe=0;Fe<pe.length;Fe++){const At=pe[Fe].image[le].image;B?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,At.width,At.height,Pe,be,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,Ze,At.width,At.height,0,Pe,be,At.data)}}else{B?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe,be,Se[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,Pe,be,Se[le]);for(let Fe=0;Fe<pe.length;Fe++){const Je=pe[Fe];B?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,Pe,be,Je.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,Ze,Pe,be,Je.image[le])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),K.__version=ne.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ae(T,y,U,Y,ne,K){const Ae=r.convert(U.format,U.colorSpace),ue=r.convert(U.type),Re=E(U.internalFormat,Ae,ue,U.colorSpace),Ce=i.get(y),fe=i.get(U);if(fe.__renderTarget=y,!Ce.__hasExternalTextures){const Se=Math.max(1,y.width>>K),Ue=Math.max(1,y.height>>K);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,K,Re,Se,Ue,y.depth,0,Ae,ue,null):t.texImage2D(ne,K,Re,Se,Ue,0,Ae,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),J(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ne,fe.__webglTexture,0,de(y)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ne,fe.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(T,y,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){const Y=y.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,K=b(y.stencilBuffer,ne),Ae=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=de(y);J(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,K,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,T)}else{const Y=y.textures;for(let ne=0;ne<Y.length;ne++){const K=Y[ne],Ae=r.convert(K.format,K.colorSpace),ue=r.convert(K.type),Re=E(K.internalFormat,Ae,ue,K.colorSpace),Ce=de(y);U&&J(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Re,y.width,y.height):J(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Re,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Re,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),te(y.depthTexture,0);const ne=Y.__webglTexture,K=de(y);if(y.depthTexture.format===Wr)J(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(y.depthTexture.format===Xr)J(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function je(T){const y=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=Y}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?ce(y.__webglFramebuffer[0],T):ce(y.__webglFramebuffer,T)}else if(U){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=n.createRenderbuffer(),se(y.__webglDepthbuffer[Y],T,!1);else{const ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,K)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),se(y.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(T,y,U){const Y=i.get(T);y!==void 0&&ae(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&je(T)}function x(T){const y=T.texture,U=i.get(T),Y=i.get(y);T.addEventListener("dispose",I);const ne=T.textures,K=T.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=y.version,a.memory.textures++),K){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let Re=0;Re<y.mipmaps.length;Re++)U.__webglFramebuffer[ue][Re]=n.createFramebuffer()}else U.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)U.__webglFramebuffer[ue]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ue=0,Re=ne.length;ue<Re;ue++){const Ce=i.get(ne[ue]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&J(T)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const Re=ne[ue];U.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ue]);const Ce=r.convert(Re.format,Re.colorSpace),fe=r.convert(Re.type),Se=E(Re.internalFormat,Ce,fe,Re.colorSpace,T.isXRRenderTarget===!0),Ue=de(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Se,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,U.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),se(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(n.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let Re=0;Re<y.mipmaps.length;Re++)ae(U.__webglFramebuffer[ue][Re],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re);else ae(U.__webglFramebuffer[ue],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,Re=ne.length;ue<Re;ue++){const Ce=ne[ue],fe=i.get(Ce);let Se=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Se=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,fe.__webglTexture),ke(Se,Ce),ae(U.__webglFramebuffer,T,Ce,n.COLOR_ATTACHMENT0+ue,Se,0),g(Ce)&&m(Se)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Y.__webglTexture),ke(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let Re=0;Re<y.mipmaps.length;Re++)ae(U.__webglFramebuffer[Re],T,y,n.COLOR_ATTACHMENT0,ue,Re);else ae(U.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,ue,0);g(y)&&m(ue),t.unbindTexture()}T.depthBuffer&&je(T)}function O(T){const y=T.textures;for(let U=0,Y=y.length;U<Y;U++){const ne=y[U];if(g(ne)){const K=w(T),Ae=i.get(ne).__webglTexture;t.bindTexture(K,Ae),m(K),t.unbindTexture()}}}const G=[],ee=[];function V(T){if(T.samples>0){if(J(T)===!1){const y=T.textures,U=T.width,Y=T.height;let ne=n.COLOR_BUFFER_BIT;const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(T),ue=y.length>1;if(ue)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Re=T.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);const fe=i.get(y[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,U,Y,0,0,U,Y,ne,n.NEAREST),l===!0&&(G.length=0,ee.length=0,G.push(n.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(G.push(K),ee.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);const fe=i.get(y[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function de(T){return Math.min(s.maxSamples,T.samples)}function J(T){const y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function re(T){const y=a.render.frame;d.get(T)!==y&&(d.set(T,y),T.update())}function oe(T,y){const U=T.colorSpace,Y=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==sr&&U!==zi&&(ut.getTransfer(U)===yt?(Y!==zn||ne!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=R,this.setupRenderTarget=x,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=J}function pE(n,e){function t(i,s=zi){let r;const a=ut.getTransfer(s);if(i===ri)return n.UNSIGNED_BYTE;if(i===rd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ad)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===np)return n.BYTE;if(i===ip)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===sd)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===Jr)return n.HALF_FLOAT;if(i===rp)return n.ALPHA;if(i===ap)return n.RGB;if(i===zn)return n.RGBA;if(i===Wr)return n.DEPTH_COMPONENT;if(i===Xr)return n.DEPTH_STENCIL;if(i===op)return n.RED;if(i===od)return n.RED_INTEGER;if(i===lp)return n.RG;if(i===ld)return n.RG_INTEGER;if(i===cd)return n.RGBA_INTEGER;if(i===Wa||i===Xa||i===ja||i===qa)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rc||i===ac||i===oc||i===lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cc||i===dc||i===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cc||i===dc)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hc||i===fc||i===pc||i===mc||i===gc||i===vc||i===_c||i===xc||i===yc||i===bc||i===Mc||i===Ec||i===Sc||i===wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_c)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ec)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ya||i===Tc||i===Ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ya)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cp||i===Rc||i===Cc||i===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Lp extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const mE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gE=`
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

}`;class vE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Lp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yi({vertexShader:mE,fragmentShader:gE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _E extends Ki{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,p=null,v=null;const _=new vE,g={},m=t.getContextAttributes();let w=null,E=null;const b=[],C=[],L=new Ke;let I=null;const D=new it;D.viewport=new Mt;const M=new it;M.viewport=new Mt;const S=[D,M],P=new Ex;let X=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ve=b[ie];return ve===void 0&&(ve=new xl,b[ie]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ie){let ve=b[ie];return ve===void 0&&(ve=new xl,b[ie]=ve),ve.getGripSpace()},this.getHand=function(ie){let ve=b[ie];return ve===void 0&&(ve=new xl,b[ie]=ve),ve.getHandSpace()};function $(ie){const ve=C.indexOf(ie.inputSource);if(ve===-1)return;const N=b[ve];N!==void 0&&(N.update(ie.inputSource,ie.frame,c||a),N.dispatchEvent({type:ie.type,data:ie.inputSource}))}function te(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",q);for(let ie=0;ie<b.length;ie++){const ve=C[ie];ve!==null&&(C[ie]=null,b[ie].disconnect(ve))}X=null,W=null,_.reset();for(const ie in g)delete g[ie];e.setRenderTarget(w),p=null,h=null,u=null,s=null,E=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",te),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(s,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let N=null,ae=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=m.stencil?Xr:Wr,ae=m.stencil?Gr:ps);const ce={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=u.createProjectionLayer(ce),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new ms(h.textureWidth,h.textureHeight,{format:zn,type:ri,depthTexture:new yp(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const N={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,N),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ms(p.framebufferWidth,p.framebufferHeight,{format:zn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(ie){for(let ve=0;ve<ie.removed.length;ve++){const N=ie.removed[ve],ae=C.indexOf(N);ae>=0&&(C[ae]=null,b[ae].disconnect(N))}for(let ve=0;ve<ie.added.length;ve++){const N=ie.added[ve];let ae=C.indexOf(N);if(ae===-1){for(let ce=0;ce<b.length;ce++)if(ce>=C.length){C.push(N),ae=ce;break}else if(C[ce]===null){C[ce]=N,ae=ce;break}if(ae===-1)break}const se=b[ae];se&&se.connect(N)}}const j=new F,z=new F;function he(ie,ve,N){j.setFromMatrixPosition(ve.matrixWorld),z.setFromMatrixPosition(N.matrixWorld);const ae=j.distanceTo(z),se=ve.projectionMatrix.elements,ce=N.projectionMatrix.elements,je=se[14]/(se[10]-1),R=se[14]/(se[10]+1),x=(se[9]+1)/se[5],O=(se[9]-1)/se[5],G=(se[8]-1)/se[0],ee=(ce[8]+1)/ce[0],V=je*G,de=je*ee,J=ae/(-G+ee),re=J*-G;if(ve.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(re),ie.translateZ(J),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),se[10]===-1)ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const oe=je+J,Me=R+J,T=V-re,y=de+(ae-re),U=x*R/Me*oe,Y=O*R/Me*oe;ie.projectionMatrix.makePerspective(T,y,U,Y,oe,Me),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function _e(ie,ve){ve===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ve.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ve=ie.near,N=ie.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(N=_.depthFar)),P.near=M.near=D.near=ve,P.far=M.far=D.far=N,(X!==P.near||W!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),X=P.near,W=P.far),P.layers.mask=ie.layers.mask|6,D.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;const ae=ie.parent,se=P.cameras;_e(P,ae);for(let ce=0;ce<se.length;ce++)_e(se[ce],ae);se.length===2?he(P,D,M):P.projectionMatrix.copy(D.projectionMatrix),Le(ie,P,ae)};function Le(ie,ve,N){N===null?ie.matrix.copy(ve.matrixWorld):(ie.matrix.copy(N.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ve.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=co*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(ie){return g[ie]};let ke=null;function ht(ie,ve){if(d=ve.getViewerPose(c||a),v=ve,d!==null){const N=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ae=!1;N.length!==P.cameras.length&&(P.cameras.length=0,ae=!0);for(let R=0;R<N.length;R++){const x=N[R];let O=null;if(p!==null)O=p.getViewport(x);else{const ee=u.getViewSubImage(h,x);O=ee.viewport,R===0&&(e.setRenderTargetTextures(E,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(E))}let G=S[R];G===void 0&&(G=new it,G.layers.enable(R),G.viewport=new Mt,S[R]=G),G.matrix.fromArray(x.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(x.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(O.x,O.y,O.width,O.height),R===0&&(P.matrix.copy(G.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ae===!0&&P.cameras.push(G)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const R=u.getDepthInformation(N[0]);R&&R.isValid&&R.texture&&_.init(R,s.renderState)}if(se&&se.includes("camera-access")&&(e.state.unbindTexture(),u))for(let R=0;R<N.length;R++){const x=N[R].camera;if(x){let O=g[x];O||(O=new Lp,g[x]=O);const G=u.getCameraImage(x);O.sourceTexture=G}}}for(let N=0;N<b.length;N++){const ae=C[N],se=b[N];ae!==null&&se!==void 0&&se.update(ae,ve,c||a)}ke&&ke(ie,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),v=null}const lt=new Tp;lt.setAnimationLoop(ht),this.setAnimationLoop=function(ie){ke=ie},this.dispose=function(){}}}const rs=new Fn,xE=new Dt;function yE(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,vp(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,E,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&p(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),v(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,w,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=e.get(m),E=w.envMap,b=w.envMapRotation;E&&(g.envMap.value=E,rs.copy(b),rs.x*=-1,rs.y*=-1,rs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(xE.makeRotationFromEuler(rs)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bE(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const b=E.program;i.uniformBlockBinding(w,b)}function c(w,E){let b=s[w.id];b===void 0&&(v(w),b=d(w),s[w.id]=b,w.addEventListener("dispose",g));const C=E.program;i.updateUBOMapping(w,C);const L=e.render.frame;r[w.id]!==L&&(h(w),r[w.id]=L)}function d(w){const E=u();w.__bindingPointIndex=E;const b=n.createBuffer(),C=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const E=s[w.id],b=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let L=0,I=b.length;L<I;L++){const D=Array.isArray(b[L])?b[L]:[b[L]];for(let M=0,S=D.length;M<S;M++){const P=D[M];if(p(P,L,M,C)===!0){const X=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let te=0;te<W.length;te++){const q=W[te],j=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,X+$,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,E,b,C){const L=w.value,I=E+"_"+b;if(C[I]===void 0)return typeof L=="number"||typeof L=="boolean"?C[I]=L:C[I]=L.clone(),!0;{const D=C[I];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return C[I]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function v(w){const E=w.uniforms;let b=0;const C=16;for(let I=0,D=E.length;I<D;I++){const M=Array.isArray(E[I])?E[I]:[E[I]];for(let S=0,P=M.length;S<P;S++){const X=M[S],W=Array.isArray(X.value)?X.value:[X.value];for(let $=0,te=W.length;$<te;$++){const q=W[$],j=_(q),z=b%C,he=z%j.boundary,_e=z+he;b+=he,_e!==0&&C-_e<j.storage&&(b+=C-_e),X.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=j.storage}}}const L=b%C;return L>0&&(b+=C-L),w.__size=b,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function g(w){const E=w.target;E.removeEventListener("dispose",g);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class St{constructor(e={}){const{canvas:t=U_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let C=!1;this._outputColorSpace=Pn;let L=0,I=0,D=null,M=-1,S=null;const P=new Mt,X=new Mt;let W=null;const $=new ze(0);let te=0,q=t.width,j=t.height,z=1,he=null,_e=null;const Le=new Mt(0,0,q,j),ke=new Mt(0,0,q,j);let ht=!1;const lt=new pd;let ie=!1,ve=!1;const N=new Dt,ae=new F,se=new Mt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function R(){return D===null?z:1}let x=i;function O(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${id}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",pe,!1),x===null){const H="webgl2";if(x=O(H,A),x===null)throw O(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let G,ee,V,de,J,re,oe,Me,T,y,U,Y,ne,K,Ae,ue,Re,Ce,fe,Se,Ue,Pe,be,Ze;function B(){G=new I1(x),G.init(),Pe=new pE(x,G),ee=new w1(x,G,e,Pe),V=new hE(x,G),ee.reversedDepthBuffer&&h&&V.buffers.depth.setReversed(!0),de=new N1(x),J=new QM,re=new fE(x,G,V,J,ee,Pe,de),oe=new A1(b),Me=new L1(b),T=new zx(x),be=new E1(x,T),y=new D1(x,T,de,be),U=new O1(x,y,T,de),fe=new F1(x,ee,re),ue=new T1(J),Y=new JM(b,oe,Me,G,ee,be,ue),ne=new yE(b,J),K=new tE,Ae=new oE(G),Ce=new M1(b,oe,Me,V,U,p,l),Re=new dE(b,U,ee),Ze=new bE(x,de,ee,V),Se=new S1(x,G,de),Ue=new U1(x,G,de),de.programs=Y.programs,b.capabilities=ee,b.extensions=G,b.properties=J,b.renderLists=K,b.shadowMap=Re,b.state=V,b.info=de}B();const ge=new _E(b,x);this.xr=ge,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const A=G.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=G.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(q,j,!1))},this.getSize=function(A){return A.set(q,j)},this.setSize=function(A,H,Z=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,j=H,t.width=Math.floor(A*z),t.height=Math.floor(H*z),Z===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(q*z,j*z).floor()},this.setDrawingBufferSize=function(A,H,Z){q=A,j=H,z=Z,t.width=Math.floor(A*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(Le)},this.setViewport=function(A,H,Z,Q){A.isVector4?Le.set(A.x,A.y,A.z,A.w):Le.set(A,H,Z,Q),V.viewport(P.copy(Le).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ke)},this.setScissor=function(A,H,Z,Q){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,H,Z,Q),V.scissor(X.copy(ke).multiplyScalar(z).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){V.setScissorTest(ht=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,Z=!0){let Q=0;if(A){let k=!1;if(D!==null){const me=D.texture.format;k=me===cd||me===ld||me===od}if(k){const me=D.texture.type,Te=me===ri||me===ps||me===Vr||me===Gr||me===rd||me===ad,Ne=Ce.getClearColor(),Ie=Ce.getClearAlpha(),qe=Ne.r,$e=Ne.g,Ve=Ne.b;Te?(v[0]=qe,v[1]=$e,v[2]=Ve,v[3]=Ie,x.clearBufferuiv(x.COLOR,0,v)):(_[0]=qe,_[1]=$e,_[2]=Ve,_[3]=Ie,x.clearBufferiv(x.COLOR,0,_))}else Q|=x.COLOR_BUFFER_BIT}H&&(Q|=x.DEPTH_BUFFER_BIT),Z&&(Q|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ce.dispose(),K.dispose(),Ae.dispose(),J.dispose(),oe.dispose(),Me.dispose(),U.dispose(),be.dispose(),Ze.dispose(),Y.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Yn),ge.removeEventListener("sessionend",Sd),$i.stop()};function xe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=de.autoReset,H=Re.enabled,Z=Re.autoUpdate,Q=Re.needsUpdate,k=Re.type;B(),de.autoReset=A,Re.enabled=H,Re.autoUpdate=Z,Re.needsUpdate=Q,Re.type=k}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){const H=A.target;H.removeEventListener("dispose",le),Fe(H)}function Fe(A){Je(A),J.remove(A)}function Je(A){const H=J.get(A).programs;H!==void 0&&(H.forEach(function(Z){Y.releaseProgram(Z)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Z,Q,k,me){H===null&&(H=ce);const Te=k.isMesh&&k.matrixWorld.determinant()<0,Ne=Np(A,H,Z,Q,k);V.setMaterial(Q,Te);let Ie=Z.index,qe=1;if(Q.wireframe===!0){if(Ie=y.getWireframeAttribute(Z),Ie===void 0)return;qe=2}const $e=Z.drawRange,Ve=Z.attributes.position;let ot=$e.start*qe,xt=($e.start+$e.count)*qe;me!==null&&(ot=Math.max(ot,me.start*qe),xt=Math.min(xt,(me.start+me.count)*qe)),Ie!==null?(ot=Math.max(ot,0),xt=Math.min(xt,Ie.count)):Ve!=null&&(ot=Math.max(ot,0),xt=Math.min(xt,Ve.count));const Ot=xt-ot;if(Ot<0||Ot===1/0)return;be.setup(k,Q,Ne,Z,Ie);let Lt,wt=Se;if(Ie!==null&&(Lt=T.get(Ie),wt=Ue,wt.setIndex(Lt)),k.isMesh)Q.wireframe===!0?(V.setLineWidth(Q.wireframeLinewidth*R()),wt.setMode(x.LINES)):wt.setMode(x.TRIANGLES);else if(k.isLine){let Ge=Q.linewidth;Ge===void 0&&(Ge=1),V.setLineWidth(Ge*R()),k.isLineSegments?wt.setMode(x.LINES):k.isLineLoop?wt.setMode(x.LINE_LOOP):wt.setMode(x.LINE_STRIP)}else k.isPoints?wt.setMode(x.POINTS):k.isSprite&&wt.setMode(x.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))wt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ge=k._multiDrawStarts,Nt=k._multiDrawCounts,dt=k._multiDrawCount,vn=Ie?T.get(Ie).bytesPerElement:1,vs=J.get(Q).currentProgram.getUniforms();for(let _n=0;_n<dt;_n++)vs.setValue(x,"_gl_DrawID",_n),wt.render(Ge[_n]/vn,Nt[_n])}else if(k.isInstancedMesh)wt.renderInstances(ot,Ot,k.count);else if(Z.isInstancedBufferGeometry){const Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Nt=Math.min(Z.instanceCount,Ge);wt.renderInstances(ot,Ot,Nt)}else wt.render(ot,Ot)};function At(A,H,Z){A.transparent===!0&&A.side===vi&&A.forceSinglePass===!1?(A.side=pn,A.needsUpdate=!0,sa(A,H,Z),A.side=qi,A.needsUpdate=!0,sa(A,H,Z),A.side=vi):sa(A,H,Z)}this.compile=function(A,H,Z=null){Z===null&&(Z=A),m=Ae.get(Z),m.init(H),E.push(m),Z.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==Z&&A.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const Q=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const me=k.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Ne=me[Te];At(Ne,Z,k),Q.add(Ne)}else At(me,Z,k),Q.add(me)}),m=E.pop(),Q},this.compileAsync=function(A,H,Z=null){const Q=this.compile(A,H,Z);return new Promise(k=>{function me(){if(Q.forEach(function(Te){J.get(Te).currentProgram.isReady()&&Q.delete(Te)}),Q.size===0){k(A);return}setTimeout(me,10)}G.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ft=null;function ai(A){ft&&ft(A)}function Yn(){$i.stop()}function Sd(){$i.start()}const $i=new Tp;$i.setAnimationLoop(ai),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(A){ft=A,ge.setAnimationLoop(A),A===null?$i.stop():$i.start()},ge.addEventListener("sessionstart",Yn),ge.addEventListener("sessionend",Sd),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(H),H=ge.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,H,D),m=Ae.get(A,E.length),m.init(H),E.push(m),N.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),lt.setFromProjectionMatrix(N,Vn,H.reversedDepth),ve=this.localClippingEnabled,ie=ue.init(this.clippingPlanes,ve),g=K.get(A,w.length),g.init(),w.push(g),ge.enabled===!0&&ge.isPresenting===!0){const me=b.xr.getDepthSensingMesh();me!==null&&Fo(me,H,-1/0,b.sortObjects)}Fo(A,H,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(he,_e),je=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,je&&Ce.addToRenderList(g,A),this.info.render.frame++,ie===!0&&ue.beginShadows();const Z=m.state.shadowsArray;Re.render(Z,A,H),ie===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=g.opaque,k=g.transmissive;if(m.setupLights(),H.isArrayCamera){const me=H.cameras;if(k.length>0)for(let Te=0,Ne=me.length;Te<Ne;Te++){const Ie=me[Te];Td(Q,k,A,Ie)}je&&Ce.render(A);for(let Te=0,Ne=me.length;Te<Ne;Te++){const Ie=me[Te];wd(g,A,Ie,Ie.viewport)}}else k.length>0&&Td(Q,k,A,H),je&&Ce.render(A),wd(g,A,H);D!==null&&I===0&&(re.updateMultisampleRenderTarget(D),re.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(b,A,H),be.resetDefaultState(),M=-1,S=null,E.pop(),E.length>0?(m=E[E.length-1],ie===!0&&ue.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Fo(A,H,Z,Q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||lt.intersectsSprite(A)){Q&&se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Te=U.update(A),Ne=A.material;Ne.visible&&g.push(A,Te,Ne,Z,se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||lt.intersectsObject(A))){const Te=U.update(A),Ne=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),se.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),se.copy(Te.boundingSphere.center)),se.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Ne)){const Ie=Te.groups;for(let qe=0,$e=Ie.length;qe<$e;qe++){const Ve=Ie[qe],ot=Ne[Ve.materialIndex];ot&&ot.visible&&g.push(A,Te,ot,Z,se.z,Ve)}}else Ne.visible&&g.push(A,Te,Ne,Z,se.z,null)}}const me=A.children;for(let Te=0,Ne=me.length;Te<Ne;Te++)Fo(me[Te],H,Z,Q)}function wd(A,H,Z,Q){const k=A.opaque,me=A.transmissive,Te=A.transparent;m.setupLightsView(Z),ie===!0&&ue.setGlobalState(b.clippingPlanes,Z),Q&&V.viewport(P.copy(Q)),k.length>0&&ia(k,H,Z),me.length>0&&ia(me,H,Z),Te.length>0&&ia(Te,H,Z),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Td(A,H,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new ms(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?Jr:ri,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const me=m.state.transmissionRenderTarget[Q.id],Te=Q.viewport||P;me.setSize(Te.z*b.transmissionResolutionScale,Te.w*b.transmissionResolutionScale);const Ne=b.getRenderTarget(),Ie=b.getActiveCubeFace(),qe=b.getActiveMipmapLevel();b.setRenderTarget(me),b.getClearColor($),te=b.getClearAlpha(),te<1&&b.setClearColor(16777215,.5),b.clear(),je&&Ce.render(Z);const $e=b.toneMapping;b.toneMapping=Wi;const Ve=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),ie===!0&&ue.setGlobalState(b.clippingPlanes,Q),ia(A,Z,Q),re.updateMultisampleRenderTarget(me),re.updateRenderTargetMipmap(me),G.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let xt=0,Ot=H.length;xt<Ot;xt++){const Lt=H[xt],wt=Lt.object,Ge=Lt.geometry,Nt=Lt.material,dt=Lt.group;if(Nt.side===vi&&wt.layers.test(Q.layers)){const vn=Nt.side;Nt.side=pn,Nt.needsUpdate=!0,Ad(wt,Z,Q,Ge,Nt,dt),Nt.side=vn,Nt.needsUpdate=!0,ot=!0}}ot===!0&&(re.updateMultisampleRenderTarget(me),re.updateRenderTargetMipmap(me))}b.setRenderTarget(Ne,Ie,qe),b.setClearColor($,te),Ve!==void 0&&(Q.viewport=Ve),b.toneMapping=$e}function ia(A,H,Z){const Q=H.isScene===!0?H.overrideMaterial:null;for(let k=0,me=A.length;k<me;k++){const Te=A[k],Ne=Te.object,Ie=Te.geometry,qe=Te.group;let $e=Te.material;$e.allowOverride===!0&&Q!==null&&($e=Q),Ne.layers.test(Z.layers)&&Ad(Ne,H,Z,Ie,$e,qe)}}function Ad(A,H,Z,Q,k,me){A.onBeforeRender(b,H,Z,Q,k,me),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(b,H,Z,Q,A,me),k.transparent===!0&&k.side===vi&&k.forceSinglePass===!1?(k.side=pn,k.needsUpdate=!0,b.renderBufferDirect(Z,H,Q,k,A,me),k.side=qi,k.needsUpdate=!0,b.renderBufferDirect(Z,H,Q,k,A,me),k.side=vi):b.renderBufferDirect(Z,H,Q,k,A,me),A.onAfterRender(b,H,Z,Q,k,me)}function sa(A,H,Z){H.isScene!==!0&&(H=ce);const Q=J.get(A),k=m.state.lights,me=m.state.shadowsArray,Te=k.state.version,Ne=Y.getParameters(A,k.state,me,H,Z),Ie=Y.getProgramCacheKey(Ne);let qe=Q.programs;Q.environment=A.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(A.isMeshStandardMaterial?Me:oe).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",le),qe=new Map,Q.programs=qe);let $e=qe.get(Ie);if($e!==void 0){if(Q.currentProgram===$e&&Q.lightsStateVersion===Te)return Cd(A,Ne),$e}else Ne.uniforms=Y.getUniforms(A),A.onBeforeCompile(Ne,b),$e=Y.acquireProgram(Ne,Ie),qe.set(Ie,$e),Q.uniforms=Ne.uniforms;const Ve=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=ue.uniform),Cd(A,Ne),Q.needsLights=Op(A),Q.lightsStateVersion=Te,Q.needsLights&&(Ve.ambientLightColor.value=k.state.ambient,Ve.lightProbe.value=k.state.probe,Ve.directionalLights.value=k.state.directional,Ve.directionalLightShadows.value=k.state.directionalShadow,Ve.spotLights.value=k.state.spot,Ve.spotLightShadows.value=k.state.spotShadow,Ve.rectAreaLights.value=k.state.rectArea,Ve.ltc_1.value=k.state.rectAreaLTC1,Ve.ltc_2.value=k.state.rectAreaLTC2,Ve.pointLights.value=k.state.point,Ve.pointLightShadows.value=k.state.pointShadow,Ve.hemisphereLights.value=k.state.hemi,Ve.directionalShadowMap.value=k.state.directionalShadowMap,Ve.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ve.spotShadowMap.value=k.state.spotShadowMap,Ve.spotLightMatrix.value=k.state.spotLightMatrix,Ve.spotLightMap.value=k.state.spotLightMap,Ve.pointShadowMap.value=k.state.pointShadowMap,Ve.pointShadowMatrix.value=k.state.pointShadowMatrix),Q.currentProgram=$e,Q.uniformsList=null,$e}function Rd(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=$a.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Cd(A,H){const Z=J.get(A);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Np(A,H,Z,Q,k){H.isScene!==!0&&(H=ce),re.resetTextureUnits();const me=H.fog,Te=Q.isMeshStandardMaterial?H.environment:null,Ne=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:sr,Ie=(Q.isMeshStandardMaterial?Me:oe).get(Q.envMap||Te),qe=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ve=!!Z.morphAttributes.position,ot=!!Z.morphAttributes.normal,xt=!!Z.morphAttributes.color;let Ot=Wi;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ot=b.toneMapping);const Lt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,wt=Lt!==void 0?Lt.length:0,Ge=J.get(Q),Nt=m.state.lights;if(ie===!0&&(ve===!0||A!==S)){const sn=A===S&&Q.id===M;ue.setState(Q,A,sn)}let dt=!1;Q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Nt.state.version||Ge.outputColorSpace!==Ne||k.isBatchedMesh&&Ge.batching===!1||!k.isBatchedMesh&&Ge.batching===!0||k.isBatchedMesh&&Ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ge.instancing===!1||!k.isInstancedMesh&&Ge.instancing===!0||k.isSkinnedMesh&&Ge.skinning===!1||!k.isSkinnedMesh&&Ge.skinning===!0||k.isInstancedMesh&&Ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ge.instancingMorph===!1&&k.morphTexture!==null||Ge.envMap!==Ie||Q.fog===!0&&Ge.fog!==me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ue.numPlanes||Ge.numIntersection!==ue.numIntersection)||Ge.vertexAlphas!==qe||Ge.vertexTangents!==$e||Ge.morphTargets!==Ve||Ge.morphNormals!==ot||Ge.morphColors!==xt||Ge.toneMapping!==Ot||Ge.morphTargetsCount!==wt)&&(dt=!0):(dt=!0,Ge.__version=Q.version);let vn=Ge.currentProgram;dt===!0&&(vn=sa(Q,H,k));let vs=!1,_n=!1,hr=!1;const Ft=vn.getUniforms(),An=Ge.uniforms;if(V.useProgram(vn.program)&&(vs=!0,_n=!0,hr=!0),Q.id!==M&&(M=Q.id,_n=!0),vs||S!==A){V.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(x,"projectionMatrix",A.projectionMatrix),Ft.setValue(x,"viewMatrix",A.matrixWorldInverse);const cn=Ft.map.cameraPosition;cn!==void 0&&cn.setValue(x,ae.setFromMatrixPosition(A.matrixWorld)),ee.logarithmicDepthBuffer&&Ft.setValue(x,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ft.setValue(x,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,_n=!0,hr=!0)}if(k.isSkinnedMesh){Ft.setOptional(x,k,"bindMatrix"),Ft.setOptional(x,k,"bindMatrixInverse");const sn=k.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ft.setValue(x,"boneTexture",sn.boneTexture,re))}k.isBatchedMesh&&(Ft.setOptional(x,k,"batchingTexture"),Ft.setValue(x,"batchingTexture",k._matricesTexture,re),Ft.setOptional(x,k,"batchingIdTexture"),Ft.setValue(x,"batchingIdTexture",k._indirectTexture,re),Ft.setOptional(x,k,"batchingColorTexture"),k._colorsTexture!==null&&Ft.setValue(x,"batchingColorTexture",k._colorsTexture,re));const Rn=Z.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&fe.update(k,Z,vn),(_n||Ge.receiveShadow!==k.receiveShadow)&&(Ge.receiveShadow=k.receiveShadow,Ft.setValue(x,"receiveShadow",k.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(An.envMap.value=Ie,An.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(An.envMapIntensity.value=H.environmentIntensity),_n&&(Ft.setValue(x,"toneMappingExposure",b.toneMappingExposure),Ge.needsLights&&Fp(An,hr),me&&Q.fog===!0&&ne.refreshFogUniforms(An,me),ne.refreshMaterialUniforms(An,Q,z,j,m.state.transmissionRenderTarget[A.id]),$a.upload(x,Rd(Ge),An,re)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&($a.upload(x,Rd(Ge),An,re),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ft.setValue(x,"center",k.center),Ft.setValue(x,"modelViewMatrix",k.modelViewMatrix),Ft.setValue(x,"normalMatrix",k.normalMatrix),Ft.setValue(x,"modelMatrix",k.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const sn=Q.uniformsGroups;for(let cn=0,Oo=sn.length;cn<Oo;cn++){const Zi=sn[cn];Ze.update(Zi,vn),Ze.bind(Zi,vn)}}return vn}function Fp(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Op(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,H,Z){const Q=J.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),J.get(A.texture).__webglTexture=H,J.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const Z=J.get(A);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const Bp=x.createFramebuffer();this.setRenderTarget=function(A,H=0,Z=0){D=A,L=H,I=Z;let Q=!0,k=null,me=!1,Te=!1;if(A){const Ie=J.get(A);if(Ie.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(x.FRAMEBUFFER,null),Q=!1;else if(Ie.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Ie.__hasExternalTextures)re.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(Ie.__boundDepthTexture!==Ve){if(Ve!==null&&J.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Te=!0);const $e=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[H])?k=$e[H][Z]:k=$e[H],me=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?k=J.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?k=$e[Z]:k=$e,P.copy(A.viewport),X.copy(A.scissor),W=A.scissorTest}else P.copy(Le).multiplyScalar(z).floor(),X.copy(ke).multiplyScalar(z).floor(),W=ht;if(Z!==0&&(k=Bp),V.bindFramebuffer(x.FRAMEBUFFER,k)&&Q&&V.drawBuffers(A,k),V.viewport(P),V.scissor(X),V.setScissorTest(W),me){const Ie=J.get(A.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,Z)}else if(Te){const Ie=H;for(let qe=0;qe<A.textures.length;qe++){const $e=J.get(A.textures[qe]);x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0+qe,$e.__webglTexture,Z,Ie)}}else if(A!==null&&Z!==0){const Ie=J.get(A.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ie.__webglTexture,Z)}M=-1},this.readRenderTargetPixels=function(A,H,Z,Q,k,me,Te,Ne=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){V.bindFramebuffer(x.FRAMEBUFFER,Ie);try{const qe=A.textures[Ne],$e=qe.format,Ve=qe.type;if(!ee.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Q&&Z>=0&&Z<=A.height-k&&(A.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ne),x.readPixels(H,Z,Q,k,Pe.convert($e),Pe.convert(Ve),me))}finally{const qe=D!==null?J.get(D).__webglFramebuffer:null;V.bindFramebuffer(x.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,H,Z,Q,k,me,Te,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie)if(H>=0&&H<=A.width-Q&&Z>=0&&Z<=A.height-k){V.bindFramebuffer(x.FRAMEBUFFER,Ie);const qe=A.textures[Ne],$e=qe.format,Ve=qe.type;if(!ee.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,ot),x.bufferData(x.PIXEL_PACK_BUFFER,me.byteLength,x.STREAM_READ),A.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ne),x.readPixels(H,Z,Q,k,Pe.convert($e),Pe.convert(Ve),0);const xt=D!==null?J.get(D).__webglFramebuffer:null;V.bindFramebuffer(x.FRAMEBUFFER,xt);const Ot=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await N_(x,Ot,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,ot),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,me),x.deleteBuffer(ot),x.deleteSync(Ot),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,Z=0){const Q=Math.pow(2,-Z),k=Math.floor(A.image.width*Q),me=Math.floor(A.image.height*Q),Te=H!==null?H.x:0,Ne=H!==null?H.y:0;re.setTexture2D(A,0),x.copyTexSubImage2D(x.TEXTURE_2D,Z,0,0,Te,Ne,k,me),V.unbindTexture()};const Hp=x.createFramebuffer(),kp=x.createFramebuffer();this.copyTextureToTexture=function(A,H,Z=null,Q=null,k=0,me=null){me===null&&(k!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=k,k=0):me=0);let Te,Ne,Ie,qe,$e,Ve,ot,xt,Ot;const Lt=A.isCompressedTexture?A.mipmaps[me]:A.image;if(Z!==null)Te=Z.max.x-Z.min.x,Ne=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,qe=Z.min.x,$e=Z.min.y,Ve=Z.isBox3?Z.min.z:0;else{const Rn=Math.pow(2,-k);Te=Math.floor(Lt.width*Rn),Ne=Math.floor(Lt.height*Rn),A.isDataArrayTexture?Ie=Lt.depth:A.isData3DTexture?Ie=Math.floor(Lt.depth*Rn):Ie=1,qe=0,$e=0,Ve=0}Q!==null?(ot=Q.x,xt=Q.y,Ot=Q.z):(ot=0,xt=0,Ot=0);const wt=Pe.convert(H.format),Ge=Pe.convert(H.type);let Nt;H.isData3DTexture?(re.setTexture3D(H,0),Nt=x.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(re.setTexture2DArray(H,0),Nt=x.TEXTURE_2D_ARRAY):(re.setTexture2D(H,0),Nt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,H.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,H.unpackAlignment);const dt=x.getParameter(x.UNPACK_ROW_LENGTH),vn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),vs=x.getParameter(x.UNPACK_SKIP_PIXELS),_n=x.getParameter(x.UNPACK_SKIP_ROWS),hr=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Lt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Lt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,qe),x.pixelStorei(x.UNPACK_SKIP_ROWS,$e),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ve);const Ft=A.isDataArrayTexture||A.isData3DTexture,An=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const Rn=J.get(A),sn=J.get(H),cn=J.get(Rn.__renderTarget),Oo=J.get(sn.__renderTarget);V.bindFramebuffer(x.READ_FRAMEBUFFER,cn.__webglFramebuffer),V.bindFramebuffer(x.DRAW_FRAMEBUFFER,Oo.__webglFramebuffer);for(let Zi=0;Zi<Ie;Zi++)Ft&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,J.get(A).__webglTexture,k,Ve+Zi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,J.get(H).__webglTexture,me,Ot+Zi)),x.blitFramebuffer(qe,$e,Te,Ne,ot,xt,Te,Ne,x.DEPTH_BUFFER_BIT,x.NEAREST);V.bindFramebuffer(x.READ_FRAMEBUFFER,null),V.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||J.has(A)){const Rn=J.get(A),sn=J.get(H);V.bindFramebuffer(x.READ_FRAMEBUFFER,Hp),V.bindFramebuffer(x.DRAW_FRAMEBUFFER,kp);for(let cn=0;cn<Ie;cn++)Ft?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Rn.__webglTexture,k,Ve+cn):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Rn.__webglTexture,k),An?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,sn.__webglTexture,me,Ot+cn):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,sn.__webglTexture,me),k!==0?x.blitFramebuffer(qe,$e,Te,Ne,ot,xt,Te,Ne,x.COLOR_BUFFER_BIT,x.NEAREST):An?x.copyTexSubImage3D(Nt,me,ot,xt,Ot+cn,qe,$e,Te,Ne):x.copyTexSubImage2D(Nt,me,ot,xt,qe,$e,Te,Ne);V.bindFramebuffer(x.READ_FRAMEBUFFER,null),V.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?x.texSubImage3D(Nt,me,ot,xt,Ot,Te,Ne,Ie,wt,Ge,Lt.data):H.isCompressedArrayTexture?x.compressedTexSubImage3D(Nt,me,ot,xt,Ot,Te,Ne,Ie,wt,Lt.data):x.texSubImage3D(Nt,me,ot,xt,Ot,Te,Ne,Ie,wt,Ge,Lt):A.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,me,ot,xt,Te,Ne,wt,Ge,Lt.data):A.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,me,ot,xt,Lt.width,Lt.height,wt,Lt.data):x.texSubImage2D(x.TEXTURE_2D,me,ot,xt,Te,Ne,wt,Ge,Lt);x.pixelStorei(x.UNPACK_ROW_LENGTH,dt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,vn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,vs),x.pixelStorei(x.UNPACK_SKIP_ROWS,_n),x.pixelStorei(x.UNPACK_SKIP_IMAGES,hr),me===0&&H.generateMipmaps&&x.generateMipmap(Nt),V.unbindTexture()},this.copyTextureToTexture3D=function(A,H,Z=null,Q=null,k=0){return Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,Z,Q,k)},this.initRenderTarget=function(A){J.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),V.unbindTexture()},this.resetState=function(){L=0,I=0,D=null,V.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const ME={name:"Home",setup(){const n=et(null);let e,t,i,s,r;const a=()=>{e=new Et,t=new it(75,400/300,.1,1e3),t.position.z=5,i=new St({antialias:!0,alpha:!0}),i.setSize(400,300),i.setClearColor(0,0);const l=new Ut,c=new ct({color:4372611,wireframe:!0});s=new We(l,c),e.add(s),n.value.appendChild(i.domElement),o()},o=()=>{r=requestAnimationFrame(o),s.rotation.x+=.01,s.rotation.y+=.01,i.render(e,t)};return Tn(()=>{a()}),gn(()=>{r&&cancelAnimationFrame(r),i&&i.dispose()}),{canvasContainer:n}}},EE={class:"home"},SE={class:"hero"},wE={class:"hero-actions"},TE={class:"demo-container"},AE={class:"demo-canvas",ref:"canvasContainer"};function RE(n,e,t,i,s,r){const a=Ws("router-link");return Oe(),He("div",EE,[f("div",SE,[e[2]||(e[2]=f("h1",{class:"hero-title"},"Three.js 学习指南",-1)),e[3]||(e[3]=f("p",{class:"hero-subtitle"}," 从零开始学习 Three.js，掌握 3D Web 开发的核心技术 ",-1)),f("div",wE,[rt(a,{to:"/tutorial",class:"btn btn-primary"},{default:It(()=>e[0]||(e[0]=[we("开始学习",-1)])),_:1,__:[0]}),rt(a,{to:"/examples",class:"btn btn-secondary"},{default:It(()=>e[1]||(e[1]=[we("查看示例",-1)])),_:1,__:[1]})])]),f("div",TE,[f("div",AE,null,512)]),e[4]||(e[4]=vt('<div class="features" data-v-bf82d294><div class="feature-grid" data-v-bf82d294><div class="feature-card" data-v-bf82d294><div class="feature-icon" data-v-bf82d294>📚</div><h3 data-v-bf82d294>系统教程</h3><p data-v-bf82d294>从基础概念到高级技巧，循序渐进的学习路径</p></div><div class="feature-card" data-v-bf82d294><div class="feature-icon" data-v-bf82d294>🎯</div><h3 data-v-bf82d294>实战示例</h3><p data-v-bf82d294>丰富的代码示例和交互演示，边学边练</p></div><div class="feature-card" data-v-bf82d294><div class="feature-icon" data-v-bf82d294>📖</div><h3 data-v-bf82d294>API文档</h3><p data-v-bf82d294>完整的 API 参考文档，快速查找所需信息</p></div><div class="feature-card" data-v-bf82d294><div class="feature-icon" data-v-bf82d294>🚀</div><h3 data-v-bf82d294>最佳实践</h3><p data-v-bf82d294>性能优化技巧和开发最佳实践分享</p></div></div></div>',1))])}const CE=kt(ME,[["render",RE],["__scopeId","data-v-bf82d294"]]),PE={name:"ApiDocs",setup(){const n=et(""),e=et(null),t=[{name:"核心",items:[{name:"Scene",type:"Class",description:"场景允许你设置哪些对象被three.js渲染以及在哪里渲染。这是所有3D对象的容器。",constructor:"new THREE.Scene()",properties:[{name:"background",type:"Color | Texture | null",description:"场景的背景，可以是颜色、纹理或null（透明）"},{name:"children",type:"Array",description:"场景中所有对象的数组，包括网格、光源、相机等"},{name:"fog",type:"Fog | null",description:"场景中的雾效果，用于创建距离感"}],methods:[{signature:"add(object)",description:"向场景中添加对象，可以是网格、光源、相机等"},{signature:"remove(object)",description:"从场景中移除指定对象"},{signature:"getObjectByName(name)",description:"通过名称获取场景中的对象"}],example:`// 创建场景
const scene = new THREE.Scene()

// 设置背景颜色
scene.background = new THREE.Color(0xf0f0f0)

// 创建并添加立方体
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)`,link:"https://threejs.org/docs/#api/en/scenes/Scene"},{name:"PerspectiveCamera",type:"Class",description:"透视投影相机，模拟人眼看到的效果，远处的物体看起来更小。",constructor:"new THREE.PerspectiveCamera(fov, aspect, near, far)",properties:[{name:"fov",type:"Number",description:"视野角度，以度为单位，默认50"},{name:"aspect",type:"Number",description:"长宽比，通常是canvas的宽度/高度"},{name:"near",type:"Number",description:"近截面距离，默认0.1"},{name:"far",type:"Number",description:"远截面距离，默认2000"}],methods:[{signature:"lookAt(vector)",description:"让相机朝向指定位置"},{signature:"updateProjectionMatrix()",description:"更新投影矩阵，修改fov、aspect等后需调用"}],example:`// 创建透视相机
const camera = new THREE.PerspectiveCamera(
  75,                                    // 视野角度
  window.innerWidth / window.innerHeight, // 长宽比
  0.1,                                   // 近截面
  1000                                   // 远截面
)

// 设置相机位置
camera.position.set(0, 0, 5)`,link:"https://threejs.org/docs/#api/en/cameras/PerspectiveCamera"},{name:"WebGLRenderer",type:"Class",description:"WebGL渲染器使用WebGL来渲染场景，是最常用的渲染器。",constructor:"new THREE.WebGLRenderer(parameters)",properties:[{name:"domElement",type:"HTMLCanvasElement",description:"渲染器创建的canvas元素，需要添加到DOM中"},{name:"shadowMap",type:"WebGLShadowMap",description:"阴影贴图的引用，用于配置阴影"}],methods:[{signature:"render(scene, camera)",description:"渲染场景，这是最重要的方法"},{signature:"setSize(width, height)",description:"设置渲染器尺寸"},{signature:"setClearColor(color, alpha)",description:"设置清除颜色和透明度"}],example:`// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 渲染循环
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}`,link:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer"}]},{name:"几何体",items:[{name:"BoxGeometry",type:"Class",description:"立方体几何体，用于创建立方体或长方体。这是最基础的几何体之一。",constructor:"new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)",example:`// 基础立方体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 创建网格
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)`,link:"https://threejs.org/docs/#api/en/geometries/BoxGeometry"},{name:"SphereGeometry",type:"Class",description:"球体几何体，用于创建球体。可以控制分段数来调整球体的平滑度。",constructor:"new THREE.SphereGeometry(radius, widthSegments, heightSegments)",example:`// 基础球体
const geometry = new THREE.SphereGeometry(1, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const sphere = new THREE.Mesh(geometry, material)`,link:"https://threejs.org/docs/#api/en/geometries/SphereGeometry"},{name:"PlaneGeometry",type:"Class",description:"平面几何体，用于创建平面。常用作地面、墙壁或显示图片。",constructor:"new THREE.PlaneGeometry(width, height, widthSegments, heightSegments)",example:`// 基础平面
const geometry = new THREE.PlaneGeometry(2, 2)
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
const plane = new THREE.Mesh(geometry, material)
plane.rotation.x = -Math.PI / 2  // 旋转90度作为地面`,link:"https://threejs.org/docs/#api/en/geometries/PlaneGeometry"}]},{name:"材质",items:[{name:"MeshBasicMaterial",type:"Class",description:"基础网格材质，不受光照影响。适用于简单的着色或调试。",constructor:"new THREE.MeshBasicMaterial(parameters)",properties:[{name:"color",type:"Color",description:"材质的颜色，默认白色"},{name:"wireframe",type:"Boolean",description:"是否渲染为线框，默认false"},{name:"transparent",type:"Boolean",description:"是否透明，默认false"},{name:"opacity",type:"Number",description:"不透明度，0-1之间，默认1"}],example:`// 基础材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// 透明材质
const transparentMaterial = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  transparent: true,
  opacity: 0.5
})`,link:"https://threejs.org/docs/#api/en/materials/MeshBasicMaterial"},{name:"MeshLambertMaterial",type:"Class",description:"Lambert材质，会对光照产生反应。适用于非光泽表面。",constructor:"new THREE.MeshLambertMaterial(parameters)",properties:[{name:"color",type:"Color",description:"材质的颜色"},{name:"emissive",type:"Color",description:"发光颜色，不受光照影响"}],example:`// Lambert材质
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })

// 需要光源才能看到效果
const light = new THREE.DirectionalLight(0xffffff, 1)
scene.add(light)`,link:"https://threejs.org/docs/#api/en/materials/MeshLambertMaterial"}]},{name:"光源",items:[{name:"AmbientLight",type:"Class",description:"环境光，均匀照亮场景中的所有对象。没有方向，不产生阴影。",constructor:"new THREE.AmbientLight(color, intensity)",properties:[{name:"color",type:"Color",description:"光源颜色"},{name:"intensity",type:"Number",description:"光照强度，默认1"}],example:`// 基础环境光
const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
scene.add(ambientLight)`,link:"https://threejs.org/docs/#api/en/lights/AmbientLight"},{name:"DirectionalLight",type:"Class",description:"方向光，模拟太阳光。光线平行，可以产生阴影。",constructor:"new THREE.DirectionalLight(color, intensity)",properties:[{name:"color",type:"Color",description:"光源颜色"},{name:"intensity",type:"Number",description:"光照强度"},{name:"castShadow",type:"Boolean",description:"是否产生阴影"}],example:`// 创建方向光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)`,link:"https://threejs.org/docs/#api/en/lights/DirectionalLight"}]},{name:"控制器",items:[{name:"OrbitControls",type:"Class",description:"轨道控制器，支持鼠标旋转/缩放/平移观察场景，最常用的交互控制器。",constructor:"new OrbitControls(camera, renderer.domElement)",properties:[{name:"enabled",type:"Boolean",description:"是否启用控制器，默认 true"},{name:"enableDamping",type:"Boolean",description:"是否启用阻尼（惯性），默认 false，需要在动画循环中调用 update()"},{name:"dampingFactor",type:"Number",description:"阻尼系数，默认 0.05"},{name:"enableZoom",type:"Boolean",description:"是否允许缩放，默认 true"},{name:"enablePan",type:"Boolean",description:"是否允许平移，默认 true"},{name:"target",type:"Vector3",description:"相机围绕观察的中心点"}],methods:[{signature:"update()",description:"在启用阻尼时于动画循环中调用以更新控制器状态"},{signature:"saveState()",description:"保存当前状态"},{signature:"reset()",description:"重置到保存的状态"},{signature:"dispose()",description:"释放事件监听等资源"}],example:`// 需要先导入
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// 创建控制器
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05

// 动画循环
function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}`,link:"https://threejs.org/docs/#examples/en/controls/OrbitControls"},{name:"TransformControls",type:"Class",description:"变换控制器，在场景中以手柄形式对对象进行平移/旋转/缩放操作，常用于编辑器类工具。",constructor:"new TransformControls(camera, renderer.domElement)",properties:[{name:"mode",type:"'translate' | 'rotate' | 'scale'",description:"当前变换模式"},{name:"size",type:"Number",description:"手柄大小"},{name:"axis",type:"String | null",description:"当前激活的轴"}],methods:[{signature:"attach(object)",description:"附加到某个对象以进行编辑"},{signature:"detach()",description:"从对象上分离"},{signature:"setMode(mode)",description:"设置变换模式：translate/rotate/scale"},{signature:"dispose()",description:"释放资源"}],example:`import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

const tControls = new TransformControls(camera, renderer.domElement)
tControls.attach(mesh)
scene.add(tControls)

// 与 OrbitControls 协同
tControls.addEventListener('dragging-changed', (event) => {
  controls.enabled = !event.value
})`,link:"https://threejs.org/docs/#examples/en/controls/TransformControls"},{name:"PointerLockControls",type:"Class",description:"指针锁定控制器，常用于第一人称视角（FPS）相机控制。",constructor:"new PointerLockControls(camera, document.body)",properties:[{name:"isLocked",type:"Boolean",description:"指示当前是否处于指针锁定状态"}],methods:[{signature:"lock()",description:"请求进入指针锁定"},{signature:"unlock()",description:"退出指针锁定"},{signature:"dispose()",description:"释放资源"}],example:`import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'

const plControls = new PointerLockControls(camera, document.body)
document.addEventListener('click', () => plControls.lock())

function animate() {
  requestAnimationFrame(animate)
  // 根据按键状态移动相机位置...
  renderer.render(scene, camera)
}`,link:"https://threejs.org/docs/#examples/en/controls/PointerLockControls"},{name:"FlyControls",type:"Class",description:"飞行控制器，自由飞行浏览场景，常用于大场景预览。",constructor:"new FlyControls(camera, renderer.domElement)",properties:[{name:"movementSpeed",type:"Number",description:"移动速度"},{name:"rollSpeed",type:"Number",description:"滚转速度"},{name:"dragToLook",type:"Boolean",description:"是否按住鼠标拖拽才转向"}],methods:[{signature:"update(delta)",description:"基于时间步长更新状态（需传入 Clock 的 delta）"},{signature:"dispose()",description:"释放资源"}],example:`import { Clock } from 'three'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'

const clock = new Clock()
const fly = new FlyControls(camera, renderer.domElement)
fly.movementSpeed = 10
fly.rollSpeed = Math.PI / 6

function animate() {
  requestAnimationFrame(animate)
  const delta = clock.getDelta()
  fly.update(delta)
  renderer.render(scene, camera)
}`,link:"https://threejs.org/docs/#examples/en/controls/FlyControls"}]},{name:"加载器",items:[{name:"TextureLoader",type:"Class",description:"纹理加载器，用于从 URL 加载 2D 纹理并创建 THREE.Texture 实例。",constructor:"new THREE.TextureLoader(manager?)",properties:[{name:"manager",type:"LoadingManager",description:"可选的加载管理器，用于跟踪加载状态"}],methods:[{signature:"load(url, onLoad, onProgress?, onError?)",description:"加载单张纹理，完成后回调返回 Texture 对象"},{signature:"setPath(path)",description:"为后续 load 调用设置基础路径，返回 this"}],example:`import { TextureLoader, MeshBasicMaterial, Mesh, BoxGeometry } from 'three'

const loader = new TextureLoader()
loader.setPath('/assets/textures/')

loader.load('brick_diffuse.jpg', (tex) => {
  const mat = new MeshBasicMaterial({ map: tex })
  const mesh = new Mesh(new BoxGeometry(1, 1, 1), mat)
  scene.add(mesh)
})`,link:"https://threejs.org/docs/#api/en/loaders/TextureLoader"},{name:"CubeTextureLoader",type:"Class",description:"立方体纹理加载器，用于加载天空盒或环境贴图（6 张面纹理）。",constructor:"new THREE.CubeTextureLoader(manager?)",properties:[{name:"manager",type:"LoadingManager",description:"可选的加载管理器"}],methods:[{signature:"load(urls, onLoad, onProgress?, onError?)",description:"加载6张纹理（按照 px, nx, py, ny, pz, nz 顺序），返回 CubeTexture"},{signature:"setPath(path)",description:"为后续 load 调用设置基础路径，返回 this"}],example:`import { CubeTextureLoader, Color } from 'three'

const urls = [
  'px.jpg','nx.jpg',
  'py.jpg','ny.jpg',
  'pz.jpg','nz.jpg'
]

const cubeTex = new CubeTextureLoader().setPath('/assets/sky/').load(urls)
scene.background = cubeTex
// 也可用于 PBR 材质的 envMap`,link:"https://threejs.org/docs/#api/en/loaders/CubeTextureLoader"},{name:"GLTFLoader",type:"Class",description:"GLTF/GLB 模型加载器，支持 PBR 材质、动画、相机、场景层级等，WebGL 实务标准格式。",constructor:"new GLTFLoader(manager?)",properties:[],methods:[{signature:"load(url, onLoad, onProgress?, onError?)",description:"加载 glTF/glb 文件，onLoad 回调参数包含 { scene, animations, cameras, asset, parser }"},{signature:"setDRACOLoader(dracoLoader)",description:"设置 DRACOLoader 以解码压缩网格"},{signature:"parse(data, path, onLoad, onError)",description:"从 ArrayBuffer/JSON 字符串解析 glTF"}],example:`import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const gltfLoader = new GLTFLoader()
gltfLoader.load('/assets/models/DamagedHelmet.glb', (gltf) => {
  scene.add(gltf.scene)
  // 如果有动画，可创建 AnimationMixer 播放 gltf.animations
})`,link:"https://threejs.org/docs/#examples/en/loaders/GLTFLoader"},{name:"DRACOLoader",type:"Class",description:"DRACO 解码器加载器，为 glTF 等模型提供网格压缩解码以减少资源体积。",constructor:"new DRACOLoader(manager?)",properties:[],methods:[{signature:"setDecoderPath(path)",description:"设置解码器文件（.wasm/.js）所在的根路径"},{signature:"setWorkerLimit(count)",description:"设置 Web Worker 的最大并发数量"},{signature:"preload()",description:"预加载解码器模块，减少首次解码延迟"}],example:`import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

const draco = new DRACOLoader()
draco.setDecoderPath('/libs/draco/')  // 确保该目录下有 draco_wasm_wrapper.js / draco_decoder.wasm 等文件
draco.preload()

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(draco)

gltfLoader.load('/assets/models/compressed_model.glb', (gltf) => {
  scene.add(gltf.scene)
})`,link:"https://threejs.org/docs/#examples/en/loaders/DRACOLoader"}]},{name:"动画",items:[{name:"AnimationMixer",type:"Class",description:"动画混合器，管理在特定根对象上的动画播放与混合。",constructor:"new THREE.AnimationMixer(rootObject)",properties:[{name:"time",type:"Number",description:"当前时间（秒）"},{name:"timeScale",type:"Number",description:"全局时间缩放，默认 1.0"}],methods:[{signature:"clipAction(clip, root?)",description:"创建/获取一个 AnimationAction 用于控制某个剪辑的播放"},{signature:"update(delta)",description:"推进动画时间，通常在渲染循环中调用"},{signature:"stopAllAction()",description:"停止所有动作"},{signature:"getRoot()",description:"返回当前混合器的根对象"}],example:`import { AnimationMixer, Clock, LoopRepeat } from 'three'

const mixer = new AnimationMixer(gltf.scene)
const action = mixer.clipAction(gltf.animations[0])
action.setLoop(LoopRepeat, Infinity)
action.play()

const clock = new Clock()
function animate() {
  requestAnimationFrame(animate)
  const delta = clock.getDelta()
  mixer.update(delta)
  renderer.render(scene, camera)
}`,link:"https://threejs.org/docs/#api/en/animation/AnimationMixer"},{name:"AnimationClip",type:"Class",description:"动画剪辑，包含一组关键帧轨道与持续时间，描述对象属性随时间的变化。",constructor:"new THREE.AnimationClip(name, duration, tracks, blendMode?)",properties:[{name:"name",type:"String",description:"剪辑名称"},{name:"duration",type:"Number",description:"持续时间（秒），可为 -1 表示由轨道自动计算"},{name:"tracks",type:"Array<KeyframeTrack>",description:"关键帧轨道数组"}],methods:[{signature:"AnimationClip.findByName(clips, name)",description:"在剪辑数组中按名称查找"},{signature:"toJSON()",description:"序列化为 JSON"}],example:`// 从 glTF 中选取名为 'Walk' 的剪辑
const clip = THREE.AnimationClip.findByName(gltf.animations, 'Walk')
const action = mixer.clipAction(clip).play()`,link:"https://threejs.org/docs/#api/en/animation/AnimationClip"},{name:"AnimationAction",type:"Class",description:"动画动作，由 AnimationMixer 创建，用于控制单个 AnimationClip 的播放/混合。",constructor:"由 mixer.clipAction(clip) 返回",properties:[{name:"loop",type:"Number",description:"循环模式，如 THREE.LoopRepeat/LoopOnce/LoopPingPong"},{name:"clampWhenFinished",type:"Boolean",description:"播放结束后是否保持在最后一帧"},{name:"enabled",type:"Boolean",description:"是否启用该动作"},{name:"time",type:"Number",description:"当前播放位置（秒）"},{name:"weight",type:"Number",description:"动作权重，用于混合"}],methods:[{signature:"play()",description:"开始播放"},{signature:"stop()",description:"停止播放并重置时间"},{signature:"reset()",description:"重置到初始状态"},{signature:"fadeIn(duration)",description:"在指定时间内从 0 淡入"},{signature:"fadeOut(duration)",description:"在指定时间内淡出到 0"},{signature:"crossFadeFrom(otherAction, duration, warp)",description:"从另一个动作交叉淡入"},{signature:"setLoop(mode, repetitions)",description:"设置循环模式与重复次数"}],example:`action.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(0.5).play()
// 在需要切换动作时： newAction.crossFadeFrom(prevAction, 0.3, true).play()`,link:"https://threejs.org/docs/#api/en/animation/AnimationAction"},{name:"VectorKeyframeTrack",type:"Class",description:"关键帧轨道的一种，控制 Vector3 类属性（如 position/scale）的关键帧变化。",constructor:"new THREE.VectorKeyframeTrack(name, times, values, interpolation?)",properties:[{name:"name",type:"String",description:"目标路径，如 'mesh.position'"}],methods:[],example:`// 基于关键帧创建自定义平移动画
const times = [0, 1, 2]                 // 秒
const values = [0,0,0,  1,0,0,  0,0,0]  // 对应三个 Vector3
const track = new THREE.VectorKeyframeTrack('mesh.position', times, values)
const clip = new THREE.AnimationClip('moveX', 2, [track])
const action = mixer.clipAction(clip).play()`,link:"https://threejs.org/docs/#api/en/animation/tracks/VectorKeyframeTrack"},{name:"Clock",type:"Class",description:"时钟工具，获取渲染循环中的时间步长 delta 或累计时间。",constructor:"new THREE.Clock(autoStart?)",properties:[{name:"autoStart",type:"Boolean",description:"是否在首次调用 getDelta 时自动启动，默认 true"},{name:"elapsedTime",type:"Number",description:"自启动以来的累计时间（秒）"}],methods:[{signature:"getDelta()",description:"返回自上次调用以来的时间差（秒）"},{signature:"getElapsedTime()",description:"返回累计时间"},{signature:"start()",description:"启动计时"},{signature:"stop()",description:"停止计时"}],example:`const clock = new THREE.Clock()
function animate() {
  requestAnimationFrame(animate)
  const delta = clock.getDelta()
  mixer.update(delta)
  renderer.render(scene, camera)
}`,link:"https://threejs.org/docs/#api/en/core/Clock"}]},{name:"数学",items:[{name:"Vector3",type:"Class",description:"三维向量，常用于表示位置、方向与缩放等。",constructor:"new THREE.Vector3(x?, y?, z?)",properties:[{name:"x",type:"Number",description:"X 分量"},{name:"y",type:"Number",description:"Y 分量"},{name:"z",type:"Number",description:"Z 分量"}],methods:[{signature:"set(x, y, z)",description:"设置分量"},{signature:"add(v)",description:"向量相加"},{signature:"sub(v)",description:"向量相减"},{signature:"multiplyScalar(s)",description:"数乘"},{signature:"length()",description:"向量长度"},{signature:"normalize()",description:"归一化为单位向量"},{signature:"dot(v)",description:"点积"},{signature:"cross(v)",description:"叉积"},{signature:"distanceTo(v)",description:"与另一个向量的距离"},{signature:"clone()",description:"克隆向量"}],example:`const a = new THREE.Vector3(1, 0, 0)
const b = new THREE.Vector3(0, 1, 0)
const c = a.clone().add(b).normalize()
const dot = a.dot(b)     // 0
const cross = a.clone().cross(b) // (0,0,1)`,link:"https://threejs.org/docs/#api/en/math/Vector3"},{name:"Euler",type:"Class",description:"欧拉角，按指定旋转顺序的三轴旋转表示，常用于对象 rotation。",constructor:"new THREE.Euler(x?, y?, z?, order?)",properties:[{name:"x",type:"Number",description:"绕 X 轴旋转（弧度）"},{name:"y",type:"Number",description:"绕 Y 轴旋转（弧度）"},{name:"z",type:"Number",description:"绕 Z 轴旋转（弧度）"},{name:"order",type:"String",description:"旋转顺序，默认 'XYZ'"}],methods:[{signature:"set(x, y, z, order?)",description:"设置欧拉角"},{signature:"setFromQuaternion(q, order?)",description:"从四元数设置"},{signature:"setFromRotationMatrix(m4, order?)",description:"从旋转矩阵设置"}],example:`const deg = 45 * Math.PI / 180
mesh.rotation.set(0, deg, 0, 'YXZ')  // 以 YXZ 顺序旋转
const q = new THREE.Quaternion().setFromEuler(mesh.rotation)`,link:"https://threejs.org/docs/#api/en/math/Euler"},{name:"Matrix4",type:"Class",description:"4x4 矩阵，用于三维中的仿射变换（平移/旋转/缩放）与投影。",constructor:"new THREE.Matrix4()",properties:[],methods:[{signature:"makeRotationX(theta)",description:"构建绕 X 轴的旋转矩阵"},{signature:"makeRotationY(theta)",description:"构建绕 Y 轴的旋转矩阵"},{signature:"makeRotationZ(theta)",description:"构建绕 Z 轴的旋转矩阵"},{signature:"compose(position, quaternion, scale)",description:"由位置/旋转(四元数)/缩放组成矩阵"},{signature:"multiply(m)",description:"右乘另一个矩阵"},{signature:"invert()",description:"矩阵求逆"},{signature:"decompose(position, quaternion, scale)",description:"分解为位置/四元数/缩放"}],example:`const position = new THREE.Vector3(1, 2, 3)
const quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2)
const scale = new THREE.Vector3(1, 1, 1)
const mat = new THREE.Matrix4().compose(position, quaternion, scale)
// 将矩阵分解回对象
mat.decompose(mesh.position, mesh.quaternion, mesh.scale)`,link:"https://threejs.org/docs/#api/en/math/Matrix4"},{name:"Quaternion",type:"Class",description:"四元数，用于表示与插值三维旋转，避免万向节死锁。",constructor:"new THREE.Quaternion(x?, y?, z?, w?)",properties:[{name:"x",type:"Number",description:"X 分量"},{name:"y",type:"Number",description:"Y 分量"},{name:"z",type:"Number",description:"Z 分量"},{name:"w",type:"Number",description:"W 分量（标量部分）"}],methods:[{signature:"setFromAxisAngle(axis, angle)",description:"从轴-角创建旋转"},{signature:"setFromEuler(euler)",description:"从欧拉角创建旋转"},{signature:"multiply(q)",description:"与另一个四元数复合"},{signature:"slerp(q, t)",description:"球面线性插值"},{signature:"normalize()",description:"单位化"}],example:`const q1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2)
const q2 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI, 0))
const q = q1.clone().slerp(q2, 0.5)
mesh.quaternion.copy(q)`,link:"https://threejs.org/docs/#api/en/math/Quaternion"}]},{name:"辅助器",items:[{name:"AxesHelper",type:"Class",description:"坐标轴辅助器，显示世界原点处的 XYZ 轴（红 X、绿 Y、蓝 Z）。",constructor:"new THREE.AxesHelper(size?)",properties:[],methods:[],example:`const axes = new THREE.AxesHelper(5)
scene.add(axes)`,link:"https://threejs.org/docs/#api/en/helpers/AxesHelper"},{name:"GridHelper",type:"Class",description:"网格辅助器，常用于表示地面参考线。",constructor:"new THREE.GridHelper(size, divisions, colorCenterLine?, colorGrid?)",properties:[],methods:[],example:`const grid = new THREE.GridHelper(10, 10)
scene.add(grid)`,link:"https://threejs.org/docs/#api/en/helpers/GridHelper"},{name:"Box3Helper",type:"Class",description:"包围盒辅助器，用线框显示 Box3 的边界，常用于调试包围体。",constructor:"new THREE.Box3Helper(box, color?)",properties:[],methods:[],example:`const box = new THREE.Box3().setFromObject(mesh)
const helper = new THREE.Box3Helper(box, 0xffff00)
scene.add(helper)`,link:"https://threejs.org/docs/#api/en/helpers/Box3Helper"},{name:"CameraHelper",type:"Class",description:"相机辅助器，显示相机视锥体，调试相机参数非常有用。",constructor:"new THREE.CameraHelper(camera)",properties:[],methods:[{signature:"update()",description:"相机参数改变后调用以更新显示"}],example:`const helper = new THREE.CameraHelper(camera)
scene.add(helper)
// 修改相机参数后
helper.update()`,link:"https://threejs.org/docs/#api/en/helpers/CameraHelper"}]},{name:"相机",items:[{name:"Camera",type:"Class",description:"所有相机类型的基类，通常直接使用其子类（Perspective/Orthographic）。",constructor:"new THREE.Camera()",properties:[{name:"matrixWorldInverse",type:"Matrix4",description:"世界矩阵的逆矩阵"},{name:"projectionMatrix",type:"Matrix4",description:"投影矩阵"}],methods:[{signature:"lookAt(vector)",description:"让相机朝向指定目标点"},{signature:"updateMatrixWorld(force?)",description:"更新世界矩阵"},{signature:"updateProjectionMatrix()",description:"更新投影矩阵"}],example:`// 通常不直接实例化 Camera，而使用其子类
// 这里仅演示基类存在
const cam = new THREE.Camera()
cam.position.set(0, 0, 5)
cam.lookAt(0, 0, 0)`,link:"https://threejs.org/docs/#api/en/cameras/Camera"},{name:"OrthographicCamera",type:"Class",description:"正交相机，无透视缩小效果，常用于2D/UI或工程视图。",constructor:"new THREE.OrthographicCamera(left, right, top, bottom, near, far)",properties:[{name:"left",type:"Number",description:"左裁剪面"},{name:"right",type:"Number",description:"右裁剪面"},{name:"top",type:"Number",description:"上裁剪面"},{name:"bottom",type:"Number",description:"下裁剪面"},{name:"near",type:"Number",description:"近裁剪面"},{name:"far",type:"Number",description:"远裁剪面"},{name:"zoom",type:"Number",description:"缩放系数，默认1"}],methods:[{signature:"updateProjectionMatrix()",description:"修改参数后需调用以生效"},{signature:"setViewOffset(fullWidth, fullHeight, x, y, width, height)",description:"设置视口偏移"},{signature:"clearViewOffset()",description:"清除视口偏移"}],example:`const aspect = window.innerWidth / window.innerHeight
const frustumSize = 10
const camera = new THREE.OrthographicCamera(
  -frustumSize * aspect / 2,
   frustumSize * aspect / 2,
   frustumSize / 2,
  -frustumSize / 2,
  0.1,
  1000
)
camera.position.set(0, 0, 10)
camera.lookAt(0, 0, 0)
camera.updateProjectionMatrix()`,link:"https://threejs.org/docs/#api/en/cameras/OrthographicCamera"},{name:"ArrayCamera",type:"Class",description:"相机数组，允许在一次渲染中以多个子相机的不同视口输出，常用于分屏/多视角。",constructor:"new THREE.ArrayCamera(cameras)",properties:[{name:"cameras",type:"Array<Camera>",description:"子相机数组，每个相机可设置 viewport"}],methods:[],example:`const camL = new THREE.PerspectiveCamera(60, 0.5 * window.innerWidth / window.innerHeight, 0.1, 100)
camL.viewport = new THREE.Vector4(0, 0, window.innerWidth / 2, window.innerHeight)

const camR = new THREE.PerspectiveCamera(60, 0.5 * window.innerWidth / window.innerHeight, 0.1, 100)
camR.viewport = new THREE.Vector4(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight)

const arrayCamera = new THREE.ArrayCamera([camL, camR])
renderer.render(scene, arrayCamera)`,link:"https://threejs.org/docs/#api/en/cameras/ArrayCamera"},{name:"CubeCamera",type:"Class",description:"用于生成环境贴图的立方体相机，常用于反射/折射等效果。",constructor:"new THREE.CubeCamera(near, far, renderTarget)",properties:[],methods:[{signature:"update(renderer, scene)",description:"从当前位置捕获六个方向的环境贴图"}],example:`const cubeRT = new THREE.WebGLCubeRenderTarget(256, { generateMipmaps: true })
const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRT)
// 将 cubeRT.texture 用作 PBR 材质的 envMap
function animate() {
  requestAnimationFrame(animate)
  // 在需要时更新环境贴图
  cubeCamera.update(renderer, scene)
  renderer.render(scene, mainCamera)
}`,link:"https://threejs.org/docs/#api/en/cameras/CubeCamera"}]},{name:"渲染器",items:[{name:"WebGL1Renderer",type:"Class",description:"使用 WebGL 1.0 的渲染器，作为 WebGLRenderer 的兼容性备选方案。",constructor:"new THREE.WebGL1Renderer(parameters?)",properties:[],methods:[{signature:"render(scene, camera)",description:"渲染场景"},{signature:"setSize(width, height, updateStyle?)",description:"设置渲染尺寸"},{signature:"setPixelRatio(value)",description:"设置像素比以适配高 DPI 屏幕"},{signature:"setClearColor(color, alpha?)",description:"设置清屏颜色与透明度"},{signature:"dispose()",description:"释放 GPU 资源"}],example:`import { WebGL1Renderer } from 'three'
const renderer = new WebGL1Renderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)`,link:"https://threejs.org/docs/#api/en/renderers/WebGL1Renderer"},{name:"WebGLRenderTarget",type:"Class",description:"离屏渲染目标（帧缓冲），常用于后期处理、反射、阴影贴图等。",constructor:"new THREE.WebGLRenderTarget(width, height, options?)",properties:[{name:"texture",type:"Texture",description:"渲染输出的纹理"},{name:"depthTexture",type:"DepthTexture",description:"可选的深度纹理"}],methods:[{signature:"setSize(width, height)",description:"调整渲染目标尺寸"},{signature:"dispose()",description:"释放资源"}],example:`import { WebGLRenderTarget, Scene, OrthographicCamera, MeshBasicMaterial, PlaneGeometry, Mesh } from 'three'
const rt = new WebGLRenderTarget(512, 512)
// 第一次渲染到 RT
renderer.setRenderTarget(rt)
renderer.render(scene, camera)
renderer.setRenderTarget(null)
// 将 RT 纹理贴到一个平面上显示
const mat = new MeshBasicMaterial({ map: rt.texture })
const plane = new Mesh(new PlaneGeometry(2, 2), mat)
scene2.add(plane)
renderer.render(scene2, new OrthographicCamera())`,link:"https://threejs.org/docs/#api/en/renderers/WebGLRenderTarget"},{name:"WebGLCubeRenderTarget",type:"Class",description:"立方体离屏渲染目标，常与 CubeCamera 搭配用于反射/环境贴图。",constructor:"new THREE.WebGLCubeRenderTarget(size, options?)",properties:[{name:"texture",type:"CubeTexture",description:"立方体纹理输出"}],methods:[{signature:"fromEquirectangularTexture(renderer, texture)",description:"从等距柱状环境图转成立方体环境贴图"},{signature:"dispose()",description:"释放资源"}],example:`import { WebGLCubeRenderTarget } from 'three'
const cubeRT = new WebGLCubeRenderTarget(256, { generateMipmaps: true })
// 可与 CubeCamera 搭配：cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRT)
// material.envMap = cubeRT.texture`,link:"https://threejs.org/docs/#api/en/renderers/WebGLCubeRenderTarget"}]},{name:"场景对象",items:[{name:"Object3D",type:"Class",description:"Three.js 中所有可放入场景层级的对象基类，提供位置/旋转/缩放、层级关系与通用操作。",constructor:"new THREE.Object3D()",properties:[{name:"position",type:"Vector3",description:"世界变换中的平移"},{name:"rotation",type:"Euler",description:"欧拉角旋转"},{name:"quaternion",type:"Quaternion",description:"四元数旋转"},{name:"scale",type:"Vector3",description:"缩放"},{name:"children",type:"Array<Object3D>",description:"子对象列表"},{name:"parent",type:"Object3D | null",description:"父对象"},{name:"visible",type:"Boolean",description:"是否可见"},{name:"name",type:"String",description:"对象名称"}],methods:[{signature:"add(...objects)",description:"添加子对象"},{signature:"remove(...objects)",description:"移除子对象"},{signature:"traverse(callback)",description:"深度优先遍历所有后代"},{signature:"lookAt(x|Vector3, y?, z?)",description:"朝向目标点"},{signature:"getObjectByName(name)",description:"按名称查找子树中的对象"},{signature:"updateMatrixWorld(force?)",description:"更新世界矩阵"}],example:`const root = new THREE.Object3D()
root.position.set(0, 1, 0)
const child = new THREE.Object3D()
root.add(child)
scene.add(root)
root.traverse(obj => obj.visible = true)`,link:"https://threejs.org/docs/#api/en/core/Object3D"},{name:"Group",type:"Class",description:"对象分组容器，继承自 Object3D，便于整体变换与管理。",constructor:"new THREE.Group()",properties:[],methods:[],example:`const group = new THREE.Group()
group.name = 'characters'
group.add(mesh1, mesh2)
group.position.set(0, 0, -5)
scene.add(group)`,link:"https://threejs.org/docs/#api/en/objects/Group"},{name:"Mesh",type:"Class",description:"网格对象，由几何体与材质组成，是最常见的可渲染对象。",constructor:"new THREE.Mesh(geometry, material)",properties:[{name:"geometry",type:"BufferGeometry",description:"几何体数据"},{name:"material",type:"Material | Material[]",description:"材质或材质数组"},{name:"castShadow",type:"Boolean",description:"是否投射阴影"},{name:"receiveShadow",type:"Boolean",description:"是否接收阴影"}],methods:[],example:`const geo = new THREE.BoxGeometry(1, 1, 1)
const mat = new THREE.MeshStandardMaterial({ color: 0x6699ff })
const mesh = new THREE.Mesh(geo, mat)
mesh.castShadow = true
mesh.receiveShadow = true
scene.add(mesh)`,link:"https://threejs.org/docs/#api/en/objects/Mesh"},{name:"Line",type:"Class",description:"线段对象，使用 LineBasicMaterial 或 LineDashedMaterial 渲染几何体的顶点连接线。",constructor:"new THREE.Line(geometry, material)",properties:[],methods:[],example:`const points = [new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0)]
const geo = new THREE.BufferGeometry().setFromPoints(points)
const mat = new THREE.LineBasicMaterial({ color: 0xff0000 })
const line = new THREE.Line(geo, mat)
scene.add(line)`,link:"https://threejs.org/docs/#api/en/objects/Line"},{name:"Points",type:"Class",description:"点精灵对象，使用 PointsMaterial 渲染大量点，常用于粒子效果。",constructor:"new THREE.Points(geometry, material)",properties:[],methods:[],example:`const count = 1000
const positions = new Float32Array(count * 3)
for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 10
const geo = new THREE.BufferGeometry()
geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, sizeAttenuation: true })
const points = new THREE.Points(geo, mat)
scene.add(points)`,link:"https://threejs.org/docs/#api/en/objects/Points"}]},{name:"更多几何体",items:[{name:"TorusGeometry",type:"Class",description:"圆环体几何体，可通过管道半径与细分数控制外形。",constructor:"new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)",example:`const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0x6699ff })
const torus = new THREE.Mesh(geometry, material)
scene.add(torus)`,link:"https://threejs.org/docs/#api/en/geometries/TorusGeometry"},{name:"TorusKnotGeometry",type:"Class",description:"圆环结几何体，基于参数 p、q 生成多样的结形。",constructor:"new THREE.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q)",example:`const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 16, 2, 3)
const material = new THREE.MeshStandardMaterial({ color: 0xff6699, metalness: 0.2, roughness: 0.4 })
const knot = new THREE.Mesh(geometry, material)
scene.add(knot)`,link:"https://threejs.org/docs/#api/en/geometries/TorusKnotGeometry"},{name:"CylinderGeometry",type:"Class",description:"圆柱体/圆台几何体，可设置上下半径与高度。",constructor:"new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength)",example:`const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32)
const material = new THREE.MeshStandardMaterial({ color: 0x00bcd4 })
const cylinder = new THREE.Mesh(geometry, material)
scene.add(cylinder)`,link:"https://threejs.org/docs/#api/en/geometries/CylinderGeometry"},{name:"ConeGeometry",type:"Class",description:"圆锥体几何体，CylinderGeometry 的特例（顶半径为 0）。",constructor:"new THREE.ConeGeometry(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength)",example:`const geometry = new THREE.ConeGeometry(0.6, 1.5, 32)
const material = new THREE.MeshStandardMaterial({ color: 0xffc107 })
const cone = new THREE.Mesh(geometry, material)
scene.add(cone)`,link:"https://threejs.org/docs/#api/en/geometries/ConeGeometry"}]},{name:"更多材质",items:[{name:"MeshStandardMaterial",type:"Class",description:"基于物理的标准材质（PBR），支持金属度/粗糙度与环境贴图。",constructor:"new THREE.MeshStandardMaterial(parameters)",properties:[{name:"color",type:"Color",description:"基色"},{name:"metalness",type:"Number",description:"金属度 0-1，默认 0"},{name:"roughness",type:"Number",description:"粗糙度 0-1，默认 1"},{name:"envMap",type:"Texture",description:"环境贴图，用于反射"}],example:`const material = new THREE.MeshStandardMaterial({
  color: 0x8888ff,
  metalness: 0.6,
  roughness: 0.3,
  envMap: envCubeTexture // 可选：环境贴图
})`,link:"https://threejs.org/docs/#api/en/materials/MeshStandardMaterial"},{name:"MeshPhysicalMaterial",type:"Class",description:"物理材质，扩展了标准材质，支持 clearcoat、transmission、ior、sheen 等高级特性。",constructor:"new THREE.MeshPhysicalMaterial(parameters)",properties:[{name:"clearcoat",type:"Number",description:"清漆层强度 0-1"},{name:"clearcoatRoughness",type:"Number",description:"清漆层粗糙度"},{name:"transmission",type:"Number",description:"透光率 0-1（近似玻璃）"},{name:"thickness",type:"Number",description:"厚度（与 transmission 联用）"},{name:"ior",type:"Number",description:"折射率"}],example:`const glass = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  transmission: 0.9,
  thickness: 0.5,
  ior: 1.5
})`,link:"https://threejs.org/docs/#api/en/materials/MeshPhysicalMaterial"},{name:"MeshPhongMaterial",type:"Class",description:"Phong 高光材质，非 PBR，但直观易用，常用于入门与旧项目。",constructor:"new THREE.MeshPhongMaterial(parameters)",properties:[{name:"specular",type:"Color",description:"高光颜色"},{name:"shininess",type:"Number",description:"高光强度（越大越锐利）"}],example:`const material = new THREE.MeshPhongMaterial({
  color: 0x6699ff,
  specular: 0x222222,
  shininess: 50
})`,link:"https://threejs.org/docs/#api/en/materials/MeshPhongMaterial"},{name:"PointsMaterial",type:"Class",description:"点材质，用于 Points 粒子渲染，支持点大小衰减与纹理贴图。",constructor:"new THREE.PointsMaterial(parameters)",properties:[{name:"size",type:"Number",description:"点大小（世界单位）"},{name:"sizeAttenuation",type:"Boolean",description:"随距离衰减，默认 true"},{name:"map",type:"Texture",description:"点精灵纹理"},{name:"transparent",type:"Boolean",description:"是否开启透明"}],example:`const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, sizeAttenuation: true })
const points = new THREE.Points(geometry, mat)
scene.add(points)`,link:"https://threejs.org/docs/#api/en/materials/PointsMaterial"},{name:"LineBasicMaterial",type:"Class",description:"基础线材质，用于渲染线段（注意大多数平台不支持改变线宽）。",constructor:"new THREE.LineBasicMaterial(parameters)",properties:[{name:"color",type:"Color",description:"颜色"}],example:`const mat = new THREE.LineBasicMaterial({ color: 0xff0000 })
const line = new THREE.Line(geometry, mat)
scene.add(line)`,link:"https://threejs.org/docs/#api/en/materials/LineBasicMaterial"}]},{name:"光源补充",items:[{name:"PointLight",type:"Class",description:"点光源，向各个方向均匀发光，可设置衰减与距离。",constructor:"new THREE.PointLight(color, intensity, distance, decay)",properties:[{name:"castShadow",type:"Boolean",description:"是否产生阴影"}],methods:[],example:`const light = new THREE.PointLight(0xffffff, 1, 50, 2)
light.position.set(2, 3, 2)
light.castShadow = true
scene.add(light)`,link:"https://threejs.org/docs/#api/en/lights/PointLight"},{name:"SpotLight",type:"Class",description:"聚光灯，具有锥形光束，支持半影（penumbra）与目标点。",constructor:"new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay)",properties:[{name:"target",type:"Object3D",description:"照射目标对象（默认世界原点）"},{name:"castShadow",type:"Boolean",description:"是否产生阴影"}],methods:[],example:`const spot = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 6, 0.2, 2)
spot.position.set(5, 8, 5)
spot.castShadow = true
scene.add(spot)
scene.add(spot.target)
spot.target.position.set(0, 0, 0)`,link:"https://threejs.org/docs/#api/en/lights/SpotLight"},{name:"HemisphereLight",type:"Class",description:"半球光，模拟来自天空与地面的漫射光，柔和填充环境。",constructor:"new THREE.HemisphereLight(skyColor, groundColor, intensity)",properties:[],methods:[],example:`const hemi = new THREE.HemisphereLight(0x87ceeb, 0x444444, 0.6)
scene.add(hemi)`,link:"https://threejs.org/docs/#api/en/lights/HemisphereLight"},{name:"RectAreaLight",type:"Class",description:"矩形面光，均匀从矩形区域发光，常用于室内/产品光照（与标准/物理材质配合良好）。",constructor:"new THREE.RectAreaLight(color, intensity, width, height)",properties:[{name:"width",type:"Number",description:"光源宽度"},{name:"height",type:"Number",description:"光源高度"}],methods:[],example:`const rect = new THREE.RectAreaLight(0xffffff, 5, 2, 1)
rect.position.set(2, 3, 2)
rect.lookAt(0, 0, 0)
scene.add(rect)`,link:"https://threejs.org/docs/#api/en/lights/RectAreaLight"}]}],i=Ln(()=>n.value?t.map(r=>({...r,items:r.items.filter(a=>a.name.toLowerCase().includes(n.value.toLowerCase())||a.description.toLowerCase().includes(n.value.toLowerCase()))})).filter(r=>r.items.length>0):t);return{searchQuery:n,selectedApi:e,filteredCategories:i,selectApi:r=>{e.value=r}}}},LE={class:"api-docs"},IE={class:"api-search"},DE={class:"api-content"},UE={class:"api-categories"},NE={class:"category-title"},FE={class:"api-items"},OE=["onClick"],BE={key:0,class:"api-detail"},HE={class:"api-detail-header"},kE={class:"api-type"},zE={class:"api-description"},VE={key:0,class:"api-section"},GE=["href"],WE={key:1,class:"api-section"},XE={key:2,class:"api-section"},jE={class:"property-list"},qE={class:"property-name"},YE={class:"property-type"},KE={class:"property-desc"},$E={key:3,class:"api-section"},ZE={class:"method-list"},JE={class:"method-signature"},QE={class:"method-desc"},eS={key:4,class:"api-section"},tS={key:1,class:"api-placeholder"};function nS(n,e,t,i,s,r){return Oe(),He("div",LE,[e[7]||(e[7]=f("div",{class:"api-header"},[f("h1",null,"Three.js API 文档"),f("p",null,"完整的 Three.js API 参考文档和使用说明")],-1)),f("div",IE,[Be(f("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>i.searchQuery=a),type:"text",placeholder:"搜索 API...",class:"search-input"},null,512),[[nt,i.searchQuery]])]),f("div",DE,[f("div",UE,[(Oe(!0),He(Ht,null,En(i.filteredCategories,a=>(Oe(),He("div",{key:a.name,class:"api-category"},[f("h2",NE,ye(a.name),1),f("div",FE,[(Oe(!0),He(Ht,null,En(a.items,o=>(Oe(),He("div",{key:o.name,class:yo(["api-item",{active:i.selectedApi?.name===o.name}]),onClick:l=>i.selectApi(o)},[f("h3",null,ye(o.name),1),f("p",null,ye(o.description),1)],10,OE))),128))])]))),128))]),i.selectedApi?(Oe(),He("div",BE,[f("div",HE,[f("h2",null,ye(i.selectedApi.name),1),f("span",kE,ye(i.selectedApi.type),1)]),f("p",zE,ye(i.selectedApi.description),1),i.selectedApi.link?(Oe(),He("div",VE,[e[1]||(e[1]=f("h3",null,"官方文档",-1)),f("a",{href:i.selectedApi.link,target:"_blank",rel:"noopener"},ye(i.selectedApi.link),9,GE)])):Hi("",!0),i.selectedApi.constructor?(Oe(),He("div",WE,[e[2]||(e[2]=f("h3",null,"构造函数",-1)),f("pre",null,[f("code",null,ye(i.selectedApi.constructor),1)])])):Hi("",!0),i.selectedApi.properties?.length?(Oe(),He("div",XE,[e[3]||(e[3]=f("h3",null,"属性",-1)),f("div",jE,[(Oe(!0),He(Ht,null,En(i.selectedApi.properties,a=>(Oe(),He("div",{key:a.name,class:"property-item"},[f("code",qE,ye(a.name),1),f("span",YE,ye(a.type),1),f("p",KE,ye(a.description),1)]))),128))])])):Hi("",!0),i.selectedApi.methods?.length?(Oe(),He("div",$E,[e[4]||(e[4]=f("h3",null,"方法",-1)),f("div",ZE,[(Oe(!0),He(Ht,null,En(i.selectedApi.methods,a=>(Oe(),He("div",{key:a.name,class:"method-item"},[f("code",JE,ye(a.signature),1),f("p",QE,ye(a.description),1)]))),128))])])):Hi("",!0),i.selectedApi.example?(Oe(),He("div",eS,[e[5]||(e[5]=f("h3",null,"示例",-1)),f("pre",null,[f("code",null,ye(i.selectedApi.example),1)])])):Hi("",!0)])):(Oe(),He("div",tS,e[6]||(e[6]=[f("h3",null,"选择一个 API 查看详细信息",-1),f("p",null,"点击左侧的 API 项目来查看详细的使用说明、属性、方法和示例代码。",-1)])))])])}const iS=kt(PE,[["render",nS],["__scopeId","data-v-762588fe"]]),sS={name:"Examples",setup(){const n=et({}),e=ni({}),t={},i={},s={},r=[{id:"rotating-cube",title:"旋转立方体",description:"最基础的 Three.js 示例，展示如何创建和旋转一个立方体",tags:["基础","几何体","动画"],code:`// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000)
camera.position.z = 5

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(300, 200)

// 创建立方体
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x42b883 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 动画循环
function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
animate()`},{id:"colorful-sphere",title:"彩色球体",description:"使用不同材质创建彩色球体，展示材质的基本用法",tags:["材质","几何体","颜色"],code:`// 创建场景和相机
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000)
camera.position.z = 5

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(300, 200)

// 创建球体
const geometry = new THREE.SphereGeometry(1, 32, 32)
const material = new THREE.MeshBasicMaterial({ 
  color: 0xff6b6b,
  wireframe: false
})
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

// 动画
function animate() {
  requestAnimationFrame(animate)
  sphere.rotation.y += 0.01
  renderer.render(scene, camera)
}
animate()`},{id:"multiple-objects",title:"多个物体",description:"在场景中添加多个不同的几何体，展示场景管理",tags:["场景","多物体","组合"],code:`// 创建场景
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000)
camera.position.z = 8

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(300, 200)

// 创建多个物体
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({ color: 0x42b883 })
)
cube.position.x = -2

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.7),
  new THREE.MeshBasicMaterial({ color: 0xff6b6b })
)

const cone = new THREE.Mesh(
  new THREE.ConeGeometry(0.7, 1.5),
  new THREE.MeshBasicMaterial({ color: 0x4ecdc4 })
)
cone.position.x = 2

scene.add(cube, sphere, cone)

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.y += 0.01
  sphere.rotation.x += 0.01
  cone.rotation.z += 0.01
  renderer.render(scene, camera)
}
animate()`}],a=(c,d)=>{d&&(n.value[c]=d)},o=c=>{e[c]=!e[c]},l=c=>{const d=n.value[c.id];if(!d)return;const u=new Et,h=new it(75,300/200,.1,1e3),p=new St({antialias:!0,alpha:!0});if(p.setSize(300,200),p.setClearColor(0,0),d.appendChild(p.domElement),c.id==="rotating-cube"){h.position.z=5;const v=new Ut,_=new ct({color:4372611}),g=new We(v,_);u.add(g);const m=()=>{s[c.id]=requestAnimationFrame(m),g.rotation.x+=.01,g.rotation.y+=.01,p.render(u,h)};m()}else if(c.id==="colorful-sphere"){h.position.z=5;const v=new ln(1,32,32),_=new ct({color:16739179}),g=new We(v,_);u.add(g);const m=()=>{s[c.id]=requestAnimationFrame(m),g.rotation.y+=.01,p.render(u,h)};m()}else if(c.id==="multiple-objects"){h.position.z=8;const v=new We(new Ut,new ct({color:4372611}));v.position.x=-2;const _=new We(new ln(.7),new ct({color:16739179})),g=new We(new ta(.7,1.5),new ct({color:5164484}));g.position.x=2,u.add(v,_,g);const m=()=>{s[c.id]=requestAnimationFrame(m),v.rotation.y+=.01,_.rotation.x+=.01,g.rotation.z+=.01,p.render(u,h)};m()}t[c.id]=u,i[c.id]=p};return Tn(()=>{r.forEach(c=>{e[c.id]=!1}),setTimeout(()=>{r.forEach(l)},100)}),gn(()=>{Object.values(s).forEach(c=>{c&&cancelAnimationFrame(c)}),Object.values(i).forEach(c=>{c&&c.dispose()})}),{examples:r,showCode:e,setCanvasRef:a,toggleCode:o}}},rS={class:"examples"},aS={class:"examples-grid"},oS={class:"example-preview"},lS={class:"example-info"},cS={class:"example-tags"},dS=["onClick"],uS={key:0,class:"code-section"};function hS(n,e,t,i,s,r){return Oe(),He("div",rS,[e[0]||(e[0]=f("div",{class:"examples-header"},[f("h1",null,"Three.js 示例"),f("p",null,"通过实际示例学习 Three.js 的各种功能和技巧")],-1)),f("div",aS,[(Oe(!0),He(Ht,null,En(i.examples,a=>(Oe(),He("div",{class:"example-card",key:a.id},[f("div",oS,[f("div",{class:"example-canvas",ref_for:!0,ref:o=>i.setCanvasRef(a.id,o)},null,512)]),f("div",lS,[f("h3",null,ye(a.title),1),f("p",null,ye(a.description),1),f("div",cS,[(Oe(!0),He(Ht,null,En(a.tags,o=>(Oe(),He("span",{class:"tag",key:o},ye(o),1))),128))]),f("button",{class:"view-code-btn",onClick:o=>i.toggleCode(a.id)},ye(i.showCode[a.id]?"隐藏代码":"查看代码"),9,dS)]),i.showCode[a.id]?(Oe(),He("div",uS,[f("pre",null,[f("code",null,ye(a.code),1)])])):Hi("",!0)]))),128))])])}const fS=kt(sS,[["render",hS],["__scopeId","data-v-b20fee16"]]),pS={name:"Tutorial"},mS={class:"tutorial"};function gS(n,e,t,i,s,r){return Oe(),He("div",mS,e[0]||(e[0]=[vt(`<div class="tutorial-header" data-v-4ce7d483><h1 data-v-4ce7d483>Three.js 教程</h1><p data-v-4ce7d483>系统学习 Three.js 的核心概念和实用技巧</p></div><div class="tutorial-content" data-v-4ce7d483><section class="tutorial-section" data-v-4ce7d483><h2 data-v-4ce7d483>🚀 快速开始</h2><div class="tutorial-card" data-v-4ce7d483><h3 data-v-4ce7d483>什么是 Three.js？</h3><p data-v-4ce7d483>Three.js 是一个基于 WebGL 的 JavaScript 3D 库，它简化了在网页中创建和显示 3D 图形的过程。</p><h4 data-v-4ce7d483>核心概念：</h4><ul data-v-4ce7d483><li data-v-4ce7d483><strong data-v-4ce7d483>场景 (Scene)</strong>：3D 世界的容器</li><li data-v-4ce7d483><strong data-v-4ce7d483>相机 (Camera)</strong>：观察 3D 世界的视角</li><li data-v-4ce7d483><strong data-v-4ce7d483>渲染器 (Renderer)</strong>：将 3D 场景渲染到 2D 屏幕</li><li data-v-4ce7d483><strong data-v-4ce7d483>几何体 (Geometry)</strong>：定义物体的形状</li><li data-v-4ce7d483><strong data-v-4ce7d483>材质 (Material)</strong>：定义物体的外观</li><li data-v-4ce7d483><strong data-v-4ce7d483>网格 (Mesh)</strong>：几何体 + 材质的组合</li></ul></div></section><section class="tutorial-section" data-v-4ce7d483><h2 data-v-4ce7d483>📦 安装和设置</h2><div class="tutorial-card" data-v-4ce7d483><h3 data-v-4ce7d483>通过 npm 安装</h3><pre data-v-4ce7d483><code data-v-4ce7d483>npm install three</code></pre><h3 data-v-4ce7d483>基本导入</h3><pre data-v-4ce7d483><code data-v-4ce7d483>import * as THREE from &#39;three&#39;</code></pre><h3 data-v-4ce7d483>创建第一个场景</h3><pre data-v-4ce7d483><code data-v-4ce7d483>// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 创建立方体
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 设置相机位置
camera.position.z = 5

// 渲染循环
function animate() {
  requestAnimationFrame(animate)
  
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  
  renderer.render(scene, camera)
}
animate()</code></pre></div></section><section class="tutorial-section" data-v-4ce7d483><h2 data-v-4ce7d483>🎯 学习路径</h2><div class="learning-path" data-v-4ce7d483><div class="path-item" data-v-4ce7d483><div class="path-number" data-v-4ce7d483>1</div><div class="path-content" data-v-4ce7d483><h3 data-v-4ce7d483>基础概念</h3><p data-v-4ce7d483>学习场景、相机、渲染器等核心概念</p></div></div><div class="path-item" data-v-4ce7d483><div class="path-number" data-v-4ce7d483>2</div><div class="path-content" data-v-4ce7d483><h3 data-v-4ce7d483>几何体和材质</h3><p data-v-4ce7d483>掌握各种几何体的创建和材质的应用</p></div></div><div class="path-item" data-v-4ce7d483><div class="path-number" data-v-4ce7d483>3</div><div class="path-content" data-v-4ce7d483><h3 data-v-4ce7d483>光照和阴影</h3><p data-v-4ce7d483>理解光照模型，创建逼真的阴影效果</p></div></div><div class="path-item" data-v-4ce7d483><div class="path-number" data-v-4ce7d483>4</div><div class="path-content" data-v-4ce7d483><h3 data-v-4ce7d483>动画和交互</h3><p data-v-4ce7d483>添加动画效果和用户交互功能</p></div></div></div></section></div>`,2)]))}const vS=kt(pS,[["render",gS],["__scopeId","data-v-4ce7d483"]]),_S={name:"Installation"},xS={class:"tutorial-page"};function yS(n,e,t,i,s,r){return Oe(),He("div",xS,e[0]||(e[0]=[vt(`<h1 data-v-ac936a88>安装 Three.js</h1><div class="content" data-v-ac936a88><section data-v-ac936a88><h2 data-v-ac936a88>通过 npm 安装</h2><p data-v-ac936a88>推荐使用 npm 来安装 Three.js，这样可以更好地管理依赖和版本。</p><pre data-v-ac936a88><code data-v-ac936a88>npm install three</code></pre><p data-v-ac936a88>安装完成后，你可以在项目中导入 Three.js：</p><pre data-v-ac936a88><code data-v-ac936a88>import * as THREE from &#39;three&#39;</code></pre></section><section data-v-ac936a88><h2 data-v-ac936a88>通过 CDN 使用</h2><p data-v-ac936a88>如果你想快速开始，也可以通过 CDN 直接引入 Three.js：</p><pre data-v-ac936a88><code data-v-ac936a88>&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js&quot;&gt;&lt;/script&gt;</code></pre></section><section data-v-ac936a88><h2 data-v-ac936a88>验证安装</h2><p data-v-ac936a88>创建一个简单的测试来验证 Three.js 是否正确安装：</p><pre data-v-ac936a88><code data-v-ac936a88>// 测试 Three.js 是否可用
console.log(&#39;Three.js version:&#39;, THREE.REVISION)

// 创建一个简单的场景
const scene = new THREE.Scene()
console.log(&#39;Scene created successfully:&#39;, scene)</code></pre></section><section data-v-ac936a88><h2 data-v-ac936a88>开发环境设置</h2><p data-v-ac936a88>为了更好的开发体验，建议配置以下工具：</p><h3 data-v-ac936a88>1. TypeScript 支持</h3><pre data-v-ac936a88><code data-v-ac936a88>npm install --save-dev @types/three</code></pre><h3 data-v-ac936a88>2. 代码编辑器插件</h3><ul data-v-ac936a88><li data-v-ac936a88>VS Code: Three.js Snippets</li><li data-v-ac936a88>WebStorm: 内置支持</li></ul><h3 data-v-ac936a88>3. 调试工具</h3><p data-v-ac936a88>推荐使用浏览器的开发者工具来调试 Three.js 应用。</p></section></div>`,2)]))}const bS=kt(_S,[["render",yS],["__scopeId","data-v-ac936a88"]]),MS={name:"FirstScene",setup(){const n=et(null);let e,t,i,s,r;const a=()=>{e=new Et,t=new it(75,400/300,.1,1e3),t.position.z=5,i=new St({antialias:!0,alpha:!0}),i.setSize(400,300),i.setClearColor(0,0);const l=new Ut,c=new ct({color:65280});s=new We(l,c),e.add(s),n.value.appendChild(i.domElement),o()},o=()=>{r=requestAnimationFrame(o),s.rotation.x+=.01,s.rotation.y+=.01,i.render(e,t)};return Tn(()=>{a()}),gn(()=>{r&&cancelAnimationFrame(r),i&&i.dispose()}),{canvasContainer:n}}},ES={class:"tutorial-page"},SS={class:"content"},wS={class:"demo-container"},TS={class:"demo-canvas",ref:"canvasContainer"};function AS(n,e,t,i,s,r){return Oe(),He("div",ES,[e[5]||(e[5]=f("h1",null,"创建第一个场景",-1)),f("div",SS,[e[3]||(e[3]=f("section",null,[f("h2",null,"基本概念"),f("p",null,"在 Three.js 中，要显示任何内容，我们需要三个基本要素："),f("ul",null,[f("li",null,[f("strong",null,"场景 (Scene)"),we("：包含所有 3D 对象的容器")]),f("li",null,[f("strong",null,"相机 (Camera)"),we("：定义观察场景的视角")]),f("li",null,[f("strong",null,"渲染器 (Renderer)"),we("：将场景渲染到屏幕上")])])],-1)),f("section",null,[e[0]||(e[0]=f("h2",null,"完整示例",-1)),e[1]||(e[1]=f("p",null,"让我们创建一个包含旋转立方体的简单场景：",-1)),f("div",wS,[f("div",TS,null,512)]),e[2]||(e[2]=f("pre",null,[f("code",null,`// 1. 创建场景
const scene = new THREE.Scene()

// 2. 创建相机
const camera = new THREE.PerspectiveCamera(
  75,                                    // 视野角度
  window.innerWidth / window.innerHeight, // 宽高比
  0.1,                                   // 近裁剪面
  1000                                   // 远裁剪面
)

// 3. 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 4. 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 5. 创建材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// 6. 创建网格（几何体 + 材质）
const cube = new THREE.Mesh(geometry, material)

// 7. 将立方体添加到场景
scene.add(cube)

// 8. 设置相机位置
camera.position.z = 5

// 9. 渲染循环
function animate() {
  requestAnimationFrame(animate)
  
  // 旋转立方体
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  
  // 渲染场景
  renderer.render(scene, camera)
}

// 开始动画
animate()`)],-1))]),e[4]||(e[4]=vt(`<section data-v-3d97eec1><h2 data-v-3d97eec1>代码解析</h2><h3 data-v-3d97eec1>1. 创建场景</h3><p data-v-3d97eec1>场景是所有 3D 对象的容器，就像一个舞台。</p><pre data-v-3d97eec1><code data-v-3d97eec1>const scene = new THREE.Scene()</code></pre><h3 data-v-3d97eec1>2. 创建相机</h3><p data-v-3d97eec1>透视相机模拟人眼的视觉效果，参数包括：</p><ul data-v-3d97eec1><li data-v-3d97eec1><strong data-v-3d97eec1>fov</strong>：视野角度（75度）</li><li data-v-3d97eec1><strong data-v-3d97eec1>aspect</strong>：宽高比</li><li data-v-3d97eec1><strong data-v-3d97eec1>near</strong>：近裁剪面（0.1）</li><li data-v-3d97eec1><strong data-v-3d97eec1>far</strong>：远裁剪面（1000）</li></ul><h3 data-v-3d97eec1>3. 创建渲染器</h3><p data-v-3d97eec1>WebGL 渲染器负责将 3D 场景渲染到 2D 屏幕上。</p><h3 data-v-3d97eec1>4. 创建对象</h3><p data-v-3d97eec1>每个 3D 对象都由几何体（形状）和材质（外观）组成。</p><h3 data-v-3d97eec1>5. 动画循环</h3><p data-v-3d97eec1>使用 requestAnimationFrame 创建流畅的动画效果。</p></section><section data-v-3d97eec1><h2 data-v-3d97eec1>常见问题</h2><h3 data-v-3d97eec1>Q: 为什么看不到任何内容？</h3><p data-v-3d97eec1>A: 检查以下几点：</p><ul data-v-3d97eec1><li data-v-3d97eec1>相机位置是否正确设置</li><li data-v-3d97eec1>对象是否添加到场景中</li><li data-v-3d97eec1>渲染器是否正确添加到 DOM</li><li data-v-3d97eec1>是否调用了 render 方法</li></ul><h3 data-v-3d97eec1>Q: 如何调整相机位置？</h3><p data-v-3d97eec1>A: 使用 camera.position 属性：</p><pre data-v-3d97eec1><code data-v-3d97eec1>camera.position.x = 2
camera.position.y = 3
camera.position.z = 5</code></pre></section>`,2))])])}const RS=kt(MS,[["render",AS],["__scopeId","data-v-3d97eec1"]]),CS={name:"ScenePage",setup(){const n=et(null);let e,t,i,s=[],r;const a=()=>{e=new Et,e.background=new ze(8900331),e.fog=new fd(8900331,1,100),t=new it(75,400/300,.1,1e3),t.position.z=8,i=new St({antialias:!0}),i.setSize(400,300);const l=new We(new Ut,new ct({color:16711680}));l.position.x=-2,l.name="redCube";const c=new We(new ln(.7),new ct({color:65280}));c.name="greenSphere";const d=new We(new ta(.7,1.5),new ct({color:255}));d.position.x=2,d.name="blueCone",s=[l,c,d],e.add(...s),n.value.appendChild(i.domElement),o()},o=()=>{r=requestAnimationFrame(o),s.forEach((l,c)=>{l.rotation.x+=.01,l.rotation.y+=.01*(c+1)}),i.render(e,t)};return Tn(()=>{a()}),gn(()=>{r&&cancelAnimationFrame(r),i&&i.dispose()}),{canvasContainer:n}}},PS={class:"tutorial-page"},LS={class:"content"},IS={class:"demo-container"},DS={class:"demo-canvas",ref:"canvasContainer"};function US(n,e,t,i,s,r){return Oe(),He("div",PS,[e[5]||(e[5]=f("h1",null,"场景 (Scene)",-1)),f("div",LS,[e[3]||(e[3]=vt(`<section data-v-2ddd4ea8><h2 data-v-2ddd4ea8>什么是场景？</h2><p data-v-2ddd4ea8>场景（Scene）是 Three.js 中的核心概念之一，它就像一个 3D 世界的容器，用来存放所有的 3D 对象、光源、相机等元素。</p><p data-v-2ddd4ea8>可以把场景想象成一个舞台，所有的演员（3D 对象）都在这个舞台上表演，而观众（相机）从不同的角度观看这个舞台。</p></section><section data-v-2ddd4ea8><h2 data-v-2ddd4ea8>创建场景</h2><p data-v-2ddd4ea8>创建一个场景非常简单：</p><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>const scene = new THREE.Scene()</code></pre><p data-v-2ddd4ea8>这就创建了一个空的 3D 场景，现在你可以向其中添加各种对象了。</p></section><section data-v-2ddd4ea8><h2 data-v-2ddd4ea8>场景的重要属性</h2><h3 data-v-2ddd4ea8>1. background - 背景</h3><p data-v-2ddd4ea8>设置场景的背景颜色或纹理：</p><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>// 设置纯色背景
scene.background = new THREE.Color(0xf0f0f0)

// 设置渐变背景
scene.background = new THREE.Color(0x87CEEB)

// 设置纹理背景
const loader = new THREE.TextureLoader()
scene.background = loader.load(&#39;path/to/texture.jpg&#39;)</code></pre><h3 data-v-2ddd4ea8>2. fog - 雾效</h3><p data-v-2ddd4ea8>为场景添加雾效，增强深度感：</p><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>// 线性雾效
scene.fog = new THREE.Fog(0xcccccc, 10, 15)

// 指数雾效
scene.fog = new THREE.FogExp2(0xcccccc, 0.002)</code></pre><h3 data-v-2ddd4ea8>3. children - 子对象</h3><p data-v-2ddd4ea8>场景中所有对象的数组，通常不直接操作：</p><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>console.log(&#39;场景中的对象数量:&#39;, scene.children.length)</code></pre></section><section data-v-2ddd4ea8><h2 data-v-2ddd4ea8>场景的重要方法</h2><h3 data-v-2ddd4ea8>1. add() - 添加对象</h3><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>// 添加单个对象
scene.add(cube)

// 添加多个对象
scene.add(cube, sphere, light)</code></pre><h3 data-v-2ddd4ea8>2. remove() - 移除对象</h3><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>// 移除对象
scene.remove(cube)

// 移除多个对象
scene.remove(cube, sphere)</code></pre><h3 data-v-2ddd4ea8>3. getObjectByName() - 通过名称获取对象</h3><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>// 给对象命名
cube.name = &#39;myCube&#39;

// 通过名称查找
const foundCube = scene.getObjectByName(&#39;myCube&#39;)</code></pre><h3 data-v-2ddd4ea8>4. traverse() - 遍历所有对象</h3><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>// 遍历场景中的所有对象
scene.traverse((object) =&gt; {
  console.log(&#39;对象名称:&#39;, object.name)
  console.log(&#39;对象类型:&#39;, object.type)
})</code></pre></section>`,4)),f("section",null,[e[0]||(e[0]=f("h2",null,"实际示例",-1)),e[1]||(e[1]=f("p",null,"下面是一个包含多个对象和雾效的场景示例：",-1)),f("div",IS,[f("div",DS,null,512)]),e[2]||(e[2]=f("pre",null,[f("code",null,`// 创建场景
const scene = new THREE.Scene()

// 设置背景色
scene.background = new THREE.Color(0x87CEEB)

// 添加雾效
scene.fog = new THREE.Fog(0x87CEEB, 1, 100)

// 创建多个对象
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube.position.x = -2
cube.name = 'redCube'

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.7),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
sphere.name = 'greenSphere'

const cone = new THREE.Mesh(
  new THREE.ConeGeometry(0.7, 1.5),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cone.position.x = 2
cone.name = 'blueCone'

// 添加到场景
scene.add(cube, sphere, cone)

// 查找对象
const foundSphere = scene.getObjectByName('greenSphere')
console.log('找到球体:', foundSphere)`)],-1))]),e[4]||(e[4]=vt(`<section data-v-2ddd4ea8><h2 data-v-2ddd4ea8>最佳实践</h2><h3 data-v-2ddd4ea8>1. 对象命名</h3><p data-v-2ddd4ea8>为重要的对象设置有意义的名称，便于后续查找和调试：</p><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>player.name = &#39;player&#39;
enemy.name = &#39;enemy_01&#39;
terrain.name = &#39;ground&#39;</code></pre><h3 data-v-2ddd4ea8>2. 场景组织</h3><p data-v-2ddd4ea8>使用 Group 来组织相关的对象：</p><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>const buildingGroup = new THREE.Group()
buildingGroup.add(wall1, wall2, roof)
buildingGroup.name = &#39;building&#39;
scene.add(buildingGroup)</code></pre><h3 data-v-2ddd4ea8>3. 性能优化</h3><p data-v-2ddd4ea8>定期清理不需要的对象：</p><pre data-v-2ddd4ea8><code data-v-2ddd4ea8>// 移除对象并释放内存
scene.remove(object)
object.geometry.dispose()
object.material.dispose()</code></pre></section>`,1))])])}const NS=kt(CS,[["render",US],["__scopeId","data-v-2ddd4ea8"]]),FS={name:"CameraPage",setup(){const n=et(null);let e,t,i,s,r;const a=()=>{e=new Et,e.background=new ze(15790320),t=new it(75,400/300,.1,1e3),t.position.set(5,3,8),i=new St({antialias:!0}),i.setSize(400,300);const c=new Ut(2,2,2),d=new ct({color:4372611,wireframe:!0});s=new We(c,d),e.add(s);const u=new wp(5);e.add(u),t.lookAt(s.position),n.value.appendChild(i.domElement),o()},o=()=>{r=requestAnimationFrame(o),s.rotation.x+=.005,s.rotation.y+=.005,i.render(e,t)},l=c=>{switch(c){case"front":t.position.set(0,0,8);break;case"side":t.position.set(8,0,0);break;case"top":t.position.set(0,8,0);break;case"perspective":t.position.set(5,3,8);break}t.lookAt(s.position)};return Tn(()=>{a()}),gn(()=>{r&&cancelAnimationFrame(r),i&&i.dispose()}),{canvasContainer:n,changeView:l}}},OS={class:"tutorial-page"},BS={class:"content"},HS={class:"demo-container"},kS={class:"demo-canvas",ref:"canvasContainer"},zS={class:"demo-controls"};function VS(n,e,t,i,s,r){return Oe(),He("div",OS,[e[11]||(e[11]=f("h1",null,"相机 (Camera)",-1)),f("div",BS,[e[9]||(e[9]=vt(`<section data-v-d5912e05><h2 data-v-d5912e05>什么是相机？</h2><p data-v-d5912e05>相机（Camera）定义了我们观察 3D 场景的视角和方式。就像现实世界中的摄像机一样，它决定了我们能看到什么、从哪个角度看、以及看到的范围有多大。</p><p data-v-d5912e05>Three.js 提供了两种主要的相机类型：</p><ul data-v-d5912e05><li data-v-d5912e05><strong data-v-d5912e05>透视相机 (PerspectiveCamera)</strong>：模拟人眼视觉，有透视效果</li><li data-v-d5912e05><strong data-v-d5912e05>正交相机 (OrthographicCamera)</strong>：无透视效果，常用于建筑图纸</li></ul></section><section data-v-d5912e05><h2 data-v-d5912e05>透视相机 (PerspectiveCamera)</h2><p data-v-d5912e05>透视相机是最常用的相机类型，它模拟了人眼的视觉效果，远处的物体看起来更小。</p><h3 data-v-d5912e05>创建透视相机</h3><pre data-v-d5912e05><code data-v-d5912e05>const camera = new THREE.PerspectiveCamera(
  fov,    // 视野角度 (Field of View)
  aspect, // 宽高比 (Aspect Ratio)
  near,   // 近裁剪面 (Near Clipping Plane)
  far     // 远裁剪面 (Far Clipping Plane)
)

// 典型示例
const camera = new THREE.PerspectiveCamera(
  75,                                    // 75度视野角度
  window.innerWidth / window.innerHeight, // 屏幕宽高比
  0.1,                                   // 近裁剪面距离
  1000                                   // 远裁剪面距离
)</code></pre><h3 data-v-d5912e05>参数详解</h3><ul data-v-d5912e05><li data-v-d5912e05><strong data-v-d5912e05>fov (视野角度)</strong>：垂直方向的视野角度，单位为度。常用值：45-75度</li><li data-v-d5912e05><strong data-v-d5912e05>aspect (宽高比)</strong>：渲染区域的宽高比，通常是 width/height</li><li data-v-d5912e05><strong data-v-d5912e05>near (近裁剪面)</strong>：相机能看到的最近距离，小于此距离的物体不会被渲染</li><li data-v-d5912e05><strong data-v-d5912e05>far (远裁剪面)</strong>：相机能看到的最远距离，超过此距离的物体不会被渲染</li></ul></section>`,2)),f("section",null,[e[4]||(e[4]=f("h2",null,"相机位置和朝向",-1)),e[5]||(e[5]=f("h3",null,"设置相机位置",-1)),e[6]||(e[6]=f("pre",null,[f("code",null,`// 方法1：直接设置坐标
camera.position.x = 5
camera.position.y = 3
camera.position.z = 8

// 方法2：使用 set 方法
camera.position.set(5, 3, 8)

// 方法3：使用 Vector3
camera.position.copy(new THREE.Vector3(5, 3, 8))`)],-1)),e[7]||(e[7]=f("h3",null,"设置相机朝向",-1)),e[8]||(e[8]=f("pre",null,[f("code",null,`// 让相机朝向指定位置
camera.lookAt(0, 0, 0)  // 朝向原点
camera.lookAt(cube.position)  // 朝向某个对象

// 使用 Vector3
camera.lookAt(new THREE.Vector3(0, 0, 0))`)],-1)),f("div",HS,[f("div",kS,null,512),f("div",zS,[f("button",{onClick:e[0]||(e[0]=a=>i.changeView("front"))},"正面视角"),f("button",{onClick:e[1]||(e[1]=a=>i.changeView("side"))},"侧面视角"),f("button",{onClick:e[2]||(e[2]=a=>i.changeView("top"))},"顶部视角"),f("button",{onClick:e[3]||(e[3]=a=>i.changeView("perspective"))},"透视视角")])])]),e[10]||(e[10]=vt(`<section data-v-d5912e05><h2 data-v-d5912e05>正交相机 (OrthographicCamera)</h2><p data-v-d5912e05>正交相机没有透视效果，远近物体大小相同，常用于建筑设计、工程图纸等需要精确比例的场景。</p><pre data-v-d5912e05><code data-v-d5912e05>const camera = new THREE.OrthographicCamera(
  left,   // 左边界
  right,  // 右边界
  top,    // 上边界
  bottom, // 下边界
  near,   // 近裁剪面
  far     // 远裁剪面
)

// 典型示例
const frustumSize = 10
const aspect = window.innerWidth / window.innerHeight
const camera = new THREE.OrthographicCamera(
  frustumSize * aspect / -2,  // left
  frustumSize * aspect / 2,   // right
  frustumSize / 2,            // top
  frustumSize / -2,           // bottom
  0.1,                        // near
  1000                        // far
)</code></pre></section><section data-v-d5912e05><h2 data-v-d5912e05>相机控制</h2><h3 data-v-d5912e05>手动控制</h3><pre data-v-d5912e05><code data-v-d5912e05>// 移动相机
camera.position.x += 0.1

// 旋转相机
camera.rotation.y += 0.01

// 更新投影矩阵（改变相机参数后需要调用）
camera.updateProjectionMatrix()</code></pre><h3 data-v-d5912e05>使用控制器</h3><p data-v-d5912e05>Three.js 提供了多种相机控制器，让用户可以交互式地控制相机：</p><pre data-v-d5912e05><code data-v-d5912e05>import { OrbitControls } from &#39;three/examples/jsm/controls/OrbitControls.js&#39;

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)

// 设置控制器参数
controls.enableDamping = true  // 启用阻尼
controls.dampingFactor = 0.25  // 阻尼系数
controls.enableZoom = true     // 启用缩放
controls.autoRotate = true     // 自动旋转

// 在动画循环中更新控制器
function animate() {
  controls.update()
  renderer.render(scene, camera)
}</code></pre></section><section data-v-d5912e05><h2 data-v-d5912e05>常见问题和解决方案</h2><h3 data-v-d5912e05>Q: 为什么物体看不见？</h3><p data-v-d5912e05>A: 检查以下几点：</p><ul data-v-d5912e05><li data-v-d5912e05>相机位置是否在物体内部</li><li data-v-d5912e05>物体是否在相机的视野范围内</li><li data-v-d5912e05>near 和 far 参数是否合适</li><li data-v-d5912e05>相机是否朝向正确的方向</li></ul><h3 data-v-d5912e05>Q: 如何让相机跟随物体？</h3><pre data-v-d5912e05><code data-v-d5912e05>// 在动画循环中更新相机位置
function animate() {
  // 相机跟随玩家，保持一定距离
  camera.position.copy(player.position)
  camera.position.y += 5  // 高度偏移
  camera.position.z += 10 // 距离偏移
  camera.lookAt(player.position)
}</code></pre><h3 data-v-d5912e05>Q: 如何实现第一人称视角？</h3><pre data-v-d5912e05><code data-v-d5912e05>// 将相机放在角色头部位置
camera.position.copy(character.position)
camera.position.y += 1.8  // 人物身高

// 根据鼠标移动旋转相机
document.addEventListener(&#39;mousemove&#39;, (event) =&gt; {
  camera.rotation.y -= event.movementX * 0.002
  camera.rotation.x -= event.movementY * 0.002
})</code></pre></section><section data-v-d5912e05><h2 data-v-d5912e05>最佳实践</h2><h3 data-v-d5912e05>1. 合理设置裁剪面</h3><ul data-v-d5912e05><li data-v-d5912e05>near 值不要太小（避免 z-fighting）</li><li data-v-d5912e05>far 值不要太大（影响深度精度）</li><li data-v-d5912e05>根据场景大小调整 near 和 far</li></ul><h3 data-v-d5912e05>2. 响应式相机</h3><pre data-v-d5912e05><code data-v-d5912e05>// 窗口大小改变时更新相机
window.addEventListener(&#39;resize&#39;, () =&gt; {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})</code></pre><h3 data-v-d5912e05>3. 相机动画</h3><pre data-v-d5912e05><code data-v-d5912e05>// 使用 Tween.js 实现平滑的相机移动
import { TWEEN } from &#39;three/examples/jsm/libs/tween.module.min.js&#39;

function moveCameraTo(targetPosition) {
  new TWEEN.Tween(camera.position)
    .to(targetPosition, 1000)
    .easing(TWEEN.Easing.Quadratic.Out)
    .start()
}</code></pre></section>`,4))])])}const GS=kt(FS,[["render",VS],["__scopeId","data-v-d5912e05"]]),WS={name:"RendererPage",setup(){const n=et(null),e=et("#222222"),t=et(!0),i=et(!1);let s,r,a,o,l,c;const d=()=>{s=new Et,r=new it(75,400/300,.1,1e3),r.position.set(3,3,5),a=new St({antialias:t.value,alpha:!0}),a.setSize(400,300),a.setClearColor(e.value),a.shadowMap.enabled=i.value,a.shadowMap.type=ds;const _=new Ut(1,1,1),g=new fn({color:4372611});o=new We(_,g),o.castShadow=!0,o.receiveShadow=!0,s.add(o);const m=new Un(10,10),w=new fn({color:16777215}),E=new We(m,w);E.rotation.x=-Math.PI/2,E.position.y=-1,E.receiveShadow=!0,s.add(E),l=new Mi(16777215,1),l.position.set(5,5,5),l.castShadow=!0,l.shadow.mapSize.width=1024,l.shadow.mapSize.height=1024,s.add(l);const b=new Ei(4210752,.3);s.add(b),r.lookAt(o.position),n.value.appendChild(a.domElement),u()},u=()=>{c=requestAnimationFrame(u),o.rotation.x+=.01,o.rotation.y+=.01,a.render(s,r)},h=()=>{a&&a.setClearColor(e.value)},p=()=>{console.log("抗锯齿设置需要重新创建渲染器才能生效")},v=()=>{a&&(a.shadowMap.enabled=i.value)};return Tn(()=>{d()}),gn(()=>{c&&cancelAnimationFrame(c),a&&a.dispose()}),{canvasContainer:n,backgroundColor:e,antialias:t,shadows:i,updateBackgroundColor:h,toggleAntialias:p,toggleShadows:v}}},XS={class:"tutorial-page"},jS={class:"content"},qS={class:"demo-container"},YS={class:"demo-canvas",ref:"canvasContainer"},KS={class:"demo-controls"},$S={class:"control-group"},ZS={class:"control-group"},JS={class:"control-group"};function QS(n,e,t,i,s,r){return Oe(),He("div",XS,[e[18]||(e[18]=f("h1",null,"渲染器 (Renderer)",-1)),f("div",jS,[e[16]||(e[16]=vt(`<section data-v-3a46d7e2><h2 data-v-3a46d7e2>什么是渲染器？</h2><p data-v-3a46d7e2>渲染器（Renderer）是 Three.js 中负责将 3D 场景转换为 2D 图像并显示在屏幕上的组件。它就像一个摄影师，将相机看到的 3D 世界&quot;拍摄&quot;成 2D 照片显示给用户。</p><p data-v-3a46d7e2>Three.js 提供了多种渲染器类型：</p><ul data-v-3a46d7e2><li data-v-3a46d7e2><strong data-v-3a46d7e2>WebGLRenderer</strong>：最常用，基于 WebGL，性能最好</li><li data-v-3a46d7e2><strong data-v-3a46d7e2>CSS3DRenderer</strong>：用于渲染 CSS3D 对象</li><li data-v-3a46d7e2><strong data-v-3a46d7e2>SVGRenderer</strong>：基于 SVG，兼容性好但性能较低</li></ul></section><section data-v-3a46d7e2><h2 data-v-3a46d7e2>WebGL 渲染器</h2><p data-v-3a46d7e2>WebGLRenderer 是最常用的渲染器，它利用 GPU 的强大计算能力来渲染复杂的 3D 场景。</p><h3 data-v-3a46d7e2>创建渲染器</h3><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 基本创建
const renderer = new THREE.WebGLRenderer()

// 带参数创建
const renderer = new THREE.WebGLRenderer({
  canvas: myCanvas,        // 指定 canvas 元素
  antialias: true,         // 启用抗锯齿
  alpha: true,             // 启用透明背景
  preserveDrawingBuffer: true, // 保留绘图缓冲区
  powerPreference: &quot;high-performance&quot; // 性能偏好
})</code></pre><h3 data-v-3a46d7e2>基本设置</h3><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 设置渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight)

// 设置像素比（用于高DPI屏幕）
renderer.setPixelRatio(window.devicePixelRatio)

// 设置清除颜色（背景色）
renderer.setClearColor(0x000000, 1) // 黑色，不透明

// 将渲染器的 canvas 添加到页面
document.body.appendChild(renderer.domElement)</code></pre></section><section data-v-3a46d7e2><h2 data-v-3a46d7e2>渲染器重要属性</h2><h3 data-v-3a46d7e2>1. domElement</h3><p data-v-3a46d7e2>渲染器创建的 canvas 元素，需要添加到 DOM 中：</p><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 获取 canvas 元素
const canvas = renderer.domElement

// 添加到指定容器
document.getElementById(&#39;container&#39;).appendChild(canvas)</code></pre><h3 data-v-3a46d7e2>2. shadowMap - 阴影贴图</h3><p data-v-3a46d7e2>控制阴影的渲染：</p><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 启用阴影
renderer.shadowMap.enabled = true

// 设置阴影类型
renderer.shadowMap.type = THREE.PCFSoftShadowMap // 软阴影</code></pre><h3 data-v-3a46d7e2>3. toneMapping - 色调映射</h3><p data-v-3a46d7e2>控制颜色的显示方式：</p><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 设置色调映射
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.0</code></pre></section>`,3)),f("section",null,[e[9]||(e[9]=f("h2",null,"渲染器重要方法",-1)),e[10]||(e[10]=f("h3",null,"1. render() - 渲染场景",-1)),e[11]||(e[11]=f("pre",null,[f("code",null,`// 基本渲染
renderer.render(scene, camera)

// 渲染到指定目标
renderer.setRenderTarget(renderTarget)
renderer.render(scene, camera)
renderer.setRenderTarget(null) // 恢复到屏幕`)],-1)),e[12]||(e[12]=f("h3",null,"2. setSize() - 设置尺寸",-1)),e[13]||(e[13]=f("pre",null,[f("code",null,`// 设置渲染尺寸
renderer.setSize(width, height)

// 设置尺寸但不更新样式
renderer.setSize(width, height, false)`)],-1)),e[14]||(e[14]=f("h3",null,"3. clear() - 清除缓冲区",-1)),e[15]||(e[15]=f("pre",null,[f("code",null,`// 清除所有缓冲区
renderer.clear()

// 只清除颜色缓冲区
renderer.clear(true, false, false)

// 只清除深度缓冲区
renderer.clear(false, true, false)`)],-1)),f("div",qS,[f("div",YS,null,512),f("div",KS,[f("div",$S,[e[6]||(e[6]=f("label",null,"背景颜色:",-1)),Be(f("input",{type:"color","onUpdate:modelValue":e[0]||(e[0]=a=>i.backgroundColor=a),onInput:e[1]||(e[1]=(...a)=>i.updateBackgroundColor&&i.updateBackgroundColor(...a))},null,544),[[nt,i.backgroundColor]])]),f("div",ZS,[e[7]||(e[7]=f("label",null,"抗锯齿:",-1)),Be(f("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=a=>i.antialias=a),onChange:e[3]||(e[3]=(...a)=>i.toggleAntialias&&i.toggleAntialias(...a))},null,544),[[In,i.antialias]])]),f("div",JS,[e[8]||(e[8]=f("label",null,"阴影:",-1)),Be(f("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=a=>i.shadows=a),onChange:e[5]||(e[5]=(...a)=>i.toggleShadows&&i.toggleShadows(...a))},null,544),[[In,i.shadows]])])])])]),e[17]||(e[17]=vt(`<section data-v-3a46d7e2><h2 data-v-3a46d7e2>性能优化</h2><h3 data-v-3a46d7e2>1. 像素比设置</h3><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 限制像素比，避免在高DPI设备上性能问题
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))</code></pre><h3 data-v-3a46d7e2>2. 渲染目标复用</h3><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 创建可复用的渲染目标
const renderTarget = new THREE.WebGLRenderTarget(512, 512)

// 使用完后不要忘记释放
renderTarget.dispose()</code></pre><h3 data-v-3a46d7e2>3. 条件渲染</h3><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 只在需要时渲染
let needsUpdate = true

function animate() {
  if (needsUpdate) {
    renderer.render(scene, camera)
    needsUpdate = false
  }
  requestAnimationFrame(animate)
}

// 当场景改变时标记需要更新
scene.add(newObject)
needsUpdate = true</code></pre></section><section data-v-3a46d7e2><h2 data-v-3a46d7e2>响应式渲染</h2><p data-v-3a46d7e2>处理窗口大小变化，确保渲染器始终适应屏幕尺寸：</p><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 响应窗口大小变化
function onWindowResize() {
  // 更新相机宽高比
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  
  // 更新渲染器尺寸
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// 监听窗口大小变化
window.addEventListener(&#39;resize&#39;, onWindowResize)

// 初始化时也要调用一次
onWindowResize()</code></pre></section><section data-v-3a46d7e2><h2 data-v-3a46d7e2>常见问题解决</h2><h3 data-v-3a46d7e2>Q: 为什么渲染出来的图像很模糊？</h3><p data-v-3a46d7e2>A: 可能的原因和解决方案：</p><ul data-v-3a46d7e2><li data-v-3a46d7e2>没有设置正确的像素比：<code data-v-3a46d7e2>renderer.setPixelRatio(window.devicePixelRatio)</code></li><li data-v-3a46d7e2>没有启用抗锯齿：<code data-v-3a46d7e2>new THREE.WebGLRenderer({ antialias: true })</code></li><li data-v-3a46d7e2>渲染尺寸与显示尺寸不匹配</li></ul><h3 data-v-3a46d7e2>Q: 如何截取渲染器的图像？</h3><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 渲染后获取图像数据
renderer.render(scene, camera)
const imageData = renderer.domElement.toDataURL(&#39;image/png&#39;)

// 创建下载链接
const link = document.createElement(&#39;a&#39;)
link.download = &#39;screenshot.png&#39;
link.href = imageData
link.click()</code></pre><h3 data-v-3a46d7e2>Q: 如何实现透明背景？</h3><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 创建支持透明的渲染器
const renderer = new THREE.WebGLRenderer({ 
  alpha: true,
  premultipliedAlpha: false 
})

// 设置透明背景
renderer.setClearColor(0x000000, 0) // 透明度为0</code></pre></section><section data-v-3a46d7e2><h2 data-v-3a46d7e2>最佳实践</h2><h3 data-v-3a46d7e2>1. 渲染器初始化</h3><pre data-v-3a46d7e2><code data-v-3a46d7e2>function createRenderer() {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: &quot;high-performance&quot;
  })
  
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  
  return renderer
}</code></pre><h3 data-v-3a46d7e2>2. 内存管理</h3><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 组件销毁时清理渲染器
function cleanup() {
  renderer.dispose()
  renderer.forceContextLoss()
  renderer.domElement.remove()
}</code></pre><h3 data-v-3a46d7e2>3. 错误处理</h3><pre data-v-3a46d7e2><code data-v-3a46d7e2>// 检查 WebGL 支持
if (!THREE.WEBGL.isWebGLAvailable()) {
  const warning = THREE.WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}</code></pre></section>`,4))])])}const ew=kt(WS,[["render",QS],["__scopeId","data-v-3a46d7e2"]]),tw={name:"GeometryPage",setup(){const n=et({}),e=et(null),t={},i={},s={},r=[{name:"BoxGeometry",description:"立方体几何体，最基础的几何体",code:`const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)`},{name:"SphereGeometry",description:"球体几何体，常用于创建球形对象",code:`const geometry = new THREE.SphereGeometry(1, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)`},{name:"CylinderGeometry",description:"圆柱体几何体，可创建圆柱、圆锥等",code:`const geometry = new THREE.CylinderGeometry(1, 1, 2, 32)
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const cylinder = new THREE.Mesh(geometry, material)
scene.add(cylinder)`},{name:"PlaneGeometry",description:"平面几何体，常用作地面或墙面",code:`const geometry = new THREE.PlaneGeometry(2, 2)
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const plane = new THREE.Mesh(geometry, material)
scene.add(plane)`}],a=(d,u)=>{u&&(n.value[d]=u)},o=d=>{e.value=d},l=()=>{e.value=null},c=d=>{const u=n.value[d.name];if(!u)return;const h=new Et,p=new it(75,200/150,.1,1e3),v=new St({antialias:!0,alpha:!0});v.setSize(200,150),v.setClearColor(0,0);let _,g,m;switch(d.name){case"BoxGeometry":_=new Ut(1,1,1),g=new ct({color:65280,wireframe:!0});break;case"SphereGeometry":_=new ln(.8,16,16),g=new ct({color:16711680,wireframe:!0});break;case"CylinderGeometry":_=new Io(.6,.6,1.2,16),g=new ct({color:255,wireframe:!0});break;case"PlaneGeometry":_=new Un(1.5,1.5),g=new ct({color:16776960,wireframe:!0});break}m=new We(_,g),h.add(m),p.position.z=3,u.appendChild(v.domElement);const w=()=>{s[d.name]=requestAnimationFrame(w),m.rotation.x+=.01,m.rotation.y+=.01,v.render(h,p)};w(),t[d.name]=h,i[d.name]=v};return Tn(()=>{setTimeout(()=>{r.forEach(c)},100)}),gn(()=>{Object.values(s).forEach(d=>{d&&cancelAnimationFrame(d)}),Object.values(i).forEach(d=>{d&&d.dispose()})}),{geometries:r,selectedGeometry:e,setGeometryRef:a,showCode:o,closeModal:l}}},nw={class:"tutorial-page"},iw={class:"content"},sw={class:"geometry-grid"},rw=["onClick"];function aw(n,e,t,i,s,r){return Oe(),He("div",nw,[e[7]||(e[7]=f("h1",null,"几何体 (Geometry)",-1)),f("div",iw,[e[5]||(e[5]=f("section",null,[f("h2",null,"什么是几何体？"),f("p",null,'几何体（Geometry）定义了 3D 对象的形状和结构。它包含了顶点位置、面的信息、法向量、纹理坐标等数据。可以把几何体想象成一个物体的"骨架"或"框架"。'),f("p",null,"Three.js 提供了两种几何体类型："),f("ul",null,[f("li",null,[f("strong",null,"BufferGeometry"),we("：现代的、高性能的几何体类型（推荐）")]),f("li",null,[f("strong",null,"Geometry"),we("：传统的几何体类型（已废弃）")])])],-1)),f("section",null,[e[3]||(e[3]=f("h2",null,"内置几何体",-1)),e[4]||(e[4]=f("p",null,"Three.js 提供了丰富的内置几何体，满足大部分常见需求：",-1)),f("div",sw,[(Oe(!0),He(Ht,null,En(i.geometries,a=>(Oe(),He("div",{class:"geometry-item",key:a.name},[f("div",{class:"geometry-preview",ref_for:!0,ref:o=>i.setGeometryRef(a.name,o)},null,512),f("h3",null,ye(a.name),1),f("p",null,ye(a.description),1),f("button",{onClick:o=>i.showCode(a),class:"show-code-btn"},"查看代码",8,rw)]))),128))]),i.selectedGeometry?(Oe(),He("div",{key:0,class:"code-modal",onClick:e[2]||(e[2]=(...a)=>i.closeModal&&i.closeModal(...a))},[f("div",{class:"code-content",onClick:e[1]||(e[1]=i0(()=>{},["stop"]))},[f("h3",null,ye(i.selectedGeometry.name)+" 代码示例",1),f("pre",null,[f("code",null,ye(i.selectedGeometry.code),1)]),f("button",{onClick:e[0]||(e[0]=(...a)=>i.closeModal&&i.closeModal(...a)),class:"close-btn"},"关闭")])])):Hi("",!0)]),e[6]||(e[6]=vt(`<section data-v-b1828fb2><h2 data-v-b1828fb2>几何体的重要属性</h2><h3 data-v-b1828fb2>1. attributes - 属性</h3><p data-v-b1828fb2>包含顶点数据的属性集合：</p><pre data-v-b1828fb2><code data-v-b1828fb2>const geometry = new THREE.BoxGeometry(1, 1, 1)

// 访问顶点位置
console.log(geometry.attributes.position)

// 访问法向量
console.log(geometry.attributes.normal)

// 访问纹理坐标
console.log(geometry.attributes.uv)</code></pre><h3 data-v-b1828fb2>2. index - 索引</h3><p data-v-b1828fb2>定义如何连接顶点形成面：</p><pre data-v-b1828fb2><code data-v-b1828fb2>// 查看索引数据
console.log(geometry.index)

// 获取面的数量
const faceCount = geometry.index.count / 3</code></pre><h3 data-v-b1828fb2>3. boundingBox - 包围盒</h3><p data-v-b1828fb2>几何体的边界信息：</p><pre data-v-b1828fb2><code data-v-b1828fb2>// 计算包围盒
geometry.computeBoundingBox()

// 获取尺寸
const size = new THREE.Vector3()
geometry.boundingBox.getSize(size)
console.log(&#39;几何体尺寸:&#39;, size)</code></pre></section><section data-v-b1828fb2><h2 data-v-b1828fb2>几何体的重要方法</h2><h3 data-v-b1828fb2>1. 计算法向量</h3><pre data-v-b1828fb2><code data-v-b1828fb2>// 自动计算法向量（用于光照）
geometry.computeVertexNormals()</code></pre><h3 data-v-b1828fb2>2. 变换操作</h3><pre data-v-b1828fb2><code data-v-b1828fb2>// 平移
geometry.translate(x, y, z)

// 旋转
geometry.rotateX(Math.PI / 4)
geometry.rotateY(Math.PI / 4)
geometry.rotateZ(Math.PI / 4)

// 缩放
geometry.scale(2, 2, 2)</code></pre><h3 data-v-b1828fb2>3. 合并几何体</h3><pre data-v-b1828fb2><code data-v-b1828fb2>import { mergeBufferGeometries } from &#39;three/examples/jsm/utils/BufferGeometryUtils.js&#39;

const geo1 = new THREE.BoxGeometry(1, 1, 1)
const geo2 = new THREE.SphereGeometry(0.5)

// 合并几何体
const mergedGeometry = mergeBufferGeometries([geo1, geo2])</code></pre></section><section data-v-b1828fb2><h2 data-v-b1828fb2>自定义几何体</h2><p data-v-b1828fb2>当内置几何体无法满足需求时，可以创建自定义几何体：</p><h3 data-v-b1828fb2>创建三角形</h3><pre data-v-b1828fb2><code data-v-b1828fb2>// 创建自定义三角形几何体
function createTriangleGeometry() {
  const geometry = new THREE.BufferGeometry()
  
  // 定义三个顶点
  const vertices = new Float32Array([
    -1.0, -1.0,  0.0,  // 左下
     1.0, -1.0,  0.0,  // 右下
     0.0,  1.0,  0.0   // 顶部
  ])
  
  // 设置位置属性
  geometry.setAttribute(&#39;position&#39;, new THREE.BufferAttribute(vertices, 3))
  
  // 计算法向量
  geometry.computeVertexNormals()
  
  return geometry
}</code></pre><h3 data-v-b1828fb2>创建带索引的几何体</h3><pre data-v-b1828fb2><code data-v-b1828fb2>// 创建四边形（使用索引）
function createQuadGeometry() {
  const geometry = new THREE.BufferGeometry()
  
  // 定义四个顶点
  const vertices = new Float32Array([
    -1, -1, 0,  // 0: 左下
     1, -1, 0,  // 1: 右下
     1,  1, 0,  // 2: 右上
    -1,  1, 0   // 3: 左上
  ])
  
  // 定义两个三角形的索引
  const indices = [
    0, 1, 2,  // 第一个三角形
    2, 3, 0   // 第二个三角形
  ]
  
  geometry.setAttribute(&#39;position&#39;, new THREE.BufferAttribute(vertices, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  
  return geometry
}</code></pre></section><section data-v-b1828fb2><h2 data-v-b1828fb2>几何体优化</h2><h3 data-v-b1828fb2>1. 减少顶点数量</h3><pre data-v-b1828fb2><code data-v-b1828fb2>// 创建低多边形球体
const lowPolySphere = new THREE.SphereGeometry(1, 8, 6) // 较少的分段

// 创建高多边形球体
const highPolySphere = new THREE.SphereGeometry(1, 32, 32) // 较多的分段</code></pre><h3 data-v-b1828fb2>2. 复用几何体</h3><pre data-v-b1828fb2><code data-v-b1828fb2>// 创建一个几何体，多个网格复用
const sharedGeometry = new THREE.BoxGeometry(1, 1, 1)

const mesh1 = new THREE.Mesh(sharedGeometry, material1)
const mesh2 = new THREE.Mesh(sharedGeometry, material2)
const mesh3 = new THREE.Mesh(sharedGeometry, material3)</code></pre><h3 data-v-b1828fb2>3. 内存管理</h3><pre data-v-b1828fb2><code data-v-b1828fb2>// 不再使用时释放几何体
geometry.dispose()

// 检查几何体信息
console.log(&#39;顶点数量:&#39;, geometry.attributes.position.count)
console.log(&#39;面数量:&#39;, geometry.index ? geometry.index.count / 3 : 0)</code></pre></section>`,4))])])}const ow=kt(tw,[["render",aw],["__scopeId","data-v-b1828fb2"]]),lw={name:"MaterialPage",setup(){const n=et({}),e=et(null),t=et(.5),i=et(.5),s=et("#ffffff"),r={},a={},o={};let l,c,d,u;const h=[{name:"MeshBasicMaterial",description:"基础材质，不受光照影响，性能最好",features:["无光照","高性能","简单"]},{name:"MeshLambertMaterial",description:"Lambert材质，支持漫反射光照",features:["漫反射","中等性能","粗糙表面"]},{name:"MeshPhongMaterial",description:"Phong材质，支持镜面反射",features:["镜面反射","光泽效果","光滑表面"]},{name:"MeshStandardMaterial",description:"标准材质，基于物理的渲染",features:["PBR","最真实","金属/粗糙度"]}],p=(m,w)=>{w&&(n.value[m]=w)},v=m=>{const w=n.value[m.name];if(!w)return;const E=new Et,b=new it(75,200/150,.1,1e3),C=new St({antialias:!0,alpha:!0});C.setSize(200,150),C.setClearColor(0,0);const L=new Ei(4210752,.3);E.add(L);const I=new Mi(16777215,1);I.position.set(5,5,5),E.add(I);const D=new ln(.8,32,32);let M;switch(m.name){case"MeshBasicMaterial":M=new ct({color:4372611});break;case"MeshLambertMaterial":M=new fn({color:4372611});break;case"MeshPhongMaterial":M=new cx({color:4372611,shininess:100,specular:1118481});break;case"MeshStandardMaterial":M=new th({color:4372611,metalness:.3,roughness:.4});break}const S=new We(D,M);E.add(S),b.position.z=3,w.appendChild(C.domElement);const P=()=>{o[m.name]=requestAnimationFrame(P),S.rotation.y+=.01,C.render(E,b)};P(),r[m.name]=E,a[m.name]=C},_=()=>{if(!e.value)return;l=new Et;const m=new it(75,400/300,.1,1e3);c=new St({antialias:!0}),c.setSize(400,300);const w=new Ei(4210752,.2);l.add(w);const E=new Mi(16777215,1);E.position.set(5,5,5),l.add(E);const b=new ln(1,64,64);u=new th({color:s.value,metalness:parseFloat(t.value),roughness:parseFloat(i.value)}),d=new We(b,u),l.add(d),m.position.z=4,e.value.appendChild(c.domElement);const C=()=>{o.interactive=requestAnimationFrame(C),d.rotation.y+=.005,c.render(l,m)};C()},g=()=>{u&&(u.color.setHex(s.value.replace("#","0x")),u.metalness=parseFloat(t.value),u.roughness=parseFloat(i.value))};return Tn(()=>{setTimeout(()=>{h.forEach(v),_()},100)}),gn(()=>{Object.values(o).forEach(m=>{m&&cancelAnimationFrame(m)}),Object.values(a).forEach(m=>{m&&m.dispose()}),c&&c.dispose()}),{materials:h,materialRefs:n,interactiveCanvas:e,metalness:t,roughness:i,materialColor:s,setMaterialRef:p,updateMaterial:g}}},cw={class:"tutorial-page"},dw={class:"content"},uw={class:"material-grid"},hw={class:"material-features"},fw={class:"interactive-demo"},pw={class:"demo-container"},mw={class:"demo-canvas",ref:"interactiveCanvas"},gw={class:"demo-controls"},vw={class:"control-group"},_w={class:"control-group"},xw={class:"control-group"};function yw(n,e,t,i,s,r){return Oe(),He("div",cw,[e[18]||(e[18]=f("h1",null,"材质 (Material)",-1)),f("div",dw,[e[15]||(e[15]=vt("<section data-v-fbe49312><h2 data-v-fbe49312>什么是材质？</h2><p data-v-fbe49312>材质（Material）定义了 3D 对象的外观，包括颜色、纹理、反射、透明度等视觉属性。如果说几何体是物体的&quot;骨架&quot;，那么材质就是物体的&quot;皮肤&quot;。</p><p data-v-fbe49312>Three.js 提供了多种材质类型，适用于不同的渲染需求：</p><ul data-v-fbe49312><li data-v-fbe49312><strong data-v-fbe49312>MeshBasicMaterial</strong>：基础材质，不受光照影响</li><li data-v-fbe49312><strong data-v-fbe49312>MeshLambertMaterial</strong>：Lambert材质，漫反射光照</li><li data-v-fbe49312><strong data-v-fbe49312>MeshPhongMaterial</strong>：Phong材质，支持镜面反射</li><li data-v-fbe49312><strong data-v-fbe49312>MeshStandardMaterial</strong>：标准材质，基于物理的渲染</li></ul></section>",1)),f("section",null,[e[6]||(e[6]=f("h2",null,"材质类型对比",-1)),e[7]||(e[7]=f("p",null,"不同材质在光照下的表现效果：",-1)),f("div",uw,[(Oe(!0),He(Ht,null,En(i.materials,a=>(Oe(),He("div",{class:"material-item",key:a.name},[f("div",{class:"material-preview",ref_for:!0,ref:o=>i.setMaterialRef(a.name,o)},null,512),f("h3",null,ye(a.name),1),f("p",null,ye(a.description),1),f("div",hw,[(Oe(!0),He(Ht,null,En(a.features,o=>(Oe(),He("span",{key:o,class:"feature-tag"},ye(o),1))),128))])]))),128))])]),e[16]||(e[16]=vt(`<section data-v-fbe49312><h2 data-v-fbe49312>基础材质 (MeshBasicMaterial)</h2><p data-v-fbe49312>最简单的材质，不受光照影响，始终显示相同的颜色。</p><pre data-v-fbe49312><code data-v-fbe49312>// 创建基础材质
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,        // 红色
  wireframe: false,       // 是否显示线框
  transparent: false,     // 是否透明
  opacity: 1.0,          // 不透明度
  side: THREE.FrontSide  // 渲染面（正面/背面/双面）
})

// 常用属性
material.color.setHex(0x00ff00)  // 改变颜色为绿色
material.wireframe = true        // 切换为线框模式
material.opacity = 0.5           // 设置半透明</code></pre><h3 data-v-fbe49312>适用场景</h3><ul data-v-fbe49312><li data-v-fbe49312>UI元素和图标</li><li data-v-fbe49312>不需要光照的装饰性对象</li><li data-v-fbe49312>调试和原型制作</li><li data-v-fbe49312>性能要求极高的场景</li></ul></section><section data-v-fbe49312><h2 data-v-fbe49312>Lambert材质 (MeshLambertMaterial)</h2><p data-v-fbe49312>支持漫反射的材质，会对光照产生反应，但没有镜面反射效果。</p><pre data-v-fbe49312><code data-v-fbe49312>// 创建Lambert材质
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,           // 基础颜色
  emissive: 0x000000,        // 发光颜色
  emissiveIntensity: 0,      // 发光强度
  map: texture,              // 颜色贴图
  transparent: false,        // 透明度
  opacity: 1.0              // 不透明度
})

// 设置发光效果
material.emissive.setHex(0x444444)
material.emissiveIntensity = 0.2</code></pre><h3 data-v-fbe49312>特点</h3><ul data-v-fbe49312><li data-v-fbe49312>计算简单，性能较好</li><li data-v-fbe49312>适合表现粗糙表面</li><li data-v-fbe49312>支持基本的光照计算</li></ul></section><section data-v-fbe49312><h2 data-v-fbe49312>Phong材质 (MeshPhongMaterial)</h2><p data-v-fbe49312>支持镜面反射的材质，可以创建光滑、有光泽的表面效果。</p><pre data-v-fbe49312><code data-v-fbe49312>// 创建Phong材质
const material = new THREE.MeshPhongMaterial({
  color: 0x0000ff,           // 基础颜色
  specular: 0x111111,        // 镜面反射颜色
  shininess: 100,            // 光泽度
  emissive: 0x000000,        // 发光颜色
  map: diffuseTexture,       // 漫反射贴图
  normalMap: normalTexture,  // 法线贴图
  specularMap: specTexture   // 镜面反射贴图
})

// 调整光泽效果
material.shininess = 30      // 降低光泽度，更粗糙
material.specular.setHex(0xffffff)  // 白色镜面反射</code></pre><h3 data-v-fbe49312>适用场景</h3><ul data-v-fbe49312><li data-v-fbe49312>金属表面</li><li data-v-fbe49312>塑料和陶瓷</li><li data-v-fbe49312>湿润的表面</li><li data-v-fbe49312>需要高光效果的对象</li></ul></section>`,3)),f("section",null,[e[12]||(e[12]=f("h2",null,"标准材质 (MeshStandardMaterial)",-1)),e[13]||(e[13]=f("p",null,"基于物理的渲染材质，提供最真实的光照效果。",-1)),e[14]||(e[14]=f("pre",null,[f("code",null,`// 创建标准材质
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,           // 基础颜色
  metalness: 0.0,            // 金属度 (0=非金属, 1=金属)
  roughness: 0.5,            // 粗糙度 (0=光滑, 1=粗糙)
  map: albedoTexture,        // 反照率贴图
  normalMap: normalTexture,  // 法线贴图
  metalnessMap: metalTexture, // 金属度贴图
  roughnessMap: roughTexture, // 粗糙度贴图
  envMap: environmentMap     // 环境贴图
})

// 调整材质属性
material.metalness = 0.8     // 更像金属
material.roughness = 0.2     // 更光滑`)],-1)),f("div",fw,[e[11]||(e[11]=f("h3",null,"交互式材质调节",-1)),f("div",pw,[f("div",mw,null,512),f("div",gw,[f("div",vw,[e[8]||(e[8]=f("label",null,"金属度 (Metalness):",-1)),Be(f("input",{type:"range",min:"0",max:"1",step:"0.1","onUpdate:modelValue":e[0]||(e[0]=a=>i.metalness=a),onInput:e[1]||(e[1]=(...a)=>i.updateMaterial&&i.updateMaterial(...a))},null,544),[[nt,i.metalness]]),f("span",null,ye(i.metalness),1)]),f("div",_w,[e[9]||(e[9]=f("label",null,"粗糙度 (Roughness):",-1)),Be(f("input",{type:"range",min:"0",max:"1",step:"0.1","onUpdate:modelValue":e[2]||(e[2]=a=>i.roughness=a),onInput:e[3]||(e[3]=(...a)=>i.updateMaterial&&i.updateMaterial(...a))},null,544),[[nt,i.roughness]]),f("span",null,ye(i.roughness),1)]),f("div",xw,[e[10]||(e[10]=f("label",null,"颜色:",-1)),Be(f("input",{type:"color","onUpdate:modelValue":e[4]||(e[4]=a=>i.materialColor=a),onInput:e[5]||(e[5]=(...a)=>i.updateMaterial&&i.updateMaterial(...a))},null,544),[[nt,i.materialColor]])])])])])]),e[17]||(e[17]=vt(`<section data-v-fbe49312><h2 data-v-fbe49312>纹理贴图</h2><p data-v-fbe49312>纹理可以为材质添加丰富的细节和真实感：</p><h3 data-v-fbe49312>1. 颜色贴图 (Color Map)</h3><pre data-v-fbe49312><code data-v-fbe49312>// 加载纹理
const textureLoader = new THREE.TextureLoader()
const colorTexture = textureLoader.load(&#39;path/to/texture.jpg&#39;)

// 应用到材质
const material = new THREE.MeshStandardMaterial({
  map: colorTexture
})

// 纹理设置
colorTexture.wrapS = THREE.RepeatWrapping
colorTexture.wrapT = THREE.RepeatWrapping
colorTexture.repeat.set(2, 2)  // 重复2x2次</code></pre><h3 data-v-fbe49312>2. 法线贴图 (Normal Map)</h3><pre data-v-fbe49312><code data-v-fbe49312>// 法线贴图增加表面细节
const normalTexture = textureLoader.load(&#39;path/to/normal.jpg&#39;)
material.normalMap = normalTexture
material.normalScale.set(1, 1)  // 法线强度</code></pre><h3 data-v-fbe49312>3. 环境贴图 (Environment Map)</h3><pre data-v-fbe49312><code data-v-fbe49312>// 环境贴图提供反射效果
const cubeTextureLoader = new THREE.CubeTextureLoader()
const envMap = cubeTextureLoader.load([
  &#39;px.jpg&#39;, &#39;nx.jpg&#39;,  // 正X, 负X
  &#39;py.jpg&#39;, &#39;ny.jpg&#39;,  // 正Y, 负Y
  &#39;pz.jpg&#39;, &#39;nz.jpg&#39;   // 正Z, 负Z
])

material.envMap = envMap
material.envMapIntensity = 1.0</code></pre></section><section data-v-fbe49312><h2 data-v-fbe49312>材质优化技巧</h2><h3 data-v-fbe49312>1. 材质复用</h3><pre data-v-fbe49312><code data-v-fbe49312>// 创建一个材质，多个对象复用
const sharedMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 })

const mesh1 = new THREE.Mesh(geometry1, sharedMaterial)
const mesh2 = new THREE.Mesh(geometry2, sharedMaterial)
const mesh3 = new THREE.Mesh(geometry3, sharedMaterial)</code></pre><h3 data-v-fbe49312>2. 纹理优化</h3><pre data-v-fbe49312><code data-v-fbe49312>// 设置纹理过滤
texture.minFilter = THREE.LinearMipmapLinearFilter
texture.magFilter = THREE.LinearFilter

// 生成mipmap
texture.generateMipmaps = true

// 设置各向异性过滤
texture.anisotropy = renderer.capabilities.getMaxAnisotropy()</code></pre><h3 data-v-fbe49312>3. 内存管理</h3><pre data-v-fbe49312><code data-v-fbe49312>// 释放材质资源
material.dispose()

// 释放纹理资源
texture.dispose()

// 检查材质是否需要更新
material.needsUpdate = true</code></pre></section><section data-v-fbe49312><h2 data-v-fbe49312>常见问题解决</h2><h3 data-v-fbe49312>Q: 为什么材质看起来很暗？</h3><p data-v-fbe49312>A: 可能的原因：</p><ul data-v-fbe49312><li data-v-fbe49312>场景中没有光源（Lambert、Phong、Standard材质需要光照）</li><li data-v-fbe49312>光照强度不够</li><li data-v-fbe49312>材质颜色过暗</li><li data-v-fbe49312>使用了错误的材质类型</li></ul><h3 data-v-fbe49312>Q: 如何实现透明效果？</h3><pre data-v-fbe49312><code data-v-fbe49312>// 启用透明
material.transparent = true
material.opacity = 0.5

// 注意渲染顺序问题
material.depthWrite = false  // 可能需要禁用深度写入</code></pre><h3 data-v-fbe49312>Q: 纹理显示模糊怎么办？</h3><pre data-v-fbe49312><code data-v-fbe49312>// 检查纹理尺寸（建议使用2的幂次方）
// 512x512, 1024x1024, 2048x2048

// 调整纹理过滤
texture.minFilter = THREE.LinearFilter
texture.magFilter = THREE.LinearFilter</code></pre></section>`,3))])])}const bw=kt(lw,[["render",yw],["__scopeId","data-v-fbe49312"]]),Mw={name:"MeshPage",setup(){const n=et(null),e=et(null),t=ni({x:0,y:0,z:0}),i=ni({x:0,y:0,z:0}),s=ni({x:1,y:1,z:1});let r,a,o,l,c,d,u,h={};const p=()=>{if(!n.value)return;r=new Et;const g=new it(75,500/200,.1,1e3);a=new St({antialias:!0}),a.setSize(500,200);const m=new Ut(1,1,1),w=new ct({color:4372611,wireframe:!0});o=new We(m,w),o.position.x=-1.5;const E=new ct({color:4372611});l=new We(m,E),l.position.x=1.5,r.add(o,l),g.position.z=5,n.value.appendChild(a.domElement);const b=()=>{h.concept=requestAnimationFrame(b),o.rotation.y+=.01,l.rotation.y+=.01,a.render(r,g)};b()},v=()=>{if(!e.value)return;c=new Et;const g=new it(75,400/300,.1,1e3);d=new St({antialias:!0}),d.setSize(400,300);const m=new Uc(10,10);c.add(m);const w=new wp(3);c.add(w);const E=new Ut(1,1,1),b=new ct({color:4372611});u=new We(E,b),c.add(u),g.position.set(5,5,5),g.lookAt(0,0,0),e.value.appendChild(d.domElement);const C=()=>{h.transform=requestAnimationFrame(C),d.render(c,g)};C()},_=()=>{u&&(u.position.set(parseFloat(t.x),parseFloat(t.y),parseFloat(t.z)),u.rotation.set(parseFloat(i.x),parseFloat(i.y),parseFloat(i.z)),u.scale.set(parseFloat(s.x),parseFloat(s.y),parseFloat(s.z)))};return Tn(()=>{setTimeout(()=>{p(),v()},100)}),gn(()=>{Object.values(h).forEach(g=>{g&&cancelAnimationFrame(g)}),a&&a.dispose(),d&&d.dispose()}),{conceptCanvas:n,transformCanvas:e,position:t,rotation:i,scale:s,updateTransform:_,Math}}},Ew={class:"tutorial-page"},Sw={class:"content"},ww={class:"concept-demo"},Tw={class:"demo-canvas",ref:"conceptCanvas"},Aw={class:"transform-demo"},Rw={class:"demo-container"},Cw={class:"demo-canvas",ref:"transformCanvas"},Pw={class:"demo-controls"},Lw={class:"control-section"},Iw={class:"control-group"},Dw={class:"control-group"},Uw={class:"control-group"},Nw={class:"control-section"},Fw={class:"control-group"},Ow={class:"control-group"},Bw={class:"control-group"},Hw={class:"control-section"},kw={class:"control-group"},zw={class:"control-group"},Vw={class:"control-group"};function Gw(n,e,t,i,s,r){return Oe(),He("div",Ew,[e[39]||(e[39]=f("h1",null,"网格 (Mesh)",-1)),f("div",Sw,[f("section",null,[e[19]||(e[19]=f("h2",null,"什么是网格？",-1)),e[20]||(e[20]=f("p",null,"网格（Mesh）是 Three.js 中最重要的对象类型之一，它将几何体（Geometry）和材质（Material）结合在一起，形成一个可以在 3D 场景中显示的完整对象。",-1)),e[21]||(e[21]=f("p",null,"可以把网格理解为：",-1)),e[22]||(e[22]=f("ul",null,[f("li",null,[f("strong",null,"几何体"),we("：定义物体的形状和结构")]),f("li",null,[f("strong",null,"材质"),we("：定义物体的外观和视觉效果")]),f("li",null,[f("strong",null,"网格"),we("：将形状和外观组合成完整的 3D 对象")])],-1)),f("div",ww,[f("div",Tw,null,512),e[18]||(e[18]=f("div",{class:"concept-explanation"},[f("p",null,[f("strong",null,"几何体 + 材质 = 网格")]),f("p",null,"左边是几何体的线框，右边是添加材质后的完整网格")],-1))])]),e[37]||(e[37]=f("section",null,[f("h2",null,"创建网格"),f("p",null,"创建网格需要几何体和材质两个基本要素："),f("pre",null,[f("code",null,`// 1. 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 2. 创建材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// 3. 创建网格
const mesh = new THREE.Mesh(geometry, material)

// 4. 添加到场景
scene.add(mesh)`)]),f("h3",null,"一步创建"),f("pre",null,[f("code",null,`// 直接在构造函数中创建
const mesh = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshLambertMaterial({ color: 0xff0000 })
)`)])],-1)),f("section",null,[e[36]||(e[36]=vt(`<h2 data-v-cc6407f6>网格的重要属性</h2><h3 data-v-cc6407f6>1. position - 位置</h3><p data-v-cc6407f6>控制网格在 3D 空间中的位置：</p><pre data-v-cc6407f6><code data-v-cc6407f6>// 设置位置的不同方法
mesh.position.x = 5
mesh.position.y = 3
mesh.position.z = -2

// 使用 set 方法
mesh.position.set(5, 3, -2)

// 使用 Vector3
mesh.position.copy(new THREE.Vector3(5, 3, -2))</code></pre><h3 data-v-cc6407f6>2. rotation - 旋转</h3><p data-v-cc6407f6>控制网格的旋转角度（以弧度为单位）：</p><pre data-v-cc6407f6><code data-v-cc6407f6>// 绕各轴旋转
mesh.rotation.x = Math.PI / 4  // 45度
mesh.rotation.y = Math.PI / 2  // 90度
mesh.rotation.z = Math.PI      // 180度

// 使用 set 方法
mesh.rotation.set(Math.PI/4, Math.PI/2, 0)

// 旋转顺序
mesh.rotation.order = &#39;YXZ&#39;  // 默认是 &#39;XYZ&#39;</code></pre><h3 data-v-cc6407f6>3. scale - 缩放</h3><p data-v-cc6407f6>控制网格的大小：</p><pre data-v-cc6407f6><code data-v-cc6407f6>// 等比缩放
mesh.scale.setScalar(2)  // 放大2倍

// 不等比缩放
mesh.scale.x = 2  // X轴放大2倍
mesh.scale.y = 0.5  // Y轴缩小一半
mesh.scale.z = 1  // Z轴保持不变

// 使用 set 方法
mesh.scale.set(2, 0.5, 1)</code></pre>`,10)),f("div",Aw,[e[35]||(e[35]=f("h3",null,"变换演示",-1)),f("div",Rw,[f("div",Cw,null,512),f("div",Pw,[f("div",Lw,[e[26]||(e[26]=f("h4",null,"位置",-1)),f("div",Iw,[f("label",null,[e[23]||(e[23]=we("X: ",-1)),f("span",null,ye(i.position.x),1)]),Be(f("input",{type:"range",min:"-3",max:"3",step:"0.1","onUpdate:modelValue":e[0]||(e[0]=a=>i.position.x=a),onInput:e[1]||(e[1]=(...a)=>i.updateTransform&&i.updateTransform(...a))},null,544),[[nt,i.position.x]])]),f("div",Dw,[f("label",null,[e[24]||(e[24]=we("Y: ",-1)),f("span",null,ye(i.position.y),1)]),Be(f("input",{type:"range",min:"-3",max:"3",step:"0.1","onUpdate:modelValue":e[2]||(e[2]=a=>i.position.y=a),onInput:e[3]||(e[3]=(...a)=>i.updateTransform&&i.updateTransform(...a))},null,544),[[nt,i.position.y]])]),f("div",Uw,[f("label",null,[e[25]||(e[25]=we("Z: ",-1)),f("span",null,ye(i.position.z),1)]),Be(f("input",{type:"range",min:"-3",max:"3",step:"0.1","onUpdate:modelValue":e[4]||(e[4]=a=>i.position.z=a),onInput:e[5]||(e[5]=(...a)=>i.updateTransform&&i.updateTransform(...a))},null,544),[[nt,i.position.z]])])]),f("div",Nw,[e[30]||(e[30]=f("h4",null,"旋转",-1)),f("div",Fw,[f("label",null,[e[27]||(e[27]=we("X: ",-1)),f("span",null,ye(Math.round(i.rotation.x*180/Math.PI))+"°",1)]),Be(f("input",{type:"range",min:"0",max:"6.28",step:"0.1","onUpdate:modelValue":e[6]||(e[6]=a=>i.rotation.x=a),onInput:e[7]||(e[7]=(...a)=>i.updateTransform&&i.updateTransform(...a))},null,544),[[nt,i.rotation.x]])]),f("div",Ow,[f("label",null,[e[28]||(e[28]=we("Y: ",-1)),f("span",null,ye(Math.round(i.rotation.y*180/Math.PI))+"°",1)]),Be(f("input",{type:"range",min:"0",max:"6.28",step:"0.1","onUpdate:modelValue":e[8]||(e[8]=a=>i.rotation.y=a),onInput:e[9]||(e[9]=(...a)=>i.updateTransform&&i.updateTransform(...a))},null,544),[[nt,i.rotation.y]])]),f("div",Bw,[f("label",null,[e[29]||(e[29]=we("Z: ",-1)),f("span",null,ye(Math.round(i.rotation.z*180/Math.PI))+"°",1)]),Be(f("input",{type:"range",min:"0",max:"6.28",step:"0.1","onUpdate:modelValue":e[10]||(e[10]=a=>i.rotation.z=a),onInput:e[11]||(e[11]=(...a)=>i.updateTransform&&i.updateTransform(...a))},null,544),[[nt,i.rotation.z]])])]),f("div",Hw,[e[34]||(e[34]=f("h4",null,"缩放",-1)),f("div",kw,[f("label",null,[e[31]||(e[31]=we("X: ",-1)),f("span",null,ye(i.scale.x),1)]),Be(f("input",{type:"range",min:"0.1",max:"3",step:"0.1","onUpdate:modelValue":e[12]||(e[12]=a=>i.scale.x=a),onInput:e[13]||(e[13]=(...a)=>i.updateTransform&&i.updateTransform(...a))},null,544),[[nt,i.scale.x]])]),f("div",zw,[f("label",null,[e[32]||(e[32]=we("Y: ",-1)),f("span",null,ye(i.scale.y),1)]),Be(f("input",{type:"range",min:"0.1",max:"3",step:"0.1","onUpdate:modelValue":e[14]||(e[14]=a=>i.scale.y=a),onInput:e[15]||(e[15]=(...a)=>i.updateTransform&&i.updateTransform(...a))},null,544),[[nt,i.scale.y]])]),f("div",Vw,[f("label",null,[e[33]||(e[33]=we("Z: ",-1)),f("span",null,ye(i.scale.z),1)]),Be(f("input",{type:"range",min:"0.1",max:"3",step:"0.1","onUpdate:modelValue":e[16]||(e[16]=a=>i.scale.z=a),onInput:e[17]||(e[17]=(...a)=>i.updateTransform&&i.updateTransform(...a))},null,544),[[nt,i.scale.z]])])])])])])]),e[38]||(e[38]=vt(`<section data-v-cc6407f6><h2 data-v-cc6407f6>网格的重要方法</h2><h3 data-v-cc6407f6>1. 变换方法</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 平移
mesh.translateX(2)      // 沿X轴移动2个单位
mesh.translateY(-1)     // 沿Y轴移动-1个单位
mesh.translateZ(3)      // 沿Z轴移动3个单位

// 旋转
mesh.rotateX(Math.PI / 4)  // 绕X轴旋转45度
mesh.rotateY(Math.PI / 2)  // 绕Y轴旋转90度
mesh.rotateOnAxis(axis, angle)  // 绕指定轴旋转

// 朝向
mesh.lookAt(target)     // 让网格朝向目标位置</code></pre><h3 data-v-cc6407f6>2. 层级关系</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 添加子对象
const childMesh = new THREE.Mesh(geometry, material)
mesh.add(childMesh)

// 移除子对象
mesh.remove(childMesh)

// 遍历子对象
mesh.traverse((child) =&gt; {
  if (child.isMesh) {
    console.log(&#39;找到网格:&#39;, child.name)
  }
})

// 通过名称查找
const foundChild = mesh.getObjectByName(&#39;childName&#39;)</code></pre><h3 data-v-cc6407f6>3. 世界坐标转换</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 获取世界位置
const worldPosition = new THREE.Vector3()
mesh.getWorldPosition(worldPosition)

// 获取世界旋转
const worldQuaternion = new THREE.Quaternion()
mesh.getWorldQuaternion(worldQuaternion)

// 获取世界缩放
const worldScale = new THREE.Vector3()
mesh.getWorldScale(worldScale)</code></pre></section><section data-v-cc6407f6><h2 data-v-cc6407f6>网格的高级属性</h2><h3 data-v-cc6407f6>1. visible - 可见性</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 隐藏网格
mesh.visible = false

// 显示网格
mesh.visible = true

// 切换可见性
mesh.visible = !mesh.visible</code></pre><h3 data-v-cc6407f6>2. castShadow &amp; receiveShadow - 阴影</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 投射阴影
mesh.castShadow = true

// 接收阴影
mesh.receiveShadow = true

// 注意：需要启用渲染器的阴影功能
renderer.shadowMap.enabled = true</code></pre><h3 data-v-cc6407f6>3. layers - 图层</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 设置图层
mesh.layers.set(1)  // 设置为图层1

// 启用多个图层
mesh.layers.enable(0)  // 启用图层0
mesh.layers.enable(2)  // 启用图层2

// 相机也需要设置对应图层才能看到
camera.layers.enable(1)</code></pre><h3 data-v-cc6407f6>4. userData - 用户数据</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 存储自定义数据
mesh.userData = {
  type: &#39;enemy&#39;,
  health: 100,
  speed: 5
}

// 访问用户数据
console.log(mesh.userData.health)</code></pre></section><section data-v-cc6407f6><h2 data-v-cc6407f6>网格组合和管理</h2><h3 data-v-cc6407f6>1. 使用 Group 组织网格</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 创建组
const group = new THREE.Group()

// 添加多个网格到组
const mesh1 = new THREE.Mesh(geometry1, material1)
const mesh2 = new THREE.Mesh(geometry2, material2)
const mesh3 = new THREE.Mesh(geometry3, material3)

group.add(mesh1, mesh2, mesh3)

// 整体变换组
group.position.set(0, 5, 0)
group.rotation.y = Math.PI / 4

// 添加组到场景
scene.add(group)</code></pre><h3 data-v-cc6407f6>2. 实例化网格 (InstancedMesh)</h3><p data-v-cc6407f6>当需要渲染大量相同的对象时，使用实例化网格可以大幅提升性能：</p><pre data-v-cc6407f6><code data-v-cc6407f6>// 创建实例化网格
const instanceCount = 1000
const instancedMesh = new THREE.InstancedMesh(
  geometry, 
  material, 
  instanceCount
)

// 设置每个实例的变换矩阵
const matrix = new THREE.Matrix4()
for (let i = 0; i &lt; instanceCount; i++) {
  // 随机位置
  const x = (Math.random() - 0.5) * 100
  const y = (Math.random() - 0.5) * 100
  const z = (Math.random() - 0.5) * 100
  
  matrix.setPosition(x, y, z)
  instancedMesh.setMatrixAt(i, matrix)
}

// 更新实例矩阵
instancedMesh.instanceMatrix.needsUpdate = true

scene.add(instancedMesh)</code></pre></section><section data-v-cc6407f6><h2 data-v-cc6407f6>性能优化技巧</h2><h3 data-v-cc6407f6>1. 几何体和材质复用</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 复用几何体和材质
const sharedGeometry = new THREE.BoxGeometry(1, 1, 1)
const sharedMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 })

// 创建多个网格但共享资源
const mesh1 = new THREE.Mesh(sharedGeometry, sharedMaterial)
const mesh2 = new THREE.Mesh(sharedGeometry, sharedMaterial)
const mesh3 = new THREE.Mesh(sharedGeometry, sharedMaterial)</code></pre><h3 data-v-cc6407f6>2. 视锥体剔除</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 启用视锥体剔除（默认启用）
mesh.frustumCulled = true

// 对于总是可见的对象可以禁用
skyboxMesh.frustumCulled = false</code></pre><h3 data-v-cc6407f6>3. 层级细节 (LOD)</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 创建LOD对象
const lod = new THREE.LOD()

// 添加不同细节级别的网格
lod.addLevel(highDetailMesh, 0)    // 0-50单位距离
lod.addLevel(mediumDetailMesh, 50) // 50-100单位距离
lod.addLevel(lowDetailMesh, 100)   // 100+单位距离

scene.add(lod)</code></pre></section><section data-v-cc6407f6><h2 data-v-cc6407f6>常见问题解决</h2><h3 data-v-cc6407f6>Q: 网格不显示怎么办？</h3><p data-v-cc6407f6>A: 检查以下几点：</p><ul data-v-cc6407f6><li data-v-cc6407f6>网格是否添加到场景中</li><li data-v-cc6407f6>相机位置是否正确</li><li data-v-cc6407f6>网格是否在相机的视野范围内</li><li data-v-cc6407f6>材质是否需要光照（Lambert、Phong材质需要光源）</li><li data-v-cc6407f6>网格的 visible 属性是否为 true</li></ul><h3 data-v-cc6407f6>Q: 如何检测鼠标点击网格？</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 使用射线投射
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

function onMouseClick(event) {
  // 计算鼠标位置
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  
  // 设置射线
  raycaster.setFromCamera(mouse, camera)
  
  // 检测相交的对象
  const intersects = raycaster.intersectObjects([mesh])
  
  if (intersects.length &gt; 0) {
    console.log(&#39;点击了网格!&#39;)
  }
}

window.addEventListener(&#39;click&#39;, onMouseClick)</code></pre><h3 data-v-cc6407f6>Q: 如何实现网格动画？</h3><pre data-v-cc6407f6><code data-v-cc6407f6>// 在渲染循环中更新网格属性
function animate() {
  requestAnimationFrame(animate)
  
  // 旋转动画
  mesh.rotation.y += 0.01
  
  // 浮动动画
  mesh.position.y = Math.sin(Date.now() * 0.001) * 2
  
  // 缩放动画
  const scale = 1 + Math.sin(Date.now() * 0.002) * 0.3
  mesh.scale.setScalar(scale)
  
  renderer.render(scene, camera)
}</code></pre></section>`,5))])])}const Ww=kt(Mw,[["render",Gw],["__scopeId","data-v-cc6407f6"]]),Xw={name:"LightsPage",setup(){const n=et({}),e=et(null),t=et(.3),i=et("#404040"),s=et(1),r=ni({x:5,y:5}),a=et(1),o=et("#ff0000"),l=et(!0),c={},d={},u={};let h,p,v,_,g;const m=[{name:"AmbientLight",description:"环境光，均匀照亮所有物体",features:["无方向","无阴影","基础照明"]},{name:"DirectionalLight",description:"方向光，模拟太阳光",features:["平行光线","产生阴影","无衰减"]},{name:"PointLight",description:"点光源，从一点向四周发光",features:["距离衰减","产生阴影","全方向"]},{name:"SpotLight",description:"聚光灯，锥形光束",features:["锥形光束","可调角度","边缘柔和"]}],w=(L,I)=>{I&&(n.value[L]=I)},E=L=>{const I=n.value[L.name];if(!I)return;const D=new Et,M=new it(75,200/150,.1,1e3),S=new St({antialias:!0,alpha:!0});S.setSize(200,150),S.setClearColor(0,0),S.shadowMap.enabled=!0;const P=new ln(.5,32,32),X=new Un(4,4),W=new fn({color:4372611}),$=new fn({color:16777215}),te=new We(P,W);te.position.y=.5,te.castShadow=!0;const q=new We(X,$);q.rotation.x=-Math.PI/2,q.receiveShadow=!0,D.add(te,q);let j;switch(L.name){case"AmbientLight":j=new Ei(4210752,.8);break;case"DirectionalLight":j=new Mi(16777215,1),j.position.set(2,2,2),j.castShadow=!0,j.shadow.mapSize.width=512,j.shadow.mapSize.height=512;break;case"PointLight":j=new ah(16777215,1,10),j.position.set(2,2,2),j.castShadow=!0;break;case"SpotLight":j=new yx(16777215,1,10,Math.PI/6,.3),j.position.set(2,3,2),j.target.position.set(0,0,0),j.castShadow=!0,D.add(j.target);break}D.add(j),M.position.set(3,2,3),M.lookAt(0,0,0),I.appendChild(S.domElement);const z=()=>{u[L.name]=requestAnimationFrame(z),te.rotation.y+=.01,S.render(D,M)};z(),c[L.name]=D,d[L.name]=S},b=()=>{if(!e.value)return;h=new Et;const L=new it(75,500/300,.1,1e3);p=new St({antialias:!0}),p.setSize(500,300),p.shadowMap.enabled=!0,p.shadowMap.type=ds;const I=new ln(.8,32,32),D=new Ut(1,1,1),M=new Un(20,20),S=new fn({color:4372611}),P=new fn({color:16739179}),X=new fn({color:16777215}),W=new We(I,S);W.position.set(-2,1,0),W.castShadow=!0;const $=new We(D,P);$.position.set(2,.5,0),$.castShadow=!0;const te=new We(M,X);te.rotation.x=-Math.PI/2,te.receiveShadow=!0,h.add(W,$,te),v=new Ei(i.value,parseFloat(t.value)),_=new Mi(16777215,parseFloat(s.value)),_.position.set(r.x,r.y,5),_.castShadow=!0,_.shadow.mapSize.width=1024,_.shadow.mapSize.height=1024,g=new ah(o.value,parseFloat(a.value),20),g.position.set(0,3,3),g.castShadow=!0,h.add(v,_,g),L.position.set(8,6,8),L.lookAt(0,0,0),e.value.appendChild(p.domElement);const q=()=>{if(u.interactive=requestAnimationFrame(q),W.rotation.y+=.01,$.rotation.x+=.01,$.rotation.z+=.01,l.value){const j=Date.now()*.001;g.position.x=Math.sin(j)*4,g.position.z=Math.cos(j)*4}p.render(h,L)};q()},C=()=>{v&&(v.color.setHex(i.value.replace("#","0x")),v.intensity=parseFloat(t.value)),_&&(_.intensity=parseFloat(s.value),_.position.set(parseFloat(r.x),parseFloat(r.y),5)),g&&(g.color.setHex(o.value.replace("#","0x")),g.intensity=parseFloat(a.value))};return Tn(()=>{setTimeout(()=>{m.forEach(E),b()},100)}),gn(()=>{Object.values(u).forEach(L=>{L&&cancelAnimationFrame(L)}),Object.values(d).forEach(L=>{L&&L.dispose()}),p&&p.dispose()}),{lightTypes:m,lightRefs:n,interactiveCanvas:e,ambientIntensity:t,ambientColor:i,directionalIntensity:s,directionalPosition:r,pointIntensity:a,pointColor:o,pointLightMoving:l,setLightRef:w,updateLights:C}}},jw={class:"tutorial-page"},qw={class:"content"},Yw={class:"lights-grid"},Kw={class:"light-features"},$w={class:"interactive-demo"},Zw={class:"demo-container"},Jw={class:"demo-canvas",ref:"interactiveCanvas"},Qw={class:"demo-controls"},eT={class:"control-section"},tT={class:"control-group"},nT={class:"control-group"},iT={class:"control-section"},sT={class:"control-group"},rT={class:"control-group"},aT={class:"control-group"},oT={class:"control-section"},lT={class:"control-group"},cT={class:"control-group"},dT={class:"control-group"};function uT(n,e,t,i,s,r){return Oe(),He("div",jw,[e[33]||(e[33]=f("h1",null,"光源 (Lights)",-1)),f("div",qw,[e[30]||(e[30]=vt("<section data-v-7a791fa3><h2 data-v-7a791fa3>什么是光源？</h2><p data-v-7a791fa3>光源（Lights）是 3D 场景中用来照亮物体的重要元素。没有光源，使用 Lambert、Phong 或 Standard 材质的物体将完全看不见。光源不仅影响物体的可见性，还决定了物体的明暗、阴影和整体视觉效果。</p><p data-v-7a791fa3>Three.js 提供了多种光源类型：</p><ul data-v-7a791fa3><li data-v-7a791fa3><strong data-v-7a791fa3>环境光 (AmbientLight)</strong>：均匀照亮所有物体</li><li data-v-7a791fa3><strong data-v-7a791fa3>方向光 (DirectionalLight)</strong>：模拟太阳光，平行光线</li><li data-v-7a791fa3><strong data-v-7a791fa3>点光源 (PointLight)</strong>：从一点向四周发光</li><li data-v-7a791fa3><strong data-v-7a791fa3>聚光灯 (SpotLight)</strong>：锥形光束</li><li data-v-7a791fa3><strong data-v-7a791fa3>半球光 (HemisphereLight)</strong>：模拟天空和地面的光照</li></ul></section>",1)),f("section",null,[e[16]||(e[16]=f("h2",null,"光源类型对比",-1)),e[17]||(e[17]=f("p",null,"不同光源的照明效果：",-1)),f("div",Yw,[(Oe(!0),He(Ht,null,En(i.lightTypes,a=>(Oe(),He("div",{class:"light-item",key:a.name},[f("div",{class:"light-preview",ref_for:!0,ref:o=>i.setLightRef(a.name,o)},null,512),f("h3",null,ye(a.name),1),f("p",null,ye(a.description),1),f("div",Kw,[(Oe(!0),He(Ht,null,En(a.features,o=>(Oe(),He("span",{key:o,class:"feature-tag"},ye(o),1))),128))])]))),128))])]),e[31]||(e[31]=vt(`<section data-v-7a791fa3><h2 data-v-7a791fa3>环境光 (AmbientLight)</h2><p data-v-7a791fa3>环境光均匀地照亮场景中的所有物体，没有方向性，不产生阴影。通常用作基础照明。</p><pre data-v-7a791fa3><code data-v-7a791fa3>// 创建环境光
const ambientLight = new THREE.AmbientLight(
  0x404040,  // 颜色（灰色）
  0.5        // 强度
)

// 添加到场景
scene.add(ambientLight)

// 动态调整
ambientLight.color.setHex(0x404040)  // 改变颜色
ambientLight.intensity = 0.3         // 改变强度</code></pre><h3 data-v-7a791fa3>使用场景</h3><ul data-v-7a791fa3><li data-v-7a791fa3>提供基础照明，避免物体过暗</li><li data-v-7a791fa3>模拟散射光照</li><li data-v-7a791fa3>与其他光源配合使用</li></ul></section><section data-v-7a791fa3><h2 data-v-7a791fa3>方向光 (DirectionalLight)</h2><p data-v-7a791fa3>方向光模拟太阳光，光线平行且有固定方向。可以产生阴影，适合室外场景。</p><pre data-v-7a791fa3><code data-v-7a791fa3>// 创建方向光
const directionalLight = new THREE.DirectionalLight(
  0xffffff,  // 白色光
  1          // 强度
)

// 设置光源位置（实际是方向）
directionalLight.position.set(5, 5, 5)

// 设置目标（光照方向）
directionalLight.target.position.set(0, 0, 0)

// 启用阴影
directionalLight.castShadow = true

// 阴影设置
directionalLight.shadow.mapSize.width = 2048
directionalLight.shadow.mapSize.height = 2048
directionalLight.shadow.camera.near = 0.5
directionalLight.shadow.camera.far = 50

scene.add(directionalLight)</code></pre><h3 data-v-7a791fa3>特点</h3><ul data-v-7a791fa3><li data-v-7a791fa3>光线平行，不会随距离衰减</li><li data-v-7a791fa3>可以产生清晰的阴影</li><li data-v-7a791fa3>适合模拟太阳光</li><li data-v-7a791fa3>性能较好</li></ul></section><section data-v-7a791fa3><h2 data-v-7a791fa3>点光源 (PointLight)</h2><p data-v-7a791fa3>点光源从一个点向四周发光，光线会随距离衰减，类似灯泡。</p><pre data-v-7a791fa3><code data-v-7a791fa3>// 创建点光源
const pointLight = new THREE.PointLight(
  0xffffff,  // 颜色
  1,         // 强度
  100,       // 距离（0表示无限远）
  2          // 衰减系数
)

// 设置位置
pointLight.position.set(10, 10, 10)

// 启用阴影
pointLight.castShadow = true

// 阴影设置
pointLight.shadow.mapSize.width = 1024
pointLight.shadow.mapSize.height = 1024
pointLight.shadow.camera.near = 0.1
pointLight.shadow.camera.far = 100

scene.add(pointLight)</code></pre><h3 data-v-7a791fa3>衰减计算</h3><p data-v-7a791fa3>点光源的强度会根据距离衰减：</p><pre data-v-7a791fa3><code data-v-7a791fa3>// 衰减公式
intensity = lightIntensity / (1 + distance * decay)

// 调整衰减
pointLight.decay = 1  // 线性衰减
pointLight.decay = 2  // 物理正确的平方衰减</code></pre></section><section data-v-7a791fa3><h2 data-v-7a791fa3>聚光灯 (SpotLight)</h2><p data-v-7a791fa3>聚光灯产生锥形光束，可以控制光照范围和边缘柔和度。</p><pre data-v-7a791fa3><code data-v-7a791fa3>// 创建聚光灯
const spotLight = new THREE.SpotLight(
  0xffffff,     // 颜色
  1,            // 强度
  100,          // 距离
  Math.PI / 4,  // 角度（弧度）
  0.5,          // 边缘柔和度
  2             // 衰减系数
)

// 设置位置和目标
spotLight.position.set(10, 10, 10)
spotLight.target.position.set(0, 0, 0)

// 启用阴影
spotLight.castShadow = true

scene.add(spotLight)
scene.add(spotLight.target)  // 别忘了添加目标</code></pre><h3 data-v-7a791fa3>参数说明</h3><ul data-v-7a791fa3><li data-v-7a791fa3><strong data-v-7a791fa3>angle</strong>：光锥的角度，最大值为 Math.PI/2</li><li data-v-7a791fa3><strong data-v-7a791fa3>penumbra</strong>：边缘柔和度，0-1之间</li><li data-v-7a791fa3><strong data-v-7a791fa3>target</strong>：光照目标，决定光的方向</li></ul></section><section data-v-7a791fa3><h2 data-v-7a791fa3>半球光 (HemisphereLight)</h2><p data-v-7a791fa3>半球光模拟天空和地面的光照，提供更自然的环境光效果。</p><pre data-v-7a791fa3><code data-v-7a791fa3>// 创建半球光
const hemisphereLight = new THREE.HemisphereLight(
  0x87CEEB,  // 天空颜色（天蓝色）
  0x8B4513,  // 地面颜色（棕色）
  0.6        // 强度
)

// 设置位置（通常在上方）
hemisphereLight.position.set(0, 50, 0)

scene.add(hemisphereLight)</code></pre><h3 data-v-7a791fa3>优势</h3><ul data-v-7a791fa3><li data-v-7a791fa3>更自然的光照效果</li><li data-v-7a791fa3>性能比多个光源组合更好</li><li data-v-7a791fa3>适合室外场景</li><li data-v-7a791fa3>不产生阴影</li></ul></section>`,5)),f("section",null,[e[29]||(e[29]=f("h2",null,"交互式光源演示",-1)),f("div",$w,[f("div",Zw,[f("div",Jw,null,512),f("div",Qw,[f("div",eT,[e[20]||(e[20]=f("h4",null,"环境光",-1)),f("div",tT,[f("label",null,[e[18]||(e[18]=we("强度: ",-1)),f("span",null,ye(i.ambientIntensity),1)]),Be(f("input",{type:"range",min:"0",max:"1",step:"0.1","onUpdate:modelValue":e[0]||(e[0]=a=>i.ambientIntensity=a),onInput:e[1]||(e[1]=(...a)=>i.updateLights&&i.updateLights(...a))},null,544),[[nt,i.ambientIntensity]])]),f("div",nT,[e[19]||(e[19]=f("label",null,"颜色:",-1)),Be(f("input",{type:"color","onUpdate:modelValue":e[2]||(e[2]=a=>i.ambientColor=a),onInput:e[3]||(e[3]=(...a)=>i.updateLights&&i.updateLights(...a))},null,544),[[nt,i.ambientColor]])])]),f("div",iT,[e[24]||(e[24]=f("h4",null,"方向光",-1)),f("div",sT,[f("label",null,[e[21]||(e[21]=we("强度: ",-1)),f("span",null,ye(i.directionalIntensity),1)]),Be(f("input",{type:"range",min:"0",max:"2",step:"0.1","onUpdate:modelValue":e[4]||(e[4]=a=>i.directionalIntensity=a),onInput:e[5]||(e[5]=(...a)=>i.updateLights&&i.updateLights(...a))},null,544),[[nt,i.directionalIntensity]])]),f("div",rT,[f("label",null,[e[22]||(e[22]=we("X位置: ",-1)),f("span",null,ye(i.directionalPosition.x),1)]),Be(f("input",{type:"range",min:"-10",max:"10",step:"1","onUpdate:modelValue":e[6]||(e[6]=a=>i.directionalPosition.x=a),onInput:e[7]||(e[7]=(...a)=>i.updateLights&&i.updateLights(...a))},null,544),[[nt,i.directionalPosition.x]])]),f("div",aT,[f("label",null,[e[23]||(e[23]=we("Y位置: ",-1)),f("span",null,ye(i.directionalPosition.y),1)]),Be(f("input",{type:"range",min:"1",max:"10",step:"1","onUpdate:modelValue":e[8]||(e[8]=a=>i.directionalPosition.y=a),onInput:e[9]||(e[9]=(...a)=>i.updateLights&&i.updateLights(...a))},null,544),[[nt,i.directionalPosition.y]])])]),f("div",oT,[e[28]||(e[28]=f("h4",null,"点光源",-1)),f("div",lT,[f("label",null,[e[25]||(e[25]=we("强度: ",-1)),f("span",null,ye(i.pointIntensity),1)]),Be(f("input",{type:"range",min:"0",max:"2",step:"0.1","onUpdate:modelValue":e[10]||(e[10]=a=>i.pointIntensity=a),onInput:e[11]||(e[11]=(...a)=>i.updateLights&&i.updateLights(...a))},null,544),[[nt,i.pointIntensity]])]),f("div",cT,[e[26]||(e[26]=f("label",null,"颜色:",-1)),Be(f("input",{type:"color","onUpdate:modelValue":e[12]||(e[12]=a=>i.pointColor=a),onInput:e[13]||(e[13]=(...a)=>i.updateLights&&i.updateLights(...a))},null,544),[[nt,i.pointColor]])]),f("div",dT,[f("label",null,[Be(f("input",{type:"checkbox","onUpdate:modelValue":e[14]||(e[14]=a=>i.pointLightMoving=a),onChange:e[15]||(e[15]=(...a)=>i.updateLights&&i.updateLights(...a))},null,544),[[In,i.pointLightMoving]]),e[27]||(e[27]=we(" 自动移动 ",-1))])])])])])])]),e[32]||(e[32]=vt(`<section data-v-7a791fa3><h2 data-v-7a791fa3>光源优化技巧</h2><h3 data-v-7a791fa3>1. 限制光源数量</h3><p data-v-7a791fa3>过多的光源会严重影响性能，特别是移动设备：</p><pre data-v-7a791fa3><code data-v-7a791fa3>// 检查渲染器支持的最大光源数
console.log(&#39;最大方向光数量:&#39;, renderer.capabilities.maxDirLights)
console.log(&#39;最大点光源数量:&#39;, renderer.capabilities.maxPointLights)
console.log(&#39;最大聚光灯数量:&#39;, renderer.capabilities.maxSpotLights)

// 一般建议：
// - 方向光：1-2个
// - 点光源：2-4个
// - 聚光灯：1-2个</code></pre><h3 data-v-7a791fa3>2. 使用光源辅助器调试</h3><pre data-v-7a791fa3><code data-v-7a791fa3>// 方向光辅助器
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
scene.add(directionalLightHelper)

// 点光源辅助器
const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
scene.add(pointLightHelper)

// 聚光灯辅助器
const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)</code></pre><h3 data-v-7a791fa3>3. 阴影优化</h3><pre data-v-7a791fa3><code data-v-7a791fa3>// 只对重要光源启用阴影
directionalLight.castShadow = true
pointLight.castShadow = false  // 禁用不重要的阴影

// 调整阴影贴图尺寸
light.shadow.mapSize.width = 1024   // 降低分辨率提升性能
light.shadow.mapSize.height = 1024

// 优化阴影相机范围
light.shadow.camera.near = 0.1
light.shadow.camera.far = 25  // 减小范围</code></pre></section><section data-v-7a791fa3><h2 data-v-7a791fa3>常见问题解决</h2><h3 data-v-7a791fa3>Q: 为什么物体看起来很暗？</h3><p data-v-7a791fa3>A: 可能的原因：</p><ul data-v-7a791fa3><li data-v-7a791fa3>没有添加环境光作为基础照明</li><li data-v-7a791fa3>光源强度太低</li><li data-v-7a791fa3>光源位置不合适</li><li data-v-7a791fa3>使用了不受光照影响的材质（MeshBasicMaterial）</li></ul><h3 data-v-7a791fa3>Q: 阴影不显示怎么办？</h3><pre data-v-7a791fa3><code data-v-7a791fa3>// 检查以下设置：
// 1. 启用渲染器阴影
renderer.shadowMap.enabled = true

// 2. 光源投射阴影
light.castShadow = true

// 3. 物体投射阴影
mesh.castShadow = true

// 4. 物体接收阴影
ground.receiveShadow = true</code></pre><h3 data-v-7a791fa3>Q: 如何实现动态光照？</h3><pre data-v-7a791fa3><code data-v-7a791fa3>// 在动画循环中更新光源
function animate() {
  // 移动光源
  pointLight.position.x = Math.sin(Date.now() * 0.001) * 10
  pointLight.position.z = Math.cos(Date.now() * 0.001) * 10
  
  // 改变光源颜色
  const hue = (Date.now() * 0.001) % 1
  pointLight.color.setHSL(hue, 1, 0.5)
  
  // 改变光源强度
  pointLight.intensity = 0.5 + Math.sin(Date.now() * 0.002) * 0.5
  
  renderer.render(scene, camera)
}</code></pre></section>`,2))])])}const hT=kt(Xw,[["render",uT],["__scopeId","data-v-7a791fa3"]]),fT={name:"ShadowsPage",setup(){const n=et(null),e=et(null),t=et({}),i=et("PCFSoftShadowMap"),s=et("1024"),r=ni({x:5,y:8,z:5}),a=et(10),o=et(!1),l={},c={},d={};let u,h,p,v;const _=[{name:"BasicShadowMap",description:"基础阴影，性能最好但边缘锯齿明显",features:["高性能","硬边缘","锯齿明显"]},{name:"PCFShadowMap",description:"PCF阴影，中等性能，边缘较平滑",features:["中等性能","较平滑","标准质量"]},{name:"PCFSoftShadowMap",description:"PCF软阴影，性能较低但效果最好",features:["低性能","软边缘","高质量"]},{name:"VSMShadowMap",description:"VSM阴影，支持半透明但内存消耗大",features:["半透明","高内存","特殊效果"]}],g=(M,S)=>{S&&(t.value[M]=S)},m=()=>{if(!n.value)return;const M=new Et,S=new it(75,400/200,.1,1e3),P=new St({antialias:!0});P.setSize(400,200),P.shadowMap.enabled=!0,P.shadowMap.type=ds;const X=new Un(10,10),W=new fn({color:16777215}),$=new We(X,W);$.rotation.x=-Math.PI/2,$.receiveShadow=!0,M.add($);const te=new Ut(1,1,1),q=new fn({color:4372611}),j=new We(te,q);j.position.y=.5,j.castShadow=!0,M.add(j);const z=new Mi(16777215,1);z.position.set(5,5,5),z.castShadow=!0,z.shadow.mapSize.width=1024,z.shadow.mapSize.height=1024,M.add(z);const he=new Ei(4210752,.3);M.add(he),S.position.set(4,3,4),S.lookAt(0,0,0),n.value.appendChild(P.domElement);const _e=()=>{d.basic=requestAnimationFrame(_e),j.rotation.y+=.01,P.render(M,S)};_e(),l.basic=M,c.basic=P},w=M=>{const S=t.value[M.name];if(!S)return;const P=new Et,X=new it(75,200/150,.1,1e3),W=new St({antialias:!0,alpha:!0});switch(W.setSize(200,150),W.setClearColor(0,0),W.shadowMap.enabled=!0,M.name){case"BasicShadowMap":W.shadowMap.type=Tu;break;case"PCFShadowMap":W.shadowMap.type=ro;break;case"PCFSoftShadowMap":W.shadowMap.type=ds;break;case"VSMShadowMap":W.shadowMap.type=Zn;break}const $=new Un(4,4),te=new fn({color:16777215}),q=new We($,te);q.rotation.x=-Math.PI/2,q.receiveShadow=!0,P.add(q);const j=new ln(.5,32,32),z=new fn({color:4372611}),he=new We(j,z);he.position.y=.5,he.castShadow=!0,P.add(he);const _e=new Mi(16777215,1);_e.position.set(2,3,2),_e.castShadow=!0,_e.shadow.mapSize.width=512,_e.shadow.mapSize.height=512,P.add(_e);const Le=new Ei(4210752,.2);P.add(Le),X.position.set(3,2,3),X.lookAt(0,0,0),S.appendChild(W.domElement);const ke=()=>{d[M.name]=requestAnimationFrame(ke),he.rotation.y+=.01,W.render(P,X)};ke(),l[M.name]=P,c[M.name]=W},E=()=>{if(!e.value)return;u=new Et;const M=new it(75,500/300,.1,1e3);h=new St({antialias:!0}),h.setSize(500,300),h.shadowMap.enabled=!0,h.shadowMap.type=ds;const S=new Un(20,20),P=new fn({color:16777215}),X=new We(S,P);X.rotation.x=-Math.PI/2,X.receiveShadow=!0,u.add(X);const W=[];for(let q=0;q<5;q++){const j=q%2===0?new Ut(1,1,1):new ln(.5,32,32),z=new fn({color:new ze().setHSL(q*.2,.7,.5)}),he=new We(j,z);he.position.set((q-2)*2,.5,0),he.castShadow=!0,W.push(he),u.add(he)}p=new Mi(16777215,1),p.position.set(r.x,r.y,r.z),p.castShadow=!0,p.shadow.mapSize.width=parseInt(s.value),p.shadow.mapSize.height=parseInt(s.value),p.shadow.camera.left=-a.value,p.shadow.camera.right=a.value,p.shadow.camera.top=a.value,p.shadow.camera.bottom=-a.value,p.shadow.camera.near=.1,p.shadow.camera.far=50,u.add(p);const $=new Ei(4210752,.2);u.add($),M.position.set(10,8,10),M.lookAt(0,0,0),e.value.appendChild(h.domElement);const te=()=>{d.interactive=requestAnimationFrame(te),W.forEach((q,j)=>{q.rotation.y+=.01*(j+1)}),h.render(u,M)};te()},b=()=>{if(h){switch(i.value){case"BasicShadowMap":h.shadowMap.type=Tu;break;case"PCFShadowMap":h.shadowMap.type=ro;break;case"PCFSoftShadowMap":h.shadowMap.type=ds;break}h.shadowMap.needsUpdate=!0}},C=()=>{if(p){const M=parseInt(s.value);p.shadow.mapSize.width=M,p.shadow.mapSize.height=M,p.shadow.map?.dispose(),p.shadow.map=null}},L=()=>{p&&p.position.set(parseFloat(r.x),parseFloat(r.y),parseFloat(r.z))},I=()=>{if(p){const M=parseFloat(a.value);p.shadow.camera.left=-M,p.shadow.camera.right=M,p.shadow.camera.top=M,p.shadow.camera.bottom=-M,p.shadow.camera.updateProjectionMatrix()}},D=()=>{if(p)if(o.value){v=new Ox(p,2),u.add(v);const M=new Bx(p.shadow.camera);u.add(M),v.cameraHelper=M}else v&&(u.remove(v),v.cameraHelper&&u.remove(v.cameraHelper),v=null)};return Tn(()=>{setTimeout(()=>{m(),_.forEach(w),E()},100)}),gn(()=>{Object.values(d).forEach(M=>{M&&cancelAnimationFrame(M)}),Object.values(c).forEach(M=>{M&&M.dispose()}),h&&h.dispose()}),{basicShadowCanvas:n,interactiveShadowCanvas:e,shadowRefs:t,shadowTypes:_,shadowType:i,mapSize:s,lightPosition:r,cameraSize:a,showHelper:o,setShadowRef:g,updateShadowType:b,updateMapSize:C,updateLightPosition:L,updateCameraSize:I,toggleHelper:D}}},pT={class:"tutorial-page"},mT={class:"content"},gT={class:"shadow-demo"},vT={class:"demo-canvas",ref:"basicShadowCanvas"},_T={class:"shadow-types"},xT={class:"shadow-features"},yT={class:"interactive-shadow-demo"},bT={class:"demo-container"},MT={class:"demo-canvas",ref:"interactiveShadowCanvas"},ET={class:"demo-controls"},ST={class:"control-section"},wT={class:"control-group"},TT={class:"control-group"},AT={class:"control-section"},RT={class:"control-group"},CT={class:"control-group"},PT={class:"control-group"},LT={class:"control-section"},IT={class:"control-group"},DT={class:"control-group"};function UT(n,e,t,i,s,r){return Oe(),He("div",pT,[e[43]||(e[43]=f("h1",null,"阴影 (Shadows)",-1)),f("div",mT,[f("section",null,[e[15]||(e[15]=f("h2",null,"什么是阴影？",-1)),e[16]||(e[16]=f("p",null,"阴影（Shadows）是 3D 场景中增强真实感的重要元素。它们不仅让物体看起来更立体，还能帮助观察者理解物体之间的空间关系和距离。",-1)),e[17]||(e[17]=f("p",null,"Three.js 中的阴影系统包含三个关键要素：",-1)),e[18]||(e[18]=f("ul",null,[f("li",null,[f("strong",null,"光源"),we("：投射阴影的光源（DirectionalLight、PointLight、SpotLight）")]),f("li",null,[f("strong",null,"投射者"),we("：产生阴影的物体（castShadow = true）")]),f("li",null,[f("strong",null,"接收者"),we("：显示阴影的表面（receiveShadow = true）")])],-1)),f("div",gT,[f("div",vT,null,512),e[14]||(e[14]=f("div",{class:"demo-explanation"},[f("p",null,[f("strong",null,"基础阴影演示")]),f("p",null,"立方体投射阴影，平面接收阴影")],-1))])]),e[41]||(e[41]=vt(`<section data-v-43e9ba15><h2 data-v-43e9ba15>启用阴影系统</h2><p data-v-43e9ba15>要在 Three.js 中使用阴影，需要进行以下设置：</p><h3 data-v-43e9ba15>1. 启用渲染器阴影</h3><pre data-v-43e9ba15><code data-v-43e9ba15>// 启用阴影渲染
renderer.shadowMap.enabled = true

// 设置阴影类型（可选）
renderer.shadowMap.type = THREE.PCFSoftShadowMap  // 软阴影（默认）
// renderer.shadowMap.type = THREE.BasicShadowMap     // 基础阴影
// renderer.shadowMap.type = THREE.PCFShadowMap       // PCF阴影
// renderer.shadowMap.type = THREE.VSMShadowMap       // VSM阴影</code></pre><h3 data-v-43e9ba15>2. 设置光源投射阴影</h3><pre data-v-43e9ba15><code data-v-43e9ba15>// 方向光阴影
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(10, 10, 5)
directionalLight.castShadow = true

// 点光源阴影
const pointLight = new THREE.PointLight(0xffffff, 1, 100)
pointLight.position.set(10, 10, 10)
pointLight.castShadow = true

// 聚光灯阴影
const spotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 4)
spotLight.position.set(10, 10, 10)
spotLight.castShadow = true</code></pre><h3 data-v-43e9ba15>3. 设置物体阴影属性</h3><pre data-v-43e9ba15><code data-v-43e9ba15>// 物体投射阴影
const cube = new THREE.Mesh(geometry, material)
cube.castShadow = true

// 物体接收阴影
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.receiveShadow = true</code></pre></section>`,1)),f("section",null,[e[19]||(e[19]=f("h2",null,"阴影类型对比",-1)),e[20]||(e[20]=f("p",null,"Three.js 提供了多种阴影类型，各有特点：",-1)),f("div",_T,[(Oe(!0),He(Ht,null,En(i.shadowTypes,a=>(Oe(),He("div",{class:"shadow-type-item",key:a.name},[f("div",{class:"shadow-preview",ref_for:!0,ref:o=>i.setShadowRef(a.name,o)},null,512),f("h3",null,ye(a.name),1),f("p",null,ye(a.description),1),f("div",xT,[(Oe(!0),He(Ht,null,En(a.features,o=>(Oe(),He("span",{key:o,class:"feature-tag"},ye(o),1))),128))])]))),128))])]),f("section",null,[e[34]||(e[34]=f("h2",null,"阴影贴图设置",-1)),e[35]||(e[35]=f("p",null,"阴影质量主要由阴影贴图的分辨率决定：",-1)),e[36]||(e[36]=f("h3",null,"阴影贴图尺寸",-1)),e[37]||(e[37]=f("pre",null,[f("code",null,`// 设置阴影贴图分辨率
light.shadow.mapSize.width = 2048   // 宽度
light.shadow.mapSize.height = 2048  // 高度

// 常用分辨率：
// 512x512   - 低质量，高性能
// 1024x1024 - 中等质量
// 2048x2048 - 高质量
// 4096x4096 - 超高质量，性能消耗大`)],-1)),e[38]||(e[38]=f("h3",null,"阴影相机设置",-1)),e[39]||(e[39]=f("p",null,"每个投射阴影的光源都有一个阴影相机，用于渲染阴影贴图：",-1)),e[40]||(e[40]=f("pre",null,[f("code",null,`// 方向光阴影相机（正交相机）
directionalLight.shadow.camera.left = -10
directionalLight.shadow.camera.right = 10
directionalLight.shadow.camera.top = 10
directionalLight.shadow.camera.bottom = -10
directionalLight.shadow.camera.near = 0.1
directionalLight.shadow.camera.far = 50

// 点光源阴影相机（透视相机）
pointLight.shadow.camera.near = 0.1
pointLight.shadow.camera.far = 100
pointLight.shadow.camera.fov = 90

// 聚光灯阴影相机（透视相机）
spotLight.shadow.camera.near = 0.1
spotLight.shadow.camera.far = 100
spotLight.shadow.camera.fov = 45`)],-1)),f("div",yT,[e[33]||(e[33]=f("h3",null,"交互式阴影调节",-1)),f("div",bT,[f("div",MT,null,512),f("div",ET,[f("div",ST,[e[25]||(e[25]=f("h4",null,"阴影设置",-1)),f("div",wT,[e[22]||(e[22]=f("label",null,"阴影类型:",-1)),Be(f("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>i.shadowType=a),onChange:e[1]||(e[1]=(...a)=>i.updateShadowType&&i.updateShadowType(...a))},e[21]||(e[21]=[f("option",{value:"PCFSoftShadowMap"},"PCF软阴影",-1),f("option",{value:"PCFShadowMap"},"PCF阴影",-1),f("option",{value:"BasicShadowMap"},"基础阴影",-1)]),544),[[Js,i.shadowType]])]),f("div",TT,[e[24]||(e[24]=f("label",null,"贴图尺寸:",-1)),Be(f("select",{"onUpdate:modelValue":e[2]||(e[2]=a=>i.mapSize=a),onChange:e[3]||(e[3]=(...a)=>i.updateMapSize&&i.updateMapSize(...a))},e[23]||(e[23]=[f("option",{value:"512"},"512x512",-1),f("option",{value:"1024"},"1024x1024",-1),f("option",{value:"2048"},"2048x2048",-1)]),544),[[Js,i.mapSize]])])]),f("div",AT,[e[29]||(e[29]=f("h4",null,"光源位置",-1)),f("div",RT,[f("label",null,[e[26]||(e[26]=we("X: ",-1)),f("span",null,ye(i.lightPosition.x),1)]),Be(f("input",{type:"range",min:"-10",max:"10",step:"1","onUpdate:modelValue":e[4]||(e[4]=a=>i.lightPosition.x=a),onInput:e[5]||(e[5]=(...a)=>i.updateLightPosition&&i.updateLightPosition(...a))},null,544),[[nt,i.lightPosition.x]])]),f("div",CT,[f("label",null,[e[27]||(e[27]=we("Y: ",-1)),f("span",null,ye(i.lightPosition.y),1)]),Be(f("input",{type:"range",min:"2",max:"15",step:"1","onUpdate:modelValue":e[6]||(e[6]=a=>i.lightPosition.y=a),onInput:e[7]||(e[7]=(...a)=>i.updateLightPosition&&i.updateLightPosition(...a))},null,544),[[nt,i.lightPosition.y]])]),f("div",PT,[f("label",null,[e[28]||(e[28]=we("Z: ",-1)),f("span",null,ye(i.lightPosition.z),1)]),Be(f("input",{type:"range",min:"-10",max:"10",step:"1","onUpdate:modelValue":e[8]||(e[8]=a=>i.lightPosition.z=a),onInput:e[9]||(e[9]=(...a)=>i.updateLightPosition&&i.updateLightPosition(...a))},null,544),[[nt,i.lightPosition.z]])])]),f("div",LT,[e[32]||(e[32]=f("h4",null,"阴影相机",-1)),f("div",IT,[f("label",null,[e[30]||(e[30]=we("范围: ",-1)),f("span",null,ye(i.cameraSize),1)]),Be(f("input",{type:"range",min:"5",max:"20",step:"1","onUpdate:modelValue":e[10]||(e[10]=a=>i.cameraSize=a),onInput:e[11]||(e[11]=(...a)=>i.updateCameraSize&&i.updateCameraSize(...a))},null,544),[[nt,i.cameraSize]])]),f("div",DT,[f("label",null,[Be(f("input",{type:"checkbox","onUpdate:modelValue":e[12]||(e[12]=a=>i.showHelper=a),onChange:e[13]||(e[13]=(...a)=>i.toggleHelper&&i.toggleHelper(...a))},null,544),[[In,i.showHelper]]),e[31]||(e[31]=we(" 显示辅助器 ",-1))])])])])])])]),e[42]||(e[42]=vt(`<section data-v-43e9ba15><h2 data-v-43e9ba15>阴影优化技巧</h2><h3 data-v-43e9ba15>1. 选择合适的阴影类型</h3><ul data-v-43e9ba15><li data-v-43e9ba15><strong data-v-43e9ba15>BasicShadowMap</strong>：性能最好，但边缘锯齿明显</li><li data-v-43e9ba15><strong data-v-43e9ba15>PCFShadowMap</strong>：中等性能，边缘较平滑</li><li data-v-43e9ba15><strong data-v-43e9ba15>PCFSoftShadowMap</strong>：性能较低，但阴影最柔和</li><li data-v-43e9ba15><strong data-v-43e9ba15>VSMShadowMap</strong>：支持半透明阴影，但内存消耗大</li></ul><h3 data-v-43e9ba15>2. 优化阴影贴图尺寸</h3><pre data-v-43e9ba15><code data-v-43e9ba15>// 根据重要性设置不同的贴图尺寸
mainLight.shadow.mapSize.setScalar(2048)      // 主光源高质量
fillLight.shadow.mapSize.setScalar(1024)      // 补光低质量
decorativeLight.shadow.mapSize.setScalar(512) // 装饰光源最低质量</code></pre><h3 data-v-43e9ba15>3. 限制阴影范围</h3><pre data-v-43e9ba15><code data-v-43e9ba15>// 优化方向光阴影相机范围
directionalLight.shadow.camera.left = -5
directionalLight.shadow.camera.right = 5
directionalLight.shadow.camera.top = 5
directionalLight.shadow.camera.bottom = -5
directionalLight.shadow.camera.near = 0.1
directionalLight.shadow.camera.far = 20  // 不要设置过大

// 更新阴影相机
directionalLight.shadow.camera.updateProjectionMatrix()</code></pre><h3 data-v-43e9ba15>4. 选择性启用阴影</h3><pre data-v-43e9ba15><code data-v-43e9ba15>// 只对重要物体启用阴影
importantMesh.castShadow = true
importantMesh.receiveShadow = true

// 远距离或小物体可以禁用阴影
distantMesh.castShadow = false
smallMesh.castShadow = false</code></pre></section><section data-v-43e9ba15><h2 data-v-43e9ba15>常见问题解决</h2><h3 data-v-43e9ba15>Q: 阴影显示不正确或有锯齿？</h3><p data-v-43e9ba15>A: 解决方案：</p><ul data-v-43e9ba15><li data-v-43e9ba15>增加阴影贴图分辨率</li><li data-v-43e9ba15>使用 PCFSoftShadowMap 类型</li><li data-v-43e9ba15>调整阴影相机的 near 和 far 值</li><li data-v-43e9ba15>优化阴影相机的范围设置</li></ul><h3 data-v-43e9ba15>Q: 阴影出现条纹或闪烁？</h3><pre data-v-43e9ba15><code data-v-43e9ba15>// 调整阴影偏移
light.shadow.bias = -0.0001

// 或者调整法线偏移
light.shadow.normalBias = 0.02</code></pre><h3 data-v-43e9ba15>Q: 阴影性能太低？</h3><p data-v-43e9ba15>A: 优化建议：</p><ul data-v-43e9ba15><li data-v-43e9ba15>减少投射阴影的光源数量</li><li data-v-43e9ba15>降低阴影贴图分辨率</li><li data-v-43e9ba15>使用 BasicShadowMap 类型</li><li data-v-43e9ba15>限制阴影相机范围</li><li data-v-43e9ba15>对远距离物体禁用阴影</li></ul><h3 data-v-43e9ba15>Q: 如何实现软阴影效果？</h3><pre data-v-43e9ba15><code data-v-43e9ba15>// 使用软阴影类型
renderer.shadowMap.type = THREE.PCFSoftShadowMap

// 调整光源大小（仅对方向光有效）
directionalLight.shadow.radius = 10

// 或者使用面积光源（需要额外库）
import { RectAreaLight } from &#39;three/examples/jsm/lights/RectAreaLight.js&#39;</code></pre></section><section data-v-43e9ba15><h2 data-v-43e9ba15>高级阴影技术</h2><h3 data-v-43e9ba15>1. 级联阴影贴图 (CSM)</h3><p data-v-43e9ba15>用于大场景的阴影优化，将阴影分为多个层级：</p><pre data-v-43e9ba15><code data-v-43e9ba15>// 需要使用额外的CSM库
import { CSM } from &#39;three/examples/jsm/csm/CSM.js&#39;

const csm = new CSM({
  maxFar: 1000,
  cascades: 4,
  shadowMapSize: 1024,
  lightDirection: new THREE.Vector3(-1, -1, -1).normalize(),
  camera: camera,
  parent: scene
})</code></pre><h3 data-v-43e9ba15>2. 接触阴影</h3><p data-v-43e9ba15>模拟物体与地面接触处的柔和阴影：</p><pre data-v-43e9ba15><code data-v-43e9ba15>// 使用接触阴影后处理
import { ContactShadows } from &#39;three/examples/jsm/objects/ContactShadows.js&#39;

const contactShadows = new ContactShadows(camera, scene, {
  opacity: 0.4,
  scale: 10,
  blur: 2.5,
  far: 4
})</code></pre><h3 data-v-43e9ba15>3. 体积光和光束</h3><p data-v-43e9ba15>创建可见的光束效果：</p><pre data-v-43e9ba15><code data-v-43e9ba15>// 使用体积光
import { VolumetricLight } from &#39;three/examples/jsm/objects/VolumetricLight.js&#39;

const volumetricLight = new VolumetricLight(
  spotLight,
  camera,
  scene,
  renderer
)</code></pre></section>`,3))])])}const NT=kt(fT,[["render",UT],["__scopeId","data-v-43e9ba15"]]),FT={name:"AnimationPage",data(){return{animationSpeed:1,pauseAnimation:!1,keyframeProgress:0,easingType:"easeInOutQuad",basicScene:null,clockScene:null,keyframeScene:null,easingScene:null,animationId:null,keyframeMixer:null,keyframeAction:null}},mounted(){this.$nextTick(()=>{this.initBasicAnimation(),this.initClockAnimation(),this.initKeyframeAnimation(),this.initEasingAnimation()})},beforeUnmount(){this.animationId&&cancelAnimationFrame(this.animationId)},methods:{initBasicAnimation(){const n=this.$refs.basicAnimationCanvas,e=Ye(new Et),t=Ye(new it(75,n.width/n.height,.1,1e3)),i=Ye(new St({canvas:n})),s=Ye(new Ut),r=Ye(new ct({color:4372611,wireframe:!0})),a=Ye(new We(s,r));e.add(a),t.position.z=5;const o=()=>{a.rotation.x+=.01,a.rotation.y+=.01,i.render(e,t),requestAnimationFrame(o)};o()},initClockAnimation(){const n=this.$refs.clockAnimationCanvas,e=Ye(new Et),t=Ye(new it(75,n.width/n.height,.1,1e3)),i=Ye(new St({canvas:n})),s=Ye(new oh),r=[];for(let a=0;a<3;a++){const o=Ye(new Ut(.8,.8,.8)),l=Ye(new ct({color:new ze().setHSL(a*.3,.7,.6)})),c=Ye(new We(o,l));c.position.x=(a-1)*2,e.add(c),r.push(c)}t.position.z=8,this.clockScene={scene:e,camera:t,renderer:i,clock:s,cubes:r},this.animateClockScene()},animateClockScene(){if(!this.clockScene)return;const{scene:n,camera:e,renderer:t,clock:i,cubes:s}=this.clockScene,r=()=>{if(!this.pauseAnimation){const a=i.getElapsedTime();s.forEach((o,l)=>{o.rotation.y=a*this.animationSpeed,o.position.y=Math.sin(a*this.animationSpeed+l)*1.5,o.rotation.x=a*this.animationSpeed*.5})}t.render(n,e),requestAnimationFrame(r)};r()},initKeyframeAnimation(){const n=this.$refs.keyframeCanvas,e=Ye(new Et),t=Ye(new it(75,n.width/n.height,.1,1e3)),i=Ye(new St({canvas:n})),s=Ye(new Ut),r=Ye(new ct({color:16739179})),a=Ye(new We(s,r));e.add(a),t.position.z=8;const o=Ye(new qr(".position",[0,1,2,3,4],[0,0,0,3,0,0,3,3,0,-3,3,0,0,0,0])),l=Ye(new na(".quaternion",[0,1,2,3,4],[0,0,0,1,0,0,.7071,.7071,0,0,1,0,0,0,.7071,-.7071,0,0,0,1])),c=Ye(new Dc("Action",4,[o,l])),d=Ye(new Fx(a)),u=Ye(d.clipAction(c));this.keyframeMixer=d,this.keyframeAction=u,this.keyframeScene={scene:e,camera:t,renderer:i,cube:a,mixer:d,action:u},this.animateKeyframeScene()},animateKeyframeScene(){if(!this.keyframeScene)return;const{scene:n,camera:e,renderer:t,mixer:i}=this.keyframeScene,s=Ye(new oh),r=()=>{const a=s.getDelta();i.update(a),t.render(n,e),requestAnimationFrame(r)};r()},initEasingAnimation(){const n=this.$refs.easingCanvas,e=Ye(new Et),t=Ye(new it(75,n.width/n.height,.1,1e3)),i=Ye(new St({canvas:n})),s=Ye(new ln(.5,32,32)),r=Ye(new ct({color:5164484})),a=Ye(new We(s,r));e.add(a),t.position.z=8,this.easingScene={scene:e,camera:t,renderer:i,sphere:a};const o=()=>{i.render(e,t),requestAnimationFrame(o)};o()},playKeyframeAnimation(){this.keyframeAction&&(this.keyframeAction.reset(),this.keyframeAction.play())},pauseKeyframeAnimation(){this.keyframeAction&&(this.keyframeAction.paused=!this.keyframeAction.paused)},resetKeyframeAnimation(){this.keyframeAction&&(this.keyframeAction.reset(),this.keyframeAction.stop())},playEasingAnimation(){if(!this.easingScene)return;const{sphere:n}=this.easingScene,e={linear:o=>o,easeInQuad:o=>o*o,easeOutQuad:o=>o*(2-o),easeInOutQuad:o=>o<.5?2*o*o:-1+(4-2*o)*o,easeInCubic:o=>o*o*o,easeOutCubic:o=>--o*o*o+1,bounce:o=>o<1/2.75?7.5625*o*o:o<2/2.75?7.5625*(o-=1.5/2.75)*o+.75:o<2.5/2.75?7.5625*(o-=2.25/2.75)*o+.9375:7.5625*(o-=2.625/2.75)*o+.984375,elastic:o=>{if(o===0)return 0;if(o===1)return 1;const l=.3,c=l/4;return-(Math.pow(2,10*(o-=1))*Math.sin((o-c)*(2*Math.PI)/l))}},t=performance.now(),i=2e3,s=-4,r=4,a=()=>{const o=performance.now()-t,l=Math.min(o/i,1),c=e[this.easingType](l);n.position.x=s+(r-s)*c,l<1&&requestAnimationFrame(a)};a()}},watch:{keyframeProgress(n){this.keyframeAction&&(this.keyframeAction.time=n*this.keyframeAction.getClip().duration)}}},OT={class:"tutorial-page"},BT={class:"animation-demo"},HT={class:"demo-canvas"},kT={ref:"basicAnimationCanvas",width:"600",height:"400"},zT={class:"animation-demo"},VT={class:"demo-canvas"},GT={ref:"clockAnimationCanvas",width:"600",height:"400"},WT={class:"demo-controls"},XT={class:"control-group"},jT={class:"control-group"},qT={class:"animation-demo"},YT={class:"demo-canvas"},KT={ref:"keyframeCanvas",width:"600",height:"400"},$T={class:"demo-controls"},ZT={class:"control-group"},JT={class:"control-group"},QT={class:"animation-demo"},eA={class:"demo-canvas"},tA={ref:"easingCanvas",width:"600",height:"400"},nA={class:"demo-controls"},iA={class:"control-group"},sA={class:"control-group"};function rA(n,e,t,i,s,r){return Oe(),He("div",OT,[e[26]||(e[26]=f("h1",null,"动画系统 Animation",-1)),e[27]||(e[27]=f("p",{class:"intro"},"学习Three.js中的动画系统，包括基础动画循环、关键帧动画、动画混合器等核心概念。",-1)),f("section",null,[e[9]||(e[9]=f("h2",null,"基础动画循环",-1)),e[10]||(e[10]=f("p",null,[we("Three.js中最基本的动画是通过"),f("code",null,"requestAnimationFrame"),we("创建的动画循环：")],-1)),f("div",BT,[f("div",HT,[f("canvas",kT,null,512)]),e[8]||(e[8]=f("div",{class:"demo-explanation"},[f("p",null,"这个立方体展示了基础的旋转动画，通过在每一帧中修改对象的rotation属性实现。")],-1))]),e[11]||(e[11]=f("pre",null,[f("code",null,`// 基础动画循环
function animate() {
  requestAnimationFrame(animate);
  
  // 更新对象属性
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  // 渲染场景
  renderer.render(scene, camera);
}

animate(); // 启动动画循环`)],-1))]),f("section",null,[e[14]||(e[14]=f("h2",null,"动画时钟 Clock",-1)),e[15]||(e[15]=f("p",null,[we("使用"),f("code",null,"THREE.Clock"),we("可以获得更精确的时间控制，确保动画在不同帧率下保持一致：")],-1)),f("div",zT,[f("div",VT,[f("canvas",GT,null,512)]),f("div",WT,[f("div",XT,[f("label",null,[e[12]||(e[12]=we("动画速度: ",-1)),f("span",null,ye(s.animationSpeed.toFixed(1)),1)]),Be(f("input",{type:"range","onUpdate:modelValue":e[0]||(e[0]=a=>s.animationSpeed=a),min:"0.1",max:"3",step:"0.1"},null,512),[[nt,s.animationSpeed]])]),f("div",jT,[f("label",null,[Be(f("input",{type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=a=>s.pauseAnimation=a)},null,512),[[In,s.pauseAnimation]]),e[13]||(e[13]=we(" 暂停动画 ",-1))])])])]),e[16]||(e[16]=f("pre",null,[f("code",null,`const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  
  const deltaTime = clock.getDelta(); // 获取时间差
  const elapsedTime = clock.getElapsedTime(); // 获取总时间
  
  // 基于时间的动画
  cube.rotation.y = elapsedTime * speed;
  cube.position.y = Math.sin(elapsedTime * 2) * 2;
  
  renderer.render(scene, camera);
}`)],-1))]),f("section",null,[e[18]||(e[18]=f("h2",null,"关键帧动画 KeyframeTrack",-1)),e[19]||(e[19]=f("p",null,"Three.js提供了强大的关键帧动画系统，可以创建复杂的动画序列：",-1)),f("div",qT,[f("div",YT,[f("canvas",KT,null,512)]),f("div",$T,[f("div",ZT,[f("button",{onClick:e[2]||(e[2]=(...a)=>r.playKeyframeAnimation&&r.playKeyframeAnimation(...a))},"播放关键帧动画"),f("button",{onClick:e[3]||(e[3]=(...a)=>r.pauseKeyframeAnimation&&r.pauseKeyframeAnimation(...a))},"暂停"),f("button",{onClick:e[4]||(e[4]=(...a)=>r.resetKeyframeAnimation&&r.resetKeyframeAnimation(...a))},"重置")]),f("div",JT,[f("label",null,[e[17]||(e[17]=we("动画进度: ",-1)),f("span",null,ye(s.keyframeProgress.toFixed(2)),1)]),Be(f("input",{type:"range","onUpdate:modelValue":e[5]||(e[5]=a=>s.keyframeProgress=a),min:"0",max:"1",step:"0.01"},null,512),[[nt,s.keyframeProgress]])])])]),e[20]||(e[20]=f("pre",null,[f("code",null,`// 创建关键帧轨道
const positionKF = new THREE.VectorKeyframeTrack(
  '.position', 
  [0, 1, 2, 3], // 时间点
  [0, 0, 0,     // 位置1
   2, 0, 0,     // 位置2
   2, 2, 0,     // 位置3
   0, 2, 0]     // 位置4
);

const rotationKF = new THREE.QuaternionKeyframeTrack(
  '.quaternion',
  [0, 1, 2, 3],
  [0, 0, 0, 1,
   0, 0, 0.7071, 0.7071,
   0, 0, 1, 0,
   0, 0, 0.7071, -0.7071]
);

// 创建动画剪辑
const clip = new THREE.AnimationClip('Action', 3, [positionKF, rotationKF]);

// 创建动画混合器
const mixer = new THREE.AnimationMixer(cube);
const action = mixer.clipAction(clip);
action.play();`)],-1))]),f("section",null,[e[23]||(e[23]=f("h2",null,"缓动函数 Easing",-1)),e[24]||(e[24]=f("p",null,"使用缓动函数可以让动画更加自然和有趣：",-1)),f("div",QT,[f("div",eA,[f("canvas",tA,null,512)]),f("div",nA,[f("div",iA,[e[22]||(e[22]=f("label",null,"缓动类型:",-1)),Be(f("select",{"onUpdate:modelValue":e[6]||(e[6]=a=>s.easingType=a)},e[21]||(e[21]=[vt('<option value="linear" data-v-5fe15475>Linear</option><option value="easeInQuad" data-v-5fe15475>Ease In Quad</option><option value="easeOutQuad" data-v-5fe15475>Ease Out Quad</option><option value="easeInOutQuad" data-v-5fe15475>Ease In Out Quad</option><option value="easeInCubic" data-v-5fe15475>Ease In Cubic</option><option value="easeOutCubic" data-v-5fe15475>Ease Out Cubic</option><option value="bounce" data-v-5fe15475>Bounce</option><option value="elastic" data-v-5fe15475>Elastic</option>',8)]),512),[[Js,s.easingType]])]),f("div",sA,[f("button",{onClick:e[7]||(e[7]=(...a)=>r.playEasingAnimation&&r.playEasingAnimation(...a))},"播放缓动动画")])])]),e[25]||(e[25]=f("pre",null,[f("code",null,`// 缓动函数示例
const easingFunctions = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  bounce: t => {
    if (t < 1/2.75) return 7.5625 * t * t;
    if (t < 2/2.75) return 7.5625 * (t -= 1.5/2.75) * t + 0.75;
    if (t < 2.5/2.75) return 7.5625 * (t -= 2.25/2.75) * t + 0.9375;
    return 7.5625 * (t -= 2.625/2.75) * t + 0.984375;
  }
};`)],-1))])])}const aA=kt(FT,[["render",rA],["__scopeId","data-v-5fe15475"]]),Fh={type:"change"},Ed={type:"start"},Ip={type:"end"},Oa=new Lo,Oh=new Bi,oA=Math.cos(70*D_.DEG2RAD),jt=new F,un=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pl=1e-6;class Dp extends Hx{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Xn,this._lastTargetPosition=new F,this._quat=new Xn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lh,this._sphericalDelta=new lh,this._scale=1,this._panOffset=new F,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new F,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cA.bind(this),this._onPointerDown=lA.bind(this),this._onPointerUp=dA.bind(this),this._onContextMenu=vA.bind(this),this._onMouseWheel=fA.bind(this),this._onKeyDown=pA.bind(this),this._onTouchStart=mA.bind(this),this._onTouchMove=gA.bind(this),this._onMouseDown=uA.bind(this),this._onMouseMove=hA.bind(this),this._interceptControlDown=_A.bind(this),this._interceptControlUp=xA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fh),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=jt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Oa.origin.copy(this.object.position),Oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oa.direction))<oA?this.object.lookAt(this.target):(Oh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oa.intersectPlane(Oh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pl||this._lastTargetPosition.distanceToSquared(this.target)>Pl?(this.dispatchEvent(Fh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;jt.copy(s).sub(this.target);let r=jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lA(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function cA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ip),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uA(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=bt.DOLLY;break;case js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}break;case js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Ed)}function hA(n){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fA(n){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(n.preventDefault(),this.dispatchEvent(Ed),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ip))}function pA(n){this.enabled!==!1&&this._handleKeyDown(n)}function mA(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=bt.TOUCH_ROTATE;break;case Ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=bt.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Ed)}function gA(n){switch(this._trackPointer(n),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=bt.NONE}}function vA(n){this.enabled!==!1&&n.preventDefault()}function _A(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xA(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yA={name:"ControlsPage",data(){return{orbitSettings:{enableDamping:!0,autoRotate:!1,autoRotateSpeed:2},fpSettings:{movementSpeed:5,lookSpeed:.05},flySettings:{movementSpeed:1,rollSpeed:.1},trackballSettings:{rotateSpeed:1,zoomSpeed:1.2},transformMode:"translate",transformSettings:{showX:!0,showY:!0,showZ:!0}}},mounted(){this.initOrbitControls(),this.initFirstPersonDemo(),this.initFlyDemo(),this.initTrackballDemo(),this.initTransformDemo()},methods:{initOrbitControls(){const n=this.$refs.orbitCanvas,e=new Et,t=new it(75,n.width/n.height,.1,1e3),i=new St({canvas:n}),s=new Ut,r=new ct({color:4372611}),a=new We(s,r);e.add(a);const o=new Uc(10,10);e.add(o),t.position.set(5,5,5);const l=new Dp(t,n);l.enableDamping=!0,l.dampingFactor=.05;const c=()=>{l.enableDamping=this.orbitSettings.enableDamping,l.autoRotate=this.orbitSettings.autoRotate,l.autoRotateSpeed=this.orbitSettings.autoRotateSpeed,l.update(),i.render(e,t),requestAnimationFrame(c)};c()},initFirstPersonDemo(){const n=this.$refs.firstPersonCanvas,e=new Et,t=new it(75,n.width/n.height,.1,1e3),i=new St({canvas:n});for(let v=0;v<10;v++){const _=new Ut(Math.random()*2+.5,Math.random()*3+1,Math.random()*2+.5),g=new ct({color:new ze().setHSL(Math.random(),.7,.6)}),m=new We(_,g);m.position.set((Math.random()-.5)*20,m.geometry.parameters.height/2,(Math.random()-.5)*20),e.add(m)}const s=new Un(30,30),r=new ct({color:8947848}),a=new We(s,r);a.rotation.x=-Math.PI/2,e.add(a),t.position.set(0,2,5);let o=!1,l=!1,c=!1,d=!1;const u=v=>{switch(v.code){case"KeyW":o=!0;break;case"KeyS":l=!0;break;case"KeyA":c=!0;break;case"KeyD":d=!0;break}},h=v=>{switch(v.code){case"KeyW":o=!1;break;case"KeyS":l=!1;break;case"KeyA":c=!1;break;case"KeyD":d=!1;break}};document.addEventListener("keydown",u),document.addEventListener("keyup",h);const p=()=>{const v=this.fpSettings.movementSpeed*.01;o&&t.translateZ(-v),l&&t.translateZ(v),c&&t.translateX(-v),d&&t.translateX(v),i.render(e,t),requestAnimationFrame(p)};p()},initFlyDemo(){const n=this.$refs.flyCanvas,e=new Et,t=new it(75,n.width/n.height,.1,1e3),i=new St({canvas:n}),s=new Xt,r=1e3,a=new Float32Array(r*3);for(let d=0;d<r*3;d++)a[d]=(Math.random()-.5)*200;s.setAttribute("position",new wn(a,3));const o=new gd({color:16777215,size:2}),l=new xp(s,o);e.add(l),t.position.set(0,0,10);const c=()=>{t.position.z-=this.flySettings.movementSpeed*.1,t.position.z<-100&&(t.position.z=100),i.render(e,t),requestAnimationFrame(c)};c()},initTrackballDemo(){const n=this.$refs.trackballCanvas,e=new Et,t=new it(75,n.width/n.height,.1,1e3),i=new St({canvas:n}),s=new _d(2,1),r=new ct({color:5164484,wireframe:!0}),a=new We(s,r);e.add(a),t.position.set(0,0,8);let o=!1,l=0,c=0;n.addEventListener("mousedown",u=>{o=!0,l=u.clientX,c=u.clientY}),n.addEventListener("mousemove",u=>{if(!o)return;const h=u.clientX-l,p=u.clientY-c;a.rotation.y+=h*.01*this.trackballSettings.rotateSpeed,a.rotation.x+=p*.01*this.trackballSettings.rotateSpeed,l=u.clientX,c=u.clientY}),n.addEventListener("mouseup",()=>{o=!1});const d=()=>{i.render(e,t),requestAnimationFrame(d)};d()},initTransformDemo(){const n=this.$refs.transformCanvas,e=new Et,t=new it(75,n.width/n.height,.1,1e3),i=new St({canvas:n}),s=new ta(1,2,8),r=new ct({color:16739179}),a=new We(s,r);e.add(a);const o=new Uc(10,10);e.add(o),t.position.set(5,5,5),t.lookAt(0,0,0);const l=()=>{i.render(e,t),requestAnimationFrame(l)};l()}}},bA={class:"tutorial-page"},MA={class:"controls-demo"},EA={class:"demo-canvas"},SA={ref:"orbitCanvas",width:"600",height:"400"},wA={class:"demo-controls"},TA={class:"control-group"},AA={class:"control-group"},RA={class:"control-group"},CA={class:"controls-demo"},PA={class:"demo-canvas"},LA={ref:"firstPersonCanvas",width:"600",height:"400"},IA={class:"demo-controls"},DA={class:"control-group"},UA={class:"control-group"},NA={class:"controls-demo"},FA={class:"demo-canvas"},OA={ref:"flyCanvas",width:"600",height:"400"},BA={class:"demo-controls"},HA={class:"control-group"},kA={class:"control-group"},zA={class:"controls-demo"},VA={class:"demo-canvas"},GA={ref:"trackballCanvas",width:"600",height:"400"},WA={class:"demo-controls"},XA={class:"control-group"},jA={class:"control-group"},qA={class:"controls-demo"},YA={class:"demo-canvas"},KA={ref:"transformCanvas",width:"600",height:"400"},$A={class:"demo-controls"},ZA={class:"control-group"},JA={class:"control-group"};function QA(n,e,t,i,s,r){return Oe(),He("div",bA,[e[47]||(e[47]=f("h1",null,"控制器 Controls",-1)),e[48]||(e[48]=f("p",{class:"intro"},"学习Three.js中的各种相机控制器，让用户能够交互式地操作3D场景视角。",-1)),f("section",null,[e[17]||(e[17]=f("h2",null,"轨道控制器 OrbitControls",-1)),e[18]||(e[18]=f("p",null,"最常用的控制器，允许用户围绕目标点旋转、缩放和平移相机：",-1)),f("div",MA,[f("div",EA,[f("canvas",SA,null,512)]),e[16]||(e[16]=vt('<div class="demo-explanation" data-v-7e8bb8f5><p data-v-7e8bb8f5><strong data-v-7e8bb8f5>操作方式：</strong></p><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>🖱️ <strong data-v-7e8bb8f5>左键拖拽</strong>：围绕目标旋转</li><li data-v-7e8bb8f5>🖱️ <strong data-v-7e8bb8f5>右键拖拽</strong>：平移视角</li><li data-v-7e8bb8f5>🎡 <strong data-v-7e8bb8f5>滚轮</strong>：缩放远近</li></ul></div>',1)),f("div",wA,[f("div",TA,[f("label",null,[Be(f("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>s.orbitSettings.enableDamping=a)},null,512),[[In,s.orbitSettings.enableDamping]]),e[13]||(e[13]=we(" 启用阻尼 ",-1))])]),f("div",AA,[f("label",null,[Be(f("input",{type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=a=>s.orbitSettings.autoRotate=a)},null,512),[[In,s.orbitSettings.autoRotate]]),e[14]||(e[14]=we(" 自动旋转 ",-1))])]),f("div",RA,[f("label",null,[e[15]||(e[15]=we("旋转速度: ",-1)),f("span",null,ye(s.orbitSettings.autoRotateSpeed.toFixed(1)),1)]),Be(f("input",{type:"range","onUpdate:modelValue":e[2]||(e[2]=a=>s.orbitSettings.autoRotateSpeed=a),min:"0.5",max:"5",step:"0.1"},null,512),[[nt,s.orbitSettings.autoRotateSpeed]])])])]),e[19]||(e[19]=f("pre",null,[f("code",null,`import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 基本设置
controls.enableDamping = true; // 启用阻尼
controls.dampingFactor = 0.05; // 阻尼系数
controls.screenSpacePanning = false; // 禁用屏幕空间平移

// 限制控制范围
controls.minDistance = 3; // 最小距离
controls.maxDistance = 20; // 最大距离
controls.maxPolarAngle = Math.PI / 2; // 最大极角

// 自动旋转
controls.autoRotate = true;
controls.autoRotateSpeed = 2.0;

// 在动画循环中更新
function animate() {
  controls.update(); // 更新控制器
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}`)],-1))]),f("section",null,[e[23]||(e[23]=f("h2",null,"第一人称控制器 FirstPersonControls",-1)),e[24]||(e[24]=f("p",null,"模拟第一人称视角，适合游戏和虚拟漫游应用：",-1)),f("div",CA,[f("div",PA,[f("canvas",LA,null,512)]),e[22]||(e[22]=vt('<div class="demo-explanation" data-v-7e8bb8f5><p data-v-7e8bb8f5><strong data-v-7e8bb8f5>操作方式：</strong></p><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>⌨️ <strong data-v-7e8bb8f5>WASD</strong>：前后左右移动</li><li data-v-7e8bb8f5>🖱️ <strong data-v-7e8bb8f5>鼠标移动</strong>：转动视角</li><li data-v-7e8bb8f5>⌨️ <strong data-v-7e8bb8f5>QE</strong>：上下移动</li></ul></div>',1)),f("div",IA,[f("div",DA,[f("label",null,[e[20]||(e[20]=we("移动速度: ",-1)),f("span",null,ye(s.fpSettings.movementSpeed.toFixed(1)),1)]),Be(f("input",{type:"range","onUpdate:modelValue":e[3]||(e[3]=a=>s.fpSettings.movementSpeed=a),min:"1",max:"10",step:"0.5"},null,512),[[nt,s.fpSettings.movementSpeed]])]),f("div",UA,[f("label",null,[e[21]||(e[21]=we("鼠标灵敏度: ",-1)),f("span",null,ye(s.fpSettings.lookSpeed.toFixed(2)),1)]),Be(f("input",{type:"range","onUpdate:modelValue":e[4]||(e[4]=a=>s.fpSettings.lookSpeed=a),min:"0.01",max:"0.1",step:"0.01"},null,512),[[nt,s.fpSettings.lookSpeed]])])])]),e[25]||(e[25]=f("pre",null,[f("code",null,`import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';

// 创建第一人称控制器
const controls = new FirstPersonControls(camera, renderer.domElement);

// 基本设置
controls.movementSpeed = 5.0; // 移动速度
controls.lookSpeed = 0.05; // 鼠标灵敏度
controls.lookVertical = true; // 允许垂直查看
controls.constrainVertical = true; // 限制垂直角度
controls.verticalMin = 1.0; // 最小垂直角度
controls.verticalMax = 2.0; // 最大垂直角度

// 在动画循环中更新
const clock = new THREE.Clock();
function animate() {
  const delta = clock.getDelta();
  controls.update(delta); // 需要传入时间差
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}`)],-1))]),f("section",null,[e[29]||(e[29]=f("h2",null,"飞行控制器 FlyControls",-1)),e[30]||(e[30]=f("p",null,"提供完全自由的6DOF（六自由度）飞行控制：",-1)),f("div",NA,[f("div",FA,[f("canvas",OA,null,512)]),e[28]||(e[28]=vt('<div class="demo-explanation" data-v-7e8bb8f5><p data-v-7e8bb8f5><strong data-v-7e8bb8f5>操作方式：</strong></p><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>🖱️ <strong data-v-7e8bb8f5>鼠标移动</strong>：改变飞行方向</li><li data-v-7e8bb8f5>⌨️ <strong data-v-7e8bb8f5>WASD</strong>：前后左右</li><li data-v-7e8bb8f5>⌨️ <strong data-v-7e8bb8f5>RF</strong>：上升下降</li><li data-v-7e8bb8f5>⌨️ <strong data-v-7e8bb8f5>QE</strong>：翻滚</li></ul></div>',1)),f("div",BA,[f("div",HA,[f("label",null,[e[26]||(e[26]=we("移动速度: ",-1)),f("span",null,ye(s.flySettings.movementSpeed.toFixed(1)),1)]),Be(f("input",{type:"range","onUpdate:modelValue":e[5]||(e[5]=a=>s.flySettings.movementSpeed=a),min:"0.1",max:"2",step:"0.1"},null,512),[[nt,s.flySettings.movementSpeed]])]),f("div",kA,[f("label",null,[e[27]||(e[27]=we("翻滚速度: ",-1)),f("span",null,ye(s.flySettings.rollSpeed.toFixed(2)),1)]),Be(f("input",{type:"range","onUpdate:modelValue":e[6]||(e[6]=a=>s.flySettings.rollSpeed=a),min:"0.01",max:"0.2",step:"0.01"},null,512),[[nt,s.flySettings.rollSpeed]])])])]),e[31]||(e[31]=f("pre",null,[f("code",null,`import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';

// 创建飞行控制器
const controls = new FlyControls(camera, renderer.domElement);

// 基本设置
controls.movementSpeed = 1.0; // 移动速度
controls.domElement = renderer.domElement;
controls.rollSpeed = Math.PI / 24; // 翻滚速度
controls.autoForward = false; // 自动前进
controls.dragToLook = false; // 拖拽查看

// 在动画循环中更新
const clock = new THREE.Clock();
function animate() {
  const delta = clock.getDelta();
  controls.update(delta);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}`)],-1))]),f("section",null,[e[35]||(e[35]=f("h2",null,"轨迹球控制器 TrackballControls",-1)),e[36]||(e[36]=f("p",null,"提供类似轨迹球的旋转控制，没有上下限制：",-1)),f("div",zA,[f("div",VA,[f("canvas",GA,null,512)]),e[34]||(e[34]=vt('<div class="demo-explanation" data-v-7e8bb8f5><p data-v-7e8bb8f5><strong data-v-7e8bb8f5>操作方式：</strong></p><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>🖱️ <strong data-v-7e8bb8f5>左键拖拽</strong>：自由旋转（无限制）</li><li data-v-7e8bb8f5>🖱️ <strong data-v-7e8bb8f5>中键拖拽</strong>：缩放</li><li data-v-7e8bb8f5>🖱️ <strong data-v-7e8bb8f5>右键拖拽</strong>：平移</li></ul></div>',1)),f("div",WA,[f("div",XA,[f("label",null,[e[32]||(e[32]=we("旋转速度: ",-1)),f("span",null,ye(s.trackballSettings.rotateSpeed.toFixed(1)),1)]),Be(f("input",{type:"range","onUpdate:modelValue":e[7]||(e[7]=a=>s.trackballSettings.rotateSpeed=a),min:"0.5",max:"3",step:"0.1"},null,512),[[nt,s.trackballSettings.rotateSpeed]])]),f("div",jA,[f("label",null,[e[33]||(e[33]=we("缩放速度: ",-1)),f("span",null,ye(s.trackballSettings.zoomSpeed.toFixed(1)),1)]),Be(f("input",{type:"range","onUpdate:modelValue":e[8]||(e[8]=a=>s.trackballSettings.zoomSpeed=a),min:"0.5",max:"3",step:"0.1"},null,512),[[nt,s.trackballSettings.zoomSpeed]])])])]),e[37]||(e[37]=f("pre",null,[f("code",null,`import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

// 创建轨迹球控制器
const controls = new TrackballControls(camera, renderer.domElement);

// 基本设置
controls.rotateSpeed = 1.0; // 旋转速度
controls.zoomSpeed = 1.2; // 缩放速度
controls.panSpeed = 0.8; // 平移速度
controls.noZoom = false; // 允许缩放
controls.noPan = false; // 允许平移
controls.staticMoving = true; // 静态移动
controls.dynamicDampingFactor = 0.3; // 动态阻尼

// 在动画循环中更新
function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}`)],-1))]),f("section",null,[e[44]||(e[44]=f("h2",null,"变换控制器 TransformControls",-1)),e[45]||(e[45]=f("p",null,"用于直接操作3D对象的位置、旋转和缩放：",-1)),f("div",qA,[f("div",YA,[f("canvas",KA,null,512)]),e[43]||(e[43]=vt('<div class="demo-explanation" data-v-7e8bb8f5><p data-v-7e8bb8f5><strong data-v-7e8bb8f5>操作方式：</strong></p><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>🎯 <strong data-v-7e8bb8f5>点击对象</strong>：选择要变换的对象</li><li data-v-7e8bb8f5>🔄 <strong data-v-7e8bb8f5>拖拽轴线</strong>：沿轴移动/旋转/缩放</li><li data-v-7e8bb8f5>⌨️ <strong data-v-7e8bb8f5>G/R/S</strong>：切换移动/旋转/缩放模式</li></ul></div>',1)),f("div",$A,[f("div",ZA,[e[39]||(e[39]=f("label",null,"变换模式:",-1)),Be(f("select",{"onUpdate:modelValue":e[9]||(e[9]=a=>s.transformMode=a)},e[38]||(e[38]=[f("option",{value:"translate"},"移动 (G)",-1),f("option",{value:"rotate"},"旋转 (R)",-1),f("option",{value:"scale"},"缩放 (S)",-1)]),512),[[Js,s.transformMode]])]),f("div",JA,[f("label",null,[Be(f("input",{type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=a=>s.transformSettings.showX=a)},null,512),[[In,s.transformSettings.showX]]),e[40]||(e[40]=we(" X轴 ",-1))]),f("label",null,[Be(f("input",{type:"checkbox","onUpdate:modelValue":e[11]||(e[11]=a=>s.transformSettings.showY=a)},null,512),[[In,s.transformSettings.showY]]),e[41]||(e[41]=we(" Y轴 ",-1))]),f("label",null,[Be(f("input",{type:"checkbox","onUpdate:modelValue":e[12]||(e[12]=a=>s.transformSettings.showZ=a)},null,512),[[In,s.transformSettings.showZ]]),e[42]||(e[42]=we(" Z轴 ",-1))])])])]),e[46]||(e[46]=f("pre",null,[f("code",null,`import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

// 创建变换控制器
const transformControls = new TransformControls(camera, renderer.domElement);
scene.add(transformControls);

// 设置要控制的对象
transformControls.attach(cube);

// 设置变换模式
transformControls.setMode('translate'); // 'translate', 'rotate', 'scale'

// 设置显示的轴
transformControls.showX = true;
transformControls.showY = true;
transformControls.showZ = true;

// 事件监听
transformControls.addEventListener('change', () => {
  renderer.render(scene, camera);
});

transformControls.addEventListener('dragging-changed', (event) => {
  orbitControls.enabled = !event.value; // 拖拽时禁用轨道控制
});

// 键盘快捷键
window.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyG':
      transformControls.setMode('translate');
      break;
    case 'KeyR':
      transformControls.setMode('rotate');
      break;
    case 'KeyS':
      transformControls.setMode('scale');
      break;
  }
});`)],-1))]),e[49]||(e[49]=vt(`<section data-v-7e8bb8f5><h2 data-v-7e8bb8f5>控制器对比</h2><div class="controls-comparison" data-v-7e8bb8f5><div class="comparison-item" data-v-7e8bb8f5><h3 data-v-7e8bb8f5>🌍 OrbitControls</h3><div class="pros-cons" data-v-7e8bb8f5><div class="pros" data-v-7e8bb8f5><h4 data-v-7e8bb8f5>优点</h4><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>易于使用</li><li data-v-7e8bb8f5>适合展示模型</li><li data-v-7e8bb8f5>支持阻尼效果</li><li data-v-7e8bb8f5>可限制旋转范围</li></ul></div><div class="cons" data-v-7e8bb8f5><h4 data-v-7e8bb8f5>缺点</h4><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>围绕固定点旋转</li><li data-v-7e8bb8f5>不适合第一人称</li></ul></div></div><div class="use-cases" data-v-7e8bb8f5><strong data-v-7e8bb8f5>适用场景：</strong>产品展示、建筑可视化、模型查看器 </div></div><div class="comparison-item" data-v-7e8bb8f5><h3 data-v-7e8bb8f5>🎮 FirstPersonControls</h3><div class="pros-cons" data-v-7e8bb8f5><div class="pros" data-v-7e8bb8f5><h4 data-v-7e8bb8f5>优点</h4><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>真实的第一人称体验</li><li data-v-7e8bb8f5>支持键盘移动</li><li data-v-7e8bb8f5>适合游戏开发</li></ul></div><div class="cons" data-v-7e8bb8f5><h4 data-v-7e8bb8f5>缺点</h4><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>学习成本较高</li><li data-v-7e8bb8f5>需要更多配置</li></ul></div></div><div class="use-cases" data-v-7e8bb8f5><strong data-v-7e8bb8f5>适用场景：</strong>游戏、虚拟现实、室内漫游 </div></div><div class="comparison-item" data-v-7e8bb8f5><h3 data-v-7e8bb8f5>✈️ FlyControls</h3><div class="pros-cons" data-v-7e8bb8f5><div class="pros" data-v-7e8bb8f5><h4 data-v-7e8bb8f5>优点</h4><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>完全自由的6DOF</li><li data-v-7e8bb8f5>适合空间导航</li><li data-v-7e8bb8f5>支持翻滚动作</li></ul></div><div class="cons" data-v-7e8bb8f5><h4 data-v-7e8bb8f5>缺点</h4><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>操作复杂</li><li data-v-7e8bb8f5>容易迷失方向</li></ul></div></div><div class="use-cases" data-v-7e8bb8f5><strong data-v-7e8bb8f5>适用场景：</strong>太空模拟、飞行模拟、科学可视化 </div></div><div class="comparison-item" data-v-7e8bb8f5><h3 data-v-7e8bb8f5>🔄 TrackballControls</h3><div class="pros-cons" data-v-7e8bb8f5><div class="pros" data-v-7e8bb8f5><h4 data-v-7e8bb8f5>优点</h4><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>无旋转限制</li><li data-v-7e8bb8f5>直观的操作</li><li data-v-7e8bb8f5>适合精确控制</li></ul></div><div class="cons" data-v-7e8bb8f5><h4 data-v-7e8bb8f5>缺点</h4><ul data-v-7e8bb8f5><li data-v-7e8bb8f5>可能产生翻转</li><li data-v-7e8bb8f5>缺少阻尼效果</li></ul></div></div><div class="use-cases" data-v-7e8bb8f5><strong data-v-7e8bb8f5>适用场景：</strong>CAD软件、3D建模、精确操作 </div></div></div></section><section data-v-7e8bb8f5><h2 data-v-7e8bb8f5>自定义控制器</h2><p data-v-7e8bb8f5>创建自己的控制器来满足特定需求：</p><pre data-v-7e8bb8f5><code data-v-7e8bb8f5>class CustomControls {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;
    this.isMouseDown = false;
    this.mouseX = 0;
    this.mouseY = 0;
    
    this.bindEvents();
  }
  
  bindEvents() {
    this.domElement.addEventListener(&#39;mousedown&#39;, this.onMouseDown.bind(this));
    this.domElement.addEventListener(&#39;mousemove&#39;, this.onMouseMove.bind(this));
    this.domElement.addEventListener(&#39;mouseup&#39;, this.onMouseUp.bind(this));
    this.domElement.addEventListener(&#39;wheel&#39;, this.onWheel.bind(this));
  }
  
  onMouseDown(event) {
    this.isMouseDown = true;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  
  onMouseMove(event) {
    if (!this.isMouseDown) return;
    
    const deltaX = event.clientX - this.mouseX;
    const deltaY = event.clientY - this.mouseY;
    
    // 自定义旋转逻辑
    this.camera.rotation.y -= deltaX * 0.01;
    this.camera.rotation.x -= deltaY * 0.01;
    
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  
  onMouseUp() {
    this.isMouseDown = false;
  }
  
  onWheel(event) {
    // 自定义缩放逻辑
    const scale = event.deltaY &gt; 0 ? 1.1 : 0.9;
    this.camera.position.multiplyScalar(scale);
  }
  
  update() {
    // 每帧更新逻辑
  }
}</code></pre></section>`,2))])}const eR=kt(yA,[["render",QA],["__scopeId","data-v-7e8bb8f5"]]),tR={name:"CubeExample",setup(){const n=et(null),e=et(.01),t=et("#00ff00"),i=et(!1),s=et(!0);let r,a,o,l,c;const d=()=>{r=new Et,r.background=new ze(2236962),a=new it(75,600/400,.1,1e3),a.position.z=5,o=new St({antialias:!0}),o.setSize(600,400);const m=new Ut(1,1,1),w=new ct({color:t.value,wireframe:i.value});l=new We(m,w),r.add(l),n.value.appendChild(o.domElement),u()},u=()=>{s.value&&(c=requestAnimationFrame(u),l.rotation.x+=parseFloat(e.value),l.rotation.y+=parseFloat(e.value),o.render(r,a))},h=()=>{},p=()=>{l&&l.material.color.setHex(t.value.replace("#","0x"))},v=()=>{l&&(l.material.wireframe=i.value)},_=()=>{a.position.set(0,0,5),a.lookAt(0,0,0)},g=()=>{s.value=!s.value,s.value?u():cancelAnimationFrame(c)};return Tn(()=>{d()}),gn(()=>{c&&cancelAnimationFrame(c),o&&o.dispose()}),{canvasContainer:n,rotationSpeed:e,cubeColor:t,wireframe:i,isAnimating:s,updateRotationSpeed:h,updateColor:p,updateWireframe:v,resetCamera:_,toggleAnimation:g}}},nR={class:"example-page"},iR={class:"example-content"},sR={class:"example-demo"},rR={class:"canvas-container",ref:"canvasContainer"},aR={class:"controls"},oR={class:"control-group"},lR={class:"control-group"},cR={class:"control-group"},dR={class:"control-group"};function uR(n,e,t,i,s,r){return Oe(),He("div",nR,[e[12]||(e[12]=f("h1",null,"旋转立方体示例",-1)),f("div",iR,[f("div",sR,[f("div",rR,null,512),f("div",aR,[f("div",oR,[e[8]||(e[8]=f("label",null,"旋转速度:",-1)),Be(f("input",{type:"range",min:"0",max:"0.05",step:"0.005","onUpdate:modelValue":e[0]||(e[0]=a=>i.rotationSpeed=a),onInput:e[1]||(e[1]=(...a)=>i.updateRotationSpeed&&i.updateRotationSpeed(...a))},null,544),[[nt,i.rotationSpeed]]),f("span",null,ye(i.rotationSpeed),1)]),f("div",lR,[e[9]||(e[9]=f("label",null,"立方体颜色:",-1)),Be(f("input",{type:"color","onUpdate:modelValue":e[2]||(e[2]=a=>i.cubeColor=a),onInput:e[3]||(e[3]=(...a)=>i.updateColor&&i.updateColor(...a))},null,544),[[nt,i.cubeColor]])]),f("div",cR,[e[10]||(e[10]=f("label",null,"线框模式:",-1)),Be(f("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=a=>i.wireframe=a),onChange:e[5]||(e[5]=(...a)=>i.updateWireframe&&i.updateWireframe(...a))},null,544),[[In,i.wireframe]])]),f("div",dR,[f("button",{onClick:e[6]||(e[6]=(...a)=>i.resetCamera&&i.resetCamera(...a))},"重置相机"),f("button",{onClick:e[7]||(e[7]=(...a)=>i.toggleAnimation&&i.toggleAnimation(...a))},ye(i.isAnimating?"暂停":"播放"),1)])])]),e[11]||(e[11]=vt(`<div class="code-section" data-v-69b591fa><h2 data-v-69b591fa>完整代码</h2><pre data-v-69b591fa><code data-v-69b591fa>import * as THREE from &#39;three&#39;

// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
)

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 创建立方体几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 创建材质
const material = new THREE.MeshBasicMaterial({ 
  color: 0x00ff00,
  wireframe: false
})

// 创建网格
const cube = new THREE.Mesh(geometry, material)

// 添加到场景
scene.add(cube)

// 设置相机位置
camera.position.z = 5

// 动画循环
function animate() {
  requestAnimationFrame(animate)
  
  // 旋转立方体
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  
  // 渲染场景
  renderer.render(scene, camera)
}

// 开始动画
animate()

// 响应窗口大小变化
window.addEventListener(&#39;resize&#39;, () =&gt; {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})</code></pre></div><div class="explanation-section" data-v-69b591fa><h2 data-v-69b591fa>代码解析</h2><div class="explanation-item" data-v-69b591fa><h3 data-v-69b591fa>1. 创建基础元素</h3><p data-v-69b591fa>首先创建场景、相机和渲染器这三个基本元素。场景用来容纳所有3D对象，相机定义观察视角，渲染器负责将3D场景渲染到2D屏幕上。</p></div><div class="explanation-item" data-v-69b591fa><h3 data-v-69b591fa>2. 创建立方体</h3><p data-v-69b591fa>使用 BoxGeometry 创建立方体的几何形状，用 MeshBasicMaterial 创建材质，然后将它们组合成 Mesh 对象。</p></div><div class="explanation-item" data-v-69b591fa><h3 data-v-69b591fa>3. 动画循环</h3><p data-v-69b591fa>使用 requestAnimationFrame 创建动画循环，在每一帧中更新立方体的旋转角度，然后重新渲染场景。</p></div><div class="explanation-item" data-v-69b591fa><h3 data-v-69b591fa>4. 响应式设计</h3><p data-v-69b591fa>监听窗口大小变化事件，动态调整相机的宽高比和渲染器的尺寸，确保在不同屏幕尺寸下都能正常显示。</p></div></div><div class="tips-section" data-v-69b591fa><h2 data-v-69b591fa>扩展建议</h2><div class="tip-item" data-v-69b591fa><h3 data-v-69b591fa>🎨 材质变化</h3><p data-v-69b591fa>尝试使用不同的材质类型，如 MeshLambertMaterial 或 MeshPhongMaterial，并添加光源来看看效果。</p></div><div class="tip-item" data-v-69b591fa><h3 data-v-69b591fa>🎮 交互控制</h3><p data-v-69b591fa>添加鼠标或键盘控制，让用户可以手动旋转立方体或改变相机位置。</p></div><div class="tip-item" data-v-69b591fa><h3 data-v-69b591fa>🌈 多个立方体</h3><p data-v-69b591fa>创建多个不同颜色和大小的立方体，形成更复杂的场景。</p></div><div class="tip-item" data-v-69b591fa><h3 data-v-69b591fa>✨ 添加光效</h3><p data-v-69b591fa>添加环境光和点光源，使用支持光照的材质来创建更真实的视觉效果。</p></div></div>`,3))])])}const hR=kt(tR,[["render",uR],["__scopeId","data-v-69b591fa"]]),fR={name:"SolarSystemExample",data(){return{scene:null,camera:null,renderer:null,planets:[],orbits:[],animationSpeed:1,showOrbits:!0,selectedPlanet:null,animationId:null,sun:null,mouseX:0,mouseY:0,planetData:[{name:"水星",radius:3,distance:40,color:9205843,speed:.04},{name:"金星",radius:4,distance:60,color:16762441,speed:.03},{name:"地球",radius:5,distance:80,color:7050198,speed:.02},{name:"火星",radius:4,distance:100,color:13458524,speed:.015}]}},mounted(){this.$nextTick(()=>{this.initThree(),this.createSolarSystem(),this.animate(),this.addEventListeners()})},beforeUnmount(){this.cleanup()},methods:{initThree(){this.scene=Ye(new Et),this.scene.background=new ze(51);const n=this.$refs.container,e=n.clientWidth||800,t=n.clientHeight||600;this.camera=Ye(new it(75,e/t,1,2e3)),this.camera.position.z=200,this.camera.position.y=50,this.renderer=Ye(new St),this.renderer.setSize(e,t),this.renderer.setClearColor(51),n.appendChild(this.renderer.domElement),this.planets=Ye([]),this.orbits=Ye([]);const i=Ye(new Ei(4210752,1));this.scene.add(i);const s=Ye(new Mi(16777215,1));s.position.set(0,0,1),this.scene.add(s)},createSolarSystem(){const n=new ln(15,16,16),e=new ct({color:16776960});this.sun=Ye(new We(n,e)),this.scene.add(this.sun),this.planetData.forEach((t,i)=>{this.createPlanet(t,i)})},createPlanet(n,e){const t=new ln(n.radius,12,12),i=new ct({color:n.color}),s=Ye(new We(t,i));s.userData={name:n.name,distance:n.distance,speed:n.speed,angle:Math.random()*Math.PI*2,radius:n.radius},s.position.x=n.distance,s.position.y=0,s.position.z=0,this.planets.push(s),this.scene.add(s),this.showOrbits&&this.createOrbit(n.distance)},createOrbit(n){const e=[];for(let r=0;r<=64;r++){const a=r/64*Math.PI*2;e.push(new F(Math.cos(a)*n,0,Math.sin(a)*n))}const t=new Xt().setFromPoints(e),i=new lr({color:6710886,opacity:.5,transparent:!0}),s=Ye(new po(t,i));this.orbits.push(s),this.scene.add(s)},animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.camera.position.x+=(this.mouseX-this.camera.position.x)*.01,this.camera.position.y+=(-this.mouseY-this.camera.position.y)*.01,this.camera.lookAt(this.scene.position),this.sun&&(this.sun.rotation.y+=.01*this.animationSpeed),this.planets.forEach(n=>{const e=n.userData;e.angle+=e.speed*this.animationSpeed,n.position.x=Math.cos(e.angle)*e.distance,n.position.z=Math.sin(e.angle)*e.distance,n.rotation.y+=.02*this.animationSpeed}),this.renderer.render(this.scene,this.camera)},toggleOrbits(){this.orbits.forEach(n=>{n.visible=this.showOrbits})},resetCamera(){this.camera.position.set(0,50,200),this.mouseX=0,this.mouseY=0},addEventListeners(){window.addEventListener("resize",this.onWindowResize),document.addEventListener("mousemove",this.onMouseMove),this.renderer&&this.renderer.domElement&&this.renderer.domElement.addEventListener("click",this.onMouseClick)},removeEventListeners(){window.removeEventListener("resize",this.onWindowResize),document.removeEventListener("mousemove",this.onMouseMove),this.renderer&&this.renderer.domElement&&this.renderer.domElement.removeEventListener("click",this.onMouseClick)},onMouseMove(n){this.mouseX=(n.clientX-window.innerWidth/2)*.1,this.mouseY=(n.clientY-window.innerHeight/2)*.1},onWindowResize(){if(!this.$refs.container)return;const n=this.$refs.container.clientWidth,e=this.$refs.container.clientHeight;this.camera.aspect=n/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,e)},onMouseClick(n){const e=this.renderer.domElement.getBoundingClientRect(),t=n.clientX-e.left,i=n.clientY-e.top;this.planets.forEach(s=>{const r=s.position.clone();r.project(this.camera);const a=(r.x+1)*e.width/2,o=(-r.y+1)*e.height/2;Math.sqrt((t-a)**2+(i-o)**2)<30&&(this.selectedPlanet={name:s.userData.name,radius:Math.round(s.userData.radius*1e3),distance:(s.userData.distance/10).toFixed(1)})})},cleanup(){this.animationId&&cancelAnimationFrame(this.animationId),this.renderer&&this.renderer.dispose(),this.removeEventListeners()}}},pR={class:"solar-system-container"},mR={class:"controls"},gR={class:"control-group"},vR={class:"control-group"},_R={ref:"container",class:"canvas-container"},xR={class:"info-panel"},yR={key:0,class:"planet-info"};function bR(n,e,t,i,s,r){return Oe(),He("div",pR,[f("div",mR,[e[6]||(e[6]=f("h3",null,"太阳系控制面板",-1)),f("div",gR,[e[4]||(e[4]=f("label",null,"动画速度:",-1)),Be(f("input",{type:"range",min:"0",max:"3",step:"0.1","onUpdate:modelValue":e[0]||(e[0]=a=>s.animationSpeed=a)},null,512),[[nt,s.animationSpeed]]),f("span",null,ye(s.animationSpeed)+"x",1)]),f("div",vR,[e[5]||(e[5]=f("label",null,"显示轨道:",-1)),Be(f("input",{type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=a=>s.showOrbits=a),onChange:e[2]||(e[2]=(...a)=>r.toggleOrbits&&r.toggleOrbits(...a))},null,544),[[In,s.showOrbits]])]),f("button",{onClick:e[3]||(e[3]=(...a)=>r.resetCamera&&r.resetCamera(...a))},"重置视角")]),f("div",_R,null,512),f("div",xR,[e[7]||(e[7]=f("h4",null,"太阳系信息",-1)),e[8]||(e[8]=f("p",null,"这是一个简化的太阳系模型，展示了太阳和行星的相对位置和运动。",-1)),s.selectedPlanet?(Oe(),He("div",yR,[f("h5",null,ye(s.selectedPlanet.name),1),f("p",null,"半径: "+ye(s.selectedPlanet.radius)+"km",1),f("p",null,"距离太阳: "+ye(s.selectedPlanet.distance)+"AU",1)])):Hi("",!0)])])}const MR=kt(fR,[["render",bR],["__scopeId","data-v-e3a17a7c"]]),ER={name:"ParticleSystemExample",data(){return{scene:null,camera:null,renderer:null,controls:null,particleSystem:null,particles:null,velocities:null,animationId:null,particleCount:1e4,animationSpeed:1,particleSize:2,effectType:"galaxy",colorMode:"rainbow",gravity:.5,isPaused:!1,fps:0,lastTime:0,frameCount:0,time:0,mouseX:0,mouseY:0}},mounted(){this.$nextTick(()=>{this.initThree(),this.createParticleSystem(),this.animate(),this.addEventListeners()})},beforeUnmount(){this.cleanup()},methods:{initThree(){this.scene=Ye(new Et),this.scene.background=new ze(17);const n=this.$refs.container,e=n.clientWidth||800,t=n.clientHeight||600;this.camera=Ye(new it(75,e/t,1,2e3)),this.camera.position.set(0,0,100),this.renderer=Ye(new St({antialias:!0})),this.renderer.setSize(e,t),this.renderer.setClearColor(17),n.appendChild(this.renderer.domElement),this.controls=Ye(new Dp(this.camera,this.renderer.domElement)),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=10,this.controls.maxDistance=500},createParticleSystem(){const n=Ye(new Xt);this.initializeParticles(n);const e=Ye(new gd({size:this.particleSize,vertexColors:!0,transparent:!0,opacity:.8,blending:Xl}));this.particleSystem=Ye(new xp(n,e)),this.scene.add(this.particleSystem)},initializeParticles(n){const e=new Float32Array(this.particleCount*3),t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3);for(let s=0;s<this.particleCount;s++){const r=s*3;this.setParticlePosition(e,r),i[r]=(Math.random()-.5)*.1,i[r+1]=(Math.random()-.5)*.1,i[r+2]=(Math.random()-.5)*.1,this.setParticleColor(t,r,s)}n.setAttribute("position",new wn(e,3)),n.setAttribute("color",new wn(t,3)),this.particles=e,this.velocities=i},setParticlePosition(n,e){switch(this.effectType){case"galaxy":const t=Math.random()*50,i=Math.random()*Math.PI*2;n[e]=Math.cos(i)*t,n[e+1]=(Math.random()-.5)*10,n[e+2]=Math.sin(i)*t;break;case"explosion":const s=Math.random()*30,r=Math.random()*Math.PI*2,a=Math.random()*Math.PI;n[e]=s*Math.sin(a)*Math.cos(r),n[e+1]=s*Math.sin(a)*Math.sin(r),n[e+2]=s*Math.cos(a);break;case"wave":n[e]=(Math.random()-.5)*100,n[e+1]=Math.sin(n[e]*.1)*10,n[e+2]=(Math.random()-.5)*100;break;case"tornado":const o=(Math.random()-.5)*100,l=Math.abs(o)*.3,c=Math.random()*Math.PI*2;n[e]=Math.cos(c)*l,n[e+1]=o,n[e+2]=Math.sin(c)*l;break;case"fireworks":n[e]=(Math.random()-.5)*5,n[e+1]=Math.random()*50,n[e+2]=(Math.random()-.5)*5;break;default:n[e]=(Math.random()-.5)*100,n[e+1]=(Math.random()-.5)*100,n[e+2]=(Math.random()-.5)*100}},setParticleColor(n,e,t){let i,s,r;switch(this.colorMode){case"rainbow":const a=t/this.particleCount*360,o=new ze().setHSL(a/360,1,.5);i=o.r,s=o.g,r=o.b;break;case"fire":i=1,s=Math.random()*.5,r=0;break;case"ice":i=.3,s=.7,r=1;break;case"electric":i=.5+Math.random()*.5,s=.5+Math.random()*.5,r=1;break;default:i=Math.random(),s=Math.random(),r=Math.random()}n[e]=i,n[e+1]=s,n[e+2]=r},animate(){this.isPaused||(this.animationId=requestAnimationFrame(()=>this.animate())),this.time+=.01*this.animationSpeed,this.updateParticles(),this.updateFPS(),this.controls.update(),this.renderer.render(this.scene,this.camera)},updateParticles(){if(!this.particles||!this.velocities)return;const n=this.particleSystem.geometry.attributes.position.array;for(let e=0;e<this.particleCount;e++){const t=e*3;this.updateParticleByEffect(n,t,e)}this.particleSystem.geometry.attributes.position.needsUpdate=!0},updateParticleByEffect(n,e,t){switch(this.effectType){case"galaxy":const r=n[e]-0,a=n[e+2]-0,o=Math.sqrt(r*r+a*a);if(o>0){const u=.01*this.animationSpeed/(o*.1+1),h=Math.atan2(a,r)+u;n[e]=0+Math.cos(h)*o,n[e+2]=0+Math.sin(h)*o}break;case"explosion":this.velocities[e]*=.99,this.velocities[e+1]*=.99,this.velocities[e+2]*=.99,n[e]+=this.velocities[e]*this.animationSpeed,n[e+1]+=this.velocities[e+1]*this.animationSpeed,n[e+2]+=this.velocities[e+2]*this.animationSpeed,this.velocities[e+1]-=this.gravity*.01;break;case"wave":n[e+1]=Math.sin(n[e]*.1+this.time)*10+Math.sin(n[e+2]*.1+this.time*.7)*5;break;case"tornado":const l=n[e+1],c=Math.abs(l)*.3,d=Math.atan2(n[e+2],n[e])+.02*this.animationSpeed;n[e]=Math.cos(d)*c,n[e+2]=Math.sin(d)*c,n[e+1]+=(Math.random()-.5)*.5*this.animationSpeed,n[e+1]>50&&(n[e+1]=-50),n[e+1]<-50&&(n[e+1]=50);break;case"fireworks":this.velocities[e+1]-=this.gravity*.02,n[e]+=this.velocities[e]*this.animationSpeed,n[e+1]+=this.velocities[e+1]*this.animationSpeed,n[e+2]+=this.velocities[e+2]*this.animationSpeed,n[e+1]<-50&&(n[e]=(Math.random()-.5)*5,n[e+1]=50,n[e+2]=(Math.random()-.5)*5,this.velocities[e]=(Math.random()-.5)*.2,this.velocities[e+1]=Math.random()*.1,this.velocities[e+2]=(Math.random()-.5)*.2);break}},updateParticleCount(){this.scene.remove(this.particleSystem),this.createParticleSystem()},updateParticleSize(){this.particleSystem&&(this.particleSystem.material.size=this.particleSize)},changeEffect(){this.resetParticles()},updateColors(){if(!this.particleSystem)return;const n=this.particleSystem.geometry.attributes.color.array;for(let e=0;e<this.particleCount;e++)this.setParticleColor(n,e*3,e);this.particleSystem.geometry.attributes.color.needsUpdate=!0},resetParticles(){this.particleSystem&&this.scene.remove(this.particleSystem),this.createParticleSystem()},togglePause(){this.isPaused=!this.isPaused,this.isPaused||this.animate()},updateFPS(){this.frameCount++;const n=performance.now();n-this.lastTime>=1e3&&(this.fps=Math.round(this.frameCount*1e3/(n-this.lastTime)),this.frameCount=0,this.lastTime=n)},getEffectName(){return{galaxy:"星系旋转",explosion:"爆炸效果",wave:"波浪效果",tornado:"龙卷风",fireworks:"烟花"}[this.effectType]||"未知效果"},getEffectDescription(){return{galaxy:"粒子围绕中心旋转，模拟星系结构",explosion:"粒子从中心爆炸散开，受重力影响",wave:"粒子形成波浪状运动模式",tornado:"粒子形成龙卷风螺旋上升效果",fireworks:"粒子模拟烟花爆炸和重力下落"}[this.effectType]||"暂无描述"},addEventListeners(){window.addEventListener("resize",this.onWindowResize),document.addEventListener("mousemove",this.onMouseMove)},removeEventListeners(){window.removeEventListener("resize",this.onWindowResize),document.removeEventListener("mousemove",this.onMouseMove)},onWindowResize(){if(!this.$refs.container)return;const n=this.$refs.container.clientWidth,e=this.$refs.container.clientHeight;this.camera.aspect=n/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,e)},onMouseMove(n){this.mouseX=n.clientX/window.innerWidth*2-1,this.mouseY=-(n.clientY/window.innerHeight)*2+1},cleanup(){this.animationId&&cancelAnimationFrame(this.animationId),this.renderer&&this.renderer.dispose(),this.removeEventListeners()}}},SR={class:"particle-system-container"},wR={class:"controls"},TR={class:"control-group"},AR={class:"control-group"},RR={class:"control-group"},CR={class:"control-group"},PR={class:"control-group"},LR={class:"control-group"},IR={ref:"container",class:"canvas-container"},DR={class:"info-panel"},UR={class:"effect-description"};function NR(n,e,t,i,s,r){return Oe(),He("div",SR,[f("div",wR,[e[20]||(e[20]=f("h3",null,"粒子系统控制面板",-1)),f("div",TR,[e[12]||(e[12]=f("label",null,"粒子数量:",-1)),Be(f("input",{type:"range",min:"1000",max:"50000",step:"1000","onUpdate:modelValue":e[0]||(e[0]=a=>s.particleCount=a),onInput:e[1]||(e[1]=(...a)=>r.updateParticleCount&&r.updateParticleCount(...a))},null,544),[[nt,s.particleCount]]),f("span",null,ye(s.particleCount),1)]),f("div",AR,[e[13]||(e[13]=f("label",null,"动画速度:",-1)),Be(f("input",{type:"range",min:"0",max:"5",step:"0.1","onUpdate:modelValue":e[2]||(e[2]=a=>s.animationSpeed=a)},null,512),[[nt,s.animationSpeed]]),f("span",null,ye(s.animationSpeed)+"x",1)]),f("div",RR,[e[14]||(e[14]=f("label",null,"粒子大小:",-1)),Be(f("input",{type:"range",min:"1",max:"10",step:"0.5","onUpdate:modelValue":e[3]||(e[3]=a=>s.particleSize=a),onInput:e[4]||(e[4]=(...a)=>r.updateParticleSize&&r.updateParticleSize(...a))},null,544),[[nt,s.particleSize]]),f("span",null,ye(s.particleSize),1)]),f("div",CR,[e[16]||(e[16]=f("label",null,"效果类型:",-1)),Be(f("select",{"onUpdate:modelValue":e[5]||(e[5]=a=>s.effectType=a),onChange:e[6]||(e[6]=(...a)=>r.changeEffect&&r.changeEffect(...a))},e[15]||(e[15]=[vt('<option value="galaxy" data-v-59883e59>星系旋转</option><option value="explosion" data-v-59883e59>爆炸效果</option><option value="wave" data-v-59883e59>波浪效果</option><option value="tornado" data-v-59883e59>龙卷风</option><option value="fireworks" data-v-59883e59>烟花</option>',5)]),544),[[Js,s.effectType]])]),f("div",PR,[e[18]||(e[18]=f("label",null,"颜色模式:",-1)),Be(f("select",{"onUpdate:modelValue":e[7]||(e[7]=a=>s.colorMode=a),onChange:e[8]||(e[8]=(...a)=>r.updateColors&&r.updateColors(...a))},e[17]||(e[17]=[f("option",{value:"rainbow"},"彩虹",-1),f("option",{value:"fire"},"火焰",-1),f("option",{value:"ice"},"冰霜",-1),f("option",{value:"electric"},"电光",-1)]),544),[[Js,s.colorMode]])]),f("div",LR,[e[19]||(e[19]=f("label",null,"重力强度:",-1)),Be(f("input",{type:"range",min:"0",max:"2",step:"0.1","onUpdate:modelValue":e[9]||(e[9]=a=>s.gravity=a)},null,512),[[nt,s.gravity]]),f("span",null,ye(s.gravity),1)]),f("button",{onClick:e[10]||(e[10]=(...a)=>r.resetParticles&&r.resetParticles(...a))},"重置粒子"),f("button",{onClick:e[11]||(e[11]=(...a)=>r.togglePause&&r.togglePause(...a))},ye(s.isPaused?"继续":"暂停"),1)]),f("div",IR,null,512),f("div",DR,[e[22]||(e[22]=f("h4",null,"粒子系统信息",-1)),f("p",null,"当前效果: "+ye(r.getEffectName()),1),f("p",null,"粒子数量: "+ye(s.particleCount),1),f("p",null,"FPS: "+ye(s.fps),1),f("div",UR,[e[21]||(e[21]=f("h5",null,"效果说明",-1)),f("p",null,ye(r.getEffectDescription()),1)]),e[23]||(e[23]=f("div",{class:"controls-help"},[f("h5",null,"操作说明"),f("ul",null,[f("li",null,"鼠标拖拽: 旋转视角"),f("li",null,"滚轮: 缩放"),f("li",null,"右键拖拽: 平移")])],-1))])])}const FR=kt(ER,[["render",NR],["__scopeId","data-v-59883e59"]]),OR=[{path:"/",component:CE},{path:"/tutorial",component:vS},{path:"/tutorial/installation",component:bS},{path:"/tutorial/first-scene",component:RS},{path:"/tutorial/scene",component:NS},{path:"/tutorial/camera",component:GS},{path:"/tutorial/renderer",component:ew},{path:"/tutorial/geometry",component:ow},{path:"/tutorial/material",component:bw},{path:"/tutorial/mesh",component:Ww},{path:"/tutorial/lights",component:hT},{path:"/tutorial/shadows",component:NT},{path:"/tutorial/animation",component:aA},{path:"/tutorial/controls",component:eR},{path:"/api",component:iS},{path:"/examples",component:fS},{path:"/examples/cube",component:hR},{path:"/examples/solar-system",component:MR},{path:"/examples/particle-system",component:FR}],BR=dv({history:H0(),routes:OR}),Up=a0(zv);Up.use(BR);Up.mount("#app");
