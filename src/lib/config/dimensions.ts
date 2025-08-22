// Centralized dimension and spacing constants
export const dimensions = {
  // Icon sizes (width x height)
  icon: {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-12 h-12',
    '3xl': 'w-16 h-16'
  },

  // Spacing values (padding, margin, gap)
  spacing: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 20,
    '4xl': 24,
    '5xl': 32
  },

  // Container max widths
  container: {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
    screen: 'max-w-screen-2xl'
  },

  // Border radius
  radius: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full'
  },

  // Layout heights
  height: {
    nav: 'h-16',
    hero: 'min-h-screen',
    section: 'py-16 sm:py-20 lg:py-24',
    sectionSmall: 'py-8 sm:py-12 lg:py-16',
    sectionLarge: 'py-24 sm:py-32 lg:py-40'
  },

  // Layout widths  
  width: {
    sidebar: 'w-64',
    content: 'w-full',
    aside: 'w-1/3'
  },

  // Grid gaps
  gap: {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
    '2xl': 'gap-16'
  },

  // Z-index layers
  zIndex: {
    dropdown: 'z-10',
    sticky: 'z-20',
    fixed: 'z-30',
    modal: 'z-40',
    popover: 'z-50',
    tooltip: 'z-60'
  },

  // Shadow sizes
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    none: 'shadow-none'
  }
}

// Utility type for dimension keys
export type IconSize = keyof typeof dimensions.icon
export type SpacingSize = keyof typeof dimensions.spacing  
export type ContainerSize = keyof typeof dimensions.container
export type RadiusSize = keyof typeof dimensions.radius