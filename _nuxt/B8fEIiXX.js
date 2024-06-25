import{aM as ft,r as E,aN as vt,F as C,O as q,aO as gt,G as mt,aP as bt,T as ht,W as yt,aQ as pt,X as xt,a3 as Pt,aR as St,I as W,aG as G,aS as Y,aT as wt,a5 as kt,aU as le,ap as It,a6 as de,aH as Vt,c as I,aV as Z,a7 as T,L as U,A as i,aj as M,a1 as F,aW as xe,au as Pe,aL as Ce,a0 as X,aX as Be,as as Ae,J as Q,aY as ue,aZ as Tt,a_ as L,a$ as Dt,b0 as _t,b1 as $e,at as H,b2 as oe,b3 as ee,b4 as fe,b5 as Ft,b6 as Ct,P as Bt,b7 as At,ae as K,S as Se,b8 as Le,C as we,b9 as ie,ba as ke,z as $t,bb as te,bc as Lt}from"./BIpMFkyN.js";import{V as Oe,a as ve}from"./BSWKWQ-F.js";import{V as Ot}from"./BHCe7P1x.js";import{m as Rt,V as Ie}from"./Bfhz5pgH.js";import{m as Nt,u as Et}from"./ynkh-BXo.js";function Ve(e,l,a){return Object.keys(e).filter(t=>ft(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}function Ca(e){const t=Math.min(e,1e3)/1e3,n=Math.round(t*255),r=Math.round((1-t)*255);return`rgb(${n}, ${r}, 0)`}function Mt(){const e=E([]);vt(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const Gt=C({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:q,default:"$first"},prevIcon:{type:q,default:"$prev"},nextIcon:{type:q,default:"$next"},lastIcon:{type:q,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...gt(),...mt(),...bt(),...ht(),...yt(),...pt(),...xt({tag:"nav"}),...Pt(),...St({variant:"text"})},"VPagination"),Te=W()({name:"VPagination",props:Gt(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=G(e,"modelValue"),{t:r,n:u}=Y(),{isRtl:s}=wt(),{themeClasses:f}=kt(e),{width:d}=le(),m=It(-1);de(void 0,{scoped:!0});const{resizeRef:p}=Vt(b=>{if(!b.length)return;const{target:c,contentRect:S}=b[0],w=c.querySelector(".v-pagination__list > *");if(!w)return;const V=S.width,_=w.offsetWidth+parseFloat(getComputedStyle(w).marginRight)*2;m.value=x(V,_)}),v=I(()=>parseInt(e.length,10)),y=I(()=>parseInt(e.start,10)),h=I(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):m.value>=0?m.value:x(d.value,58));function x(b,c){const S=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((b-c*S)/c).toFixed(2)))}const o=I(()=>{if(v.value<=0||isNaN(v.value)||v.value>Number.MAX_SAFE_INTEGER)return[];if(h.value<=0)return[];if(h.value===1)return[n.value];if(v.value<=h.value)return Z(v.value,y.value);const b=h.value%2===0,c=b?h.value/2:Math.floor(h.value/2),S=b?c:c+1,w=v.value-c;if(S-n.value>=0)return[...Z(Math.max(1,h.value-1),y.value),e.ellipsis,v.value];if(n.value-w>=(b?1:0)){const V=h.value-1,_=v.value-V+y.value;return[y.value,e.ellipsis,...Z(V,_)]}else{const V=Math.max(1,h.value-3),_=V===1?n.value:n.value-Math.ceil(V/2)+y.value;return[y.value,e.ellipsis,...Z(V,_),e.ellipsis,v.value]}});function P(b,c,S){b.preventDefault(),n.value=c,S&&t(S,c)}const{refs:g,updateRef:D}=Mt();de({VPaginationBtn:{color:T(e,"color"),border:T(e,"border"),density:T(e,"density"),size:T(e,"size"),variant:T(e,"variant"),rounded:T(e,"rounded"),elevation:T(e,"elevation")}});const B=I(()=>o.value.map((b,c)=>{const S=w=>D(w,c);if(typeof b=="string")return{isActive:!1,key:`ellipsis-${c}`,page:b,props:{ref:S,ellipsis:!0,icon:!0,disabled:!0}};{const w=b===n.value;return{isActive:w,key:b,page:u(b),props:{ref:S,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:w?e.activeColor:e.color,"aria-current":w,"aria-label":r(w?e.currentPageAriaLabel:e.pageAriaLabel,b),onClick:V=>P(V,b)}}}})),k=I(()=>{const b=!!e.disabled||n.value<=y.value,c=!!e.disabled||n.value>=y.value+v.value-1;return{first:e.showFirstLastPage?{icon:s.value?e.lastIcon:e.firstIcon,onClick:S=>P(S,y.value,"first"),disabled:b,"aria-label":r(e.firstAriaLabel),"aria-disabled":b}:void 0,prev:{icon:s.value?e.nextIcon:e.prevIcon,onClick:S=>P(S,n.value-1,"prev"),disabled:b,"aria-label":r(e.previousAriaLabel),"aria-disabled":b},next:{icon:s.value?e.prevIcon:e.nextIcon,onClick:S=>P(S,n.value+1,"next"),disabled:c,"aria-label":r(e.nextAriaLabel),"aria-disabled":c},last:e.showFirstLastPage?{icon:s.value?e.firstIcon:e.lastIcon,onClick:S=>P(S,y.value+v.value-1,"last"),disabled:c,"aria-label":r(e.lastAriaLabel),"aria-disabled":c}:void 0}});function $(){var c;const b=n.value-y.value;(c=g.value[b])==null||c.$el.focus()}function O(b){b.key===xe.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,Pe($)):b.key===xe.right&&!e.disabled&&n.value<y.value+v.value-1&&(n.value=n.value+1,Pe($))}return U(()=>i(e.tag,{ref:p,class:["v-pagination",f.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:O,"data-test":"v-pagination-root"},{default:()=>[i("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&i("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(k.value.first):i(M,F({_as:"VPaginationBtn"},k.value.first),null)]),i("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(k.value.prev):i(M,F({_as:"VPaginationBtn"},k.value.prev),null)]),B.value.map((b,c)=>i("li",{key:b.key,class:["v-pagination__item",{"v-pagination__item--is-active":b.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(b):i(M,F({_as:"VPaginationBtn"},b.props),{default:()=>[b.page]})])),i("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(k.value.next):i(M,F({_as:"VPaginationBtn"},k.value.next),null)]),e.showFirstLastPage&&i("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(k.value.last):i(M,F({_as:"VPaginationBtn"},k.value.last),null)])])]})),{}}}),Ht=C({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Re=Symbol.for("vuetify:data-table-pagination");function Wt(e){const l=G(e,"page",void 0,t=>+(t??1)),a=G(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function jt(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=I(()=>a.value===-1?0:a.value*(l.value-1)),r=I(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),u=I(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));Ce(()=>{l.value>u.value&&(l.value=u.value)});function s(v){a.value=v,l.value=1}function f(){l.value=ue(l.value+1,1,u.value)}function d(){l.value=ue(l.value-1,1,u.value)}function m(v){l.value=ue(v,1,u.value)}const p={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:u,itemsLength:t,nextPage:f,prevPage:d,setPage:m,setItemsPerPage:s};return X(Re,p),p}function zt(){const e=Q(Re);if(!e)throw new Error("Missing pagination!");return e}function qt(e){const l=Be("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:r}=e,u=I(()=>r.value<=0?a.value:a.value.slice(t.value,n.value));return Ae(u,s=>{l.emit("update:currentItems",s)}),{paginatedItems:u}}const Ne=C({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),De=W()({name:"VDataTableFooter",props:Ne(),setup(e,l){let{slots:a}=l;const{t}=Y(),{page:n,pageCount:r,startIndex:u,stopIndex:s,itemsLength:f,itemsPerPage:d,setItemsPerPage:m}=zt(),p=I(()=>e.itemsPerPageOptions.map(v=>typeof v=="number"?{value:v,title:v===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(v)}:{...v,title:isNaN(Number(v.title))?t(v.title):v.title}));return U(()=>{var y;const v=Te.filterProps(e);return i("div",{class:"v-data-table-footer"},[(y=a.prepend)==null?void 0:y.call(a),i("div",{class:"v-data-table-footer__items-per-page"},[i("span",null,[t(e.itemsPerPageText)]),i(Oe,{items:p.value,modelValue:d.value,"onUpdate:modelValue":h=>m(Number(h)),density:"compact",variant:"outlined","hide-details":!0},null)]),i("div",{class:"v-data-table-footer__info"},[i("div",null,[t(e.pageText,f.value?u.value+1:0,s.value,f.value)])]),i("div",{class:"v-data-table-footer__pagination"},[i(Te,F({modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},v),null)])])}),{}}}),ae=Tt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return i(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:L(e.height),width:L(e.width),maxWidth:L(e.maxWidth),left:L(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),Kt=C({headers:Array},"DataTable-header"),Ee=Symbol.for("vuetify:data-table-headers"),Me={title:"",sortable:!1},Ut={...Me,width:48};function Xt(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function ce(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)ce(a,l);return l}function Ge(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&Ge(a.children,l);return l}function Qt(e){if(e.key){if(e.key==="data-table-group")return Me;if(["data-table-expand","data-table-select"].includes(e.key))return Ut}}function ge(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>ge(a,l+1))):l}function Jt(e){let l=!1;function a(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(u&&(r.fixed=!0),r.fixed)if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s],!0);else l?isNaN(+r.width)&&_t(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return u;if(r.children){r.fixedOffset=u;for(const s of r.children)u=t(s,u)}else r.fixed&&(r.fixedOffset=u,u+=parseFloat(r.width||"0")||0);return u}let n=0;for(const r of e)n=t(r,n)}function Yt(e,l){const a=[];let t=0;const n=Xt(e);for(;n.size()>0;){let u=n.count();const s=[];let f=1;for(;u>0;){const{element:d,priority:m}=n.dequeue(),p=l-t-ge(d);if(s.push({...d,rowspan:p??1,colspan:d.children?ce(d).length:1}),d.children)for(const v of d.children){const y=m%1+f/Math.pow(10,t+2);n.enqueue(v,t+p+y)}f+=1,u-=1}t+=1,a.push(s)}return{columns:e.map(u=>ce(u)).flat(),headers:a}}function He(e){const l=[];for(const a of e){const t={...Qt(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,u={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?He(t.children):void 0};l.push(u)}return l}function Zt(e,l){const a=E([]),t=E([]),n=E({}),r=E({}),u=E({});Ce(()=>{var x,o,P;const d=(e.headers||Object.keys(e.items[0]??{}).map(g=>({key:g,title:Dt(g)}))).slice(),m=Ge(d);(x=l==null?void 0:l.groupBy)!=null&&x.value.length&&!m.has("data-table-group")&&d.unshift({key:"data-table-group",title:"Group"}),(o=l==null?void 0:l.showSelect)!=null&&o.value&&!m.has("data-table-select")&&d.unshift({key:"data-table-select"}),(P=l==null?void 0:l.showExpand)!=null&&P.value&&!m.has("data-table-expand")&&d.push({key:"data-table-expand"});const p=He(d);Jt(p);const v=Math.max(...p.map(g=>ge(g)))+1,y=Yt(p,v);a.value=y.headers,t.value=y.columns;const h=y.headers.flat(1);for(const g of h)g.key&&(g.sortable&&(g.sort&&(n.value[g.key]=g.sort),g.sortRaw&&(r.value[g.key]=g.sortRaw)),g.filter&&(u.value[g.key]=g.filter))});const s={headers:a,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:u};return X(Ee,s),s}function ne(){const e=Q(Ee);if(!e)throw new Error("Missing headers!");return e}const ea={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[H((t=l[0])==null?void 0:t.value)]:[])},selectAll:e=>{let{selected:l}=e;return l}},We={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(H(n.value)):t.delete(H(n.value));return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return We.select({items:a,value:l,selected:t})}},je={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(H(n.value)):t.delete(H(n.value));return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return je.select({items:a,value:l,selected:t})}},ta=C({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:$e}},"DataTable-select"),ze=Symbol.for("vuetify:data-table-selection");function aa(e,l){let{allItems:a,currentPage:t}=l;const n=G(e,"modelValue",e.modelValue,o=>new Set(oe(o).map(P=>{var g;return((g=a.value.find(D=>e.valueComparator(P,D.value)))==null?void 0:g.value)??P})),o=>[...o.values()]),r=I(()=>a.value.filter(o=>o.selectable)),u=I(()=>t.value.filter(o=>o.selectable)),s=I(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ea;case"all":return je;case"page":default:return We}});function f(o){return oe(o).every(P=>n.value.has(H(P.value)))}function d(o){return oe(o).some(P=>n.value.has(H(P.value)))}function m(o,P){const g=s.value.select({items:o,value:P,selected:new Set(n.value)});n.value=g}function p(o){const P=T(o);m([P.value],!f([P.value]))}function v(o){const P=s.value.selectAll({value:o,allItems:r.value,currentPage:u.value,selected:new Set(n.value)});n.value=P}const y=I(()=>n.value.size>0),h=I(()=>{const o=s.value.allSelected({allItems:r.value,currentPage:u.value});return!!o.length&&f(o)}),x={toggleSelect:p,select:m,selectAll:v,isSelected:f,isSomeSelected:d,someSelected:y,allSelected:h,showSelectAll:s.value.showSelectAll};return X(ze,x),x}function re(){const e=Q(ze);if(!e)throw new Error("Missing selection!");return e}const la=C({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),qe=Symbol.for("vuetify:data-table-sort");function na(e){const l=G(e,"sortBy"),a=T(e,"mustSort"),t=T(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function ra(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=f=>{if(f.key==null)return;let d=l.value.map(p=>({...p}))??[];const m=d.find(p=>p.key===f.key);m?m.order==="desc"?a.value?m.order="asc":d=d.filter(p=>p.key!==f.key):m.order="desc":t.value?d=[...d,{key:f.key,order:"asc"}]:d=[{key:f.key,order:"asc"}],l.value=d,n&&(n.value=1)};function u(f){return!!l.value.find(d=>d.key===f.key)}const s={sortBy:l,toggleSort:r,isSorted:u};return X(qe,s),s}function Ke(){const e=Q(qe);if(!e)throw new Error("Missing sort!");return e}function sa(e,l,a,t){const n=Y();return{sortedItems:I(()=>{var u,s;return a.value.length?ua(l.value,a.value,n.current.value,{transform:t==null?void 0:t.transform,sortFunctions:{...e.customKeySort,...(u=t==null?void 0:t.sortFunctions)==null?void 0:u.value},sortRawFunctions:(s=t==null?void 0:t.sortRawFunctions)==null?void 0:s.value}):l.value})}}function ua(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return e.map(u=>[u,t!=null&&t.transform?t.transform(u):u]).sort((u,s)=>{var f,d;for(let m=0;m<l.length;m++){let p=!1;const v=l[m].key,y=l[m].order??"asc";if(y===!1)continue;let h=u[1][v],x=s[1][v],o=u[0].raw,P=s[0].raw;if(y==="desc"&&([h,x]=[x,h],[o,P]=[P,o]),(f=t==null?void 0:t.sortRawFunctions)!=null&&f[v]){const g=t.sortRawFunctions[v](o,P);if(g==null)continue;if(p=!0,g)return g}if((d=t==null?void 0:t.sortFunctions)!=null&&d[v]){const g=t.sortFunctions[v](h,x);if(g==null)continue;if(p=!0,g)return g}if(!p){if(h instanceof Date&&x instanceof Date)return h.getTime()-x.getTime();if([h,x]=[h,x].map(g=>g!=null?g.toString().toLocaleLowerCase():g),h!==x)return ee(h)&&ee(x)?0:ee(h)?-1:ee(x)?1:!isNaN(h)&&!isNaN(x)?Number(h)-Number(x):n.compare(h,x)}}return 0}).map(u=>{let[s]=u;return s})}const Ue=C({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:q,default:"$sortAsc"},sortDescIcon:{type:q,default:"$sortDesc"},headerProps:{type:Object},...fe(),...Ft()},"VDataTableHeaders"),_e=W()({name:"VDataTableHeaders",props:Ue(),setup(e,l){let{slots:a}=l;const{t}=Y(),{toggleSort:n,sortBy:r,isSorted:u}=Ke(),{someSelected:s,allSelected:f,selectAll:d,showSelectAll:m}=re(),{columns:p,headers:v}=ne(),{loaderClasses:y}=Ct(e);function h(b,c){if(!(!e.sticky&&!b.fixed))return{position:"sticky",left:b.fixed?L(b.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${c})`:void 0}}function x(b){const c=r.value.find(S=>S.key===b.key);return c?c.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:o,backgroundColorStyles:P}=Bt(e,"color"),{displayClasses:g,mobile:D}=le(e),B=I(()=>({headers:v.value,columns:p.value,toggleSort:n,isSorted:u,sortBy:r.value,someSelected:s.value,allSelected:f.value,selectAll:d,getSortIcon:x})),k=I(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},g.value,y.value]),$=b=>{let{column:c,x:S,y:w}=b;const V=c.key==="data-table-select"||c.key==="data-table-expand",_=F(e.headerProps??{},c.headerProps??{});return i(ae,F({tag:"th",align:c.align,class:[{"v-data-table__th--sortable":c.sortable,"v-data-table__th--sorted":u(c),"v-data-table__th--fixed":c.fixed},...k.value],style:{width:L(c.width),minWidth:L(c.minWidth),maxWidth:L(c.maxWidth),...h(c,w)},colspan:c.colspan,rowspan:c.rowspan,onClick:c.sortable?()=>n(c):void 0,fixed:c.fixed,nowrap:c.nowrap,lastFixed:c.lastFixed,noPadding:V},_),{default:()=>{var z;const R=`header.${c.key}`,j={column:c,selectAll:d,isSorted:u,toggleSort:n,sortBy:r.value,someSelected:s.value,allSelected:f.value,getSortIcon:x};return a[R]?a[R](j):c.key==="data-table-select"?((z=a["header.data-table-select"])==null?void 0:z.call(a,j))??(m&&i(ve,{modelValue:f.value,indeterminate:s.value&&!f.value,"onUpdate:modelValue":d},null)):i("div",{class:"v-data-table-header__content"},[i("span",null,[c.title]),c.sortable&&i(Se,{key:"icon",class:"v-data-table-header__sort-icon",icon:x(c)},null),e.multiSort&&u(c)&&i("div",{key:"badge",class:["v-data-table-header__sort-badge",...o.value],style:P.value},[r.value.findIndex(se=>se.key===c.key)+1])])}})},O=()=>{const b=F(e.headerProps??{}??{}),c=I(()=>p.value.filter(w=>w==null?void 0:w.sortable)),S=I(()=>f.value?"$checkboxOn":s.value?"$checkboxIndeterminate":"$checkboxOff");return i(ae,F({tag:"th",class:[...k.value],colspan:v.value.length+1},b),{default:()=>[i("div",{class:"v-data-table-header__content"},[i(Oe,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:c.value,label:t("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:S.value,"onClick:append":()=>d(!f.value)},{...a,chip:w=>{var V;return i(Ot,{onClick:(V=w.item.raw)!=null&&V.sortable?()=>n(w.item.raw):void 0,onMousedown:_=>{_.preventDefault(),_.stopPropagation()}},{default:()=>[w.item.title,i(Se,{class:["v-data-table__td-sort-icon",u(w.item.raw)&&"v-data-table__td-sort-icon-active"],icon:x(w.item.raw),size:"small"},null)]})}})])]})};U(()=>D.value?i("tr",null,[i(O,null,null)]):i(K,null,[a.headers?a.headers(B.value):v.value.map((b,c)=>i("tr",null,[b.map((S,w)=>i($,{column:S,x:w,y:c},null))])),e.loading&&i("tr",{class:"v-data-table-progress"},[i("th",{colspan:p.value.length},[i(At,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),oa=C({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Xe=Symbol.for("vuetify:data-table-group");function ia(e){return{groupBy:G(e,"groupBy")}}function da(e){const{groupBy:l,sortBy:a}=e,t=E(new Set),n=I(()=>l.value.map(d=>({...d,order:d.order??!1})).concat(a.value));function r(d){return t.value.has(d.id)}function u(d){const m=new Set(t.value);r(d)?m.delete(d.id):m.add(d.id),t.value=m}function s(d){function m(p){const v=[];for(const y of p.items)"type"in y&&y.type==="group"?v.push(...m(y)):v.push(y);return v}return m({type:"group",items:d,id:"dummy",key:"dummy",value:"dummy",depth:0})}const f={sortByWithGroups:n,toggleGroup:u,opened:t,groupBy:l,extractRows:s,isGroupOpen:r};return X(Xe,f),f}function Qe(){const e=Q(Xe);if(!e)throw new Error("Missing group!");return e}function ca(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=Le(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function Je(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=ca(e,l[0]),r=[],u=l.slice(1);return n.forEach((s,f)=>{const d=l[0],m=`${t}_${d}_${f}`;r.push({depth:a,id:m,key:d,value:f,items:u.length?Je(s,u,a+1,m):s,type:"group"})}),r}function Ye(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...Ye(t.items,l))):a.push(t);return a}function fa(e,l,a){return{flatItems:I(()=>{if(!l.value.length)return e.value;const n=Je(e.value,l.value.map(r=>r.key));return Ye(n,a.value)})}}const va=C({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ga=W()({name:"VDataTableGroupHeaderRow",props:va(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=Qe(),{isSelected:u,isSomeSelected:s,select:f}=re(),{columns:d}=ne(),m=I(()=>r([e.item]));return()=>i("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[d.value.map(p=>{var v,y;if(p.key==="data-table-group"){const h=t(e.item)?"$expand":"$next",x=()=>n(e.item);return((v=a["data-table-group"])==null?void 0:v.call(a,{item:e.item,count:m.value.length,props:{icon:h,onClick:x}}))??i(ae,{class:"v-data-table-group-header-row__column"},{default:()=>[i(M,{size:"small",variant:"text",icon:h,onClick:x},null),i("span",null,[e.item.value]),i("span",null,[we("("),m.value.length,we(")")])]})}if(p.key==="data-table-select"){const h=u(m.value),x=s(m.value)&&!h,o=P=>f(m.value,P);return((y=a["data-table-select"])==null?void 0:y.call(a,{props:{modelValue:h,indeterminate:x,"onUpdate:modelValue":o}}))??i("td",null,[i(ve,{modelValue:h,indeterminate:x,"onUpdate:modelValue":o},null)])}return i("td",null,null)})])}}),ma=C({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Ze=Symbol.for("vuetify:datatable:expanded");function ba(e){const l=T(e,"expandOnClick"),a=G(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function t(s,f){const d=new Set(a.value);f?d.add(s.value):d.delete(s.value),a.value=d}function n(s){return a.value.has(s.value)}function r(s){t(s,!n(s))}const u={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return X(Ze,u),u}function et(){const e=Q(Ze);if(!e)throw new Error("foo");return e}const ha=C({index:Number,item:Object,cellProps:[Object,Function],onClick:ie(),onContextmenu:ie(),onDblclick:ie(),...fe()},"VDataTableRow"),ya=W()({name:"VDataTableRow",props:ha(),setup(e,l){let{slots:a}=l;const{displayClasses:t,mobile:n}=le(e,"v-data-table__tr"),{isSelected:r,toggleSelect:u,someSelected:s,allSelected:f,selectAll:d}=re(),{isExpanded:m,toggleExpand:p}=et(),{toggleSort:v,sortBy:y,isSorted:h}=Ke(),{columns:x}=ne();U(()=>i("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},t.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&x.value.map((o,P)=>{const g=e.item,D=`item.${o.key}`,B=`header.${o.key}`,k={index:e.index,item:g.raw,internalItem:g,value:Le(g.columns,o.key),column:o,isSelected:r,toggleSelect:u,isExpanded:m,toggleExpand:p},$={column:o,selectAll:d,isSorted:h,toggleSort:v,sortBy:y.value,someSelected:s.value,allSelected:f.value,getSortIcon:()=>""},O=typeof e.cellProps=="function"?e.cellProps({index:k.index,item:k.item,internalItem:k.internalItem,value:k.value,column:o}):e.cellProps,b=typeof o.cellProps=="function"?o.cellProps({index:k.index,item:k.item,internalItem:k.internalItem,value:k.value}):o.cellProps;return i(ae,F({align:o.align,class:{"v-data-table__td--expanded-row":o.key==="data-table-expand","v-data-table__td--select-row":o.key==="data-table-select"},fixed:o.fixed,fixedOffset:o.fixedOffset,lastFixed:o.lastFixed,maxWidth:n.value?void 0:o.maxWidth,noPadding:o.key==="data-table-select"||o.key==="data-table-expand",nowrap:o.nowrap,width:n.value?void 0:o.width},O,b),{default:()=>{var S,w,V,_,R;if(a[D]&&!n.value)return(S=a[D])==null?void 0:S.call(a,k);if(o.key==="data-table-select")return((w=a["item.data-table-select"])==null?void 0:w.call(a,k))??i(ve,{disabled:!g.selectable,modelValue:r([g]),onClick:ke(()=>u(g),["stop"])},null);if(o.key==="data-table-expand")return((V=a["item.data-table-expand"])==null?void 0:V.call(a,k))??i(M,{icon:m(g)?"$collapse":"$expand",size:"small",variant:"text",onClick:ke(()=>p(g),["stop"])},null);const c=$t(k.value);return n.value?i(K,null,[i("div",{class:"v-data-table__td-title"},[((_=a[B])==null?void 0:_.call(a,$))??o.title]),i("div",{class:"v-data-table__td-value"},[((R=a[D])==null?void 0:R.call(a,k))??c])]):c}})})]))}}),tt=C({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...fe()},"VDataTableRows"),Fe=W()({name:"VDataTableRows",inheritAttrs:!1,props:tt(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=ne(),{expandOnClick:r,toggleExpand:u,isExpanded:s}=et(),{isSelected:f,toggleSelect:d}=re(),{toggleGroup:m,isGroupOpen:p}=Qe(),{t:v}=Y(),{mobile:y}=le(e);return U(()=>{var h,x;return e.loading&&(!e.items.length||t.loading)?i("tr",{class:"v-data-table-rows-loading",key:"loading"},[i("td",{colspan:n.value.length},[((h=t.loading)==null?void 0:h.call(t))??v(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?i("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[i("td",{colspan:n.value.length},[((x=t["no-data"])==null?void 0:x.call(t))??v(e.noDataText)])]):i(K,null,[e.items.map((o,P)=>{var B;if(o.type==="group"){const k={index:P,item:o,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:f,toggleSelect:d,toggleGroup:m,isGroupOpen:p};return t["group-header"]?t["group-header"](k):i(ga,F({key:`group-header_${o.id}`,item:o},Ve(a,":group-header",()=>k)),t)}const g={index:P,item:o.raw,internalItem:o,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:f,toggleSelect:d},D={...g,props:F({key:`item_${o.key??o.index}`,onClick:r.value?()=>{u(o)}:void 0,index:P,item:o,cellProps:e.cellProps,mobile:y.value},Ve(a,":row",()=>g),typeof e.rowProps=="function"?e.rowProps({item:g.item,index:g.index,internalItem:g.internalItem}):e.rowProps)};return i(K,{key:D.props.key},[t.item?t.item(D):i(ya,D.props,t),s(o)&&((B=t["expanded-row"])==null?void 0:B.call(t,g))])})])}),{}}}),pa=C({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function xa(e,l,a,t){const n=e.returnObject?l:te(l,e.itemValue),r=te(l,e.itemSelectable,!0),u=t.reduce((s,f)=>(f.key!=null&&(s[f.key]=te(l,f.value)),s),{});return{type:"item",key:e.returnObject?te(l,e.itemValue):n,index:a,value:n,selectable:r,columns:u,raw:l}}function Pa(e,l,a){return l.map((t,n)=>xa(e,t,n,a))}function Sa(e,l){return{items:I(()=>Pa(e,e.items,l.value))}}function wa(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const u=Be("VDataTable"),s=I(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let f=null;Ae(s,()=>{$e(f,s.value)||(f&&f.search!==s.value.search&&(l.value=1),u.emit("update:options",s.value),f=s.value)},{deep:!0,immediate:!0})}const ka=C({...tt(),width:[String,Number],search:String,...ma(),...oa(),...Kt(),...pa(),...ta(),...la(),...Ue(),...Rt()},"DataTable"),Ia=C({...Ht(),...ka(),...Nt(),...Ne()},"VDataTable"),Ba=W()({name:"VDataTable",props:Ia(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=ia(e),{sortBy:r,multiSort:u,mustSort:s}=na(e),{page:f,itemsPerPage:d}=Wt(e),{columns:m,headers:p,sortFunctions:v,sortRawFunctions:y,filterFunctions:h}=Zt(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:x}=Sa(e,m),o=T(e,"search"),{filteredItems:P}=Et(e,x,o,{transform:N=>N.columns,customKeyFilter:h}),{toggleSort:g}=ra({sortBy:r,multiSort:u,mustSort:s,page:f}),{sortByWithGroups:D,opened:B,extractRows:k,isGroupOpen:$,toggleGroup:O}=da({groupBy:n,sortBy:r}),{sortedItems:b}=sa(e,P,D,{transform:N=>N.columns,sortFunctions:v,sortRawFunctions:y}),{flatItems:c}=fa(b,n,B),S=I(()=>c.value.length),{startIndex:w,stopIndex:V,pageCount:_,setItemsPerPage:R}=jt({page:f,itemsPerPage:d,itemsLength:S}),{paginatedItems:j}=qt({items:c,startIndex:w,stopIndex:V,itemsPerPage:d}),z=I(()=>k(j.value)),{isSelected:se,select:at,selectAll:lt,toggleSelect:nt,someSelected:rt,allSelected:st}=aa(e,{allItems:x,currentPage:z}),{isExpanded:ut,toggleExpand:ot}=ba(e);wa({page:f,itemsPerPage:d,sortBy:r,groupBy:n,search:o}),de({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const A=I(()=>({page:f.value,itemsPerPage:d.value,sortBy:r.value,pageCount:_.value,toggleSort:g,setItemsPerPage:R,someSelected:rt.value,allSelected:st.value,isSelected:se,select:at,selectAll:lt,toggleSelect:nt,isExpanded:ut,toggleExpand:ot,isGroupOpen:$,toggleGroup:O,items:z.value.map(N=>N.raw),internalItems:z.value,groupedItems:j.value,columns:m.value,headers:p.value}));return U(()=>{const N=De.filterProps(e),it=_e.filterProps(e),dt=Fe.filterProps(e),ct=Ie.filterProps(e);return i(Ie,F({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},ct),{top:()=>{var J;return(J=t.top)==null?void 0:J.call(t,A.value)},default:()=>{var J,me,be,he,ye,pe;return t.default?t.default(A.value):i(K,null,[(J=t.colgroup)==null?void 0:J.call(t,A.value),i("thead",null,[i(_e,it,t)]),(me=t.thead)==null?void 0:me.call(t,A.value),i("tbody",null,[(be=t["body.prepend"])==null?void 0:be.call(t,A.value),t.body?t.body(A.value):i(Fe,F(a,dt,{items:j.value}),t),(he=t["body.append"])==null?void 0:he.call(t,A.value)]),(ye=t.tbody)==null?void 0:ye.call(t,A.value),(pe=t.tfoot)==null?void 0:pe.call(t,A.value)])},bottom:()=>t.bottom?t.bottom(A.value):i(K,null,[i(Lt,null,null),i(De,N,{prepend:t["footer.prepend"]})])})}),{}}});export{Ba as V,Ca as _};