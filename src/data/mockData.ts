export const mockOrders = [
    { id: "ORD001", customer: "Liam Johnson", email: "liam@example.com", type: "Sale", status: "Fulfilled", date: "2023-06-23", amount: 250.00 },
    { id: "ORD002", customer: "Olivia Smith", email: "olivia@example.com", type: "Refund", status: "Declined", date: "2023-06-24", amount: 150.00 },
    { id: "ORD003", customer: "Noah Williams", email: "noah@example.com", type: "Subscription", status: "Fulfilled", date: "2023-06-25", amount: 350.00 },
    { id: "ORD004", customer: "Emma Brown", email: "emma@example.com", type: "Sale", status: "Fulfilled", date: "2023-06-26", amount: 450.00 },
    { id: "ORD005", customer: "Oliver Jones", email: "oliver@example.com", type: "Sale", status: "Pending", date: "2023-06-27", amount: 550.00 },
    { id: "ORD006", customer: "Ava Garcia", email: "ava@example.com", type: "Sale", status: "Pending", date: "2023-06-28", amount: 200.00 },
    { id: "ORD007", customer: "James Miller", email: "james@example.com", type: "Subscription", status: "Fulfilled", date: "2023-06-29", amount: 300.00 },
];
  
export type Order = typeof mockOrders[0];

export const mockProducts = [
    { id: "PROD001", name: "Quantum Widget", status: "Active", price: 49.99, stock: 120, sales: 1500 },
    { id: "PROD002", name: "Hyper-Sprocket", status: "Active", price: 89.99, stock: 75, sales: 950 },
    { id: "PROD003", name: "Nano-Gear", status: "Archived", price: 29.99, stock: 0, sales: 2500 },
    { id: "PROD004", name: "Giga-Transistor", status: "Active", price: 199.99, stock: 30, sales: 400 },
    { id: "PROD005", name: "Pico-Capacitor", status: "Draft", price: 9.99, stock: 500, sales: 300 },
];

export type Product = typeof mockProducts[0];

export const mockCustomers = [
    { id: "CUST001", name: "Liam Johnson", email: "liam@example.com", totalSpent: 2500.00, orders: 5 },
    { id: "CUST002", name: "Olivia Smith", email: "olivia@example.com", totalSpent: 1500.00, orders: 3 },
    { id: "CUST003", name: "Noah Williams", email: "noah@example.com", totalSpent: 3500.00, orders: 8 },
    { id: "CUST004", name: "Emma Brown", email: "emma@example.com", totalSpent: 4500.00, orders: 12 },
    { id: "CUST005", name: "Oliver Jones", email: "oliver@example.com", totalSpent: 5500.00, orders: 15 },
];

export type Customer = typeof mockCustomers[0];
