"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calculator, Hammer, Leaf, Lightbulb, Users, Award, TrendingUp, Calendar, CheckCircle } from "lucide-react"

const poles = [
  {
    title: "Pôle Structures & Calculs",
    icon: Calculator,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    team: "4 ingénieurs spécialisés",
    stats: "150+ structures calculées",
    description: "Dimensionnement et calculs de structures selon Eurocodes avec modélisation 3D avancée",
    specialites: [
      "Béton armé et précontraint",
      "Structures métalliques complexes",
      "Calculs sismiques et dynamiques",
      "Modélisation éléments finis",
      "Optimisation structurelle",
    ],
    projets: [
      "Penthouse Trocadéro - Terrasse suspendue 150m²",
      "Villa Antibes - Piscine naturelle intégrée",
      "Immeuble Passif Paris - Structure optimisée",
    ],
  },
  {
    title: "Pôle Réhabilitation",
    icon: Hammer,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    team: "3 experts en renforcement",
    stats: "80+ réhabilitations réussies",
    description: "Interventions structurelles complexes sur bâtiments existants avec techniques innovantes",
    specialites: [
      "Renforcement fibres carbone",
      "Tirants précontraints",
      "Injection résines structurelles",
      "Ouverture trémies sécurisées",
      "Reprise en sous-œuvre",
    ],
    projets: [
      "Loft Belleville - Portée libre 12m",
      "Maison Montmartre - Verrière zénithale",
      "Hôtel Particulier - Escalier suspendu",
    ],
  },
  {
    title: "Pôle Développement Durable",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50",
    team: "3 ingénieurs éco-responsables",
    stats: "50+ projets durables certifiés",
    description: "Solutions bas carbone et innovations éco-responsables pour constructions durables",
    specialites: [
      "Matériaux biosourcés",
      "Géothermie et énergies renouvelables",
      "Certifications HQE/BREEAM/Passivhaus",
      "Analyse cycle de vie",
      "Réglementation RE2020",
    ],
    projets: [
      "Éco-Resort Martinique - Bois local certifié",
      "Villa Cassis - Béton de chanvre",
      "Résidence Guadeloupe - Bioclimatique",
    ],
  },
  {
    title: "Pôle Innovation & R&D",
    icon: Lightbulb,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    team: "2 ingénieurs recherche",
    stats: "25+ innovations développées",
    description: "Recherche et développement de solutions techniques innovantes et brevets",
    specialites: [
      "Matériaux composites avancés",
      "Techniques de renforcement",
      "Modélisation numérique",
      "Prototypage et essais",
      "Veille technologique",
    ],
    projets: ["Brevet tirants carbone invisibles", "Algorithme optimisation structures", "Composite chanvre-carbone"],
  },
]

const equipe = [
  {
    nom: "Thomas Bernard",
    poste: "Directeur Technique & Fondateur",
    formation: "INSA Lyon - Génie Civil",
    experience: "15 ans d'expérience",
    specialite: "Structures complexes et innovation",
    image: "/images/APropos_Equipe_ThomasBernard.png",
    description:
      "Fondateur de B.E StructiBA en 2009, Thomas Bernard dirige l'équipe technique avec une expertise reconnue en structures complexes. Diplômé INSA Lyon, il a développé plusieurs innovations brevetées et supervise les projets les plus techniques.",
    realisations: ["200+ projets supervisés", "3 brevets déposés", "Expert agréé tribunaux", "Formateur Eurocodes"],
  },
  {
    nom: "Marie Dupont",
    poste: "Responsable Développement Durable",
    formation: "Centrale Paris - Énergétique",
    experience: "12 ans d'expérience",
    specialite: "Construction durable et certifications",
    image: "/images/APropos_Equipe_MarieDupont.png",
    description:
      "Marie Dupont pilote le pôle développement durable depuis 2012. Diplômée Centrale Paris, elle maîtrise toutes les certifications environnementales et développe nos solutions bas carbone innovantes.",
    realisations: ["50+ projets certifiés HQE", "Expert RE2020", "15 formations dispensées", "Membre commission CSTB"],
  },
  {
    nom: "Julien Martin",
    poste: "Chef de Projet Innovation",
    formation: "Ponts ParisTech + Doctorat",
    experience: "10 ans d'expérience",
    specialite: "R&D et matériaux composites",
    image: "/images/APropos_Equipe_JulienMartin.png",
    description:
      "Docteur en génie civil de Ponts ParisTech, Julien Martin dirige nos projets de recherche et développement. Il développe les matériaux composites de demain et optimise nos méthodes de calcul.",
    realisations: [
      "25+ innovations développées",
      "2 brevets en cours",
      "10 publications scientifiques",
      "Partenariats universités",
    ],
  },
  {
    nom: "Sophie Leroy",
    poste: "Responsable Qualité & Réglementation",
    formation: "ESTP + Master Qualité",
    experience: "8 ans d'expérience",
    specialite: "Qualité et conformité réglementaire",
    image: "/images/APropos_Equipe_SophieLeroy.png",
    description:
      "Sophie Leroy garantit la qualité de nos prestations et la conformité réglementaire. Diplômée ESTP avec un Master Qualité, elle supervise tous nos processus et certifications.",
    realisations: [
      "Certification ISO 9001",
      "0 non-conformité majeure",
      "Formation équipes qualité",
      "Audit 50+ chantiers/an",
    ],
  },
]

