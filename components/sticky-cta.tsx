"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Show CTA after scrolling 50% of viewport height
      setIsVisible(scrollPosition > windowHeight * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isDismissed || !isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-40 animate-in slide-in-from-bottom-2 duration-300">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 md:p-6">
        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
          style={{ minWidth: "44px", minHeight: "44px" }}
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="pr-8">
          <h3
            className="text-lg font-bold mb-2 text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Besoin d'une expertise ?
          </h3>
          <p className="text-sm text-gray-600 mb-4">Discutons de votre projet structurel. Devis gratuit sous 48h.</p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              asChild
              size="sm"
              className="bg-[#C9A568] hover:bg-[#B8941F] text-white border-none transition-all duration-200 hover:scale-105 text-sm"
              style={{ minHeight: "44px" }}
            >
              <Link href="/contact" className="inline-flex items-center justify-center">
                Devis gratuit
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white transition-all duration-200 flex-1 bg-transparent"
                style={{ minHeight: "44px", minWidth: "44px" }}
              >
                <a href="tel:+33123456789" aria-label="Appeler">
                  <Phone className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white transition-all duration-200 flex-1 bg-transparent"
                style={{ minHeight: "44px", minWidth: "44px" }}
              >
                <a href="mailto:contact@structiba.fr" aria-label="Envoyer un email">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
