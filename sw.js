if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const l=e=>t(e,o),u={module:{uri:o},exports:r,require:l};s[o]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cbf83eee"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"bd299976c9469e1b1468442d71ad1c00"},{url:"_nuxt/builds/meta/1d19b8cf-8661-4801-8d79-f4e992c86c59.json",revision:null},{url:"manifest.webmanifest",revision:"42f11627470b3a47492316b26fbaff4d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
