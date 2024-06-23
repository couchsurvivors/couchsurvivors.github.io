import{_ as S}from"./gKsXDWLE.js";import{d as w,ax as T,a7 as H,am as B,r as C,v as k,a8 as L,B as o,A as a,af as i,ag as M,aj as p,q as V,S as y,C as _,z as I,ab as F,y as A,F as $,aC as x,aD as P,aE as R,aF as D,I as z,aG as N,ap as Z,aH as E,c,aI as j,L as q,aJ as G,M as J,N as K,a1 as O,aK as U,aL as W,_ as Q}from"./BTgDbDKf.js";import{V as X,_ as Y}from"./C4une5xP.js";import{V as ee}from"./CosgYbgS.js";import{V as te}from"./BzIQuzPd.js";import{V as ae}from"./Ef23PHsR.js";import"./B2JvHob3.js";import"./C3V2NoAB.js";import"./C0xDtUK3.js";import"./lVefrZb3.js";import"./BZy6EG3O.js";const oe=A("span",null," Edit ",-1),ne=A("span",{class:"d-none d-sm-block"}," Delete ",-1),le=w({__name:"list",async setup(e){let r,u;const d=T(),m=H(d);[r,u]=B(()=>d.fetch()),await r,u();const b=[{title:"Name",value:"name",sortable:!0,filterable:!0},{title:"Category",value:"category",sortable:!0,filterable:!0},{title:"Weight",value:"weight",sortable:!0,filterable:!0},{title:"",value:"edit",align:"end",width:"50px",sortable:!1,filterable:!1},{title:"",value:"delete",align:"end",width:"5px",sortable:!1,filterable:!1}],f=C(""),v={weight:(t,l)=>t-l,category:(t,l)=>t.name.localeCompare(l.name),amount:(t,l)=>t-l},g={};return(t,l)=>{const s=S;return k(),L(F,null,{text:o(()=>[a(ee,{modelValue:i(f),"onUpdate:modelValue":l[0]||(l[0]=n=>M(f)?f.value=n:null),label:"Search","prepend-inner-icon":"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",variant:"outlined","hide-details":"","single-line":""},null,8,["modelValue"])]),default:o(()=>[a(X,{id:"items-table",items:i(m).entities,headers:b,"items-per-page":"50",search:i(f),"custom-key-sort":v,"custom-filter":g,"mobile-breakpoint":"0"},{"item.category":o(({item:n})=>[a(s,{category:n.category},null,8,["category"])]),"item.edit":o(({item:n})=>[a(p,{class:"d-block d-sm-none",onClick:h=>("navigateTo"in t?t.navigateTo:i(V))(`/items/${n.id}`)},{default:o(()=>[a(y,null,{default:o(()=>[_("M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z")]),_:1})]),_:2},1032,["onClick"]),a(p,{class:"d-none d-sm-block",onClick:h=>("navigateTo"in t?t.navigateTo:i(V))(`/items/${n.id}`)},{default:o(()=>[oe]),_:2},1032,["onClick"])]),"item.delete":o(({item:n})=>[a(p,{"prepend-icon":"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",onClick:h=>t.deleteDialog(n)},{default:o(()=>[ne]),_:2},1032,["onClick"])]),"item.weight":o(({item:n})=>[a(te,{color:("weightColor"in t?t.weightColor:i(Y))(n.weight)},{default:o(()=>[a(y,null,{default:o(()=>[_("M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5Z")]),_:1}),_("   "+I(n.weight),1)]),_:2},1032,["color"])]),_:1},8,["items","search"])]),_:1})}}}),se=$({app:Boolean,appear:Boolean,extended:Boolean,layout:Boolean,location:{type:String,default:"bottom end"},offset:Boolean,modelValue:{type:Boolean,default:!0},...x(P({active:!0}),["location"]),...R(),...D({transition:"fab-transition"})},"VFab"),ie=z()({name:"VFab",props:se(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:u}=r;const d=N(e,"modelValue"),m=Z(56),b=C(),{resizeRef:f}=E(s=>{s.length&&(m.value=s[0].target.clientHeight)}),v=c(()=>e.app||e.absolute),g=c(()=>v.value?e.location.split(" ").shift():!1),t=c(()=>v.value?e.location.split(" ")[1]??"end":!1);j(()=>e.app,()=>{const s=U({id:e.name,order:c(()=>parseInt(e.order,10)),position:g,layoutSize:c(()=>e.layout?m.value+24:0),elementSize:c(()=>m.value+24),active:c(()=>e.app&&d.value),absolute:H(e,"absolute")});W(()=>{b.value=s.layoutItemStyles.value})});const l=C();return q(()=>{const s=p.filterProps(e);return a("div",{ref:l,class:["v-fab",{"v-fab--absolute":e.absolute,"v-fab--app":!!e.app,"v-fab--extended":e.extended,"v-fab--offset":e.offset,[`v-fab--${g.value}`]:v.value,[`v-fab--${t.value}`]:v.value},e.class],style:[e.app?{...b.value}:{height:"inherit",width:void 0},e.style]},[a("div",{class:"v-fab__container"},[a(G,{appear:e.appear,transition:e.transition},{default:()=>[J(a(p,O({ref:f},s,{active:void 0,location:void 0}),u),[[K,e.active]])]})])])}),{}}}),re=w({__name:"index",setup(e){return(r,u)=>{const d=le;return k(),L(ae,null,{default:o(()=>[a(i(ie),{icon:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",class:"pa-5",onClick:u[0]||(u[0]=m=>("navigateTo"in r?r.navigateTo:i(V))("/items/new"))}),a(d)]),_:1})}}}),Ve=Q(re,[["__scopeId","data-v-42575f5d"]]);export{Ve as default};
