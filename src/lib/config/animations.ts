// Centralized animation and timing constants
export const animations = {
  // Animation durations (in seconds)
  duration: {
    instant: 0.15,
    fast: 0.2,
    normal: 0.3,
    medium: 0.5,
    slow: 0.6,
    slower: 0.8,
    slowest: 1.0,
    hero: 0.5,
    section: 0.6
  },

  // Animation delays (in seconds)
  delay: {
    none: 0,
    instant: 0.05,
    short: 0.1,
    medium: 0.2,
    long: 0.3,
    longer: 0.5,
    longest: 1.0,
    // Stagger delays for sequential animations
    stagger: {
      short: 0.1,
      medium: 0.15,
      long: 0.2
    }
  },

  // Easing functions
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',  
    easeInOut: 'ease-in-out',
    spring: { type: 'spring', damping: 25, stiffness: 300 },
    springBouncy: { type: 'spring', damping: 15, stiffness: 200 },
    springGentle: { type: 'spring', damping: 30, stiffness: 400 }
  },

  // Motion values for common animations
  motion: {
    // Fade animations
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    
    // Slide animations  
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    },
    
    slideDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 }
    },
    
    slideLeft: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 }
    },
    
    slideRight: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 }
    },

    // Scale animations
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 }
    },

    // Rotate animations
    rotate: {
      initial: { opacity: 0, rotate: -5 },
      animate: { opacity: 1, rotate: 0 },
      exit: { opacity: 0, rotate: 5 }
    },

    // Mobile menu animations
    mobileMenu: {
      initial: { opacity: 0, height: 0 },
      animate: { opacity: 1, height: 'auto' },
      exit: { opacity: 0, height: 0 }
    }
  },

  // Hover states
  hover: {
    scale: 1.02,
    scaleSmall: 1.01,
    scaleLarge: 1.05,
    lift: { scale: 1.02, y: -4 },
    glow: { boxShadow: '0 0 20px rgba(111, 188, 240, 0.5)' },
    rotate: 1,
    rotateReverse: -1
  },

  // Press/tap states
  tap: {
    scale: 0.98,
    scaleSmall: 0.99,
    scaleLarge: 0.95
  },

  // Page transitions
  page: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  },

  // Dropdown animations
  dropdown: {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 }
  },

  // Stagger container for lists
  stagger: {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.1
        }
      }
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    }
  },

  // Loading animations
  loading: {
    spin: {
      animate: {
        rotate: 360,
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }
      }
    },
    
    pulse: {
      animate: {
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }
    },

    bounce: {
      animate: {
        y: [0, -10, 0],
        transition: {
          duration: 0.6,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }
    }
  },

  // Custom timing values
  timing: {
    // Terminal typing speed
    typewriter: {
      fast: 30,
      normal: 50,
      slow: 80
    },
    
    // Auto-play intervals
    autoplay: {
      fast: 3000,
      normal: 5000,
      slow: 8000
    },

    // Background animations (in milliseconds for JavaScript timers)
    background: {
      oceanSpin: 20000, // 20 seconds
      pulse: 4000,      // 4 seconds  
      float: 6000       // 6 seconds
    },

    // CSS animation durations (strings for CSS)
    css: {
      oceanSpin: '20s',
      pulse: '4s', 
      float: '6s'
    }
  }
}

// Utility types
export type AnimationDuration = keyof typeof animations.duration
export type AnimationDelay = keyof typeof animations.delay
export type MotionVariant = keyof typeof animations.motion
export type HoverVariant = keyof typeof animations.hover