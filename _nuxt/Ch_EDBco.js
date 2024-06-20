import{a as H,f as Q,b as Y,c as ee}from"./B1bW6-hB.js";import{a6 as le,bI as te,aP as N,ab as ne,az as ae,ac as ue,bJ as ie,c as s,r as b,X as oe,af as se,bL as re,bM as B,A as u,aj as h,K as V,ba as ce,bV as M,Z as de,bW as fe}from"./CoGiOYfK.js";import{V as ve}from"./Dsc36X2E.js";const me=le({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...te({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>N(e).every(f=>f!=null&&typeof f=="object")},...H({clearable:!0})},"VFileInput"),Ve=ne()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:$,emit:C,slots:n}=f;const{t:I}=ae(),a=ue(e,"modelValue",e.modelValue,l=>N(l),l=>e.multiple||Array.isArray(e.modelValue)?l:l[0]),{isFocused:v,focus:j,blur:x}=ie(e),g=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),k=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),S=s(()=>M(k.value,g.value)),p=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${M(r,g.value)})`:t})),D=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?I(e.counterSizeString,l,S.value):I(e.counterString,l)}),F=b(),P=b(),i=b(),E=s(()=>v.value||e.active),z=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||j()}function L(l){var t;(t=i.value)==null||t.click()}function O(l){C("mousedown:control",l)}function U(l){var t;(t=i.value)==null||t.click(),C("click:control",l)}function J(l){l.stopPropagation(),y(),de(()=>{a.value=[],fe(e["onClick:clear"],l)})}return oe(a,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),se(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,K]=re($),{modelValue:pe,...T}=B.filterProps(e),W=Q(e);return u(B,h({ref:F,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":z.value},e.class],style:e.style,"onClick:prepend":L},r,T,{centerAffix:!z.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:A,isReadonly:w,isValid:X}=c;return u(Y,h({ref:P,"prepend-icon":e.prependIcon,onMousedown:O,onClick:U,"onClick:clear":J,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},W,{id:m.value,active:E.value||A.value,dirty:A.value,disabled:d.value,focused:v.value,error:X.value===!1}),{...n,default:Z=>{var R;let{props:{class:_,...q}}=Z;return u(V,null,[u("input",h({ref:i,type:"file",readonly:w.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:o=>{o.stopPropagation(),w.value&&o.preventDefault(),y()},onChange:o=>{if(!o.target)return;const G=o.target;a.value=[...G.files??[]]},onFocus:y,onBlur:x},q,K),null),u("div",{class:_},[!!((R=a.value)!=null&&R.length)&&!e.hideInput&&(n.selection?n.selection({fileNames:p.value,totalBytes:k.value,totalBytesReadable:S.value}):e.chips?p.value.map(o=>u(ve,{key:o,size:"small",text:o},null)):p.value.join(", "))])])}})},details:t?c=>{var m,d;return u(V,null,[(m=n.details)==null?void 0:m.call(n,c),l&&u(V,null,[u("span",null,null),u(ee,{active:!!((d=a.value)!=null&&d.length),value:D.value,disabled:e.disabled},n.counter)])])}:void 0})}),ce({},F,P,i)}});export{Ve as V};
