(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xa(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ae={},as=[],Rt=()=>{},w_=()=>!1,Ur=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Da=t=>t.startsWith("onUpdate:"),Ae=Object.assign,Ma=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},b_=Object.prototype.hasOwnProperty,X=(t,e)=>b_.call(t,e),V=Array.isArray,ls=t=>Fr(t)==="[object Map]",mh=t=>Fr(t)==="[object Set]",$=t=>typeof t=="function",we=t=>typeof t=="string",Cn=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",vh=t=>(pe(t)||$(t))&&$(t.then)&&$(t.catch),yh=Object.prototype.toString,Fr=t=>yh.call(t),I_=t=>Fr(t).slice(8,-1),Eh=t=>Fr(t)==="[object Object]",La=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},C_=/-(\w)/g,mt=Br(t=>t.replace(C_,(e,n)=>n?n.toUpperCase():"")),T_=/\B([A-Z])/g,Yn=Br(t=>t.replace(T_,"-$1").toLowerCase()),Hr=Br(t=>t.charAt(0).toUpperCase()+t.slice(1)),po=Br(t=>t?`on${Hr(t)}`:""),yn=(t,e)=>!Object.is(t,e),Zi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Go=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rc;const bh=()=>rc||(rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ua(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=we(s)?A_(s):Ua(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(we(t)||pe(t))return t}const S_=/;(?![^(]*\))/g,R_=/:([^]+)/,P_=/\/\*[^]*?\*\//g;function A_(t){const e={};return t.replace(P_,"").split(S_).forEach(n=>{if(n){const s=n.split(R_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Fa(t){let e="";if(we(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=Fa(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const N_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",k_=xa(N_);function Ih(t){return!!t||t===""}const Ch=t=>!!(t&&t.__v_isRef===!0),Tt=t=>we(t)?t:t==null?"":V(t)||pe(t)&&(t.toString===yh||!$(t.toString))?Ch(t)?Tt(t.value):JSON.stringify(t,Th,2):String(t),Th=(t,e)=>Ch(e)?Th(t,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[_o(s,r)+" =>"]=i,n),{})}:mh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_o(n))}:Cn(e)?_o(e):pe(e)&&!V(e)&&!Eh(e)?String(e):e,_o=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Je;class O_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Je,!e&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Je;try{return Je=this,e()}finally{Je=n}}}on(){Je=this}off(){Je=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function x_(){return Je}let oe;const go=new WeakSet;class Sh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Je&&Je.active&&Je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,go.has(this)&&(go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Ks,Ks=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oc(this),Ph(this);const e=oe,n=pt;oe=this,pt=!0;try{return this.fn()}finally{Ah(this),oe=e,pt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wa(e);this.deps=this.depsTail=void 0,oc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qo(this)&&this.run()}get dirty(){return qo(this)}}let Rh=0,Ks;function Ba(){Rh++}function Ha(){if(--Rh>0)return;let t;for(;Ks;){let e=Ks;for(Ks=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ph(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ah(t){let e,n=t.depsTail;for(let s=n;s;s=s.prevDep)s.version===-1?(s===n&&(n=s.prevDep),Wa(s),D_(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function qo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Nh(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function Nh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===li))return;t.globalVersion=li;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!qo(t)){t.flags&=-3;return}const n=oe,s=pt;oe=t,pt=!0;try{Ph(t);const i=t.fn(t._value);(e.version===0||yn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{oe=n,pt=s,Ah(t),t.flags&=-3}}function Wa(t){const{dep:e,prevSub:n,nextSub:s}=t;if(n&&(n.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)Wa(i)}}function D_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let pt=!0;const kh=[];function Tn(){kh.push(pt),pt=!1}function Sn(){const t=kh.pop();pt=t===void 0?!0:t}function oc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=oe;oe=void 0;try{e()}finally{oe=n}}}let li=0;class Va{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!oe||!pt||oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==oe)n=this.activeLink={dep:this,sub:oe,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},oe.deps?(n.prevDep=oe.depsTail,oe.depsTail.nextDep=n,oe.depsTail=n):oe.deps=oe.depsTail=n,oe.flags&4&&Oh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=oe.depsTail,n.nextDep=void 0,oe.depsTail.nextDep=n,oe.depsTail=n,oe.deps===n&&(oe.deps=s)}return n}trigger(e){this.version++,li++,this.notify(e)}notify(e){Ba();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{Ha()}}}function Oh(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Oh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const zo=new WeakMap,Fn=Symbol(""),Ko=Symbol(""),ci=Symbol("");function Le(t,e,n){if(pt&&oe){let s=zo.get(t);s||zo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=new Va),i.track()}}function Vt(t,e,n,s,i,r){const o=zo.get(t);if(!o){li++;return}const a=l=>{l&&l.trigger()};if(Ba(),e==="clear")o.forEach(a);else{const l=V(t),c=l&&La(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===ci||!Cn(d)&&d>=u)&&a(h)})}else switch(n!==void 0&&a(o.get(n)),c&&a(o.get(ci)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Fn)),ls(t)&&a(o.get(Ko)));break;case"delete":l||(a(o.get(Fn)),ls(t)&&a(o.get(Ko)));break;case"set":ls(t)&&a(o.get(Fn));break}}Ha()}function ts(t){const e=Z(t);return e===t?e:(Le(e,"iterate",ci),rt(t)?e:e.map(Oe))}function Wr(t){return Le(t=Z(t),"iterate",ci),t}const M_={__proto__:null,[Symbol.iterator](){return mo(this,Symbol.iterator,Oe)},concat(...t){return ts(this).concat(...t.map(e=>V(e)?ts(e):e))},entries(){return mo(this,"entries",t=>(t[1]=Oe(t[1]),t))},every(t,e){return xt(this,"every",t,e,void 0,arguments)},filter(t,e){return xt(this,"filter",t,e,n=>n.map(Oe),arguments)},find(t,e){return xt(this,"find",t,e,Oe,arguments)},findIndex(t,e){return xt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return xt(this,"findLast",t,e,Oe,arguments)},findLastIndex(t,e){return xt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return xt(this,"forEach",t,e,void 0,arguments)},includes(...t){return vo(this,"includes",t)},indexOf(...t){return vo(this,"indexOf",t)},join(t){return ts(this).join(t)},lastIndexOf(...t){return vo(this,"lastIndexOf",t)},map(t,e){return xt(this,"map",t,e,void 0,arguments)},pop(){return Ds(this,"pop")},push(...t){return Ds(this,"push",t)},reduce(t,...e){return ac(this,"reduce",t,e)},reduceRight(t,...e){return ac(this,"reduceRight",t,e)},shift(){return Ds(this,"shift")},some(t,e){return xt(this,"some",t,e,void 0,arguments)},splice(...t){return Ds(this,"splice",t)},toReversed(){return ts(this).toReversed()},toSorted(t){return ts(this).toSorted(t)},toSpliced(...t){return ts(this).toSpliced(...t)},unshift(...t){return Ds(this,"unshift",t)},values(){return mo(this,"values",Oe)}};function mo(t,e,n){const s=Wr(t),i=s[e]();return s!==t&&!rt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const L_=Array.prototype;function xt(t,e,n,s,i,r){const o=Wr(t),a=o!==t&&!rt(t),l=o[e];if(l!==L_[e]){const h=l.apply(t,r);return a?Oe(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,Oe(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function ac(t,e,n,s){const i=Wr(t);let r=n;return i!==t&&(rt(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Oe(a),l,t)}),i[e](r,...s)}function vo(t,e,n){const s=Z(t);Le(s,"iterate",ci);const i=s[e](...n);return(i===-1||i===!1)&&qa(n[0])?(n[0]=Z(n[0]),s[e](...n)):i}function Ds(t,e,n=[]){Tn(),Ba();const s=Z(t)[e].apply(t,n);return Ha(),Sn(),s}const U_=xa("__proto__,__v_isRef,__isVue"),xh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn));function F_(t){Cn(t)||(t=String(t));const e=Z(this);return Le(e,"has",t),e.hasOwnProperty(t)}class Dh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?J_:Fh:r?Uh:Lh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!i){let l;if(o&&(l=M_[n]))return l;if(n==="hasOwnProperty")return F_}const a=Reflect.get(e,n,Me(e)?e:s);return(Cn(n)?xh.has(n):U_(n))||(i||Le(e,"get",n),r)?a:Me(a)?o&&La(n)?a:a.value:pe(a)?i?Hh(a):$r(a):a}}class Mh extends Dh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Hn(r);if(!rt(s)&&!Hn(s)&&(r=Z(r),s=Z(s)),!V(e)&&Me(r)&&!Me(s))return l?!1:(r.value=s,!0)}const o=V(e)&&La(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,s,Me(e)?e:i);return e===Z(i)&&(o?yn(s,r)&&Vt(e,"set",n,s):Vt(e,"add",n,s)),a}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Vt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Cn(n)||!xh.has(n))&&Le(e,"has",n),s}ownKeys(e){return Le(e,"iterate",V(e)?"length":Fn),Reflect.ownKeys(e)}}class B_ extends Dh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const H_=new Mh,W_=new B_,V_=new Mh(!0);const $a=t=>t,Vr=t=>Reflect.getPrototypeOf(t);function Vi(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(yn(e,r)&&Le(i,"get",e),Le(i,"get",r));const{has:o}=Vr(i),a=s?$a:n?za:Oe;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function $i(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(yn(t,i)&&Le(s,"has",t),Le(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ji(t,e=!1){return t=t.__v_raw,!e&&Le(Z(t),"iterate",Fn),Reflect.get(t,"size",t)}function lc(t,e=!1){!e&&!rt(t)&&!Hn(t)&&(t=Z(t));const n=Z(this);return Vr(n).has.call(n,t)||(n.add(t),Vt(n,"add",t,t)),this}function cc(t,e,n=!1){!n&&!rt(e)&&!Hn(e)&&(e=Z(e));const s=Z(this),{has:i,get:r}=Vr(s);let o=i.call(s,t);o||(t=Z(t),o=i.call(s,t));const a=r.call(s,t);return s.set(t,e),o?yn(e,a)&&Vt(s,"set",t,e):Vt(s,"add",t,e),this}function uc(t){const e=Z(this),{has:n,get:s}=Vr(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Vt(e,"delete",t,void 0),r}function hc(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Vt(t,"clear",void 0,void 0),n}function Gi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Z(o),l=e?$a:t?za:Oe;return!t&&Le(a,"iterate",Fn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function qi(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=ls(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?$a:e?za:Oe;return!e&&Le(r,"iterate",l?Ko:Fn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function sn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $_(){const t={get(r){return Vi(this,r)},get size(){return ji(this)},has:$i,add:lc,set:cc,delete:uc,clear:hc,forEach:Gi(!1,!1)},e={get(r){return Vi(this,r,!1,!0)},get size(){return ji(this)},has:$i,add(r){return lc.call(this,r,!0)},set(r,o){return cc.call(this,r,o,!0)},delete:uc,clear:hc,forEach:Gi(!1,!0)},n={get(r){return Vi(this,r,!0)},get size(){return ji(this,!0)},has(r){return $i.call(this,r,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Gi(!0,!1)},s={get(r){return Vi(this,r,!0,!0)},get size(){return ji(this,!0)},has(r){return $i.call(this,r,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Gi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qi(r,!1,!1),n[r]=qi(r,!0,!1),e[r]=qi(r,!1,!0),s[r]=qi(r,!0,!0)}),[t,n,e,s]}const[j_,G_,q_,z_]=$_();function ja(t,e){const n=e?t?z_:q_:t?G_:j_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const K_={get:ja(!1,!1)},Y_={get:ja(!1,!0)},Q_={get:ja(!0,!1)};const Lh=new WeakMap,Uh=new WeakMap,Fh=new WeakMap,J_=new WeakMap;function X_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Z_(t){return t.__v_skip||!Object.isExtensible(t)?0:X_(I_(t))}function $r(t){return Hn(t)?t:Ga(t,!1,H_,K_,Lh)}function Bh(t){return Ga(t,!1,V_,Y_,Uh)}function Hh(t){return Ga(t,!0,W_,Q_,Fh)}function Ga(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Z_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function cs(t){return Hn(t)?cs(t.__v_raw):!!(t&&t.__v_isReactive)}function Hn(t){return!!(t&&t.__v_isReadonly)}function rt(t){return!!(t&&t.__v_isShallow)}function qa(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function eg(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&wh(t,"__v_skip",!0),t}const Oe=t=>pe(t)?$r(t):t,za=t=>pe(t)?Hh(t):t;function Me(t){return t?t.__v_isRef===!0:!1}function Xe(t){return Wh(t,!1)}function tg(t){return Wh(t,!0)}function Wh(t,e){return Me(t)?t:new ng(t,e)}class ng{constructor(e,n){this.dep=new Va,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Z(e),this._value=n?e:Oe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||rt(e)||Hn(e);e=s?e:Z(e),yn(e,n)&&(this._rawValue=e,this._value=s?e:Oe(e),this.dep.trigger())}}function us(t){return Me(t)?t.value:t}const sg={get:(t,e,n)=>e==="__v_raw"?t:us(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Vh(t){return cs(t)?t:new Proxy(t,sg)}class ig{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Va(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=li-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){this.flags|=16,oe!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Nh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rg(t,e,n=!1){let s,i;return $(t)?s=t:(s=t.get,i=t.set),new ig(s,i,n)}const zi={},cr=new WeakMap;let On;function og(t,e=!1,n=On){if(n){let s=cr.get(n);s||cr.set(n,s=[]),s.push(t)}}function ag(t,e,n=ae){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=S=>i?S:rt(S)||i===!1||i===0?Lt(S,1):Lt(S);let u,h,d,_,m=!1,E=!1;if(Me(t)?(h=()=>t.value,m=rt(t)):cs(t)?(h=()=>c(t),m=!0):V(t)?(E=!0,m=t.some(S=>cs(S)||rt(S)),h=()=>t.map(S=>{if(Me(S))return S.value;if(cs(S))return c(S);if($(S))return l?l(S,2):S()})):$(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){Tn();try{d()}finally{Sn()}}const S=On;On=u;try{return l?l(t,3,[_]):t(_)}finally{On=S}}:h=Rt,e&&i){const S=h,z=i===!0?1/0:i;h=()=>Lt(S(),z)}const P=x_(),D=()=>{u.stop(),P&&Ma(P.effects,u)};if(r)if(e){const S=e;e=(...z)=>{S(...z),D()}}else{const S=h;h=()=>{S(),D()}}let k=E?new Array(t.length).fill(zi):zi;const O=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const z=u.run();if(i||m||(E?z.some((he,se)=>yn(he,k[se])):yn(z,k))){d&&d();const he=On;On=u;try{const se=[z,k===zi?void 0:E&&k[0]===zi?[]:k,_];l?l(e,3,se):e(...se),k=z}finally{On=he}}}else u.run()};return a&&a(O),u=new Sh(h),u.scheduler=o?()=>o(O,!1):O,_=S=>og(S,!1,u),d=u.onStop=()=>{const S=cr.get(u);if(S){if(l)l(S,4);else for(const z of S)z();cr.delete(u)}},e?s?O(!0):k=u.run():o?o(O.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function Lt(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Me(t))Lt(t.value,e,n);else if(V(t))for(let s=0;s<t.length;s++)Lt(t[s],e,n);else if(mh(t)||ls(t))t.forEach(s=>{Lt(s,e,n)});else if(Eh(t)){for(const s in t)Lt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Lt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ri(t,e,n,s){try{return s?t(...s):t()}catch(i){jr(i,e,n)}}function Nt(t,e,n,s){if($(t)){const i=Ri(t,e,n,s);return i&&vh(i)&&i.catch(r=>{jr(r,e,n)}),i}if(V(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Nt(t[r],e,n,s));return i}}function jr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ae;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){Tn(),Ri(r,null,10,[t,l,c]),Sn();return}}lg(t,n,i,s,o)}function lg(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}let ui=!1,Yo=!1;const Be=[];let It=0;const hs=[];let an=null,ss=0;const $h=Promise.resolve();let Ka=null;function jh(t){const e=Ka||$h;return t?e.then(this?t.bind(this):t):e}function cg(t){let e=ui?It+1:0,n=Be.length;for(;e<n;){const s=e+n>>>1,i=Be[s],r=hi(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Ya(t){if(!(t.flags&1)){const e=hi(t),n=Be[Be.length-1];!n||!(t.flags&2)&&e>=hi(n)?Be.push(t):Be.splice(cg(e),0,t),t.flags|=1,Gh()}}function Gh(){!ui&&!Yo&&(Yo=!0,Ka=$h.then(zh))}function ug(t){V(t)?hs.push(...t):an&&t.id===-1?an.splice(ss+1,0,t):t.flags&1||(hs.push(t),t.flags|=1),Gh()}function dc(t,e,n=ui?It+1:0){for(;n<Be.length;n++){const s=Be[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Be.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&=-2}}}function qh(t){if(hs.length){const e=[...new Set(hs)].sort((n,s)=>hi(n)-hi(s));if(hs.length=0,an){an.push(...e);return}for(an=e,ss=0;ss<an.length;ss++){const n=an[ss];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}an=null,ss=0}}const hi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function zh(t){Yo=!1,ui=!0;try{for(It=0;It<Be.length;It++){const e=Be[It];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ri(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;It<Be.length;It++){const e=Be[It];e&&(e.flags&=-2)}It=0,Be.length=0,qh(),ui=!1,Ka=null,(Be.length||hs.length)&&zh()}}let Ze=null,Kh=null;function ur(t){const e=Ze;return Ze=t,Kh=t&&t.type.__scopeId||null,e}function Ys(t,e=Ze,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&bc(-1);const r=ur(e);let o;try{o=t(...i)}finally{ur(r),s._d&&bc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qo(t,e){if(Ze===null)return t;const n=Yr(Ze),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ae]=e[i];r&&($(r)&&(r={mounted:r,updated:r}),r.deep&&Lt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Nn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Tn(),Nt(l,n,8,[t.el,a,t,e]),Sn())}}const hg=Symbol("_vte"),dg=t=>t.__isTeleport;function Qa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Qa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Yh(t,e){return $(t)?Ae({name:t.name},e,{setup:t}):t}function Qh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Jo(t,e,n,s,i=!1){if(V(t)){t.forEach((m,E)=>Jo(m,e&&(V(e)?e[E]:e),n,s,i));return}if(Qs(s)&&!i)return;const r=s.shapeFlag&4?Yr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState,d=Z(h),_=h===ae?()=>!1:m=>X(d,m);if(c!=null&&c!==l&&(we(c)?(u[c]=null,_(c)&&(h[c]=null)):Me(c)&&(c.value=null)),$(l))Ri(l,a,12,[o,u]);else{const m=we(l),E=Me(l);if(m||E){const P=()=>{if(t.f){const D=m?_(l)?h[l]:u[l]:l.value;i?V(D)&&Ma(D,r):V(D)?D.includes(r)||D.push(r):m?(u[l]=[r],_(l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,_(l)&&(h[l]=o)):E&&(l.value=o,t.k&&(u[t.k]=o))};o?(P.id=-1,Qe(P,n)):P()}}}const Qs=t=>!!t.type.__asyncLoader,Jh=t=>t.type.__isKeepAlive;function fg(t,e){Xh(t,"a",e)}function pg(t,e){Xh(t,"da",e)}function Xh(t,e,n=De){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Gr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Jh(i.parent.vnode)&&_g(s,e,n,i),i=i.parent}}function _g(t,e,n,s){const i=Gr(e,t,s,!0);ed(()=>{Ma(s[e],i)},n)}function Gr(t,e,n=De,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Tn();const a=Pi(n),l=Nt(e,n,t,o);return a(),Sn(),l});return s?i.unshift(r):i.push(r),r}}const Qt=t=>(e,n=De)=>{(!Kr||t==="sp")&&Gr(t,(...s)=>e(...s),n)},gg=Qt("bm"),Zh=Qt("m"),mg=Qt("bu"),vg=Qt("u"),yg=Qt("bum"),ed=Qt("um"),Eg=Qt("sp"),wg=Qt("rtg"),bg=Qt("rtc");function Ig(t,e=De){Gr("ec",t,e)}const td="components";function hr(t,e){return Tg(td,t,!0,e)||t}const Cg=Symbol.for("v-ndc");function Tg(t,e,n=!0,s=!1){const i=Ze||De;if(i){const r=i.type;if(t===td){const a=hm(r,!1);if(a&&(a===e||a===mt(e)||a===Hr(mt(e))))return r}const o=fc(i[t]||r[t],e)||fc(i.appContext[t],e);return!o&&s?r:o}}function fc(t,e){return t&&(t[e]||t[mt(e)]||t[Hr(mt(e))])}function pc(t,e,n,s){let i;const r=n,o=V(t);if(o||we(t)){const a=o&&cs(t);let l=!1;a&&(l=!rt(t),t=Wr(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Oe(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Xo=t=>t?wd(t)?Yr(t):Xo(t.parent):null,Js=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xo(t.parent),$root:t=>Xo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ja(t),$forceUpdate:t=>t.f||(t.f=()=>{Ya(t.update)}),$nextTick:t=>t.n||(t.n=jh.bind(t.proxy)),$watch:t=>qg.bind(t)}),yo=(t,e)=>t!==ae&&!t.__isScriptSetup&&X(t,e),Sg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(yo(s,e))return o[e]=1,s[e];if(i!==ae&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==ae&&X(n,e))return o[e]=4,n[e];Zo&&(o[e]=0)}}const u=Js[e];let h,d;if(u)return e==="$attrs"&&Le(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&X(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,X(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return yo(i,e)?(i[e]=n,!0):s!==ae&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ae&&X(t,o)||yo(e,o)||(a=r[0])&&X(a,o)||X(s,o)||X(Js,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _c(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zo=!0;function Rg(t){const e=Ja(t),n=t.proxy,s=t.ctx;Zo=!1,e.beforeCreate&&gc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:E,deactivated:P,beforeDestroy:D,beforeUnmount:k,destroyed:O,unmounted:S,render:z,renderTracked:he,renderTriggered:se,errorCaptured:Ne,serverPrefetch:nt,expose:st,inheritAttrs:tn,components:An,directives:yt,filters:Os}=e;if(c&&Pg(c,s,null),o)for(const ie in o){const J=o[ie];$(J)&&(s[ie]=J.bind(n))}if(i){const ie=i.call(n,n);pe(ie)&&(t.data=$r(ie))}if(Zo=!0,r)for(const ie in r){const J=r[ie],Ot=$(J)?J.bind(n,n):$(J.get)?J.get.bind(n,n):Rt,nn=!$(J)&&$(J.set)?J.set.bind(n):Rt,Et=ct({get:Ot,set:nn});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>Et.value,set:$e=>Et.value=$e})}if(a)for(const ie in a)nd(a[ie],s,n,ie);if(l){const ie=$(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(J=>{er(J,ie[J])})}u&&gc(u,t,"c");function Ce(ie,J){V(J)?J.forEach(Ot=>ie(Ot.bind(n))):J&&ie(J.bind(n))}if(Ce(gg,h),Ce(Zh,d),Ce(mg,_),Ce(vg,m),Ce(fg,E),Ce(pg,P),Ce(Ig,Ne),Ce(bg,he),Ce(wg,se),Ce(yg,k),Ce(ed,S),Ce(Eg,nt),V(st))if(st.length){const ie=t.exposed||(t.exposed={});st.forEach(J=>{Object.defineProperty(ie,J,{get:()=>n[J],set:Ot=>n[J]=Ot})})}else t.exposed||(t.exposed={});z&&t.render===Rt&&(t.render=z),tn!=null&&(t.inheritAttrs=tn),An&&(t.components=An),yt&&(t.directives=yt),nt&&Qh(t)}function Pg(t,e,n=Rt){V(t)&&(t=ea(t));for(const s in t){const i=t[s];let r;pe(i)?"default"in i?r=$t(i.from||s,i.default,!0):r=$t(i.from||s):r=$t(i),Me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function gc(t,e,n){Nt(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function nd(t,e,n,s){let i=s.includes(".")?gd(n,s):()=>n[s];if(we(t)){const r=e[t];$(r)&&tr(i,r)}else if($(t))tr(i,t.bind(n));else if(pe(t))if(V(t))t.forEach(r=>nd(r,e,n,s));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&tr(i,r,t)}}function Ja(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>dr(l,c,o,!0)),dr(l,e,o)),pe(e)&&r.set(e,l),l}function dr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&dr(t,r,n,!0),i&&i.forEach(o=>dr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ag[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ag={data:mc,props:vc,emits:vc,methods:Vs,computed:Vs,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:Vs,directives:Vs,watch:kg,provide:mc,inject:Ng};function mc(t,e){return e?t?function(){return Ae($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Ng(t,e){return Vs(ea(t),ea(e))}function ea(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?Ae(Object.create(null),t,e):e}function vc(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Ae(Object.create(null),_c(t),_c(e??{})):e}function kg(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=Fe(t[s],e[s]);return n}function sd(){return{app:null,config:{isNativeTag:w_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Og=0;function xg(t,e){return function(s,i=null){$(s)||(s=Ae({},s)),i!=null&&!pe(i)&&(i=null);const r=sd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Og++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:fm,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(c,...h)):$(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const _=c._ceVNode||Pe(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(_,u):t(_,u,d),l=!0,c._container=u,u.__vue_app__=c,Yr(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=ds;ds=c;try{return u()}finally{ds=h}}};return c}}let ds=null;function er(t,e){if(De){let n=De.provides;const s=De.parent&&De.parent.provides;s===n&&(n=De.provides=Object.create(s)),n[t]=e}}function $t(t,e,n=!1){const s=De||Ze;if(s||ds){const i=ds?ds._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&$(e)?e.call(s&&s.proxy):e}}const id={},rd=()=>Object.create(id),od=t=>Object.getPrototypeOf(t)===id;function Dg(t,e,n,s=!1){const i={},r=rd();t.propsDefaults=Object.create(null),ad(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Bh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Mg(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Z(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(qr(t.emitsOptions,d))continue;const _=e[d];if(l)if(X(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=mt(d);i[m]=ta(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{ad(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=Yn(h))===h||!X(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ta(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!X(e,h))&&(delete r[h],c=!0)}c&&Vt(t.attrs,"set","")}function ad(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(zs(l))continue;const c=e[l];let u;i&&X(i,u=mt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:qr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Z(n),c=a||ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ta(i,l,h,c[h],t,!X(c,h))}}return o}function ta(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Pi(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Yn(n))&&(s=!0))}return s}const Lg=new WeakMap;function ld(t,e,n=!1){const s=n?Lg:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!$(t)){const u=h=>{l=!0;const[d,_]=ld(h,e,!0);Ae(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return pe(t)&&s.set(t,as),as;if(V(r))for(let u=0;u<r.length;u++){const h=mt(r[u]);yc(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=mt(u);if(yc(h)){const d=r[u],_=o[h]=V(d)||$(d)?{type:d}:Ae({},d),m=_.type;let E=!1,P=!0;if(V(m))for(let D=0;D<m.length;++D){const k=m[D],O=$(k)&&k.name;if(O==="Boolean"){E=!0;break}else O==="String"&&(P=!1)}else E=$(m)&&m.name==="Boolean";_[0]=E,_[1]=P,(E||X(_,"default"))&&a.push(h)}}const c=[o,a];return pe(t)&&s.set(t,c),c}function yc(t){return t[0]!=="$"&&!zs(t)}const cd=t=>t[0]==="_"||t==="$stable",Xa=t=>V(t)?t.map(Ct):[Ct(t)],Ug=(t,e,n)=>{if(e._n)return e;const s=Ys((...i)=>Xa(e(...i)),n);return s._c=!1,s},ud=(t,e,n)=>{const s=t._ctx;for(const i in t){if(cd(i))continue;const r=t[i];if($(r))e[i]=Ug(i,r,s);else if(r!=null){const o=Xa(r);e[i]=()=>o}}},hd=(t,e)=>{const n=Xa(e);t.slots.default=()=>n},dd=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Fg=(t,e,n)=>{const s=t.slots=rd();if(t.vnode.shapeFlag&32){const i=e._;i?(dd(s,e,n),n&&wh(s,"_",i,!0)):ud(e,s)}else e&&hd(t,e)},Bg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:dd(i,e,n):(r=!e.$stable,ud(e,i)),o=e}else e&&(hd(t,e),o={default:1});if(r)for(const a in i)!cd(a)&&o[a]==null&&delete i[a]},Qe=Zg;function Hg(t){return Wg(t)}function Wg(t,e){const n=bh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=Rt,insertStaticContent:m}=t,E=(f,p,g,w=null,v=null,b=null,A=void 0,R=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ms(f,p)&&(w=y(f),$e(f,v,b,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:I,ref:F,shapeFlag:x}=p;switch(I){case zr:P(f,p,g,w);break;case Wn:D(f,p,g,w);break;case bo:f==null&&k(p,g,w,A);break;case lt:An(f,p,g,w,v,b,A,R,T);break;default:x&1?z(f,p,g,w,v,b,A,R,T):x&6?yt(f,p,g,w,v,b,A,R,T):(x&64||x&128)&&I.process(f,p,g,w,v,b,A,R,T,L)}F!=null&&v&&Jo(F,f&&f.ref,b,p||f,!p)},P=(f,p,g,w)=>{if(f==null)s(p.el=a(p.children),g,w);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},D=(f,p,g,w)=>{f==null?s(p.el=l(p.children||""),g,w):p.el=f.el},k=(f,p,g,w)=>{[f.el,f.anchor]=m(f.children,p,g,w,f.el,f.anchor)},O=({el:f,anchor:p},g,w)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,w),f=v;s(p,g,w)},S=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},z=(f,p,g,w,v,b,A,R,T)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),f==null?he(p,g,w,v,b,A,R,T):nt(f,p,v,b,A,R,T)},he=(f,p,g,w,v,b,A,R)=>{let T,I;const{props:F,shapeFlag:x,transition:U,dirs:W}=f;if(T=f.el=o(f.type,b,F&&F.is,F),x&8?u(T,f.children):x&16&&Ne(f.children,T,null,w,v,Eo(f,b),A,R),W&&Nn(f,null,w,"created"),se(T,f,f.scopeId,A,w),F){for(const ce in F)ce!=="value"&&!zs(ce)&&r(T,ce,null,F[ce],b,w);"value"in F&&r(T,"value",null,F.value,b),(I=F.onVnodeBeforeMount)&&bt(I,w,f)}W&&Nn(f,null,w,"beforeMount");const Y=Vg(v,U);Y&&U.beforeEnter(T),s(T,p,g),((I=F&&F.onVnodeMounted)||Y||W)&&Qe(()=>{I&&bt(I,w,f),Y&&U.enter(T),W&&Nn(f,null,w,"mounted")},v)},se=(f,p,g,w,v)=>{if(g&&_(f,g),w)for(let b=0;b<w.length;b++)_(f,w[b]);if(v){let b=v.subTree;if(p===b||vd(b.type)&&(b.ssContent===p||b.ssFallback===p)){const A=v.vnode;se(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},Ne=(f,p,g,w,v,b,A,R,T=0)=>{for(let I=T;I<f.length;I++){const F=f[I]=R?ln(f[I]):Ct(f[I]);E(null,F,p,g,w,v,b,A,R)}},nt=(f,p,g,w,v,b,A)=>{const R=p.el=f.el;let{patchFlag:T,dynamicChildren:I,dirs:F}=p;T|=f.patchFlag&16;const x=f.props||ae,U=p.props||ae;let W;if(g&&kn(g,!1),(W=U.onVnodeBeforeUpdate)&&bt(W,g,p,f),F&&Nn(p,f,g,"beforeUpdate"),g&&kn(g,!0),(x.innerHTML&&U.innerHTML==null||x.textContent&&U.textContent==null)&&u(R,""),I?st(f.dynamicChildren,I,R,g,w,Eo(p,v),b):A||J(f,p,R,null,g,w,Eo(p,v),b,!1),T>0){if(T&16)tn(R,x,U,g,v);else if(T&2&&x.class!==U.class&&r(R,"class",null,U.class,v),T&4&&r(R,"style",x.style,U.style,v),T&8){const Y=p.dynamicProps;for(let ce=0;ce<Y.length;ce++){const te=Y[ce],ze=x[te],ke=U[te];(ke!==ze||te==="value")&&r(R,te,ze,ke,v,g)}}T&1&&f.children!==p.children&&u(R,p.children)}else!A&&I==null&&tn(R,x,U,g,v);((W=U.onVnodeUpdated)||F)&&Qe(()=>{W&&bt(W,g,p,f),F&&Nn(p,f,g,"updated")},w)},st=(f,p,g,w,v,b,A)=>{for(let R=0;R<p.length;R++){const T=f[R],I=p[R],F=T.el&&(T.type===lt||!Ms(T,I)||T.shapeFlag&70)?h(T.el):g;E(T,I,F,null,w,v,b,A,!0)}},tn=(f,p,g,w,v)=>{if(p!==g){if(p!==ae)for(const b in p)!zs(b)&&!(b in g)&&r(f,b,p[b],null,v,w);for(const b in g){if(zs(b))continue;const A=g[b],R=p[b];A!==R&&b!=="value"&&r(f,b,R,A,v,w)}"value"in g&&r(f,"value",p.value,g.value,v)}},An=(f,p,g,w,v,b,A,R,T)=>{const I=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:U,slotScopeIds:W}=p;W&&(R=R?R.concat(W):W),f==null?(s(I,g,w),s(F,g,w),Ne(p.children||[],g,F,v,b,A,R,T)):x>0&&x&64&&U&&f.dynamicChildren?(st(f.dynamicChildren,U,g,v,b,A,R),(p.key!=null||v&&p===v.subTree)&&fd(f,p,!0)):J(f,p,g,F,v,b,A,R,T)},yt=(f,p,g,w,v,b,A,R,T)=>{p.slotScopeIds=R,f==null?p.shapeFlag&512?v.ctx.activate(p,g,w,A,T):Os(p,g,w,v,b,A,T):Xn(f,p,T)},Os=(f,p,g,w,v,b,A)=>{const R=f.component=om(f,w,v);if(Jh(f)&&(R.ctx.renderer=L),am(R,!1,A),R.asyncDep){if(v&&v.registerDep(R,Ce,A),!f.el){const T=R.subTree=Pe(Wn);D(null,T,p,g)}}else Ce(R,f,p,g,v,b,A)},Xn=(f,p,g)=>{const w=p.component=f.component;if(Jg(f,p,g))if(w.asyncDep&&!w.asyncResolved){ie(w,p,g);return}else w.next=p,w.update();else p.el=f.el,w.vnode=p},Ce=(f,p,g,w,v,b,A)=>{const R=()=>{if(f.isMounted){let{next:x,bu:U,u:W,parent:Y,vnode:ce}=f;{const Ke=pd(f);if(Ke){x&&(x.el=ce.el,ie(f,x,A)),Ke.asyncDep.then(()=>{f.isUnmounted||R()});return}}let te=x,ze;kn(f,!1),x?(x.el=ce.el,ie(f,x,A)):x=ce,U&&Zi(U),(ze=x.props&&x.props.onVnodeBeforeUpdate)&&bt(ze,Y,x,ce),kn(f,!0);const ke=wo(f),at=f.subTree;f.subTree=ke,E(at,ke,h(at.el),y(at),f,v,b),x.el=ke.el,te===null&&Xg(f,ke.el),W&&Qe(W,v),(ze=x.props&&x.props.onVnodeUpdated)&&Qe(()=>bt(ze,Y,x,ce),v)}else{let x;const{el:U,props:W}=p,{bm:Y,m:ce,parent:te,root:ze,type:ke}=f,at=Qs(p);if(kn(f,!1),Y&&Zi(Y),!at&&(x=W&&W.onVnodeBeforeMount)&&bt(x,te,p),kn(f,!0),U&&_e){const Ke=()=>{f.subTree=wo(f),_e(U,f.subTree,f,v,null)};at&&ke.__asyncHydrate?ke.__asyncHydrate(U,f,Ke):Ke()}else{ze.ce&&ze.ce._injectChildStyle(ke);const Ke=f.subTree=wo(f);E(null,Ke,g,w,f,v,b),p.el=Ke.el}if(ce&&Qe(ce,v),!at&&(x=W&&W.onVnodeMounted)){const Ke=p;Qe(()=>bt(x,te,Ke),v)}(p.shapeFlag&256||te&&Qs(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&Qe(f.a,v),f.isMounted=!0,p=g=w=null}};f.scope.on();const T=f.effect=new Sh(R);f.scope.off();const I=f.update=T.run.bind(T),F=f.job=T.runIfDirty.bind(T);F.i=f,F.id=f.uid,T.scheduler=()=>Ya(F),kn(f,!0),I()},ie=(f,p,g)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,Mg(f,p.props,w,g),Bg(f,p.children,g),Tn(),dc(f),Sn()},J=(f,p,g,w,v,b,A,R,T=!1)=>{const I=f&&f.children,F=f?f.shapeFlag:0,x=p.children,{patchFlag:U,shapeFlag:W}=p;if(U>0){if(U&128){nn(I,x,g,w,v,b,A,R,T);return}else if(U&256){Ot(I,x,g,w,v,b,A,R,T);return}}W&8?(F&16&&it(I,v,b),x!==I&&u(g,x)):F&16?W&16?nn(I,x,g,w,v,b,A,R,T):it(I,v,b,!0):(F&8&&u(g,""),W&16&&Ne(x,g,w,v,b,A,R,T))},Ot=(f,p,g,w,v,b,A,R,T)=>{f=f||as,p=p||as;const I=f.length,F=p.length,x=Math.min(I,F);let U;for(U=0;U<x;U++){const W=p[U]=T?ln(p[U]):Ct(p[U]);E(f[U],W,g,null,v,b,A,R,T)}I>F?it(f,v,b,!0,!1,x):Ne(p,g,w,v,b,A,R,T,x)},nn=(f,p,g,w,v,b,A,R,T)=>{let I=0;const F=p.length;let x=f.length-1,U=F-1;for(;I<=x&&I<=U;){const W=f[I],Y=p[I]=T?ln(p[I]):Ct(p[I]);if(Ms(W,Y))E(W,Y,g,null,v,b,A,R,T);else break;I++}for(;I<=x&&I<=U;){const W=f[x],Y=p[U]=T?ln(p[U]):Ct(p[U]);if(Ms(W,Y))E(W,Y,g,null,v,b,A,R,T);else break;x--,U--}if(I>x){if(I<=U){const W=U+1,Y=W<F?p[W].el:w;for(;I<=U;)E(null,p[I]=T?ln(p[I]):Ct(p[I]),g,Y,v,b,A,R,T),I++}}else if(I>U)for(;I<=x;)$e(f[I],v,b,!0),I++;else{const W=I,Y=I,ce=new Map;for(I=Y;I<=U;I++){const Ye=p[I]=T?ln(p[I]):Ct(p[I]);Ye.key!=null&&ce.set(Ye.key,I)}let te,ze=0;const ke=U-Y+1;let at=!1,Ke=0;const xs=new Array(ke);for(I=0;I<ke;I++)xs[I]=0;for(I=W;I<=x;I++){const Ye=f[I];if(ze>=ke){$e(Ye,v,b,!0);continue}let wt;if(Ye.key!=null)wt=ce.get(Ye.key);else for(te=Y;te<=U;te++)if(xs[te-Y]===0&&Ms(Ye,p[te])){wt=te;break}wt===void 0?$e(Ye,v,b,!0):(xs[wt-Y]=I+1,wt>=Ke?Ke=wt:at=!0,E(Ye,p[wt],g,null,v,b,A,R,T),ze++)}const sc=at?$g(xs):as;for(te=sc.length-1,I=ke-1;I>=0;I--){const Ye=Y+I,wt=p[Ye],ic=Ye+1<F?p[Ye+1].el:w;xs[I]===0?E(null,wt,g,ic,v,b,A,R,T):at&&(te<0||I!==sc[te]?Et(wt,g,ic,2):te--)}}},Et=(f,p,g,w,v=null)=>{const{el:b,type:A,transition:R,children:T,shapeFlag:I}=f;if(I&6){Et(f.component.subTree,p,g,w);return}if(I&128){f.suspense.move(p,g,w);return}if(I&64){A.move(f,p,g,L);return}if(A===lt){s(b,p,g);for(let x=0;x<T.length;x++)Et(T[x],p,g,w);s(f.anchor,p,g);return}if(A===bo){O(f,p,g);return}if(w!==2&&I&1&&R)if(w===0)R.beforeEnter(b),s(b,p,g),Qe(()=>R.enter(b),v);else{const{leave:x,delayLeave:U,afterLeave:W}=R,Y=()=>s(b,p,g),ce=()=>{x(b,()=>{Y(),W&&W()})};U?U(b,Y,ce):ce()}else s(b,p,g)},$e=(f,p,g,w=!1,v=!1)=>{const{type:b,props:A,ref:R,children:T,dynamicChildren:I,shapeFlag:F,patchFlag:x,dirs:U,cacheIndex:W}=f;if(x===-2&&(v=!1),R!=null&&Jo(R,null,g,f,!0),W!=null&&(p.renderCache[W]=void 0),F&256){p.ctx.deactivate(f);return}const Y=F&1&&U,ce=!Qs(f);let te;if(ce&&(te=A&&A.onVnodeBeforeUnmount)&&bt(te,p,f),F&6)Wi(f.component,g,w);else{if(F&128){f.suspense.unmount(g,w);return}Y&&Nn(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,g,L,w):I&&!I.hasOnce&&(b!==lt||x>0&&x&64)?it(I,p,g,!1,!0):(b===lt&&x&384||!v&&F&16)&&it(T,p,g),w&&Zn(f)}(ce&&(te=A&&A.onVnodeUnmounted)||Y)&&Qe(()=>{te&&bt(te,p,f),Y&&Nn(f,null,p,"unmounted")},g)},Zn=f=>{const{type:p,el:g,anchor:w,transition:v}=f;if(p===lt){es(g,w);return}if(p===bo){S(f);return}const b=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:R}=v,T=()=>A(g,b);R?R(f.el,b,T):T()}else b()},es=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Wi=(f,p,g)=>{const{bum:w,scope:v,job:b,subTree:A,um:R,m:T,a:I}=f;Ec(T),Ec(I),w&&Zi(w),v.stop(),b&&(b.flags|=8,$e(A,f,p,g)),R&&Qe(R,p),Qe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},it=(f,p,g,w=!1,v=!1,b=0)=>{for(let A=b;A<f.length;A++)$e(f[A],p,g,w,v)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[hg];return g?d(g):p};let M=!1;const N=(f,p,g)=>{f==null?p._vnode&&$e(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,g),p._vnode=f,M||(M=!0,dc(),qh(),M=!1)},L={p:E,um:$e,m:Et,r:Zn,mt:Os,mc:Ne,pc:J,pbc:st,n:y,o:t};let ee,_e;return{render:N,hydrate:ee,createApp:xg(N,ee)}}function Eo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Vg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fd(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=ln(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&fd(o,a)),a.type===zr&&(a.el=o.el)}}function $g(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function pd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pd(e)}function Ec(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const jg=Symbol.for("v-scx"),Gg=()=>$t(jg);function tr(t,e,n){return _d(t,e,n)}function _d(t,e,n=ae){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ae({},n);let l;if(Kr)if(r==="sync"){const d=Gg();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!e||s)a.once=!0;else return{stop:Rt,resume:Rt,pause:Rt};const c=De;a.call=(d,_,m)=>Nt(d,c,_,m);let u=!1;r==="post"?a.scheduler=d=>{Qe(d,c&&c.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(d,_)=>{_?d():Ya(d)}),a.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=ag(t,e,a);return l&&l.push(h),h}function qg(t,e,n){const s=this.proxy,i=we(t)?t.includes(".")?gd(s,t):()=>s[t]:t.bind(s,s);let r;$(e)?r=e:(r=e.handler,n=e);const o=Pi(this),a=_d(i,r.bind(s),n);return o(),a}function gd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const zg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mt(e)}Modifiers`]||t[`${Yn(e)}Modifiers`];function Kg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&zg(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>we(u)?u.trim():u)),o.number&&(i=n.map(Go)));let a,l=s[a=po(e)]||s[a=po(mt(e))];!l&&r&&(l=s[a=po(Yn(e))]),l&&Nt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nt(c,t,6,i)}}function md(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!$(t)){const l=c=>{const u=md(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(pe(t)&&s.set(t,null),null):(V(r)?r.forEach(l=>o[l]=null):Ae(o,r),pe(t)&&s.set(t,o),o)}function qr(t,e){return!t||!Ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Yn(e))||X(t,e))}function wo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:m,inheritAttrs:E}=t,P=ur(t);let D,k;try{if(n.shapeFlag&4){const S=i||s,z=S;D=Ct(c.call(z,S,u,h,_,d,m)),k=a}else{const S=e;D=Ct(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),k=e.props?a:Yg(a)}}catch(S){Xs.length=0,jr(S,t,1),D=Pe(Wn)}let O=D;if(k&&E!==!1){const S=Object.keys(k),{shapeFlag:z}=O;S.length&&z&7&&(r&&S.some(Da)&&(k=Qg(k,r)),O=vs(O,k,!1,!0))}return n.dirs&&(O=vs(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&Qa(O,n.transition),D=O,ur(P),D}const Yg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ur(n))&&((e||(e={}))[n]=t[n]);return e},Qg=(t,e)=>{const n={};for(const s in t)(!Da(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Jg(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?wc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!qr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?wc(s,o,c):!0:!!o;return!1}function wc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!qr(n,r))return!0}return!1}function Xg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const vd=t=>t.__isSuspense;function Zg(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):ug(t)}const lt=Symbol.for("v-fgt"),zr=Symbol.for("v-txt"),Wn=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),Xs=[];let et=null;function fe(t=!1){Xs.push(et=t?null:[])}function em(){Xs.pop(),et=Xs[Xs.length-1]||null}let di=1;function bc(t){di+=t,t<0&&et&&(et.hasOnce=!0)}function yd(t){return t.dynamicChildren=di>0?et||as:null,em(),di>0&&et&&et.push(t),t}function ge(t,e,n,s,i,r){return yd(K(t,e,n,s,i,r,!0))}function na(t,e,n,s,i){return yd(Pe(t,e,n,s,i,!0))}function sa(t){return t?t.__v_isVNode===!0:!1}function Ms(t,e){return t.type===e.type&&t.key===e.key}const Ed=({key:t})=>t??null,nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?we(t)||Me(t)||$(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,s=0,i=null,r=t===lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ed(e),ref:e&&nr(e),scopeId:Kh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ze};return a?(Za(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),di>0&&!o&&et&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&et.push(l),l}const Pe=tm;function tm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Cg)&&(t=Wn),sa(t)){const a=vs(t,e,!0);return n&&Za(a,n),di>0&&!r&&et&&(a.shapeFlag&6?et[et.indexOf(t)]=a:et.push(a)),a.patchFlag=-2,a}if(dm(t)&&(t=t.__vccOpts),e){e=nm(e);let{class:a,style:l}=e;a&&!we(a)&&(e.class=Fa(a)),pe(l)&&(qa(l)&&!V(l)&&(l=Ae({},l)),e.style=Ua(l))}const o=we(t)?1:vd(t)?128:dg(t)?64:pe(t)?4:$(t)?2:0;return K(t,e,n,s,i,o,r,!0)}function nm(t){return t?qa(t)||od(t)?Ae({},t):t:null}function vs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?sm(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ed(c),ref:e&&e.ref?n&&r?V(r)?r.concat(nr(e)):[r,nr(e)]:nr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vs(t.ssContent),ssFallback:t.ssFallback&&vs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Qa(u,l.clone(u)),u}function pn(t=" ",e=0){return Pe(zr,null,t,e)}function He(t="",e=!1){return e?(fe(),na(Wn,null,t)):Pe(Wn,null,t)}function Ct(t){return t==null||typeof t=="boolean"?Pe(Wn):V(t)?Pe(lt,null,t.slice()):typeof t=="object"?ln(t):Pe(zr,null,String(t))}function ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vs(t)}function Za(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Za(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!od(e)?e._ctx=Ze:i===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),s&64?(n=16,e=[pn(e)]):n=8);t.children=e,t.shapeFlag|=n}function sm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Fa([e.class,s.class]));else if(i==="style")e.style=Ua([e.style,s.style]);else if(Ur(i)){const r=e[i],o=s[i];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function bt(t,e,n,s=null){Nt(t,e,7,[n,s])}const im=sd();let rm=0;function om(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||im,r={uid:rm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new O_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ld(s,i),emitsOptions:md(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Kg.bind(null,r),t.ce&&t.ce(r),r}let De=null,fr,ia;{const t=bh(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};fr=e("__VUE_INSTANCE_SETTERS__",n=>De=n),ia=e("__VUE_SSR_SETTERS__",n=>Kr=n)}const Pi=t=>{const e=De;return fr(t),t.scope.on(),()=>{t.scope.off(),fr(e)}},Ic=()=>{De&&De.scope.off(),fr(null)};function wd(t){return t.vnode.shapeFlag&4}let Kr=!1;function am(t,e=!1,n=!1){e&&ia(e);const{props:s,children:i}=t.vnode,r=wd(t);Dg(t,s,r,e),Fg(t,i,n);const o=r?lm(t,e):void 0;return e&&ia(!1),o}function lm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sg);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?um(t):null,r=Pi(t);Tn();const o=Ri(s,t,0,[t.props,i]);if(Sn(),r(),vh(o)){if(Qs(t)||Qh(t),o.then(Ic,Ic),e)return o.then(a=>{Cc(t,a,e)}).catch(a=>{jr(a,t,0)});t.asyncDep=o}else Cc(t,o,e)}else bd(t,e)}function Cc(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Vh(e)),bd(t,n)}let Tc;function bd(t,e,n){const s=t.type;if(!t.render){if(!e&&Tc&&!s.render){const i=s.template||Ja(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ae(Ae({isCustomElement:r,delimiters:a},o),l);s.render=Tc(i,c)}}t.render=s.render||Rt}{const i=Pi(t);Tn();try{Rg(t)}finally{Sn(),i()}}}const cm={get(t,e){return Le(t,"get",""),t[e]}};function um(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cm),slots:t.slots,emit:t.emit,expose:e}}function Yr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vh(eg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Js)return Js[n](t)},has(e,n){return n in e||n in Js}})):t.proxy}function hm(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function dm(t){return $(t)&&"__vccOpts"in t}const ct=(t,e)=>rg(t,e,Kr);function Id(t,e,n){const s=arguments.length;return s===2?pe(e)&&!V(e)?sa(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&sa(n)&&(n=[n]),Pe(t,e,n))}const fm="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ra;const Sc=typeof window<"u"&&window.trustedTypes;if(Sc)try{ra=Sc.createPolicy("vue",{createHTML:t=>t})}catch{}const Cd=ra?t=>ra.createHTML(t):t=>t,pm="http://www.w3.org/2000/svg",_m="http://www.w3.org/1998/Math/MathML",Mt=typeof document<"u"?document:null,Rc=Mt&&Mt.createElement("template"),gm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Mt.createElementNS(pm,t):e==="mathml"?Mt.createElementNS(_m,t):n?Mt.createElement(t,{is:n}):Mt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Mt.createTextNode(t),createComment:t=>Mt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Rc.innerHTML=Cd(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Rc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mm=Symbol("_vtc");function vm(t,e,n){const s=t[mm];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pc=Symbol("_vod"),ym=Symbol("_vsh"),Em=Symbol(""),wm=/(^|;)\s*display\s*:/;function bm(t,e,n){const s=t.style,i=we(n);let r=!1;if(n&&!i){if(e)if(we(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&sr(s,a,"")}else for(const o in e)n[o]==null&&sr(s,o,"");for(const o in n)o==="display"&&(r=!0),sr(s,o,n[o])}else if(i){if(e!==n){const o=s[Em];o&&(n+=";"+o),s.cssText=n,r=wm.test(n)}}else e&&t.removeAttribute("style");Pc in t&&(t[Pc]=r?s.display:"",t[ym]&&(s.display="none"))}const Ac=/\s*!important$/;function sr(t,e,n){if(V(n))n.forEach(s=>sr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Im(t,e);Ac.test(n)?t.setProperty(Yn(s),n.replace(Ac,""),"important"):t[s]=n}}const Nc=["Webkit","Moz","ms"],Io={};function Im(t,e){const n=Io[e];if(n)return n;let s=mt(e);if(s!=="filter"&&s in t)return Io[e]=s;s=Hr(s);for(let i=0;i<Nc.length;i++){const r=Nc[i]+s;if(r in t)return Io[e]=r}return e}const kc="http://www.w3.org/1999/xlink";function Oc(t,e,n,s,i,r=k_(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(kc,e.slice(6,e.length)):t.setAttributeNS(kc,e,n):n==null||r&&!Ih(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Cn(n)?String(n):n)}function Cm(t,e,n,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Cd(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let r=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Ih(n):n==null&&o==="string"?(n="",r=!0):o==="number"&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(e)}function is(t,e,n,s){t.addEventListener(e,n,s)}function Tm(t,e,n,s){t.removeEventListener(e,n,s)}const xc=Symbol("_vei");function Sm(t,e,n,s,i=null){const r=t[xc]||(t[xc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Rm(e);if(s){const c=r[e]=Nm(s,i);is(t,a,c,l)}else o&&(Tm(t,a,o,l),r[e]=void 0)}}const Dc=/(?:Once|Passive|Capture)$/;function Rm(t){let e;if(Dc.test(t)){e={};let s;for(;s=t.match(Dc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yn(t.slice(2)),e]}let Co=0;const Pm=Promise.resolve(),Am=()=>Co||(Pm.then(()=>Co=0),Co=Date.now());function Nm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Nt(km(s,n.value),e,5,[s])};return n.value=t,n.attached=Am(),n}function km(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Mc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Om=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?vm(t,s,o):e==="style"?bm(t,n,s):Ur(e)?Da(e)||Sm(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xm(t,e,s,o))?(Cm(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Oc(t,e,s,o,r,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Oc(t,e,s,o))};function xm(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mc(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Mc(e)&&we(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!we(n)))}const Lc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Zi(e,n):e};function Dm(t){t.target.composing=!0}function Uc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const To=Symbol("_assign"),oa={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[To]=Lc(i);const r=s||i.props&&i.props.type==="number";is(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Go(a)),t[To](a)}),n&&is(t,"change",()=>{t.value=t.value.trim()}),e||(is(t,"compositionstart",Dm),is(t,"compositionend",Uc),is(t,"change",Uc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[To]=Lc(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Go(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Mm=["ctrl","shift","alt","meta"],Lm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mm.some(n=>t[`${n}Key`]&&!e.includes(n))},Td=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Lm[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Um=Ae({patchProp:Om},gm);let Fc;function Fm(){return Fc||(Fc=Hg(Um))}const Bm=(...t)=>{const e=Fm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Wm(s);if(!i)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Hm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Hm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Wm(t){return we(t)?document.querySelector(t):t}var Bc={};/**
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
 */const Sd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Ss(e)},Ss=function(t){return new Error("Firebase Database ("+Sd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Rd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},el={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new $m;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pd=function(t){const e=Rd(t);return el.encodeByteArray(e,!0)},pr=function(t){return Pd(t).replace(/\./g,"")},_r=function(t){try{return el.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jm(t){return Ad(void 0,t)}function Ad(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Gm(n)||(t[n]=Ad(t[n],e[n]));return t}function Gm(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function qm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const zm=()=>qm().__FIREBASE_DEFAULTS__,Km=()=>{if(typeof process>"u"||typeof Bc>"u")return;const t=Bc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ym=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},tl=()=>{try{return zm()||Km()||Ym()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nd=t=>{var e,n;return(n=(e=tl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kd=t=>{const e=Nd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Od=()=>{var t;return(t=tl())===null||t===void 0?void 0:t.config},xd=t=>{var e;return(e=tl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Qr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Dd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pr(JSON.stringify(n)),pr(JSON.stringify(o)),""].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Qm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Md(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jm(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ld(){return Sd.NODE_ADMIN===!0}function Xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Zm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const ev="FirebaseError";class Jt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ev,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?tv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,a,s)}}function tv(t,e){return t.replace(nv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const nv=/\{\$([^}]+)}/g;/**
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
 */function fi(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
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
 */const Ud=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=fi(_r(r[0])||""),n=fi(_r(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},sv=function(t){const e=Ud(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iv=function(t){const e=Ud(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ys(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function aa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Hc(r)&&Hc(o)){if(!mr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Hc(t){return t!==null&&typeof t=="object"}/**
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
 */function Rs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class rv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ov(t,e){const n=new av(t,e);return n.subscribe.bind(n)}class av{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");lv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=So),i.error===void 0&&(i.error=So),i.complete===void 0&&(i.complete=So);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function So(){}function sl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const cv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ee(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xn="[DEFAULT]";/**
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
 */class uv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dv(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hv(t){return t===xn?void 0:t}function dv(t){return t.instantiationMode==="EAGER"}/**
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
 */class fv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const pv={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},_v=re.INFO,gv={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},mv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=gv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class il{constructor(e){this.name=e,this._logLevel=_v,this._logHandler=mv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const vv=(t,e)=>e.some(n=>t instanceof n);let Wc,Vc;function yv(){return Wc||(Wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ev(){return Vc||(Vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fd=new WeakMap,la=new WeakMap,Bd=new WeakMap,Ro=new WeakMap,rl=new WeakMap;function wv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(_n(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fd.set(n,t)}).catch(()=>{}),rl.set(e,t),e}function bv(t){if(la.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});la.set(t,e)}let ca={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return la.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Iv(t){ca=t(ca)}function Cv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Po(this),e,...n);return Bd.set(s,e.sort?e.sort():[e]),_n(s)}:Ev().includes(t)?function(...e){return t.apply(Po(this),e),_n(Fd.get(this))}:function(...e){return _n(t.apply(Po(this),e))}}function Tv(t){return typeof t=="function"?Cv(t):(t instanceof IDBTransaction&&bv(t),vv(t,yv())?new Proxy(t,ca):t)}function _n(t){if(t instanceof IDBRequest)return wv(t);if(Ro.has(t))return Ro.get(t);const e=Tv(t);return e!==t&&(Ro.set(t,e),rl.set(e,t)),e}const Po=t=>rl.get(t);function Sv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",l=>{s(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Rv=["get","getKey","getAll","getAllKeys","count"],Pv=["put","add","delete","clear"],Ao=new Map;function $c(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Pv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Rv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ao.set(e,r),r}Iv(t=>({...t,get:(e,n,s)=>$c(e,n)||t.get(e,n,s),has:(e,n)=>!!$c(e,n)||t.has(e,n)}));/**
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
 */class Av{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ua="@firebase/app",jc="0.10.10";/**
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
 */const zt=new il("@firebase/app"),kv="@firebase/app-compat",Ov="@firebase/analytics-compat",xv="@firebase/analytics",Dv="@firebase/app-check-compat",Mv="@firebase/app-check",Lv="@firebase/auth",Uv="@firebase/auth-compat",Fv="@firebase/database",Bv="@firebase/database-compat",Hv="@firebase/functions",Wv="@firebase/functions-compat",Vv="@firebase/installations",$v="@firebase/installations-compat",jv="@firebase/messaging",Gv="@firebase/messaging-compat",qv="@firebase/performance",zv="@firebase/performance-compat",Kv="@firebase/remote-config",Yv="@firebase/remote-config-compat",Qv="@firebase/storage",Jv="@firebase/storage-compat",Xv="@firebase/firestore",Zv="@firebase/vertexai-preview",ey="@firebase/firestore-compat",ty="firebase",ny="10.13.1";/**
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
 */const ha="[DEFAULT]",sy={[ua]:"fire-core",[kv]:"fire-core-compat",[xv]:"fire-analytics",[Ov]:"fire-analytics-compat",[Mv]:"fire-app-check",[Dv]:"fire-app-check-compat",[Lv]:"fire-auth",[Uv]:"fire-auth-compat",[Fv]:"fire-rtdb",[Bv]:"fire-rtdb-compat",[Hv]:"fire-fn",[Wv]:"fire-fn-compat",[Vv]:"fire-iid",[$v]:"fire-iid-compat",[jv]:"fire-fcm",[Gv]:"fire-fcm-compat",[qv]:"fire-perf",[zv]:"fire-perf-compat",[Kv]:"fire-rc",[Yv]:"fire-rc-compat",[Qv]:"fire-gcs",[Jv]:"fire-gcs-compat",[Xv]:"fire-fst",[ey]:"fire-fst-compat",[Zv]:"fire-vertex","fire-js":"fire-js",[ty]:"fire-js-all"};/**
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
 */const vr=new Map,iy=new Map,da=new Map;function Gc(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(da.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;da.set(e,t);for(const n of vr.values())Gc(n,t);for(const n of iy.values())Gc(n,t);return!0}function Xr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ht(t){return t.settings!==void 0}/**
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
 */const ry={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gn=new Ai("app","Firebase",ry);/**
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
 */class oy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
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
 */const Qn=ny;function Hd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ha,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gn.create("bad-app-name",{appName:String(i)});if(n||(n=Od()),!n)throw gn.create("no-options");const r=vr.get(i);if(r){if(mr(n,r.options)&&mr(s,r.config))return r;throw gn.create("duplicate-app",{appName:i})}const o=new fv(i);for(const l of da.values())o.addComponent(l);const a=new oy(n,s,o);return vr.set(i,a),a}function ol(t=ha){const e=vr.get(t);if(!e&&t===ha&&Od())return Hd();if(!e)throw gn.create("no-app",{appName:t});return e}function Pt(t,e,n){var s;let i=(s=sy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}Vn(new En(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ay="firebase-heartbeat-database",ly=1,pi="firebase-heartbeat-store";let No=null;function Wd(){return No||(No=Sv(ay,ly,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw gn.create("idb-open",{originalErrorMessage:t.message})})),No}async function cy(t){try{const n=(await Wd()).transaction(pi),s=await n.objectStore(pi).get(Vd(t));return await n.done,s}catch(e){if(e instanceof Jt)zt.warn(e.message);else{const n=gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(n.message)}}}async function qc(t,e){try{const s=(await Wd()).transaction(pi,"readwrite");await s.objectStore(pi).put(e,Vd(t)),await s.done}catch(n){if(n instanceof Jt)zt.warn(n.message);else{const s=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(s.message)}}}function Vd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uy=1024,hy=30*24*60*60*1e3;class dy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new py(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=hy}),this._storage.overwrite(this._heartbeatsCache))}catch(s){zt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zc(),{heartbeatsToSend:s,unsentEntries:i}=fy(this._heartbeatsCache.heartbeats),r=pr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return zt.warn(n),""}}}function zc(){return new Date().toISOString().substring(0,10)}function fy(t,e=uy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Kc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class py{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xm()?Zm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kc(t){return pr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _y(t){Vn(new En("platform-logger",e=>new Av(e),"PRIVATE")),Vn(new En("heartbeat",e=>new dy(e),"PRIVATE")),Pt(ua,jc,t),Pt(ua,jc,"esm2017"),Pt("fire-js","")}_y("");var gy="firebase",my="10.13.1";/**
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
 */Pt(gy,my,"app");function al(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function $d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vy=$d,jd=new Ai("auth","Firebase",$d());/**
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
 */const yr=new il("@firebase/auth");function yy(t,...e){yr.logLevel<=re.WARN&&yr.warn(`Auth (${Qn}): ${t}`,...e)}function ir(t,...e){yr.logLevel<=re.ERROR&&yr.error(`Auth (${Qn}): ${t}`,...e)}/**
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
 */function ot(t,...e){throw cl(t,...e)}function _t(t,...e){return cl(t,...e)}function ll(t,e,n){const s=Object.assign(Object.assign({},vy()),{[e]:n});return new Ai("auth","Firebase",s).create(e,{appName:t.name})}function jt(t){return ll(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ey(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ot(t,"argument-error"),ll(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return jd.create(t,...e)}function H(t,e,...n){if(!t)throw cl(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ir(e),new Error(e)}function Kt(t,e){t||Ft(e)}/**
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
 */function fa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wy(){return Yc()==="http:"||Yc()==="https:"}function Yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function by(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wy()||Qm()||"connection"in navigator)?navigator.onLine:!0}function Iy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=nl()||Md()}get(){return by()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ul(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Cy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ty=new Ni(3e4,6e4);function Rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zt(t,e,n,s,i={}){return qd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Rs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Gd.fetch()(zd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function qd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Cy),e);try{const i=new Ry(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ki(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ki(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ki(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ki(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ll(t,u,c);ot(t,u)}}catch(i){if(i instanceof Jt)throw i;ot(t,"network-request-failed",{message:String(i)})}}async function ki(t,e,n,s,i={}){const r=await Zt(t,e,n,s,i);return"mfaPendingCredential"in r&&ot(t,"multi-factor-auth-required",{_serverResponse:r}),r}function zd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ul(t.config,i):`${t.config.apiScheme}://${i}`}function Sy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ry{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(_t(this.auth,"network-request-failed")),Ty.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ki(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=_t(t,e,s);return i.customData._tokenResponse=n,i}function Qc(t){return t!==void 0&&t.enterprise!==void 0}class Py{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Sy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ay(t,e){return Zt(t,"GET","/v2/recaptchaConfig",Rn(t,e))}/**
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
 */async function Ny(t,e){return Zt(t,"POST","/v1/accounts:delete",e)}async function Kd(t,e){return Zt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ky(t,e=!1){const n=Ee(t),s=await n.getIdToken(e),i=hl(s);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Zs(ko(i.auth_time)),issuedAtTime:Zs(ko(i.iat)),expirationTime:Zs(ko(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ko(t){return Number(t)*1e3}function hl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ir("JWT malformed, contained fewer than 3 sections"),null;try{const i=_r(n);return i?JSON.parse(i):(ir("Failed to decode base64 JWT payload"),null)}catch(i){return ir("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jc(t){const e=hl(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Es(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Jt&&Oy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Oy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Er(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Es(t,Kd(n,{idToken:s}));H(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Yd(r.providerUserInfo):[],a=My(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new pa(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Dy(t){const e=Ee(t);await Er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function My(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Yd(t){return t.map(e=>{var{providerId:n}=e,s=al(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Ly(t,e){const n=await qd(t,{},async()=>{const s=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=zd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Gd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Uy(t,e){return Zt(t,"POST","/v2/accounts:revokeToken",Rn(t,e))}/**
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
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Jc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ly(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new fs;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function rn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=al(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new pa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Es(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ky(this,e)}reload(){return Dy(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Er(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await Es(this,Ny(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,D=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:S,isAnonymous:z,providerData:he,stsTokenManager:se}=n;H(O&&se,e,"internal-error");const Ne=fs.fromJSON(this.name,se);H(typeof O=="string",e,"internal-error"),rn(h,e.name),rn(d,e.name),H(typeof S=="boolean",e,"internal-error"),H(typeof z=="boolean",e,"internal-error"),rn(_,e.name),rn(m,e.name),rn(E,e.name),rn(P,e.name),rn(D,e.name),rn(k,e.name);const nt=new Bt({uid:O,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:z,photoURL:m,phoneNumber:_,tenantId:E,stsTokenManager:Ne,createdAt:D,lastLoginAt:k});return he&&Array.isArray(he)&&(nt.providerData=he.map(st=>Object.assign({},st))),P&&(nt._redirectEventId=P),nt}static async _fromIdTokenResponse(e,n,s=!1){const i=new fs;i.updateFromServerResponse(n);const r=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Er(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Yd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new fs;a.updateFromIdToken(s);const l=new Bt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new pa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Xc=new Map;function Ht(t){Kt(t instanceof Function,"Expected a class definition");let e=Xc.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xc.set(t,e),e)}/**
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
 */class Qd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qd.type="NONE";const Zc=Qd;/**
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
 */function rr(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=rr(this.userKey,i.apiKey,r),this.fullPersistenceKey=rr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ps(Ht(Zc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ht(Zc);const o=rr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Bt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ps(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ps(r,e,s))}}/**
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
 */function eu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ef(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nf(e))return"Blackberry";if(sf(e))return"Webos";if(Xd(e))return"Safari";if((e.includes("chrome/")||Zd(e))&&!e.includes("edge/"))return"Chrome";if(tf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Jd(t=Ve()){return/firefox\//i.test(t)}function Xd(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zd(t=Ve()){return/crios\//i.test(t)}function ef(t=Ve()){return/iemobile/i.test(t)}function tf(t=Ve()){return/android/i.test(t)}function nf(t=Ve()){return/blackberry/i.test(t)}function sf(t=Ve()){return/webos/i.test(t)}function dl(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fy(t=Ve()){var e;return dl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function By(){return Jm()&&document.documentMode===10}function rf(t=Ve()){return dl(t)||tf(t)||sf(t)||nf(t)||/windows phone/i.test(t)||ef(t)}/**
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
 */function of(t,e=[]){let n;switch(t){case"Browser":n=eu(Ve());break;case"Worker":n=`${eu(Ve())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Hy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Wy(t,e={}){return Zt(t,"GET","/v2/passwordPolicy",Rn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Vy=6;class $y{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Vy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class jy{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tu(this),this.idTokenSubscription=new tu(this),this.beforeStateQueue=new Hy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kd(this,{idToken:e}),s=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Er(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Iy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(jt(this));const n=e?Ee(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wy(this),n=new $y(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Uy(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=of(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pn(t){return Ee(t)}class tu{constructor(e){this.auth=e,this.observer=null,this.addObserver=ov(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gy(t){Zr=t}function af(t){return Zr.loadJS(t)}function qy(){return Zr.recaptchaEnterpriseScript}function zy(){return Zr.gapiScript}function Ky(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Yy="recaptcha-enterprise",Qy="NO_RECAPTCHA";class Jy{constructor(e){this.type=Yy,this.auth=Pn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ay(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Py(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Qc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Qy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Qc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=qy();l.length!==0&&(l+=a),af(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function nu(t,e,n,s=!1){const i=new Jy(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function _a(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await nu(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await nu(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
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
 */function Xy(t,e){const n=Xr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(mr(r,e??{}))return i;ot(i,"already-initialized")}return n.initialize({options:e})}function Zy(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function eE(t,e,n){const s=Pn(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=lf(e),{host:o,port:a}=tE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),nE()}function lf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tE(t){const e=lf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:su(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:su(o)}}}function su(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class fl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function sE(t,e){return Zt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function iE(t,e){return ki(t,"POST","/v1/accounts:signInWithPassword",Rn(t,e))}/**
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
 */async function rE(t,e){return ki(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}async function oE(t,e){return ki(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}/**
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
 */class _i extends fl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _i(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new _i(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _a(e,n,"signInWithPassword",iE);case"emailLink":return rE(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _a(e,s,"signUpPassword",sE);case"emailLink":return oE(e,{idToken:n,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _s(t,e){return ki(t,"POST","/v1/accounts:signInWithIdp",Rn(t,e))}/**
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
 */const aE="http://localhost";class $n extends fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=al(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new $n(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_s(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:aE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rs(n)}return e}}/**
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
 */function lE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cE(t){const e=$s(js(t)).link,n=e?$s(js(e)).deep_link_id:null,s=$s(js(t)).deep_link_id;return(s?$s(js(s)).link:null)||s||n||e||t}class pl{constructor(e){var n,s,i,r,o,a;const l=$s(js(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=lE((i=l.mode)!==null&&i!==void 0?i:null);H(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cE(e);try{return new pl(n)}catch{return null}}}/**
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
 */class Ps{constructor(){this.providerId=Ps.PROVIDER_ID}static credential(e,n){return _i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=pl.parseLink(n);return H(s,"argument-error"),_i._fromEmailAndCode(e,s.code,s.tenantId)}}Ps.PROVIDER_ID="password";Ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oi extends _l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends Oi{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ut.credential(n,s)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class hn extends Oi{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class dn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
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
 */async function uE(t,e){return ki(t,"POST","/v1/accounts:signUp",Rn(t,e))}/**
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
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Bt._fromIdTokenResponse(e,s,i),o=iu(s);return new jn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=iu(s);return new jn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function iu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wr extends Jt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,wr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new wr(e,n,s,i)}}function cf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?wr._fromErrorAndOperation(t,r,e,s):r})}async function hE(t,e,n=!1){const s=await Es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",s)}/**
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
 */async function dE(t,e,n=!1){const{auth:s}=t;if(ht(s.app))return Promise.reject(jt(s));const i="reauthenticate";try{const r=await Es(t,cf(s,i,e,t),n);H(r.idToken,s,"internal-error");const o=hl(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),jn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ot(s,"user-mismatch"),r}}/**
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
 */async function uf(t,e,n=!1){if(ht(t.app))return Promise.reject(jt(t));const s="signIn",i=await cf(t,s,e),r=await jn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function fE(t,e){return uf(Pn(t),e)}/**
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
 */async function hf(t){const e=Pn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pE(t,e,n){if(ht(t.app))return Promise.reject(jt(t));const s=Pn(t),o=await _a(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uE).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&hf(t),l}),a=await jn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function _E(t,e,n){return ht(t.app)?Promise.reject(jt(t)):fE(Ee(t),Ps.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&hf(t),s})}/**
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
 */async function gE(t,e){return Zt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ee(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Es(s,gE(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function vE(t,e,n,s){return Ee(t).onIdTokenChanged(e,n,s)}function yE(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function gl(t,e,n,s){return Ee(t).onAuthStateChanged(e,n,s)}function df(t){return Ee(t).signOut()}const br="__sak";/**
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
 */class ff{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const EE=1e3,wE=10;class pf extends ff{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);By()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},EE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pf.type="LOCAL";const bE=pf;/**
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
 */class _f extends ff{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_f.type="SESSION";const gf=_f;/**
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
 */function IE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class eo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new eo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await IE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eo.receivers=[];/**
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
 */function ml(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class CE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ml("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function TE(t){At().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function mf(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function SE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PE(){return mf()?self:null}/**
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
 */const vf="firebaseLocalStorageDb",AE=1,Ir="firebaseLocalStorage",yf="fbase_key";class xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function to(t,e){return t.transaction([Ir],e?"readwrite":"readonly").objectStore(Ir)}function NE(){const t=indexedDB.deleteDatabase(vf);return new xi(t).toPromise()}function ga(){const t=indexedDB.open(vf,AE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ir,{keyPath:yf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ir)?e(s):(s.close(),await NE(),e(await ga()))})})}async function ru(t,e,n){const s=to(t,!0).put({[yf]:e,value:n});return new xi(s).toPromise()}async function kE(t,e){const n=to(t,!1).get(e),s=await new xi(n).toPromise();return s===void 0?null:s.value}function ou(t,e){const n=to(t,!0).delete(e);return new xi(n).toPromise()}const OE=800,xE=3;class Ef{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ga(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>xE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eo._getInstance(PE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SE(),!this.activeServiceWorker)return;this.sender=new CE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ga();return await ru(e,br,"1"),await ou(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ru(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>kE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ou(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=to(i,!1).getAll();return new xi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ef.type="LOCAL";const DE=Ef;new Ni(3e4,6e4);/**
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
 */function wf(t,e){return e?Ht(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vl extends fl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ME(t){return uf(t.auth,new vl(t),t.bypassAuthState)}function LE(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),dE(n,new vl(t),t.bypassAuthState)}async function UE(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),hE(n,new vl(t),t.bypassAuthState)}/**
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
 */class bf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ME;case"linkViaPopup":case"linkViaRedirect":return UE;case"reauthViaPopup":case"reauthViaRedirect":return LE;default:ot(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FE=new Ni(2e3,1e4);async function BE(t,e,n){if(ht(t.app))return Promise.reject(_t(t,"operation-not-supported-in-this-environment"));const s=Pn(t);Ey(t,e,_l);const i=wf(s,n);return new Mn(s,"signInViaPopup",e,i).executeNotNull()}class Mn extends bf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FE.get())};e()}}Mn.currentPopupAction=null;/**
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
 */const HE="pendingRedirect",or=new Map;class WE extends bf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=or.get(this.auth._key());if(!e){try{const s=await VE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}or.set(this.auth._key(),e)}return this.bypassAuthState||or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VE(t,e){const n=GE(e),s=jE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function $E(t,e){or.set(t._key(),e)}function jE(t){return Ht(t._redirectPersistence)}function GE(t){return rr(HE,t.config.apiKey,t.name)}async function qE(t,e,n=!1){if(ht(t.app))return Promise.reject(jt(t));const s=Pn(t),i=wf(s,e),o=await new WE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const zE=10*60*1e3;class KE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!If(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zE&&this.cachedEventUids.clear(),this.cachedEventUids.has(au(e))}saveEventToCache(e){this.cachedEventUids.add(au(e)),this.lastProcessedEventTime=Date.now()}}function au(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function If({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return If(t);default:return!1}}/**
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
 */async function QE(t,e={}){return Zt(t,"GET","/v1/projects",e)}/**
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
 */const JE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XE=/^https?/;async function ZE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QE(t);for(const n of e)try{if(ew(n))return}catch{}ot(t,"unauthorized-domain")}function ew(t){const e=fa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!XE.test(n))return!1;if(JE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const tw=new Ni(3e4,6e4);function lu(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nw(t){return new Promise((e,n)=>{var s,i,r;function o(){lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lu(),n(_t(t,"network-request-failed"))},timeout:tw.get()})}if(!((i=(s=At().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=At().gapi)===null||r===void 0)&&r.load)o();else{const a=Ky("iframefcb");return At()[a]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},af(`${zy()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ar=null,e})}let ar=null;function sw(t){return ar=ar||nw(t),ar}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const iw=new Ni(5e3,15e3),rw="__/auth/iframe",ow="emulator/auth/iframe",aw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cw(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ul(e,ow):`https://${t.config.authDomain}/${rw}`,s={apiKey:e.apiKey,appName:t.name,v:Qn},i=lw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Rs(s).slice(1)}`}async function uw(t){const e=await sw(t),n=At().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:cw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),a=At().setTimeout(()=>{r(o)},iw.get());function l(){At().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const hw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dw=500,fw=600,pw="_blank",_w="http://localhost";class cu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gw(t,e,n,s=dw,i=fw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hw),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ve().toLowerCase();n&&(a=Zd(c)?pw:n),Jd(c)&&(e=e||_w,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(Fy(c)&&a!=="_self")return mw(e||"",a),new cu(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new cu(h)}function mw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const vw="__/auth/handler",yw="emulator/auth/handler",Ew=encodeURIComponent("fac");async function uu(t,e,n,s,i,r){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Qn,eventId:i};if(e instanceof _l){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Oi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Ew}=${encodeURIComponent(l)}`:"";return`${ww(t)}?${Rs(a).slice(1)}${c}`}function ww({config:t}){return t.emulator?ul(t,yw):`https://${t.authDomain}/${vw}`}/**
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
 */const Oo="webStorageSupport";class bw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gf,this._completeRedirectFn=qE,this._overrideRedirectResult=$E}async _openPopup(e,n,s,i){var r;Kt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await uu(e,n,s,fa(),i);return gw(e,o,ml())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await uu(e,n,s,fa(),i);return TE(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Kt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await uw(e),s=new KE(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oo,{type:Oo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Oo];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rf()||Xd()||dl()}}const Iw=bw;var hu="@firebase/auth",du="1.7.8";/**
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
 */class Cw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Tw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sw(t){Vn(new En("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:of(t)},c=new jy(s,i,r,l);return Zy(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Vn(new En("auth-internal",e=>{const n=Pn(e.getProvider("auth").getImmediate());return(s=>new Cw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(hu,du,Tw(t)),Pt(hu,du,"esm2017")}/**
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
 */const Rw=5*60,Pw=xd("authIdTokenMaxAge")||Rw;let fu=null;const Aw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Pw)return;const i=n==null?void 0:n.token;fu!==i&&(fu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Nw(t=ol()){const e=Xr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xy(t,{popupRedirectResolver:Iw,persistence:[DE,bE,gf]}),s=xd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Aw(r.toString());yE(n,o,()=>o(n.currentUser)),vE(n,a=>o(a))}}const i=Nd("auth");return i&&eE(n,`http://${i}`),n}function kw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Gy({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=_t("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",kw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sw("Browser");var pu={};const _u="@firebase/database",gu="1.0.7";/**
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
 */let Cf="";function Ow(t){Cf=t}/**
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
 */class xw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Dw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Tf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xw(e)}}catch{}return new Dw},Ln=Tf("localStorage"),Mw=Tf("sessionStorage");/**
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
 */const gs=new il("@firebase/database"),Lw=function(){let t=1;return function(){return t++}}(),Sf=function(t){const e=cv(t),n=new rv;n.update(e);const s=n.digest();return el.encodeByteArray(s)},Di=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Di.apply(null,s):typeof s=="object"?e+=be(s):e+=s,e+=" "}return e};let ei=null,mu=!0;const Uw=function(t,e){C(!e,"Can't turn on custom loggers persistently."),gs.logLevel=re.VERBOSE,ei=gs.log.bind(gs)},xe=function(...t){if(mu===!0&&(mu=!1,ei===null&&Mw.get("logging_enabled")===!0&&Uw()),ei){const e=Di.apply(null,t);ei(e)}},Mi=function(t){return function(...e){xe(t,...e)}},ma=function(...t){const e="FIREBASE INTERNAL ERROR: "+Di(...t);gs.error(e)},Yt=function(...t){const e=`FIREBASE FATAL ERROR: ${Di(...t)}`;throw gs.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+Di(...t);gs.warn(e)},Fw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Bw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ws="[MIN_NAME]",Gn="[MAX_NAME]",As=function(t,e){if(t===e)return 0;if(t===ws||e===Gn)return-1;if(e===ws||t===Gn)return 1;{const n=vu(t),s=vu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Hw=function(t,e){return t===e?0:t<e?-1:1},Ls=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},yl=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=be(e[s]),n+=":",n+=yl(t[e[s]]);return n+="}",n},Pf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Af=function(t){C(!Rf(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Ww=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $w(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const jw=new RegExp("^-?(0*)\\d{1,10}$"),Gw=-2147483648,qw=2147483647,vu=function(t){if(jw.test(t)){const e=Number(t);if(e>=Gw&&e<=qw)return e}return null},Ns=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},zw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ti=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Kw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Yw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class lr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}lr.OWNER="owner";/**
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
 */const El="5",Nf="v",kf="s",Of="r",xf="f",Df=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mf="ls",Lf="p",va="ac",Uf="websocket",Ff="long_polling";/**
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
 */class Bf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ln.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ln.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Qw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Hf(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===Uf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ff)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qw(t)&&(n.ns=t.namespace);const i=[];return qe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Jw{constructor(){this.counters_={}}incrementCounter(e,n=1){Xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jm(this.counters_)}}/**
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
 */const xo={},Do={};function wl(t){const e=t.toString();return xo[e]||(xo[e]=new Jw),xo[e]}function Xw(t,e){const n=t.toString();return Do[n]||(Do[n]=e()),Do[n]}/**
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
 */class Zw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ns(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const yu="start",eb="close",tb="pLPCommand",nb="pRTLPCB",Wf="id",Vf="pw",$f="ser",sb="cb",ib="seg",rb="ts",ob="d",ab="dframe",jf=1870,Gf=30,lb=jf-Gf,cb=25e3,ub=3e4;class os{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mi(e),this.stats_=wl(n),this.urlFn=l=>(this.appCheckToken&&(l[va]=this.appCheckToken),Hf(n,Ff,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Zw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ub)),Bw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yu)this.id=a,this.password=l;else if(o===eb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[yu]="t",s[$f]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[sb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Nf]=El,this.transportSessionId&&(s[kf]=this.transportSessionId),this.lastSessionId&&(s[Mf]=this.lastSessionId),this.applicationId&&(s[Lf]=this.applicationId),this.appCheckToken&&(s[va]=this.appCheckToken),typeof location<"u"&&location.hostname&&Df.test(location.hostname)&&(s[Of]=xf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){os.forceAllow_=!0}static forceDisallow(){os.forceDisallow_=!0}static isAvailable(){return os.forceAllow_?!0:!os.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ww()&&!Vw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Pd(n),i=Pf(s,lb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[ab]="t",s[Wf]=e,s[Vf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class bl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lw(),window[tb+this.uniqueCallbackIdentifier]=e,window[nb+this.uniqueCallbackIdentifier]=n,this.myIFrame=bl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){xe("frame writing exception"),a.stack&&xe(a.stack),xe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wf]=this.myID,e[Vf]=this.myPW,e[$f]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gf+s.length<=jf;){const o=this.pendingSegs.shift();s=s+"&"+ib+i+"="+o.seg+"&"+rb+i+"="+o.ts+"&"+ob+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(cb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const hb=16384,db=45e3;let Cr=null;typeof MozWebSocket<"u"?Cr=MozWebSocket:typeof WebSocket<"u"&&(Cr=WebSocket);class ut{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mi(this.connId),this.stats_=wl(n),this.connURL=ut.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Nf]=El,typeof location<"u"&&location.hostname&&Df.test(location.hostname)&&(o[Of]=xf),n&&(o[kf]=n),s&&(o[Mf]=s),i&&(o[va]=i),r&&(o[Lf]=r),Hf(e,Uf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ln.set("previous_websocket_failure",!0);try{let s;Ld(),this.mySock=new Cr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Cr!==null&&!ut.forceDisallow_}static previouslyFailed(){return Ln.isInMemoryStorage||Ln.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ln.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=fi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Pf(n,hb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(db))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ut.responsesRequiredToBeHealthy=2;ut.healthyTimeout=3e4;/**
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
 */class gi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[os,ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ut&&ut.isAvailable();let s=n&&!ut.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ut];else{const i=this.transports_=[];for(const r of gi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);gi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gi.globalTransportInitialized_=!1;/**
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
 */const fb=6e4,pb=5e3,_b=10*1024,gb=100*1024,Mo="t",Eu="d",mb="s",wu="r",vb="e",bu="o",Iu="a",Cu="n",Tu="p",yb="h";class Eb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mi("c:"+this.id+":"),this.transportManager_=new gi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ti(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_b?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mo in e){const n=e[Mo];n===Iu?this.upgradeIfSecondaryHealthy_():n===wu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ls("t",e),s=Ls("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Iu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ls("t",e),s=Ls("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ls(Mo,e);if(Eu in e){const s=e[Eu];if(n===yb){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Cu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mb?this.onConnectionShutdown_(s):n===wu?this.onReset_(s):n===vb?ma("Server Error: "+s):n===bu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ma("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),El!==s&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ti(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ti(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ln.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class qf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class zf{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Tr extends zf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Tr}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Su=32,Ru=768;class le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new le("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function Kf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function wb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Yf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function Ie(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof le)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new le(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return We(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Il(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function dt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class bb{constructor(e,n){this.errorPrefix_=n,this.parts_=Yf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Jr(this.parts_[s]);Jf(this)}}function Ib(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jr(e),Jf(t)}function Cb(t){const e=t.parts_.pop();t.byteLength_-=Jr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jf(t){if(t.byteLength_>Ru)throw new Error(t.errorPrefix_+"has a key path longer than "+Ru+" bytes ("+t.byteLength_+").");if(t.parts_.length>Su)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Su+") or object contains a cycle "+Dn(t))}function Dn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Cl extends zf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Cl}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Us=1e3,Tb=60*5*1e3,Pu=30*1e3,Sb=1.3,Rb=3e4,Pb="server_kill",Au=3;class Gt extends qf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Gt.nextPersistentConnectionId_++,this.log_=Mi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Us,this.maxReconnectDelay_=Tb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ld())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(be(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Qr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Gt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xt(e,"w")){const s=ys(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ma("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Rb&&(this.reconnectDelay_=Us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Sb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Eb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ge(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Pb)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ge(h),l())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],aa(this.interruptReasons_)&&(this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>yl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new le(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Au&&(this.reconnectDelay_=Pu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Au&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Cf.replace(/\./g,"-")]=1,nl()?e["framework.cordova"]=1:Md()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tr.getInstance().currentlyOnline();return aa(this.interruptReasons_)&&e}}Gt.nextPersistentConnectionId_=0;Gt.nextConnectionId_=0;/**
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
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
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
 */class no{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(ws,e),i=new G(ws,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
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
 */let Yi;class Xf extends no{static get __EMPTY_NODE(){return Yi}static set __EMPTY_NODE(e){Yi=e}compare(e,n){return As(e.name,n.name)}isDefinedOn(e){throw Ss("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(Gn,Yi)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Yi)}toString(){return".key"}}const ms=new Xf;/**
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
 */class Qi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Se.RED,this.left=i??je.EMPTY_NODE,this.right=r??je.EMPTY_NODE}copy(e,n,s,i,r){return new Se(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class Ab{copy(e,n,s,i,r){return this}insert(e,n,s){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class je{constructor(e,n=je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qi(this.root_,null,this.comparator_,!0,e)}}je.EMPTY_NODE=new Ab;/**
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
 */function Nb(t,e){return As(t.name,e.name)}function Tl(t,e){return As(t,e)}/**
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
 */let ya;function kb(t){ya=t}const Zf=function(t){return typeof t=="number"?"number:"+Af(t):"string:"+t},ep=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xt(e,".sv"),"Priority must be a string or number.")}else C(t===ya||t.isEmpty(),"priority of unexpected type.");C(t===ya||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Nu;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ep(this.priorityNode_)}static set __childrenNodeConstructor(e){Nu=e}static get __childrenNodeConstructor(){return Nu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:j(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Af(this.value_):e+=this.value_,this.lazyHash_=Sf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Te.VALUE_TYPE_ORDER.indexOf(n),r=Te.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let tp,np;function Ob(t){tp=t}function xb(t){np=t}class Db extends no{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?As(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Gn,new Te("[PRIORITY-POST]",np))}makePost(e,n){const s=tp(e);return new G(n,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const me=new Db;/**
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
 */const Mb=Math.log(2);class Lb{constructor(e){const n=r=>parseInt(Math.log(r)/Mb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Se(d,h.node,Se.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),E=i(_+1,c);return h=t[_],d=n?n(h):h,new Se(d,h.node,Se.BLACK,m,E)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,E){const P=h-m,D=h;h-=m;const k=i(P+1,D),O=t[P],S=n?n(O):O;_(new Se(S,O.node,E,null,k))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const E=l.nextBitIsOne(),P=Math.pow(2,l.count-(m+1));E?d(P,Se.BLACK):(d(P,Se.BLACK),d(P,Se.RED))}return u},o=new Lb(t.length),a=r(o);return new je(s||e,a)};/**
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
 */let Lo;const ns={};class Wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(ns&&me,"ChildrenNode.ts has not been loaded"),Lo=Lo||new Wt({".priority":ns},{".priority":me}),Lo}get(e){const n=ys(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof je?n:null}hasIndex(e){return Xt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Sr(s,e.getCompare()):a=ns;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wt(u,c)}addToIndexes(e,n){const s=gr(this.indexes_,(i,r)=>{const o=ys(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===ns)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Sr(a,o.getCompare())}else return ns;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new Wt(s,this.indexSet_)}removeFromIndexes(e,n){const s=gr(this.indexes_,i=>{if(i===ns)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new Wt(s,this.indexSet_)}}/**
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
 */let Fs;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ep(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fs||(Fs=new B(new je(Tl),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fs}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fs:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fs:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{C(j(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(me,(o,a)=>{n[o]=a.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zf(this.getPriority().val())+":"),this.forEachChild(me,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Sf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Li?-1:0}withIndex(e){if(e===ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(me),i=n.getIterator(me);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ms?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ub extends B{constructor(){super(new je(Tl),B.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Li=new Ub;Object.defineProperties(G,{MIN:{value:new G(ws,B.EMPTY_NODE)},MAX:{value:new G(Gn,Li)}});Xf.__EMPTY_NODE=B.EMPTY_NODE;Te.__childrenNodeConstructor=B;kb(Li);xb(Li);/**
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
 */const Fb=!0;function Re(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,Re(e))}if(!(t instanceof Array)&&Fb){const n=[];let s=!1;if(qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Re(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new G(o,l)))}}),n.length===0)return B.EMPTY_NODE;const r=Sr(n,Nb,o=>o.name,Tl);if(s){const o=Sr(n,me.getCompare());return new B(r,Re(e),new Wt({".priority":o},{".priority":me}))}else return new B(r,Re(e),Wt.Default)}else{let n=B.EMPTY_NODE;return qe(t,(s,i)=>{if(Xt(t,s)&&s.substring(0,1)!=="."){const r=Re(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Re(e))}}Ob(Re);/**
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
 */class Bb extends no{constructor(e){super(),this.indexPath_=e,C(!q(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?As(e.name,n.name):r}makePost(e,n){const s=Re(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Li);return new G(Gn,e)}toString(){return Yf(this.indexPath_,0).join("/")}}/**
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
 */class Hb extends no{compare(e,n){const s=e.node.compareTo(n.node);return s===0?As(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=Re(e);return new G(n,s)}toString(){return".value"}}const Wb=new Hb;/**
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
 */function sp(t){return{type:"value",snapshotNode:t}}function bs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function mi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Vb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Sl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(mi(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(bs(n,s)):o.trackChildChange(vi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(me,(i,r)=>{n.hasChild(i)||s.trackChildChange(mi(i,r))}),n.isLeafNode()||n.forEachChild(me,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(vi(i,r,o))}else s.trackChildChange(bs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class yi{constructor(e){this.indexedFilter_=new Sl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=yi.getStartPost_(e),this.endPost_=yi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(me,(o,a)=>{r.matches(new G(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class $b{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new yi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new G(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(vi(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(mi(n,h));const E=a.updateImmediateChild(n,B.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(bs(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(mi(c.name,c.node)),r.trackChildChange(bs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
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
 */class Rl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ws}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Rl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jb(t){return t.loadsAllData()?new Sl(t.getIndex()):t.hasLimit()?new $b(t):new yi(t)}function ku(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===Wb?n="$value":t.index_===ms?n="$key":(C(t.index_ instanceof Bb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ou(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
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
 */class Rr extends qf{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Mi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Rr.getListenId_(e,s),a={};this.listens_[o]=a;const l=ku(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ys(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Rr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ku(e._queryParams),s=e._path.toString(),i=new Qr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fi(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Gb{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Pr(){return{value:null,children:new Map}}function ip(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,Pr());const i=t.children.get(s);e=ue(e),ip(i,e,n)}}function Ea(t,e,n){t.value!==null?n(e,t.value):qb(t,(s,i)=>{const r=new le(e.toString()+"/"+s);Ea(i,r,n)})}function qb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class zb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const xu=10*1e3,Kb=30*1e3,Yb=5*60*1e3;class Qb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zb(e);const s=xu+(Kb-xu)*Math.random();ti(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;qe(e,(i,r)=>{r>0&&Xt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ti(this.reportStats_.bind(this),Math.floor(Math.random()*2*Yb))}}/**
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
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function rp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Pl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Al(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ar{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ft.ACK_USER_WRITE,this.source=rp()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(e));return new Ar(Q(),n,this.revert)}}else return C(j(this.path)===e,"operationForChild called for unrelated child."),new Ar(ue(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ei{constructor(e,n){this.source=e,this.path=n,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Ei(this.source,Q()):new Ei(this.source,ue(this.path))}}/**
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
 */class qn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ft.OVERWRITE}operationForChild(e){return q(this.path)?new qn(this.source,Q(),this.snap.getImmediateChild(e)):new qn(this.source,ue(this.path),this.snap)}}/**
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
 */class wi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ft.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new le(e));return n.isEmpty()?null:n.value?new qn(this.source,Q(),n.value):new wi(this.source,Q(),n)}else return C(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wi(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class bn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Jb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Xb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Vb(o.childName,o.snapshotNode))}),Bs(t,i,"child_removed",e,s,n),Bs(t,i,"child_added",e,s,n),Bs(t,i,"child_moved",r,s,n),Bs(t,i,"child_changed",e,s,n),Bs(t,i,"value",e,s,n),i}function Bs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>eI(t,a,l)),o.forEach(a=>{const l=Zb(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Zb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function eI(t,e,n){if(e.childName==null||n.childName==null)throw Ss("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function so(t,e){return{eventCache:t,serverCache:e}}function ni(t,e,n,s){return so(new bn(e,n,s),t.serverCache)}function op(t,e,n,s){return so(t.eventCache,new bn(e,n,s))}function Nr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Uo;const tI=()=>(Uo||(Uo=new je(Hw)),Uo);class de{constructor(e,n=tI()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return qe(e,(s,i)=>{n=n.set(new le(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(q(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:Ie(new le(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new de(null)}}set(e,n){if(q(e))return new de(n,this.children);{const s=j(e),r=(this.children.get(s)||new de(null)).set(ue(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(q(e))return n;{const s=j(e),r=(this.children.get(s)||new de(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ie(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),Ie(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),Ie(n,i),s):new de(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new de(null))}}function si(t,e,n){if(q(e))return new gt(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=We(i,e);return r=r.updateChild(o,n),new gt(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new gt(r)}}}function Du(t,e,n){let s=t;return qe(n,(i,r)=>{s=si(s,Ie(e,i),r)}),s}function Mu(t,e){if(q(e))return gt.empty();{const n=t.writeTree_.setTree(e,new de(null));return new gt(n)}}function wa(t,e){return Jn(t,e)!=null}function Jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function Lu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function mn(t,e){if(q(e))return t;{const n=Jn(t,e);return n!=null?new gt(new de(n)):new gt(t.writeTree_.subtree(e))}}function ba(t){return t.writeTree_.isEmpty()}function Is(t,e){return ap(Q(),t.writeTree_,e)}function ap(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ap(Ie(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ie(t,".priority"),s)),n}}/**
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
 */function io(t,e){return hp(e,t)}function nI(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=si(t.visibleWrites,e,n)),t.lastWriteId=s}function sI(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function iI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&rI(a,s.path)?i=!1:dt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return oI(t),!0;if(s.snap)t.visibleWrites=Mu(t.visibleWrites,s.path);else{const a=s.children;qe(a,l=>{t.visibleWrites=Mu(t.visibleWrites,Ie(s.path,l))})}return!0}else return!1}function rI(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(Ie(t.path,n),e))return!0;return!1}function oI(t){t.visibleWrites=lp(t.allWrites,aI,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function aI(t){return t.visible}function lp(t,e,n){let s=gt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)dt(n,o)?(a=We(n,o),s=si(s,a,r.snap)):dt(o,n)&&(a=We(o,n),s=si(s,Q(),r.snap.getChild(a)));else if(r.children){if(dt(n,o))a=We(n,o),s=Du(s,a,r.children);else if(dt(o,n))if(a=We(o,n),q(a))s=Du(s,Q(),r.children);else{const l=ys(r.children,j(a));if(l){const c=l.getChild(ue(a));s=si(s,Q(),c)}}}else throw Ss("WriteRecord should have .snap or .children")}}return s}function cp(t,e,n,s,i){if(!s&&!i){const r=Jn(t.visibleWrites,e);if(r!=null)return r;{const o=mn(t.visibleWrites,e);if(ba(o))return n;if(n==null&&!wa(o,Q()))return null;{const a=n||B.EMPTY_NODE;return Is(o,a)}}}else{const r=mn(t.visibleWrites,e);if(!i&&ba(r))return n;if(!i&&n==null&&!wa(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(dt(c.path,e)||dt(e,c.path))},a=lp(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Is(a,l)}}}function lI(t,e,n){let s=B.EMPTY_NODE;const i=Jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=mn(t.visibleWrites,e);return n.forEachChild(me,(o,a)=>{const l=Is(mn(r,new le(o)),a);s=s.updateImmediateChild(o,l)}),Lu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=mn(t.visibleWrites,e);return Lu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function cI(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ie(e,n);if(wa(t.visibleWrites,r))return null;{const o=mn(t.visibleWrites,r);return ba(o)?i.getChild(n):Is(o,i.getChild(n))}}function uI(t,e,n,s){const i=Ie(e,n),r=Jn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=mn(t.visibleWrites,i);return Is(o,s.getNode().getImmediateChild(n))}else return null}function hI(t,e){return Jn(t.visibleWrites,e)}function dI(t,e,n,s,i,r,o){let a;const l=mn(t.visibleWrites,e),c=Jn(l,Q());if(c!=null)a=c;else if(n!=null)a=Is(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function fI(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function kr(t,e,n,s){return cp(t.writeTree,t.treePath,e,n,s)}function Nl(t,e){return lI(t.writeTree,t.treePath,e)}function Uu(t,e,n,s){return cI(t.writeTree,t.treePath,e,n,s)}function Or(t,e){return hI(t.writeTree,Ie(t.treePath,e))}function pI(t,e,n,s,i,r){return dI(t.writeTree,t.treePath,e,n,s,i,r)}function kl(t,e,n){return uI(t.writeTree,t.treePath,e,n)}function up(t,e){return hp(Ie(t.treePath,e),t.writeTree)}function hp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class _I{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,vi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,mi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,bs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,vi(s,e.snapshotNode,i.oldSnap));else throw Ss("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class gI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const dp=new gI;class Ol{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new bn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zn(this.viewCache_),r=pI(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function mI(t){return{filter:t}}function vI(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function yI(t,e,n,s,i){const r=new _I;let o,a;if(n.type===ft.OVERWRITE){const c=n;c.source.fromUser?o=Ia(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=xr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ft.MERGE){const c=n;c.source.fromUser?o=wI(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ca(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ft.ACK_USER_WRITE){const c=n;c.revert?o=CI(t,e,c.path,s,i,r):o=bI(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ft.LISTEN_COMPLETE)o=II(t,e,n.path,s,r);else throw Ss("Unknown operation type: "+n.type);const l=r.getChanges();return EI(e,o,l),{viewCache:o,changes:l}}function EI(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Nr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(sp(Nr(e)))}}function fp(t,e,n,s,i,r){const o=e.eventCache;if(Or(s,n)!=null)return e;{let a,l;if(q(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=zn(e),u=c instanceof B?c:B.EMPTY_NODE,h=Nl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=kr(s,zn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){C(wn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Uu(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ue(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Uu(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=kl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ni(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function xr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=j(n);if(!l.isCompleteForPath(n)&&wn(n)>1)return e;const m=ue(n),P=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),P):c=u.updateChild(l.getNode(),_,P,m,dp,null)}const h=op(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),d=new Ol(i,h,r);return fp(t,h,n,i,d,a)}function Ia(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ol(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ni(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ni(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ue(n),_=a.getNode().getImmediateChild(h);let m;if(q(d))m=s;else{const E=u.getCompleteChild(h);E!=null?Kf(d)===".priority"&&E.getChild(Qf(d)).isEmpty()?m=E:m=E.updateChild(d,s):m=B.EMPTY_NODE}if(_.equals(m))l=e;else{const E=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=ni(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Fu(t,e){return t.eventCache.isCompleteForChild(e)}function wI(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ie(n,l);Fu(e,j(u))&&(a=Ia(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ie(n,l);Fu(e,j(u))||(a=Ia(t,a,u,c,i,r,o))}),a}function Bu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ca(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=s:c=new de(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Bu(t,_,d);l=xr(t,l,new le(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),E=Bu(t,m,d);l=xr(t,l,new le(h),E,i,r,o,a)}}),l}function bI(t,e,n,s,i,r,o){if(Or(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(q(n)){let c=new de(null);return l.getNode().forEachChild(ms,(u,h)=>{c=c.set(new le(u),h)}),Ca(t,e,n,c,i,r,a,o)}else return e}else{let c=new de(null);return s.foreach((u,h)=>{const d=Ie(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Ca(t,e,n,c,i,r,a,o)}}function II(t,e,n,s,i){const r=e.serverCache,o=op(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return fp(t,o,n,s,dp,i)}function CI(t,e,n,s,i,r){let o;if(Or(s,n)!=null)return e;{const a=new Ol(s,e,i),l=e.eventCache.getNode();let c;if(q(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=kr(s,zn(e));else{const h=e.serverCache.getNode();C(h instanceof B,"serverChildren would be complete if leaf node"),u=Nl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=j(n);let h=kl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ue(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,B.EMPTY_NODE,ue(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kr(s,zn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Or(s,Q())!=null,ni(e,c,o,t.filter.filtersNodes())}}/**
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
 */class TI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Sl(s.getIndex()),r=jb(s);this.processor_=mI(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,a.getNode(),null),u=new bn(l,o.isFullyInitialized(),i.filtersNodes()),h=new bn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=so(h,u),this.eventGenerator_=new Jb(this.query_)}get query(){return this.query_}}function SI(t){return t.viewCache_.serverCache.getNode()}function RI(t){return Nr(t.viewCache_)}function PI(t,e){const n=zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Hu(t){return t.eventRegistrations_.length===0}function AI(t,e){t.eventRegistrations_.push(e)}function Wu(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Vu(t,e,n,s){e.type===ft.MERGE&&e.source.queryId!==null&&(C(zn(t.viewCache_),"We should always have a full cache before handling merges"),C(Nr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=yI(t.processor_,i,e,n,s);return vI(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,pp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function NI(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(r,o)=>{s.push(bs(r,o))}),n.isFullyInitialized()&&s.push(sp(n.getNode())),pp(t,s,n.getNode(),e)}function pp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Xb(t.eventGenerator_,e,n,i)}/**
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
 */let Dr;class _p{constructor(){this.views=new Map}}function kI(t){C(!Dr,"__referenceConstructor has already been defined"),Dr=t}function OI(){return C(Dr,"Reference.ts has not been loaded"),Dr}function xI(t){return t.views.size===0}function xl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Vu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Vu(o,e,n,s));return r}}function gp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=kr(n,i?s:null),l=!1;a?l=!0:s instanceof B?(a=Nl(n,s),l=!1):(a=B.EMPTY_NODE,l=!1);const c=so(new bn(a,l,!1),new bn(s,i,!1));return new TI(e,c)}return o}function DI(t,e,n,s,i,r){const o=gp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),AI(o,n),NI(o,n)}function MI(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=In(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Wu(c,n,s)),Hu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Wu(l,n,s)),Hu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!In(t)&&r.push(new(OI())(e._repo,e._path)),{removed:r,events:o}}function mp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const s of t.views.values())n=n||PI(s,e);return n}function vp(t,e){if(e._queryParams.loadsAllData())return ro(t);{const s=e._queryIdentifier;return t.views.get(s)}}function yp(t,e){return vp(t,e)!=null}function In(t){return ro(t)!=null}function ro(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Mr;function LI(t){C(!Mr,"__referenceConstructor has already been defined"),Mr=t}function UI(){return C(Mr,"Reference.ts has not been loaded"),Mr}let FI=1;class $u{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=fI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ep(t,e,n,s,i){return nI(t.pendingWriteTree_,e,n,s,i),i?Fi(t,new qn(rp(),e,n)):[]}function Un(t,e,n=!1){const s=sI(t.pendingWriteTree_,e);if(iI(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(Q(),!0):qe(s.children,o=>{r=r.set(new le(o),!0)}),Fi(t,new Ar(s.path,r,n))}else return[]}function Ui(t,e,n){return Fi(t,new qn(Pl(),e,n))}function BI(t,e,n){const s=de.fromObject(n);return Fi(t,new wi(Pl(),e,s))}function HI(t,e){return Fi(t,new Ei(Pl(),e))}function WI(t,e,n){const s=Ml(t,n);if(s){const i=Ll(s),r=i.path,o=i.queryId,a=We(r,e),l=new Ei(Al(o),a);return Ul(t,r,l)}else return[]}function Lr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||yp(o,e))){const l=MI(o,e,n,s);xI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>In(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=jI(d);for(let m=0;m<_.length;++m){const E=_[m],P=E.query,D=Cp(t,E);t.listenProvider_.startListening(ii(P),bi(t,P),D.hashFn,D.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ii(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(oo(d));t.listenProvider_.stopListening(ii(d),_)}))}GI(t,c)}return a}function wp(t,e,n,s){const i=Ml(t,s);if(i!=null){const r=Ll(i),o=r.path,a=r.queryId,l=We(o,e),c=new qn(Al(a),l,n);return Ul(t,o,c)}else return[]}function VI(t,e,n,s){const i=Ml(t,s);if(i){const r=Ll(i),o=r.path,a=r.queryId,l=We(o,e),c=de.fromObject(n),u=new wi(Al(a),l,c);return Ul(t,o,u)}else return[]}function Ta(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=We(d,i);r=r||vn(_,m),o=o||In(_)});let a=t.syncPointTree_.get(i);a?(o=o||In(a),r=r||vn(a,Q())):(a=new _p,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const E=vn(m,Q());E&&(r=r.updateImmediateChild(_,E))}));const c=yp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=oo(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=qI();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=io(t.pendingWriteTree_,i);let h=DI(a,e,n,u,r,l);if(!c&&!o&&!s){const d=vp(a,e);h=h.concat(zI(t,e,d))}return h}function Dl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=We(o,e),c=vn(a,l);if(c)return c});return cp(i,e,r,n,!0)}function $I(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=We(c,n);s=s||vn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||vn(i,Q()):(i=new _p,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new bn(s,!0,!1):null,a=io(t.pendingWriteTree_,e._path),l=gp(i,e,a,r?o.getNode():B.EMPTY_NODE,r);return RI(l)}function Fi(t,e){return bp(e,t.syncPointTree_,null,io(t.pendingWriteTree_,Q()))}function bp(t,e,n,s){if(q(t.path))return Ip(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=vn(i,Q()));let r=[];const o=j(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=up(s,o);r=r.concat(bp(a,l,c,u))}return i&&(r=r.concat(xl(i,t,s,n))),r}}function Ip(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=vn(i,Q()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=up(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ip(u,a,l,c)))}),i&&(r=r.concat(xl(i,t,s,n))),r}function Cp(t,e){const n=e.query,s=bi(t,n);return{hashFn:()=>(SI(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?WI(t,n._path,s):HI(t,n._path);{const r=$w(i,n);return Lr(t,n,null,r)}}}}function bi(t,e){const n=oo(e);return t.queryToTagMap.get(n)}function oo(t){return t._path.toString()+"$"+t._queryIdentifier}function Ml(t,e){return t.tagToQueryMap.get(e)}function Ll(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function Ul(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=io(t.pendingWriteTree_,e);return xl(s,n,i,null)}function jI(t){return t.fold((e,n,s)=>{if(n&&In(n))return[ro(n)];{let i=[];return n&&(i=mp(n)),qe(s,(r,o)=>{i=i.concat(o)}),i}})}function ii(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(UI())(t._repo,t._path):t}function GI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=oo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function qI(){return FI++}function zI(t,e,n){const s=e._path,i=bi(t,e),r=Cp(t,n),o=t.listenProvider_.startListening(ii(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!In(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!q(c)&&u&&In(u))return[ro(u).query];{let d=[];return u&&(d=d.concat(mp(u).map(_=>_.query))),qe(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ii(u),bi(t,u))}}return o}/**
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
 */class Fl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fl(n)}node(){return this.node_}}class Bl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new Bl(this.syncTree_,n)}node(){return Dl(this.syncTree_,this.path_)}}const KI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ju=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return YI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return QI(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},YI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},QI=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},JI=function(t,e,n,s){return Hl(e,new Bl(n,t),s)},Tp=function(t,e,n){return Hl(t,new Fl(e),n)};function Hl(t,e,n){const s=t.getPriority().val(),i=ju(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ju(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Te(a,Re(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Te(i))),o.forEachChild(me,(a,l)=>{const c=Hl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Wl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Vl(t,e){let n=e instanceof le?e:new le(e),s=t,i=j(n);for(;i!==null;){const r=ys(s.node.children,i)||{children:{},childCount:0};s=new Wl(i,s,r),n=ue(n),i=j(n)}return s}function ks(t){return t.node.value}function Sp(t,e){t.node.value=e,Sa(t)}function Rp(t){return t.node.childCount>0}function XI(t){return ks(t)===void 0&&!Rp(t)}function ao(t,e){qe(t.node.children,(n,s)=>{e(new Wl(n,t,s))})}function Pp(t,e,n,s){n&&!s&&e(t),ao(t,i=>{Pp(i,e,!0,s)}),n&&s&&e(t)}function ZI(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Bi(t){return new le(t.parent===null?t.name:Bi(t.parent)+"/"+t.name)}function Sa(t){t.parent!==null&&eC(t.parent,t.name,t)}function eC(t,e,n){const s=XI(n),i=Xt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Sa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Sa(t))}/**
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
 */const tC=/[\[\].#$\/\u0000-\u001F\u007F]/,nC=/[\[\].#$\u0000-\u001F\u007F]/,Fo=10*1024*1024,Ap=function(t){return typeof t=="string"&&t.length!==0&&!tC.test(t)},Np=function(t){return typeof t=="string"&&t.length!==0&&!nC.test(t)},sC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Np(t)},kp=function(t,e,n,s){s&&e===void 0||$l(sl(t,"value"),e,n)},$l=function(t,e,n){const s=n instanceof le?new bb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Dn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Dn(s)+" with contents = "+e.toString());if(Rf(e))throw new Error(t+"contains "+e.toString()+" "+Dn(s));if(typeof e=="string"&&e.length>Fo/3&&Jr(e)>Fo)throw new Error(t+"contains a string greater than "+Fo+" utf8 bytes "+Dn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ap(o)))throw new Error(t+" contains an invalid key ("+o+") "+Dn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ib(s,o),$l(t,a,s),Cb(s)}),i&&r)throw new Error(t+' contains ".value" child '+Dn(s)+" in addition to actual children.")}},Op=function(t,e,n,s){if(!Np(n))throw new Error(sl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Op(t,e,n)},xp=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},rC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ap(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sC(n))throw new Error(sl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class oC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Il(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Dp(t,e,n){jl(t,n),Mp(t,s=>Il(s,e))}function kt(t,e,n){jl(t,n),Mp(t,s=>dt(s,e)||dt(e,s))}function Mp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(aC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function aC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ei&&xe("event: "+n.toString()),Ns(s)}}}/**
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
 */const lC="repo_interrupt",cC=25;class uC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pr(),this.transactionQueueTree_=new Wl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hC(t,e,n){if(t.stats_=wl(t.repoInfo_),t.forceRestClient_||zw())t.server_=new Rr(t.repoInfo_,(s,i,r,o)=>{Gu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Gt(t.repoInfo_,e,(s,i,r,o)=>{Gu(t,s,i,r,o)},s=>{qu(t,s)},s=>{dC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Xw(t.repoInfo_,()=>new Qb(t.stats_,t.server_)),t.infoData_=new Gb,t.infoSyncTree_=new $u({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ui(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ql(t,"connected",!1),t.serverSyncTree_=new $u({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);kt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Lp(t){const n=t.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gl(t){return KI({timestamp:Lp(t)})}function Gu(t,e,n,s,i){t.dataUpdateCount++;const r=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=gr(n,c=>Re(c));o=VI(t.serverSyncTree_,r,l,i)}else{const l=Re(n);o=wp(t.serverSyncTree_,r,l,i)}else if(s){const l=gr(n,c=>Re(c));o=BI(t.serverSyncTree_,r,l)}else{const l=Re(n);o=Ui(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=co(t,r)),kt(t.eventQueue_,a,o)}function qu(t,e){ql(t,"connected",e),e===!1&&_C(t)}function dC(t,e){qe(e,(n,s)=>{ql(t,n,s)})}function ql(t,e,n){const s=new le("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(s,i);const r=Ui(t.infoSyncTree_,s,i);kt(t.eventQueue_,s,r)}function Up(t){return t.nextWriteId_++}function fC(t,e,n){const s=$I(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Re(i).withIndex(e._queryParams.getIndex());Ta(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ui(t.serverSyncTree_,e._path,r);else{const a=bi(t.serverSyncTree_,e);o=wp(t.serverSyncTree_,e._path,r,a)}return kt(t.eventQueue_,e._path,o),Lr(t.serverSyncTree_,e,n,null,!0),r},i=>(lo(t,"get for query "+be(e)+" failed: "+i),Promise.reject(new Error(i))))}function pC(t,e,n,s,i){lo(t,"set",{path:e.toString(),value:n,priority:s});const r=Gl(t),o=Re(n,s),a=Dl(t.serverSyncTree_,e),l=Tp(o,a,r),c=Up(t),u=Ep(t.serverSyncTree_,e,l,c,!0);jl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Ge("set at "+e+" failed: "+d);const E=Un(t.serverSyncTree_,c,!m);kt(t.eventQueue_,e,E),yC(t,i,d,_)});const h=Vp(t,e);co(t,h),kt(t.eventQueue_,h,[])}function _C(t){lo(t,"onDisconnectEvents");const e=Gl(t),n=Pr();Ea(t.onDisconnect_,Q(),(i,r)=>{const o=JI(i,r,t.serverSyncTree_,e);ip(n,i,o)});let s=[];Ea(n,Q(),(i,r)=>{s=s.concat(Ui(t.serverSyncTree_,i,r));const o=Vp(t,i);co(t,o)}),t.onDisconnect_=Pr(),kt(t.eventQueue_,Q(),s)}function gC(t,e,n){let s;j(e._path)===".info"?s=Ta(t.infoSyncTree_,e,n):s=Ta(t.serverSyncTree_,e,n),Dp(t.eventQueue_,e._path,s)}function mC(t,e,n){let s;j(e._path)===".info"?s=Lr(t.infoSyncTree_,e,n):s=Lr(t.serverSyncTree_,e,n),Dp(t.eventQueue_,e._path,s)}function vC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lC)}function lo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function yC(t,e,n,s){e&&Ns(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Fp(t,e,n){return Dl(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function zl(t,e=t.transactionQueueTree_){if(e||uo(t,e),ks(e)){const n=Hp(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&EC(t,Bi(e),n)}else Rp(e)&&ao(e,n=>{zl(t,n)})}function EC(t,e,n){const s=n.map(c=>c.currentWriteId),i=Fp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=We(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{lo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Un(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();uo(t,Vl(t.transactionQueueTree_,e)),zl(t,t.transactionQueueTree_),kt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ns(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ge("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}co(t,e)}},o)}function co(t,e){const n=Bp(t,e),s=Bi(n),i=Hp(t,n);return wC(t,i,s),s}function wC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=We(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Un(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cC)u=!0,h="maxretry",i=i.concat(Un(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Fp(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){$l("transaction failed: Data returned ",_,l.path);let m=Re(_);typeof _=="object"&&_!=null&&Xt(_,".priority")||(m=m.updatePriority(d.getPriority()));const P=l.currentWriteId,D=Gl(t),k=Tp(m,d,D);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=k,l.currentWriteId=Up(t),o.splice(o.indexOf(P),1),i=i.concat(Ep(t.serverSyncTree_,l.path,k,l.currentWriteId,l.applyLocally)),i=i.concat(Un(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(Un(t.serverSyncTree_,l.currentWriteId,!0))}kt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}uo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ns(s[a]);zl(t,t.transactionQueueTree_)}function Bp(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&ks(s)===void 0;)s=Vl(s,n),e=ue(e),n=j(e);return s}function Hp(t,e){const n=[];return Wp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Wp(t,e,n){const s=ks(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ao(e,i=>{Wp(t,i,n)})}function uo(t,e){const n=ks(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Sp(e,n.length>0?n:void 0)}ao(e,s=>{uo(t,s)})}function Vp(t,e){const n=Bi(Bp(t,e)),s=Vl(t.transactionQueueTree_,e);return ZI(s,i=>{Bo(t,i)}),Bo(t,s),Pp(s,i=>{Bo(t,i)}),n}function Bo(t,e){const n=ks(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sp(e,void 0):n.length=r+1,kt(t.eventQueue_,Bi(e),i);for(let o=0;o<s.length;o++)Ns(s[o])}}/**
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
 */function bC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function IC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const zu=function(t,e){const n=CC(t),s=n.namespace;n.domain==="firebase.com"&&Yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Fw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Bf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new le(n.pathString)}},CC=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=bC(t.substring(u,h)));const d=IC(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Ku="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",TC=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Ku.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ku.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class SC{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class RC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class $p{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Kl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Kf(this._path)}get ref(){return new en(this._repo,this._path)}get _queryIdentifier(){const e=Ou(this._queryParams),n=yl(e);return n==="{}"?"default":n}get _queryObject(){return Ou(this._queryParams)}isEqual(e){if(e=Ee(e),!(e instanceof Kl))return!1;const n=this._repo===e._repo,s=Il(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+wb(this._path)}}class en extends Kl{constructor(e,n){super(e,n,new Rl,!1)}get parent(){const e=Qf(this._path);return e===null?null:new en(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ii{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new le(e),s=Ci(this.ref,e);return new Ii(this._node.getChild(n),s,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ii(i,Ci(this.ref,s),me)))}hasChild(e){const n=new le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Gs(t,e){return t=Ee(t),t._checkNotDeleted("ref"),e!==void 0?Ci(t._root,e):t._root}function Ci(t,e){return t=Ee(t),j(t._path)===null?iC("child","path",e):Op("child","path",e),new en(t._repo,Ie(t._path,e))}function Yu(t,e){t=Ee(t),xp("push",t._path),kp("push",e,t._path,!0);const n=Lp(t._repo),s=TC(n),i=Ci(t,s),r=Ci(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ra(t,e){t=Ee(t),xp("set",t._path),kp("set",e,t._path,!1);const n=new Qr;return pC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function PC(t){t=Ee(t);const e=new $p(()=>{}),n=new ho(e);return fC(t._repo,t,n).then(s=>new Ii(s,new en(t._repo,t._path),t._queryParams.getIndex()))}class ho{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new SC("value",this,new Ii(e.snapshotNode,new en(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new RC(this,e,n):null}matches(e){return e instanceof ho?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function AC(t,e,n,s,i){const r=new $p(n,void 0),o=new ho(r);return gC(t._repo,t,o),()=>mC(t._repo,t,o)}function NC(t,e,n,s){return AC(t,"value",e)}kI(en);LI(en);/**
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
 */const kC="FIREBASE_DATABASE_EMULATOR_HOST",Pa={};let OC=!1;function xC(t,e,n,s){t.repoInfo_=new Bf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function DC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zu(r,i),a=o.repoInfo,l;typeof process<"u"&&pu&&(l=pu[kC]),l?(r=`http://${l}?ns=${a.namespace}`,o=zu(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Yw(t.name,t.options,e);rC("Invalid Firebase Database URL",o),q(o.path)||Yt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=LC(a,t,c,new Kw(t.name,n));return new UC(u,t)}function MC(t,e){const n=Pa[e];(!n||n[t.key]!==t)&&Yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vC(t),delete n[t.key]}function LC(t,e,n,s){let i=Pa[e.name];i||(i={},Pa[e.name]=i);let r=i[t.toURLString()];return r&&Yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new uC(t,OC,n,s),i[t.toURLString()]=r,r}class UC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new en(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(MC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yt("Cannot call "+e+" on a deleted database.")}}function FC(t=ol(),e){const n=Xr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=kd("database");s&&BC(n,...s)}return n}function BC(t,e,n,s={}){t=Ee(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Yt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new lr(lr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Dd(s.mockUserToken,t.app.options.projectId);r=new lr(o)}xC(i,e,n,r)}/**
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
 */function HC(t){Ow(Qn),Vn(new En("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return DC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Pt(_u,gu,t),Pt(_u,gu,"esm2017")}Gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};HC();/**
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
 */const jp="firebasestorage.googleapis.com",Gp="storageBucket",WC=2*60*1e3,VC=10*60*1e3;/**
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
 */class ye extends Jt{constructor(e,n,s=0){super(Ho(e),`Firebase Storage: ${n} (${Ho(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ho(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ve||(ve={}));function Ho(t){return"storage/"+t}function Yl(){const t="An unknown error occurred, please check the error payload for server response.";return new ye(ve.UNKNOWN,t)}function $C(t){return new ye(ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jC(t){return new ye(ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function GC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(ve.UNAUTHENTICATED,t)}function qC(){return new ye(ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zC(t){return new ye(ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function KC(){return new ye(ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function YC(){return new ye(ve.CANCELED,"User canceled the upload/download.")}function QC(t){return new ye(ve.INVALID_URL,"Invalid URL '"+t+"'.")}function JC(t){return new ye(ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function XC(){return new ye(ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gp+"' property when initializing the app?")}function ZC(){return new ye(ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eT(){return new ye(ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tT(t){return new ye(ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Aa(t){return new ye(ve.INVALID_ARGUMENT,t)}function qp(){return new ye(ve.APP_DELETED,"The Firebase app was deleted.")}function nT(t){return new ye(ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ri(t,e){return new ye(ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Hs(t){throw new ye(ve.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=tt.makeFromUrl(e,n)}catch{return new tt(e,"")}if(s.path==="")return s;throw JC(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(S){S.path_=decodeURIComponent(S.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},E=n===jp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",D=new RegExp(`^https?://${E}/${i}/${P}`,"i"),O=[{regex:a,indices:l,postModify:r},{regex:_,indices:m,postModify:c},{regex:D,indices:{bucket:1,path:2},postModify:c}];for(let S=0;S<O.length;S++){const z=O[S],he=z.regex.exec(e);if(he){const se=he[z.indices.bucket];let Ne=he[z.indices.path];Ne||(Ne=""),s=new tt(se,Ne),z.postModify(s);break}}if(s==null)throw QC(e);return s}}class sT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function iT(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...P){c||(c=!0,e.apply(null,P))}function h(P){i=setTimeout(()=>{i=null,t(_,l())},P)}function d(){r&&clearTimeout(r)}function _(P,...D){if(c){d();return}if(P){d(),u.call(null,P,...D);return}if(l()||o){d(),u.call(null,P,...D);return}s<64&&(s*=2);let O;a===1?(a=2,O=0):O=(s+Math.random())*1e3,h(O)}let m=!1;function E(P){m||(m=!0,d(),!c&&(i!==null?(P||(a=2),clearTimeout(i),h(0)):P||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,E(!0)},n),E}function rT(t){t(!1)}/**
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
 */function oT(t){return t!==void 0}function aT(t){return typeof t=="object"&&!Array.isArray(t)}function Ql(t){return typeof t=="string"||t instanceof String}function Qu(t){return Jl()&&t instanceof Blob}function Jl(){return typeof Blob<"u"}function Ju(t,e,n,s){if(s<e)throw Aa(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Aa(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Xl(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function zp(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var Bn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bn||(Bn={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function lT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class cT{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,m)=>{this.resolve_=_,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Ji(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Bn.NO_ERROR,l=r.getStatus();if(!a||lT(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Bn.ABORT;s(!1,new Ji(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Ji(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());oT(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Yl();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?qp():YC();o(l)}else{const l=KC();o(l)}};this.canceled_?n(!1,new Ji(!1,null,!0)):this.backoffId_=iT(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ji{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function uT(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hT(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dT(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fT(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pT(t,e,n,s,i,r,o=!0){const a=zp(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return dT(c,e),uT(c,n),hT(c,r),fT(c,s),new cT(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function _T(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gT(...t){const e=_T();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Jl())return new Blob(t);throw new ye(ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mT(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function vT(t){if(typeof atob>"u")throw tT("base-64");return atob(t)}/**
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
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wo{constructor(e,n){this.data=e,this.contentType=n||null}}function yT(t,e){switch(t){case St.RAW:return new Wo(Kp(e));case St.BASE64:case St.BASE64URL:return new Wo(Yp(t,e));case St.DATA_URL:return new Wo(wT(e),bT(e))}throw Yl()}function Kp(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function ET(t){let e;try{e=decodeURIComponent(t)}catch{throw ri(St.DATA_URL,"Malformed data URL.")}return Kp(e)}function Yp(t,e){switch(t){case St.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw ri(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw ri(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vT(e)}catch(i){throw i.message.includes("polyfill")?i:ri(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Qp{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ri(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=IT(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function wT(t){const e=new Qp(t);return e.base64?Yp(St.BASE64,e.rest):ET(e.rest)}function bT(t){return new Qp(t).contentType}function IT(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class fn{constructor(e,n){let s=0,i="";Qu(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Qu(this.data_)){const s=this.data_,i=mT(s,e,n);return i===null?null:new fn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new fn(s,!0)}}static getBlob(...e){if(Jl()){const n=e.map(s=>s instanceof fn?s.data_:s);return new fn(gT.apply(null,n))}else{const n=e.map(o=>Ql(o)?yT(St.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new fn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Jp(t){let e;try{e=JSON.parse(t)}catch{return null}return aT(e)?e:null}/**
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
 */function CT(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function TT(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Xp(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function ST(t,e){return e}class Ue{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||ST}}let Xi=null;function RT(t){return!Ql(t)||t.length<2?t:Xp(t)}function Zp(){if(Xi)return Xi;const t=[];t.push(new Ue("bucket")),t.push(new Ue("generation")),t.push(new Ue("metageneration")),t.push(new Ue("name","fullPath",!0));function e(r,o){return RT(o)}const n=new Ue("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Ue("size");return i.xform=s,t.push(i),t.push(new Ue("timeCreated")),t.push(new Ue("updated")),t.push(new Ue("md5Hash",null,!0)),t.push(new Ue("cacheControl",null,!0)),t.push(new Ue("contentDisposition",null,!0)),t.push(new Ue("contentEncoding",null,!0)),t.push(new Ue("contentLanguage",null,!0)),t.push(new Ue("contentType",null,!0)),t.push(new Ue("metadata","customMetadata",!0)),Xi=t,Xi}function PT(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new tt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function AT(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return PT(s,t),s}function e_(t,e,n){const s=Jp(e);return s===null?null:AT(t,s,n)}function NT(t,e,n,s){const i=Jp(e);if(i===null||!Ql(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),_=Xl(d,n,s),m=zp({alt:"media",token:c});return _+m})[0]}function kT(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class t_{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function n_(t){if(!t)throw Yl()}function OT(t,e){function n(s,i){const r=e_(t,i,e);return n_(r!==null),r}return n}function xT(t,e){function n(s,i){const r=e_(t,i,e);return n_(r!==null),NT(r,i,t.host,t._protocol)}return n}function s_(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qC():i=GC():n.getStatus()===402?i=jC(t.bucket):n.getStatus()===403?i=zC(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function DT(t){const e=s_(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=$C(t.path)),r.serverResponse=i.serverResponse,r}return n}function MT(t,e,n){const s=e.fullServerUrl(),i=Xl(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new t_(i,r,xT(t,n),o);return a.errorHandler=DT(e),a}function LT(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function UT(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=LT(null,e)),s}function FT(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let S=0;S<2;S++)O=O+Math.random().toString().slice(2);return O}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=UT(e,s,i),u=kT(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",_=fn.getBlob(h,s,d);if(_===null)throw ZC();const m={name:c.fullPath},E=Xl(r,t.host,t._protocol),P="POST",D=t.maxUploadRetryTime,k=new t_(E,P,OT(t,n),D);return k.urlParams=m,k.headers=o,k.body=_.uploadData(),k.errorHandler=s_(e),k}class BT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Hs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class HT extends BT{initXhr(){this.xhr_.responseType="text"}}function i_(){return new HT}/**
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
 */class Kn{constructor(e,n){this._service=e,n instanceof tt?this._location=n:this._location=tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Kn(e,n)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xp(this._location.path)}get storage(){return this._service}get parent(){const e=CT(this._location.path);if(e===null)return null;const n=new tt(this._location.bucket,e);return new Kn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nT(e)}}function WT(t,e,n){t._throwIfRoot("uploadBytes");const s=FT(t.storage,t._location,Zp(),new fn(e,!0),n);return t.storage.makeRequestWithTokens(s,i_).then(i=>({metadata:i,ref:t}))}function VT(t){t._throwIfRoot("getDownloadURL");const e=MT(t.storage,t._location,Zp());return t.storage.makeRequestWithTokens(e,i_).then(n=>{if(n===null)throw eT();return n})}function $T(t,e){const n=TT(t._location.path,e),s=new tt(t._location.bucket,n);return new Kn(t.storage,s)}/**
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
 */function jT(t){return/^[A-Za-z]+:\/\//.test(t)}function GT(t,e){return new Kn(t,e)}function r_(t,e){if(t instanceof Zl){const n=t;if(n._bucket==null)throw XC();const s=new Kn(n,n._bucket);return e!=null?r_(s,e):s}else return e!==void 0?$T(t,e):t}function qT(t,e){if(e&&jT(e)){if(t instanceof Zl)return GT(t,e);throw Aa("To use ref(service, url), the first argument must be a Storage instance.")}else return r_(t,e)}function Xu(t,e){const n=e==null?void 0:e[Gp];return n==null?null:tt.makeFromBucketSpec(n,t)}function zT(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Dd(i,t.app.options.projectId))}class Zl{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=jp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WC,this._maxUploadRetryTime=VC,this._requests=new Set,i!=null?this._bucket=tt.makeFromBucketSpec(i,this._host):this._bucket=Xu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=Xu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ju("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ju("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Kn(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new sT(qp());{const o=pT(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Zu="@firebase/storage",eh="0.13.1";/**
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
 */const o_="storage";function KT(t,e,n){return t=Ee(t),WT(t,e,n)}function YT(t){return t=Ee(t),VT(t)}function QT(t,e){return t=Ee(t),qT(t,e)}function JT(t=ol(),e){t=Ee(t);const s=Xr(t,o_).getImmediate({identifier:e}),i=kd("storage");return i&&XT(s,...i),s}function XT(t,e,n,s={}){zT(t,e,n,s)}function ZT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Zl(n,s,i,e,Qn)}function eS(){Vn(new En(o_,ZT,"PUBLIC").setMultipleInstances(!0)),Pt(Zu,eh,""),Pt(Zu,eh,"esm2017")}eS();const tS={apiKey:"AIzaSyDoeTndtaGXkvn8ZYssuZRLD1RZhik_mMg",authDomain:"testcoderafi.firebaseapp.com",projectId:"testcoderafi",databaseURL:"https://testcoderafi-default-rtdb.europe-west1.firebasedatabase.app",storageBucket:"testcoderafi.appspot.com",messagingSenderId:"682809871602",appId:"1:682809871602:web:b7e874cfbda933ce13d46b"},ec=Hd(tS),qt=Nw(ec),qs=FC(ec),nS=JT(ec),Hi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},sS={name:"App",setup(){const t=Xe(null);return gl(qt,n=>{t.value=n}),{user:t,logout:async()=>{await df(qt),t.value=null}}}},iS={id:"app"};function rS(t,e,n,s,i,r){const o=hr("router-link"),a=hr("router-view");return fe(),ge("div",iS,[K("nav",null,[Pe(o,{to:"/"},{default:Ys(()=>e[1]||(e[1]=[pn("Accueil")])),_:1}),s.user?He("v-if",!0):(fe(),na(o,{key:0,to:"/login"},{default:Ys(()=>e[2]||(e[2]=[pn("Connexion")])),_:1})),s.user?(fe(),na(o,{key:1,to:"/profile"},{default:Ys(()=>e[3]||(e[3]=[pn("Mon Profil")])),_:1})):He("v-if",!0),s.user?(fe(),ge("button",{key:2,onClick:e[0]||(e[0]=(...l)=>s.logout&&s.logout(...l))},"Déconnexion")):He("v-if",!0)]),Pe(a)])}const oS=Hi(sS,[["render",rS]]);/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const rs=typeof document<"u";function a_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function aS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&a_(t.default)}const ne=Object.assign;function Vo(t,e){const n={};for(const s in e){const i=e[s];n[s]=vt(i)?i.map(t):t(i)}return n}const oi=()=>{},vt=Array.isArray,l_=/#/g,lS=/&/g,cS=/\//g,uS=/=/g,hS=/\?/g,c_=/\+/g,dS=/%5B/g,fS=/%5D/g,u_=/%5E/g,pS=/%60/g,h_=/%7B/g,_S=/%7C/g,d_=/%7D/g,gS=/%20/g;function tc(t){return encodeURI(""+t).replace(_S,"|").replace(dS,"[").replace(fS,"]")}function mS(t){return tc(t).replace(h_,"{").replace(d_,"}").replace(u_,"^")}function Na(t){return tc(t).replace(c_,"%2B").replace(gS,"+").replace(l_,"%23").replace(lS,"%26").replace(pS,"`").replace(h_,"{").replace(d_,"}").replace(u_,"^")}function vS(t){return Na(t).replace(uS,"%3D")}function yS(t){return tc(t).replace(l_,"%23").replace(hS,"%3F")}function ES(t){return t==null?"":yS(t).replace(cS,"%2F")}function Ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const wS=/\/$/,bS=t=>t.replace(wS,"");function $o(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=SS(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Ti(o)}}function IS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function th(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function CS(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Cs(e.matched[s],n.matched[i])&&f_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function f_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TS(t[n],e[n]))return!1;return!0}function TS(t,e){return vt(t)?nh(t,e):vt(e)?nh(e,t):t===e}function nh(t,e){return vt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function SS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Si;(function(t){t.pop="pop",t.push="push"})(Si||(Si={}));var ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ai||(ai={}));function RS(t){if(!t)if(rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bS(t)}const PS=/^[^#]+#/;function AS(t,e){return t.replace(PS,"#")+e}function NS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fo=()=>({left:window.scrollX,top:window.scrollY});function kS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=NS(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sh(t,e){return(history.state?history.state.position-e:-1)+t}const ka=new Map;function OS(t,e){ka.set(t,e)}function xS(t){const e=ka.get(t);return ka.delete(t),e}let DS=()=>location.protocol+"//"+location.host;function p_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),th(l,"")}return th(n,t)+s+i}function MS(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=p_(t,location),m=n.value,E=e.value;let P=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}P=E?d.position-E.position:0}else s(_);i.forEach(D=>{D(n.value,m,{delta:P,type:Si.pop,direction:P?P>0?ai.forward:ai.back:ai.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(ne({},d.state,{scroll:fo()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function ih(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?fo():null}}function LS(t){const{history:e,location:n}=window,s={value:p_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:DS()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=ne({},e.state,ih(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ne({},i.value,e.state,{forward:l,scroll:fo()});r(u.current,u,!0);const h=ne({},ih(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function US(t){t=RS(t);const e=LS(t),n=MS(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ne({location:"",base:t,go:s,createHref:AS.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function FS(t){return typeof t=="string"||t&&typeof t=="object"}function __(t){return typeof t=="string"||typeof t=="symbol"}const g_=Symbol("");var rh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rh||(rh={}));function Ts(t,e){return ne(new Error,{type:t,[g_]:!0},e)}function Dt(t,e){return t instanceof Error&&g_ in t&&(e==null||!!(t.type&e))}const oh="[^/]+?",BS={sensitive:!1,strict:!1,start:!0,end:!0},HS=/[.+*?^${}()[\]/\\]/g;function WS(t,e){const n=ne({},BS,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(HS,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:E,optional:P,regexp:D}=d;r.push({name:m,repeatable:E,optional:P});const k=D||oh;if(k!==oh){_+=10;try{new RegExp(`(${k})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${k}): `+S.message)}}let O=E?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(O=P&&c.length<2?`(?:/${O})`:"/"+O),P&&(O+="?"),i+=O,_+=20,P&&(_+=-8),E&&(_+=-20),k===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:E,optional:P}=_,D=m in c?c[m]:"";if(vt(D)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const k=vt(D)?D.join("/"):D;if(!k)if(P)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=k}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function VS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function m_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=VS(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(ah(s))return 1;if(ah(i))return-1}return i.length-s.length}function ah(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $S={type:0,value:""},jS=/[a-zA-Z0-9_]/;function GS(t){if(!t)return[[]];if(t==="/")return[[$S]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:jS.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function qS(t,e,n){const s=WS(GS(t.path),n),i=ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function zS(t,e){const n=[],s=new Map;e=uh({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,d,_){const m=!_,E=KS(h);E.aliasOf=_&&_.record;const P=uh(e,h),D=[E];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const z of S)D.push(ne({},E,{components:_?_.record.components:E.components,path:z,aliasOf:_?_.record:E}))}let k,O;for(const S of D){const{path:z}=S;if(d&&z[0]!=="/"){const he=d.record.path,se=he[he.length-1]==="/"?"":"/";S.path=d.record.path+(z&&se+z)}if(k=qS(S,d,P),_?_.alias.push(k):(O=O||k,O!==k&&O.alias.push(k),m&&h.name&&!ch(k)&&o(h.name)),v_(k)&&l(k),E.children){const he=E.children;for(let se=0;se<he.length;se++)r(he[se],k,_&&_.children[se])}_=_||k}return O?()=>{o(O)}:oi}function o(h){if(__(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=JS(h,n);n.splice(d,0,h),h.record.name&&!ch(h)&&s.set(h.record.name,h)}function c(h,d){let _,m={},E,P;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw Ts(1,{location:h});P=_.record.name,m=ne(lh(d.params,_.keys.filter(O=>!O.optional).concat(_.parent?_.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),h.params&&lh(h.params,_.keys.map(O=>O.name))),E=_.stringify(m)}else if(h.path!=null)E=h.path,_=n.find(O=>O.re.test(E)),_&&(m=_.parse(E),P=_.record.name);else{if(_=d.name?s.get(d.name):n.find(O=>O.re.test(d.path)),!_)throw Ts(1,{location:h,currentLocation:d});P=_.record.name,m=ne({},d.params,h.params),E=_.stringify(m)}const D=[];let k=_;for(;k;)D.unshift(k.record),k=k.parent;return{name:P,path:E,params:m,matched:D,meta:QS(D)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function lh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function KS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:YS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},mods:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function YS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function ch(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function QS(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function uh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function JS(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;m_(t,e[r])<0?s=r:n=r+1}const i=XS(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function XS(t){let e=t;for(;e=e.parent;)if(v_(e)&&m_(t,e)===0)return e}function v_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ZS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(c_," "),o=r.indexOf("="),a=Ti(o<0?r:r.slice(0,o)),l=o<0?null:Ti(r.slice(o+1));if(a in e){let c=e[a];vt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function hh(t){let e="";for(let n in t){const s=t[n];if(n=vS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(vt(s)?s.map(r=>r&&Na(r)):[s&&Na(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function eR(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=vt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const tR=Symbol(""),dh=Symbol(""),nc=Symbol(""),y_=Symbol(""),Oa=Symbol("");function Ws(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Ts(4,{from:n,to:e})):d instanceof Error?l(d):FS(d)?l(Ts(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function jo(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(a_(l)){const u=(l.__vccOpts||l)[e];u&&r.push(cn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=aS(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&cn(_,n,s,o,a,i)()}))}}return r}function fh(t){const e=$t(nc),n=$t(y_),s=ct(()=>{const l=us(t.to);return e.resolve(l)}),i=ct(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Cs.bind(null,u));if(d>-1)return d;const _=ph(l[c-2]);return c>1&&ph(u)===_&&h[h.length-1].path!==_?h.findIndex(Cs.bind(null,l[c-2])):d}),r=ct(()=>i.value>-1&&rR(n.params,s.value.params)),o=ct(()=>i.value>-1&&i.value===n.matched.length-1&&f_(n.params,s.value.params));function a(l={}){return iR(l)?e[us(t.replace)?"replace":"push"](us(t.to)).catch(oi):Promise.resolve()}return{route:s,href:ct(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const nR=Yh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fh,setup(t,{slots:e}){const n=$r(fh(t)),{options:s}=$t(nc),i=ct(()=>({[_h(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[_h(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Id("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),sR=nR;function iR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rR(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!vt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ph(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _h=(t,e,n)=>t??e??n,oR=Yh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=$t(Oa),i=ct(()=>t.route||s.value),r=$t(dh,0),o=ct(()=>{let c=us(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ct(()=>i.value.matched[o.value]);er(dh,ct(()=>o.value+1)),er(tR,a),er(Oa,i);const l=Xe();return tr(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Cs(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return gh(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,P=Id(d,ne({},m,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return gh(n.default,{Component:P,route:c})||P}}});function gh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const aR=oR;function lR(t){const e=zS(t.routes,t),n=t.parseQuery||ZS,s=t.stringifyQuery||hh,i=t.history,r=Ws(),o=Ws(),a=Ws(),l=tg(on);let c=on;rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vo.bind(null,y=>""+y),h=Vo.bind(null,ES),d=Vo.bind(null,Ti);function _(y,M){let N,L;return __(y)?(N=e.getRecordMatcher(y),L=M):L=y,e.addRoute(L,N)}function m(y){const M=e.getRecordMatcher(y);M&&e.removeRoute(M)}function E(){return e.getRoutes().map(y=>y.record)}function P(y){return!!e.getRecordMatcher(y)}function D(y,M){if(M=ne({},M||l.value),typeof y=="string"){const p=$o(n,y,M.path),g=e.resolve({path:p.path},M),w=i.createHref(p.fullPath);return ne(p,g,{params:d(g.params),hash:Ti(p.hash),redirectedFrom:void 0,href:w})}let N;if(y.path!=null)N=ne({},y,{path:$o(n,y.path,M.path).path});else{const p=ne({},y.params);for(const g in p)p[g]==null&&delete p[g];N=ne({},y,{params:h(p)}),M.params=h(M.params)}const L=e.resolve(N,M),ee=y.hash||"";L.params=u(d(L.params));const _e=IS(s,ne({},y,{hash:mS(ee),path:L.path})),f=i.createHref(_e);return ne({fullPath:_e,hash:ee,query:s===hh?eR(y.query):y.query||{}},L,{redirectedFrom:void 0,href:f})}function k(y){return typeof y=="string"?$o(n,y,l.value.path):ne({},y)}function O(y,M){if(c!==y)return Ts(8,{from:M,to:y})}function S(y){return se(y)}function z(y){return S(ne(k(y),{replace:!0}))}function he(y){const M=y.matched[y.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let L=typeof N=="function"?N(y):N;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=k(L):{path:L},L.params={}),ne({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function se(y,M){const N=c=D(y),L=l.value,ee=y.state,_e=y.force,f=y.replace===!0,p=he(N);if(p)return se(ne(k(p),{state:typeof p=="object"?ne({},ee,p.state):ee,force:_e,replace:f}),M||N);const g=N;g.redirectedFrom=M;let w;return!_e&&CS(s,L,N)&&(w=Ts(16,{to:g,from:L}),Et(L,L,!0,!1)),(w?Promise.resolve(w):st(g,L)).catch(v=>Dt(v)?Dt(v,2)?v:nn(v):J(v,g,L)).then(v=>{if(v){if(Dt(v,2))return se(ne({replace:f},k(v.to),{state:typeof v.to=="object"?ne({},ee,v.to.state):ee,force:_e}),M||g)}else v=An(g,L,!0,f,ee);return tn(g,L,v),v})}function Ne(y,M){const N=O(y,M);return N?Promise.reject(N):Promise.resolve()}function nt(y){const M=es.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(y):y()}function st(y,M){let N;const[L,ee,_e]=cR(y,M);N=jo(L.reverse(),"beforeRouteLeave",y,M);for(const p of L)p.leaveGuards.forEach(g=>{N.push(cn(g,y,M))});const f=Ne.bind(null,y,M);return N.push(f),it(N).then(()=>{N=[];for(const p of r.list())N.push(cn(p,y,M));return N.push(f),it(N)}).then(()=>{N=jo(ee,"beforeRouteUpdate",y,M);for(const p of ee)p.updateGuards.forEach(g=>{N.push(cn(g,y,M))});return N.push(f),it(N)}).then(()=>{N=[];for(const p of _e)if(p.beforeEnter)if(vt(p.beforeEnter))for(const g of p.beforeEnter)N.push(cn(g,y,M));else N.push(cn(p.beforeEnter,y,M));return N.push(f),it(N)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),N=jo(_e,"beforeRouteEnter",y,M,nt),N.push(f),it(N))).then(()=>{N=[];for(const p of o.list())N.push(cn(p,y,M));return N.push(f),it(N)}).catch(p=>Dt(p,8)?p:Promise.reject(p))}function tn(y,M,N){a.list().forEach(L=>nt(()=>L(y,M,N)))}function An(y,M,N,L,ee){const _e=O(y,M);if(_e)return _e;const f=M===on,p=rs?history.state:{};N&&(L||f?i.replace(y.fullPath,ne({scroll:f&&p&&p.scroll},ee)):i.push(y.fullPath,ee)),l.value=y,Et(y,M,N,f),nn()}let yt;function Os(){yt||(yt=i.listen((y,M,N)=>{if(!Wi.listening)return;const L=D(y),ee=he(L);if(ee){se(ne(ee,{replace:!0}),L).catch(oi);return}c=L;const _e=l.value;rs&&OS(sh(_e.fullPath,N.delta),fo()),st(L,_e).catch(f=>Dt(f,12)?f:Dt(f,2)?(se(f.to,L).then(p=>{Dt(p,20)&&!N.delta&&N.type===Si.pop&&i.go(-1,!1)}).catch(oi),Promise.reject()):(N.delta&&i.go(-N.delta,!1),J(f,L,_e))).then(f=>{f=f||An(L,_e,!1),f&&(N.delta&&!Dt(f,8)?i.go(-N.delta,!1):N.type===Si.pop&&Dt(f,20)&&i.go(-1,!1)),tn(L,_e,f)}).catch(oi)}))}let Xn=Ws(),Ce=Ws(),ie;function J(y,M,N){nn(y);const L=Ce.list();return L.length?L.forEach(ee=>ee(y,M,N)):console.error(y),Promise.reject(y)}function Ot(){return ie&&l.value!==on?Promise.resolve():new Promise((y,M)=>{Xn.add([y,M])})}function nn(y){return ie||(ie=!y,Os(),Xn.list().forEach(([M,N])=>y?N(y):M()),Xn.reset()),y}function Et(y,M,N,L){const{scrollBehavior:ee}=t;if(!rs||!ee)return Promise.resolve();const _e=!N&&xS(sh(y.fullPath,0))||(L||!N)&&history.state&&history.state.scroll||null;return jh().then(()=>ee(y,M,_e)).then(f=>f&&kS(f)).catch(f=>J(f,y,M))}const $e=y=>i.go(y);let Zn;const es=new Set,Wi={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:E,resolve:D,options:t,push:S,replace:z,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ce.add,isReady:Ot,install(y){const M=this;y.component("RouterLink",sR),y.component("RouterView",aR),y.config.globalProperties.$router=M,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>us(l)}),rs&&!Zn&&l.value===on&&(Zn=!0,S(i.location).catch(ee=>{}));const N={};for(const ee in on)Object.defineProperty(N,ee,{get:()=>l.value[ee],enumerable:!0});y.provide(nc,M),y.provide(y_,Bh(N)),y.provide(Oa,l);const L=y.unmount;es.add(y),y.unmount=function(){es.delete(y),es.size<1&&(c=on,yt&&yt(),yt=null,l.value=on,Zn=!1,ie=!1),L()}}};function it(y){return y.reduce((M,N)=>M.then(()=>nt(N)),Promise.resolve())}return Wi}function cR(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Cs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Cs(c,l))||i.push(l))}return[n,s,i]}const uR={name:"PostComponent",setup(){const t=Xe(""),e=Xe([]),n=async()=>{if(t.value.trim()==="")return;const r=Gs(qs,"messages"),o=Yu(r),a=qt.currentUser.uid;await Ra(o,{content:t.value,createdAt:Date.now(),userId:a,replies:[]}),console.log("Message posté avec succès:",t.value),t.value=""},s=async()=>{const r=Gs(qs,"messages");NC(r,async o=>{const a=o.val(),l=a?Object.entries(a).map(([c,u])=>({id:c,...u})):[];for(const c of l){if(c.userId){const u=Gs(qs,`users/${c.userId}`),d=(await PC(u)).val();c.imageProfile=d?d.imageProfile:""}c.replies?c.replies=Object.entries(c.replies).map(([u,h])=>({id:u,...h})):c.replies=[]}e.value=l,console.log("Messages chargés:",e.value)})},i=r=>{const o=prompt("Écris ta réponse :");if(o&&o.trim()!==""){const a=Gs(qs,`messages/${r}/replies`),l=Yu(a);Ra(l,{content:o,createdAt:Date.now()}).then(()=>{console.log("Réponse postée avec succès:",o)}).catch(c=>{console.error("Erreur lors de la réponse:",c)})}};return Zh(()=>{s()}),{message:t,messages:e,postMessage:n,replyToMessage:i}}},hR={class:"post"},dR={key:0},fR={key:1},pR=["src"],_R=["onClick"],gR={key:1};function mR(t,e,n,s,i,r){return fe(),ge("div",hR,[e[4]||(e[4]=K("h2",null,"Poster un message",-1)),K("form",{onSubmit:e[1]||(e[1]=Td((...o)=>s.postMessage&&s.postMessage(...o),["prevent"]))},[Qo(K("textarea",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.message=o),placeholder:"Écris ton message...",required:""},null,512),[[oa,s.message]]),e[2]||(e[2]=K("button",{type:"submit"},"Poster",-1))],32),e[5]||(e[5]=K("h3",null,"Messages",-1)),s.messages.length===0?(fe(),ge("div",dR,e[3]||(e[3]=[K("p",null,"Aucun message pour le moment.",-1)]))):(fe(),ge("ul",fR,[(fe(!0),ge(lt,null,pc(s.messages,o=>(fe(),ge("li",{key:o.id,class:"message-item"},[o.imageProfile?(fe(),ge("img",{key:0,src:o.imageProfile,alt:"Image de profil",class:"profile-image"},null,8,pR)):He("v-if",!0),K("p",null,Tt(o.content),1),K("small",null,"Posté le "+Tt(new Date(o.createdAt).toLocaleString()),1),K("button",{onClick:a=>s.replyToMessage(o.id)},"Répondre",8,_R),He(" Affichage des réponses s'il y en a "),o.replies&&o.replies.length>0?(fe(),ge("ul",gR,[(fe(!0),ge(lt,null,pc(o.replies,a=>(fe(),ge("li",{key:a.id},[K("p",null,Tt(a.content),1),K("small",null,"Réponse le "+Tt(new Date(a.createdAt).toLocaleString()),1)]))),128))])):He("v-if",!0)]))),128))]))])}const vR=Hi(uR,[["render",mR],["__scopeId","data-v-f24c9404"]]),yR={name:"HomeView",components:{PostComponent:vR},setup(){const t=Xe(null);return gl(qt,e=>{t.value=e}),{user:t}}},ER={class:"home"},wR={key:0},bR={key:1};function IR(t,e,n,s,i,r){const o=hr("PostComponent");return fe(),ge("div",ER,[e[0]||(e[0]=K("h1",null,"Bienvenue sur notre réseau social",-1)),s.user?He("v-if",!0):(fe(),ge("p",wR,"Veuillez vous connecter pour commencer à poster des messages.")),s.user?(fe(),ge("div",bR,[He(" Composant de publication de messages (seulement visible si l'utilisateur est connecté) "),Pe(o)])):He("v-if",!0)])}const CR=Hi(yR,[["render",IR],["__scopeId","data-v-34b69f32"]]),TR={name:"LoginView",setup(){const t=Xe(""),e=Xe(""),n=Xe("");return{email:t,password:e,login:async()=>{try{await _E(qt,t.value,e.value),console.log("Connecté avec succès!"),n.value=""}catch(o){n.value="Erreur lors de la connexion : "+o.message}},register:async()=>{try{await pE(qt,t.value,e.value),console.log("Compte créé et connecté avec succès!"),n.value=""}catch(o){n.value="Erreur lors de l'inscription : "+o.message}},loginWithGoogle:async()=>{const o=new Ut;try{await BE(qt,o),console.log("Connecté avec Google!"),n.value=""}catch(a){n.value="Erreur lors de la connexion avec Google : "+a.message}},errorMessage:n}}},SR={class:"login"},RR={key:0,class:"error"};function PR(t,e,n,s,i,r){return fe(),ge("div",SR,[e[7]||(e[7]=K("h1",null,"Connexion",-1)),s.errorMessage?(fe(),ge("p",RR,Tt(s.errorMessage),1)):He("v-if",!0),K("form",{onSubmit:e[2]||(e[2]=Td((...o)=>s.login&&s.login(...o),["prevent"]))},[K("div",null,[Qo(K("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),placeholder:"Email",required:""},null,512),[[oa,s.email]])]),K("div",null,[Qo(K("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),placeholder:"Mot de passe",required:""},null,512),[[oa,s.password]])]),e[5]||(e[5]=K("button",{type:"submit"},"Se connecter",-1))],32),e[8]||(e[8]=K("p",null,"Ou",-1)),K("button",{onClick:e[3]||(e[3]=(...o)=>s.loginWithGoogle&&s.loginWithGoogle(...o))},"Se connecter avec Google"),K("p",null,[e[6]||(e[6]=pn("Pas encore de compte ? ")),K("button",{onClick:e[4]||(e[4]=(...o)=>s.register&&s.register(...o))},"S'inscrire")])])}const AR=Hi(TR,[["render",PR],["__scopeId","data-v-86d8e764"]]),NR={name:"ProfileView",setup(){const t=Xe(null),e=Xe(""),n=Xe(""),s=Xe(""),i=Xe("");return gl(qt,l=>{l&&(t.value=l,e.value=l.displayName||"",n.value=l.photoURL||"")}),{user:t,displayName:e,photoURL:n,uploadProfilePicture:async l=>{const c=l.target.files[0];if(!c)return;const u=QT(nS,`profilePictures/${t.value.uid}/${c.name}`);try{const h=await KT(u,c),d=await YT(h.ref);n.value=d,console.log("Photo de profil téléchargée avec succès:",d),s.value="Photo de profil mise à jour avec succès !";const _=Gs(qs,`users/${t.value.uid}`);await Ra(_,{imageProfile:d}),console.log("URL de la photo de profil ajoutée à la Realtime Database")}catch(h){i.value="Erreur lors du téléchargement de la photo : "+h.message,console.error("Erreur lors du téléchargement de la photo :",h)}},updateProfile:async()=>{if(t.value)try{await mE(t.value,{displayName:e.value,photoURL:n.value}),s.value="Profil mis à jour avec succès !",i.value=""}catch(l){i.value="Erreur lors de la mise à jour du profil : "+l.message,s.value="",console.error("Erreur lors de la mise à jour du profil :",l)}},logout:async()=>{try{await df(qt),console.log("Déconnecté avec succès!")}catch(l){console.error("Erreur lors de la déconnexion:",l.message)}},successMessage:s,errorMessage:i}}},kR={class:"profile"},OR={key:0},xR=["src"],DR={key:1,class:"success"},MR={key:2,class:"error"},LR={key:1};function UR(t,e,n,s,i,r){const o=hr("router-link");return fe(),ge("div",kR,[e[7]||(e[7]=K("h1",null,"Mon Profil",-1)),s.user?(fe(),ge("div",OR,[He(" Affichage de la photo de profil "),s.photoURL?(fe(),ge("img",{key:0,src:s.photoURL,alt:"Photo de profil",class:"profile-pic"},null,8,xR)):He("v-if",!0),K("p",null,[e[3]||(e[3]=K("strong",null,"Nom d'utilisateur :",-1)),pn(" "+Tt(s.displayName||"Nom non défini"),1)]),K("p",null,[e[4]||(e[4]=K("strong",null,"Email :",-1)),pn(" "+Tt(s.user.email),1)]),He(" Input pour télécharger une nouvelle photo de profil "),K("input",{type:"file",onChange:e[0]||(e[0]=(...a)=>s.uploadProfilePicture&&s.uploadProfilePicture(...a))},null,32),K("button",{onClick:e[1]||(e[1]=(...a)=>s.updateProfile&&s.updateProfile(...a))},"Mettre à jour le profil"),K("button",{onClick:e[2]||(e[2]=(...a)=>s.logout&&s.logout(...a))},"Déconnexion"),s.successMessage?(fe(),ge("p",DR,Tt(s.successMessage),1)):He("v-if",!0),s.errorMessage?(fe(),ge("p",MR,Tt(s.errorMessage),1)):He("v-if",!0)])):(fe(),ge("div",LR,[e[6]||(e[6]=K("p",null,"Vous devez être connecté pour voir cette page.",-1)),Pe(o,{to:"/login"},{default:Ys(()=>e[5]||(e[5]=[pn("Se connecter")])),_:1})]))])}const FR=Hi(NR,[["render",UR],["__scopeId","data-v-1c5b1a75"]]),BR=[{path:"/",name:"home",component:CR},{path:"/login",name:"login",component:AR},{path:"/profile",name:"profile",component:FR}],HR=lR({history:US(),routes:BR}),E_=Bm(oS);E_.use(HR);E_.mount("#app");
