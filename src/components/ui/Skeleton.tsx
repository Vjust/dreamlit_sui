import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  children?: React.ReactNode
}

export default function Skeleton({ className, children, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200 dark:bg-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Pre-built skeleton components for common use cases
export function SkeletonCard() {
  return (
    <div className="glass-card p-6 space-y-4">
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-14" />
      </div>
    </div>
  )
}

export function SkeletonNavigation() {
  return (
    <div className="glass rounded-2xl">
      <div className="container-max">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="w-8 h-8 rounded-lg" />
            <Skeleton className="h-6 w-20" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-10" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-20 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkeletonHero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container-max relative z-10">
        <div className="max-w-4xl space-y-6">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-16 w-full max-w-2xl" />
          <Skeleton className="h-6 w-full max-w-xl" />
          <Skeleton className="h-6 w-3/4 max-w-lg" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </div>
    </section>
  )
}