import{_ as m,aM as C,r as A,as as L,o as M,v as t,a8 as H,B as i,af as r,S as p,C as v,z as V,ak as s,x as u,bF as g,aw as y}from"./B_dC6DF4.js";import{V as f}from"./C8UtKC__.js";var h="M12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M17,14L12,9L7,14H17Z",w="M12,2L22,8C22,12 20,14 16,15L13,10L9,6L12,2M4.11,19.84L2.12,18.33L9.19,9L11,10.81L4.11,19.84Z",x="M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,16H9V18H8V16H6V15H18V16Z",l="M16,20H8V6H16M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z",_="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",Z="M10,3L8,5V7H5C3.85,7 3.12,8 3,9L2,19C1.88,20 2.54,21 4,21H20C21.46,21 22.12,20 22,19L21,9C20.88,8 20.06,7 19,7H16V5L14,3H10M10,5H14V7H10V5M11,10H13V13H16V15H13V18H11V15H8V13H11V10Z",k="M14.6 9L18 3.1L19.7 4.1L16.9 9H14.6M14 10H3V12H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V12H21V10H14Z",B="M9 7C7.9 7 7 7.9 7 9V17H9V9H11V16H13V9H15V17H17V9C17 7.9 16.11 7 15 7H9Z",N="M16,21H8A1,1 0 0,1 7,20V12.07L5.7,13.07C5.31,13.46 4.68,13.46 4.29,13.07L1.46,10.29C1.07,9.9 1.07,9.27 1.46,8.88L7.34,3H9C9,4.1 10.34,5 12,5C13.66,5 15,4.1 15,3H16.66L22.54,8.88C22.93,9.27 22.93,9.9 22.54,10.29L19.71,13.12C19.32,13.5 18.69,13.5 18.3,13.12L17,12.12V20A1,1 0 0,1 16,21",b="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z",z="M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5Z";function d(e){switch(e){case"water":return b;case"battery-outline":return l;case"medical-bag":return Z;case"home":return _;case"size-m":return B;case"pot-mix":return k;case"axe":return w;case"bag-personal":return x;case"tshirt-crew":return N;case"weight":return z;case"arrow-up-drop-circle-outline":return h;default:return l}}const S={key:1},D={key:2},I={__name:"chip",props:{category:Object,renderNames:{type:Boolean,default:!0}},setup(e){const n=e,{xs:c}=C(),a=A(n.renderNames&&!c.value);return L(()=>c.value,o=>{a.value=n.renderNames&&!o,console.log("renderNamesResponsive",a.value)}),M(()=>{}),(o,O)=>e.category?(t(),H(f,{key:0,"prepend-icon":r(a)?r(d)(e.category.icon):!1,color:e.category.color,label:"",class:y(`category-weight ${r(a),""}`)},{default:i(()=>[r(a)?s("",!0):(t(),H(p,{key:0},{default:i(()=>[v(V(r(d)(e.category.icon)),1)]),_:1})),r(a)?(t(),u("span",S,V(e.category.name),1)):s("",!0),r(a)?(t(),u("span",D,"   ")):s("",!0),g(o.$slots,"default",{},void 0,!0)]),_:3},8,["prepend-icon","color","class"])):s("",!0)}},T=m(I,[["__scopeId","data-v-7e310626"]]);export{T as _,d as g};
