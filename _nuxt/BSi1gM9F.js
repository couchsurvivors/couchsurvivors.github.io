import{f as m,E as f,r as e,o as l,g as C,w as o,b as a,c as H,k as V,v as M,F as A,i as r,d as h,t as L,_ as g}from"./FFCUu7_l.js";import{V as v}from"./CWPy1xb4.js";import{V as s,a as n}from"./B0czaI6F.js";const y=m({__name:"dashboard",setup(B){const c=f([{icon:"M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",title:"Bandwidth",value:23,unit:"GB",color:"primary",caption:"Up: 13, Down: 10"},{icon:"M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z",title:"Submissions",value:108,color:"primary",caption:"Too young, too naive"},{icon:"M2,21L23,12L2,3V10L17,12L2,14V21Z",title:"Requests",value:1238,color:"warning",caption:"Limit: 1320"},{icon:"M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21",title:"Messages",value:9042,color:"primary",caption:"Warnings: 300, erros: 47"},{icon:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",title:"Github Stars",value:NaN,color:"grey",caption:"API has no response"},{icon:"M13.28 12H18V14H13V21H11V14H6V12H10.72L5 3H7.37L12 10.29L16.63 3H19L13.28 12Z",title:"Total Fee",value:2300,unit:"￥",color:"error",caption:"Upper Limit: 2000 ￥"}]);return(w,b)=>{const i=e("StatsCard"),u=e("ChartLine"),d=e("ChartRadar"),p=e("ChartPie"),_=e("ChartBar");return l(),C(v,{fluid:""},{default:o(()=>[a(s,null,{default:o(()=>[(l(!0),H(A,null,V(M(c),t=>(l(),C(n,{key:t.title,cols:"12",sm:"6",md:"4",lg:"2"},{default:o(()=>[a(i,{title:t.title,unit:t.unit,color:t.color,icon:t.icon,value:t.value},{footer:o(()=>[h(L(t.caption),1)]),_:2},1032,["title","unit","color","icon","value"])]),_:2},1024))),128))]),_:1}),a(s,null,{default:o(()=>[a(n,{cols:"12",md:"6",lg:"12"},{default:o(()=>[a(r,{class:"pa-2"},{default:o(()=>[a(u)]),_:1})]),_:1}),a(n,{cols:"12",md:"6",lg:"4"},{default:o(()=>[a(r,{class:"pa-2"},{default:o(()=>[a(d)]),_:1})]),_:1}),a(n,{cols:"12",md:"6",lg:"4"},{default:o(()=>[a(r,{class:"pa-2"},{default:o(()=>[a(p)]),_:1})]),_:1}),a(n,{cols:"12",md:"6",lg:"4"},{default:o(()=>[a(r,{class:"pa-2"},{default:o(()=>[a(_)]),_:1})]),_:1})]),_:1})]),_:1})}}}),Z=g(y,[["__scopeId","data-v-3f7d0888"]]);export{Z as default};