import { pgTable, text, integer, timestamp, uuid } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text('name'),
    category: text('category'),
    quantity: integer('quantity'),
    price: integer('price'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});
