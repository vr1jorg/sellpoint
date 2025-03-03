import { create } from "zustand";
import { Product } from "./types";

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    updateQuantity: (productId: number, change: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (product) =>
        set((state) => {
            const existingProduct = state.cart.find((item) => item.id === product.id);
            if (existingProduct) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return { cart: [...state.cart, { ...product, quantity: 1 }] };
            }
        }),
    updateQuantity: (productId, change) =>
        set((state) => ({
            cart: state.cart.reduce((acc, item) => {
                if (item.id === productId) {
                    const newQuantity = item.quantity + change;
                    if (newQuantity > 0) {
                        acc.push({ ...item, quantity: newQuantity });
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, [] as Product[]),
        })),
    removeFromCart: (productId) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
        })),
    clearCart: () => set({ cart: [] }),
}));
