import { ProfilePageContent } from '@/components/features/profile'
import { getUserProfile } from '@/services/server/user.server'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Profile Settings - EntranceGateway',
  description: 'Manage your profile and account settings',
}

export default async function ProfilePage() {
  // Fetch user data on server
  const userData = await getUserProfile()

  // If no user data (not authenticated), redirect to signin
  if (!userData) {
    redirect('/signin?redirect=/profile')
  }

  return (
    <main className="flex-grow bg-gray-50">
      <ProfilePageContent initialData={userData} />
    </main>
  )
}
