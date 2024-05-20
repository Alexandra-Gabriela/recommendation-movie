import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider, // Obiect provider pentru autentificare Google
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup, // Funcție pentru autentificare cu un popup (ex. autentificare Google)
  signOut,
  updateProfile, 
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import {
  // Funcții pt a afișa notificări de eroare, succes, avertizare
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";

// Crează un context pentru autentificare
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false // Preia utilizatorul curent din session storage
  );
  const navigate = useNavigate(); // Hook pentru a naviga între rute

  useEffect(() => {
    userObserver(); // Începe să observe schimbările de stare ale utilizatorului
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      // Creează un utilizator nou cu email și parolă
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/"); 
      toastSuccessNotify("Înregistrare reușită!"); 
    } catch (error) {
      toastErrorNotify(error.message); 
    }
  };

  const signIn = async (email, password) => {
    // Autentifică un utilizator existent cu email și parolă
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); 
      toastSuccessNotify("Autentificare reușită!");
    } catch (error) {
      toastErrorNotify(error.message); 
    }
  };

  const logOut = () => {
    signOut(auth); // Deconectează utilizatorul curent
  };

  const userObserver = () => {
    // Observă schimbările de stare ale utilizatorului
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Dacă utilizatorul este conectat
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL }); // Setează utilizatorul curent
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL }) // Stochează informațiile utilizatorului în session storage
        );
      } else {
        setCurrentUser(false); 
        sessionStorage.clear(); 
      }
    });
  };

  const signUpProvider = () => {
    const provider = new GoogleAuthProvider(); // Creează un obiect provider pentru autentificare Google
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/"); 
        toastSuccessNotify("Autentificare reușită!"); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Trimite un email de resetare a parolei
        toastWarnNotify("Verifică căsuța de email!"); 
      })
      .catch((err) => {
        toastErrorNotify(err.message);
      });
  };
  const values = {
    createUser,
    signIn,
    logOut,
    signUpProvider,
    forgotPassword,
    currentUser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>; // Oferă contextul de autentificare componentelor copil
};

export default AuthContextProvider;
