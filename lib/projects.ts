export interface Project {
  id: string
  title: string
  category: string
  location: string
  year: string
  surface: string
  duration: string
  budget: string
  description: string
  image: string
  images: {
    main: string
    gallery: string[]
  }
  challenges: string[]
  solutions: string[]
  technologies: string[]
  client: string
  architect?: string
  status: "completed" | "in-progress" | "planned"
}

export const projects: Project[] = [
  {
    id: "villa-provencale-mandelieu",
    title: "Villa Provençale à Mandelieu",
    category: "Réhabilitation",
    location: "Mandelieu-la-Napoule, Alpes-Maritimes",
    year: "2023",
    surface: "280 m²",
    duration: "8 mois",
    budget: "Confidentiel",
    description:
      "Réhabilitation complète d'une villa provençale avec extension moderne. Reprise en sous-œuvre, création d'ouvertures et renforcement de la structure existante pour intégrer une piscine à débordement et des espaces de vie contemporains.",
    image: "/images/Villa_Mandelieu_Facade_Realisee.jpg",
    images: {
      main: "/images/Villa_Mandelieu_Facade_Realisee.jpg",
      gallery: ["/images/Villa_Mandelieu_Facade_Realisee.jpg"],
    },
    challenges: [
      "Reprise en sous-œuvre de la structure existante",
      "Intégration d'une piscine à débordement en terrain en pente",
      "Respect du style architectural provençal",
      "Contraintes géotechniques du terrain",
    ],
    solutions: [
      "Étude géotechnique approfondie et adaptation des fondations",
      "Calculs de structure pour les nouvelles ouvertures",
      "Système de soutènement innovant pour la piscine",
      "Coordination étroite avec l'architecte pour l'harmonie esthétique",
    ],
    technologies: ["Béton armé", "Reprise en sous-œuvre", "Soutènement", "Étanchéité"],
    client: "Particulier",
    architect: "Atelier d'Architecture Méditerranéenne",
    status: "completed",
  },
  {
    id: "villa-contemporaine-construction",
    title: "Villa Contemporaine - Construction Neuve",
    category: "Construction Neuve",
    location: "Cannes, Alpes-Maritimes",
    year: "2024",
    surface: "350 m²",
    duration: "12 mois",
    budget: "Confidentiel",
    description:
      "Conception et dimensionnement d'une villa contemporaine avec structure mixte béton-acier. Intégration de grandes portées libres, terrasses en porte-à-faux et piscine intégrée. Projet alliant performance structurelle et esthétique architecturale.",
    image: "/images/Villa_Contemporaine_Rendu_3D.jpg",
    images: {
      main: "/images/Villa_Contemporaine_Rendu_3D.jpg",
      gallery: ["/images/Villa_Contemporaine_Rendu_3D.jpg"],
    },
    challenges: [
      "Grandes portées libres sans poteaux intermédiaires",
      "Terrasses en porte-à-faux de 4 mètres",
      "Intégration architecturale de la structure",
      "Optimisation des coûts de construction",
    ],
    solutions: [
      "Structure mixte béton-acier optimisée",
      "Poutres précontraintes pour les grandes portées",
      "Calculs dynamiques pour les porte-à-faux",
      "Modélisation 3D pour validation architecturale",
    ],
    technologies: ["Béton précontraint", "Structure mixte", "Modélisation 3D", "Calculs dynamiques"],
    client: "Particulier",
    architect: "Studio Architecture Contemporaine",
    status: "in-progress",
  },
]
