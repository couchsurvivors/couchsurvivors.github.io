import{_ as y}from"./XLGGbqBd.js";import{bo as V,M as x,v as s,F as r,B as t,O as l,x as h,H as k,G as T,I as c,A as e,K as g,C as p,V as C,d as b}from"./BFrEVmP9.js";import{V as d,b as f}from"./BlGakmLD.js";import{V as B}from"./DiI_0scF.js";import"./BXIapEb7.js";import"./xTubGozI.js";const N={__name:"list-upcoming",async setup(m){let o,_;const n=V().trips;[o,_]=x(()=>n.fetch()),await o,_();const a=n.byDateUpcoming;return(w,L)=>{const u=y;return s(),r(C,null,{default:t(()=>[l(a).length?(s(!0),h(k,{key:0},T(l(a),i=>(s(),r(c,{key:i.id},{default:t(()=>[e(u,{entity:i},null,8,["entity"])]),_:2},1024))),128)):(s(),r(c,{key:1},{default:t(()=>[e(g,null,{default:t(()=>[p("No upcoming trips 😢")]),_:1})]),_:1}))]),_:1})}}},I={__name:"list-past",async setup(m){let o,_;const n=V().trips;[o,_]=x(()=>n.fetch()),await o,_();const a=n.byDatePast;return(w,L)=>{const u=y;return s(),r(C,null,{default:t(()=>[l(a).length?(s(!0),h(k,{key:0},T(l(a),i=>(s(),r(c,{key:i.id},{default:t(()=>[e(u,{entity:i},null,8,["entity"])]),_:2},1024))),128)):(s(),r(c,{key:1},{default:t(()=>[e(g,null,{default:t(()=>[p("No past trips 😢")]),_:1})]),_:1}))]),_:1})}}},v=b({__name:"index",setup(m){return(o,_)=>{const n=N,a=I;return s(),r(B,null,{default:t(()=>[e(f,{class:"mb-5"},{default:t(()=>[e(d,null,{default:t(()=>[p("Upcoming trips")]),_:1}),e(n)]),_:1}),e(f,null,{default:t(()=>[e(d,null,{default:t(()=>[p("Past trips")]),_:1}),e(a)]),_:1})]),_:1})}}});export{v as default};