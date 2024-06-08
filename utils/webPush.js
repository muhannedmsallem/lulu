import 'firebase/messaging';
import firebase from 'firebase/app';
import localforage from 'localforage';

const firebaseConfig = {
  apiKey: "AIzaSyCaodAV0N9pB_wyRrktT9ot5duXTjy1NmI",
  authDomain: "lustore-88089.firebaseapp.com",
  projectId: "lustore-88089",
  storageBucket: "lustore-88089.appspot.com",
  messagingSenderId: "1004325553341",
  appId: "1:1004325553341:web:3bd5700d7ee1154c8863d4",
  measurementId: "G-R2R2WP2QXG"
};

const firebaseCloudMessaging = {
  // Checking whether the token is available in IndexedDB
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token');
  },

  // Initializing Firebase app
  init: async function () {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    try {
      const messaging = firebase.messaging();
      const tokenInLocalForage = await this.tokenInlocalforage();

      // If FCM token is already there, just return the token
      if (tokenInLocalForage !== null) {
        return tokenInLocalForage;
      }

      // Requesting notification permission from the browser
      const status = await Notification.requestPermission();
      if (status && status === 'granted') {
        // Getting token from FCM
        const fcm_token = await messaging.getToken({
          vapidKey: 'BJwbPEF5EWVF0P5O3bqyHf5ZBVmVHMxy8YtgP4M1KTUUJSeJ0eX94HRpRromqli3RXZFfeub9ZLjskIbjqfz7B8'
        });

        if (fcm_token) {
          // Setting FCM token in IndexedDB using localforage
          await localforage.setItem('fcm_token', fcm_token);
          console.log('FCM token:', fcm_token);

          // Return the FCM token after saving it
          return fcm_token;
        }
      }
    } catch (error) {
      console.error('Error initializing Firebase Cloud Messaging:', error);
      return null;
    }

    return null;
  }
};

export { firebaseCloudMessaging };
