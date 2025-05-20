const webpush = require("web-push");
const fs = require("fs");

const subscriptions = JSON.parse(fs.readFileSync("data/subscriptions.json"));

const VAPID_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const VAPID_PRIVATE_KEY = "YOUR_PRIVATE_KEY";

webpush.setVapidDetails(
  "mailto:admin@example.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

console.log("📦 Total Subscriptions:", subscriptions.length);

if (subscriptions.length === 0) {
  console.log("⚠️ No subscriptions found. Add some to subscriptions.json");
  process.exit();
}

const payload = JSON.stringify({
  title: "Hello from PWA",
  body: "Push notification without Firebase!",
});

subscriptions.forEach((sub, index) => {
  webpush
    .sendNotification(sub, payload)
    .then(() => {
      console.log(`✅ Notification sent to subscription #${index + 1}`);
    })
    .catch((err) => {
      console.error(`❌ Failed to send notification #${index + 1}`, err);
    });
});
