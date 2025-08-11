export interface Project {
  slug: string
  title: string
  description: string
  excerpt: string
  type: "rehabilitation" | "construction-neuve" | "durable"
  region: "paris" | "paca" | "antilles"
  location: string
  date: string
  duration: string
  surface: string
  budget: string
  images: string[]
  features: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "penthouse-trocadero",
    title: "Penthouse Trocadéro",
    description:
      "Réhabilitation complète d'un penthouse de 300m² avec vue sur la Tour Eiffel. Ouverture de trémies, renforcement de structure et création d'une terrasse suspendue de 150m². Utilisation de matériaux nobles et techniques innovantes pour préserver le caractère haussmannien tout en apportant une modernité assumée.",
    excerpt: "Penthouse d'exception avec terrasse suspendue face à la Tour Eiffel",
    type: "rehabilitation",
    region: "paris",
    location: "Paris 16ème",
    date: "2024-03-15",
    duration: "18 mois",
    surface: "300m² + 150m² terrasse",
    budget: "2,8M€",
    images: [
      "/images/Penthouse_Trocadero_Terrasse_TourEiffel.png",
      "/images/Penthouse_Trocadero_Structure_Carbone.png",
      "/images/Penthouse_Trocadero_Salon_Design.png",
      "/images/Penthouse_Trocadero_Render_Nuit.png",
      "/images/Penthouse_Trocadero_Plans_Structure.png",
    ],
    features: [
      "Terrasse suspendue avec structure carbone",
      "Ouverture de 3 trémies majeures",
      "Renforcement par tirants précontraints",
      "Domotique intégrée haut de gamme",
      "Isolation thermique renforcée",
    ],
    featured: true,
  },
  {
    slug: "villa-antibes",
    title: "Villa Horizon Antibes",
    description:
      "Construction neuve d'une villa contemporaine de 450m² sur les hauteurs d'Antibes. Architecture bioclimatique avec piscine naturelle, géothermie et panneaux solaires intégrés. Structure béton précontraint permettant de grandes portées et baies vitrées panoramiques.",
    excerpt: "Villa contemporaine bioclimatique avec piscine naturelle",
    type: "construction-neuve",
    region: "paca",
    location: "Antibes",
    date: "2024-01-20",
    duration: "24 mois",
    surface: "450m²",
    budget: "3,2M€",
    images: [
      "/images/Villa_Antibes_Facade_Contemporaine.png",
      "/images/Villa_Antibes_Piscine_Naturelle.png",
      "/images/Villa_Antibes_Interieur_Baies.png",
      "/images/Villa_Antibes_Geothermie_Schema.png",
      "/images/Villa_Antibes_Render_Coucher.png",
    ],
    features: [
      "Architecture bioclimatique passive",
      "Piscine naturelle avec filtration biologique",
      "Géothermie sur nappe phréatique",
      "Panneaux solaires intégrés en toiture",
      "Structure béton précontraint",
    ],
  },
  {
    slug: "eco-resort-martinique",
    title: "Éco-Resort Martinique",
    description:
      "Complexe hôtelier écologique de 12 bungalows sur pilotis en bois local. Construction parasismique respectant l'environnement tropical. Ventilation naturelle, récupération d'eau de pluie et panneaux solaires. Certification HQE Tropicale.",
    excerpt: "Resort écologique sur pilotis en bois local certifié",
    type: "durable",
    region: "antilles",
    location: "Le Diamant, Martinique",
    date: "2023-11-10",
    duration: "15 mois",
    surface: "1200m² total",
    budget: "2,1M€",
    images: [
      "/images/EcoResort_Martinique_Vue_Aerienne.png",
      "/images/EcoResort_Martinique_Bungalow_Pilotis.png",
      "/images/EcoResort_Martinique_Interieur_Bambou.png",
      "/images/EcoResort_Martinique_Panneaux_Solaires.png",
      "/images/EcoResort_Martinique_Schema_Ventilation.png",
    ],
    features: [
      "Construction parasismique sur pilotis",
      "Bois local certifié PEFC",
      "Ventilation naturelle croisée",
      "Récupération intégrale eau de pluie",
      "Certification HQE Tropicale",
    ],
    featured: true,
  },
  {
    slug: "loft-belleville",
    title: "Loft Industriel Belleville",
    description:
      "Transformation d'un ancien atelier textile en loft de 280m². Création d'une mezzanine suspendue, conservation des poutres IPN d'origine et création d'une verrière d'artiste. Défi technique : portée libre de 12m sans appui intermédiaire.",
    excerpt: "Ancien atelier textile transformé en loft avec mezzanine suspendue",
    type: "rehabilitation",
    region: "paris",
    location: "Paris 20ème",
    date: "2023-09-05",
    duration: "12 mois",
    surface: "280m²",
    budget: "850K€",
    images: [
      "/images/Loft_Belleville_Verriere_Industrielle.png",
      "/images/Loft_Belleville_Mezzanine_Suspendue.png",
      "/images/Loft_Belleville_Poutres_IPN.png",
      "/images/Loft_Belleville_Avant_Travaux.png",
      "/images/Loft_Belleville_Plans_Mezzanine.png",
    ],
    features: [
      "Mezzanine suspendue par tirants",
      "Conservation poutres IPN historiques",
      "Verrière d'artiste sur mesure",
      "Portée libre 12m sans appui",
      "Chauffage par le sol intégré",
    ],
  },
  {
    slug: "villa-cassis",
    title: "Villa Bioclimatique Cassis",
    description:
      "Villa de 320m² intégrée dans le paysage méditerranéen. Murs capteurs en béton de chanvre, toiture végétalisée et récupération d'eau de pluie. Architecture contemporaine respectueuse de l'environnement avec performance énergétique passive.",
    excerpt: "Villa méditerranéenne en béton de chanvre avec toiture végétalisée",
    type: "durable",
    region: "paca",
    location: "Cassis",
    date: "2023-07-12",
    duration: "20 mois",
    surface: "320m²",
    budget: "1,8M€",
    images: [
      "/images/Villa_Cassis_Integration_Paysage.png",
      "/images/Villa_Cassis_Murs_Capteurs.png",
      "/images/Villa_Cassis_Beton_Chanvre.png",
      "/images/Villa_Cassis_Citerne_Eau.png",
      "/images/Villa_Cassis_Schema_Bioclimatique.png",
    ],
    features: [
      "Murs capteurs béton de chanvre",
      "Toiture végétalisée extensive",
      "Citerne enterrée 15m³",
      "Performance énergétique passive",
      "Intégration paysagère optimale",
    ],
  },
  {
    slug: "residence-guadeloupe",
    title: "Résidence Bioclimatique Guadeloupe",
    description:
      "Immeuble de 24 logements sociaux en architecture bioclimatique tropicale. Structure béton armé parasismique, coursives ventilées et toitures végétales. Gestion des eaux pluviales et ventilation naturelle pour un confort optimal sans climatisation.",
    excerpt: "24 logements sociaux en architecture bioclimatique tropicale",
    type: "durable",
    region: "antilles",
    location: "Pointe-à-Pitre, Guadeloupe",
    date: "2023-05-18",
    duration: "30 mois",
    surface: "1800m²",
    budget: "4,2M€",
    images: [
      "/images/Residence_Guadeloupe_Facade_Bioclimatique.png",
      "/images/Residence_Guadeloupe_Coursives_Ventilees.png",
      "/images/Residence_Guadeloupe_Toiture_Vegetale.png",
      "/images/Residence_Guadeloupe_Structure_Sismique.png",
      "/images/Residence_Guadeloupe_Plans_Modulables.png",
    ],
    features: [
      "Structure parasismique renforcée",
      "Coursives ventilées naturellement",
      "Toitures végétales extensives",
      "Gestion intégrée eaux pluviales",
      "Confort sans climatisation",
    ],
  },
  {
    slug: "maison-montmartre",
    title: "Maison d'Artiste Montmartre",
    description:
      "Réhabilitation d'une maison de ville du 19ème siècle en atelier d'artiste. Création d'une verrière zénithale, renforcement par tirants carbone et préservation de la façade historique. Défi : concilier patrimoine et modernité fonctionnelle.",
    excerpt: "Maison historique transformée en atelier d'artiste avec verrière",
    type: "rehabilitation",
    region: "paris",
    location: "Paris 18ème",
    date: "2023-03-22",
    duration: "14 mois",
    surface: "180m²",
    budget: "720K€",
    images: [
      "/images/Maison_Montmartre_Atelier_Verriere.png",
      "/images/Maison_Montmartre_Tirants_Carbone.png",
      "/images/Maison_Montmartre_Facade_Historique.png",
      "/images/Maison_Montmartre_Interieur_Duplex.png",
      "/images/Maison_Montmartre_Plans_Avant_Apres.png",
    ],
    features: [
      "Verrière zénithale sur mesure",
      "Tirants carbone invisibles",
      "Préservation façade historique",
      "Duplex avec mezzanine",
      "Éclairage naturel optimal",
    ],
  },
  {
    slug: "villa-nice",
    title: "Villa Contemporaine Nice",
    description:
      "Villa de 380m² sur les collines niçoises avec piscine à débordement. Structure béton précontraint permettant de grandes baies vitrées. Domotique intégrée, géothermie et panneaux solaires. Architecture minimaliste méditerranéenne.",
    excerpt: "Villa minimaliste avec piscine à débordement sur les collines niçoises",
    type: "construction-neuve",
    region: "paca",
    location: "Nice",
    date: "2023-01-15",
    duration: "22 mois",
    surface: "380m²",
    budget: "2,6M€",
    images: [
      "/images/Villa_Nice_Facade_Minimaliste.png",
      "/images/Villa_Nice_Piscine_Debordement.png",
      "/images/Villa_Nice_Interieur_Baie_Vitree.png",
      "/images/Villa_Nice_Domotique_Centrale.png",
      "/images/Villa_Nice_Structure_Precontrainte.png",
    ],
    features: [
      "Piscine à débordement 15m",
      "Baies vitrées coulissantes 6m",
      "Domotique KNX intégrée",
      "Géothermie sur sondes",
      "Architecture minimaliste",
    ],
  },
  {
    slug: "maison-creole",
    title: "Maison Créole Restaurée",
    description:
      "Restauration d'une maison créole du 18ème siècle en Martinique. Conservation de la charpente en bois de gommier, réfection des pilotis et modernisation des équipements. Respect des techniques traditionnelles avec apport de confort moderne.",
    excerpt: "Restauration authentique d'une maison créole historique",
    type: "rehabilitation",
    region: "antilles",
    location: "Fort-de-France, Martinique",
    date: "2022-11-08",
    duration: "16 mois",
    surface: "220m²",
    budget: "680K€",
    images: [
      "/images/Maison_Creole_Facade_Traditionnelle.png",
      "/images/Maison_Creole_Charpente_Gommier.png",
      "/images/Maison_Creole_Pilotis_Restaures.png",
      "/images/Maison_Creole_Interieur_Moderne.png",
      "/images/Maison_Creole_Plans_Patrimoniaux.png",
    ],
    features: [
      "Charpente gommier restaurée",
      "Pilotis renforcés béton",
      "Ventilation naturelle préservée",
      "Équipements modernes intégrés",
      "Respect patrimoine historique",
    ],
  },
  {
    slug: "immeuble-passif",
    title: "Immeuble Passif Paris",
    description:
      "Premier immeuble passif de 40 logements à Paris. Façade végétalisée, géothermie sur égouts, ventilation double flux et étanchéité à l'air renforcée. Performance énergétique exceptionnelle : 15 kWh/m²/an. Certification Passivhaus.",
    excerpt: "Premier immeuble passif parisien avec façade végétalisée",
    type: "durable",
    region: "paris",
    location: "Paris 13ème",
    date: "2022-09-30",
    duration: "36 mois",
    surface: "2400m²",
    budget: "8,5M€",
    images: [
      "/images/Immeuble_Passif_Facade_Vegetale.png",
      "/images/Immeuble_Passif_Geothermie_Egouts.png",
      "/images/Immeuble_Passif_Ventilation_DF.png",
      "/images/Immeuble_Passif_Etancheite_Air.png",
      "/images/Immeuble_Passif_Coupe_Technique.png",
    ],
    features: [
      "Certification Passivhaus",
      "Façade végétalisée 800m²",
      "Géothermie sur égouts",
      "Ventilation double flux",
      "15 kWh/m²/an seulement",
    ],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByType(type: Project["type"]): Project[] {
  return projects.filter((project) => project.type === type)
}

export function getProjectsByRegion(region: Project["region"]): Project[] {
  return projects.filter((project) => project.region === region)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
