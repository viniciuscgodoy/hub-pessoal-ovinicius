import { BentoCard } from '@/components/BentoCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const ProfileCard = () => {
  return (
    <BentoCard
      className="flex flex-col items-center justify-center text-center p-8 h-full"
      delay={100}
    >
      <div className="relative mb-6">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-sm" />
        <Avatar className="h-32 w-32 sm:h-40 sm:w-40 border-2 border-white/10 shadow-xl">
          <AvatarImage
            src="https://img.usecurling.com/ppl/medium?gender=male&seed=3"
            alt="Vinicius Godoy"
            className="object-cover"
          />
          <AvatarFallback>VG</AvatarFallback>
        </Avatar>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
        Vinicius Godoy
      </h1>
      <p className="text-lg text-muted-foreground font-medium mb-4">
        @oviniciusgodoy
      </p>
      <p className="max-w-md text-base sm:text-lg text-gray-400 leading-relaxed">
        Explorando a intersecção entre tecnologia, estoicismo e alta
        performance.
      </p>
    </BentoCard>
  )
}
