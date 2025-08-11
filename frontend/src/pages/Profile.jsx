import React, { useEffect } from "react";

// import contexts
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    if (!user) return null;

    const orders = Array.isArray(user.user_orders[0])
        ? user.user_orders.flat()
        : user.user_orders;

    const handleSignOut = () => {
        signOut();
        navigate("/");
    };
    
    return (
        <div>
            <h2 className="SecondHeader">Welcome, {user.username}</h2>
            <p>Check you e-mail: {user.email}</p>
            <p>Your orders history</p>
            {(orders || []).length > 0 ? (
                orders.map(order => (
                    <div key={order.orderId}>
                        {console.log("User orders:", orders)}
                        <p>Order {order.orderId} - {order.date}</p>
                        <ul>
                            {(order.items || []).map(item => (
                                <li key={item.id}>
                                    {item.name} x {item.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>No orders yet.</p>
            )}
            <button onClick={handleSignOut} className="Button">Sign Out</button>
        </div>
    )
};

export default Profile;