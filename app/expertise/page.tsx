import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Lightbulb, Calculator, Cog, Leaf, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"
import Breadcrumbs from "@/components/breadcrumbs"

const processSteps = [
  {
    id: 1,
    title: "Analyse des besoins et faisabilité",
    description: "Étude approfondie de votre projet et évaluation de sa faisabilité technique et réglementaire.",
    icon: Target,
    image: "/images/Expertise_Processus_Diagnostic.png",
  },
  {
    id: 2,
    title: "Conception & Dimensionnement",
    description: "Élaboration des solutions techniques optimales et dimensionnement précis des structures.",
    icon: Lightbulb,
    image: "/images/Expertise_Processus_Conception.png",
  },
  {
    id: 3,
    title: "Réalisation & Suivi",
    description: "Accompagnement durant la phase de réalisation avec suivi technique rigoureux.",
    icon: Cog,
    image: "/images/Expertise_Processus_Realisation.png",
  },
  {
    id: 4,
    title: "Contrôle & Validation",
    description: "Vérification de la conformité et validation finale des ouvrages réalisés.",
    icon: CheckCircle,
    image: "/images/Expertise_Processus_Suivi.png",
  },
]

const keySkills = [
  {
    title: "Ingénierie structurelle avancée",
    description: "Maîtrise des techniques de calcul et de conception les plus pointues",
    icon: Calculator,
  },
  {
    title: "Calculs techniques précis",
    description: "Précision et rigueur dans tous nos dimensionnements et vérifications",
    icon: Target,
  },
  {
    title: "Maîtrise des matériaux innovants et durables",
    description: "Expertise des matériaux modernes et éco-responsables",
    icon: Leaf,
  },
  {
    title: "Respect rigoureux des normes (Eurocodes, DTU, règles de l'art)",
    description: "Application stricte de toutes les réglementations en vigueur",
    icon: Shield,
  },
  {
    title: "Ingénierie parasismique avancée",
    description: "Spécialisation dans la protection sismique et les zones à risque",
    icon: Shield,
  },
  {
    title: "Optimisation Structurelle et économique",
    description: "Recherche constante de solutions performantes et économiques",
    icon: TrendingUp,
  },
]

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/Expertise_Schema_TechniqueMinimal.png"
            alt="Schéma technique"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Notre <span className="text-[#C9A568]">Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 text-justify">
              Une approche méthodique et rigoureuse, fruit de nombreuses années d'expérience dans l'ingénierie
              structurelle et la conception d'ouvrages complexes.
            </p>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Notre <span className="text-[#C9A568]">Processus</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Une méthodologie éprouvée en quatre étapes clés pour garantir la réussite de vos projets d'ingénierie
              structurelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={step.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 left-4 bg-[#C9A568] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {step.id}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-6 h-6 text-[#C9A568]" />
                      <h3 className="text-lg font-bold group-hover:text-[#C9A568] transition-colors">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-justify">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compétences clés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Compétences <span className="text-[#C9A568]">Clés</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Six domaines d'excellence qui fondent notre expertise et garantissent la qualité de nos prestations
              d'ingénierie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keySkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#C9A568] p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-[#C9A568] transition-colors">
                          {skill.title}
                        </h3>
                        <p className="text-gray-600 text-justify">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Certifications & <span className="text-[#C9A568]">Qualifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Ingénieurs certifiés issus des plus grandes écoles françaises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 border-0 bg-white">
              <div className="relative h-16 mb-4 mx-auto w-24">
                <Image src="/images/logo-iso9001.png" alt="ISO 9001" fill className="object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2">Qualité ISO 9001</h3>
              <p className="text-gray-600 text-justify">Management de la qualité certifié</p>
            </Card>

            <Card className="text-center p-8 border-0 bg-white">
              <div className="relative h-16 mb-4 mx-auto w-24">
                <Image src="/images/logo-cstb.png" alt="CSTB" fill className="object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2">Agréé CSTB</h3>
              <p className="text-gray-600 text-justify">Centre Scientifique et Technique du Bâtiment</p>
            </Card>

            <Card className="text-center p-8 border-0 bg-white">
              <div className="relative h-16 mb-4 mx-auto w-24">
                <Image src="/images/logo-hqe.png" alt="HQE" fill className="object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2">Démarche HQE</h3>
              <p className="text-gray-600 text-justify">Haute Qualité Environnementale</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Équipe terrain */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Équipe <span className="text-[#C9A568]">Terrain</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-justify">
                Notre équipe d'ingénieurs expérimentés intervient directement sur vos chantiers pour garantir la
                parfaite exécution des études et le respect des prescriptions techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A568]" />
                  <span>Suivi technique personnalisé</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A568]" />
                  <span>Réactivité et disponibilité</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A568]" />
                  <span>Expertise technique reconnue</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/Expertise_EquipeTerrain_ChantierAction.png"
                alt="Équipe terrain en action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
