import{a4 as O,a7 as H,aF as re,bO as de,af as U,c as r,ap as K,A as l,bE as Q,bP as le,bQ as ce,bG as fe,a5 as z,b1 as G,aX as ve,aa as be,ad as me,bR as ye,aj as ge,aY as xe,bx as ae,bS as Ce,bT as ke,ai as Ve,by as he,r as T,aZ as _e,ao as Ie,bH as Pe,Z as Fe,bU as Se,aD as Be,bV as we,a_ as Re,bW as Te,aN as Ae,K as M,aq as N,U as Le,bX as De,bY as Ee,bw as $e,bZ as Me,ag as Ne,bz as Oe,bA as p,bF as Ue,b_ as Ke,aO as je,a0 as ee,bN as We}from"./Bbj95wRu.js";const Xe=O({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...H(),...re({transition:{component:de}})},"VCounter"),Ye=U()({name:"VCounter",functional:!0,props:Xe(),setup(e,m){let{slots:i}=m;const P=r(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return K(()=>l(ce,{transition:e.transition},{default:()=>[Q(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[i.default?i.default({counter:P.value,max:e.max,value:e.value}):P.value]),[[le,e.active]])]})),{}}}),Ze=O({floating:Boolean,...H()},"VFieldLabel"),$=U()({name:"VFieldLabel",props:Ze(),setup(e,m){let{slots:i}=m;return K(()=>l(fe,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),qe=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],te=O({appendInnerIcon:z,bgColor:String,clearable:Boolean,clearIcon:{type:z,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:z,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>qe.includes(e)},"onClick:clear":G(),"onClick:appendInner":G(),"onClick:prependInner":G(),...H(),...ve(),...be(),...me()},"VField"),ne=U()({name:"VField",inheritAttrs:!1,props:{id:String,...ye(),...te()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,m){let{attrs:i,emit:P,slots:a}=m;const{themeClasses:y}=ge(e),{loaderClasses:C}=xe(e),{focusClasses:j,isFocused:A,focus:F,blur:S}=ae(e),{InputIcon:B}=Ce(e),{roundedClasses:W}=ke(e),{rtlClasses:L}=Ve(),k=r(()=>e.dirty||e.active),f=r(()=>!e.singleLine&&!!(e.label||a.label)),X=he(),s=r(()=>e.id||`input-${X}`),Y=r(()=>`${s.value}-messages`),D=T(),w=T(),E=T(),t=r(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:d,backgroundColorStyles:c}=_e(Ie(e,"bgColor")),{textColorClasses:v,textColorStyles:Z}=Pe(r(()=>e.error||e.disabled?void 0:k.value&&A.value?e.color:e.baseColor));Fe(k,n=>{if(f.value){const o=D.value.$el,b=w.value.$el;requestAnimationFrame(()=>{const g=Se(o),u=b.getBoundingClientRect(),R=u.x-g.x,h=u.y-g.y-(g.height/2-u.height/2),_=u.width/.75,I=Math.abs(_-g.width)>1?{maxWidth:Be(_)}:void 0,ie=getComputedStyle(o),J=getComputedStyle(b),oe=parseFloat(ie.transitionDuration)*1e3||150,se=parseFloat(J.getPropertyValue("--v-field-label-scale")),ue=J.getPropertyValue("color");o.style.visibility="visible",b.style.visibility="hidden",we(o,{transform:`translate(${R}px, ${h}px) scale(${se})`,color:ue,...I},{duration:oe,easing:Ee,direction:n?"normal":"reverse"}).finished.then(()=>{o.style.removeProperty("visibility"),b.style.removeProperty("visibility")})})}},{flush:"post"});const V=r(()=>({isActive:k,isFocused:A,controlRef:E,blur:S,focus:F}));function q(n){n.target!==document.activeElement&&n.preventDefault()}function x(n){var o;n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),n.stopPropagation(),(o=e["onClick:clear"])==null||o.call(e,new MouseEvent("click")))}return K(()=>{var R,h,_;const n=e.variant==="outlined",o=!!(a["prepend-inner"]||e.prependInnerIcon),b=!!(e.clearable||a.clear),g=!!(a["append-inner"]||e.appendInnerIcon||b),u=()=>a.label?a.label({...V.value,label:e.label,props:{for:s.value}}):e.label;return l("div",N({class:["v-field",{"v-field--active":k.value,"v-field--appended":g,"v-field--center-affix":e.centerAffix??!t.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!u(),[`v-field--variant-${e.variant}`]:!0},y.value,d.value,j.value,C.value,W.value,L.value,e.class],style:[c.value,e.style],onClick:q},i),[l("div",{class:"v-field__overlay"},null),l(Re,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),o&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(B,{key:"prepend-icon",name:"prependInner"},null),(R=a["prepend-inner"])==null?void 0:R.call(a,V.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&f.value&&l($,{key:"floating-label",ref:w,class:[v.value],floating:!0,for:s.value,style:Z.value},{default:()=>[u()]}),l($,{ref:D,for:s.value},{default:()=>[u()]}),(h=a.default)==null?void 0:h.call(a,{...V.value,props:{id:s.value,class:"v-field__input","aria-describedby":Y.value},focus:F,blur:S})]),b&&l(Te,{key:"clear"},{default:()=>[Q(l("div",{class:"v-field__clearable",onMousedown:I=>{I.preventDefault(),I.stopPropagation()}},[l(Ae,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[a.clear?a.clear({...V.value,props:{onKeydown:x,onFocus:F,onBlur:S,onClick:e["onClick:clear"]}}):l(B,{name:"clear",onKeydown:x,onFocus:F,onBlur:S},null)]})]),[[le,e.dirty]])]}),g&&l("div",{key:"append",class:"v-field__append-inner"},[(_=a["append-inner"])==null?void 0:_.call(a,V.value),e.appendInnerIcon&&l(B,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",v.value],style:Z.value},[n&&l(M,null,[l("div",{class:"v-field__outline__start"},null),f.value&&l("div",{class:"v-field__outline__notch"},[l($,{ref:w,floating:!0,for:s.value},{default:()=>[u()]})]),l("div",{class:"v-field__outline__end"},null)]),t.value&&f.value&&l($,{ref:w,floating:!0,for:s.value},{default:()=>[u()]})])])}),{controlRef:E}}});function ze(e){const m=Object.keys(ne.props).filter(i=>!Le(i)&&i!=="class"&&i!=="style");return De(e,m)}const Ge=["color","file","time","date","datetime-local","week","month"],He=O({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...$e(),...te()},"VTextField"),Je=U()({name:"VTextField",directives:{Intersect:Me},inheritAttrs:!1,props:He(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,m){let{attrs:i,emit:P,slots:a}=m;const y=Ne(e,"modelValue"),{isFocused:C,focus:j,blur:A}=ae(e),F=r(()=>typeof e.counterValue=="function"?e.counterValue(y.value):typeof e.counterValue=="number"?e.counterValue:(y.value??"").toString().length),S=r(()=>{if(i.maxlength)return i.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),B=r(()=>["plain","underlined"].includes(e.variant));function W(t,d){var c,v;!e.autofocus||!t||(v=(c=d[0].target)==null?void 0:c.focus)==null||v.call(c)}const L=T(),k=T(),f=T(),X=r(()=>Ge.includes(e.type)||e.persistentPlaceholder||C.value||e.active);function s(){var t;f.value!==document.activeElement&&((t=f.value)==null||t.focus()),C.value||j()}function Y(t){P("mousedown:control",t),t.target!==f.value&&(s(),t.preventDefault())}function D(t){s(),P("click:control",t)}function w(t){t.stopPropagation(),s(),ee(()=>{y.value=null,We(e["onClick:clear"],t)})}function E(t){var c;const d=t.target;if(y.value=d.value,(c=e.modelModifiers)!=null&&c.trim&&["text","search","password","tel","url"].includes(e.type)){const v=[d.selectionStart,d.selectionEnd];ee(()=>{d.selectionStart=v[0],d.selectionEnd=v[1]})}}return K(()=>{const t=!!(a.counter||e.counter!==!1&&e.counter!=null),d=!!(t||a.details),[c,v]=Oe(i),{modelValue:Z,...V}=p.filterProps(e),q=ze(e);return l(p,N({ref:L,modelValue:y.value,"onUpdate:modelValue":x=>y.value=x,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":B.value},e.class],style:e.style},c,V,{centerAffix:!B.value,focused:C.value}),{...a,default:x=>{let{id:n,isDisabled:o,isDirty:b,isReadonly:g,isValid:u}=x;return l(ne,N({ref:k,onMousedown:Y,onClick:D,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},q,{id:n.value,active:X.value||b.value,dirty:b.value||e.dirty,disabled:o.value,focused:C.value,error:u.value===!1}),{...a,default:R=>{let{props:{class:h,..._}}=R;const I=Q(l("input",N({ref:f,value:y.value,onInput:E,autofocus:e.autofocus,readonly:g.value,disabled:o.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:s,onBlur:A},_,v),null),[[Ue("intersect"),{handler:W},null,{once:!0}]]);return l(M,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),a.default?l("div",{class:h,"data-no-activator":""},[a.default(),I]):Ke(I,{class:h}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:d?x=>{var n;return l(M,null,[(n=a.details)==null?void 0:n.call(a,x),t&&l(M,null,[l("span",null,null),l(Ye,{active:e.persistentCounter||C.value,value:F.value,max:S.value,disabled:e.disabled},a.counter)])])}:void 0})}),je({},L,k,f)}});export{Je as V,te as a,ne as b,Ye as c,ze as f,He as m};
