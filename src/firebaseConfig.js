// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcErxURQRX_Y6etGEo5YsttstHyAc7O1A",
  authDomain: "tierra-colorada-3e81e.firebaseapp.com",
  projectId: "tierra-colorada-3e81e",
  storageBucket: "tierra-colorada-3e81e.appspot.com",
  messagingSenderId: "482142755163",
  appId: "1:482142755163:web:354e97ac1357df0f77e27e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db