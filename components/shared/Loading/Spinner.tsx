import { cn } from '@/lib/utils/cn'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

/**
 * Spinner Loader
 * 
 * General purpose loading spinner for inline loading states.
 */
export function Spinner({ size = 'md', className }: SpinnerProps) {
  const sizeClasses = {
    sm: 'size-4 border-2',
    md: 'size-8 border-2',
    lg: 'size-12 border-3',
    xl: 'size-16 border-4',
  }

  return (
    <div
      className={cn(
        'inline-block animate-spin rounded-full border-solid border-brand-blue border-r-transparent',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

/**
 * Centered Spinner
 * 
 * Spinner centered in a container with optional text.
 */
interface CenteredSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  className?: string
}

export function CenteredSpinner({ size = 'lg', text, className }: CenteredSpinnerProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-4 py-12', className)}>
      <Spinner size={size} />
      {text && <p className="text-sm text-gray-600 font-medium">{text}</p>}
    </div>
  )
}
