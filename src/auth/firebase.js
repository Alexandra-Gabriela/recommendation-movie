import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKpOH_zIjKdTeTnzOhKP-Z0tsGFBBONtg",
    authDomain: "movie-picks1.firebaseapp.com",
    projectId: "movie-picks1",
    storageBucket: "movie-picks1.appspot.com",
    messagingSenderId: "653549990495",
    appId: "1:653549990495:web:b170b00fd9b52cae7e61ea",
    measurementId: "G-ENMD3RBT3R"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
