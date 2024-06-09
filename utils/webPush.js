import firebase from 'firebase/app';
import 'firebase/messaging';
import localforage from 'localforage';

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token');
  },
  init: async function() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
        measurementId: "YOUR_MEASUREMENT_ID"
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await this.tokenInlocalforage();
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        const status = await Notification.requestPermission();
        if (status && status === 'granted') {
          const fcm_token = await messaging.getToken({
            vapidKey: 'YOUR_VAPID_KEY'
          });
          if (fcm_token) {
            localforage.setItem('fcm_token', fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  }
};

export { firebaseCloudMessaging };
