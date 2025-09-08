import type React from "react"
import Header from "./header"
import Footer from "./footer"
import Breadcrumbs from "./breadcrumbs"

interface SiteShellProps {
  children: React.ReactNode
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F5]">
      <Header />
      <Breadcrumbs />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

// Export par défaut ET nommé pour compatibilité
export { SiteShell }
