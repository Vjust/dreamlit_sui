"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { ThemeMode, ThemeContextType } from '@/lib/types'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: ThemeMode
}

export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Handle system theme detection
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark'
  }

  // Get effective theme (resolve 'system' to actual theme)
  const getEffectiveTheme = (themeMode: ThemeMode): 'light' | 'dark' => {
    if (themeMode === 'system') {
      return getSystemTheme()
    }
    return themeMode
  }

  const isDark = getEffectiveTheme(mode) === 'dark'

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setMode(savedTheme)
    }
    setMounted(true)
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    const effectiveTheme = getEffectiveTheme(mode)
    
    // Remove all theme classes
    root.classList.remove('light', 'dark')
    
    // Add current theme class
    root.classList.add(effectiveTheme)
    
    // Save to localStorage
    localStorage.setItem('theme', mode)
  }, [mode, mounted])

  // Listen for system theme changes when using system mode
  useEffect(() => {
    if (mode !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      // Force re-render to update isDark
      setMode('system')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mode])

  const value: ThemeContextType = {
    mode,
    setMode,
    isDark
  }

  // Prevent flash of wrong theme
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Utility hook for theme-aware styles
export function useThemeStyles() {
  const { isDark } = useTheme()
  
  return {
    isDark,
    isLight: !isDark,
    themeClass: isDark ? 'dark' : 'light',
    
    // Common theme-aware class combinations
    text: {
      primary: isDark ? 'text-white' : 'text-gray-900',
      secondary: isDark ? 'text-gray-300' : 'text-gray-600',
      muted: isDark ? 'text-gray-400' : 'text-gray-500',
      accent: isDark ? 'text-cyan-400' : 'text-cyan-600'
    },
    
    background: {
      primary: isDark ? 'bg-gray-900' : 'bg-white',
      secondary: isDark ? 'bg-gray-800' : 'bg-gray-50',
      muted: isDark ? 'bg-gray-700' : 'bg-gray-100'
    },
    
    border: {
      default: isDark ? 'border-gray-700' : 'border-gray-200',
      muted: isDark ? 'border-gray-800' : 'border-gray-100'
    }
  }
}