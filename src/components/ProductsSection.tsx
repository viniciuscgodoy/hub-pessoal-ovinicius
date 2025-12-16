import { ProductCard } from '@/components/ProductCard'

export const ProductsSection = () => {
  const products = [
    {
      title: 'O Guia do Estoicismo Moderno',
      description:
        'Aprenda a aplicar os princípios estoicos no mundo digital e caótico de hoje.',
      price: 'R$ 49,90',
      image:
        'https://img.usecurling.com/p/400/300?q=book%20stoicism%20minimalist',
      tag: 'E-book',
    },
    {
      title: 'Pack de Notion para Produtividade',
      description:
        'Templates completos para organizar sua vida, estudos e trabalho no Notion.',
      price: 'R$ 29,90',
      image:
        'https://img.usecurling.com/p/400/300?q=notion%20template%20dashboard',
      tag: 'Template',
    },
    {
      title: 'Mentoria de Carreira Tech',
      description:
        'Sessão de 1 hora para alavancar sua carreira como desenvolvedor.',
      price: 'R$ 150,00',
      image:
        'https://img.usecurling.com/p/400/300?q=mentoring%20video%20call%20tech',
      tag: 'Serviço',
    },
  ]

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 px-2">Produtos Digitais</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.title}
            {...product}
            delay={300 + index * 100}
          />
        ))}
      </div>
    </div>
  )
}
