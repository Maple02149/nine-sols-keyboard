if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,f)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let n={};const r=e=>i(e,s),d={module:{uri:s},exports:n,require:r};a[s]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(f(...e),n)))}}define(["./workbox-724f97ec"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"9a42ea3dcdf0cc1a56254b473fa2371a"},{url:"assets/apple-touch-icon-CRVZG88Q.png",revision:"9a42ea3dcdf0cc1a56254b473fa2371a"},{url:"assets/favicon-16x16-BVThhGbJ.png",revision:"863605719bc0cfe64d18d798dadd5a04"},{url:"assets/favicon-32x32-BZ0vNsf4.png",revision:"a3c42368fa337fd742ee8f746b8e389f"},{url:"assets/index-B4ziEGYv.css",revision:"c19c75ba81a214f33c89ec0daa829f00"},{url:"assets/index-wfFZj9hV.js",revision:"6c35044c98b128e52be68b0c563bc121"},{url:"assets/NineSols02-DS4KRwqL.ttf",revision:"01443761285e4af360a6a24c2e4f5dbb"},{url:"assets/site-Dn8XL40V.webmanifest",revision:"5bd02b12d1a58cc8f61fa664e61a518c"},{url:"cangjieJSON.json",revision:"a601f5c2f2cf114312de6c757a4e339a"},{url:"favicon-16x16.png",revision:"863605719bc0cfe64d18d798dadd5a04"},{url:"favicon-32x32.png",revision:"a3c42368fa337fd742ee8f746b8e389f"},{url:"favicon.ico",revision:"9f836df57e1af466e2ebbaa68c6de42f"},{url:"index.html",revision:"9b07b384f329a0d15befd34657183dcc"},{url:"manifest.json",revision:"f53b848e5670028230fccd1a8a5af598"},{url:"manifest.webmanifest",revision:"880d07dcfb174ca43b4c519bf972be82"},{url:"mask-icon.svg",revision:"2ffd6a077db74e7c495686885485891e"},{url:"pwa-192x192.png",revision:"1a0ee9b7384bfdfa9ea654534a42196e"},{url:"pwa-512x512.png",revision:"232dd6ddb34518f569889af89469c1b1"},{url:"pwa-maskable-192x192.png",revision:"625ec6c527a2f5e61fdf1dbc744f75dc"},{url:"pwa-maskable-512x512.png",revision:"eb4a2e32b6dc078cc410c5a07007843c"},{url:"registerSW.js",revision:"a75702695a2f1abc3d1618d525791a03"},{url:"robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"site.webmanifest",revision:"5bd02b12d1a58cc8f61fa664e61a518c"},{url:"apple-touch-icon.png",revision:"9a42ea3dcdf0cc1a56254b473fa2371a"},{url:"cangjieJSON.json",revision:"a601f5c2f2cf114312de6c757a4e339a"},{url:"favicon-16x16.png",revision:"863605719bc0cfe64d18d798dadd5a04"},{url:"favicon-32x32.png",revision:"a3c42368fa337fd742ee8f746b8e389f"},{url:"favicon.ico",revision:"9f836df57e1af466e2ebbaa68c6de42f"},{url:"manifest.json",revision:"f53b848e5670028230fccd1a8a5af598"},{url:"mask-icon.svg",revision:"2ffd6a077db74e7c495686885485891e"},{url:"pwa-192x192.png",revision:"1a0ee9b7384bfdfa9ea654534a42196e"},{url:"pwa-512x512.png",revision:"232dd6ddb34518f569889af89469c1b1"},{url:"pwa-maskable-192x192.png",revision:"625ec6c527a2f5e61fdf1dbc744f75dc"},{url:"pwa-maskable-512x512.png",revision:"eb4a2e32b6dc078cc410c5a07007843c"},{url:"robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"site.webmanifest",revision:"5bd02b12d1a58cc8f61fa664e61a518c"},{url:"manifest.webmanifest",revision:"880d07dcfb174ca43b4c519bf972be82"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
