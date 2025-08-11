import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    inStock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: Array
    },
    light: {
        type: String
    },
    difficulty: {
        type: String
    },
    size: {
        type: String
    },
    bloom: {
        type: Boolean
    },
    color: {
        type: String
    }
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;