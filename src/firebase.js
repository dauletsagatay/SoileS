import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "ds-chat-app-1fb88.firebaseapp.com",
  projectId: "ds-chat-app-1fb88",
  storageBucket: "ds-chat-app-1fb88.appspot.com",
  messagingSenderId: "405350961309",
  appId: "1:405350961309:web:733eae7f637a23c03fc474",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
