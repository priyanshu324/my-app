import fs from "fs";
import path from "path";
import webpush from "web-push";
import dotenv from "dotenv";
dotenv.config();

const subscriptions = JSON.parse(
  fs.readFileSync(path.resolve("data/subscriptions.json"))
);

webpush.setVapidDetails(
  "mailto:saini.sarkar777@gmail.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

subscriptions.forEach(async (sub, index) => {
  try {
    await webpush.sendNotification(
      sub,
      JSON.stringify({
        title: "🚀 Hello!",
        body: "This is a test notification.",
      })
    );
    console.log(`✅ Notification sent to #${index + 1}`);
  } catch (err) {
    console.error(`❌ Failed to send to #${index + 1}`, err);
  }
});
