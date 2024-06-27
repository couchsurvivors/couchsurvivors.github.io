import{d as b,bD as T,ay as $,v as f,a8 as V,af as n,r as k,bM as x,c as D,B as l,A as e,ak as A,aj as p,C as i,aA as I,ag as U,ab as B,aa as F,aB as N,q as g,an as j,ao as P,_ as q}from"./MTfLE5pc.js";import{V as E}from"./DYl9N08D.js";import{V as v}from"./CgNtRDdw.js";import{V as C,a as s}from"./DH_7KZTI.js";import{V as M}from"./Z-_ijrtr.js";import{V as O}from"./D6ZKDPUr.js";import"./D0q3XL_p.js";import"./CF_G-wYN.js";import"./Ba4Z7aGB.js";const z=b({__name:"route-selector",props:{label:{}},setup(c){const r=T(),{entities:u}=$(r);return r.fetch(),(a,d)=>(f(),V(E,{label:a.label,items:n(u),"item-title":"name","item-value":"id",clearable:""},null,8,["label","items"]))}}),G=b({__name:"form",props:{trip:{type:Object,default:()=>({name:"",start:"",end:"",planningRoute:null,recordedRoute:null})}},setup(c){const r=c,u=k(!1),a=k({...r.trip}),d=x(),y=D(()=>new Date(a.value.start)<new Date),w=async()=>{try{if(a.value.id)await d.update(a.value);else{const m={...a.value};await d.create(m)}g("/trips")}catch(m){console.error("An error occurred while saving the item:",m)}};async function _(){u.value=!0}async function S(){await d.delete(a.value.id),g("/items")}return(m,t)=>{const R=z;return f(),V(M,null,{default:l(()=>[e(v,{modelValue:n(a).name,"onUpdate:modelValue":t[0]||(t[0]=o=>n(a).name=o),label:"Name"},null,8,["modelValue"]),e(C,null,{default:l(()=>[e(s,{cols:"6"},{default:l(()=>[e(v,{modelValue:n(a).start,"onUpdate:modelValue":t[1]||(t[1]=o=>n(a).start=o),label:"Start",type:"datetime-local"},null,8,["modelValue"])]),_:1}),e(s,{cols:"6"},{default:l(()=>[e(v,{modelValue:n(a).end,"onUpdate:modelValue":t[2]||(t[2]=o=>n(a).end=o),label:"End",type:"datetime-local"},null,8,["modelValue"])]),_:1})]),_:1}),e(C,null,{default:l(()=>[e(s,null,{default:l(()=>[e(R,{label:"Planned route",modelValue:n(a).planningRoute,"onUpdate:modelValue":t[3]||(t[3]=o=>n(a).planningRoute=o)},null,8,["modelValue"])]),_:1}),n(y)?(f(),V(s,{key:0},{default:l(()=>[e(R,{label:"Recorded route",modelValue:n(a).recordedRoute,"onUpdate:modelValue":t[4]||(t[4]=o=>n(a).recordedRoute=o)},null,8,["modelValue"])]),_:1})):A("",!0)]),_:1}),e(C,{justify:"end"},{default:l(()=>[e(s,{cols:"auto"},{default:l(()=>[e(p,{onClick:t[5]||(t[5]=o=>_())},{default:l(()=>[i("Delete")]),_:1})]),_:1}),e(s,{cols:"auto"},{default:l(()=>[e(p,{onClick:t[6]||(t[6]=o=>m.$router.back())},{default:l(()=>[i("Cancel")]),_:1})]),_:1}),e(s,{cols:"auto"},{default:l(()=>[e(p,{onClick:t[7]||(t[7]=o=>w())},{default:l(()=>[i("Save")]),_:1})]),_:1})]),_:1}),e(I,{modelValue:n(u),"onUpdate:modelValue":t[10]||(t[10]=o=>U(u)?u.value=o:null),"max-width":"290"},{default:l(()=>[e(B,null,{default:l(()=>[e(F,null,{default:l(()=>[i("Are you sure you want to delete this item?")]),_:1}),e(N,null,{default:l(()=>[e(p,{onClick:t[8]||(t[8]=o=>u.value=!1)},{default:l(()=>[i("Cancel")]),_:1}),e(p,{onClick:t[9]||(t[9]=o=>S())},{default:l(()=>[i("Delete")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),H=b({__name:"[id]",async setup(c){let r,u;const a=x();[r,u]=j(()=>a.fetch()),await r,u();const d=a.byId(P().params.id);return(y,w)=>{const _=G;return f(),V(O,null,{default:l(()=>[e(_,{trip:n(d)},null,8,["trip"])]),_:1})}}}),ee=q(H,[["__scopeId","data-v-83349e6f"]]);export{ee as default};
