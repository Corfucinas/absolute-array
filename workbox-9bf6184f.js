define("./workbox-9bf6184f.js",["exports"],(function(t){"use strict";try{self["workbox:core:6.2.4"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.2.4"]&&_()}catch(t){}const n=t=>t&&"object"==typeof t?t:{handle:t};class i{constructor(t,e,s="GET"){this.handler=n(e),this.match=t,this.method=s}setCatchHandler(t){this.catchHandler=n(t)}}class r extends i{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class a{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=r&&r.handler;const o=t.method;if(!a&&this.i.has(o)&&(a=this.i.get(o)),!a)return;let c;try{c=a.handle({url:s,request:t,event:e,params:i})}catch(t){c=Promise.reject(t)}const h=r&&r.catchHandler;return c instanceof Promise&&(this.o||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:i})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),c}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:t,sameOrigin:e,request:s,event:n});if(a)return i=a,(Array.isArray(i)&&0===i.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,n(t))}setCatchHandler(t){this.o=n(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let o;const c=()=>(o||(o=new a,o.addFetchListener(),o.addCacheListener()),o);function h(t,e,n){let a;if("string"==typeof t){const s=new URL(t,location.href);a=new i((({url:t})=>t.href===s.href),e,n)}else if(t instanceof RegExp)a=new r(t,e,n);else if("function"==typeof t)a=new i(t,e,n);else{if(!(t instanceof i))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return c().registerRoute(a),a}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=t=>[u.prefix,t,u.suffix].filter((t=>t&&t.length>0)).join("-"),f=t=>{(t=>{for(const e of Object.keys(u))t(e)})((e=>{"string"==typeof t[e]&&(u[e]=t[e])}))},w=t=>t||l(u.googleAnalytics),d=t=>t||l(u.precache),y=t=>t||l(u.runtime);function p(t){t.then((()=>{}))}const m=new Set;function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}let R,q;const b=new WeakMap,v=new WeakMap,D=new WeakMap,E=new WeakMap,x=new WeakMap;let U={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return v.get(t);if("objectStoreNames"===e)return t.objectStoreNames||D.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return L(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function I(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(q||(q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(T(this),e),L(b.get(this))}:function(...e){return L(t.apply(T(this),e))}:function(e,...s){const n=t.call(T(this),e,...s);return D.set(n,e.sort?e.sort():[e]),L(n)}}function N(t){return"function"==typeof t?I(t):(t instanceof IDBTransaction&&function(t){if(v.has(t))return;const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),n()},r=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));v.set(t,e)}(t),e=t,(R||(R=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,U):t);var e}function L(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(L(t.result)),n()},r=()=>{s(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&b.set(e,t)})).catch((()=>{})),x.set(e,t),e}(t);if(E.has(t))return E.get(t);const e=N(t);return e!==t&&(E.set(t,e),x.set(e,t)),e}const T=t=>x.get(t);function k(t,e,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(t,e),o=L(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(L(a.result),t.oldVersion,t.newVersion,L(a.transaction))})),s&&a.addEventListener("blocked",(()=>s())),o.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),o}const O=["get","getKey","getAll","getAllKeys","count"],B=["put","add","delete","clear"],C=new Map;function P(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(C.get(e))return C.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,i=B.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!O.includes(s))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let a=r.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[s](...e),i&&r.done]))[0]};return C.set(e,r),r}U=(t=>g({},t,{get:(e,s,n)=>P(e,s)||t.get(e,s,n),has:(e,s)=>!!P(e,s)||t.has(e,s)}))(U);try{self["workbox:expiration:6.2.4"]&&_()}catch(t){}const j="cache-entries",S=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class M{constructor(t){this.h=null,this.u=t}l(t){const e=t.createObjectStore(j,{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1})}p(t){this.l(t),this.u&&function(t,{blocked:e}={}){const s=indexedDB.deleteDatabase(t);e&&s.addEventListener("blocked",(()=>e())),L(s).then((()=>{}))}(this.u)}async setTimestamp(t,e){const s={url:t=S(t),timestamp:e,cacheName:this.u,id:this.m(t)},n=(await this.getDb()).transaction(j,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(t){const e=await this.getDb(),s=await e.get(j,this.m(t));return null==s?void 0:s.timestamp}async expireEntries(t,e){const s=await this.getDb();let n=await s.transaction(j).store.index("timestamp").openCursor(null,"prev");const i=[];let r=0;for(;n;){const s=n.value;s.cacheName===this.u&&(t&&s.timestamp<t||e&&r>=e?i.push(n.value):r++),n=await n.continue()}const a=[];for(const t of i)await s.delete(j,t.id),a.push(t.url);return a}m(t){return this.u+"|"+S(t)}async getDb(){return this.h||(this.h=await k("workbox-expiration",1,{upgrade:this.p.bind(this)})),this.h}}class W{constructor(t,e={}){this.g=!1,this.R=!1,this.q=e.maxEntries,this.v=e.maxAgeSeconds,this.D=e.matchOptions,this.u=t,this._=new M(t)}async expireEntries(){if(this.g)return void(this.R=!0);this.g=!0;const t=this.v?Date.now()-1e3*this.v:0,e=await this._.expireEntries(t,this.q),s=await self.caches.open(this.u);for(const t of e)await s.delete(t,this.D);this.g=!1,this.R&&(this.R=!1,p(this.expireEntries()))}async updateTimestamp(t){await this._.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.v){const e=await this._.getTimestamp(t),s=Date.now()-1e3*this.v;return void 0===e||e<s}return!1}async delete(){this.R=!1,await this._.expireEntries(1/0)}}function K(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class A{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}function F(t){return new Promise((e=>setTimeout(e,t)))}try{self["workbox:strategies:6.2.4"]&&_()}catch(t){}function $(t){return"string"==typeof t?new Request(t):t}class G{constructor(t,e){this.U={},Object.assign(this,e),this.event=e.event,this.I=t,this.N=new A,this.L=[],this.T=[...t.plugins],this.k=new Map;for(const t of this.T)this.k.set(t,{});this.event.waitUntil(this.N.promise)}async fetch(t){const{event:e}=this;let n=$(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(t){if(t instanceof Error)throw new s("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.I.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:r,response:t});return t}catch(t){throw i&&await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:i.clone(),request:r.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=$(t);let s;const{cacheName:n,matchOptions:i}=this.I,r=await this.getCacheKey(e,"read"),a=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(r,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,e){const n=$(t);await F(0);const i=await this.getCacheKey(n,"write");if(!e)throw new s("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const a=await this.O(e);if(!a)return!1;const{cacheName:o,matchOptions:c}=this.I,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(t,e,s,n){const i=K(e.url,s);if(e.url===i)return t.match(e,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await t.keys(e,r);for(const e of a)if(i===K(e.url,s))return t.match(e,n)}(h,i.clone(),["__WB_REVISION__"],c):null;try{await h.put(i,u?a.clone():a)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of m)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:o,oldResponse:l,newResponse:a.clone(),request:i,event:this.event});return!0}async getCacheKey(t,e){if(!this.U[e]){let s=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))s=$(await t({mode:e,request:s,event:this.event,params:this.params}));this.U[e]=s}return this.U[e]}hasCallback(t){for(const e of this.I.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.I.plugins)if("function"==typeof e[t]){const s=this.k.get(e),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return e[t](i)};yield n}}waitUntil(t){return this.L.push(t),t}async doneWaiting(){let t;for(;t=this.L.shift();)await t}destroy(){this.N.resolve(null)}async O(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class H{constructor(t={}){this.cacheName=y(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new G(this,{event:e,request:s,params:n}),r=this.B(i,s,e);return[r,this.C(r,i,s,e)]}async B(t,e,n){let i;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(i=await this.P(e,t),!i||"error"===i.type)throw new s("no-response",{url:e.url})}catch(s){if(s instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(i=await r({error:s,event:n,request:e}),i)break;if(!i)throw s}for(const s of t.iterateCallbacks("handlerWillRespond"))i=await s({event:n,request:e,response:i});return i}async C(t,e,s,n){let i,r;try{i=await t}catch(r){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){t instanceof Error&&(r=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),e.destroy(),r)throw r}}class Q extends H{constructor(t={}){super(t),this.j=t.networkTimeoutSeconds||0}async P(t,e){let n,i;try{const s=[e.fetch(t)];if(this.j){const t=F(1e3*this.j);s.push(t)}if(i=await Promise.race(s),!i)throw new Error(`Timed out the network response after ${this.j} seconds.`)}catch(t){t instanceof Error&&(n=t)}if(!i)throw new s("no-response",{url:t.url,error:n});return i}}function V(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.2.4"]&&_()}catch(t){}function J(t){if(!t)throw new s("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",e),{cacheKey:i.href,url:r.href}}class z{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class X{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=(null==e?void 0:e.cacheKey)||this.S.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this.S=t}}let Y,Z;async function tt(t,e){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new s("cross-origin-copy-response",{origin:n});const i=t.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=e?e(r):r,o=function(){if(void 0===Y){const t=new Response("");if("body"in t)try{new Response(t.body),Y=!0}catch(t){Y=!1}Y=!1}return Y}()?i.body:await i.blob();return new Response(o,a)}class et extends H{constructor(t={}){t.cacheName=d(t.cacheName),super(t),this.M=!1!==t.fallbackToNetwork,this.plugins.push(et.copyRedirectedCacheableResponsesPlugin)}async P(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.W(t,e):await this.K(t,e))}async K(t,e){let n;const i=e.params||{};if(!this.M)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const s=i.integrity,r=t.integrity,a=!r||r===s;n=await e.fetch(new Request(t,{integrity:r||s})),s&&a&&(this.A(),await e.cachePut(t,n.clone()))}return n}async W(t,e){this.A();const n=await e.fetch(t);if(!await e.cachePut(t,n.clone()))throw new s("bad-precaching-response",{url:t.url,status:n.status});return n}A(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==et.copyRedirectedCacheableResponsesPlugin&&(n===et.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(et.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}et.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},et.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await tt(t):t};class st{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.F=new Map,this.$=new Map,this.G=new Map,this.I=new et({cacheName:d(t),plugins:[...e,new X({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.I}precache(t){this.addToCacheList(t),this.H||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.H=!0)}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:i}=J(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.F.has(i)&&this.F.get(i)!==t)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this.F.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.G.has(t)&&this.G.get(t)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:i});this.G.set(t,n.integrity)}if(this.F.set(i,t),this.$.set(i,r),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return V(t,(async()=>{const e=new z;this.strategy.plugins.push(e);for(const[e,s]of this.F){const n=this.G.get(s),i=this.$.get(e),r=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return V(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.F.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.F}getCachedURLs(){return[...this.F.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.F.get(e.href)}getIntegrityForCacheKey(t){return this.G.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new s("non-precached-url",{url:t});return s=>(s.request=new Request(t),s.params=Object.assign({cacheKey:e},s.params),this.strategy.handle(s))}}const nt=()=>(Z||(Z=new st),Z);class it extends i{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const i of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(r,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(i);if(e){return{cacheKey:e,integrity:t.getIntegrityForCacheKey(e)}}}}),t.strategy)}}try{self["workbox:background-sync:6.2.4"]&&_()}catch(t){}const rt="requests",at="queueName";class ot{constructor(){this.h=null}async addEntry(t){const e=(await this.getDb()).transaction(rt,"readwrite",{durability:"relaxed"});await e.store.add(t),await e.done}async getFirstEntryId(){const t=await this.getDb(),e=await t.transaction(rt).store.openCursor();return null==e?void 0:e.value.id}async getAllEntriesByQueueName(t){const e=await this.getDb(),s=await e.getAllFromIndex(rt,at,IDBKeyRange.only(t));return s||new Array}async deleteEntry(t){const e=await this.getDb();await e.delete(rt,t)}async getFirstEntryByQueueName(t){return await this.getEndEntryFromIndex(IDBKeyRange.only(t),"next")}async getLastEntryByQueueName(t){return await this.getEndEntryFromIndex(IDBKeyRange.only(t),"prev")}async getEndEntryFromIndex(t,e){const s=await this.getDb(),n=await s.transaction(rt).store.index(at).openCursor(t,e);return null==n?void 0:n.value}async getDb(){return this.h||(this.h=await k("workbox-background-sync",3,{upgrade:this.l})),this.h}l(t,e){e>0&&e<3&&t.objectStoreNames.contains(rt)&&t.deleteObjectStore(rt);t.createObjectStore(rt,{autoIncrement:!0,keyPath:"id"}).createIndex(at,at,{unique:!1})}}class ct{constructor(t){this.V=t,this.J=new ot}async pushEntry(t){delete t.id,t.queueName=this.V,await this.J.addEntry(t)}async unshiftEntry(t){const e=await this.J.getFirstEntryId();e?t.id=e-1:delete t.id,t.queueName=this.V,await this.J.addEntry(t)}async popEntry(){return this.X(await this.J.getLastEntryByQueueName(this.V))}async shiftEntry(){return this.X(await this.J.getFirstEntryByQueueName(this.V))}async getAll(){return await this.J.getAllEntriesByQueueName(this.V)}async deleteEntry(t){await this.J.deleteEntry(t)}async X(t){return t&&await this.deleteEntry(t.id),t}}const ht=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class ut{constructor(t){"navigate"===t.mode&&(t.mode="same-origin"),this.Y=t}static async fromRequest(t){const e={url:t.url,headers:{}};"GET"!==t.method&&(e.body=await t.clone().arrayBuffer());for(const[s,n]of t.headers.entries())e.headers[s]=n;for(const s of ht)void 0!==t[s]&&(e[s]=t[s]);return new ut(e)}toObject(){const t=Object.assign({},this.Y);return t.headers=Object.assign({},this.Y.headers),t.body&&(t.body=t.body.slice(0)),t}toRequest(){return new Request(this.Y.url,this.Y)}clone(){return new ut(this.toObject())}}const lt="workbox-background-sync",ft=new Set,wt=t=>{const e={request:new ut(t.requestData).toRequest(),timestamp:t.timestamp};return t.metadata&&(e.metadata=t.metadata),e};class dt{constructor(t,{onSync:e,maxRetentionTime:n}={}){if(this.Z=!1,this.tt=!1,ft.has(t))throw new s("duplicate-queue-name",{name:t});ft.add(t),this.et=t,this.st=e||this.replayRequests,this.nt=n||10080,this.it=new ct(this.et),this.rt()}get name(){return this.et}async pushRequest(t){await this.at(t,"push")}async unshiftRequest(t){await this.at(t,"unshift")}async popRequest(){return this.ot("pop")}async shiftRequest(){return this.ot("shift")}async getAll(){const t=await this.it.getAll(),e=Date.now(),s=[];for(const n of t){const t=60*this.nt*1e3;e-n.timestamp>t?await this.it.deleteEntry(n.id):s.push(wt(n))}return s}async at({request:t,metadata:e,timestamp:s=Date.now()},n){const i={requestData:(await ut.fromRequest(t.clone())).toObject(),timestamp:s};e&&(i.metadata=e),await this.it[`${n}Entry`](i),this.Z?this.tt=!0:await this.registerSync()}async ot(t){const e=Date.now(),s=await this.it[`${t}Entry`]();if(s){const n=60*this.nt*1e3;return e-s.timestamp>n?this.ot(t):wt(s)}}async replayRequests(){let t;for(;t=await this.shiftRequest();)try{await fetch(t.request.clone())}catch(e){throw await this.unshiftRequest(t),new s("queue-replay-failed",{name:this.et})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register(`${lt}:${this.et}`)}catch(t){}}rt(){"sync"in self.registration?self.addEventListener("sync",(t=>{if(t.tag===`${lt}:${this.et}`){const e=async()=>{let e;this.Z=!0;try{await this.st({queue:this})}catch(t){if(t instanceof Error)throw e=t,e}finally{!this.tt||e&&!t.lastChance||await this.registerSync(),this.Z=!1,this.tt=!1}};t.waitUntil(e())}})):this.st({queue:this})}static get ct(){return ft}}class yt{constructor(t,e){this.fetchDidFail=async({request:t})=>{await this.ht.pushRequest({request:t})},this.ht=new dt(t,e)}}const pt={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};class mt extends H{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(pt),this.j=t.networkTimeoutSeconds||0}async P(t,e){const n=[],i=[];let r;if(this.j){const{id:s,promise:a}=this.ut({request:t,logs:n,handler:e});r=s,i.push(a)}const a=this.lt({timeoutId:r,request:t,logs:n,handler:e});i.push(a);const o=await e.waitUntil((async()=>await e.waitUntil(Promise.race(i))||await a)());if(!o)throw new s("no-response",{url:t.url});return o}ut({request:t,logs:e,handler:s}){let n;return{promise:new Promise((e=>{n=setTimeout((async()=>{e(await s.cacheMatch(t))}),1e3*this.j)})),id:n}}async lt({timeoutId:t,request:e,logs:s,handler:n}){let i,r;try{r=await n.fetchAndCachePut(e)}catch(t){t instanceof Error&&(i=t)}return t&&clearTimeout(t),!i&&r||(r=await n.cacheMatch(e)),r}}try{self["workbox:google-analytics:6.2.4"]&&_()}catch(t){}const gt="www.google-analytics.com",Rt="www.googletagmanager.com",qt=/^\/(\w+\/)?collect/,bt=t=>{const e=({url:t})=>t.hostname===gt&&qt.test(t.pathname),s=new Q({plugins:[t]});return[new i(e,s,"GET"),new i(e,s,"POST")]},vt=t=>{const e=new mt({cacheName:t});return new i((({url:t})=>t.hostname===gt&&"/analytics.js"===t.pathname),e,"GET")},Dt=t=>{const e=new mt({cacheName:t});return new i((({url:t})=>t.hostname===Rt&&"/gtag/js"===t.pathname),e,"GET")},Et=t=>{const e=new mt({cacheName:t});return new i((({url:t})=>t.hostname===Rt&&"/gtm.js"===t.pathname),e,"GET")};t.CacheFirst=class extends H{async P(t,e){let n,i=await e.cacheMatch(t);if(!i)try{i=await e.fetchAndCachePut(t)}catch(t){t instanceof Error&&(n=t)}if(!i)throw new s("no-response",{url:t.url,error:n});return i}},t.ExpirationPlugin=class{constructor(t={}){this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.ft(n),r=this.wt(s);p(r.expireEntries());const a=r.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.wt(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.dt=t,this.v=t.maxAgeSeconds,this.yt=new Map,t.purgeOnQuotaError&&function(t){m.add(t)}((()=>this.deleteCacheAndMetadata()))}wt(t){if(t===y())throw new s("expire-custom-caches-only");let e=this.yt.get(t);return e||(e=new W(t,this.dt),this.yt.set(t,e)),e}ft(t){if(!this.v)return!0;const e=this.gt(t);if(null===e)return!0;return e>=Date.now()-1e3*this.v}gt(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.yt)await self.caches.delete(t),await e.delete();this.yt=new Map}},t.NetworkOnly=Q,t.cleanupOutdatedCaches=function(){self.addEventListener("activate",(t=>{const e=d();t.waitUntil((async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t));return await Promise.all(s.map((t=>self.caches.delete(t)))),s})(e).then((t=>{})))}))},t.clientsClaim=function(){self.addEventListener("activate",(()=>self.clients.claim()))},t.initialize=(t={})=>{const e=w(t.cacheName),s=new yt("workbox-google-analytics",{maxRetentionTime:2880,onSync:(n=t,async({queue:t})=>{let e;for(;e=await t.shiftRequest();){const{request:s,timestamp:i}=e,r=new URL(s.url);try{const t="POST"===s.method?new URLSearchParams(await s.clone().text()):r.searchParams,e=i-(Number(t.get("qt"))||0),a=Date.now()-e;if(t.set("qt",String(a)),n.parameterOverrides)for(const e of Object.keys(n.parameterOverrides)){const s=n.parameterOverrides[e];t.set(e,s)}"function"==typeof n.hitFilter&&n.hitFilter.call(null,t),await fetch(new Request(r.origin+r.pathname,{body:t.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(s){throw await t.unshiftRequest(e),s}}})});var n;const i=[Et(e),vt(e),Dt(e),...bt(s)],r=new a;for(const t of i)r.registerRoute(t);r.addFetchListener()},t.precacheAndRoute=function(t,e){!function(t){nt().precache(t)}(t),function(t){const e=nt();h(new it(e,t))}(e)},t.registerRoute=h,t.setCacheNameDetails=function(t){f(t)}}));
//# sourceMappingURL=workbox-9bf6184f.js.map
