import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <>
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="hidden md:block">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Soluciones
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Desarrollo Móvil
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Soluciones Web
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Automatización
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Consultoría IT
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Soporte
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Precios
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Documentación
                      </Link>
                    </li>
                    {/*<li>
                    <Link href="#" className="text-base hover:text-blue-900">
                      Guías
                    </Link>
                  </li>*/}
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Estado de API
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="hidden md:block">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Compañía
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Acerca de
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Blog
                      </Link>
                    </li>
                    {/*<li>
                    <Link href="#" className="text-base hover:text-blue-900">
                      Empleos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-blue-900">
                      Prensa
                    </Link>
                  </li>*/}
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Socios
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Privacidad
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base hover:text-blue-900">
                        Términos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Suscríbete a nuestro boletín
            </h3>
            <p className="mt-4 text-base text-gray-300">
              Las últimas noticias, artículos y recursos, enviados a tu bandeja
              de entrada.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Dirección de correo electrónico
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-900 focus:border-blue-900 focus:placeholder-gray-400"
                placeholder="Ingresa tu email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-blue-900 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-900"
                >
                  Suscribirse
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-blue-900">
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-900">
              <span className="sr-only">Twitter</span>
              <FaSquareXTwitter className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-900">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-900">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-900">
              <span className="sr-only">Email</span>
              <MdEmail className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} BridgeCore, Inc. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
