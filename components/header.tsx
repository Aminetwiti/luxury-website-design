"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import EnhancedLogo from "./enhanced-logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    { name: "Construction Neuve", href: "/construction-neuve" },
    { name: "Réhabilitation", href: "/rehabilitation" },
    { name: "Ingénierie Parasismique", href: "/ingenierie-parasismique" },
    { name: "Ouvrages Extérieurs", href: "/ouvrages-exterieurs" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <EnhancedLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium">
              Accueil
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#C9A568] transition-colors font-medium">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#C9A568] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/expertise" className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium">
              Expertise
            </Link>
            <Link href="/realisations" className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium">
              Réalisations
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-[#C9A568] hover:bg-[#B8941F] text-white">
              <Link href="/contact">Devis gratuit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#C9A568] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#C9A568] transition-colors font-medium"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-gray-600 hover:text-[#C9A568] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/expertise"
                className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Expertise
              </Link>
              <Link
                href="/realisations"
                className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Réalisations
              </Link>
              <Link
                href="/a-propos"
                className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="bg-[#C9A568] hover:bg-[#B8941F] text-white w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Devis gratuit
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
