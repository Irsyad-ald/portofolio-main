// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase Anda yang sudah diisi lengkap
const firebaseConfig = {
  apiKey: "AIzaSyCI2jYQmOOh-yJY3Ltg13SpOTTWM9eYDFY",
  authDomain: "my-portofolio-baf7d.firebaseapp.com",
  databaseURL: "https://my-portofolio-baf7d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portofolio-baf7d",
  storageBucket: "my-portofolio-baf7d.firebasestorage.app",
  messagingSenderId: "182561180743",
  appId: "1:182561180743:web:9ae644afe353e1bc027562",
  measurementId: "G-402BDF5NK3"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);