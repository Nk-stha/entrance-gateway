export interface ExpandingVideoPlayerProps {
  videoId: string
  title?: string
  leftContent?: React.ReactNode
  threshold?: number
  className?: string
}

export interface VideoExpansionState {
  isExpanded: boolean
  expansionProgress: number
  isInView: boolean
}
