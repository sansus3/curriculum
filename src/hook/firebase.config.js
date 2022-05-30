// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf7sAuT7evQoQDpz5IA1ZJtcAvqLSksBo",
  authDomain: "curriculum-vitae-xurxo.firebaseapp.com",
  projectId: "curriculum-vitae-xurxo",
  storageBucket: "curriculum-vitae-xurxo.appspot.com",
  messagingSenderId: "627628995874",
  appId: "1:627628995874:web:201473e30c1f3a2c0ee17b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

