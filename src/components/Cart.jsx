import React from "react";

// import css
import '../styles/Cart.css';

import { useCart } from "../context/CartContext";

const Cart = ({ isOpen, onClose, items }) => {
    const { products, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <section className={`Cart ${isOpen ? "Open" : ""}`}>
                <button className="CloseButton" onClick={onClose}>X</button>
                <h2 className="SecondHeader">My Cart</h2>
                {products.length === 0 ? (
                    <p className="CartText">Your cart is empty.</p>
                ) : (
                    <ul className="CartItemsList">
                        {products.map((item) => (
                            <li key={item.id} className="CartItem">
                                <section className="CartItemInfo">
                                    <h3 className="CartItemHeader">{item.name}</h3>
                                    <p className="CartText">{item.price}</p>
                                    <p className="CartText">Quantity: {item.quantity}</p>
                                    <button onClick={() => removeFromCart(item.id)} className="Button CartRemoveButton">Remove</button>
                                </section>
                                <img src={item.image} alt={item.name} className="CartItemImage"/>
                            </li>
                        ))}
                    </ul>
                )}

                {products.length > 0 && (
                    <button onClick={clearCart} className="Button ClearCartButton">Clear Cart</button>
                )}
            </section>
            {isOpen && <section className="Overlay" onClick={onClose}></section>}
        </div>
    );
};

export default Cart;