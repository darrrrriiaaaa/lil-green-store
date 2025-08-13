import express from "express";
import Order from "../models/Order.js";
import User from "../models/User.js";

const orderRouter = express.Router();

orderRouter.get("/:orderId", async (req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.orderId });
        if (!order) return res.status(404).json({ message: "order not found" });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

orderRouter.post("/neworder/:username", async(req, res) => {
    try {
        const { username } = req.params;
        const { items } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: "User not found" });
        
        const orderNumber = (user.user_orders?.length || 0) + 1;
        const newOrderId = `${username}_${orderNumber}`;

        const order = new Order({
            orderId: newOrderId,
            date: new Date().toISOString().split("T")[0],
            items
        });

        await order.save();

        user.user_orders = [...(user.user_orders || []), newOrderId];
        await user.save();

        res.status(201).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

export default orderRouter;