import { SyllabusDetailContent } from '@/components/features/syllabus/SyllabusDetailContent'

export const metadata = {
  title: 'Syllabus Detail & PDF Viewer - EntranceGateway',
  description: 'View and download course syllabus with detailed information.',
}

export default function SyllabusDetailPage({ params }: { params: { id: string } }) {
  return <SyllabusDetailContent courseId={params.id} />
}
