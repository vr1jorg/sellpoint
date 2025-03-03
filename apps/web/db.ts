import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: 'postgresql://admin:password@localhost:5432/sellhub',
});

export const db = drizzle(pool);
