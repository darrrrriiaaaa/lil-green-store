import React, { useEffect, useState } from "react";

// import contexts
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    useEffect(() => {
        if (!user) return;

        const validOrders = user.user_orders?.filter(id => id && id.trim() !== "");
        if (!validOrders || validOrders.length === 0) {
            console.log("No valid order IDs to fetch.");
            return;
        }
        console.log("Fetching orders for IDs:", user.user_orders);

        const fetchOrders = async () => {
            if (!user?.user_orders?.length) return;

            try {
                const fetchedOrders = await Promise.all(
                    validOrders.map(async (orderId) => {
                        console.log("Fetching order id: ", orderId);
                        const res = await fetch(`http://localhost:5000/api/orders/${orderId}`);
                        if (!res.ok) throw new Error("failed to fetch order ", orderId);
                        return res.json();
                    })
                );
                setOrders(fetchedOrders);
            } catch (err) {
                console.error("Error fetching orders: ", err);
            }
        };
        fetchOrders();
    }, [user]);

    if (!user) {
        return <p>Loading profile...</p>
    }

    const handleSignOut = () => {
        signOut();
        navigate("/");
    };

    return (
        <div className="ProfilePage">
            <h2 className="SecondHeader">Welcome, {user.username}!</h2>
            <p className="ProfileText ProfileEmail">Check you e-mail: {user.email}</p>
            <p className="ProfileOrderHeader">Your orders history</p>
            {orders.length > 0 ? (
                orders.map(order => (
                    <div key={order.orderId} className="ProfileOrders">
                        <p className="ProfileText ProfileOrderText">Order {order.orderId} - {order.date}</p>
                        <ul>
                            {(order.items || []).map(item => (
                                <li key={item._id} className="ProfileOrderItem">
                                    {item.name} x {item.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p className="ProfileText">No orders yet.</p>
            )}
            <button onClick={handleSignOut} className="Button ProfileButton">Sign Out</button>
        </div>
    )
};

export default Profile;