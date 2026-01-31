'use client'

import { FormInput } from '@/components/shared/Form/FormInput'
import type { User } from '@/types/user.types'

interface EducationalBackgroundFormProps {
  userData: User | null
  onDataChange: (field: string, value: string) => void
}

export function EducationalBackgroundForm({ userData, onDataChange }: EducationalBackgroundFormProps) {
  if (!userData) {
    return (
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-200 rounded w-48" />
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-32" />
                <div className="h-10 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white shadow rounded-lg mb-6">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-semibold text-brand-navy border-b border-gray-200 pb-4 mb-6">
          Educational Background
        </h3>
        <div className="grid grid-cols-6 gap-6">
          {/* Latest Qualification */}
          <div className="col-span-6 sm:col-span-3">
            <FormInput
              id="latest-qualification"
              label="Latest Qualification"
              type="text"
              value={userData.latestQualification}
              onChange={(e) => onDataChange('latestQualification', e.target.value)}
              placeholder="e.g., class11, class12, +2, bachelor"
              required
            />
          </div>

          {/* Course Interest */}
          <div className="col-span-6 sm:col-span-3">
            <FormInput
              id="course-interest"
              label="Interested Course for Entrance"
              type="text"
              value={userData.interested}
              onChange={(e) => onDataChange('interested', e.target.value)}
              placeholder="e.g., ioe, medical, csit"
              required
            />
          </div>
        </div>
      </div>
    </div>
  )
}
