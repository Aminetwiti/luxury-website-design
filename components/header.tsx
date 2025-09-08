"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Accueil", href: "/" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Construction Neuve", href: "/construction-neuve", description: "Phase AVP et Exécution" },
        { name: "Réhabilitation", href: "/rehabilitation", description: "Renforcement et Modification" },
        { name: "Développement Durable", href: "/developpement-durable", description: "Éco-construction" },
      ],
    },
    { name: "Expertise", href: "/expertise" },
    { name: "Réalisations", href: "/realisations" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = "unset"
  }

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <div
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isScrolled ? "bg-[#1C1C1C] text-white" : "bg-[#1C1C1C] text-white"
                }`}
              >
                <span
                  className="font-bold text-lg md:text-xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  B.E StructiBA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                          pathname.startsWith(item.href)
                            ? isScrolled
                              ? "text-[#C9A568] bg-[#C9A568]/10"
                              : "text-[#C9A568] bg-white/10"
                            : isScrolled
                              ? "text-gray-700 hover:text-[#C9A568] hover:bg-[#C9A568]/10"
                              : "text-white hover:text-[#C9A568] hover:bg-white/10"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200/20 overflow-hidden transition-all duration-200 ${
                          activeDropdown === item.name
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible translate-y-2"
                        }`}
                      >
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block p-4 rounded-lg hover:bg-[#C9A568]/10 transition-colors duration-200 group"
                            >
                              <div className="font-medium text-gray-900 group-hover:text-[#C9A568] transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">{subItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                        pathname === item.href
                          ? isScrolled
                            ? "text-[#C9A568] bg-[#C9A568]/10"
                            : "text-[#C9A568] bg-white/10"
                          : isScrolled
                            ? "text-gray-700 hover:text-[#C9A568] hover:bg-[#C9A568]/10"
                            : "text-white hover:text-[#C9A568] hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className={`flex items-center space-x-2 ${isScrolled ? "text-gray-600" : "text-white/80"}`}>
                  <Phone className="w-4 h-4" />
                  <span>+33 4 XX XX XX XX</span>
                </div>
              </div>
              <Button
                asChild
                className="bg-[#C9A568] hover:bg-[#B8941F] text-white border-none font-medium px-6 py-2 transition-all duration-200 hover:scale-105"
              >
                <Link href="/contact">Devis Gratuit</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="bg-[#1C1C1C] px-4 py-2 rounded-lg">
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  B.E StructiBA
                </span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full p-3 rounded-lg text-left font-medium text-gray-900 hover:bg-[#C9A568]/10 transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          activeDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={closeMenu}
                              className="block p-3 rounded-lg text-gray-700 hover:text-[#C9A568] hover:bg-[#C9A568]/10 transition-colors duration-200"
                            >
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-sm text-gray-500 mt-1">{subItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block p-3 rounded-lg font-medium transition-colors duration-200 ${
                        pathname === item.href
                          ? "text-[#C9A568] bg-[#C9A568]/10"
                          : "text-gray-900 hover:text-[#C9A568] hover:bg-[#C9A568]/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Contact & CTA */}
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>+33 4 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>contact@structiba.fr</span>
              </div>
              <Button
                asChild
                className="w-full bg-[#C9A568] hover:bg-[#B8941F] text-white border-none font-medium py-3 mt-4"
              >
                <Link href="/contact" onClick={closeMenu}>
                  Demander un Devis Gratuit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
