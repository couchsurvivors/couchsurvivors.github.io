import{_ as qe}from"./Bae0GB3w.js";import{u as We}from"./ioY82J2V.js";import{F as Ve,aC as Ye,aF as Ge,I as ye,aT as Xe,r as N,ap as ie,aG as xe,c as m,be as Je,bf as $e,as as ce,bg as ve,bh as Qe,L as ke,A as l,ae as fe,bi as el,a1 as oe,ac as ll,ah as Te,bj as tl,S as He,bk as al,bl as nl,C as ee,bm as ul,bn as ol,bo as il,au as Ie,b2 as sl,W as rl,T as dl,bp as Pe,aU as _e,a7 as q,aV as cl,a0 as vl,aY as Ke,G as Ze,R as ml,J as je,Z as fl,a_ as se,M as Re,Q as bl,bq as Vl,N as gl,aW as hl,$ as pl,P as De,d as Cl,ax as yl,br as kl,an as Sl,o as wl,v as Ee,a8 as Ne,B as x,af as I,aw as Al,ag as Be,ak as xl,bs as Hl,y as _l,aj as me,aA as Ml,ab as Fl,aa as Ll,aB as Tl,bt as Il,q as ze}from"./C82PRbc6.js";import{m as Pl,V as be}from"./B7b4QBZR.js";import{V as Ue}from"./DiAYzXhx.js";import{V as Rl}from"./CIz513X_.js";import{V as Ce,a as ue}from"./BbJgl_2m.js";import{m as Dl,u as El,b as Nl,a as Bl}from"./BqIziinK.js";import{m as zl,u as Ul}from"./D6yFLqk-.js";import{u as Ol,m as $l,a as Kl,b as Zl,V as Oe,c as jl}from"./VYg29_SO.js";import{V as ql}from"./BXPxF1Yc.js";import{V as Wl}from"./B9j5Bly2.js";function Yl(e,a,c){if(a==null)return e;if(Array.isArray(a))throw new Error("Multiple matches is not implemented");return typeof a=="number"&&~a?l(fe,null,[l("span",{class:"v-combobox__unmask"},[e.substr(0,a)]),l("span",{class:"v-combobox__mask"},[e.substr(a,c)]),l("span",{class:"v-combobox__unmask"},[e.substr(a+c)])]):e}const Gl=Ve({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...zl({filterKeys:["title"]}),...Dl({hideNoData:!0,returnObject:!0}),...Ye(Pl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ge({transition:!1})},"VCombobox"),Xl=ye()({name:"VCombobox",props:Gl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,a){var ge;let{emit:c,slots:o}=a;const{t:p}=Xe(),h=N(),k=ie(!1),u=ie(!0),w=ie(!1),P=N(),D=N(),_=xe(e,"menu"),f=m({get:()=>_.value,set:t=>{var v;_.value&&!t&&((v=P.value)!=null&&v.ΨopenChildren)||(_.value=t)}}),b=ie(-1);let E=!1;const B=m(()=>{var t;return(t=h.value)==null?void 0:t.color}),$=m(()=>f.value?e.closeText:e.openText),{items:j,transformIn:K,transformOut:z}=Je(e),{textColorClasses:M,textColorStyles:i}=$e(B),n=xe(e,"modelValue",[],t=>K(sl(t)),t=>{const v=z(t);return e.multiple?v:v[0]??null}),s=Ol(),F=m(()=>!!(e.chips||o.chip)),C=m(()=>F.value||!!o.selection),L=ie(!e.multiple&&!C.value?((ge=n.value[0])==null?void 0:ge.title)??"":""),V=m({get:()=>L.value,set:t=>{var v;if(L.value=t??"",!e.multiple&&!C.value&&(n.value=[ve(e,t)]),t&&e.multiple&&((v=e.delimiters)!=null&&v.length)){const y=t.split(new RegExp(`(?:${e.delimiters.join("|")})+`));y.length>1&&(y.forEach(d=>{d=d.trim(),d&&g(ve(e,d))}),L.value="")}t||(b.value=-1),u.value=!t}}),A=m(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:e.multiple?n.value.length:V.value.length);ce(L,t=>{E?Ie(()=>E=!1):k.value&&!f.value&&(f.value=!0),c("update:search",t)}),ce(n,t=>{var v;!e.multiple&&!C.value&&(L.value=((v=t[0])==null?void 0:v.title)??"")});const{filteredItems:U,getMatches:W}=Ul(e,j,()=>u.value?"":V.value),H=m(()=>e.hideSelected?U.value.filter(t=>!n.value.some(v=>v.value===t.value)):U.value),X=m(()=>n.value.map(t=>t.value)),G=m(()=>{var v;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&V.value===((v=H.value[0])==null?void 0:v.title))&&H.value.length>0&&!u.value&&!w.value}),J=m(()=>e.hideNoData&&!H.value.length||e.readonly||(s==null?void 0:s.isReadonly.value)),le=N(),{onListScroll:R,onListKeydown:T}=El(le,h);function Q(t){E=!0,e.openOnClear&&(f.value=!0)}function te(){J.value||(f.value=!0)}function re(t){J.value||(k.value&&(t.preventDefault(),t.stopPropagation()),f.value=!f.value)}function de(t){var d;if(il(t)||e.readonly||s!=null&&s.isReadonly.value)return;const v=h.value.selectionStart,y=n.value.length;if((b.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(f.value=!0),["Escape"].includes(t.key)&&(f.value=!1),["Enter","Escape","Tab"].includes(t.key)&&(G.value&&["Enter","Tab"].includes(t.key)&&g(U.value[0]),u.value=!0),t.key==="ArrowDown"&&G.value&&((d=le.value)==null||d.focus("next")),t.key==="Enter"&&V.value&&(g(ve(e,V.value)),C.value&&(L.value="")),["Backspace","Delete"].includes(t.key)){if(!e.multiple&&C.value&&n.value.length>0&&!V.value)return g(n.value[0],!1);if(~b.value){const S=b.value;g(n.value[b.value],!1),b.value=S>=y-1?y-2:S}else t.key==="Backspace"&&!V.value&&(b.value=y-1)}if(e.multiple){if(t.key==="ArrowLeft"){if(b.value<0&&v>0)return;const S=b.value>-1?b.value-1:y-1;n.value[S]?b.value=S:(b.value=-1,h.value.setSelectionRange(V.value.length,V.value.length))}if(t.key==="ArrowRight"){if(b.value<0)return;const S=b.value+1;n.value[S]?b.value=S:(b.value=-1,h.value.setSelectionRange(0,0))}}}function r(){var t;k.value&&(u.value=!0,(t=h.value)==null||t.focus())}function g(t){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!t||t.props.disabled))if(e.multiple){const y=n.value.findIndex(S=>e.valueComparator(S.value,t.value)),d=v??!~y;if(~y){const S=d?[...n.value,t]:[...n.value];S.splice(y,1),n.value=S}else d&&(n.value=[...n.value,t]);e.clearOnSelect&&(V.value="")}else{const y=v!==!1;n.value=y?[t]:[],L.value=y&&!C.value?t.title:"",Ie(()=>{f.value=!1,u.value=!0})}}function Se(t){k.value=!0,setTimeout(()=>{w.value=!0})}function we(t){w.value=!1}function Ae(t){(t==null||t===""&&!e.multiple&&!C.value)&&(n.value=[])}return ce(k,(t,v)=>{if(!(t||t===v)){if(b.value=-1,f.value=!1,G.value&&!w.value&&!n.value.some(y=>{let{value:d}=y;return d===H.value[0].value})){g(H.value[0]);return}if(V.value){if(e.multiple){g(ve(e,V.value));return}if(!C.value)return;n.value.some(y=>{let{title:d}=y;return d===V.value})?L.value="":g(ve(e,V.value))}}}),ce(f,()=>{if(!e.hideSelected&&f.value&&n.value.length){const t=H.value.findIndex(v=>n.value.some(y=>e.valueComparator(y.value,v.value)));Qe&&window.requestAnimationFrame(()=>{var v;t>=0&&((v=D.value)==null||v.scrollToIndex(t))})}}),ce(()=>e.items,(t,v)=>{f.value||k.value&&!v.length&&t.length&&(f.value=!0)}),ke(()=>{const t=!!(!e.hideNoData||H.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),v=n.value.length>0,y=be.filterProps(e);return l(be,oe({ref:h},y,{modelValue:V.value,"onUpdate:modelValue":[d=>V.value=d,Ae],focused:k.value,"onUpdate:focused":d=>k.value=d,validationValue:n.externalValue,counterValue:A.value,dirty:v,class:["v-combobox",{"v-combobox--active-menu":f.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!C.value,"v-combobox--selecting-index":b.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:v?void 0:e.placeholder,"onClick:clear":Q,"onMousedown:control":te,onKeydown:de}),{...o,default:()=>l(fe,null,[l(el,oe({ref:P,modelValue:f.value,"onUpdate:modelValue":d=>f.value=d,activator:"parent",contentClass:"v-combobox__content",disabled:J.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:r},e.menuProps),{default:()=>[t&&l(ll,oe({ref:le,selected:X.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:d=>d.preventDefault(),onKeydown:T,onFocusin:Se,onFocusout:we,onScrollPassive:R,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var d,S,Y;return[(d=o["prepend-item"])==null?void 0:d.call(o),!H.value.length&&!e.hideNoData&&(((S=o["no-data"])==null?void 0:S.call(o))??l(Te,{title:p(e.noDataText)},null)),l(Nl,{ref:D,renderless:!0,items:H.value},{default:ae=>{var Le;let{item:O,index:ne,itemRef:Z}=ae;const Fe=oe(O.props,{ref:Z,key:ne,active:G.value&&ne===0?!0:void 0,onClick:()=>g(O,null)});return((Le=o.item)==null?void 0:Le.call(o,{item:O,index:ne,props:Fe}))??l(Te,oe(Fe,{role:"option"}),{prepend:he=>{let{isSelected:pe}=he;return l(fe,null,[e.multiple&&!e.hideSelected?l(Bl,{key:O.value,modelValue:pe,ripple:!1,tabindex:"-1"},null):void 0,O.props.prependAvatar&&l(tl,{image:O.props.prependAvatar},null),O.props.prependIcon&&l(He,{icon:O.props.prependIcon},null)])},title:()=>{var he,pe;return u.value?O.title:Yl(O.title,(he=W(O))==null?void 0:he.title,((pe=V.value)==null?void 0:pe.length)??0)}})}}),(Y=o["append-item"])==null?void 0:Y.call(o)]}})]}),n.value.map((d,S)=>{function Y(Z){Z.stopPropagation(),Z.preventDefault(),g(d,!1)}const ae={"onClick:close":Y,onKeydown(Z){Z.key!=="Enter"&&Z.key!==" "||(Z.preventDefault(),Z.stopPropagation(),Y(Z))},onMousedown(Z){Z.preventDefault(),Z.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},O=F.value?!!o.chip:!!o.selection,ne=O?al(F.value?o.chip({item:d,index:S,props:ae}):o.selection({item:d,index:S})):void 0;if(!(O&&!ne))return l("div",{key:d.value,class:["v-combobox__selection",S===b.value&&["v-combobox__selection--selected",M.value]],style:S===b.value?i.value:{}},[F.value?o.chip?l(nl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:d.title}}},{default:()=>[ne]}):l(ql,oe({key:"chip",closable:e.closableChips,size:"small",text:d.title,disabled:d.props.disabled},ae),null):ne??l("span",{class:"v-combobox__selection-text"},[d.title,e.multiple&&S<n.value.length-1&&l("span",{class:"v-combobox__selection-comma"},[ee(",")])])])})]),"append-inner":function(){var ae;for(var d=arguments.length,S=new Array(d),Y=0;Y<d;Y++)S[Y]=arguments[Y];return l(fe,null,[(ae=o["append-inner"])==null?void 0:ae.call(o,...S),(!e.hideNoData||e.items.length)&&e.menuIcon?l(He,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:re,onClick:ul,"aria-label":p($.value),title:p($.value)},null):void 0])}})}),ol({isFocused:k,isPristine:u,menu:f,search:V,selectionIndex:b,filteredItems:U,select:g},h)}}),Me=Symbol.for("vuetify:v-slider");function Jl(e,a,c){const o=c==="vertical",p=a.getBoundingClientRect(),h="touches"in e?e.touches[0]:e;return o?h.clientY-(p.top+p.height/2):h.clientX-(p.left+p.width/2)}function Ql(e,a){return"touches"in e&&e.touches.length?e.touches[0][a]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][a]:e[a]}const et=Ve({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...rl(),...dl({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),lt=e=>{const a=m(()=>parseFloat(e.min)),c=m(()=>parseFloat(e.max)),o=m(()=>+e.step>0?parseFloat(e.step):0),p=m(()=>Math.max(Pe(o.value),Pe(a.value)));function h(k){if(k=parseFloat(k),o.value<=0)return k;const u=Ke(k,a.value,c.value),w=a.value%o.value,P=Math.round((u-w)/o.value)*o.value+w;return parseFloat(Math.min(P,c.value).toFixed(p.value))}return{min:a,max:c,step:o,decimals:p,roundValue:h}},tt=e=>{let{props:a,steps:c,onSliderStart:o,onSliderMove:p,onSliderEnd:h,getActiveThumb:k}=e;const{isRtl:u}=_e(),w=q(a,"reverse"),P=m(()=>a.direction==="vertical"),D=m(()=>P.value!==w.value),{min:_,max:f,step:b,decimals:E,roundValue:B}=c,$=m(()=>parseInt(a.thumbSize,10)),j=m(()=>parseInt(a.tickSize,10)),K=m(()=>parseInt(a.trackSize,10)),z=m(()=>(f.value-_.value)/b.value),M=q(a,"disabled"),i=m(()=>a.error||a.disabled?void 0:a.thumbColor??a.color),n=m(()=>a.error||a.disabled?void 0:a.trackColor??a.color),s=m(()=>a.error||a.disabled?void 0:a.trackFillColor??a.color),F=ie(!1),C=ie(0),L=N(),V=N();function A(r){var d;const g=a.direction==="vertical",Se=g?"top":"left",we=g?"height":"width",Ae=g?"clientY":"clientX",{[Se]:ge,[we]:t}=(d=L.value)==null?void 0:d.$el.getBoundingClientRect(),v=Ql(r,Ae);let y=Math.min(Math.max((v-ge-C.value)/t,0),1)||0;return(g?D.value:D.value!==u.value)&&(y=1-y),B(_.value+y*(f.value-_.value))}const U=r=>{h({value:A(r)}),F.value=!1,C.value=0},W=r=>{V.value=k(r),V.value&&(V.value.focus(),F.value=!0,V.value.contains(r.target)?C.value=Jl(r,V.value,a.direction):(C.value=0,p({value:A(r)})),o({value:A(r)}))},H={passive:!0,capture:!0};function X(r){p({value:A(r)})}function G(r){r.stopPropagation(),r.preventDefault(),U(r),window.removeEventListener("mousemove",X,H),window.removeEventListener("mouseup",G)}function J(r){var g;U(r),window.removeEventListener("touchmove",X,H),(g=r.target)==null||g.removeEventListener("touchend",J)}function le(r){var g;W(r),window.addEventListener("touchmove",X,H),(g=r.target)==null||g.addEventListener("touchend",J,{passive:!1})}function R(r){r.preventDefault(),W(r),window.addEventListener("mousemove",X,H),window.addEventListener("mouseup",G,{passive:!1})}const T=r=>{const g=(r-_.value)/(f.value-_.value)*100;return Ke(isNaN(g)?0:g,0,100)},Q=q(a,"showTicks"),te=m(()=>Q.value?a.ticks?Array.isArray(a.ticks)?a.ticks.map(r=>({value:r,position:T(r),label:r.toString()})):Object.keys(a.ticks).map(r=>({value:parseFloat(r),position:T(parseFloat(r)),label:a.ticks[r]})):z.value!==1/0?cl(z.value+1).map(r=>{const g=_.value+r*b.value;return{value:g,position:T(g)}}):[]:[]),re=m(()=>te.value.some(r=>{let{label:g}=r;return!!g})),de={activeThumbRef:V,color:q(a,"color"),decimals:E,disabled:M,direction:q(a,"direction"),elevation:q(a,"elevation"),hasLabels:re,isReversed:w,indexFromEnd:D,min:_,max:f,mousePressed:F,numTicks:z,onSliderMousedown:R,onSliderTouchstart:le,parsedTicks:te,parseMouseMove:A,position:T,readonly:q(a,"readonly"),rounded:q(a,"rounded"),roundValue:B,showTicks:Q,startOffset:C,step:b,thumbSize:$,thumbColor:i,thumbLabel:q(a,"thumbLabel"),ticks:q(a,"ticks"),tickSize:j,trackColor:n,trackContainerRef:L,trackFillColor:s,trackSize:K,vertical:P};return vl(Me,de),de},at=Ve({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...Ze()},"VSliderThumb"),nt=ye()({name:"VSliderThumb",directives:{Ripple:ml},props:at(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:c,emit:o}=a;const p=je(Me),{isRtl:h,rtlClasses:k}=_e();if(!p)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:u,step:w,disabled:P,thumbSize:D,thumbLabel:_,direction:f,isReversed:b,vertical:E,readonly:B,elevation:$,mousePressed:j,decimals:K,indexFromEnd:z}=p,M=m(()=>P.value?void 0:$.value),{elevationClasses:i}=fl(M),{textColorClasses:n,textColorStyles:s}=$e(u),{pageup:F,pagedown:C,end:L,home:V,left:A,right:U,down:W,up:H}=hl,X=[F,C,L,V,A,U,W,H],G=m(()=>w.value?[1,2,3]:[1,5,10]);function J(R,T){if(!X.includes(R.key))return;R.preventDefault();const Q=w.value||.1,te=(e.max-e.min)/Q;if([A,U,W,H].includes(R.key)){const de=(E.value?[h.value?A:U,b.value?W:H]:z.value!==h.value?[A,H]:[U,H]).includes(R.key)?1:-1,r=R.shiftKey?2:R.ctrlKey?1:0;T=T+de*Q*G.value[r]}else if(R.key===V)T=e.min;else if(R.key===L)T=e.max;else{const re=R.key===C?1:-1;T=T-re*Q*(te>100?te/10:10)}return Math.max(e.min,Math.min(e.max,T))}function le(R){const T=J(R,e.modelValue);T!=null&&o("update:modelValue",T)}return ke(()=>{const R=se(z.value?100-e.position:e.position,"%");return l("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&j.value},e.class,k.value],style:[{"--v-slider-thumb-position":R,"--v-slider-thumb-size":se(D.value)},e.style],role:"slider",tabindex:P.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!B.value,"aria-orientation":f.value,onKeydown:B.value?void 0:le},[l("div",{class:["v-slider-thumb__surface",n.value,i.value],style:{...s.value}},null),Re(l("div",{class:["v-slider-thumb__ripple",n.value],style:s.value},null),[[bl("ripple"),e.ripple,null,{circle:!0,center:!0}]]),l(Vl,{origin:"bottom center"},{default:()=>{var T;return[Re(l("div",{class:"v-slider-thumb__label-container"},[l("div",{class:["v-slider-thumb__label"]},[l("div",null,[((T=c["thumb-label"])==null?void 0:T.call(c,{modelValue:e.modelValue}))??e.modelValue.toFixed(w.value?K.value:1)])])]),[[gl,_.value&&e.focused||_.value==="always"]])]}})])}),{}}}),ut=Ve({start:{type:Number,required:!0},stop:{type:Number,required:!0},...Ze()},"VSliderTrack"),ot=ye()({name:"VSliderTrack",props:ut(),emits:{},setup(e,a){let{slots:c}=a;const o=je(Me);if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:p,parsedTicks:h,rounded:k,showTicks:u,tickSize:w,trackColor:P,trackFillColor:D,trackSize:_,vertical:f,min:b,max:E,indexFromEnd:B}=o,{roundedClasses:$}=pl(k),{backgroundColorClasses:j,backgroundColorStyles:K}=De(D),{backgroundColorClasses:z,backgroundColorStyles:M}=De(P),i=m(()=>`inset-${f.value?"block":"inline"}-${B.value?"end":"start"}`),n=m(()=>f.value?"height":"width"),s=m(()=>({[i.value]:"0%",[n.value]:"100%"})),F=m(()=>e.stop-e.start),C=m(()=>({[i.value]:se(e.start,"%"),[n.value]:se(F.value,"%")})),L=m(()=>u.value?(f.value?h.value.slice().reverse():h.value).map((A,U)=>{var H;const W=A.value!==b.value&&A.value!==E.value?se(A.position,"%"):void 0;return l("div",{key:A.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":A.position>=e.start&&A.position<=e.stop,"v-slider-track__tick--first":A.value===b.value,"v-slider-track__tick--last":A.value===E.value}],style:{[i.value]:W}},[(A.label||c["tick-label"])&&l("div",{class:"v-slider-track__tick-label"},[((H=c["tick-label"])==null?void 0:H.call(c,{tick:A,index:U}))??A.label])])}):[]);return ke(()=>l("div",{class:["v-slider-track",$.value,e.class],style:[{"--v-slider-track-size":se(_.value),"--v-slider-tick-size":se(w.value)},e.style]},[l("div",{class:["v-slider-track__background",z.value,{"v-slider-track__background--opacity":!!p.value||!D.value}],style:{...s.value,...M.value}},null),l("div",{class:["v-slider-track__fill",j.value],style:{...C.value,...K.value}},null),u.value&&l("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":u.value==="always"}]},[L.value])])),{}}}),it=Ve({...$l(),...et(),...Kl(),modelValue:{type:[Number,String],default:0}},"VSlider"),st=ye()({name:"VSlider",props:it(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,a){let{slots:c,emit:o}=a;const p=N(),{rtlClasses:h}=_e(),k=lt(e),u=xe(e,"modelValue",void 0,n=>k.roundValue(n??k.min.value)),{min:w,max:P,mousePressed:D,roundValue:_,onSliderMousedown:f,onSliderTouchstart:b,trackContainerRef:E,position:B,hasLabels:$,readonly:j}=tt({props:e,steps:k,onSliderStart:()=>{o("start",u.value)},onSliderEnd:n=>{let{value:s}=n;const F=_(s);u.value=F,o("end",F)},onSliderMove:n=>{let{value:s}=n;return u.value=_(s)},getActiveThumb:()=>{var n;return(n=p.value)==null?void 0:n.$el}}),{isFocused:K,focus:z,blur:M}=Zl(e),i=m(()=>B(u.value));return ke(()=>{const n=Oe.filterProps(e),s=!!(e.label||c.label||c.prepend);return l(Oe,oe({class:["v-slider",{"v-slider--has-labels":!!c["tick-label"]||$.value,"v-slider--focused":K.value,"v-slider--pressed":D.value,"v-slider--disabled":e.disabled},h.value,e.class],style:e.style},n,{focused:K.value}),{...c,prepend:s?F=>{var C,L;return l(fe,null,[((C=c.label)==null?void 0:C.call(c,F))??(e.label?l(jl,{id:F.id.value,class:"v-slider__label",text:e.label},null):void 0),(L=c.prepend)==null?void 0:L.call(c,F)])}:void 0,default:F=>{let{id:C,messagesId:L}=F;return l("div",{class:"v-slider__container",onMousedown:j.value?void 0:f,onTouchstartPassive:j.value?void 0:b},[l("input",{id:C.value,name:e.name||C.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:u.value},null),l(ot,{ref:E,start:0,stop:i.value},{"tick-label":c["tick-label"]}),l(nt,{ref:p,"aria-describedby":L.value,focused:K.value,min:w.value,max:P.value,modelValue:u.value,"onUpdate:modelValue":V=>u.value=V,position:i.value,elevation:e.elevation,onFocus:z,onBlur:M,ripple:e.ripple},{"thumb-label":c["thumb-label"]})])}})}),{}}}),yt=Cl({__name:"form",props:{item:{type:Object,default:()=>({name:"",weight:1,amount:1,image:null})}},emits:["close-dialog"],async setup(e){let a,c;const o=N(null);N("");const p=N(!1),h=N(null),u=N({...e.item}),w=N(null),P=yl(),D=kl(),_=q(D,"entities");[a,c]=Sl(()=>D.fetch()),await a,c();const f=N("M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7A4,4 0 0,0 12,3A4,4 0 0,0 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z"),b=N(1);m(()=>u.value.weight>=1e3?(u.value.weight/1e3).toFixed(2):u.value.weight.toFixed(2));const E=M=>{switch(f.value=M>=1e3?"M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5M6,11V19H8V16.5L9,17.5V19H11V17L9,15L11,13V11H9V12.5L8,13.5V11H6M15,11C13.89,11 13,11.89 13,13V17C13,18.11 13.89,19 15,19H18V14H16V17H15V13H18V11H15Z":"M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7A4,4 0 0,0 12,3A4,4 0 0,0 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z",f.value){case"M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5M6,11V19H8V16.5L9,17.5V19H11V17L9,15L11,13V11H9V12.5L8,13.5V11H6M15,11C13.89,11 13,11.89 13,13V17C13,18.11 13.89,19 15,19H18V14H16V17H15V13H18V11H15Z":b.value=.1;break;case"M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7A4,4 0 0,0 12,3A4,4 0 0,0 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z":b.value=1;break}},B=()=>{o.value.click()},$=M=>{const i=M.target.files[0];if(i){const n=new FileReader;n.onload=s=>{h.value=s.target.result},n.readAsDataURL(i)}else h.value=null},j=async()=>{try{if(u.value.category=u.value.category.id,w.value){const M=await We("images",Il(),w.value);u.value.image=M.path}if(u.value.id)await P.update(u.value);else{const M={...u.value};await P.create(M)}ze("/items")}catch(M){console.error("An error occurred while saving the item:",M)}};async function K(){p.value=!0}async function z(){await P.delete(u.value.id),ze("/items")}return ce(()=>u.value.weight,E),wl(()=>{E(u.value.weight)}),(M,i)=>{const n=qe;return Ee(),Ne(Wl,null,{default:x(()=>[l(be,{modelValue:I(u).name,"onUpdate:modelValue":i[0]||(i[0]=s=>I(u).name=s),label:"Name"},null,8,["modelValue"]),l(Ue,{class:Al(I(u).image?"d-none":""),modelValue:I(u).image,"onUpdate:modelValue":i[1]||(i[1]=s=>I(u).image=s),label:"New Image",accept:"image/*","show-size":"","prepend-icon":"M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",clearable:"",onChange:$},null,8,["class","modelValue"]),l(Ue,{class:"d-none",ref_key:"fileInput",ref:o,modelValue:I(w),"onUpdate:modelValue":i[2]||(i[2]=s=>Be(w)?w.value=s:null),label:"Change Image",accept:"image/*","show-size":"","prepend-icon":"M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",clearable:"",onChange:$},null,8,["modelValue"]),l(Rl,null,{default:x(()=>[I(h)?xl("",!0):(Ee(),Ne(n,{key:0,onClick:B,"image-path":I(u).image},null,8,["image-path"])),l(Hl,{"v-if":I(h),src:I(h),onClick:B},null,8,["v-if","src"])]),_:1}),l(Ce,null,{default:x(()=>[l(ue,null,{default:x(()=>[l(Xl,{modelValue:I(u).category,"onUpdate:modelValue":i[3]||(i[3]=s=>I(u).category=s),items:I(_),label:"Category","item-title":"name","item-value":"id"},{"prepend-inner":x(()=>[l(He,null,{default:x(()=>[ee("M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z")]),_:1})]),_:1},8,["modelValue","items"])]),_:1})]),_:1}),l(Ce,null,{default:x(()=>[l(ue,{cols:"12"},{default:x(()=>[l(be,{"prepend-inner-icon":"M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7A4,4 0 0,0 12,3A4,4 0 0,0 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z",modelValue:I(u).weight,"onUpdate:modelValue":i[4]||(i[4]=s=>I(u).weight=s),label:"Weight",type:"number",step:"0.1",min:"0.1"},null,8,["modelValue"])]),_:1})]),_:1}),l(Ce,null,{default:x(()=>[l(ue,{cols:"10"},{default:x(()=>[l(st,{modelValue:I(u).amount,"onUpdate:modelValue":i[5]||(i[5]=s=>I(u).amount=s),label:"Amount",min:"1",max:"50",step:"1"},null,8,["modelValue"])]),_:1}),l(ue,{cols:"2"},{default:x(()=>[_l("span",null,[l(be,{modelValue:I(u).amount,"onUpdate:modelValue":i[6]||(i[6]=s=>I(u).amount=s),"append-inner-icon":"M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z"},null,8,["modelValue"])])]),_:1})]),_:1}),l(Ce,{justify:"end"},{default:x(()=>[l(ue,{cols:"auto"},{default:x(()=>[l(me,{onClick:i[7]||(i[7]=s=>K())},{default:x(()=>[ee("Delete")]),_:1})]),_:1}),l(ue,{cols:"auto"},{default:x(()=>[l(me,{onClick:i[8]||(i[8]=s=>M.$router.back())},{default:x(()=>[ee("Cancel")]),_:1})]),_:1}),l(ue,{cols:"auto"},{default:x(()=>[l(me,{onClick:i[9]||(i[9]=s=>j())},{default:x(()=>[ee("Save")]),_:1})]),_:1})]),_:1}),l(Ml,{modelValue:I(p),"onUpdate:modelValue":i[12]||(i[12]=s=>Be(p)?p.value=s:null),"max-width":"290"},{default:x(()=>[l(Fl,null,{default:x(()=>[l(Ll,null,{default:x(()=>[ee("Are you sure you want to delete this item?")]),_:1}),l(Tl,null,{default:x(()=>[l(me,{onClick:i[10]||(i[10]=s=>p.value=!1)},{default:x(()=>[ee("Cancel")]),_:1}),l(me,{onClick:i[11]||(i[11]=s=>z())},{default:x(()=>[ee("Delete")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{yt as _};
