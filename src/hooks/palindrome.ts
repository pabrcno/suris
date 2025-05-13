
import { Palindrome } from '@/db/schema';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


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

export const useDeletePalindromeHistory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/palindrome/history', {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete history');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['palindromeHistory'] });
    },
  });
};


export const useDeletePalindrome = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await fetch(`/api/palindrome/${id}`, {
        method: 'DELETE',
      });
     
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['palindromeHistory'] });
    },
  });
};

