import fs from "fs";
import path from "path";
import webpush from "web-push";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

// Required when using ES Modules to resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse the JSON file
const subscriptions = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "../data/subscriptions.json"),
    "utf-8"
  )
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
