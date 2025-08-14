import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/Product.css";

const Product = () => {
    const { productId } = useParams();
    const [ product, setProduct ] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`http://localhost:5000/api/assortment/${productId}`);
            const data = await res.json();
            setProduct(data);
        };
        fetchProduct();
    }, [productId]);

    if (!product) return <p>Loading...</p>

    return (
        <section className="ProductPage">
            <section className="ProductPageInfo">
                <h2 className="SecondHeader">{product.name}</h2>
                <p>Price: {product.price}</p>
                <p>{product.description}</p>
                <p>Category: {product.category}</p>
                <ul className="ProductPageTagsList">Tags: {(product.tags).map(tag => (<li>{tag}</li>))}</ul>
                <p>Light: {product.light}</p>
                <p>Difficulty: {product.difficulty}</p>
                <p>Size: {product.size}</p>
                <p>Bloom: {product.bloom}</p>
            </section>
            <img src={product.image} alt="" className="ProductPageImage" />
        </section>
    )
};

export default Product;