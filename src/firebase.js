// Importa las funciones necesarias desde el SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase de tu aplicación
const firebaseConfig = {
  apiKey: "AIzaSyAN7a-UEcC_F1SuVjWnpNXKaQcZCri_AUE",
  authDomain: "proyecto-ecommerce-2024.firebaseapp.com",
  projectId: "proyecto-ecommerce-2024",
  storageBucket: "proyecto-ecommerce-2024.appspot.com",
  messagingSenderId: "395215339507",
  appId: "1:395215339507:web:034f732b03af1d6b055c86"
};

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Obtén la instancia de autenticación
const auth = getAuth(firebaseApp);

// Exporta la instancia de autenticación
export { auth };
