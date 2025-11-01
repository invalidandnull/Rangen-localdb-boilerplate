import { NextResponse } from 'next/server'
import { getUserCredit, updateUserCredit } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { userId, credit } = await request.json()
    const userCredit = await getUserCredit(userId)
    if (userCredit >= credit) {
      await updateUserCredit(userId, userCredit - credit)
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: 'Insufficient credit' }, { status: 400 })
    }
  } catch (error) {
    console.error('Credit API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
