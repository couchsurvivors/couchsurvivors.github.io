import{_ as p}from"./W90uhkJs.js";import{d as u,by as h,c as f,an as y,as as x,v as t,a8 as _,B as v,af as a,x as l,ak as o,bG as S,y as m}from"./C82PRbc6.js";import{V as b}from"./CIz513X_.js";const k={key:0,class:"text-center mb-5"},w=m("h2",null,"External services are disabled",-1),g=m("p",null,"You can enable them now, but be aware that they may collect data about you.",-1),B=[w,g],C={key:2,"show-section":"privacy"},$=u({__name:"ExternalServiceWrapper",async setup(V){let n,r;const c=h(),e=f(()=>c.entities.externalServices);return[n,r]=y(()=>c.fetch()),await n,r(),x(e,(s,i)=>{console.log("externalServices changed from",i,"to",s)}),(s,i)=>{const d=p;return t(),_(b,null,{default:v(()=>[a(e)?o("",!0):(t(),l("div",k,B)),a(e)?o("",!0):(t(),_(d,{key:1})),a(e)?(t(),l("div",C,[S(s.$slots,"default")])):o("",!0)]),_:3})}}});export{$ as _};