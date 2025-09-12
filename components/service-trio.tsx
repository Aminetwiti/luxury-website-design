"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Wrench, Shield, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "construction-neuve",
    title: "Construction Neuve",
    icon: Building,
    image: "/service-construction-neuve.jpg",
    description: "Conception et dimensionnement de structures neuves avec expertise technique avancée",
    prestations: [
      "Phase Avant-Projet",
      "Phase Exécution",
      "Optimisation Structurelle et économique",
      "Assistance technique et conseil",
    ],
    color: "from-blue-600 to-blue-800",
  },
  {
    id: "rehabilitation",
    title: "Réhabilitation",
    icon: Wrench,
    image: "/service-rehabilitation.jpg",
    description: "Expertise en renforcement et transformation de structures existantes",
    prestations: [
      "Ouvertures de murs porteurs",
      "Diagnostic de l'existant",
      "Renforcement structurel",
      "Ouvertures et fermetures de trémies",
    ],
    color: "from-orange-600 to-orange-800",
  },
  {
    id: "parasismique",
    title: "Ingénierie Parasismique",
    icon: Shield,
    image: "/service-eco-construction.jpg",
    description: "Conception parasismique avancée selon les normes Eurocode 8",
    prestations: [
      "Études sismiques Eurocode 8",
      "Conception/Analyse 3D avancée",
      "Optimisations",
      "Sécurité et conformité",
    ],
    color: "from-green-600 to-green-800",
  },
  {
    id: "ouvrages-exterieurs",
    title: "Ouvrages Extérieurs",
    icon: Waves,
    image: "/service-construction-neuve.jpg",
    description: "Conception d'ouvrages extérieurs et aménagements techniques",
    prestations: [
      "Piscines et bassins",
      "Murs de soutènement",
      "Terrasses et extensions",
      "Aménagements techniques extérieurs",
    ],
    color: "from-teal-600 to-teal-800",
  },
]

export default function ServiceTrio() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-[#C9A568]">Domaines d'Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Quatre domaines de compétence complémentaires pour répondre à tous vos besoins en ingénierie structurelle,
            de la conception à la réalisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-70 transition-opacity`}
                  />

                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{service.title}</h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 text-justify">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Prestations :</h4>
                    {service.prestations.map((prestation, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#C9A568] rounded-full flex-shrink-0" />
                        <span className="text-gray-600">{prestation}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-[#C9A568] group-hover:text-white group-hover:border-[#C9A568] transition-all bg-transparent"
                  >
                    <Link href="/services" className="flex items-center justify-center gap-2">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8956A] text-white">
            <Link href="/services" className="flex items-center gap-2">
              Voir tous nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
