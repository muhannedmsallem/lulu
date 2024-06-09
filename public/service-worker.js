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

eval(__webpack_require__.ts("importScripts(\"https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js\");\n// Check if Workbox is loaded\nif (typeof workbox !== \"undefined\") {\n    console.log(\"Workbox is loaded\");\n// Your Workbox code here\n} else {\n    console.log(\"Workbox is not loaded\");\n}\nif (workbox) {\n    workbox.core.clientsClaim();\n    const manifest = [];\n    if (manifest && Array.isArray(manifest)) {\n        workbox.precaching.precacheAndRoute(manifest);\n    } else {\n        console.warn(\"No precache manifest found. precacheAndRoute() may not be effective if the service worker has already finished installing and activating.\");\n    }\n    workbox.routing.registerRoute((param)=>{\n        let { request } = param;\n        return request.destination === \"document\";\n    }, new workbox.strategies.NetworkFirst());\n    workbox.routing.registerRoute((param)=>{\n        let { url } = param;\n        return url.origin === \"https://fonts.googleapis.com\" || url.origin === \"https://fonts.gstatic.com\";\n    }, new workbox.strategies.CacheFirst({\n        cacheName: \"google-fonts\",\n        plugins: [\n            new workbox.expiration.ExpirationPlugin({\n                maxEntries: 20,\n                maxAgeSeconds: 365 * 24 * 60 * 60\n            })\n        ]\n    }));\n    workbox.routing.registerRoute((param)=>{\n        let { request } = param;\n        return request.destination === \"script\" || request.destination === \"style\";\n    }, new workbox.strategies.StaleWhileRevalidate({\n        cacheName: \"static-resources\"\n    }));\n    workbox.routing.registerRoute((param)=>{\n        let { url } = param;\n        return url.origin === \"https://1pi0qth2.api.sanity.io\";\n    }, new workbox.strategies.NetworkFirst({\n        cacheName: \"sanity-api-cache\",\n        plugins: [\n            new workbox.expiration.ExpirationPlugin({\n                maxEntries: 50,\n                maxAgeSeconds: 5 * 60\n            })\n        ]\n    }));\n    workbox.routing.setCatchHandler(async (param)=>{\n        let { event } = param;\n        return Response.error();\n    });\n// workbox.precaching.precacheAndRoute([{ url: FALLBACK_HTML_URL, revision: null }]);\n} else {\n    console.log(\"Workbox didn't load\");\n}\ndocument.addEventListener(\"deviceready\", function() {\n    // Clear the cache when the device is ready\n    median.webview.clearCache(function() {\n        console.log(\"Cache cleared successfully\");\n    }, function(error) {\n        console.error(\"Error clearing cache:\", error);\n    });\n}, false);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlLXdvcmtlci5qcyIsIm1hcHBpbmdzIjoiQUFDQUEsY0FBYztBQUVkLDZCQUE2QjtBQUM3QixJQUFJLE9BQU9DLFlBQVksYUFBYTtJQUNsQ0MsUUFBUUMsR0FBRyxDQUFDO0FBQ1oseUJBQXlCO0FBQzNCLE9BQU87SUFDTEQsUUFBUUMsR0FBRyxDQUFDO0FBQ2Q7QUFFQSxJQUFJRixTQUFTO0lBQ1hBLFFBQVFHLElBQUksQ0FBQ0MsWUFBWTtJQUV6QixNQUFNQyxXQUFXQyxLQUFLQyxhQUFhO0lBQ25DLElBQUlGLFlBQVlHLE1BQU1DLE9BQU8sQ0FBQ0osV0FBVztRQUN2Q0wsUUFBUVUsVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQ047SUFDdEMsT0FBTztRQUNMSixRQUFRVyxJQUFJLENBQUM7SUFDZjtJQUVBWixRQUFRYSxPQUFPLENBQUNDLGFBQWEsQ0FDM0I7WUFBQyxFQUFFQyxPQUFPLEVBQUU7ZUFBS0EsUUFBUUMsV0FBVyxLQUFLO09BQ3pDLElBQUloQixRQUFRaUIsVUFBVSxDQUFDQyxZQUFZO0lBR3JDbEIsUUFBUWEsT0FBTyxDQUFDQyxhQUFhLENBQzNCO1lBQUMsRUFBRUssR0FBRyxFQUFFO2VBQUtBLElBQUlDLE1BQU0sS0FBSyxrQ0FBa0NELElBQUlDLE1BQU0sS0FBSztPQUM3RSxJQUFJcEIsUUFBUWlCLFVBQVUsQ0FBQ0ksVUFBVSxDQUFDO1FBQ2hDQyxXQUFXO1FBQ1hDLFNBQVM7WUFDUCxJQUFJdkIsUUFBUXdCLFVBQVUsQ0FBQ0MsZ0JBQWdCLENBQUM7Z0JBQ3RDQyxZQUFZO2dCQUNaQyxlQUFlLE1BQU0sS0FBSyxLQUFLO1lBQ2pDO1NBQ0Q7SUFDSDtJQUdGM0IsUUFBUWEsT0FBTyxDQUFDQyxhQUFhLENBQzNCO1lBQUMsRUFBRUMsT0FBTyxFQUFFO2VBQUtBLFFBQVFDLFdBQVcsS0FBSyxZQUFZRCxRQUFRQyxXQUFXLEtBQUs7T0FDN0UsSUFBSWhCLFFBQVFpQixVQUFVLENBQUNXLG9CQUFvQixDQUFDO1FBQzFDTixXQUFXO0lBQ2I7SUFHRnRCLFFBQVFhLE9BQU8sQ0FBQ0MsYUFBYSxDQUMzQjtZQUFDLEVBQUVLLEdBQUcsRUFBRTtlQUFLQSxJQUFJQyxNQUFNLEtBQUs7T0FDNUIsSUFBSXBCLFFBQVFpQixVQUFVLENBQUNDLFlBQVksQ0FBQztRQUNsQ0ksV0FBVztRQUNYQyxTQUFTO1lBQ1AsSUFBSXZCLFFBQVF3QixVQUFVLENBQUNDLGdCQUFnQixDQUFDO2dCQUN0Q0MsWUFBWTtnQkFDWkMsZUFBZSxJQUFJO1lBQ3JCO1NBQ0Q7SUFDSDtJQUVGM0IsUUFBUWEsT0FBTyxDQUFDZ0IsZUFBZSxDQUFDO1lBQU8sRUFBRUMsS0FBSyxFQUFFO1FBRTlDLE9BQU9DLFNBQVNDLEtBQUs7SUFDdkI7QUFFQSxxRkFBcUY7QUFFdkYsT0FBTztJQUNML0IsUUFBUUMsR0FBRyxDQUFFO0FBQ2Y7QUFFQStCLFNBQVNDLGdCQUFnQixDQUFDLGVBQWU7SUFDdkMsMkNBQTJDO0lBQzNDQyxPQUFPQyxPQUFPLENBQUNDLFVBQVUsQ0FBQztRQUN0QnBDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQixHQUFHLFNBQVU4QixLQUFLO1FBQ2QvQixRQUFRK0IsS0FBSyxDQUFDLHlCQUF5QkE7SUFDM0M7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2Utd29ya2VyLmpzP2M5MDEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydFNjcmlwdHMoJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS93b3JrYm94LWNkbi9yZWxlYXNlcy82LjEuNS93b3JrYm94LXN3LmpzJyk7XHJcblxyXG4vLyBDaGVjayBpZiBXb3JrYm94IGlzIGxvYWRlZFxyXG5pZiAodHlwZW9mIHdvcmtib3ggIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgY29uc29sZS5sb2coJ1dvcmtib3ggaXMgbG9hZGVkJyk7XHJcbiAgLy8gWW91ciBXb3JrYm94IGNvZGUgaGVyZVxyXG59IGVsc2Uge1xyXG4gIGNvbnNvbGUubG9nKCdXb3JrYm94IGlzIG5vdCBsb2FkZWQnKTtcclxufVxyXG5cclxuaWYgKHdvcmtib3gpIHtcclxuICB3b3JrYm94LmNvcmUuY2xpZW50c0NsYWltKCk7XHJcblxyXG4gIGNvbnN0IG1hbmlmZXN0ID0gc2VsZi5fX1dCX01BTklGRVNUO1xyXG4gIGlmIChtYW5pZmVzdCAmJiBBcnJheS5pc0FycmF5KG1hbmlmZXN0KSkge1xyXG4gICAgd29ya2JveC5wcmVjYWNoaW5nLnByZWNhY2hlQW5kUm91dGUobWFuaWZlc3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ05vIHByZWNhY2hlIG1hbmlmZXN0IGZvdW5kLiBwcmVjYWNoZUFuZFJvdXRlKCkgbWF5IG5vdCBiZSBlZmZlY3RpdmUgaWYgdGhlIHNlcnZpY2Ugd29ya2VyIGhhcyBhbHJlYWR5IGZpbmlzaGVkIGluc3RhbGxpbmcgYW5kIGFjdGl2YXRpbmcuJyk7XHJcbiAgfVxyXG5cclxuICB3b3JrYm94LnJvdXRpbmcucmVnaXN0ZXJSb3V0ZShcclxuICAgICh7IHJlcXVlc3QgfSkgPT4gcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ2RvY3VtZW50JyxcclxuICAgIG5ldyB3b3JrYm94LnN0cmF0ZWdpZXMuTmV0d29ya0ZpcnN0KClcclxuICApO1xyXG5cclxuICB3b3JrYm94LnJvdXRpbmcucmVnaXN0ZXJSb3V0ZShcclxuICAgICh7IHVybCB9KSA9PiB1cmwub3JpZ2luID09PSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbScgfHwgdXJsLm9yaWdpbiA9PT0gJ2h0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20nLFxyXG4gICAgbmV3IHdvcmtib3guc3RyYXRlZ2llcy5DYWNoZUZpcnN0KHtcclxuICAgICAgY2FjaGVOYW1lOiAnZ29vZ2xlLWZvbnRzJyxcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIG5ldyB3b3JrYm94LmV4cGlyYXRpb24uRXhwaXJhdGlvblBsdWdpbih7XHJcbiAgICAgICAgICBtYXhFbnRyaWVzOiAyMCxcclxuICAgICAgICAgIG1heEFnZVNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCwgLy8gMSB5ZWFyXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHdvcmtib3gucm91dGluZy5yZWdpc3RlclJvdXRlKFxyXG4gICAgKHsgcmVxdWVzdCB9KSA9PiByZXF1ZXN0LmRlc3RpbmF0aW9uID09PSAnc2NyaXB0JyB8fCByZXF1ZXN0LmRlc3RpbmF0aW9uID09PSAnc3R5bGUnLFxyXG4gICAgbmV3IHdvcmtib3guc3RyYXRlZ2llcy5TdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XHJcbiAgICAgIGNhY2hlTmFtZTogJ3N0YXRpYy1yZXNvdXJjZXMnLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICB3b3JrYm94LnJvdXRpbmcucmVnaXN0ZXJSb3V0ZShcclxuICAgICh7IHVybCB9KSA9PiB1cmwub3JpZ2luID09PSAnaHR0cHM6Ly8xcGkwcXRoMi5hcGkuc2FuaXR5LmlvJywgLy8gUmVwbGFjZSB3aXRoIHlvdXIgU2FuaXR5IEFQSSBiYXNlIFVSTFxyXG4gICAgbmV3IHdvcmtib3guc3RyYXRlZ2llcy5OZXR3b3JrRmlyc3Qoe1xyXG4gICAgICBjYWNoZU5hbWU6ICdzYW5pdHktYXBpLWNhY2hlJyxcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIG5ldyB3b3JrYm94LmV4cGlyYXRpb24uRXhwaXJhdGlvblBsdWdpbih7XHJcbiAgICAgICAgICBtYXhFbnRyaWVzOiA1MCwgLy8gTWF4IG51bWJlciBvZiBlbnRyaWVzIHRvIGNhY2hlXHJcbiAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA1ICogNjAsIC8vIENhY2hlIGR1cmF0aW9uIGluIHNlY29uZHMgKDUgbWludXRlcylcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgIH0pXHJcbiAgKTtcclxuICB3b3JrYm94LnJvdXRpbmcuc2V0Q2F0Y2hIYW5kbGVyKGFzeW5jICh7IGV2ZW50IH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gUmVzcG9uc2UuZXJyb3IoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gd29ya2JveC5wcmVjYWNoaW5nLnByZWNhY2hlQW5kUm91dGUoW3sgdXJsOiBGQUxMQkFDS19IVE1MX1VSTCwgcmV2aXNpb246IG51bGwgfV0pO1xyXG5cclxufSBlbHNlIHtcclxuICBjb25zb2xlLmxvZyhgV29ya2JveCBkaWRuJ3QgbG9hZGApO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIGZ1bmN0aW9uICgpIHtcclxuICAvLyBDbGVhciB0aGUgY2FjaGUgd2hlbiB0aGUgZGV2aWNlIGlzIHJlYWR5XHJcbiAgbWVkaWFuLndlYnZpZXcuY2xlYXJDYWNoZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDYWNoZSBjbGVhcmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjbGVhcmluZyBjYWNoZTonLCBlcnJvcik7XHJcbiAgfSk7XHJcbn0sIGZhbHNlKTsiXSwibmFtZXMiOlsiaW1wb3J0U2NyaXB0cyIsIndvcmtib3giLCJjb25zb2xlIiwibG9nIiwiY29yZSIsImNsaWVudHNDbGFpbSIsIm1hbmlmZXN0Iiwic2VsZiIsIl9fV0JfTUFOSUZFU1QiLCJBcnJheSIsImlzQXJyYXkiLCJwcmVjYWNoaW5nIiwicHJlY2FjaGVBbmRSb3V0ZSIsIndhcm4iLCJyb3V0aW5nIiwicmVnaXN0ZXJSb3V0ZSIsInJlcXVlc3QiLCJkZXN0aW5hdGlvbiIsInN0cmF0ZWdpZXMiLCJOZXR3b3JrRmlyc3QiLCJ1cmwiLCJvcmlnaW4iLCJDYWNoZUZpcnN0IiwiY2FjaGVOYW1lIiwicGx1Z2lucyIsImV4cGlyYXRpb24iLCJFeHBpcmF0aW9uUGx1Z2luIiwibWF4RW50cmllcyIsIm1heEFnZVNlY29uZHMiLCJTdGFsZVdoaWxlUmV2YWxpZGF0ZSIsInNldENhdGNoSGFuZGxlciIsImV2ZW50IiwiUmVzcG9uc2UiLCJlcnJvciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lZGlhbiIsIndlYnZpZXciLCJjbGVhckNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./service-worker.js\n"));

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