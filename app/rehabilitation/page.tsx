import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SiteShell from "@/components/site-shell"

const rehabilitationTypes = [
  {
    title: "Renforcement Structurel",
    description: "Consolidation des structures existantes avec des techniques modernes",
    image: "/images/Services_Renforcement_Poutre.png",
    techniques: ["Fibres de carbone", "Résine époxy", "Profilés métalliques"],
    duration: "2-4 semaines",
    complexity: "Élevée",
  },
  {
    title: "Ouverture de Murs Porteurs",
    description: "Création d'espaces ouverts tout en préservant la stabilité",
    image: "/images/Services_MurPorteur_Coupe.png",
    techniques: ["Poutres IPN", "Linteaux béton", "Étaiement temporaire"],
    duration: "1-2 semaines",
    complexity: "Moyenne",
  },
  {
    title: "Création de Trémies",
    description: "Percements techniques pour escaliers et gaines",
    image: "/images/Services_Tremie_Schema3D.png",
    techniques: ["Découpe contrôlée", "Renforcement périphérique", "Étude vibratoire"],
    duration: "3-5 jours",
    complexity: "Moyenne",
  },
]

const beforeAfterProjects = [
  {
    title: "Loft Industriel - Belleville",
    location: "Paris 20ème",
    before: "/images/Loft_Belleville_Avant_Travaux.png",
    after: "/images/Loft_Belleville_Mezzanine_Suspendue.png",
    description: "Transformation d'un ancien atelier en loft moderne avec mezzanine suspendue",
    surface: "180 m²",
    duration: "6 mois",
    year: "2023",
  },
  {
    title: "Maison Créole - Guadeloupe",
    location: "Pointe-à-Pitre",
    before: "/images/Maison_Creole_Facade_Traditionnelle.png",
    after: "/images/Maison_Creole_Interieur_Moderne.png",
    description: "Réhabilitation respectueuse du patrimoine avec confort moderne",
    surface: "220 m²",
    duration: "8 mois",
    year: "2023",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Diagnostic Structurel",
    description: "Analyse complète de l'existant et identification des pathologies",
    icon: "🔍",
    duration: "1-2 semaines",
  },
  {
    step: 2,
    title: "Étude de Faisabilité",
    description: "Conception des solutions techniques et validation réglementaire",
    icon: "📐",
    duration: "2-3 semaines",
  },
  {
    step: 3,
    title: "Plans d'Exécution",
    description: "Dessins techniques détaillés et notes de calcul",
    icon: "📋",
    duration: "1-2 semaines",
  },
  {
    step: 4,
    title: "Suivi de Chantier",
    description: "Accompagnement technique et contrôle qualité",
    icon: "🏗️",
    duration: "Variable",
  },
]

const stats = [
  { label: "Projets réhabilités", value: "150+", icon: Award },
  { label: "Années d'expérience", value: "15", icon: Clock },
  { label: "Taux de satisfaction", value: "98%", icon: TrendingUp },
  { label: "Équipe d'experts", value: "12", icon: Users },
]

export default function RehabilitationPage() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Rehabilitation_Hero_StructureElegante.png"
            alt="Réhabilitation structure élégante"
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

      {/* Avant/Après */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transformations Remarquables</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous révélons le potentiel caché de chaque structure.
            </p>
          </div>

          <div className="space-y-16">
            {beforeAfterProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Avant */}
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-red-500 text-white">Avant</Badge>
                    </div>
                    <Image
                      src={project.before || "/placeholder.svg"}
                      alt={`${project.title} - Avant`}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>

                  {/* Après */}
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-green-500 text-white">Après</Badge>
                    </div>
                    <Image
                      src={project.after || "/placeholder.svg"}
                      alt={`${project.title} - Après`}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.location}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {project.year}
                    </Badge>
                  </div>

                  <p className="text-gray-700 mb-6">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Surface :</span>
                      <span className="ml-2 font-medium">{project.surface}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Durée :</span>
                      <span className="ml-2 font-medium">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20">
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

                <Card className="relative z-10 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div className="w-8 h-8 bg-[#C9A568] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {step.step}
                    </div>
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
              <Link href="tel:+33142123456">Appeler Maintenant</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
