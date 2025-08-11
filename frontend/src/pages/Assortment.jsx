import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { products } from "../data/products_all";

import { useCart } from "../context/CartContext";

const Assortment = () => {
    const { addToCart } = useCart();

    const [ selectedCategory, setSelectedCategory ] = useState("");
    const [ selectedLight, setSelectedLight ] = useState("");
    const [ selectedDifficulty, setSelectedDifficulty ] = useState("");
    const [ selectedColor, setSelectedColor ] = useState("");

    const filteredProducts = products.filter(product => {
        return (
            (selectedCategory === "" || product.category === selectedCategory) &&
            (selectedLight === "" || product.light === selectedLight) &&
            (selectedDifficulty === "" || product.difficulty === selectedDifficulty) &&
            (selectedColor === "" || product.color === selectedColor)
        );
    });

    const clearAllFilters = () => {
        setSelectedCategory("");
        setSelectedColor("");
        setSelectedDifficulty("");
        setSelectedLight("");

        setSortOption("");
    };

    const [ sortOption, setSortOption ] = useState("");

    const sortedProducts = [...filteredProducts];

    if (sortOption === "name-asc") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <section className="ShopContent">
            <section className="Filters">
                <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                    <option value="">All Categories</option>
                    <option value="Plants">Plants</option>
                    <option value="Pots">Pots</option>
                </select>

                <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
                    <option value="">All Colors</option>
                    <option value="green">Green</option>
                </select>

                <select onChange={(e) => setSelectedDifficulty(e.target.value)} value={selectedDifficulty}>
                    <option value="">All Difficulties</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="difficult">Difficult</option>
                </select>

                <select onChange={(e) => setSelectedLight(e.target.value)} value={selectedLight}>
                    <option value="">All Lights</option>
                    <option value="bright">Bright</option>
                    <option value="indirect">Indirect</option>
                </select>

                <section className="SortingButtons">
                    <button onClick={() => setSortOption((prev) => (prev === "name-asc" ? "name-desc" : "name-asc"))}
                    className={sortOption.includes("name" ? "ActiveSort" : "")}>
                        Name {sortOption === "name-asc" ? "↑" : "↓"}
                    </button>

                    <button onClick={() => setSortOption((prev) => (prev === "price-asc" ? "price-desc" : "price-asc"))}
                    className={sortOption.includes("price" ? "ActiveSort" : "")}>
                        Price {sortOption === "price-asc" ? "↑" : "↓"}
                    </button>
                </section>

                <button onClick={clearAllFilters} className="Button ClearFiltersButton">Clear All</button>
            </section>
            <section className="ShopProducts">
                {sortedProducts.map(product => (
                    <section key={product.id} className="ProductCard">
                        <img src={product.image} alt={product.name} className="ProductImage"/>
                        <NavLink className="ProductHeader">{product.name}</NavLink>
                        <p className="ProductDescription">{product.description}</p>
                        <section className="PriceAndBuy">
                            <p className="ProductPrice">{product.price}</p>
                            <button className="Button AddToCartBtn" onClick={() => addToCart(product)}>Add to Cart</button>
                        </section>
                    </section>
                ))}
            </section>
        </section>
    )
};

export default Assortment;