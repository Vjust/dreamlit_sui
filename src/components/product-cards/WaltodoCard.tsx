"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getTerminalSequence, getTerminalColor } from '@/lib/config'
import { getIconSize } from '@/lib/utils/config'

export default function WaltodoCard() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  
  const terminalConfig = getTerminalSequence('waltodo')
  const commands = terminalConfig.commands

  useEffect(() => {
    if (currentLine >= commands.length) {
      setTimeout(() => {
        setCurrentLine(0)
        setDisplayedText("")
      }, terminalConfig.resetDelay)
      return
    }

    const command = commands[currentLine]
    const timeout = setTimeout(() => {
      setIsTyping(true)
      let charIndex = 0
      const typeInterval = setInterval(() => {
        if (charIndex <= command.text.length) {
          setDisplayedText(command.text.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
          setTimeout(() => {
            setCurrentLine(prev => prev + 1)
          }, 300)
        }
      }, terminalConfig.typeSpeed)
    }, command.delay)

    return () => clearTimeout(timeout)
  }, [currentLine])

  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
      
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-gray-400 font-mono">waltodo-cli</span>
          </div>
          <Terminal className={`${getIconSize('sm')} text-gray-400`} />
        </div>
        
        <div className="p-6 font-mono text-sm min-h-[400px] bg-black/50">
          <div className="space-y-2">
            {commands.slice(0, currentLine + 1).map((cmd, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-300",
                  cmd.isOutput && "pl-4",
                  cmd.isSuccess && getTerminalColor('success'),
                  cmd.isComplete && getTerminalColor('success'),
                  !cmd.isOutput && !cmd.isSuccess && !cmd.isComplete && getTerminalColor('command')
                )}
              >
                {index === currentLine ? (
                  <>
                    {displayedText}
                    {isTyping && <span className="terminal-cursor">_</span>}
                  </>
                ) : (
                  cmd.text
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800/50 px-6 py-4 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-2">Waltodo</h3>
          <p className="text-gray-400 text-sm mb-4">
            Decentralized task management in your terminal
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded">CLI-First</span>
            <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded">E2E Encrypted</span>
            <span className="px-2 py-1 bg-green-900/50 text-green-300 text-xs rounded">Beta Available</span>
          </div>
          
          <Link 
            href="/products/waltodo"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Learn More
            <svg className={getIconSize('sm')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}