import{F as O,G as Q,aF as re,bW as de,I as U,c as r,L as K,A as l,M as Z,N as le,aJ as ce,O as z,b9 as J,b5 as fe,W as ve,a3 as me,a5 as be,b6 as ye,$ as ge,aT as xe,bL as Ce,r as L,P as ke,a7 as Ve,bf as he,as as _e,bX as Ie,a_ as Pe,bY as Fe,b7 as Se,bZ as Be,bl as we,ae as M,a1 as N,aM as Te,b_ as Le,b$ as Re,c0 as Ae,aG as $e,bI as De,Q as Ee,c1 as Me,bn as Ne,au as p,bK as Oe}from"./ePA6vU-w.js";import{c as Ue,m as Ke,b as te,f as We,a as je,V as ee}from"./p5HxD3EO.js";const Ge=O({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Q(),...re({transition:{component:de}})},"VCounter"),Xe=U()({name:"VCounter",functional:!0,props:Ge(),setup(e,b){let{slots:i}=b;const P=r(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return K(()=>l(ce,{transition:e.transition},{default:()=>[Z(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[i.default?i.default({counter:P.value,max:e.max,value:e.value}):P.value]),[[le,e.active]])]})),{}}}),Ye=O({floating:Boolean,...Q()},"VFieldLabel"),E=U()({name:"VFieldLabel",props:Ye(),setup(e,b){let{slots:i}=b;return K(()=>l(Ue,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),qe=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],ne=O({appendInnerIcon:z,bgColor:String,clearable:Boolean,clearIcon:{type:z,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:z,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>qe.includes(e)},"onClick:clear":J(),"onClick:appendInner":J(),"onClick:prependInner":J(),...Q(),...fe(),...ve(),...me()},"VField"),ae=U()({name:"VField",inheritAttrs:!1,props:{id:String,...Ke(),...ne()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,b){let{attrs:i,emit:P,slots:t}=b;const{themeClasses:y}=be(e),{loaderClasses:C}=ye(e),{focusClasses:W,isFocused:R,focus:F,blur:S}=te(e),{InputIcon:B}=We(e),{roundedClasses:j}=ge(e),{rtlClasses:A}=xe(),k=r(()=>e.dirty||e.active),f=r(()=>!e.singleLine&&!!(e.label||t.label)),G=Ce(),s=r(()=>e.id||`input-${G}`),X=r(()=>`${s.value}-messages`),$=L(),w=L(),D=L(),n=r(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:d,backgroundColorStyles:c}=ke(Ve(e,"bgColor")),{textColorClasses:v,textColorStyles:Y}=he(r(()=>e.error||e.disabled?void 0:k.value&&R.value?e.color:e.baseColor));_e(k,a=>{if(f.value){const o=$.value.$el,m=w.value.$el;requestAnimationFrame(()=>{const g=Ie(o),u=m.getBoundingClientRect(),T=u.x-g.x,h=u.y-g.y-(g.height/2-u.height/2),_=u.width/.75,I=Math.abs(_-g.width)>1?{maxWidth:Pe(_)}:void 0,ie=getComputedStyle(o),H=getComputedStyle(m),oe=parseFloat(ie.transitionDuration)*1e3||150,se=parseFloat(H.getPropertyValue("--v-field-label-scale")),ue=H.getPropertyValue("color");o.style.visibility="visible",m.style.visibility="hidden",Fe(o,{transform:`translate(${T}px, ${h}px) scale(${se})`,color:ue,...I},{duration:oe,easing:Re,direction:a?"normal":"reverse"}).finished.then(()=>{o.style.removeProperty("visibility"),m.style.removeProperty("visibility")})})}},{flush:"post"});const V=r(()=>({isActive:k,isFocused:R,controlRef:D,blur:S,focus:F}));function q(a){a.target!==document.activeElement&&a.preventDefault()}function x(a){var o;a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),a.stopPropagation(),(o=e["onClick:clear"])==null||o.call(e,new MouseEvent("click")))}return K(()=>{var T,h,_;const a=e.variant==="outlined",o=!!(t["prepend-inner"]||e.prependInnerIcon),m=!!(e.clearable||t.clear),g=!!(t["append-inner"]||e.appendInnerIcon||m),u=()=>t.label?t.label({...V.value,label:e.label,props:{for:s.value}}):e.label;return l("div",N({class:["v-field",{"v-field--active":k.value,"v-field--appended":g,"v-field--center-affix":e.centerAffix??!n.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!u(),[`v-field--variant-${e.variant}`]:!0},y.value,d.value,W.value,C.value,j.value,A.value,e.class],style:[c.value,e.style],onClick:q},i),[l("div",{class:"v-field__overlay"},null),l(Se,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),o&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(B,{key:"prepend-icon",name:"prependInner"},null),(T=t["prepend-inner"])==null?void 0:T.call(t,V.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&f.value&&l(E,{key:"floating-label",ref:w,class:[v.value],floating:!0,for:s.value,style:Y.value},{default:()=>[u()]}),l(E,{ref:$,for:s.value},{default:()=>[u()]}),(h=t.default)==null?void 0:h.call(t,{...V.value,props:{id:s.value,class:"v-field__input","aria-describedby":X.value},focus:F,blur:S})]),m&&l(Be,{key:"clear"},{default:()=>[Z(l("div",{class:"v-field__clearable",onMousedown:I=>{I.preventDefault(),I.stopPropagation()}},[l(we,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...V.value,props:{onKeydown:x,onFocus:F,onBlur:S,onClick:e["onClick:clear"]}}):l(B,{name:"clear",onKeydown:x,onFocus:F,onBlur:S},null)]})]),[[le,e.dirty]])]}),g&&l("div",{key:"append",class:"v-field__append-inner"},[(_=t["append-inner"])==null?void 0:_.call(t,V.value),e.appendInnerIcon&&l(B,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",v.value],style:Y.value},[a&&l(M,null,[l("div",{class:"v-field__outline__start"},null),f.value&&l("div",{class:"v-field__outline__notch"},[l(E,{ref:w,floating:!0,for:s.value},{default:()=>[u()]})]),l("div",{class:"v-field__outline__end"},null)]),n.value&&f.value&&l(E,{ref:w,floating:!0,for:s.value},{default:()=>[u()]})])])}),{controlRef:D}}});function ze(e){const b=Object.keys(ae.props).filter(i=>!Te(i)&&i!=="class"&&i!=="style");return Le(e,b)}const Je=["color","file","time","date","datetime-local","week","month"],Qe=O({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...je(),...ne()},"VTextField"),pe=U()({name:"VTextField",directives:{Intersect:Ae},inheritAttrs:!1,props:Qe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,b){let{attrs:i,emit:P,slots:t}=b;const y=$e(e,"modelValue"),{isFocused:C,focus:W,blur:R}=te(e),F=r(()=>typeof e.counterValue=="function"?e.counterValue(y.value):typeof e.counterValue=="number"?e.counterValue:(y.value??"").toString().length),S=r(()=>{if(i.maxlength)return i.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),B=r(()=>["plain","underlined"].includes(e.variant));function j(n,d){var c,v;!e.autofocus||!n||(v=(c=d[0].target)==null?void 0:c.focus)==null||v.call(c)}const A=L(),k=L(),f=L(),G=r(()=>Je.includes(e.type)||e.persistentPlaceholder||C.value||e.active);function s(){var n;f.value!==document.activeElement&&((n=f.value)==null||n.focus()),C.value||W()}function X(n){P("mousedown:control",n),n.target!==f.value&&(s(),n.preventDefault())}function $(n){s(),P("click:control",n)}function w(n){n.stopPropagation(),s(),p(()=>{y.value=null,Oe(e["onClick:clear"],n)})}function D(n){var c;const d=n.target;if(y.value=d.value,(c=e.modelModifiers)!=null&&c.trim&&["text","search","password","tel","url"].includes(e.type)){const v=[d.selectionStart,d.selectionEnd];p(()=>{d.selectionStart=v[0],d.selectionEnd=v[1]})}}return K(()=>{const n=!!(t.counter||e.counter!==!1&&e.counter!=null),d=!!(n||t.details),[c,v]=De(i),{modelValue:Y,...V}=ee.filterProps(e),q=ze(e);return l(ee,N({ref:A,modelValue:y.value,"onUpdate:modelValue":x=>y.value=x,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":B.value},e.class],style:e.style},c,V,{centerAffix:!B.value,focused:C.value}),{...t,default:x=>{let{id:a,isDisabled:o,isDirty:m,isReadonly:g,isValid:u}=x;return l(ae,N({ref:k,onMousedown:X,onClick:$,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},q,{id:a.value,active:G.value||m.value,dirty:m.value||e.dirty,disabled:o.value,focused:C.value,error:u.value===!1}),{...t,default:T=>{let{props:{class:h,..._}}=T;const I=Z(l("input",N({ref:f,value:y.value,onInput:D,autofocus:e.autofocus,readonly:g.value,disabled:o.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:s,onBlur:R},_,v),null),[[Ee("intersect"),{handler:j},null,{once:!0}]]);return l(M,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?l("div",{class:h,"data-no-activator":""},[t.default(),I]):Me(I,{class:h}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:d?x=>{var a;return l(M,null,[(a=t.details)==null?void 0:a.call(t,x),n&&l(M,null,[l("span",null,null),l(Xe,{active:e.persistentCounter||C.value,value:F.value,max:S.value,disabled:e.disabled},t.counter)])])}:void 0})}),Ne({},A,k,f)}});export{pe as V,ne as a,ae as b,Xe as c,ze as f,Qe as m};
