import{a6 as D,bC as A,bm as h,ab as x,ac as L,bD as S,r as F,b4 as w,X as d,af as B,bE as m,aj as f,A as g,b8 as I,ba as R,Z as T,bF as C}from"./DTtFFXxD.js";const O=D({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...A({origin:"center center",scrollStrategy:"block",transition:{component:h},zIndex:2400})},"VDialog"),j=x()({name:"VDialog",props:O(),emits:{"update:modelValue":a=>!0,afterLeave:()=>!0},setup(a,b){let{emit:E,slots:i}=b;const r=L(a,"modelValue"),{scopeId:p}=S(),e=F();function v(t){var l,c;const n=t.relatedTarget,s=t.target;if(n!==s&&((l=e.value)!=null&&l.contentEl)&&((c=e.value)!=null&&c.globalTop)&&![document,e.value.contentEl].includes(s)&&!e.value.contentEl.contains(s)){const o=C(e.value.contentEl);if(!o.length)return;const u=o[0],y=o[o.length-1];n===u?y.focus():u.focus()}}w&&d(()=>r.value&&a.retainFocus,t=>{t?document.addEventListener("focusin",v):document.removeEventListener("focusin",v)},{immediate:!0});function V(){var t;(t=e.value)!=null&&t.contentEl&&!e.value.contentEl.contains(document.activeElement)&&e.value.contentEl.focus({preventScroll:!0})}function P(){E("afterLeave")}return d(r,async t=>{var n;t||(await T(),(n=e.value.activatorEl)==null||n.focus({preventScroll:!0}))}),B(()=>{const t=m.filterProps(a),n=f({"aria-haspopup":"dialog","aria-expanded":String(r.value)},a.activatorProps),s=f({tabindex:-1},a.contentProps);return g(m,f({ref:e,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},t,{modelValue:r.value,"onUpdate:modelValue":l=>r.value=l,"aria-modal":"true",activatorProps:n,contentProps:s,role:"dialog",onAfterEnter:V,onAfterLeave:P},p),{activator:i.activator,default:function(){for(var l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return g(I,{root:"VDialog"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...c)]}})}})}),R({},e)}});export{j as V};
