import { BentoCard } from '@/components/BentoCard'
import { Github, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export const SocialLinksCard = () => {
  const socials = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-500',
    },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ]

  return (
    <BentoCard delay={200} className="flex flex-col justify-center h-full">
      <h3 className="text-xl font-semibold mb-6">Conecte-se comigo</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
          >
            <social.icon
              className={`h-6 w-6 transition-colors ${social.color}`}
            />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </BentoCard>
  )
}
