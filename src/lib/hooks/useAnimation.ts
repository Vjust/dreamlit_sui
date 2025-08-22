"use client"

import { useReducedMotion } from 'framer-motion'
import { animationPresets, transitions } from '@/lib/styles/animations'
import { MotionVariants, AnimationConfig } from '@/lib/types'

// Hook to handle reduced motion preferences
export function useResponsiveAnimation<T extends MotionVariants | AnimationConfig>(
  animation: T
): T | { initial: {}, animate: {}, transition: {} } {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return {
      initial: {},
      animate: {},
      transition: {}
    } as T
  }
  
  return animation
}

// Hook for staggered list animations
export function useStaggerAnimation(itemCount: number, staggerDelay: number = 0.1) {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return {
      container: {},
      item: {}
    }
  }
  
  return {
    container: {
      animate: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.1
        }
      }
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    }
  }
}

// Hook for scroll-triggered animations
export function useScrollAnimation(
  threshold: number = 0.1,
  triggerOnce: boolean = true
) {
  const shouldReduceMotion = useReducedMotion()
  
  const config = {
    threshold,
    triggerOnce
  }
  
  const animation = shouldReduceMotion
    ? { initial: {}, animate: {}, transition: {} }
    : animationPresets.sectionEnter
  
  return { config, animation }
}

// Hook for hover animations
export function useHoverAnimation(type: 'card' | 'button' | 'custom' = 'card') {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return {}
  }
  
  switch (type) {
    case 'card':
      return animationPresets.cardHover
    case 'button':
      return animationPresets.buttonPress
    default:
      return {}
  }
}

// Hook for creating custom animation configs
export function useAnimationConfig(
  type: keyof typeof animationPresets,
  customConfig?: Partial<AnimationConfig>
) {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return { initial: {}, animate: {}, transition: {} }
  }
  
  const preset = animationPresets[type]
  
  return {
    ...preset,
    ...customConfig
  }
}

// Hook for creating entrance animations with delays
export function useEntranceAnimation(delay: number = 0) {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return { initial: {}, animate: {}, transition: {} }
  }
  
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      ...transitions.normal,
      delay
    }
  }
}

// Hook for page transitions
export function usePageTransition() {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return { initial: {}, animate: {}, exit: {} }
  }
  
  return {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: transitions.normal
  }
}