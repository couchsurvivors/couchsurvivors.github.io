import{a3 as n,an as i,a6 as l,a8 as r,ah as y,c as d,a2 as t,ac as c,A as I}from"./BdlqWWT2.js";const V=n({position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...i(),...l()},"VLayoutItem"),z=r()({name:"VLayoutItem",props:V(),setup(e,s){let{slots:a}=s;const{layoutItemStyles:u,layoutIsReady:m}=y({id:e.name,order:d(()=>parseInt(e.order,10)),position:t(e,"position"),elementSize:t(e,"size"),layoutSize:t(e,"size"),active:t(e,"modelValue"),absolute:t(e,"absolute")});return c(()=>{var o;return I("div",{class:["v-layout-item",e.class],style:[u.value,e.style]},[(o=a.default)==null?void 0:o.call(a)])}),m}});export{z as V};
