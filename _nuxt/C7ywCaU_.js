import{a6 as b,ar as p,bH as v,ab as F,bI as V,r as y,af as h,A as R,ba as P}from"./DdnqjRe4.js";const k=b({...p(),...v()},"VForm"),D=F()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const o=V(r),s=y();function l(t){t.preventDefault(),o.reset()}function u(t){const a=t,e=o.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),i("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return h(()=>{var t;return R("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,o)])}),P(o,s)}});export{D as V};
