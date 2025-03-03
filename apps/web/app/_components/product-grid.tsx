"use client"
import { useCartStore } from "../../store";
import { ButtonVariant, Product, ProductGridProps } from "../../types";
import Button from "./button";

export default function ProductGrid({ products }: ProductGridProps) {
    const { addToCart, cart } = useCartStore();
    return (
        products.map((product) => {
            const sanitizedProduct: Product = {
                ...product,
                name: product.name ?? "Unnamed product",
                category: product.category ?? "Unknown category",
                price: product.price ?? 0,
                imageUrl: product.imageUrl ?? "https://via.placeholder.com/150",
                quantity: product.quantity ?? 1,
                createdAt: product.createdAt ?? new Date(),
                updatedAt: product.updatedAt ?? new Date(),
                deletedAt: product.deletedAt ?? null,
            };
            const isInCart = cart.some((item) => item.id === product.id);

            return (

                <div className="flex flex-col space-y-2" key={product.id}>
                    <p>{product.name}</p>
                    <img
                        src={
                            product.imageUrl ??
                            "https://images.unsplash.com/photo-1598620617377-3bfb505b4384?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        className="w-20 h-20"
                        alt={product.name ?? "No image"}
                    />
                    <p>${product.price}</p>
                    <small>{product.category}</small>

                    {isInCart ? (
                        <p className="text-green-500">Item already in cart</p>
                    ) : (
                        <Button variant={ButtonVariant.Primary} onClick={() => addToCart(sanitizedProduct)}>Add to cart</Button>
                    )}
                </div>

            );
        })
    )
} 
