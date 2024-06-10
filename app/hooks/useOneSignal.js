"use client"

// hooks/useOneSignal.js
import { useEffect } from 'react';

const useOneSignal = () => {
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(function(OneSignal) {
    OneSignal.init({
      appId: "4ff98f18-90a0-42c2-93e2-dc531efff17e",
      // safari_web_id: "YOUR_SAFARI_WEB_ID",
      notifyButton: {
        enable: true,
      },
    });
  });
  console.log(window.OneSignalDeferred);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.OneSignal) {
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(function () {
        window.OneSignal.init({
          appId: '4ff98f18-90a0-42c2-93e2-dc531efff17e',
        });
      });
    }
  }, []);
};


export default useOneSignal;
