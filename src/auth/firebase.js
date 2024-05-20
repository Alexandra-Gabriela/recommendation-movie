import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = { 
    apiKey: "AIzaSyAsCpFj6lU2Vu338ruOfdMs_Nfz6QrCEsE",
    authDomain: "cosmina-119b5.firebaseapp.com",
    projectId: "cosmina-119b5",
    storageBucket: "cosmina-119b5.appspot.com",
    messagingSenderId: "91507145123",
    appId: "1:91507145123:web:d1c5bb9f0f1d463b96c216"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
