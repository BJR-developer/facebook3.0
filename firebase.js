import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-bhgs5WEJovYU7s9jIasvljBhZ8yzkpw",
  authDomain: "facebook30-2f6b6.firebaseapp.com",
  projectId: "facebook30-2f6b6",
  storageBucket: "facebook30-2f6b6.appspot.com",
  messagingSenderId: "259420332810",
  appId: "1:259420332810:web:ed74a2b792ef9f745290f3"
};

export const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore();
export const storage = getStorage();