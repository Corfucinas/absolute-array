if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const n=e=>a(e,s),t={module:{uri:s},exports:d,require:n};i[s]=Promise.all(r.map((e=>t[e]||n(e)))).then((e=>(c(...e),d)))}}define(["./workbox-200bc1ce"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"3ce7280a9aad83733c7c73b3c72034b6"},{url:"about/index.html",revision:"61631182104e5dba8cb81b35233c3969"},{url:"about/page/1/index.html",revision:"06e874b6c9f44cea0633f812095126aa"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"23ab7ccb0f09c6ce4981c26325ec56b6"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"04598dd3979a9ce783a189a33d5ac80e"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-3/index.html",revision:"cff84ce8c24806664a06d7d9e8067e5c"},{url:"articles/best-way-to-install-python-in-your-computer/index.html",revision:"0547fa8f76c147706890a45a20d12dca"},{url:"articles/index.html",revision:"d47ae70472f315418d4dfb4f54702dce"},{url:"articles/page/1/index.html",revision:"3ca0aa0a41761c5b08b19b4e9fe6d1d4"},{url:"articles/page/2/index.html",revision:"4789741b9ccc42a44af437060b632a9f"},{url:"categories/computer-and-programming/index.html",revision:"5f32d5acbef64dac8149ffffcd4338ff"},{url:"categories/computer-and-programming/page/1/index.html",revision:"15b84defedf1772f99feab7e6fde92a4"},{url:"categories/computer-and-programming/page/2/index.html",revision:"ac8d9d01c72bed923e989120026e4830"},{url:"categories/index.html",revision:"8f5e7cc1ec6d0af63776fd192d4ac3f2"},{url:"categories/page/1/index.html",revision:"779700389f3b2f15ab0d5d9d53b508e4"},{url:"contact/index.html",revision:"4ae3a5ed5c326a5588b69f7e46227b9b"},{url:"contact/page/1/index.html",revision:"64cc783d0b5bd4140d536754fb80cd1b"},{url:"en/index.html",revision:"0f1264547c2cddc84b982154a7fca98d"},{url:"es/404.html",revision:"7f7a11390a707f428c39224257116483"},{url:"es/categories/index.html",revision:"f0702df784be2e910a8fbc324a72c45e"},{url:"es/categories/page/1/index.html",revision:"73b8f51bbcdbbc2a0f06146ca2de7689"},{url:"es/index.html",revision:"6272ffa3612efd22ffa47b8447e45675"},{url:"es/page/1/index.html",revision:"dada336e5680e1ee55426d001107e793"},{url:"es/series/index.html",revision:"36a16ea5884b21ac5783a62924c4e44b"},{url:"es/series/page/1/index.html",revision:"57b9b6a7381267147d9fd167555b962f"},{url:"index.html",revision:"5c5a7276d12c6a74c40e855a1773eae2"},{url:"install-sw.html",revision:"2dee340cfe628e4d4af8c84804152198"},{url:"offline.html",revision:"17f90bdb4a0fbef8133c6369302fdc66"},{url:"page/1/index.html",revision:"0f1264547c2cddc84b982154a7fca98d"},{url:"page/2/index.html",revision:"ea0ea5b868d57cebea69bd677d3890cd"},{url:"resume/resume.css",revision:"d7b725622cf9f867eacb3ca8ca732329"},{url:"resume/resume.html",revision:"a7fb3d34d691b644dff63e567b1b9530"},{url:"resume/tatjana/resume.css",revision:"ec43c27f836a03251635d1ab0f320077"},{url:"resume/tatjana/resume.html",revision:"6c1dfe7f99182bd348b2fcbb6af51b2d"},{url:"search/index.html",revision:"e328ee64d744dce6bf5e04a08efb8433"},{url:"search/page/1/index.html",revision:"4479856fc3e2c3a8354ec9cd7581ad83"},{url:"series/117-vscode-extensions/index.html",revision:"d77d3f9d35a16330cd6e567f0666a01c"},{url:"series/117-vscode-extensions/page/1/index.html",revision:"8dff533a0622607a193de0cb80560a29"},{url:"series/index.html",revision:"4bd0e855a5c4fe4fadb7c28c9955ab3a"},{url:"series/page/1/index.html",revision:"8c3e53e548b322b1e1ca5aff19a9fd19"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
