import{bT as h,d as Zt,i as Rt,v as It,F as Bt,B as Vt,A as Dt,_ as Ot}from"./BOXxnL9G.js";import{V as Ft}from"./53Xsm9HT.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=window,at=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),dt=new WeakMap;let Et=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(at&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&dt.set(e,t))}return t}toString(){return this.cssText}};const v=r=>new Et(typeof r=="string"?r:r+"",void 0,ot),A=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new Et(e,r,ot)},jt=(r,t)=>{at?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=F.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},ht=at?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return v(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;const j=window,pt=j.trustedTypes,zt=pt?pt.emptyScript:"",ut=j.reactiveElementPolyfillSupport,st={toAttribute(r,t){switch(t){case Boolean:r=r?zt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Ct=(r,t)=>t!==r&&(t==t||r==r),K={attribute:!0,type:String,converter:st,reflect:!1,hasChanged:Ct},rt="finalized";let L=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const a=this[t];this[e]=s,this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||K}static finalize(){if(this.hasOwnProperty(rt))return!1;this[rt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ht(s))}else t!==void 0&&e.push(ht(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return jt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=K){var s;const a=this.constructor._$Ep(t,i);if(a!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:st).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,a=s._$Ev.get(t);if(a!==void 0&&this._$El!==a){const n=s.getPropertyOptions(a),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:st;this._$El=a,this[a]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,a)=>this[a]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var a;return(a=s.hostUpdate)===null||a===void 0?void 0:a.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};L[rt]=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},ut==null||ut({ReactiveElement:L}),((Y=j.reactiveElementVersions)!==null&&Y!==void 0?Y:j.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Q;const z=window,P=z.trustedTypes,mt=P?P.createPolicy("lit-html",{createHTML:r=>r}):void 0,nt="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,kt="?"+E,Jt=`<${kt}>`,S=document,R=()=>S.createComment(""),I=r=>r===null||typeof r!="object"&&typeof r!="function",St=Array.isArray,qt=r=>St(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",X=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,gt=/>/g,C=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,xt=/"/g,Nt=/^(?:script|style|textarea|title)$/i,Gt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),l=Gt(1),U=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),$t=new WeakMap,k=S.createTreeWalker(S,129,null,!1);function Lt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return mt!==void 0?mt.createHTML(t):t}const Wt=(r,t)=>{const e=r.length-1,i=[];let s,a=t===2?"<svg>":"",n=T;for(let c=0;c<e;c++){const o=r[c];let d,u,m=-1,g=0;for(;g<o.length&&(n.lastIndex=g,u=n.exec(o),u!==null);)g=n.lastIndex,n===T?u[1]==="!--"?n=ft:u[1]!==void 0?n=gt:u[2]!==void 0?(Nt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=C):u[3]!==void 0&&(n=C):n===C?u[0]===">"?(n=s??T,m=-1):u[1]===void 0?m=-2:(m=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?C:u[3]==='"'?xt:vt):n===xt||n===vt?n=C:n===ft||n===gt?n=T:(n=C,s=void 0);const y=n===C&&r[c+1].startsWith("/>")?" ":"";a+=n===T?o+Jt:m>=0?(i.push(d),o.slice(0,m)+nt+o.slice(m)+E+y):o+E+(m===-2?(i.push(void 0),c):y)}return[Lt(r,a+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class B{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,n=0;const c=t.length-1,o=this.parts,[d,u]=Wt(t,e);if(this.el=B.createElement(d,i),k.currentNode=this.el.content,e===2){const m=this.el.content,g=m.firstChild;g.remove(),m.append(...g.childNodes)}for(;(s=k.nextNode())!==null&&o.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const m=[];for(const g of s.getAttributeNames())if(g.endsWith(nt)||g.startsWith(E)){const y=u[n++];if(m.push(g),y!==void 0){const Tt=s.getAttribute(y.toLowerCase()+nt).split(E),O=/([.?@])?(.*)/.exec(y);o.push({type:1,index:a,name:O[2],strings:Tt,ctor:O[1]==="."?Kt:O[1]==="?"?Xt:O[1]==="@"?te:q})}else o.push({type:6,index:a})}for(const g of m)s.removeAttribute(g)}if(Nt.test(s.tagName)){const m=s.textContent.split(E),g=m.length-1;if(g>0){s.textContent=P?P.emptyScript:"";for(let y=0;y<g;y++)s.append(m[y],R()),k.nextNode(),o.push({type:2,index:++a});s.append(m[g],R())}}}else if(s.nodeType===8)if(s.data===kt)o.push({type:2,index:a});else{let m=-1;for(;(m=s.data.indexOf(E,m+1))!==-1;)o.push({type:7,index:a}),m+=E.length-1}a++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function M(r,t,e=r,i){var s,a,n,c;if(t===U)return t;let o=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const d=I(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==d&&((a=o==null?void 0:o._$AO)===null||a===void 0||a.call(o,!1),d===void 0?o=void 0:(o=new d(r),o._$AT(r,e,i)),i!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=o:e._$Cl=o),o!==void 0&&(t=M(r,o._$AS(r,t.values),o,i)),t}class Yt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,a=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:S).importNode(i,!0);k.currentNode=a;let n=k.nextNode(),c=0,o=0,d=s[0];for(;d!==void 0;){if(c===d.index){let u;d.type===2?u=new V(n,n.nextSibling,this,t):d.type===1?u=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(u=new ee(n,this,t)),this._$AV.push(u),d=s[++o]}c!==(d==null?void 0:d.index)&&(n=k.nextNode(),c++)}return k.currentNode=S,a}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class V{constructor(t,e,i,s){var a;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(a=s==null?void 0:s.isConnected)===null||a===void 0||a}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),I(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==U&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==f&&I(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=B.createElement(Lt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===a)this._$AH.v(i);else{const n=new Yt(a,this),c=n.u(this.options);n.v(i),this.$(c),this._$AH=n}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new B(t)),e}T(t){St(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new V(this.k(R()),this.k(R()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class q{constructor(t,e,i,s,a){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const a=this.strings;let n=!1;if(a===void 0)t=M(this,t,e,0),n=!I(t)||t!==this._$AH&&t!==U,n&&(this._$AH=t);else{const c=t;let o,d;for(t=a[0],o=0;o<a.length-1;o++)d=M(this,c[i+o],e,o),d===U&&(d=this._$AH[o]),n||(n=!I(d)||d!==this._$AH[o]),d===f?t=f:t!==f&&(t+=(d??"")+a[o+1]),this._$AH[o]=d}n&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Kt extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}const Qt=P?P.emptyScript:"";class Xt extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==f?this.element.setAttribute(this.name,Qt):this.element.removeAttribute(this.name)}}class te extends q{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){var i;if((t=(i=M(this,t,e,0))!==null&&i!==void 0?i:f)===U)return;const s=this._$AH,a=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==f&&(s===f||a);a&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ee{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const bt=z.litHtmlPolyfillSupport;bt==null||bt(B,V),((Q=z.litHtmlVersions)!==null&&Q!==void 0?Q:z.litHtmlVersions=[]).push("2.8.0");const ie=(r,t,e)=>{var i,s;const a=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=a._$litPart$;if(n===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;a._$litPart$=n=new V(t.insertBefore(R(),c),c,void 0,e??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tt,et;let x=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ie(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return U}};x.finalized=!0,x._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:x});const yt=globalThis.litElementPolyfillSupport;yt==null||yt({LitElement:x});((et=globalThis.litElementVersions)!==null&&et!==void 0?et:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}},re=(r,t,e)=>{t.constructor.createProperty(e,r)};function p(r){return(t,e)=>e!==void 0?re(r,t,e):se(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it;((it=window.HTMLSlotElement)===null||it===void 0?void 0:it.prototype.assignedElements)!=null;function Pt(r,t,e){const i=Array.from(r);let s;if(t==="")return s=i.filter(n=>n.kind==="file"),e?s:[s[0]];const a=t.toLowerCase().split(",").map(n=>n.split("/").map(c=>c.trim())).filter(n=>n.length===2);return s=s=i.filter(n=>{if(n.kind!=="file")return!1;const[c,o]=n.type.toLowerCase().split("/").map(d=>d.trim());for(const[d,u]of a)if(c===d&&(u==="*"||o===u))return!0;return!1}),e===!1&&(s=[s[0]]),s}function _t(r,t,e){const i=[];return Pt(r.items,t,e).forEach(s=>{const a=s.getAsFile();a!==null&&i.push(a)}),i}class J extends Event{constructor(t,e){var i,s;super(t,e),(i=this)instanceof(s=J)||Object.setPrototypeOf(i,s.prototype),this._files=e.files,this._action=e.action}get action(){return this._action}get files(){return this._files}}class ne extends HTMLElement{constructor(){super(),this._dragEnterCount=0,this._onDragEnter=this._onDragEnter.bind(this),this._onDragLeave=this._onDragLeave.bind(this),this._onDrop=this._onDrop.bind(this),this._onPaste=this._onPaste.bind(this),this.addEventListener("dragover",t=>t.preventDefault()),this.addEventListener("drop",this._onDrop),this.addEventListener("dragenter",this._onDragEnter),this.addEventListener("dragend",()=>this._reset()),this.addEventListener("dragleave",this._onDragLeave),this.addEventListener("paste",this._onPaste)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",t)}get multiple(){return this.getAttribute("multiple")}set multiple(t){this.setAttribute("multiple",t||"")}_onDragEnter(t){if(this._dragEnterCount+=1,this._dragEnterCount>1)return;if(t.dataTransfer===null)return void this.classList.add("drop-invalid");const e=Pt(t.dataTransfer.items,this.accept,this.multiple!==null);this.classList.add(!t.dataTransfer||!t.dataTransfer.items.length||e[0]!==void 0?"drop-valid":"drop-invalid")}_onDragLeave(){this._dragEnterCount-=1,this._dragEnterCount===0&&this._reset()}_onDrop(t){if(t.preventDefault(),t.dataTransfer===null)return;this._reset();const e=_t(t.dataTransfer,this.accept,this.multiple!==null);e!==void 0&&this.dispatchEvent(new J("filedrop",{action:"drop",files:e}))}_onPaste(t){if(!t.clipboardData)return;const e=_t(t.clipboardData,this.accept,this.multiple!==void 0);e!==void 0&&this.dispatchEvent(new J("filedrop",{action:"paste",files:e}))}_reset(){this._dragEnterCount=0,this.classList.remove("drop-valid"),this.classList.remove("drop-invalid")}}customElements.define("file-drop",ne);const ae=l`<svg viewBox="0 0 859 236" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="859" height="236" rx="12" fill="white" />
    <path
        d="M353 201a4 4 0 0 1-4-5v-82a4 4 0 0 1 4-4h23c20 0 30 8 30 27 0 18-7 29-29 29h-12v30a4 4 0 0 1-4 5h-8Zm12-48h11c9 0 14-3 14-15 0-11-4-15-14-15h-11v30ZM432 202c-12 0-15-6-15-19v-74a4 4 0 0 1 5-4h6a4 4 0 0 1 4 4v76c0 3 1 4 3 5 3 1 4 2 5 4v3a4 4 0 0 1-1 4h-2l-5 1ZM494 223c-29 0-46-16-46-49s20-57 53-57c29 0 45 17 45 46 0 27-10 39-26 39-11 0-15-5-17-13-5 6-11 11-19 11-7 0-13-6-13-18l2-15c4-19 12-26 24-26 6 0 10 3 12 5h1a5 5 0 0 1 4-4h6a3 3 0 0 1 3 4l-7 34-1 5c0 5 2 7 6 7 8 0 13-8 13-29 0-24-9-36-34-36-26 0-39 20-39 47 0 28 10 39 33 39l15-2a4 4 0 0 1 5 2v2a4 4 0 0 1-2 6l-18 2Zm-5-34c5 0 9-4 13-7l6-28c-2-1-5-3-9-3-6 0-9 4-12 18l-2 14c0 5 2 6 4 6ZM562 201a4 4 0 0 1-4-5v-58a4 4 0 0 1 4-4h4a5 5 0 0 1 5 4l1 3c5-5 11-9 19-9 11 0 17 5 17 18v46a4 4 0 0 1-4 5h-7a4 4 0 0 1-4-5v-42c0-7-2-9-7-9s-9 2-13 6v45a4 4 0 0 1-4 5h-7ZM622 146a4 4 0 0 1-5-4v-4a4 4 0 0 1 5-4h3v-13a5 5 0 0 1 4-4l7-2a3 3 0 0 1 4 4v15h8a4 4 0 0 1 5 4v4a4 4 0 0 1-5 4h-8v38c0 5 1 7 5 7l3-1a3 3 0 0 1 4 2l1 4a4 4 0 0 1-3 5l-8 1c-10 0-17-4-17-15v-41h-3Z"
        fill="#362D31"
    />
    <path
        d="M673 201a3 3 0 0 1-3-3v-85a3 3 0 0 1 3-3h4a5 5 0 0 1 4 3l28 58 8 20-1-22v-56a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v85a3 3 0 0 1-3 3h-3a5 5 0 0 1-4-3l-28-56-9-22 1 25v53a3 3 0 0 1-3 3h-2ZM749 170c1 19 6 25 18 25 4 0 9-1 13-4a3 3 0 0 1 4 1l1 1a3 3 0 0 1-1 4c-5 3-10 5-17 5-15 0-26-9-26-33s10-33 24-33c15 0 23 10 23 31v2a1 1 0 0 1-1 1h-38Zm0-6h30c0-16-4-21-14-21-9 0-15 5-16 21ZM805 144h-5a3 3 0 0 1-3-3 3 3 0 0 1 3-3h5v-14a4 4 0 0 1 2-3l3-1a2 2 0 0 1 2 2v16h11a3 3 0 0 1 2 3 3 3 0 0 1-2 3h-11v46c0 3 2 5 6 5h4a3 3 0 0 1 4 1 3 3 0 0 1-2 5l-7 1c-7 0-12-3-12-12v-46ZM322 155c-62-33-128-4-140 49 0 0 108-15 140-49ZM218 31c-19 8-39 34-49 67-9 30-9 58-1 76 3-12 7-21 12-31 2-4 5-2 5 1l-3 20-3 15c17-11 33-34 43-64 10-34 8-67-4-84M159 95l2-7c-22-26-48-41-68-41-5 20 6 51 28 78 9 12 20 22 33 31-3-17-2-39 5-61ZM31 155c62-33 128-4 140 49 0 0-108-15-140-49Z"
        fill="#8EB533"
    />
    <path
        d="m356 86 2-2V64h10c11 0 16-6 16-17 0-10-6-16-17-16h-14l-2 2v51l2 2h3Zm2-49h9c6 0 9 3 9 11s-3 10-9 10h-9V37Zm62 29c0-15-7-21-17-21-9 0-16 6-16 21s7 21 17 21c9 0 16-6 16-21Zm-25 0c0-12 2-16 9-16 6 0 9 4 9 16s-3 16-9 16-9-4-9-16Zm43 20 3-2 5-19 2-12 2 12 5 19 3 2h3l2-2 10-36-2-2h-2c-2 0-3 1-3 2l-4 19-3 11-2-11-5-19-2-2h-3l-3 2-5 19-2 11-2-12-4-18-3-2h-3c-1 0-2 1-1 2l9 36 2 2h3Zm66-2c1-1 2-2 1-3l-1-2h-3l-8 2c-7 0-9-3-9-13h22l1-2v-1c0-15-5-20-15-20-9 0-16 6-16 21s6 21 17 21c5 0 8-1 11-3Zm-4-22h-16c0-9 3-12 8-12 6 0 8 3 8 12Zm19 24 2-2V57c3-3 6-5 10-5l1 1 1-1 1-6-1-1h-1c-4 0-8 3-11 7l-1-4-2-2h-1c-2 0-2 1-2 2v36c0 1 0 2 2 2h2Zm46-2v-3l-1-2h-3l-8 2c-7 0-9-3-9-13h22l1-2v-1c0-15-5-20-15-20-9 0-16 6-16 21s6 21 17 21c5 0 8-1 12-3Zm-5-22h-16c0-9 3-12 8-12 6 0 8 3 8 12Zm37 20 1 2 2 2h2l2-2V30l-2-2h-3l-2 2v20c-3-3-6-5-11-5-9 0-14 6-14 21 0 17 6 21 14 21 4 0 8-2 11-5Zm-17-16c0-13 2-15 8-15 3 0 6 2 9 4v22c-3 3-6 4-10 4-5 0-7-2-7-15Zm80 0c0-17-6-21-13-21-4 0-8 2-11 5V30l-2-2h-3l-2 2v54l2 2h1c2 0 3-1 3-2l1-2c2 3 6 5 11 5 9 0 13-6 13-21Zm-24 11V56c3-3 6-5 10-5 5 0 7 2 7 15s-2 15-8 15c-3 0-7-2-9-4Zm48 10 13-39-2-2h-3l-3 2-6 22-3 10-2-10-6-22-3-2h-3l-2 2 12 36 2 2c-2 7-4 9-9 10l-2 3 1 2 2 1c7-2 10-4 14-15Z"
        fill="#362D31"
    />
</svg>`,oe=l`<svg viewBox="0 0 859 236" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="859" height="236" rx="12" fill="#363636" />
    <path
        d="M353 201a4 4 0 0 1-4-5v-82a4 4 0 0 1 4-4h23c20 0 30 8 30 27 0 18-7 29-29 29h-12v30a4 4 0 0 1-4 5h-8Zm12-48h11c9 0 14-3 14-15 0-11-4-15-14-15h-11v30ZM432 202c-12 0-15-6-15-19v-74a4 4 0 0 1 5-4h6a4 4 0 0 1 4 4v76c0 3 1 4 3 5 3 1 4 2 5 4v3a4 4 0 0 1-1 4h-2l-5 1ZM494 223c-29 0-46-16-46-49s20-57 53-57c29 0 45 17 45 46 0 27-10 39-26 39-11 0-15-5-17-13-5 6-11 11-19 11-7 0-13-6-13-18l2-15c4-19 12-26 24-26 6 0 10 3 12 5h1a5 5 0 0 1 4-4h6a3 3 0 0 1 3 4l-7 34-1 5c0 5 2 7 6 7 8 0 13-8 13-29 0-24-9-36-34-36-26 0-39 20-39 47 0 28 10 39 33 39l15-2a4 4 0 0 1 5 2v2a4 4 0 0 1-2 6l-18 2Zm-5-34c5 0 9-4 13-7l6-28c-2-1-5-3-9-3-6 0-9 4-12 18l-2 14c0 5 2 6 4 6ZM562 201a4 4 0 0 1-4-5v-58a4 4 0 0 1 4-4h4a5 5 0 0 1 5 4l1 3c5-5 11-9 19-9 11 0 17 5 17 18v46a4 4 0 0 1-4 5h-7a4 4 0 0 1-4-5v-42c0-7-2-9-7-9s-9 2-13 6v45a4 4 0 0 1-4 5h-7ZM622 146a4 4 0 0 1-5-4v-4a4 4 0 0 1 5-4h3v-13a5 5 0 0 1 4-4l7-2a3 3 0 0 1 4 4v15h8a4 4 0 0 1 5 4v4a4 4 0 0 1-5 4h-8v38c0 5 1 7 5 7l3-1a3 3 0 0 1 4 2l1 4a4 4 0 0 1-3 5l-8 1c-10 0-17-4-17-15v-41h-3Z"
        fill="#FAFAFA"
    />
    <path
        d="M673 201a3 3 0 0 1-3-3v-85a3 3 0 0 1 3-3h4a5 5 0 0 1 4 3l28 58 8 20-1-22v-56a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v85a3 3 0 0 1-3 3h-3a5 5 0 0 1-4-3l-28-56-9-22 1 25v53a3 3 0 0 1-3 3h-2ZM749 170c1 19 6 25 18 25 4 0 9-1 13-4a3 3 0 0 1 4 1l1 1a3 3 0 0 1-1 4c-5 3-10 5-17 5-15 0-26-9-26-33s10-33 24-33c15 0 23 10 23 31v2a1 1 0 0 1-1 1h-38Zm0-6h30c0-16-4-21-14-21-9 0-15 5-16 21ZM805 144h-5a3 3 0 0 1-3-3 3 3 0 0 1 3-3h5v-14a4 4 0 0 1 2-3l3-1a2 2 0 0 1 2 2v16h11a3 3 0 0 1 2 3 3 3 0 0 1-2 3h-11v46c0 3 2 5 6 5h4a3 3 0 0 1 4 1 3 3 0 0 1-2 5l-7 1c-7 0-12-3-12-12v-46ZM322 155c-62-33-128-4-140 49 0 0 108-15 140-49ZM218 31c-19 8-39 34-49 67-9 30-9 58-1 76 3-12 7-21 12-31 2-4 5-2 5 1l-3 20-3 15c17-11 33-34 43-64 10-34 8-67-4-84M159 95l2-7c-22-26-48-41-68-41-5 20 6 51 28 78 9 12 20 22 33 31-3-17-2-39 5-61ZM31 155c62-33 128-4 140 49 0 0-108-15-140-49Z"
        fill="#8EB533"
    />
    <path
        d="m356 86 2-2V64h10c11 0 16-6 16-17 0-10-6-16-17-16h-14l-2 2v51l2 2h3Zm2-49h9c6 0 9 3 9 11s-3 10-9 10h-9V37Zm62 29c0-15-7-21-17-21-9 0-16 6-16 21s7 21 17 21c9 0 16-6 16-21Zm-25 0c0-12 2-16 9-16 6 0 9 4 9 16s-3 16-9 16-9-4-9-16Zm43 20 3-2 5-19 2-12 2 12 5 19 3 2h3l2-2 10-36-2-2h-2c-2 0-3 1-3 2l-4 19-3 11-2-11-5-19-2-2h-3l-3 2-5 19-2 11-2-12-4-18-3-2h-3c-1 0-2 1-1 2l9 36 2 2h3Zm66-2c1-1 2-2 1-3l-1-2h-3l-8 2c-7 0-9-3-9-13h22l1-2v-1c0-15-5-20-15-20-9 0-16 6-16 21s6 21 17 21c5 0 8-1 11-3Zm-4-22h-16c0-9 3-12 8-12 6 0 8 3 8 12Zm19 24 2-2V57c3-3 6-5 10-5l1 1 1-1 1-6-1-1h-1c-4 0-8 3-11 7l-1-4-2-2h-1c-2 0-2 1-2 2v36c0 1 0 2 2 2h2Zm46-2v-3l-1-2h-3l-8 2c-7 0-9-3-9-13h22l1-2v-1c0-15-5-20-15-20-9 0-16 6-16 21s6 21 17 21c5 0 8-1 12-3Zm-5-22h-16c0-9 3-12 8-12 6 0 8 3 8 12Zm37 20 1 2 2 2h2l2-2V30l-2-2h-3l-2 2v20c-3-3-6-5-11-5-9 0-14 6-14 21 0 17 6 21 14 21 4 0 8-2 11-5Zm-17-16c0-13 2-15 8-15 3 0 6 2 9 4v22c-3 3-6 4-10 4-5 0-7-2-7-15Zm80 0c0-17-6-21-13-21-4 0-8 2-11 5V30l-2-2h-3l-2 2v54l2 2h1c2 0 3-1 3-2l1-2c2 3 6 5 11 5 9 0 13-6 13-21Zm-24 11V56c3-3 6-5 10-5 5 0 7 2 7 15s-2 15-8 15c-3 0-7-2-9-4Zm48 10 13-39-2-2h-3l-3 2-6 22-3 10-2-10-6-22-3-2h-3l-2 2 12 36 2 2c-2 7-4 9-9 10l-2 3 1 2 2 1c7-2 10-4 14-15Z"
        fill="#FAFAFA"
    />
</svg>`,le=l`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 433.24 174.64"
    width="40px"
    height="13px"
>
    <defs>
        <style>
            .cls-1 {
                fill: #4c9c2e;
            }
            .cls-2 {
                fill: #231f20;
            }
        </style>
    </defs>
    <g id="mark">
        <path
            class="cls-1"
            d="M142.45,184.51c0-34.08,16.63-63.57,66.12-63.57,0,34.15-22.46,63.57-66.12,63.57"
            transform="translate(-65.55 -99.35)"
        />
        <path
            class="cls-1"
            d="M221.74,274a65.16,65.16,0,0,0,23.71-4c0-27-16.09-46.24-44.51-60.13C179.2,198.94,152.43,193.3,128,193.3c10.72-32.15,2.91-72.05-7.47-94-11.5,22.94-18.68,62.28-7.64,94.28-21.68,1.58-38.88,11-46.16,23.48-.55.95-1.65,3-1,3.32s1.36-.57,1.88-1A41.63,41.63,0,0,1,95.8,208.6c23,0,39.27,19.1,50.76,30.58,24.68,24.68,48.8,34.86,75.18,34.81"
            transform="translate(-65.55 -99.35)"
        />
    </g>
    <g id="outlined_logotype" data-name="outlined logotype">
        <path
            class="cls-2"
            d="M316.84,147.33l-12,6.15a4.62,4.62,0,0,1-1.8.75c-.45,0-.9-.3-1.2-1-2.7-6.45-6.6-8.85-10.65-8.85h-9.9a11,11,0,0,0-10.8,10.8v44.4a11,11,0,0,0,10.8,10.8h7.35a10.63,10.63,0,0,0,10.65-10.8v-7.05c0-1-.45-1.5-1.5-1.5h-14.1c-1.05,0-1.5-.45-1.5-1.5V176.73c0-1,.45-1.5,1.5-1.5H315c1,0,1.5.45,1.5,1.5v22.8c0,15.6-11,26.55-27.9,26.55h-7.35c-17.1,0-27.9-11-27.9-26.55v-44.4c0-15.6,10.8-26.55,27.9-26.55h9.9c12.45,0,19.2,5.1,23.7,12.15,1.35,2.25,2.85,4.65,2.85,5.55C317.74,146.73,317.44,147,316.84,147.33Z"
            transform="translate(-65.55 -99.35)"
        />
        <path
            class="cls-2"
            d="M364.54,224.58H330.79c-1.05,0-1.5-.45-1.5-1.5v-91.5c0-1.05.45-1.5,1.5-1.5h33.75c17.1,0,27.9,10.95,27.9,27.9v1.5c0,5.55-3.6,12-7.95,16.2a1.22,1.22,0,0,0,0,2.1c4.35,4.2,7.95,11.4,7.95,16.95V197C392.44,213.93,381.64,224.58,364.54,224.58Zm10.8-68a11,11,0,0,0-10.8-10.8H348c-1.05,0-1.5.45-1.5,1.5v19.95c0,1.05.45,1.5,1.5,1.5h16.5a11,11,0,0,0,10.8-10.8Zm0,38.55a10.63,10.63,0,0,0-10.8-10.65H348c-1.05,0-1.5.45-1.5,1.5v21.3c0,1,.45,1.5,1.5,1.5h16.5a10.75,10.75,0,0,0,10.8-10.8Z"
            transform="translate(-65.55 -99.35)"
        />
        <path
            class="cls-2"
            d="M422.44,224.58H408.19c-1.05,0-1.5-.45-1.5-1.5v-91.5c0-1.05.45-1.5,1.5-1.5h14.25c1.05,0,1.5.45,1.5,1.5v91.5C423.94,224.13,423.49,224.58,422.44,224.58Z"
            transform="translate(-65.55 -99.35)"
        />
        <path
            class="cls-2"
            d="M497.28,145.83H461.59c-1,0-1.5.45-1.5,1.5v19.95c0,1.05.45,1.5,1.5,1.5h29.24c1.05,0,1.5.45,1.5,1.5V183c0,1.05-.45,1.5-1.5,1.5H461.59c-1,0-1.5.45-1.5,1.5v37.05c0,1-.45,1.5-1.5,1.5H444.34c-1,0-1.5-.45-1.5-1.5v-91.5c0-1.05.45-1.5,1.5-1.5h52.94c1.05,0,1.5.45,1.5,1.5v12.75C498.78,145.38,498.33,145.83,497.28,145.83Z"
            transform="translate(-65.55 -99.35)"
        />
    </g>
</svg>`;class lt extends x{constructor(){super(...arguments),this.darkMode=!1}connectedCallback(){super.connectedCallback();const t=this.getRootNode().host.parentNode.getRootNode().host.classList,e=t.contains("prefer-dark"),i=t.contains("prefer-light");this.darkMode=e||!i&&window.matchMedia("(prefers-color-scheme: dark)").matches}render(){return l` <a href="https://plantnet.org" target="_blank" title="Pl@ntNet"
            >${this.darkMode?oe:ae}</a
        >`}}lt.styles=A`
        a {
            width: 100px;
            height: 27px;
            border-radius: 4px;
            overflow: hidden;
            display: block;
            transition: all 0.15s ease-in-out;
        }

        a:hover {
            filter: brightness(80%);
        }
    `;h([p({type:Boolean})],lt.prototype,"darkMode",void 0);window.customElements.define("plantnet-brand",lt);const wt=["image/jpg","image/jpeg","image/png"];class G extends x{constructor(){super(...arguments),this.inlineMode=!1,this.plantnetBrand=!1}__onFileDrop(t){t.files.length&&this._dispatchFiles(t.files)}__onFileUpload(t){if(t.target instanceof HTMLInputElement&&t.target.files){const e=Array.from(t.target.files).filter(i=>wt.includes(i.type));e.length&&this._dispatchFiles(e)}}_dispatchFiles(t){const e={files:t},i=new CustomEvent("imagepick",{detail:e,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(i)}render(){const t=`${wt.join(", ")}, .png, .jpg, .jpeg, .JPG, .JPEG`,e=this.inlineMode?"inline":"",i=this.inlineMode?l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#535559">
                  <path
                      d="M5,3A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14.09C14.03,20.67 14,20.34 14,20C14,19.32 14.12,18.64 14.35,18H5L8.5,13.5L11,16.5L14.5,12L16.73,14.97C17.7,14.34 18.84,14 20,14C20.34,14 20.67,14.03 21,14.09V5C21,3.89 20.1,3 19,3H5M19,16V19H16V21H19V24H21V21H24V19H21V16H19Z"
                  />
              </svg>`:l`<strong>Choose an image</strong><span> or drag it here</span>.`;return l`
            <file-drop
                id="dropPhotos"
                multiple=""
                accept="image/*"
                @filedrop="${this.__onFileDrop}"
                class="${e}"
            >
                <label for="fileUpload">${i}</label>
                <input
                    hidden
                    id="fileUpload"
                    type="file"
                    placeholder="or click here"
                    multiple
                    accept=${t}
                    @change="${this.__onFileUpload}"
                />
            </file-drop>
            ${this.plantnetBrand?l`<plantnet-brand></plantnet-brand>`:""}
        `}}G.styles=A`
        file-drop label {
            display: block;
            padding: 25px;
            border-radius: 4px;
            outline: 2px dashed var(--ai-taxonomist-outline);
            outline-offset: -2px;
            transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--ai-taxonomist-background);
        }

        file-drop span {
            margin-left: 4px;
        }
        file-drop.inline label {
            width: 70px;
            height: 70px;
        }

        file-drop.drop-valid label,
        label:hover {
            outline-offset: -15px;
            background-color: var(--ai-taxonomist-background-hover);
        }

        file-drop.drop-invalid label {
            background-color: red;
        }

        plantnet-brand {
            margin-top: 6px;
            display: flex;
            justify-content: flex-end;
        }
    `;h([p({type:Boolean})],G.prototype,"inlineMode",void 0);h([p({type:Boolean})],G.prototype,"plantnetBrand",void 0);window.customElements.define("image-picker",G);class W extends x{constructor(){super(...arguments),this.images=[],this.canAddImages=!0}__onImagePick(t){const{files:e}=t.detail,i={files:e},s=new CustomEvent("addimage",{detail:i,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(s)}__onImageRemove(t){return()=>{const i={index:this.images.findIndex(a=>a.name===t.name)},s=new CustomEvent("removeimage",{detail:i,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(s)}}render(){const t=this.canAddImages?l` <image-picker @imagepick=${this.__onImagePick} ?inlineMode=${!0}></image-picker>`:null;return l`
            <div class="container">
                <div class="col blankSpaceLeft"></div>
                <p>Original image(s)</p>
                <div class="images">
                    ${this.images.map(e=>l`
                            <div class="imgContainer">
                                <a href="${URL.createObjectURL(e)}" target="_blank">
                                    <img width="400" src="${URL.createObjectURL(e)}" alt="" />
                                </a>
                                <button class="imgRemove" @click="${this.__onImageRemove(e)}">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#FFF"
                                    >
                                        <path
                                            d="M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        `)}
                    ${t}
                </div>
            </div>
        `}}W.styles=A`
        .container {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
        }

        .col {
            flex: 1 0 0;
            max-width: 100%;
            box-sizing: border-box;
            flex-basis: 0;
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }

        .blankSpaceLeft {
            flex-basis: 16.66666667%;
            max-width: 16.66666667%;
        }

        p {
            padding: 0.2rem 1rem 0.2rem 0.2rem;
        }

        .images {
            display: flex;
            flex-wrap: wrap;
            flex: 1;
        }

        .imgContainer {
            width: 120px;
            height: 120px;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            margin-right: 6px;
            margin-bottom: 6px;
            z-index: 10;
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            transform-origin: top right;
        }
        .imgContainer:hover {
            cursor: pointer;
            transform: scale(3);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            z-index: 11;
        }
        .imgContainer img {
            object-position: center;
            object-fit: cover;
            height: 120px;
            width: 120px;
        }
        .imgRemove {
            background: transparent;
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            -webkit-appearance: none;
            padding: 0;
            cursor: pointer;
        }
        .imgRemove svg {
            filter: drop-shadow(2px 2px 3px rgba(83, 85, 89, 0.7));
            transition: all 0.15s ease-in-out;
        }
        .imgRemove:hover svg {
            filter: drop-shadow(2px 2px 3px rgba(83, 85, 89, 0.7)) brightness(80%);
        }

        @media only screen and (max-width: 48em) {
            p {
                flex-basis: 100%;
                max-width: 100%;
            }

            .blankSpaceLeft {
                flex-basis: 0;
                max-width: 0;
            }
        }
    `;h([p({attribute:!1})],W.prototype,"images",void 0);h([p({type:Boolean})],W.prototype,"canAddImages",void 0);window.customElements.define("image-selected",W);const Ut=(r,t=0)=>{const e=10**t;return Math.round(r*e)/e};class Mt extends x{render(){return l`<div class="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>`}}Mt.styles=A`
        :host {
        }
        .loader {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
            animation: fadeIn 2s;
        }
        .loader div {
            position: absolute;
            top: 33px;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: var(--ai-taxonomist-accent-color);
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .loader div:nth-child(1) {
            left: 8px;
            animation: loader1 0.6s infinite;
        }
        .loader div:nth-child(2) {
            left: 8px;
            animation: loader2 0.6s infinite;
        }
        .loader div:nth-child(3) {
            left: 32px;
            animation: loader2 0.6s infinite;
        }
        .loader div:nth-child(4) {
            left: 56px;
            animation: loader3 0.6s infinite;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @keyframes loader1 {
            0% {
                transform: scale(0);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
        @keyframes loader3 {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(0);
                opacity: 0;
            }
        }
        @keyframes loader2 {
            0% {
                transform: translate(0, 0);
            }
            100% {
                transform: translate(24px, 0);
            }
        }
    `;window.customElements.define("ai-loader",Mt);const ce=r=>r.split("/")[2].replace("www.","");class H extends x{constructor(){super(...arguments),this.results={results:[]},this.error=null,this.loading=!1,this.plantnetBrand=!1}onAttachmentClick(t){return e=>{e.preventDefault();const i=t;this.dispatchEvent(new CustomEvent("aiTaxonomistAttachmentsClick",{detail:i,bubbles:!0,composed:!0,cancelable:!0}))}}render(){const t=document.getElementById("aitaxonomist-attachments-template"),e=this.loading?l` <ai-loader></ai-loader>`:null,i=this.error?l`<p>${this.error}</p>`:null,s=8,a=this.results.results.length>s?l`<p>${this.results.results.length-s} more results not displayed</p>`:null;return l`
            <div class="container">
                <div class="separatorContainer">
                    <p class="title"><span>Results</span></p>
                    ${this.plantnetBrand?l` <plantnet-brand></plantnet-brand>`:""}
                </div>
                ${e} ${i} ${this.results.overallScore?l`<p><b>${this.results.overallScore}</b></p>`:""}
                <ul>
                    ${this.results.results.slice(0,s).map(n=>l`
                            <li class="result">
                                <div class="col col-text score">
                                    <div>${Ut(n.score*100)}%</div>
                                </div>
                                <div class="col col-text species">
                                    ${n.taxonName?l`<p class="speciesName">
                                              ${n.formatTaxonName?n.taxonName:l` <span>${n.taxonName}</span>`}<span> ${n.author}</span>
                                          </p>`:""}
                                    <p>${n.commonNames[0]}</p>
                                    ${n.additionalText?l`<p>${n.additionalText}</p>`:""}
                                    ${t?l` <div
                                              @click=${this.onAttachmentClick(n)}
                                              @keyDown=${this.onAttachmentClick(n)}
                                          >
                                              ${t.content.cloneNode(!0)}
                                          </div>`:""}
                                </div>
                                <div class="col col-text family">
                                    ${n.family?l`<span title="${n.family}" class="familyName"
                                              >${n.family}</span
                                          >`:""}
                                    ${n.gbifUrl?l`<a href="${n.gbifUrl}" target="_blank" class="gbif"
                                              >${le}
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                              >
                                                  <path
                                                      d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                                                  />
                                              </svg>
                                          </a>`:null}
                                    ${n.url?l`<a href="${n.url}" target="_blank" class="url"
                                              ><span>${ce(n.url)}</span
                                              ><svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                              >
                                                  <path
                                                      d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                                                  />
                                              </svg>
                                          </a>`:null}
                                </div>
                                <div class="col imgContainer">
                                    ${n.images.map(c=>l`
                                            <a href="${c.url}" title="${c.alt}" target="_blank" class="imgLink">
                                                <img src="${c.url}" alt="${c.alt}"
                                            /></a>
                                        `)}
                                </div>
                            </li>
                        `)}
                </ul>
                ${a}
            </div>
        `}}H.styles=A`
        .container {
            display: flex;
            flex-direction: column;
            animation: fadeIn 0.5s ease-in-out;
        }

        .separatorContainer {
            display: flex;
            align-items: center;
        }

        plantnet-brand {
            margin-top: -4px;
        }

        .title {
            flex: 1;
            font-weight: normal;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            margin-top: 12px;
        }

        .title > span {
            position: relative;
            display: inline-block;
            margin-left: calc(16.6667% + 0.2rem);
        }

        .title > span:before,
        .title > span:after {
            content: '';
            position: absolute;
            top: 50%;
            width: 9999px;
            height: 1.5px;
            background: var(--ai-taxonomist-separator-border-color);
        }

        .title > span:before {
            right: 100%;
            margin-right: 10px;
        }

        .title > span:after {
            left: 100%;
            margin-left: 10px;
        }

        ai-loader {
            margin-left: calc(16.6667%);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .result {
            box-sizing: border-box;
            display: flex;
            flex: 1 1 auto;
            flex-direction: row;
            flex-wrap: wrap;
            margin-right: -0.5rem;
            margin-left: -0.5rem;
            opacity: 0;
            transform: translateY(-20px);
            animation: animateIn 0.3s forwards;
            animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
            transition: border-color 0.3s;
            border-radius: 4px;
            border-left: 5px solid transparent;
        }

        .result:hover {
            border-color: var(--ai-taxonomist-accent-color);
            z-index: 10;
        }

        .result:nth-child(1) {
            animation-delay: 0.05s;
        }
        .result:nth-child(2) {
            animation-delay: 0.1s;
        }
        .result:nth-child(3) {
            animation-delay: 0.15s;
        }
        .result:nth-child(4) {
            animation-delay: 0.2s;
        }
        .result:nth-child(5) {
            animation-delay: 0.25s;
        }
        .result:nth-child(6) {
            animation-delay: 0.3s;
        }
        .result:nth-child(7) {
            animation-delay: 0.35s;
        }
        .result:nth-child(8) {
            animation-delay: 0.4s;
        }
        .result:nth-child(9) {
            animation-delay: 0.45s;
        }

        .col {
            flex: 1 0 0;
            max-width: 100%;
            box-sizing: border-box;
            flex-basis: 0;
        }

        .col-text {
            padding-top: 1.6rem;
        }

        .score {
            padding-right: 0.5rem;
            padding-left: 0.2rem;
            flex-basis: 16.66666667%;
            max-width: 16.66666667%;
            margin-top: 5px;
        }

        .score div {
            border-radius: 30px;
            border: 1.5px solid var(--ai-taxonomist-separator-border-color);
            padding: 0.5rem;
            text-align: center;
            max-width: 4rem;
        }

        .species {
            flex-basis: 25%;
            max-width: 25%;
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }
        .species p {
            margin: 0;
        }

        .speciesName {
            color: var(--ai-taxonomist-accent-color);
            font-style: italic;
        }
        .speciesName span {
            font-style: normal;
        }

        .family {
            flex-basis: 16.66666667%;
            max-width: 16.66666667%;
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }

        .family span.familyName {
            text-align: left;
            font-style: italic;
            background-color: var(--ai-taxonomist-separator-border-color);
            border-radius: 4px;
            padding: 0.2rem 0.35rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            display: block;
        }

        .gbif,
        .url {
            display: flex;
            align-items: center;
            width: 50px;
            border-radius: 4px;
            padding: 0 0.35rem;
            margin-top: 4px;
            background-color: var(--ai-taxonomist-separator-border-color);
            gap: 2px;
            transition: all 0.15s ease-in-out;
            text-decoration: none;
        }

        .url {
            width: 100%;
        }

        .url span {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: var(--ai-taxonomist-accent-color);
        }

        .gbif:hover,
        .url:hover {
            filter: brightness(80%);
        }

        .gbif:hover {
            filter: brightness(80%);
        }

        .imgContainer {
            flex-basis: 41.66666667%;
            max-width: 41.66666667%;
            padding-left: 1.2rem;
            display: inline-flex;
            justify-content: flex-start;
            gap: 6px;
            margin-bottom: 6px;
        }

        .imgLink {
            display: flex;
            z-index: 9;
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            transform-origin: center;
            border-radius: 4px;
            overflow: hidden;
            height: 100px;
            width: 100px;
        }
        .imgLink:hover {
            cursor: pointer;
            transform: scale(3);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            z-index: 10;
        }

        .imgContainer img {
            object-position: center;
            object-fit: cover;
            aspect-ratio: 1;
            background: var(--ai-taxonomist-background);
            color: transparent;
        }

        @media only screen and (max-width: 48em) {
            .col-text {
                padding-top: 0;
            }

            .score {
                flex-basis: 18%;
                max-width: 18%;
            }

            .species {
                flex-basis: 52%;
                max-width: 52%;
            }

            .family {
                flex-basis: 30%;
                max-width: 30%;
                text-align: end;
            }
            .family span {
                display: inline-block;
            }
            .family .gbif {
                margin-left: auto;
            }

            .imgContainer {
                flex-basis: 100%;
                max-width: 100%;
                justify-content: flex-start;
                margin-top: 12px;
                margin-bottom: 24px;
            }
        }

        @media only screen and (max-width: 38em) {
            .score {
                flex-basis: 25%;
                max-width: 25%;
            }

            .species {
                flex-basis: 75%;
                max-width: 75%;
            }
            .family {
                flex-basis: 100%;
                max-width: 100%;
                text-align: start;
                margin-left: 25%;
                margin-top: 12px;
            }
            .family .gbif {
                margin-left: 0;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes animateIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;h([p({attribute:!1})],H.prototype,"results",void 0);h([p({type:Boolean})],H.prototype,"error",void 0);h([p({type:Boolean})],H.prototype,"loading",void 0);h([p({type:Boolean})],H.prototype,"plantnetBrand",void 0);window.customElements.define("taxon-results",H);class Ht extends x{__press(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("press",t))}render(){return l`
            <button @click=${this.__press}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#535559">
                    <path
                        d="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z"
                    /></svg
                >New identification
            </button>
        `}}Ht.styles=A`
        :host {
        }

        button {
            display: flex;
            align-items: center;
            appearance: none;
            border: none;
            border-radius: 4px;
            background-color: var(--ai-taxonomist-separator-border-color);
            padding: 0.5rem 0.7rem;
            font-size: 1.1rem;
            cursor: pointer;
            color: inherit;
            transition: all 0.15s ease-in-out;
            margin-top: 2rem;
            margin-left: calc(16.6667% + 0.2rem);
            animation: fadeIn 0.5s;
        }

        button:hover {
            filter: brightness(80%);
        }

        button svg {
            fill: var(--ai-taxonomist-text-color);
            margin-right: 0.2rem;
        }

        @media only screen and (max-width: 48em) {
            button {
                margin-left: 0;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;window.customElements.define("ai-button-reset",Ht);const de=async r=>{const t=await fetch(`${r}/taxa`);return t.status===200?{species:(await t.json()).sort((i,s)=>i.name.localeCompare(s.name)),error:null}:{species:[],error:`Failed to load species list: ${t.statusText}`}};class N extends x{constructor(){super(...arguments),this.apiUrl=null,this.species=[],this.displayedSpecies=[],this.filter=null,this.error=null}connectedCallback(){super.connectedCallback(),(async()=>{if(this.apiUrl){const{species:t,error:e}=await de(this.apiUrl);this.displayedSpecies=t,this.species=t,this.error=e}})()}__onSearch(t){var e,i;const s=["name","family","authorship","genus","vernacularName"];if(this.filter=(((e=t==null?void 0:t.currentTarget)===null||e===void 0?void 0:e.value)||"").trim(),!((i=this.filter)===null||i===void 0)&&i.length){const a=this.filter.toLowerCase();this.displayedSpecies=this.species.filter(n=>{for(const c of s)if(n[c].trim().toLowerCase().includes(a))return!0;return!1})}}render(){return this.error?l`<p><b>${this.error||"Unknown error"}</b></p>`:!this.displayedSpecies.length&&!this.filter?l` <ai-loader></ai-loader>`:l` <p>
                <b>${this.species.length}</b> species${this.species.length!==this.displayedSpecies.length?l` (${this.displayedSpecies.length} displayed)`:l`.`}
            </p>
            <input
                type="text"
                id="search"
                placeholder="Search (species | family | genus | author | name)"
                @change=${this.__onSearch}
                @keyup=${this.__onSearch}
            />
            <ul>
                ${this.displayedSpecies.map(t=>l`
                        <li class="result">
                            <a
                                href="https://www.gbif.org/species/${t.species_id}"
                                title="Open on GBIF.org"
                                target="_blank"
                            >
                                ${t.name?l`<p class="speciesName">
                                          ${t.name}<span> ${t.authorship}</span>
                                      </p>`:""}
                                <p class="bottom">
                                    <span class="family" title="family"> ${t.family}</span>
                                    ${t.vernacularName}
                                </p>
                            </a>
                        </li>
                    `)}
            </ul>`}}N.styles=A`
        ai-loader {
            display: flex;
            justify-content: center;
        }

        input {
            border: none;
            background-color: var(--ai-taxonomist-separator-border-color);
            padding: 10px 12px;
            margin: 12px 0;
            color: var(--ai-taxonomist-text-color);
            width: 100%;
            box-sizing: border-box;
            border-radius: 4px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        a {
            margin-top: 12px;
            color: var(--ai-taxonomist-accent-color);
            margin: 12px 0;
            display: block;
            border-left: 0 solid transparent;
            text-decoration: none;
            transition: all 0.3s;
            border-radius: 4px;
        }

        a:hover {
            filter: brightness(80%);
            padding-left: 0.5rem;
            border-left: 5px solid var(--ai-taxonomist-accent-color);
            border-color: var(--ai-taxonomist-accent-color);
            z-index: 10;
        }

        .result .bottom {
            margin: 0;
            display: flex;
            align-items: center;
            color: var(--ai-taxonomist-text-color);
        }
        .speciesName {
            margin: 0;
            font-style: italic;
        }
        .speciesName span {
            font-style: normal;
        }
        .family {
            text-align: left;
            font-style: italic;
            background-color: var(--ai-taxonomist-separator-border-color);
            color: var(--ai-taxonomist-text-color);
            border-radius: 4px;
            margin-right: 12px;
            padding: 0.2rem 0.35rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            display: block;
        }
    `;h([p({type:String})],N.prototype,"apiUrl",void 0);h([p({attribute:!1})],N.prototype,"species",void 0);h([p({attribute:!1})],N.prototype,"displayedSpecies",void 0);h([p({attribute:!1})],N.prototype,"filter",void 0);h([p({attribute:!1})],N.prototype,"error",void 0);window.customElements.define("species-list",N);class D extends x{constructor(){super(...arguments),this.doiUrl=null,this.apiUrl=null,this.displaySpecies=!1}__toggleSpeciesList(){this.displaySpecies=!this.displaySpecies}render(){return this.doiUrl?this.displaySpecies?l`
                <a href="#" title="Close species list" @click="${this.__toggleSpeciesList}">Close species list</a>
                <species-list .apiUrl="${this.apiUrl}"></species-list>
            `:l`<a href="#" title="Open species list" @click="${this.__toggleSpeciesList}">Species list</a
            ><a href="${this.doiUrl}" target="_blank" title="Open GBIF DOI"
                >This identification engine has been trained on the GBIF Occurrence Download: ${this.doiUrl}</a
            >`:null}}D.styles=A`
        a {
            margin-top: 12px;
            transition: all 0.15s ease-in-out;
            color: var(--ai-taxonomist-accent-color);
            font-size: 0.9rem;
            margin: 12px 0;
            display: block;
            text-decoration: none;
        }

        a:hover {
            filter: brightness(80%);
        }
    `;h([p({type:String})],D.prototype,"doiUrl",void 0);h([p({type:String})],D.prototype,"apiUrl",void 0);h([p({type:Boolean})],D.prototype,"displaySpecies",void 0);window.customElements.define("ai-footer",D);var w;(function(r){r.PLANTNET="pn",r.C4C="c4c",r.CARPESO="carp"})(w||(w={}));const ct=()=>(navigator.language||navigator.userLanguage).substring(0,2),he=(r,t,e)=>{const i=new FormData;for(let a=0;a<r.length;a+=1)i.append("organs","auto"),i.append("images",r[a]);const s=new URL(t);return s.searchParams.append("include-related-images","true"),s.searchParams.append("lang",ct()),e&&e.length&&s.searchParams.append("api-key",e),[i,s]},pe=(r,t,e)=>{const i=new FormData;i.append("info","true");for(let a=0;a<r.length;a+=1)i.append("image",r[a]);const s=new URL(`${t}/identify`);return s.searchParams.append("lang",ct()),e&&e.length&&s.searchParams.append("api-key",e),[i,s]},ue=(r,t,e)=>{const i=new FormData;for(let a=0;a<r.length;a+=1)i.append("image",r[a]);const s=new URL(t);return s.searchParams.append("lang",ct()),e&&e.length&&s.searchParams.append("api-key",e),[i,s]},me=async r=>{const t=await r.json();return"error"in t?t.message:{results:t.results.map(e=>({score:e.score,taxonName:e.species.scientificNameWithoutAuthor,author:e.species.scientificNameAuthorship,family:e.species.family.scientificName,commonNames:e.species.commonNames,gbifUrl:e.gbif?`https://www.gbif.org/species/${e.gbif.id}`:null,images:e.images.map(i=>({url:i.url.m,alt:`${i.citation} - ${i.date.string}`})).slice(0,3),formatTaxonName:!0}))}},fe=async r=>{const t=await r.json();return"status"in t&&t.status==="error"?t.status:{results:t.results.map(i=>({score:i.score,taxonName:i.name,author:i.authorship,family:i.family,commonNames:[i.vernacularName],gbifUrl:`https://www.gbif.org/species/${i.gbif_id}`,images:i.images.map(s=>({url:s.url,alt:`${s.publisher?`${s.publisher} - `:""}${s.rightsHolder} - ${s.license}`})).slice(0,3),formatTaxonName:!0}))}},ge=async(r,t)=>{const e=await r.json();if("status"in e&&e.status==="error")return e.status;const{results:i}=e,s=t.replace("classify","");return{overallScore:`Valeur nutritive estimée : ${Ut(i.nutrition,2)} ufl/kg MS`,results:i.details.map(a=>({score:a.score,taxonName:a.name,author:a.authorship,family:null,gbifUrl:null,url:a.url?a.url:void 0,commonNames:[a.vernacularName],additionalText:a.nutrition?`Nutrition : ${a.nutrition} ufl/kg MS`:void 0,images:a.images.map(n=>({url:`${s}/${n.url}`,alt:`${a.name} ${s}/${n.url}`})).slice(0,3),formatTaxonName:!0}))}},ve=(r,t,e,i)=>{switch(i){default:case w.PLANTNET:return he(r,t,e);case w.C4C:return pe(r,t,e);case w.CARPESO:return ue(r,t,e)}},xe=async(r,t,e,i)=>{const[s,a]=ve(r,t,e,i);try{const n=await fetch(a.toString(),{method:"POST",body:s});if(!n.ok)return`Error: ${n.statusText}`;switch(i){default:case w.PLANTNET:return me(n);case w.C4C:return fe(n);case w.CARPESO:return ge(n,t)}}catch(n){return`Error: ${n.message}`}},$e=async(r,t)=>{if(t!==w.C4C)return null;try{const e=await fetch(`${r}/status`);return e.status===200?`https://doi.org/${(await e.json()).gbif_doi}`:null}catch{return null}};var $;(function(r){r[r.Idle=0]="Idle",r[r.Loading=1]="Loading",r[r.Loaded=2]="Loaded",r[r.Error=3]="Error"})($||($={}));const At={state:$.Idle,error:null,results:{results:[]}},Z={text:"#535559",border:"#ccc",outline:"#92b0b3",background:"#eee",backgroundHover:"#ddd"},_={text:"#ccc",border:"#666",outline:"#888",background:"#666",backgroundHover:"#999"};class b extends x{constructor(){super(...arguments),this.imageFiles=[],this.apiUrl="https://my-api.plantnet.org/v2/identify/all",this.apiKey=null,this.maxImages=5,this.removePlantNetBranding=!1,this.isPlantNetBranded=!1,this.backendFormat=w.PLANTNET,this.identify={...At},this.doiUrl=null}connectedCallback(){super.connectedCallback(),!this.removePlantNetBranding&&(this.apiUrl.includes("https://my-api.plantnet.org")||this.apiUrl.includes("https://c4c.inria.fr"))&&(this.isPlantNetBranded=!0),(async()=>this.doiUrl=await $e(this.apiUrl,this.backendFormat))()}__addImages(t){const{files:e}=t.detail;e&&(this.imageFiles=[...this.imageFiles,...Array.from(e)].slice(0,this.maxImages),this.runIdentify())}__removeImage(t){const{index:e}=t.detail;e>=0&&e<this.imageFiles.length&&(this.imageFiles.splice(e,1),this.imageFiles=[...this.imageFiles],this.imageFiles.length===0?this.reset():this.runIdentify())}render(){return l` <div class="innerContainer">${this.getInnerContent()}</div> `}async runIdentify(){if(this.identify.state===$.Loading)return;this.identify.error=null,this.identify.state=$.Loading,this.dispatchEvent(new CustomEvent("aiTaxonomistNewIdentification",{bubbles:!0,composed:!0,cancelable:!0}));const t=await xe(this.imageFiles,this.apiUrl,this.apiKey,this.backendFormat);typeof t=="string"?(this.identify.state=$.Error,this.identify.error=t):(this.identify.state=$.Loaded,this.identify.results=t),this.requestUpdate()}getInnerContent(){switch(this.identify.state){default:case $.Idle:return l`
                    <image-picker
                        @imagepick=${this.__addImages}
                        ?plantnetBrand=${this.isPlantNetBranded}
                    ></image-picker>
                    <ai-footer .doiUrl=${this.doiUrl} .apiUrl=${this.apiUrl}></ai-footer>
                `;case $.Loading:case $.Error:case $.Loaded:return l`
                    <image-selected
                        .images=${this.imageFiles}
                        .canAddImages=${this.imageFiles.length<this.maxImages}
                        @addimage=${this.__addImages}
                        @removeimage=${this.__removeImage}
                    ></image-selected>
                    <taxon-results
                        .results=${this.identify.results}
                        .error=${this.identify.error}
                        ?loading=${this.identify.state===$.Loading}
                        ?plantnetBrand=${this.isPlantNetBranded}
                    ></taxon-results>
                    <ai-button-reset @press=${this.reset}>New identification</ai-button-reset>
                    <ai-footer .doiUrl=${this.doiUrl}></ai-footer>
                `}}reset(){this.identify={...At},this.imageFiles=[],this.requestUpdate()}}b.styles=A`
        :host {
            display: block;
            --ai-taxonomist-text-color: ${v(Z.text)};
            --ai-taxonomist-separator-border-color: ${v(Z.border)};
            --ai-taxonomist-accent-color: #8eb533;
            --ai-taxonomist-outline: ${v(Z.outline)};
            --ai-taxonomist-background: ${v(Z.background)};
            --ai-taxonomist-background-hover: ${v(Z.backgroundHover)};
            color: var(--ai-taxonomist-text-color);
            font-size: 1.1rem;
        }
        :host(.prefer-dark) {
            --ai-taxonomist-text-color: ${v(_.text)};
            --ai-taxonomist-separator-border-color: ${v(_.border)};
            --ai-taxonomist-outline: ${v(_.outline)};
            --ai-taxonomist-background: ${v(_.background)};
            --ai-taxonomist-background-hover: ${v(_.backgroundHover)};
        }

        .innerContainer {
            max-width: 850px;
            margin: auto;
        }

        button {
            display: flex;
            align-items: center;
            appearance: none;
            border: none;
            border-radius: 4px;
            background-color: var(--ai-taxonomist-separator-border-color);
            padding: 0.5rem 0.7rem;
            font-size: 1.1rem;
            cursor: pointer;
            color: inherit;
            transition: all 0.15s ease-in-out;
            margin-top: 2rem;
            margin-left: calc(16.6667% + 0.2rem);
        }

        @media (prefers-color-scheme: dark) {
            :host(:not(.prefer-light)) {
                --ai-taxonomist-text-color: ${v(_.text)};
                --ai-taxonomist-separator-border-color: ${v(_.border)};
                --ai-taxonomist-outline: ${v(_.outline)};
                --ai-taxonomist-background: ${v(_.background)};
                --ai-taxonomist-background-hover: ${v(_.backgroundHover)};
            }
        }

        @media only screen and (max-width: 48em) {
            button {
                margin-left: 0;
            }
        }
    `;h([p({type:Array})],b.prototype,"imageFiles",void 0);h([p({type:String})],b.prototype,"apiUrl",void 0);h([p({type:String})],b.prototype,"apiKey",void 0);h([p({type:Number})],b.prototype,"maxImages",void 0);h([p({type:Boolean})],b.prototype,"removePlantNetBranding",void 0);h([p({type:Boolean})],b.prototype,"isPlantNetBranded",void 0);h([p({type:String})],b.prototype,"backendFormat",void 0);h([p({attribute:!1})],b.prototype,"identify",void 0);h([p({attribute:!1})],b.prototype,"doiUrl",void 0);window.customElements.define("ai-taxonomist",b);const be=Zt({__name:"plantnet",setup(r){return(t,e)=>{const i=Rt("ai-taxonomist");return It(),Bt(Ft,null,{default:Vt(()=>[Dt(i,{apiKey:"2b1010E0O444tp1V0xwK6WC4"})]),_:1})}}}),Ce=Ot(be,[["__scopeId","data-v-ef64b283"]]);export{Ce as default};
