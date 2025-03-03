export const buttonVariantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    tertiary: "bg-black hover:bg-gray-200 hover:text-black text-white",
    danger: "bg-red-500 hover:bg-red-600 hover:text-black text-white",
    success: "bg-green-500 hover:bg-green-600 hover:text-black text-white",
};

export const buttonBaseClasses = "px-4 py-2 rounded focus:outline-none";

export const mockProducts = [
    {
        name: "Wireless Mouse",
        category: "Electronics",
        quantity: 50,
        price: 25,
        imageUrl: "https://media.istockphoto.com/id/155099981/photo/single-new-silver-computer-mouse-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=FYobW-yrQjj65JwpWeogSmnrgEzZMdsm7FnWvj30aHA=",
        created_at: new Date("2024-01-15T10:00:00Z"),
        updated_at: new Date("2024-02-20T14:30:00Z"),
        deleted_at: null,
    },
    {
        name: "Running Shoes",
        category: "Footwear",
        imageUrl: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 30,
        price: 79,
        created_at: new Date("2024-01-10T09:00:00Z"),
        updated_at: new Date("2024-02-18T16:45:00Z"),
        deleted_at: null,
    },
    {
        name: "Coffee Maker",
        imageUrl: "https://media.istockphoto.com/id/1448130237/photo/closeup-of-a-glass-cup-with-fresh-coffee-from-a-capsule-coffee-machine.jpg?s=1024x1024&w=is&k=20&c=5NJSCuFFUtUw5xCiSCDglEVn2GOjSEJsFdMZzPACA3c=",
        category: "Home Appliances",
        quantity: 20,
        price: 45,
        created_at: new Date("2024-01-20T08:30:00Z"),
        updated_at: new Date("2024-02-25T12:00:00Z"),
        deleted_at: null,
    },
    {
        name: "Backpack",
        category: "Accessories",
        imageUrl: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 40,
        price: 39,
        created_at: new Date("2024-01-12T11:00:00Z"),
        updated_at: new Date("2024-02-22T13:15:00Z"),
        deleted_at: null,
    },
    {
        name: "Bluetooth Speaker",
        imageUrl: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Electronics",
        quantity: 25,
        price: 59,
        created_at: new Date("2024-01-18T13:00:00Z"),
        updated_at: new Date("2024-02-28T10:00:00Z"),
        deleted_at: null,
    },
];
