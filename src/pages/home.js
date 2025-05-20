import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker.register("/sw.js").then(async (registration) => {
        console.log("Service Worker registered:", registration);

        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            "BBmU21TTPzmPm6JpUnkqQC5Qy2xFBoabjrQxQdsr7hjZbliR4GVMnhP88rFCX1c4Zklo9TxJ41t2iYWeIUPZZWU"
          ),
        });

        console.log("Push Subscription:", subscription);

        // 👉 Send subscription to your backend to store
        await fetch("/api/save-subscription", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(subscription),
        });
      });
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to Home Page</h1>
      <p>Notifications will be sent even when offline ✅</p>
    </div>
  );
}

// Helper
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const raw = atob(base64);
  return Uint8Array.from([...raw].map((char) => char.charCodeAt(0)));
}
