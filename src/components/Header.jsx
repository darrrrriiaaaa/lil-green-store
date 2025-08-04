import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

//import components
import Cart from "./Cart";

// import images
import user_logo from '../images/logo/user_in_circle_w_dot.png';
import search_logo from '../images/logo/search.png';
import cart_logo from '../images/logo/shopping-cart.png';

const Header = () => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header className="Header">
            <section className="HeaderSection">
                {/* search */}
                <form className="HeaderItem HeaderSearch">
                    <img src={search_logo} alt="" className="Logo"/>
                </form>
                <NavLink to="/" className="HeaderItem HeaderNameItem">lil' green store</NavLink>
                <section className="HeaderLogos HeaderItem">
                    <NavLink to="/profile" className="HeaderLogo"><img src={user_logo} alt="profile" className="Logo"/></NavLink>
                    <button className="HeaderLogo HeaderCart" onClick={() => setCartOpen(true)}><img src={cart_logo} alt="" className="Logo" /></button>
                    <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)}>
                        <h2 className="SecondHeader">My Cart</h2>
                    </Cart>
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