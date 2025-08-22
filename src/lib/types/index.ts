import { ReactNode } from 'react'
import { Variant, TargetAndTransition, Transition } from 'framer-motion'

// Common UI Types
export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

export interface IconProps {
  className?: string
  size?: number
}

// Animation Types
export interface AnimationConfig {
  initial?: TargetAndTransition
  animate?: TargetAndTransition
  transition?: Transition
  delay?: number
}

export interface MotionVariants {
  initial: TargetAndTransition
  animate: TargetAndTransition
  exit?: TargetAndTransition
}

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'system'

export interface ThemeContextType {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  isDark: boolean
}

// Style Variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type CardVariant = 'default' | 'glass' | 'elevated' | 'outlined'

// Component Props
export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  href?: string
}

export interface CardProps extends BaseComponentProps {
  variant?: CardVariant
  hover?: boolean
  neon?: boolean
}

// Navigation Types
export interface NavItem {
  label: string
  href: string
  icon?: ReactNode
  description?: string
  children?: NavItem[]
}

// Data Types
export interface ServiceItem {
  id: string
  title: string
  description: string
  technologies: string[]
  href: string
  icon: ReactNode
}

export interface ProductItem {
  id: string
  name: string
  title: string
  description: string
  href: string
  status: 'live' | 'beta' | 'coming-soon'
  features: string[]
  category: string
}

// Command Palette Types
export interface CommandItem {
  id: string
  label: string
  href?: string
  action?: () => void
  icon?: ReactNode
  shortcut?: string
}

export interface CommandGroup {
  label: string
  items: CommandItem[]
}

// Form Types
export interface FormFieldProps {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  error?: string
}

// Layout Types
export interface LayoutProps extends BaseComponentProps {
  header?: ReactNode
  footer?: ReactNode
  sidebar?: ReactNode
}

// Error Types
export interface ErrorInfo {
  message: string
  code?: string
  statusCode?: number
}

// Loading States
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: ErrorInfo | null
}