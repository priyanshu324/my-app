import "@/styles/globals.css";
import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then((reg) => {
        console.log("Service Worker registered:", reg);
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
