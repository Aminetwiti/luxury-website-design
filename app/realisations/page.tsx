import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nos Réalisations | B.E Structiba - Projets Structure & Béton Armé",
  description:
    "Découvrez nos réalisations en ingénierie structure : villas, réhabilitations, constructions neuves. Projets de référence en PACA et Antilles.",
  keywords: "réalisations structure, projets béton armé, villas PACA, réhabilitation, construction neuve, ingénierie",
}

const projects = [
  {
    id: 1,
    title: "Villa Provençale - Mandelieu",
    description:
      "Réhabilitation complète d'une villa provençale avec extension moderne. Reprise en sous-œuvre, création d'ouvertures et renforcement de la structure existante pour intégrer une piscine à débordement et des espaces de vie contemporains.",
    image: "/images/Villa_Contemporaine_Rendu_3D.jpg",
    category: "Réhabilitation",
  },
  {
    id: 2,
    title: "Villa Contemporaine - Côte d'Azur",
    description:
      "Construction d'une villa contemporaine avec piscine intérieure et extérieure. Structure en béton armé avec grandes portées et porte-à-faux spectaculaires, alliant performance structurelle et esthétique architecturale.",
    image: "/images/Contemporaine.jpg",
    category: "Construction Neuve",
  },
  {
    id: 3,
    title: "Réhabilitation Villa Cannet",
    description:
      "Études complètes de réhabilitation structurelle comprenant l'ensemble des calculs en phase EXE. Création de nouvelles ouvertures dans les murs porteurs, reprises en sous-œuvre et renforcement des éléments structurels existants.",
    image: "/images/cannet.jpg",
    category: "Réhabilitation",
  },
]

export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Nos Réalisations
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-justify">
              Découvrez une sélection de nos projets les plus représentatifs, témoignant de notre expertise en
              ingénierie structure et de notre capacité à relever les défis techniques les plus complexes.
            </p>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projets de Référence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              Chaque projet est unique et nécessite une approche sur mesure. Nos réalisations illustrent notre capacité
              d'adaptation et notre recherche constante de l'excellence technique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#C9A568] text-white border-none">{project.category}</Badge>
                  </div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Votre Projet Mérite Notre Expertise</h2>
            <p className="text-lg text-gray-600 mb-8 text-justify">
              Chaque réalisation commence par une écoute attentive de vos besoins et une analyse approfondie des
              contraintes techniques. Confiez-nous votre projet pour bénéficier de notre savoir-faire reconnu.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
