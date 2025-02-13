import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            BridgeCore
          </span>
        </div>
        <nav className="ml-auto flex items-center space-x-6 text-sm font-medium">
          <a className="text-gray-400 transition-colors hover:text-blue-400" href="#services">
            Servicios
          </a>
          <a className="text-gray-400 transition-colors hover:text-blue-400" href="#about">
            Acerca de
          </a>
          <a className="text-gray-400 transition-colors hover:text-blue-400" href="#contact">
            Contacto
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Iniciar Proyecto</Button>
        </nav>
      </div>
    </header>
  )
}

