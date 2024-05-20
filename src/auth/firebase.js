import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKpOH_zIjKdTeTnzOhKP-Z0tsGFBBONtg",
    authDomain: "movie-picks1.firebaseapp.com",
    projectId: "movie-picks1",
    storageBucket: "movie-picks1.appspot.com",
    messagingSenderId: "653549990495",
    appId: "1:653549990495:web:b170b00fd9b52cae7e61ea",
    measurementId: "G-ENMD3RBT3R"
};
// Initializare Firebase
const app = initializeApp(firebaseConfig);

// Initializare Firebase Authentication 
export const auth = getAuth(app);
