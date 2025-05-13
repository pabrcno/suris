import { Palindrome } from "@/db/schema"

export const PalindromeHistory = (
    {
        history,
        onDelete,
        onDeletePalindrome
    }: {
        history?: Palindrome[]
        onDelete: () => void
        onDeletePalindrome: (id: number) => void
    }
) => {
  return (
    <>
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-4">Recent Checks</h2>
            <button onClick={onDelete} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Delete History
            </button>
        </div>
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
              <button onClick={() => onDeletePalindrome(item.id)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">X</button>
            </div>
          ))}
        </div>
    
    </>
  );
};