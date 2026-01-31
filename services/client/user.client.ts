// Client-side User API calls (for CSR)
// Uses Next.js API proxy routes for cookie-based authentication

import type { UserResponse, UpdateUserRequest, UpdateUserResponse } from '@/types/user.types'

/**
 * Fetch current user profile (Client-side)
 * Uses Next.js API proxy route with cookie-based auth
 */
export async function fetchUserProfile(): Promise<UserResponse> {
  console.log('🔍 Fetching user profile via API proxy...')

  const response = await fetch('/api/user/me', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    credentials: 'include', // Include cookies
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to fetch user profile' }))
    console.error('❌ API Error:', error)
    
    // If unauthorized, throw specific error
    if (response.status === 401) {
      throw new Error('UNAUTHORIZED')
    }
    
    throw new Error(error.message || 'Failed to fetch user profile')
  }

  const data = await response.json()
  console.log('✅ User profile fetched successfully')
  return data
}

/**
 * Update user profile (Client-side)
 * Uses Next.js API proxy route with cookie-based auth
 */
export async function updateUserProfile(data: UpdateUserRequest): Promise<UpdateUserResponse> {
  console.log('📤 Updating user profile with data:', data)

  const response = await fetch('/api/user/me', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Include cookies
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to update user profile' }))
    console.error('❌ Update Error:', error)
    
    // If unauthorized, throw specific error
    if (response.status === 401) {
      throw new Error('UNAUTHORIZED')
    }
    
    throw new Error(error.message || 'Failed to update user profile')
  }

  const result = await response.json()
  console.log('✅ User profile updated successfully')
  return result
}
