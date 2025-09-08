"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import EnhancedLogo from "./enhanced-logo"

const navigation = [
  {
    name: "Nos Services",
    href: "/services",
    submenu: [
      { name: "Construction Neuve", href: "/construction-neuve", description: "Phases AVP et Exécution" },
      { name: "Réhabilitation", href: "/rehabilitation", description: "Renforcement et transformation" },
      { name: "Développement Durable", href: "/developpement-durable", description: "Solutions éco-responsables" },
    ],
  },
  { name: "Notre Expertise", href: "/expertise" },
  { name: "Nos Réalisations", href: "/realisations" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4" aria-label="Navigation principale">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <EnhancedLogo variant="full" showSubtitle={false} />

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-[#C9A568] transition-colors font-medium"
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Submenu */}
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200",
                        activeSubmenu === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2",
                      )}
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{subitem.name}</div>
                          <div className="text-sm text-gray-600">{subitem.description}</div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-[#C9A568] text-white px-6 py-2 rounded-full hover:bg-[#B8941F] transition-colors font-medium"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0",
          )}
        >
          <div className="space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                      onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn("w-4 h-4 transition-transform", activeSubmenu === item.name && "rotate-180")}
                        />
                      </div>
                    </button>

                    {activeSubmenu === item.name && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="block w-full text-center bg-[#C9A568] text-white px-6 py-3 rounded-full hover:bg-[#B8941F] transition-colors font-medium mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Devis Gratuit
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
