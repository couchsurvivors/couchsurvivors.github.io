import{m as we,V as ie}from"./56hwsDLC.js";import{F as N,O as he,I as Z,aG as J,c as R,L as ee,aC as pe,A as v,a1 as _,G as ge,aH as ye,as as E,ae as z,aU as Ie,ap as L,aL as ce,r as K,bO as Ve,aY as ae,bP as Pe,au as be,bh as ue,bQ as xe,aX as Ce,bR as Te,a7 as Re,aI as Ae,a_ as Q,o as De,bS as Be,bT as Fe,aF as Oe,bU as _e,aS as Le,be as Me,bi as Ee,ac as He,ah as de,bj as Ue,S as fe,bk as qe,bl as Ke,C as Ne,bn as $e,b2 as ze,bV as ve}from"./ePA6vU-w.js";import{u as je}from"./p5HxD3EO.js";import{m as We,V as me}from"./DUmB970m.js";import{V as Ge}from"./CzVGPwpd.js";const Xe=N({indeterminate:Boolean,indeterminateIcon:{type:he,default:"$checkboxIndeterminate"},...We({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Ye=Z()({name:"VCheckboxBtn",props:Xe(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,c){let{slots:n}=c;const r=J(e,"indeterminate"),u=J(e,"modelValue");function d(a){r.value&&(r.value=!1)}const g=R(()=>r.value?e.indeterminateIcon:e.falseIcon),o=R(()=>r.value?e.indeterminateIcon:e.trueIcon);return ee(()=>{const a=pe(me.filterProps(e),["modelValue"]);return v(me,_(a,{modelValue:u.value,"onUpdate:modelValue":[y=>u.value=y,d],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:g.value,trueIcon:o.value,"aria-checked":r.value?"mixed":void 0}),n)}),{}}}),Qe=N({renderless:Boolean,...ge()},"VVirtualScrollItem"),Je=Z()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Qe(),emits:{"update:height":e=>!0},setup(e,c){let{attrs:n,emit:r,slots:u}=c;const{resizeRef:d,contentRect:g}=ye(void 0,"border");E(()=>{var o;return(o=g.value)==null?void 0:o.height},o=>{o!=null&&r("update:height",o)}),ee(()=>{var o,a;return e.renderless?v(z,null,[(o=u.default)==null?void 0:o.call(u,{itemRef:d})]):v("div",_({ref:d,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(a=u.default)==null?void 0:a.call(u)])})}}),Ze=-1,et=1,oe=100,tt=N({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function lt(e,c){const n=Ie(),r=L(0);ce(()=>{r.value=parseFloat(e.itemHeight||0)});const u=L(0),d=L(Math.ceil((parseInt(e.height)||n.height.value)/(r.value||16))||1),g=L(0),o=L(0),a=K(),y=K();let B=0;const{resizeRef:F,contentRect:i}=ye();ce(()=>{F.value=a.value});const k=R(()=>{var t;return a.value===document.documentElement?n.height.value:((t=i.value)==null?void 0:t.height)||parseInt(e.height)||0}),S=R(()=>!!(a.value&&y.value&&k.value&&r.value));let C=Array.from({length:c.value.length}),m=Array.from({length:c.value.length});const T=L(0);let A=-1;function j(t){return C[t]||r.value}const D=Pe(()=>{const t=performance.now();m[0]=0;const s=c.value.length;for(let V=1;V<=s-1;V++)m[V]=(m[V-1]||0)+j(V-1);T.value=Math.max(T.value,performance.now()-t)},T),W=E(S,t=>{t&&(W(),B=y.value.offsetTop,D.immediate(),O(),~A&&be(()=>{ue&&window.requestAnimationFrame(()=>{Y(A),A=-1})}))});Ve(()=>{D.clear()});function te(t,s){const V=C[t],p=r.value;r.value=p?Math.min(r.value,s):s,(V!==s||p!==r.value)&&(C[t]=s,D())}function w(t){return t=ae(t,0,c.value.length-1),m[t]||0}function G(t){return nt(m,t)}let H=0,M=0,$=0;E(k,(t,s)=>{s&&(O(),t<s&&requestAnimationFrame(()=>{M=0,O()}))});function le(){if(!a.value||!y.value)return;const t=a.value.scrollTop,s=performance.now();s-$>500?(M=Math.sign(t-H),B=y.value.offsetTop):M=t-H,H=t,$=s,O()}function U(){!a.value||!y.value||(M=0,$=0,O())}let X=-1;function O(){cancelAnimationFrame(X),X=requestAnimationFrame(ne)}function ne(){if(!a.value||!k.value)return;const t=H-B,s=Math.sign(M),V=Math.max(0,t-oe),p=ae(G(V),0,c.value.length),f=t+k.value+oe,b=ae(G(f)+1,p+1,c.value.length);if((s!==Ze||p<u.value)&&(s!==et||b>d.value)){const h=w(u.value)-w(p),I=w(b)-w(d.value);Math.max(h,I)>oe?(u.value=p,d.value=b):(p<=0&&(u.value=p),b>=c.value.length&&(d.value=b))}g.value=w(u.value),o.value=w(c.value.length)-w(d.value)}function Y(t){const s=w(t);!a.value||t&&!s?A=t:a.value.scrollTop=s}const l=R(()=>c.value.slice(u.value,d.value).map((t,s)=>({raw:t,index:s+u.value})));return E(c,()=>{C=Array.from({length:c.value.length}),m=Array.from({length:c.value.length}),D.immediate(),O()},{deep:!0}),{containerRef:a,markerRef:y,computedItems:l,paddingTop:g,paddingBottom:o,scrollToIndex:Y,handleScroll:le,handleScrollend:U,handleItemResize:te}}function nt(e,c){let n=e.length-1,r=0,u=0,d=null,g=-1;if(e[n]<c)return n;for(;r<=n;)if(u=r+n>>1,d=e[u],d>c)n=u-1;else if(d<c)g=u,r=u+1;else return d===c?u:r;return g}const at=N({items:{type:Array,default:()=>[]},renderless:Boolean,...tt(),...ge(),...xe()},"VVirtualScroll"),ot=Z()({name:"VVirtualScroll",props:at(),setup(e,c){let{slots:n}=c;const r=Ce("VVirtualScroll"),{dimensionStyles:u}=Te(e),{containerRef:d,markerRef:g,handleScroll:o,handleScrollend:a,handleItemResize:y,scrollToIndex:B,paddingTop:F,paddingBottom:i,computedItems:k}=lt(e,Re(e,"items"));return Ae(()=>e.renderless,()=>{function S(){var T,A;const m=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";d.value===document.documentElement?(document[m]("scroll",o,{passive:!0}),document[m]("scrollend",a)):((T=d.value)==null||T[m]("scroll",o,{passive:!0}),(A=d.value)==null||A[m]("scrollend",a))}De(()=>{d.value=Be(r.vnode.el,!0),S(!0)}),Ve(S)}),ee(()=>{const S=k.value.map(C=>v(Je,{key:C.index,renderless:e.renderless,"onUpdate:height":m=>y(C.index,m)},{default:m=>{var T;return(T=n.default)==null?void 0:T.call(n,{item:C.raw,index:C.index,...m})}}));return e.renderless?v(z,null,[v("div",{ref:g,class:"v-virtual-scroll__spacer",style:{paddingTop:Q(F.value)}},null),S,v("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:Q(i.value)}},null)]):v("div",{ref:d,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:a,style:[u.value,e.style]},[v("div",{ref:g,class:"v-virtual-scroll__container",style:{paddingTop:Q(F.value),paddingBottom:Q(i.value)}},[S])])}),{scrollToIndex:B}}});function ut(e,c){const n=L(!1);let r;function u(o){cancelAnimationFrame(r),n.value=!0,r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{n.value=!1})})}async function d(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(n.value){const a=E(n,()=>{a(),o()})}else o()})}async function g(o){var B,F;if(o.key==="Tab"&&((B=c.value)==null||B.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const a=(F=e.value)==null?void 0:F.$el;if(!a)return;(o.key==="Home"||o.key==="End")&&a.scrollTo({top:o.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await d();const y=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const i=a.getBoundingClientRect().top;for(const k of y)if(k.getBoundingClientRect().top>=i){k.focus();break}}else{const i=a.getBoundingClientRect().bottom;for(const k of[...y].reverse())if(k.getBoundingClientRect().bottom<=i){k.focus();break}}}return{onListScroll:u,onListKeydown:g}}const st=N({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:he,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Fe({itemChildren:!1})},"Select"),rt=N({...st(),...pe(we({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Oe({transition:{component:_e}})},"VSelect"),mt=Z()({name:"VSelect",props:rt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:n}=c;const{t:r}=Le(),u=K(),d=K(),g=K(),o=J(e,"menu"),a=R({get:()=>o.value,set:l=>{var t;o.value&&!l&&((t=d.value)!=null&&t.ΨopenChildren)||(o.value=l)}}),{items:y,transformIn:B,transformOut:F}=Me(e),i=J(e,"modelValue",[],l=>B(l===null?[null]:ze(l)),l=>{const t=F(l);return e.multiple?t:t[0]??null}),k=R(()=>typeof e.counterValue=="function"?e.counterValue(i.value):typeof e.counterValue=="number"?e.counterValue:i.value.length),S=je(),C=R(()=>i.value.map(l=>l.value)),m=L(!1),T=R(()=>a.value?e.closeText:e.openText);let A="",j;const D=R(()=>e.hideSelected?y.value.filter(l=>!i.value.some(t=>t===l)):y.value),W=R(()=>e.hideNoData&&!D.value.length||e.readonly||(S==null?void 0:S.isReadonly.value)),te=R(()=>{var l;return{...e.menuProps,activatorProps:{...((l=e.menuProps)==null?void 0:l.activatorProps)||{},"aria-haspopup":"listbox"}}}),w=K(),{onListScroll:G,onListKeydown:H}=ut(w,u);function M(l){e.openOnClear&&(a.value=!0)}function $(){W.value||(a.value=!a.value)}function le(l){var f,b;if(!l.key||e.readonly||S!=null&&S.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(a.value=!0),["Escape","Tab"].includes(l.key)&&(a.value=!1),l.key==="Home"?(f=w.value)==null||f.focus("first"):l.key==="End"&&((b=w.value)==null||b.focus("last"));const t=1e3;function s(h){const I=h.key.length===1,P=!h.ctrlKey&&!h.metaKey&&!h.altKey;return I&&P}if(e.multiple||!s(l))return;const V=performance.now();V-j>t&&(A=""),A+=l.key.toLowerCase(),j=V;const p=y.value.find(h=>h.title.toLowerCase().startsWith(A));if(p!==void 0){i.value=[p];const h=D.value.indexOf(p);ue&&window.requestAnimationFrame(()=>{var I;h>=0&&((I=g.value)==null||I.scrollToIndex(h))})}}function U(l){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const s=i.value.findIndex(p=>e.valueComparator(p.value,l.value)),V=t??!~s;if(~s){const p=V?[...i.value,l]:[...i.value];p.splice(s,1),i.value=p}else V&&(i.value=[...i.value,l])}else{const s=t!==!1;i.value=s?[l]:[],be(()=>{a.value=!1})}}function X(l){var t;(t=w.value)!=null&&t.$el.contains(l.relatedTarget)||(a.value=!1)}function O(){var l;m.value&&((l=u.value)==null||l.focus())}function ne(l){m.value=!0}function Y(l){if(l==null)i.value=[];else if(ve(u.value,":autofill")||ve(u.value,":-webkit-autofill")){const t=y.value.find(s=>s.title===l);t&&U(t)}else u.value&&(u.value.value="")}return E(a,()=>{if(!e.hideSelected&&a.value&&i.value.length){const l=D.value.findIndex(t=>i.value.some(s=>e.valueComparator(s.value,t.value)));ue&&window.requestAnimationFrame(()=>{var t;l>=0&&((t=g.value)==null||t.scrollToIndex(l))})}}),E(()=>e.items,(l,t)=>{a.value||m.value&&!t.length&&l.length&&(a.value=!0)}),ee(()=>{const l=!!(e.chips||n.chip),t=!!(!e.hideNoData||D.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),s=i.value.length>0,V=ie.filterProps(e),p=s||!m.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return v(ie,_({ref:u},V,{modelValue:i.value.map(f=>f.props.value).join(", "),"onUpdate:modelValue":Y,focused:m.value,"onUpdate:focused":f=>m.value=f,validationValue:i.externalValue,counterValue:k.value,dirty:s,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":i.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:p,"onClick:clear":M,"onMousedown:control":$,onBlur:X,onKeydown:le,"aria-label":r(T.value),title:r(T.value)}),{...n,default:()=>v(z,null,[v(Ee,_({ref:d,modelValue:a.value,"onUpdate:modelValue":f=>a.value=f,activator:"parent",contentClass:"v-select__content",disabled:W.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:O},te.value),{default:()=>[t&&v(He,_({ref:w,selected:C.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:f=>f.preventDefault(),onKeydown:H,onFocusin:ne,onScrollPassive:G,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var f,b,h;return[(f=n["prepend-item"])==null?void 0:f.call(n),!D.value.length&&!e.hideNoData&&(((b=n["no-data"])==null?void 0:b.call(n))??v(de,{title:r(e.noDataText)},null)),v(ot,{ref:g,renderless:!0,items:D.value},{default:I=>{var re;let{item:P,index:q,itemRef:x}=I;const se=_(P.props,{ref:x,key:q,onClick:()=>U(P,null)});return((re=n.item)==null?void 0:re.call(n,{item:P,index:q,props:se}))??v(de,_(se,{role:"option"}),{prepend:ke=>{let{isSelected:Se}=ke;return v(z,null,[e.multiple&&!e.hideSelected?v(Ye,{key:P.value,modelValue:Se,ripple:!1,tabindex:"-1"},null):void 0,P.props.prependAvatar&&v(Ue,{image:P.props.prependAvatar},null),P.props.prependIcon&&v(fe,{icon:P.props.prependIcon},null)])}})}}),(h=n["append-item"])==null?void 0:h.call(n)]}})]}),i.value.map((f,b)=>{function h(x){x.stopPropagation(),x.preventDefault(),U(f,!1)}const I={"onClick:close":h,onKeydown(x){x.key!=="Enter"&&x.key!==" "||(x.preventDefault(),x.stopPropagation(),h(x))},onMousedown(x){x.preventDefault(),x.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},P=l?!!n.chip:!!n.selection,q=P?qe(l?n.chip({item:f,index:b,props:I}):n.selection({item:f,index:b})):void 0;if(!(P&&!q))return v("div",{key:f.value,class:"v-select__selection"},[l?n.chip?v(Ke,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:f.title}}},{default:()=>[q]}):v(Ge,_({key:"chip",closable:e.closableChips,size:"small",text:f.title,disabled:f.props.disabled},I),null):q??v("span",{class:"v-select__selection-text"},[f.title,e.multiple&&b<i.value.length-1&&v("span",{class:"v-select__selection-comma"},[Ne(",")])])])})]),"append-inner":function(){var I;for(var f=arguments.length,b=new Array(f),h=0;h<f;h++)b[h]=arguments[h];return v(z,null,[(I=n["append-inner"])==null?void 0:I.call(n,...b),e.menuIcon?v(fe,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),$e({isFocused:m,menu:a,select:U},u)}});export{mt as V,Ye as a,ot as b,st as m,ut as u};
