'use client'

import { PDFViewer } from '@/components/shared/PDFViewer'
import { NotesDetailSidebar } from './NotesDetailSidebar'

interface NotesDetailContentProps {
  noteId: string
}

export function NotesDetailContent({ noteId }: NotesDetailContentProps) {
  // Mock data - replace with actual data fetching
  const noteData = {
    id: 'QSET-2023-DL',
    subject: 'Digital Logic',
    examYear: '2021',
    course: 'BCA',
    university: 'Tribhuvan University',
    verified: true,
    description: 'question',
  }

  const handleDownload = () => {
    console.log('Download note')
  }

  const handleFullscreen = () => {
    console.log('Toggle fullscreen')
  }

  return (
    <main className="flex-grow">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        {/* Main Content Grid - PDF First on Mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* PDF Viewer - Full width on mobile, 8 cols on desktop */}
          <div className="w-full lg:col-span-8 order-1 flex flex-col gap-6">
            <PDFViewer.Provider totalPages={5}>
              <PDFViewer.Container>
                <PDFViewer.Toolbar
                  onDownload={handleDownload}
                  onFullscreen={handleFullscreen}
                />
                <PDFViewer.Canvas>
                  <PDFViewer.Page pageNumber={1}>
                    {/* Simulated Question Paper Content */}
                    <div className="border-b-2 border-gray-900 pb-4 sm:pb-6 mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 sm:size-10 text-gray-900 shrink-0">
                            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                          </svg>
                          <div>
                            <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold leading-none">
                              Tribhuvan University
                            </h1>
                            <span className="text-xs font-serif italic text-gray-600">
                              Faculty of Humanities & Social Sciences
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-left sm:text-right font-serif text-sm">
                        <div className="font-bold">BCA / 2021</div>
                        <div>Full Marks: 100</div>
                        <div>Time: 3 hrs</div>
                      </div>
                    </div>

                    <div className="font-serif text-center mb-8 sm:mb-10">
                      <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest decoration-double underline underline-offset-4">
                        Digital Logic
                      </h3>
                      <p className="text-xs sm:text-sm mt-2 italic text-gray-600">
                        Candidates are required to give their answers in their own words as far as practicable.
                      </p>
                    </div>

                    <div className="space-y-6 sm:space-y-8 font-serif text-sm leading-relaxed">
                      {/* Group A */}
                      <div>
                        <p className="font-bold mb-3 border-b border-gray-200 inline-block pb-1">
                          Group A
                        </p>
                        <p className="mb-4 text-xs sm:text-sm font-medium">
                          Attempt all questions.{' '}
                          <span className="float-right">(10 x 2 = 20)</span>
                        </p>
                        <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-3 marker:font-bold text-xs sm:text-sm">
                          <li>
                            Define digital signal. What are the key advantages of digital systems over analog systems?
                          </li>
                          <li>
                            Convert (11011)<sub>2</sub> to decimal and octal number system showing all steps.
                          </li>
                          <li>
                            State and prove De Morgan's theorems with truth tables.
                          </li>
                          <li>
                            What is a multiplexer? Draw the logic block diagram of a 4:1 MUX.
                          </li>
                          <li>
                            Differentiate between latch and flip-flop with circuit diagrams.
                          </li>
                          <li>
                            Define 'minterm' and 'maxterm' with examples.
                          </li>
                          <li>
                            Draw the logic symbol of NAND, NOR, and XOR gates.
                          </li>
                        </ol>
                      </div>

                      {/* Decorative Divider */}
                      <div className="flex items-center justify-center my-4 sm:my-6 opacity-30">
                        <span className="h-px bg-gray-900 w-12 sm:w-16"></span>
                        <span className="mx-2 text-lg sm:text-xl">⁂</span>
                        <span className="h-px bg-gray-900 w-12 sm:w-16"></span>
                      </div>

                      {/* Group B */}
                      <div>
                        <p className="font-bold mb-3 border-b border-gray-200 inline-block pb-1">
                          Group B
                        </p>
                        <p className="mb-4 text-xs sm:text-sm font-medium">
                          Attempt any six questions.{' '}
                          <span className="float-right">(6 x 10 = 60)</span>
                        </p>
                        <div className="space-y-2 sm:space-y-3 opacity-60 blur-[1px] select-none pointer-events-none text-xs sm:text-sm">
                          <p>
                            8. Explain the operation of a Master-Slave JK flip-flop with a logic diagram.
                          </p>
                          <p>
                            9. Simplify the Boolean function F(w,x,y,z) = Σ(0,1,2,4,5,6,8,9,12,13,14) using K-Map.
                          </p>
                          <p>
                            10. Design a 3-bit synchronous counter using T flip-flops.
                          </p>
                        </div>
                      </div>
                    </div>
                  </PDFViewer.Page>
                </PDFViewer.Canvas>
              </PDFViewer.Container>
            </PDFViewer.Provider>

            {/* Description Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-brand-blue">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy font-heading">
                  Description
                </h3>
              </div>
              <div className="prose prose-sm max-w-none text-gray-600">
                <p>{noteData.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar - Below PDF on mobile, side on desktop */}
          <div className="w-full lg:col-span-4 order-2">
            <NotesDetailSidebar
              info={{
                id: noteData.id,
                subject: noteData.subject,
                examYear: noteData.examYear,
                course: noteData.course,
                university: noteData.university,
                verified: noteData.verified,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
