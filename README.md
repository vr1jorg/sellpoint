# Sellpoint: Turborepo with Next.js App Router, Tailwind, tRPC, DrizzleORM, PostgreSQL, and Docker

This README explains the scripts and commands for managing your PostgreSQL database within the Sellhub e-commerce platform.

## 🛢️ Database Access and Queries

- **Access the DB shell:**

  ```bash
  docker exec -it my-turborepo-postgres-1 psql -U admin -d sellhub
  ```

- **List tables:**

  ```sql
  \dt
  ```

- **Query products:**

  ```sql
  SELECT * FROM products;
  ```

- **Describe products table:**

  ```sql
  \d products
  ```

- **Count products:**

  ```sql
  SELECT COUNT(*) FROM products;
  ```

- **Exit the psql shell:**

  ```sql
  \q
  ```

## 🔧 Docker Management

- **Reset the database (remove volumes and restart containers):**

  ```bash
  docker compose down -v
  docker compose up -d
  ```

- **Check Docker container status:**

  ```bash
  docker ps
  ```

## 📘 Drizzle ORM Migration

- **Push database schema changes:**

  ```bash
  npx drizzle-kit generate && npx drizzle-kit push
  ```

## 📜 Database Management Scripts

- **Reset the products table:**

  ```javascript
  async function resetDatabase() {
      await db.execute(sql`DROP TABLE IF EXISTS products CASCADE`);
      console.log('Products table dropped');
  }
  resetDatabase();
  ```

  *Drops the `products` table and logs a confirmation message.*

- **Create an ID sequence for the products table:**

  ```javascript
  async function createProductsIdSequence() {
      await db.execute(sql`CREATE SEQUENCE products_id_seq;`);
      console.log('Products id sequence created');
  }
  await createProductsIdSequence();
  ```

  *Creates a sequence for auto-incrementing product IDs.*

## 🚀 Notes

- Use these scripts cautiously in development, as resetting or dropping tables will erase data.
- Ensure Docker and your database container are running before executing any queries.

## 🔗 tRPC Integration

This app uses the React Server Components (RSC) version of the tRPC integration. For detailed guidance, refer to the [official documentation](https://trpc.io/docs/client/react/server-components). Make sure to review the RSC-specific sections to properly set up your client and server communication.

