import { useContext, useState, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || null;
    });
    
    const signUp = async (username, email, password) => {
        const res = await axios.post("http://localhost:5000/api/signup", {
            username, email, password
        });
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
    };

    const signIn = async (username, password) => {
        try {
            const res = await axios.post("http://localhost:5000/api/signin", {
                username, password
            });
            setUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            return res.data.user;
        } catch (err) {
            throw err;
        }
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);