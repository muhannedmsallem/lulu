"use client";
import { useEffect } from "react";

export default function Sw() {
  useEffect(() => {
    console.log('useEffect called');
    if (typeof window !== "undefined") {
      console.log('Window is defined');
      
      if ('serviceWorker' in navigator) {
        
        console.log('Service Worker is supported');
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
          navigator.serviceWorker.register('/OneSignalSDKWorker.js')

      } else {
        console.log('Service Worker is not supported');
      }
    } else {
      console.log('Window is not defined');
    }
  }, []);

  return null;
}
