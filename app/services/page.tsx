"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, Wrench, Shield, Waves, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "construction-neuve",
    title: "Construction Neuve",
    icon: Building,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    image: "/images/Services_ConstructionNeuve_VillaConcept.jpg",
    description:
      "Conception et dimensionnement de structures neuves avec expertise technique avancée pour tous types de projets de construction.",
    prestations: [
      "Phase Avant-Projet",
      "Phase Exécution",
      "Optimisation Structurelle et économique",
      "Assistance technique et conseil",
    ],
    details: [
      "Études de faisabilité et conception préliminaire",
      "Dimensionnement selon les Eurocodes en vigueur",
      "Modélisation 3D et calculs aux éléments finis",
      "Plans d'exécution détaillés et métrés",
      "Suivi technique durant la réalisation",
      "Optimisation des coûts et des matériaux",
    ],
    advantages: [
      "Respect rigoureux des normes",
      "Optimisation économique",
      "Accompagnement personnalisé",
      "Expertise reconnue",
    ],
  },
  {
    id: "rehabilitation",
    title: "Réhabilitation",
    icon: Wrench,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    image: "/images/Services_Rehabilitation_ChantierTechnique.jpg",
    description:
      "Expertise en renforcement et transformation de structures existantes avec diagnostic approfondi et solutions innovantes.",
    prestations: [
      "Ouvertures de murs porteurs",
      "Diagnostic de l'existant",
      "Renforcement structurel",
      "Ouvertures et fermetures de trémies",
    ],
    details: [
      "Diagnostic structural complet de l'existant",
      "Études de faisabilité pour modifications",
      "Calculs de renforcement et reprises en sous-œuvre",
      "Techniques innovantes (fibres carbone, résines)",
      "Coordination avec les corps d'état",
      "Suivi des travaux de renforcement",
    ],
    advantages: ["Diagnostic précis", "Solutions innovantes", "Respect du patrimoine", "Sécurité maximale"],
  },
  {
    id: "parasismique",
    title: "Ingénierie Parasismique",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-50",
    image: "/images/Services_Durable_TextureChanvreBois.jpg",
    description:
      "Conception parasismique avancée selon les normes Eurocode 8 pour la protection optimale des structures en zones sismiques.",
    prestations: [
      "Études sismiques Eurocode 8",
      "Conception/Analyse 3D avancée",
      "Optimisations",
      "Sécurité et conformité",
    ],
    details: [
      "Analyse sismique selon Eurocode 8",
      "Modélisation dynamique des structures",
      "Calculs de spectre de réponse",
      "Dimensionnement des contreventements",
      "Solutions d'isolation parasismique",
      "Vérification de la conformité réglementaire",
    ],
    advantages: ["Conformité Eurocode 8", "Sécurité optimale", "Analyse dynamique", "Solutions sur-mesure"],
  },
  {
    id: "ouvrages-exterieurs",
    title: "Ouvrages Extérieurs",
    icon: Waves,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    image: "/images/Services_MurPorteur_Coupe.jpg",
    description:
      "Conception d'ouvrages extérieurs et aménagements techniques avec expertise en géotechnique et hydraulique.",
    prestations: [
      "Piscines et bassins",
      "Murs de soutènement",
      "Terrasses et extensions",
      "Aménagements techniques extérieurs",
    ],
    details: [
      "Études géotechniques et de sol",
      "Dimensionnement des piscines et bassins",
      "Calculs de poussée des terres",
      "Étanchéité et drainage",
      "Structures de terrasses et pergolas",
      "Réseaux techniques extérieurs",
    ],
    advantages: ["Expertise géotechnique", "Solutions durables", "Intégration paysagère", "Techniques innovantes"],
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("construction-neuve")
  const currentService = services.find((service) => service.id === activeService)!
  const IconComponent = currentService.icon

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/Services_Icon_ConstructionNeuve.jpg"
            alt="Services d'ingénierie"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos <span className="text-[#C9A568]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 text-justify">
              Quatre domaines d'expertise complémentaires pour répondre à tous vos besoins en ingénierie structurelle,
              de la conception à la réalisation de vos projets les plus ambitieux.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => {
              const ServiceIcon = service.icon
              return (
                <Button
                  key={service.id}
                  variant={activeService === service.id ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center gap-2 px-6 py-3 ${
                    activeService === service.id
                      ? `bg-[#C9A568] hover:bg-[#B8956A] text-white`
                      : `hover:bg-gray-50 ${service.color}`
                  }`}
                >
                  <ServiceIcon className="size-5" />
                  <span className="hidden sm:inline">{service.title}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Service Header */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center gap-3 ${currentService.bgColor} px-6 py-3 rounded-full mb-6`}>
                <IconComponent className={`size-8 ${currentService.color}`} />
                <h2 className="text-3xl font-bold">{currentService.title}</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto text-justify">{currentService.description}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={currentService.image || "/placeholder.svg"}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div>
                {/* Prestations */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className={`size-6 ${currentService.color}`} />
                    Nos Prestations
                  </h3>
                  <div className="grid gap-3">
                    {currentService.prestations.map((prestation, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <div
                          className={`size-2 rounded-full ${currentService.color.replace("text-", "bg-")} flex-shrink-0`}
                        />
                        <span className="font-medium text-gray-800">{prestation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Avantages */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Nos Avantages</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentService.advantages.map((advantage, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        {advantage}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Détails techniques */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Détails Techniques</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentService.details.map((detail, index) => (
                  <Card key={index} className="border-0 bg-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div
                          className={`size-2 rounded-full ${currentService.color.replace("text-", "bg-")} mt-2 flex-shrink-0`}
                        />
                        <p className="text-gray-700 text-justify">{detail}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à démarrer votre <span className="text-[#C9A568]">projet</span> ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-justify">
            Contactez nos experts pour discuter de vos besoins et obtenir une étude personnalisée de votre projet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8956A] text-white">
              <Link href="/contact" className="flex items-center gap-2">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/expertise">Découvrir notre expertise</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
