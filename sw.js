if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,d,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./sw.js",["./workbox-c5d460b1"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"194d74c241726acef6158f3cb67ed528"},{url:"about/index.html",revision:"a2d214e68373003c41215c1f732fa96d"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"a930c56cf9e7ffd1791e44874e16753f"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"0c5dfb33b73b438cb710d5960d99175e"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-3/index.html",revision:"7b6df445c59339d9a4d8f0be26fccd11"},{url:"articles/best-way-to-install-python-in-your-computer/index.html",revision:"4d3dc5740f7fc4ce48387a9677bf4022"},{url:"articles/index.html",revision:"f1b899380ed7e298f092ae33b35ab7e2"},{url:"articles/page/1/index.html",revision:"3ca0aa0a41761c5b08b19b4e9fe6d1d4"},{url:"captcha.min.cbe5fed6fbcd7f7d6dda650ab24f3114a4ab276ab8e087ec2d7b9f011837585acb473b6ee300f41322cef18d0836d356d2146c1f4d004d70b75e5ad89d74ee17.js",revision:"6db56022daeaf6fb5b06089f14d98ea5"},{url:"categories/computer-and-programming/index.html",revision:"e7aa271f4c200c70b1c19668df14841e"},{url:"categories/computer-and-programming/page/1/index.html",revision:"15b84defedf1772f99feab7e6fde92a4"},{url:"categories/index.html",revision:"74212cf2eadc178469d3c7b9cc5c6821"},{url:"categories/page/1/index.html",revision:"779700389f3b2f15ab0d5d9d53b508e4"},{url:"contact/index.html",revision:"1f71e60a454dff4210514368e064e490"},{url:"css/themify.woff",revision:"0d4d3d3be3e013acbd8f35eb3f22c502"},{url:"css/themify.woff2",revision:"bcd97f9c8d44683452932b7f86a45fb8"},{url:"index.html",revision:"d160e6b837ef6a88fc5543d144f64f06"},{url:"install-service-worker.html",revision:"e0bca9188a0a24292e4c9d96ec80fd8a"},{url:"js/searchjs.min.68fc598b06cb23a5c9bdaefdbc796a6c93bfb808cd07434ef3c3c1cf27319f91d341f806e32e2f110820208e98f7ca6cf34ddae65760268652de3625baaf1807.js",revision:"ea46c3a50ba76c58945bca6539aaa86f"},{url:"js/vanillascript.min.a75d5de1dd123b8571c56723612dc6b94a9a84fdc5e77fc7f927f607a79688e0516b1eb468d78d051b99723adde1c73ded6280b61f96910eb93df434de4f4176.js",revision:"d981b7e61932d7956fab600c9e24d57c"},{url:"page/1/index.html",revision:"0f1264547c2cddc84b982154a7fca98d"},{url:"plugins/themify-icons/themify-icons.css",revision:"072c7be53bf6f9b20f70305bafe8801e"},{url:"plugins/themify-icons/themify.woff",revision:"0d4d3d3be3e013acbd8f35eb3f22c502"},{url:"plugins/themify-icons/themify.woff2",revision:"bcd97f9c8d44683452932b7f86a45fb8"},{url:"resume/resume.css",revision:"60d5ea69db7328830d91257d1d51cc77"},{url:"resume/resume.html",revision:"4b73689f265695d118568f4133dd5907"},{url:"search/index.html",revision:"042bff381105a5d943423277b5792184"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
