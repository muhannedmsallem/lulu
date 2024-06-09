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

eval(__webpack_require__.ts("importScripts(\"https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js\");\n// Check if Workbox is loaded\nif (typeof workbox !== \"undefined\") {\n    console.log(\"Workbox is loaded\");\n// Your Workbox code here\n} else {\n    console.log(\"Workbox is not loaded\");\n}\nif (workbox) {\n    workbox.core.clientsClaim();\n    const manifest = [];\n    if (manifest && Array.isArray(manifest)) {\n        workbox.precaching.precacheAndRoute(manifest);\n    } else {\n        console.warn(\"No precache manifest found. precacheAndRoute() may not be effective if the service worker has already finished installing and activating.\");\n    }\n    workbox.routing.registerRoute((param)=>{\n        let { request } = param;\n        return request.destination === \"document\";\n    }, new workbox.strategies.NetworkFirst());\n    workbox.routing.registerRoute((param)=>{\n        let { url } = param;\n        return url.origin === \"https://fonts.googleapis.com\" || url.origin === \"https://fonts.gstatic.com\";\n    }, new workbox.strategies.CacheFirst({\n        cacheName: \"google-fonts\",\n        plugins: [\n            new workbox.expiration.ExpirationPlugin({\n                maxEntries: 20,\n                maxAgeSeconds: 365 * 24 * 60 * 60\n            })\n        ]\n    }));\n    workbox.routing.registerRoute((param)=>{\n        let { request } = param;\n        return request.destination === \"script\" || request.destination === \"style\";\n    }, new workbox.strategies.StaleWhileRevalidate({\n        cacheName: \"static-resources\"\n    }));\n    workbox.routing.registerRoute((param)=>{\n        let { url } = param;\n        return url.origin === \"https://1pi0qth2.api.sanity.io\";\n    }, new NetworkFirst({\n        cacheName: \"sanity-api-cache\",\n        plugins: [\n            new ExpirationPlugin({\n                maxEntries: 50,\n                maxAgeSeconds: 5 * 60\n            })\n        ]\n    }));\n    workbox.routing.setCatchHandler(async (param)=>{\n        let { event } = param;\n        return Response.error();\n    });\n// workbox.precaching.precacheAndRoute([{ url: FALLBACK_HTML_URL, revision: null }]);\n} else {\n    console.log(\"Workbox didn't load\");\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlLXdvcmtlci5qcyIsIm1hcHBpbmdzIjoiQUFDQUEsY0FBYztBQUVkLDZCQUE2QjtBQUM3QixJQUFJLE9BQU9DLFlBQVksYUFBYTtJQUNsQ0MsUUFBUUMsR0FBRyxDQUFDO0FBQ1oseUJBQXlCO0FBQzNCLE9BQU87SUFDTEQsUUFBUUMsR0FBRyxDQUFDO0FBQ2Q7QUFFQSxJQUFJRixTQUFTO0lBQ1hBLFFBQVFHLElBQUksQ0FBQ0MsWUFBWTtJQUV6QixNQUFNQyxXQUFXQyxLQUFLQyxhQUFhO0lBQ25DLElBQUlGLFlBQVlHLE1BQU1DLE9BQU8sQ0FBQ0osV0FBVztRQUN2Q0wsUUFBUVUsVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQ047SUFDdEMsT0FBTztRQUNMSixRQUFRVyxJQUFJLENBQUM7SUFDZjtJQUVBWixRQUFRYSxPQUFPLENBQUNDLGFBQWEsQ0FDM0I7WUFBQyxFQUFFQyxPQUFPLEVBQUU7ZUFBS0EsUUFBUUMsV0FBVyxLQUFLO09BQ3pDLElBQUloQixRQUFRaUIsVUFBVSxDQUFDQyxZQUFZO0lBR3JDbEIsUUFBUWEsT0FBTyxDQUFDQyxhQUFhLENBQzNCO1lBQUMsRUFBRUssR0FBRyxFQUFFO2VBQUtBLElBQUlDLE1BQU0sS0FBSyxrQ0FBa0NELElBQUlDLE1BQU0sS0FBSztPQUM3RSxJQUFJcEIsUUFBUWlCLFVBQVUsQ0FBQ0ksVUFBVSxDQUFDO1FBQ2hDQyxXQUFXO1FBQ1hDLFNBQVM7WUFDUCxJQUFJdkIsUUFBUXdCLFVBQVUsQ0FBQ0MsZ0JBQWdCLENBQUM7Z0JBQ3RDQyxZQUFZO2dCQUNaQyxlQUFlLE1BQU0sS0FBSyxLQUFLO1lBQ2pDO1NBQ0Q7SUFDSDtJQUdGM0IsUUFBUWEsT0FBTyxDQUFDQyxhQUFhLENBQzNCO1lBQUMsRUFBRUMsT0FBTyxFQUFFO2VBQUtBLFFBQVFDLFdBQVcsS0FBSyxZQUFZRCxRQUFRQyxXQUFXLEtBQUs7T0FDN0UsSUFBSWhCLFFBQVFpQixVQUFVLENBQUNXLG9CQUFvQixDQUFDO1FBQzFDTixXQUFXO0lBQ2I7SUFHRnRCLFFBQVFhLE9BQU8sQ0FBQ0MsYUFBYSxDQUMzQjtZQUFDLEVBQUVLLEdBQUcsRUFBRTtlQUFLQSxJQUFJQyxNQUFNLEtBQUs7T0FDNUIsSUFBSUYsYUFBYTtRQUNmSSxXQUFXO1FBQ1hDLFNBQVM7WUFDUCxJQUFJRSxpQkFBaUI7Z0JBQ25CQyxZQUFZO2dCQUNaQyxlQUFlLElBQUk7WUFDckI7U0FDRDtJQUNIO0lBRUYzQixRQUFRYSxPQUFPLENBQUNnQixlQUFlLENBQUM7WUFBTyxFQUFFQyxLQUFLLEVBQUU7UUFFOUMsT0FBT0MsU0FBU0MsS0FBSztJQUN2QjtBQUVBLHFGQUFxRjtBQUV2RixPQUFPO0lBQ0wvQixRQUFRQyxHQUFHLENBQUU7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlLXdvcmtlci5qcz9jOTAxIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnRTY3JpcHRzKCdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vd29ya2JveC1jZG4vcmVsZWFzZXMvNi4xLjUvd29ya2JveC1zdy5qcycpO1xyXG5cclxuLy8gQ2hlY2sgaWYgV29ya2JveCBpcyBsb2FkZWRcclxuaWYgKHR5cGVvZiB3b3JrYm94ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIGNvbnNvbGUubG9nKCdXb3JrYm94IGlzIGxvYWRlZCcpO1xyXG4gIC8vIFlvdXIgV29ya2JveCBjb2RlIGhlcmVcclxufSBlbHNlIHtcclxuICBjb25zb2xlLmxvZygnV29ya2JveCBpcyBub3QgbG9hZGVkJyk7XHJcbn1cclxuXHJcbmlmICh3b3JrYm94KSB7XHJcbiAgd29ya2JveC5jb3JlLmNsaWVudHNDbGFpbSgpO1xyXG5cclxuICBjb25zdCBtYW5pZmVzdCA9IHNlbGYuX19XQl9NQU5JRkVTVDtcclxuICBpZiAobWFuaWZlc3QgJiYgQXJyYXkuaXNBcnJheShtYW5pZmVzdCkpIHtcclxuICAgIHdvcmtib3gucHJlY2FjaGluZy5wcmVjYWNoZUFuZFJvdXRlKG1hbmlmZXN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS53YXJuKCdObyBwcmVjYWNoZSBtYW5pZmVzdCBmb3VuZC4gcHJlY2FjaGVBbmRSb3V0ZSgpIG1heSBub3QgYmUgZWZmZWN0aXZlIGlmIHRoZSBzZXJ2aWNlIHdvcmtlciBoYXMgYWxyZWFkeSBmaW5pc2hlZCBpbnN0YWxsaW5nIGFuZCBhY3RpdmF0aW5nLicpO1xyXG4gIH1cclxuXHJcbiAgd29ya2JveC5yb3V0aW5nLnJlZ2lzdGVyUm91dGUoXHJcbiAgICAoeyByZXF1ZXN0IH0pID0+IHJlcXVlc3QuZGVzdGluYXRpb24gPT09ICdkb2N1bWVudCcsXHJcbiAgICBuZXcgd29ya2JveC5zdHJhdGVnaWVzLk5ldHdvcmtGaXJzdCgpXHJcbiAgKTtcclxuXHJcbiAgd29ya2JveC5yb3V0aW5nLnJlZ2lzdGVyUm91dGUoXHJcbiAgICAoeyB1cmwgfSkgPT4gdXJsLm9yaWdpbiA9PT0gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20nIHx8IHVybC5vcmlnaW4gPT09ICdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJyxcclxuICAgIG5ldyB3b3JrYm94LnN0cmF0ZWdpZXMuQ2FjaGVGaXJzdCh7XHJcbiAgICAgIGNhY2hlTmFtZTogJ2dvb2dsZS1mb250cycsXHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBuZXcgd29ya2JveC5leHBpcmF0aW9uLkV4cGlyYXRpb25QbHVnaW4oe1xyXG4gICAgICAgICAgbWF4RW50cmllczogMjAsXHJcbiAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAsIC8vIDEgeWVhclxyXG4gICAgICAgIH0pLFxyXG4gICAgICBdLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICB3b3JrYm94LnJvdXRpbmcucmVnaXN0ZXJSb3V0ZShcclxuICAgICh7IHJlcXVlc3QgfSkgPT4gcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ3NjcmlwdCcgfHwgcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ3N0eWxlJyxcclxuICAgIG5ldyB3b3JrYm94LnN0cmF0ZWdpZXMuU3RhbGVXaGlsZVJldmFsaWRhdGUoe1xyXG4gICAgICBjYWNoZU5hbWU6ICdzdGF0aWMtcmVzb3VyY2VzJyxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgd29ya2JveC5yb3V0aW5nLnJlZ2lzdGVyUm91dGUoXHJcbiAgICAoeyB1cmwgfSkgPT4gdXJsLm9yaWdpbiA9PT0gJ2h0dHBzOi8vMXBpMHF0aDIuYXBpLnNhbml0eS5pbycsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIFNhbml0eSBBUEkgYmFzZSBVUkxcclxuICAgIG5ldyBOZXR3b3JrRmlyc3Qoe1xyXG4gICAgICBjYWNoZU5hbWU6ICdzYW5pdHktYXBpLWNhY2hlJyxcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIG5ldyBFeHBpcmF0aW9uUGx1Z2luKHtcclxuICAgICAgICAgIG1heEVudHJpZXM6IDUwLCAvLyBNYXggbnVtYmVyIG9mIGVudHJpZXMgdG8gY2FjaGVcclxuICAgICAgICAgIG1heEFnZVNlY29uZHM6IDUgKiA2MCwgLy8gQ2FjaGUgZHVyYXRpb24gaW4gc2Vjb25kcyAoNSBtaW51dGVzKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICBdLFxyXG4gICAgfSlcclxuICApO1xyXG4gIHdvcmtib3gucm91dGluZy5zZXRDYXRjaEhhbmRsZXIoYXN5bmMgKHsgZXZlbnQgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiBSZXNwb25zZS5lcnJvcigpO1xyXG4gIH0pO1xyXG5cclxuICAvLyB3b3JrYm94LnByZWNhY2hpbmcucHJlY2FjaGVBbmRSb3V0ZShbeyB1cmw6IEZBTExCQUNLX0hUTUxfVVJMLCByZXZpc2lvbjogbnVsbCB9XSk7XHJcblxyXG59IGVsc2Uge1xyXG4gIGNvbnNvbGUubG9nKGBXb3JrYm94IGRpZG4ndCBsb2FkYCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImltcG9ydFNjcmlwdHMiLCJ3b3JrYm94IiwiY29uc29sZSIsImxvZyIsImNvcmUiLCJjbGllbnRzQ2xhaW0iLCJtYW5pZmVzdCIsInNlbGYiLCJfX1dCX01BTklGRVNUIiwiQXJyYXkiLCJpc0FycmF5IiwicHJlY2FjaGluZyIsInByZWNhY2hlQW5kUm91dGUiLCJ3YXJuIiwicm91dGluZyIsInJlZ2lzdGVyUm91dGUiLCJyZXF1ZXN0IiwiZGVzdGluYXRpb24iLCJzdHJhdGVnaWVzIiwiTmV0d29ya0ZpcnN0IiwidXJsIiwib3JpZ2luIiwiQ2FjaGVGaXJzdCIsImNhY2hlTmFtZSIsInBsdWdpbnMiLCJleHBpcmF0aW9uIiwiRXhwaXJhdGlvblBsdWdpbiIsIm1heEVudHJpZXMiLCJtYXhBZ2VTZWNvbmRzIiwiU3RhbGVXaGlsZVJldmFsaWRhdGUiLCJzZXRDYXRjaEhhbmRsZXIiLCJldmVudCIsIlJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./service-worker.js\n"));

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