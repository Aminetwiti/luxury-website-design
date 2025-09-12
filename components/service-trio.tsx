"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, Wrench, Shield, Waves, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "construction-neuve",
    title: "Construction Neuve",
    subtitle: "Conception & Dimensionnement",
    description:
      "Études complètes de structures neuves avec expertise technique avancée. De la faisabilité à l'exécution, nous optimisons vos projets selon les Eurocodes.",
    icon: Building,
    image: "/images/Service_Construction_Neuve_Icon.jpg",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    features: ["Phase AVP & EXE", "Modélisation 3D", "Optimisation économique", "Suivi technique"],
    href: "/construction-neuve",
  },
  {
    id: "rehabilitation",
    title: "Réhabilitation",
    subtitle: "Renforcement & Transformation",
    description:
      "Expertise en diagnostic et renforcement de structures existantes. Solutions innovantes pour ouvertures, reprises en sous-œuvre et mise aux normes.",
    icon: Wrench,
    image: "/images/Service_Rehabilitation_Icon.jpg",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    features: ["Diagnostic structural", "Ouvertures murs porteurs", "Fibres carbone", "Reprises sous-œuvre"],
    href: "/rehabilitation",
  },
  {
    id: "parasismique",
    title: "Ingénierie Parasismique",
    subtitle: "Sécurité & Conformité",
    description:
      "Conception parasismique selon Eurocode 8 pour zones sismiques. Analyses dynamiques et solutions d'isolation pour une protection optimale.",
    icon: Shield,
    image: "/images/Service_Parasismique_Icon.jpg",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    features: ["Eurocode 8", "Analyse dynamique", "Contreventements", "Isolation sismique"],
    href: "/developpement-durable",
  },
  {
    id: "ouvrages-exterieurs",
    title: "Ouvrages Extérieurs",
    subtitle: "Aménagements & Géotechnique",
    description:
      "Conception d'ouvrages extérieurs avec expertise géotechnique. Piscines, soutènements, terrasses et aménagements techniques.",
    icon: Waves,
    image: "/images/Service_Ouvrages_Exterieurs_Icon.jpg",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    features: ["Piscines & bassins", "Murs soutènement", "Études géotechniques", "Drainage"],
    href: "/services",
  },
]

export default function ServiceTrio() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#C9A568] text-white border-none px-4 py-2">Nos Domaines d'Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Solutions <span className="text-[#C9A568]">Techniques</span> Complètes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Quatre domaines d'expertise complémentaires pour répondre à tous vos besoins en ingénierie structurelle, de
            la conception à la réalisation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 ${service.borderColor} bg-white overflow-hidden hover:-translate-y-2`}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 left-4 ${service.bgColor} p-3 rounded-full`}>
                    <IconComponent className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-gray-200 text-sm">{service.subtitle}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 text-justify leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 ${service.color} flex-shrink-0`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full group-hover:bg-[#C9A568] group-hover:text-white transition-colors ${service.color} bg-transparent border-2 hover:border-[#C9A568]`}
                    variant="outline"
                  >
                    <Link href={service.href} className="flex items-center justify-center gap-2">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Besoin d'une expertise <span className="text-[#C9A568]">sur-mesure</span> ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-justify">
              Nos ingénieurs analysent votre projet et vous proposent la solution technique la plus adaptée à vos
              contraintes et objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8941F] shadow-lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Demander une étude
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Link href="/services">Voir tous nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
