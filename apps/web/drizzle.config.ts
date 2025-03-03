import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./schema.ts",
    dbCredentials: {
        url: "postgresql://admin:password@localhost:5432/sellhub"
    },
});
