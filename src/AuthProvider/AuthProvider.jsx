import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../Firebase/firebase.config';
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); 

    // Save theme to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Register User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // User SignIn
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google Sign In
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Github Sign In
    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    };

    // User Update
    const updateUser = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl,
        });
    };

    // Log out
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Observing : ", currentUser);

            // Token Purpose
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            setUser(currentUser);
            setLoading(false);

            // Token Issuing
            if (currentUser) {
                axios.post('https://lib-ease-server-b9-a11.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('Token Response :', res.data);
                    });
            } else {
                axios.post('https://lib-ease-server-b9-a11.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    });
            }
        });
        return () => {
            unsubscribe();
        };
    }, [user?.email]);

    const authInformation = {
        user,
        loading,
        createUser,
        updateUser,
        logInUser,
        signOutUser,
        googleLogin,
        gitHubLogin,
        setUser,
        theme,
        setTheme,
    };

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
