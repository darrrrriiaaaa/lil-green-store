import React from "react";

import "../styles/Auth.css";

const SignIn = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div>
            <div className="Overlay" onClick={onClose} />
            <section className="SignInSection">
                <h2 className="SecondHeader">Sign In</h2>
                <form className="SignForm">
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign In</button>
                </form>
            </section>
        </div>
    )
};

export default SignIn;