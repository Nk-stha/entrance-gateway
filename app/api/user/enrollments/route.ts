import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.entrancegateway.com'

export async function GET(request: NextRequest) {
  try {
    // Get access token from cookies or Authorization header
    const cookieStore = await cookies()
    let accessToken = cookieStore.get('accessToken')?.value

    // If not in cookies, check Authorization header (for client-side requests)
    if (!accessToken) {
      const authHeader = request.headers.get('Authorization')
      if (authHeader?.startsWith('Bearer ')) {
        accessToken = authHeader.substring(7)
      }
    }

    if (!accessToken) {
      console.error('❌ No access token found for enrollments request')
      return NextResponse.json(
        { message: 'Unauthorized', data: null },
        { status: 401 }
      )
    }

    console.log('📤 Fetching enrollments from backend...')

    // Fetch user's enrollments from backend
    const response = await fetch(`${API_BASE_URL}/api/v1/training-enrollments/my-enrollments`, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Authorization': `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    })

    console.log('📥 Backend response status:', response.status)

    if (!response.ok) {
      const error = await response.json().catch(() => ({ 
        message: 'Failed to fetch enrollments',
        data: null 
      }))
      console.error('❌ Backend error:', error)
      return NextResponse.json(error, { status: response.status })
    }

    const data = await response.json()
    console.log('✅ Enrollments fetched successfully:', data)
    return NextResponse.json(data)
  } catch (error) {
    console.error('❌ Error fetching user enrollments:', error)
    return NextResponse.json(
      { message: 'Internal server error', data: null },
      { status: 500 }
    )
  }
}
