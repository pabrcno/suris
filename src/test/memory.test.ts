import { describe, it, expect, beforeEach } from 'vitest';
import inMemoryDB from '@/db/memory';

describe('In-Memory Database', () => {
  beforeEach(async () => {
    await inMemoryDB.delete();
  });

  it('should insert and retrieve palindromes', async () => {
    const palindrome = await inMemoryDB.insert('Radar', true);
    expect(palindrome.text).toBe('Radar');
    expect(palindrome.isPalindrome).toBe(true);
    expect(palindrome.id).toBe(1);

    const palindrome2 = await inMemoryDB.insert('Hello', false);
    expect(palindrome2.text).toBe('Hello');
    expect(palindrome2.isPalindrome).toBe(false);
    expect(palindrome2.id).toBe(2);

    const palindromes = await inMemoryDB.select();
    expect(palindromes).toHaveLength(2);
    expect(palindromes[0].text).toBe('Hello'); 
    expect(palindromes[1].text).toBe('Radar');
  });

  it('should respect the limit parameter', async () => {
    for (let i = 0; i < 15; i++) {
      await inMemoryDB.insert(`Item ${i}`, i % 2 === 0);
    }

    // Retrieve with limit
    const palindromes = await inMemoryDB.select(5);
    expect(palindromes).toHaveLength(5);
    expect(palindromes[0].text).toBe('Item 14');
  });

  it('should clear the database when delete is called', async () => {
    await inMemoryDB.insert('First', true);
    await inMemoryDB.insert('Second', false);

    let palindromes = await inMemoryDB.select();
    expect(palindromes).toHaveLength(2);

    await inMemoryDB.delete();

    palindromes = await inMemoryDB.select();
    expect(palindromes).toHaveLength(0);

    const newPalindrome = await inMemoryDB.insert('New', true);
    expect(newPalindrome.id).toBe(1);
  });
}); 