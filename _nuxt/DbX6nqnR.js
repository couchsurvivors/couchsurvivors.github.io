import{_ as T,v as n,F as s,B as t,A as a,bA as k,bd as A,M as v,C as l,z as m,R as d,q as C,D as $,E as I,y as g,o as Z,x as V,a4 as y,c as x,K as H,J as M,d as G,bo as F,P as q,i as z,L as w,N as J,I as K}from"./DTtFFXxD.js";import{a as f,V as L}from"./BB6Y4R53.js";import{_ as P}from"./lN2NW1XK.js";import{_ as Q}from"./CXHwJgFB.js";import{_ as S}from"./DuxqD6Gv.js";import{g as U,f as W}from"./DhEjqOiD.js";const X={props:{entity:Object({})}},N=e=>($("data-v-d79addd9"),e=e(),I(),e),Y=N(()=>g("br",null,null,-1)),ee=N(()=>g("br",null,null,-1));function te(e,r,o,i,_,p){return n(),s(L,{class:"link",onClick:r[0]||(r[0]=c=>("navigateTo"in e?e.navigateTo:d(C))(`/routes/${o.entity.id}/`))},{default:t(()=>[a(f,{cols:"3"},{default:t(()=>[a(k,{"aspect-ratio":"1 / 1","max-height":"150"},{default:t(()=>[a(A,{src:"/placeholder/route.svg"},{default:t(()=>[o.entity.enriched?(n(),s(v,{key:0,class:"enrichment-icon"},{default:t(()=>[l("M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z")]),_:1})):(n(),s(v,{key:1,class:"enrichment-icon"},{default:t(()=>[l("M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z")]),_:1}))]),_:1})]),_:1})]),_:1}),a(f,{cols:"9"},{default:t(()=>[l(m(o.entity.name)+" ",1),Y,l(" DISTANCE "),ee,l(" REGION ")]),_:1})]),_:1})}const ne=T(X,[["render",te],["__scopeId","data-v-d79addd9"]]),b=e=>($("data-v-a37b4ec4"),e=e(),I(),e),oe={key:0},ae=b(()=>g("br",null,null,-1)),se=b(()=>g("br",null,null,-1)),ie=b(()=>g("br",null,null,-1)),le={key:1},re={__name:"teaser",props:{entity:Object},setup(e){const r=o=>o?o.map(i=>i.name).join(", "):"";return Z(()=>{}),(o,i)=>{const _=Q,p=S;return n(),s(L,{class:"link",onClick:i[0]||(i[0]=c=>("navigateTo"in o?o.navigateTo:d(C))(`/items/${e.entity.id}/`))},{default:t(()=>[a(f,{cols:"3"},{default:t(()=>[a(k,{"aspect-ratio":"16 / 9","max-height":"150"},{default:t(()=>[e.entity.image?(n(),s(_,{key:0,"image-path":e.entity.image},null,8,["image-path"])):(n(),s(A,{key:1,src:`https://picsum.photos/640/400?a=${Math.random()}`},null,8,["src"]))]),_:1})]),_:1}),a(f,{cols:"9"},{default:t(()=>[g("span",null,m(e.entity.name),1),e.entity.amount>1?(n(),V("span",oe," x"+m(e.entity.amount),1)):y("",!0),ae,a(v,null,{default:t(()=>[l("M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7A4,4 0 0,0 12,3A4,4 0 0,0 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z")]),_:1}),l(" "+m(e.entity.weight*e.entity.amount)+" ",1),se,a(p,{category:e.entity.category},null,8,["category"]),ie,a(v,null,{default:t(()=>[l("M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,16H9V18H8V16H6V15H18V16Z")]),_:1}),e.entity&&e.entity.inventories?(n(),V("span",le," In inventories: "+m(r(e.entity.inventories)),1)):y("",!0)]),_:1})]),_:1})}}},ce=T(re,[["__scopeId","data-v-a37b4ec4"]]),ue=e=>($("data-v-864cb567"),e=e(),I(),e),de=ue(()=>g("br",null,null,-1)),_e={__name:"teaser",props:{entity:Object},setup(e){const r=e,o=x(()=>U(r.entity.items));return(i,_)=>{const p=S;return n(),s(L,{class:"link",onClick:_[0]||(_[0]=c=>("navigateTo"in i?i.navigateTo:d(C))(`/inventories/${e.entity.id}/`))},{default:t(()=>[a(f,{cols:"3"},{default:t(()=>[a(k,{"aspect-ratio":"1 / 1","max-height":"150"},{default:t(()=>[a(A,{src:"/placeholder/inventory.svg"})]),_:1})]),_:1}),a(f,{cols:"9"},{default:t(()=>[l(" Name: "+m(e.entity.name)+" ",1),de,(n(!0),V(H,null,M(Object.keys(d(o)),c=>(n(),s(p,{category:d(o)[c],key:c},{default:t(()=>[l(m(d(W)(d(o)[c].weight)),1)]),_:2},1032,["category"]))),128))]),_:1})]),_:1})}}},ye=T(_e,[["__scopeId","data-v-864cb567"]]),me={props:{entity:Object({}),entityType:String}};function pe(e,r,o,i,_,p){return n(),s(L,{class:"link",onClick:r[0]||(r[0]=c=>("navigateTo"in e?e.navigateTo:d(C))(`/${o.entityType}/${o.entity.id}/`))},{default:t(()=>[a(f,{cols:"3"},{default:t(()=>[a(k,{"aspect-ratio":"16 / 9","max-height":"150"},{default:t(()=>[a(A,{cover:"",src:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{default:t(()=>[o.entity.enriched?(n(),s(v,{key:0},{default:t(()=>[l("M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z")]),_:1})):y("",!0)]),_:1})]),_:1})]),_:1}),a(f,{cols:"9"},{default:t(()=>[l(m(o.entity.name),1)]),_:1})]),_:1})}const fe=T(me,[["render",pe],["__scopeId","data-v-1d789906"]]),Ce=G({__name:"list",props:{entityType:{}},async setup(e){let r,o;const i=e,_=F();if(_[i.entityType]===void 0)throw new Error(`Store for ${i.entityType} not found`);const p=_[i.entityType];[r,o]=q(()=>p.fetch()),await r,o();const c=p.entities;return(u,ge)=>{const j=ne,O=P,B=ce,D=ye,E=fe,R=z("v-list-item-content");return n(),s(K,null,{default:t(()=>[(n(!0),V(H,null,M(d(c),h=>(n(),s(w,{key:h.id},{default:t(()=>[u.entityType=="routes"?(n(),s(j,{key:0,entity:h},null,8,["entity"])):y("",!0),u.entityType=="trips"?(n(),s(O,{key:1,entity:h},null,8,["entity"])):y("",!0),u.entityType=="items"?(n(),s(B,{key:2,entity:h},null,8,["entity"])):y("",!0),u.entityType=="inventories"?(n(),s(D,{key:3,entity:h},null,8,["entity"])):y("",!0),u.entityType!="items"&&u.entityType!="routes"&&u.entityType!="trips"&&u.entityType!="inventories"?(n(),s(E,{key:4,entity:h,"entity-type":u.entityType},null,8,["entity","entity-type"])):y("",!0)]),_:2},1024))),128)),d(c).length==0?(n(),s(w,{key:0},{default:t(()=>[a(R,null,{default:t(()=>[a(J,null,{default:t(()=>[l("No "+m(u.entityType)+" found",1)]),_:1})]),_:1})]),_:1})):y("",!0)]),_:1})}}});export{Ce as _};
