// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhpXBuXz2SOtp9dMne_7Z3VpBCIIvqYJ4",
  authDomain: "remeras-misioneras.firebaseapp.com",
  projectId: "remeras-misioneras",
  storageBucket: "remeras-misioneras.appspot.com",
  messagingSenderId: "726418776072",
  appId: "1:726418776072:web:1c61bbceb8c3b1d95a31bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db