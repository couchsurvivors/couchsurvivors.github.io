if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>t(e,o),l={module:{uri:o},exports:r,require:c};s[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cbf83eee"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"0b80a2004bd27037d2c441a98756fe9e"},{url:"_nuxt/builds/meta/802d5d45-3c7f-4e1d-9864-411b5632cc00.json",revision:null},{url:"manifest.webmanifest",revision:"9e6d491aac42aa7b5d01a77ce21cb3dc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
