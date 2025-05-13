"use client"
import { PalindromeForm } from '@/components/palindrome-form';
import { useCheckPalindrome, useDeletePalindrome, useDeletePalindromeHistory, usePalindromeHistory } from '../hooks/palindrome';
import { PalindromeHistory } from '@/components/palindrome-history';
import { IsPalindromeLable } from '@/components/is-palindrome-lable';

export default function Home() {
  const checkMutation = useCheckPalindrome();
  const { data: history } = usePalindromeHistory(10);
  const deleteHistoryMutation = useDeletePalindromeHistory();

  const deletePalindromeMutation = useDeletePalindrome();

  const handleDeletePalindrome = (id: number) => {
    deletePalindromeMutation.mutate(id);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('text') as string;

    if (text.trim()) {
      checkMutation.mutate({ text });
    }
  };

  const handleDeleteHistory = () => {
    deleteHistoryMutation.mutate();
  };

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Palindrome Checker</h1>
      <PalindromeForm handleSubmit={handleSubmit} isPalindrome={checkMutation.data?.isPalindrome ?? false} />
    

      {checkMutation.data && (
        <IsPalindromeLable text={checkMutation.variables?.text ?? ''} isPalindrome={checkMutation.data.isPalindrome} />
      )}

      <div className="mt-8">
        <PalindromeHistory history={history} onDelete={handleDeleteHistory} onDeletePalindrome={handleDeletePalindrome}/>
      </div>
    </main>
  );
}


