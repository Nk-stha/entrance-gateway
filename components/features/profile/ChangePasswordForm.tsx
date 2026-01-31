'use client'

import { useState, FormEvent } from 'react'
import { PasswordInput } from '@/components/shared/Form/PasswordInput'
import { PasswordStrength } from '@/components/shared/Form/PasswordStrength'
import { Spinner } from '@/components/shared/Loading'
import { useToast } from '@/components/shared/Toast'

// Calculate password strength score (0-4)
function calculatePasswordScore(password: string): number {
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/\d/.test(password)) score++
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++
  return Math.min(score, 4)
}

export function ChangePasswordForm() {
  const { success, error: showError } = useToast()
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const validateCurrentPassword = (value: string): string => {
    if (!value) return 'Current password is required'
    return ''
  }

  const validateNewPassword = (value: string): string => {
    if (!value) return 'New password is required'
    if (value.length < 8) return 'Password must be at least 8 characters long'
    if (value === formData.currentPassword) return 'New password must be different from current password'
    return ''
  }

  const validateConfirmPassword = (value: string): string => {
    if (!value) return 'Please confirm your new password'
    if (value !== formData.newPassword) return 'Passwords do not match'
    return ''
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFieldErrors({})

    // Validate all fields
    const errors: Record<string, string> = {}
    
    const currentPasswordError = validateCurrentPassword(formData.currentPassword)
    if (currentPasswordError) errors.currentPassword = currentPasswordError

    const newPasswordError = validateNewPassword(formData.newPassword)
    if (newPasswordError) errors.newPassword = newPasswordError

    const confirmPasswordError = validateConfirmPassword(formData.confirmPassword)
    if (confirmPasswordError) errors.confirmPassword = confirmPasswordError

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      showError('Please fix the validation errors')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/user/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
          confirmPassword: formData.confirmPassword,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to change password')
      }

      success('Password changed successfully!')
      
      // Reset form
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      })
    } catch (err) {
      showError(err instanceof Error ? err.message : 'Failed to change password')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white shadow rounded-lg mb-6">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-semibold text-brand-navy border-b border-gray-200 pb-4 mb-6">
          Change Password
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current Password */}
          <div>
            <PasswordInput
              id="current-password"
              label="Current Password"
              value={formData.currentPassword}
              onChange={(e) => {
                setFormData({ ...formData, currentPassword: e.target.value })
                if (fieldErrors.currentPassword) {
                  setFieldErrors({ ...fieldErrors, currentPassword: '' })
                }
              }}
              onBlur={() => {
                const error = validateCurrentPassword(formData.currentPassword)
                if (error) setFieldErrors({ ...fieldErrors, currentPassword: error })
              }}
              placeholder="Enter your current password"
              autoComplete="current-password"
              required
            />
            {fieldErrors.currentPassword && (
              <p className="mt-1 text-xs text-semantic-error">{fieldErrors.currentPassword}</p>
            )}
          </div>

          {/* New Password */}
          <div>
            <PasswordInput
              id="new-password"
              label="New Password"
              value={formData.newPassword}
              onChange={(e) => {
                setFormData({ ...formData, newPassword: e.target.value })
                if (fieldErrors.newPassword) {
                  setFieldErrors({ ...fieldErrors, newPassword: '' })
                }
              }}
              onBlur={() => {
                const error = validateNewPassword(formData.newPassword)
                if (error) setFieldErrors({ ...fieldErrors, newPassword: error })
              }}
              placeholder="Enter your new password"
              autoComplete="new-password"
              required
            />
            {fieldErrors.newPassword && (
              <p className="mt-1 text-xs text-semantic-error">{fieldErrors.newPassword}</p>
            )}
            {formData.newPassword && !fieldErrors.newPassword && (
              <div className="mt-2">
                <PasswordStrength
                  score={calculatePasswordScore(formData.newPassword)}
                  hasLength={formData.newPassword.length >= 8}
                  hasNumber={/\d/.test(formData.newPassword)}
                  hasSpecial={/[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword)}
                />
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <PasswordInput
              id="confirm-password"
              label="Confirm New Password"
              value={formData.confirmPassword}
              onChange={(e) => {
                setFormData({ ...formData, confirmPassword: e.target.value })
                if (fieldErrors.confirmPassword) {
                  setFieldErrors({ ...fieldErrors, confirmPassword: '' })
                }
              }}
              onBlur={() => {
                const error = validateConfirmPassword(formData.confirmPassword)
                if (error) setFieldErrors({ ...fieldErrors, confirmPassword: error })
              }}
              placeholder="Confirm your new password"
              autoComplete="new-password"
              required
            />
            {fieldErrors.confirmPassword && (
              <p className="mt-1 text-xs text-semantic-error">{fieldErrors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-gold border border-transparent rounded-lg shadow-sm py-2.5 px-8 inline-flex justify-center text-sm font-bold text-brand-navy hover:bg-[#FFB300] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Spinner size="sm" className="mr-2" />
                  Changing Password...
                </>
              ) : (
                'Change Password'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
