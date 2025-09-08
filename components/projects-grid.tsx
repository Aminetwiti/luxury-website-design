import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Award } from "lucide-react"

export default function ProjectsGrid() {
  const projects = [
    {
      id: "villa-antibes",
      title: "Villa Contemporaine Antibes",
      location: "Antibes, PACA",
      year: "2024",
      category: "Construction Neuve",
      description:
        "Villa de luxe avec piscine à débordement et vue panoramique sur la Méditerranée. Structure béton précontraint et façade minimaliste.",
      image: "/images/Villa_Antibes_Facade_Contemporaine.png",
      tags: ["Luxe", "Vue mer", "Béton précontraint"],
      surface: "450 m²",
      budget: "2.5M€",
    },
    {
      id: "penthouse-trocadero",
      title: "Penthouse Trocadéro",
      location: "Paris 16ème",
      year: "2023",
      category: "Réhabilitation",
      description:
        "Transformation d'un appartement haussmannien en penthouse moderne avec terrasse face à la Tour Eiffel. Structure carbone et verrière.",
      image: "/images/Penthouse_Trocadero_Terrasse_TourEiffel.png",
      tags: ["Haussmannien", "Vue Tour Eiffel", "Terrasse"],
      surface: "320 m²",
      budget: "1.8M€",
    },
    {
      id: "eco-resort-martinique",
      title: "Éco-Resort Martinique",
      location: "Martinique",
      year: "2024",
      category: "Développement Durable",
      description:
        "Resort écologique avec bungalows sur pilotis et matériaux biosourcés. Ventilation naturelle et panneaux solaires intégrés.",
      image: "/images/EcoResort_Martinique_Vue_Aerienne.png",
      tags: ["Éco-construction", "Pilotis", "Biosourcé"],
      surface: "1200 m²",
      budget: "3.2M€",
    },
    {
      id: "loft-belleville",
      title: "Loft Industriel Belleville",
      location: "Paris 20ème",
      year: "2023",
      category: "Réhabilitation",
      description:
        "Transformation d'un ancien atelier en loft avec mezzanine suspendue. Poutres IPN apparentes et verrière industrielle.",
      image: "/images/Loft_Belleville_Mezzanine_Suspendue.png",
      tags: ["Industriel", "Mezzanine", "Verrière"],
      surface: "180 m²",
      budget: "650K€",
    },
    {
      id: "villa-cassis",
      title: "Villa Bioclimatique Cassis",
      location: "Cassis, PACA",
      year: "2024",
      category: "Développement Durable",
      description:
        "Villa passive avec murs capteurs et citerne de récupération d'eau. Intégration paysagère et bilan carbone neutre.",
      image: "/images/Villa_Cassis_Integration_Paysage.png",
      tags: ["Passif", "Bioclimatique", "Carbone neutre"],
      surface: "280 m²",
      budget: "980K€",
    },
    {
      id: "maison-creole",
      title: "Maison Créole Contemporaine",
      location: "Saint-Barthélemy",
      year: "2023",
      category: "Construction Neuve",
      description:
        "Maison créole revisitée avec charpente en gommier et pilotis restaurés. Architecture traditionnelle et confort moderne.",
      image: "/images/Maison_Creole_Facade_Traditionnelle.png",
      tags: ["Créole", "Traditionnel", "Gommier"],
      surface: "220 m²",
      budget: "1.1M€",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#C9A568]/10 rounded-full mb-6">
            <Award className="w-4 h-4 mr-2 text-[#C9A568]" />
            <span className="text-sm font-medium text-[#C9A568]">Nos Réalisations</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Projets d'Exception
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations les plus emblématiques, témoins de notre expertise en ingénierie structurelle et
            de notre vision architecturale.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C9A568]/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
                    {project.category}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#C9A568]/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {project.year}
                  </span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C9A568] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{project.surface}</span>
                  <span className="font-semibold text-[#C9A568]">{project.budget}</span>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className="w-full bg-gray-900 hover:bg-[#C9A568] text-white border-none font-semibold py-2 transition-all duration-300 group-hover:scale-105"
                >
                  <Link href={`/realisations/${project.id}`} className="flex items-center justify-center">
                    Voir le projet
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">Plus de 150 projets réalisés dans toute la France et les Antilles</p>
          <Button
            asChild
            size="lg"
            className="bg-[#C9A568] hover:bg-[#B8941F] text-white border-none font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            <Link href="/realisations" className="flex items-center">
              Voir Toutes Nos Réalisations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
