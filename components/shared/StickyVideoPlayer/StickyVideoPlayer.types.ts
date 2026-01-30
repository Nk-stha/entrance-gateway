export interface StickyVideoPlayerProps {
  videoId: string
  title?: string
  autoPlay?: boolean
  className?: string
  stickyPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  stickySize?: 'sm' | 'md' | 'lg'
}

export interface VideoPlayerState {
  isSticky: boolean
  isPlaying: boolean
  isVisible: boolean
}
