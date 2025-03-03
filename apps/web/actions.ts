'use server';
import { asc, desc, eq } from 'drizzle-orm';
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

        revalidatePath('/')

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
    const imageUrl = "https://assets.sutori.com/user-uploads/image/e0ff22a7-d61e-4ce9-995e-9f360cb7ed87/9ffe9e58d7cea02d981530dc826079f3.jpeg"

    try {
        await db.insert(products).values({ name, category, quantity, price, imageUrl });
        console.log('Product created successfully');
        revalidatePath('/')
    } catch (error) {
        console.error('Failed to create product:', error);
    }
}

export async function deleteProduct(productId: number) {
    try {
        await db.delete(products).where(eq(products.id, productId));
        revalidatePath('/')
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
        const orderList = await db.select().from(orders).orderBy(desc(orders.id))
        return orderList
    } catch (error) {
        console.error('Failed to get orders:', error);
        throw new Error("Failed to fetch orders");
    }
}
// TODO: Run seed script elsewhere
// async function seedDatabase() {
//     try {
//         console.log("🌱 Seeding database...");
//         // Clear the table (optional: only for dev environment)
//         await db.delete(products);

//         // Insert mock products
//         for (const product of mockProducts) {
//             await db.insert(products).values(product);
//         }
//         console.log("✅ Database seeding complete!");
//     } catch (error) {
//         console.error("❌ Error seeding database:", error);
//     } finally {
//         process.exit();
//     }
// }
// await seedDatabase()