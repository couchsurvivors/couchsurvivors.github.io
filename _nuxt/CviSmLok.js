import{_ as h,v as a,a8 as o,B as n,A as s,S as T,C as l,z as y,af as p,q as I,D as $,E as C,y as g,o as F,bG as A,bs as H,x as k,ak as _,c as S,ae as M,ad as j,d as P,bu as Z,am as q,ah as w,ai as x,ac as K,F as U,G as J,aE as Q,I as W,aK as X,a7 as v,L as Y}from"./CZEdhyo1.js";import{a as f,V as L}from"./BoQ2L2EA.js";import{_ as ee}from"./BSTKFV1_.js";import{_ as te}from"./FwZCIuft.js";import{_ as N}from"./NXhelQGU.js";import{g as ne,f as ae}from"./BFbS1nff.js";const se={props:{entity:Object({})}},O=e=>($("data-v-4dcc2ae3"),e=e(),C(),e),oe=O(()=>g("br",null,null,-1)),ie=O(()=>g("br",null,null,-1));function re(e,i,t,r,c,m){return a(),o(L,{class:"link",onClick:i[0]||(i[0]=d=>("navigateTo"in e?e.navigateTo:p(I))(`/routes/${t.entity.id}/`))},{default:n(()=>[s(f,{cols:"3",sm:"2"},{default:n(()=>[s(T,{class:"placeholder-icon h-100 w-100"},{default:n(()=>[l("custom:route")]),_:1})]),_:1}),s(f,{cols:"9",sm:"10"},{default:n(()=>[l(y(t.entity.name)+" ",1),oe,l(" "+y(t.entity.distance/1e3)+"km ",1),ie,l(" REGION ")]),_:1})]),_:1})}const le=h(se,[["render",re],["__scopeId","data-v-4dcc2ae3"]]),b=e=>($("data-v-059415f9"),e=e(),C(),e),ue={key:0},ce=b(()=>g("br",null,null,-1)),me=b(()=>g("br",null,null,-1)),ye=b(()=>g("br",null,null,-1)),de={key:1},_e={__name:"teaser",props:{entity:Object},setup(e){const i=t=>t?t.map(r=>r.name).join(", "):"";return F(()=>{}),(t,r)=>{const c=te,m=N;return a(),o(L,{class:"link",onClick:r[0]||(r[0]=d=>("navigateTo"in t?t.navigateTo:p(I))(`/items/${e.entity.id}/`))},{default:n(()=>[s(f,{cols:"3"},{default:n(()=>[s(A,{"aspect-ratio":"16 / 9","max-height":"150"},{default:n(()=>[e.entity.image?(a(),o(c,{key:0,"image-path":e.entity.image},null,8,["image-path"])):(a(),o(H,{key:1,src:`https://picsum.photos/640/400?a=${Math.random()}`},null,8,["src"]))]),_:1})]),_:1}),s(f,{cols:"9"},{default:n(()=>[g("span",null,y(e.entity.name),1),e.entity.amount>1?(a(),k("span",ue," x"+y(e.entity.amount),1)):_("",!0),ce,s(T,null,{default:n(()=>[l("M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7A4,4 0 0,0 12,3A4,4 0 0,0 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z")]),_:1}),l(" "+y(e.entity.weight*e.entity.amount)+" ",1),me,s(m,{category:e.entity.category},null,8,["category"]),ye,s(T,null,{default:n(()=>[l("M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,16H9V18H8V16H6V15H18V16Z")]),_:1}),e.entity&&e.entity.inventories?(a(),k("span",de," In inventories: "+y(i(e.entity.inventories)),1)):_("",!0)]),_:1})]),_:1})}}},pe=h(_e,[["__scopeId","data-v-059415f9"]]),fe=e=>($("data-v-b31188f7"),e=e(),C(),e),Ve=fe(()=>g("br",null,null,-1)),ge={__name:"teaser",props:{entity:Object},setup(e){const i=e,t=S(()=>ne(i.entity.items));return(r,c)=>{const m=N;return a(),o(L,{class:"link",onClick:c[0]||(c[0]=d=>("navigateTo"in r?r.navigateTo:p(I))(`/inventories/${e.entity.id}/`))},{default:n(()=>[s(f,{cols:"3",sm:"2"},{default:n(()=>[s(T,{class:"placeholder-icon h-100 w-100"},{default:n(()=>[l("custom:inventory")]),_:1})]),_:1}),s(f,{cols:"9",sm:"10"},{default:n(()=>[l(" Name: "+y(e.entity.name)+" ",1),Ve,(a(!0),k(M,null,j(Object.keys(p(t)),d=>(a(),o(m,{category:p(t)[d],key:d},{default:n(()=>[l(y(p(ae)(p(t)[d].weight)),1)]),_:2},1032,["category"]))),128))]),_:1})]),_:1})}}},ve=h(ge,[["__scopeId","data-v-b31188f7"]]),Te={__name:"friend-teaser",props:{entity:Object},setup(e){return(i,t)=>y(e.entity.userId_2)}},he=h(Te,[["__scopeId","data-v-c457af4a"]]),ke={props:{entity:Object({}),entityType:String}};function Ie(e,i,t,r,c,m){return a(),o(L,{class:"link",onClick:i[0]||(i[0]=d=>("navigateTo"in e?e.navigateTo:p(I))(`/${t.entityType}/${t.entity.id}/`))},{default:n(()=>[s(f,{cols:"3"},{default:n(()=>[s(A,{"aspect-ratio":"16 / 9","max-height":"150"},{default:n(()=>[s(H,{cover:"",src:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{default:n(()=>[t.entity.enriched?(a(),o(T,{key:0},{default:n(()=>[l("M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z")]),_:1})):_("",!0)]),_:1})]),_:1})]),_:1}),s(f,{cols:"9"},{default:n(()=>[l(y(t.entity.name),1)]),_:1})]),_:1})}const Le=h(ke,[["render",Ie],["__scopeId","data-v-1d789906"]]),je=P({__name:"list",props:{entityType:{}},async setup(e){let i,t;const r=e,c=Z();if(c[r.entityType]===void 0)throw new Error(`Store for ${r.entityType} not found`);const m=c[r.entityType];[i,t]=q(()=>m.fetch()),await i,t();const d=m.entities;return(u,Ce)=>{const R=le,z=ee,B=pe,E=ve,G=he,D=Le;return a(),o(K,null,{default:n(()=>[(a(!0),k(M,null,j(p(d),V=>(a(),o(w,{key:V.id},{default:n(()=>[u.entityType=="routes"?(a(),o(R,{key:0,entity:V},null,8,["entity"])):_("",!0),u.entityType=="trips"?(a(),o(z,{key:1,entity:V},null,8,["entity"])):_("",!0),u.entityType=="items"?(a(),o(B,{key:2,entity:V},null,8,["entity"])):_("",!0),u.entityType=="inventories"?(a(),o(E,{key:3,entity:V},null,8,["entity"])):_("",!0),u.entityType=="friends"?(a(),o(G,{key:4,entity:V},null,8,["entity"])):_("",!0),u.entityType!="items"&&u.entityType!="routes"&&u.entityType!="trips"&&u.entityType!="inventories"&&u.entityType!="friends"?(a(),o(D,{key:5,entity:V,"entity-type":u.entityType},null,8,["entity","entity-type"])):_("",!0)]),_:2},1024))),128)),p(d).length==0?(a(),o(w,{key:0},{default:n(()=>[s(x,null,{default:n(()=>[l("No "+y(u.entityType)+" found",1)]),_:1})]),_:1})):_("",!0)]),_:1})}}}),$e=U({position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...J(),...Q()},"VLayoutItem"),Ne=W()({name:"VLayoutItem",props:$e(),setup(e,i){let{slots:t}=i;const{layoutItemStyles:r,layoutIsReady:c}=X({id:e.name,order:S(()=>parseInt(e.order,10)),position:v(e,"position"),elementSize:v(e,"size"),layoutSize:v(e,"size"),active:v(e,"modelValue"),absolute:v(e,"absolute")});return Y(()=>{var m;return s("div",{class:["v-layout-item",e.class],style:[r.value,e.style]},[(m=t.default)==null?void 0:m.call(t)])}),c}});export{Ne as V,je as _};
