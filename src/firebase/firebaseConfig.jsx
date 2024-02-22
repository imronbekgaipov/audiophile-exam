import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAczWYyY16BYHTl01R47nkf-hGDzeLMmzM",
  authDomain: "audiophile-1fb88.firebaseapp.com",
  projectId: "audiophile-1fb88",
  storageBucket: "audiophile-1fb88.appspot.com",
  messagingSenderId: "73048212192",
  appId: "1:73048212192:web:dd44fc4494b7a9d71b8685",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };
