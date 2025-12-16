import { supabase } from '@/lib/supabase/client'
import { Tables } from '@/lib/supabase/types'

export type UserProfile = Tables<'users'>

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()

  return { data, error }
}

export const updateUserProfile = async (
  userId: string,
  updates: Partial<UserProfile>,
) => {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  return { data, error }
}

export const uploadAvatar = async (userId: string, file: File) => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${userId}/${Date.now()}.${fileExt}`
  const filePath = fileName

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, { upsert: true })

  if (uploadError) {
    return { error: uploadError, publicUrl: null }
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from('avatars').getPublicUrl(filePath)

  // Update user profile with new avatar URL
  const { error: updateError } = await updateUserProfile(userId, {
    avatar_url: publicUrl,
  })

  if (updateError) {
    return { error: updateError, publicUrl: null }
  }

  return { publicUrl, error: null }
}
