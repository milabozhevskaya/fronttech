import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoIH6rXdBRwhu_50ocRUTXZqvmTGlPMeI",
  authDomain: "computer-club-mi.firebaseapp.com",
  databaseURL:
    "https://computer-club-mi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "computer-club-mi",
  storageBucket: "computer-club-mi.appspot.com",
  messagingSenderId: "507244352828",
  appId: "1:507244352828:web:fd5044db4bb50958c73a39",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
