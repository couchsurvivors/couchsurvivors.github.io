if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const l=e=>t(e,o),u={module:{uri:o},exports:r,require:l};s[o]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cbf83eee"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"e3bbebeff7f250436daf4bfbeee8c909"},{url:"_nuxt/builds/meta/7101a70e-6229-4252-be19-dbe9a9cb096b.json",revision:null},{url:"manifest.webmanifest",revision:"9e6d491aac42aa7b5d01a77ce21cb3dc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
