"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Snowflake, Grid3X3 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function WalSheetzCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    const snowflakes: Array<{
      x: number
      y: number
      size: number
      speed: number
      opacity: number
    }> = []

    for (let i = 0; i < 30; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.6 + 0.4
      })
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      snowflakes.forEach(flake => {
        flake.y += flake.speed
        if (flake.y > canvas.height) {
          flake.y = -10
          flake.x = Math.random() * canvas.width
        }
        
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
        ctx.fill()
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => cancelAnimationFrame(animationId)
  }, [])

  const spreadsheetData = [
    ['A1', 'B1', 'C1', 'D1'],
    ['A2', 'B2', 'C2', 'D2'],
    ['A3', 'B3', 'C3', 'D3'],
    ['A4', 'B4', 'C4', 'D4'],
  ]

  return (
    <motion.div
      whileHover={{ y: -8, rotateX: -5, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
      
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 ice-refraction" />
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 opacity-60"
        />
        
        <div className="relative z-10 bg-gradient-to-br from-cyan-50/90 via-blue-50/80 to-white/70 dark:from-cyan-950/90 dark:via-blue-950/80 dark:to-black/70 backdrop-blur-sm">
          <div className="p-6">
            <div className="bg-white/80 dark:bg-black/50 rounded-lg p-4 backdrop-blur-md border border-white/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                <Grid3X3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Live Collaboration</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse animation-delay-200" />
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse animation-delay-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-1 text-xs font-mono">
                {spreadsheetData.map((row, rowIndex) => (
                  row.map((cell, colIndex) => (
                    <motion.div
                      key={`${rowIndex}-${colIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (rowIndex * 4 + colIndex) * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                      className={cn(
                        "p-2 text-center border border-gray-200 dark:border-gray-700",
                        "bg-white/60 dark:bg-black/30",
                        "hover:bg-blue-50/60 dark:hover:bg-blue-900/30",
                        "transition-all cursor-pointer"
                      )}
                    >
                      {cell}
                    </motion.div>
                  ))
                ))}
              </div>
              
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <Snowflake className="w-3 h-3" />
                <span>Frozen in time, parallel processed</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-transparent to-white/50 dark:to-black/50 px-6 py-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WalSheetz</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Onchain spreadsheets with parallel processing
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 text-xs rounded">Move Parallel</span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded">Live Collab</span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs rounded">In Development</span>
            </div>
            
            <Link 
              href="/products/walsheetz"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}