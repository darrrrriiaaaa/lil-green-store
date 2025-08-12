import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import userRouter from "./routes/users.js";
import productRouter from "./routes/products.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(process.cwd(), 'uploads')));

app.use("/api", userRouter);

app.use("/api/assortment", productRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    console.log("Database connected");
    console.log("Connected DB name: ", mongoose.connection.name);
}).catch(err => console.error(err));