import{F as d,G as h,aP as m,X as b,a3 as v,I as f,a5 as c,bd as u,L as g,A as t,a_ as x}from"./ydJ1sahg.js";const T=d({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...h(),...m(),...b(),...v()},"VTable"),V=f()({name:"VTable",props:T(),setup(a,r){let{slots:e,emit:y}=r;const{themeClasses:i}=c(a),{densityClasses:n}=u(a);return g(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},i.value,n.value,a.class],style:a.style},{default:()=>{var o,s,l;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:x(a.height)}},[t("table",null,[e.default()])]):(s=e.wrapper)==null?void 0:s.call(e),(l=e.bottom)==null?void 0:l.call(e)]}})),{}}});export{V,T as m};
