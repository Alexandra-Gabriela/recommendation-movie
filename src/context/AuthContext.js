// Importă funcții de autentificare din Firebase Auth
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile, 
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
// Importă hook-ul pentru navigare între rute
import { useNavigate } from "react-router-dom";
// Importă obiectul auth din configurarea Firebase
import { auth } from "../auth/firebase";
// Importă funcții pentru a afișa notificări
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";

// Creează un context pentru autentificare
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // Creează o stare pentru utilizatorul curent, preluat din session storage
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false //daca e logat sau nu
  );
  const navigate = useNavigate(); // Hook pentru navigare între rute

  useEffect(() => {
    // Observă schimbările de stare ale utilizatorului cand se logheaza si se delogheaza
    userObserver();
  }, []);

  //async pentru sincronizare - utilizeaza promise si wait
  const createUser = async (email, password, displayName) => {
    try {
      // Creează un utilizator nou cu email și parolă
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      // Actualizează profilul utilizatorului curent cu un displayName
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/"); // Navighează la ruta principală
      toastSuccessNotify("Înregistrare reușită!"); // Notificare de succes
    } catch (error) {
      toastErrorNotify(error.message); // Notificare de eroare
    }
  };

  const signIn = async (email, password) => {
    // Autentifică un utilizator existent cu email și parolă
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Navighează la ruta principală
      toastSuccessNotify("Autentificare reușită!"); // Notificare de succes
    } catch (error) {
      toastErrorNotify(error.message); // Notificare de eroare
    }
  };

  const logOut = () => {
    // Deconectează utilizatorul curent
    signOut(auth);
  };

  const userObserver = () => {
    // Observă schimbările de stare ale utilizatorului
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Dacă utilizatorul este conectat
        const { email, displayName, photoURL } = user;
        // Setează utilizatorul curent
        setCurrentUser({ email, displayName, photoURL }); 
        // Stochează informațiile utilizatorului în session storage
        sessionStorage.setItem(
          "user",
          //converteste un obiect JS in siruri de caractere JSON, pt stocarea unui obiect 
          JSON.stringify({ email, displayName, photoURL }) 
        );
      } else {
        // Dacă utilizatorul nu este conectat
        setCurrentUser(false); 
        sessionStorage.clear(); // Șterge session storage
      }
    });
  };

  const signUpProvider = () => {
    // Creează un obiect provider pentru autentificare Google
    const provider = new GoogleAuthProvider(); 
    // Autentifică utilizatorul cu un popup (Google)
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/"); // Navighează la ruta principală
        toastSuccessNotify("Autentificare reușită!"); // Notificare de succes
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const forgotPassword = (email) => {
    // Trimite un email de resetare a parolei
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastWarnNotify("Verifică căsuța de email!"); // Notificare de avertizare
      })
      .catch((err) => {
        toastErrorNotify(err.message); // Notificare de eroare
      });
  };

  // Valori și funcții expuse în context
  const values = {
    createUser,
    signIn,
    logOut,
    signUpProvider,
    forgotPassword,
    currentUser,
  };

  // Returnează contextul de autentificare pentru a fi utilizat de componentele copil
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
