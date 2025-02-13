export function Footer() {
  return (
    <footer id="contact" className="w-full py-6 border-t border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            BridgeCore
          </span>
          <p className="text-sm text-gray-400">© 2024 BridgeCore. Todos los derechos reservados.</p>
        </div>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <a className="text-sm text-gray-400 hover:text-blue-400" href="#services">
            Servicios
          </a>
          <a className="text-sm text-gray-400 hover:text-blue-400" href="#about">
            Acerca de
          </a>
          <a className="text-sm text-gray-400 hover:text-blue-400" href="#contact">
            Contacto
          </a>
        </nav>
      </div>
    </footer>
  )
}

