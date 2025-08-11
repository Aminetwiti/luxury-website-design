"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Eye, Type, Contrast } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AccessibilityControls() {
  const [highContrast, setHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState("normal")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Charger les préférences depuis localStorage
    const savedHighContrast = localStorage.getItem("high-contrast") === "true"
    const savedFontSize = localStorage.getItem("font-size") || "normal"

    setHighContrast(savedHighContrast)
    setFontSize(savedFontSize)

    // Appliquer les préférences
    document.documentElement.setAttribute("data-high-contrast", savedHighContrast.toString())
    document.documentElement.setAttribute("data-font-size", savedFontSize)
  }, [])

  const toggleHighContrast = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    localStorage.setItem("high-contrast", newValue.toString())
    document.documentElement.setAttribute("data-high-contrast", newValue.toString())

    // Annoncer le changement aux lecteurs d'écran
    const announcement = newValue ? "Mode haute visibilité activé" : "Mode haute visibilité désactivé"
    announceToScreenReader(announcement)
  }

  const cycleFontSize = () => {
    const sizes = ["normal", "large", "extra-large"]
    const currentIndex = sizes.indexOf(fontSize)
    const nextIndex = (currentIndex + 1) % sizes.length
    const newSize = sizes[nextIndex]

    setFontSize(newSize)
    localStorage.setItem("font-size", newSize)
    document.documentElement.setAttribute("data-font-size", newSize)

    const sizeLabels = {
      normal: "normale",
      large: "grande",
      "extra-large": "très grande",
    }

    announceToScreenReader(`Taille de police ${sizeLabels[newSize as keyof typeof sizeLabels]}`)
  }

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = message
    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  const getFontSizeLabel = () => {
    switch (fontSize) {
      case "large":
        return "A+"
      case "extra-large":
        return "A++"
      default:
        return "A"
    }
  }

  return (
    <>
      {/* Bouton pour afficher/masquer les contrôles */}
      <Button
        onClick={() => setIsVisible(!isVisible)}
        className={cn(
          "fixed top-20 right-4 z-50 rounded-full p-3 shadow-lg transition-all duration-300",
          "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        )}
        aria-label={isVisible ? "Masquer les contrôles d'accessibilité" : "Afficher les contrôles d'accessibilité"}
        aria-expanded={isVisible}
        aria-controls="accessibility-panel"
      >
        <Eye className={cn("size-5 transition-transform", isVisible && "rotate-180")} />
        <span className="sr-only">{isVisible ? "Masquer" : "Afficher"} les options d'accessibilité</span>
      </Button>

      {/* Panel des contrôles d'accessibilité */}
      <div
        id="accessibility-panel"
        className={cn(
          "fixed top-32 right-4 z-40 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-4 transition-all duration-300",
          "min-w-[280px]",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none",
        )}
        role="region"
        aria-label="Contrôles d'accessibilité"
        aria-hidden={!isVisible}
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Accessibilité</h2>

        <div className="space-y-3">
          {/* Contrôle du contraste */}
          <div>
            <Button
              onClick={toggleHighContrast}
              variant="outline"
              className={cn("w-full justify-start gap-3 h-12", highContrast && "bg-yellow-100 border-yellow-400")}
              aria-pressed={highContrast}
              aria-describedby="contrast-description"
            >
              <Contrast className="size-5" />
              <div className="text-left">
                <div className="font-medium">{highContrast ? "Désactiver" : "Activer"} haute visibilité</div>
                <div className="text-xs text-gray-600">Améliore les contrastes</div>
              </div>
            </Button>
            <div id="contrast-description" className="sr-only">
              {highContrast
                ? "Mode haute visibilité activé. Les contrastes sont renforcés pour une meilleure lisibilité."
                : "Mode haute visibilité désactivé. Cliquez pour activer les contrastes renforcés."}
            </div>
          </div>

          {/* Contrôle de la taille de police */}
          <div>
            <Button
              onClick={cycleFontSize}
              variant="outline"
              className="w-full justify-start gap-3 h-12 bg-transparent"
              aria-describedby="font-size-description"
            >
              <Type className="size-5" />
              <div className="text-left">
                <div className="font-medium">Taille de police : {getFontSizeLabel()}</div>
                <div className="text-xs text-gray-600">Cliquez pour changer</div>
              </div>
            </Button>
            <div id="font-size-description" className="sr-only">
              Taille de police actuelle :{" "}
              {fontSize === "normal" ? "normale" : fontSize === "large" ? "grande" : "très grande"}. Cliquez pour passer
              à la taille suivante.
            </div>
          </div>

          {/* Informations sur les raccourcis clavier */}
          <div className="pt-3 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Raccourcis clavier</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <div>
                <kbd className="px-1 py-0.5 bg-gray-100 rounded">Tab</kbd> Navigation
              </div>
              <div>
                <kbd className="px-1 py-0.5 bg-gray-100 rounded">Entrée</kbd> Activer
              </div>
              <div>
                <kbd className="px-1 py-0.5 bg-gray-100 rounded">Échap</kbd> Fermer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS pour les tailles de police */}
      <style jsx global>{`
        [data-fontSize="large"] {
          font-size: 1.125em;
        }
        [data-fontSize="large"] h1 {
          font-size: 1.2em;
        }
        [data-fontSize="large"] h2 {
          font-size: 1.15em;
        }
        [data-fontSize="large"] h3 {
          font-size: 1.1em;
        }
        
        [data-fontSize="extra-large"] {
          font-size: 1.25em;
        }
        [data-fontSize="extra-large"] h1 {
          font-size: 1.4em;
        }
        [data-fontSize="extra-large"] h2 {
          font-size: 1.3em;
        }
        [data-fontSize="extra-large"] h3 {
          font-size: 1.2em;
        }
      `}</style>
    </>
  )
}
