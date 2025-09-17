"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import EnhancedLogo from "./enhanced-logo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Expertise", href: "/expertise" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Construction Neuve", href: "/construction-neuve" },
        { name: "Réhabilitation", href: "/rehabilitation" },
        { name: "Ingénierie Parasismique", href: "/ingenierie-parasismique" },
        { name: "Ouvrages Extérieurs", href: "/ouvrages-exterieurs" },
      ],
    },
    { name: "Réalisations", href: "/realisations" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <EnhancedLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 text-gray-700 hover:text-[#C9A568] transition-colors font-medium px-3 py-2"
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 shadow-lg border border-gray-200">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link
                            href={subItem.href}
                            className="w-full px-3 py-2 text-sm text-gray-700 hover:text-[#C9A568] hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#C9A568] transition-colors font-medium px-3 py-2 rounded-md hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Button
              asChild
              className="bg-[#C9A568] hover:bg-[#B8941F] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2"
            >
              <Link href="/contact">Devis gratuit</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#C9A568] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#C9A568] hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-[#C9A568] hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-[#C9A568] hover:bg-[#B8941F] text-white">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Devis gratuit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
