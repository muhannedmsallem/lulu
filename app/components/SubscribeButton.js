"use client";
import { useEffect, useState } from 'react';

const SubscribeButton = () => {
  const [isOneSignalInitialized, setIsOneSignalInitialized] = useState(false);

  useEffect(() => {
    const handleSubscriptionChange = (isSubscribed) => {
      console.log("The user's subscription state is now:", isSubscribed);
    };

    const initializeOneSignal = () => {
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(() => {
        window.OneSignal.init({
          appId: "4ff98f18-90a0-42c2-93e2-dc531efff17e", // Replace with your actual app ID
          allowLocalhostAsSecureOrigin: true,
        });
        window.OneSignal.on('subscriptionChange', handleSubscriptionChange);
        setIsOneSignalInitialized(true);
        console.log('OneSignal is initialized:', window.OneSignal);
      });
    };

    if (typeof window !== 'undefined') {
      if (window.OneSignal) {
        initializeOneSignal();
      } else {
        const interval = setInterval(() => {
          if (window.OneSignal) {
            clearInterval(interval);
            initializeOneSignal();
          }
        }, 100);
      }
    }

    return () => {
      if (typeof window !== 'undefined' && window.OneSignal) {
        window.OneSignal.push(() => {
          window.OneSignal.off('subscriptionChange', handleSubscriptionChange);
        });
      }
    };
  }, []);

  const handleSubscribe = () => {
    if (isOneSignalInitialized) {
      window.OneSignal.push(() => {
        console.log('Before showing slidedown prompt');
        window.OneSignal.showSlidedownPrompt().then(() => {
          window.OneSignal.isPushNotificationsEnabled((isEnabled) => {
            if (isEnabled) {
              console.log('Push notifications are enabled!');
            } else {
              console.log('Push notifications are not enabled yet.');
            }
          });
        });
        console.log('Slidedown prompt shown');
      });
    } else {
      console.log('OneSignal is not initialized yet');
    }
  };

  return (
    <button onClick={handleSubscribe}>
      Subscribe to Notifications
    </button>
  );
};

export default SubscribeButton;
