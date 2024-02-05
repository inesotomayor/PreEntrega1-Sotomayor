import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { readFileSync } from 'fs';
import productos from './data-nueva-para-exportar.js';

// Firebase DB data:
const firebaseConfig = {
    apiKey: "AIzaSyDV_QlRFSjZN6JHgU8LejDETmPMsE8X9Go",
    authDomain: "inesotomayor-store.firebaseapp.com",
    projectId: "inesotomayor-store",
    storageBucket: "inesotomayor-store.appspot.com",
    messagingSenderId: "581857926483",
    appId: "1:581857926483:web:11b604cc6658a8a21755a6"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionRef = collection(db, 'productos'); //Editar la colección si corresponde. 

// Lee el archivo JS con el array a subir
const dataArray = productos

// Loop por cada archivo y lo sube a la coleccion de referencia. 
dataArray.forEach(async (data) => {
  try {
    const docRef = await addDoc(collectionRef, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});

// Ejecutar en consola "node exportar-js-a-firebase.js" para correr el script