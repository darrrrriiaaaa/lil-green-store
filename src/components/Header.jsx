import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// import contexts
import { useAuth } from "../context/AuthContext";

//import components
import Cart from "./Cart";
import SignUp from "./SignUp";

// import images
import user_logo from '../images/logo/user_in_circle_w_dot.png';
import search_logo from '../images/logo/search.png';
import cart_logo from '../images/logo/shopping-cart.png';

const Header = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [cartOpen, setCartOpen] = useState(false);
    const [showSignUp, setShowSighUp] = useState(false);

    const handleProfileCheck = () => {
        if (user) {
            navigate("/profile");
        } else {
            setShowSighUp(true);
        }
    };

    return (
        <header className="Header">
            <section className="HeaderSection">
                {/* search */}
                <form className="HeaderItem HeaderSearch">
                    <img src={search_logo} alt="" className="Logo"/>
                </form>
                <NavLink to="/" className="HeaderItem HeaderNameItem">lil' green store</NavLink>
                <section className="HeaderLogos HeaderItem">
                    <button onClick={handleProfileCheck} className="HeaderLogo">
                        <img src={user_logo} alt="profile" className="Logo"/>
                    </button>
                    <button className="HeaderLogo" onClick={() => setCartOpen(true)}>
                        <img src={cart_logo} alt="" className="Logo" />
                    </button>
                    <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
                    <SignUp isOpen={showSignUp} onClose={() => setShowSighUp(false)} />
                </section>
            </section>
            <section className="MenuSection">
                <NavLink to="/" className="MenuItem">home</NavLink>
                <NavLink to="/assortment-all" className="MenuItem">shop</NavLink>
                <NavLink to="/about-us" className="MenuItem">about us</NavLink>
            </section>
        </header>
    )
};

export default Header;