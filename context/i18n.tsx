"use client"; // 🔥 Importante: Esto indica que es un Client Component

import { createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation"; // 🔥 Cambiar useRouter por usePathname en App Router
import en from "@/traslation/en.json";
import es from "@/traslation/es.json";

type LanguageContextType = "en" | "es";

interface Translations {
  en: { [key: string]: any }; // 🔥 Permite estructuras anidadas
  es: { [key: string]: any };
}

const I18NContext = createContext<{ t: (key: string) => string } | undefined>(
  undefined,
);

const languages: Translations = { en, es };

interface I18NProviderProps {
  children: ReactNode;
}

export const I18NProvider = ({ children }: I18NProviderProps) => {
  const pathname = usePathname();
  const locale = pathname.startsWith("/es") ? "es" : "en"; // 🔥 Detectar idioma desde la URL

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = languages[locale];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // 🔥 Si la clave no existe, devuelve la propia clave como fallback
      }
    }

    return typeof value === "string" ? value : key;
  };
  return <I18NContext.Provider value={{ t }}>{children}</I18NContext.Provider>;
};

// ✅ Exportación correcta del hook
export const useI18N = () => {
  const context = useContext(I18NContext);
  if (context === undefined)
    throw new Error("useI18N debe usarse dentro de I18NProvider");
  return context;
};
