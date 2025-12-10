import { ProductCard } from '@/components/ProductCard'

export const ProductsSection = () => {
  return (
    <section className="space-y-6">
      <div
        className="flex items-center gap-3 mb-4 px-1 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
      >
        <h2 className="text-2xl font-bold text-white">
          Ferramentas & Templates
        </h2>
        <div className="h-px bg-white/10 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
          title="Segundo Cérebro Estoico - Notion Template"
          price="R$ 47,90"
          imageQuery="notion minimalist dashboard dark"
          delay={400}
        />
        <ProductCard
          title="Sistema de Hábitos Atômicos"
          price="R$ 29,90"
          imageQuery="habit tracker digital minimalist"
          delay={500}
        />
        <ProductCard
          title="Journaling Diário - Reflexões"
          price="R$ 19,90"
          imageQuery="digital journal tablet dark"
          delay={600}
        />
      </div>
    </section>
  )
}
