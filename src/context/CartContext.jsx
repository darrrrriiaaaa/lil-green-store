import React, { createContext, useContext, useState } from "react";
import { products } from "../data/products_all";

const CartContext = createContext();

export const CartProvider = ({ items }) => {
    const [products, setProducts] = useState([]);

    const addToCart = (element) => {
        setProducts(prev => {
            const existing = prev.find(product => product.id === element.id);
            if (existing) {
                return prev.map(product => 
                    product.id === element.id ? { ...product, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setProducts(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => setProducts([]);

    return (
        <CartContext.Provider value={{ products, addToCart, removeFromCart, clearCart }}>{items}</CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);