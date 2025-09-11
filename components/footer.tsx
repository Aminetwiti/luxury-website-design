"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import EnhancedLogo from "./enhanced-logo"

const services = [
  { name: "Construction Neuve", href: "/construction-neuve" },
  { name: "Réhabilitation", href: "/rehabilitation" },
  { name: "Ingénierie Parasismique", href: "/ingenierie-parasismique" },
  { name: "Ouvrages Extérieurs", href: "/ouvrages-exterieurs" },
]

const zones = [
  { name: "Cannes", description: "Siège social" },
  { name: "Nice", description: "Côte d'Azur" },
  { name: "Antibes", description: "Alpes-Maritimes" },
  { name: "Grasse", description: "Arrière-pays" },
  { name: "Antilles Françaises", description: "Projets spécialisés" },
]

const contacts = [
  { label: "Contact général", email: "contact@structiba.fr", icon: Mail },
  { label: "Études techniques", email: "etudes@structiba.fr", icon: Mail },
  { label: "Administration", email: "admin@structiba.fr", icon: Mail },
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Motif géométrique de fond */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #C9A568 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #C9A568 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative">
        {/* Section principale */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Logo et description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <EnhancedLogo variant="full" showSubtitle={true} />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                Bureau d'études spécialisé en structure et béton armé. Excellence technique et innovation au service de
                vos projets de construction neuve et réhabilitation.
              </p>

              {/* Horaires */}
              <div className="flex items-start space-x-3 text-gray-300">
                <Clock className="w-5 h-5 mt-1 text-[#C9A568]" />
                <div>
                  <p className="font-medium text-white">Horaires d'ouverture</p>
                  <p className="text-sm">Lun - Ven : 8h00 - 18h00</p>
                  <p className="text-sm">Sur rendez-vous : Sam matin</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Nos Domaines d'Expertise</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="group flex items-center text-gray-300 hover:text-[#C9A568] transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 p-4 bg-gradient-to-r from-[#C9A568]/20 to-transparent rounded-lg border border-[#C9A568]/30">
                <h4 className="font-semibold text-white mb-2">Projet en cours ?</h4>
                <p className="text-sm text-gray-300 mb-3">Devis gratuit sous 48h</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#C9A568] text-white px-4 py-2 rounded-full hover:bg-[#B8941F] transition-colors text-sm font-medium"
                >
                  Devis Gratuit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Zones d'intervention */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Zones d'Intervention</h3>
              <div className="space-y-4">
                {zones.map((zone) => (
                  <div key={zone.name} className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1 text-[#C9A568]" />
                    <div>
                      <h4 className="font-medium text-white">{zone.name}</h4>
                      <p className="text-sm text-gray-300">{zone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>

              {/* Adresse */}
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="w-5 h-5 mt-1 text-[#C9A568]" />
                <div>
                  <p className="font-medium text-white">Siège Social</p>
                  <p className="text-gray-300 text-sm">
                    263 Avenue de Grasse
                    <br />
                    06400 Cannes, France
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-center space-x-3 mb-6">
                <Phone className="w-5 h-5 text-[#C9A568]" />
                <div>
                  <p className="font-medium text-white">Téléphone</p>
                  <a href="tel:+33493123456" className="text-gray-300 hover:text-[#C9A568] transition-colors">
                    +33 4 93 12 34 56
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <div key={contact.email} className="flex items-center space-x-3">
                    <contact.icon className="w-4 h-4 text-[#C9A568]" />
                    <div>
                      <p className="text-xs text-gray-400">{contact.label}</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">© 2024 B.E StructiBA. Tous droits réservés.</p>
                <div className="flex space-x-4 text-sm">
                  <Link href="/mentions-legales" className="text-gray-400 hover:text-[#C9A568] transition-colors">
                    Mentions légales
                  </Link>
                  <Link
                    href="/politique-confidentialite"
                    className="text-gray-400 hover:text-[#C9A568] transition-colors"
                  >
                    Confidentialité
                  </Link>
                  <Link href="/cgv" className="text-gray-400 hover:text-[#C9A568] transition-colors">
                    CGV
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Ingénierie d'Excellence</span>
                <div className="w-2 h-2 bg-[#C9A568] rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">PACA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
