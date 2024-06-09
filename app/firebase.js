"use client";
import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

function Firebase() {
  useEffect(() => {
    async function initializeFirebase() {
      try {
        console.log('Initializing Firebase...');
        // Initialize Firebase app if not already initialized
        if (!firebase.apps.length) {
          firebase.initializeApp({
            apiKey: "AIzaSyCaodAV0N9pB_wyRrktT9ot5duXTjy1NmI",
            authDomain: "lustore-88089.firebaseapp.com",
            projectId: "lustore-88089",
            storageBucket: "lustore-88089.appspot.com",
            messagingSenderId: "1004325553341",
            appId: "1:1004325553341:web:3bd5700d7ee1154c8863d4",
            measurementId: "G-R2R2WP2QXG"
          });
          console.log('Firebase initialized');
        }

        // Get FCM token
        const messaging = firebase.messaging();
        console.log('Requesting permission and getting token...');
        const token = await messaging.getToken({
          vapidKey: 'BJwbPEF5EWVF0P5O3bqyHf5ZBVmVHMxy8YtgP4M1KTUUJSeJ0eX94HRpRromqli3RXZFfeub9ZLjskIbjqfz7B8' // Replace with your VAPID key
        });
        console.log('FCM Token:', token);

        // Handle incoming messages when the app is in the foreground
        messaging.onMessage((payload) => {
          console.log('Foreground message:', payload);
          // Display notification when a message is received
          showNotification(payload);
        });
      } catch (error) {
        console.error('Firebase initialization error:', error);
      }
    }

    // Ensure Firebase initialization only after service worker registration
    if ('serviceWorker' in navigator) {
      console.log('Service Worker is supported');
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
          initializeFirebase();
        })
        .catch((error) => {
          console.error('Service worker registration failed:', error);
        });
    } else {
      console.log('Service Worker is not supported');
    }
  }, []);

  // Function to display notification
  function showNotification(payload) {
    let notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon
    }
    let notif = new Notification(payload.notification.title, notificationOptions);
  
    notif.onclick = () => {
      console.log('Notification clicked');
    }
  }

  return <div>Woah! wait let me get it right</div>;
}

export default Firebase;
