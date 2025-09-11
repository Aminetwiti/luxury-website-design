"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  PenTool,
  Hammer,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react"

const processSteps = [
  {
    id: 1,
    title: "Diagnostic & Analyse",
    icon: Search,
    duration: "2-4 semaines",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Investigation approfondie de l'existant avec techniques non-destructives",
    image: "/images/Expertise_Processus_Diagnostic.png",
    details: [
      "Relevé architectural et structural complet",
      "Investigation pathologies par radar et ultrasons",
      "Analyse géotechnique et fondations",
      "Diagnostic énergétique et thermique",
      "Évaluation conformité réglementaire",
      "Rapport détaillé avec préconisations",
    ],
    livrables: [
      "Plans de relevé AutoCAD",
      "Rapport diagnostic 50+ pages",
      "Cartographie pathologies",
      "Préconisations techniques",
    ],
  },
  {
    id: 2,
    title: "Conception & Calculs",
    icon: PenTool,
    duration: "3-6 semaines",
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Dimensionnement et modélisation 3D avec calculs aux éléments finis",
    image: "/images/Expertise_Processus_Conception.png",
    details: [
      "Modélisation 3D structure complète",
      "Calculs aux éléments finis dynamiques",
      "Dimensionnement selon Eurocodes",
      "Optimisation matériaux et sections",
      "Simulation charges et contraintes",
      "Plans d'exécution détaillés",
    ],
    livrables: [
      "Modèle 3D Robot Structural",
      "Note de calculs justificative",
      "Plans d'exécution Tekla",
      "Métrés et quantitatifs",
    ],
  },
  {
    id: 3,
    title: "Réalisation & Suivi",
    icon: Hammer,
    duration: "Selon projet",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: "Accompagnement chantier avec contrôles qualité et coordination équipes",
    image: "/images/Expertise_Processus_Realisation.png",
    details: [
      "Assistance technique permanente",
      "Contrôle qualité matériaux et mise en œuvre",
      "Coordination équipes spécialisées",
      "Suivi planning et respect délais",
      "Validation étapes critiques",
      "Reporting hebdomadaire client",
    ],
    livrables: ["Fiches contrôle qualité", "Rapports hebdomadaires", "Photos d'avancement", "Procès-verbaux réception"],
  },
  {
    id: 4,
    title: "Validation & Garanties",
    icon: CheckCircle,
    duration: "1-2 semaines",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Contrôles finaux et mise en service avec garanties décennales",
    image: "/images/Expertise_Processus_Suivi.png",
    details: [
      "Tests de performance et résistance",
      "Contrôles conformité réglementaire",
      "Réception travaux avec réserves",
      "Formation équipes maintenance",
      "Activation garanties décennales",
      "Suivi post-livraison 2 ans",
    ],
    livrables: [
      "Procès-verbal réception",
      "Certificats conformité",
      "Dossier ouvrages exécutés",
      "Garanties décennales",
    ],
  },
]

const competences = [
  {
    title: "Calculs de Structure",
    icon: Target,
    stats: "150+ structures calculées",
    description: "Dimensionnement selon Eurocodes avec modélisation 3D avancée",
    specialites: [
      "Béton armé et précontraint",
      "Structures métalliques",
      "Bois lamellé-collé",
      "Calculs sismiques",
      "Éléments finis dynamiques",
    ],
  },
  {
    title: "Ingénierie Bâtiment",
    icon: Users,
    stats: "200+ projets coordonnés",
    description: "Coordination technique multidisciplinaire et BIM management",
    specialites: [
      "Coordination BIM Revit",
      "Synthèse tous corps d'état",
      "Planning et méthodes",
      "Économie de la construction",
      "Management de projet",
    ],
  },
  {
    title: "Construction Durable",
    icon: Award,
    stats: "50+ projets durables",
    description: "Solutions bas carbone et certifications environnementales",
    specialites: [
      "Matériaux biosourcés",
      "Géothermie et EnR",
      "Certifications HQE/BREEAM",
      "Analyse cycle de vie",
      "Réglementation RE2020",
    ],
  },
  {
    title: "Expertise Judiciaire",
    icon: TrendingUp,
    stats: "80+ expertises réalisées",
    description: "Missions d'expertise agréées tribunaux et compagnies d'assurance",
    specialites: [
      "Pathologies structurelles",
      "Sinistres et désordres",
      "Évaluation dommages",
      "Contre-expertise",
      "Médiation technique",
    ],
  },
  {
    title: "Innovation Technique",
    icon: Zap,
    stats: "25+ innovations développées",
    description: "Recherche et développement de solutions techniques innovantes",
    specialites: [
      "Matériaux composites",
      "Techniques de renforcement",
      "Modélisation avancée",
      "Prototypage et tests",
      "Brevets et publications",
    ],
  },
]

