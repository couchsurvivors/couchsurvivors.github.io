import{bx as s}from"./DTtFFXxD.js";async function c(a,e){if(!e)return"";const t=s();try{const{data:r,error:o}=await t.storage.from(a).createSignedUrl(e,60);return r.signedUrl}catch(r){console.error("An error occurred while fetching signed URL:",r.message)}}async function u(a,e){const t=await c(a,e);return await(await fetch(t)).text()}async function l(a,e,t){const r=s(),{data:o,error:n}=await r.storage.from(a).upload(e,t);return n&&console.error("An error occurred while uploading file:",n.message),o}export{u as a,c as g,l as u};
