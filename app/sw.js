"use client";
import { useEffect } from "react";

export default function Sw() {
  useEffect(() => {
    console.log('useEffect called');
    if (typeof window !== "undefined") {
      console.log('Window is defined');
      
      // Register service worker
      if ('serviceWorker' in navigator) {
        console.log('Service Worker is supported');
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);

            // Initialize PushAlert after the service worker is registered
            (function(d, t) {
              var g = d.createElement(t),
                  s = d.getElementsByTagName(t)[0];
              g.src = "https://cdn.pushalert.co/integrate_4ff98f18-90a0-42c2-93e2-dc531efff17e.js";
              s.parentNode.insertBefore(g, s);
            })(document, "script");

            // Wait for PushAlert to be ready
            document.addEventListener("pa-initialized", function() {
              // PushAlert is ready, now prompt the user to subscribe
              if (window.PushAlertCo) {
                window.PushAlertCo.triggerOptIn();
                console.log('PushAlert prompt triggered');
              }
            });
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
