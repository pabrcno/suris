import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const palindromes = pgTable('palindromes', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  isPalindrome: boolean('is_palindrome').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Zod schemas for type safety
export const insertPalindromeSchema = createInsertSchema(palindromes);
export const selectPalindromeSchema = createSelectSchema(palindromes);

// Type inference
export type Palindrome = z.infer<typeof selectPalindromeSchema>;
export type NewPalindrome = z.infer<typeof insertPalindromeSchema>; 