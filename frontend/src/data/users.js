import { orders } from "./orders";
import { products } from "./products_all";

const getUserOrders = (userId) => {
    const filteredOrders = orders.filter(order => order.orderId.startsWith(`${userId}_`));
    console.log("Filtered orders: ", filteredOrders);

    const mapped = filteredOrders.map(order => {
        const mappedItems = (order.items || [])
            .map(item => {
                const fullProduct = products.find(p => p.id === item.id);
                return fullProduct
                ? {...fullProduct, quantity: item.quantity || 1}
                : null;
            })
            .filter(Boolean)
            console.log("Mapped items: ", order.orderId, mappedItems);
            return {...order, items:mappedItems};
    });

    console.log("Mapped orders: ", mapped);
    return mapped;
};

export const users = [
    {
        id: 1,
        username: "user1",
        email: "testuser@mail.com",
        password: "123",
        user_orders: getUserOrders(1)
    }
];