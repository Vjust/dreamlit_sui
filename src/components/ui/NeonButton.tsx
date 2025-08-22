import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/lib/types'

interface NeonButtonProps extends ButtonProps {
  glow?: boolean
  pulse?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const NeonButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, NeonButtonProps>(({
  className,
  children,
  variant = 'neon',
  size = 'md',
  disabled = false,
  loading = false,
  glow = false,
  pulse = false,
  icon,
  iconPosition = 'right',
  href,
  onClick,
  ...props
}, ref) => {
  const baseStyles = cn(
    // Base button styles
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    
    // Size variants
    {
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
    },
    
    // Variant styles
    {
      // Neon style (glass with neon border)
      'bg-white/5 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:text-cyan-300 focus:ring-cyan-400': variant === 'neon',
      
      // Primary gradient
      'bg-gradient-to-r from-cyan-400 to-purple-400 text-white hover:from-cyan-300 hover:to-purple-300 focus:ring-cyan-400': variant === 'primary',
      
      // Secondary glass
      'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 focus:ring-white': variant === 'secondary',
      
      // Outline
      'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-400': variant === 'outline',
      
      // Ghost
      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400': variant === 'ghost',
    },
    
    // Glow effect
    {
      'shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70': glow && variant === 'neon',
      'shadow-lg shadow-purple-400/50 hover:shadow-purple-400/70': glow && variant === 'primary',
    },
    
    // Pulse animation
    {
      'animate-pulse': pulse,
    },
    
    // Loading state
    {
      'cursor-wait': loading,
    },
    
    className
  )

  const content = (
    <>
      {loading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </>
  )

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={baseStyles}
        {...(props as any)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseStyles}
      disabled={disabled || loading}
      onClick={onClick}
      {...(props as any)}
    >
      {content}
    </button>
  )
})

NeonButton.displayName = 'NeonButton'

export default NeonButton