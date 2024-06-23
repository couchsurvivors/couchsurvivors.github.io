import{F as K,I as Q,aG as x,b6 as W,r as X,c as P,bL as Y,L as ee,bI as te,A as t,a1 as I,ae,bl as le,bq as ne,S as se,b7 as oe,bF as ie,d as ue,bz as re,ay as de,am as ce,i as me,v as c,a8 as m,B as r,a9 as B,C as H,aa as A,af as n,ak as g,ab as F}from"./BTgDbDKf.js";import{a as fe,b as ve,V as U}from"./C3V2NoAB.js";import{m as Ve,V as D}from"./C0xDtUK3.js";import{V as Ce}from"./Ef23PHsR.js";const Le=K({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...fe(),...Ve()},"VSwitch"),b=Q()({name:"VSwitch",inheritAttrs:!1,props:Le(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,f){let{attrs:v,slots:l}=f;const a=x(e,"indeterminate"),s=x(e,"modelValue"),{loaderClasses:w}=W(e),{isFocused:o,focus:k,blur:i}=ve(e),S=X(),T=P(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),z=Y(),N=P(()=>e.id||`switch-${z}`);function G(){a.value&&(a.value=!1)}function R(V){var C,L;V.stopPropagation(),V.preventDefault(),(L=(C=S.value)==null?void 0:C.input)==null||L.click()}return ee(()=>{const[V,C]=te(v),L=U.filterProps(e),q=D.filterProps(e);return t(U,I({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":a.value},w.value,e.class]},V,L,{modelValue:s.value,"onUpdate:modelValue":h=>s.value=h,id:N.value,focused:o.value,style:e.style}),{...l,default:h=>{let{id:O,messagesId:Z,isDisabled:$,isReadonly:j,isValid:M}=h;const _={model:s,isValid:M};return t(D,I({ref:S},q,{modelValue:s.value,"onUpdate:modelValue":[d=>s.value=d,G],id:O.value,"aria-describedby":Z.value,type:"checkbox","aria-checked":a.value?"mixed":void 0,disabled:$.value,readonly:j.value,onFocus:k,onBlur:i},C),{...l,default:d=>{let{backgroundColorClasses:p,backgroundColorStyles:u}=d;return t("div",{class:["v-switch__track",...p.value],style:u.value,onClick:R},[l["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[l["track-true"](_)]),l["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[l["track-false"](_)])])},input:d=>{let{inputNode:p,icon:u,backgroundColorClasses:E,backgroundColorStyles:J}=d;return t(ae,null,[p,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":u||e.loading},e.inset?void 0:E.value],style:e.inset?void 0:J.value},[l.thumb?t(le,{defaults:{VIcon:{icon:u,size:"x-small"}}},{default:()=>[l.thumb({..._,icon:u})]}):t(ne,null,{default:()=>[e.loading?t(oe,{name:"v-switch",active:!0,color:M.value===!1?void 0:T.value},{default:y=>l.loader?l.loader(y):t(ie,{active:y.isActive,color:y.color,indeterminate:!0,size:"16",width:"2"},null)}):u&&t(se,{key:String(u),icon:u,size:"x-small"},null)]})])])}})}})}),{}}}),_e=ue({__name:"settings",async setup(e){let f,v;const l=re(),{entities:a}=de(l);[f,v]=ce(()=>l.fetch()),await f,v();const s=()=>{l.update(a.value)};return(w,o)=>{const k=me("font-awesome-icon");return c(),m(Ce,null,{default:r(()=>[t(F,{class:"mb-3"},{default:r(()=>[t(B,null,{default:r(()=>[H("General")]),_:1}),t(A,null,{default:r(()=>[n(a)?(c(),m(b,{key:0,modelValue:n(a).lightMode,"onUpdate:modelValue":o[0]||(o[0]=i=>n(a).lightMode=i),label:"Light mode",inset:"","false-icon":"M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z","true-icon":"M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13",onChange:s},null,8,["modelValue"])):g("",!0),n(a)?(c(),m(b,{key:1,modelValue:n(a).metricOrImperial,"onUpdate:modelValue":o[1]||(o[1]=i=>n(a).metricOrImperial=i),label:"Metric or imperial units",inset:"",onChange:s},null,8,["modelValue"])):g("",!0)]),_:1})]),_:1}),t(k,{icon:"fa-brands fa-twitter-square"}),t(F,null,{default:r(()=>[t(B,null,{default:r(()=>[H("Privacy")]),_:1}),t(A,null,{default:r(()=>[n(a)?(c(),m(b,{key:0,modelValue:n(a).externalServices,"onUpdate:modelValue":o[2]||(o[2]=i=>n(a).externalServices=i),label:"Disable external services",inset:"",onChange:s},null,8,["modelValue"])):g("",!0),n(a)?(c(),m(b,{key:1,modelValue:n(a).gps,"onUpdate:modelValue":o[3]||(o[3]=i=>n(a).gps=i),label:"Disable GPS positioning",inset:"",onChange:s},null,8,["modelValue"])):g("",!0)]),_:1})]),_:1})]),_:1})}}});export{_e as default};
