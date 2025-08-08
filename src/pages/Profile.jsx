import React, { useEffect } from "react";

// import contexts
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    if (!user) return null;

    return (
        <div>
            <h2 className="SecondHeader">Welcome, {user.username}</h2>
            <p>Check you e-mail: {user.email}</p>
            <p>Your orders history</p>
            {user.user_orders.map(order => (
                <p>{order.orderId}</p>
            ))}
        </div>
    )
};

export default Profile;