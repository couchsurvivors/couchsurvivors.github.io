import{d as V,r as u,v as b,a8 as C,B as l,A as e,a9 as _,C as i,aa as g,ba as d,af as m,ag as f,aj as v,ab as w,bu as x}from"./CtVgfMa7.js";import{V as c}from"./51maY0zD.js";import{V as p}from"./BruZ32cF.js";import{V as B}from"./mPOIiytr.js";import"./DAX5x1hg.js";const L=V({__name:"login",setup(S){const o=u(""),t=u("");async function r(){const s=x().users;await s.signIn(o.value,t.value),console.log(s.user)}return(s,a)=>(b(),C(B,null,{default:l(()=>[e(w,null,{default:l(()=>[e(_,null,{default:l(()=>[i("Login")]),_:1}),e(g,null,{default:l(()=>[e(c,{onSubmit:a[2]||(a[2]=d(()=>{},["prevent"]))},{default:l(()=>[e(p,{modelValue:m(o),"onUpdate:modelValue":a[0]||(a[0]=n=>f(o)?o.value=n:null),label:"Email",required:"",onSubmit:d(r,["prevent"])},null,8,["modelValue"]),e(p,{modelValue:m(t),"onUpdate:modelValue":a[1]||(a[1]=n=>f(t)?t.value=n:null),label:"Password",required:"",type:"password"},null,8,["modelValue"]),e(v,{type:"submit",onClick:r},{default:l(()=>[i("Login")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{L as default};
