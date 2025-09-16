import Link from "next/link"
import { ArrowRight, Waves, Mountain, Home, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const specialties = [
  {
    title: "Piscines et Bassins",
    description: "Conception et dimensionnement de piscines avec systèmes d'étanchéité et de filtration",
    icon: Waves,
    techniques: ["Cuvelage étanche", "Débordement", "Filtration naturelle"],
  },
  {
    title: "Murs de Soutènement",
    description: "Calculs de poussée des terres et dimensionnement des ouvrages de soutènement",
    icon: Mountain,
    techniques: ["Béton armé", "Gabions", "Murs végétalisés"],
  },
  {
    title: "Terrasses et Extensions",
    description: "Structures de terrasses, pergolas et extensions extérieures",
    icon: Home,
    techniques: ["Porte-à-faux", "Fondations adaptées", "Intégration paysagère"],
  },
  {
    title: "Aménagements Techniques",
    description: "Réseaux techniques extérieurs et ouvrages d'assainissement",
    icon: Settings,
    techniques: ["Réseaux enterrés", "Assainissement", "Éclairage extérieur"],
  },
]

const processSteps = [
  {
    step: 1,
    title: "Analyse des besoins et faisabilité",
    description: "Étude du terrain et définition des contraintes techniques",
    duration: "1 semaine",
  },
  {
    step: 2,
    title: "Études Géotechniques",
    description: "Analyse du sol et dimensionnement des fondations",
    duration: "2-3 semaines",
  },
  {
    step: 3,
    title: "Conception Technique",
    description: "Calculs de structure et intégration des réseaux",
    duration: "2-4 semaines",
  },
  {
    step: 4,
    title: "Plans d'Exécution",
    description: "Production des plans techniques et coordination",
    duration: "1-2 semaines",
  },
]

export default function OuvragesExterieursPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/Services_MurPorteur_Coupe.jpg" alt="Ouvrages Extérieurs" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 text-white border-none">Ouvrages Extérieurs</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aménagements <span className="text-[#C9A568]">Extérieurs</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-justify">
              Conception d'ouvrages extérieurs et aménagements techniques avec expertise en géotechnique et hydraulique.
              Nous réalisons vos projets d'aménagement avec une approche technique rigoureuse.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Spécialités</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Une expertise complète pour tous vos projets d'aménagements extérieurs, de la conception à la réalisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <specialty.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{specialty.title}</h3>
                  <p className="text-gray-600 mb-4 text-justify">{specialty.description}</p>
                  <div className="space-y-2">
                    {specialty.techniques.map((technique, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs mr-2">
                        {technique}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Processus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Une approche méthodique pour la réalisation de vos aménagements extérieurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 text-justify">{step.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Réalisez Vos Aménagements</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-justify">
            Nos experts vous accompagnent dans la conception et la réalisation de tous vos projets d'aménagements
            extérieurs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8941F]">
              <Link href="/contact" className="flex items-center">
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
