import{_ as u,bU as m,v as c,F as V,B as i,A as t,G as f,a5 as T,bV as C,S as s,C as p,H as x,Q as b}from"./BvNODZbr.js";import{V as o}from"./Cn_TsQeb.js";import{V as k}from"./BXzoN2nV.js";import{V as g}from"./BbQCKCwA.js";import"./evFPe8c0.js";const y={props:{trip:{type:Object,required:!0}},data(){return{editedTrip:{}}},watch:{trip:{handler(a){this.editedTrip.name=a.name},immediate:!0}},methods:{cancel(){this.$router.go(-1)},save(){m().updateTrip(this.editedTrip)}}};function U(a,e,_,n,l,d){return c(),V(x,null,{default:i(()=>[t(f,null,{default:i(()=>[t(o,{modelValue:l.editedTrip.name,"onUpdate:modelValue":e[0]||(e[0]=r=>l.editedTrip.name=r),label:"name"},null,8,["modelValue"]),t(o,{modelValue:l.editedTrip.start,"onUpdate:modelValue":e[1]||(e[1]=r=>l.editedTrip.start=r),type:"datetime-local",label:"start"},null,8,["modelValue"]),t(o,{modelValue:l.editedTrip.end,"onUpdate:modelValue":e[2]||(e[2]=r=>l.editedTrip.end=r),type:"datetime-local",label:"end"},null,8,["modelValue"]),t(k,{modelValue:l.editedTrip.images,"onUpdate:modelValue":e[3]||(e[3]=r=>l.editedTrip.images=r),label:"Images",multiple:""},null,8,["modelValue"])]),_:1}),t(T,null,{default:i(()=>[t(C),t(s,{onClick:d.cancel},{default:i(()=>[p("Cancel")]),_:1},8,["onClick"]),t(s,{onClick:d.save},{default:i(()=>[p("Save")]),_:1},8,["onClick"])]),_:1})]),_:1})}const v=u(y,[["render",U]]),B={async setup(){const a=m();return await a.fetch(),{trip:a.byId(b().params.id)}},data(){return{dialog:!1}}};function S(a,e,_,n,l,d){const r=v;return c(),V(g,null,{default:i(()=>[t(r,{trip:n.trip},null,8,["trip"])]),_:1})}const N=u(B,[["render",S]]);export{N as default};