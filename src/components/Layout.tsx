import { Outlet } from 'react-router-dom'
import { Mail } from 'lucide-react'

export default function Layout() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Main Content Area - Vertically centered when minimal content */}
      <div className="flex-grow flex flex-col justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="w-full py-8 mt-auto border-t border-white/5 bg-[#181818]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Vinicius Godoy. Todos os direitos reservados.</p>
          <a
            href="mailto:contato@viniciusgodoy.com"
            className="flex items-center gap-2 hover:text-white hover:underline transition-colors"
            aria-label="Enviar email para Vinicius Godoy"
          >
            <Mail className="h-4 w-4" />
            <span>Fale Comigo</span>
          </a>
        </div>
      </footer>
    </main>
  )
}
