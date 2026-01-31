'use client'

import { useState } from 'react'
import type { User } from '@/types/user.types'

interface ProfileHeaderProps {
  userData: User | null
}

export function ProfileHeader({ userData }: ProfileHeaderProps) {
  const [isUploading, setIsUploading] = useState(false)

  const handleAvatarChange = () => {
    // TODO: Implement avatar upload
    setIsUploading(true)
    setTimeout(() => setIsUploading(false), 1000)
  }

  if (!userData) {
    return (
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="md:flex md:items-center md:justify-between animate-pulse">
            <div className="flex items-center">
              <div className="h-20 w-20 bg-gray-200 rounded-full" />
              <div className="ml-4 space-y-2">
                <div className="h-6 w-48 bg-gray-200 rounded" />
                <div className="h-4 w-64 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="h-10 w-32 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Extract location from address
  const location = userData.address.split(',').pop()?.trim() || 'Nepal'

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center">
            <span className="relative inline-block">
              <div className="h-20 w-20 rounded-full bg-brand-blue flex items-center justify-center text-white text-2xl font-bold shadow-sm">
                {userData.fullname.charAt(0).toUpperCase()}
              </div>
              {userData.isVerified && (
                <span className="absolute bottom-0 right-0 block h-5 w-5 rounded-full ring-2 ring-white bg-success"></span>
              )}
            </span>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-bold text-brand-navy">{userData.fullname}</h3>
              <p className="text-sm text-gray-600">
                {userData.interested.toUpperCase()} Preparation • {location}
              </p>
            </div>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              onClick={handleAvatarChange}
              disabled={isUploading}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors disabled:opacity-50"
              type="button"
            >
              {isUploading ? 'Uploading...' : 'Change Avatar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
