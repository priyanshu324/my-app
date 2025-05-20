import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "../firebase"; // adjust the path as per your setup

export default function Home() {
  useEffect(() => {
    const requestPermissionAndGetToken = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") {
          console.warn("🔕 Notification permission denied");
          return;
        }

        const registration = await navigator.serviceWorker.register(
          "/firebase-messaging-sw.js"
        );

        await navigator.serviceWorker.ready;

        const currentToken = await getToken(messaging, {
          vapidKey: "YOUR_PUBLIC_VAPID_KEY", // Replace with your actual VAPID key
          serviceWorkerRegistration: registration,
        });

        if (currentToken) {
          console.log("✅ FCM Token:", currentToken);
        } else {
          console.warn("🚫 No token received.");
        }
      } catch (error) {
        console.error("🔥 Error getting FCM token:", error);
      }
    };

    if ("serviceWorker" in navigator && "Notification" in window) {
      requestPermissionAndGetToken();
    }
  }, []);

  return (
    <div>
      <h1>Welcome to FCM Notification App</h1>
    </div>
  );
}
