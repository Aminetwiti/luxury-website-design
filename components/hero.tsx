"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero_Construction_Luxury_Site.jpg"
          alt="Chantier moderne de construction"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            Nous transformons vos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A568] to-[#E6C78A]">
              ambitions architecturales
            </span>{" "}
            en réalités structurelles
          </h1>

          {/* CTA Button */}
          <div className="flex justify-center animate-fade-in-delay">
            <Button
              asChild
              size="lg"
              className="bg-[#C9A568] hover:bg-[#B8941F] text-white shadow-2xl hover:shadow-[#C9A568]/25 transition-all duration-300 px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Demandez un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
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

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  )
}
