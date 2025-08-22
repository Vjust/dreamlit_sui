// Configuration utility functions
import { 
  dimensions, 
  animations, 
  urls, 
  metadata, 
  type IconSize, 
  type SpacingSize,
  type AnimationDuration,
  type AnimationDelay 
} from '@/lib/config'

// Dimension utilities
export const getIconSize = (size: IconSize) => dimensions.icon[size]
export const getSpacing = (size: SpacingSize) => `${dimensions.spacing[size]}`
export const getContainer = (size: keyof typeof dimensions.container) => dimensions.container[size]
export const getRadius = (size: keyof typeof dimensions.radius) => dimensions.radius[size]
export const getGap = (size: keyof typeof dimensions.gap) => dimensions.gap[size]
export const getShadow = (size: keyof typeof dimensions.shadow) => dimensions.shadow[size]

// Animation utilities
export const getDuration = (speed: AnimationDuration) => animations.duration[speed]
export const getDelay = (timing: AnimationDelay) => animations.delay[timing]
export const getStaggerDelay = (type: keyof typeof animations.delay.stagger) => animations.delay.stagger[type]
export const getEasing = (type: keyof typeof animations.easing) => animations.easing[type]
export const getMotion = (variant: keyof typeof animations.motion) => animations.motion[variant]
export const getHover = (variant: keyof typeof animations.hover) => animations.hover[variant]
export const getTap = (variant: keyof typeof animations.tap) => animations.tap[variant]

// URL utilities
export const getProductUrl = (product: keyof typeof urls.products) => urls.products[product]
export const getServiceUrl = (service: keyof typeof urls.services) => urls.services[service]
export const getSocialUrl = (platform: keyof typeof urls.social) => urls.social[platform]
export const getContactEmail = () => urls.contact.email
export const getMailtoUrl = (subject?: string, body?: string) => {
  const params = new URLSearchParams()
  if (subject) params.append('subject', subject)
  if (body) params.append('body', body)
  return `${urls.contact.mailto}${params.toString() ? `?${params.toString()}` : ''}`
}

// Metadata utilities
export const getPageTitle = (page?: string) => {
  if (!page) return metadata.site.title
  return `${page} | ${metadata.site.name}`
}

export const getPageDescription = (page?: keyof typeof metadata.pages) => {
  if (!page) return metadata.site.description
  const pageData = metadata.pages[page]
  return (pageData && 'description' in pageData ? pageData.description : metadata.site.description)
}

export const getKeywords = (additional?: string[]) => {
  return [...metadata.keywords, ...(additional || [])]
}

export const getOgImage = (type: 'default' | 'square' = 'default') => {
  return metadata.openGraph.images[type]
}

// Style composition utilities
export const createClasses = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const createIconClasses = (
  size: IconSize,
  color?: string,
  additional?: string
) => {
  return createClasses(
    getIconSize(size),
    color,
    additional
  )
}

export const createButtonClasses = (
  variant: 'primary' | 'secondary' | 'neon' | 'ghost',
  size: 'sm' | 'md' | 'lg' = 'md',
  additional?: string
) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white hover:from-cyan-300 hover:to-purple-300 focus:ring-cyan-400',
    secondary: 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 focus:ring-white',
    neon: 'bg-white/5 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:text-cyan-300 focus:ring-cyan-400',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400'
  }
  
  return createClasses(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    additional
  )
}

export const createCardClasses = (
  variant: 'glass' | 'elevated' | 'outlined' | 'default' = 'glass',
  interactive: boolean = false,
  additional?: string
) => {
  const baseClasses = 'relative overflow-hidden rounded-xl transition-all duration-300'
  
  const variantClasses = {
    glass: 'bg-white/5 border border-white/10 backdrop-blur-sm',
    elevated: 'bg-white/10 border border-white/20 shadow-lg backdrop-blur-md',
    outlined: 'bg-transparent border border-gray-200 dark:border-gray-800',
    default: 'bg-white dark:bg-gray-900 shadow-xl'
  }
  
  const interactiveClasses = interactive ? 'cursor-pointer hover:bg-white/10 hover:border-white/20' : ''
  
  return createClasses(
    baseClasses,
    variantClasses[variant],
    interactiveClasses,
    additional
  )
}

// Animation preset utilities
export const createFadeInAnimation = (delay: number = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: getDuration('normal'), delay }
})

export const createSlideUpAnimation = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: getDuration('normal'), delay }
})

export const createScaleAnimation = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: getDuration('normal'), delay }
})

export const createStaggerContainer = (staggerDelay: number = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: getDelay('short')
    }
  }
})

// Responsive utilities
export const createResponsiveClasses = (
  mobile: string,
  tablet?: string,
  desktop?: string
) => {
  const classes = [mobile]
  if (tablet) classes.push(`md:${tablet}`)
  if (desktop) classes.push(`lg:${desktop}`)
  return classes.join(' ')
}