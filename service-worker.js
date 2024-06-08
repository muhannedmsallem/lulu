importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js');
importScripts('https://cdn.pushalert.co/integrate_4ff98f18-90a0-42c2-93e2-dc531efff17e.js');

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

// Workbox setup (your previous setup here)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

if (workbox) {
  workbox.core.skipWaiting();
  workbox.core.clientsClaim();

  // Your Workbox routing and caching strategies
  workbox.routing.registerRoute(
    '/',
    new workbox.strategies.NetworkFirst({
      cacheName: 'start-url',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 1,
          maxAgeSeconds: 86400,
          purgeOnQuotaError: true,
        }),
      ],
    })
  );

  // Other routes and strategies...
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}