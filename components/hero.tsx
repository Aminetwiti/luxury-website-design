"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroImages = [
  {
    src: "/images/Accueil_Hero_ConstructionChic.png",
    alt: "Construction moderne haut de gamme",
  },
  {
    src: "/images/ConstructionNeuve_Hero_VillaIconique.png",
    alt: "Villa iconique en construction",
  },
  {
    src: "/images/Rehabilitation_Hero_StructureElegante.png",
    alt: "Réhabilitation structure élégante",
  },
]

const keyPoints = [
  "Ingénieurs certifiés des grandes écoles",
  "Expertise parasismique avancée",
  "Optimisation structurelle et économique",
  "Suivi personnalisé de A à Z",
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Images de fond avec transition */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Contenu principal */}
      <div className="relative container mx-auto px-4 text-white">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#C9A568]/20 border border-[#C9A568]/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#C9A568] rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Bureau d'Études Structure • Cannes</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transformons vos
            <span className="block text-[#C9A568]">Ambitions</span>
            en Réalités Structurelles
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl text-justify">
            Bureau d'études spécialisé en structure et béton armé, intervenant en construction neuve et réhabilitation,
            de la conception à l'exécution. Nous transformons vos ambitions architecturales en réalités structurelles.
          </p>

          {/* Points clés */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#C9A568] flex-shrink-0" />
                <span className="text-gray-200">{point}</span>
              </div>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-[#C9A568] hover:bg-[#B8941F] text-white shadow-xl">
              <Link href="/contact" className="flex items-center">
                Devis Gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm"
            >
              <Link href="/expertise" className="flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Notre Expertise
              </Link>
            </Button>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#C9A568] mb-1">15+</div>
              <div className="text-sm text-gray-300">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#C9A568] mb-1">200+</div>
              <div className="text-sm text-gray-300">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#C9A568] mb-1">98%</div>
              <div className="text-sm text-gray-300">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#C9A568] mb-1">24h</div>
              <div className="text-sm text-gray-300">Délai de réponse</div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs d'images */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-[#C9A568] scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
