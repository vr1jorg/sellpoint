'use server';
import { asc, eq } from 'drizzle-orm';
import { db } from './db';
import { products, orders } from './schema';
import { Product } from './types';
import { revalidatePath } from 'next/cache';

export async function editProduct(productId: string, formData: FormData) {
    const name = formData.get('name') as string;
    const category = formData.get('category') as string;
    const quantity = Number(formData.get('quantity'));
    const price = Number(formData.get('price'));

    try {
        await db.update(products)
            .set({ name, category, quantity, price, updatedAt: new Date() })
            .where(eq(products.id, parseInt(productId)));

        revalidatePath('/admin')

        console.log(`Product with ID ${productId} updated successfully`);
    } catch (error) {
        console.error('Failed to update product:', error);
    }
}

export async function createProduct(formData: FormData) {
    const name = formData.get('name') as string;
    const category = formData.get('category') as string;
    const quantity = Number(formData.get('quantity'));
    const price = parseFloat(formData.get('price') as string);

    try {
        await db.insert(products).values({ name, category, quantity, price });
        console.log('Product created successfully');
    } catch (error) {
        console.error('Failed to create product:', error);
    }
}

export async function deleteProduct(productId: string) {
    try {
        await db.delete(products).where(eq(products.id, parseInt(productId)));
        revalidatePath('/admin')
        console.log(`Product with ID ${productId} deleted successfully`);
    } catch (error) {
        console.error('Failed to delete product:', error);
    }
}

export async function getProducts() {
    try {
        const productList = await db.select().from(products).orderBy(asc(products.id))
        return productList
    } catch (error) {
        console.error('Failed to get products:', error);
        throw new Error("Failed to fetch products");
    }
}

export async function createOrder(cart: Product[]) {
    if (!cart || cart.length === 0) {
        throw new Error('Cart is empty');
    }
    try {
        await db.insert(orders).values({
            products: cart,
        });
        console.log("Order inserted", cart)
    } catch (error) {
        console.error('Failed create order:', error);
        throw new Error("Failed to create order");
    }
}

export async function getOrders() {
    try {
        const orderList = await db.select().from(orders).orderBy(asc(orders.id))
        return orderList
    } catch (error) {
        console.error('Failed to get orders:', error);
        throw new Error("Failed to fetch orders");
    }
}