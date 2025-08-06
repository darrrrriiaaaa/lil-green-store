import { products } from "./products_all";

const getProductById = (id) => products.find(p => p.id === id);

export const orders = [
    {
        orderId: "1_1",
        date: "2025-07-21",
        items: [
            { ...getProductById(6), quantity: 1 },
            { ...getProductById(1), quantity: 1 }
        ],
        /*sum: parseFloat(
            items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
        )*/
    }
];