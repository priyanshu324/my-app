const webpush = require("web-push");
const { subscriptions } = require("../src/pages/api/save-subscription.js");

const VAPID_PUBLIC_KEY =
  "BBxXmZVvJcvQbAFdX9rAiK62pui31gTfrL3VTDwzhmWJdOVGsBiwp9007JPjCSLglGX3tn7pSRREEDR4xsa6djc";
const VAPID_PRIVATE_KEY = "dp0VkIs8SrUEsQ_1vFi95bp-nCnCRWzRX5i2_0sYSxM";

webpush.setVapidDetails(
  "mailto:sainipriyanshu324@gmail.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

const payload = JSON.stringify({
  title: "Hello from PWA",
  body: "Push notification without Firebase!",
});

subscriptions.forEach((sub) => {
  webpush.sendNotification(sub, payload).catch(console.error);
});
