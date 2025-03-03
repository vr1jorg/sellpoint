import { pgTable, text, integer, timestamp, serial, jsonb } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
    id: serial("id").primaryKey(),
    name: text('name'),
    category: text('category'),
    imageUrl: text('image_url'),
    quantity: integer('quantity'),
    price: integer('price'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
    deletedAt: timestamp('deleted_at')
});

export const orders = pgTable('orders', {
    id: serial("id").primaryKey(),
    products: jsonb('products').notNull(), // Store the list of products as JSON
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
    deletedAt: timestamp('deleted_at')
});