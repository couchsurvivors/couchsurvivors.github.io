import{_ as r,G as c,o as n,g as s,w as a,b as i,d as g,t as m,ca as l,cb as u}from"./FFCUu7_l.js";import{V as d}from"./CjKBUzIf.js";const f={__name:"chip",props:{category:Object},setup(t){return c(()=>{}),(o,e)=>(n(),s(u,null,{default:a(()=>[i(d,{"prepend-icon":t.category.icon,label:"",class:"category-weight ml-1 mr-1 mt-1 mb-1",color:t.category.color},{default:a(()=>[g(m(t.category.name)+" ",1),l(o.$slots,"default",{},void 0,!0)]),_:3},8,["prepend-icon","color"])]),_:3}))}},_=r(f,[["__scopeId","data-v-32091dc7"]]);function h(t){const o={};for(const e of t)o[e.category.name]||(o[e.category.name]={name:e.category.name,weight:e.weight*e.amount,color:e.category.color,icon:e.category.icon}),o[e.category.name].weight+=e.weight*e.amount;return o}function w(t,o=!1){return o?`${(t/1e3).toFixed(2)}kg`:`${Math.round(t)}g`}export{_,w as f,h as g};
