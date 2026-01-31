import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.entrancegateway.com'

export async function POST(request: NextRequest) {
  try {
    // Get access token from cookies
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
      return NextResponse.json(
        { message: 'Unauthorized', data: null },
        { status: 401 }
      )
    }

    const body = await request.json()

    console.log('🔐 Changing password...')

    // Call backend API: POST /api/v1/user/change-password
    const response = await fetch(`${API_BASE_URL}/api/v1/user/change-password`, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Failed to change password' }))
      console.error('❌ Password change failed:', error)
      return NextResponse.json(error, { status: response.status })
    }

    const data = await response.json()
    console.log('✅ Password changed successfully')
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error changing password:', error)
    return NextResponse.json(
      { message: 'Internal server error', data: null },
      { status: 500 }
    )
  }
}
