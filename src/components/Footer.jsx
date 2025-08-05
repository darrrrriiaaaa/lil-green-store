import React from "react";

import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="Footer">
            <p className="FooterText">Thank you for supporting our small green corner of the world 🌍🌿</p>
            <p className="FooterText">lil' green store — plants, pots & peace.</p>
            <p className="FooterText">{new Date().getFullYear()}. All rights reserved.</p>
            <p className="FooterText">Created by: <a href="https://github.com/darrrrriiaaaa" title="Click to see more projects">Dariia</a></p>
        </footer>
    )
};

export default Footer;