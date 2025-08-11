import { useState } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = ({ isOpen, onClose }) => {
    const [mode, setMode] = useState("sign-in");

    if (!isOpen) return null;

    return (
        <div>
            <div className="Overlay" onClick={onClose} />
            <section className="AuthSection">
                { mode === "sign-in" ? (
                    <section className="SignSection">
                        <SignIn onClose={onClose} />
                        <p className="AuthText">
                            Don't have an account?
                            <button className="LinkButton" onClick={() => setMode("sign-up")}>Sign up here</button>
                        </p>
                    </section>
                ) : (
                    <section className="SignSection">
                        <SignUp onClose={onClose} />
                        <p className="AuthText">
                            Already have an account?
                            <button className="LinkButton" onClick={() => setMode("sign-in")}>Sign in here</button>
                        </p>
                    </section>
                )}
            </section>
        </div>
    )
};

export default Auth;