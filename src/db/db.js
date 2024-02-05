import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase database info:

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV_QlRFSjZN6JHgU8LejDETmPMsE8X9Go",
  authDomain: "inesotomayor-store.firebaseapp.com",
  projectId: "inesotomayor-store",
  storageBucket: "inesotomayor-store.appspot.com",
  messagingSenderId: "581857926483",
  appId: "1:581857926483:web:11b604cc6658a8a21755a6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Que se autoejecute:
initializeApp(firebaseConfig);

const db = getFirestore()
export default db