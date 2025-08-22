"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Command } from 'cmdk'
import { useCommandPalette } from '@/lib/hooks'
import { useTheme } from '@/lib/contexts'
import { 
  Search, 
  Moon,
  Sun,
  X
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { commandNavigationItems, commandProductItems } from '@/lib/constants/navigation'

export default function CommandPalette() {
  const { isOpen, setIsOpen } = useCommandPalette()
  const { setMode, isDark } = useTheme()
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSelect = (href: string) => {
    setIsOpen(false)
    setSearch('')
    router.push(href)
  }

  const handleThemeToggle = () => {
    setMode(isDark ? 'light' : 'dark')
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div 
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <Command className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl">
              <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-4">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <Command.Input
                  placeholder="Search for pages, products, or actions..."
                  value={search}
                  onValueChange={setSearch}
                  className="flex-1 py-3 bg-transparent outline-none placeholder:text-gray-400"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <Command.List className="max-h-96 overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-gray-500">
                  No results found.
                </Command.Empty>
                
                <Command.Group heading="Navigation" className="text-xs text-gray-500 dark:text-gray-400 p-2">
                  {commandNavigationItems.map((item) => (
                    <Command.Item
                      key={item.href}
                      value={item.label}
                      onSelect={() => handleSelect(item.href)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                    >
                      <item.icon className="w-4 h-4 text-gray-400" />
                      <span>{item.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
                
                <Command.Group heading="Products" className="text-xs text-gray-500 dark:text-gray-400 p-2">
                  {commandProductItems.map((item) => (
                    <Command.Item
                      key={item.href}
                      value={item.label}
                      onSelect={() => handleSelect(item.href)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                    >
                      <item.icon className="w-4 h-4 text-gray-400" />
                      <span>{item.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
                
                <Command.Group heading="Actions" className="text-xs text-gray-500 dark:text-gray-400 p-2">
                  <Command.Item
                    value="Toggle theme"
                    onSelect={handleThemeToggle}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                  >
                    <div className="relative w-4 h-4">
                      {isDark ? (
                        <Moon className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Sun className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <span>Toggle theme</span>
                    <kbd className="ml-auto text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                      T
                    </kbd>
                  </Command.Item>
                </Command.Group>
              </Command.List>
              
              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">↑↓</kbd>
                  <span>Navigate</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">↵</kbd>
                  <span>Select</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">ESC</kbd>
                  <span>Close</span>
                </div>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}