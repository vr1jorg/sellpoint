'use server';

import { mockProducts } from './constants';
import { db } from './db';
import { products } from './schema';
import { eq } from 'drizzle-orm';

async function seedDatabase() {
    try {
        console.log("🌱 Seeding database...");

        // Clear the table (optional: only for dev environment)
        await db.delete(products);

        // Insert mock products
        for (const product of mockProducts) {
            const existingProduct = await db
                .select()
                .from(products)
                .where(eq(products.id, product.id));

            if (existingProduct.length === 0) {
                await db.insert(products).values(product);
                console.log(`✅ Inserted product: ${product.name}`);
            } else {
                console.log(`⚠️ Product already exists: ${product.name}`);
            }
        }

        console.log("✅ Database seeding complete!");
    } catch (error) {
        console.error("❌ Error seeding database:", error);
    } finally {
        process.exit();
    }
}

await seedDatabase()