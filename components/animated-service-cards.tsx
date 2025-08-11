"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { copy } from "@/lib/copy"
import { Card3D, useScrollAnimation, useIsMobile } from "./3d-animations"
import { useState } from "react"

type Service = {
  title: string
  href: string
  iconSrc: string
  imageSrc: string
  description: string
  alt: string
}

const services: Service[] = [
  {
    title: copy.home.services.items.rehabilitation.subtitle,
    href: "/rehabilitation",
    iconSrc: "/images/Services_Icon_Rehabilitation.png",
    imageSrc: "/images/Services_Rehabilitation_ChantierTechnique.png",
    description: copy.home.services.items.rehabilitation.description,
    alt: "Réhabilitation — transformation d'un bâtiment ancien",
  },
  {
    title: copy.home.services.items.neuf.subtitle,
    href: "/construction-neuve",
    iconSrc: "/images/Services_Icon_ConstructionNeuve.png",
    imageSrc: "/images/Services_ConstructionNeuve_VillaConcept.png",
    description: copy.home.services.items.neuf.description,
    alt: "Construction neuve — villa contemporaine d'exception",
  },
  {
    title: copy.home.services.items.durable.subtitle,
    href: "/developpement-durable",
    iconSrc: "/images/Services_Icon_Durable.png",
    imageSrc: "/images/Services_Durable_TextureChanvreBois.png",
    description: copy.home.services.items.durable.description,
    alt: "Développement durable — matériaux écologiques nobles",
  },
]

export default function AnimatedServiceCards() {
  const scrollRef = useScrollAnimation()
  const isMobile = useIsMobile()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={scrollRef}
      className="container mx-auto px-4 py-12 md:py-20 opacity-0 translate-y-8 transition-all duration-1000 animate-in"
      aria-label="Trois services principaux"
    >
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          {copy.home.services.title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trois domaines d'excellence pour répondre à tous vos projets architecturaux
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, index) => (
          <Card3D key={s.href} disabled={isMobile}>
            <Link
              href={s.href}
              className="group block rounded-3xl overflow-hidden border border-[var(--lux-border)] bg-white hover:shadow-xl transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={s.imageSrc || "/placeholder.svg"}
                  alt={s.alt}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-300"
                  style={{
                    opacity: hoveredIndex === index ? 0.9 : 0.7,
                  }}
                />

                {/* Icône avec animation 3D */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                      hoveredIndex === index && !isMobile ? "rotate-12 scale-110" : ""
                    }`}
                  >
                    <Image src={s.iconSrc || "/placeholder.svg"} alt="" width={24} height={24} />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xl font-medium transition-transform duration-300"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        transform: hoveredIndex === index && !isMobile ? "translateX(4px)" : "translateX(0)",
                      }}
                    >
                      {s.title}
                    </span>
                    <ArrowUpRight
                      className={`size-5 transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100 translate-x-1 -translate-y-1" : "opacity-80"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </Link>
          </Card3D>
        ))}
      </div>
    </section>
  )
}
