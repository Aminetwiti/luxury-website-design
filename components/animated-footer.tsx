"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { useScrollAnimation, useIsMobile } from "./3d-animations"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function AnimatedFooter() {
  const scrollRef = useScrollAnimation()
  const isMobile = useIsMobile()
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-600" },
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:text-blue-500" },
  ]

  return (
    <footer
      ref={scrollRef}
      className="border-t border-[var(--lux-border)] mt-16 opacity-0 translate-y-8 transition-all duration-1000 animate-in"
    >
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        {/* Logo et description avec animation */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 group">
            <div
              className={cn(
                "size-5 rounded-full bg-[var(--lux-gold)] transition-all duration-500 transform-gpu",
                !isMobile && "group-hover:scale-110 group-hover:rotate-12",
              )}
              aria-hidden
            />
            <span
              className={cn("text-lg transition-all duration-300", !isMobile && "group-hover:text-[var(--lux-gold)]")}
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Atelier Structure
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ingénierie structurale & construction durable haut de gamme.
          </p>
        </div>

        {/* Navigation avec animations échelonnées */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/rehabilitation", label: "Réhabilitation" },
              { href: "/construction-neuve", label: "Construction neuve" },
              { href: "/developpement-durable", label: "Développement durable" },
              { href: "/realisations", label: "Réalisations" },
            ].map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-[var(--lux-gold)] transition-all duration-300 transform-gpu relative inline-block",
                    !isMobile && "hover:translate-x-1",
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[var(--lux-gold)] transition-all duration-300 hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Légal avec animations */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Légal</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "#", label: "Mentions légales" },
              { href: "#", label: "Politique de confidentialité" },
            ].map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-[var(--lux-gold)] transition-all duration-300 transform-gpu relative inline-block",
                    !isMobile && "hover:translate-x-1",
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[var(--lux-gold)] transition-all duration-300 hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Réseaux sociaux avec animations 3D */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Suivez-nous</h3>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                aria-label={social.label}
                href={social.href}
                className={cn(
                  "transition-all duration-300 transform-gpu",
                  social.color,
                  !isMobile && "hover:scale-125 hover:-rotate-12",
                )}
                onMouseEnter={() => setHoveredSocial(social.label)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <social.icon
                  className={cn(
                    "size-5 transition-all duration-300",
                    hoveredSocial === social.label && !isMobile ? "drop-shadow-lg" : "",
                  )}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright avec animation */}
      <div className="border-t border-[var(--lux-border)]">
        <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p className="transition-all duration-300 hover:text-[var(--lux-text)]">
            © {new Date().getFullYear()} Atelier Structure. Tous droits réservés.
          </p>
          <p className="transition-all duration-300 hover:text-[var(--lux-text)]">
            Conçu pour l'excellence technique et esthétique.
          </p>
        </div>
      </div>
    </footer>
  )
}
