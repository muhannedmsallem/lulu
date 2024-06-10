"use client";
import { useEffect, useState } from 'react';

const SubscribeButton = () => {
  const [isOneSignalInitialized, setIsOneSignalInitialized] = useState(false);

  useEffect(() => {
    const handleSubscriptionChange = (isSubscribed) => {
      console.log('The user\'s subscription state is now:', isSubscribed);
    };

    const initializeOneSignal = () => {
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(function () {
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
        window.OneSignal.push(function () {
          window.OneSignal.off('subscriptionChange', handleSubscriptionChange);
        });
      }
    };
  }, []);

  const handleSubscribe = () => {
    if (isOneSignalInitialized) {
      window.OneSignal.push(function () {
        window.OneSignal.showSlidedownPrompt();
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
