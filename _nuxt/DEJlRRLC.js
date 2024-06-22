import{a3 as I,aT as A,an as F,at as J,a8 as T,ac as z,A as m,av as Y,J as G,a7 as ee,bR as ae,c as v,aL as $,aZ as ne,ad as te,bZ as K,a9 as E,Q as R,r as _,T as w,aC as se,bq as le,a2 as ie,aE as ue,bJ as Z,aD as re,O as oe,bu as de,e as ce,o as ve,ab as j,W as fe,al as H,ao as ge,b_ as me,bi as ye,aX as he,bj as be,ax as pe,aw as Ve}from"./BdlqWWT2.js";const ke=I({text:String,onClick:A(),...F(),...J()},"VLabel"),$e=T()({name:"VLabel",props:ke(),setup(e,d){let{slots:r}=d;return z(()=>{var n;return m("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(n=r.default)==null?void 0:n.call(r)])}),{}}});function Ie(e){const{t:d}=Y();function r(n){let{name:o}=n;const a={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],l=e[`onClick:${o}`],g=l&&a?d(`$vuetify.input.${a}`,e.label??""):void 0;return m(G,{icon:e[`${o}Icon`],"aria-label":g,onClick:l},null)}return{InputIcon:r}}const Me=I({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...F(),...ee({transition:{component:ae,leaveAbsolute:!0,group:!0}})},"VMessages"),Ce=T()({name:"VMessages",props:Me(),setup(e,d){let{slots:r}=d;const n=v(()=>$(e.messages)),{textColorClasses:o,textColorStyles:a}=ne(v(()=>e.color));return z(()=>m(te,{transition:e.transition,tag:"div",class:["v-messages",o.value,e.class],style:[a.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((l,g)=>m("div",{class:"v-messages__message",key:`${g}-${n.value}`},[r.message?r.message({message:l}):l]))]})),{}}}),Se=I({focused:Boolean,"onUpdate:focused":A()},"focus");function Ae(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();const r=E(e,"focused"),n=v(()=>({[`${d}--focused`]:r.value}));function o(){r.value=!0}function a(){r.value=!1}return{focusClasses:n,isFocused:r,focus:o,blur:a}}const q=Symbol.for("vuetify:form"),Re=I({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function _e(e){const d=E(e,"modelValue"),r=v(()=>e.disabled),n=v(()=>e.readonly),o=R(!1),a=_([]),l=_([]);async function g(){const i=[];let s=!0;l.value=[],o.value=!0;for(const c of a.value){const t=await c.validate();if(t.length>0&&(s=!1,i.push({id:c.id,errorMessages:t})),!s&&e.fastFail)break}return l.value=i,o.value=!1,{valid:s,errors:l.value}}function k(){a.value.forEach(i=>i.reset())}function p(){a.value.forEach(i=>i.resetValidation())}return w(a,()=>{let i=0,s=0;const c=[];for(const t of a.value)t.isValid===!1?(s++,c.push({id:t.id,errorMessages:t.errorMessages})):t.isValid===!0&&i++;l.value=c,d.value=s>0?!1:i===a.value.length?!0:null},{deep:!0,flush:"post"}),se(q,{register:i=>{let{id:s,vm:c,validate:t,reset:h,resetValidation:M}=i;a.value.some(C=>C.id===s),a.value.push({id:s,validate:t,reset:h,resetValidation:M,vm:le(c),isValid:null,errorMessages:[]})},unregister:i=>{a.value=a.value.filter(s=>s.id!==i)},update:(i,s,c)=>{const t=a.value.find(h=>h.id===i);t&&(t.isValid=s,t.errorMessages=c)},isDisabled:r,isReadonly:n,isValidating:o,isValid:d,items:a,validateOn:ie(e,"validateOn")}),{errors:l,isDisabled:r,isReadonly:n,isValidating:o,isValid:d,items:a,validate:g,reset:k,resetValidation:p}}function xe(){return ue(q,null)}const Be=I({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Se()},"validation");function Pe(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K(),r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Z();const n=E(e,"modelValue"),o=v(()=>e.validationValue===void 0?n.value:e.validationValue),a=xe(),l=_([]),g=R(!0),k=v(()=>!!($(n.value===""?null:n.value).length||$(o.value===""?null:o.value).length)),p=v(()=>!!(e.disabled??(a==null?void 0:a.isDisabled.value))),i=v(()=>!!(e.readonly??(a==null?void 0:a.isReadonly.value))),s=v(()=>{var u;return(u=e.errorMessages)!=null&&u.length?$(e.errorMessages).concat(l.value).slice(0,Math.max(0,+e.maxErrors)):l.value}),c=v(()=>{let u=(e.validateOn??(a==null?void 0:a.validateOn.value))||"input";u==="lazy"&&(u="input lazy");const f=new Set((u==null?void 0:u.split(" "))??[]);return{blur:f.has("blur")||f.has("input"),input:f.has("input"),submit:f.has("submit"),lazy:f.has("lazy")}}),t=v(()=>{var u;return e.error||(u=e.errorMessages)!=null&&u.length?!1:e.rules.length?g.value?l.value.length||c.value.lazy?null:!0:!l.value.length:!0}),h=R(!1),M=v(()=>({[`${d}--error`]:t.value===!1,[`${d}--dirty`]:k.value,[`${d}--disabled`]:p.value,[`${d}--readonly`]:i.value})),C=re("validation"),V=v(()=>e.name??oe(r));de(()=>{a==null||a.register({id:V.value,vm:C,validate:y,reset:S,resetValidation:x})}),ce(()=>{a==null||a.unregister(V.value)}),ve(async()=>{c.value.lazy||await y(!0),a==null||a.update(V.value,t.value,s.value)}),j(()=>c.value.input,()=>{w(o,()=>{if(o.value!=null)y();else if(e.focused){const u=w(()=>e.focused,f=>{f||y(),u()})}})}),j(()=>c.value.blur,()=>{w(()=>e.focused,u=>{u||y()})}),w([t,s],()=>{a==null||a.update(V.value,t.value,s.value)});async function S(){n.value=null,await fe(),await x()}async function x(){g.value=!0,c.value.lazy?l.value=[]:await y(!0)}async function y(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const f=[];h.value=!0;for(const B of e.rules){if(f.length>=+(e.maxErrors??1))break;const b=await(typeof B=="function"?B:()=>B)(o.value);if(b!==!0){if(b!==!1&&typeof b!="string"){console.warn(`${b} is not a valid value. Rule functions must return boolean true or a string.`);continue}f.push(b||"")}}return l.value=f,h.value=!1,g.value=u,l.value}return{errorMessages:s,isDirty:k,isDisabled:p,isReadonly:i,isPristine:g,isValid:t,isValidating:h,reset:S,resetValidation:x,validate:y,validationClasses:M}}const we=I({id:String,appendIcon:H,centerAffix:{type:Boolean,default:!0},prependIcon:H,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":A(),"onClick:append":A(),...F(),...ge(),...me(ye(),["maxWidth","minWidth","width"]),...J(),...Be()},"VInput"),Fe=T()({name:"VInput",props:{...we()},emits:{"update:modelValue":e=>!0},setup(e,d){let{attrs:r,slots:n,emit:o}=d;const{densityClasses:a}=he(e),{dimensionStyles:l}=be(e),{themeClasses:g}=pe(e),{rtlClasses:k}=Ve(),{InputIcon:p}=Ie(e),i=Z(),s=v(()=>e.id||`input-${i}`),c=v(()=>`${s.value}-messages`),{errorMessages:t,isDirty:h,isDisabled:M,isReadonly:C,isPristine:V,isValid:S,isValidating:x,reset:y,resetValidation:u,validate:f,validationClasses:B}=Pe(e,"v-input",s),P=v(()=>({id:s,messagesId:c,isDirty:h,isDisabled:M,isReadonly:C,isPristine:V,isValid:S,isValidating:x,reset:y,resetValidation:u,validate:f})),b=v(()=>{var D;return(D=e.errorMessages)!=null&&D.length||!V.value&&t.value.length?t.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return z(()=>{var L,N,U,W;const D=!!(n.prepend||e.prependIcon),Q=!!(n.append||e.appendIcon),O=b.value.length>0,X=!e.hideDetails||e.hideDetails==="auto"&&(O||!!n.details);return m("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},a.value,g.value,k.value,B.value,e.class],style:[l.value,e.style]},[D&&m("div",{key:"prepend",class:"v-input__prepend"},[(L=n.prepend)==null?void 0:L.call(n,P.value),e.prependIcon&&m(p,{key:"prepend-icon",name:"prepend"},null)]),n.default&&m("div",{class:"v-input__control"},[(N=n.default)==null?void 0:N.call(n,P.value)]),Q&&m("div",{key:"append",class:"v-input__append"},[e.appendIcon&&m(p,{key:"append-icon",name:"append"},null),(U=n.append)==null?void 0:U.call(n,P.value)]),X&&m("div",{class:"v-input__details"},[m(Ce,{id:c.value,active:O,messages:b.value},{message:n.message}),(W=n.details)==null?void 0:W.call(n,P.value)])])}),{reset:y,resetValidation:u,validate:f,isValid:S,errorMessages:t}}});export{Fe as V,we as a,Ae as b,$e as c,Re as d,_e as e,Ie as f,Se as m,xe as u};