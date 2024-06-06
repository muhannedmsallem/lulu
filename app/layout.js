import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Loading from "./components/Loading ";
const inter = Cairo({ subsets: ["latin"] });
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import Sw from "./sw";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, loading }) {
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
