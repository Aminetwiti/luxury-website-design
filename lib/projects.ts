export interface Project {
  id: string
  title: string
  type: string
  region: string
  location: string
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
}

export const projects: Project[] = [
  {
    id: "villa-provencale-mandelieu",
    title: "Villa Provençale à Mandelieu",
    type: "Réhabilitation",
    region: "PACA",
    location: "Mandelieu-la-Napoule, Alpes-Maritimes",
    year: "2024",
    duration: "18 mois",
    surface: "280m² + 120m² extension",
    budget: "1,2M€",
    description:
      "Projet de réhabilitation d'une villa provençale avec création d'ouvertures dans des murs porteurs nécessitant des reprises structurelles adaptées. Étude et dimensionnement de l'extension du bâtiment ainsi que de la piscine à débordement, en tenant compte des contraintes techniques, architecturales et esthétiques propres au projet.",
    challenges: [
      "Reprise en sous-œuvre des fondations existantes",
      "Création d'ouvertures dans les murs porteurs en maçonnerie",
      "Dimensionnement de l'extension avec liaison à l'existant",
      "Calculs de la piscine à débordement sur terrain en pente",
      "Respect des contraintes architecturales provençales",
      "Gestion des pathologies structurelles de l'existant",
    ],
    images: {
      main: "/images/Villa_Mandelieu_Facade_Realisee.jpg",
      gallery: [
        "/images/Villa_Mandelieu_Facade_Principale.jpg",
        "/images/Villa_Mandelieu_Extension_Moderne.jpg",
        "/images/Villa_Mandelieu_Piscine_Debordement.jpg",
        "/images/Villa_Mandelieu_Plans_Structure.jpg",
      ],
    },
  },
  {
    id: "villa-contemporaine-construction",
    title: "Villa Contemporaine – Construction Neuve, AVP & EXE",
    type: "Construction neuve",
    region: "PACA",
    location: "Côte d'Azur, Alpes-Maritimes",
    year: "2024",
    duration: "24 mois",
    surface: "450m²",
    budget: "2,8M€",
    description:
      "Études complètes de construction neuve comprenant l'ensemble des calculs structurels en phase AVP (Avant-Projet) et EXE (Exécution). Le projet inclut le dimensionnement de la villa, ainsi que des piscines intérieures et extérieures, en intégrant les contraintes techniques et réglementaires pour assurer la stabilité, la sécurité et la durabilité de l'ouvrage.",
    challenges: [
      "Études structurelles complètes AVP et EXE",
      "Dimensionnement de la structure béton armé",
      "Calculs des piscines intérieure et extérieure",
      "Respect des Eurocodes et normes sismiques",
      "Optimisation des portées et sections",
      "Coordination avec les corps d'état techniques",
    ],
    images: {
      main: "/images/Villa_Contemporaine_Rendu_3D.jpg",
      gallery: [
        "/images/Villa_Contemporaine_Piscine_Interieure.jpg",
        "/images/Villa_Contemporaine_Piscine_Exterieure.jpg",
        "/images/Villa_Contemporaine_Structure_AVP.jpg",
        "/images/Villa_Contemporaine_Plans_EXE.jpg",
      ],
    },
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
