'use client'

import { Navbar } from './Navbar'

/**
 * Example usage of the Navbar compound component
 * 
 * This demonstrates the composition pattern where you explicitly
 * compose the navbar structure using subcomponents.
 */

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Syllabus', href: '/syllabus' },
  { label: 'Notes', href: '/notes' },
  { label: 'Old Questions', href: '/questions' },
  { label: 'Colleges', href: '/colleges' },
  { label: 'Courses', href: '/courses' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Trainings', href: '/trainings' },
]

const userMenuItems = [
  { label: 'Your profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
  { label: 'Sign out', href: '/logout' },
]

export function NavbarExample() {
  const handleNotificationClick = () => {
    console.log('Notification clicked')
  }

  return (
    <Navbar.Provider>
      <Navbar.Frame>
        <Navbar.Container>
          {/* Mobile menu button */}
          <Navbar.MobileMenuButton />

          {/* Logo */}
          <Navbar.Logo
            src="/next.svg"
            alt="EntranceGateway"
          />

          {/* Desktop navigation */}
          <Navbar.DesktopNav items={navigationItems} />

          {/* Actions (Notifications + User Menu) */}
          <Navbar.Actions>
            <Navbar.NotificationButton onClick={handleNotificationClick} />
            
            <Navbar.UserMenuButton
              avatar="/vercel.svg"
              name="Nilkesh Shrestha"
            />
            
            <Navbar.UserMenu>
              {userMenuItems.map((item) => (
                <Navbar.UserMenuItem key={item.href} href={item.href}>
                  {item.label}
                </Navbar.UserMenuItem>
              ))}
            </Navbar.UserMenu>
          </Navbar.Actions>
        </Navbar.Container>

        {/* Mobile menu */}
        <Navbar.MobileMenu items={navigationItems} />
      </Navbar.Frame>
    </Navbar.Provider>
  )
}

/**
 * Alternative: Custom variant with different structure
 * 
 * This shows how you can compose different navbar variants
 * using the same building blocks.
 */
export function SimpleNavbar() {
  return (
    <Navbar.Provider>
      <Navbar.Frame className="bg-brand-navy">
        <Navbar.Container>
          <Navbar.Logo
            src="/next.svg"
            alt="Your Company"
          />
          
          <Navbar.DesktopNav
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ]}
          />
        </Navbar.Container>
      </Navbar.Frame>
    </Navbar.Provider>
  )
}
