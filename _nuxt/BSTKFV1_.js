import{_ as M,v as C,a8 as _,B as t,A as s,S as i,C as n,z as o,y as u,x as d,ak as m,ae as y,ad as p,af as h,q as k,D as v,E as D}from"./CZEdhyo1.js";import{a as f,V as S}from"./BoQ2L2EA.js";import{a as g,V as A}from"./BnntZbsH.js";const w={methods:{formatDate(e){const l=new Date(e);return new Intl.DateTimeFormat("en-US",{dateStyle:"long"}).format(l)}}},I={mixins:[w],props:{entity:Object({})}},H=e=>(v("data-v-9808842a"),e=e(),D(),e),x=H(()=>u("br",null,null,-1)),B={key:0},T=H(()=>u("br",null,null,-1)),L={key:1};function N(e,l,a,Z,b,E){return C(),_(S,{class:"link",onClick:l[0]||(l[0]=r=>("navigateTo"in e?e.navigateTo:h(k))(`/trips/${a.entity.id}/`))},{default:t(()=>[s(f,{cols:"2",class:"d-none d-sm-flex"},{default:t(()=>[s(i,{class:"placeholder-icon h-100 w-100"},{default:t(()=>[n("custom:trip")]),_:1})]),_:1}),s(f,{cols:"12",sm:"10"},{default:t(()=>{var r,c;return[n(o(a.entity.name)+" ",1),x,s(i,null,{default:t(()=>[n("M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z")]),_:1}),u("span",null,o(e.formatDate(a.entity.start)),1),n(" - "),a.entity.end?(C(),d("span",B,o(e.formatDate(a.entity.end)),1)):m("",!0),T,(c=(r=a.entity)==null?void 0:r.routes)!=null&&c.distance?(C(),d("span",L,[s(i,null,{default:t(()=>[n("M6.5,8.11C5.61,8.11 4.89,7.39 4.89,6.5A1.61,1.61 0 0,1 6.5,4.89C7.39,4.89 8.11,5.61 8.11,6.5V6.5A1.61,1.61 0 0,1 6.5,8.11M6.5,2C4,2 2,4 2,6.5C2,9.87 6.5,14.86 6.5,14.86C6.5,14.86 11,9.87 11,6.5C11,4 9,2 6.5,2M17.5,8.11A1.61,1.61 0 0,1 15.89,6.5C15.89,5.61 16.61,4.89 17.5,4.89C18.39,4.89 19.11,5.61 19.11,6.5A1.61,1.61 0 0,1 17.5,8.11M17.5,2C15,2 13,4 13,6.5C13,9.87 17.5,14.86 17.5,14.86C17.5,14.86 22,9.87 22,6.5C22,4 20,2 17.5,2M17.5,16C16.23,16 15.1,16.8 14.68,18H9.32C8.77,16.44 7.05,15.62 5.5,16.17C3.93,16.72 3.11,18.44 3.66,20C4.22,21.56 5.93,22.38 7.5,21.83C8.35,21.53 9,20.85 9.32,20H14.69C15.24,21.56 16.96,22.38 18.5,21.83C20.08,21.28 20.9,19.56 20.35,18C19.92,16.8 18.78,16 17.5,16V16M17.5,20.5A1.5,1.5 0 0,1 16,19A1.5,1.5 0 0,1 17.5,17.5A1.5,1.5 0 0,1 19,19A1.5,1.5 0 0,1 17.5,20.5Z")]),_:1}),n(" "+o(a.entity.routes.distance/1e3)+" km ",1)])):m("",!0),s(g,null,{default:t(()=>[s(i,null,{default:t(()=>[n("M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z")]),_:1}),s(A,{"prepend-icon":"M22,2C22,2 14.36,1.63 8.34,9.88C3.72,16.21 2,22 2,22L3.94,21C5.38,18.5 6.13,17.47 7.54,16C10.07,16.74 12.71,16.65 15,14C13,13.44 11.4,13.57 9.04,13.81C11.69,12 13.5,11.6 16,12L17,10C15.2,9.66 14,9.63 12.22,10.04C14.19,8.65 15.56,7.87 18,8L19.21,6.07C17.65,5.96 16.71,6.13 14.92,6.57C16.53,5.11 18,4.45 20.14,4.32C20.14,4.32 21.19,2.43 22,2Z"},{default:t(()=>[n(o(a.entity.usersMeta.name),1)]),_:1}),(C(!0),d(y,null,p(a.entity.tripsUsersAttendees,V=>(C(),_(A,{key:V.user_id},{default:t(()=>[n(o(V.users_meta.name),1)]),_:2},1024))),128))]),_:1})]}),_:1})]),_:1})}const q=M(I,[["render",N],["__scopeId","data-v-9808842a"]]);export{q as _};
