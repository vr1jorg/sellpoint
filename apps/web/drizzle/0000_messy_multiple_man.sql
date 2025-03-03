CREATE TABLE "products" (
	"id" integer PRIMARY KEY DEFAULT GENERATED ALWAYS AS IDENTITY NOT NULL,
	"name" text,
	"category" text,
	"image_url" text,
	"quantity" integer,
	"price" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
