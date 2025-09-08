"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, Wrench, Leaf } from "lucide-react"

export function ServiceTrio() {
  const services = [
    {
      id: "construction-neuve",
      title: "Construction Neuve",
      subtitle: "Phase AVP & Exécution",
      description: "Conception et réalisation de structures d'exception avec une expertise technique pointue.",
      features: ["Plans d'avant-projet", "Calculs de structure", "Suivi de chantier", "Coordination technique"],
      image: "/service-construction-neuve.jpg",
      imageAlt:
        "Villa moderne en construction avec structure béton élégante, chantier propre et organisé, architecture contemporaine de luxe",
      icon: Building,
      color: "from-blue-600 to-blue-800",
      href: "/construction-neuve",
    },
    {
      id: "rehabilitation",
      title: "Réhabilitation",
      subtitle: "Renforcement & Transformation",
      description: "Expertise en renforcement structurel et transformation de bâtiments existants.",
      features: ["Diagnostic structure", "Renforcement béton", "Extension bâtiment", "Mise aux normes"],
      image: "/service-rehabilitation.jpg",
      imageAlt:
        "Réhabilitation élégante d'un bâtiment historique, mélange architecture ancienne et moderne, travaux de renforcement structurel visible",
      icon: Wrench,
      color: "from-orange-600 to-red-600",
      href: "/rehabilitation",
    },
    {
      id: "developpement-durable",
      title: "Développement Durable",
      subtitle: "Éco-Construction",
      description: "Solutions innovantes pour une construction respectueuse de l'environnement.",
      features: ["Matériaux biosourcés", "Performance énergétique", "Certification HQE", "Innovation durable"],
      image: "/service-eco-construction.jpg",
      imageAlt:
        "Construction écologique moderne avec matériaux naturels, panneaux solaires, végétalisation, architecture bioclimatique durable",
      icon: Leaf,
      color: "from-green-600 to-emerald-600",
      href: "/developpement-durable",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Nos Services d'Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trois domaines d'expertise pour répondre à tous vos besoins en ingénierie structurelle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C9A568]/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#C9A568]" />
                  </div>
                </div>

                {/* Service Number */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-[#C9A568] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3
                    className="text-2xl font-bold text-[#1C1C1C] mb-2"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#C9A568] font-medium text-sm uppercase tracking-wide">{service.subtitle}</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#C9A568] rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#C9A568] hover:text-[#B8941F] font-medium transition-colors duration-200 group/link"
                >
                  <span>Découvrir ce service</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C9A568]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-[#C9A568] hover:bg-[#B8941F] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
          >
            Voir Tous Nos Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceTrio
