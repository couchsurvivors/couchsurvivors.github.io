import{d as C,r as g,v as y,F as w,B as a,y as b,z as k,O as n,A as t,P as d,C as s,q as c,bM as S,M as T,N as $,_ as x}from"./mlFaVk3s.js";import{V as f}from"./KL2e0yT4.js";import{V as v,a as u}from"./B5SRhqMh.js";import{V as A}from"./D3ri_GGc.js";import{b as B,a as D,c as N}from"./1ZS7ypFI.js";import{V as F}from"./CNwJG-VI.js";import{V as I}from"./CveznNIm.js";import"./DRL52V8K.js";const U=C({__name:"form",props:{trip:{type:Object,default:()=>({name:"",start:"",end:""})}},setup(V){const l=g({...V.trip}),i=async()=>{try{if(l.value.id)await itemsStore.update(l.value);else{const r={...l.value};await itemsStore.create(r)}c("/items")}catch(r){console.error("An error occurred while saving the item:",r)}};async function p(){dialog.value=!0}async function _(){await itemsStore.delete(l.value.id),c("/items")}return(r,e)=>(y(),w(F,null,{default:a(()=>[b("pre",null,""+k(n(l))+`
        `,1),t(f,{modelValue:n(l).name,"onUpdate:modelValue":e[0]||(e[0]=o=>n(l).name=o),label:"Name"},null,8,["modelValue"]),t(v,null,{default:a(()=>[t(u,{cols:"6"},{default:a(()=>[t(f,{modelValue:n(l).start,"onUpdate:modelValue":e[1]||(e[1]=o=>n(l).start=o),label:"Start",type:"datetime-local"},null,8,["modelValue"])]),_:1}),t(u,{cols:"6"},{default:a(()=>[t(f,{modelValue:n(l).end,"onUpdate:modelValue":e[2]||(e[2]=o=>n(l).end=o),label:"End",type:"datetime-local"},null,8,["modelValue"])]),_:1})]),_:1}),t(v,{justify:"end"},{default:a(()=>[t(u,{cols:"auto"},{default:a(()=>[t(d,{onClick:e[3]||(e[3]=o=>p())},{default:a(()=>[s("Delete")]),_:1})]),_:1}),t(u,{cols:"auto"},{default:a(()=>[t(d,{onClick:e[4]||(e[4]=o=>r.$router.back())},{default:a(()=>[s("Cancel")]),_:1})]),_:1}),t(u,{cols:"auto"},{default:a(()=>[t(d,{onClick:e[5]||(e[5]=o=>i())},{default:a(()=>[s("Save")]),_:1})]),_:1})]),_:1}),t(A,{modelValue:r.dialog,"onUpdate:modelValue":e[8]||(e[8]=o=>r.dialog=o),"max-width":"290"},{default:a(()=>[t(B,null,{default:a(()=>[t(D,null,{default:a(()=>[s("Are you sure you want to delete this item?")]),_:1}),t(N,null,{default:a(()=>[t(d,{onClick:e[6]||(e[6]=o=>r.dialog=!1)},{default:a(()=>[s("Cancel")]),_:1}),t(d,{onClick:e[7]||(e[7]=o=>_())},{default:a(()=>[s("Delete")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}}),j=C({__name:"[id]",async setup(V){let m,l;const i=S();[m,l]=T(()=>i.fetch()),await m,l();const p=i.byId($().params.id);return(_,r)=>{const e=U;return y(),w(I,null,{default:a(()=>[t(e,{trip:n(p)},null,8,["trip"])]),_:1})}}}),H=x(j,[["__scopeId","data-v-92e80986"]]);export{H as default};
