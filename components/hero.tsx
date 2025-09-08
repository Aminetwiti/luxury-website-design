"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Award, Shield, Leaf, CheckCircle } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { number: "150+", label: "Projets Réalisés", suffix: "" },
    { number: "25", label: "Années d'Expérience", suffix: "ans" },
    { number: "98", label: "Satisfaction Client", suffix: "%" },
    { number: "3", label: "Zones d'Intervention", suffix: "" },
  ]

  const services = [
    { name: "Phase AVP", description: "Avant-projet détaillé" },
    { name: "Phase EXE", description: "Plans d'exécution" },
    { name: "Réhabilitation", description: "Renforcement structure" },
    { name: "Durable", description: "Éco-construction" },
  ]

  const trustIndicators = [
    { icon: Award, text: "Bureau Agréé" },
    { icon: Shield, text: "Assurance Pro" },
    { icon: Leaf, text: "Éco-Responsable" },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8F8F5]">
      {/* Background Image with Overlay - Optimized with detailed prompt */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-luxury-construction-site.jpg"
          alt="Chantier de construction de luxe avec grue moderne, structure en béton élégante, coucher de soleil doré, architecture contemporaine haut de gamme"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#C9A568]/20 rounded-full hidden lg:block animate-pulse" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border-2 border-[#C9A568]/30 rounded-full hidden lg:block animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-10 w-16 h-16 border border-[#C9A568]/40 rounded-full hidden lg:block animate-bounce" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-[#C9A568]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Bureau d'Études Agréé</span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Vos Structures{" "}
            <span className="text-[#C9A568] relative">
              Sécurisées
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#C9A568]/50 rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-white/90 mb-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ingénierie structurelle d'excellence pour vos projets d'exception
          </p>

          {/* Value Proposition */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-[#C9A568]" />
              <span className="text-white text-sm">Devis gratuit sous 48h</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-[#C9A568]" />
              <span className="text-white text-sm">Étude personnalisée</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-[#C9A568]" />
              <span className="text-white text-sm">Suivi de A à Z</span>
            </div>
          </div>

          {/* Services Badges */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg hover:bg-white/25 transition-all duration-300"
              >
                <div className="text-white font-medium text-sm">{service.name}</div>
                <div className="text-white/70 text-xs">{service.description}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#C9A568] hover:bg-[#B8941F] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg min-h-[56px]"
            >
              <span>Démarrer Mon Projet</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 rounded-lg border border-white/30 transition-all duration-300 hover:scale-105 text-lg min-h-[56px]"
            >
              <Play className="w-5 h-5" />
              <span>Voir Nos Réalisations</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap justify-center gap-6 mb-8 transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <indicator.icon className="w-5 h-5 text-[#C9A568]" />
                <span className="text-sm font-medium">{indicator.text}</span>
              </div>
            ))}
          </div>

          {/* Animated Statistics */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-lg transition-all duration-500 ${
                  currentStat === index
                    ? "bg-[#C9A568]/20 backdrop-blur-sm border border-[#C9A568]/30 scale-105"
                    : "bg-white/5 backdrop-blur-sm border border-white/10"
                }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero
