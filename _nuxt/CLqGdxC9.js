import{a3 as A,bN as D,bm as h,a8 as x,a9 as L,bO as S,r as T,a$ as w,T as d,ac as B,bP as m,ag as f,A as g,b3 as F,b5 as I,W as O,bQ as R}from"./BdlqWWT2.js";const N=A({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...D({origin:"center center",scrollStrategy:"block",transition:{component:h},zIndex:2400})},"VDialog"),W=x()({name:"VDialog",props:N(),emits:{"update:modelValue":a=>!0,afterLeave:()=>!0},setup(a,b){let{emit:p,slots:i}=b;const r=L(a,"modelValue"),{scopeId:E}=S(),e=T();function v(t){var l,c;const n=t.relatedTarget,s=t.target;if(n!==s&&((l=e.value)!=null&&l.contentEl)&&((c=e.value)!=null&&c.globalTop)&&![document,e.value.contentEl].includes(s)&&!e.value.contentEl.contains(s)){const o=R(e.value.contentEl);if(!o.length)return;const u=o[0],y=o[o.length-1];n===u?y.focus():u.focus()}}w&&d(()=>r.value&&a.retainFocus,t=>{t?document.addEventListener("focusin",v):document.removeEventListener("focusin",v)},{immediate:!0});function V(){var t;(t=e.value)!=null&&t.contentEl&&!e.value.contentEl.contains(document.activeElement)&&e.value.contentEl.focus({preventScroll:!0})}function P(){p("afterLeave")}return d(r,async t=>{var n;t||(await O(),(n=e.value.activatorEl)==null||n.focus({preventScroll:!0}))}),B(()=>{const t=m.filterProps(a),n=f({"aria-haspopup":"dialog","aria-expanded":String(r.value)},a.activatorProps),s=f({tabindex:-1},a.contentProps);return g(m,f({ref:e,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},t,{modelValue:r.value,"onUpdate:modelValue":l=>r.value=l,"aria-modal":"true",activatorProps:n,contentProps:s,role:"dialog",onAfterEnter:V,onAfterLeave:P},E),{activator:i.activator,default:function(){for(var l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return g(F,{root:"VDialog"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...c)]}})}})}),I({},e)}});export{W as V};
