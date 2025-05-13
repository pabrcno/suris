import type { Palindrome } from './schema';
import { InMemoryDBWrapper } from './types';


class InMemoryDB {
  private palindromes: Palindrome[] = [];
  private nextId = 1;

  async insert(text: string, isPalindrome: boolean): Promise<Palindrome> {
    const newPalindrome: Palindrome = {
      id: this.nextId++,
      text,
      isPalindrome,
      createdAt: new Date(),
    };
    
    this.palindromes.unshift(newPalindrome); 
    return newPalindrome;
  }

  async select(limit: number = 10): Promise<Palindrome[]> {
   
    return this.palindromes.slice(0, limit);
  }

  async delete(): Promise<void> {
    this.palindromes = [];
    this.nextId = 1;
  }

  async deleteById(id: number): Promise<void> {
    this.palindromes = this.palindromes.filter(p => p.id !== id);
  }
}


/**
 * Creates a wrapper around the in-memory database to match the Drizzle API structure
 * This allows the in-memory database to be used as a drop-in replacement for Drizzle
 */
export const createInMemoryDBWrapper = (): InMemoryDBWrapper => {
  return {
    insert: (table: any) => ({
      values: async (data: { text: string; isPalindrome: boolean }) => {
        return inMemoryDB.insert(data.text, data.isPalindrome);
      }
    }),
    select: () => ({
      from: () => ({
        orderBy: () => ({
          limit: async (limit: number) => inMemoryDB.select(limit)
        })
      })
    }),
    delete: async (table: any) => inMemoryDB.delete()

    
  };
}; 

// Create a singleton instance
const inMemoryDB = new InMemoryDB();
export default inMemoryDB; 