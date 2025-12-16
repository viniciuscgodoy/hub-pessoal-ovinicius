import { BentoCard } from '@/components/BentoCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  title: string
  description: string
  price: string
  image: string
  tag?: string
  delay?: number
}

export const ProductCard = ({
  title,
  description,
  price,
  image,
  tag,
  delay,
}: ProductCardProps) => {
  return (
    <BentoCard
      delay={delay}
      className="flex flex-col p-0 overflow-hidden h-full"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {tag && (
          <Badge className="absolute top-3 right-3 bg-black/70 hover:bg-black/80 text-white backdrop-blur-md border-none">
            {tag}
          </Badge>
        )}
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="text-lg font-bold text-primary">{price}</span>
          <Button size="sm" className="group">
            Comprar
            <ShoppingCart className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </BentoCard>
  )
}
