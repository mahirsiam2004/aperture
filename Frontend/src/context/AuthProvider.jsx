import React, { Children, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user,setUser] = useState(null);
  const [loading,setLoading]= useState(true);

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const registerUser = (email, password) => {
        setLoading(true)

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true)
    return signOut(auth);
  };


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      setLoading(false);
    })

    return ()=>{
      unsubscribe();
    }
  },[])


  const authInfo = {
    loginWithGoogle,
    registerUser,
    logoutUser,
    loginUser,
    loading,
    user
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
