"use client"

import { Phone, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function FloatingCallButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCall = () => {
    window.location.href = "tel:+33668842010"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/33668842010", "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Options expandues */}
      {isExpanded && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2 whitespace-nowrap"
            aria-label="Contacter via WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
          </button>
          <button
            onClick={handleCall}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2 whitespace-nowrap"
            aria-label="Appeler directement"
          >
            <Phone className="h-5 w-5" />
            <span className="text-sm font-medium hidden sm:inline">Appeler</span>
          </button>
        </div>
      )}

      {/* Bouton principal */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#C9A568] hover:bg-[#B8956A] text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 relative"
        aria-label="Options de contact"
      >
        <Phone className="h-6 w-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </button>
    </div>
  )
}
