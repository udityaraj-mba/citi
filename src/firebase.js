import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBS7UGrK2hPXdL_xxM74EpdkDEBRaUOVhw",
  authDomain: "citi-578d8.firebaseapp.com",
  projectId: "citi-578d8",
  storageBucket: "citi-578d8.firebasestorage.app",
  messagingSenderId: "813989033299",
  appId: "1:813989033299:web:35769008568e47cd3c5da6",
  measurementId: "G-3KEPYPLRS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();