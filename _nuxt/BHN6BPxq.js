import{a as c}from"./MQVNZVO_.js";import{d as m,r as f,o as u,v as g,a8 as l,af as t,bs as p}from"./MrTfP08J.js";const v=m({__name:"supabase-image",props:{imagePath:String},setup(n){const a=f(""),e=n;async function s(r){return await c("images",r)}async function i(){e.imagePath&&(a.value=await s(e.imagePath))}return u(()=>{e.imagePath&&i()}),(r,o)=>(g(),l(p,{"v-if":t(a),src:t(a)},null,8,["v-if","src"]))}});export{v as _};
