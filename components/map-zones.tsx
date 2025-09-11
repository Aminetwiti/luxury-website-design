"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const zones = [
  {
    id: "cannes",
    name: "Cannes",
    description: "Siège social",
    details: "Centre névralgique de nos activités avec équipe complète d'ingénieurs",
    coordinates: { x: 45, y: 65 },
    projects: 85,
    specialties: ["Construction neuve", "Réhabilitation", "Parasismique"],
  },
  {
    id: "nice",
    name: "Nice",
    description: "Métropole Côte d'Azur",
    details: "Intervention sur grands projets urbains et résidentiels",
    coordinates: { x: 65, y: 55 },
    projects: 45,
    specialties: ["Ouvrages complexes", "Immeubles", "Rénovation urbaine"],
  },
  {
    id: "antibes",
    name: "Antibes",
    description: "Juan-les-Pins",
    details: "Spécialisation villas de prestige et projets balnéaires",
    coordinates: { x: 55, y: 60 },
    projects: 32,
    specialties: ["Villas", "Piscines", "Ouvrages extérieurs"],
  },
  {
    id: "grasse",
    name: "Grasse",
    description: "Arrière-pays",
    details: "Projets en terrain difficile et constructions sur pente",
    coordinates: { x: 35, y: 45 },
    projects: 28,
    specialties: ["Soutènement", "Fondations spéciales", "Terrain en pente"],
  },
  {
    id: "antilles",
    name: "Antilles Françaises",
    description: "Saint-Barthélemy • Saint-Martin",
    details: "Expertise parasismique et architecture tropicale",
    coordinates: { x: 85, y: 25 },
    projects: 15,
    specialties: ["Parasismique", "Cyclonique", "Architecture tropicale"],
  },
]

export default function MapZones() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)

  const activeZone = zones.find((zone) => zone.id === (selectedZone || hoveredZone))

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos Zones d'Intervention</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Basés à Cannes, nous intervenons sur l'ensemble de la région PACA et aux Antilles Françaises. Notre
            proximité géographique garantit un suivi personnalisé de vos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Carte interactive */}
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
                <Image
                  src="/stylized-map-europe-caribbean.png"
                  alt="Carte des zones d'intervention"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Points interactifs */}
                {zones.map((zone) => (
                  <button
                    key={zone.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      selectedZone === zone.id || hoveredZone === zone.id ? "scale-125 z-10" : "hover:scale-110"
                    }`}
                    style={{
                      left: `${zone.coordinates.x}%`,
                      top: `${zone.coordinates.y}%`,
                    }}
                    onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
                    onMouseEnter={() => setHoveredZone(zone.id)}
                    onMouseLeave={() => setHoveredZone(null)}
                    aria-label={`Zone ${zone.name}`}
                  >
                    <div
                      className={`relative ${
                        selectedZone === zone.id || hoveredZone === zone.id ? "animate-pulse" : ""
                      }`}
                    >
                      <div className="w-4 h-4 bg-[#C9A568] rounded-full shadow-lg border-2 border-white" />
                      <div className="absolute inset-0 w-4 h-4 bg-[#C9A568] rounded-full animate-ping opacity-75" />
                    </div>

                    {/* Label */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-white px-2 py-1 rounded shadow-md text-xs font-medium text-gray-800">
                        {zone.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Informations de zone */}
          <div className="space-y-6">
            {activeZone ? (
              <Card className="border-[#C9A568] border-2 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{activeZone.name}</h3>
                      <p className="text-[#C9A568] font-medium">{activeZone.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#C9A568]">{activeZone.projects}</div>
                      <div className="text-sm text-gray-500">projets</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-justify">{activeZone.details}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Spécialités :</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeZone.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-[#C9A568]/10 text-[#C9A568] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-gray-200">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sélectionnez une zone</h3>
                  <p className="text-gray-600">
                    Cliquez sur un point de la carte pour découvrir nos interventions dans cette région.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Contact principal */}
            <Card className="bg-gradient-to-r from-[#C9A568] to-[#B8941F] text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Principal</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5" />
                    <div>
                      <p className="font-medium">263 Avenue de Grasse</p>
                      <p className="text-sm opacity-90">06400 Cannes</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="font-medium">04 93 12 34 56</p>
                      <p className="text-sm opacity-90">Lun-Ven 8h-18h</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <div>
                      <p className="font-medium">contact@structiba.fr</p>
                      <p className="text-sm opacity-90">Réponse sous 24h</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-white text-[#C9A568] hover:bg-gray-100" asChild>
                  <a href="/contact">Demander un Devis</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistiques globales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C9A568] mb-2">200+</div>
            <div className="text-sm text-gray-600">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C9A568] mb-2">5</div>
            <div className="text-sm text-gray-600">Zones d'intervention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C9A568] mb-2">48h</div>
            <div className="text-sm text-gray-600">Délai d'intervention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C9A568] mb-2">15+</div>
            <div className="text-sm text-gray-600">Années d'expérience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
