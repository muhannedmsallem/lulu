"use client";
import { useEffect } from "react";

export default function Sw() {
  useEffect(() => {
    console.log('useEffect called');
    if (typeof window !== "undefined") {
      console.log('Window is defined');
      
      // Initialize OneSignal
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(function() {
        window.OneSignal.init({
          appId: 'Y4ff98f18-90a0-42c2-93e2-dc531efff17e',
          allowLocalhostAsSecureOrigin: true,
          notifyButton: {
            enable: true,
          },
        });
      });

      // Register service worker
      if ('serviceWorker' in navigator) {
        console.log('Service Worker is supported');
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
            // OneSignal SDK must be initialized after service worker registration
            window.OneSignal.registerForPushNotifications();
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      } else {
        console.log('Service Worker is not supported');
      }
    } else {
      console.log('Window is not defined');
    }
  }, []);

  return null;
}
