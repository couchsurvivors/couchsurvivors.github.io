import{_ as u,bO as m,v as c,F as V,B as i,A as t,bP as _,P as s,C as p,N as T}from"./BFrEVmP9.js";import{a as C,c as b,b as x}from"./BlGakmLD.js";import{V as d}from"./CPhGm1wi.js";import{V as k}from"./BXZZZx_Q.js";import{V as g}from"./DiI_0scF.js";import"./bs4ibtrd.js";import"./xTubGozI.js";const y={props:{trip:{type:Object,required:!0}},data(){return{editedTrip:{}}},watch:{trip:{handler(a){this.editedTrip.name=a.name},immediate:!0}},methods:{cancel(){this.$router.go(-1)},save(){m().updateTrip(this.editedTrip)}}};function v(a,e,f,n,r,o){return c(),V(x,null,{default:i(()=>[t(C,null,{default:i(()=>[t(d,{modelValue:r.editedTrip.name,"onUpdate:modelValue":e[0]||(e[0]=l=>r.editedTrip.name=l),label:"name"},null,8,["modelValue"]),t(d,{modelValue:r.editedTrip.start,"onUpdate:modelValue":e[1]||(e[1]=l=>r.editedTrip.start=l),type:"datetime-local",label:"start"},null,8,["modelValue"]),t(d,{modelValue:r.editedTrip.end,"onUpdate:modelValue":e[2]||(e[2]=l=>r.editedTrip.end=l),type:"datetime-local",label:"end"},null,8,["modelValue"]),t(k,{modelValue:r.editedTrip.images,"onUpdate:modelValue":e[3]||(e[3]=l=>r.editedTrip.images=l),label:"Images",multiple:""},null,8,["modelValue"])]),_:1}),t(b,null,{default:i(()=>[t(_),t(s,{onClick:o.cancel},{default:i(()=>[p("Cancel")]),_:1},8,["onClick"]),t(s,{onClick:o.save},{default:i(()=>[p("Save")]),_:1},8,["onClick"])]),_:1})]),_:1})}const B=u(y,[["render",v]]),U={async setup(){const a=m();return await a.fetch(),{trip:a.byId(T().params.id)}},data(){return{dialog:!1}}};function w(a,e,f,n,r,o){const l=B;return c(),V(g,null,{default:i(()=>[t(l,{trip:n.trip},null,8,["trip"])]),_:1})}const P=u(U,[["render",w]]);export{P as default};
