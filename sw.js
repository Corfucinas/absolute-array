if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,s,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const n={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return a;case"module":return n;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./sw.js",["./workbox-c14d39e4"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AbsoluteArray"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about/index.html",revision:"211723468752d96061db26e9efffee20"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-1/index.html",revision:"e40b5869443a5f02ba7deb34427265c2"},{url:"articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html",revision:"90c81ff0601b3f45c30e727951188f82"},{url:"articles/best-way-to-install-python-in-your-computer/index.html",revision:"c94972709b31aa86f5b3ae6e2b58a13c"},{url:"articles/index.html",revision:"2ebbd7e218c143a07a3c743959412d17"},{url:"articles/page/1/index.html",revision:"3ca0aa0a41761c5b08b19b4e9fe6d1d4"},{url:"captcha.min.cbe5fed6fbcd7f7d6dda650ab24f3114a4ab276ab8e087ec2d7b9f011837585acb473b6ee300f41322cef18d0836d356d2146c1f4d004d70b75e5ad89d74ee17.js",revision:"6db56022daeaf6fb5b06089f14d98ea5"},{url:"categories/computer-and-programming/index.html",revision:"831360ae30ca373b8b45bcc117c52e73"},{url:"categories/computer-and-programming/page/1/index.html",revision:"15b84defedf1772f99feab7e6fde92a4"},{url:"categories/index.html",revision:"ce7be53847b1358ad7411b3ea6edbee2"},{url:"categories/page/1/index.html",revision:"779700389f3b2f15ab0d5d9d53b508e4"},{url:"contact/index.html",revision:"a5843896187dfbcff4dac6b81ab86888"},{url:"index.html",revision:"d5e5b6fd2f374a514c04f0f8f817a636"},{url:"page/1/index.html",revision:"0f1264547c2cddc84b982154a7fca98d"},{url:"plugins/bootstrap/bootstrap.min.css",revision:"4577e7773b9c579084bc017020bd3877"},{url:"plugins/bootstrap/bootstrap.min.js",revision:"c1ec4b3b73f8228cf0da6188462495fd"},{url:"plugins/cookies/js.cookie-2.2.1.min.js",revision:"29c7d6518c23f2453028c4f702e8fba4"},{url:"plugins/darkmode/darkmode.1.5.7.min.js",revision:"df80f93103c5f0d6b207fd3e210eee13"},{url:"plugins/jQuery/jquery.min.js",revision:"8825ab6e774101423186fa50004b5f32"},{url:"plugins/lazysize/lazysizes.min.js",revision:"fd4f902b789f81baa379b0ba42c21acd"},{url:"plugins/search/fuse.min.js",revision:"20d3b3c1e16e7acdb563c79264277a15"},{url:"plugins/search/mark.js",revision:"a55ba6d3e1dc033f478a8763d0e94b83"},{url:"plugins/search/search.js",revision:"70d01ec8a00a541681e19d91c6dbef07"},{url:"plugins/slick/fonts/slick.eot",revision:"ced611daf7709cc778da928fec876475"},{url:"plugins/slick/fonts/slick.ttf",revision:"d41f55a78e6f49a5512878df1737e58a"},{url:"plugins/slick/fonts/slick.woff",revision:"b7c9e1e479de3b53f1e4e30ebac2403a"},{url:"plugins/slick/slick.css",revision:"821b25695e7a27a560d3e36e0f33921d"},{url:"plugins/slick/slick.min.js",revision:"d5a61c749e44e47159af8a6579dda121"},{url:"plugins/themify-icons/fonts/themify.eot",revision:"2c454669bdf3aebf32a1bd8ac1e0d2d6"},{url:"plugins/themify-icons/fonts/themify.ttf",revision:"e23a7dcaefbde4e74e263247aa42ecd7"},{url:"plugins/themify-icons/fonts/themify.woff",revision:"a1ecc3b826d01251edddf29c3e4e1e97"},{url:"plugins/themify-icons/themify-icons.css",revision:"a1125070b1ff66bb9d6a17c204e706de"},{url:"plugins/venobox/venobox.css",revision:"1003c73973bf3d7bdd3bfaa1b8c023d5"},{url:"plugins/venobox/venobox.min.js",revision:"f2409c31cfb63e28b8d0213c1ad2bd20"},{url:"resume/resume.css",revision:"e257b05e35765cc63c5e60e9a8b28ef4"},{url:"resume/resume.html",revision:"e526dcfa52d7e44ed441c72c8b6ec7ed"},{url:"script.min.a477ae99ff5ab543c9cbd6e5d1b6b7651b16edc4720632f74fb3b6ce52bff005242b7516d4e0dd7a8f951895bd3d79d9611176bec83f43ff8a3ed13b545dae08.js",revision:"7b1ae784c803197d48ededc88ab33502"},{url:"search/index.html",revision:"23951523cb19bfe3efe47daa3b224481"},{url:"tags/arduino/index.html",revision:"6b5c967f4730d5f7ea7fe707328fc19c"},{url:"tags/arduino/page/1/index.html",revision:"88a2352c2c88189a7b5ccfa500efb77f"},{url:"tags/better-comments/index.html",revision:"a7859e82deb2cc103fc796338597ec0f"},{url:"tags/better-comments/page/1/index.html",revision:"13f1a7171cac67d25b8cf6a6e7b51bed"},{url:"tags/better-toml/index.html",revision:"d0ac0fa4bfc2c39c07c102826f85772c"},{url:"tags/better-toml/page/1/index.html",revision:"651ad799f4daaa47bfb32d2391f737bb"},{url:"tags/bookmarks/index.html",revision:"1758e7f8d7f6857e2b16a1a5702d7391"},{url:"tags/bookmarks/page/1/index.html",revision:"4a506bdedc4e9fe9bcd34198f5dcef35"},{url:"tags/bracketpair-colorizer/index.html",revision:"eb95c20542c728d1d9f4b229c54eed61"},{url:"tags/bracketpair-colorizer/page/1/index.html",revision:"00ede71e207f6f5874ce4489fb0c4b8f"},{url:"tags/codesnap/index.html",revision:"5c5ec54a53d6eae7106907edf1af102a"},{url:"tags/codesnap/page/1/index.html",revision:"2234dbc85b82134ca4e4640ac994b27f"},{url:"tags/computer-languages/index.html",revision:"8670aa0675f72c3306d8eede8a693407"},{url:"tags/computer-languages/page/1/index.html",revision:"972bb1b6e77c299efb3ac4c28fe48b13"},{url:"tags/dotenv/index.html",revision:"0254113d0669089e5a2a7fc8c4738c20"},{url:"tags/dotenv/page/1/index.html",revision:"791d85a5e9fe76f9c4e7e35da35581c2"},{url:"tags/education/index.html",revision:"3a9848a4cd23a5365f272a45f45e9f6b"},{url:"tags/education/page/1/index.html",revision:"648995fd0643a64943122ec34318f93a"},{url:"tags/emojisense/index.html",revision:"af43721d71a88645cb3029636e8a36d6"},{url:"tags/emojisense/page/1/index.html",revision:"da58e203bd6f6ddeecf9d54a551b25c1"},{url:"tags/gitignore/index.html",revision:"7ef14e185ecdfcbbf880cc2e4583f30a"},{url:"tags/gitignore/page/1/index.html",revision:"139459043c75f1d54944475e44f6b094"},{url:"tags/ide/index.html",revision:"5257eda980564954ef884ba575b5542f"},{url:"tags/ide/page/1/index.html",revision:"52050836f414ddb771af4d4f85330abe"},{url:"tags/index.html",revision:"e5db93af0f9e454a3c90050f4d2dba75"},{url:"tags/installing-python/index.html",revision:"cba8dd50ee36b5356c93f7345f131022"},{url:"tags/installing-python/page/1/index.html",revision:"5c74076dcdc25808581b2a9c6022de3f"},{url:"tags/licence-snippets/index.html",revision:"492cc5349b6510c8526d094b741039fd"},{url:"tags/licence-snippets/page/1/index.html",revision:"0d37bf842ac0d36ed0cff4b2ff2ef51e"},{url:"tags/markdown-all-in-one/index.html",revision:"e380b7353423271699f304912824a7fd"},{url:"tags/markdown-all-in-one/page/1/index.html",revision:"ea3ee841e3f9ccbccae5a250ea8dfa03"},{url:"tags/material-icon-theme/index.html",revision:"80e07ab702b351ad8e460fb1f1f1efa4"},{url:"tags/material-icon-theme/page/1/index.html",revision:"68da0909c2e51fc0a1dccbaefa8bc100"},{url:"tags/microsoft/index.html",revision:"a12df0c4422530a9302dcefacc8b8aa8"},{url:"tags/microsoft/page/1/index.html",revision:"0e6bf5b68223a63a6479c57a7ba8fe53"},{url:"tags/npm-intellisense/index.html",revision:"30eebbde27d4d4b6a8be03b69091dff0"},{url:"tags/npm-intellisense/page/1/index.html",revision:"528e35ee9b8ce9c677944e7fa8988a43"},{url:"tags/page/1/index.html",revision:"e14f304554aed3015ca5de6d5ce2152b"},{url:"tags/page/2/index.html",revision:"9548ab1929a13fb9127ec3c3f650a1a7"},{url:"tags/page/3/index.html",revision:"0dcccdfb5ed6365761ac0cc484afd4f9"},{url:"tags/path-intellisense/index.html",revision:"6fc58b1decc78ada10da6ce539d328d7"},{url:"tags/path-intellisense/page/1/index.html",revision:"fcfa0966a2a792bfbd5355a646cc23c9"},{url:"tags/pyenv/index.html",revision:"1a9d82c83928d62ec12b674d557693d4"},{url:"tags/pyenv/page/1/index.html",revision:"888e92893c72efb6362429490436d879"},{url:"tags/python/index.html",revision:"13400519c477d7c301bf833cde8f32bd"},{url:"tags/python/page/1/index.html",revision:"68f3044d17eff119fc3b8389f7e88b9e"},{url:"tags/settings-sync/index.html",revision:"d310f971fe8202b082e933a4c91f7dd4"},{url:"tags/settings-sync/page/1/index.html",revision:"9c814ea9d28b7562612d4d3b3b17bc0e"},{url:"tags/snazzy-plus/index.html",revision:"5a3246e08add74fc8ad89a993501ac63"},{url:"tags/snazzy-plus/page/1/index.html",revision:"64c4c6b82f1f78db0088efa8450ed28e"},{url:"tags/sourcery/index.html",revision:"7917af6930832c22bc17bcd778efde39"},{url:"tags/sourcery/page/1/index.html",revision:"6b2d5e863c0bb4fc0452b4ddd5906cc2"},{url:"tags/toolkit/index.html",revision:"80d94a0de10b95a54ec854045053e6e1"},{url:"tags/toolkit/page/1/index.html",revision:"2f1ee786c613f088426674ec8659512a"},{url:"tags/trailing-spaces/index.html",revision:"38af21e49ea4312ad5841a586fff82c9"},{url:"tags/trailing-spaces/page/1/index.html",revision:"8fb72da7939f8e0137d181fe253c2a71"},{url:"tags/vim/index.html",revision:"fe12e76ee012ce415b6e87f9cd36784a"},{url:"tags/vim/page/1/index.html",revision:"75c72d8b4ad3f68a814f676162339cd7"},{url:"tags/virtual-env/index.html",revision:"28c8cd9120181e41997983441b22fd6a"},{url:"tags/virtual-env/page/1/index.html",revision:"6a6c5f9aef2dabd3f401ec5972e0455a"},{url:"tags/vscode-extensions/index.html",revision:"9da19fdcd7f0154cb59ea64f018fb07f"},{url:"tags/vscode-extensions/page/1/index.html",revision:"22bdb380acabe54876b91d8b6e5983f3"},{url:"tags/vscode-spell-checker/index.html",revision:"4e0d2240f676552b9d9c8a014fda4298"},{url:"tags/vscode-spell-checker/page/1/index.html",revision:"ef8252717a19fa4cd6ecb40f18e38522"},{url:"tags/x86_64-assembly-vscode/index.html",revision:"96cd09adbd2ee863f7f43719eb23cbba"},{url:"tags/x86_64-assembly-vscode/page/1/index.html",revision:"e1ff9e7cb57d7577e6ca0efe49fdc818"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/404.html"))),e.registerRoute(/(?:\/)$/,new e.StaleWhileRevalidate({cacheName:"html",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
