"use client"

import { useEffect } from 'react'

export default function DevConsole() {
  useEffect(() => {
    const styles = {
      title: 'font-size: 16px; font-weight: bold; color: #00D4FF;',
      message: 'font-size: 14px; color: #666;'
    }
    
    console.log('%cLooking for bugs?', styles.title)
    console.log('%cThere are none. Only features.', styles.message)
    console.log('%c🌊 Since block zero', styles.message)
  }, [])

  return null
}