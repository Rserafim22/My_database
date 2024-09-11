// Importation des fonctions nécessaires des SDK Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage"; // Importation pour Firebase Storage

// Configuration de Firebase pour l'application web
const firebaseConfig = {
  apiKey: "AIzaSyDoeTndtaGXkvn8ZYssuZRLD1RZhik_mMg",
  authDomain: "testcoderafi.firebaseapp.com",
  projectId: "testcoderafi",
  databaseURL: "https://testcoderafi-default-rtdb.europe-west1.firebasedatabase.app", // URL de la Realtime Database
  storageBucket: "testcoderafi.appspot.com",
  messagingSenderId: "682809871602",
  appId: "1:682809871602:web:b7e874cfbda933ce13d46b"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation des services Firebase
const auth = getAuth(app);          // Service d'authentification
const db = getDatabase(app);        // Service de base de données en temps réel (Realtime Database)
const storage = getStorage(app);    // Service de stockage (Firebase Storage)

// Exportation des services Firebase pour les utiliser dans d'autres parties de l'application
export { app, auth, db, storage };
