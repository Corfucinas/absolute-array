if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,d,a)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=a(...e);return r.default||(r.default=i),r}))})))}}define("./sw.js",["./workbox-977224b3"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"3ce7280a9aad83733c7c73b3c72034b6"},{url:"about/index.html",revision:"2b2c8c4fbfa73a55aacbf1e94abdaa5e"},{url:"about/page/1/index.html",revision:"06e874b6c9f44cea0633f812095126aa"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"49e8d3dd645a3c9957b25dcf52ea6452"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"dc828857b730d4c48116f02f4f22122a"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-3/index.html",revision:"f6b315a3cfc64c8cbab7b31de93296c2"},{url:"articles/best-way-to-install-python-in-your-computer/index.html",revision:"704fc9d7f96a86c453de688550520c54"},{url:"articles/index.html",revision:"822450ca2d3a4581c8dc19e1a77df10f"},{url:"articles/page/1/index.html",revision:"3ca0aa0a41761c5b08b19b4e9fe6d1d4"},{url:"articles/page/2/index.html",revision:"04fa706ea85a73865e128b87e90055f0"},{url:"categories/computer-and-programming/index.html",revision:"af2e7cdb89becd9f09223f5bc7b621a3"},{url:"categories/computer-and-programming/page/1/index.html",revision:"15b84defedf1772f99feab7e6fde92a4"},{url:"categories/computer-and-programming/page/2/index.html",revision:"468d04260c9c28c59582d002844ccf1f"},{url:"categories/index.html",revision:"9f9568e0ce9558e1e4b9e109f0953e46"},{url:"categories/page/1/index.html",revision:"779700389f3b2f15ab0d5d9d53b508e4"},{url:"contact/index.html",revision:"efe43a78a78a36dbc1575bb29770dd3d"},{url:"contact/page/1/index.html",revision:"64cc783d0b5bd4140d536754fb80cd1b"},{url:"en/index.html",revision:"0f1264547c2cddc84b982154a7fca98d"},{url:"es/404.html",revision:"7f7a11390a707f428c39224257116483"},{url:"es/categories/index.html",revision:"25809fae9359efbd46d17212612ae500"},{url:"es/categories/page/1/index.html",revision:"73b8f51bbcdbbc2a0f06146ca2de7689"},{url:"es/index.html",revision:"1927b485de8371b5c2c4fce578dd782f"},{url:"es/page/1/index.html",revision:"dada336e5680e1ee55426d001107e793"},{url:"es/series/index.html",revision:"c2d43f876fdb0f2fc888678bd583cd77"},{url:"es/series/page/1/index.html",revision:"57b9b6a7381267147d9fd167555b962f"},{url:"index.html",revision:"addd2dc539d62dc3b86f81b15e73fe2e"},{url:"install-sw.html",revision:"2dee340cfe628e4d4af8c84804152198"},{url:"offline.html",revision:"17f90bdb4a0fbef8133c6369302fdc66"},{url:"page/1/index.html",revision:"0f1264547c2cddc84b982154a7fca98d"},{url:"page/2/index.html",revision:"7054a39a5dd3e1cd37ed9d5b5fd7e1d0"},{url:"resume/resume.css",revision:"d7b725622cf9f867eacb3ca8ca732329"},{url:"resume/resume.html",revision:"3ee1f861db0403ee61329df5a0381292"},{url:"search/index.html",revision:"c24ecc096962a538a4ff9ee6a1abbf5c"},{url:"search/page/1/index.html",revision:"4479856fc3e2c3a8354ec9cd7581ad83"},{url:"series/117-vscode-extensions/index.html",revision:"51b3647e185897d1cdf313df9d8b6a32"},{url:"series/117-vscode-extensions/page/1/index.html",revision:"8dff533a0622607a193de0cb80560a29"},{url:"series/index.html",revision:"15c2b1bb3077e74dc960fe6d813fd821"},{url:"series/page/1/index.html",revision:"8c3e53e548b322b1e1ca5aff19a9fd19"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
