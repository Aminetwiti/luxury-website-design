export interface Project {
  id: string
  title: string
  location: string
  type: string
  region: string
  year: string
  duration: string
  surface: string
  budget: string
  description: string
  challenges: string[]
  images: {
    main: string
    gallery: string[]
  }
  slug: string
  featured?: boolean
}

export const projects: Project[] = [
  
  {
    id: "villa-mandelieu",
    title: "Villa Provençale à Mandelieu",
    location: "Mandelieu-la-Napoule, Alpes-Maritimes",
    type: "Réhabilitation",
    region: "PACA",
    year: "2024",
    duration: "18 mois",
    surface: "280m² + 120m² extension",
    budget: "1,2M€",
    description:
      "Projet de réhabilitation d'une villa provençale avec création d'ouvertures dans des murs porteurs nécessitant des reprises structurelles adaptées. Étude et dimensionnement de l'extension du bâtiment ainsi que de la piscine à débordement, en tenant compte des contraintes techniques, architecturales et esthétiques propres au projet.",
    challenges: [
      "Reprise en sous-œuvre des murs porteurs",
      "Création d'ouvertures structurelles",
      "Extension architecturale intégrée",
      "Piscine à débordement dimensionnée",
      "Respect du style provençal authentique",
      "Coordination avec les contraintes ABF",
    ],
    images: {
      main: "/images/Villa_Mandelieu_Facade_Provencale.jpg",
      gallery: [
        "/images/Villa_Mandelieu_Extension_Moderne.jpg",
        "/images/Villa_Mandelieu_Piscine_Debordement.jpg",
        "/images/Villa_Mandelieu_Reprise_SousOeuvre.jpg",
        "/images/Villa_Mandelieu_Plans_Structure.jpg",
      ],
    },
    slug: "villa-mandelieu",
    featured: true,
  },
  {
    id: "villa-contemporaine",
    title: "Villa Contemporaine – Construction Neuve",
    location: "Côte d'Azur, Alpes-Maritimes",
    type: "Construction Neuve",
    region: "PACA",
    year: "2024",
    duration: "24 mois",
    surface: "450m²",
    budget: "2,8M€",
    description:
      "Études complètes de construction neuve comprenant l'ensemble des calculs structurels en phase AVP (Avant-Projet) et EXE (Exécution). Le projet inclut le dimensionnement de la villa, ainsi que des piscines intérieures et extérieures, en intégrant les contraintes techniques et réglementaires pour assurer la stabilité, la sécurité et la durabilité de l'ouvrage.",
    challenges: [
      "Études AVP et EXE complètes",
      "Calculs structurels avancés",
      "Double piscine (intérieure/extérieure)",
      "Conformité réglementaire totale",
      "Architecture contemporaine optimisée",
      "Coordination BIM avec équipes",
    ],
    images: {
      main: "/images/Villa_Contemporaine_Facade_Moderne.jpg",
      gallery: [
        "/images/Villa_Contemporaine_Piscine_Interieure.jpg",
        "/images/Villa_Contemporaine_Piscine_Exterieure.jpg",
        "/images/Villa_Contemporaine_Structure_AVP.jpg",
        "/images/Villa_Contemporaine_Plans_EXE.jpg",
      ],
    },
    slug: "villa-contemporaine",
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectsByType(type: string): Project[] {
  return projects.filter((project) => project.type === type)
}

export function getProjectsByRegion(region: string): Project[] {
  return projects.filter((project) => project.region === region)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
