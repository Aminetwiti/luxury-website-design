"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import EnhancedLogo from "./enhanced-logo"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <EnhancedLogo size="xxl" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-center md:text-left">
              Bureau d'études spécialisé en structure et béton armé, intervenant en construction neuve et
              réhabilitation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/construction-neuve" className="text-gray-300 hover:text-[#C9A568] transition-colors">
                  Construction Neuve
                </Link>
              </li>
              <li>
                <Link href="/rehabilitation" className="text-gray-300 hover:text-[#C9A568] transition-colors">
                  Réhabilitation
                </Link>
              </li>
              <li>
                <Link href="/ingenierie-parasismique" className="text-gray-300 hover:text-[#C9A568] transition-colors">
                  Ingénierie Parasismique
                </Link>
              </li>
              <li>
                <Link href="/ouvrages-exterieurs" className="text-gray-300 hover:text-[#C9A568] transition-colors">
                  Ouvrages Extérieurs
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Zones d'intervention</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Alpes-Maritimes (06)</li>
              <li>Var (83)</li>
              <li>Bouches-du-Rhône (13)</li>
              <li>Monaco</li>
              <li>Antilles françaises</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C9A568] flex-shrink-0" />
                <span className="text-gray-300 text-sm">263 Avenue de Grasse, 06400 Cannes</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A568] flex-shrink-0" />
                <a href="tel:+33668842010" className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm">
                  +33 6 68 84 20 10
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A568] flex-shrink-0" />
                <a
                  href="mailto:contact@bestructiba.fr"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm"
                >
                  contact@bestructiba.fr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C9A568] flex-shrink-0" />
                <span className="text-gray-300 text-sm">Lun-Ven: 8h-18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 B.E Structiba. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-[#C9A568] transition-colors text-sm">
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-[#C9A568] transition-colors text-sm"
              >
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-[#C9A568] transition-colors text-sm">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
