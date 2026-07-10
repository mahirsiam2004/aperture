import React, { Children } from 'react'
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = ()=>{
      return signInWithPopup(auth,googleProvider);
    }


    const registerUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password);
    }


    const loginUser=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password);
    }

const authInfo={
loginWithGoogle,
registerUser
}


  return (
    <AuthContext value={authInfo}  >
        {children}
    </AuthContext>
  )
}

export default AuthProvider