import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;