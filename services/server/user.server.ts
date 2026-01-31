// Server-side User API calls (for SSR)
// Uses cookies for authentication

import { cookies } from 'next/headers'
import type { UserResponse } from '@/types/user.types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.entrancegateway.com'

/**
 * Fetch user profile on server-side
 * Uses httpOnly cookies for authentication
 */
export async function getUserProfile(): Promise<UserResponse | null> {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
      console.log('⚠️ No access token found in cookies')
      return null
    }

    console.log('🔍 [SSR] Fetching user profile...')

    const response = await fetch(`${API_BASE_URL}/api/v1/user/me`, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Authorization': `Bearer ${accessToken}`,
      },
      cache: 'no-store', // Don't cache user data
    })

    if (!response.ok) {
      console.error('❌ [SSR] Failed to fetch user profile:', response.status)
      return null
    }

    const data = await response.json()
    console.log('✅ [SSR] User profile fetched successfully')
    return data
  } catch (error) {
    console.error('❌ [SSR] Error fetching user profile:', error)
    return null
  }
}
