import React, { useState, useEffect } from 'react';
import { app } from './firebaseConfig';
import { getAuth } from 'firebase/auth'
import Router, { useRouter } from 'next/router';

export const AuthContext = React.createContext();

const auth = getAuth();

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(false);
    const [user, setUser] = useState(null);

    const logout = async () => {
        await app.auth().signOut();       
        setUser(null);
        router.push('/')
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading, setLoading,
            erro, setErro,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}