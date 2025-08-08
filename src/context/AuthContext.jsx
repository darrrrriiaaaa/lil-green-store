import React, { useContext, useState, useEffect, createContext, Children } from "react";

import { users } from "../data/users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const signIn = (username, password) => {
        const foundUser = users.find(
            (u) => u.username === username && u.password === password
        );

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem("user", JSON.stringify(foundUser));
            return foundUser;
        } else {
            return null;
        };
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);