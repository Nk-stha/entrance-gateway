export interface NavItem {
  label: string
  href: string
}

export interface NavbarProps {
  logo?: {
    src: string
    alt: string
  }
  items?: NavItem[]
  user?: {
    name: string
    avatar: string
  }
  onNotificationClick?: () => void
  className?: string
}
