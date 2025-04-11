import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { getDictionary } from "@/context/dictionary";

export async function Footer({ id, lang }: { id?: string; lang: "en" | "es" }) {
  const t = (await getDictionary(lang)).Footer.categories;

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Soluciones */}
              <div className="hidden md:block">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  {t.solutions.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {t.solutions.items.map((item: string, index: number) => (
                    <li key={index}>
                      <Link href="#" className="text-base hover:text-blue-900">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Soporte */}
              <div className="hidden md:block mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  {t.support.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {t.support.items.map((item: string, index: number) => (
                    <li key={index}>
                      <Link href="#" className="text-base hover:text-blue-900">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Compañía */}
              <div className="hidden md:block">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  {t.company.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {t.company.items.map((item: string, index: number) => (
                    <li key={index}>
                      <Link href="#" className="text-base hover:text-blue-900">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Legal */}
              <div className="hidden md:block mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  {t.legal.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {t.legal.items.map((item: string, index: number) => (
                    <li key={index}>
                      <Link href="#" className="text-base hover:text-blue-900">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Suscripción */}
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              {t.subscribe.title}
            </h3>
            <p className="mt-4 text-base text-gray-300">{t.subscribe.text}</p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                {t.subscribe.email}
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-900 focus:border-blue-900 focus:placeholder-gray-400"
                placeholder={t.subscribe.email}
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-blue-900 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-900"
                >
                  {t.subscribe.button}
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Redes sociales y derechos */}
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
            © {new Date().getFullYear()} {t.derechos}
          </p>
        </div>
      </div>
    </footer>
  );
}
