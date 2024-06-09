"use client"
import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/messaging';
import { firebaseCloudMessaging } from '../utils/webPush';

function Firebase() {
  useEffect(() => {
    async function initializeFirebase() {
      try {
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
        }

        // Request permission for receiving push notifications
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        
        // Get FCM token
        const token = await messaging.getToken();
        console.log('FCM Token:', token);

        // Handle incoming messages when the app is in the foreground
        messaging.onMessage((message) => {
          console.log('Foreground message:', message);
        });
      } catch (error) {
        console.error('Firebase initialization error:', error);
      }
    }

    // Ensure Firebase initialization only after service worker registration
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(() => {
          initializeFirebase();
        })
        .catch((error) => {
          console.error('Service worker registration failed:', error);
        });
    }
  }, []);

  return <div>Woah! wait let me get it right</div>;
}

export default Firebase;
