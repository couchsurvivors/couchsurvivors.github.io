import{_ as h,v as o,F as a,B as t,A as s,M as V,C as r,z as y,R as d,q as $,D as C,E as I,y as v,o as z,bA as w,bd as A,x as T,a4 as m,c as G,K as H,J as M,d as Z,bo as F,P as q,i as x,L as b,N as J,I as K}from"./CoGiOYfK.js";import{a as f,V as k}from"./CXWWt2Pq.js";import{_ as P}from"./JV9vzc8e.js";import{_ as Q}from"./9fgYIvgF.js";import{_ as S}from"./CLkkatjX.js";import{g as U,f as W}from"./DhEjqOiD.js";const X={props:{entity:Object({})}},N=e=>(C("data-v-9a451a55"),e=e(),I(),e),Y=N(()=>v("br",null,null,-1)),ee=N(()=>v("br",null,null,-1));function te(e,l,n,i,_,p){return o(),a(k,{class:"link",onClick:l[0]||(l[0]=c=>("navigateTo"in e?e.navigateTo:d($))(`/routes/${n.entity.id}/`))},{default:t(()=>[s(f,{cols:"3"},{default:t(()=>[s(V,{size:"120"},{default:t(()=>[r("custom:route")]),_:1})]),_:1}),s(f,{cols:"9"},{default:t(()=>[r(y(n.entity.name)+" ",1),Y,r(" DISTANCE "),ee,r(" REGION ")]),_:1})]),_:1})}const ne=h(X,[["render",te],["__scopeId","data-v-9a451a55"]]),L=e=>(C("data-v-a37b4ec4"),e=e(),I(),e),oe={key:0},se=L(()=>v("br",null,null,-1)),ae=L(()=>v("br",null,null,-1)),ie=L(()=>v("br",null,null,-1)),re={key:1},le={__name:"teaser",props:{entity:Object},setup(e){const l=n=>n?n.map(i=>i.name).join(", "):"";return z(()=>{}),(n,i)=>{const _=Q,p=S;return o(),a(k,{class:"link",onClick:i[0]||(i[0]=c=>("navigateTo"in n?n.navigateTo:d($))(`/items/${e.entity.id}/`))},{default:t(()=>[s(f,{cols:"3"},{default:t(()=>[s(w,{"aspect-ratio":"16 / 9","max-height":"150"},{default:t(()=>[e.entity.image?(o(),a(_,{key:0,"image-path":e.entity.image},null,8,["image-path"])):(o(),a(A,{key:1,src:`https://picsum.photos/640/400?a=${Math.random()}`},null,8,["src"]))]),_:1})]),_:1}),s(f,{cols:"9"},{default:t(()=>[v("span",null,y(e.entity.name),1),e.entity.amount>1?(o(),T("span",oe," x"+y(e.entity.amount),1)):m("",!0),se,s(V,null,{default:t(()=>[r("M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7A4,4 0 0,0 12,3A4,4 0 0,0 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z")]),_:1}),r(" "+y(e.entity.weight*e.entity.amount)+" ",1),ae,s(p,{category:e.entity.category},null,8,["category"]),ie,s(V,null,{default:t(()=>[r("M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,16H9V18H8V16H6V15H18V16Z")]),_:1}),e.entity&&e.entity.inventories?(o(),T("span",re," In inventories: "+y(l(e.entity.inventories)),1)):m("",!0)]),_:1})]),_:1})}}},ce=h(le,[["__scopeId","data-v-a37b4ec4"]]),ue=e=>(C("data-v-e8bc9d20"),e=e(),I(),e),de=ue(()=>v("br",null,null,-1)),_e={__name:"teaser",props:{entity:Object},setup(e){const l=e,n=G(()=>U(l.entity.items));return(i,_)=>{const p=S;return o(),a(k,{class:"link",onClick:_[0]||(_[0]=c=>("navigateTo"in i?i.navigateTo:d($))(`/inventories/${e.entity.id}/`))},{default:t(()=>[s(f,{cols:"3"},{default:t(()=>[s(V,{size:"120"},{default:t(()=>[r("custom:inventory")]),_:1})]),_:1}),s(f,{cols:"9"},{default:t(()=>[r(" Name: "+y(e.entity.name)+" ",1),de,(o(!0),T(H,null,M(Object.keys(d(n)),c=>(o(),a(p,{category:d(n)[c],key:c},{default:t(()=>[r(y(d(W)(d(n)[c].weight)),1)]),_:2},1032,["category"]))),128))]),_:1})]),_:1})}}},me=h(_e,[["__scopeId","data-v-e8bc9d20"]]),ye={props:{entity:Object({}),entityType:String}};function pe(e,l,n,i,_,p){return o(),a(k,{class:"link",onClick:l[0]||(l[0]=c=>("navigateTo"in e?e.navigateTo:d($))(`/${n.entityType}/${n.entity.id}/`))},{default:t(()=>[s(f,{cols:"3"},{default:t(()=>[s(w,{"aspect-ratio":"16 / 9","max-height":"150"},{default:t(()=>[s(A,{cover:"",src:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{default:t(()=>[n.entity.enriched?(o(),a(V,{key:0},{default:t(()=>[r("M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z")]),_:1})):m("",!0)]),_:1})]),_:1})]),_:1}),s(f,{cols:"9"},{default:t(()=>[r(y(n.entity.name),1)]),_:1})]),_:1})}const fe=h(ye,[["render",pe],["__scopeId","data-v-1d789906"]]),Ce=Z({__name:"list",props:{entityType:{}},async setup(e){let l,n;const i=e,_=F();if(_[i.entityType]===void 0)throw new Error(`Store for ${i.entityType} not found`);const p=_[i.entityType];[l,n]=q(()=>p.fetch()),await l,n();const c=p.entities;return(u,ve)=>{const j=ne,O=P,B=ce,D=me,E=fe,R=x("v-list-item-content");return o(),a(K,null,{default:t(()=>[(o(!0),T(H,null,M(d(c),g=>(o(),a(b,{key:g.id},{default:t(()=>[u.entityType=="routes"?(o(),a(j,{key:0,entity:g},null,8,["entity"])):m("",!0),u.entityType=="trips"?(o(),a(O,{key:1,entity:g},null,8,["entity"])):m("",!0),u.entityType=="items"?(o(),a(B,{key:2,entity:g},null,8,["entity"])):m("",!0),u.entityType=="inventories"?(o(),a(D,{key:3,entity:g},null,8,["entity"])):m("",!0),u.entityType!="items"&&u.entityType!="routes"&&u.entityType!="trips"&&u.entityType!="inventories"?(o(),a(E,{key:4,entity:g,"entity-type":u.entityType},null,8,["entity","entity-type"])):m("",!0)]),_:2},1024))),128)),d(c).length==0?(o(),a(b,{key:0},{default:t(()=>[s(R,null,{default:t(()=>[s(J,null,{default:t(()=>[r("No "+y(u.entityType)+" found",1)]),_:1})]),_:1})]),_:1})):m("",!0)]),_:1})}}});export{Ce as _};