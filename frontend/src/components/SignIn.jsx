import { useState } from "react";

import "../styles/Auth.css";
import { useAuth } from "../context/AuthContext";

const SignIn = ({ isOpen, onClose }) => {
    const { signIn } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signIn(username, password);
            setError("");
            onClose();
        } catch (err) {
            setError("Invalide username or password.");
        }
    };

    return (
        <section className="FormSection">
            <h2 className="SecondHeader">Sign In</h2>
            <form className="AuthForm" onSubmit={handleSubmit}>
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
                <button type="submit" className="Button AuthButton">Sign In</button>
            </form>
        </section>
    )
};

export default SignIn;