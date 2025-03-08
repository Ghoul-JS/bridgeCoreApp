import type { Metadata } from "next";
import "./globals.css";
import { I18NProvider } from "@/context/i18n";
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
      <body>
        <I18NProvider>{children}</I18NProvider>
      </body>
    </html>
  );
}
