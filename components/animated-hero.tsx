"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "./3d-animations"

type AnimatedHeroProps = {
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

export default function AnimatedHero({
  title = "Ingénierie d'exception, exécution impeccable",
  subtitle = "Nous unissons calcul, matière et lumière pour servir une architecture exigeante.",
  description,
  ctaLabel = "Découvrir nos projets",
  ctaHref = "/realisations",
  videoSrc,
  imageSrc = "/images/Hero_Video_Drone_Villa_Sunset.png",
  imageAlt = "Vue drone cinématique d'une villa d'exception au coucher du soleil",
  className,
  showVideoButton = true,
}: AnimatedHeroProps = {}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsLoaded(true)

    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = heroRef.current?.getBoundingClientRect()
        if (rect) {
          setMousePosition({
            x: (e.clientX - rect.left - rect.width / 2) / rect.width,
            y: (e.clientY - rect.top - rect.height / 2) / rect.height,
          })
        }
      }

      heroRef.current?.addEventListener("mousemove", handleMouseMove)
      return () => heroRef.current?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile])

  return (
    <section ref={heroRef} className={cn("relative overflow-hidden", className)} aria-label="Section héro">
      <div className="relative h-[70dvh] md:h-[85dvh] overflow-hidden rounded-b-3xl">
        {/* Background avec effet parallaxe subtil */}
        <div
          className="absolute inset-0 transform-gpu transition-transform duration-1000 ease-out"
          style={{
            transform: !isMobile
              ? `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0) scale(1.1)`
              : "scale(1.05)",
          }}
        >
          {videoSrc ? (
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={videoSrc} type="video/mp4" />
              <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill priority className="object-cover" />
            </video>
          ) : (
            <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill priority className="object-cover" />
          )}
        </div>

        {/* Overlay avec gradient dynamique */}
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            background: `linear-gradient(135deg, rgba(0,0,0,${0.4 + Math.abs(mousePosition.x) * 0.2}) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,${0.5 + Math.abs(mousePosition.y) * 0.2}) 100%)`,
          }}
        />

        {/* Contenu avec animations d'entrée */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
          <div className="container mx-auto max-w-4xl text-white">
            <h1
              className={cn(
                "text-3xl md:text-5xl lg:text-6xl leading-tight mb-3 drop-shadow-lg transform-gpu transition-all duration-1000",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                transitionDelay: "200ms",
              }}
            >
              {title}
            </h1>
            <p
              className={cn(
                "text-sm md:text-base lg:text-lg text-white/95 max-w-2xl drop-shadow-md transform-gpu transition-all duration-1000",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: "400ms" }}
            >
              {subtitle}
            </p>
            {description && (
              <p
                className={cn(
                  "mt-3 text-xs md:text-sm lg:text-base text-white/90 max-w-3xl drop-shadow-md transform-gpu transition-all duration-1000",
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
                style={{ transitionDelay: "600ms" }}
              >
                {description}
              </p>
            )}
            <div
              className={cn(
                "mt-6 flex flex-wrap items-center gap-3 transform-gpu transition-all duration-1000",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: "800ms" }}
            >
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--lux-gold)] text-[var(--lux-text)] px-6 py-3 font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform-gpu hover:scale-105"
              >
                {ctaLabel}
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {showVideoButton && (
                <button className="group inline-flex items-center gap-2 rounded-full border border-white/50 text-white px-6 py-3 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm transform-gpu hover:scale-105">
                  <Play className="size-4 transition-transform group-hover:scale-110" />
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
