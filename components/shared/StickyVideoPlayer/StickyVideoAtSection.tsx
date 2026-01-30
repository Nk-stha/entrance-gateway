'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils/cn'

interface StickyVideoAtSectionProps {
  videoId: string
  title?: string
  targetSectionId: string
  className?: string
}

export function StickyVideoAtSection({
  videoId,
  title = 'Video Player',
  targetSectionId,
  className,
}: StickyVideoAtSectionProps) {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const [shouldPlay, setShouldPlay] = useState(false)
  const [videoPosition, setVideoPosition] = useState({ top: 0, left: 0, width: 0 })

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const targetSection = document.getElementById(targetSectionId)
        const videoContainer = videoContainerRef.current

        if (!targetSection || !videoContainer) return

        const targetRect = targetSection.getBoundingClientRect()
        const videoRect = videoContainer.getBoundingClientRect()
        const navbarHeight = 80

        // Calculate scroll progress (0 to 1)
        const scrollStart = videoRect.top
        const scrollEnd = navbarHeight
        const scrollDistance = scrollStart - scrollEnd
        const progress = Math.max(0, Math.min(1, 1 - scrollDistance / 300))

        setScrollProgress(progress)

        // Store original video position for smooth transition
        if (progress === 0) {
          setVideoPosition({
            top: videoRect.top,
            left: videoRect.left,
            width: videoRect.width,
          })
        }

        // Check if video should be sticky
        const hasScrolledPast = videoRect.top < navbarHeight
        const hasReachedTarget = targetRect.top <= navbarHeight

        if (hasScrolledPast && !hasReachedTarget) {
          setIsSticky(true)
          setShouldPlay(true)
        } else {
          setIsSticky(false)
          if (hasReachedTarget) {
            setShouldPlay(true)
          } else {
            setShouldPlay(false)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [targetSectionId])

  // Control video playback
  useEffect(() => {
    if (!iframeRef.current) return

    const command = shouldPlay ? 'playVideo' : 'pauseVideo'
    
    const timeoutId = setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: command,
          args: [],
        }),
        '*'
      )
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [shouldPlay])

  // Calculate interpolated styles based on scroll progress
  const getTransitionStyles = () => {
    if (!isSticky) return {}

    const scale = 0.95 + (scrollProgress * 0.05) // 0.95 to 1
    const opacity = scrollProgress

    return {
      transform: `scale(${scale})`,
      opacity: opacity,
    }
  }

  return (
    <>
      {/* Original Video Container */}
      <div
        ref={videoContainerRef}
        className={cn(
          'relative w-full rounded-3xl overflow-hidden',
          'transition-all duration-500 ease-out',
          isSticky ? 'opacity-0 scale-95' : 'opacity-100 scale-100',
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

      {/* Sticky Video - Smoothly transitions from original position */}
      {isSticky && (
        <div
          className="fixed top-20 left-0 right-0 z-40"
          style={{
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            ...getTransitionStyles(),
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                'relative w-full rounded-2xl overflow-hidden',
                'border-4 bg-black',
                'transition-all duration-500 ease-out',
                'hover:scale-[1.02]'
              )}
              style={{
                borderColor: `rgba(255, 193, 7, ${scrollProgress})`,
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, ${0.25 * scrollProgress}), 
                           0 0 30px rgba(255, 193, 7, ${0.3 * scrollProgress})`,
              }}
            >
              {/* Animated glow effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 via-transparent to-brand-gold/20 pointer-events-none"
                style={{
                  opacity: scrollProgress * 0.5,
                  animation: scrollProgress > 0.8 ? 'pulse 2s ease-in-out infinite' : 'none',
                }}
              />
              
              <div className="aspect-video relative">
                <iframe
                  className="w-full h-full relative z-10"
                  src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1&autoplay=1`}
                  title={`${title} (Sticky)`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Bottom indicator with progress */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
                style={{
                  opacity: scrollProgress,
                  transform: `scaleX(${scrollProgress})`,
                  transition: 'all 0.3s ease-out',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
