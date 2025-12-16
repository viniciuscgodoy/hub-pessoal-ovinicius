import { ProfileCard } from '@/components/ProfileCard'
import { SocialLinksCard } from '@/components/SocialLinksCard'
import { ProductsSection } from '@/components/ProductsSection'
import { BentoCard } from '@/components/BentoCard'
import { Mail, MapPin } from 'lucide-react'

export default function Index() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile Card - Takes 2 columns on desktop */}
        <div className="md:col-span-2">
          <ProfileCard />
        </div>

        {/* Right Column */}
        <div className="space-y-6 flex flex-col h-full">
          {/* Social Links */}
          <div className="flex-grow">
            <SocialLinksCard />
          </div>

          {/* Quick Info / Location */}
          <BentoCard className="p-6" delay={300}>
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>São Paulo, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:contato@exemplo.com"
                  className="hover:text-primary transition-colors"
                >
                  contato@viniciusgodoy.dev
                </a>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Products Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Produtos Digitais</h2>
        <ProductsSection />
      </div>
    </div>
  )
}
