import { skipWaiting, clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { NetworkOnly, NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { registerRoute, setDefaultHandler, setCatchHandler } from 'workbox-routing';
import { matchPrecache, precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

skipWaiting();
clientsClaim();

const WB_MANIFEST = self.__WB_MANIFEST;
WB_MANIFEST.push({
  url: '/fallback',
  revision: '1234567890',
});
precacheAndRoute(WB_MANIFEST);

cleanupOutdatedCaches();

const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/_next/static/css/app/layout.css', // Adjust based on actual paths
  '/_next/static/chunks/webpack.js', // Adjust based on actual paths
  '/_next/static/chunks/app/main-app.js', // Adjust based on actual paths
  // Add other assets you want to cache initially
];

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache.map((url) => {
          return cache.add(url).catch((error) => {
            console.error(`Failed to cache ${url}:`, error);
          });
        })
      );
    }).catch((error) => {
      console.error('Failed to open cache:', error);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Cache the start URL with a NetworkFirst strategy
registerRoute(
  '/',
  new NetworkFirst({
    cacheName: 'start-url',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 1,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: true,
      }),
    ],
  }),
  'GET'
);

// Cache Google Fonts with a CacheFirst strategy
registerRoute(
  /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
  new CacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 31536e3,
        purgeOnQuotaError: true,
      }),
    ],
  }),
  'GET'
);

// Cache static font assets with a StaleWhileRevalidate strategy
registerRoute(
  /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-font-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 604800,
        purgeOnQuotaError: true,
      }),
    ],
  }),
  'GET'
);

// Cache static image assets with a NetworkOnly strategy
registerRoute(
  /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
  new NetworkOnly({
    cacheName: 'static-image-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 64,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: true,
      }),
    ],
  }),
  'GET'
);

// Cache static JS assets with a StaleWhileRevalidate strategy
registerRoute(
  /\.(?:js)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-js-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: true,
      }),
    ],
  }),
  'GET'
);

// Cache static CSS assets with a StaleWhileRevalidate strategy
registerRoute(
  /\.(?:css|less)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-style-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: true,
      }),
    ],
  }),
  'GET'
);

// Cache static data assets with a NetworkFirst strategy
registerRoute(
  /\.(?:json|xml|csv)$/i,
  new NetworkFirst({
    cacheName: 'static-data-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: true,
      }),
    ],
  }),
  'GET'
);

// Cache API responses with a NetworkFirst strategy
registerRoute(
  /\/api\/.*$/i,
  new NetworkFirst({
    cacheName: 'apis',
    networkTimeoutSeconds: 10,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 16,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: true,
      }),
    ],
  }),
  'GET'
);

// Cache other requests with a NetworkFirst strategy
registerRoute(
  /.*/i,
  new NetworkFirst({
    cacheName: 'others',
    networkTimeoutSeconds: 10,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: true,
      }),
    ],
  }),
  'GET'
);

// Set the default handler to use a StaleWhileRevalidate strategy
setDefaultHandler(new StaleWhileRevalidate());

// Set the catch handler to provide fallback responses
setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case 'document':
      return matchPrecache('/fallback');
    case 'image':
      return matchPrecache('/static/images/fallback.png');
    default:
      return Response.error();
  }
});
