import { BentoCard } from '@/components/BentoCard'
import { Button } from '@/components/ui/button'
import { Instagram, Youtube, Video } from 'lucide-react'

export const SocialLinksCard = () => {
  const socials = [
    {
      name: 'Conteúdo Diário',
      icon: Instagram,
      url: 'https://instagram.com',
      label: 'Instagram',
    },
    {
      name: 'Vídeos Curtos',
      icon: Video, // Using Video as generic for TikTok if specific icon unavailable
      url: 'https://tiktok.com',
      label: 'TikTok',
    },
    {
      name: 'Vídeos Longos',
      icon: Youtube,
      url: 'https://youtube.com',
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
            <Button
              variant="outline"
              className="w-full h-14 justify-start px-6 glass-button border-0 text-white font-medium text-base group"
            >
              <social.icon className="mr-3 h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              <span className="flex-1 text-left">{social.name}</span>
            </Button>
          </a>
        ))}
      </div>
    </BentoCard>
  )
}
