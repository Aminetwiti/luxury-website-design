"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

interface Zone {
  id: string
  name: string
  region: string
  cities: string[]
  projects: number
  specialty: string
  description: string
  coordinates: { x: number; y: number }
  href: string
}

const zones: Zone[] = [
  {
    id: "paris",
    name: "Paris",
    region: "Île-de-France",
    cities: ["Paris", "Neuilly-sur-Seine", "Boulogne-Billancourt", "Versailles"],
    projects: 85,
    specialty: "Réhabilitation urbaine",
    description:
      "Expertise en réhabilitation d'immeubles haussmanniens et constructions contemporaines en milieu urbain dense",
    coordinates: { x: 48, y: 35 },
    href: "/realisations?zone=paris",
  },
  {
    id: "paca",
    name: "Région PACA",
    region: "Provence-Alpes-Côte d'Azur",
    cities: ["Cannes", "Saint-Tropez", "Monaco", "Nice", "Antibes"],
    projects: 120,
    specialty: "Villas d'exception",
    description: "Spécialisation en villas contemporaines et propriétés de prestige sur la Côte d'Azur",
    coordinates: { x: 75, y: 70 },
    href: "/realisations?zone=paca",
  },
  {
    id: "caraibes",
    name: "Caraïbes",
    region: "Outre-mer",
    cities: ["Saint-Barthélemy", "Saint-Martin"],
    projects: 45,
    specialty: "Construction tropicale",
    description:
      "Constructions durables adaptées au climat tropical avec résistance cyclonique et intégration paysagère",
    coordinates: { x: 25, y: 85 },
    href: "/realisations?zone=caraibes",
  },
]

export function MapZones() {
  const [activeZone, setActiveZone] = useState<string | null>(null)
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)

  return (
    <section className="py-20" style={{ backgroundColor: "#F8F8F5" }} aria-labelledby="zones-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="zones-title"
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}
          >
            Nos Zones d'Intervention
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#1C1C1C" }}>
            Paris, PACA et Caraïbes : trois régions, une même exigence d'excellence technique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carte interactive */}
          <div className="relative">
            <div
              className="relative w-full aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden shadow-lg"
              style={{ backgroundColor: "#1C1C1C" }}
            >
              <Image
                src="/stylized-map-europe-caribbean.png"
                alt="Carte stylisée des zones d'intervention : France métropolitaine et Caraïbes"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Points interactifs */}
              {zones.map((zone) => (
                <button
                  key={zone.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    left: `${zone.coordinates.x}%`,
                    top: `${zone.coordinates.y}%`,
                    focusRingColor: "#C9A568",
                  }}
                  onMouseEnter={() => setHoveredZone(zone.id)}
                  onMouseLeave={() => setHoveredZone(null)}
                  onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
                  aria-label={`Sélectionner la zone ${zone.name}`}
                  aria-expanded={activeZone === zone.id}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                      hoveredZone === zone.id || activeZone === zone.id ? "scale-150 shadow-lg" : "scale-100"
                    }`}
                    style={{ backgroundColor: "#C9A568" }}
                  >
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ backgroundColor: "#C9A568" }}
                    />
                  </div>

                  {/* Tooltip */}
                  {hoveredZone === zone.id && (
                    <div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap z-10"
                      style={{ backgroundColor: "#1C1C1C", color: "#F8F8F5" }}
                    >
                      {zone.name}
                      <div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                        style={{ borderTopColor: "#1C1C1C" }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Informations des zones */}
          <div className="space-y-6">
            {zones.map((zone) => (
              <div
                key={zone.id}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  activeZone === zone.id ? "shadow-lg transform scale-105" : "hover:shadow-md"
                }`}
                style={{
                  backgroundColor: activeZone === zone.id ? "#1C1C1C" : "white",
                  borderColor: activeZone === zone.id ? "#C9A568" : "#E5E5E5",
                  color: activeZone === zone.id ? "#F8F8F5" : "#1C1C1C",
                }}
                onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setActiveZone(activeZone === zone.id ? null : zone.id)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={activeZone === zone.id}
                aria-label={`Informations sur la zone ${zone.name}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {zone.name}
                    </h3>
                    <p className="text-sm opacity-80">{zone.region}</p>
                  </div>
                  <MapPin className="w-6 h-6 flex-shrink-0" style={{ color: "#C9A568" }} aria-hidden="true" />
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">Villes principales :</div>
                  <div className="flex flex-wrap gap-2">
                    {zone.cities.map((city) => (
                      <span
                        key={city}
                        className="px-2 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor:
                            activeZone === zone.id ? "rgba(201, 165, 104, 0.2)" : "rgba(28, 28, 28, 0.1)",
                          color: activeZone === zone.id ? "#C9A568" : "#1C1C1C",
                        }}
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold" style={{ color: "#C9A568" }}>
                      {zone.projects}
                    </div>
                    <div className="text-sm opacity-80">Projets réalisés</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{zone.specialty}</div>
                    <div className="text-sm opacity-80">Spécialité</div>
                  </div>
                </div>

                <p className="text-sm mb-4 opacity-90">{zone.description}</p>

                <Link
                  href={zone.href}
                  className="inline-flex items-center text-sm font-medium hover:underline focus:outline-none focus:underline"
                  style={{ color: "#C9A568" }}
                  aria-label={`Voir les réalisations dans la zone ${zone.name}`}
                >
                  Voir les réalisations
                  <ArrowRight className="ml-1 w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques globales */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#C9A568", fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                250+
              </div>
              <div style={{ color: "#1C1C1C" }}>Projets d'exception</div>
            </div>
            <div className="p-6">
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#C9A568", fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                3
              </div>
              <div style={{ color: "#1C1C1C" }}>Régions couvertes</div>
            </div>
            <div className="p-6">
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#C9A568", fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                15+
              </div>
              <div style={{ color: "#1C1C1C" }}>Années d'expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapZones
