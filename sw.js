if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,s,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const n={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return a;case"module":return n;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./sw.js",["./workbox-c14d39e4"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about/index.html",revision:"cbf9475cffe7daf7e8da9f1aa68edbab"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"f67e0548f1deaae7179086e08c9c447d"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"5369392be1ba51d21b6c867cd3b65fde"},{url:"articles/best-way-to-install-python-in-your-computer/index.html",revision:"41e3789e04b444af3c7f4acc5c2c084a"},{url:"articles/index.html",revision:"adecd898ce6e4fa1621ea843d3155da1"},{url:"articles/page/1/index.html",revision:"3ca0aa0a41761c5b08b19b4e9fe6d1d4"},{url:"captcha.min.cbe5fed6fbcd7f7d6dda650ab24f3114a4ab276ab8e087ec2d7b9f011837585acb473b6ee300f41322cef18d0836d356d2146c1f4d004d70b75e5ad89d74ee17.js",revision:"6db56022daeaf6fb5b06089f14d98ea5"},{url:"categories/computer-and-programming/index.html",revision:"c2f872a4d271b3f376283a4ec71d819a"},{url:"categories/computer-and-programming/page/1/index.html",revision:"15b84defedf1772f99feab7e6fde92a4"},{url:"categories/index.html",revision:"eaa5e752a6c67ad3e5c4f9816efe4627"},{url:"categories/page/1/index.html",revision:"779700389f3b2f15ab0d5d9d53b508e4"},{url:"contact/index.html",revision:"0b39c0554b8d8bd26c9942f403370cfa"},{url:"index.html",revision:"a89e858cef8da960b3673e220f8ecca7"},{url:"page/1/index.html",revision:"0f1264547c2cddc84b982154a7fca98d"},{url:"plugins/bootstrap/bootstrap.min.css",revision:"4577e7773b9c579084bc017020bd3877"},{url:"plugins/bootstrap/bootstrap.min.js",revision:"c1ec4b3b73f8228cf0da6188462495fd"},{url:"plugins/cookies/js.cookie-2.2.1.min.js",revision:"29c7d6518c23f2453028c4f702e8fba4"},{url:"plugins/darkmode/darkmode.1.5.7.min.js",revision:"df80f93103c5f0d6b207fd3e210eee13"},{url:"plugins/jQuery/jquery.min.js",revision:"8825ab6e774101423186fa50004b5f32"},{url:"plugins/lazysize/lazysizes.min.js",revision:"fd4f902b789f81baa379b0ba42c21acd"},{url:"plugins/search/fuse.min.js",revision:"20d3b3c1e16e7acdb563c79264277a15"},{url:"plugins/search/mark.js",revision:"a55ba6d3e1dc033f478a8763d0e94b83"},{url:"plugins/search/search.js",revision:"70d01ec8a00a541681e19d91c6dbef07"},{url:"plugins/slick/fonts/slick.eot",revision:"ced611daf7709cc778da928fec876475"},{url:"plugins/slick/fonts/slick.ttf",revision:"d41f55a78e6f49a5512878df1737e58a"},{url:"plugins/slick/fonts/slick.woff",revision:"b7c9e1e479de3b53f1e4e30ebac2403a"},{url:"plugins/slick/slick.css",revision:"821b25695e7a27a560d3e36e0f33921d"},{url:"plugins/slick/slick.min.js",revision:"d5a61c749e44e47159af8a6579dda121"},{url:"plugins/themify-icons/fonts/themify.eot",revision:"2c454669bdf3aebf32a1bd8ac1e0d2d6"},{url:"plugins/themify-icons/fonts/themify.ttf",revision:"e23a7dcaefbde4e74e263247aa42ecd7"},{url:"plugins/themify-icons/fonts/themify.woff",revision:"a1ecc3b826d01251edddf29c3e4e1e97"},{url:"plugins/themify-icons/themify-icons.css",revision:"a1125070b1ff66bb9d6a17c204e706de"},{url:"plugins/venobox/venobox.css",revision:"1003c73973bf3d7bdd3bfaa1b8c023d5"},{url:"plugins/venobox/venobox.min.js",revision:"f2409c31cfb63e28b8d0213c1ad2bd20"},{url:"resume/resume.css",revision:"e257b05e35765cc63c5e60e9a8b28ef4"},{url:"resume/resume.html",revision:"e526dcfa52d7e44ed441c72c8b6ec7ed"},{url:"script.min.a477ae99ff5ab543c9cbd6e5d1b6b7651b16edc4720632f74fb3b6ce52bff005242b7516d4e0dd7a8f951895bd3d79d9611176bec83f43ff8a3ed13b545dae08.js",revision:"7b1ae784c803197d48ededc88ab33502"},{url:"search/index.html",revision:"396b4c4d163273bff1426f93d53605fc"},{url:"tags/arduino/index.html",revision:"f5dc336ee2b1e6918475636035aa9cde"},{url:"tags/arduino/page/1/index.html",revision:"88a2352c2c88189a7b5ccfa500efb77f"},{url:"tags/better-comments/index.html",revision:"a9fd1824618f929a82d954f63d06cff2"},{url:"tags/better-comments/page/1/index.html",revision:"13f1a7171cac67d25b8cf6a6e7b51bed"},{url:"tags/better-toml/index.html",revision:"28325ad7052468a5c132a17f72c4d992"},{url:"tags/better-toml/page/1/index.html",revision:"651ad799f4daaa47bfb32d2391f737bb"},{url:"tags/bookmarks/index.html",revision:"398776009f4a39ecdb2f3d4ea7ee7c0a"},{url:"tags/bookmarks/page/1/index.html",revision:"4a506bdedc4e9fe9bcd34198f5dcef35"},{url:"tags/bracketpair-colorizer/index.html",revision:"be48ac34c75e354871c036514c979585"},{url:"tags/bracketpair-colorizer/page/1/index.html",revision:"00ede71e207f6f5874ce4489fb0c4b8f"},{url:"tags/codesnap/index.html",revision:"6a18658c0d298eeca8c40469757249cb"},{url:"tags/codesnap/page/1/index.html",revision:"2234dbc85b82134ca4e4640ac994b27f"},{url:"tags/computer-languages/index.html",revision:"f827c8353fdcaa64989ecba316421432"},{url:"tags/computer-languages/page/1/index.html",revision:"972bb1b6e77c299efb3ac4c28fe48b13"},{url:"tags/dotenv/index.html",revision:"d0c559fc90f436de5bc5fad9366cd82d"},{url:"tags/dotenv/page/1/index.html",revision:"791d85a5e9fe76f9c4e7e35da35581c2"},{url:"tags/education/index.html",revision:"5adc882f1be143eb4f5935ffd2017e95"},{url:"tags/education/page/1/index.html",revision:"648995fd0643a64943122ec34318f93a"},{url:"tags/emojisense/index.html",revision:"74c2d751b827042020f660d3a86251c9"},{url:"tags/emojisense/page/1/index.html",revision:"da58e203bd6f6ddeecf9d54a551b25c1"},{url:"tags/gitignore/index.html",revision:"c4745f9f60edc8876b4c3206030d5119"},{url:"tags/gitignore/page/1/index.html",revision:"139459043c75f1d54944475e44f6b094"},{url:"tags/ide/index.html",revision:"b8a11ae98ebfbd02dbe9df37497c2040"},{url:"tags/ide/page/1/index.html",revision:"52050836f414ddb771af4d4f85330abe"},{url:"tags/index.html",revision:"0a576b456f1f545f55f1ee9d5b71be13"},{url:"tags/installing-python/index.html",revision:"708dc48ae7849aee41a57de7638281f3"},{url:"tags/installing-python/page/1/index.html",revision:"5c74076dcdc25808581b2a9c6022de3f"},{url:"tags/licence-snippets/index.html",revision:"5056a4cd1e42aa153380e70ab25bb21f"},{url:"tags/licence-snippets/page/1/index.html",revision:"0d37bf842ac0d36ed0cff4b2ff2ef51e"},{url:"tags/markdown-all-in-one/index.html",revision:"0ca28cf07ab37448223597df92a6ba84"},{url:"tags/markdown-all-in-one/page/1/index.html",revision:"ea3ee841e3f9ccbccae5a250ea8dfa03"},{url:"tags/material-icon-theme/index.html",revision:"3e8e40cbc7786d97766c6f9c7def7404"},{url:"tags/material-icon-theme/page/1/index.html",revision:"68da0909c2e51fc0a1dccbaefa8bc100"},{url:"tags/microsoft/index.html",revision:"d920a5ac70134aabe8796244230d89a4"},{url:"tags/microsoft/page/1/index.html",revision:"0e6bf5b68223a63a6479c57a7ba8fe53"},{url:"tags/npm-intellisense/index.html",revision:"7b338a58f93327acd8af0344453f6a62"},{url:"tags/npm-intellisense/page/1/index.html",revision:"528e35ee9b8ce9c677944e7fa8988a43"},{url:"tags/page/1/index.html",revision:"e14f304554aed3015ca5de6d5ce2152b"},{url:"tags/page/2/index.html",revision:"9c51814ff0f60dfed522ebad87fe244c"},{url:"tags/page/3/index.html",revision:"11c9bb402b3086b407493f6409a45f1e"},{url:"tags/path-intellisense/index.html",revision:"e1fa321a8875f77f677d7467a7628797"},{url:"tags/path-intellisense/page/1/index.html",revision:"fcfa0966a2a792bfbd5355a646cc23c9"},{url:"tags/pyenv/index.html",revision:"6424c937b9d26f730b62ae2064b8d76b"},{url:"tags/pyenv/page/1/index.html",revision:"888e92893c72efb6362429490436d879"},{url:"tags/python/index.html",revision:"2c1d66d116bfaca446bf684e0da13000"},{url:"tags/python/page/1/index.html",revision:"68f3044d17eff119fc3b8389f7e88b9e"},{url:"tags/settings-sync/index.html",revision:"6099c0ed29478140b569c8df7648b864"},{url:"tags/settings-sync/page/1/index.html",revision:"9c814ea9d28b7562612d4d3b3b17bc0e"},{url:"tags/snazzy-plus/index.html",revision:"7adeb4d7337486d0a2a9ee44fc883fe9"},{url:"tags/snazzy-plus/page/1/index.html",revision:"64c4c6b82f1f78db0088efa8450ed28e"},{url:"tags/sourcery/index.html",revision:"7e4486ef60135197aace28a1216db7f3"},{url:"tags/sourcery/page/1/index.html",revision:"6b2d5e863c0bb4fc0452b4ddd5906cc2"},{url:"tags/toolkit/index.html",revision:"42dd686c2e300fd1a60fb6f8b19bac10"},{url:"tags/toolkit/page/1/index.html",revision:"2f1ee786c613f088426674ec8659512a"},{url:"tags/trailing-spaces/index.html",revision:"5d6c6364b2d62a0c30b83da552a137b8"},{url:"tags/trailing-spaces/page/1/index.html",revision:"8fb72da7939f8e0137d181fe253c2a71"},{url:"tags/vim/index.html",revision:"c5227b71ebbae87be1b8c4f521eb65b6"},{url:"tags/vim/page/1/index.html",revision:"75c72d8b4ad3f68a814f676162339cd7"},{url:"tags/virtual-env/index.html",revision:"c5300fb34d95ba294c092b832bf39a8f"},{url:"tags/virtual-env/page/1/index.html",revision:"6a6c5f9aef2dabd3f401ec5972e0455a"},{url:"tags/vscode-extensions/index.html",revision:"f4d5bae3070758d6d5dbe534eaa99b0b"},{url:"tags/vscode-extensions/page/1/index.html",revision:"22bdb380acabe54876b91d8b6e5983f3"},{url:"tags/vscode-spell-checker/index.html",revision:"cefafc08dd7c17f55c19cf025e50a5d5"},{url:"tags/vscode-spell-checker/page/1/index.html",revision:"ef8252717a19fa4cd6ecb40f18e38522"},{url:"tags/x86_64-assembly-vscode/index.html",revision:"94f06b5de8eeb5388a52cd91e25ddf2d"},{url:"tags/x86_64-assembly-vscode/page/1/index.html",revision:"e1ff9e7cb57d7577e6ca0efe49fdc818"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/404.html"))),e.registerRoute(/(?:\/)$/,new e.StaleWhileRevalidate({cacheName:"html",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
