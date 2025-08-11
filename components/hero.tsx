"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  src?: string
  imageAlt?: string
}

export default function Hero({
  title = "Ingénierie d'exception, construction durable",
  subtitle = "Atelier Structure",
  description = "Expertise technique et vision architecturale pour vos projets les plus ambitieux. Réhabilitation, construction neuve et solutions bas carbone.",
  ctaLabel = "Découvrir nos réalisations",
  ctaHref = "/realisations",
  src = "/images/Hero_Video_Drone_Villa_Sunset.png",
  imageAlt = "Vue aérienne d'une villa contemporaine au coucher du soleil, démontrant l'excellence architecturale d'Atelier Structure",
}: HeroProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src={src || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" aria-hidden="true" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <div
            className={cn(
              "mb-4 transition-all duration-1000 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <span
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
              role="text"
              aria-label={`Nom de l'entreprise : ${subtitle}`}
            >
              {subtitle}
            </span>
          </div>

          {/* Title */}
          <h1
            id="hero-title"
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-500",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
            role="text"
            aria-describedby="hero-title"
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <Button
              asChild
              size="lg"
              className="bg-[var(--lux-gold)] text-[var(--lux-text)] hover:opacity-90 rounded-full px-8 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 focus-visible min-h-[56px]"
            >
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2"
                aria-label={`${ctaLabel} - Voir nos projets réalisés`}
              >
                {ctaLabel}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 focus-visible min-h-[56px] bg-transparent"
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              aria-label={isVideoPlaying ? "Mettre en pause la présentation vidéo" : "Lancer la présentation vidéo"}
              aria-pressed={isVideoPlaying}
            >
              <span className="inline-flex items-center gap-2">
                {isVideoPlaying ? (
                  <Pause className="size-5" aria-hidden="true" />
                ) : (
                  <Play className="size-5" aria-hidden="true" />
                )}
                {isVideoPlaying ? "Pause" : "Voir la vidéo"}
              </span>
            </Button>
          </div>

          {/* Indicateurs de scroll */}
          <div
            className={cn(
              "absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
            aria-hidden="true"
          >
            <div className="flex flex-col items-center gap-2 text-white/70">
              <span className="text-sm">Découvrir</span>
              <div className="w-px h-8 bg-white/30 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" aria-hidden="true" />
    </section>
  )
}
