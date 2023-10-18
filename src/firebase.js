// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFgL_VAgeDrcgH38z3uUxW8WRLxPAGtbE",
  authDomain: "pizza-place-297e6.firebaseapp.com",
  projectId: "pizza-place-297e6",
  storageBucket: "pizza-place-297e6.appspot.com",
  messagingSenderId: "1095896046488",
  appId: "1:1095896046488:web:063c26c55b0a5f611de9ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const dbPizzasRef = collection(db, "pizzas");
export const dbOrdersRef = collection(db, "orders");
export const dbUsersRef = collection(db, "users");
