'use client'
import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

export const GlobalContext = createContext(null) 

export default function GlobalState ({children}){
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is already logged in via cookies
        const checkAuth = () => {
            if (typeof window !== 'undefined') {
                const token = Cookies.get('authToken');
                const userData = Cookies.get('user');
                if (token && userData) {
                    try {
                        setUser(JSON.parse(userData));
                    } catch (e) {
                        console.error('Failed to parse user data from cookie');
                    }
                }
                setIsLoading(false);
            }
        };
        
        checkAuth();
    }, []);

    const login = (userData, token) => {
        setUser(userData);
        // Store in cookies with 7 day expiration
        Cookies.set('authToken', token, { expires: 7 });
        Cookies.set('user', JSON.stringify(userData), { expires: 7 });
    };

    const logout = () => {
        setUser(null);
        Cookies.remove('authToken');
        Cookies.remove('user');
    };

    return(
        <GlobalContext.Provider value={{ user, setUser, login, logout, isLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}