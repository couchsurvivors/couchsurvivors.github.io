import{m as xe,V as fe}from"./Cn_TsQeb.js";import{a6 as U,ap as ye,ab as ee,ac as G,c as A,af as te,a7 as be,A as g,aj as L,ar as Ve,ad as pe,X as H,K as W,aC as Pe,T as _,am as re,r as K,bg as ke,aJ as oe,bh as Ce,Z as we,b4 as se,bi as Fe,aH as Te,bj as Me,al as Re,ae as Ae,aL as Y,o as Oe,bk as Be,bl as De,aa as Le,bm as _e,az as Ke,b0 as Ee,b2 as He,b5 as Ue,I as je,L as ve,b6 as Ne,M as me,b7 as ze,b8 as $e,C as qe,ba as We,aP as ce,bn as he,R as q,aZ as Xe}from"./BvNODZbr.js";import{m as Ze,V as ge}from"./DSPh76sU.js";import{V as Je}from"./evFPe8c0.js";const Qe=U({indeterminate:Boolean,indeterminateIcon:{type:ye,default:"$checkboxIndeterminate"},...Ze({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Ye=ee()({name:"VCheckboxBtn",props:Qe(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{slots:t}=s;const u=G(e,"indeterminate"),r=G(e,"modelValue");function d(n){u.value&&(u.value=!1)}const y=A(()=>u.value?e.indeterminateIcon:e.falseIcon),o=A(()=>u.value?e.indeterminateIcon:e.trueIcon);return te(()=>{const n=be(ge.filterProps(e),["modelValue"]);return g(ge,L(n,{modelValue:r.value,"onUpdate:modelValue":[f=>r.value=f,d],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:y.value,trueIcon:o.value,"aria-checked":u.value?"mixed":void 0}),t)}),{}}}),Ge=U({renderless:Boolean,...Ve()},"VVirtualScrollItem"),et=ee()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Ge(),emits:{"update:height":e=>!0},setup(e,s){let{attrs:t,emit:u,slots:r}=s;const{resizeRef:d,contentRect:y}=pe(void 0,"border");H(()=>{var o;return(o=y.value)==null?void 0:o.height},o=>{o!=null&&u("update:height",o)}),te(()=>{var o,n;return e.renderless?g(W,null,[(o=r.default)==null?void 0:o.call(r,{itemRef:d})]):g("div",L({ref:d,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(n=r.default)==null?void 0:n.call(r)])})}}),tt=-1,lt=1,ue=100,nt=U({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function at(e,s){const t=Pe(),u=_(0);re(()=>{u.value=parseFloat(e.itemHeight||0)});const r=_(0),d=_(Math.ceil((parseInt(e.height)||t.height.value)/(u.value||16))||1),y=_(0),o=_(0),n=K(),f=K();let x=0;const{resizeRef:P,contentRect:c}=pe();re(()=>{P.value=n.value});const v=A(()=>{var l;return n.value===document.documentElement?t.height.value:((l=c.value)==null?void 0:l.height)||parseInt(e.height)||0}),V=A(()=>!!(n.value&&f.value&&v.value&&u.value));let w=Array.from({length:s.value.length}),m=Array.from({length:s.value.length});const p=_(0);let C=-1;function B(l){return w[l]||u.value}const O=Ce(()=>{const l=performance.now();m[0]=0;const i=s.value.length;for(let S=1;S<=i-1;S++)m[S]=(m[S-1]||0)+B(S-1);p.value=Math.max(p.value,performance.now()-l)},p),X=H(V,l=>{l&&(X(),x=f.value.offsetTop,O.immediate(),D(),~C&&we(()=>{se&&window.requestAnimationFrame(()=>{Q(C),C=-1})}))});ke(()=>{O.clear()});function le(l,i){const S=w[l],k=u.value;u.value=k?Math.min(u.value,i):i,(S!==i||k!==u.value)&&(w[l]=i,O())}function F(l){return l=oe(l,0,s.value.length-1),m[l]||0}function Z(l){return ot(m,l)}let j=0,E=0,$=0;H(v,(l,i)=>{i&&(D(),l<i&&requestAnimationFrame(()=>{E=0,D()}))});function ne(){if(!n.value||!f.value)return;const l=n.value.scrollTop,i=performance.now();i-$>500?(E=Math.sign(l-j),x=f.value.offsetTop):E=l-j,j=l,$=i,D()}function N(){!n.value||!f.value||(E=0,$=0,D())}let J=-1;function D(){cancelAnimationFrame(J),J=requestAnimationFrame(ae)}function ae(){if(!n.value||!v.value)return;const l=j-x,i=Math.sign(E),S=Math.max(0,l-ue),k=oe(Z(S),0,s.value.length),h=l+v.value+ue,I=oe(Z(h)+1,k+1,s.value.length);if((i!==tt||k<r.value)&&(i!==lt||I>d.value)){const b=F(r.value)-F(k),T=F(I)-F(d.value);Math.max(b,T)>ue?(r.value=k,d.value=I):(k<=0&&(r.value=k),I>=s.value.length&&(d.value=I))}y.value=F(r.value),o.value=F(s.value.length)-F(d.value)}function Q(l){const i=F(l);!n.value||l&&!i?C=l:n.value.scrollTop=i}const a=A(()=>s.value.slice(r.value,d.value).map((l,i)=>({raw:l,index:i+r.value})));return H(s,()=>{w=Array.from({length:s.value.length}),m=Array.from({length:s.value.length}),O.immediate(),D()},{deep:!0}),{containerRef:n,markerRef:f,computedItems:a,paddingTop:y,paddingBottom:o,scrollToIndex:Q,handleScroll:ne,handleScrollend:N,handleItemResize:le}}function ot(e,s){let t=e.length-1,u=0,r=0,d=null,y=-1;if(e[t]<s)return t;for(;u<=t;)if(r=u+t>>1,d=e[r],d>s)t=r-1;else if(d<s)y=r,u=r+1;else return d===s?r:u;return y}const ut=U({items:{type:Array,default:()=>[]},renderless:Boolean,...nt(),...Ve(),...Fe()},"VVirtualScroll"),rt=ee()({name:"VVirtualScroll",props:ut(),setup(e,s){let{slots:t}=s;const u=Te("VVirtualScroll"),{dimensionStyles:r}=Me(e),{containerRef:d,markerRef:y,handleScroll:o,handleScrollend:n,handleItemResize:f,scrollToIndex:x,paddingTop:P,paddingBottom:c,computedItems:v}=at(e,Re(e,"items"));return Ae(()=>e.renderless,()=>{function V(){var p,C;const m=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";d.value===document.documentElement?(document[m]("scroll",o,{passive:!0}),document[m]("scrollend",n)):((p=d.value)==null||p[m]("scroll",o,{passive:!0}),(C=d.value)==null||C[m]("scrollend",n))}Oe(()=>{d.value=Be(u.vnode.el,!0),V(!0)}),ke(V)}),te(()=>{const V=v.value.map(w=>g(et,{key:w.index,renderless:e.renderless,"onUpdate:height":m=>f(w.index,m)},{default:m=>{var p;return(p=t.default)==null?void 0:p.call(t,{item:w.raw,index:w.index,...m})}}));return e.renderless?g(W,null,[g("div",{ref:y,class:"v-virtual-scroll__spacer",style:{paddingTop:Y(P.value)}},null),V,g("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:Y(c.value)}},null)]):g("div",{ref:d,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:n,style:[r.value,e.style]},[g("div",{ref:y,class:"v-virtual-scroll__container",style:{paddingTop:Y(P.value),paddingBottom:Y(c.value)}},[V])])}),{scrollToIndex:x}}});function st(e,s){const t=_(!1);let u;function r(o){cancelAnimationFrame(u),t.value=!0,u=requestAnimationFrame(()=>{u=requestAnimationFrame(()=>{t.value=!1})})}async function d(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(t.value){const n=H(t,()=>{n(),o()})}else o()})}async function y(o){var x,P;if(o.key==="Tab"&&((x=s.value)==null||x.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const n=(P=e.value)==null?void 0:P.$el;if(!n)return;(o.key==="Home"||o.key==="End")&&n.scrollTo({top:o.key==="Home"?0:n.scrollHeight,behavior:"smooth"}),await d();const f=n.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const c=n.getBoundingClientRect().top;for(const v of f)if(v.getBoundingClientRect().top>=c){v.focus();break}}else{const c=n.getBoundingClientRect().bottom;for(const v of[...f].reverse())if(v.getBoundingClientRect().bottom<=c){v.focus();break}}}return{onListScroll:r,onListKeydown:y}}const ct=U({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:ye,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...De({itemChildren:!1})},"Select"),it=U({...ct(),...be(xe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Le({transition:{component:_e}})},"VSelect"),yt=ee()({name:"VSelect",props:it(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,s){let{slots:t}=s;const{t:u}=Ke(),r=K(),d=K(),y=K(),o=G(e,"menu"),n=A({get:()=>o.value,set:a=>{var l;o.value&&!a&&((l=d.value)!=null&&l.ΨopenChildren)||(o.value=a)}}),{items:f,transformIn:x,transformOut:P}=Ee(e),c=G(e,"modelValue",[],a=>x(a===null?[null]:ce(a)),a=>{const l=P(a);return e.multiple?l:l[0]??null}),v=A(()=>typeof e.counterValue=="function"?e.counterValue(c.value):typeof e.counterValue=="number"?e.counterValue:c.value.length),V=He(),w=A(()=>c.value.map(a=>a.value)),m=_(!1),p=A(()=>n.value?e.closeText:e.openText);let C="",B;const O=A(()=>e.hideSelected?f.value.filter(a=>!c.value.some(l=>l===a)):f.value),X=A(()=>e.hideNoData&&!O.value.length||e.readonly||(V==null?void 0:V.isReadonly.value)),le=A(()=>{var a;return{...e.menuProps,activatorProps:{...((a=e.menuProps)==null?void 0:a.activatorProps)||{},"aria-haspopup":"listbox"}}}),F=K(),{onListScroll:Z,onListKeydown:j}=st(F,r);function E(a){e.openOnClear&&(n.value=!0)}function $(){X.value||(n.value=!n.value)}function ne(a){var h,I;if(!a.key||e.readonly||V!=null&&V.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(n.value=!0),["Escape","Tab"].includes(a.key)&&(n.value=!1),a.key==="Home"?(h=F.value)==null||h.focus("first"):a.key==="End"&&((I=F.value)==null||I.focus("last"));const l=1e3;function i(b){const T=b.key.length===1,M=!b.ctrlKey&&!b.metaKey&&!b.altKey;return T&&M}if(e.multiple||!i(a))return;const S=performance.now();S-B>l&&(C=""),C+=a.key.toLowerCase(),B=S;const k=f.value.find(b=>b.title.toLowerCase().startsWith(C));if(k!==void 0){c.value=[k];const b=O.value.indexOf(k);se&&window.requestAnimationFrame(()=>{var T;b>=0&&((T=y.value)==null||T.scrollToIndex(b))})}}function N(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!a.props.disabled)if(e.multiple){const i=c.value.findIndex(k=>e.valueComparator(k.value,a.value)),S=l??!~i;if(~i){const k=S?[...c.value,a]:[...c.value];k.splice(i,1),c.value=k}else S&&(c.value=[...c.value,a])}else{const i=l!==!1;c.value=i?[a]:[],we(()=>{n.value=!1})}}function J(a){var l;(l=F.value)!=null&&l.$el.contains(a.relatedTarget)||(n.value=!1)}function D(){var a;m.value&&((a=r.value)==null||a.focus())}function ae(a){m.value=!0}function Q(a){if(a==null)c.value=[];else if(he(r.value,":autofill")||he(r.value,":-webkit-autofill")){const l=f.value.find(i=>i.title===a);l&&N(l)}else r.value&&(r.value.value="")}return H(n,()=>{if(!e.hideSelected&&n.value&&c.value.length){const a=O.value.findIndex(l=>c.value.some(i=>e.valueComparator(i.value,l.value)));se&&window.requestAnimationFrame(()=>{var l;a>=0&&((l=y.value)==null||l.scrollToIndex(a))})}}),H(()=>e.items,(a,l)=>{n.value||m.value&&!l.length&&a.length&&(n.value=!0)}),te(()=>{const a=!!(e.chips||t.chip),l=!!(!e.hideNoData||O.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),i=c.value.length>0,S=fe.filterProps(e),k=i||!m.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return g(fe,L({ref:r},S,{modelValue:c.value.map(h=>h.props.value).join(", "),"onUpdate:modelValue":Q,focused:m.value,"onUpdate:focused":h=>m.value=h,validationValue:c.externalValue,counterValue:v.value,dirty:i,class:["v-select",{"v-select--active-menu":n.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":c.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:k,"onClick:clear":E,"onMousedown:control":$,onBlur:J,onKeydown:ne,"aria-label":u(p.value),title:u(p.value)}),{...t,default:()=>g(W,null,[g(Ue,L({ref:d,modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,activator:"parent",contentClass:"v-select__content",disabled:X.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:D},le.value),{default:()=>[l&&g(je,L({ref:F,selected:w.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:h=>h.preventDefault(),onKeydown:j,onFocusin:ae,onScrollPassive:Z,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var h,I,b;return[(h=t["prepend-item"])==null?void 0:h.call(t),!O.value.length&&!e.hideNoData&&(((I=t["no-data"])==null?void 0:I.call(t))??g(ve,{title:u(e.noDataText)},null)),g(rt,{ref:y,renderless:!0,items:O.value},{default:T=>{var de;let{item:M,index:z,itemRef:R}=T;const ie=L(M.props,{ref:R,key:z,onClick:()=>N(M,null)});return((de=t.item)==null?void 0:de.call(t,{item:M,index:z,props:ie}))??g(ve,L(ie,{role:"option"}),{prepend:Se=>{let{isSelected:Ie}=Se;return g(W,null,[e.multiple&&!e.hideSelected?g(Ye,{key:M.value,modelValue:Ie,ripple:!1,tabindex:"-1"},null):void 0,M.props.prependAvatar&&g(Ne,{image:M.props.prependAvatar},null),M.props.prependIcon&&g(me,{icon:M.props.prependIcon},null)])}})}}),(b=t["append-item"])==null?void 0:b.call(t)]}})]}),c.value.map((h,I)=>{function b(R){R.stopPropagation(),R.preventDefault(),N(h,!1)}const T={"onClick:close":b,onKeydown(R){R.key!=="Enter"&&R.key!==" "||(R.preventDefault(),R.stopPropagation(),b(R))},onMousedown(R){R.preventDefault(),R.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},M=a?!!t.chip:!!t.selection,z=M?ze(a?t.chip({item:h,index:I,props:T}):t.selection({item:h,index:I})):void 0;if(!(M&&!z))return g("div",{key:h.value,class:"v-select__selection"},[a?t.chip?g($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:h.title}}},{default:()=>[z]}):g(Je,L({key:"chip",closable:e.closableChips,size:"small",text:h.title,disabled:h.props.disabled},T),null):z??g("span",{class:"v-select__selection-text"},[h.title,e.multiple&&I<c.value.length-1&&g("span",{class:"v-select__selection-comma"},[qe(",")])])])})]),"append-inner":function(){var T;for(var h=arguments.length,I=new Array(h),b=0;b<h;b++)I[b]=arguments[b];return g(W,null,[(T=t["append-inner"])==null?void 0:T.call(t,...I),e.menuIcon?g(me,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),We({isFocused:m,menu:n,select:N},r)}}),dt=(e,s,t)=>e==null||s==null?-1:e.toString().toLocaleLowerCase().indexOf(s.toString().toLocaleLowerCase()),bt=U({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function ft(e,s,t){var o;const u=[],r=(t==null?void 0:t.default)??dt,d=t!=null&&t.filterKeys?ce(t.filterKeys):!1,y=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return u;e:for(let n=0;n<e.length;n++){const[f,x=f]=ce(e[n]),P={},c={};let v=-1;if(s&&!(t!=null&&t.noFilter)){if(typeof f=="object"){const m=d||Object.keys(x);for(const p of m){const C=Xe(x,p),B=(o=t==null?void 0:t.customKeyFilter)==null?void 0:o[p];if(v=B?B(C,s,f):r(C,s,f),v!==-1&&v!==!1)B?P[p]=v:c[p]=v;else if((t==null?void 0:t.filterMode)==="every")continue e}}else v=r(f,s,f),v!==-1&&v!==!1&&(c.title=v);const V=Object.keys(c).length,w=Object.keys(P).length;if(!V&&!w||(t==null?void 0:t.filterMode)==="union"&&w!==y&&!V||(t==null?void 0:t.filterMode)==="intersection"&&(w!==y||!V))continue}u.push({index:n,matches:{...c,...P}})}return u}function Vt(e,s,t,u){const r=K([]),d=K(new Map),y=A(()=>u!=null&&u.transform?q(s).map(n=>[n,u.transform(n)]):q(s));re(()=>{const n=typeof t=="function"?t():q(t),f=typeof n!="string"&&typeof n!="number"?"":String(n),x=ft(y.value,f,{customKeyFilter:{...e.customKeyFilter,...q(u==null?void 0:u.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),P=q(s),c=[],v=new Map;x.forEach(V=>{let{index:w,matches:m}=V;const p=P[w];c.push(p),v.set(p.value,m)}),r.value=c,d.value=v});function o(n){return d.value.get(n.value)}return{filteredItems:r,filteredMatches:d,getMatches:o}}export{yt as V,Ye as a,ct as b,st as c,rt as d,bt as m,Vt as u};
