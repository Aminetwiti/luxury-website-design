"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Building2, Hammer, Leaf, Search, ArrowRight, CheckCircle, Zap, Shield, Target } from "lucide-react"

type ServiceTab = "rehabilitation" | "construction" | "durable" | "expertise"

const services = {
  rehabilitation: {
    title: "Réhabilitation & Renforcement",
    icon: Hammer,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    description: "Interventions structurelles complexes sur bâtiments existants avec techniques de pointe",
    image: "/images/Services_Rehabilitation_ChantierTechnique.png",
    prestations: [
      "Renforcement par fibres carbone et aramide",
      "Tirants précontraints et post-contrainte",
      "Injection de résines structurelles",
      "Ouverture de trémies et modification porteurs",
      "Reprise en sous-œuvre et micropieux",
      "Diagnostic pathologies et solutions curatives",
    ],
    techniques: [
      {
        name: "Fibres Carbone",
        description: "Renforcement ultra-performant pour poutres et dalles",
        specs: "Résistance 3400 MPa, épaisseur 1,2mm",
      },
      {
        name: "Tirants Précontraints",
        description: "Stabilisation de structures par mise en tension",
        specs: "Charges jusqu'à 500 kN, longueurs 30m",
      },
      {
        name: "Injection Résine",
        description: "Réparation fissures et consolidation maçonnerie",
        specs: "Résistance 80 MPa, pénétration 0,1mm",
      },
    ],
    projets: [
      {
        nom: "Penthouse Trocadéro",
        defi: "Terrasse suspendue 150m² sans appui",
        solution: "Structure carbone + tirants précontraints",
      },
      {
        nom: "Loft Belleville",
        defi: "Portée libre 12m en réhabilitation",
        solution: "Mezzanine suspendue par tirants",
      },
    ],
  },
  construction: {
    title: "Construction Neuve",
    icon: Building2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Projets haut de gamme sur mesure avec innovations structurelles et architecturales",
    image: "/images/Services_ConstructionNeuve_VillaConcept.png",
    prestations: [
      "Béton précontraint et post-contraint",
      "Structures mixtes acier-béton-bois",
      "Modélisation 3D et calculs aux éléments finis",
      "Grandes portées et porte-à-faux",
      "Fondations spéciales et géotechnique",
      "Coordination BIM et maquette numérique",
    ],
    techniques: [
      {
        name: "Béton Précontraint",
        description: "Grandes portées sans appuis intermédiaires",
        specs: "Portées 20m, charges 15 kN/m²",
      },
      {
        name: "Modélisation 3D",
        description: "Calculs dynamiques et sismiques avancés",
        specs: "Robot Structural, Tekla, Revit",
      },
      {
        name: "Structures Mixtes",
        description: "Optimisation acier-béton-bois",
        specs: "Réduction 30% matière, gain 25% temps",
      },
    ],
    projets: [
      {
        nom: "Villa Horizon Antibes",
        defi: "Piscine naturelle intégrée structure",
        solution: "Béton précontraint + géothermie",
      },
      {
        nom: "Villa Nice Collines",
        defi: "Baies vitrées 6m coulissantes",
        solution: "Portiques béton + domotique KNX",
      },
    ],
  },
  durable: {
    title: "Développement Durable",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Solutions bas carbone et innovations éco-responsables pour constructions durables",
    image: "/images/Services_Durable_TextureChanvreBois.png",
    prestations: [
      "Béton de chanvre et matériaux biosourcés",
      "Bois lamellé-collé et CLT",
      "Géothermie et énergies renouvelables",
      "Récupération eaux pluviales intégrée",
      "Ventilation naturelle et bioclimatisme",
      "Certifications HQE, BREEAM, Passivhaus",
    ],
    techniques: [
      {
        name: "Béton de Chanvre",
        description: "Isolation thermique et régulation hygrométrique",
        specs: "λ=0,07 W/m.K, densité 300 kg/m³",
      },
      {
        name: "Bois Lamellé CLT",
        description: "Structure porteuse biosourcée",
        specs: "Portées 12m, résistance feu R60",
      },
      {
        name: "Géothermie",
        description: "Chauffage/rafraîchissement naturel",
        specs: "COP 4,5, sondes 100m, 15 kW",
      },
    ],
    projets: [
      {
        nom: "Éco-Resort Martinique",
        defi: "12 bungalows parasismiques durables",
        solution: "Bois local + ventilation naturelle",
      },
      {
        nom: "Immeuble Passif Paris",
        defi: "15 kWh/m²/an seulement",
        solution: "Façade végétale + géothermie égouts",
      },
    ],
  },
  expertise: {
    title: "Expertise & Conseil",
    icon: Search,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Accompagnement technique spécialisé et expertise judiciaire de haut niveau",
    image: "/images/Expertise_Schema_TechniqueMinimal.png",
    prestations: [
      "Diagnostic avancé et pathologies",
      "Expertise judiciaire et assurance",
      "Audit technique et due diligence",
      "Formation équipes et assistance MOE",
      "Contrôle qualité et réception travaux",
      "Conseil stratégique et innovation",
    ],
    techniques: [
      {
        name: "Diagnostic Avancé",
        description: "Investigation non-destructive complète",
        specs: "Radar, ultrasons, thermographie IR",
      },
      {
        name: "Expertise Judiciaire",
        description: "Missions d'expertise agréées tribunaux",
        specs: "Cour d'Appel, TGI, assurances",
      },
      {
        name: "Audit Technique",
        description: "Due diligence immobilière approfondie",
        specs: "Rapport 48h, conformité réglementaire",
      },
    ],
    projets: [
      {
        nom: "Expertise Sinistre Cannes",
        defi: "Effondrement partiel immeuble 1960",
        solution: "Investigation + solution réparation",
      },
      {
        nom: "Audit Hôtel Particulier",
        defi: "Due diligence acquisition 15M€",
        solution: "Diagnostic complet + chiffrage travaux",
      },
    ],
  },
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("rehabilitation")
  const currentService = services[activeTab]
  const IconComponent = currentService.icon

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Nos Services d'Ingénierie
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-justify">
              B.E StructiBA propose 4 domaines d'expertise complémentaires pour répondre à tous vos défis structurels.
              De la réhabilitation complexe aux constructions durables innovantes, notre équipe d'ingénieurs spécialisés
              vous accompagne avec des solutions techniques de pointe et un savoir-faire reconnu depuis 15 ans.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Target className="size-4" />
                <span>4 domaines d'expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="size-4" />
                <span>15 ans d'expérience</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="size-4" />
                <span>Solutions innovantes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => {
              const IconComp = service.icon
              return (
                <Button
                  key={key}
                  variant={activeTab === key ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveTab(key as ServiceTab)}
                  className={`flex items-center gap-2 px-6 py-3 ${
                    activeTab === key
                      ? `bg-[#C9A568] hover:bg-[#B8956A] text-white`
                      : `hover:bg-gray-50 ${service.color}`
                  }`}
                >
                  <IconComp className="size-5" />
                  <span className="hidden sm:inline">{service.title}</span>
                  <span className="sm:hidden">{service.title.split(" ")[0]}</span>
                </Button>
              )
            })}
          </div>

          {/* Service Content */}
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center gap-3 ${currentService.bgColor} px-6 py-3 rounded-full mb-4`}>
                <IconComponent className={`size-6 ${currentService.color}`} />
                <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {currentService.title}
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">{currentService.description}</p>
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

              {/* Prestations */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle className={`size-5 ${currentService.color}`} />
                  Prestations Principales
                </h3>
                <div className="grid gap-3 mb-8">
                  {currentService.prestations.map((prestation, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div
                        className={`size-2 rounded-full ${currentService.color.replace("text-", "bg-")} mt-2 flex-shrink-0`}
                      />
                      <span className="text-gray-700 text-justify">{prestation}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="bg-[#C9A568] hover:bg-[#B8956A] text-white">
                  <Link href="/contact">
                    Demander un devis
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Techniques Spécialisées */}
            <div className="mt-16">
              <h3
                className="text-2xl font-bold text-center mb-8"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Techniques Spécialisées
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {currentService.techniques.map((technique, index) => (
                  <Card
                    key={index}
                    className="border-l-4"
                    style={{
                      borderLeftColor: currentService.color.includes("amber")
                        ? "#D97706"
                        : currentService.color.includes("blue")
                          ? "#2563EB"
                          : currentService.color.includes("green")
                            ? "#16A34A"
                            : "#9333EA",
                    }}
                  >
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-2">{technique.name}</h4>
                      <p className="text-gray-600 mb-3 text-justify">{technique.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {technique.specs}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Projets de Référence */}
            <div className="mt-16">
              <h3
                className="text-2xl font-bold text-center mb-8"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Projets de Référence
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {currentService.projets.map((projet, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-2 text-lg">{projet.nom}</h4>
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium text-red-600">Défi : </span>
                          <span className="text-gray-700">{projet.defi}</span>
                        </div>
                        <div>
                          <span className="font-medium text-green-600">Solution : </span>
                          <span className="text-gray-700">{projet.solution}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Besoin d'une expertise en {currentService.title.toLowerCase()} ?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-justify">
                Nos ingénieurs spécialisés analysent votre projet et vous proposent les solutions techniques les plus
                adaptées. Devis gratuit et conseil personnalisé sous 48h.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8956A] text-white">
                  <Link href="/contact">Demander un devis gratuit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/realisations">Voir nos réalisations</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
