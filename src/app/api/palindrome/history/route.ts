import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { palindromes, selectPalindromeSchema } from '@/db/schema';
import { desc } from 'drizzle-orm';
import { z } from 'zod';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limitParam = searchParams.get('limit');
    const limit = limitParam ? Math.min(Math.max(Number(limitParam), 1), 500) : 10;

    const historyData = await db
      .select()
      .from(palindromes)
      .orderBy(desc(palindromes.createdAt))
      .limit(limit);
      

    const validatedHistory = z.array(selectPalindromeSchema).parse(historyData);

    return NextResponse.json(validatedHistory);
  } catch (error) {
    console.error('Error retrieving history:', error);
    return NextResponse.json([], { status: 200 }); 
  }
}