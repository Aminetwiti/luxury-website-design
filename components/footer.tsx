"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, ArrowRight, Award, Leaf, Shield, MapPin, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Construction Neuve", href: "/construction-neuve" },
    { name: "Phase AVP", href: "/construction-neuve#avp" },
    { name: "Phase Exécution", href: "/construction-neuve#execution" },
    { name: "Réhabilitation", href: "/rehabilitation" },
    { name: "Renforcement Structure", href: "/rehabilitation#renforcement" },
    { name: "Développement Durable", href: "/developpement-durable" },
  ]

  const company = [
    { name: "À Propos", href: "/a-propos" },
    { name: "Notre Équipe", href: "/a-propos#equipe" },
    { name: "Nos Valeurs", href: "/a-propos#valeurs" },
    { name: "Expertise", href: "/expertise" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Contact", href: "/contact" },
  ]

  const zones = [
    { name: "Région PACA", description: "Marseille, Nice, Cannes, Antibes" },
    { name: "Saint-Barthélemy", description: "Projets tropicaux de luxe" },
    { name: "Saint-Martin", description: "Architecture caribéenne" },
    { name: "Paris", description: "Projets urbains d'exception" },
  ]

  const certifications = [
    { icon: Award, text: "Bureau Agréé" },
    { icon: Shield, text: "Assurance Pro" },
    { icon: Leaf, text: "Éco-Responsable" },
  ]

  return (
    <footer className="bg-[#1C1C1C] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/footer-pattern-luxury.jpg"
          alt="Motif architectural élégant en arrière-plan"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A568] via-[#C9A568]/50 to-transparent" />

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Obtenez un devis gratuit sous 48h pour votre projet de construction ou réhabilitation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#C9A568] hover:bg-[#B8941F] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-lg min-h-[56px]"
            >
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 rounded-lg mb-4" style={{ backgroundColor: "#C9A568" }}>
                <span
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  B.E StructiBA
                </span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Bureau d'études structurelles spécialisé dans les projets d'exception. Expertise technique et innovation
                au service de vos ambitions architecturales.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <cert.icon className="w-5 h-5 text-[#C9A568]" />
                  <span className="text-white/80 text-sm">{cert.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xl font-bold mb-6 text-[#C9A568]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-[#C9A568] transition-colors duration-200 text-sm flex items-center gap-2 group min-h-[44px] py-1"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3
              className="text-xl font-bold mb-6 text-[#C9A568]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Entreprise
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#C9A568] transition-colors duration-200 text-sm flex items-center gap-2 group min-h-[44px] py-1"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Zones */}
          <div>
            <h3
              className="text-xl font-bold mb-6 text-[#C9A568]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Contact & Zones
            </h3>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <a
                href="tel:+33423456789"
                className="flex items-start gap-3 text-white/70 hover:text-[#C9A568] transition-colors duration-200 min-h-[44px] py-1"
              >
                <Phone className="w-5 h-5 text-[#C9A568] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">+33 4 XX XX XX XX</p>
                  <p className="text-white/60 text-xs">Lun-Ven 9h-18h</p>
                </div>
              </a>
              <a
                href="mailto:contact@structiba.fr"
                className="flex items-start gap-3 text-white/70 hover:text-[#C9A568] transition-colors duration-200 min-h-[44px] py-1"
              >
                <Mail className="w-5 h-5 text-[#C9A568] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">contact@structiba.fr</p>
                  <p className="text-white/60 text-xs">Réponse sous 24h</p>
                </div>
              </a>
              <div className="flex items-start gap-3 min-h-[44px] py-1">
                <Clock className="w-5 h-5 text-[#C9A568] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Horaires</p>
                  <p className="text-white/60 text-xs">Lun-Ven 8h30-18h30</p>
                </div>
              </div>
            </div>

            {/* Zones */}
            <div className="space-y-3">
              <h4 className="text-white font-medium text-sm mb-3">Zones d'Intervention</h4>
              {zones.map((zone, index) => (
                <div key={index} className="flex items-start gap-3 min-h-[44px] py-1">
                  <MapPin className="w-4 h-4 text-[#C9A568] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/80 font-medium text-sm">{zone.name}</p>
                    <p className="text-white/60 text-xs">{zone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">© {currentYear} B.E StructiBA. Tous droits réservés.</div>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/mentions-legales"
                className="text-white/60 hover:text-[#C9A568] transition-colors min-h-[44px] flex items-center px-2"
              >
                Mentions Légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-white/60 hover:text-[#C9A568] transition-colors min-h-[44px] flex items-center px-2"
              >
                Confidentialité
              </Link>
              <Link
                href="/cgv"
                className="text-white/60 hover:text-[#C9A568] transition-colors min-h-[44px] flex items-center px-2"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border border-[#C9A568]/10 rounded-full -translate-x-16 translate-y-16 hidden lg:block" />
      <div className="absolute top-0 right-0 w-24 h-24 border border-[#C9A568]/10 rounded-full translate-x-12 -translate-y-12 hidden lg:block" />
    </footer>
  )
}

export default Footer
