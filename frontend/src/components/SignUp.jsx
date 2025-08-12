import { useState } from "react";

import "../styles/Auth.css";
import { useAuth } from "../context/AuthContext";

const SignUp = ({ isOpen, onClose }) => {
    const { signUp } = useAuth();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signUp(email, username, password);
            setError("");
            onClose();
        } catch (err) {
            setError("Username already taken, please, choose another.");
        }
    };

    return (
        <section className="FormSection">
            <h2 className="SecondHeader">Sign Up</h2>
            <form className="AuthForm" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="AuthInput"
                    required
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="AuthInput"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="AuthInput"
                    required    
                />
                {error && <p className="ErrorMessage">{error}</p>}
                <button type="submit" className="Button AuthButton">Sign Up</button>
            </form>
        </section>
    )
};

export default SignUp;