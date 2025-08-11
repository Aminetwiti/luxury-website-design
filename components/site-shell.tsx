"use client"

import type { ReactNode } from "react"
import AccessibilityControls from "./accessibility-controls"
import Header from "./header"
import Footer from "./footer"

interface SiteShellProps {
  children: ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Lien "Aller au contenu" pour l'accessibilité */}
      <a href="#main-content" className="skip-link" aria-label="Aller directement au contenu principal">
        Aller au contenu
      </a>

      {/* Header avec navigation principale */}
      <Header />

      {/* Contenu principal */}
      <main id="main-content" className="flex-1" role="main" aria-label="Contenu principal" tabIndex={-1}>
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Contrôles d'accessibilité */}
      <AccessibilityControls />
    </div>
  )
}
