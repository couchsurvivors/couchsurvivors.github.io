function a(e){const o={};for(const t of e)o[t.category.name]||(o[t.category.name]={name:t.category.name,weight:t.weight*t.amount,color:t.category.color,icon:t.category.icon}),o[t.category.name].weight+=t.weight*t.amount;return o}function r(e,o=!1){return o?`${(e/1e3).toFixed(2)}kg`:`${Math.round(e)}g`}export{r as f,a as g};
