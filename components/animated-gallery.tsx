"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Eye } from "lucide-react"
import { copy } from "@/lib/copy"
import { Card3D, useScrollAnimation, useIsMobile } from "./3d-animations"
import { useState } from "react"

type Project = {
  title: keyof typeof copy.realisations.items | "Penthouse V."
  location: string
  type: string
  href: string
  src: string
  alt: string
  description: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Villa Horizon",
    location: "Saint‑Tropez",
    type: "Construction neuve",
    href: "/realisations",
    src: "/images/Projets_Villa_Moderne_Facade.png",
    alt: "Villa Horizon — façade contemporaine exceptionnelle",
    description: copy.realisations.items["Villa Horizon"],
    featured: true,
  },
  {
    title: "Hôtel Particulier",
    location: "Paris 7e",
    type: "Réhabilitation",
    href: "/realisations",
    src: "/images/Projets_Interieur_Salon_Design.png",
    alt: "Hôtel Particulier — salon design après rénovation",
    description: copy.realisations.items["Hôtel Particulier"],
  },
  {
    title: "Eco‑Lodge",
    location: "Martinique",
    type: "Développement durable",
    href: "/realisations",
    src: "/images/Projets_Detail_Escalier_Suspendu.png",
    alt: "Eco‑Lodge — détail architectural escalier suspendu",
    description: copy.realisations.items["Eco‑Lodge"],
  },
  {
    title: "Penthouse V.",
    location: "Monaco",
    type: "Réhabilitation",
    href: "/realisations",
    src: "/images/Projets_Jardin_Contemporain.png",
    alt: "Penthouse — jardin contemporain en terrasse",
    description: copy.realisations.items["Penthouse V."],
  },
]

export default function AnimatedGallery() {
  const scrollRef = useScrollAnimation()
  const isMobile = useIsMobile()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={scrollRef}
      className="container mx-auto px-4 py-12 md:py-20 opacity-0 translate-y-8 transition-all duration-1000 animate-in"
      aria-label="Projets récents"
    >
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Projets récents
          </h2>
          <p className="text-muted-foreground">Découvrez nos dernières réalisations d'exception</p>
        </div>
        <Link
          href="/realisations"
          className="inline-flex items-center gap-2 text-sm hover:text-[var(--lux-gold)] transition-colors group"
        >
          Tout voir
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {projects.map((p, i) => (
          <Card3D key={i} disabled={isMobile} className={`${p.featured ? "lg:col-span-8" : "lg:col-span-4"}`}>
            <Link
              href={p.href}
              className="group block rounded-3xl overflow-hidden border border-[var(--lux-border)] bg-white hover:shadow-xl transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative overflow-hidden ${p.featured ? "h-80" : "h-64"}`}>
                <Image
                  src={p.src || "/placeholder.svg"}
                  alt={p.alt}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredIndex === i ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300"
                  style={{
                    opacity: hoveredIndex === i ? 0.8 : 0.6,
                  }}
                />

                {/* Icône d'aperçu avec animation */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === i ? "opacity-100 scale-110" : "opacity-0 scale-90"
                    }`}
                  >
                    <Eye className="size-5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-start justify-between">
                    <div
                      className="transition-transform duration-300"
                      style={{
                        transform: hoveredIndex === i && !isMobile ? "translateY(-4px)" : "translateY(0)",
                      }}
                    >
                      <p className="text-xs text-white/80 mb-1">{p.type}</p>
                      <p
                        className={`font-medium ${p.featured ? "text-2xl" : "text-lg"}`}
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        {p.title}
                      </p>
                      <p className="text-sm text-white/90 mt-1">{p.location}</p>
                    </div>
                    <ArrowUpRight
                      className={`size-5 transition-all duration-300 ${
                        hoveredIndex === i ? "opacity-100 translate-x-1 -translate-y-1" : "opacity-80"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </Card3D>
        ))}
      </div>
    </section>
  )
}
