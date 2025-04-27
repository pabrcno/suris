
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export type Palindrome = {
  id: string;
  text: string;
  isPalindrome: boolean;
  createdAt: string;
};

export const useCheckPalindrome = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ text }: { text: string }) => {
      const response = await fetch('/api/palindrome/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) throw new Error('Failed to check palindrome');
      return response.json() as Promise<{ isPalindrome: boolean }>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['palindromeHistory'] });
    },
  });
};

export const usePalindromeHistory = (limit = 10) => {
  return useQuery({
    queryKey: ['palindromeHistory', limit],
    queryFn: async () => {
      const response = await fetch(`/api/palindrome/history?limit=${limit}`);
      if (!response.ok) throw new Error('Failed to fetch history');
      return response.json() as Promise<Palindrome[]>;
    },
  });
};
