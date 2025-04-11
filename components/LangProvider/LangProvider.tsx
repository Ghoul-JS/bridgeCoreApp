// src/context/LangContext.tsx
"use client";
import { createContext, useContext, ReactNode } from "react";

type LangContextType = {
  lang: "en" | "es";
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({
  children,
  lang,
}: {
  children: ReactNode;
  lang: "en" | "es";
}) {
  return (
    <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
