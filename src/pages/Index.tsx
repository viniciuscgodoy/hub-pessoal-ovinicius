import { ProfileCard } from '@/components/ProfileCard'
import { SocialLinksCard } from '@/components/SocialLinksCard'
import { ProductsSection } from '@/components/ProductsSection'

export default function Index() {
  return (
    <div className="w-full animate-fade-in space-y-8 sm:space-y-12">
      {/* Hero / Top Section: Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card - Spans 2 columns on Desktop */}
        <div className="lg:col-span-2">
          <ProfileCard />
        </div>

        {/* Social Links - Spans 1 column */}
        <div className="lg:col-span-1">
          <SocialLinksCard />
        </div>
      </div>

      {/* Products Section */}
      <ProductsSection />
    </div>
  )
}
