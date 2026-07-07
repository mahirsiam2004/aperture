import React, { Children } from 'react'
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = ()=>{
      return signInWithPopup(auth,googleProvider);
    }

const authInfo={
loginWithGoogle,

}


  return (
    <AuthContext value={authInfo}  >
        {children}
    </AuthContext>
  )
}

export default AuthProvider