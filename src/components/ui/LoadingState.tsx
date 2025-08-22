import { motion } from 'framer-motion'
import LoadingSpinner from './LoadingSpinner'
import { cn } from '@/lib/utils'

interface LoadingStateProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
  className?: string
  overlay?: boolean
}

export default function LoadingState({
  message = 'Loading...',
  size = 'md',
  fullScreen = false,
  className,
  overlay = false
}: LoadingStateProps) {
  const containerClasses = cn(
    'flex flex-col items-center justify-center gap-4',
    {
      'min-h-screen': fullScreen,
      'p-8': !fullScreen,
      'fixed inset-0 bg-black/50 backdrop-blur-sm z-50': overlay
    },
    className
  )

  const spinnerSize = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const
  }

  return (
    <motion.div
      className={containerClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <LoadingSpinner size={spinnerSize[size]} />
      {message && (
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  )
}

// Specialized loading components
export function PageLoading() {
  return (
    <LoadingState 
      message="Loading page..." 
      size="lg" 
      fullScreen 
    />
  )
}

export function ComponentLoading({ message }: { message?: string }) {
  return (
    <LoadingState 
      message={message || 'Loading component...'} 
      size="md" 
      className="py-8"
    />
  )
}

export function OverlayLoading({ message }: { message?: string }) {
  return (
    <LoadingState 
      message={message || 'Processing...'} 
      size="lg" 
      overlay 
    />
  )
}