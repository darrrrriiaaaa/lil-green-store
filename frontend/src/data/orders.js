import { products } from "./products_all";

const getProductById = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) {
        console.warn(`Product with ID ${id} not found.`);
    }
    return product;
}

export const orders = [
    {
        orderId: "1_1",
        date: "2025-07-21",
        items: [
            { id: 6, quantity: 1 },
            { id: 1, quantity: 1 }
        ],
        /*sum: parseFloat(
            items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
        )*/
    }
];