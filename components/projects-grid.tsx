import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "Construction Neuve",
    subtitle: "Villa Contemporaine - Antibes",
    description:
      "Conception structurelle complète d'une villa de 350m² avec piscine à débordement. Optimisation des portées et intégration paysagère.",
    image: "/images/Villa_Antibes_Facade_Contemporaine.png",
    location: "Antibes, PACA",
    year: "2024",
    surface: "350 m²",
    type: "construction-neuve",
  },
  {
    id: 2,
    title: "Réhabilitation",
    subtitle: "Loft Industriel - Belleville",
    description:
      "Transformation d'un ancien atelier avec création de mezzanine suspendue et ouverture de murs porteurs. Renforcement par fibres de carbone.",
    image: "/images/Loft_Belleville_Mezzanine_Suspendue.png",
    location: "Paris 20ème",
    year: "2023",
    surface: "180 m²",
    type: "rehabilitation",
  },
  {
    id: 3,
    title: "Ingénierie Parasismique",
    subtitle: "Résidence Bioclimatique - Guadeloupe",
    description:
      "Étude parasismique complète selon Eurocode 8 pour une résidence de 12 logements. Modélisation 3D et optimisation structurelle.",
    image: "/images/Residence_Guadeloupe_Structure_Sismique.png",
    location: "Pointe-à-Pitre, Antilles",
    year: "2023",
    surface: "1200 m²",
    type: "parasismique",
  },
]

export default function ProjectsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projets de Référence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Découvrez quelques-unes de nos réalisations qui illustrent notre expertise dans les différents domaines de
            l'ingénierie structurelle.
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image avec overlay */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.subtitle}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Badge type */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#C9A568] text-white border-none">{project.title}</Badge>
                </div>

                {/* Titre en overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{project.subtitle}</h3>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Métadonnées */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-justify leading-relaxed mb-4">{project.description}</p>

                {/* Surface */}
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Surface :</span> {project.surface}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note sur les projets */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-600 text-justify">
              <strong>Confidentialité :</strong> Par respect pour nos clients, nous présentons une sélection
              représentative de nos projets. Chaque réalisation fait l'objet d'une approche sur mesure adaptée aux
              contraintes spécifiques du site et aux exigences du maître d'ouvrage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
