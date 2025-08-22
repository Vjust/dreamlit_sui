import { MotionVariants } from '@/lib/types'

// Common animation configurations
export const fadeInVariants: MotionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const slideUpVariants: MotionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const slideDownVariants: MotionVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

export const slideLeftVariants: MotionVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
}

export const slideRightVariants: MotionVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
}

export const scaleVariants: MotionVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
}

export const rotateVariants: MotionVariants = {
  initial: { opacity: 0, rotate: -5 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 5 }
}

// Stagger animations for lists
export const staggerContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItemVariants: MotionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

// Hero section specific animations
export const heroTextVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay * 0.1
    }
  })
}

// Navigation animations
export const dropdownVariants: MotionVariants = {
  initial: { opacity: 0, y: -10, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95,
    transition: { duration: 0.15 }
  }
}

export const mobileMenuVariants: MotionVariants = {
  initial: { opacity: 0, height: 0 },
  animate: { 
    opacity: 1, 
    height: 'auto',
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.2 }
  }
}

// Card hover animations
export const cardHoverVariants = {
  initial: { scale: 1, rotateX: 0, rotateY: 0 },
  hover: { 
    scale: 1.05,
    rotateX: 5,
    rotateY: 5,
    transition: { duration: 0.3 }
  }
}

// Loading animations
export const spinVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

export const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// Page transition animations
export const pageVariants: MotionVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { duration: 0.3 }
  }
}

// Common transition configurations
export const transitions = {
  fast: { duration: 0.15 },
  normal: { duration: 0.3 },
  slow: { duration: 0.5 },
  spring: { type: 'spring', damping: 25, stiffness: 300 },
  springBouncy: { type: 'spring', damping: 15, stiffness: 200 },
  easeOut: { ease: 'easeOut' },
  easeIn: { ease: 'easeIn' },
  easeInOut: { ease: 'easeInOut' }
}

// Animation presets for common use cases
export const animationPresets = {
  // Section entrance
  sectionEnter: {
    variants: slideUpVariants,
    transition: transitions.normal
  },
  
  // Card hover
  cardHover: {
    whileHover: { scale: 1.02, y: -4 },
    transition: transitions.spring
  },
  
  // Button press
  buttonPress: {
    whileTap: { scale: 0.98 },
    transition: transitions.fast
  },
  
  // Modal/dialog
  modal: {
    variants: scaleVariants,
    transition: transitions.spring
  },
  
  // Toast/notification
  toast: {
    variants: slideRightVariants,
    transition: transitions.springBouncy
  }
}