export default function ExpertisePage() {
  const [activeStep, setActiveStep] = useState(1)
  const currentStep = processSteps.find((step) => step.id === activeStep)!
  const IconComponent = currentStep.icon

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Notre Expertise Technique
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-justify">
              B.E StructiBA développe depuis 15 ans une expertise technique reconnue dans l'ingénierie structurelle.
              Notre processus en 4 étapes garantit la qualité et la performance de chaque projet, de l'analyse initiale
              à la validation finale. Découvrez nos 5 domaines de compétence et notre approche méthodologique éprouvée.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="size-4" />
                <span>Processus 4 étapes</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-4" />
                <span>12 ingénieurs experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="size-4" />
                <span>500+ projets réalisés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Notre Processus d'Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              Chaque projet suit une méthodologie rigoureuse en 4 étapes, garantissant qualité technique, respect des
              délais et satisfaction client. De l'analyse initiale à la validation finale, nos ingénieurs vous
              accompagnent avec expertise et transparence.
            </p>
          </div>

          {/* Process Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {processSteps.map((step) => {
              const StepIcon = step.icon
              return (
                <Button
                  key={step.id}
                  variant={activeStep === step.id ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveStep(step.id)}
                  className={`flex items-center gap-2 px-6 py-3 ${
                    activeStep === step.id
                      ? `bg-[#C9A568] hover:bg-[#B8956A] text-white`
                      : `hover:bg-gray-50 ${step.color}`
                  }`}
                >
                  <span className="font-bold">{step.id}</span>
                  <StepIcon className="size-5" />
                  <span className="hidden sm:inline">{step.title}</span>
                </Button>
              )
            })}
          </div>

          {/* Step Content */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center gap-3 ${currentStep.bgColor} px-6 py-3 rounded-full mb-4`}>
                <IconComponent className={`size-6 ${currentStep.color}`} />
                <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {currentStep.title}
                </h3>
                <Badge variant="outline">{currentStep.duration}</Badge>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">{currentStep.description}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={currentStep.image || "/placeholder.svg"}
                  alt={currentStep.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Details */}
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle className={`size-5 ${currentStep.color}`} />
                  Activités Détaillées
                </h4>
                <div className="grid gap-3 mb-8">
                  {currentStep.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div
                        className={`size-2 rounded-full ${currentStep.color.replace("text-", "bg-")} mt-2 flex-shrink-0`}
                      />
                      <span className="text-gray-700 text-justify">{detail}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-lg font-bold mb-4">Livrables</h4>
                <div className="grid gap-2 mb-6">
                  {currentStep.livrables.map((livrable, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ArrowRight className={`size-4 ${currentStep.color}`} />
                      <span className="text-gray-700">{livrable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Nos 5 Domaines de Compétence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              B.E StructiBA maîtrise 5 domaines techniques complémentaires, développés au fil de 500+ projets réalisés.
              Chaque domaine bénéficie d'une expertise approfondie et d'outils de pointe pour garantir l'excellence
              technique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {competences.map((competence, index) => {
              const CompIcon = competence.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#C9A568] p-2 rounded-lg">
                        <CompIcon className="size-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{competence.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {competence.stats}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-justify flex-grow">{competence.description}</p>

                    <div>
                      <h4 className="font-medium mb-2">Spécialités :</h4>
                      <div className="space-y-1">
                        {competence.specialites.map((specialite, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="size-1.5 rounded-full bg-[#C9A568]" />
                            <span className="text-gray-600">{specialite}</span>
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

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Une Équipe d'Experts à Votre Service
            </h2>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
              <Image
                src="/images/Expertise_EquipeTerrain_ChantierAction.png"
                alt="Équipe B.E StructiBA sur chantier"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            <p className="text-lg text-gray-600 mb-8 text-justify">
              Nos 12 ingénieurs spécialisés cumulent plus de 150 années d'expérience collective. Formés dans les
              meilleures écoles d'ingénieurs (INSA, Centrale, Ponts ParisTech), ils maîtrisent les dernières innovations
              techniques et réglementaires. Cette expertise pluridisciplinaire garantit des solutions optimales pour
              chaque projet.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C9A568] mb-2">12</div>
                <div className="text-gray-600">Ingénieurs experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C9A568] mb-2">150+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C9A568] mb-2">500+</div>
                <div className="text-gray-600">Projets réalisés</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8956A] text-white">
                <Link href="/a-propos">Découvrir l'équipe</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
