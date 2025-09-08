import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import SiteShell from "@/components/site-shell"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "B.E StructiBA - Bureau d'Études Structurelles",
  description:
    "Bureau d'études spécialisé en construction neuve, réhabilitation et développement durable. Expertise technique pour vos projets d'exception en PACA, Paris et Antilles.",
  keywords:
    "bureau études, structure, béton armé, construction, réhabilitation, développement durable, PACA, Paris, Antilles",
  authors: [{ name: "B.E StructiBA" }],
  openGraph: {
    title: "B.E StructiBA - Bureau d'Études Structurelles",
    description: "Expertise technique et innovation au service de vos projets architecturaux",
    type: "website",
    locale: "fr_FR",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
