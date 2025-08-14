import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../styles/Header.css";

// import contexts
import { useAuth } from "../context/AuthContext";

//import components
import Cart from "./Cart";
import Auth from "./Auth";

// import images
import user_logo from '../images/logo/user_in_circle_w_dot.png';
import search_logo from '../images/logo/search.png';
import cart_logo from '../images/logo/shopping-cart.png';

const Header = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [ cartOpen, setCartOpen ] = useState(false);
    const [ showAuth, setShowAuth ] = useState(false);

    const [ search, setSearch ] = useState("");
    const [ results, setResults ] = useState([]);

    useEffect(() => {
        if (!search) return;

        const fetchResults = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/products/search?q=${search}`);
                const data = await res.json();
                setResults(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchResults();
    }, [search]);

    const handleProfileCheck = () => {
        if (user) {
            navigate("/profile");
        } else {
            setShowAuth(true);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/search?q=${encodeURIComponent(search.trim())}`);
        }
    };

    return (
        <header className="Header">
            <section className="HeaderSection">
                <form className="HeaderItem HeaderSearch" onSubmit={handleSearchSubmit}>
                    <img src={search_logo} alt=""  className="Logo SearchLogo"/>
                    <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="SearchInput" />
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
                    <Auth isOpen={showAuth} onClose={() => setShowAuth(false)} />
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