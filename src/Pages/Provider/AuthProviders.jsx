import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photourl) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl
        });
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const logout = () => {
        setloading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, logedUser => {
            console.log('From on Auth state change', logedUser);
            setUser(logedUser);
            setloading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        forgetPassword,
        createUser,
        loginUser,
        updateUserProfile,
        logout,
        user, 
        loading,
        googleLogin
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;