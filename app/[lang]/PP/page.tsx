"use client";

import { Navbar } from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import { getDictionary } from "@/context/dictionary";
import { useLang } from "@/components/LangProvider/LangProvider";
import { useEffect, useState } from "react";

const PP = () => {
  const { lang } = useLang();
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    const fetchDict = async () => {
      const data = await getDictionary(lang);
      setDict(data);
    };

    fetchDict();
  }, [lang]);

  if (!dict) return <div className="text-white p-4">Loading...</div>;

  return (
    <>
      <Navbar lang={lang} dictionary={dict.Nav} />
      <main className="w-full pt-18 py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold mb-4 text-center">{dict.PP.title}</h1>
        <div className="max-w-4xl mx-auto px-1 space-y-4">
          {dict.PP.Politics.map((item: any, index: number) => (
            <div key={index}>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer lang={lang} dictionary={dict.Footer} />
    </>
  );
};

export default PP;
