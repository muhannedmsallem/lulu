"use client";

// components/SubscribeButton.js
import { useEffect } from 'react';

const SubscribeButton = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.OneSignal) {
      window.OneSignal.push(function () {
        window.OneSignal.on('subscriptionChange', function (isSubscribed) {
          console.log('The user\'s subscription state is now:', isSubscribed);
        });
      });
    }
  }, []);

  const handleSubscribe = () => {
    if (typeof window !== 'undefined' && window.OneSignal) {
      window.OneSignal.push(function () {
        window.OneSignal.showSlidedownPrompt();
      });
    }
  };

  return (
    <button onClick={handleSubscribe}>
      Subscribe to Notifications
    </button>
  );
};

export default SubscribeButton;
