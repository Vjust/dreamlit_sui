import { 
  Home, 
  Info, 
  Mail, 
  Package,
  Code,
  FileText
} from 'lucide-react'

export interface NavigationItem {
  name: string
  href: string
  description?: string
  children?: NavigationItem[]
}

export interface CommandItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href: string
}

export const navigationItems: NavigationItem[] = [
  {
    name: 'Products',
    href: '/#products'
  },
  {
    name: 'Services',
    href: '/#services'
  },
  { name: 'About', href: '/about' },
]

export const commandNavigationItems: CommandItem[] = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Package, label: 'Products', href: '/#products' },
  { icon: Code, label: 'Services', href: '/#services' },
  { icon: Info, label: 'About', href: '/about' },
  { icon: Mail, label: 'Contact', href: '/contact' },
]

export const commandProductItems: CommandItem[] = [
  { icon: FileText, label: 'View All Products', href: '/#products' },
]