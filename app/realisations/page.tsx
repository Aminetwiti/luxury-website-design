import type { Metadata } from "next"
import ProjectsGrid from "@/components/projects-grid"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Nos Réalisations | B.E StructiBA - Projets Structure & Béton Armé",
  description:
    "Découvrez nos réalisations en ingénierie structure : villas, réhabilitations, constructions neuves. Projets de référence en PACA et Antilles.",
  keywords: "réalisations structure, projets béton armé, villas PACA, réhabilitation, construction neuve, ingénierie",
}

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

          <ProjectsGrid showAll={true} />

          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nos projets de référence seront bientôt disponibles.</p>
            </div>
          )}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#C9A568] text-white px-8 py-3 rounded-full hover:bg-[#B8941F] transition-colors font-medium"
              >
                Discuter de votre projet
              </a>
              <a
                href="/expertise"
                className="inline-flex items-center justify-center border border-[#C9A568] text-[#C9A568] px-8 py-3 rounded-full hover:bg-[#C9A568] hover:text-white transition-colors font-medium"
              >
                Découvrir notre expertise
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
