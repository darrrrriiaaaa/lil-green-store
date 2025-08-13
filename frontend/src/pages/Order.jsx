import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useAuth } from '../context/AuthContext';
import { useState } from "react";

const Order = () => {
    const { products, clearCart } = useCart();
    const { user, updateUser } = useAuth();
    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        name: user?.username || "",
        postcode: "",
        phone: ""
    });

    const totalPrice = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (products.length === 0) return alert("Cart is empty!");

        try {
            const orderItems = products.map(item => ({
                productId: item._id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: item.quantity
            }));

            const res = await fetch(
                `http://localhost:5000/api/orders/neworder/${user.username}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: products })
            });
            
            if (!res.ok) throw new Error("Failed to create order");
            const newOrder = await res.json();

            await updateUser();

            clearCart();

            alert("Order successfully created!");
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Failed to create order");
        }
    };

    if (products.length === 0) {
        return <p className="">Your cart is empty.</p>
    }

    return (
        <div>
            <h2 className="SecondHeader">Confirm your order</h2>
            <ul>
                {products.map(item => (
                    <li ley={item._id}>
                        <img src={item.image} alt="" />
                        <section>
                            <p>{item.name} x {item.price}</p>
                            <p>Price: {(item.price * item.quantity).toFixed(2)}</p>
                        </section>
                    </li>
                ))}
            </ul>
            <p>Total: {totalPrice.toFixed(2)}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} required />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                <button className="Button" type="submit">Place Order</button>
            </form>            
        </div>
    )
};

export default Order;