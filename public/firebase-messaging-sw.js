// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBqaGRrfNRZThHCEaOzhj-Rnyx-HHx_lWA",
  authDomain: "your-project.firebaseapp.com",
  projectId: "testing-pwa-21881",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messagingSenderId",
  appId: "your-appId",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
