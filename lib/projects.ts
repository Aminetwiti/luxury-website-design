export interface Project {
  id: string
  title: string
  category: string
  location: string
  year: string
  description: string
  shortDescription: string
  images: string[]
  features: string[]
  challenges: string[]
  solutions: string[]
  results: string[]
  area?: string
  budget?: string
  duration?: string
  client?: string
  architect?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: "villa-mandelieu",
    title: "Villa Provençale - Mandelieu",
    category: "Réhabilitation",
    location: "Mandelieu-la-Napoule, Alpes-Maritimes",
    year: "2024",
    description:
      "Réhabilitation complète d'une villa provençale avec extension moderne. Reprise en sous-œuvre, création d'ouvertures et renforcement de la structure existante.",
    shortDescription: "Réhabilitation complète d'une villa provençale avec extension moderne",
    images: ["/images/Villa_Contemporaine_Rendu_3D.jpg"],
    features: [
      "Renforcement de la structure existante",
      "Création de nouvelles ouvertures",
      "Extension moderne",
      "Reprise en sous-œuvre",
      "Intégration paysagère",
    ],
    challenges: [
      "Conservation du caractère provençal",
      "Reprise en sous-œuvre délicate",
      "Intégration extension moderne",
    ],
    solutions: [
      "Renforcement par micropieux",
      "Matériaux traditionnels nobles",
      "Transition architecturale harmonieuse",
    ],
    results: [
      "Structure renforcée et sécurisée",
      "Espaces de vie modernisés",
      "Valorisation du patrimoine",
      "Satisfaction client excellente",
    ],
    area: "280m²",
    budget: "650k€",
    duration: "8 mois",
    client: "Particulier",
    architect: "Cabinet Provençal",
    tags: ["villa", "réhabilitation", "provençal", "extension", "sous-œuvre"],
  },
  {
    id: "villa-cote-azur",
    title: "Villa Contemporaine - Côte d'Azur",
    category: "Construction Neuve",
    location: "Antibes, Alpes-Maritimes",
    year: "2023",
    description:
      "Construction d'une villa contemporaine avec piscine à débordement. Structure béton armé optimisée et intégration paysagère soignée.",
    shortDescription: "Villa contemporaine avec piscine à débordement et structure optimisée",
    images: ["/images/Villa_Cannet_Facade_Jour.jpg"],
    features: [
      "Structure béton armé optimisée",
      "Piscine à débordement",
      "Grandes baies vitrées",
      "Terrasses en porte-à-faux",
      "Intégration paysagère",
    ],
    challenges: ["Terrain en pente forte", "Grandes portées structurelles", "Contraintes sismiques"],
    solutions: ["Fondations adaptées au relief", "Poutres précontraintes", "Calculs parasismiques avancés"],
    results: [
      "Livraison dans les délais",
      "Performance structurelle optimale",
      "Intégration parfaite au site",
      "Référence architecturale",
    ],
    area: "450m²",
    budget: "1.2M€",
    duration: "12 mois",
    client: "Particulier",
    architect: "Atelier Méditerranéen",
    tags: ["villa", "construction neuve", "contemporain", "piscine", "béton armé"],
  },
  {
    id: "villa-cannet-rehabilitation",
    title: "Réhabilitation structurelle d'une villa contemporaine au Cannet",
    category: "Réhabilitation",
    location: "Le Cannet, Alpes-Maritimes",
    year: "2024",
    description:
      "Études complètes de réhabilitation structurelle comprenant l'ensemble des calculs en phase EXE. Création de nouvelles ouvertures dans les murs porteurs, reprises en sous-œuvre et renforcement des éléments structurels existants.",
    shortDescription: "Réhabilitation structurelle complète avec calculs EXE et renforcement",
    images: ["/images/Villa_Cannet_Facade_Nuit.jpg"],
    features: [
      "Calculs en phase EXE",
      "Création d'ouvertures",
      "Reprises en sous-œuvre",
      "Renforcement structurel",
      "Mise aux normes sismiques",
    ],
    challenges: ["Structure existante complexe", "Contraintes géotechniques", "Respect du budget", "Délais serrés"],
    solutions: [
      "Diagnostic approfondi",
      "Renforcement par matériaux modernes",
      "Phasage optimisé",
      "Suivi technique rigoureux",
    ],
    results: ["Structure sécurisée", "Conformité réglementaire", "Délais respectés", "Satisfaction client"],
    area: "320m²",
    budget: "450k€",
    duration: "10 mois",
    client: "Particulier",
    architect: "Cabinet Local",
    tags: ["villa", "réhabilitation", "EXE", "renforcement", "cannet"],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.slice(0, limit)
}
