import { ProductCard } from '@/components/ProductCard'

export const ProductsSection = () => {
  const products = [
    {
      title: 'Sistema Estoico Digital',
      description:
        'Um template completo para Notion focado em produtividade e filosofia estoica para organizar sua vida.',
      price: 'R$ 47,90',
      image:
        'https://img.usecurling.com/p/600/400?q=notion%20template%20minimalist&color=black',
      link: '#',
    },
    {
      title: 'Pack de Wallpapers Minimalistas',
      description:
        'Coleção de 50 wallpapers 8k focados em concentração e calma mental para seus dispositivos.',
      price: 'R$ 19,90',
      image:
        'https://img.usecurling.com/p/600/400?q=abstract%20wallpaper%20dark&color=black',
      link: '#',
    },
    {
      title: 'Mentoria de Carreira Tech',
      description:
        'Sessão de 1 hora para discutir sua carreira em desenvolvimento de software e criar um plano de ação.',
      price: 'R$ 150,00',
      image:
        'https://img.usecurling.com/p/600/400?q=coding%20setup%20minimal&color=black',
      link: '#',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  )
}
