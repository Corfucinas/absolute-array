if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,d,n)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+a.slice(1)};return Promise.all(d.map((a=>{switch(a){case"exports":return i;case"module":return s;default:return e(a)}}))).then((e=>{const a=n(...e);return i.default||(i.default=a),i}))})))}}define("./sw.js",["./workbox-c14d39e4"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about/index.html",revision:"33dd6075421601c0969367e14b9638ad"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"71982b76b31b70ce1ff04eb4dd349be5"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"9d78dc0acfb0ccd4c3de123ab31c10b1"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-3/index.html",revision:"d740750c9fbd29504525f54a90a0f15c"},{url:"articles/best-way-to-install-python-in-your-computer/index.html",revision:"582808ed0eb650c0ce9f6204226df4bb"},{url:"articles/index.html",revision:"73f3fb735474391ce3e1744520d23916"},{url:"articles/page/1/index.html",revision:"3ca0aa0a41761c5b08b19b4e9fe6d1d4"},{url:"captcha.min.cbe5fed6fbcd7f7d6dda650ab24f3114a4ab276ab8e087ec2d7b9f011837585acb473b6ee300f41322cef18d0836d356d2146c1f4d004d70b75e5ad89d74ee17.js",revision:"6db56022daeaf6fb5b06089f14d98ea5"},{url:"categories/computer-and-programming/index.html",revision:"7f0d5f5e8411ecbb1a764c9514a5e9d8"},{url:"categories/computer-and-programming/page/1/index.html",revision:"15b84defedf1772f99feab7e6fde92a4"},{url:"categories/index.html",revision:"4ce4bb8020868a7d63d4a1b01a48ae0f"},{url:"categories/page/1/index.html",revision:"779700389f3b2f15ab0d5d9d53b508e4"},{url:"contact/index.html",revision:"ebd0b807ab260ecc6e121144d23cbe39"},{url:"css/themify.woff",revision:"0d4d3d3be3e013acbd8f35eb3f22c502"},{url:"css/themify.woff2",revision:"bcd97f9c8d44683452932b7f86a45fb8"},{url:"index.html",revision:"d19635147a020a2f95f08a1bdd02d326"},{url:"js/script.min.efcf1380a4a99e9c8e1e5472a3e0db2900ebb8907db8cccdfb88e6b7b498947b6231385aad271f9cac40a49293684d4015c5f6fa665f5e97f6553a653e9d7515.js",revision:"db629c10b7440a9949a8eab94112fe99"},{url:"js/searchjs.min.68fc598b06cb23a5c9bdaefdbc796a6c93bfb808cd07434ef3c3c1cf27319f91d341f806e32e2f110820208e98f7ca6cf34ddae65760268652de3625baaf1807.js",revision:"ea46c3a50ba76c58945bca6539aaa86f"},{url:"page/1/index.html",revision:"0f1264547c2cddc84b982154a7fca98d"},{url:"plugins/themify-icons/themify-icons.css",revision:"072c7be53bf6f9b20f70305bafe8801e"},{url:"plugins/themify-icons/themify.woff",revision:"0d4d3d3be3e013acbd8f35eb3f22c502"},{url:"plugins/themify-icons/themify.woff2",revision:"bcd97f9c8d44683452932b7f86a45fb8"},{url:"resume/resume.css",revision:"60d5ea69db7328830d91257d1d51cc77"},{url:"resume/resume.html",revision:"4b73689f265695d118568f4133dd5907"},{url:"search/index.html",revision:"c31d960cd4f97d9948a94f222220f5df"},{url:"tags/arduino/index.html",revision:"c4016fe1e0efeacef659ae8a67f5dabb"},{url:"tags/arduino/page/1/index.html",revision:"88a2352c2c88189a7b5ccfa500efb77f"},{url:"tags/autoclose-tags/index.html",revision:"012636b35f6f64e32e9ea64bdc1b2dc7"},{url:"tags/autoclose-tags/page/1/index.html",revision:"e5b1c0384eee42cc6466ede27038a3ab"},{url:"tags/autodocstring/index.html",revision:"5dc09cb08e5e9f66a5348acb629405c1"},{url:"tags/autodocstring/page/1/index.html",revision:"2236bad70abe9df0868239ff8e4c5875"},{url:"tags/autorename-tags/index.html",revision:"2954e2c5fb5f3d85c6301a427c59f480"},{url:"tags/autorename-tags/page/1/index.html",revision:"d6442fea9d84bc40b73cdc72ec50a1e8"},{url:"tags/better-comments/index.html",revision:"213bcb51bf01ed4ae8450658dad2df87"},{url:"tags/better-comments/page/1/index.html",revision:"13f1a7171cac67d25b8cf6a6e7b51bed"},{url:"tags/better-toml/index.html",revision:"84be377e344eb1b64b5a2b40201e6b10"},{url:"tags/better-toml/page/1/index.html",revision:"651ad799f4daaa47bfb32d2391f737bb"},{url:"tags/bookmarks/index.html",revision:"302ff786d6359c2975f4a18ce314e3ee"},{url:"tags/bookmarks/page/1/index.html",revision:"4a506bdedc4e9fe9bcd34198f5dcef35"},{url:"tags/bracketpair-colorizer/index.html",revision:"93dcba423e7b216e0f17f516dc363f90"},{url:"tags/bracketpair-colorizer/page/1/index.html",revision:"00ede71e207f6f5874ce4489fb0c4b8f"},{url:"tags/codesnap/index.html",revision:"53bde8b905a628aaa549b5702e5fa8fb"},{url:"tags/codesnap/page/1/index.html",revision:"2234dbc85b82134ca4e4640ac994b27f"},{url:"tags/color-highlight/index.html",revision:"a17e3f5207419d8b11a6c38f5fc25be9"},{url:"tags/color-highlight/page/1/index.html",revision:"30a5a246655040ba4c482dcf000d227d"},{url:"tags/computer-languages/index.html",revision:"aea0467bc099be8fee7857df22ace8ec"},{url:"tags/computer-languages/page/1/index.html",revision:"972bb1b6e77c299efb3ac4c28fe48b13"},{url:"tags/dotenv/index.html",revision:"c4eb4a10cabd2afcb849a5bb0a301c34"},{url:"tags/dotenv/page/1/index.html",revision:"791d85a5e9fe76f9c4e7e35da35581c2"},{url:"tags/education/index.html",revision:"d6df13dbc23273a189e12ebed22b1ab8"},{url:"tags/education/page/1/index.html",revision:"648995fd0643a64943122ec34318f93a"},{url:"tags/emojisense/index.html",revision:"a143d65b9cdcb98df701f66af913fc71"},{url:"tags/emojisense/page/1/index.html",revision:"da58e203bd6f6ddeecf9d54a551b25c1"},{url:"tags/gitignore/index.html",revision:"a8113f22ac1599cfd915fc53aeb002c2"},{url:"tags/gitignore/page/1/index.html",revision:"139459043c75f1d54944475e44f6b094"},{url:"tags/gitlens/index.html",revision:"dd44b9a399494c56b92fa43fdacccde0"},{url:"tags/gitlens/page/1/index.html",revision:"3a76ddbcadf46fafe704785af5960acf"},{url:"tags/ide/index.html",revision:"c7aaf730d14333a58e7d63be1a74012e"},{url:"tags/ide/page/1/index.html",revision:"52050836f414ddb771af4d4f85330abe"},{url:"tags/index.html",revision:"0e3e8e22ce4f58810f8410c05151bdf8"},{url:"tags/insert-unicode/index.html",revision:"165af622d52b84905a2a72966adb8315"},{url:"tags/insert-unicode/page/1/index.html",revision:"b7e6209b347e2cd169ca127657292147"},{url:"tags/installing-python/index.html",revision:"3cba91dc59a2fb101286857f1fe68699"},{url:"tags/installing-python/page/1/index.html",revision:"5c74076dcdc25808581b2a9c6022de3f"},{url:"tags/learn-to-program/index.html",revision:"ae0190a41ca719d6ecc2525a3635ddb2"},{url:"tags/learn-to-program/page/1/index.html",revision:"4ea88f0f3b3f5114a5b19a36e4f0c4d9"},{url:"tags/licence-snippets/index.html",revision:"8b1bbc32458e0367f2f32501e1effd91"},{url:"tags/licence-snippets/page/1/index.html",revision:"0d37bf842ac0d36ed0cff4b2ff2ef51e"},{url:"tags/markdown-all-in-one/index.html",revision:"d2ae308a289fcb240e7fd89b72df6612"},{url:"tags/markdown-all-in-one/page/1/index.html",revision:"ea3ee841e3f9ccbccae5a250ea8dfa03"},{url:"tags/markdown-lint/index.html",revision:"dcc58fc190a4a4f8260d25eeb10df052"},{url:"tags/markdown-lint/page/1/index.html",revision:"89d22bb0277bb685b578886e80d33242"},{url:"tags/material-icon-theme/index.html",revision:"344c0a6df6add9efbd5c8a04283bb1d1"},{url:"tags/material-icon-theme/page/1/index.html",revision:"68da0909c2e51fc0a1dccbaefa8bc100"},{url:"tags/microsoft/index.html",revision:"153664f81f297bf6c0ff2ec4e289c38a"},{url:"tags/microsoft/page/1/index.html",revision:"0e6bf5b68223a63a6479c57a7ba8fe53"},{url:"tags/npm-intellisense/index.html",revision:"434451b9e80185c5e604fadd0e0e3797"},{url:"tags/npm-intellisense/page/1/index.html",revision:"528e35ee9b8ce9c677944e7fa8988a43"},{url:"tags/page/1/index.html",revision:"e14f304554aed3015ca5de6d5ce2152b"},{url:"tags/page/2/index.html",revision:"1c199ab1163feab21e1d55c798d8ec3d"},{url:"tags/page/3/index.html",revision:"267b5adc728fea0f520249c11a26b141"},{url:"tags/page/4/index.html",revision:"484a52bc1e7aaf2a56aafb6da1dbc884"},{url:"tags/path-intellisense/index.html",revision:"895233bd086405e31b75f9fb660c1f3f"},{url:"tags/path-intellisense/page/1/index.html",revision:"fcfa0966a2a792bfbd5355a646cc23c9"},{url:"tags/pyenv/index.html",revision:"470c4d3050195e5a4661ab671cc00470"},{url:"tags/pyenv/page/1/index.html",revision:"888e92893c72efb6362429490436d879"},{url:"tags/pylance/index.html",revision:"66be207605e9008c633c983fe41b9e65"},{url:"tags/pylance/page/1/index.html",revision:"e065985ac4739a65bbeb4f960d73fe1f"},{url:"tags/python-typehint/index.html",revision:"c14576fa6e51e3d3bda1145a3b217751"},{url:"tags/python-typehint/page/1/index.html",revision:"18c571d7ee0d60aa035a408c9f6480d1"},{url:"tags/python/index.html",revision:"5ded06f97187ea9ded2476835ece5304"},{url:"tags/python/page/1/index.html",revision:"68f3044d17eff119fc3b8389f7e88b9e"},{url:"tags/rainbow-csv/index.html",revision:"a1b8b072dd19de2c439f57674d783c64"},{url:"tags/rainbow-csv/page/1/index.html",revision:"500b21651d196d94779026b3fa004c79"},{url:"tags/settings-sync/index.html",revision:"e99a6aad10523723067838ca0d51474f"},{url:"tags/settings-sync/page/1/index.html",revision:"9c814ea9d28b7562612d4d3b3b17bc0e"},{url:"tags/snazzy-plus/index.html",revision:"a6e7deabb401f54cb1db6e115914c127"},{url:"tags/snazzy-plus/page/1/index.html",revision:"64c4c6b82f1f78db0088efa8450ed28e"},{url:"tags/sourcery/index.html",revision:"ab26614d98d31d80679b55ad17cad9b7"},{url:"tags/sourcery/page/1/index.html",revision:"6b2d5e863c0bb4fc0452b4ddd5906cc2"},{url:"tags/toolkit/index.html",revision:"91db7f2389a3d0b67113b1ee12597cd3"},{url:"tags/toolkit/page/1/index.html",revision:"2f1ee786c613f088426674ec8659512a"},{url:"tags/trailing-spaces/index.html",revision:"c2d147265613aa797bb90a17be54d8b2"},{url:"tags/trailing-spaces/page/1/index.html",revision:"8fb72da7939f8e0137d181fe253c2a71"},{url:"tags/vim/index.html",revision:"13ea789acc9ab702a65201311c0b13d1"},{url:"tags/vim/page/1/index.html",revision:"75c72d8b4ad3f68a814f676162339cd7"},{url:"tags/virtual-env/index.html",revision:"9d53d267e1550170783d290a692a4099"},{url:"tags/virtual-env/page/1/index.html",revision:"6a6c5f9aef2dabd3f401ec5972e0455a"},{url:"tags/vscode-extensions/index.html",revision:"5abd10873b9b418145853b48d57f2182"},{url:"tags/vscode-extensions/page/1/index.html",revision:"22bdb380acabe54876b91d8b6e5983f3"},{url:"tags/vscode-python/index.html",revision:"8f1150450b955f79e0602c5934ce5dcb"},{url:"tags/vscode-python/page/1/index.html",revision:"735fedef7d7983125a3d02f0af193422"},{url:"tags/vscode-spell-checker/index.html",revision:"b348267ae7034ffc582339d9168af8c2"},{url:"tags/vscode-spell-checker/page/1/index.html",revision:"ef8252717a19fa4cd6ecb40f18e38522"},{url:"tags/x86_64-assembly-vscode/index.html",revision:"b4d6e6de96c8b4bcb7d191bff66f30e6"},{url:"tags/x86_64-assembly-vscode/page/1/index.html",revision:"e1ff9e7cb57d7577e6ca0efe49fdc818"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/404.html"))),e.registerRoute(/(?:\/)$/,new e.StaleWhileRevalidate({cacheName:"html",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
