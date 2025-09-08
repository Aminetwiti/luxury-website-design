import type React from "react"
import { Header } from "@/components/header"
import { AccessibilityControls } from "@/components/accessibility-controls"
import { StickyCTA } from "@/components/sticky-cta"

interface SiteShellProps {
  children: React.ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F8F5" }}>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
      >
        Aller au contenu principal
      </a>

      <AccessibilityControls />
      <Header />

      <div id="main-content" tabIndex={-1}>
        {children}
      </div>

      <StickyCTA />
    </div>
  )
}

// Add default export
export default SiteShell
