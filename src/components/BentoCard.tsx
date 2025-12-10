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
        'group relative overflow-hidden rounded-2xl border border-white/5 bg-[#151515] p-6 shadow-sm opacity-0 animate-fade-in-up',
        className,
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Subtle Inner Highlight/Gradient could go here if needed */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
