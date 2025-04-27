import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { palindromes, insertPalindromeSchema } from '@/db/schema';
import { isPalindrome } from '@/app/api/palindrome/check/utils/isPalindrome';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const validationResult = insertPalindromeSchema.safeParse({
      text: body.text,
      isPalindrome: isPalindrome(body.text)
    });
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.errors },
        { status: 400 }
      );
    }
    
    const newRecord = validationResult.data;
    
    await db.insert(palindromes).values(newRecord);

    return NextResponse.json({ isPalindrome: newRecord.isPalindrome });
  } catch (error) {
    console.error('Error checking palindrome:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}