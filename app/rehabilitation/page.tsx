import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, Award, TrendingUp, Shield, Wrench, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const rehabilitationTypes = [
  {
    title: "Renforcement Structurel",
    description: "Consolidation des structures existantes avec des techniques modernes",
    image: "/images/Rehabilitation_Structural_Reinforcement.jpg",
    techniques: ["Fibres de carbone", "Résine époxy", "Profilés métalliques"],
    duration: "2-4 semaines",
    complexity: "Élevée",
  },
  {
    title: "Ouverture de Murs Porteurs",
    description: "Création d'espaces ouverts tout en préservant la stabilité",
    image: "/images/Rehabilitation_Wall_Opening.jpg",
    techniques: ["Poutres IPN", "Linteaux béton", "Étaiement temporaire"],
    duration: "1-2 semaines",
    complexity: "Moyenne",
  },
  {
    title: "Création de Trémies",
    description: "Percements techniques pour escaliers et gaines",
    image: "/images/Rehabilitation_Opening_Creation.jpg",
    techniques: ["Découpe contrôlée", "Renforcement périphérique", "Étude vibratoire"],
    duration: "3-5 jours",
    complexity: "Moyenne",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Diagnostic Structurel",
    description: "Analyse complète de l'existant et identification des pathologies",
    icon: Shield,
    duration: "1-2 semaines",
    image: "/images/Rehabilitation_Structural_Diagnosis.jpg",
  },
  {
    step: 2,
    title: "Étude de Faisabilité",
    description: "Conception des solutions techniques et validation réglementaire",
    icon: Wrench,
    duration: "2-3 semaines",
    image: "/images/Rehabilitation_Technical_Study.jpg",
  },
  {
    step: 3,
    title: "Plans d'Exécution",
    description: "Dessins techniques détaillés et notes de calcul",
    icon: Building,
    duration: "1-2 semaines",
    image: "/images/Rehabilitation_Execution_Plans.jpg",
  },
  {
    step: 4,
    title: "Suivi de Chantier",
    description: "Accompagnement technique et contrôle qualité",
    icon: Users,
    duration: "Variable",
    image: "/images/Rehabilitation_Site_Monitoring.jpg",
  },
]

const stats = [
  { label: "Projets réhabilités", value: "150+", icon: Award },
  { label: "Années d'expérience", value: "15", icon: Clock },
  { label: "Taux de satisfaction", value: "98%", icon: TrendingUp },
  { label: "Équipe d'experts", value: "12", icon: Users },
]

const advancedTechniques = [
  {
    title: "Diagnostic Non-Destructif",
    description:
      "Utilisation de technologies avancées : radar de structure, ultrasons, thermographie infrarouge pour analyser l'état des matériaux sans altération.",
    image: "/images/Rehabilitation_Non_Destructive_Testing.jpg",
    techniques: ["Radar GPR", "Ultrasons", "Thermographie"],
  },
  {
    title: "Renforcement Composite",
    description:
      "Application de fibres de carbone, aramide ou verre pour renforcer les structures existantes avec un impact minimal sur l'architecture.",
    image: "/images/Rehabilitation_Composite_Reinforcement.jpg",
    techniques: ["Fibres Carbone", "Résines Époxy", "Précontrainte"],
  },
  {
    title: "Suivi Numérique",
    description:
      "Monitoring en temps réel des déformations, contraintes et performances structurelles grâce à des capteurs IoT intégrés.",
    image: "/images/Rehabilitation_Digital_Monitoring.jpg",
    techniques: ["Capteurs IoT", "BIM 4D", "Monitoring"],
  },
]

export default function RehabilitationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Rehabilitation_Hero_Modern_Structure.jpg"
            alt="Réhabilitation structure moderne"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-[#C9A568] text-white border-none">Réhabilitation & Renforcement</Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Donnez une
              <span className="block text-[#C9A568]">Nouvelle Vie</span>à vos Structures
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Expertise technique et innovation pour transformer, renforcer et moderniser vos bâtiments existants avec
              respect du patrimoine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#C9A568] hover:bg-[#B8941F] text-white">
                <Link href="/contact" className="flex items-center">
                  Étude Gratuite
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Link href="/realisations" className="flex items-center">
                  Voir nos Réalisations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A568] text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Réhabilitation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Spécialités en Réhabilitation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque projet de réhabilitation est unique. Nous adaptons nos techniques aux contraintes spécifiques de
              votre bâtiment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rehabilitationTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src={type.image || "/placeholder.svg"} alt={type.title} fill className="object-cover" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Techniques :</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {type.techniques.map((technique, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {technique}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        Durée : <strong>{type.duration}</strong>
                      </span>
                      <span className="text-gray-500">
                        Complexité : <strong>{type.complexity}</strong>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Processus de Réhabilitation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir la réussite de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Ligne de connexion */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#C9A568] to-gray-300 z-0" />
                )}

                <Card className="relative z-10 text-center hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C9A568] rounded-full mb-2">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="w-8 h-8 bg-white text-[#C9A568] rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Techniques Avancées */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Techniques Avancées de Réhabilitation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous utilisons les technologies les plus modernes pour garantir la durabilité et la performance de vos
              structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedTechniques.map((technique, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={technique.image || "/placeholder.svg"}
                    alt={technique.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{technique.title}</h3>
                  <p className="text-gray-600 mb-4">{technique.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {technique.techniques.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Transformer Votre Bâtiment ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent de l'étude de faisabilité à la réception des travaux.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C9A568] hover:bg-[#B8941F]">
              <Link href="/contact" className="flex items-center">
                Diagnostic Gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="tel:+33493123456">Appeler Maintenant</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
