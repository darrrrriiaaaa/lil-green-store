import React, { useEffect, useState } from "react";

// import contexts
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user, signOut, updateUser } = useAuth();
    const navigate = useNavigate();
    const [ orders, setOrders ] = useState([]);
    const [ updateEmail, setUpdateEmail ] = useState(false);
    const [ updatePassword, setUpdatePassword ] = useState(false);
    const [ newEmail, setNewEmail ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");

    const handleSignOut = () => {
        signOut();
    };

    const handleUpdateEmail = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/profile/update-email/${user.username}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: newEmail })
            });
            if (!res.ok) throw new Error("Failed to update email");
            await updateUser();
            alert("Email updated successfully!");
            setUpdateEmail(false);
        } catch (err) {
            console.error(err);
            alert("Error updating email.");
        }
    };

    const handleUpdatePassword = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/profile/update-password/${user.username}`, {
                method: "PUT",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({ password: newPassword })
            });
            if (!res.ok) throw new Error("Failed to update password");
            await updateUser();
            alert("Password updated successfully!");
            setUpdatePassword(false);
        } catch (err) {
            console.error(err);
            alert("Error updating password.");
        }
    };

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    useEffect(() => {
        if (!user) return;

        const fetchUpdatedUser = async () => {
            const res = await fetch(`http://localhost:5000/api/profile/${user.username}`);
            const updatedUser = await res.json();
            
            const validOrders = updatedUser.user_orders?.filter(id => id && id.trim() !== "");
            if (!validOrders || validOrders.length === 0) {
                console.log("No valid order IDs to fetch.");
                return;
            }
            console.log("Fetching orders for IDs:", updatedUser.user_orders);

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
        fetchUpdatedUser();
    }, [user]);

    if (!user) {
        return <p>Loading profile...</p>
    }

    return (
        <div className="ProfilePage">
            <h2 className="SecondHeader">Welcome, {user.username}!</h2>
            <section className="ProfileSection">
                <p className="ProfileText ProfileEmail">Check you e-mail: {user.email}</p>
                {updateEmail ? (
                    <section>
                        <input type="email" placeholder="Change your e-mail here" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                        <button onClick={handleUpdateEmail} className="Button ProfileButton">Save E-mail</button>
                        <button onClick={() => setUpdateEmail(false)} className="Button ProfileButton">Cancel</button>
                    </section>
                ) : (
                    <button onClick={() => setUpdateEmail(true)} className="Button ProfileButton">Change E-mail</button>
                )}
                {updatePassword ? (
                    <section>
                        <input type="password" placeholder="Change your password here" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <button onClick={handleUpdatePassword} className="Button ProfileButton">Save password</button>
                        <button onClick={() => setUpdatePassword(false)} className="Button ProfileButton">Cancel</button>
                    </section>
                ) : (
                    <button onClick={() => setUpdatePassword(true)} className="Button ProfileButton">Change password</button>
                )}
            </section>
            <p className="ProfileOrderHeader">Your orders history</p>
            <section className="ProfileOrderSection">
                {orders.length > 0 ? (
                    orders.map(order => (
                        <div key={order.orderId} className="ProfileOrders">
                            <p className="ProfileText ProfileOrderText">Order {order.orderId} - {order.date}</p>
                            <ul className="ProfileOrdersList">
                                {(order.items || []).map(item => (
                                    <li key={item._id} className="ProfileOrderItem">
                                    {item.name} x {item.quantity}
                                    </li>
                                ))}
                            </ul>
                            <div className="OrderLine"></div>
                        </div>
                    ))
                ) : (
                    <p className="ProfileText">No orders yet.</p>
                )}
            </section>
            <button onClick={handleSignOut} className="Button ProfileButton">Sign Out</button>
        </div>
    )
};

export default Profile;