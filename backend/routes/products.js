import express from "express";

import Product from "../models/Product.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

productRouter.get("/:productId", async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    };
});

productRouter.get("/search", async (req, res) => {
    try {
        const query = req.query.q;
        const regex = new RegExp(query, "i");

        if (!query) return res.status(400).json({ message: "There is no query search" });

        const products = await Product.find({
            $or: [
                { name: regex },
                { category: regex },
                { tags: regex }
            ]
        });
    
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

export default productRouter;