import{V as _,_ as g}from"./ktymW7vi.js";import{d as V,r as f,bE as C,v as c,a8 as v,B as o,A as e,aj as u,C as d,bt as F,y as H,ab as w,aa as x,af as y,ag as L,aA as R}from"./DsP5jJhd.js";import{u as b}from"./DhaDgfaR.js";import{V as $}from"./BRfpB3eP.js";import{V as k}from"./BgZiAbAJ.js";import{V as A,a as p}from"./DMhr-ICX.js";import{V as B}from"./5nAN3y4N.js";import{V as N}from"./e7KLtDY4.js";import"./CTX2mowZ.js";import"./C1SLCpBn.js";import"./BOV1GzfD.js";import"./CKlDA8km.js";import"./BFbS1nff.js";import"./BZoUCGlY.js";const U=V({__name:"form",props:{route:{type:Object,default:()=>({name:"",originalFile:null})}},emits:["close-dialog"],setup(m){const l=m,t=f({...l.route}),s=C(),r=async()=>{try{if(t.value.originalFile){const i=await b("routes",F(),t.value.originalFile);if(l.route.id)await s.update(newRoute);else{const a={name:t.value.name,originalFile:i.path};await s.create(a)}}}catch(i){console.error("An error occurred while saving the route:",i)}};return(i,a)=>(c(),v(B,null,{default:o(()=>[e($,{modelValue:t.value.name,"onUpdate:modelValue":a[0]||(a[0]=n=>t.value.name=n),label:"Name"},null,8,["modelValue"]),e(k,{modelValue:t.value.originalFile,"onUpdate:modelValue":a[1]||(a[1]=n=>t.value.originalFile=n),label:"File"},null,8,["modelValue"]),e(A,{justify:"end"},{default:o(()=>[e(p,{cols:"auto"},{default:o(()=>[e(u,{onClick:a[2]||(a[2]=n=>i.$emit("close-dialog"))},{default:o(()=>[d("Cancel")]),_:1})]),_:1}),e(p,{cols:"auto"},{default:o(()=>[e(u,{onClick:r},{default:o(()=>[d("Save")]),_:1})]),_:1})]),_:1})]),_:1}))}}),j={class:"ma-4"},Q=V({__name:"index",setup(m){const l=f(!1);function t(){l.value=!1}return(s,r)=>{const i=g,a=U;return c(),v(N,null,{default:o(()=>[e(i,{"entity-type":"routes"}),e(_,{"model-value":"",position:"bottom",class:"text-end",size:"88"},{default:o(()=>[H("div",j,[e(u,{icon:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",size:"large",color:"primary",elevation:"8",onClick:r[0]||(r[0]=n=>l.value=!0)})])]),_:1}),e(R,{modelValue:y(l),"onUpdate:modelValue":r[2]||(r[2]=n=>L(l)?l.value=n:null),"max-width":"600"},{default:o(()=>[e(w,{"prepend-icon":"M11,12H3.5L6,9.5L3.5,7H11V3L12,2L13,3V7H18L20.5,9.5L18,12H13V20A2,2 0 0,1 15,22H9A2,2 0 0,1 11,20V12Z",title:"Create new route"},{default:o(()=>[e(x,null,{default:o(()=>[e(a,{onCloseDialog:r[1]||(r[1]=n=>t())})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{Q as default};
