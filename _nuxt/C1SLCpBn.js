import{F as Q,O as G,G as j,b4 as be,X,a2 as ue,I as Z,aT as Se,aU as Ce,a4 as re,ap as F,c as g,aH as ee,c5 as Ie,bh as le,as as xe,L as de,A as i,c6 as ae,S as R,c7 as Ve,b1 as Pe,a3 as ve,aR as fe,a5 as pe,a6 as ze,a7 as W,a1 as he,b9 as te,aO as Ae,aP as Re,T as _e,U as we,W as Ee,c8 as Te,aQ as Fe,R as Ge,aS as Oe,c9 as Be,ca as Me,bd as De,Z as We,$ as Le,cb as He,aG as $e,Y as qe,cc as Ke,M as ne,Q as Ne,cd as Ue,bZ as Qe,bl as L,N as je,ae as se,bj as ie}from"./DsP5jJhd.js";function Xe(e){let{selectedElement:n,containerElement:t,isRtl:u,isHorizontal:o}=e;const y=O(o,t),c=ye(o,u,t),k=O(o,n),v=ke(o,n),m=k*.4;return c>v?v-m:c+y<v+k?v-y+k+m:c}function Ze(e){let{selectedElement:n,containerElement:t,isHorizontal:u}=e;const o=O(u,t),y=ke(u,n),c=O(u,n);return y-o/2+c/2}function oe(e,n){const t=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[t])||0}function Ye(e,n){const t=e?"clientWidth":"clientHeight";return(n==null?void 0:n[t])||0}function ye(e,n,t){if(!t)return 0;const{scrollLeft:u,offsetWidth:o,scrollWidth:y}=t;return e?n?y-o+u:u:t.scrollTop}function O(e,n){const t=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[t])||0}function ke(e,n){const t=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[t])||0}const Je=Symbol.for("vuetify:v-slide-group"),ge=Q({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Je},nextIcon:{type:G,default:"$next"},prevIcon:{type:G,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...j(),...be(),...X(),...ue({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ce=Z()({name:"VSlideGroup",props:ge(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{isRtl:u}=Se(),{displayClasses:o,mobile:y}=Ce(e),c=re(e,e.symbol),k=F(!1),v=F(0),m=F(0),I=F(0),d=g(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:_}=ee(),{resizeRef:p,contentRect:V}=ee(),s=Ie(),b=g(()=>({container:f.value,duration:200,easing:"easeOutQuart"})),H=g(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=g(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(le){let l=-1;xe(()=>[c.selected.value,_.value,V.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(_.value&&V.value){const a=d.value?"width":"height";m.value=_.value[a],I.value=V.value[a],k.value=m.value+1<I.value}if(H.value>=0&&p.value){const a=p.value.children[S.value];w(a,e.centerActive)}})})}const P=F(!1);function w(l,a){let r=0;a?r=Ze({containerElement:f.value,isHorizontal:d.value,selectedElement:l}):r=Xe({containerElement:f.value,isHorizontal:d.value,isRtl:u.value,selectedElement:l}),B(r)}function B(l){if(!le||!f.value)return;const a=O(d.value,f.value),r=ye(d.value,u.value,f.value);if(!(oe(d.value,f.value)<=a||Math.abs(l-r)<16)){if(d.value&&u.value&&f.value){const{scrollWidth:D,offsetWidth:U}=f.value;l=D-U-l}d.value?s.horizontal(l,b.value):s(l,b.value)}}function h(l){const{scrollTop:a,scrollLeft:r}=l.target;v.value=d.value?r:a}function x(l){if(P.value=!0,!(!k.value||!p.value)){for(const a of l.composedPath())for(const r of p.value.children)if(r===a){w(r);return}}}function $(l){P.value=!1}let E=!1;function M(l){var a;!E&&!P.value&&!(l.relatedTarget&&((a=p.value)!=null&&a.contains(l.relatedTarget)))&&C(),E=!1}function T(){E=!0}function q(l){if(!p.value)return;function a(r){l.preventDefault(),C(r)}d.value?l.key==="ArrowRight"?a(u.value?"prev":"next"):l.key==="ArrowLeft"&&a(u.value?"next":"prev"):l.key==="ArrowDown"?a("next"):l.key==="ArrowUp"&&a("prev"),l.key==="Home"?a("first"):l.key==="End"&&a("last")}function C(l){var r,A;if(!p.value)return;let a;if(!l)a=Ve(p.value)[0];else if(l==="next"){if(a=(r=p.value.querySelector(":focus"))==null?void 0:r.nextElementSibling,!a)return C("first")}else if(l==="prev"){if(a=(A=p.value.querySelector(":focus"))==null?void 0:A.previousElementSibling,!a)return C("last")}else l==="first"?a=p.value.firstElementChild:l==="last"&&(a=p.value.lastElementChild);a&&a.focus({preventScroll:!0})}function z(l){const a=d.value&&u.value?-1:1,r=(l==="prev"?-a:a)*m.value;let A=v.value+r;if(d.value&&u.value&&f.value){const{scrollWidth:D,offsetWidth:U}=f.value;A+=D-U}B(A)}const K=g(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),N=g(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!y.value;case!0:return k.value||Math.abs(v.value)>0;case"mobile":return y.value||k.value||Math.abs(v.value)>0;default:return!y.value&&(k.value||Math.abs(v.value)>0)}}),Y=g(()=>Math.abs(v.value)>1),J=g(()=>{if(!f.value)return!1;const l=oe(d.value,f.value),a=Ye(d.value,f.value);return l-a-Math.abs(v.value)>1});return de(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":N.value,"v-slide-group--is-overflowing":k.value},o.value,e.class],style:e.style,tabindex:P.value||c.selected.value.length?-1:0,onFocus:M},{default:()=>{var l,a,r;return[N.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Y.value}],onMousedown:T,onClick:()=>Y.value&&z("prev")},[((l=t.prev)==null?void 0:l.call(t,K.value))??i(ae,null,{default:()=>[i(R,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:x,onFocusout:$,onKeydown:q},[(a=t.default)==null?void 0:a.call(t,K.value)])]),N.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!J.value}],onMousedown:T,onClick:()=>J.value&&z("next")},[((r=t.next)==null?void 0:r.call(t,K.value))??i(ae,null,{default:()=>[i(R,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:z,scrollOffset:v,focus:C}}}),me=Symbol.for("vuetify:v-chip-group"),el=Q({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Pe},...ge(),...j(),...ue({selectedClass:"v-chip--selected"}),...X(),...ve(),...fe({variant:"tonal"})},"VChipGroup"),tl=Z()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:u}=pe(e),{isSelected:o,select:y,next:c,prev:k,selected:v}=re(e,me);return ze({VChip:{color:W(e,"color"),disabled:W(e,"disabled"),filter:W(e,"filter"),variant:W(e,"variant")}}),de(()=>{const m=ce.filterProps(e);return i(ce,he(m,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var I;return[(I=t.default)==null?void 0:I.call(t,{isSelected:o,select:y,next:c,prev:k,selected:v.value})]}})}),{}}}),ll=Q({activeClass:String,appendAvatar:String,appendIcon:G,closable:Boolean,closeIcon:{type:G,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:G,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:te(),onClickOnce:te(),...Ae(),...j(),...Re(),..._e(),...we(),...Ee(),...Te(),...Fe(),...X({tag:"span"}),...ve(),...fe({variant:"tonal"})},"VChip"),nl=Z()({name:"VChip",directives:{Ripple:Ge},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:t,emit:u,slots:o}=n;const{t:y}=Oe(),{borderClasses:c}=Be(e),{colorClasses:k,colorStyles:v,variantClasses:m}=Me(e),{densityClasses:I}=De(e),{elevationClasses:d}=We(e),{roundedClasses:f}=Le(e),{sizeClasses:_}=He(e),{themeClasses:p}=pe(e),V=$e(e,"modelValue"),s=qe(e,me,!1),b=Ke(e,t),H=g(()=>e.link!==!1&&b.isLink.value),S=g(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||b.isClickable.value)),P=g(()=>({"aria-label":y(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),V.value=!1,u("click:close",h)}}));function w(h){var x;u("click",h),S.value&&((x=b.navigate)==null||x.call(b,h),s==null||s.toggle())}function B(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),w(h))}return()=>{const h=b.isLink.value?"a":e.tag,x=!!(e.appendIcon||e.appendAvatar),$=!!(x||o.append),E=!!(o.close||e.closable),M=!!(o.filter||e.filter)&&s,T=!!(e.prependIcon||e.prependAvatar),q=!!(T||o.prepend),C=!s||s.isSelected.value;return V.value&&ne(i(h,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":M,"v-chip--pill":e.pill},p.value,c.value,C?k.value:void 0,I.value,d.value,f.value,_.value,m.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:b.href.value,tabindex:S.value?0:void 0,onClick:w,onKeydown:S.value&&!H.value&&B},{default:()=>{var z;return[Ue(S.value,"v-chip"),M&&i(Qe,{key:"filter"},{default:()=>[ne(i("div",{class:"v-chip__filter"},[o.filter?i(L,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(R,{key:"filter-icon",icon:e.filterIcon},null)]),[[je,s.isSelected.value]])]}),q&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(L,{key:"prepend-defaults",disabled:!T,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(se,null,[e.prependIcon&&i(R,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(ie,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((z=o.default)==null?void 0:z.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),$&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(L,{key:"append-defaults",disabled:!x,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(se,null,[e.appendIcon&&i(R,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(ie,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),E&&i("button",he({key:"close",class:"v-chip__close",type:"button"},P.value),[o.close?i(L,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(R,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ne("ripple"),S.value&&e.ripple,null]])}}});export{nl as V,tl as a};
