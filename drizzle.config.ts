import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'palindrome',
  },
} satisfies Config; 