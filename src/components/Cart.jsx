import React from "react";

import './Cart.css';

const Cart = ({ isOpen, onClose, items }) => {
    return (
        <div>
            <section className={`Cart ${isOpen ? "Open" : ""}`}>
                <button className="CloseButton" onClick={onClose}>X</button>
                {items}
            </section>
            {isOpen && <section className="Overlay" onClick={onClose}></section>}
        </div>
    );
};

export default Cart;