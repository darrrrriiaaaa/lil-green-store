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
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            name: String,
            price: Number,
            image: String,
            quantity: { type: Number, required: true, default: 1 }
        }
    ]
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;