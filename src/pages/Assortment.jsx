import React from "react";
import { NavLink } from "react-router-dom";

import { products } from "../data/products_all";

const Assortment = () => {
    return (
        <section className="ShopContent">
            {products.map(product => (
                <section key={product.id} className="ProductCard">
                    <img src={product.image} alt={product.name} className="ProductImage"/>
                    <NavLink className="ProductHeader">{product.name}</NavLink>
                    <p className="ProductDescription">{product.description}</p>
                    <p className="ProductPrice">{product.price}</p>
                </section>
            ))}
        </section>
    )
};

export default Assortment;