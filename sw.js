if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const f=e=>t(e,o),c={module:{uri:o},exports:r,require:f};s[o]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cbf83eee"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"97598312dbe16a3f73ad49bfe4e13fb5"},{url:"_nuxt/builds/meta/31e7ffff-2acc-4b1f-b653-1ec1d2d0bdd4.json",revision:null},{url:"manifest.webmanifest",revision:"9e6d491aac42aa7b5d01a77ce21cb3dc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
