// context/dictionary.ts
import enTranslations from "./en.json";
import esTranslations from "./es.json";

const dictionaries = {
  en: enTranslations,
  es: esTranslations,
};

export const getDictionary = async (locale: "en" | "es") => {
  console.log("Loading dictionary:", locale);
  return dictionaries[locale] || dictionaries.en;
};
