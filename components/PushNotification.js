import React, { useEffect } from "react";
import { messaging, getToken, onMessage } from "../lib/firebaseClient";

const PushNotification = () => {
  useEffect(() => {
    // Request permission to send notifications
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // Get FCM token
        getToken(messaging, { vapidKey: "YOUR_WEB_PUSH_CERTIFICATE_KEY" })
          .then((currentToken) => {
            if (currentToken) {
              console.log("FCM Token:", currentToken);
              // TODO: Send this token to your backend and save for sending notifications
            } else {
              console.log("No registration token available.");
            }
          })
          .catch((err) => {
            console.error("An error occurred while retrieving token. ", err);
          });
      } else {
        console.log("Notification permission denied");
      }
    });

    // Listen for foreground messages
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // Show notification or update UI as required
    });
  }, []);

  return <div>Push Notifications Enabled (Check console for token)</div>;
};

export default PushNotification;
