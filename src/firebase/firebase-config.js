import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-KXqDIHKWY3ueAtwHlsYRIH-ervW3SjU",
  authDomain: "carrito-artemisa.firebaseapp.com",
  projectId: "carrito-artemisa",
  storageBucket: "carrito-artemisa.firebasestorage.app",
  messagingSenderId: "777616402342",
  appId: "1:777616402342:web:ca689ab5bea9aee9fe5167"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
