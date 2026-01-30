'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/ui/useIntersectionObserver'
import { cn } from '@/lib/utils/cn'
import type { StickyVideoPlayerProps } from './StickyVideoPlayer.types'

export function StickyVideoPlayer({
  videoId,
  title = 'Video Player',
  autoPlay = true,
  className,
  stickyPosition = 'bottom-right',
  stickySize = 'md',
}: StickyVideoPlayerProps) {
  const [containerRef, isVisible] = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: '-100px',
  })

  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isSticky, setIsSticky] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  // Determine if video should be sticky
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const shouldBeSticky = rect.bottom < 0 || rect.top > window.innerHeight
        setIsSticky(shouldBeSticky)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [containerRef])

  // Auto-play/pause based on visibility
  useEffect(() => {
    if (!autoPlay || !iframeRef.current) return

    const iframe = iframeRef.current
    const command = isVisible ? 'playVideo' : 'pauseVideo'

    // Send command to YouTube iframe API
    iframe.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: command,
        args: [],
      }),
      '*'
    )
  }, [isVisible, autoPlay])

  // Sticky position classes
  const stickyPositionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-20 right-4',
    'top-left': 'top-20 left-4',
  }

  // Sticky size classes
  const stickySizeClasses = {
    sm: 'w-64 h-36',
    md: 'w-80 h-45',
    lg: 'w-96 h-54',
  }

  const handleClose = () => {
    setIsMinimized(true)
    // Pause video when closed
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: 'pauseVideo',
        args: [],
      }),
      '*'
    )
  }

  const handleReopen = () => {
    setIsMinimized(false)
  }

  return (
    <>
      {/* Original Video Container */}
      <div
        ref={containerRef}
        className={cn(
          'relative w-full rounded-3xl overflow-hidden transition-opacity duration-300',
          isSticky && !isMinimized ? 'opacity-0' : 'opacity-100',
          className
        )}
      >
        <div className="aspect-video w-full">
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Sticky Video Player */}
      {isSticky && !isMinimized && (
        <div
          className={cn(
            'fixed z-50 transition-all duration-500 ease-out',
            'animate-in slide-in-from-bottom-4 fade-in',
            stickyPositionClasses[stickyPosition],
            stickySizeClasses[stickySize]
          )}
          style={{
            animation: 'slideInUp 0.5s ease-out',
          }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-brand-gold">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-1.5 transition-colors"
              aria-label="Close sticky video"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Video */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1&autoplay=1`}
              title={`${title} (Sticky)`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Reopen Button (when minimized) */}
      {isSticky && isMinimized && (
        <button
          onClick={handleReopen}
          className={cn(
            'fixed z-50 bg-brand-gold hover:bg-yellow-400 text-brand-navy rounded-full p-4 shadow-2xl transition-all duration-300',
            'animate-in slide-in-from-bottom-4 fade-in',
            stickyPositionClasses[stickyPosition]
          )}
          aria-label="Reopen video"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </>
  )
}
