import { HomePageContent } from '@/components/features/home/HomePageContent'

export const metadata = {
  title: 'EntranceGateway - Master Your Future with Academic Excellence',
  description:
    "Join thousands of students preparing for Nepal's toughest entrance exams with expert guidance, premium study materials, and real-time mock tests.",
}

export default function Home() {
  return (
    <main className="flex-grow">
      <HomePageContent />
    </main>
  )
}
