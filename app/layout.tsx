import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { SiteShell } from "@/components/site-shell"

// Load Playfair Display font
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  title: "Luxe Construction - Excellence architecturale",
  description:
    "Entreprise de construction haut de gamme spécialisée dans la réhabilitation, construction neuve et développement durable",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f8f8f5" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
