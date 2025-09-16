import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Wrench, Shield, Waves } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Construction Neuve",
    description:
      "Conception et dimensionnement de structures neuves avec expertise technique avancée pour tous types de projets de construction.",
    icon: Building,
    href: "/construction-neuve",
  },
  {
    title: "Réhabilitation",
    description:
      "Expertise en renforcement et transformation de structures existantes avec diagnostic approfondi et solutions innovantes.",
    icon: Wrench,
    href: "/rehabilitation",
  },
  {
    title: "Ingénierie Parasismique",
    description:
      "Conception parasismique avancée selon les normes Eurocode 8 pour la protection optimale des structures en zones sismiques.",
    icon: Shield,
    href: "/services",
  },
  {
    title: "Ouvrages Extérieurs",
    description:
      "Piscines et bassins, Murs de soutènements, Terrasses et extensions, Aménagements techniques extérieurs",
    icon: Waves,
    href: "/services",
  },
]

const projects = [
  {
    id: 1,
    title: "Villa Provençale - Mandelieu",
    description:
      "Réhabilitation complète d'une villa provençale avec extension moderne. Reprise en sous-œuvre, création d'ouvertures et renforcement de la structure existante.",
    image: "/images/Villa_Mandelieu_Facade_Principale.jpg",
  },
  {
    id: 2,
    title: "Villa Contemporaine - Côte d'Azur",
    description:
      "Construction d'une villa contemporaine avec piscine à débordement. Structure béton armé optimisée et intégration paysagère soignée.",
    image: "/images/Villa_Contemporaine_Rendu_3D.jpg",
  },
  {
    id: 3,
    title: "Réhabilitation Villa Cannet",
    description:
      "Études complètes de réhabilitation structurelle comprenant l'ensemble des calculs en phase EXE. Création de nouvelles ouvertures et renforcement structurel.",
    image: "/images/Villa_Cannet_Facade_Jour.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bureau d'études spécialisé en <span className="text-[#C9A568]">structure et béton armé</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-justify max-w-3xl mx-auto">
              Bureau d'études spécialisés en structure et béton armé, intervenant en construction neuve et
              réhabilitation, de la conception à l'exécution. Nous transformons vos ambitions architecturales en
              réalités structurelles.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C9A568] text-white border-none">Domaines d'expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nos <span className="text-[#C9A568]">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#C9A568]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-[#C9A568]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-justify leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C9A568] text-white border-none">Références</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nos <span className="text-[#C9A568]">Réalisations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-justify">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Démarrer <span className="text-[#C9A568]">Votre Projet</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-justify">
            Notre équipe d'experts est à votre disposition pour étudier votre projet et vous proposer des solutions
            techniques innovantes adaptées à vos besoins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8941F] shadow-lg">
              <Link href="/contact" className="flex items-center gap-2">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent shadow-lg"
            >
              <Link href="/expertise">Découvrir notre expertise</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
