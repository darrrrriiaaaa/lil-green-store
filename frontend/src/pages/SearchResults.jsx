import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom";

const SearchResults = () => {
    const [ products, setProducts ] = useState([]);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        if (!query) return;
        const fetchResults = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/assortment/search?q=${query}`);
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchResults();
    }, [query]);

    return (
        <section className="SearchResultsPage">
            <h2 className="SecondHeader">Search results for "{query}"</h2>
            {products.length > 0 ? (
                <ol className="SearchResults">{
                    products.map(product => (
                        <li key={product._id}><NavLink to={`/product/${product._id}`}>{product.name}</NavLink></li>
                    ))}</ol>
            ) : (
                <p>No products found.</p>
            )}
        </section>
    );
};

export default SearchResults;