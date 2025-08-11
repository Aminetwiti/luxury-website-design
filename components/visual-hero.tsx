"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

type VisualHeroProps = {
  title?: string
  subtitle?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  videoSrc?: string
  imageSrc?: string
  imageAlt?: string
  className?: string
  showVideoButton?: boolean
}

export default function VisualHero({
  title = "Ingénierie d'exception, exécution impeccable",
  subtitle = "Nous unissons calcul, matière et lumière pour servir une architecture exigeante.",
  description = "Réhabilitation structurelle, construction neuve et solutions bas carbone. Nous concevons et réalisons des ouvrages précis et durables, en collaboration avec des architectes et maîtres d'ouvrage qui recherchent maîtrise technique, discrétion esthétique et livraison sans aléa.",
  ctaLabel = "Découvrir nos projets",
  ctaHref = "/realisations",
  videoSrc,
  imageSrc = "/images/Hero_Video_Drone_Villa_Sunset.png",
  imageAlt = "Vue drone cinématique d'une villa d'exception au coucher du soleil",
  className,
  showVideoButton = true,
}: VisualHeroProps = {}) {
  return (
    <section className={cn("relative", className)} aria-label="Section héro">
      <div className="relative h-[70dvh] md:h-[85dvh] overflow-hidden rounded-b-3xl">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
          >
            <source src={videoSrc} type="video/mp4" />
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              priority
              className="object-cover will-change-transform"
            />
          </video>
        ) : (
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            priority
            className="object-cover will-change-transform"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
          <div className="container mx-auto max-w-4xl text-white">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl leading-tight mb-3 drop-shadow-lg"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/95 max-w-2xl drop-shadow-md">{subtitle}</p>
            {description && (
              <p className="mt-3 text-xs md:text-sm lg:text-base text-white/90 max-w-3xl drop-shadow-md">
                {description}
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--lux-gold)] text-[var(--lux-text)] px-6 py-3 font-medium hover:opacity-90 transition shadow-lg"
              >
                {ctaLabel}
                <ChevronRight className="size-4" />
              </Link>
              {showVideoButton && (
                <button className="inline-flex items-center gap-2 rounded-full border border-white/50 text-white px-6 py-3 hover:bg-white/15 transition backdrop-blur-sm">
                  <Play className="size-4" />
                  Voir le reel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
