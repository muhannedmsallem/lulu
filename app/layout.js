import { Cairo } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import Loading from "./components/Loading ";
const inter = Cairo({ subsets: ["latin"] });
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import Sw from "./sw";
import firebase from 'firebase/app';
import 'firebase/messaging'; // If you're using Firebase Messaging

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const firebaseConfig = {
  apiKey: "AIzaSyCaodAV0N9pB_wyRrktT9ot5duXTjy1NmI",
  authDomain: "lustore-88089.firebaseapp.com",
  projectId: "lustore-88089",
  storageBucket: "lustore-88089.appspot.com",
  messagingSenderId: "1004325553341",
  appId: "1:1004325553341:web:3bd5700d7ee1154c8863d4",
  measurementId: "G-R2R2WP2QXG"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}export default function RootLayout({ children, loading }) {
  return (
    <html lang="en" data-theme="fantasy" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
          {/* <script src="../public/onesignal.js" async=""></script> */}
          </head>
      <body className={inter.className}>
        <Sw />
        {loading ? <Loading /> : children}
        <div className="w-full h-20 bg-white"></div>
        <Header />
      </body>
    </html>
  );
}
