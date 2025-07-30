import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import user_logo from '../images/logo/user_in_circle_w_dot.png';
import search_logo from '../images/logo/search.png';

const Header = () => {
    return (
        <header className="Header">
            <section className="HeaderSection">
                {/* search */}
                <form  className="HeaderItem">
                    <img src={search_logo} alt="" className="Logo"/>
                </form>
                <NavLink to="/" className="HeaderItem">lil' green store</NavLink>
                <NavLink to="/profile"  className="HeaderItem"><img src={user_logo} alt="profile"  className="Logo"/></NavLink>
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