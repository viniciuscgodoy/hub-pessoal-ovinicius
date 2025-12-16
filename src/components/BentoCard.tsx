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
        'group relative overflow-hidden rounded-3xl bg-card border border-border/50 p-6 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in-up',
        className,
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
