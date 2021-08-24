import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnI92-djcZ-v1jvfmzESWG-shCP2I4TFU",
  authDomain: "block-notas-29b3e.firebaseapp.com",
  projectId: "block-notas-29b3e",
  storageBucket: "block-notas-29b3e.appspot.com",
  messagingSenderId: "264617392924",
  appId: "1:264617392924:web:54c49b00af0bfcaa0118d9",
  measurementId: "G-L1TY0RX31J"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const google = new app.auth.GoogleAuthProvider()

export { db, auth, google, firebaseConfig };