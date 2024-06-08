importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCaodAV0N9pB_wyRrktT9ot5duXTjy1NmI",
  authDomain: "lustore-88089.firebaseapp.com",
  projectId: "lustore-88089",
  storageBucket: "lustore-88089.appspot.com",
  messagingSenderId: "1004325553341",
  appId: "1:1004325553341:web:3bd5700d7ee1154c8863d4",
  measurementId: "G-R2R2WP2QXG"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, image, icon, ...restPayload } = payload.data;
  const notificationOptions = {
    body,
    icon: image || '/icons/firebase-logo.png',
    data: restPayload,
  };
  return self.registration.showNotification(title, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
  if (event?.notification?.data && event?.notification?.data?.link) {
    self.clients.openWindow(event.notification.data.link);
  }
  event.notification.close();
});

if (workbox) {
  workbox.core.skipWaiting();
  workbox.core.clientsClaim();

  // Precache the files
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

  // Network First strategy for HTML files
  workbox.routing.registerRoute(
    ({request}) => request.destination === 'document',
    new workbox.strategies.NetworkFirst()
  );

  // Cache First strategy for Google Fonts
  workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com' ||
              url.origin === 'https://fonts.gstatic.com',
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

  // Stale While Revalidate strategy for JS and CSS files
  workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );

  // Network First strategy for API requests
  workbox.routing.registerRoute(
    ({url}) => url.pathname.startsWith('/api'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'api-cache',
      networkTimeoutSeconds: 10,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 5 * 60, // 5 minutes
        }),
      ],
    })
  );

  // Fallback to offline page for navigations
  const FALLBACK_HTML_URL = '/offline.html';
  workbox.routing.setCatchHandler(async ({event}) => {
    if (event.request.destination === 'document') {
      return workbox.precaching.matchPrecache(FALLBACK_HTML_URL);
    }
    return Response.error();
  });

  // Precache the fallback offline page
  workbox.precaching.precacheAndRoute([{url: FALLBACK_HTML_URL, revision: null}]);

} else {
  console.log(`Workbox didn't load`);
}
