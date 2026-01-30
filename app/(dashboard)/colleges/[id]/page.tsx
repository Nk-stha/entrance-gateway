import { CollegeDetailContent } from '@/components/features/colleges/CollegeDetailContent'

export const metadata = {
  title: 'College Details - EntranceGateway',
  description: 'View detailed information about the college including courses, admission criteria, and contact details.',
}

export default function CollegeDetailPage({ params }: { params: { id: string } }) {
  return <CollegeDetailContent collegeId={params.id} />
}
