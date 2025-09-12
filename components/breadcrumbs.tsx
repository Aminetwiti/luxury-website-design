"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

const pathMap: Record<string, string> = {
  "/": "Accueil",
  "/services": "Services",
  "/expertise": "Notre Expertise",
  "/realisations": "Réalisations",
  "/a-propos": "À Propos",
  "/contact": "Contact",
  "/construction-neuve": "Construction Neuve",
  "/rehabilitation": "Réhabilitation",
  "/developpement-durable": "Développement Durable",
  "/mentions-legales": "Mentions Légales",
  "/cgv": "Conditions Générales de Vente",
  "/politique-confidentialite": "Politique de Confidentialité",
  "/style-guide": "Guide de Style",
  "/seo": "SEO",
}

export default function Breadcrumbs() {
  const pathname = usePathname()

  if (pathname === "/") {
    return null
  }

  const pathSegments = pathname.split("/").filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Accueil", href: "/" }]

  let currentPath = ""
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`
    const label = pathMap[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1)
    breadcrumbs.push({ label, href: currentPath })
  })

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
              {index === 0 && <Home className="w-4 h-4 mr-2 text-gray-500" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-gray-600 hover:text-[#C9A568] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

// Export nommé pour compatibilité
export { Breadcrumbs }
