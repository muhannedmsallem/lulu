!function(){"use strict";var e={913:function(){try{self["workbox:core:6.5.4"]&&_()}catch(e){}},550:function(){try{self["workbox:expiration:7.0.0"]&&_()}catch(e){}},19:function(){try{self["workbox:core:7.0.0"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}},552:function(){try{self["workbox:core:7.0.0"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:7.0.0"]&&_()}catch(e){}},253:function(){try{self["workbox:core:7.0.0"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:7.0.0"]&&_()}catch(e){}},35:function(){try{self["workbox:core:7.0.0"]&&_()}catch(e){}}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}},n=!0;try{e[a](i,i.exports,s),n=!1}finally{n&&delete t[a]}return i.exports}!function(){var e,t,a;let r,i,n,c,o,l;s(913),"undefined"!=typeof registration&&registration.scope,s(19);let h=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class u extends Error{constructor(e,t){super(h(e,t)),this.name=e,this.details=t}}function d(e){e.then(()=>{})}let f=(e,t)=>t.some(t=>e instanceof t),p=new WeakMap,g=new WeakMap,w=new WeakMap,m=new WeakMap,y=new WeakMap,x={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return g.get(e);if("objectStoreNames"===t)return e.objectStoreNames||w.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return b(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function b(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,s)=>{let a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(b(e.result)),a()},i=()=>{s(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&p.set(t,e)}).catch(()=>{}),y.set(t,e),t}(e);if(m.has(e))return m.get(e);let s="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(E(this),e),b(p.get(this))}:function(...e){return b(t.apply(E(this),e))}:function(e,...s){let a=t.call(E(this),e,...s);return w.set(a,e.sort?e.sort():[e]),b(a)}:(t instanceof IDBTransaction&&function(e){if(g.has(e))return;let t=new Promise((t,s)=>{let a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{s(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});g.set(e,t)}(t),f(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,x):t;return s!==e&&(m.set(e,s),y.set(s,e)),s}let E=e=>y.get(e),v=["get","getKey","getAll","getAllKeys","count"],R=["put","add","delete","clear"],C=new Map;function k(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(C.get(t))return C.get(t);let s=t.replace(/FromIndex$/,""),a=t!==s,r=R.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!(r||v.includes(s)))return;let i=async function(e,...t){let i=this.transaction(e,r?"readwrite":"readonly"),n=i.store;return a&&(n=n.index(t.shift())),(await Promise.all([n[s](...t),r&&i.done]))[0]};return C.set(t,i),i}x={...l=x,get:(e,t,s)=>k(e,t)||l.get(e,t,s),has:(e,t)=>!!k(e,t)||l.has(e,t)},s(550);let T="cache-entries",L=e=>{let t=new URL(e,location.href);return t.hash="",t.href};class D{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){let t=e.createObjectStore(T,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){let s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",e=>t(e.oldVersion,e)),b(s).then(()=>void 0)}(this._cacheName)}async setTimestamp(e,t){let s={url:e=L(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=(await this.getDb()).transaction(T,"readwrite",{durability:"relaxed"});await a.store.put(s),await a.done}async getTimestamp(e){let t=await this.getDb(),s=await t.get(T,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){let s=await this.getDb(),a=await s.transaction(T).store.index("timestamp").openCursor(null,"prev"),r=[],i=0;for(;a;){let s=a.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&i>=t?r.push(a.value):i++),a=await a.continue()}let n=[];for(let e of r)await s.delete(T,e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+L(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:a,blocking:r,terminated:i}={}){let n=indexedDB.open(e,1),c=b(n);return a&&n.addEventListener("upgradeneeded",e=>{a(b(n.result),e.oldVersion,e.newVersion,b(n.transaction),e)}),s&&n.addEventListener("blocked",e=>s(e.oldVersion,e.newVersion,e)),c.then(e=>{i&&e.addEventListener("close",()=>i()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),c}("workbox-expiration",0,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class S{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new D(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;let e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(let e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,d(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(!this._maxAgeSeconds)return!1;{let t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}let U={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},N=e=>[U.prefix,e,U.suffix].filter(e=>e&&e.length>0).join("-"),A=e=>e||N(U.runtime),P=new Set;class q{constructor(e={}){if(this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:a})=>{if(!a)return null;let r=this._isResponseDateFresh(a),i=this._getCacheExpiration(s);d(i.expireEntries());let n=i.updateTimestamp(t.url);if(e)try{e.waitUntil(n)}catch(e){}return r?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{let s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError){var t;t=()=>this.deleteCacheAndMetadata(),P.add(t)}}_getCacheExpiration(e){if(e===A())throw new u("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new S(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;let t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;let t=new Date(e.headers.get("date")).getTime();return isNaN(t)?null:t}async deleteCacheAndMetadata(){for(let[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s(35);let I=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class M extends Error{constructor(e,t){super(I(e,t)),this.name=e,this.details=t}}let O={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},K=e=>[O.prefix,e,O.suffix].filter(e=>e&&e.length>0).join("-"),W=e=>e||K(O.runtime),j=e=>new URL(String(e),location.href).href.replace(RegExp(`^${location.origin}`),"");function B(e,t){let s=new URL(e);for(let e of t)s.searchParams.delete(e);return s.href}async function F(e,t,s,a){let r=B(t.url,s);if(t.url===r)return e.match(t,a);let i=Object.assign(Object.assign({},a),{ignoreSearch:!0});for(let n of(await e.keys(t,i)))if(r===B(n.url,s))return e.match(n,a)}class H{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}let $=new Set;async function G(){for(let e of $)await e()}function Q(e){return new Promise(t=>setTimeout(t,e))}function V(e){return"string"==typeof e?new Request(e):e}s(873);class J{constructor(e,t){for(let s of(this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new H,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map,this._plugins))this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,s=V(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){let e=await t.preloadResponse;if(e)return e}let a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(let e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new M("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}let r=s.clone();try{let e;for(let a of(e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions),this.iterateCallbacks("fetchDidSucceed")))e=await a({event:t,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){let t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){let t;let s=V(e),{cacheName:a,matchOptions:r}=this._strategy,i=await this.getCacheKey(s,"read"),n=Object.assign(Object.assign({},r),{cacheName:a});for(let e of(t=await caches.match(i,n),this.iterateCallbacks("cachedResponseWillBeUsed")))t=await e({cacheName:a,matchOptions:r,cachedResponse:t,request:i,event:this.event})||void 0;return t}async cachePut(e,t){let s=V(e);await Q(0);let a=await this.getCacheKey(s,"write");if(!t)throw new M("cache-put-with-no-response",{url:j(a.url)});let r=await this._ensureResponseSafeToCache(t);if(!r)return!1;let{cacheName:i,matchOptions:n}=this._strategy,c=await self.caches.open(i),o=this.hasCallback("cacheDidUpdate"),l=o?await F(c,a.clone(),["__WB_REVISION__"],n):null;try{await c.put(a,o?r.clone():r)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await G(),e}for(let e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:l,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){let s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(let e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=V(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if("function"==typeof t[e]){let s=this._pluginStateMap.get(t),a=a=>{let r=Object.assign(Object.assign({},a),{state:s});return t[e](r)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(let e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return!s&&t&&200!==t.status&&(t=void 0),t}}class z{constructor(e={}){this.cacheName=W(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a=new J(this,{event:t,request:s,params:"params"in e?e.params:void 0}),r=this._getResponse(a,s,t),i=this._awaitComplete(r,a,s,t);return[r,i]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(!(a=await this._handle(t,e))||"error"===a.type)throw new M("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(let i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:r,event:s,request:t}))break}if(a);else throw r}for(let r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let r,i;try{r=await e}catch(e){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:r,error:i}),t.destroy(),i)throw i}}class X extends z{async _handle(e,t){let s,a=await t.cacheMatch(e);if(!a)try{a=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(s=e)}if(!a)throw new M("no-response",{url:e.url,error:s});return a}}let Y={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class Z extends z{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(Y),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s;let a=[],r=[];if(this._networkTimeoutSeconds){let{id:i,promise:n}=this._getTimeoutPromise({request:e,logs:a,handler:t});s=i,r.push(n)}let i=this._getNetworkPromise({timeoutId:s,request:e,logs:a,handler:t});r.push(i);let n=await t.waitUntil((async()=>await t.waitUntil(Promise.race(r))||await i)());if(!n)throw new M("no-response",{url:e.url});return n}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise(t=>{a=setTimeout(async()=>{t(await s.cacheMatch(e))},1e3*this._networkTimeoutSeconds)}),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let r,i;try{i=await a.fetchAndCachePut(t)}catch(e){e instanceof Error&&(r=e)}return e&&clearTimeout(e),(r||!i)&&(i=await a.cacheMatch(t)),i}}class ee extends z{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s,a;try{let a=[t.fetch(e)];if(this._networkTimeoutSeconds){let e=Q(1e3*this._networkTimeoutSeconds);a.push(e)}if(!(s=await Promise.race(a)))throw Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(a=e)}if(!s)throw new M("no-response",{url:e.url,error:a});return s}}class et extends z{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(Y)}async _handle(e,t){let s;let a=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(a);let r=await t.cacheMatch(e);if(r);else try{r=await a}catch(e){e instanceof Error&&(s=e)}if(!r)throw new M("no-response",{url:e.url,error:s});return r}}s(253);let es=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class ea extends Error{constructor(e,t){super(es(e,t)),this.name=e,this.details=t}}s(80);let er=e=>e&&"object"==typeof e?e:{handle:e};class ei{constructor(e,t,s="GET"){this.handler=er(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=er(e)}}class en extends ei{constructor(e,t,s){super(({url:t})=>{let s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class ec{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){let{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);let s=new Request(...t);return this.handleRequest({request:s,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let s;let a=new URL(e.url,location.href);if(!a.protocol.startsWith("http"))return;let r=a.origin===location.origin,{params:i,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:a}),c=n&&n.handler,o=e.method;if(!c&&this._defaultHandlerMap.has(o)&&(c=this._defaultHandlerMap.get(o)),!c)return;try{s=c.handle({url:a,request:e,event:t,params:i})}catch(e){s=Promise.reject(e)}let l=n&&n.catchHandler;return s instanceof Promise&&(this._catchHandler||l)&&(s=s.catch(async s=>{if(l)try{return await l.handle({url:a,request:e,event:t,params:i})}catch(e){e instanceof Error&&(s=e)}if(this._catchHandler)return this._catchHandler.handle({url:a,request:e,event:t});throw s})),s}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){for(let r of this._routes.get(s.method)||[]){let i;let n=r.match({url:e,sameOrigin:t,request:s,event:a});if(n)return Array.isArray(i=n)&&0===i.length?i=void 0:n.constructor===Object&&0===Object.keys(n).length?i=void 0:"boolean"==typeof n&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,er(e))}setCatchHandler(e){this._catchHandler=er(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new ea("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new ea("unregister-route-route-not-registered")}}let eo=()=>(n||((n=new ec).addFetchListener(),n.addCacheListener()),n);function el(e,t,s){let a;if("string"==typeof e){let r=new URL(e,location.href);a=new ei(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)a=new en(e,t,s);else if("function"==typeof e)a=new ei(e,t,s);else if(e instanceof ei)a=e;else throw new ea("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return eo().registerRoute(a),a}s(552);let eh=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class eu extends Error{constructor(e,t){super(eh(e,t)),this.name=e,this.details=t}}let ed={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},ef=e=>[ed.prefix,e,ed.suffix].filter(e=>e&&e.length>0).join("-"),ep=e=>e||ef(ed.precache);function eg(e,t){let s=t();return e.waitUntil(s),s}s(977);class ew{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){let e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class em{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{let s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}async function ey(e,t){let s=null;if(e.url&&(s=new URL(e.url).origin),s!==self.location.origin)throw new eu("cross-origin-copy-response",{origin:s});let a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=t?t(r):r,n=!function(){if(void 0===c){let e=new Response("");if("body"in e)try{new Response(e.body),c=!0}catch(e){c=!1}c=!1}return c}()?await a.blob():a.body;return new Response(n,i)}class e_ extends z{constructor(e={}){e.cacheName=ep(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(e_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;let a=t.params||{};if(this._fallbackToNetwork){let r=a.integrity,i=e.integrity,n=!i||i===r;s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||r:void 0})),r&&n&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new eu("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new eu("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[s,a]of this.plugins.entries())a!==e_.copyRedirectedCacheableResponsesPlugin&&(a===e_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(e_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}e_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},e_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await ey(e):e};class ex{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new e_({cacheName:ep(e),plugins:[...t,new em({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);let{cacheKey:e,url:a}=function(e){if(!e)throw new eu("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){let t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}let{revision:t,url:s}=e;if(!s)throw new eu("add-to-cache-list-unexpected-type",{entry:e});if(!t){let e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}let a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new eu("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new eu("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0&&console.warn(`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`)}}install(e){return eg(e,async()=>{let t=new ew;for(let[s,a]of(this.strategy.plugins.push(t),this._urlsToCacheKeys)){let t=this._cacheKeysToIntegrities.get(a),r=this._urlsToCacheModes.get(s),i=new Request(s,{integrity:t,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:i,event:e}))}let{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return eg(e,async()=>{let e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(let r of t)s.has(r.url)||(await e.delete(r),a.push(r.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new eu("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let eb=()=>(o||(o=new ex),o);class eE extends ei{constructor(e,t){super(({request:s})=>{let a=e.getURLsToCacheKeys();for(let r of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:r}={}){let i=new URL(e,location.href);i.hash="",yield i.href;let n=function(e,t=[]){for(let s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(i,t);if(yield n.href,s&&n.pathname.endsWith("/")){let e=new URL(n.href);e.pathname+=s,yield e.href}if(a){let e=new URL(n.href);e.pathname+=".html",yield e.href}if(r)for(let e of r({url:i}))yield e.href}(s.url,t)){let t=a.get(r);if(t){let s=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:s}}}},e.strategy)}}let ev="-precache-",eR=async(e,t=ev)=>{let s=(await self.caches.keys()).filter(s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e);return await Promise.all(s.map(e=>self.caches.delete(e))),s};function eC(e){return eb().matchPrecache(e)}self.skipWaiting(),self.addEventListener("activate",()=>self.clients.claim());let ek=[{'revision':'8886aa0d785f9be036c90beda8e7ee5d','url':'/_next/app-build-manifest.json'},{'revision':'2ec694eb52ae4f523f265a46bae4d768','url':'/_next/static/7sAxCgi0bIoLwnh4xDAma/_buildManifest.js'},{'revision':'b6652df95db52feb4daf4eca35380933','url':'/_next/static/7sAxCgi0bIoLwnh4xDAma/_ssgManifest.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/138-7dc6e1e44f01623d.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/23-10dd17ec9d99901b.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/270-62515f32330d58c0.js'},{'revision':'f6c614274ec246d8','url':'/_next/static/chunks/537.f6c614274ec246d8.js'},{'revision':'c68c212cef9d7ba4','url':'/_next/static/chunks/583.c68c212cef9d7ba4.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/8e1d74a4-a1efac7dd0c4e6be.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/923-fdaf346f5c0a5bb1.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/app/_not-found/page-b72e9840a0ed5c14.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/app/cart/page-fb701c138cd8e2a0.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/app/layout-a8e17e29fe674cd8.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/app/page-09b87ae20aad4438.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/app/product/%5Bid%5D/page-2d0671fd7f3d6a78.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/app/shop/page-3316e75a9ac3e1dc.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/app/test/page-bd130ba339639317.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/fd9d1056-e158016523ed90e0.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/framework-f66176bb897dc684.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/main-7ab48c07a592e4c8.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/main-app-efc2cfbd33baeabf.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/pages/_app-6a626577ffa902a4.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/pages/_error-1be831200e60c5c0.js'},{'revision':'79330112775102f91e1010318bae2bd3','url':'/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js'},{'revision':'7sAxCgi0bIoLwnh4xDAma','url':'/_next/static/chunks/webpack-8db1c8d37134e77d.js'},{'revision':'5f5ad261f78e2702','url':'/_next/static/css/5f5ad261f78e2702.css'},{'revision':'9462b9a7a4d07ff6','url':'/_next/static/css/9462b9a7a4d07ff6.css'},{'revision':'86f9de3cec79bb36005a1b6e993d212d','url':'/_next/static/media/00c85bb211b329fc-s.woff2'},{'revision':'f9a2b841308c78d992ba73d1940bdc66','url':'/_next/static/media/0fb5d54cc1f5e91d-s.p.woff2'},{'revision':'827ea12f2d3333210f5d74b829d518b0','url':'/_next/static/media/33869b29596d7bb6-s.woff2'},{'revision':'122c4137','url':'/_next/static/media/la-brands-400.122c4137.woff2'},{'revision':'1ec1f0f5','url':'/_next/static/media/la-brands-400.1ec1f0f5.woff'},{'revision':'4343d0c0','url':'/_next/static/media/la-brands-400.4343d0c0.ttf'},{'revision':'48e89963','url':'/_next/static/media/la-brands-400.48e89963.eot'},{'revision':'76d3b8a5','url':'/_next/static/media/la-brands-400.76d3b8a5.svg'},{'revision':'5e18e0c4','url':'/_next/static/media/la-regular-400.5e18e0c4.svg'},{'revision':'7b67c533','url':'/_next/static/media/la-regular-400.7b67c533.eot'},{'revision':'bfaaab46','url':'/_next/static/media/la-regular-400.bfaaab46.woff2'},{'revision':'df0ba4ff','url':'/_next/static/media/la-regular-400.df0ba4ff.ttf'},{'revision':'f45e994d','url':'/_next/static/media/la-regular-400.f45e994d.woff'},{'revision':'56cddde2','url':'/_next/static/media/la-solid-900.56cddde2.svg'},{'revision':'582c3a0f','url':'/_next/static/media/la-solid-900.582c3a0f.ttf'},{'revision':'7dd81512','url':'/_next/static/media/la-solid-900.7dd81512.woff'},{'revision':'85692007','url':'/_next/static/media/la-solid-900.85692007.eot'},{'revision':'8e5c796f','url':'/_next/static/media/la-solid-900.8e5c796f.woff2'},{'revision':'fd14af98f1a483f0275c1bbfff40c98c','url':'/capacitor.config.json'},{'revision':'28264975fcf978c004f07200380a8f13','url':'/fallback.html'},{'revision':'99c43b68873d580a02dd931488e21d46','url':'/images/1.png'},{'revision':'b427bae8619437a52e8e6610dacbfde1','url':'/images/2.png'},{'revision':'7b8dbe9970623cf979fd5349efad71a8','url':'/images/des.png'},{'revision':'199306225d4c4e4d928dc2ed40510a6f','url':'/images/mob.png'},{'revision':'3d22f088b9070cb9946fe30ec74583b3','url':'/index.html'},{'revision':'632f1c74bd98ebec3fe89da47561d18c','url':'/manifest.json'},{'revision':'8e061864f388b47f33a1c3780831193e','url':'/next.svg'},{'revision':'cf145250b352482a0860e528fbebe21b','url':'/public/OneSignal.js'},{'revision':'101337972633bce4ec782a766d01bba8','url':'/public/service-worker.js'},{'revision':'ccff0041310feebf2a98660cceae3761','url':'/public/service-worker.js.map'},{'revision':'3bea777f1874939a8e7bea991392e545','url':'/public/workbox-7a5d9f0f.js'},{'revision':'4c079969af2c7075034ae0eca8babde5','url':'/public/workbox-9ed6b7fc.js'},{'revision':'19ea4c95675da73b1d64cabca3794dc0','url':'/public/workbox-9ed6b7fc.js.map'},{'revision':'aedbf472c869f174d3193e86bfb161d5','url':'/service-worker.js'},{'revision':'61c6b19abff40ea7acd577be818f3976','url':'/vercel.svg'}];ek.push({url:"/fallback",revision:"1234567890"}),eb().precache(ek),e=void 0,el(new eE(eb(),e)),self.addEventListener("activate",e=>{let t=ep();e.waitUntil(eR(t).then(e=>{}))});let eT=["/","/_next/static/css/app/layout.css","/_next/static/chunks/webpack.js","/_next/static/chunks/app/main-app.js"];self.addEventListener("install",e=>{console.log("Service Worker installing."),e.waitUntil(caches.open("my-cache-v1").then(e=>Promise.all(eT.map(t=>e.add(t).catch(e=>{console.error("Failed to cache ".concat(t,":"),e)})))).catch(e=>{console.error("Failed to open cache:",e)}))}),self.addEventListener("activate",e=>{console.log("Service Worker activating."),e.waitUntil(self.clients.claim())}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("fetch",e=>{console.log("Fetching:",e.request.url),e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),el("/",new Z({cacheName:"start-url",plugins:[new q({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),el(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new X({cacheName:"google-fonts",plugins:[new q({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),el(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new et({cacheName:"static-font-assets",plugins:[new q({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),el(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new ee({cacheName:"static-image-assets",plugins:[new q({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),el(/\.(?:js)$/i,new et({cacheName:"static-js-assets",plugins:[new q({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),el(/\.(?:css|less)$/i,new et({cacheName:"static-style-assets",plugins:[new q({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),el(/\.(?:json|xml|csv)$/i,new Z({cacheName:"static-data-assets",plugins:[new q({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),el(/\/api\/.*$/i,new Z({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new q({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),el(/.*/i,new Z({cacheName:"others",networkTimeoutSeconds:10,plugins:[new q({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),t=new et,eo().setDefaultHandler(t),a=e=>{let{event:t}=e;switch(t.request.destination){case"document":return eC("/fallback");case"image":return eC("/static/images/fallback.png");default:return Response.error()}},eo().setCatchHandler(a)}()}();