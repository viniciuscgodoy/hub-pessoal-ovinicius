-- Create avatars bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Set up security policies for the avatars bucket
-- Allow public access to view avatars
CREATE POLICY "Avatar images are publicly accessible."
  ON storage.objects FOR SELECT
  USING ( bucket_id = 'avatars' );

-- Allow authenticated users to upload their own avatar
CREATE POLICY "Users can upload their own avatar."
  ON storage.objects FOR INSERT
  WITH CHECK ( bucket_id = 'avatars' AND auth.role() = 'authenticated' );

-- Allow authenticated users to update their own avatar
CREATE POLICY "Users can update their own avatar."
  ON storage.objects FOR UPDATE
  USING ( bucket_id = 'avatars' AND auth.role() = 'authenticated' );

-- Update existing users to have the specific avatar from the user story
-- Since we can't upload the file from the prompt directly to storage here,
-- we use a placeholder that matches the description "man with a race bib 5205".
UPDATE public.users
SET avatar_url = 'https://img.usecurling.com/p/500/500?q=man%20running%20race%20bib%205205'
WHERE avatar_url IS NULL OR avatar_url = '';
