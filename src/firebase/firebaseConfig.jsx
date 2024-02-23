import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-hkDJtbn6pszTuWus8dFxpPlPzh6ewCU",
  authDomain: "exam-1485e.firebaseapp.com",
  projectId: "exam-1485e",
  storageBucket: "exam-1485e.appspot.com",
  messagingSenderId: "435061399107",
  appId: "1:435061399107:web:fdee03057bd6d3a5523ef6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };
