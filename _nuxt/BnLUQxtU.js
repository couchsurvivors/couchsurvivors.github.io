import{_ as T}from"./zkBmDFaq.js";import{bk as k,am as C,v as a,a8 as o,B as t,af as i,x as h,ae as x,ad as w,ah as u,A as e,C as c,aj as b,q as v,ac as L,ai as B,d as N,a9 as y,ab as V}from"./BUKZ6-gO.js";import{V as P,a as g}from"./DOp45mES.js";import{V as U}from"./B2En6GXu.js";import"./DMWPK2wg.js";const $={__name:"list-upcoming",async setup(f){let r,l;const s=k().trips;[r,l]=C(()=>s.fetch()),await r,l();const n=s.byDateUpcoming;return(p,m)=>{const d=T;return a(),o(L,null,{default:t(()=>[i(n).length?(a(!0),h(x,{key:0},w(i(n),_=>(a(),o(u,{key:_.id},{default:t(()=>[e(d,{entity:_},null,8,["entity"])]),_:2},1024))),128)):(a(),o(u,{key:1},{default:t(()=>[e(P,null,{default:t(()=>[e(g,{cols:"6"},{default:t(()=>[c(" No upcoming trips 😢 ")]),_:1}),e(g,{cols:"6",class:"text-right"},{default:t(()=>[e(b,{onClick:m[0]||(m[0]=_=>("navigateTo"in p?p.navigateTo:i(v))("/trips/new"))},{default:t(()=>[c("Create one!")]),_:1})]),_:1})]),_:1})]),_:1}))]),_:1})}}},A={__name:"list-past",async setup(f){let r,l;const s=k().trips;[r,l]=C(()=>s.fetch()),await r,l();const n=s.byDatePast;return(p,m)=>{const d=T;return a(),o(L,null,{default:t(()=>[i(n).length?(a(!0),h(x,{key:0},w(i(n),_=>(a(),o(u,{key:_.id},{default:t(()=>[e(d,{entity:_},null,8,["entity"])]),_:2},1024))),128)):(a(),o(u,{key:1},{default:t(()=>[e(B,null,{default:t(()=>[c("No past trips 😔")]),_:1})]),_:1}))]),_:1})}}},F=N({__name:"index",setup(f){return(r,l)=>{const s=$,n=A;return a(),o(U,null,{default:t(()=>[e(V,{class:"mb-5"},{default:t(()=>[e(y,null,{default:t(()=>[c("Upcoming trips")]),_:1}),e(s)]),_:1}),e(V,null,{default:t(()=>[e(y,null,{default:t(()=>[c("Past trips")]),_:1}),e(n)]),_:1})]),_:1})}}});export{F as default};
