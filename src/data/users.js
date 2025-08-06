import { orders } from "./orders"

const getUserOrders = (userId) => {
    return orders.filter(order => order.orderId.startsWith(`${userId}_`))
};

export const users = [
    {
        id: 1,
        username: "user1",
        email: "testuser@mail.com",
        password: "123",
        user_orders: [
            getUserOrders(1)
        ]
    }
];