"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import EnhancedLogo from "./enhanced-logo"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex justify-center md:justify-start mb-6">
              <EnhancedLogo size="xxl" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Bureau d'études spécialisé en ingénierie structurelle et béton armé. Nous accompagnons vos projets de
              construction neuve et de réhabilitation avec expertise et innovation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/construction-neuve"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm"
                >
                  Construction Neuve
                </Link>
              </li>
              <li>
                <Link href="/rehabilitation" className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm">
                  Réhabilitation
                </Link>
              </li>
              <li>
                <Link
                  href="/ingenierie-parasismique"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm"
                >
                  Ingénierie Parasismique
                </Link>
              </li>
              <li>
                <Link
                  href="/ouvrages-exterieurs"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm"
                >
                  Ouvrages Extérieurs
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Zones d'intervention</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Alpes-Maritimes (06)</li>
              <li className="text-gray-300 text-sm">Var (83)</li>
              <li className="text-gray-300 text-sm">Bouches-du-Rhône (13)</li>
              <li className="text-gray-300 text-sm">Antilles françaises</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#C9A568] mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  263 Avenue de Grasse
                  <br />
                  06400 Cannes
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#C9A568] flex-shrink-0" />
                <a href="tel:+33668842010" className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm">
                  +33 6 68 84 20 10
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#C9A568] flex-shrink-0" />
                <a
                  href="mailto:contact@structiba.fr"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm"
                >
                  contact@structiba.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© 2024 B.E Structiba. Tous droits réservés.</div>
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
