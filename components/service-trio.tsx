import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Wrench, Shield, Waves } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "construction-neuve",
    title: "Construction Neuve",
    description:
      "De la phase Avant-Projet à l'exécution, nous optimisons vos structures avec conseil technique personnalisé.",
    image: "/images/Services_ConstructionNeuve_VillaConcept.png",
    icon: Building2,
    features: [
      "Phase Avant-Projet",
      "Phase Exécution",
      "Optimisation Structurelle et économique",
      "Assistance technique et conseil en conception",
    ],
    href: "/construction-neuve",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "rehabilitation",
    title: "Réhabilitation",
    description:
      "Diagnostic de l'existant, ouvertures de murs porteurs, renforcement structurel et création de trémies.",
    image: "/images/Services_Rehabilitation_ChantierTechnique.png",
    icon: Wrench,
    features: [
      "Ouvertures de murs porteurs",
      "Diagnostic de l'existant",
      "Renforcement Structurel",
      "Ouvertures et fermetures de trémies",
    ],
    href: "/rehabilitation",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "ingenierie-parasismique",
    title: "Ingénierie Parasismique",
    description: "Études sismiques selon Eurocode 8, modélisation 3D avancée et optimisation des structures.",
    image: "/images/Expertise_Schema_TechniqueMinimal.png",
    icon: Shield,
    features: [
      "Études sismiques et dimensionnement selon Eurocode 8",
      "Conception et analyse en modélisation 3D avancée",
      "Optimisations des structures",
      "Sécurité et Conformité",
    ],
    href: "/ingenierie-parasismique",
    color: "from-red-500 to-red-600",
  },
  {
    id: "ouvrages-exterieurs",
    title: "Ouvrages Extérieurs",
    description: "Piscines, murs de soutènement, terrasses et aménagements techniques extérieurs sur mesure.",
    image: "/images/Villa_Antibes_Piscine_Naturelle.png",
    icon: Waves,
    features: [
      "Piscines et bassins",
      "Murs de soutènement",
      "Terrasses et extensions",
      "Aménagements techniques extérieurs",
    ],
    href: "/ouvrages-exterieurs",
    color: "from-teal-500 to-teal-600",
  },
]

export default function ServiceTrio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos Domaines d'Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Quatre pôles de compétences pour répondre à tous vos besoins en ingénierie structurelle, de la conception à
            la réalisation de vos projets les plus ambitieux.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`} />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 text-justify leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#C9A568] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-[#C9A568] hover:bg-[#B8941F] text-white">
                  <Link href={service.href} className="flex items-center justify-center">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA global */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Un projet en tête ?</h3>
            <p className="text-gray-600 mb-6 text-justify max-w-2xl mx-auto">
              Nos ingénieurs vous accompagnent dans l'analyse de faisabilité et la conception de solutions techniques
              optimisées pour votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#C9A568] hover:bg-[#B8941F] text-white">
                <Link href="/contact" className="flex items-center">
                  Devis Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="tel:+33493123456">Appeler : 04 93 12 34 56</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
