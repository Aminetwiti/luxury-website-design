"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Calendar, Award } from "lucide-react"

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: "villa-antibes",
      title: "Villa Horizon",
      location: "Antibes, PACA",
      year: "2023",
      category: "construction-neuve",
      type: "Villa de Prestige",
      description: "Villa contemporaine avec piscine à débordement et vue mer panoramique",
      image: "/project-villa-antibes.jpg",
      imageAlt:
        "Villa moderne luxueuse à Antibes avec piscine à débordement, vue mer panoramique, architecture contemporaine élégante, coucher de soleil",
      features: ["Structure béton", "Piscine débordement", "Vue mer 180°"],
      href: "/realisations/villa-antibes",
    },
    {
      id: "penthouse-paris",
      title: "Penthouse Trocadéro",
      location: "Paris 16ème",
      year: "2023",
      category: "rehabilitation",
      type: "Réhabilitation Luxe",
      description: "Transformation complète d'un penthouse avec vue sur la Tour Eiffel",
      image: "/project-penthouse-paris.jpg",
      imageAlt:
        "Penthouse parisien luxueux avec vue Tour Eiffel, intérieur design moderne, terrasse panoramique, architecture haut de gamme",
      features: ["Renforcement structure", "Terrasse 200m²", "Vue Tour Eiffel"],
      href: "/realisations/penthouse-paris",
    },
    {
      id: "eco-resort-martinique",
      title: "Éco-Resort Tropical",
      location: "Martinique",
      year: "2022",
      category: "developpement-durable",
      type: "Construction Durable",
      description: "Resort écologique avec bungalows sur pilotis et énergies renouvelables",
      image: "/project-eco-resort-martinique.jpg",
      imageAlt:
        "Resort écologique tropical en Martinique, bungalows sur pilotis, architecture durable, végétation luxuriante, matériaux naturels",
      features: ["Bois local", "Panneaux solaires", "Ventilation naturelle"],
      href: "/realisations/eco-resort-martinique",
    },
    {
      id: "loft-belleville",
      title: "Loft Industriel",
      location: "Paris 20ème",
      year: "2023",
      category: "rehabilitation",
      type: "Transformation",
      description: "Transformation d'un ancien atelier en loft contemporain avec mezzanine",
      image: "/project-loft-belleville.jpg",
      imageAlt:
        "Loft industriel parisien transformé, mezzanine suspendue, verrière industrielle, architecture contemporaine, espaces ouverts",
      features: ["Mezzanine acier", "Verrière 6m", "Poutres IPN"],
      href: "/realisations/loft-belleville",
    },
    {
      id: "villa-cassis",
      title: "Villa Bioclimatique",
      location: "Cassis, PACA",
      year: "2022",
      category: "developpement-durable",
      type: "Éco-Construction",
      description: "Villa passive intégrée dans le paysage méditerranéen",
      image: "/project-villa-cassis.jpg",
      imageAlt:
        "Villa bioclimatique à Cassis, architecture passive, intégration paysagère, matériaux écologiques, design méditerranéen moderne",
      features: ["Béton chanvre", "Géothermie", "Récupération eau"],
      href: "/realisations/villa-cassis",
    },
    {
      id: "maison-creole",
      title: "Maison Créole Moderne",
      location: "Saint-Barthélemy",
      year: "2023",
      category: "construction-neuve",
      type: "Architecture Tropicale",
      description: "Maison créole contemporaine alliant tradition et modernité",
      image: "/project-maison-creole.jpg",
      imageAlt:
        "Maison créole moderne à Saint-Barthélemy, architecture tropicale contemporaine, vérandas élégantes, matériaux locaux, vue océan",
      features: ["Charpente gommier", "Vérandas 360°", "Résistance cyclonique"],
      href: "/realisations/maison-creole",
    },
  ]

  const filters = [
    { id: "all", label: "Tous les Projets", count: projects.length },
    {
      id: "construction-neuve",
      label: "Construction Neuve",
      count: projects.filter((p) => p.category === "construction-neuve").length,
    },
    {
      id: "rehabilitation",
      label: "Réhabilitation",
      count: projects.filter((p) => p.category === "rehabilitation").length,
    },
    {
      id: "developpement-durable",
      label: "Développement Durable",
      count: projects.filter((p) => p.category === "developpement-durable").length,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="py-20 bg-[#F8F8F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Nos Réalisations d'Exception
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Découvrez nos projets les plus prestigieux à travers trois régions d'intervention
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-[#C9A568] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C9A568]/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C9A568] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.type}
                  </span>
                </div>

                {/* Award Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#C9A568]" />
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3
                    className="text-white text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-[#F8F8F5] text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-[#C9A568] hover:text-[#B8941F] font-medium transition-colors duration-200 group/link"
                >
                  <span>Découvrir le projet</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-3 bg-[#C9A568] hover:bg-[#B8941F] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
          >
            Voir Toutes Nos Réalisations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
