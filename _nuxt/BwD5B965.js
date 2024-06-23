import{d as b,bE as T,ay as $,v as f,a8 as V,af as n,r as k,bN as x,c as A,B as l,A as e,ak as D,aj as p,C as i,aA as I,ag as U,ab as B,aa as N,aB as F,q as g,am as j,ao as E,_ as P}from"./5MB17W0k.js";import{V as q}from"./D1jTrQfj.js";import{V as v}from"./C6yTgCsY.js";import{V as C,a as s}from"./B1iX2xoJ.js";import{V as O}from"./CMnLk8gv.js";import{V as z}from"./_HaEimW3.js";import"./D0InmReK.js";import"./EQGK6vdQ.js";import"./ByEcC_rH.js";const G=b({__name:"route-selector",props:{label:{}},setup(c){const r=T(),{entities:u}=$(r);return r.fetch(),(a,d)=>(f(),V(q,{label:a.label,items:n(u),"item-title":"name","item-value":"id",clearable:""},null,8,["label","items"]))}}),H=b({__name:"form",props:{trip:{type:Object,default:()=>({name:"",start:"",end:"",planningRoute:null,recordedRoute:null})}},setup(c){const r=c,u=k(!1),a=k({...r.trip}),d=x(),y=A(()=>new Date(a.value.start)<new Date),w=async()=>{try{if(a.value.id)await d.update(a.value);else{const m={...a.value};await d.create(m)}g("/trips")}catch(m){console.error("An error occurred while saving the item:",m)}};async function _(){u.value=!0}async function S(){await d.delete(a.value.id),g("/items")}return(m,t)=>{const R=G;return f(),V(O,null,{default:l(()=>[e(v,{modelValue:n(a).name,"onUpdate:modelValue":t[0]||(t[0]=o=>n(a).name=o),label:"Name"},null,8,["modelValue"]),e(C,null,{default:l(()=>[e(s,{cols:"6"},{default:l(()=>[e(v,{modelValue:n(a).start,"onUpdate:modelValue":t[1]||(t[1]=o=>n(a).start=o),label:"Start",type:"datetime-local"},null,8,["modelValue"])]),_:1}),e(s,{cols:"6"},{default:l(()=>[e(v,{modelValue:n(a).end,"onUpdate:modelValue":t[2]||(t[2]=o=>n(a).end=o),label:"End",type:"datetime-local"},null,8,["modelValue"])]),_:1})]),_:1}),e(C,null,{default:l(()=>[e(s,null,{default:l(()=>[e(R,{label:"Planned route",modelValue:n(a).planningRoute,"onUpdate:modelValue":t[3]||(t[3]=o=>n(a).planningRoute=o)},null,8,["modelValue"])]),_:1}),n(y)?(f(),V(s,{key:0},{default:l(()=>[e(R,{label:"Recorded route",modelValue:n(a).recordedRoute,"onUpdate:modelValue":t[4]||(t[4]=o=>n(a).recordedRoute=o)},null,8,["modelValue"])]),_:1})):D("",!0)]),_:1}),e(C,{justify:"end"},{default:l(()=>[e(s,{cols:"auto"},{default:l(()=>[e(p,{onClick:t[5]||(t[5]=o=>_())},{default:l(()=>[i("Delete")]),_:1})]),_:1}),e(s,{cols:"auto"},{default:l(()=>[e(p,{onClick:t[6]||(t[6]=o=>m.$router.back())},{default:l(()=>[i("Cancel")]),_:1})]),_:1}),e(s,{cols:"auto"},{default:l(()=>[e(p,{onClick:t[7]||(t[7]=o=>w())},{default:l(()=>[i("Save")]),_:1})]),_:1})]),_:1}),e(I,{modelValue:n(u),"onUpdate:modelValue":t[10]||(t[10]=o=>U(u)?u.value=o:null),"max-width":"290"},{default:l(()=>[e(B,null,{default:l(()=>[e(N,null,{default:l(()=>[i("Are you sure you want to delete this item?")]),_:1}),e(F,null,{default:l(()=>[e(p,{onClick:t[8]||(t[8]=o=>u.value=!1)},{default:l(()=>[i("Cancel")]),_:1}),e(p,{onClick:t[9]||(t[9]=o=>S())},{default:l(()=>[i("Delete")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),J=b({__name:"[id]",async setup(c){let r,u;const a=x();[r,u]=j(()=>a.fetch()),await r,u();const d=a.byId(E().params.id);return(y,w)=>{const _=H;return f(),V(z,null,{default:l(()=>[e(_,{trip:n(d)},null,8,["trip"])]),_:1})}}}),ee=P(J,[["__scopeId","data-v-83349e6f"]]);export{ee as default};
