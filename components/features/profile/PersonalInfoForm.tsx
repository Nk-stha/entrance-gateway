'use client'

import { useState, useEffect } from 'react'
import { FormInput } from '@/components/shared/Form/FormInput'
import type { User } from '@/types/user.types'

interface PersonalInfoFormProps {
  userData: User | null
  onDataChange: (field: string, value: string) => void
}

export function PersonalInfoForm({ userData, onDataChange }: PersonalInfoFormProps) {
  const [isEmailVerified, setIsEmailVerified] = useState(false)

  useEffect(() => {
    if (userData) {
      setIsEmailVerified(userData.isVerified)
    }
  }, [userData])

  if (!userData) {
    return (
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-200 rounded w-48" />
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-24" />
                <div className="h-10 bg-gray-200 rounded" />
              </div>
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-24" />
                <div className="h-10 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Split fullname into first and last name
  const nameParts = userData.fullname.split(' ')
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''

  // Extract phone number (remove +977 prefix)
  const phoneNumber = userData.contact.replace('+977', '').replace('977', '')

  return (
    <div className="bg-white shadow rounded-lg mb-6">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-semibold text-brand-navy border-b border-gray-200 pb-4 mb-6">
          Personal Information
        </h3>
        <div className="grid grid-cols-6 gap-6">
          {/* First Name */}
          <div className="col-span-6 sm:col-span-3">
            <FormInput
              id="first-name"
              label="First name"
              type="text"
              value={firstName}
              onChange={(e) => {
                const newFullname = `${e.target.value} ${lastName}`.trim()
                onDataChange('fullname', newFullname)
              }}
              autoComplete="given-name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="col-span-6 sm:col-span-3">
            <FormInput
              id="last-name"
              label="Last name"
              type="text"
              value={lastName}
              onChange={(e) => {
                const newFullname = `${firstName} ${e.target.value}`.trim()
                onDataChange('fullname', newFullname)
              }}
              autoComplete="family-name"
              required
            />
          </div>

          {/* Email (Read-only) */}
          <div className="col-span-6 sm:col-span-3">
            <FormInput
              id="email"
              label="Email address"
              type="email"
              value={userData.email}
              readOnly
              disabled
              autoComplete="email"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              }
              validationIcon={
                isEmailVerified ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-success">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                ) : undefined
              }
              isValid={isEmailVerified}
            />
          </div>

          {/* Phone */}
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-600 sm:text-sm">
                +977
              </span>
              <input
                id="phone"
                type="text"
                value={phoneNumber}
                onChange={(e) => onDataChange('contact', `+977${e.target.value}`)}
                placeholder="98XXXXXXXX"
                autoComplete="tel"
                required
                className="flex-1 block w-full rounded-none rounded-r-lg border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm py-3 px-4"
              />
            </div>
          </div>

          {/* Address */}
          <div className="col-span-6 sm:col-span-3">
            <FormInput
              id="address"
              label="Address"
              type="text"
              value={userData.address}
              onChange={(e) => onDataChange('address', e.target.value)}
              placeholder="e.g., Kathmandu, Nepal"
              autoComplete="street-address"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="col-span-6 sm:col-span-3">
            <FormInput
              id="dob"
              label="Date of Birth"
              type="date"
              value={userData.dob}
              onChange={(e) => onDataChange('dob', e.target.value)}
              className="text-gray-600"
              required
            />
          </div>
        </div>
      </div>
    </div>
  )
}
