"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigationItems } from '@/lib/constants/navigation'
import { brandInfo, chainInfo } from '@/lib/constants/content'
import { dimensions, animations } from '@/lib/config'
import { getIconSize, getDuration } from '@/lib/utils/config'
import { useScrollToSection } from '@/lib/hooks/useScrollToSection'
import WalletConnect from './WalletConnect'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showDroplet, setShowDroplet] = useState(false)
  const { scrollToAnchor } = useScrollToSection()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const dropletTimer = setInterval(() => {
      setShowDroplet(true)
      setTimeout(() => setShowDroplet(false), animations.timing.autoplay.fast)
    }, 47000) // Every 47 seconds
    
    return () => clearInterval(dropletTimer)
  }, [])

  return (
    <header
      className={`fixed top-4 left-4 right-4 ${dimensions.zIndex.popover} transition-all duration-300 ${
        scrolled
          ? `glass neon-border ${dimensions.radius['2xl']} mx-auto ${dimensions.container['7xl']}`
          : `bg-transparent mx-auto ${dimensions.container['7xl']}`
      }`}
    >
      <nav className="container-max">
        <div className={`flex ${dimensions.height.nav} items-center justify-between`}>
          {/* Logo */}
          <Link href="/" className={`flex items-center ${dimensions.gap.sm}`}>
            <div className={`${getIconSize('xl')} ${dimensions.radius.lg} bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center relative neon-glow`}>
              <span className="text-white font-bold text-lg">D</span>
              {showDroplet && <div className="water-droplet" />}
            </div>
            <span className="text-xl font-semibold neon-text">{brandInfo.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => {
              const isAnchorLink = item.href.startsWith('/#')
              
              if (isAnchorLink) {
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToAnchor(item.href)}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                )
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Chain Indicator */}
            <div className="hidden md:flex items-center">
              <div className="glass px-3 py-2 rounded-full border border-green-400/30 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                <span className="text-sm text-green-400">{chainInfo.name}</span>
              </div>
            </div>

            {/* Connect Wallet Button */}
            <WalletConnect className="hidden md:block" />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X className={getIconSize('lg')} /> : <Menu className={getIconSize('lg')} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            {...animations.motion.mobileMenu}
            transition={{ duration: getDuration('fast') }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container-max py-4 space-y-2">
              {navigationItems.map((item) => {
                const isAnchorLink = item.href.startsWith('/#')
                
                if (isAnchorLink) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        scrollToAnchor(item.href)
                        setMobileMenuOpen(false)
                      }}
                      className="block py-2 text-slate-800 text-left w-full"
                    >
                      {item.name}
                    </button>
                  )
                }
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-gray-700 dark:text-gray-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="mt-4">
                <WalletConnect className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}