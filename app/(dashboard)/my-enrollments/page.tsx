import { MyEnrollmentsContent } from '@/components/features/enrollments/MyEnrollmentsContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Training Enrollments | EntranceGateway',
  description: 'Track your course applications and learning progress in one place.',
}

export default function MyEnrollmentsPage() {
  return <MyEnrollmentsContent />
}
