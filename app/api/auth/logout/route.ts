import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    const cookieStore = await cookies()
    
    // Clear all auth-related cookies
    const cookiesToDelete = [
      'accessToken',
      'refreshToken', 
      'userId',
    ]
    
    cookiesToDelete.forEach(cookieName => {
      cookieStore.delete(cookieName)
    })
    
    return NextResponse.json({
      success: true,
      message: 'Logged out successfully',
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
