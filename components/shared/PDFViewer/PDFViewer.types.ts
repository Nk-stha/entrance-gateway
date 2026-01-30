export interface PDFViewerProps {
  pdfUrl?: string
  fileName?: string
  totalPages?: number
  onDownload?: () => void
  className?: string
}

export interface PDFToolbarProps {
  currentPage: number
  totalPages: number
  zoom: number
  onPageChange: (page: number) => void
  onZoomIn: () => void
  onZoomOut: () => void
  onDownload?: () => void
  onFullscreen?: () => void
}
