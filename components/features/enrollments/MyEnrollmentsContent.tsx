'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { EnrollmentCard } from './EnrollmentCard'
import { CenteredSpinner } from '@/components/shared/Loading'
import { useToast } from '@/components/shared/Toast'
import type { TrainingEnrollment } from '@/types/trainings.types'

export function MyEnrollmentsContent() {
  const [enrollments, setEnrollments] = useState<TrainingEnrollment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { error } = useToast()

  useEffect(() => {
    loadEnrollments()
  }, [])

  const loadEnrollments = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/user/enrollments')
      
      console.log('Enrollments API response status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        console.error('Enrollments API error:', errorData)
        throw new Error(errorData?.message || 'Failed to fetch enrollments')
      }

      const result = await response.json()
      console.log('Enrollments API result:', result)
      setEnrollments(result.data || [])
    } catch (err) {
      console.error('Error loading enrollments:', err)
      error('Failed to load enrollments')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <CenteredSpinner size="lg" text="Loading your enrollments..." />
        </div>
      </main>
    )
  }

  return (
    <main className="flex-grow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy font-heading mb-2">
            My Training Enrollments
          </h1>
          <p className="text-gray-600 text-sm">
            Track your course applications and learning progress in one place.
          </p>
        </div>

        {/* Enrollments List */}
        {enrollments.length > 0 ? (
          <div className="space-y-6">
            {enrollments.map((enrollment) => (
              <EnrollmentCard
                key={enrollment.enrollmentId}
                enrollment={enrollment}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-16 sm:py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-16 sm:size-20 text-gray-300 mb-4"
            >
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
            </svg>
            <p className="text-gray-500 font-medium mb-4">
              No active enrollments found.
            </p>
            <Link
              href="/trainings"
              className="text-brand-blue font-bold hover:underline"
            >
              Explore Courses
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
