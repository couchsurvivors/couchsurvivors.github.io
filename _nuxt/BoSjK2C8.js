import{_ as L,v as n,F as s,B as e,A as a,ba as k,bd as v,bC as U,b8 as d,M as V,C as u,z as m,Q as c,q as C,D as b,E as I,y as g,r as Z,o as F,x as T,c as G,K as S,J as N,d as P,O as q,P as z,i as J,L as M,N as K,I as Q}from"./Bbj95wRu.js";import{a as f,V as $}from"./CqGrWfn7.js";import{_ as W}from"./CuUJjFYc.js";import{_ as j,g as X,f as Y}from"./Bm2-PHtr.js";import{g as tt}from"./NCVg4mz9.js";const et={props:{entity:Object({})}},O=t=>(b("data-v-e0459ab3"),t=t(),I(),t),nt=O(()=>g("br",null,null,-1)),at=O(()=>g("br",null,null,-1));function ot(t,l,o,y,_,p){return n(),s($,{class:"link",onClick:l[0]||(l[0]=i=>("navigateTo"in t?t.navigateTo:c(C))(`/routes/${o.entity.id}/`))},{default:e(()=>[a(f,{cols:"3"},{default:e(()=>[a(k,{"aspect-ratio":"16 / 9","max-height":"150"},{default:e(()=>[a(v,{cover:"",src:`https://picsum.photos/640/400?a=${Math.random()}`},{default:e(()=>[o.entity.enriched?d("",!0):(n(),s(U,{key:0,indeterminate:""})),o.entity.enriched?(n(),s(V,{key:1},{default:e(()=>[u("M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z")]),_:1})):d("",!0)]),_:1},8,["src"])]),_:1})]),_:1}),a(f,{cols:"9"},{default:e(()=>[u(m(o.entity.name)+" ",1),nt,u(" DISTANCE "),at,u(" REGION ")]),_:1})]),_:1})}const st=L(et,[["render",ot],["__scopeId","data-v-e0459ab3"]]),w=t=>(b("data-v-a98cfb84"),t=t(),I(),t),it={key:0},rt=w(()=>g("br",null,null,-1)),lt=w(()=>g("br",null,null,-1)),ct=w(()=>g("br",null,null,-1)),ut={key:1},dt={__name:"teaser",props:{entity:Object},setup(t){const l=Z(""),o=t;async function y(i){return await tt("images",i)}async function _(){l.value=await y(o.entity.image)}const p=i=>i?i.map(r=>r.name).join(", "):"";return F(()=>{_()}),(i,r)=>{const A=j;return n(),s($,{class:"link",onClick:r[0]||(r[0]=H=>("navigateTo"in i?i.navigateTo:c(C))(`/items/${t.entity.id}/`))},{default:e(()=>[a(f,{cols:"3"},{default:e(()=>[a(k,{"aspect-ratio":"16 / 9","max-height":"150"},{default:e(()=>[c(l)?(n(),s(v,{key:0,src:c(l)},null,8,["src"])):(n(),s(v,{key:1,src:`https://picsum.photos/640/400?a=${Math.random()}`},null,8,["src"]))]),_:1})]),_:1}),a(f,{cols:"9"},{default:e(()=>[g("span",null,m(t.entity.name),1),t.entity.amount>1?(n(),T("span",it," x"+m(t.entity.amount),1)):d("",!0),rt,a(V,null,{default:e(()=>[u("M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7A4,4 0 0,0 12,3A4,4 0 0,0 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z")]),_:1}),u(" "+m(t.entity.weight*t.entity.amount)+" ",1),lt,a(A,{category:t.entity.category},null,8,["category"]),ct,a(V,null,{default:e(()=>[u("M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,16H9V18H8V16H6V15H18V16Z")]),_:1}),t.entity&&t.entity.inventories?(n(),T("span",ut," In inventories: "+m(p(t.entity.inventories)),1)):d("",!0)]),_:1})]),_:1})}}},yt=L(dt,[["__scopeId","data-v-a98cfb84"]]),_t=t=>(b("data-v-fb2b523f"),t=t(),I(),t),mt=_t(()=>g("br",null,null,-1)),pt={__name:"teaser",props:{entity:Object},setup(t){const l=t,o=G(()=>X(l.entity.items));return(y,_)=>{const p=j;return n(),s($,{class:"link",onClick:_[0]||(_[0]=i=>("navigateTo"in y?y.navigateTo:c(C))(`/inventories/${t.entity.id}/`))},{default:e(()=>[a(f,{cols:"3"},{default:e(()=>[a(k,{"aspect-ratio":"16 / 9","max-height":"150"},{default:e(()=>[a(v,{cover:"",src:`https://picsum.photos/640/400?a=${Math.random()}`},null,8,["src"])]),_:1})]),_:1}),a(f,{cols:"9"},{default:e(()=>[u(" Name: "+m(t.entity.name)+" ",1),mt,(n(!0),T(S,null,N(Object.keys(c(o)),i=>(n(),s(p,{category:c(o)[i],key:i},{default:e(()=>[u(m(c(Y)(c(o)[i].weight)),1)]),_:2},1032,["category"]))),128))]),_:1})]),_:1})}}},ft=L(pt,[["__scopeId","data-v-fb2b523f"]]),gt={props:{entity:Object({}),entityType:String}};function ht(t,l,o,y,_,p){return n(),s($,{class:"link",onClick:l[0]||(l[0]=i=>("navigateTo"in t?t.navigateTo:c(C))(`/${o.entityType}/${o.entity.id}/`))},{default:e(()=>[a(f,{cols:"3"},{default:e(()=>[a(k,{"aspect-ratio":"16 / 9","max-height":"150"},{default:e(()=>[a(v,{cover:"",src:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"},{default:e(()=>[o.entity.enriched?(n(),s(V,{key:0},{default:e(()=>[u("M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z")]),_:1})):d("",!0)]),_:1})]),_:1})]),_:1}),a(f,{cols:"9"},{default:e(()=>[u(m(o.entity.name),1)]),_:1})]),_:1})}const vt=L(gt,[["render",ht],["__scopeId","data-v-1d789906"]]),$t=P({__name:"list",props:{entityType:{}},async setup(t){let l,o;const y=t,_=q();if(_[y.entityType]===void 0)throw new Error(`Store for ${y.entityType} not found`);const p=_[y.entityType];[l,o]=z(()=>p.fetch()),await l,o();const i=p.entities;return(r,A)=>{const H=st,B=W,D=yt,E=ft,x=vt,R=J("v-list-item-content");return n(),s(Q,null,{default:e(()=>[(n(!0),T(S,null,N(c(i),h=>(n(),s(M,{key:h.id},{default:e(()=>[r.entityType=="routes"?(n(),s(H,{key:0,entity:h},null,8,["entity"])):d("",!0),r.entityType=="trips"?(n(),s(B,{key:1,entity:h},null,8,["entity"])):d("",!0),r.entityType=="items"?(n(),s(D,{key:2,entity:h},null,8,["entity"])):d("",!0),r.entityType=="inventories"?(n(),s(E,{key:3,entity:h},null,8,["entity"])):d("",!0),r.entityType!="items"&&r.entityType!="routes"&&r.entityType!="trips"&&r.entityType!="inventories"?(n(),s(x,{key:4,entity:h,"entity-type":r.entityType},null,8,["entity","entity-type"])):d("",!0)]),_:2},1024))),128)),c(i).length==0?(n(),s(M,{key:0},{default:e(()=>[a(R,null,{default:e(()=>[a(K,null,{default:e(()=>[u("No "+m(r.entityType)+" found",1)]),_:1})]),_:1})]),_:1})):d("",!0)]),_:1})}}});export{$t as _};
