import Link from "next/link"
import Image from "next/image"
import { MapPin, Building, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MapZones() {
  const zones = [
    {
      name: "Région PACA",
      description: "Notre siège social et zone d'expertise principale",
      projects: 85,
      cities: ["Marseille", "Nice", "Cannes", "Antibes", "Cassis"],
      highlight: true,
      coordinates: { x: 45, y: 60 },
    },
    {
      name: "Paris & Île-de-France",
      description: "Projets urbains d'exception et réhabilitation patrimoniale",
      projects: 30,
      cities: ["Paris", "Neuilly", "Boulogne", "Versailles"],
      highlight: false,
      coordinates: { x: 35, y: 25 },
    },
    {
      name: "Saint-Barthélemy",
      description: "Architecture tropicale de luxe et constructions parasismiques",
      projects: 25,
      cities: ["Gustavia", "Saint-Jean", "Lorient"],
      highlight: false,
      coordinates: { x: 15, y: 85 },
    },
    {
      name: "Saint-Martin",
      description: "Projets éco-responsables et architecture créole contemporaine",
      projects: 20,
      cities: ["Marigot", "Grand Case", "Orient Bay"],
      highlight: false,
      coordinates: { x: 20, y: 80 },
    },
  ]

  const totalProjects = zones.reduce((sum, zone) => sum + zone.projects, 0)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#C9A568]/10 rounded-full mb-6">
            <MapPin className="w-4 h-4 mr-2 text-[#C9A568]" />
            <span className="text-sm font-medium text-[#C9A568]">Zones d'Intervention</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Notre Présence Territoriale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la Méditerranée aux Antilles, nous intervenons sur des projets d'exception dans des environnements
            privilégiés
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Visualization */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 overflow-hidden border border-blue-200">
              {/* Background Map */}
              <div className="relative h-96 bg-white rounded-xl shadow-inner overflow-hidden">
                <Image
                  src="/images/Carte_Interactive_Zones_Minimaliste.png"
                  alt="Carte des zones d'intervention B.E StructiBA"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Zone Markers */}
                {zones.map((zone, index) => (
                  <div
                    key={zone.name}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer`}
                    style={{
                      left: `${zone.coordinates.x}%`,
                      top: `${zone.coordinates.y}%`,
                    }}
                  >
                    {/* Marker */}
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 group-hover:scale-125 ${
                        zone.highlight ? "bg-[#C9A568] animate-pulse" : "bg-blue-500 group-hover:bg-[#C9A568]"
                      }`}
                    >
                      <div className="absolute inset-0 rounded-full bg-current opacity-20 animate-ping" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="bg-white rounded-lg shadow-xl p-3 border border-gray-200 min-w-max">
                        <div className="font-semibold text-gray-900 text-sm">{zone.name}</div>
                        <div className="text-xs text-[#C9A568] font-medium">{zone.projects} projets</div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#C9A568] rounded-full mr-2" />
                  <span className="text-gray-600">Siège social</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
                  <span className="text-gray-600">Zones d'intervention</span>
                </div>
              </div>
            </div>
          </div>

          {/* Zones List */}
          <div className="space-y-6">
            {zones.map((zone, index) => (
              <div
                key={zone.name}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  zone.highlight
                    ? "bg-[#C9A568]/5 border-[#C9A568]/20 hover:border-[#C9A568]/40"
                    : "bg-white border-gray-200 hover:border-[#C9A568]/20"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${zone.highlight ? "text-[#C9A568]" : "text-gray-900"}`}>
                      {zone.name}
                      {zone.highlight && (
                        <span className="ml-2 px-2 py-1 bg-[#C9A568] text-white text-xs rounded-full">Siège</span>
                      )}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{zone.description}</p>
                  </div>

                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-2xl font-bold text-[#C9A568]">{zone.projects}</div>
                    <div className="text-xs text-gray-500">projets</div>
                  </div>
                </div>

                {/* Cities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {zone.cities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-[#C9A568]/10 hover:text-[#C9A568] transition-colors"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Summary Stats */}
            <div className="bg-gradient-to-r from-[#C9A568]/10 to-[#B8941F]/10 rounded-2xl p-6 border border-[#C9A568]/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Building className="w-6 h-6 text-[#C9A568] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{totalProjects}</div>
                  <div className="text-sm text-gray-600">Projets Total</div>
                </div>
                <div>
                  <Users className="w-6 h-6 text-[#C9A568] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-600">Zones Actives</div>
                </div>
                <div>
                  <Award className="w-6 h-6 text-[#C9A568] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Années</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Un projet dans l'une de nos zones d'intervention ?</p>
          <Button
            asChild
            size="lg"
            className="bg-[#C9A568] hover:bg-[#B8941F] text-white border-none font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">Nous Contacter</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
