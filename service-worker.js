
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// Check if Workbox is loaded
if (typeof workbox !== 'undefined') {
  console.log('Workbox is loaded');
  // Your Workbox code here
} else {
  console.log('Workbox is not loaded');
}

if (workbox) {
  workbox.core.clientsClaim();

  const manifest = self.__WB_MANIFEST;
  if (manifest && Array.isArray(manifest)) {
    workbox.precaching.precacheAndRoute(manifest);
  } else {
    console.warn('No precache manifest found. precacheAndRoute() may not be effective if the service worker has already finished installing and activating.');
  }

  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'document',
    new workbox.strategies.NetworkFirst()
  );

  workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 20,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script' || request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );

  workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://1pi0qth2.api.sanity.io', // Replace with your Sanity API base URL
    new workbox.strategies.NetworkFirst({
      cacheName: 'sanity-api-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50, // Max number of entries to cache
          maxAgeSeconds: 5 * 60, // Cache duration in seconds (5 minutes)
        }),
      ],
    })
  );
  workbox.routing.setCatchHandler(async ({ event }) => {

    return Response.error();
  });

  // workbox.precaching.precacheAndRoute([{ url: FALLBACK_HTML_URL, revision: null }]);

} else {
  console.log(`Workbox didn't load`);
}

document.addEventListener('deviceready', function () {
  // Clear the cache when the device is ready
  median.webview.clearCache(function () {
      console.log('Cache cleared successfully');
  }, function (error) {
      console.error('Error clearing cache:', error);
  });
}, false);