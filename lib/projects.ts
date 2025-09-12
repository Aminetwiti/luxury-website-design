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
    id: "penthouse-trocadero",
    title: "Penthouse Trocadéro",
    location: "Paris 16ème",
    type: "Réhabilitation",
    region: "Paris",
    year: "2024",
    duration: "18 mois",
    surface: "300m² + 150m² terrasse",
    budget: "2,8M€",
    description:
      "Réhabilitation complète d'un penthouse de 300m² avec vue sur la Tour Eiffel. Ouverture de trémies, renforcement de structure et création d'une terrasse suspendue de 150m². Utilisation de matériaux nobles et techniques innovantes pour préserver le caractère haussmannien tout en apportant une modernité assumée.",
    challenges: [
      "Ouverture de 3 trémies majeures",
      "Renforcement par tirants précontraints",
      "Création d'une terrasse suspendue de 150m²",
      "Utilisation de matériaux nobles et techniques innovantes",
      "Préservation du caractère haussmannien",
      "Intégration de domotique haut de gamme",
      "Isolation thermique renforcée",
    ],
    images: {
      main: "/images/Penthouse_Trocadero_Terrasse_TourEiffel.png",
      gallery: [
        "/images/Penthouse_Trocadero_Structure_Carbone.png",
        "/images/Penthouse_Trocadero_Salon_Design.png",
        "/images/Penthouse_Trocadero_Render_Nuit.png",
        "/images/Penthouse_Trocadero_Plans_Structure.png",
      ],
    },
    slug: "penthouse-trocadero",
    featured: true,
  },
  {
    id: "villa-antibes",
    title: "Villa Horizon Antibes",
    location: "Antibes",
    type: "Construction Neuve",
    region: "PACA",
    year: "2024",
    duration: "24 mois",
    surface: "450m²",
    budget: "3,2M€",
    description:
      "Construction neuve d'une villa contemporaine de 450m² sur les hauteurs d'Antibes. Architecture bioclimatique avec piscine naturelle, géothermie et panneaux solaires intégrés. Structure béton précontraint permettant de grandes portées et baies vitrées panoramiques.",
    challenges: [
      "Architecture bioclimatique passive",
      "Piscine naturelle avec filtration biologique",
      "Géothermie sur nappe phréatique",
      "Panneaux solaires intégrés en toiture",
      "Structure béton précontraint",
      "Coordination avec les contraintes réglementaires",
    ],
    images: {
      main: "/images/Villa_Antibes_Facade_Contemporaine.png",
      gallery: [
        "/images/Villa_Antibes_Piscine_Naturelle.png",
        "/images/Villa_Antibes_Interieur_Baies.png",
        "/images/Villa_Antibes_Geothermie_Schema.png",
        "/images/Villa_Antibes_Render_Coucher.png",
      ],
    },
    slug: "villa-antibes",
  },
  {
    id: "eco-resort-martinique",
    title: "Éco-Resort Martinique",
    location: "Le Diamant, Martinique",
    type: "Durable",
    region: "Antilles",
    year: "2023",
    duration: "15 mois",
    surface: "1200m² total",
    budget: "2,1M€",
    description:
      "Complexe hôtelier écologique de 12 bungalows sur pilotis en bois local. Construction parasismique respectant l'environnement tropical. Ventilation naturelle, récupération d'eau de pluie et panneaux solaires. Certification HQE Tropicale.",
    challenges: [
      "Construction parasismique sur pilotis",
      "Bois local certifié PEFC",
      "Ventilation naturelle croisée",
      "Récupération intégrale eau de pluie",
      "Certification HQE Tropicale",
      "Coordination avec les normes environnementales",
    ],
    images: {
      main: "/images/EcoResort_Martinique_Vue_Aerienne.png",
      gallery: [
        "/images/EcoResort_Martinique_Bungalow_Pilotis.png",
        "/images/EcoResort_Martinique_Interieur_Bambou.png",
        "/images/EcoResort_Martinique_Panneaux_Solaires.png",
        "/images/EcoResort_Martinique_Schema_Ventilation.png",
      ],
    },
    slug: "eco-resort-martinique",
    featured: true,
  },
  {
    id: "loft-belleville",
    title: "Loft Industriel Belleville",
    location: "Paris 20ème",
    type: "Réhabilitation",
    region: "Paris",
    year: "2023",
    duration: "12 mois",
    surface: "280m²",
    budget: "850K€",
    description:
      "Transformation d'un ancien atelier textile en loft de 280m². Création d'une mezzanine suspendue, conservation des poutres IPN d'origine et création d'une verrière d'artiste. Défi technique : portée libre de 12m sans appui intermédiaire.",
    challenges: [
      "Mezzanine suspendue par tirants",
      "Conservation poutres IPN historiques",
      "Verrière d'artiste sur mesure",
      "Portée libre 12m sans appui",
      "Chauffage par le sol intégré",
      "Conformité réglementaire",
    ],
    images: {
      main: "/images/Loft_Belleville_Verriere_Industrielle.png",
      gallery: [
        "/images/Loft_Belleville_Mezzanine_Suspendue.png",
        "/images/Loft_Belleville_Poutres_IPN.png",
        "/images/Loft_Belleville_Avant_Travaux.png",
        "/images/Loft_Belleville_Plans_Mezzanine.png",
      ],
    },
    slug: "loft-belleville",
  },
  {
    id: "villa-cassis",
    title: "Villa Bioclimatique Cassis",
    location: "Cassis",
    type: "Durable",
    region: "PACA",
    year: "2023",
    duration: "20 mois",
    surface: "320m²",
    budget: "1,8M€",
    description:
      "Villa de 320m² intégrée dans le paysage méditerranéen. Murs capteurs en béton de chanvre, toiture végétalisée et récupération d'eau de pluie. Architecture contemporaine respectueuse de l'environnement avec performance énergétique passive.",
    challenges: [
      "Murs capteurs béton de chanvre",
      "Toiture végétalisée extensive",
      "Citerne enterrée 15m³",
      "Performance énergétique passive",
      "Intégration paysagère optimale",
      "Respect des normes bioclimatiques",
    ],
    images: {
      main: "/images/Villa_Cassis_Integration_Paysage.png",
      gallery: [
        "/images/Villa_Cassis_Murs_Capteurs.png",
        "/images/Villa_Cassis_Beton_Chanvre.png",
        "/images/Villa_Cassis_Citerne_Eau.png",
        "/images/Villa_Cassis_Schema_Bioclimatique.png",
      ],
    },
    slug: "villa-cassis",
  },
  {
    id: "residence-guadeloupe",
    title: "Résidence Bioclimatique Guadeloupe",
    location: "Pointe-à-Pitre, Guadeloupe",
    type: "Durable",
    region: "Antilles",
    year: "2023",
    duration: "30 mois",
    surface: "1800m²",
    budget: "4,2M€",
    description:
      "Immeuble de 24 logements sociaux en architecture bioclimatique tropicale. Structure béton armé parasismique, coursives ventilées et toitures végétales. Gestion des eaux pluviales et ventilation naturelle pour un confort optimal sans climatisation.",
    challenges: [
      "Structure parasismique renforcée",
      "Coursives ventilées naturellement",
      "Toitures végétales extensives",
      "Gestion intégrée eaux pluviales",
      "Confort sans climatisation",
      "Coordination avec les normes environnementales",
    ],
    images: {
      main: "/images/Residence_Guadeloupe_Facade_Bioclimatique.png",
      gallery: [
        "/images/Residence_Guadeloupe_Coursives_Ventilees.png",
        "/images/Residence_Guadeloupe_Toiture_Vegetale.png",
        "/images/Residence_Guadeloupe_Structure_Sismique.png",
        "/images/Residence_Guadeloupe_Plans_Modulables.png",
      ],
    },
    slug: "residence-guadeloupe",
  },
  {
    id: "maison-montmartre",
    title: "Maison d'Artiste Montmartre",
    location: "Paris 18ème",
    type: "Réhabilitation",
    region: "Paris",
    year: "2023",
    duration: "14 mois",
    surface: "180m²",
    budget: "720K€",
    description:
      "Réhabilitation d'une maison de ville du 19ème siècle en atelier d'artiste. Création d'une verrière zénithale, renforcement par tirants carbone et préservation de la façade historique. Défi : concilier patrimoine et modernité fonctionnelle.",
    challenges: [
      "Verrière zénithale sur mesure",
      "Tirants carbone invisibles",
      "Préservation façade historique",
      "Duplex avec mezzanine",
      "Éclairage naturel optimal",
      "Conformité réglementaire",
    ],
    images: {
      main: "/images/Maison_Montmartre_Atelier_Verriere.png",
      gallery: [
        "/images/Maison_Montmartre_Tirants_Carbone.png",
        "/images/Maison_Montmartre_Facade_Historique.png",
        "/images/Maison_Montmartre_Interieur_Duplex.png",
        "/images/Maison_Montmartre_Plans_Avant_Apres.png",
      ],
    },
    slug: "maison-montmartre",
  },
  {
    id: "villa-nice",
    title: "Villa Contemporaine Nice",
    location: "Nice",
    type: "Construction Neuve",
    region: "PACA",
    year: "2023",
    duration: "22 mois",
    surface: "380m²",
    budget: "2,6M€",
    description:
      "Villa de 380m² sur les collines niçoises avec piscine à débordement. Structure béton précontraint permettant de grandes baies vitrées. Domotique intégrée, géothermie et panneaux solaires. Architecture minimaliste méditerranéenne.",
    challenges: [
      "Piscine à débordement 15m",
      "Baies vitrées coulissantes 6m",
      "Domotique KNX intégrée",
      "Géothermie sur sondes",
      "Architecture minimaliste",
      "Coordination avec les contraintes réglementaires",
    ],
    images: {
      main: "/images/Villa_Nice_Facade_Minimaliste.png",
      gallery: [
        "/images/Villa_Nice_Piscine_Debordement.png",
        "/images/Villa_Nice_Interieur_Baie_Vitree.png",
        "/images/Villa_Nice_Domotique_Centrale.png",
        "/images/Villa_Nice_Structure_Precontrainte.png",
      ],
    },
    slug: "villa-nice",
  },
  {
    id: "maison-creole",
    title: "Maison Créole Restaurée",
    location: "Fort-de-France, Martinique",
    type: "Réhabilitation",
    region: "Antilles",
    year: "2022",
    duration: "16 mois",
    surface: "220m²",
    budget: "680K€",
    description:
      "Restauration d'une maison créole du 18ème siècle en Martinique. Conservation de la charpente en bois de gommier, réfection des pilotis et modernisation des équipements. Respect des techniques traditionnelles avec apport de confort moderne.",
    challenges: [
      "Charpente gommier restaurée",
      "Pilotis renforcés béton",
      "Ventilation naturelle préservée",
      "Équipements modernes intégrés",
      "Respect patrimoine historique",
      "Coordination avec les normes historiques",
    ],
    images: {
      main: "/images/Maison_Creole_Facade_Traditionnelle.png",
      gallery: [
        "/images/Maison_Creole_Charpente_Gommier.png",
        "/images/Maison_Creole_Pilotis_Restaures.png",
        "/images/Maison_Creole_Interieur_Moderne.png",
        "/images/Maison_Creole_Plans_Patrimoniaux.png",
      ],
    },
    slug: "maison-creole",
  },
  {
    id: "immeuble-passif",
    title: "Immeuble Passif Paris",
    location: "Paris 13ème",
    type: "Durable",
    region: "Paris",
    year: "2022",
    duration: "36 mois",
    surface: "2400m²",
    budget: "8,5M€",
    description:
      "Premier immeuble passif de 40 logements à Paris. Façade végétalisée, géothermie sur égouts, ventilation double flux et étanchéité à l'air renforcée. Performance énergétique exceptionnelle : 15 kWh/m²/an. Certification Passivhaus.",
    challenges: [
      "Certification Passivhaus",
      "Façade végétalisée 800m²",
      "Géothermie sur égouts",
      "Ventilation double flux",
      "15 kWh/m²/an seulement",
      "Coordination avec les normes Passivhaus",
    ],
    images: {
      main: "/images/Immeuble_Passif_Facade_Vegetale.png",
      gallery: [
        "/images/Immeuble_Passif_Geothermie_Egouts.png",
        "/images/Immeuble_Passif_Ventilation_DF.png",
        "/images/Immeuble_Passif_Etancheite_Air.png",
        "/images/Immeuble_Passif_Coupe_Technique.png",
      ],
    },
    slug: "immeuble-passif",
    featured: true,
  },
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
