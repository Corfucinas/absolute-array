if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const d=e=>r(e,n),t={module:{uri:n},exports:c,require:d};i[n]=Promise.all(a.map((e=>t[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-bc976f3c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"5f7291c3b99b0080a556e254d28dc21c"},{url:"about/index.html",revision:"492602b8f5e6e77d1e1341d02ea30451"},{url:"about/page/1/index.html",revision:"115815d47cc0cb5f562c21a70e550745"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"995860228bca9a903c870d73ff7247b9"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"93c9f9158eafd1631d5b592fea568fa1"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-3/index.html",revision:"3a293a2f3383f308fa018c38e7eb9c90"},{url:"articles/best-way-to-install-python-in-your-computer/index.html",revision:"fe5c08b6e43baf307a7efc885c17a80d"},{url:"articles/index.html",revision:"e5dbd58b9bb90199dcea78cc3a352f31"},{url:"articles/page/1/index.html",revision:"61c48bff4bb8cb9902b22be4cbb68e95"},{url:"articles/page/2/index.html",revision:"62ea1316165d1d2b39c8092e403fa8bd"},{url:"categories/computer-and-programming/index.html",revision:"e21b40d784dfa5de3681042e1f4358a5"},{url:"categories/computer-and-programming/page/1/index.html",revision:"a693ded1f9810850faa778dddb0f1cfe"},{url:"categories/computer-and-programming/page/2/index.html",revision:"5fb4493f7e81ea8560fc42b52998b97e"},{url:"categories/index.html",revision:"06a2790c0aaece38c7a42de93a009d8a"},{url:"categories/page/1/index.html",revision:"912f0256d163d927a608d0e6c1571aca"},{url:"contact/index.html",revision:"f94ba0b096f2b8323b828c8d81d86956"},{url:"contact/page/1/index.html",revision:"a3c59528b9d2642706b56fd3c9a6071f"},{url:"en/index.html",revision:"ce43237ccb7eebe92f5a7f4e774a3ed7"},{url:"es/404.html",revision:"0d8684b2433aeb566312484b41b76330"},{url:"es/categories/index.html",revision:"c3c5013967db463d57d6b1c3b98e4cd4"},{url:"es/categories/page/1/index.html",revision:"07aa5a9bf7b2751e61534669c65a4808"},{url:"es/index.html",revision:"a6906bd9d36a2e35cc7ebbb902948b55"},{url:"es/page/1/index.html",revision:"6c57cffcb4659275d79a45bfd504a232"},{url:"es/series/index.html",revision:"592cb2e5e99d45767ce8bed9c0ebd2bd"},{url:"es/series/page/1/index.html",revision:"42874188d5a412a301539a2914135c02"},{url:"index.html",revision:"4fb5aae2ef7df70230dc20d20022d949"},{url:"install-sw.html",revision:"2dee340cfe628e4d4af8c84804152198"},{url:"offline.html",revision:"391600b0cb231b7f312fe47541387522"},{url:"page/1/index.html",revision:"ce43237ccb7eebe92f5a7f4e774a3ed7"},{url:"page/2/index.html",revision:"7f2eef351f28acdb879e868b52cf3adc"},{url:"resume/resume.css",revision:"72232543b0c1b18efb41c7214f98e909"},{url:"resume/resume.html",revision:"eee78701ee678dd636f006749649470a"},{url:"resume/tatjana/resume.css",revision:"ec43c27f836a03251635d1ab0f320077"},{url:"resume/tatjana/resume.html",revision:"6c1dfe7f99182bd348b2fcbb6af51b2d"},{url:"search/index.html",revision:"cb5fa6f7e51de525516836804492f183"},{url:"search/page/1/index.html",revision:"d6bab1d1e81ac6372c2f64d115153872"},{url:"series/117-vscode-extensions/index.html",revision:"fd9b4ce4e82e2b5ac12c2ee468b6b0a5"},{url:"series/117-vscode-extensions/page/1/index.html",revision:"1cb69351aa70f4b891d303c7a98510ac"},{url:"series/index.html",revision:"d6e61e48e99485b12c3b30f25261d2a1"},{url:"series/page/1/index.html",revision:"f65bbb1cc586d9a88b4a8f3a859ff0f4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
