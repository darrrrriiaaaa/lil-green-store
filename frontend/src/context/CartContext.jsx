import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addToCart = (element) => {
        setProducts(prev => {
            const existing = prev.find(product => product._id === element._id);
            if (existing) {
                return prev.map(product => 
                    product._id === element._id ? { ...product, quantity: product.quantity + 1 } : product
                );
            } else {
                return [...prev, { ...element, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        console.log("Trying to remove: ", id);

        setProducts(prev => {
            console.log("Before removing: ", prev);
            const updated = prev.filter(item => item._id !== id);
            console.log("After remove: ", updated);
            return updated;
        })
    };

    const clearCart = () => setProducts([]);

    return (
        <CartContext.Provider value={{ products, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);