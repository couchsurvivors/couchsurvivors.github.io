import{a as X,f as Y,b as Z,c as ee}from"./CPhGm1wi.js";import{a as le,b as te,V as B}from"./bs4ibtrd.js";import{a2 as ne,aL as N,a7 as ae,av as ue,a8 as ie,c as s,r as h,T as oe,ab as se,bL as re,A as u,af as b,H as V,b5 as ce,bQ as M,W as de,bR as fe}from"./BFrEVmP9.js";import{V as ve}from"./xTubGozI.js";const me=ne({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...le({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>N(e).every(f=>f!=null&&typeof f=="object")},...X({clearable:!0})},"VFileInput"),Ce=ae()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:$,emit:C,slots:n}=f;const{t:g}=ue(),a=ie(e,"modelValue",e.modelValue,l=>N(l),l=>e.multiple||Array.isArray(e.modelValue)?l:l[0]),{isFocused:v,focus:x,blur:D}=te(e),k=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),I=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),S=s(()=>M(I.value,k.value)),p=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${M(r,k.value)})`:t})),j=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?g(e.counterSizeString,l,S.value):g(e.counterString,l)}),F=h(),P=h(),i=h(),L=s(()=>v.value||e.active),A=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||x()}function E(l){var t;(t=i.value)==null||t.click()}function O(l){C("mousedown:control",l)}function T(l){var t;(t=i.value)==null||t.click(),C("click:control",l)}function U(l){l.stopPropagation(),y(),de(()=>{a.value=[],fe(e["onClick:clear"],l)})}return oe(a,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),se(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,H]=re($),{modelValue:pe,...Q}=B.filterProps(e),W=Y(e);return u(B,b({ref:F,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":A.value},e.class],style:e.style,"onClick:prepend":E},r,Q,{centerAffix:!A.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:z,isReadonly:R,isValid:_}=c;return u(Z,b({ref:P,"prepend-icon":e.prependIcon,onMousedown:O,onClick:T,"onClick:clear":U,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},W,{id:m.value,active:L.value||z.value,dirty:z.value,disabled:d.value,focused:v.value,error:_.value===!1}),{...n,default:q=>{var w;let{props:{class:G,...J}}=q;return u(V,null,[u("input",b({ref:i,type:"file",readonly:R.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:o=>{o.stopPropagation(),R.value&&o.preventDefault(),y()},onChange:o=>{if(!o.target)return;const K=o.target;a.value=[...K.files??[]]},onFocus:y,onBlur:D},J,H),null),u("div",{class:G},[!!((w=a.value)!=null&&w.length)&&!e.hideInput&&(n.selection?n.selection({fileNames:p.value,totalBytes:I.value,totalBytesReadable:S.value}):e.chips?p.value.map(o=>u(ve,{key:o,size:"small",text:o},null)):p.value.join(", "))])])}})},details:t?c=>{var m,d;return u(V,null,[(m=n.details)==null?void 0:m.call(n,c),l&&u(V,null,[u("span",null,null),u(ee,{active:!!((d=a.value)!=null&&d.length),value:j.value,disabled:e.disabled},n.counter)])])}:void 0})}),ce({},F,P,i)}});export{Ce as V};
