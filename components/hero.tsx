"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-luxury-construction-site.jpg"
          alt="Chantier de construction de luxe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            B.E <span className="text-[#C9A568]">StructiBA</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-light">Bureau d'Études Structure</span>
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-justify">
              Bureau d'études spécialisés en structure et béton armé, intervenant en construction neuve et
              réhabilitation, de la conception à l'exécution. Nous transformons vos ambitions architecturales en
              réalités structurelles.
            </p>
          </div>

          {/* Adresse */}
          <div className="flex items-center justify-center gap-2 mb-8 text-lg">
            <MapPin className="w-5 h-5 text-[#C9A568]" />
            <span className="text-gray-200">263 Avenue de Grasse / 06400 Cannes</span>
          </div>

          {/* Contact rapide */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Phone className="w-4 h-4 text-[#C9A568]" />
              <span className="text-sm">04 93 XX XX XX</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Mail className="w-4 h-4 text-[#C9A568]" />
              <span className="text-sm">contact@structiba.fr</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#C9A568] hover:bg-[#B8956A] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/services" className="flex items-center gap-2">
                Découvrir nos services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
