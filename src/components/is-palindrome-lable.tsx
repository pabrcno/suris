export const IsPalindromeLable = (
    {
        text,
        isPalindrome
    }: {
        text: string,
        isPalindrome: boolean
    }
) => {
    return (
        <div className={`p-4 rounded mb-8 ${isPalindrome ? 'bg-green-200 border border-green-600 text-green-800' : 'bg-red-200 border border-red-600 text-red-800'}`}>
        <p className="text-center font-semibold">
          "{text}" is {isPalindrome ? 'a palindrome' : 'not a palindrome'}
        </p>
      </div>
    )
}