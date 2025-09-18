import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const constructionPhases = [
  {
    title: "AVP - Avant-Projet",
    desc: "Conception Structurelle, études de faisabilité, validation du programme.",
    src: "/images/ConstructionNeuve_Phase_AVP_PlanElegant.png",
    details: "Conception architecturale, études de faisabilité, validation du programme",
    duration: "Variable",
    deliverables: ["Plans Structurels synthétiques", "Ratios d'aciers et Volumes", "Estimation budgétaire"],
  },
  {
    title: "EXE - Exécution",
    desc: "Plans d'exécution détaillés, coordination technique, suivi de chantier",
    src: "/images/ConstructionNeuve_Phase_EXE_ChantierAction.png",
    details: "Plans d'exécution détaillés, coordination technique, suivi de chantier",
    duration: "Variable",
    deliverables: ["Plans techniques", "Notes de calcul", "Procédés constructifs"],
  },
  {
    title: "Livraison",
    desc: "Réception des travaux, mise en service, garanties",
    src: "/images/ConstructionNeuve_Phase_Final_Render3D.png",
    details: "Réception des travaux, mise en service, garanties",
    duration: "Variable",
    deliverables: ["Dossiers des ouvrages exécutés", "Garanties"],
  },
]

const modernTechniques = [
  {
    title: "Modélisation 3D",
    description: "Conception assistée par ordinateur pour une précision maximale",
    image: "/images/Construction_Neuve_3D_Modeling.jpg",
    benefits: ["Visualisation réaliste", "Optimisation des coûts", "Intégration des normes en vigueur"],
  },
  {
    title: "Plans Techniques Avancés",
    description: "Documentation technique complète et détaillée",
    image: "/images/Construction_Neuve_Technical_Plans.jpg",
    benefits: ["Précision millimétrique", "Réduction des erreurs et aléas", "Détails constructifs optimisés"],
  },
  {
    title: "Suivi & Coordination",
    description: "Technologies numériques pour le suivi en temps réel",
    image: "/images/Construction_Neuve_Modern_Site.jpg",
    benefits: ["Réduction des aléas", "Communication fluide entre intervenants", "Respect des délais et budgets"],
  },
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
                Ingénierie structurelle, performance et fiabilité
              </h1>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-gray-600 text-lg max-w-3xl mb-8 text-justify">
              De l'Avant-Projet (AVP) à la phase d'Exécution (EXE), nous assurons le dimensionnement complet des
              structures, la préparation des documents techniques et la coordination avec les différents acteurs du
              projet.
            </p>
            <p className="text-gray-600 text-lg max-w-3xl mb-8 text-justify">
              Nos études incluent les calculs réglementaires, les plans d'exécution détaillés et l'optimisation des
              solutions constructives pour garantir la sécurité, la durabilité et la conformité aux normes, notamment en
              zone sismique.
            </p>
            <p className="text-gray-600 text-lg max-w-3xl mb-8 text-justify">
              Chaque étape vise à réduire les aléas sur chantier et à assurer une réalisation fluide et maîtrisée.
            </p>

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
              <Link href="tel:+33668842010">Appeler Maintenant</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
