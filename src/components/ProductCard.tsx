import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BentoCard } from '@/components/BentoCard'

interface ProductCardProps {
  title: string
  price: string
  imageQuery: string
  delay?: number
}

export const ProductCard = ({
  title,
  price,
  imageQuery,
  delay,
}: ProductCardProps) => {
  return (
    <BentoCard className="p-0 flex flex-col h-full group" delay={delay}>
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <img
          src={`https://img.usecurling.com/p/600/400?q=${encodeURIComponent(imageQuery)}&color=black`}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-60" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-2xl font-bold text-vibrant-yellow mb-6">{price}</p>

        <div className="mt-auto">
          <Button
            className="w-full bg-military-green text-vibrant-yellow hover:bg-military-green/90 hover:scale-[1.02] transition-all duration-200 font-bold"
            size="lg"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Comprar Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </BentoCard>
  )
}
