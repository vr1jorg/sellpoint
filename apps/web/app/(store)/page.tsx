import { trpc } from "../_trpc/server";
import { useCartStore } from "../../store";
import Button from "../_components/button";
import { ButtonVariant, Product } from "../../types";
import ProductGrid from "../_components/product-grid";
import Cart from "../_components/cart";

export default async function Home() {
    const productsRequest = await trpc.getProducts();
    if (!productsRequest.products) return <div>Loading...</div>;


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            <ProductGrid products={productsRequest.products as Product[]} />
            <Cart />
        </div>
    );
}
