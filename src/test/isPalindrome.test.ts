import { isPalindrome } from '@/app/api/palindrome/check/utils/isPalindrome';
import { describe, it, expect } from 'vitest';

describe('Palindrome Detection', () => {
  // Test cases for valid palindromes
  describe('Valid Palindromes', () => {
    const validPalindromes = [
      'Anana',
      'Radar',
      'Somos',
      'La ruta natural',
      'A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá'
    ];

    validPalindromes.forEach(text => {
      it(`should correctly identify "${text}" as a palindrome`, () => {
        expect(isPalindrome(text)).toBe(true);
      });
    });
  });

  // Test cases for non-palindromes
  describe('Non-Palindromes', () => {
    const nonPalindromes = [
      'Casa',
      'Perro',
      'Camino',
      'Buenos días',
      'Hola mundo',
      'COBOL es un lenguaje de programación'
    ];

    nonPalindromes.forEach(text => {
      it(`should correctly identify "${text}" as not a palindrome`, () => {
        expect(isPalindrome(text)).toBe(false);
      });
    });
  });

  // Test edge cases
  describe('Edge Cases', () => {
    it('should handle empty strings', () => {
      expect(isPalindrome('')).toBe(true);
    });

    it('should handle single characters', () => {
      expect(isPalindrome('a')).toBe(true);
    });

    it('should handle strings with only special characters', () => {
      expect(isPalindrome('!@#$%^&*()')).toBe(true);
    });

    it('should handle strings with mixed case', () => {
      expect(isPalindrome('RaDaR')).toBe(true);
    });

    it('should handle strings with spaces and punctuation', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });
  });
}); 