import{d as R,bE as S,ay as T,v as V,a8 as c,af as n,r as $,bN as k,c as x,B as a,A as l,ak as A,aj as p,C as m,aA as D,ab as I,aa as U,aB as B,q as w,am as N,ao as F,_ as j}from"./ydJ1sahg.js";import{V as E}from"./FC4H28PX.js";import{V as C}from"./v8Nv9j4e.js";import{V as b,a as s}from"./Cfvq-3MG.js";import{V as P}from"./DWiBsrOX.js";import{V as q}from"./CRSTejWx.js";import"./cewnUWkc.js";import"./CeQCJ9FZ.js";import"./BNiDL0uI.js";const O=R({__name:"route-selector",props:{label:{}},setup(_){const d=S(),{entities:t}=T(d);return d.fetch(),(u,f)=>(V(),c(E,{label:u.label,items:n(t),"item-title":"name","item-value":"id",clearable:""},null,8,["label","items"]))}}),z=R({__name:"form",props:{trip:{type:Object,default:()=>({name:"",start:"",end:"",planningRoute:null,recordedRoute:null})}},setup(_){const t=$({..._.trip}),u=k(),f=x(()=>new Date(t.value.start)<new Date),y=async()=>{var r,e;t.value.planningRoute=(r=t.value.planningRoute)==null?void 0:r.id,t.value.recordedRoute=(e=t.value.recordedRoute)==null?void 0:e.id;try{if(t.value.id)await u.update(t.value);else{const i={...t.value};await u.create(i)}w("/trips")}catch(i){console.error("An error occurred while saving the item:",i)}};async function g(){dialog.value=!0}async function v(){await u.delete(t.value.id),w("/items")}return(r,e)=>{const i=O;return V(),c(P,null,{default:a(()=>[l(C,{modelValue:n(t).name,"onUpdate:modelValue":e[0]||(e[0]=o=>n(t).name=o),label:"Name"},null,8,["modelValue"]),l(b,null,{default:a(()=>[l(s,{cols:"6"},{default:a(()=>[l(C,{modelValue:n(t).start,"onUpdate:modelValue":e[1]||(e[1]=o=>n(t).start=o),label:"Start",type:"datetime-local"},null,8,["modelValue"])]),_:1}),l(s,{cols:"6"},{default:a(()=>[l(C,{modelValue:n(t).end,"onUpdate:modelValue":e[2]||(e[2]=o=>n(t).end=o),label:"End",type:"datetime-local"},null,8,["modelValue"])]),_:1})]),_:1}),l(b,null,{default:a(()=>[l(s,null,{default:a(()=>[l(i,{label:"Planned route",modelValue:n(t).planningRoute,"onUpdate:modelValue":e[3]||(e[3]=o=>n(t).planningRoute=o)},null,8,["modelValue"])]),_:1}),n(f)?(V(),c(s,{key:0},{default:a(()=>[l(i,{label:"Recorded route",modelValue:n(t).recordedRoute,"onUpdate:modelValue":e[4]||(e[4]=o=>n(t).recordedRoute=o)},null,8,["modelValue"])]),_:1})):A("",!0)]),_:1}),l(b,{justify:"end"},{default:a(()=>[l(s,{cols:"auto"},{default:a(()=>[l(p,{onClick:e[5]||(e[5]=o=>g())},{default:a(()=>[m("Delete")]),_:1})]),_:1}),l(s,{cols:"auto"},{default:a(()=>[l(p,{onClick:e[6]||(e[6]=o=>r.$router.back())},{default:a(()=>[m("Cancel")]),_:1})]),_:1}),l(s,{cols:"auto"},{default:a(()=>[l(p,{onClick:e[7]||(e[7]=o=>y())},{default:a(()=>[m("Save")]),_:1})]),_:1})]),_:1}),l(D,{modelValue:r.dialog,"onUpdate:modelValue":e[10]||(e[10]=o=>r.dialog=o),"max-width":"290"},{default:a(()=>[l(I,null,{default:a(()=>[l(U,null,{default:a(()=>[m("Are you sure you want to delete this item?")]),_:1}),l(B,null,{default:a(()=>[l(p,{onClick:e[8]||(e[8]=o=>r.dialog=!1)},{default:a(()=>[m("Cancel")]),_:1}),l(p,{onClick:e[9]||(e[9]=o=>v())},{default:a(()=>[m("Delete")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),G=R({__name:"[id]",async setup(_){let d,t;const u=k();[d,t]=N(()=>u.fetch()),await d,t();const f=u.byId(F().params.id);return(y,g)=>{const v=z;return V(),c(q,null,{default:a(()=>[l(v,{trip:n(f)},null,8,["trip"])]),_:1})}}}),Z=j(G,[["__scopeId","data-v-83349e6f"]]);export{Z as default};
