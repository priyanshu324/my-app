// lib/firebaseClient.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBqaGRrfNRZThHCEaOzhj-Rnyx-HHx_lWA",
  authDomain: "your-project.firebaseapp.com",
  projectId: "testing-pwa-21881",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messagingSenderId",
  appId: "your-appId",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
