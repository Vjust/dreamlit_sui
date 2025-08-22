"use client"

import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/lib/hooks'
import { AnimationConfig, BaseComponentProps } from '@/lib/types'

interface AnimatedSectionProps extends BaseComponentProps {
  animation?: AnimationConfig
  delay?: number
  threshold?: number
  triggerOnce?: boolean
  as?: keyof React.JSX.IntrinsicElements
}

const defaultAnimation: AnimationConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(({
  className,
  children,
  animation = defaultAnimation,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  as: Component = 'div',
  ...props
}, ref) => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    triggerOnce
  })

  const animationProps = {
    initial: animation.initial,
    animate: isInView ? animation.animate : animation.initial,
    transition: {
      ...animation.transition,
      delay: delay
    }
  }

  return (
    <motion.div
      ref={sectionRef}
      className={cn(className)}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  )
})

AnimatedSection.displayName = 'AnimatedSection'

export default AnimatedSection