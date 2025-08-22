"use client"

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export interface ScrollToSectionOptions {
  offset?: number
  behavior?: ScrollBehavior
}

export const useScrollToSection = (options: ScrollToSectionOptions = {}) => {
  const router = useRouter()
  const { offset = 80, behavior = 'smooth' } = options

  const scrollToSection = useCallback((sectionId: string, samePage: boolean = false) => {
    const element = document.getElementById(sectionId)
    
    if (element && samePage) {
      // Same page - just scroll
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior
      })
    } else if (!samePage) {
      // Different page - navigate then scroll
      router.push(`/#${sectionId}`)
      
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const elementPosition = element.offsetTop
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior
          })
        }
      }, 100)
    }
  }, [router, offset, behavior])

  const scrollToAnchor = useCallback((href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2) // Remove '/#'
      const isHomePage = window.location.pathname === '/'
      scrollToSection(sectionId, isHomePage)
    } else {
      // Regular navigation
      router.push(href)
    }
  }, [router, scrollToSection])

  return {
    scrollToSection,
    scrollToAnchor
  }
}

export default useScrollToSection