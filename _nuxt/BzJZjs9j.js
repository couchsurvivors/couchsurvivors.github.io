import{m as Ce,b as ke,u as pe,c as we,d as Se,a as Fe}from"./L42mJu_6.js";import{c as Ie,V as X}from"./BfqYUvkC.js";import{F as De,aC as Pe,aF as Ae,I as Re,aS as _e,r as K,ap as D,aG as Y,c as b,bG as Me,bf as Te,as as P,bH as A,bI as Ee,L as Le,A as s,ae as O,bJ as Ne,a1 as I,ac as Ke,ah as Z,bK as Oe,S as ee,bL as Be,bD as Ue,C as ze,bM as He,bz as je,bN as Ge,au as le,b2 as $e}from"./BUKZ6-gO.js";import{c as qe}from"./Dt5z5Afo.js";import{V as Je}from"./DMWPK2wg.js";function We(e,g,R){if(g==null)return e;if(Array.isArray(g))throw new Error("Multiple matches is not implemented");return typeof g=="number"&&~g?s(O,null,[s("span",{class:"v-combobox__unmask"},[e.substr(0,g)]),s("span",{class:"v-combobox__mask"},[e.substr(g,R)]),s("span",{class:"v-combobox__unmask"},[e.substr(g+R)])]):e}const Qe=De({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...Ce({filterKeys:["title"]}),...ke({hideNoData:!0,returnObject:!0}),...Pe(Ie({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ae({transition:!1})},"VCombobox"),al=Re()({name:"VCombobox",props:Qe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,g){var J;let{emit:R,slots:n}=g;const{t:B}=_e(),C=K(),y=D(!1),k=D(!0),_=D(!1),G=K(),$=K(),U=Y(e,"menu"),c=b({get:()=>U.value,set:l=>{var t;U.value&&!l&&((t=G.value)!=null&&t.ΨopenChildren)||(U.value=l)}}),r=D(-1);let z=!1;const ae=b(()=>{var l;return(l=C.value)==null?void 0:l.color}),q=b(()=>c.value?e.closeText:e.openText),{items:te,transformIn:ue,transformOut:ne}=Me(e),{textColorClasses:oe,textColorStyles:ie}=Te(ae),u=Y(e,"modelValue",[],l=>ue($e(l)),l=>{const t=ne(l);return e.multiple?t:t[0]??null}),F=qe(),M=b(()=>!!(e.chips||n.chip)),x=b(()=>M.value||!!n.selection),p=D(!e.multiple&&!x.value?((J=u.value[0])==null?void 0:J.title)??"":""),v=b({get:()=>p.value,set:l=>{var t;if(p.value=l??"",!e.multiple&&!x.value&&(u.value=[A(e,l)]),l&&e.multiple&&((t=e.delimiters)!=null&&t.length)){const i=l.split(new RegExp(`(?:${e.delimiters.join("|")})+`));i.length>1&&(i.forEach(a=>{a=a.trim(),a&&m(A(e,a))}),p.value="")}l||(r.value=-1),k.value=!l}}),se=b(()=>typeof e.counterValue=="function"?e.counterValue(u.value):typeof e.counterValue=="number"?e.counterValue:e.multiple?u.value.length:v.value.length);P(p,l=>{z?le(()=>z=!1):y.value&&!c.value&&(c.value=!0),R("update:search",l)}),P(u,l=>{var t;!e.multiple&&!x.value&&(p.value=((t=l[0])==null?void 0:t.title)??"")});const{filteredItems:T,getMatches:re}=pe(e,te,()=>k.value?"":v.value),V=b(()=>e.hideSelected?T.value.filter(l=>!u.value.some(t=>t.value===l.value)):T.value),ce=b(()=>u.value.map(l=>l.value)),E=b(()=>{var t;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((t=V.value[0])==null?void 0:t.title))&&V.value.length>0&&!k.value&&!_.value}),H=b(()=>e.hideNoData&&!V.value.length||e.readonly||(F==null?void 0:F.isReadonly.value)),j=K(),{onListScroll:ve,onListKeydown:de}=we(j,C);function fe(l){z=!0,e.openOnClear&&(c.value=!0)}function me(){H.value||(c.value=!0)}function be(l){H.value||(y.value&&(l.preventDefault(),l.stopPropagation()),c.value=!c.value)}function he(l){var a;if(Ge(l)||e.readonly||F!=null&&F.isReadonly.value)return;const t=C.value.selectionStart,i=u.value.length;if((r.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(c.value=!0),["Escape"].includes(l.key)&&(c.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(E.value&&["Enter","Tab"].includes(l.key)&&m(T.value[0]),k.value=!0),l.key==="ArrowDown"&&E.value&&((a=j.value)==null||a.focus("next")),l.key==="Enter"&&v.value&&(m(A(e,v.value)),x.value&&(p.value="")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&x.value&&u.value.length>0&&!v.value)return m(u.value[0],!1);if(~r.value){const o=r.value;m(u.value[r.value],!1),r.value=o>=i-1?i-2:o}else l.key==="Backspace"&&!v.value&&(r.value=i-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(r.value<0&&t>0)return;const o=r.value>-1?r.value-1:i-1;u.value[o]?r.value=o:(r.value=-1,C.value.setSelectionRange(v.value.length,v.value.length))}if(l.key==="ArrowRight"){if(r.value<0)return;const o=r.value+1;u.value[o]?r.value=o:(r.value=-1,C.value.setSelectionRange(0,0))}}}function ge(){var l;y.value&&(k.value=!0,(l=C.value)==null||l.focus())}function m(l){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const i=u.value.findIndex(o=>e.valueComparator(o.value,l.value)),a=t??!~i;if(~i){const o=a?[...u.value,l]:[...u.value];o.splice(i,1),u.value=o}else a&&(u.value=[...u.value,l]);e.clearOnSelect&&(v.value="")}else{const i=t!==!1;u.value=i?[l]:[],p.value=i&&!x.value?l.title:"",le(()=>{c.value=!1,k.value=!0})}}function ye(l){y.value=!0,setTimeout(()=>{_.value=!0})}function xe(l){_.value=!1}function Ve(l){(l==null||l===""&&!e.multiple&&!x.value)&&(u.value=[])}return P(y,(l,t)=>{if(!(l||l===t)){if(r.value=-1,c.value=!1,E.value&&!_.value&&!u.value.some(i=>{let{value:a}=i;return a===V.value[0].value})){m(V.value[0]);return}if(v.value){if(e.multiple){m(A(e,v.value));return}if(!x.value)return;u.value.some(i=>{let{title:a}=i;return a===v.value})?p.value="":m(A(e,v.value))}}}),P(c,()=>{if(!e.hideSelected&&c.value&&u.value.length){const l=V.value.findIndex(t=>u.value.some(i=>e.valueComparator(i.value,t.value)));Ee&&window.requestAnimationFrame(()=>{var t;l>=0&&((t=$.value)==null||t.scrollToIndex(l))})}}),P(()=>e.items,(l,t)=>{c.value||y.value&&!t.length&&l.length&&(c.value=!0)}),Le(()=>{const l=!!(!e.hideNoData||V.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),t=u.value.length>0,i=X.filterProps(e);return s(X,I({ref:C},i,{modelValue:v.value,"onUpdate:modelValue":[a=>v.value=a,Ve],focused:y.value,"onUpdate:focused":a=>y.value=a,validationValue:u.externalValue,counterValue:se.value,dirty:t,class:["v-combobox",{"v-combobox--active-menu":c.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!x.value,"v-combobox--selecting-index":r.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:t?void 0:e.placeholder,"onClick:clear":fe,"onMousedown:control":me,onKeydown:he}),{...n,default:()=>s(O,null,[s(Ne,I({ref:G,modelValue:c.value,"onUpdate:modelValue":a=>c.value=a,activator:"parent",contentClass:"v-combobox__content",disabled:H.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ge},e.menuProps),{default:()=>[l&&s(Ke,I({ref:j,selected:ce.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:a=>a.preventDefault(),onKeydown:de,onFocusin:ye,onFocusout:xe,onScrollPassive:ve,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var a,o,h;return[(a=n["prepend-item"])==null?void 0:a.call(n),!V.value.length&&!e.hideNoData&&(((o=n["no-data"])==null?void 0:o.call(n))??s(Z,{title:B(e.noDataText)},null)),s(Se,{ref:$,renderless:!0,items:V.value},{default:w=>{var Q;let{item:d,index:S,itemRef:f}=w;const W=I(d.props,{ref:f,key:S,active:E.value&&S===0?!0:void 0,onClick:()=>m(d,null)});return((Q=n.item)==null?void 0:Q.call(n,{item:d,index:S,props:W}))??s(Z,I(W,{role:"option"}),{prepend:L=>{let{isSelected:N}=L;return s(O,null,[e.multiple&&!e.hideSelected?s(Fe,{key:d.value,modelValue:N,ripple:!1,tabindex:"-1"},null):void 0,d.props.prependAvatar&&s(Oe,{image:d.props.prependAvatar},null),d.props.prependIcon&&s(ee,{icon:d.props.prependIcon},null)])},title:()=>{var L,N;return k.value?d.title:We(d.title,(L=re(d))==null?void 0:L.title,((N=v.value)==null?void 0:N.length)??0)}})}}),(h=n["append-item"])==null?void 0:h.call(n)]}})]}),u.value.map((a,o)=>{function h(f){f.stopPropagation(),f.preventDefault(),m(a,!1)}const w={"onClick:close":h,onKeydown(f){f.key!=="Enter"&&f.key!==" "||(f.preventDefault(),f.stopPropagation(),h(f))},onMousedown(f){f.preventDefault(),f.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},d=M.value?!!n.chip:!!n.selection,S=d?Be(M.value?n.chip({item:a,index:o,props:w}):n.selection({item:a,index:o})):void 0;if(!(d&&!S))return s("div",{key:a.value,class:["v-combobox__selection",o===r.value&&["v-combobox__selection--selected",oe.value]],style:o===r.value?ie.value:{}},[M.value?n.chip?s(Ue,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:a.title}}},{default:()=>[S]}):s(Je,I({key:"chip",closable:e.closableChips,size:"small",text:a.title,disabled:a.props.disabled},w),null):S??s("span",{class:"v-combobox__selection-text"},[a.title,e.multiple&&o<u.value.length-1&&s("span",{class:"v-combobox__selection-comma"},[ze(",")])])])})]),"append-inner":function(){var w;for(var a=arguments.length,o=new Array(a),h=0;h<a;h++)o[h]=arguments[h];return s(O,null,[(w=n["append-inner"])==null?void 0:w.call(n,...o),(!e.hideNoData||e.items.length)&&e.menuIcon?s(ee,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:be,onClick:He,"aria-label":B(q.value),title:B(q.value)},null):void 0])}})}),je({isFocused:y,isPristine:k,menu:c,search:v,selectionIndex:r,filteredItems:T,select:m},C)}});export{al as V};
