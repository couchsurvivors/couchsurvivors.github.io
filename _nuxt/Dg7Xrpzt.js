import{a3 as O,a6 as H,aE as re,bQ as de,ae as U,c as r,ao as K,A as l,bG as J,bR as le,bS as ce,bI as fe,a4 as q,b0 as G,aW as ve,a9 as be,ac as me,bT as ye,ai as ge,aX as xe,bA as ae,bU as Ce,bV as ke,ah as Ve,bB as he,r as R,aY as _e,an as Ie,bJ as Pe,Y as Fe,bW as Se,aC as Be,bX as we,aZ as Te,bY as Re,aM as Ae,K as M,ap as N,T as Le,bZ as $e,b_ as De,bz as Ee,b$ as Me,af as Ne,bC as Oe,bD as p,bH as Ue,c0 as Ke,aN as We,$ as ee,bP as Ye}from"./BC9zlEgU.js";const Xe=O({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...H(),...re({transition:{component:de}})},"VCounter"),je=U()({name:"VCounter",functional:!0,props:Xe(),setup(e,m){let{slots:i}=m;const P=r(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return K(()=>l(ce,{transition:e.transition},{default:()=>[J(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[i.default?i.default({counter:P.value,max:e.max,value:e.value}):P.value]),[[le,e.active]])]})),{}}}),ze=O({floating:Boolean,...H()},"VFieldLabel"),E=U()({name:"VFieldLabel",props:ze(),setup(e,m){let{slots:i}=m;return K(()=>l(fe,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),Ze=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],te=O({appendInnerIcon:q,bgColor:String,clearable:Boolean,clearIcon:{type:q,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:q,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ze.includes(e)},"onClick:clear":G(),"onClick:appendInner":G(),"onClick:prependInner":G(),...H(),...ve(),...be(),...me()},"VField"),ne=U()({name:"VField",inheritAttrs:!1,props:{id:String,...ye(),...te()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,m){let{attrs:i,emit:P,slots:a}=m;const{themeClasses:y}=ge(e),{loaderClasses:C}=xe(e),{focusClasses:W,isFocused:A,focus:F,blur:S}=ae(e),{InputIcon:B}=Ce(e),{roundedClasses:Y}=ke(e),{rtlClasses:L}=Ve(),k=r(()=>e.dirty||e.active),f=r(()=>!e.singleLine&&!!(e.label||a.label)),X=he(),s=r(()=>e.id||`input-${X}`),j=r(()=>`${s.value}-messages`),$=R(),w=R(),D=R(),t=r(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:d,backgroundColorStyles:c}=_e(Ie(e,"bgColor")),{textColorClasses:v,textColorStyles:z}=Pe(r(()=>e.error||e.disabled?void 0:k.value&&A.value?e.color:e.baseColor));Fe(k,n=>{if(f.value){const o=$.value.$el,b=w.value.$el;requestAnimationFrame(()=>{const g=Se(o),u=b.getBoundingClientRect(),T=u.x-g.x,h=u.y-g.y-(g.height/2-u.height/2),_=u.width/.75,I=Math.abs(_-g.width)>1?{maxWidth:Be(_)}:void 0,ie=getComputedStyle(o),Q=getComputedStyle(b),oe=parseFloat(ie.transitionDuration)*1e3||150,se=parseFloat(Q.getPropertyValue("--v-field-label-scale")),ue=Q.getPropertyValue("color");o.style.visibility="visible",b.style.visibility="hidden",we(o,{transform:`translate(${T}px, ${h}px) scale(${se})`,color:ue,...I},{duration:oe,easing:De,direction:n?"normal":"reverse"}).finished.then(()=>{o.style.removeProperty("visibility"),b.style.removeProperty("visibility")})})}},{flush:"post"});const V=r(()=>({isActive:k,isFocused:A,controlRef:D,blur:S,focus:F}));function Z(n){n.target!==document.activeElement&&n.preventDefault()}function x(n){var o;n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),n.stopPropagation(),(o=e["onClick:clear"])==null||o.call(e,new MouseEvent("click")))}return K(()=>{var T,h,_;const n=e.variant==="outlined",o=!!(a["prepend-inner"]||e.prependInnerIcon),b=!!(e.clearable||a.clear),g=!!(a["append-inner"]||e.appendInnerIcon||b),u=()=>a.label?a.label({...V.value,label:e.label,props:{for:s.value}}):e.label;return l("div",N({class:["v-field",{"v-field--active":k.value,"v-field--appended":g,"v-field--center-affix":e.centerAffix??!t.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!u(),[`v-field--variant-${e.variant}`]:!0},y.value,d.value,W.value,C.value,Y.value,L.value,e.class],style:[c.value,e.style],onClick:Z},i),[l("div",{class:"v-field__overlay"},null),l(Te,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),o&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(B,{key:"prepend-icon",name:"prependInner"},null),(T=a["prepend-inner"])==null?void 0:T.call(a,V.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&f.value&&l(E,{key:"floating-label",ref:w,class:[v.value],floating:!0,for:s.value,style:z.value},{default:()=>[u()]}),l(E,{ref:$,for:s.value},{default:()=>[u()]}),(h=a.default)==null?void 0:h.call(a,{...V.value,props:{id:s.value,class:"v-field__input","aria-describedby":j.value},focus:F,blur:S})]),b&&l(Re,{key:"clear"},{default:()=>[J(l("div",{class:"v-field__clearable",onMousedown:I=>{I.preventDefault(),I.stopPropagation()}},[l(Ae,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[a.clear?a.clear({...V.value,props:{onKeydown:x,onFocus:F,onBlur:S,onClick:e["onClick:clear"]}}):l(B,{name:"clear",onKeydown:x,onFocus:F,onBlur:S},null)]})]),[[le,e.dirty]])]}),g&&l("div",{key:"append",class:"v-field__append-inner"},[(_=a["append-inner"])==null?void 0:_.call(a,V.value),e.appendInnerIcon&&l(B,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",v.value],style:z.value},[n&&l(M,null,[l("div",{class:"v-field__outline__start"},null),f.value&&l("div",{class:"v-field__outline__notch"},[l(E,{ref:w,floating:!0,for:s.value},{default:()=>[u()]})]),l("div",{class:"v-field__outline__end"},null)]),t.value&&f.value&&l(E,{ref:w,floating:!0,for:s.value},{default:()=>[u()]})])])}),{controlRef:D}}});function qe(e){const m=Object.keys(ne.props).filter(i=>!Le(i)&&i!=="class"&&i!=="style");return $e(e,m)}const Ge=["color","file","time","date","datetime-local","week","month"],He=O({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Ee(),...te()},"VTextField"),Qe=U()({name:"VTextField",directives:{Intersect:Me},inheritAttrs:!1,props:He(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,m){let{attrs:i,emit:P,slots:a}=m;const y=Ne(e,"modelValue"),{isFocused:C,focus:W,blur:A}=ae(e),F=r(()=>typeof e.counterValue=="function"?e.counterValue(y.value):typeof e.counterValue=="number"?e.counterValue:(y.value??"").toString().length),S=r(()=>{if(i.maxlength)return i.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),B=r(()=>["plain","underlined"].includes(e.variant));function Y(t,d){var c,v;!e.autofocus||!t||(v=(c=d[0].target)==null?void 0:c.focus)==null||v.call(c)}const L=R(),k=R(),f=R(),X=r(()=>Ge.includes(e.type)||e.persistentPlaceholder||C.value||e.active);function s(){var t;f.value!==document.activeElement&&((t=f.value)==null||t.focus()),C.value||W()}function j(t){P("mousedown:control",t),t.target!==f.value&&(s(),t.preventDefault())}function $(t){s(),P("click:control",t)}function w(t){t.stopPropagation(),s(),ee(()=>{y.value=null,Ye(e["onClick:clear"],t)})}function D(t){var c;const d=t.target;if(y.value=d.value,(c=e.modelModifiers)!=null&&c.trim&&["text","search","password","tel","url"].includes(e.type)){const v=[d.selectionStart,d.selectionEnd];ee(()=>{d.selectionStart=v[0],d.selectionEnd=v[1]})}}return K(()=>{const t=!!(a.counter||e.counter!==!1&&e.counter!=null),d=!!(t||a.details),[c,v]=Oe(i),{modelValue:z,...V}=p.filterProps(e),Z=qe(e);return l(p,N({ref:L,modelValue:y.value,"onUpdate:modelValue":x=>y.value=x,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":B.value},e.class],style:e.style},c,V,{centerAffix:!B.value,focused:C.value}),{...a,default:x=>{let{id:n,isDisabled:o,isDirty:b,isReadonly:g,isValid:u}=x;return l(ne,N({ref:k,onMousedown:j,onClick:$,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},Z,{id:n.value,active:X.value||b.value,dirty:b.value||e.dirty,disabled:o.value,focused:C.value,error:u.value===!1}),{...a,default:T=>{let{props:{class:h,..._}}=T;const I=J(l("input",N({ref:f,value:y.value,onInput:D,autofocus:e.autofocus,readonly:g.value,disabled:o.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:s,onBlur:A},_,v),null),[[Ue("intersect"),{handler:Y},null,{once:!0}]]);return l(M,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),a.default?l("div",{class:h,"data-no-activator":""},[a.default(),I]):Ke(I,{class:h}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:d?x=>{var n;return l(M,null,[(n=a.details)==null?void 0:n.call(a,x),t&&l(M,null,[l("span",null,null),l(je,{active:e.persistentCounter||C.value,value:F.value,max:S.value,disabled:e.disabled},a.counter)])])}:void 0})}),We({},L,k,f)}});export{Qe as V,te as a,ne as b,je as c,qe as f,He as m};