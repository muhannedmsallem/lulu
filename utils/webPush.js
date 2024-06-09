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

        apiKey: "AIzaSyCaodAV0N9pB_wyRrktT9ot5duXTjy1NmI",
        authDomain: "lustore-88089.firebaseapp.com",
        projectId: "lustore-88089",
        storageBucket: "lustore-88089.appspot.com",
        messagingSenderId: "1004325553341",
        appId: "1:1004325553341:web:3bd5700d7ee1154c8863d4",
        measurementId: "G-R2R2WP2QXG"
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
            vapidKey: 'YBJwbPEF5EWVF0P5O3bqyHf5ZBVmVHMxy8YtgP4M1KTUUJSeJ0eX94HRpRromqli3RXZFfeub9ZLjskIbjqfz7B8'
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
