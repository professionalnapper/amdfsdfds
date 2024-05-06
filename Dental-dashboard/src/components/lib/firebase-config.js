import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore"; // Import Firestore functions
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyARS4KemtjHyDlghkLEJjE9FGEsf5xTrmc",
    authDomain: "healthflow-1388c.firebaseapp.com",
    projectId: "healthflow-1388c",
    storageBucket: "healthflow-1388c.appspot.com",
    messagingSenderId: "1095388653221",
    appId: "1:1095388653221:web:d89f333688d1316cafcf4c",
    measurementId: "G-D5F0624JVD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance
const storage = getStorage(app); // Initialize storage properly

export { app, db, auth, storage, analytics, collection, addDoc, query, where, getDocs }; // Export Firestore functions