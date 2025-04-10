"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname();

  // Determinar el idioma actual
  const currentLang = pathname.startsWith("/es") ? "es" : "en";

  // Crear las URLs para los enlaces
  const getNewPathname = (newLang: string) => {
    // Si ya estamos en ese idioma, no hacemos nada
    if (
      (newLang === "en" && currentLang === "en") ||
      (newLang === "es" && currentLang === "es")
    ) {
      return pathname;
    }

    // Construir la nueva ruta
    const segments = pathname.split("/").filter((s) => s);

    if (segments.length > 0 && (segments[0] === "en" || segments[0] === "es")) {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }

    return "/" + segments.join("/");
  };

  return (
    <div className="flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded-full bg-gray-800 border border-gray-600 shadow-md">
      <Link
        href={getNewPathname("en")}
        className={`px-2 py-1 rounded-full transition ${
          currentLang === "en"
            ? "bg-white text-black"
            : "bg-transparent text-white hover:bg-white hover:text-black"
        }`}
      >
        EN
      </Link>
      <Link
        href={getNewPathname("es")}
        className={`px-2 py-1 rounded-full transition ${
          currentLang === "es"
            ? "bg-white text-black"
            : "bg-transparent text-white hover:bg-white hover:text-black"
        }`}
      >
        ES
      </Link>
    </div>
  );
}
