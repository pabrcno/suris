
export const PalindromeForm = (
    {
        handleSubmit,
        isPalindrome
    }: {
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
       isPalindrome: boolean;
    }
) => {

  return (
 
    <form onSubmit={handleSubmit} className="mb-8">
    <div className="flex gap-4">
      <input
        type="text"
        name="text"
        placeholder="Enter a word or phrase..."
        className={`flex-1 p-2 border rounded-lg bg-transparent text-white ${
          isPalindrome ? 'border-green-500' : 'border-red-500'
        }`}
        required
      />
      <button
        type="submit"
     
        className="px-4 py-2 border border-white rounded-lg bg-transparent text-white hover:bg-purple-700 disabled:opacity-50"
      >
        Check
      </button>
    </div>
  </form>
  );
};