export interface Project {
  id: string
  title: string
  category: string
  location: string
  surface: string
  duration: string
  description: string
  image: string
  gallery: string[]
  challenges: string[]
  solutions: string[]
  tags: string[]
}

export const projects: Project[] = [
  {
    id: "villa-mandelieu",
    title: "Villa Provençale - Mandelieu",
    category: "Réhabilitation",
    location: "Mandelieu-la-Napoule, Alpes-Maritimes",
    surface: "280 m²",
    duration: "8 mois",
    description:
      "Réhabilitation complète d'une villa provençale avec extension moderne. Reprise en sous-œuvre, création d'ouvertures et renforcement de la structure existante.",
    image: "/images/Villa_Mandelieu_Facade_Principale.jpg",
    gallery: [
      "/images/Villa_Mandelieu_Facade_Provencale.jpg",
      "/images/Villa_Mandelieu_Extension_Moderne.jpg",
      "/images/Villa_Mandelieu_Piscine_Debordement.jpg",
      "/images/Villa_Mandelieu_Reprise_SousOeuvre.jpg",
      "/images/Villa_Mandelieu_Plans_Structure.jpg",
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
    tags: ["Réhabilitation", "Extension", "Patrimoine", "Sous-œuvre"],
  },
  {
    id: "villa-contemporaine",
    title: "Villa Contemporaine - Côte d'Azur",
    category: "Construction Neuve",
    location: "Antibes, Alpes-Maritimes",
    surface: "450 m²",
    duration: "12 mois",
    description:
      "Construction d'une villa contemporaine avec piscine à débordement. Structure béton armé optimisée et intégration paysagère soignée.",
    image: "/images/Villa_Contemporaine_Rendu_3D.jpg",
    gallery: [
      "/images/Villa_Contemporaine_Facade_Moderne.jpg",
      "/images/Villa_Contemporaine_Piscine_Interieure.jpg",
      "/images/Villa_Contemporaine_Piscine_Exterieure.jpg",
      "/images/Villa_Contemporaine_Structure_AVP.jpg",
      "/images/Villa_Contemporaine_Plans_EXE.jpg",
    ],
    challenges: ["Terrain en pente forte", "Grandes portées structurelles", "Contraintes sismiques"],
    solutions: ["Fondations adaptées au relief", "Poutres précontraintes", "Calculs parasismiques avancés"],
    tags: ["Construction Neuve", "Contemporain", "Piscine", "Parasismique"],
  },
  {
    id: "villa-cannet",
    title: "Réhabilitation structurelle d'une villa contemporaine au Cannet",
    category: "Réhabilitation",
    location: "Le Cannet, Alpes-Maritimes",
    surface: "320 m²",
    duration: "10 mois",
    description:
      "Études complètes de réhabilitation structurelle comprenant l'ensemble des calculs en phase EXE (Exécution). Le projet inclut la création de nouvelles ouvertures dans les murs porteurs, la mise en place de reprises en sous-œuvre et le renforcement des éléments structurels existants, en intégrant les contraintes techniques et réglementaires pour assurer la stabilité, la sécurité et la pérennité de l'ouvrage.",
    image: "/images/Villa_Cannet_Facade_Jour.jpg",
    gallery: ["/images/Villa_Cannet_Facade_Jour.jpg", "/images/Villa_Cannet_Facade_Nuit.jpg"],
    challenges: [
      "Création de nouvelles ouvertures dans murs porteurs",
      "Reprises en sous-œuvre complexes",
      "Renforcement sans altérer l'esthétique",
      "Respect contraintes réglementaires EXE",
    ],
    solutions: [
      "Calculs de structure détaillés en phase EXE",
      "Modélisation 3D optimisée",
      "Renforcement par matériaux composites",
      "Phasage des travaux sécurisé",
    ],
    tags: ["Réhabilitation", "EXE", "Ouvertures", "Renforcement", "Sous-œuvre"],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}
