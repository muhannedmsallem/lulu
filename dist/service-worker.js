/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./service-worker.js":
/*!***************************!*\
  !*** ./service-worker.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("importScripts(\"https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js\");\nconst CACHE_NAME = \"my-cache-v1\";\nconst API_CACHE_NAME = \"api-cache-v1\";\nconst OFFLINE_URL = \"/offline.html\";\nconst urlsToCache = [\n    \"/\",\n    \"/shop\",\n    \"/cart\",\n    OFFLINE_URL\n];\n// Install Service Worker and cache static assets\nself.addEventListener(\"install\", (event)=>{\n    event.waitUntil(caches.open(CACHE_NAME).then((cache)=>{\n        console.log(\"Opened cache\");\n        return cache.addAll(urlsToCache);\n    }));\n    self.skipWaiting();\n});\n// Activate Service Worker and remove old caches\nself.addEventListener(\"activate\", (event)=>{\n    const cacheWhitelist = [\n        CACHE_NAME,\n        API_CACHE_NAME\n    ];\n    event.waitUntil(caches.keys().then((cacheNames)=>Promise.all(cacheNames.map((cacheName)=>{\n            if (!cacheWhitelist.includes(cacheName)) {\n                return caches.delete(cacheName);\n            }\n        }))));\n    self.clients.claim();\n});\n// Check if Workbox is loaded\nif (typeof workbox !== \"undefined\") {\n    console.log(\"Workbox is loaded\");\n    workbox.core.clientsClaim();\n    const manifest = [];\n    if (manifest && Array.isArray(manifest)) {\n        workbox.precaching.precacheAndRoute(manifest);\n    } else {\n        console.warn(\"No precache manifest found. precacheAndRoute() may not be effective if the service worker has already finished installing and activating.\");\n    }\n    workbox.routing.registerRoute((param)=>{\n        let { request } = param;\n        return request.destination === \"document\";\n    }, new workbox.strategies.NetworkFirst({\n        cacheName: \"document-cache\"\n    }));\n    workbox.routing.registerRoute((param)=>{\n        let { url } = param;\n        return url.origin === \"https://fonts.googleapis.com\" || url.origin === \"https://fonts.gstatic.com\";\n    }, new workbox.strategies.CacheFirst({\n        cacheName: \"google-fonts\",\n        plugins: [\n            new workbox.expiration.ExpirationPlugin({\n                maxEntries: 20,\n                maxAgeSeconds: 365 * 24 * 60 * 60\n            })\n        ]\n    }));\n    workbox.routing.registerRoute((param)=>{\n        let { request } = param;\n        return request.destination === \"script\" || request.destination === \"style\";\n    }, new workbox.strategies.StaleWhileRevalidate({\n        cacheName: \"static-resources\"\n    }));\n    workbox.routing.registerRoute((param)=>{\n        let { url } = param;\n        return url.origin.includes(\"sanity.io\");\n    }, new workbox.strategies.NetworkFirst({\n        cacheName: \"sanity-api-cache\",\n        plugins: [\n            new workbox.expiration.ExpirationPlugin({\n                maxEntries: 50,\n                maxAgeSeconds: 5 * 60\n            })\n        ]\n    }));\n    workbox.routing.setCatchHandler(async (param)=>{\n        let { event } = param;\n        if (event.request.destination === \"document\") {\n            return caches.match(OFFLINE_URL);\n        }\n        return Response.error();\n    });\n} else {\n    console.log(\"Workbox didn't load\");\n}\n// Custom fetch handler for other requests\nself.addEventListener(\"fetch\", (event)=>{\n    if (event.request.url.includes(\"/api/\") || event.request.url.includes(\"sanity.io\")) {\n        event.respondWith(caches.open(API_CACHE_NAME).then((cache)=>{\n            return fetch(event.request).then((response)=>{\n                if (!response || response.status !== 200 || response.type !== \"basic\") {\n                    return response;\n                }\n                const responseToCache = response.clone();\n                cache.put(event.request, responseToCache);\n                return response;\n            }).catch(()=>{\n                return caches.match(event.request).then((response)=>{\n                    if (response) {\n                        return response;\n                    } else {\n                        return caches.match(OFFLINE_URL);\n                    }\n                });\n            });\n        }));\n    } else {\n        event.respondWith(caches.match(event.request).then((cachedResponse)=>{\n            return cachedResponse || fetch(event.request).then((response)=>{\n                if (!response || response.status !== 200 || response.type !== \"basic\") {\n                    return response;\n                }\n                const responseToCache = response.clone();\n                caches.open(CACHE_NAME).then((cache)=>{\n                    cache.put(event.request, responseToCache);\n                });\n                return response;\n            }).catch(()=>{\n                return caches.match(OFFLINE_URL);\n            });\n        }));\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNBLFlBQVlBLFNBQVNDLE1BQU0sS0FBSyxPQUFPRCxTQUFTRSxJQUFJLEtBQUssU0FBUztvQkFDckUsT0FBT0Y7Z0JBQ1Q7Z0JBQ0EsTUFBTUcsa0JBQWtCSCxTQUFTSSxLQUFLO2dCQUN0Q3RELE9BQU9DLElBQUksQ0FBQ1QsWUFBWVUsSUFBSSxDQUFDLENBQUNDO29CQUM1QkEsTUFBTW9ELEdBQUcsQ0FBQ3pELE1BQU1pQyxPQUFPLEVBQUVzQjtnQkFDM0I7Z0JBQ0EsT0FBT0g7WUFDVCxHQUFHTSxLQUFLLENBQUM7Z0JBQ1AsT0FBT3hELE9BQU82QyxLQUFLLENBQUNuRDtZQUN0QjtRQUNGO0lBRUo7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlLXdvcmtlci5qcz9jOTAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydFNjcmlwdHMoJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS93b3JrYm94LWNkbi9yZWxlYXNlcy82LjEuNS93b3JrYm94LXN3LmpzJyk7XHJcblxyXG5jb25zdCBDQUNIRV9OQU1FID0gJ215LWNhY2hlLXYxJztcclxuY29uc3QgQVBJX0NBQ0hFX05BTUUgPSAnYXBpLWNhY2hlLXYxJztcclxuY29uc3QgT0ZGTElORV9VUkwgPSAnL29mZmxpbmUuaHRtbCc7XHJcblxyXG5jb25zdCB1cmxzVG9DYWNoZSA9IFtcclxuICAnLycsXHJcbiAgJy9zaG9wJyxcclxuICAnL2NhcnQnLFxyXG4gIE9GRkxJTkVfVVJMLCAvLyBFbnN1cmUgeW91IGhhdmUgYW4gb2ZmbGluZS5odG1sIHBhZ2VcclxuXTtcclxuXHJcbi8vIEluc3RhbGwgU2VydmljZSBXb3JrZXIgYW5kIGNhY2hlIHN0YXRpYyBhc3NldHNcclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQud2FpdFVudGlsKFxyXG4gICAgY2FjaGVzLm9wZW4oQ0FDSEVfTkFNRSkudGhlbigoY2FjaGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ09wZW5lZCBjYWNoZScpO1xyXG4gICAgICByZXR1cm4gY2FjaGUuYWRkQWxsKHVybHNUb0NhY2hlKTtcclxuICAgIH0pXHJcbiAgKTtcclxuICBzZWxmLnNraXBXYWl0aW5nKCk7XHJcbn0pO1xyXG5cclxuLy8gQWN0aXZhdGUgU2VydmljZSBXb3JrZXIgYW5kIHJlbW92ZSBvbGQgY2FjaGVzXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBjYWNoZVdoaXRlbGlzdCA9IFtDQUNIRV9OQU1FLCBBUElfQ0FDSEVfTkFNRV07XHJcbiAgZXZlbnQud2FpdFVudGlsKFxyXG4gICAgY2FjaGVzLmtleXMoKS50aGVuKChjYWNoZU5hbWVzKSA9PlxyXG4gICAgICBQcm9taXNlLmFsbChcclxuICAgICAgICBjYWNoZU5hbWVzLm1hcCgoY2FjaGVOYW1lKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWNhY2hlV2hpdGVsaXN0LmluY2x1ZGVzKGNhY2hlTmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlcy5kZWxldGUoY2FjaGVOYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKTtcclxuICBzZWxmLmNsaWVudHMuY2xhaW0oKTtcclxufSk7XHJcblxyXG4vLyBDaGVjayBpZiBXb3JrYm94IGlzIGxvYWRlZFxyXG5pZiAodHlwZW9mIHdvcmtib3ggIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgY29uc29sZS5sb2coJ1dvcmtib3ggaXMgbG9hZGVkJyk7XHJcblxyXG4gIHdvcmtib3guY29yZS5jbGllbnRzQ2xhaW0oKTtcclxuXHJcbiAgY29uc3QgbWFuaWZlc3QgPSBzZWxmLl9fV0JfTUFOSUZFU1Q7XHJcbiAgaWYgKG1hbmlmZXN0ICYmIEFycmF5LmlzQXJyYXkobWFuaWZlc3QpKSB7XHJcbiAgICB3b3JrYm94LnByZWNhY2hpbmcucHJlY2FjaGVBbmRSb3V0ZShtYW5pZmVzdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybignTm8gcHJlY2FjaGUgbWFuaWZlc3QgZm91bmQuIHByZWNhY2hlQW5kUm91dGUoKSBtYXkgbm90IGJlIGVmZmVjdGl2ZSBpZiB0aGUgc2VydmljZSB3b3JrZXIgaGFzIGFscmVhZHkgZmluaXNoZWQgaW5zdGFsbGluZyBhbmQgYWN0aXZhdGluZy4nKTtcclxuICB9XHJcblxyXG4gIHdvcmtib3gucm91dGluZy5yZWdpc3RlclJvdXRlKFxyXG4gICAgKHsgcmVxdWVzdCB9KSA9PiByZXF1ZXN0LmRlc3RpbmF0aW9uID09PSAnZG9jdW1lbnQnLFxyXG4gICAgbmV3IHdvcmtib3guc3RyYXRlZ2llcy5OZXR3b3JrRmlyc3Qoe1xyXG4gICAgICBjYWNoZU5hbWU6ICdkb2N1bWVudC1jYWNoZScsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHdvcmtib3gucm91dGluZy5yZWdpc3RlclJvdXRlKFxyXG4gICAgKHsgdXJsIH0pID0+IHVybC5vcmlnaW4gPT09ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyB8fCB1cmwub3JpZ2luID09PSAnaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbScsXHJcbiAgICBuZXcgd29ya2JveC5zdHJhdGVnaWVzLkNhY2hlRmlyc3Qoe1xyXG4gICAgICBjYWNoZU5hbWU6ICdnb29nbGUtZm9udHMnLFxyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgbmV3IHdvcmtib3guZXhwaXJhdGlvbi5FeHBpcmF0aW9uUGx1Z2luKHtcclxuICAgICAgICAgIG1heEVudHJpZXM6IDIwLFxyXG4gICAgICAgICAgbWF4QWdlU2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwLCAvLyAxIHllYXJcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgd29ya2JveC5yb3V0aW5nLnJlZ2lzdGVyUm91dGUoXHJcbiAgICAoeyByZXF1ZXN0IH0pID0+IHJlcXVlc3QuZGVzdGluYXRpb24gPT09ICdzY3JpcHQnIHx8IHJlcXVlc3QuZGVzdGluYXRpb24gPT09ICdzdHlsZScsXHJcbiAgICBuZXcgd29ya2JveC5zdHJhdGVnaWVzLlN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcclxuICAgICAgY2FjaGVOYW1lOiAnc3RhdGljLXJlc291cmNlcycsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHdvcmtib3gucm91dGluZy5yZWdpc3RlclJvdXRlKFxyXG4gICAgKHsgdXJsIH0pID0+IHVybC5vcmlnaW4uaW5jbHVkZXMoJ3Nhbml0eS5pbycpLFxyXG4gICAgbmV3IHdvcmtib3guc3RyYXRlZ2llcy5OZXR3b3JrRmlyc3Qoe1xyXG4gICAgICBjYWNoZU5hbWU6ICdzYW5pdHktYXBpLWNhY2hlJyxcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIG5ldyB3b3JrYm94LmV4cGlyYXRpb24uRXhwaXJhdGlvblBsdWdpbih7XHJcbiAgICAgICAgICBtYXhFbnRyaWVzOiA1MCwgLy8gTWF4IG51bWJlciBvZiBlbnRyaWVzIHRvIGNhY2hlXHJcbiAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA1ICogNjAsIC8vIENhY2hlIGR1cmF0aW9uIGluIHNlY29uZHMgKDUgbWludXRlcylcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgd29ya2JveC5yb3V0aW5nLnNldENhdGNoSGFuZGxlcihhc3luYyAoeyBldmVudCB9KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQucmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ2RvY3VtZW50Jykge1xyXG4gICAgICByZXR1cm4gY2FjaGVzLm1hdGNoKE9GRkxJTkVfVVJMKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNwb25zZS5lcnJvcigpO1xyXG4gIH0pO1xyXG59IGVsc2Uge1xyXG4gIGNvbnNvbGUubG9nKGBXb3JrYm94IGRpZG4ndCBsb2FkYCk7XHJcbn1cclxuXHJcbi8vIEN1c3RvbSBmZXRjaCBoYW5kbGVyIGZvciBvdGhlciByZXF1ZXN0c1xyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50LnJlcXVlc3QudXJsLmluY2x1ZGVzKCcvYXBpLycpIHx8IGV2ZW50LnJlcXVlc3QudXJsLmluY2x1ZGVzKCdzYW5pdHkuaW8nKSkge1xyXG4gICAgZXZlbnQucmVzcG9uZFdpdGgoXHJcbiAgICAgIGNhY2hlcy5vcGVuKEFQSV9DQUNIRV9OQU1FKS50aGVuKChjYWNoZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChldmVudC5yZXF1ZXN0KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uuc3RhdHVzICE9PSAyMDAgfHwgcmVzcG9uc2UudHlwZSAhPT0gJ2Jhc2ljJykge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVRvQ2FjaGUgPSByZXNwb25zZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICBjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgcmVzcG9uc2VUb0NhY2hlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlcy5tYXRjaChPRkZMSU5FX1VSTCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZXZlbnQucmVzcG9uZFdpdGgoXHJcbiAgICAgIGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KS50aGVuKChjYWNoZWRSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYWNoZWRSZXNwb25zZSB8fCBmZXRjaChldmVudC5yZXF1ZXN0KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5zdGF0dXMgIT09IDIwMCB8fCByZXNwb25zZS50eXBlICE9PSAnYmFzaWMnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVG9DYWNoZSA9IHJlc3BvbnNlLmNsb25lKCk7XHJcbiAgICAgICAgICBjYWNoZXMub3BlbihDQUNIRV9OQU1FKS50aGVuKChjYWNoZSkgPT4ge1xyXG4gICAgICAgICAgICBjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgcmVzcG9uc2VUb0NhY2hlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBjYWNoZXMubWF0Y2goT0ZGTElORV9VUkwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiaW1wb3J0U2NyaXB0cyIsIkNBQ0hFX05BTUUiLCJBUElfQ0FDSEVfTkFNRSIsIk9GRkxJTkVfVVJMIiwidXJsc1RvQ2FjaGUiLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwid2FpdFVudGlsIiwiY2FjaGVzIiwib3BlbiIsInRoZW4iLCJjYWNoZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRBbGwiLCJza2lwV2FpdGluZyIsImNhY2hlV2hpdGVsaXN0Iiwia2V5cyIsImNhY2hlTmFtZXMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiY2FjaGVOYW1lIiwiaW5jbHVkZXMiLCJkZWxldGUiLCJjbGllbnRzIiwiY2xhaW0iLCJ3b3JrYm94IiwiY29yZSIsImNsaWVudHNDbGFpbSIsIm1hbmlmZXN0IiwiX19XQl9NQU5JRkVTVCIsIkFycmF5IiwiaXNBcnJheSIsInByZWNhY2hpbmciLCJwcmVjYWNoZUFuZFJvdXRlIiwid2FybiIsInJvdXRpbmciLCJyZWdpc3RlclJvdXRlIiwicmVxdWVzdCIsImRlc3RpbmF0aW9uIiwic3RyYXRlZ2llcyIsIk5ldHdvcmtGaXJzdCIsInVybCIsIm9yaWdpbiIsIkNhY2hlRmlyc3QiLCJwbHVnaW5zIiwiZXhwaXJhdGlvbiIsIkV4cGlyYXRpb25QbHVnaW4iLCJtYXhFbnRyaWVzIiwibWF4QWdlU2Vjb25kcyIsIlN0YWxlV2hpbGVSZXZhbGlkYXRlIiwic2V0Q2F0Y2hIYW5kbGVyIiwibWF0Y2giLCJSZXNwb25zZSIsImVycm9yIiwicmVzcG9uZFdpdGgiLCJmZXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwidHlwZSIsInJlc3BvbnNlVG9DYWNoZSIsImNsb25lIiwicHV0IiwiY2F0Y2giLCJjYWNoZWRSZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./service-worker.js\n"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: function(script) { return script; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	!function() {
/******/ 		__webpack_require__.ts = function(script) { return __webpack_require__.tt().createScript(script); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./service-worker.js");
/******/ 	
/******/ })()
;