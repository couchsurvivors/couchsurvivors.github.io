import{d as V,r as u,v as C,a8 as _,B as l,A as e,a9 as b,C as i,aa as g,b9 as d,af as m,ag as f,aj as v,ab as w,al as x}from"./DPAdyU9h.js";import{V as c}from"./uCvNsO-t.js";import{V as p}from"./x49R443D.js";import{V as B}from"./LaeKp_hW.js";import"./BGna-fTY.js";const L=V({__name:"login",setup(S){const o=u(""),t=u("");async function r(){const s=x().users;await s.signIn(o.value,t.value),console.log(s.user)}return(s,a)=>(C(),_(B,null,{default:l(()=>[e(w,null,{default:l(()=>[e(b,null,{default:l(()=>[i("Login")]),_:1}),e(g,null,{default:l(()=>[e(c,{onSubmit:a[2]||(a[2]=d(()=>{},["prevent"]))},{default:l(()=>[e(p,{modelValue:m(o),"onUpdate:modelValue":a[0]||(a[0]=n=>f(o)?o.value=n:null),label:"Email",required:"",onSubmit:d(r,["prevent"])},null,8,["modelValue"]),e(p,{modelValue:m(t),"onUpdate:modelValue":a[1]||(a[1]=n=>f(t)?t.value=n:null),label:"Password",required:"",type:"password"},null,8,["modelValue"]),e(v,{type:"submit",onClick:r},{default:l(()=>[i("Login")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{L as default};
