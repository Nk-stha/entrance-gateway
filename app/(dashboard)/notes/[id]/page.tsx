import { NotesDetailContent } from '@/components/features/notes/NotesDetailContent'

export const metadata = {
  title: 'Question Set Details - EntranceGateway',
  description: 'View and download question set with detailed information.',
}

export default function NotesDetailPage({ params }: { params: { id: string } }) {
  return <NotesDetailContent noteId={params.id} />
}
