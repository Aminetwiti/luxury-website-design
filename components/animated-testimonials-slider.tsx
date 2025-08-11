"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { useScrollAnimation, useIsMobile, Card3D } from "./3d-animations"
import { cn } from "@/lib/utils"

const items = [
  {
    name: "S. Delacroix",
    role: "Propriétaire — Paris 7e",
    quote: "Rigueur rare. Ouvertures de murs porteurs, renforts invisibles, finitions impeccables. Confiance absolue.",
    avatar: "/images/Testimonials_Portrait_Client1_BW.png",
    rating: 5,
    project: "Hôtel Particulier",
  },
  {
    name: "Atelier L.",
    role: "Agence d'architecture — PACA",
    quote: "Coordination chantier exemplaire et expertise structurelle pointue. Délais tenus, rendu impeccable.",
    avatar: "/images/Testimonials_Portrait_Client2_BW.png",
    rating: 5,
    project: "Villa Horizon",
  },
  {
    name: "C. Moreau",
    role: "Promoteur — Antilles",
    quote: "Solutions bas carbone pertinentes, sans compromis esthétique. Un référent technique fiable et exigeant.",
    avatar: "/images/Testimonials_Portrait_Client3_BW.png",
    rating: 5,
    project: "Eco-Lodge",
  },
]

export default function AnimatedTestimonialsSlider() {
  const scrollRef = useScrollAnimation()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isMobile = useIsMobile()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const scrollBy = (direction: -1 | 1) => {
    setIsAutoPlaying(false)
    const newIndex =
      direction === 1 ? (currentIndex + 1) % items.length : (currentIndex - 1 + items.length) % items.length
    setCurrentIndex(newIndex)

    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section
      ref={scrollRef}
      className="container mx-auto px-4 py-12 md:py-20 opacity-0 translate-y-8 transition-all duration-1000 animate-in"
      aria-label="Témoignages clients"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Ils nous font confiance
          </h2>
          <p className="text-muted-foreground">Découvrez les retours de nos clients sur nos projets d'exception</p>
        </div>

        {/* Navigation controls avec animations */}
        <div className="hidden md:flex gap-2">
          <button
            aria-label="Précédent"
            onClick={() => scrollBy(-1)}
            className={cn(
              "size-10 rounded-full border border-[var(--lux-border)] bg-white flex items-center justify-center transition-all duration-300 transform-gpu shadow-sm",
              !isMobile && "hover:scale-110 hover:shadow-lg hover:border-[var(--lux-gold)]",
            )}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            aria-label="Suivant"
            onClick={() => scrollBy(1)}
            className={cn(
              "size-10 rounded-full border border-[var(--lux-border)] bg-white flex items-center justify-center transition-all duration-300 transform-gpu shadow-sm",
              !isMobile && "hover:scale-110 hover:shadow-lg hover:border-[var(--lux-gold)]",
            )}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Testimonials avec animations 3D */}
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
          style={{
            transform: `translateX(-${currentIndex * (isMobile ? 90 : 33.33)}%)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {items.map((t, i) => (
            <Card3D key={i} disabled={isMobile} className="min-w-[85%] md:min-w-[45%] lg:min-w-[32%] snap-start">
              <figure className="rounded-3xl border border-[var(--lux-border)] bg-white p-8 hover:shadow-xl transition-all duration-500 h-full">
                {/* Header avec avatar et infos */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div
                      className={cn(
                        "relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--lux-border)] transition-all duration-300 transform-gpu",
                        !isMobile && "hover:scale-110 hover:border-[var(--lux-gold)]",
                      )}
                    >
                      <Image
                        src={t.avatar || "/placeholder.svg"}
                        alt={`Portrait de ${t.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Badge projet */}
                    <div className="absolute -bottom-1 -right-1 bg-[var(--lux-gold)] text-[var(--lux-text)] text-xs px-2 py-0.5 rounded-full font-medium">
                      {t.project}
                    </div>
                  </div>
                  <div>
                    <figcaption className="font-medium text-lg">{t.name}</figcaption>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                    {/* Rating avec animation */}
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className={cn(
                            "w-3 h-3 fill-[var(--lux-gold)] text-[var(--lux-gold)] transition-all duration-300 transform-gpu",
                            !isMobile && "hover:scale-125",
                          )}
                          style={{ transitionDelay: `${j * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote avec animation */}
                <div className="relative">
                  <Quote
                    className={cn(
                      "size-8 text-[var(--lux-gold)] mb-4 transition-all duration-500 transform-gpu",
                      !isMobile && "hover:scale-110 hover:rotate-12",
                    )}
                  />
                  <blockquote className="text-muted-foreground leading-relaxed italic">"{t.quote}"</blockquote>
                </div>

                {/* Decorative element */}
                <div className="mt-6 flex justify-end">
                  <div className="w-12 h-1 bg-gradient-to-r from-[var(--lux-gold)] to-transparent rounded-full" />
                </div>
              </figure>
            </Card3D>
          ))}
        </div>

        {/* Indicators avec animations */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i)
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 10000)
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 transform-gpu",
                i === currentIndex ? "bg-[var(--lux-gold)] scale-125" : "bg-gray-300 hover:bg-gray-400 hover:scale-110",
              )}
              aria-label={`Aller au témoignage ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="flex justify-center gap-4 mt-6 md:hidden">
        <button
          onClick={() => scrollBy(-1)}
          className="px-4 py-2 rounded-full border border-[var(--lux-border)] bg-white text-sm font-medium hover:border-[var(--lux-gold)] transition-all duration-300"
        >
          Précédent
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="px-4 py-2 rounded-full border border-[var(--lux-border)] bg-white text-sm font-medium hover:border-[var(--lux-gold)] transition-all duration-300"
        >
          Suivant
        </button>
      </div>
    </section>
  )
}
