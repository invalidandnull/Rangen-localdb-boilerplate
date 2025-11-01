import { NextResponse } from 'next/server'
import { getUserCredit } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { userId } = await request.json()
    const userCredit = await getUserCredit(userId)
    return NextResponse.json({ userCredit })
  } catch (error) {
    console.error('Credit API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
