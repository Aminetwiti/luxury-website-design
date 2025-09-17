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
    id: "villa-antibes",
    title: "Villa Contemporaine - Antibes",
    category: "Construction Neuve",
    location: "Antibes, Alpes-Maritimes",
    year: "2023",
    description:
      "Conception et réalisation d'une villa contemporaine de 350m² avec piscine à débordement et système géothermique intégré.",
    shortDescription: "Villa contemporaine 350m² avec innovations énergétiques",
    images: [
      "/images/Villa_Antibes_Facade_Contemporaine.png",
      "/images/Villa_Antibes_Interieur_Baies.png",
      "/images/Villa_Antibes_Piscine_Naturelle.png",
      "/images/Villa_Antibes_Geothermie_Schema.png",
      "/images/Villa_Antibes_Render_Coucher.png",
    ],
    features: [
      "Structure béton armé optimisée",
      "Grandes portées sans poteaux intermédiaires",
      "Intégration système géothermique",
      "Piscine à débordement structurelle",
      "Terrasses en porte-à-faux",
    ],
    challenges: [
      "Terrain en pente avec contraintes géotechniques",
      "Grandes portées pour espaces ouverts",
      "Intégration des équipements techniques",
      "Respect des règles d'urbanisme locales",
    ],
    solutions: [
      "Fondations adaptées au terrain",
      "Poutres précontraintes pour grandes portées",
      "Conception intégrée des réseaux",
      "Optimisation des hauteurs",
    ],
    results: [
      "Livraison dans les délais",
      "Performance énergétique A+",
      "Satisfaction client totale",
      "Référence architecturale locale",
    ],
    area: "350m²",
    budget: "1.2M€",
    duration: "18 mois",
    client: "Particulier",
    architect: "Atelier Méditerranéen",
    tags: ["villa", "contemporain", "géothermie", "piscine", "béton armé"],
  },
  {
    id: "penthouse-trocadero",
    title: "Penthouse Trocadéro - Paris",
    category: "Réhabilitation",
    location: "Paris 16ème, Trocadéro",
    year: "2023",
    description:
      "Réhabilitation structurelle complète d'un penthouse de 280m² avec création d'une terrasse suspendue face à la Tour Eiffel.",
    shortDescription: "Penthouse 280m² avec terrasse suspendue vue Tour Eiffel",
    images: [
      "/images/Penthouse_Trocadero_Terrasse_TourEiffel.png",
      "/images/Penthouse_Trocadero_Salon_Design.png",
      "/images/Penthouse_Trocadero_Structure_Carbone.png",
      "/images/Penthouse_Trocadero_Plans_Structure.png",
      "/images/Penthouse_Trocadero_Render_Nuit.png",
    ],
    features: [
      "Renforcement structure existante",
      "Terrasse suspendue 40m²",
      "Ouvertures panoramiques",
      "Matériaux composites carbone",
      "Isolation thermique renforcée",
    ],
    challenges: [
      "Contraintes du bâtiment haussmannien",
      "Charges limitées en toiture",
      "Accès chantier restreint",
      "Copropriété occupée",
    ],
    solutions: [
      "Renforcement par matériaux composites",
      "Structure légère pour terrasse",
      "Logistique adaptée",
      "Phasage des travaux",
    ],
    results: [
      "Gain de 40m² habitables",
      "Vue exceptionnelle préservée",
      "Valorisation immobilière +30%",
      "Innovation technique reconnue",
    ],
    area: "280m²",
    budget: "800k€",
    duration: "12 mois",
    client: "Particulier",
    architect: "Studio Parisien",
    tags: ["penthouse", "réhabilitation", "terrasse", "carbone", "paris"],
  },
  {
    id: "villa-cannet-rehabilitation",
    title: "Réhabilitation structurelle d'une villa contemporaine au Cannet",
    category: "Réhabilitation",
    location: "Le Cannet, Alpes-Maritimes",
    year: "2024",
    description:
      "Réhabilitation complète d'une villa contemporaine avec renforcement structurel, création d'ouvertures et modernisation des espaces de vie.",
    shortDescription: "Villa contemporaine réhabilitée avec renforcement structurel",
    images: ["/images/Villa_Cannet_Facade_Jour.jpg", "/images/Villa_Cannet_Facade_Nuit.jpg"],
    features: [
      "Renforcement de la structure existante",
      "Création de nouvelles ouvertures",
      "Modernisation des espaces",
      "Amélioration de l'isolation",
      "Mise aux normes sismiques",
    ],
    challenges: [
      "Structure existante à préserver",
      "Contraintes géotechniques du terrain",
      "Intégration dans l'environnement",
      "Respect du budget et des délais",
    ],
    solutions: [
      "Diagnostic structurel approfondi",
      "Renforcement par matériaux modernes",
      "Conception sur mesure",
      "Suivi technique rigoureux",
    ],
    results: [
      "Structure renforcée et sécurisée",
      "Espaces de vie modernisés",
      "Performance énergétique améliorée",
      "Satisfaction client excellente",
    ],
    area: "220m²",
    budget: "450k€",
    duration: "10 mois",
    client: "Particulier",
    architect: "Cabinet Local",
    tags: ["villa", "réhabilitation", "renforcement", "cannet", "contemporain"],
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
