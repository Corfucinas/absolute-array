define("./workbox-7fd24382.js",["exports"],(function(t){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.1.5"]&&_()}catch(t){}const n=t=>t&&"object"==typeof t?t:{handle:t};class i{constructor(t,e,s="GET"){this.handler=n(e),this.match=t,this.method=s}setCatchHandler(t){this.catchHandler=n(t)}}class r extends i{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class a{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=r&&r.handler;const c=t.method;if(!a&&this.i.has(c)&&(a=this.i.get(c)),!a)return;let o;try{o=a.handle({url:s,request:t,event:e,params:i})}catch(t){o=Promise.reject(t)}const h=r&&r.catchHandler;return o instanceof Promise&&(this.o||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:i})}catch(t){n=t}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),o}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:t,sameOrigin:e,request:s,event:n});if(a)return i=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,n(t))}setCatchHandler(t){this.o=n(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let c;const o=()=>(c||(c=new a,c.addFetchListener(),c.addCacheListener()),c);function h(t,e,n){let a;if("string"==typeof t){const s=new URL(t,location.href);a=new i((({url:t})=>t.href===s.href),e,n)}else if(t instanceof RegExp)a=new r(t,e,n);else if("function"==typeof t)a=new i(t,e,n);else{if(!(t instanceof i))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return o().registerRoute(a),a}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=t=>[u.prefix,t,u.suffix].filter((t=>t&&t.length>0)).join("-"),f=t=>{(t=>{for(const e of Object.keys(u))t(e)})((e=>{"string"==typeof t[e]&&(u[e]=t[e])}))},w=t=>t||l(u.googleAnalytics),d=t=>t||l(u.precache),y=t=>t||l(u.runtime);function p(t){t.then((()=>{}))}const m=new Set;class g{constructor(t,e,{onupgradeneeded:s,onversionchange:n}={}){this.h=null,this.u=t,this.l=e,this.p=s,this.m=n||(()=>this.close())}get db(){return this.h}async open(){if(!this.h)return this.h=await new Promise(((t,e)=>{let s=!1;setTimeout((()=>{s=!0,e(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.l);n.onerror=()=>e(n.error),n.onupgradeneeded=t=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.p&&this.p(t)},n.onsuccess=()=>{const e=n.result;s?e.close():(e.onversionchange=this.m.bind(this),t(e))}})),this}async getKey(t,e){return(await this.getAllKeys(t,e,1))[0]}async getAll(t,e,s){return await this.getAllMatching(t,{query:e,count:s})}async getAllKeys(t,e,s){return(await this.getAllMatching(t,{query:e,count:s,includeKeys:!0})).map((t=>t.key))}async getAllMatching(t,{index:e,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([t],"readonly",((a,c)=>{const o=a.objectStore(t),h=e?o.index(e):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const t=l.result;t?(u.push(r?t:t.value),i&&u.length>=i?c(u):t.continue()):c(u)}}))}async transaction(t,e,s){return await this.open(),await new Promise(((n,i)=>{const r=this.h.transaction(t,e);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,(t=>n(t)))}))}async g(t,e,s,...n){return await this.transaction([e],s,((s,i)=>{const r=s.objectStore(e),a=r[t].apply(r,n);a.onsuccess=()=>i(a.result)}))}close(){this.h&&(this.h.close(),this.h=null)}}g.prototype.OPEN_TIMEOUT=2e3;const q={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[t,e]of Object.entries(q))for(const s of e)s in IDBObjectStore.prototype&&(g.prototype[s]=async function(e,...n){return await this.g(s,e,t,...n)});try{self["workbox:expiration:6.1.5"]&&_()}catch(t){}const R="cache-entries",v=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class b{constructor(t){this.q=t,this.h=new g("workbox-expiration",1,{onupgradeneeded:t=>this.R(t)})}R(t){const e=t.target.result.createObjectStore(R,{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1}),(async t=>{await new Promise(((e,s)=>{const n=indexedDB.deleteDatabase(t);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{e()}}))})(this.q)}async setTimestamp(t,e){const s={url:t=v(t),timestamp:e,cacheName:this.q,id:this.v(t)};await this.h.put(R,s)}async getTimestamp(t){return(await this.h.get(R,this.v(t))).timestamp}async expireEntries(t,e){const s=await this.h.transaction(R,"readwrite",((s,n)=>{const i=s.objectStore(R).index("timestamp").openCursor(null,"prev"),r=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.q&&(t&&n.timestamp<t||e&&a>=e?r.push(s.value):a++),s.continue()}else n(r)}})),n=[];for(const t of s)await this.h.delete(R,t.id),n.push(t.url);return n}v(t){return this.q+"|"+v(t)}}class x{constructor(t,e={}){this._=!1,this.U=!1,this.L=e.maxEntries,this.T=e.maxAgeSeconds,this.N=e.matchOptions,this.q=t,this.D=new b(t)}async expireEntries(){if(this._)return void(this.U=!0);this._=!0;const t=this.T?Date.now()-1e3*this.T:0,e=await this.D.expireEntries(t,this.L),s=await self.caches.open(this.q);for(const t of e)await s.delete(t,this.N);this._=!1,this.U&&(this.U=!1,p(this.expireEntries()))}async updateTimestamp(t){await this.D.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.T){return await this.D.getTimestamp(t)<Date.now()-1e3*this.T}return!1}async delete(){this.U=!1,await this.D.expireEntries(1/0)}}function U(){return(U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}function E(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class L{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}function T(t){return new Promise((e=>setTimeout(e,t)))}try{self["workbox:strategies:6.1.5"]&&_()}catch(t){}function N(t){return"string"==typeof t?new Request(t):t}class D{constructor(t,e){this.P={},Object.assign(this,e),this.event=e.event,this.k=t,this.O=new L,this.C=[],this.S=[...t.plugins],this.K=new Map;for(const t of this.S)this.K.set(t,{});this.event.waitUntil(this.O.promise)}async fetch(t){const{event:e}=this;let n=N(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(t){throw new s("plugin-error-request-will-fetch",{thrownError:t})}const r=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.k.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:r,response:t});return t}catch(t){throw i&&await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:i.clone(),request:r.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=N(t);let s;const{cacheName:n,matchOptions:i}=this.k,r=await this.getCacheKey(e,"read"),a=U({},i,{cacheName:n});s=await caches.match(r,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,e){const n=N(t);await T(0);const i=await this.getCacheKey(n,"write");if(!e)throw new s("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const a=await this.j(e);if(!a)return!1;const{cacheName:c,matchOptions:o}=this.k,h=await self.caches.open(c),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(t,e,s,n){const i=E(e.url,s);if(e.url===i)return t.match(e,n);const r=U({},n,{ignoreSearch:!0}),a=await t.keys(e,r);for(const e of a)if(i===E(e.url,s))return t.match(e,n)}(h,i.clone(),["__WB_REVISION__"],o):null;try{await h.put(i,u?a.clone():a)}catch(t){throw"QuotaExceededError"===t.name&&await async function(){for(const t of m)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:c,oldResponse:l,newResponse:a.clone(),request:i,event:this.event});return!0}async getCacheKey(t,e){if(!this.P[e]){let s=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))s=N(await t({mode:e,request:s,event:this.event,params:this.params}));this.P[e]=s}return this.P[e]}hasCallback(t){for(const e of this.k.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.k.plugins)if("function"==typeof e[t]){const s=this.K.get(e),n=n=>{const i=U({},n,{state:s});return e[t](i)};yield n}}waitUntil(t){return this.C.push(t),t}async doneWaiting(){let t;for(;t=this.C.shift();)await t}destroy(){this.O.resolve()}async j(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class P{constructor(t={}){this.cacheName=y(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new D(this,{event:e,request:s,params:n}),r=this.A(i,s,e);return[r,this.I(r,i,s,e)]}async A(t,e,n){let i;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(i=await this.M(e,t),!i||"error"===i.type)throw new s("no-response",{url:e.url})}catch(s){for(const r of t.iterateCallbacks("handlerDidError"))if(i=await r({error:s,event:n,request:e}),i)break;if(!i)throw s}for(const s of t.iterateCallbacks("handlerWillRespond"))i=await s({event:n,request:e,response:i});return i}async I(t,e,s,n){let i,r;try{i=await t}catch(r){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){r=t}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),e.destroy(),r)throw r}}class k extends P{constructor(t={}){super(t),this.W=t.networkTimeoutSeconds||0}async M(t,e){let n,i;try{const s=[e.fetch(t)];if(this.W){const t=T(1e3*this.W);s.push(t)}if(i=await Promise.race(s),!i)throw new Error(`Timed out the network response after ${this.W} seconds.`)}catch(t){n=t}if(!i)throw new s("no-response",{url:t.url,error:n});return i}}function O(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.1.5"]&&_()}catch(t){}function C(t){if(!t)throw new s("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",e),{cacheKey:i.href,url:r.href}}class S{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class K{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=e&&e.cacheKey||this.$.getCacheKeyForURL(t.url);return s?new Request(s):t},this.$=t}}let j,A;async function I(t,e){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new s("cross-origin-copy-response",{origin:n});const i=t.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=e?e(r):r,c=function(){if(void 0===j){const t=new Response("");if("body"in t)try{new Response(t.body),j=!0}catch(t){j=!1}j=!1}return j}()?i.body:await i.blob();return new Response(c,a)}class M extends P{constructor(t={}){t.cacheName=d(t.cacheName),super(t),this.B=!1!==t.fallbackToNetwork,this.plugins.push(M.copyRedirectedCacheableResponsesPlugin)}async M(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.F(t,e):await this.G(t,e))}async G(t,e){let n;if(!this.B)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:t.url});return n=await e.fetch(t),n}async F(t,e){this.H();const n=await e.fetch(t);if(!await e.cachePut(t,n.clone()))throw new s("bad-precaching-response",{url:t.url,status:n.status});return n}H(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==M.copyRedirectedCacheableResponsesPlugin&&(n===M.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(M.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}M.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},M.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await I(t):t};class W{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.V=new Map,this.J=new Map,this.X=new Map,this.k=new M({cacheName:d(t),plugins:[...e,new K({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.k}precache(t){this.addToCacheList(t),this.Y||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.Y=!0)}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:i}=C(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.V.has(i)&&this.V.get(i)!==t)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this.V.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.X.has(t)&&this.X.get(t)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:i});this.X.set(t,n.integrity)}if(this.V.set(i,t),this.J.set(i,r),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return O(t,(async()=>{const e=new S;this.strategy.plugins.push(e);for(const[e,s]of this.V){const n=this.X.get(s),i=this.J.get(e),r=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return O(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.V.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.V}getCachedURLs(){return[...this.V.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.V.get(e.href)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new s("non-precached-url",{url:t});return s=>(s.request=new Request(t),s.params=U({cacheKey:e},s.params),this.strategy.handle(s))}}const $=()=>(A||(A=new W),A);class B extends i{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const t of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(r,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(t);if(e)return{cacheKey:e}}}),t.strategy)}}try{self["workbox:background-sync:6.1.5"]&&_()}catch(t){}const F="requests",G="queueName";class H{constructor(t){this.Z=t,this.h=new g("workbox-background-sync",3,{onupgradeneeded:this.tt})}async pushEntry(t){delete t.id,t.queueName=this.Z,await this.h.add(F,t)}async unshiftEntry(t){const[e]=await this.h.getAllMatching(F,{count:1});e?t.id=e.id-1:delete t.id,t.queueName=this.Z,await this.h.add(F,t)}async popEntry(){return this.et({direction:"prev"})}async shiftEntry(){return this.et({direction:"next"})}async getAll(){return await this.h.getAllMatching(F,{index:G,query:IDBKeyRange.only(this.Z)})}async deleteEntry(t){await this.h.delete(F,t)}async et({direction:t}){const[e]=await this.h.getAllMatching(F,{direction:t,index:G,query:IDBKeyRange.only(this.Z),count:1});if(e)return await this.deleteEntry(e.id),e}tt(t){const e=t.target.result;t.oldVersion>0&&t.oldVersion<3&&e.objectStoreNames.contains(F)&&e.deleteObjectStore(F);e.createObjectStore(F,{autoIncrement:!0,keyPath:"id"}).createIndex(G,G,{unique:!1})}}const V=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class J{constructor(t){"navigate"===t.mode&&(t.mode="same-origin"),this.st=t}static async fromRequest(t){const e={url:t.url,headers:{}};"GET"!==t.method&&(e.body=await t.clone().arrayBuffer());for(const[s,n]of t.headers.entries())e.headers[s]=n;for(const s of V)void 0!==t[s]&&(e[s]=t[s]);return new J(e)}toObject(){const t=Object.assign({},this.st);return t.headers=Object.assign({},this.st.headers),t.body&&(t.body=t.body.slice(0)),t}toRequest(){return new Request(this.st.url,this.st)}clone(){return new J(this.toObject())}}const Q="workbox-background-sync",z=new Set,X=t=>{const e={request:new J(t.requestData).toRequest(),timestamp:t.timestamp};return t.metadata&&(e.metadata=t.metadata),e};class Y{constructor(t,{onSync:e,maxRetentionTime:n}={}){if(this.nt=!1,this.it=!1,z.has(t))throw new s("duplicate-queue-name",{name:t});z.add(t),this.u=t,this.rt=e||this.replayRequests,this.at=n||10080,this.ct=new H(this.u),this.ot()}get name(){return this.u}async pushRequest(t){await this.ht(t,"push")}async unshiftRequest(t){await this.ht(t,"unshift")}async popRequest(){return this.ut("pop")}async shiftRequest(){return this.ut("shift")}async getAll(){const t=await this.ct.getAll(),e=Date.now(),s=[];for(const n of t){const t=60*this.at*1e3;e-n.timestamp>t?await this.ct.deleteEntry(n.id):s.push(X(n))}return s}async ht({request:t,metadata:e,timestamp:s=Date.now()},n){const i={requestData:(await J.fromRequest(t.clone())).toObject(),timestamp:s};e&&(i.metadata=e),await this.ct[`${n}Entry`](i),this.nt?this.it=!0:await this.registerSync()}async ut(t){const e=Date.now(),s=await this.ct[`${t}Entry`]();if(s){const n=60*this.at*1e3;return e-s.timestamp>n?this.ut(t):X(s)}}async replayRequests(){let t;for(;t=await this.shiftRequest();)try{await fetch(t.request.clone())}catch(e){throw await this.unshiftRequest(t),new s("queue-replay-failed",{name:this.u})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register(`${Q}:${this.u}`)}catch(t){}}ot(){"sync"in self.registration?self.addEventListener("sync",(t=>{if(t.tag===`${Q}:${this.u}`){const e=async()=>{let e;this.nt=!0;try{await this.rt({queue:this})}catch(t){throw e=t,e}finally{!this.it||e&&!t.lastChance||await this.registerSync(),this.nt=!1,this.it=!1}};t.waitUntil(e())}})):this.rt({queue:this})}static get lt(){return z}}class Z{constructor(t,e){this.fetchDidFail=async({request:t})=>{await this.ft.pushRequest({request:t})},this.ft=new Y(t,e)}}const tt={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};class et extends P{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(tt),this.W=t.networkTimeoutSeconds||0}async M(t,e){const n=[],i=[];let r;if(this.W){const{id:s,promise:a}=this.wt({request:t,logs:n,handler:e});r=s,i.push(a)}const a=this.dt({timeoutId:r,request:t,logs:n,handler:e});i.push(a);const c=await e.waitUntil((async()=>await e.waitUntil(Promise.race(i))||await a)());if(!c)throw new s("no-response",{url:t.url});return c}wt({request:t,logs:e,handler:s}){let n;return{promise:new Promise((e=>{n=setTimeout((async()=>{e(await s.cacheMatch(t))}),1e3*this.W)})),id:n}}async dt({timeoutId:t,request:e,logs:s,handler:n}){let i,r;try{r=await n.fetchAndCachePut(e)}catch(t){i=t}return t&&clearTimeout(t),!i&&r||(r=await n.cacheMatch(e)),r}}try{self["workbox:google-analytics:6.1.5"]&&_()}catch(t){}const st="www.google-analytics.com",nt="www.googletagmanager.com",it=/^\/(\w+\/)?collect/,rt=t=>{const e=({url:t})=>t.hostname===st&&it.test(t.pathname),s=new k({plugins:[t]});return[new i(e,s,"GET"),new i(e,s,"POST")]},at=t=>{const e=new et({cacheName:t});return new i((({url:t})=>t.hostname===st&&"/analytics.js"===t.pathname),e,"GET")},ct=t=>{const e=new et({cacheName:t});return new i((({url:t})=>t.hostname===nt&&"/gtag/js"===t.pathname),e,"GET")},ot=t=>{const e=new et({cacheName:t});return new i((({url:t})=>t.hostname===nt&&"/gtm.js"===t.pathname),e,"GET")};t.CacheFirst=class extends P{async M(t,e){let n,i=await e.cacheMatch(t);if(!i)try{i=await e.fetchAndCachePut(t)}catch(t){n=t}if(!i)throw new s("no-response",{url:t.url,error:n});return i}},t.ExpirationPlugin=class{constructor(t={}){var e;this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.yt(n),r=this.gt(s);p(r.expireEntries());const a=r.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.gt(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.qt=t,this.T=t.maxAgeSeconds,this.Rt=new Map,t.purgeOnQuotaError&&(e=()=>this.deleteCacheAndMetadata(),m.add(e))}gt(t){if(t===y())throw new s("expire-custom-caches-only");let e=this.Rt.get(t);return e||(e=new x(t,this.qt),this.Rt.set(t,e)),e}yt(t){if(!this.T)return!0;const e=this.vt(t);if(null===e)return!0;return e>=Date.now()-1e3*this.T}vt(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.Rt)await self.caches.delete(t),await e.delete();this.Rt=new Map}},t.NavigationRoute=class extends i{constructor(t,{allowlist:e=[/./],denylist:s=[]}={}){super((t=>this.bt(t)),t),this._t=e,this.xt=s}bt({url:t,request:e}){if(e&&"navigate"!==e.mode)return!1;const s=t.pathname+t.search;for(const t of this.xt)if(t.test(s))return!1;return!!this._t.some((t=>t.test(s)))}},t.NetworkOnly=k,t.cleanupOutdatedCaches=function(){self.addEventListener("activate",(t=>{const e=d();t.waitUntil((async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t));return await Promise.all(s.map((t=>self.caches.delete(t)))),s})(e).then((t=>{})))}))},t.clientsClaim=function(){self.addEventListener("activate",(()=>self.clients.claim()))},t.createHandlerBoundToURL=function(t){return $().createHandlerBoundToURL(t)},t.initialize=(t={})=>{const e=w(t.cacheName),s=new Z("workbox-google-analytics",{maxRetentionTime:2880,onSync:(n=t,async({queue:t})=>{let e;for(;e=await t.shiftRequest();){const{request:s,timestamp:i}=e,r=new URL(s.url);try{const t="POST"===s.method?new URLSearchParams(await s.clone().text()):r.searchParams,e=i-(Number(t.get("qt"))||0),a=Date.now()-e;if(t.set("qt",String(a)),n.parameterOverrides)for(const e of Object.keys(n.parameterOverrides)){const s=n.parameterOverrides[e];t.set(e,s)}"function"==typeof n.hitFilter&&n.hitFilter.call(null,t),await fetch(new Request(r.origin+r.pathname,{body:t.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(s){throw await t.unshiftRequest(e),s}}})});var n;const i=[ot(e),at(e),ct(e),...rt(s)],r=new a;for(const t of i)r.registerRoute(t);r.addFetchListener()},t.precacheAndRoute=function(t,e){!function(t){$().precache(t)}(t),function(t){const e=$();h(new B(e,t))}(e)},t.registerRoute=h,t.setCacheNameDetails=function(t){f(t)}}));
//# sourceMappingURL=workbox-7fd24382.js.map
