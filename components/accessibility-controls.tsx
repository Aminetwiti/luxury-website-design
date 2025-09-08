"use client"

import { useState } from "react"
import { Settings, Eye, Type, X } from "lucide-react"

interface AccessibilityControlsProps {
  highContrast: boolean
  setHighContrast: (value: boolean) => void
  fontSize: string
  setFontSize: (value: string) => void
}

export function AccessibilityControls({
  highContrast,
  setHighContrast,
  fontSize,
  setFontSize,
}: AccessibilityControlsProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[var(--lux-gold)] text-white flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--lux-gold)]"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        aria-label="Options d'accessibilité"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Settings className="h-6 w-6" />}
      </button>

      {/* Controls panel */}
      {isOpen && (
        <div
          id="accessibility-panel"
          className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 border border-gray-200"
          role="dialog"
          aria-label="Options d'accessibilité"
        >
          <h3 className="text-lg font-bold mb-4">Accessibilité</h3>

          {/* Contrast control */}
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2 flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              Contraste
            </h4>
            <div className="flex items-center">
              <button
                onClick={() => setHighContrast(false)}
                className={`px-3 py-1 text-sm rounded-l-md border ${
                  !highContrast
                    ? "bg-[var(--lux-gold)] text-white border-[var(--lux-gold)]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                aria-pressed={!highContrast}
                aria-label="Contraste normal"
              >
                Normal
              </button>
              <button
                onClick={() => setHighContrast(true)}
                className={`px-3 py-1 text-sm rounded-r-md border ${
                  highContrast
                    ? "bg-[var(--lux-gold)] text-white border-[var(--lux-gold)]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                aria-pressed={highContrast}
                aria-label="Contraste élevé"
              >
                Élevé
              </button>
            </div>
          </div>

          {/* Font size control */}
          <div>
            <h4 className="text-sm font-medium mb-2 flex items-center">
              <Type className="h-4 w-4 mr-2" />
              Taille du texte
            </h4>
            <div className="flex items-center">
              <button
                onClick={() => setFontSize("normal")}
                className={`px-2 py-1 text-sm rounded-l-md border ${
                  fontSize === "normal"
                    ? "bg-[var(--lux-gold)] text-white border-[var(--lux-gold)]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                aria-pressed={fontSize === "normal"}
                aria-label="Taille de texte normale"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("large")}
                className={`px-2 py-1 text-sm border ${
                  fontSize === "large"
                    ? "bg-[var(--lux-gold)] text-white border-[var(--lux-gold)]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                aria-pressed={fontSize === "large"}
                aria-label="Grande taille de texte"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize("x-large")}
                className={`px-2 py-1 text-sm rounded-r-md border ${
                  fontSize === "x-large"
                    ? "bg-[var(--lux-gold)] text-white border-[var(--lux-gold)]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                aria-pressed={fontSize === "x-large"}
                aria-label="Très grande taille de texte"
              >
                A++
              </button>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500">Ces paramètres sont enregistrés pour votre prochaine visite.</p>
        </div>
      )}
    </div>
  )
}
