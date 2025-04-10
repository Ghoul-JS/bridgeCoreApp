import type { Metadata } from "next";
import { ReactNode } from "react";
import "../globals.css";
//import { I18NProvider } from "@/context/ditionary";
import VrilBot from "@/components/VrilBot/VrilBot";

export const metadata: Metadata = {
  title: "BridgeCore",
  description: "created to provide solutions",
};

/*interface LayoutProps {
  children: ReactNode;
  params: { locale: "en" | "es" };
}*/
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "es" };
}>) {
  const lang = (await params).lang;

  return (
    <html lang={lang}>
      <body>
        {children}
        <VrilBot />
      </body>
    </html>
  );
}
