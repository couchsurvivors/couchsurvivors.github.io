import{a8 as i,an as s,az as w,ac as c,A as n,a3 as b,as as V,cb as J,al as m,ao as x,H as p,b1 as P,J as h,b3 as f,am as X,bi as G,ap as K,aO as Q,by as U,bz as W,aq as Y,c4 as Z,at as $,au as ee,b8 as ae,ax as te,bA as ne,c5 as de,aX as le,bj as ie,b9 as se,aP as ce,bB as re,bC as ue,bc as ve,c8 as oe,c as S,ae as me,ba as be,be as ye,aR as ge,c9 as ke}from"./BdlqWWT2.js";const Ce=i()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return w({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=b({opacity:[Number,String],...s(),...V()},"VCardSubtitle"),Ve=i()({name:"VCardSubtitle",props:fe(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ie=J("v-card-title"),Ae=b({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),pe=i()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),y=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),g=!!(r||t.append),k=!!(e.title!=null||t.title),C=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[y&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(f,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(p,null,[e.prependAvatar&&n(P,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(h,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ie,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),C&&n(Ve,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(f,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(p,null,[e.appendIcon&&n(h,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(P,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Pe=b({opacity:[Number,String],...s(),...V()},"VCardText"),he=i()({name:"VCardText",props:Pe(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Se=b({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...X(),...s(),...x(),...G(),...K(),...Q(),...U(),...W(),...Y(),...Z(),...V(),...$(),...ee({variant:"elevated"})},"VCard"),Te=i()({name:"VCard",directives:{Ripple:ae},props:Se(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:y}=te(e),{borderClasses:r}=ne(e),{colorClasses:g,colorStyles:k,variantClasses:C}=de(e),{densityClasses:u}=le(e),{dimensionStyles:l}=ie(e),{elevationClasses:T}=se(e),{loaderClasses:B}=ce(e),{locationStyles:D}=re(e),{positionClasses:L}=ue(e),{roundedClasses:N}=ve(e),v=oe(e,t),_=S(()=>e.link!==!1&&v.isLink.value),o=S(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return c(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),O=!!(a.subtitle||e.subtitle!=null),j=F||O,z=!!(a.append||e.appendAvatar||e.appendIcon),E=!!(a.prepend||e.prependAvatar||e.prependIcon),H=!!(a.image||e.image),M=j||E||z,q=!!(a.text||e.text!=null);return me(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":o.value},y.value,r.value,g.value,u.value,T.value,B.value,L.value,N.value,C.value,e.class],style:[k.value,l.value,D.value,e.style],href:v.href.value,onClick:o.value&&v.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[H&&n("div",{key:"image",class:"v-card__image"},[a.image?n(f,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ye,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),M&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(he,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ce,null,{default:a.actions}),ke(o.value,"v-card")]}}),[[be("ripple"),o.value&&e.ripple]])}),{}}});export{Ie as V,he as a,Te as b,Ce as c};