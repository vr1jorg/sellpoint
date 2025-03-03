"use client"

import { useState } from "react";
import { AddToCartProps, ButtonVariant, Product } from "../../types";
import Button from "./button";

export default function AddToCart({ product }: AddToCartProps) {
    const [cart, setCart] = useState<Product[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (productId: number, change: number) => {
        setCart((prevCart) =>
            prevCart.reduce((acc, item) => {
                if (item.id === productId) {
                    const newQuantity = item.quantity + change;
                    if (newQuantity > 0) {
                        acc.push({ ...item, quantity: newQuantity });
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, [] as Product[])
        );
    };

    return (
        <div>
            <button
                className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded"
                onClick={() => addToCart(product)}
            >
                Add to cart
            </button>

            {cart.length === 0 ? (
                null
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="space-x-2 flex items-center">

                            <Button onClick={() => updateQuantity(item.id, -1)} variant={ButtonVariant.Tertiary}>
                                -
                            </Button>
                            <span>{item.quantity}</span>
                            <Button onClick={() => updateQuantity(item.id, 1)} variant={ButtonVariant.Secondary}>
                                +
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}