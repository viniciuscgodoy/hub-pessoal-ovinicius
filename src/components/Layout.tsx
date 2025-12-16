import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

const Layout = () => {
  return (
    <div className="min-h-screen font-sans antialiased text-foreground bg-background selection:bg-primary/20">
      <main className="relative flex flex-col min-h-screen">
        <Outlet />
      </main>
      <Toaster />
    </div>
  )
}

export default Layout
