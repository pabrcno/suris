
/**
 * Checks if a given text is a palindrome, considering letters and numbers only.
 * 
 * This implementation uses a two-pointer approach (O(n) time, O(1) space)
 * instead of reversing the string (which would require O(n) extra space).
 * 
 * It also normalizes accented characters (e.g., 'á' -> 'a') 
 * and removes non-alphanumeric characters.
 */
export const isPalindrome = (text: string): boolean => {
    const cleanStr = text
      .toLowerCase()
      .normalize('NFD')                  // Separate letters and accents
      .replace(/[\u0300-\u036f]/g, '')    // Remove accents
      .replace(/[^a-z0-9]/g, '');         // Remove non-alphanumeric characters
  
    let left = 0;
    let right = cleanStr.length - 1;
  
    while (left < right) {
      if (cleanStr[left] !== cleanStr[right]) return false;
      left++;
      right--;
    }
  
    return true;
  };