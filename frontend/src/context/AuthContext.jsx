import React, { useContext, useState, useEffect, createContext, Children } from "react";

import { users as defaultUsers} from "../data/users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState(defaultUsers);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const signIn = (username, password) => {
        const foundUser = defaultUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem("user", JSON.stringify(foundUser));
            return true;
        } else {
            return null;
        };
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const signUp = (username, password) => {
        if (users.some(u => u.username === username)) {
            return null;
        }

        const newUser = {
            id: users.length + 1,
            username,
            email: "",
            password,
            user_orders: []
        };

        setUsers([...users, newUser]);

        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));

        return newUser;
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);