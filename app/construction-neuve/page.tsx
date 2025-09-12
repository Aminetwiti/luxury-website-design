import { copy } from "@/lib/copy"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const constructionPhases = [
  {
    title: "AVP - Avant-Projet",
    desc: "Avant‑Projet : plans, études, faisabilité.",
    src: "/images/ConstructionNeuve_Phase_AVP_PlanElegant.png",
    details: "Conception architecturale, études de faisabilité, validation du programme",
    duration: "4-6 semaines",
    deliverables: ["Plans de masse", "Études préliminaires", "Estimation budgétaire"],
  },
  {
    title: "EXE - Exécution",
    desc: "Exécution : chantier, détails techniques.",
    src: "/images/ConstructionNeuve_Phase_EXE_ChantierAction.png",
    details: "Plans d'exécution détaillés, coordination technique, suivi de chantier",
    duration: "6-12 mois",
    deliverables: ["Plans techniques", "Notes de calcul", "Suivi qualité"],
  },
  {
    title: "Livraison",
    desc: "Rendu final : mise en service, finitions.",
    src: "/images/ConstructionNeuve_Phase_Final_Render3D.png",
    details: "Réception des travaux, mise en service, garanties",
    duration: "2-4 semaines",
    deliverables: ["Dossier des ouvrages exécutés", "Garanties", "Formation"],
  },
]

const modernTechniques = [
  {
    title: "Modélisation 3D & BIM",
    description: "Conception assistée par ordinateur pour une précision maximale",
    image: "/images/Construction_Neuve_3D_Modeling.jpg",
    benefits: ["Visualisation réaliste", "Détection des conflits", "Optimisation des coûts"],
  },
  {
    title: "Chantiers Connectés",
    description: "Technologies numériques pour le suivi en temps réel",
    image: "/images/Construction_Neuve_Modern_Site.jpg",
    benefits: ["Suivi temps réel", "Qualité contrôlée", "Sécurité renforcée"],
  },
  {
    title: "Plans Techniques Avancés",
    description: "Documentation technique complète et détaillée",
    image: "/images/Construction_Neuve_Technical_Plans.jpg",
    benefits: ["Précision millimétrique", "Coordination parfaite", "Traçabilité totale"],
  },
]

const stats = [
  { label: "Projets livrés", value: "200+", icon: CheckCircle },
  { label: "Années d'expertise", value: "15", icon: Clock },
  { label: "Équipe dédiée", value: "25", icon: Users },
]

export default function ConstructionNeuvePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Enhanced */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/ConstructionNeuve_Hero_VillaIconique.png"
              alt="Construction neuve haut de gamme"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <Badge className="mb-4 bg-[#C9A568] text-white border-none">Construction Neuve</Badge>
              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {copy.construction.title}
              </h1>
              <p className="text-lg text-white/90 max-w-3xl">{copy.construction.subtitle}</p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-gray-600 text-lg max-w-3xl mb-8">{copy.construction.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#C9A568] hover:bg-[#B8941F] text-white">
                <Link href="/contact" className="flex items-center">
                  Étude Gratuite
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/realisations">Voir nos Réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Techniques Modernes */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Technologies & Méthodes Modernes
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nous utilisons les dernières innovations technologiques pour garantir la qualité et l'efficacité de vos
            projets de construction neuve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {modernTechniques.map((technique, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={technique.image || "/placeholder.svg"}
                  alt={technique.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{technique.title}</h3>
                <p className="text-gray-600 mb-4">{technique.description}</p>
                <div className="space-y-2">
                  {technique.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Phases de projet Enhanced */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Phases de projet détaillées
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {constructionPhases.map((phase, i) => (
            <Card
              key={i}
              className="overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={phase.src || "/placeholder.svg"}
                  alt={phase.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#C9A568] text-white">Phase {i + 1}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.details}</p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Durée :</span>
                    <Badge variant="outline">{phase.duration}</Badge>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-500 mb-2 block">Livrables :</span>
                    <div className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Concrétiser Votre Projet ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            De la conception à la livraison, nous vous accompagnons à chaque étape de votre projet de construction
            neuve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C9A568] hover:bg-[#B8941F]">
              <Link href="/contact" className="flex items-center">
                Demander un Devis
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
    </div>
  )
}
