import { ProfileCard } from '@/components/ProfileCard'
import { SocialLinksCard } from '@/components/SocialLinksCard'
import { ProductsSection } from '@/components/ProductsSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 pt-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Profile - Takes 2 cols on md */}
          <div className="md:col-span-2">
            <ProfileCard />
          </div>

          {/* Social Links - Takes 1 col on md */}
          <div className="md:col-span-1">
            <SocialLinksCard />
          </div>
        </div>

        {/* Products Section */}
        <ProductsSection />

        {/* Footer Text */}
        <div className="text-center text-sm text-muted-foreground mt-12">
          <p>© 2024 Vinicius Godoy. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}

export default Index
