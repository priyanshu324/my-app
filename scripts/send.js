const webpush = require("web-push");
const fs = require("fs");

const subscriptions = JSON.parse(fs.readFileSync("data/subscriptions.json"));

const VAPID_PUBLIC_KEY =
  "BBxXmZVvJcvQbAFdX9rAiK62pui31gTfrL3VTDwzhmWJdOVGsBiwp9007JPjCSLglGX3tn7pSRREEDR4xsa6djc";
const VAPID_PRIVATE_KEY = "dp0VkIs8SrUEsQ_1vFi95bp-nCnCRWzRX5i2_0sYSxM";

webpush.setVapidDetails(
  "mailto:saini.sarkar777@gmail.com",
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
