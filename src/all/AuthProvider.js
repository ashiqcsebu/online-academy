import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider ,
  signInWithPopup,
} from "firebase/auth";
import app from '../../firebase/firebase.config'

const auth = getAuth(app);
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

  const [user, setuser] = useState(null);
  const [loadding, setloadding] = useState(true);

  
  const registration = (email, password) => {
    setloadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setloadding(true);
    return signOut(auth);
  };

  const googleSignin =() =>{
    return signInWithPopup(auth, provider)
  }

  const logIn = (email, password) => {
    setloadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloadding(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    registration,
    user,
    logout,
    logIn,
    loadding,
    googleSignin,
    setuser
  };
  return (

    <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;









// import React from 'react';
// import { createContext } from 'react';
// import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
// import app from '../../firebase/firebase.config';
// import { useState } from 'react';
// import { useEffect } from 'react';

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const login = (email, password) =>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     const logOut = () =>{
//         localStorage.removeItem('genius-token');
//         return signOut(auth);
//     }

//     useEffect( () =>{
//         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
//             console.log(currentUser);
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return () =>{
//             return unsubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user, 
//         loading,
//         createUser, 
//         login, 
//         logOut
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;