import type { Metadata } from "next"
import { CheckCircle, Users, Award, Target, Lightbulb, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Notre Expertise | B.E Structiba - Bureau d'Études Structure",
  description:
    "Découvrez l'expertise technique de B.E Structiba : processus d'études, certifications, compétences clés et organisation. Excellence en ingénierie structure et béton armé.",
  keywords:
    "expertise structure, bureau études, ingénierie béton armé, certifications, processus études, compétences techniques",
}

const processSteps = [
  {
    id: 1,
    title: "Analyse des besoins et faisabilité",
    description:
      "Étude préliminaire du projet, analyse des contraintes techniques et réglementaires, évaluation de la faisabilité structurelle.",
    icon: Target,
    image: "/images/Process_Analysis_Feasibility.jpg",
    duration: "1-2 semaines",
    deliverables: ["Note de faisabilité", "Pré-dimensionnement", "Estimation budgétaire"],
  },
  {
    id: 2,
    title: "Conception et dimensionnement",
    description:
      "Calculs structurels détaillés, modélisation 3D, dimensionnement selon les Eurocodes, optimisation des solutions techniques.",
    icon: Lightbulb,
    image: "/images/Process_Structural_Design.jpg",
    duration: "3-6 semaines",
    deliverables: ["Plans de structure", "Notes de calculs", "Modèle 3D"],
  },
  {
    id: 3,
    title: "Suivi et coordination",
    description:
      "Accompagnement en phase chantier, coordination avec les entreprises, validation des solutions techniques, adaptations si nécessaire.",
    icon: Users,
    image: "/images/Process_Project_Management.jpg",
    duration: "Durée du chantier",
    deliverables: ["Visites de chantier", "Comptes-rendus", "Adaptations techniques"],
  },
  {
    id: 4,
    title: "Contrôle et réception",
    description:
      "Vérification de la conformité des ouvrages, contrôles qualité, assistance à la réception des travaux, garanties.",
    icon: Shield,
    image: "/images/Process_Quality_Control.jpg",
    duration: "1-2 semaines",
    deliverables: ["Rapport de conformité", "PV de réception", "Dossier d'ouvrage exécuté"],
  },
]

const keySkills = [
  "Calculs de structure béton armé et précontraint",
  "Modélisation et analyse par éléments finis",
  "Études sismiques et parasismiques (Eurocode 8)",
  "Réhabilitation et renforcement d'ouvrages existants",
  "Coordination BIM et maquette numérique",
  "Expertise pathologies et diagnostics structurels",
]

const organization = [
  {
    title: "Pôle Calcul",
    description: "Ingénieurs structures spécialisés en calculs complexes et modélisation avancée",
    members: 3,
    icon: Target,
  },
  {
    title: "Pôle Dessin/Plans",
    description: "Dessinateurs techniques experts en DAO/CAO et plans d'exécution",
    members: 2,
    icon: Lightbulb,
  },
  {
    title: "Pôle Administratif",
    description: "Gestion de projets, suivi clientèle et coordination administrative",
    members: 1,
    icon: Users,
  },
  {
    title: "Pôle Développement/Innovation",
    description: "Recherche et développement, nouvelles technologies, innovation structurelle",
    members: 1,
    icon: Award,
  },
]

const clientTypes = [
  "Particuliers (maisons individuelles, extensions, piscines)",
  "Professionnels (bureaux, commerces, entrepôts)",
  "Architectes (collaboration sur projets complexes)",
  "Promoteurs (opérations immobilières, logements collectifs)",
]

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Notre Expertise
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed text-justify">
              Fort d'une expertise technique reconnue et d'une approche méthodologique rigoureuse, B.E Structiba
              accompagne ses clients dans la réalisation de projets structurels d'exception. Notre équipe
              pluridisciplinaire maîtrise l'ensemble des enjeux techniques, réglementaires et économiques de
              l'ingénierie structure moderne.
            </p>
          </div>
        </div>
      </section>

      {/* Processus d'études */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Processus d'Études</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              Une méthodologie éprouvée en 4 étapes pour garantir la réussite de vos projets structurels, de l'analyse
              préliminaire à la réception des ouvrages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <Card key={step.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#C9A568] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.id}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <step.icon className="w-6 h-6 text-[#C9A568] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-justify">{step.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="text-[#C9A568] border-[#C9A568]">
                      {step.duration}
                    </Badge>
                    <span className="text-gray-500">{step.deliverables.length} livrables</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Qualifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              L'ensemble des intervenants sont des ingénieurs certifiés issus des plus grandes écoles françaises.
            </p>
          </div>
        </div>
      </section>

      {/* Compétences clés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compétences Clés</h2>
              <p className="text-lg text-gray-600 text-justify">
                Notre expertise technique couvre l'ensemble des domaines de l'ingénierie structure, des calculs les plus
                complexes aux solutions innovantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keySkills.map((skill, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#C9A568] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organisation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organisation & Ressources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              Une équipe structurée en pôles d'expertise complémentaires pour une prise en charge optimale de vos
              projets, de la conception à la réalisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organization.map((pole, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#C9A568]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pole.icon className="w-8 h-8 text-[#C9A568]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pole.title}</h3>
                <p className="text-gray-600 text-sm mb-3 text-justify">{pole.description}</p>
                <Badge variant="outline" className="text-[#C9A568] border-[#C9A568]">
                  {pole.members} {pole.members > 1 ? "membres" : "membre"}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types de clients */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Clients</h2>
              <p className="text-lg text-gray-600 text-justify">
                Nous accompagnons une clientèle diversifiée dans la réalisation de leurs projets structurels, en
                adaptant notre expertise à leurs besoins spécifiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clientTypes.map((clientType, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#C9A568] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{clientType}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
