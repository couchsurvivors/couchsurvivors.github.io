import{d as p,r as u,v as C,F as _,B as a,A as e,V as v,C as d,G as b,aY as i,R as m,a3 as V,S as g,H as w,bo as x}from"./DdnqjRe4.js";import{V as c}from"./C7ywCaU_.js";import{V as f}from"./Dpl9W5g1.js";import{V as S}from"./CGk2WxOf.js";const q=p({__name:"login",setup(B){const o=u(""),t=u("");async function r(){const s=x().users;await s.signIn(o.value,t.value),console.log(s.user)}return(s,l)=>(C(),_(S,null,{default:a(()=>[e(w,null,{default:a(()=>[e(v,null,{default:a(()=>[d("Login")]),_:1}),e(b,null,{default:a(()=>[e(c,{onSubmit:l[2]||(l[2]=i(()=>{},["prevent"]))},{default:a(()=>[e(f,{modelValue:m(o),"onUpdate:modelValue":l[0]||(l[0]=n=>V(o)?o.value=n:null),label:"Email",required:"",onSubmit:i(r,["prevent"])},null,8,["modelValue"]),e(f,{modelValue:m(t),"onUpdate:modelValue":l[1]||(l[1]=n=>V(t)?t.value=n:null),label:"Password",required:"",type:"password"},null,8,["modelValue"]),e(g,{type:"submit",onClick:r},{default:a(()=>[d("Login")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{q as default};
