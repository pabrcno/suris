import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import type { Palindrome } from './schema';

/**
 * Type for the in-memory database wrapper
 * This mimics the Drizzle ORM API structure
 */
export type InMemoryDBWrapper = {
  insert: (table: any) => {
    values: (data: { text: string; isPalindrome: boolean }) => Promise<Palindrome>;
  };
  select: () => {
    from: () => {
      orderBy: () => {
        limit: (limit: number) => Promise<Palindrome[]>;
      };
    };
  };
  delete: (table: any) => Promise<void>;
};

/**
 * Union type for the database instance
 * Can be either a Drizzle PostgreSQL database or our in-memory wrapper
 */
export type Database = PostgresJsDatabase<any> | InMemoryDBWrapper; 