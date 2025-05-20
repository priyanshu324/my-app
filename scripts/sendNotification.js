import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const sendNotification = async (token, title, body) => {
  const message = {
    to: token,
    notification: {
      title,
      body,
    },
  };

  const response = await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      Authorization: `key=${process.env.FIREBASE_SERVER_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Failed to send notification: ${errText}`);
  }

  console.log("✅ Notification sent successfully");
};

// TEST: Replace this token with one received from client
(async () => {
  try {
    const testToken = "YOUR_CLIENT_DEVICE_FCM_TOKEN_HERE";
    await sendNotification(
      testToken,
      "Hello from Firebase",
      "This is a test notification."
    );
  } catch (err) {
    console.error(err);
  }
})();
