"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calculator, PenTool, Settings, Lightbulb, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const poles = [
  {
    title: "Calcul",
    icon: Calculator,
    description: "Ingénieurs spécialisés en calculs de structures et dimensionnement selon les Eurocodes",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Dessin et Plan",
    icon: PenTool,
    description: "Équipe dédiée à la production de plans d'exécution et modélisation 3D",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Administratif et Gestion",
    icon: Settings,
    description: "Gestion de projets, suivi administratif et coordination avec les partenaires",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Développement et Innovation",
    icon: Lightbulb,
    description: "Recherche et développement de nouvelles solutions techniques et méthodologies",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/APropos_Bureau_ReunionEquipe.jpg"
            alt="Bureau d'études Structiba"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À <span className="text-[#C9A568]">Propos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 text-justify">
              Découvrez B.E Structiba, votre partenaire de confiance en ingénierie structurelle depuis plus de 15 ans.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Notre <span className="text-[#C9A568]">Histoire</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 text-justify">
                  <p>
                    B.E StructiBA est né d'une véritable passion pour l'ingénierie structurelle et le béton armé, avec
                    la volonté de proposer un accompagnement complet et personnalisé à chaque projet. Notre mission est
                    de transformer les idées et concepts architecturaux en ouvrages solides, sûrs et durables.
                  </p>
                  <p>
                    Nous intervenons à chaque étape, de la conception à l'exécution, en construction neuve comme en
                    réhabilitation, en apportant des solutions techniques sur mesure qui répondent aux contraintes
                    normatives, environnementales et budgétaires.
                  </p>
                  <p>
                    Grâce à une approche rigoureuse et une expertise pointue en conception parasismique, notre bureau
                    d'études s'engage à garantir la sécurité, la qualité et la pérennité des ouvrages, tout en restant à
                    l'écoute des besoins et attentes de nos partenaires pour construire ensemble des projets qui
                    traversent le temps.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/APropos_Equipe_StudioArchitectural.jpg"
                  alt="Équipe B.E Structiba"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organisation et Ressources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Organisation & <span className="text-[#C9A568]">Ressources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Notre organisation en 4 pôles spécialisés nous permet d'offrir un service complet et de haute qualité, de
              l'étude préliminaire à la réception des travaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {poles.map((pole, index) => {
              const IconComponent = pole.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${pole.bgColor} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className={`w-8 h-8 ${pole.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#C9A568] transition-colors">
                      {pole.title}
                    </h3>
                    <p className="text-gray-600 text-justify">{pole.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Types de clients */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Nos <span className="text-[#C9A568]">Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Nos clients sont des particuliers, architectes, promoteurs et professionnels du bâtiment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6 border-0 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#C9A568] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Particuliers</h3>
              <p className="text-gray-600 text-justify">Propriétaires de maisons, villas ou appartements</p>
            </Card>

            <Card className="text-center p-6 border-0 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#C9A568] rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Professionnels du bâtiment</h3>
              <p className="text-gray-600 text-justify">Entreprises générales et corps d'état techniques</p>
            </Card>

            <Card className="text-center p-6 border-0 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#C9A568] rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Architectes</h3>
              <p className="text-gray-600 text-justify">Cabinets d'architecture et maîtres d'œuvre</p>
            </Card>

            <Card className="text-center p-6 border-0 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#C9A568] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Promoteurs</h3>
              <p className="text-gray-600 text-justify">Promoteurs immobiliers et investisseurs</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à collaborer avec <span className="text-[#C9A568]">nous</span> ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-justify">
            Contactez notre équipe pour discuter de votre projet et découvrir comment nous pouvons vous accompagner dans
            sa réalisation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8956A] text-white">
              <Link href="/contact" className="flex items-center gap-2">
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
