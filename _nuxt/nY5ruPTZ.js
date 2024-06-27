import{F as Q,I as W,aG as w,b6 as X,r as Y,c as p,bL as e1,L as t1,bH as a1,A as a,a1 as x,ae as F,bl as l1,bq as n1,S as o1,b7 as s1,bE as i1,d as u1,by as r1,ay as d1,an as C1,v as r,x as c1,a8 as d,B as C,a9 as P,C as _,aa as B,af as n,ak as c,ab as I}from"./CQUVtaGX.js";import{a as V1,b as m1,V as U}from"./BSVrXa39.js";import{m as f1,V as Z}from"./BjIYCte-.js";const v1=Q({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...V1(),...f1()},"VSwitch"),M=W()({name:"VSwitch",inheritAttrs:!1,props:v1(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,m){let{attrs:f,slots:l}=m;const t=w(e,"indeterminate"),o=w(e,"modelValue"),{loaderClasses:H}=X(e),{isFocused:s,focus:i,blur:T}=m1(e),y=Y(),N=p(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),z=e1(),D=p(()=>e.id||`switch-${z}`);function G(){t.value&&(t.value=!1)}function R(v){var L,g;v.stopPropagation(),v.preventDefault(),(g=(L=y.value)==null?void 0:L.input)==null||g.click()}return t1(()=>{const[v,L]=a1(f),g=U.filterProps(e),E=Z.filterProps(e);return a(U,x({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":t.value},H.value,e.class]},v,g,{modelValue:o.value,"onUpdate:modelValue":A=>o.value=A,id:D.value,focused:s.value,style:e.style}),{...l,default:A=>{let{id:O,messagesId:q,isDisabled:$,isReadonly:j,isValid:S}=A;const h={model:o,isValid:S};return a(Z,x({ref:y},E,{modelValue:o.value,"onUpdate:modelValue":[V=>o.value=V,G],id:O.value,"aria-describedby":q.value,type:"checkbox","aria-checked":t.value?"mixed":void 0,disabled:$.value,readonly:j.value,onFocus:i,onBlur:T},L),{...l,default:V=>{let{backgroundColorClasses:k,backgroundColorStyles:u}=V;return a("div",{class:["v-switch__track",...k.value],style:u.value,onClick:R},[l["track-true"]&&a("div",{key:"prepend",class:"v-switch__track-true"},[l["track-true"](h)]),l["track-false"]&&a("div",{key:"append",class:"v-switch__track-false"},[l["track-false"](h)])])},input:V=>{let{inputNode:k,icon:u,backgroundColorClasses:J,backgroundColorStyles:K}=V;return a(F,null,[k,a("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":u||e.loading},e.inset?void 0:J.value],style:e.inset?void 0:K.value},[l.thumb?a(l1,{defaults:{VIcon:{icon:u,size:"x-small"}}},{default:()=>[l.thumb({...h,icon:u})]}):a(n1,null,{default:()=>[e.loading?a(s1,{name:"v-switch",active:!0,color:S.value===!1?void 0:N.value},{default:b=>l.loader?l.loader(b):a(i1,{active:b.isActive,color:b.color,indeterminate:!0,size:"16",width:"2"},null)}):u&&a(o1,{key:String(u),icon:u,size:"x-small"},null)]})])])}})}})}),{}}}),A1=u1({__name:"AppSettings",props:{showSection:{type:String,default:"all"}},async setup(e){let m,f;const l=r1(),{entities:t}=d1(l);[m,f]=C1(()=>l.fetch()),await m,f();const o=()=>{l.update(t.value)};return(H,s)=>(r(),c1(F,null,[e.showSection==="all"||e.showSection==="general"?(r(),d(I,{key:0,class:"mb-3"},{default:C(()=>[a(P,null,{default:C(()=>[_("General")]),_:1}),a(B,null,{default:C(()=>[n(t)?(r(),d(M,{key:0,modelValue:n(t).lightMode,"onUpdate:modelValue":s[0]||(s[0]=i=>n(t).lightMode=i),label:"Light mode",inset:"","false-icon":"M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z","true-icon":"M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13",onChange:o},null,8,["modelValue"])):c("",!0),n(t)?(r(),d(M,{key:1,modelValue:n(t).metricOrImperial,"onUpdate:modelValue":s[1]||(s[1]=i=>n(t).metricOrImperial=i),label:"Metric or imperial units",inset:"","false-icon":"M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z","true-icon":"M11.36,2C11.15,2 10.87,2.12 10.57,2.32C10,2.7 8.85,3.9 8.4,5.1C8.06,6 8.05,6.82 8.19,7.43C7.63,7.53 7.22,7.71 7.06,7.78C6.55,8 5.47,8.96 5.37,10.45C5.34,10.97 5.41,11.5 5.57,12C4.91,12.19 4.53,12.43 4.5,12.44C4.18,12.56 3.65,12.93 3.5,13.13C3.15,13.53 2.92,14 2.79,14.5C2.5,15.59 2.6,16.83 3.13,17.83C3.42,18.39 3.82,19 4.26,19.43C5.7,20.91 8.18,21.47 10.14,21.79C12.53,22.19 15.03,22.05 17.26,21.13C20.61,19.74 21.5,17.5 21.64,16.89C21.93,15.5 21.57,14.19 21.42,13.87C21.2,13.41 20.84,12.94 20.25,12.64C19.85,12.39 19.5,12.26 19.24,12.2C19.5,11.25 19.13,10.5 18.62,9.94C17.85,9.12 17.06,9 17.06,9V9C17.32,8.5 17.42,7.9 17.28,7.32C17.12,6.61 16.73,6.16 16.22,5.86C15.7,5.55 15.06,5.4 14.4,5.28C14.08,5.22 12.75,5.03 12.2,4.27C11.75,3.65 11.74,2.53 11.62,2.2C11.57,2.07 11.5,2 11.36,2M16,9.61C16.07,9.61 16.13,9.62 16.19,9.62C17.62,9.78 18.64,11.16 18.47,12.69C18.3,14.22 17,15.34 15.57,15.18V15.18C14.14,15 13.12,13.65 13.29,12.11C13.45,10.66 14.64,9.56 16,9.61M8.62,9.61C9.95,9.65 11.06,10.78 11.16,12.21C11.28,13.75 10.21,15.08 8.78,15.19H8.77C7.34,15.3 6.08,14.14 5.96,12.6V12.6C5.85,11.06 6.92,9.73 8.35,9.62V9.62C8.44,9.61 8.53,9.61 8.62,9.61M8.64,11.31C8.6,11.31 8.57,11.31 8.53,11.32C7.97,11.39 7.57,11.9 7.64,12.45C7.7,13 8.21,13.39 8.77,13.32C9.33,13.25 9.73,12.74 9.67,12.19C9.61,11.67 9.15,11.3 8.64,11.31M15.94,11.33C15.42,11.35 15,11.75 14.96,12.28C14.92,12.83 15.35,13.31 15.91,13.34C16.5,13.38 16.96,12.95 17,12.4C17.04,11.84 16.61,11.36 16.05,11.33C16,11.33 16,11.33 15.94,11.33M8.71,16.15C9,16.14 9.26,16.23 9.5,16.28C10.68,16.5 11.7,16.53 12.19,16.53C12.68,16.53 13.69,16.5 14.86,16.28C15.27,16.2 15.74,16.03 16.11,16.28C16.59,16.6 16.24,17.75 15.5,18.53C15.04,19 13.97,19.91 12.19,19.91C10.41,19.91 9.33,19 8.88,18.53C8.14,17.75 7.79,16.6 8.26,16.28C8.4,16.19 8.55,16.15 8.71,16.15Z",onChange:o},null,8,["modelValue"])):c("",!0)]),_:1})]),_:1})):c("",!0),e.showSection==="all"||e.showSection==="privacy"?(r(),d(I,{key:1,class:"mb-3"},{default:C(()=>[a(P,null,{default:C(()=>[_("Privacy")]),_:1}),a(B,null,{default:C(()=>[n(t)?(r(),d(M,{key:0,modelValue:n(t).externalServices,"onUpdate:modelValue":s[2]||(s[2]=i=>n(t).externalServices=i),label:"Allow external services",inset:"","false-icon":"M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z","true-icon":"M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z",onChange:o},null,8,["modelValue"])):c("",!0),n(t)?(r(),d(M,{key:1,modelValue:n(t).gps,"onUpdate:modelValue":s[3]||(s[3]=i=>n(t).gps=i),label:"Allow GPS positioning",inset:"","false-icon":"M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z","true-icon":"M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z",onChange:o},null,8,["modelValue"])):c("",!0)]),_:1})]),_:1})):c("",!0)],64))}});export{A1 as _};
