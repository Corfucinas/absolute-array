if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const d=e=>a(e,s),t={module:{uri:s},exports:n,require:d};i[s]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-18025480"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"5f7291c3b99b0080a556e254d28dc21c"},{url:"about/index.html",revision:"96cb3c11ae0442baed5a6692ab1f6417"},{url:"about/page/1/index.html",revision:"115815d47cc0cb5f562c21a70e550745"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"34d4f702a12b086f748717ee04138d41"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"0bb36841beda2bc8cea8b37d0b95543f"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-3/index.html",revision:"351cbbbfb96ea9ed79b73e02673f18aa"},{url:"articles/best-way-to-install-python-in-your-computer/index.html",revision:"a2a6ff4b05bda8ed7f6e5e6e49b858ec"},{url:"articles/index.html",revision:"d8fa4529a21e2160b7e22cbc6ac49d81"},{url:"articles/page/1/index.html",revision:"61c48bff4bb8cb9902b22be4cbb68e95"},{url:"articles/page/2/index.html",revision:"212fb3e7fd7bbce8a2bd6656a0cdfdc8"},{url:"categories/computer-and-programming/index.html",revision:"833bdd178595886c2812c826cbb2a1ce"},{url:"categories/computer-and-programming/page/1/index.html",revision:"a693ded1f9810850faa778dddb0f1cfe"},{url:"categories/computer-and-programming/page/2/index.html",revision:"c8563f33bc96227bd021823c425aaafe"},{url:"categories/index.html",revision:"4ee4f4ccdfae0c41d4fca443395bd276"},{url:"categories/page/1/index.html",revision:"912f0256d163d927a608d0e6c1571aca"},{url:"contact/index.html",revision:"506f5bc1cd3ce9026d2da28f594b1281"},{url:"contact/page/1/index.html",revision:"a3c59528b9d2642706b56fd3c9a6071f"},{url:"en/index.html",revision:"ce43237ccb7eebe92f5a7f4e774a3ed7"},{url:"es/404.html",revision:"0d8684b2433aeb566312484b41b76330"},{url:"es/categories/index.html",revision:"32c4f755c6c3e294937ae603996be671"},{url:"es/categories/page/1/index.html",revision:"07aa5a9bf7b2751e61534669c65a4808"},{url:"es/index.html",revision:"aed7c458538e2a8f9defaf67d5136768"},{url:"es/page/1/index.html",revision:"6c57cffcb4659275d79a45bfd504a232"},{url:"es/series/index.html",revision:"5c6bcf1a20253e36334ac6b4bb31b4e6"},{url:"es/series/page/1/index.html",revision:"42874188d5a412a301539a2914135c02"},{url:"index.html",revision:"6290d495980389d7a093e12ab8b24693"},{url:"install-sw.html",revision:"2dee340cfe628e4d4af8c84804152198"},{url:"offline.html",revision:"391600b0cb231b7f312fe47541387522"},{url:"page/1/index.html",revision:"ce43237ccb7eebe92f5a7f4e774a3ed7"},{url:"page/2/index.html",revision:"2682e06fcfa3c360dec1fe65b54862a7"},{url:"resume/resume.css",revision:"d7b725622cf9f867eacb3ca8ca732329"},{url:"resume/resume.html",revision:"6b8d3006fa83152bf16092483b8ced73"},{url:"resume/tatjana/resume.css",revision:"ec43c27f836a03251635d1ab0f320077"},{url:"resume/tatjana/resume.html",revision:"6c1dfe7f99182bd348b2fcbb6af51b2d"},{url:"search/index.html",revision:"4b8ec8f310787e82c482a6804afcd627"},{url:"search/page/1/index.html",revision:"d6bab1d1e81ac6372c2f64d115153872"},{url:"series/117-vscode-extensions/index.html",revision:"7fe9b4ecd535bba89cc3df08b9269416"},{url:"series/117-vscode-extensions/page/1/index.html",revision:"1cb69351aa70f4b891d303c7a98510ac"},{url:"series/index.html",revision:"691e438a952777f1c21c6fa62692bd01"},{url:"series/page/1/index.html",revision:"f65bbb1cc586d9a88b4a8f3a859ff0f4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
