'use client'

import { PDFViewer } from '@/components/shared/PDFViewer'
import { SyllabusDetailSidebar } from './SyllabusDetailSidebar'
import { SyllabusNavigation } from './SyllabusNavigation'

interface SyllabusDetailContentProps {
  courseId: string
}

export function SyllabusDetailContent({ courseId }: SyllabusDetailContentProps) {
  // Mock data - replace with actual data fetching
  const courseData = {
    code: 'CSC382',
    name: 'Automation and Robotics',
    type: 'Core Course',
    program: 'B.Sc CSIT',
    semester: '7th Semester',
    creditHours: 3,
    prerequisite: 'CSC381',
  }

  const handleDownload = () => {
    console.log('Download syllabus')
  }

  const handleFullscreen = () => {
    console.log('Toggle fullscreen')
  }

  return (
    <main className="flex-grow">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        {/* Page Heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-brand-navy text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-2 font-heading">
            {courseData.name}
          </h1>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="bg-brand-gold/20 text-brand-navy px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
              {courseData.type}
            </span>
            <p className="text-gray-600 text-sm sm:text-base font-normal">
              Course Code: {courseData.code} | {courseData.program}
            </p>
          </div>
        </div>

        {/* Main Content - PDF Viewer First (Mobile Priority) */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* PDF Viewer - Full width on mobile, 8 cols on desktop */}
          <div className="w-full lg:col-span-8 order-1 flex flex-col gap-6">
            <PDFViewer.Provider totalPages={12}>
              <PDFViewer.Container>
                <PDFViewer.Toolbar
                  onDownload={handleDownload}
                  onFullscreen={handleFullscreen}
                />
                <PDFViewer.Canvas>
                  <PDFViewer.Page pageNumber={1}>
                    {/* Simulated PDF Content */}
                    <div className="border-b-2 border-black pb-3 sm:pb-4 mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                      <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-1 sm:mb-2">
                          Tribhuvan University
                        </h1>
                        <h2 className="text-base sm:text-lg md:text-xl font-serif text-gray-700">
                          Institute of Science and Technology
                        </h2>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-mono text-xs sm:text-sm">2024 Revised</p>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6 font-serif">
                      <div className="text-center mb-6 sm:mb-10">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest mb-2">
                          Course Syllabus
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl italic">
                          Bachelor of Science in Computer Science and Information Technology
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-2 mb-6 sm:mb-8 text-xs sm:text-sm">
                        <div className="flex justify-between border-b border-dotted border-gray-400 pb-1">
                          <span className="font-bold">Course Title:</span>
                          <span className="text-right">{courseData.name}</span>
                        </div>
                        <div className="flex justify-between border-b border-dotted border-gray-400 pb-1">
                          <span className="font-bold">Course No:</span>
                          <span>{courseData.code}</span>
                        </div>
                        <div className="flex justify-between border-b border-dotted border-gray-400 pb-1">
                          <span className="font-bold">Nature of Course:</span>
                          <span>Theory + Lab</span>
                        </div>
                        <div className="flex justify-between border-b border-dotted border-gray-400 pb-1">
                          <span className="font-bold">Semester:</span>
                          <span>VII</span>
                        </div>
                        <div className="flex justify-between border-b border-dotted border-gray-400 pb-1">
                          <span className="font-bold">Credit Hours:</span>
                          <span>{courseData.creditHours}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 border-l-4 border-gray-800 pl-2 sm:pl-3 uppercase">
                          Course Description
                        </h4>
                        <p className="text-justify leading-relaxed text-gray-800 text-xs sm:text-sm">
                          This course provides an introduction to the fundamentals of robotics and
                          automation. It covers the history of robotics, rigid motions and
                          homogeneous transformations, forward and inverse kinematics, velocity
                          kinematics (Jacobians), and path planning. The course also introduces the
                          basics of control systems and sensors used in robotics.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 border-l-4 border-gray-800 pl-2 sm:pl-3 uppercase">
                          Course Objectives
                        </h4>
                        <p className="text-gray-800 text-xs sm:text-sm mb-2">
                          The general objectives of this course are:
                        </p>
                        <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm text-gray-800">
                          <li>
                            To provide a basic understanding of robot manipulators and their
                            applications.
                          </li>
                          <li>
                            To understand the mathematical framework for modeling robot motion.
                          </li>
                          <li>To analyze the kinematics and dynamics of robotic arms.</li>
                          <li>To introduce trajectory generation and robot control techniques.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 border-l-4 border-gray-800 pl-2 sm:pl-3 uppercase">
                          Course Contents
                        </h4>
                        <div className="mb-3 sm:mb-4">
                          <h5 className="font-bold text-sm sm:text-base mb-1">Unit 1: Introduction (3 Hrs)</h5>
                          <p className="text-xs text-gray-600 mb-1">
                            1.1 Definition and History of Robotics
                          </p>
                          <p className="text-xs text-gray-600 mb-1">
                            1.2 Robot Components: Links, Joints, Actuators, Sensors
                          </p>
                          <p className="text-xs text-gray-600 mb-1">1.3 Classification of Robots</p>
                          <p className="text-xs text-gray-600 mb-1">
                            1.4 Applications of Robotics in Industry and Medicine
                          </p>
                        </div>
                        <div className="mb-3 sm:mb-4">
                          <h5 className="font-bold text-sm sm:text-base mb-1">
                            Unit 2: Rigid Motions and Transformations (6 Hrs)
                          </h5>
                          <p className="text-xs text-gray-600 mb-1">
                            2.1 Representation of Position and Orientation
                          </p>
                          <p className="text-xs text-gray-600 mb-1">2.2 Rotation Matrices</p>
                          <p className="text-xs text-gray-600 mb-1">
                            2.3 Homogeneous Transformations
                          </p>
                        </div>
                      </div>
                    </div>
                  </PDFViewer.Page>
                </PDFViewer.Canvas>
              </PDFViewer.Container>
            </PDFViewer.Provider>

            {/* Navigation */}
            <SyllabusNavigation
              previous={{
                label: 'Previous Subject',
                title: 'Advanced Java Programming',
                href: '/syllabus/csc381',
              }}
              next={{
                label: 'Next Subject',
                title: 'Data Warehousing',
                href: '/syllabus/csc383',
              }}
              semesterLink={{
                label: 'View Full Semester 7 Syllabus',
                href: '/syllabus?semester=7',
              }}
            />
          </div>

          {/* Sidebar - Below PDF on mobile, side on desktop */}
          <div className="w-full lg:col-span-4 order-2">
            <SyllabusDetailSidebar
              info={{
                code: courseData.code,
                creditHours: courseData.creditHours,
                program: courseData.program,
                semester: courseData.semester,
                prerequisite: courseData.prerequisite,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
