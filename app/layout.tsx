<<<<<<< HEAD
import type { Metadata } from "next";
import "./globals.css";
import { I18NProvider } from "@/context/i18n";
=======
import type { Metadata } from 'next'
import './globals.css'

import VrilBot from "@/components/VrilBot/VrilBot"

>>>>>>> 506520f81d6578d947a84c88ccb5fda5f78ac4c2
export const metadata: Metadata = {
  title: "BridgeCore",
  description: "Created with my hands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
        <I18NProvider>{children}</I18NProvider>
=======
      {/* <head>
        <VrilBot />
      </head> */}
      <body>
        {children}
        <VrilBot />
>>>>>>> 506520f81d6578d947a84c88ccb5fda5f78ac4c2
      </body>
    </html>
  );
}
