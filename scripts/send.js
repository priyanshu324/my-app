const webpush = require("web-push");
const { subscriptions } = require("../pages/api/save-subscription.js");
// import { subscriptions } from "../src/pages/api/save-subscription.js"; // correct path

const VAPID_PUBLIC_KEY =
  "BBxXmZVvJcvQbAFdX9rAiK62pui31gTfrL3VTDwzhmWJdOVGsBiwp9007JPjCSLglGX3tn7pSRREEDR4xsa6djc";
const VAPID_PRIVATE_KEY = "dp0VkIs8SrUEsQ_1vFi95bp-nCnCRWzRX5i2_0sYSxM";

webpush.setVapidDetails(
  "mailto:admin@example.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

const payload = JSON.stringify({
  title: "Hello from PWA",
  body: "this is normal Push notification !",
});

subscriptions.forEach((sub) => {
  webpush.sendNotification(sub, payload).catch(console.error);
});
