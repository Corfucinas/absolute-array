if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,d,r)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+a.slice(1)};return Promise.all(d.map((a=>{switch(a){case"exports":return i;case"module":return n;default:return e(a)}}))).then((e=>{const a=r(...e);return i.default||(i.default=a),i}))})))}}define("./sw.js",["./workbox-c14d39e4"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about/index.html",revision:"0527a6cdf644eaa76b0d16f52b091696"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"3768a65d669a40e7246ead8a946aeced"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"1aec645cde2ca7caf40af3665cb3ffb6"},{url:"articles/best-way-to-install-python-in-your-computer/index.html",revision:"13523eb1d1111be2469ee8996e93d3ce"},{url:"articles/index.html",revision:"214d976585becd89b324a46cf6a8f1e4"},{url:"articles/page/1/index.html",revision:"3ca0aa0a41761c5b08b19b4e9fe6d1d4"},{url:"captcha.min.cbe5fed6fbcd7f7d6dda650ab24f3114a4ab276ab8e087ec2d7b9f011837585acb473b6ee300f41322cef18d0836d356d2146c1f4d004d70b75e5ad89d74ee17.js",revision:"6db56022daeaf6fb5b06089f14d98ea5"},{url:"categories/computer-and-programming/index.html",revision:"59f2319de5afe37c73853ce79584b19a"},{url:"categories/computer-and-programming/page/1/index.html",revision:"15b84defedf1772f99feab7e6fde92a4"},{url:"categories/index.html",revision:"e8390ec8882859deae071dadc4b6b56f"},{url:"categories/page/1/index.html",revision:"779700389f3b2f15ab0d5d9d53b508e4"},{url:"contact/index.html",revision:"8deb4c15a645962289da7208e4974ca4"},{url:"css/themify.woff",revision:"0d4d3d3be3e013acbd8f35eb3f22c502"},{url:"css/themify.woff2",revision:"bcd97f9c8d44683452932b7f86a45fb8"},{url:"index.html",revision:"0ad180a055e3a31679c37a98333ce798"},{url:"js/script.min.efcf1380a4a99e9c8e1e5472a3e0db2900ebb8907db8cccdfb88e6b7b498947b6231385aad271f9cac40a49293684d4015c5f6fa665f5e97f6553a653e9d7515.js",revision:"db629c10b7440a9949a8eab94112fe99"},{url:"js/searchjs.min.68fc598b06cb23a5c9bdaefdbc796a6c93bfb808cd07434ef3c3c1cf27319f91d341f806e32e2f110820208e98f7ca6cf34ddae65760268652de3625baaf1807.js",revision:"ea46c3a50ba76c58945bca6539aaa86f"},{url:"page/1/index.html",revision:"0f1264547c2cddc84b982154a7fca98d"},{url:"plugins/themify-icons/themify-icons.css",revision:"072c7be53bf6f9b20f70305bafe8801e"},{url:"plugins/themify-icons/themify.woff",revision:"0d4d3d3be3e013acbd8f35eb3f22c502"},{url:"plugins/themify-icons/themify.woff2",revision:"bcd97f9c8d44683452932b7f86a45fb8"},{url:"resume/resume.css",revision:"60d5ea69db7328830d91257d1d51cc77"},{url:"resume/resume.html",revision:"4b73689f265695d118568f4133dd5907"},{url:"search/index.html",revision:"79cc0472071d8e0f5665eeebf8bd9abf"},{url:"tags/arduino/index.html",revision:"837531babc96393e12080e60189cbb5e"},{url:"tags/arduino/page/1/index.html",revision:"88a2352c2c88189a7b5ccfa500efb77f"},{url:"tags/better-comments/index.html",revision:"7ed014f88f38dfd1d78e70a69b224e47"},{url:"tags/better-comments/page/1/index.html",revision:"13f1a7171cac67d25b8cf6a6e7b51bed"},{url:"tags/better-toml/index.html",revision:"77790fe71ceba979ddfc665ba45ad5b8"},{url:"tags/better-toml/page/1/index.html",revision:"651ad799f4daaa47bfb32d2391f737bb"},{url:"tags/bookmarks/index.html",revision:"5fbe88115bdc6cc64c88d78efc4814d5"},{url:"tags/bookmarks/page/1/index.html",revision:"4a506bdedc4e9fe9bcd34198f5dcef35"},{url:"tags/bracketpair-colorizer/index.html",revision:"11cee5e80b06624293ea2fabf8ca0cff"},{url:"tags/bracketpair-colorizer/page/1/index.html",revision:"00ede71e207f6f5874ce4489fb0c4b8f"},{url:"tags/codesnap/index.html",revision:"d6bb03cb428b57bf6d6eb887e33983a7"},{url:"tags/codesnap/page/1/index.html",revision:"2234dbc85b82134ca4e4640ac994b27f"},{url:"tags/computer-languages/index.html",revision:"1125bfcf5cb6a6cb74a6b1a49a5adfd0"},{url:"tags/computer-languages/page/1/index.html",revision:"972bb1b6e77c299efb3ac4c28fe48b13"},{url:"tags/dotenv/index.html",revision:"24c1a196a71932d7dd04a8ef356172a6"},{url:"tags/dotenv/page/1/index.html",revision:"791d85a5e9fe76f9c4e7e35da35581c2"},{url:"tags/education/index.html",revision:"6381b688e2e1b9e209584fca221c547f"},{url:"tags/education/page/1/index.html",revision:"648995fd0643a64943122ec34318f93a"},{url:"tags/emojisense/index.html",revision:"cf22ba20f0a6e1914811348a6ef8718a"},{url:"tags/emojisense/page/1/index.html",revision:"da58e203bd6f6ddeecf9d54a551b25c1"},{url:"tags/gitignore/index.html",revision:"76f4ab72a189a3dda7935f3534996268"},{url:"tags/gitignore/page/1/index.html",revision:"139459043c75f1d54944475e44f6b094"},{url:"tags/ide/index.html",revision:"232db2ebfaf8aa5862cbf7627f966b93"},{url:"tags/ide/page/1/index.html",revision:"52050836f414ddb771af4d4f85330abe"},{url:"tags/index.html",revision:"335533d7a991389448b325079b9f83c0"},{url:"tags/installing-python/index.html",revision:"131fb4bddd3f89b2f7245b79ef09dd79"},{url:"tags/installing-python/page/1/index.html",revision:"5c74076dcdc25808581b2a9c6022de3f"},{url:"tags/learn-to-program/index.html",revision:"61cb9b04ef2801b210de24b7afb0fe32"},{url:"tags/learn-to-program/page/1/index.html",revision:"4ea88f0f3b3f5114a5b19a36e4f0c4d9"},{url:"tags/licence-snippets/index.html",revision:"2cd59f6167906c68b5399d7011d742f9"},{url:"tags/licence-snippets/page/1/index.html",revision:"0d37bf842ac0d36ed0cff4b2ff2ef51e"},{url:"tags/markdown-all-in-one/index.html",revision:"7cd8a5b1923ca02168dac5c94c0e1b85"},{url:"tags/markdown-all-in-one/page/1/index.html",revision:"ea3ee841e3f9ccbccae5a250ea8dfa03"},{url:"tags/material-icon-theme/index.html",revision:"5f37dbc8d49528cd48fd9cde4d14a9df"},{url:"tags/material-icon-theme/page/1/index.html",revision:"68da0909c2e51fc0a1dccbaefa8bc100"},{url:"tags/microsoft/index.html",revision:"ebb5e9e21532772680191d1d32fa13c8"},{url:"tags/microsoft/page/1/index.html",revision:"0e6bf5b68223a63a6479c57a7ba8fe53"},{url:"tags/npm-intellisense/index.html",revision:"39b4e447404d08cedc17f0fcc8ffa6dd"},{url:"tags/npm-intellisense/page/1/index.html",revision:"528e35ee9b8ce9c677944e7fa8988a43"},{url:"tags/page/1/index.html",revision:"e14f304554aed3015ca5de6d5ce2152b"},{url:"tags/page/2/index.html",revision:"f2ba05d73c36669dd8e27ef8664795dc"},{url:"tags/page/3/index.html",revision:"63850e484c3b4e87d6656c28e4a8ea15"},{url:"tags/path-intellisense/index.html",revision:"dba5378510da19dacecd1392847a294a"},{url:"tags/path-intellisense/page/1/index.html",revision:"fcfa0966a2a792bfbd5355a646cc23c9"},{url:"tags/pyenv/index.html",revision:"f8c4d39a69bc734d3104ba40186ed294"},{url:"tags/pyenv/page/1/index.html",revision:"888e92893c72efb6362429490436d879"},{url:"tags/python/index.html",revision:"be2dae1b53d8b69cd67cdcad8941c6c4"},{url:"tags/python/page/1/index.html",revision:"68f3044d17eff119fc3b8389f7e88b9e"},{url:"tags/settings-sync/index.html",revision:"02244ef43621d3128794677d1d522f60"},{url:"tags/settings-sync/page/1/index.html",revision:"9c814ea9d28b7562612d4d3b3b17bc0e"},{url:"tags/snazzy-plus/index.html",revision:"27854fb49aa1104564bbc3b8b9c6089c"},{url:"tags/snazzy-plus/page/1/index.html",revision:"64c4c6b82f1f78db0088efa8450ed28e"},{url:"tags/sourcery/index.html",revision:"4d48dfba19741232597dca99a74c161f"},{url:"tags/sourcery/page/1/index.html",revision:"6b2d5e863c0bb4fc0452b4ddd5906cc2"},{url:"tags/toolkit/index.html",revision:"b2bee81c3674bc29a437a240fe5160c6"},{url:"tags/toolkit/page/1/index.html",revision:"2f1ee786c613f088426674ec8659512a"},{url:"tags/trailing-spaces/index.html",revision:"4f69276081aa0d02a255b49169f3e0ea"},{url:"tags/trailing-spaces/page/1/index.html",revision:"8fb72da7939f8e0137d181fe253c2a71"},{url:"tags/vim/index.html",revision:"71d33dccac1c41298dc87625c7eec00a"},{url:"tags/vim/page/1/index.html",revision:"75c72d8b4ad3f68a814f676162339cd7"},{url:"tags/virtual-env/index.html",revision:"2ff4e5c9c50d4b041c61925be55a6254"},{url:"tags/virtual-env/page/1/index.html",revision:"6a6c5f9aef2dabd3f401ec5972e0455a"},{url:"tags/vscode-extensions/index.html",revision:"55580788d49b3bf9bce4c227ba3cc387"},{url:"tags/vscode-extensions/page/1/index.html",revision:"22bdb380acabe54876b91d8b6e5983f3"},{url:"tags/vscode-spell-checker/index.html",revision:"0605d32858ea1a6b67276cab5f1ba4e6"},{url:"tags/vscode-spell-checker/page/1/index.html",revision:"ef8252717a19fa4cd6ecb40f18e38522"},{url:"tags/x86_64-assembly-vscode/index.html",revision:"b989217ac7833d1a458a8e6b3a6fc1d5"},{url:"tags/x86_64-assembly-vscode/page/1/index.html",revision:"e1ff9e7cb57d7577e6ca0efe49fdc818"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/404.html"))),e.registerRoute(/(?:\/)$/,new e.StaleWhileRevalidate({cacheName:"html",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
