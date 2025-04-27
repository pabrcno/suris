"use client"
import { useCheckPalindrome, usePalindromeHistory } from '../hooks/palindrome';

function Home() {
  const checkMutation = useCheckPalindrome();
  const { data: history } = usePalindromeHistory(10);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('text') as string;

    if (text.trim()) {
      checkMutation.mutate({ text });
    }
  };

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Palindrome Checker</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            name="text"
            placeholder="Enter a word or phrase..."
            className={`flex-1 p-2 border rounded-lg bg-transparent text-white ${
              checkMutation.data ? (checkMutation.data.isPalindrome ? 'border-green-500' : 'border-red-500') : 'border-white'
            }`}
            required
          />
          <button
            type="submit"
            disabled={checkMutation.isPending}
            className="px-4 py-2 border border-white rounded-lg bg-transparent text-white hover:bg-purple-700 disabled:opacity-50"
          >
            Check
          </button>
        </div>
      </form>

      {checkMutation.data && (
        <div className={`p-4 rounded mb-8 ${checkMutation.data.isPalindrome ? 'bg-green-200 border border-green-600 text-green-800' : 'bg-red-200 border border-red-600 text-red-800'}`}>
          <p className="text-center font-semibold">
            "{checkMutation.variables?.text}" is {checkMutation.data.isPalindrome ? 'a palindrome' : 'not a palindrome'}
          </p>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Checks</h2>
        <div className="space-y-2">
          {history?.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded border ${
                item.isPalindrome ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700'
              }`}
            >
              <p className="font-medium">"{item.text}"</p>
              <p className="text-sm text-gray-700">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
