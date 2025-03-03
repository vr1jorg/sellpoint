CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"products" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp
);
