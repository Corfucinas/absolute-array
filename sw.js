if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,d,r)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+a.slice(1)};return Promise.all(d.map((a=>{switch(a){case"exports":return i;case"module":return n;default:return e(a)}}))).then((e=>{const a=r(...e);return i.default||(i.default=a),i}))})))}}define("./sw.js",["./workbox-c14d39e4"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about/index.html",revision:"9c50c7909dbf2fa2c001b47558a27e0b"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"d2c0904c4d157ea34d1823faffa61eba"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"670ae7700b0c02539f31d43ea6a8d845"},{url:"articles/best-way-to-install-python-in-your-computer/index.html",revision:"5c3df12c4ed9882e0fafb0ba466f97b8"},{url:"articles/index.html",revision:"d26fb115c4f6af1cfeda6f80548854da"},{url:"articles/page/1/index.html",revision:"3ca0aa0a41761c5b08b19b4e9fe6d1d4"},{url:"captcha.min.cbe5fed6fbcd7f7d6dda650ab24f3114a4ab276ab8e087ec2d7b9f011837585acb473b6ee300f41322cef18d0836d356d2146c1f4d004d70b75e5ad89d74ee17.js",revision:"6db56022daeaf6fb5b06089f14d98ea5"},{url:"categories/computer-and-programming/index.html",revision:"a422e4409e7977858de54a0af6185d7b"},{url:"categories/computer-and-programming/page/1/index.html",revision:"15b84defedf1772f99feab7e6fde92a4"},{url:"categories/index.html",revision:"b16c86d3f69a26f6016f3e709b97e8ca"},{url:"categories/page/1/index.html",revision:"779700389f3b2f15ab0d5d9d53b508e4"},{url:"contact/index.html",revision:"3aee0c4ca736650f9f3271a33aa259b5"},{url:"css/themify.woff",revision:"0d4d3d3be3e013acbd8f35eb3f22c502"},{url:"css/themify.woff2",revision:"bcd97f9c8d44683452932b7f86a45fb8"},{url:"index.html",revision:"61851b20fdc69de36f1b28bddd9280f6"},{url:"js/script.min.efcf1380a4a99e9c8e1e5472a3e0db2900ebb8907db8cccdfb88e6b7b498947b6231385aad271f9cac40a49293684d4015c5f6fa665f5e97f6553a653e9d7515.js",revision:"db629c10b7440a9949a8eab94112fe99"},{url:"js/searchjs.min.68fc598b06cb23a5c9bdaefdbc796a6c93bfb808cd07434ef3c3c1cf27319f91d341f806e32e2f110820208e98f7ca6cf34ddae65760268652de3625baaf1807.js",revision:"ea46c3a50ba76c58945bca6539aaa86f"},{url:"page/1/index.html",revision:"0f1264547c2cddc84b982154a7fca98d"},{url:"plugins/themify-icons/themify-icons.css",revision:"072c7be53bf6f9b20f70305bafe8801e"},{url:"plugins/themify-icons/themify.woff",revision:"0d4d3d3be3e013acbd8f35eb3f22c502"},{url:"plugins/themify-icons/themify.woff2",revision:"bcd97f9c8d44683452932b7f86a45fb8"},{url:"resume/resume.css",revision:"e257b05e35765cc63c5e60e9a8b28ef4"},{url:"resume/resume.html",revision:"4b73689f265695d118568f4133dd5907"},{url:"search/index.html",revision:"184517d69b94f7c2d9f2f68790f06de2"},{url:"tags/arduino/index.html",revision:"72ae862bbf598cc332a63aa4f63a321c"},{url:"tags/arduino/page/1/index.html",revision:"88a2352c2c88189a7b5ccfa500efb77f"},{url:"tags/better-comments/index.html",revision:"a44710b6c9f639802cbe127fa7a84304"},{url:"tags/better-comments/page/1/index.html",revision:"13f1a7171cac67d25b8cf6a6e7b51bed"},{url:"tags/better-toml/index.html",revision:"4c7bcc44b0097b6eb35483d662a3d1fb"},{url:"tags/better-toml/page/1/index.html",revision:"651ad799f4daaa47bfb32d2391f737bb"},{url:"tags/bookmarks/index.html",revision:"9b35aca83d079cb730e8176c8a542075"},{url:"tags/bookmarks/page/1/index.html",revision:"4a506bdedc4e9fe9bcd34198f5dcef35"},{url:"tags/bracketpair-colorizer/index.html",revision:"9dcd784a199193b817e5d5bb254a9436"},{url:"tags/bracketpair-colorizer/page/1/index.html",revision:"00ede71e207f6f5874ce4489fb0c4b8f"},{url:"tags/codesnap/index.html",revision:"f8ab4d2118f811863c1bbef821a0ce9b"},{url:"tags/codesnap/page/1/index.html",revision:"2234dbc85b82134ca4e4640ac994b27f"},{url:"tags/computer-languages/index.html",revision:"b9878d343633952e074b982dfacc16e1"},{url:"tags/computer-languages/page/1/index.html",revision:"972bb1b6e77c299efb3ac4c28fe48b13"},{url:"tags/dotenv/index.html",revision:"d1e413b81e9d0381755727eaed8ebdd0"},{url:"tags/dotenv/page/1/index.html",revision:"791d85a5e9fe76f9c4e7e35da35581c2"},{url:"tags/education/index.html",revision:"fb8a346f97a26deff3a756c18239e157"},{url:"tags/education/page/1/index.html",revision:"648995fd0643a64943122ec34318f93a"},{url:"tags/emojisense/index.html",revision:"1c3ca51e81ac97232a7298529ededdb1"},{url:"tags/emojisense/page/1/index.html",revision:"da58e203bd6f6ddeecf9d54a551b25c1"},{url:"tags/gitignore/index.html",revision:"73c677b1d23a4ffb2ebdcbe19f92e698"},{url:"tags/gitignore/page/1/index.html",revision:"139459043c75f1d54944475e44f6b094"},{url:"tags/ide/index.html",revision:"13a4abd8bc7a559d5d68bc73dba9e700"},{url:"tags/ide/page/1/index.html",revision:"52050836f414ddb771af4d4f85330abe"},{url:"tags/index.html",revision:"bcc40ac6b058a0e562491136dda7c55c"},{url:"tags/installing-python/index.html",revision:"c3fb5bd82009531bb29c48bef4d57c1d"},{url:"tags/installing-python/page/1/index.html",revision:"5c74076dcdc25808581b2a9c6022de3f"},{url:"tags/learn-to-program/index.html",revision:"4234f1e871ca6d6e87de671d0dffc772"},{url:"tags/learn-to-program/page/1/index.html",revision:"4ea88f0f3b3f5114a5b19a36e4f0c4d9"},{url:"tags/licence-snippets/index.html",revision:"ae7260227ac59d4f0ed2eb5e4bdebdac"},{url:"tags/licence-snippets/page/1/index.html",revision:"0d37bf842ac0d36ed0cff4b2ff2ef51e"},{url:"tags/markdown-all-in-one/index.html",revision:"b366636e50356de4688070c81be71ccd"},{url:"tags/markdown-all-in-one/page/1/index.html",revision:"ea3ee841e3f9ccbccae5a250ea8dfa03"},{url:"tags/material-icon-theme/index.html",revision:"563bc6478b8c71e2929b34350139eb27"},{url:"tags/material-icon-theme/page/1/index.html",revision:"68da0909c2e51fc0a1dccbaefa8bc100"},{url:"tags/microsoft/index.html",revision:"60ffd21a6f9cea455f0b79d1ba4ca116"},{url:"tags/microsoft/page/1/index.html",revision:"0e6bf5b68223a63a6479c57a7ba8fe53"},{url:"tags/npm-intellisense/index.html",revision:"3199551b685b8432a34ff53913cf6692"},{url:"tags/npm-intellisense/page/1/index.html",revision:"528e35ee9b8ce9c677944e7fa8988a43"},{url:"tags/page/1/index.html",revision:"e14f304554aed3015ca5de6d5ce2152b"},{url:"tags/page/2/index.html",revision:"ceae0bd0422406b048181023a3de0fe8"},{url:"tags/page/3/index.html",revision:"16836864180064ca347ba5bb7049a8c0"},{url:"tags/path-intellisense/index.html",revision:"36c794f58f7479bff30cfdf3728f0452"},{url:"tags/path-intellisense/page/1/index.html",revision:"fcfa0966a2a792bfbd5355a646cc23c9"},{url:"tags/pyenv/index.html",revision:"9fdc1ce69ad1c80319b7da3171b5258e"},{url:"tags/pyenv/page/1/index.html",revision:"888e92893c72efb6362429490436d879"},{url:"tags/python/index.html",revision:"adfd0b33a896b5b3f7840d603565053d"},{url:"tags/python/page/1/index.html",revision:"68f3044d17eff119fc3b8389f7e88b9e"},{url:"tags/settings-sync/index.html",revision:"79992248b30277d5029f96c9ac5593ce"},{url:"tags/settings-sync/page/1/index.html",revision:"9c814ea9d28b7562612d4d3b3b17bc0e"},{url:"tags/snazzy-plus/index.html",revision:"44e3b63bd171d6b6b8ab788d7c305a10"},{url:"tags/snazzy-plus/page/1/index.html",revision:"64c4c6b82f1f78db0088efa8450ed28e"},{url:"tags/sourcery/index.html",revision:"38ec95962f100a1978dd034f79583aca"},{url:"tags/sourcery/page/1/index.html",revision:"6b2d5e863c0bb4fc0452b4ddd5906cc2"},{url:"tags/toolkit/index.html",revision:"36230b768e22f0bf83ead2f6673e347e"},{url:"tags/toolkit/page/1/index.html",revision:"2f1ee786c613f088426674ec8659512a"},{url:"tags/trailing-spaces/index.html",revision:"6d70e4dfe61fadde4def737c9e6ddd87"},{url:"tags/trailing-spaces/page/1/index.html",revision:"8fb72da7939f8e0137d181fe253c2a71"},{url:"tags/vim/index.html",revision:"9a05e3259313184f2bfd656a1ec6c4a2"},{url:"tags/vim/page/1/index.html",revision:"75c72d8b4ad3f68a814f676162339cd7"},{url:"tags/virtual-env/index.html",revision:"d167756641e5edae6b7ad89874717895"},{url:"tags/virtual-env/page/1/index.html",revision:"6a6c5f9aef2dabd3f401ec5972e0455a"},{url:"tags/vscode-extensions/index.html",revision:"55752c591904dacd1695a69a6d7ccdae"},{url:"tags/vscode-extensions/page/1/index.html",revision:"22bdb380acabe54876b91d8b6e5983f3"},{url:"tags/vscode-spell-checker/index.html",revision:"942fd6299ee1790ec9ca3eac8318066c"},{url:"tags/vscode-spell-checker/page/1/index.html",revision:"ef8252717a19fa4cd6ecb40f18e38522"},{url:"tags/x86_64-assembly-vscode/index.html",revision:"b361ec2c95d8ed27ac981e68e7596dfc"},{url:"tags/x86_64-assembly-vscode/page/1/index.html",revision:"e1ff9e7cb57d7577e6ca0efe49fdc818"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/404.html"))),e.registerRoute(/(?:\/)$/,new e.StaleWhileRevalidate({cacheName:"html",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
