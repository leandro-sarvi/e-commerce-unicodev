// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_emDvHYOaHJ-JvVBVfoY9eXKLSSzXioo",
  authDomain: "eccomerce-unicodev.firebaseapp.com",
  projectId: "eccomerce-unicodev",
  storageBucket: "eccomerce-unicodev.appspot.com",
  messagingSenderId: "157569264984",
  appId: "1:157569264984:web:98861a3783e3522d90892d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
