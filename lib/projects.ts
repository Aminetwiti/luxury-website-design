export interface Project {
  id: string
  title: string
  category: string
  location: string
  year: number
  description: string
  shortDescription: string
  image: string
  gallery: string[]
  features: string[]
  surface?: string
  budget?: string
  duration?: string
  client?: string
  architect?: string
  challenges?: string[]
  solutions?: string[]
  results?: string[]
  tags: string[]
}

export const projects: Project[] = [
  {
    id: "villa-antibes",
    title: "Villa Contemporaine - Antibes",
    category: "Construction Neuve",
    location: "Antibes, Alpes-Maritimes",
    year: 2023,
    description:
      "Conception et réalisation d'une villa contemporaine de 350m² avec piscine à débordement et système géothermique. Structure béton armé avec porte-à-faux de 8 mètres et baies vitrées panoramiques.",
    shortDescription: "Villa contemporaine 350m² avec innovations structurelles et énergétiques",
    image: "/images/Villa_Antibes_Facade_Contemporaine.png",
    gallery: [
      "/images/Villa_Antibes_Facade_Contemporaine.png",
      "/images/Villa_Antibes_Interieur_Baies.png",
      "/images/Villa_Antibes_Piscine_Naturelle.png",
      "/images/Villa_Antibes_Geothermie_Schema.png",
      "/images/Villa_Antibes_Render_Coucher.png",
    ],
    features: [
      "Structure béton armé haute performance",
      "Porte-à-faux de 8 mètres",
      "Système géothermique intégré",
      "Piscine à débordement structurelle",
      "Baies vitrées panoramiques",
    ],
    surface: "350 m²",
    budget: "850 000 €",
    duration: "18 mois",
    client: "Particulier",
    architect: "Atelier Méditerranée",
    challenges: [
      "Porte-à-faux important sans appui intermédiaire",
      "Intégration du système géothermique",
      "Contraintes sismiques zone 2",
    ],
    solutions: [
      "Poutre précontrainte en béton haute performance",
      "Fondations spéciales pour géothermie",
      "Contreventement parasismique optimisé",
    ],
    results: ["Structure validée pour 100 ans", "Performance énergétique A+", "Délais respectés malgré la complexité"],
    tags: ["Béton armé", "Géothermie", "Parasismique", "Contemporain"],
  },
  {
    id: "penthouse-trocadero",
    title: "Penthouse Trocadéro - Paris",
    category: "Réhabilitation",
    location: "Paris 16ème, Trocadéro",
    year: 2023,
    description:
      "Réhabilitation structurelle complète d'un penthouse de 280m² avec création d'une terrasse suspendue de 150m² face à la Tour Eiffel. Renforcement par fibres de carbone et création d'ouvertures structurelles.",
    shortDescription: "Penthouse 280m² avec terrasse suspendue et vue Tour Eiffel",
    image: "/images/Penthouse_Trocadero_Terrasse_TourEiffel.png",
    gallery: [
      "/images/Penthouse_Trocadero_Terrasse_TourEiffel.png",
      "/images/Penthouse_Trocadero_Salon_Design.png",
      "/images/Penthouse_Trocadero_Structure_Carbone.png",
      "/images/Penthouse_Trocadero_Plans_Structure.png",
      "/images/Penthouse_Trocadero_Render_Nuit.png",
    ],
    features: [
      "Terrasse suspendue 150m²",
      "Renforcement fibres de carbone",
      "Ouvertures structurelles sur mesure",
      "Vue panoramique Tour Eiffel",
      "Structure métallique apparente",
    ],
    surface: "280 m² + 150 m² terrasse",
    budget: "1 200 000 €",
    duration: "24 mois",
    client: "Particulier",
    architect: "Studio Parisien",
    challenges: [
      "Bâtiment haussmannien classé",
      "Création terrasse sans appui",
      "Contraintes architecturales strictes",
    ],
    solutions: [
      "Renforcement invisible par fibres carbone",
      "Console métallique haute résistance",
      "Études patrimoniales approfondies",
    ],
    results: [
      "Validation Architecte des Bâtiments de France",
      "Terrasse certifiée 300kg/m²",
      "Projet primé architecture 2023",
    ],
    tags: ["Réhabilitation", "Fibres carbone", "Patrimoine", "Terrasse"],
  },
  {
    id: "villa-mandelieu",
    title: "Villa Provençale - Mandelieu",
    category: "Réhabilitation",
    location: "Mandelieu-la-Napoule, Alpes-Maritimes",
    year: 2024,
    description:
      "Réhabilitation structurelle d'une villa provençale des années 1960 avec extension contemporaine. Reprise en sous-œuvre, création d'une piscine intérieure et renforcement parasismique.",
    shortDescription: "Réhabilitation villa provençale avec extension moderne et piscine",
    image: "/images/Villa_Mandelieu_Facade_Principale.jpg",
    gallery: [
      "/images/Villa_Mandelieu_Facade_Principale.jpg",
      "/images/Villa_Mandelieu_Facade_Provencale_Rendu.jpg",
      "/images/Villa_Mandelieu_Extension_Moderne.jpg",
      "/images/Villa_Mandelieu_Piscine_Debordement.jpg",
      "/images/Villa_Mandelieu_Plans_Structure.jpg",
    ],
    features: [
      "Reprise en sous-œuvre complète",
      "Extension contemporaine 120m²",
      "Piscine intérieure structurelle",
      "Renforcement parasismique",
      "Conservation éléments patrimoniaux",
    ],
    surface: "240 m² + 120 m² extension",
    budget: "680 000 €",
    duration: "20 mois",
    client: "Particulier",
    architect: "Atelier Provence",
    challenges: [
      "Structure existante dégradée",
      "Contraintes patrimoniales locales",
      "Intégration piscine en sous-sol",
    ],
    solutions: [
      "Micropieux et longrines béton armé",
      "Extension en structure mixte bois-béton",
      "Étanchéité structurelle piscine",
    ],
    results: [
      "Structure renforcée pour 50 ans",
      "Intégration architecturale réussie",
      "Performance énergétique améliorée",
    ],
    tags: ["Réhabilitation", "Extension", "Piscine", "Patrimoine"],
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
