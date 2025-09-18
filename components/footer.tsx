import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo-structiba-beige.png"
                alt="Structiba Logo"
                width={180}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Bureau d'études spécialisé en structure et béton armé. Expertise technique et innovation au service de vos
              projets architecturaux.
            </p>
            
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-[#C9A568]">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/construction-neuve"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm sm:text-base"
                >
                  Construction Neuve
                </Link>
              </li>
              <li>
                <Link
                  href="/rehabilitation"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm sm:text-base"
                >
                  Réhabilitation
                </Link>
              </li>
              <li>
                <Link
                  href="/ingenierie-parasismique"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm sm:text-base"
                >
                  Ingénierie Parasismique
                </Link>
              </li>
              <li>
                <Link
                  href="/ouvrages-exterieurs"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm sm:text-base"
                >
                  Ouvrages Extérieurs
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-[#C9A568]">Zones d'intervention</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm sm:text-base"
                >
                  PACA & Côte d'Azur
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm sm:text-base"
                >
                  Île-de-France
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm sm:text-base"
                >
                  Antilles-Guyane
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm sm:text-base"
                >
                  Études à distance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-[#C9A568]">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A568] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <p>Siège social :</p>
                  <p>Nice, Côte d'Azur</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9A568] flex-shrink-0" />
                <a
                  href="tel:+33668842010"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm sm:text-base"
                >
                  06 68 84 20 10
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A568] flex-shrink-0" />
                <a
                  href="mailto:contact@structiba.fr"
                  className="text-gray-300 hover:text-[#C9A568] transition-colors text-sm sm:text-base"
                >
                  rb@structiba.fr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C9A568] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <p>Lun-Ven : 8h-18h</p>
                  <p>Première réponse : 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left">
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
            <p className="text-gray-400 text-sm text-center sm:text-right">© 2024 Structiba. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
