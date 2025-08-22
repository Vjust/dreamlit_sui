import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { CardProps } from '@/lib/types'

interface GlassCardProps extends CardProps {
  neon?: boolean
  glow?: boolean
  tilt?: boolean
  interactive?: boolean
  as?: keyof React.JSX.IntrinsicElements
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(({
  className,
  children,
  variant = 'glass',
  neon = false,
  glow = false,
  tilt = false,
  interactive = false,
  as: Component = 'div',
  ...props
}, ref) => {
  const baseStyles = cn(
    // Base glass card styles
    'relative overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-300',
    
    // Variant styles
    {
      'bg-white/5 border border-white/10': variant === 'glass',
      'bg-white/10 border border-white/20 shadow-lg': variant === 'elevated',
      'bg-transparent border border-gray-200 dark:border-gray-800': variant === 'outlined',
      'bg-white dark:bg-gray-900 shadow-xl': variant === 'default',
    },
    
    // Neon border effect
    {
      'border-cyan-400/30': neon,
    },
    
    // Glow effect
    {
      'shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40': glow,
    },
    
    // Tilt effect
    {
      'transform-gpu hover:scale-[1.02] hover:-rotate-1 transition-transform': tilt,
    },
    
    // Interactive states
    {
      'cursor-pointer hover:bg-white/10 hover:border-white/20': interactive,
    },
    
    className
  )

  return React.createElement(
    Component,
    {
      ref,
      className: baseStyles,
      ...props
    },
    children
  )
})

GlassCard.displayName = 'GlassCard'

export default GlassCard