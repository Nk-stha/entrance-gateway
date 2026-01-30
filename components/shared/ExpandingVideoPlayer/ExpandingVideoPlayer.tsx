'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils/cn'
import type { ExpandingVideoPlayerProps } from './ExpandingVideoPlayer.types'

export function ExpandingVideoPlayer({
  videoId,
  title = 'Video Player',
  className,
}: ExpandingVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false)

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        
        // Start animation when element is 60% into viewport
        const triggerPoint = viewportHeight * 0.6
        const elementTop = rect.top
        
        // Calculate progress (0 to 1)
        if (elementTop <= triggerPoint && elementTop >= -rect.height) {
          const scrollDistance = triggerPoint - elementTop
          const maxScroll = 500
          const progress = Math.min(1, Math.max(0, scrollDistance / maxScroll))
          setScrollProgress(progress)

          // Auto-play video when 60% scrolled
          if (progress > 0.6 && !hasAutoPlayed && iframeRef.current) {
            try {
              iframeRef.current.contentWindow?.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                '*'
              )
              setHasAutoPlayed(true)
            } catch (error) {
              console.error('Failed to auto-play video:', error)
            }
          }
        } else if (elementTop > triggerPoint) {
          setScrollProgress(0)
        } else {
          setScrollProgress(1)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [hasAutoPlayed])

  // Slide down from above
  const translateY = -100 * (1 - scrollProgress)
  const opacity = scrollProgress

  return (
    <div
      ref={containerRef}
      className={cn('relative h-full min-h-[340px]', className)}
    >
      <div
        className="h-full transition-all duration-500 ease-out"
        style={{
          transform: `translateY(${translateY}px)`,
          opacity,
          willChange: 'transform, opacity',
        }}
      >
        <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl h-full">
          <div className="aspect-video relative">
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <button
            className={cn(
              'absolute bottom-4 right-4 z-10',
              'w-12 h-12 rounded-full',
              'flex items-center justify-center',
              'shadow-lg transition-all duration-300',
              'hover:scale-110'
            )}
            style={{ backgroundColor: '#7B2CBF' }}
            aria-label="Pause video"
            onClick={() => {
              iframeRef.current?.contentWindow?.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                '*'
              )
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          </button>

          <div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 origin-left transition-transform duration-300 ease-out"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
      </div>
    </div>
  )
}
