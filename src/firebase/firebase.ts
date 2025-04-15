import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6nvQk0gaAVWPiIuux-Cvvq7KGs2jieF4",
  authDomain: "nextjs-rappi-beer.firebaseapp.com",
  projectId: "nextjs-rappi-beer",
  storageBucket: "nextjs-rappi-beer.firebasestorage.app",
  messagingSenderId: "951803282721",
  appId: "1:951803282721:web:48ff3291256097670cea60",
};

export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseDB = getFirestore(FireBaseApp);
