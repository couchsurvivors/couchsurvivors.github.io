import{F as I,b9 as D,G as _,a3 as J,I as z,L as T,A as m,aS as q,S as Z,aF as ee,bW as ae,c as v,b2 as $,bf as ne,aJ as te,c2 as K,aG as E,ap as F,r as R,as as w,a0 as se,bw as le,a7 as ie,J as ue,bL as j,aX as re,af as oe,bA as de,e as ce,o as ve,aI as G,au as fe,O as H,aP as ge,c3 as me,bQ as ye,bd as he,bR as be,a5 as pe,aT as Ve}from"./NoiLVogr.js";const ke=I({text:String,onClick:D(),..._(),...J()},"VLabel"),$e=z()({name:"VLabel",props:ke(),setup(e,d){let{slots:r}=d;return T(()=>{var n;return m("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(n=r.default)==null?void 0:n.call(r)])}),{}}});function Ie(e){const{t:d}=q();function r(n){let{name:o}=n;const a={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],l=e[`onClick:${o}`],g=l&&a?d(`$vuetify.input.${a}`,e.label??""):void 0;return m(Z,{icon:e[`${o}Icon`],"aria-label":g,onClick:l},null)}return{InputIcon:r}}const Me=I({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},..._(),...ee({transition:{component:ae,leaveAbsolute:!0,group:!0}})},"VMessages"),Se=z()({name:"VMessages",props:Me(),setup(e,d){let{slots:r}=d;const n=v(()=>$(e.messages)),{textColorClasses:o,textColorStyles:a}=ne(v(()=>e.color));return T(()=>m(te,{transition:e.transition,tag:"div",class:["v-messages",o.value,e.class],style:[a.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((l,g)=>m("div",{class:"v-messages__message",key:`${g}-${n.value}`},[r.message?r.message({message:l}):l]))]})),{}}}),Ce=I({focused:Boolean,"onUpdate:focused":D()},"focus");function De(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();const r=E(e,"focused"),n=v(()=>({[`${d}--focused`]:r.value}));function o(){r.value=!0}function a(){r.value=!1}return{focusClasses:n,isFocused:r,focus:o,blur:a}}const Q=Symbol.for("vuetify:form"),Fe=I({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function Re(e){const d=E(e,"modelValue"),r=v(()=>e.disabled),n=v(()=>e.readonly),o=F(!1),a=R([]),l=R([]);async function g(){const i=[];let s=!0;l.value=[],o.value=!0;for(const c of a.value){const t=await c.validate();if(t.length>0&&(s=!1,i.push({id:c.id,errorMessages:t})),!s&&e.fastFail)break}return l.value=i,o.value=!1,{valid:s,errors:l.value}}function k(){a.value.forEach(i=>i.reset())}function p(){a.value.forEach(i=>i.resetValidation())}return w(a,()=>{let i=0,s=0;const c=[];for(const t of a.value)t.isValid===!1?(s++,c.push({id:t.id,errorMessages:t.errorMessages})):t.isValid===!0&&i++;l.value=c,d.value=s>0?!1:i===a.value.length?!0:null},{deep:!0,flush:"post"}),se(Q,{register:i=>{let{id:s,vm:c,validate:t,reset:h,resetValidation:M}=i;a.value.some(S=>S.id===s),a.value.push({id:s,validate:t,reset:h,resetValidation:M,vm:le(c),isValid:null,errorMessages:[]})},unregister:i=>{a.value=a.value.filter(s=>s.id!==i)},update:(i,s,c)=>{const t=a.value.find(h=>h.id===i);t&&(t.isValid=s,t.errorMessages=c)},isDisabled:r,isReadonly:n,isValidating:o,isValid:d,items:a,validateOn:ie(e,"validateOn")}),{errors:l,isDisabled:r,isReadonly:n,isValidating:o,isValid:d,items:a,validate:g,reset:k,resetValidation:p}}function Pe(){return ue(Q,null)}const Be=I({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Ce()},"validation");function xe(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K(),r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:j();const n=E(e,"modelValue"),o=v(()=>e.validationValue===void 0?n.value:e.validationValue),a=Pe(),l=R([]),g=F(!0),k=v(()=>!!($(n.value===""?null:n.value).length||$(o.value===""?null:o.value).length)),p=v(()=>!!(e.disabled??(a==null?void 0:a.isDisabled.value))),i=v(()=>!!(e.readonly??(a==null?void 0:a.isReadonly.value))),s=v(()=>{var u;return(u=e.errorMessages)!=null&&u.length?$(e.errorMessages).concat(l.value).slice(0,Math.max(0,+e.maxErrors)):l.value}),c=v(()=>{let u=(e.validateOn??(a==null?void 0:a.validateOn.value))||"input";u==="lazy"&&(u="input lazy");const f=new Set((u==null?void 0:u.split(" "))??[]);return{blur:f.has("blur")||f.has("input"),input:f.has("input"),submit:f.has("submit"),lazy:f.has("lazy")}}),t=v(()=>{var u;return e.error||(u=e.errorMessages)!=null&&u.length?!1:e.rules.length?g.value?l.value.length||c.value.lazy?null:!0:!l.value.length:!0}),h=F(!1),M=v(()=>({[`${d}--error`]:t.value===!1,[`${d}--dirty`]:k.value,[`${d}--disabled`]:p.value,[`${d}--readonly`]:i.value})),S=re("validation"),V=v(()=>e.name??oe(r));de(()=>{a==null||a.register({id:V.value,vm:S,validate:y,reset:C,resetValidation:P})}),ce(()=>{a==null||a.unregister(V.value)}),ve(async()=>{c.value.lazy||await y(!0),a==null||a.update(V.value,t.value,s.value)}),G(()=>c.value.input,()=>{w(o,()=>{if(o.value!=null)y();else if(e.focused){const u=w(()=>e.focused,f=>{f||y(),u()})}})}),G(()=>c.value.blur,()=>{w(()=>e.focused,u=>{u||y()})}),w([t,s],()=>{a==null||a.update(V.value,t.value,s.value)});async function C(){n.value=null,await fe(),await P()}async function P(){g.value=!0,c.value.lazy?l.value=[]:await y(!0)}async function y(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const f=[];h.value=!0;for(const B of e.rules){if(f.length>=+(e.maxErrors??1))break;const b=await(typeof B=="function"?B:()=>B)(o.value);if(b!==!0){if(b!==!1&&typeof b!="string"){console.warn(`${b} is not a valid value. Rule functions must return boolean true or a string.`);continue}f.push(b||"")}}return l.value=f,h.value=!1,g.value=u,l.value}return{errorMessages:s,isDirty:k,isDisabled:p,isReadonly:i,isPristine:g,isValid:t,isValidating:h,reset:C,resetValidation:P,validate:y,validationClasses:M}}const we=I({id:String,appendIcon:H,centerAffix:{type:Boolean,default:!0},prependIcon:H,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":D(),"onClick:append":D(),..._(),...ge(),...me(ye(),["maxWidth","minWidth","width"]),...J(),...Be()},"VInput"),_e=z()({name:"VInput",props:{...we()},emits:{"update:modelValue":e=>!0},setup(e,d){let{attrs:r,slots:n,emit:o}=d;const{densityClasses:a}=he(e),{dimensionStyles:l}=be(e),{themeClasses:g}=pe(e),{rtlClasses:k}=Ve(),{InputIcon:p}=Ie(e),i=j(),s=v(()=>e.id||`input-${i}`),c=v(()=>`${s.value}-messages`),{errorMessages:t,isDirty:h,isDisabled:M,isReadonly:S,isPristine:V,isValid:C,isValidating:P,reset:y,resetValidation:u,validate:f,validationClasses:B}=xe(e,"v-input",s),x=v(()=>({id:s,messagesId:c,isDirty:h,isDisabled:M,isReadonly:S,isPristine:V,isValid:C,isValidating:P,reset:y,resetValidation:u,validate:f})),b=v(()=>{var A;return(A=e.errorMessages)!=null&&A.length||!V.value&&t.value.length?t.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return T(()=>{var L,N,U,W;const A=!!(n.prepend||e.prependIcon),X=!!(n.append||e.appendIcon),O=b.value.length>0,Y=!e.hideDetails||e.hideDetails==="auto"&&(O||!!n.details);return m("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},a.value,g.value,k.value,B.value,e.class],style:[l.value,e.style]},[A&&m("div",{key:"prepend",class:"v-input__prepend"},[(L=n.prepend)==null?void 0:L.call(n,x.value),e.prependIcon&&m(p,{key:"prepend-icon",name:"prepend"},null)]),n.default&&m("div",{class:"v-input__control"},[(N=n.default)==null?void 0:N.call(n,x.value)]),X&&m("div",{key:"append",class:"v-input__append"},[e.appendIcon&&m(p,{key:"append-icon",name:"append"},null),(U=n.append)==null?void 0:U.call(n,x.value)]),Y&&m("div",{class:"v-input__details"},[m(Se,{id:c.value,active:O,messages:b.value},{message:n.message}),(W=n.details)==null?void 0:W.call(n,x.value)])])}),{reset:y,resetValidation:u,validate:f,isValid:C,errorMessages:t}}});export{_e as V,we as a,De as b,$e as c,Fe as d,Re as e,Ie as f,Ce as m,Pe as u};