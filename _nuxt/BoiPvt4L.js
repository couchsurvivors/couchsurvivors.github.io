import{_ as w}from"./B4kxGqbu.js";import{a6 as H,a7 as A,a8 as L,a9 as k,aa as S,ab as M,ac as T,T as B,r as h,ad as P,c as s,ae as x,af as F,S as V,A as t,ag as I,ah as R,ai as $,aj as z,ak as D,al as y,am as Z,d as N,a1 as E,P as j,v as q,F as O,B as i,R as r,a3 as U,C as p,M as W,z as G,H as J,q as C,_ as K}from"./BOXxnL9G.js";import{V as Q,_ as X}from"./BTvqr0mr.js";import{V as Y}from"./B1kK3Egp.js";import{V as ee}from"./Ce_BswcB.js";import{V as ae}from"./53Xsm9HT.js";import"./BjxkiQj4.js";import"./Bw4Ml-tK.js";import"./DdB-Mr5B.js";const te=H({app:Boolean,appear:Boolean,extended:Boolean,layout:Boolean,location:{type:String,default:"bottom end"},offset:Boolean,modelValue:{type:Boolean,default:!0},...A(L({active:!0}),["location"]),...k(),...S({transition:"fab-transition"})},"VFab"),oe=M()({name:"VFab",props:te(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:f}=m;const v=T(e,"modelValue"),c=B(56),g=h(),{resizeRef:u}=P(n=>{n.length&&(c.value=n[0].target.clientHeight)}),d=s(()=>e.app||e.absolute),b=s(()=>d.value?e.location.split(" ").shift():!1),a=s(()=>d.value?e.location.split(" ")[1]??"end":!1);x(()=>e.app,()=>{const n=D({id:e.name,order:s(()=>parseInt(e.order,10)),position:b,layoutSize:s(()=>e.layout?c.value+24:0),elementSize:s(()=>c.value+24),active:s(()=>e.app&&v.value),absolute:y(e,"absolute")});Z(()=>{g.value=n.layoutItemStyles.value})});const o=h();return F(()=>{const n=V.filterProps(e);return t("div",{ref:o,class:["v-fab",{"v-fab--absolute":e.absolute,"v-fab--app":!!e.app,"v-fab--extended":e.extended,"v-fab--offset":e.offset,[`v-fab--${b.value}`]:d.value,[`v-fab--${a.value}`]:d.value},e.class],style:[e.app?{...g.value}:{height:"inherit",width:void 0},e.style]},[t("div",{class:"v-fab__container"},[t(I,{appear:e.appear,transition:e.transition},{default:()=>[R(t(V,z({ref:u},n,{active:void 0,location:void 0}),f),[[$,e.active]])]})])])}),{}}}),le=N({__name:"index",async setup(e){let m,f;const v=E(),c=y(v);[m,f]=j(()=>v.fetch()),await m,f();const g=[{title:"Name",value:"name",sortable:!0,filterable:!0},{title:"Category",value:"category",sortable:!0,filterable:!0},{title:"Weight",value:"weight",sortable:!0,filterable:!0},{title:"",value:"edit",align:"end",width:"50px",sortable:!1,filterable:!1},{title:"",value:"delete",align:"end",width:"5px",sortable:!1,filterable:!1}],u=h(""),d={weight:(a,o)=>a-o,category:(a,o)=>a.name.localeCompare(o.name),amount:(a,o)=>a-o},b={};return(a,o)=>{const n=w;return q(),O(ae,null,{default:i(()=>[t(r(oe),{icon:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",class:"pa-5",onClick:o[0]||(o[0]=l=>("navigateTo"in a?a.navigateTo:r(C))("/items/new"))}),t(J,null,{text:i(()=>[t(Y,{modelValue:r(u),"onUpdate:modelValue":o[1]||(o[1]=l=>U(u)?u.value=l:null),label:"Search","prepend-inner-icon":"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",variant:"outlined","hide-details":"","single-line":""},null,8,["modelValue"])]),default:i(()=>[t(Q,{id:"items-table",items:r(c).entities,headers:g,"items-per-page":"50",search:r(u),"custom-key-sort":d,"custom-filter":b},{"item.category":i(({item:l})=>[t(n,{category:l.category},null,8,["category"])]),"item.edit":i(({item:l})=>[t(V,{"prepend-icon":"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",onClick:_=>("navigateTo"in a?a.navigateTo:r(C))(`/items/${l.id}`)},{default:i(()=>[p(" Edit ")]),_:2},1032,["onClick"])]),"item.delete":i(({item:l})=>[t(V,{"prepend-icon":"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",onClick:_=>a.deleteDialog(l)},{default:i(()=>[p(" Delete ")]),_:2},1032,["onClick"])]),"item.weight":i(({item:l})=>[t(ee,{color:("weightColor"in a?a.weightColor:r(X))(l.weight)},{default:i(()=>[t(W,null,{default:i(()=>[p("M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5Z")]),_:1}),p("   "+G(l.weight),1)]),_:2},1032,["color"])]),_:1},8,["items","search"])]),_:1})]),_:1})}}}),ve=K(le,[["__scopeId","data-v-78a8404b"]]);export{ve as default};
