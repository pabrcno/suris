import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import type { Database } from './types';
import { createInMemoryDBWrapper } from './memory';


let db: Database;

const connectionString = process.env.DATABASE_URL;

if (!connectionString || connectionString === 'memory') {
  console.log('Using in-memory database as specified by DATABASE_URL=memory');

  db = createInMemoryDBWrapper();
} else {
  try {
    const client = postgres(connectionString, { prepare: false });
    db = drizzle(client, { schema });
    
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.warn('Failed to connect to PostgreSQL, using in-memory database instead:', error);

    db = createInMemoryDBWrapper();
  }
}

export { db }; 