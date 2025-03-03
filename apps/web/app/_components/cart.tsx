"use client";

import { ButtonType, ButtonVariant } from "../../types";
import { useCartStore } from "../../store";
import { createOrder } from "../../actions"
import Button from "./button";

export default function Cart() {
    const { cart, updateQuantity, removeFromCart, clearCart } = useCartStore();
    const createOrderWithCart = createOrder.bind(null, cart)

    const handleSubmit = async () => {
        await createOrderWithCart(); // Call the server action
        alert("Order successfully created.")
        clearCart(); // Close the modal after success
    };

    return (
        <div className="rounded-md border fixed bottom-0 right-0 p-4 bg-white min-w-[300px] min-h-[300px] flex flex-col space-y-4">
            <h2 className="font-bold">Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul className="flex flex-col space-y-4 max-h-[300px] overflow-y-auto mb-2">
                        {cart.map((item) => (
                            <li key={item.id} className="flex space-x-2 justify-between">
                                <div className="flex space-x-2 items-center">
                                    <img src={item.imageUrl} alt={item.name} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <p>{item.name}</p>
                                        <small>${item.price * item.quantity}</small>
                                    </div>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <Button variant={ButtonVariant.Secondary} onClick={() => updateQuantity(item.id, 1)}>+</Button>
                                    <p>{item.quantity}</p>
                                    <Button variant={ButtonVariant.Secondary} onClick={() => updateQuantity(item.id, -1)}>-</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col space-y-2 mt-auto">
                        <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                        <form action={handleSubmit} className="w-full">
                            <Button type={ButtonType.Submit} variant={ButtonVariant.Success}>
                                Create order
                            </Button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}
