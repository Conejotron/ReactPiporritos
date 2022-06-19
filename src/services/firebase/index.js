
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCc5bh2SImKUPUDxcffeTKnidMlBy1inpo",
  authDomain: "backend31865-b5183.firebaseapp.com",
  projectId: "backend31865-b5183",
  storageBucket: "backend31865-b5183.appspot.com",
  messagingSenderId: "789307900367",
  appId: "1:789307900367:web:22e17052dda2d6d7b7d2ba"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const dbase = getFirestore(app)