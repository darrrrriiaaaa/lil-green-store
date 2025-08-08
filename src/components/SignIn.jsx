import { useState } from "react";

import "../styles/Auth.css";
import { useAuth } from "../context/AuthContext";

const SignIn = ({ isOpen, onClose }) => {
    const { signIn } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = signIn(username, password);

        if (!user) {
            setError("Invalide username or password.");
        } else {
            setError("");
            onClose();
        }
    };

    return (
        <div>
            <div className="Overlay" onClick={onClose} />
            <section className="SignInSection">
                <h2 className="SecondHeader">Sign In</h2>
                <form className="SignForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required    
                    />
                    {error && <p className="ErrorMessage">{error}</p>}
                    <button type="submit">Sign In</button>
                </form>
            </section>
        </div>
    )
};

export default SignIn;