// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtioGZi716PqVnEb6szQ0gEbsj2ST9v1I",
  authDomain: "tiendapokemon-d9dbb.firebaseapp.com",
  projectId: "tiendapokemon-d9dbb",
  storageBucket: "tiendapokemon-d9dbb.appspot.com",
  messagingSenderId: "580226260459",
  appId: "1:580226260459:web:0b0887135c2f723578cdae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)