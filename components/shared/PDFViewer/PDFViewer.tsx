'use client'

import { useState, createContext, use } from 'react'
import { cn } from '@/lib/utils/cn'
import type { PDFViewerProps, PDFToolbarProps } from './PDFViewer.types'

// Context for PDF viewer state
interface PDFViewerContextValue {
  currentPage: number
  totalPages: number
  zoom: number
  setCurrentPage: (page: number | ((prev: number) => number)) => void
  setZoom: (zoom: number | ((prev: number) => number)) => void
}

const PDFViewerContext = createContext<PDFViewerContextValue | null>(null)

// Provider Component
function PDFViewerProvider({ children, totalPages = 12 }: { children: React.ReactNode; totalPages?: number }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)

  return (
    <PDFViewerContext.Provider value={{ currentPage, totalPages, zoom, setCurrentPage, setZoom }}>
      {children}
    </PDFViewerContext.Provider>
  )
}

// Main Container
function PDFViewerContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('bg-white rounded-xl shadow-md border border-gray-200 flex flex-col h-[80vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] min-h-[600px] overflow-hidden', className)}>
      {children}
    </div>
  )
}

// Toolbar Component
function PDFViewerToolbar({ onDownload, onFullscreen }: { onDownload?: () => void; onFullscreen?: () => void }) {
  const { currentPage, totalPages, zoom, setCurrentPage, setZoom } = use(PDFViewerContext)!

  const handleZoomIn = () => setZoom((prev: number) => Math.min(prev + 10, 200))
  const handleZoomOut = () => setZoom((prev: number) => Math.max(prev - 10, 50))
  const handlePrevPage = () => setCurrentPage((prev: number) => Math.max(prev - 1, 1))
  const handleNextPage = () => setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))

  return (
    <div className="flex flex-col gap-3 px-3 py-3 sm:px-4 sm:py-3 md:flex-row md:items-center md:justify-between bg-white border-b border-gray-200 z-10">
      {/* Top Row: Zoom + Page Navigation */}
      <div className="flex items-center justify-between gap-3 md:gap-4 w-full md:w-auto">
        {/* Zoom Controls */}
        <div className="flex items-center bg-gray-100 rounded-lg p-1">
          <button
            onClick={handleZoomOut}
            className="p-1.5 text-gray-600 hover:bg-white hover:shadow-sm rounded transition-all"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
            </svg>
          </button>
          <span className="px-2 sm:px-3 text-xs sm:text-sm font-medium text-gray-700 min-w-[2.5rem] sm:min-w-[3rem] text-center">
            {zoom}%
          </span>
          <button
            onClick={handleZoomIn}
            className="p-1.5 text-gray-600 hover:bg-white hover:shadow-sm rounded transition-all"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z" />
            </svg>
          </button>
        </div>

        {/* Page Navigation */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            title="Previous Page"
            aria-label="Previous Page"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <div className="text-xs sm:text-sm text-gray-700 whitespace-nowrap flex items-center gap-1">
            <span className="hidden sm:inline">Page</span>
            <input
              type="number"
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value)
                if (page >= 1 && page <= totalPages) {
                  setCurrentPage(page)
                }
              }}
              className="w-10 sm:w-12 text-center p-1 rounded border border-gray-300 bg-transparent text-xs sm:text-sm focus:ring-brand-blue focus:border-brand-blue"
              min={1}
              max={totalPages}
              aria-label="Current page"
            />
            <span className="text-gray-500">/</span>
            <span>{totalPages}</span>
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            title="Next Page"
            aria-label="Next Page"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Row: Actions */}
      <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto">
        {onFullscreen && (
          <button
            onClick={onFullscreen}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden sm:block"
            title="Fullscreen"
            aria-label="Fullscreen"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
            </svg>
          </button>
        )}
        {onDownload && (
          <button
            onClick={onDownload}
            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 sm:gap-2 bg-brand-gold hover:bg-yellow-400 text-brand-navy px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-all"
            aria-label="Download Syllabus"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5">
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
            </svg>
            <span className="hidden xs:inline sm:inline">Download</span>
            <span className="xs:hidden sm:hidden">PDF</span>
          </button>
        )}
      </div>
    </div>
  )
}

// Canvas/Content Area
function PDFViewerCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 bg-gray-100 overflow-y-auto p-2 sm:p-4 md:p-6 lg:p-8 flex justify-center pdf-scroll">
      {children}
    </div>
  )
}

// Page Component
function PDFViewerPage({ children, pageNumber }: { children: React.ReactNode; pageNumber?: number }) {
  return (
    <div className="bg-white text-black shadow-lg w-full max-w-[800px] min-h-[900px] sm:min-h-[900px] md:min-h-[1000px] lg:min-h-[1132px] p-6 sm:p-8 md:p-12 lg:p-16 relative text-sm sm:text-base">
      {children}
      {pageNumber && (
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 text-center">
          <span className="text-xs text-gray-400 font-mono">Page {pageNumber}</span>
        </div>
      )}
    </div>
  )
}

// Compound Component Export
export const PDFViewer = {
  Provider: PDFViewerProvider,
  Container: PDFViewerContainer,
  Toolbar: PDFViewerToolbar,
  Canvas: PDFViewerCanvas,
  Page: PDFViewerPage,
}
