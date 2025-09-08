"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

const pathLabels: Record<string, string> = {
  services: "Nos Services",
  "construction-neuve": "Construction Neuve",
  rehabilitation: "Réhabilitation",
  "developpement-durable": "Développement Durable",
  expertise: "Notre Expertise",
  realisations: "Nos Réalisations",
  "a-propos": "À Propos",
  contact: "Contact",
  // Projets spécifiques
  "villa-antibes": "Villa Antibes",
  "penthouse-trocadero": "Penthouse Trocadéro",
  "eco-resort-martinique": "Éco-Resort Martinique",
  "loft-belleville": "Loft Belleville",
  "villa-cassis": "Villa Cassis",
  "maison-creole": "Maison Créole",
  "residence-guadeloupe": "Résidence Guadeloupe",
  "villa-nice": "Villa Nice",
  "hotel-particulier": "Hôtel Particulier",
  "immeuble-passif": "Immeuble Passif",
  "maison-montmartre": "Maison Montmartre",
}

export default function Breadcrumbs() {
  const pathname = usePathname()

  // Ne pas afficher sur la page d'accueil
  if (pathname === "/") {
    return null
  }

  const pathSegments = pathname.split("/").filter(Boolean)

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 py-3" aria-label="Fil d'Ariane">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-gray-500 hover:text-[#C9A568] transition-colors"
              aria-label="Retour à l'accueil"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>

          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/")
            const isLast = index === pathSegments.length - 1
            const label = pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)

            return (
              <li key={segment} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="text-gray-500 hover:text-[#C9A568] transition-colors">
                    {label}
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
