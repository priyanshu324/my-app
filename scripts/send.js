import fs from "fs";
import path from "path";
import webpush from "web-push";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

// Required when using ES Modules to resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function sendNotifications() {
  // Read and parse the JSON file containing subscriptions
  const rawData = fs.readFileSync(
    path.resolve(__dirname, "../data/subscriptions.json"),
    "utf-8"
  );

  const data = JSON.parse(rawData);

  // If JSON is an array, use it; otherwise expect an object with a 'subscriptions' array
  const subscriptions = Array.isArray(data) ? data : data.subscriptions;

  if (
    !subscriptions ||
    !Array.isArray(subscriptions) ||
    subscriptions.length === 0
  ) {
    console.error("❌ No subscriptions found to send notifications.");
    return;
  }

  // Set VAPID keys for web-push
  webpush.setVapidDetails(
    "mailto:saini.sarkar777@gmail.com",
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );

  let count = 1;

  // Use for...of with await for proper async flow
  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(
        sub,
        JSON.stringify({
          title: "🚀 Hello!",
          body: "This is a test notification.",
        })
      );
      console.log(`✅ Notification sent to #${count}`);
    } catch (err) {
      console.error(`❌ Failed to send to #${count}`, err);
    }
    count++;
  }
}

// Run the async function
sendNotifications();