const timeline = [
  {
    annee: "2009",
    titre: "Création B.E StructiBA",
    description: "Thomas Bernard fonde le bureau d'études à Cannes avec 2 collaborateurs",
  },
  {
    annee: "2012",
    titre: "Pôle Développement Durable",
    description: "Création du pôle durable avec Marie Dupont, premiers projets HQE",
  },
  {
    annee: "2015",
    titre: "Expansion Régionale PACA",
    description: "50+ projets réalisés, reconnaissance expertise structures complexes",
  },
  {
    annee: "2018",
    titre: "Innovation & Brevets",
    description: "Création pôle R&D avec Julien Martin, premiers brevets déposés",
  },
  {
    annee: "2020",
    titre: "Certification ISO 9001",
    description: "Obtention certification qualité avec Sophie Leroy",
  },
  {
    annee: "2022",
    titre: "Expansion Antilles",
    description: "Ouverture activité Antilles, expertise parasismique tropicale",
  },
  {
    annee: "2024",
    titre: "Référence Régionale",
    description: "12 collaborateurs, 500+ projets, leader technique reconnu",
  },
]

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              À Propos de B.E StructiBA
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-justify">
              Depuis 15 ans, B.E StructiBA développe une expertise technique reconnue dans l'ingénierie structurelle.
              Notre équipe de 12 ingénieurs spécialisés, organisée en 4 pôles complémentaires, vous accompagne de la
              conception à la réalisation de vos projets les plus ambitieux. Découvrez notre histoire, nos valeurs et
              l'équipe qui fait notre force.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="size-4" />
                <span>12 ingénieurs experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>15 ans d'expérience</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="size-4" />
                <span>500+ projets réalisés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organisation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Notre Organisation en 4 Pôles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              B.E StructiBA s'organise autour de 4 pôles d'expertise complémentaires, chacun dirigé par des ingénieurs
              spécialisés. Cette organisation garantit une expertise approfondie dans chaque domaine et une coordination
              optimale de vos projets multidisciplinaires.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {poles.map((pole, index) => {
              const PoleIcon = pole.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${pole.bgColor} p-3 rounded-lg`}>
                        <PoleIcon className={`size-6 ${pole.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{pole.title}</h3>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {pole.team}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {pole.stats}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-justify">{pole.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Spécialités :</h4>
                      <div className="space-y-1">
                        {pole.specialites.map((specialite, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className={`size-3 ${pole.color}`} />
                            <span className="text-gray-600">{specialite}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Projets de référence :</h4>
                      <div className="space-y-1">
                        {pole.projets.map((projet, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div
                              className={`size-1.5 rounded-full ${pole.color.replace("text-", "bg-")} mt-2 flex-shrink-0`}
                            />
                            <span className="text-gray-600">{projet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Notre Équipe Dirigeante
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              L'équipe dirigeante de B.E StructiBA réunit des ingénieurs d'exception, diplômés des meilleures écoles.
              Leur expertise complémentaire et leur vision partagée font la force de notre bureau d'études depuis 15
              ans.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {equipe.map((membre, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="relative size-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={membre.image || "/placeholder.svg"}
                        alt={membre.nom}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{membre.nom}</h3>
                      <p className="text-[#C9A568] font-medium">{membre.poste}</p>
                      <p className="text-sm text-gray-600">{membre.formation}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {membre.experience}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-justify">{membre.description}</p>

                  <div>
                    <h4 className="font-medium mb-2">Réalisations clés :</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {membre.realisations.map((realisation, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <TrendingUp className="size-3 text-[#C9A568]" />
                          <span className="text-gray-600">{realisation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              15 Années d'Évolution
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              De bureau local à référence régionale, découvrez les étapes clés qui ont façonné B.E StructiBA. Chaque
              année a apporté son lot d'innovations, de projets marquants et de développements stratégiques.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#C9A568]" />

              <div className="space-y-8">
                {timeline.map((etape, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex items-center justify-center size-16 bg-[#C9A568] text-white rounded-full font-bold">
                      {etape.annee}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-bold mb-2">{etape.titre}</h3>
                      <p className="text-gray-600 text-justify">{etape.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Nos Valeurs Fondamentales
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="relative size-20 mx-auto mb-4">
                  <Image
                    src="/images/Valeurs_Qualite_Precision.png"
                    alt="Excellence technique"
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Excellence Technique</h3>
                <p className="text-gray-600 text-justify">
                  Recherche permanente de la perfection technique avec les outils les plus avancés et une formation
                  continue de nos équipes.
                </p>
              </div>

              <div className="text-center">
                <div className="relative size-20 mx-auto mb-4">
                  <Image
                    src="/images/Valeurs_Innovation_Ampoule.png"
                    alt="Innovation"
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-gray-600 text-justify">
                  Développement constant de nouvelles solutions techniques et matériaux pour répondre aux défis de
                  demain.
                </p>
              </div>

              <div className="text-center">
                <div className="relative size-20 mx-auto mb-4">
                  <Image
                    src="/images/Valeurs_Durable_Feuille.png"
                    alt="Durabilité"
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Durabilité</h3>
                <p className="text-gray-600 text-justify">
                  Engagement fort pour la construction durable avec des solutions bas carbone et respectueuses de
                  l'environnement.
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
              <Image
                src="/images/APropos_Bureau_ReunionEquipe.png"
                alt="Équipe B.E StructiBA en réunion"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>

            <p className="text-lg text-gray-600 mb-8 text-justify">
              Ces valeurs guident chacune de nos décisions et se retrouvent dans chaque projet que nous réalisons. Elles
              font de B.E StructiBA un partenaire de confiance pour vos projets les plus ambitieux, alliant expertise
              technique, innovation et respect de l'environnement.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8956A] text-white">
                <Link href="/expertise">Découvrir notre expertise</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Nous rencontrer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
