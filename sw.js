if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,n,a)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(n.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=a(...e);return r.default||(r.default=i),r}))})))}}define("./sw.js",["./workbox-c5d460b1"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"en/404.html",revision:"bcdc7bf7ea34ccc5afd7fde5d8982438"},{url:"en/about/index.html",revision:"b704938c8c7848d9d017d76a2c627df6"},{url:"en/about/page/1/index.html",revision:"d7e99fff76308335220d0159ed0602c9"},{url:"en/articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"77767e57a9937676efd76a82b9bbb0d4"},{url:"en/articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"43fd039c6b36fe60d07fea71b9f63632"},{url:"en/articles/117-vscode-extensions-the-ultimate-guide-part-3/index.html",revision:"129990fbf508375eb675f818f70d44a7"},{url:"en/articles/best-way-to-install-python-in-your-computer/index.html",revision:"485a2f201413beb2782e71f2004a4beb"},{url:"en/articles/index.html",revision:"2644b58d9e8dfba946ae15cc60e157de"},{url:"en/articles/page/1/index.html",revision:"64271b91c5a6fcf5f3d0f8aa616481c5"},{url:"en/articles/page/2/index.html",revision:"323099404a5990fe23c8062a8c82543c"},{url:"en/categories/computer-and-programming/index.html",revision:"93bc041fc05d3f5f7b3f3fcf31e7b19e"},{url:"en/categories/computer-and-programming/page/1/index.html",revision:"a32d8ac54087381fb28ec86f5cd61aa0"},{url:"en/categories/computer-and-programming/page/2/index.html",revision:"58296d756d536e8c78da4a8d99c8e3e6"},{url:"en/categories/index.html",revision:"e5529fb13ff0f925456683a8daf6b908"},{url:"en/categories/page/1/index.html",revision:"70604bc9c32fa1657e2f101920f08df3"},{url:"en/contact/index.html",revision:"1a15bc9b329c2f8343201e19ebf55660"},{url:"en/contact/page/1/index.html",revision:"0db455316173f766d233022c74d950b9"},{url:"en/index.html",revision:"090d2d00059720c43ad055e7ab6c4a8f"},{url:"en/page/1/index.html",revision:"c656691c25514c3f6ea13fa5c8d64c60"},{url:"en/page/2/index.html",revision:"4ea356567bdace0245d22452e17dc152"},{url:"en/resume/resume.css",revision:"d7b725622cf9f867eacb3ca8ca732329"},{url:"en/resume/resume.html",revision:"4b73689f265695d118568f4133dd5907"},{url:"en/search/index.html",revision:"bb74884a6f9dd0ad83e5c8eb2c03ae2a"},{url:"en/search/page/1/index.html",revision:"37932d0e2afaf01df52e99a7f48d73b3"},{url:"en/series/117-vscode-extensions/index.html",revision:"e488fe543d9ac1e04a5d8653fe37e424"},{url:"en/series/117-vscode-extensions/page/1/index.html",revision:"a9ea2e4236d01c125f85230f41f08757"},{url:"en/series/index.html",revision:"465b59662d0fa683122a4c9e45d5955f"},{url:"en/series/page/1/index.html",revision:"8055a1afbf9a729f1bf5ff379e2b1ec2"},{url:"es/404.html",revision:"1b51bdf352c958914f2640cbc8e284ff"},{url:"es/categories/index.html",revision:"02d8e4ce0260909e2d4217c9354c6bb8"},{url:"es/categories/page/1/index.html",revision:"73b8f51bbcdbbc2a0f06146ca2de7689"},{url:"es/index.html",revision:"b058cdb96f954d573057765fa70493e7"},{url:"es/page/1/index.html",revision:"dada336e5680e1ee55426d001107e793"},{url:"es/series/index.html",revision:"3a2cc380c7a141206049a4206030d5f5"},{url:"es/series/page/1/index.html",revision:"57b9b6a7381267147d9fd167555b962f"},{url:"index.html",revision:"c656691c25514c3f6ea13fa5c8d64c60"},{url:"install-sw.html",revision:"2dee340cfe628e4d4af8c84804152198"},{url:"offline.html",revision:"17f90bdb4a0fbef8133c6369302fdc66"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
