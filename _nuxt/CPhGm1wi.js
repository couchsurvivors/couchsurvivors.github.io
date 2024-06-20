import{a2 as O,an as Q,a6 as re,bS as de,a7 as U,c as r,ab as K,A as l,ad as G,ae as le,ac as ce,al as Z,aT as z,aO as fe,aq as ve,at as me,ax as be,aP as ye,bc as ge,aw as xe,bK as Ce,r as R,aQ as ke,ah as Ve,aZ as he,T as _e,bT as Ie,aH as Pe,bU as Fe,aR as Se,bV as Be,b3 as we,H as M,af as N,aj as Te,bW as Re,bX as Le,bY as Ae,a8 as De,bL as Ee,ba as $e,bZ as Me,b5 as Ne,W as p,bR as Oe}from"./BFrEVmP9.js";import{c as Ue,m as Ke,b as ae,f as We,a as je,V as ee}from"./bs4ibtrd.js";const qe=O({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Q(),...re({transition:{component:de}})},"VCounter"),He=U()({name:"VCounter",functional:!0,props:qe(),setup(e,b){let{slots:i}=b;const P=r(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return K(()=>l(ce,{transition:e.transition},{default:()=>[G(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[i.default?i.default({counter:P.value,max:e.max,value:e.value}):P.value]),[[le,e.active]])]})),{}}}),Xe=O({floating:Boolean,...Q()},"VFieldLabel"),$=U()({name:"VFieldLabel",props:Xe(),setup(e,b){let{slots:i}=b;return K(()=>l(Ue,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),Ye=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],te=O({appendInnerIcon:Z,bgColor:String,clearable:Boolean,clearIcon:{type:Z,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Z,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ye.includes(e)},"onClick:clear":z(),"onClick:appendInner":z(),"onClick:prependInner":z(),...Q(),...fe(),...ve(),...me()},"VField"),ne=U()({name:"VField",inheritAttrs:!1,props:{id:String,...Ke(),...te()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,b){let{attrs:i,emit:P,slots:a}=b;const{themeClasses:y}=be(e),{loaderClasses:C}=ye(e),{focusClasses:W,isFocused:L,focus:F,blur:S}=ae(e),{InputIcon:B}=We(e),{roundedClasses:j}=ge(e),{rtlClasses:A}=xe(),k=r(()=>e.dirty||e.active),f=r(()=>!e.singleLine&&!!(e.label||a.label)),q=Ce(),s=r(()=>e.id||`input-${q}`),H=r(()=>`${s.value}-messages`),D=R(),w=R(),E=R(),t=r(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:d,backgroundColorStyles:c}=ke(Ve(e,"bgColor")),{textColorClasses:v,textColorStyles:X}=he(r(()=>e.error||e.disabled?void 0:k.value&&L.value?e.color:e.baseColor));_e(k,n=>{if(f.value){const o=D.value.$el,m=w.value.$el;requestAnimationFrame(()=>{const g=Ie(o),u=m.getBoundingClientRect(),T=u.x-g.x,h=u.y-g.y-(g.height/2-u.height/2),_=u.width/.75,I=Math.abs(_-g.width)>1?{maxWidth:Pe(_)}:void 0,ie=getComputedStyle(o),J=getComputedStyle(m),oe=parseFloat(ie.transitionDuration)*1e3||150,se=parseFloat(J.getPropertyValue("--v-field-label-scale")),ue=J.getPropertyValue("color");o.style.visibility="visible",m.style.visibility="hidden",Fe(o,{transform:`translate(${T}px, ${h}px) scale(${se})`,color:ue,...I},{duration:oe,easing:Le,direction:n?"normal":"reverse"}).finished.then(()=>{o.style.removeProperty("visibility"),m.style.removeProperty("visibility")})})}},{flush:"post"});const V=r(()=>({isActive:k,isFocused:L,controlRef:E,blur:S,focus:F}));function Y(n){n.target!==document.activeElement&&n.preventDefault()}function x(n){var o;n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),n.stopPropagation(),(o=e["onClick:clear"])==null||o.call(e,new MouseEvent("click")))}return K(()=>{var T,h,_;const n=e.variant==="outlined",o=!!(a["prepend-inner"]||e.prependInnerIcon),m=!!(e.clearable||a.clear),g=!!(a["append-inner"]||e.appendInnerIcon||m),u=()=>a.label?a.label({...V.value,label:e.label,props:{for:s.value}}):e.label;return l("div",N({class:["v-field",{"v-field--active":k.value,"v-field--appended":g,"v-field--center-affix":e.centerAffix??!t.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!u(),[`v-field--variant-${e.variant}`]:!0},y.value,d.value,W.value,C.value,j.value,A.value,e.class],style:[c.value,e.style],onClick:Y},i),[l("div",{class:"v-field__overlay"},null),l(Se,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),o&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(B,{key:"prepend-icon",name:"prependInner"},null),(T=a["prepend-inner"])==null?void 0:T.call(a,V.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&f.value&&l($,{key:"floating-label",ref:w,class:[v.value],floating:!0,for:s.value,style:X.value},{default:()=>[u()]}),l($,{ref:D,for:s.value},{default:()=>[u()]}),(h=a.default)==null?void 0:h.call(a,{...V.value,props:{id:s.value,class:"v-field__input","aria-describedby":H.value},focus:F,blur:S})]),m&&l(Be,{key:"clear"},{default:()=>[G(l("div",{class:"v-field__clearable",onMousedown:I=>{I.preventDefault(),I.stopPropagation()}},[l(we,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[a.clear?a.clear({...V.value,props:{onKeydown:x,onFocus:F,onBlur:S,onClick:e["onClick:clear"]}}):l(B,{name:"clear",onKeydown:x,onFocus:F,onBlur:S},null)]})]),[[le,e.dirty]])]}),g&&l("div",{key:"append",class:"v-field__append-inner"},[(_=a["append-inner"])==null?void 0:_.call(a,V.value),e.appendInnerIcon&&l(B,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",v.value],style:X.value},[n&&l(M,null,[l("div",{class:"v-field__outline__start"},null),f.value&&l("div",{class:"v-field__outline__notch"},[l($,{ref:w,floating:!0,for:s.value},{default:()=>[u()]})]),l("div",{class:"v-field__outline__end"},null)]),t.value&&f.value&&l($,{ref:w,floating:!0,for:s.value},{default:()=>[u()]})])])}),{controlRef:E}}});function Ze(e){const b=Object.keys(ne.props).filter(i=>!Te(i)&&i!=="class"&&i!=="style");return Re(e,b)}const ze=["color","file","time","date","datetime-local","week","month"],Qe=O({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...je(),...te()},"VTextField"),pe=U()({name:"VTextField",directives:{Intersect:Ae},inheritAttrs:!1,props:Qe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,b){let{attrs:i,emit:P,slots:a}=b;const y=De(e,"modelValue"),{isFocused:C,focus:W,blur:L}=ae(e),F=r(()=>typeof e.counterValue=="function"?e.counterValue(y.value):typeof e.counterValue=="number"?e.counterValue:(y.value??"").toString().length),S=r(()=>{if(i.maxlength)return i.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),B=r(()=>["plain","underlined"].includes(e.variant));function j(t,d){var c,v;!e.autofocus||!t||(v=(c=d[0].target)==null?void 0:c.focus)==null||v.call(c)}const A=R(),k=R(),f=R(),q=r(()=>ze.includes(e.type)||e.persistentPlaceholder||C.value||e.active);function s(){var t;f.value!==document.activeElement&&((t=f.value)==null||t.focus()),C.value||W()}function H(t){P("mousedown:control",t),t.target!==f.value&&(s(),t.preventDefault())}function D(t){s(),P("click:control",t)}function w(t){t.stopPropagation(),s(),p(()=>{y.value=null,Oe(e["onClick:clear"],t)})}function E(t){var c;const d=t.target;if(y.value=d.value,(c=e.modelModifiers)!=null&&c.trim&&["text","search","password","tel","url"].includes(e.type)){const v=[d.selectionStart,d.selectionEnd];p(()=>{d.selectionStart=v[0],d.selectionEnd=v[1]})}}return K(()=>{const t=!!(a.counter||e.counter!==!1&&e.counter!=null),d=!!(t||a.details),[c,v]=Ee(i),{modelValue:X,...V}=ee.filterProps(e),Y=Ze(e);return l(ee,N({ref:A,modelValue:y.value,"onUpdate:modelValue":x=>y.value=x,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":B.value},e.class],style:e.style},c,V,{centerAffix:!B.value,focused:C.value}),{...a,default:x=>{let{id:n,isDisabled:o,isDirty:m,isReadonly:g,isValid:u}=x;return l(ne,N({ref:k,onMousedown:H,onClick:D,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},Y,{id:n.value,active:q.value||m.value,dirty:m.value||e.dirty,disabled:o.value,focused:C.value,error:u.value===!1}),{...a,default:T=>{let{props:{class:h,..._}}=T;const I=G(l("input",N({ref:f,value:y.value,onInput:E,autofocus:e.autofocus,readonly:g.value,disabled:o.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:s,onBlur:L},_,v),null),[[$e("intersect"),{handler:j},null,{once:!0}]]);return l(M,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),a.default?l("div",{class:h,"data-no-activator":""},[a.default(),I]):Me(I,{class:h}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:d?x=>{var n;return l(M,null,[(n=a.details)==null?void 0:n.call(a,x),t&&l(M,null,[l("span",null,null),l(He,{active:e.persistentCounter||C.value,value:F.value,max:S.value,disabled:e.disabled},a.counter)])])}:void 0})}),Ne({},A,k,f)}});export{pe as V,te as a,ne as b,He as c,Ze as f,Qe as m};
