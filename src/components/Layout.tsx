import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

export default function Layout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Outlet />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t mt-12">
        <p>
          &copy; {new Date().getFullYear()} Hub Pessoal. Todos os direitos
          reservados.
        </p>
      </footer>
      <Toaster />
    </div>
  )
}
