if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>t(e,o),l={module:{uri:o},exports:r,require:c};s[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cbf83eee"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"24c70d25906149df0992cf50e2796c7c"},{url:"_nuxt/builds/meta/c4c855c8-e559-43d1-b2aa-9349d9bf6d70.json",revision:null},{url:"manifest.webmanifest",revision:"9e6d491aac42aa7b5d01a77ce21cb3dc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
