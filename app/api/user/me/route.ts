import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.entrancegateway.com'

export async function GET(request: NextRequest) {
  try {
    // Get access token from cookies or localStorage (via header)
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
      return NextResponse.json(
        { message: 'Unauthorized', data: null },
        { status: 401 }
      )
    }

    const response = await fetch(`${API_BASE_URL}/api/v1/user/me`, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Authorization': `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Failed to fetch user profile' }))
      return NextResponse.json(error, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching user profile:', error)
    return NextResponse.json(
      { message: 'Internal server error', data: null },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Get access token and userId from cookies
    const cookieStore = await cookies()
    let accessToken = cookieStore.get('accessToken')?.value
    const userId = cookieStore.get('userId')?.value

    // If not in cookies, check Authorization header (for client-side requests)
    if (!accessToken) {
      const authHeader = request.headers.get('Authorization')
      if (authHeader?.startsWith('Bearer ')) {
        accessToken = authHeader.substring(7)
      }
    }

    if (!accessToken) {
      return NextResponse.json(
        { message: 'Unauthorized', data: null },
        { status: 401 }
      )
    }

    if (!userId) {
      return NextResponse.json(
        { message: 'User ID not found', data: null },
        { status: 400 }
      )
    }

    const body = await request.json()

    console.log(`📤 Updating profile for user ${userId}:`, body)

    // Use the correct endpoint: PUT /api/v1/user/{id}/update-profile
    const response = await fetch(`${API_BASE_URL}/api/v1/user/${userId}/update-profile`, {
      method: 'PUT',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Failed to update user profile' }))
      console.error('❌ Update failed:', error)
      return NextResponse.json(error, { status: response.status })
    }

    const data = await response.json()
    console.log('✅ Profile updated successfully')
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error updating user profile:', error)
    return NextResponse.json(
      { message: 'Internal server error', data: null },
      { status: 500 }
    )
  }
}
