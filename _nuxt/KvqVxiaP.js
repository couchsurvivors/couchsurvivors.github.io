import{a6 as l,ar as i,a9 as n,ab as r,ak as y,c as d,al as t,af as c,A as I}from"./CoGiOYfK.js";const V=l({position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...i(),...n()},"VLayoutItem"),f=r()({name:"VLayoutItem",props:V(),setup(e,s){let{slots:a}=s;const{layoutItemStyles:u,layoutIsReady:m}=y({id:e.name,order:d(()=>parseInt(e.order,10)),position:t(e,"position"),elementSize:t(e,"size"),layoutSize:t(e,"size"),active:t(e,"modelValue"),absolute:t(e,"absolute")});return c(()=>{var o;return I("div",{class:["v-layout-item",e.class],style:[u.value,e.style]},[(o=a.default)==null?void 0:o.call(a)])}),m}});export{f as V};