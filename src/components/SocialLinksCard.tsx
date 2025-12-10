import { BentoCard } from '@/components/BentoCard'
import { Button } from '@/components/ui/button'
import { Instagram, Youtube, Video } from 'lucide-react'

export const SocialLinksCard = () => {
  const socials = [
    {
      name: 'Acessar conteúdo diário',
      icon: Instagram,
      url: 'https://instagram.com/oviniciusgodoy',
      label: 'Instagram',
    },
    {
      name: 'Acessar vídeos curtos',
      icon: Video, // Using Video as generic for TikTok
      url: 'https://tiktok.com/oviniciusgodoy',
      label: 'TikTok',
    },
    {
      name: 'Inscreva-se no Canal',
      icon: Youtube,
      url: 'https://www.youtube.com/@oviniciusgodoy?sub_confirmation=1',
      label: 'YouTube',
    },
  ]

  return (
    <BentoCard className="flex flex-col justify-center h-full" delay={200}>
      <h2 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
        Social
      </h2>
      <div className="grid gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full h-14 justify-start px-6 bg-[#F4ED55] hover:bg-[#F4ED55]/90 text-[#002B10] border-0 font-medium text-base group">
              <social.icon className="mr-3 h-5 w-5 text-[#002B10] transition-colors" />
              <span className="flex-1 text-left">{social.name}</span>
            </Button>
          </a>
        ))}
      </div>
    </BentoCard>
  )
}
