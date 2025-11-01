import { NextResponse } from 'next/server'
import { getUserPlanByUserId } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { userId } = await req.json()

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }

    const plan = await getUserPlanByUserId(userId)
    return NextResponse.json({ plan })
  } catch (error) {
    console.error('Error getting user plan:', error)
    return NextResponse.json({ error: 'Failed to get user plan' }, { status: 500 })
  }
} 