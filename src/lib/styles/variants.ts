import { cn } from '@/lib/utils'

// Glass morphism utilities
export const glassVariants = {
  base: 'backdrop-blur-sm bg-white/5 border border-white/10',
  elevated: 'backdrop-blur-md bg-white/10 border border-white/20 shadow-lg',
  strong: 'backdrop-blur-lg bg-white/15 border border-white/25 shadow-xl',
}

// Neon effect utilities
export const neonVariants = {
  border: {
    cyan: 'border-cyan-400/30 hover:border-cyan-400/50',
    purple: 'border-purple-400/30 hover:border-purple-400/50',
    pink: 'border-pink-400/30 hover:border-pink-400/50',
    green: 'border-green-400/30 hover:border-green-400/50',
  },
  text: {
    cyan: 'text-cyan-400 hover:text-cyan-300',
    purple: 'text-purple-400 hover:text-purple-300',
    pink: 'text-pink-400 hover:text-pink-300',
    green: 'text-green-400 hover:text-green-300',
  },
  glow: {
    cyan: 'shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40',
    purple: 'shadow-lg shadow-purple-400/20 hover:shadow-purple-400/40',
    pink: 'shadow-lg shadow-pink-400/20 hover:shadow-pink-400/40',
    green: 'shadow-lg shadow-green-400/20 hover:shadow-green-400/40',
  }
}

// Animation utilities
export const animationVariants = {
  hover: {
    glow: 'transition-all duration-300 hover:shadow-lg',
    lift: 'transition-transform duration-300 hover:scale-105 hover:-translate-y-1',
    tilt: 'transition-transform duration-300 hover:rotate-1 hover:scale-[1.02]',
    subtle: 'transition-all duration-200 hover:opacity-80',
  },
  pulse: {
    slow: 'animate-pulse',
    fast: 'animate-ping',
    bounce: 'animate-bounce',
  }
}

// Gradient utilities
export const gradientVariants = {
  text: {
    primary: 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent',
    ocean: 'bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent',
    sunset: 'bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent',
    neon: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
  },
  background: {
    primary: 'bg-gradient-to-r from-cyan-400 to-purple-400',
    ocean: 'bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10',
    dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    glow: 'bg-gradient-to-r from-cyan-500/5 to-purple-500/5',
  }
}

// Layout utilities
export const layoutVariants = {
  container: {
    default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  section: {
    default: 'py-16 sm:py-20 lg:py-24',
    small: 'py-8 sm:py-12 lg:py-16',
    large: 'py-24 sm:py-32 lg:py-40',
  }
}

// Composition utilities
export const createGlassCard = (variant: keyof typeof glassVariants = 'base', neonColor?: keyof typeof neonVariants.border) => {
  return cn(
    glassVariants[variant],
    'rounded-xl transition-all duration-300',
    neonColor && neonVariants.border[neonColor]
  )
}

export const createNeonText = (color: keyof typeof neonVariants.text) => {
  return cn(neonVariants.text[color], 'transition-colors duration-300')
}

export const createHoverEffect = (type: keyof typeof animationVariants.hover) => {
  return animationVariants.hover[type]
}

export const createButton = (variant: 'primary' | 'secondary' | 'neon' | 'ghost' = 'primary') => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white hover:from-cyan-300 hover:to-purple-300 focus:ring-cyan-400',
    secondary: 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 focus:ring-white',
    neon: cn(glassVariants.base, neonVariants.border.cyan, neonVariants.text.cyan, 'hover:bg-cyan-400/10'),
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400'
  }
  
  return cn(baseStyles, variants[variant])
}