import{_}from"./lfJCJ6ev.js";import{d as f,r as V,bn as g,v as c,F as v,B as o,A as e,S as u,C as d,bb as C,y as F,H as w,G as x,R as y,b5 as R}from"./D-_Di33_.js";import{u as b}from"./se0ErPme.js";import{V as $}from"./BnuzNU5C.js";import{V as k}from"./9l-mOhRP.js";import{V as B,a as p}from"./BNwdXSMp.js";import{V as N}from"./NPU1zdhK.js";import{V as S}from"./P8N_VM26.js";import{V as U}from"./D-MUvHs5.js";import{V as D}from"./F--aJuPD.js";import"./BH2kDmp0.js";import"./BwGi1Z8V.js";import"./BfdBEdzP.js";const T=f({__name:"form",props:{route:{type:Object,default:()=>({name:"",originalFile:null})}},emits:["close-dialog"],setup(m){const l=m,a=V({...l.route}),s=g(),i=async()=>{try{if(a.value.originalFile){const r=await b("routes",C(),a.value.originalFile);if(l.route.id)await s.update(newRoute);else{const t={name:a.value.name,originalFile:r.path};await s.create(t)}}}catch(r){console.error("An error occurred while saving the route:",r)}};return(r,t)=>(c(),v(N,null,{default:o(()=>[e($,{modelValue:a.value.name,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value.name=n),label:"Name"},null,8,["modelValue"]),e(k,{modelValue:a.value.originalFile,"onUpdate:modelValue":t[1]||(t[1]=n=>a.value.originalFile=n),label:"File"},null,8,["modelValue"]),e(B,{justify:"end"},{default:o(()=>[e(p,{cols:"auto"},{default:o(()=>[e(u,{onClick:t[2]||(t[2]=n=>r.$emit("close-dialog"))},{default:o(()=>[d("Cancel")]),_:1})]),_:1}),e(p,{cols:"auto"},{default:o(()=>[e(u,{onClick:i},{default:o(()=>[d("Save")]),_:1})]),_:1})]),_:1})]),_:1}))}}),j={class:"ma-4"},Q=f({__name:"index",setup(m){const l=V(!1);function a(){l.value=!1}return(s,i)=>{const r=_,t=T;return c(),v(S,null,{default:o(()=>[e(r,{"entity-type":"routes"}),e(U,{"model-value":"",position:"bottom",class:"text-end",size:"88"},{default:o(()=>[F("div",j,[e(u,{icon:"mdi-plus",size:"large",color:"primary",elevation:"8",onClick:i[0]||(i[0]=n=>l.value=!0)})])]),_:1}),e(D,{modelValue:y(l),"onUpdate:modelValue":i[2]||(i[2]=n=>R(l)?l.value=n:null),"max-width":"600"},{default:o(()=>[e(w,{"prepend-icon":"mdi-sign-direction",title:"Create new route"},{default:o(()=>[e(x,null,{default:o(()=>[e(t,{onCloseDialog:i[1]||(i[1]=n=>a())})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{Q as default};
