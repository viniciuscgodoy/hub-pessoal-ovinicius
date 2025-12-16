import { useEffect, useRef, useState } from 'react'
import { BentoCard } from '@/components/BentoCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/hooks/use-auth'
import { userService } from '@/services/user'
import { Loader2, Camera } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export const ProfileCard = () => {
  const { user } = useAuth()
  const { toast } = useToast()
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [displayName, setDisplayName] = useState('Vinicius Godoy')
  const [isLoading, setIsLoading] = useState(true)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        setIsLoading(false)
        return
      }

      const { data, error } = await userService.getProfile(user.id)

      if (error) {
        console.error('Error fetching profile:', error)
      } else if (data) {
        if (data.avatar_url) setAvatarUrl(data.avatar_url)
        if (data.display_name) setDisplayName(data.display_name)
      }
      setIsLoading(false)
    }

    fetchProfile()
  }, [user])

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (!file || !user) return

    setIsUploading(true)

    try {
      // 1. Upload image to Storage
      const { publicUrl, error: uploadError } = await userService.uploadAvatar(
        user.id,
        file,
      )

      if (uploadError) throw uploadError
      if (!publicUrl) throw new Error('Failed to get public URL')

      // 2. Update user profile with new avatar URL
      const { error: updateError } = await userService.updateProfile(user.id, {
        avatar_url: publicUrl,
      })

      if (updateError) throw updateError

      setAvatarUrl(publicUrl)
      toast({
        title: 'Sucesso',
        description: 'Foto de perfil atualizada com sucesso.',
      })
    } catch (error) {
      console.error('Error uploading avatar:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível atualizar a foto de perfil.',
        variant: 'destructive',
      })
    } finally {
      setIsUploading(false)
      // Reset input
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <BentoCard
      className="flex flex-col items-center justify-center text-center p-8 h-full"
      delay={100}
    >
      <div
        className="relative mb-6 group cursor-pointer"
        onClick={triggerFileInput}
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-sm" />

        <Avatar className="h-32 w-32 sm:h-40 sm:w-40 border-2 border-white/10 shadow-xl transition-opacity group-hover:opacity-80">
          <AvatarImage
            src={
              avatarUrl ||
              'https://img.usecurling.com/p/500/500?q=man%20running%20race%20bib%205205'
            }
            alt={displayName}
            className="object-cover"
          />
          <AvatarFallback>VG</AvatarFallback>
        </Avatar>

        {/* Loading Overlay */}
        {(isLoading || isUploading) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full z-20">
            <Loader2 className="h-8 w-8 text-white animate-spin" />
          </div>
        )}

        {/* Edit Overlay (Hover) */}
        {!isLoading && !isUploading && user && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <Camera className="h-8 w-8 text-white/90" />
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileSelect}
          disabled={isUploading || !user}
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
        {displayName}
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
