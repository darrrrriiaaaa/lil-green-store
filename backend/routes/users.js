import express from "express";

import User from "../models/User.js";

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists." });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: "User created", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

userRouter.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        console.log("Username: ", username, "password: ", password);
        console.log("User: ", user);
        if (!user || user.password !== password) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

export default userRouter;