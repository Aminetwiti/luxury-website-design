"use client"

import { Building2, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/images/Footer_Engineering_Network.jpg" alt="Pattern" fill className="object-cover" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Building2 className="w-8 h-8 text-[#C9A568]" />
                <span className="text-2xl font-bold">B.E Structiba</span>
              </div>
              <p className="text-gray-300 text-justify leading-relaxed">
                Bureau d'études spécialisé en ingénierie structurelle depuis plus de 15 ans. Expertise reconnue en
                construction neuve, réhabilitation et développement durable.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[#C9A568] transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#C9A568] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#C9A568] transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C9A568]">Nos Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/construction-neuve" className="text-gray-300 hover:text-white transition-colors">
                    Construction Neuve
                  </Link>
                </li>
                <li>
                  <Link href="/rehabilitation" className="text-gray-300 hover:text-white transition-colors">
                    Réhabilitation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Ingénierie Parasismique
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Ouvrages Extérieurs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C9A568]">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-gray-300 hover:text-white transition-colors">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link href="/realisations" className="text-gray-300 hover:text-white transition-colors">
                    Réalisations
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C9A568]">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#C9A568] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">263 Avenue de Grasse</p>
                    <p className="text-gray-300">06400 Cannes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#C9A568]" />
                  <a href="tel:+33668842010" className="text-gray-300 hover:text-[#C9A568] transition-colors">
                    +33 6 68 84 20 10
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#C9A568]" />
                  <p className="text-gray-300">contact@structiba.fr</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">© 2024 B.E Structiba. Tous droits réservés.</p>
              <div className="flex space-x-6 text-sm">
                <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
                <Link href="/cgv" className="text-gray-400 hover:text-white transition-colors">
                  CGV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
