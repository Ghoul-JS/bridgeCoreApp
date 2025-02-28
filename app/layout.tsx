import type { Metadata } from 'next'
import './globals.css'

import VrilBot from "@/components/VrilBot/VrilBot"

export const metadata: Metadata = {
  title: 'BridgeCore',
  description: 'Created with my hands',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* <head>
        <VrilBot />
      </head> */}
      <body>
        {children}
        <VrilBot />
      </body>
    </html>
  )
}
