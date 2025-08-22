"use client"

import { useEffect, useRef, useState, RefObject } from 'react'

interface IntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0, root = null, rootMargin = '0px', triggerOnce = false } = options
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const targetRef = useRef<T>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    if (triggerOnce && hasTriggered) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting
        setIsIntersecting(intersecting)
        
        if (intersecting && triggerOnce) {
          setHasTriggered(true)
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    )

    observer.observe(target)

    return () => {
      observer.unobserve(target)
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, triggerOnce, hasTriggered])

  return [targetRef, triggerOnce ? hasTriggered : isIntersecting]
}