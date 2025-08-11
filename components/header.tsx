"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const main = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/expertise", label: "Expertise" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ]

  const services = [
    {
      label: "Réhabilitation",
      href: "/rehabilitation",
      subs: [
        { label: "Ouverture trémie", href: "/services#ouverture-tremie" },
        { label: "Murs porteurs", href: "/services#murs-porteurs" },
        { label: "Renforcement", href: "/services#renforcement" },
        { label: "Soutènement", href: "/services#soutenement" },
        { label: "Diagnostic", href: "/services#diagnostic" },
      ],
    },
    {
      label: "Construction neuve",
      href: "/construction-neuve",
      subs: [
        { label: "AVP", href: "/construction-neuve#avp" },
        { label: "EXE", href: "/construction-neuve#exe" },
        { label: "Livraison", href: "/construction-neuve#livraison" },
      ],
    },
    {
      label: "Développement durable",
      href: "/developpement-durable",
      subs: [
        { label: "Béton chanvre", href: "/developpement-durable#chanvre" },
        { label: "Structure bois", href: "/developpement-durable#bois" },
        { label: "Bas carbone", href: "/developpement-durable#bascarbone" },
      ],
    },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100" : "bg-transparent",
      )}
      role="banner"
      aria-label="Navigation principale du site"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible"
            aria-label="Atelier Structure - Retour à l'accueil"
          >
            <div className="size-6 rounded-full bg-[var(--lux-gold)]" aria-hidden="true" role="img" />
            <span
              className={cn(
                "text-xl tracking-wide transition-colors duration-300",
                scrolled ? "text-gray-900" : "text-white",
              )}
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Atelier Structure
            </span>
          </Link>

          {/* Navigation principale - Desktop */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Menu principal">
            {main.map((item) =>
              item.label === "Services" ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger
                    className={cn(
                      "inline-flex items-center gap-1 text-sm hover:text-[var(--lux-gold)] transition-colors duration-300 focus-visible",
                      scrolled ? "text-gray-700" : "text-white/90",
                    )}
                    aria-label="Menu des services"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="min-w-64"
                    role="menu"
                    aria-label="Sous-menu des services"
                  >
                    {services.map((group, gi) => (
                      <div key={group.label}>
                        <DropdownMenuLabel className="flex items-center justify-between">
                          <Link
                            href={group.href}
                            className="hover:text-[var(--lux-gold)] focus-visible"
                            role="menuitem"
                          >
                            {group.label}
                          </Link>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {group.subs.map((s) => (
                          <DropdownMenuItem key={s.href} asChild>
                            <Link href={s.href} className="focus-visible" role="menuitem">
                              {s.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                        {gi < services.length - 1 && <DropdownMenuSeparator />}
                      </div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm hover:text-[var(--lux-gold)] transition-colors duration-300 focus-visible",
                    scrolled ? "text-gray-700" : "text-white/90",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[var(--lux-gold)] text-[var(--lux-text)] hover:opacity-90 rounded-full px-5 focus-visible"
            >
              <Link href="/contact" aria-label="Demander un diagnostic gratuit">
                Demander un diagnostic
              </Link>
            </Button>
          </div>

          {/* Menu mobile toggle */}
          <button
            className={cn(
              "lg:hidden p-2 -mr-2 transition-colors duration-300 focus-visible",
              scrolled ? "text-gray-700" : "text-white",
            )}
            aria-label={open ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Menu mobile */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden origin-top transition-all duration-300 overflow-hidden",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
          role="navigation"
          aria-label="Menu mobile"
          aria-hidden={!open}
        >
          <div className="bg-white/95 backdrop-blur-sm border-t border-gray-100 mt-2 rounded-lg">
            <nav className="flex flex-col gap-1 p-4">
              {main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 px-2 text-gray-700 hover:text-[var(--lux-gold)] hover:bg-gray-50 rounded-md transition-colors duration-200 focus-visible"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="py-2 border-t border-gray-100 mt-2">
                <p className="text-xs text-gray-500 mb-2 px-2">Services spécialisés</p>
                <div className="grid grid-cols-2 gap-2">
                  {services
                    .flatMap((g) => g.subs)
                    .map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="text-sm border border-gray-200 rounded-full px-3 py-2 text-center text-gray-600 hover:border-[var(--lux-gold)] hover:text-[var(--lux-gold)] transition-colors duration-200 focus-visible"
                        onClick={() => setOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                </div>
              </div>

              <Button
                asChild
                className="mt-4 bg-[var(--lux-gold)] text-[var(--lux-text)] hover:opacity-90 rounded-full focus-visible"
              >
                <Link href="/contact" onClick={() => setOpen(false)} aria-label="Demander un diagnostic gratuit">
                  Demander un diagnostic
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
