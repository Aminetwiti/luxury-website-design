"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

const pathNames: Record<string, string> = {
  "/": "Accueil",
  "/services": "Nos Services",
  "/expertise": "Notre Expertise",
  "/realisations": "Nos Réalisations",
  "/a-propos": "À Propos",
  "/contact": "Contact",
  "/construction-neuve": "Construction Neuve",
  "/rehabilitation": "Réhabilitation",
  "/developpement-durable": "Développement Durable",
  "/mentions-legales": "Mentions Légales",
  "/politique-confidentialite": "Politique de Confidentialité",
  "/cgv": "Conditions Générales de Vente",
}

export default function Breadcrumbs() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="flex items-center text-gray-600 hover:text-[#C9A568] transition-colors">
              <Home className="w-4 h-4 mr-1" />
              Accueil
            </Link>
          </li>

          {pathSegments.map((segment, index) => {
            const path = "/" + pathSegments.slice(0, index + 1).join("/")
            const isLast = index === pathSegments.length - 1
            const name = pathNames[path] || segment.charAt(0).toUpperCase() + segment.slice(1)

            return (
              <li key={path} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-900 font-medium">{name}</span>
                ) : (
                  <Link href={path} className="text-gray-600 hover:text-[#C9A568] transition-colors">
                    {name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
