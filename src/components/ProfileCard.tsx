import { useState, useEffect, useRef } from 'react'
import { BentoCard } from '@/components/BentoCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/hooks/use-auth'
import {
  getUserProfile,
  uploadAvatar,
  type UserProfile,
} from '@/services/user-service'
import { Camera, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

export const ProfileCard = () => {
  const { user } = useAuth()
  const { toast } = useToast()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        setIsLoading(false)
        return
      }

      const { data, error } = await getUserProfile(user.id)
      if (error) {
        console.error('Error fetching profile:', error)
      } else {
        setProfile(data)
      }
      setIsLoading(false)
    }

    fetchProfile()
  }, [user])

  const handleAvatarClick = () => {
    if (!user) return
    fileInputRef.current?.click()
  }

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (!file || !user) return

    setIsUploading(true)

    try {
      const { publicUrl, error } = await uploadAvatar(user.id, file)

      if (error) {
        throw error
      }

      if (publicUrl && profile) {
        setProfile({ ...profile, avatar_url: publicUrl })
        toast({
          title: 'Foto atualizada',
          description: 'Sua foto de perfil foi atualizada com sucesso.',
        })
      }
    } catch (error) {
      console.error('Error uploading avatar:', error)
      toast({
        title: 'Erro ao atualizar',
        description: 'Não foi possível atualizar sua foto de perfil.',
        variant: 'destructive',
      })
    } finally {
      setIsUploading(false)
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  // Fallback data if not logged in or loading
  const displayName = profile?.display_name || 'Vinicius Godoy'
  const displayHandle = '@oviniciusgodoy'
  const displayBio =
    'Explorando a intersecção entre tecnologia, estoicismo e alta performance.'
  // Default placeholder if no avatar set - matching user attachment (Runner)
  const defaultAvatar =
    'https://img.usecurling.com/p/512/512?q=runner%205205%20marathon&seed=1'
  const avatarUrl = profile?.avatar_url || defaultAvatar

  return (
    <BentoCard
      className="flex flex-col items-center justify-center text-center p-8 h-full min-h-[400px]"
      delay={100}
    >
      <div className="relative mb-6 group">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-sm" />
        <div
          className={cn(
            'relative cursor-pointer transition-all duration-300',
            !user && 'cursor-default',
          )}
          onClick={handleAvatarClick}
        >
          <Avatar className="h-32 w-32 sm:h-40 sm:w-40 border-4 border-background shadow-xl relative overflow-hidden ring-2 ring-muted/20">
            <AvatarImage
              src={avatarUrl}
              alt={displayName}
              className={cn('object-cover', isUploading && 'opacity-50')}
            />
            <AvatarFallback>
              {displayName.substring(0, 2).toUpperCase()}
            </AvatarFallback>

            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Loader2 className="h-8 w-8 text-white animate-spin" />
              </div>
            )}
          </Avatar>

          {/* Upload Overlay */}
          {user && !isUploading && (
            <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="h-8 w-8 text-white" />
            </div>
          )}
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
        {displayName}
      </h1>
      <p className="text-lg text-muted-foreground font-medium mb-4">
        {displayHandle}
      </p>
      <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
        {displayBio}
      </p>
    </BentoCard>
  )
}
