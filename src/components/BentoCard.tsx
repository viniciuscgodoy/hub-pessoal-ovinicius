import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BentoCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const BentoCard = ({
  children,
  className,
  delay = 0,
}: BentoCardProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in-up',
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
