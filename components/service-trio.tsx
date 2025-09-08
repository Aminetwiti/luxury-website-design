import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Wrench, Leaf } from "lucide-react"

export default function ServiceTrio() {
  const services = [
    {
      icon: Building,
      title: "Construction Neuve",
      description:
        "Conception et réalisation de structures innovantes. De la phase AVP à l'exécution, nous accompagnons vos projets les plus ambitieux.",
      features: ["Phase AVP", "Phase Exécution", "Suivi de chantier", "Coordination technique"],
      image: "/images/Services_ConstructionNeuve_VillaConcept.png",
      href: "/construction-neuve",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Wrench,
      title: "Réhabilitation",
      description:
        "Renforcement et transformation de structures existantes. Expertise en ouverture de trémies, murs porteurs et mise aux normes.",
      features: ["Diagnostic structure", "Renforcement", "Ouverture trémies", "Mise aux normes"],
      image: "/images/Services_Rehabilitation_ChantierTechnique.png",
      href: "/rehabilitation",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Leaf,
      title: "Développement Durable",
      description:
        "Solutions éco-responsables et matériaux biosourcés. Construction passive, géothermie et optimisation énergétique.",
      features: ["Matériaux biosourcés", "Construction passive", "Géothermie", "Bilan carbone"],
      image: "/images/Services_Durable_TextureChanvreBois.png",
      href: "/developpement-durable",
      color: "from-green-500 to-green-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Nos Domaines d'Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trois piliers d'excellence pour répondre à tous vos besoins en ingénierie structurelle
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C9A568]/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#C9A568] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#C9A568] rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className="w-full bg-gray-900 hover:bg-[#C9A568] text-white border-none font-semibold py-3 transition-all duration-300 group-hover:scale-105"
                >
                  <Link href={service.href} className="flex items-center justify-center">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Besoin d'une expertise spécifique ? Nos ingénieurs sont à votre disposition.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="/expertise">Découvrir Notre Expertise</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
