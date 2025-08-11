"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "./3d-animations"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export default function AnimatedHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsLoaded(true)
    const onScroll = () => setScrolled(window.scrollY > 10)
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
        "sticky top-0 z-50 transition-all duration-500 transform-gpu",
        scrolled ? "backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-lg" : "bg-transparent",
        isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
      )}
      aria-label="En-tête du site"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo avec animation */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={cn(
                "size-6 rounded-full bg-[var(--lux-gold)] transition-all duration-500 transform-gpu",
                !isMobile && "group-hover:scale-110 group-hover:rotate-12",
              )}
              aria-hidden
            />
            <span
              className={cn(
                "text-xl tracking-wide transition-all duration-300",
                !isMobile && "group-hover:text-[var(--lux-gold)]",
              )}
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Atelier Structure
            </span>
            <span className="sr-only">Aller à l'accueil</span>
          </Link>

          {/* Navigation desktop avec animations */}
          <nav className="hidden lg:flex items-center gap-8">
            {main.map((item, index) =>
              item.label === "Services" ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger
                    className={cn(
                      "inline-flex items-center gap-1 text-sm hover:text-[var(--lux-gold)] transition-all duration-300 transform-gpu",
                      !isMobile && "hover:scale-105",
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                    <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className={cn(
                      "min-w-64 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2",
                      "border-[var(--lux-border)] bg-white/95 backdrop-blur-md",
                    )}
                  >
                    {services.map((group, gi) => (
                      <div key={group.label}>
                        <DropdownMenuLabel className="flex items-center justify-between">
                          <Link
                            href={group.href}
                            className="hover:text-[var(--lux-gold)] transition-colors duration-200"
                          >
                            {group.label}
                          </Link>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {group.subs.map((s) => (
                          <DropdownMenuItem key={s.href} asChild>
                            <Link href={s.href} className="transition-all duration-200 hover:bg-[var(--lux-gold)]/10">
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
                    "text-sm hover:text-[var(--lux-gold)] transition-all duration-300 transform-gpu relative",
                    !isMobile && "hover:scale-105",
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--lux-gold)] transition-all duration-300 hover:w-full" />
                </Link>
              ),
            )}
          </nav>

          {/* CTA Button avec animation */}
          <div className="hidden lg:block">
            <Button
              asChild
              className={cn(
                "bg-[var(--lux-gold)] text-[var(--lux-text)] hover:opacity-90 rounded-full px-5 transition-all duration-300 transform-gpu shadow-lg",
                !isMobile && "hover:scale-105 hover:shadow-xl",
                isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
              )}
              style={{ transitionDelay: "600ms" }}
            >
              <Link href="/contact">Demander un diagnostic</Link>
            </Button>
          </div>

          {/* Menu mobile avec animation */}
          <button
            className={cn(
              "lg:hidden p-2 -mr-2 transition-all duration-300 transform-gpu",
              !isMobile && "hover:scale-110 hover:rotate-12",
            )}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  "size-6 absolute transition-all duration-300 transform-gpu",
                  open ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
                )}
              />
              <X
                className={cn(
                  "size-6 absolute transition-all duration-300 transform-gpu",
                  open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile drawer avec animations */}
        <div
          className={cn(
            "lg:hidden origin-top transition-all duration-500 transform-gpu overflow-hidden",
            open ? "scale-y-100 opacity-100 max-h-96" : "scale-y-0 opacity-0 max-h-0",
          )}
        >
          <nav className="flex flex-col gap-3 pb-4 pt-2">
            {main.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-3 px-2 border-b border-[var(--lux-border)] hover:text-[var(--lux-gold)] transition-all duration-300 transform-gpu",
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Services nested avec animation */}
            <div
              className={cn(
                "py-2 transition-all duration-500 transform-gpu",
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
              )}
              style={{ transitionDelay: "600ms" }}
            >
              <p className="text-xs text-muted-foreground mb-2">Sous‑menus</p>
              <div className="grid grid-cols-2 gap-3">
                {services
                  .flatMap((g) => g.subs)
                  .map((s, index) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={cn(
                        "text-sm border border-[var(--lux-border)] rounded-full px-3 py-2 text-center transition-all duration-300 transform-gpu hover:border-[var(--lux-gold)] hover:bg-[var(--lux-gold)]/5",
                        open ? "scale-100 opacity-100" : "scale-95 opacity-0",
                      )}
                      style={{ transitionDelay: `${700 + index * 50}ms` }}
                      onClick={() => setOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
              </div>
            </div>

            <Button
              asChild
              className={cn(
                "mt-2 bg-[var(--lux-gold)] text-[var(--lux-text)] hover:opacity-90 rounded-full transition-all duration-500 transform-gpu",
                open ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95",
              )}
              style={{ transitionDelay: "800ms" }}
            >
              <Link href="/contact" onClick={() => setOpen(false)}>
                Demander un diagnostic
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
