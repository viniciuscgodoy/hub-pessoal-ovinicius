import { BentoCard } from '@/components/BentoCard'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'

export const SocialLinksCard = () => {
  const socials = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-black dark:hover:text-white',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
      color: 'hover:text-pink-600',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:text-blue-400',
    },
  ]

  return (
    <BentoCard className="p-6 flex flex-col justify-center h-full" delay={200}>
      <h3 className="text-lg font-semibold mb-6">Conecte-se comigo</h3>
      <div className="grid grid-cols-2 gap-4">
        {socials.map((social) => (
          <Button
            key={social.label}
            variant="outline"
            className={`w-full justify-start gap-2 hover:bg-muted/50 ${social.color}`}
            asChild
          >
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              <social.icon className="h-4 w-4" />
              {social.label}
            </a>
          </Button>
        ))}
      </div>
    </BentoCard>
  )
}
