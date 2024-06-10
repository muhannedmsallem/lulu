importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

const CACHE_NAME = 'my-cache-v1';
const API_CACHE_NAME = 'api-cache-v1';

const urlsToCache = [
  '/',
  '/shop',
  '/cart',
  // Add more specific URLs if needed
];

// Install Service Worker and cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/') || event.request.url.includes('sanity.io')) {
    event.respondWith(
      caches.open(API_CACHE_NAME).then((cache) => {
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            cache.put(event.request, responseToCache);
            return response;
          })
          .catch(() => {
            return caches.match(event.request).then((response) => {
              if (response) {
                return response;
              } else {
                return caches.match('/offline.html');
              }
            });
          });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        }).catch(() => {
          return caches.match('/offline.html');
        });
      })
    );
  }
});


// Activate Service Worker and remove old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, API_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  self.clients.claim();
});

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

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });

  workbox.routing.setCatchHandler(async ({ event }) => {
    return Response.error();
  });

} else {
  console.log(`Workbox didn't load`);
}


