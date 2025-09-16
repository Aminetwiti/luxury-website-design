"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero_Engineering_Excellence.jpg"
          alt="Excellence en ingénierie structurelle"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #C9A568 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #C9A568 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#C9A568]/20 border border-[#C9A568]/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <span className="text-[#C9A568] font-medium">Bureau d'Études Structure & Béton Armé</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Excellence en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A568] to-[#E6C78A]">
              Ingénierie
            </span>
            <br />
            Structurelle
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bureau d'études spécialisés en structure et béton armé, intervenant en construction neuve et réhabilitation,
            de la conception à l'exécution. Nous transformons vos ambitions architecturales en réalités structurelles.
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#C9A568] rounded-full"></div>
              <span>Construction Neuve</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#C9A568] rounded-full"></div>
              <span>Réhabilitation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#C9A568] rounded-full"></div>
              <span>Ingénierie Parasismique</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#C9A568] rounded-full"></div>
              <span>Ouvrages Extérieurs</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#C9A568] hover:bg-[#B8941F] text-white shadow-2xl hover:shadow-[#C9A568]/25 transition-all duration-300 px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Démarrer votre projet
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm shadow-xl transition-all duration-300 px-8 py-4 text-lg"
            >
              <Link href="/expertise" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Découvrir notre expertise
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#C9A568] mb-2">15+</div>
              <div className="text-gray-300 text-sm md:text-base">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#C9A568] mb-2">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#C9A568] mb-2">12</div>
              <div className="text-gray-300 text-sm md:text-base">Ingénieurs experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#C9A568] mb-2">2</div>
              <div className="text-gray-300 text-sm md:text-base">Zones d'intervention</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
