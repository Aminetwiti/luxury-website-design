"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Download, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

interface GalleryImage {
  src: string
  alt: string
  title?: string
}

interface SimpleImageGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function SimpleImageGallery({ images, className }: SimpleImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    document.body.style.overflow = "hidden"

    // Focus sur le lightbox pour l'accessibilité
    setTimeout(() => {
      const lightbox = document.getElementById("lightbox-container")
      if (lightbox) {
        lightbox.focus()
      }
    }, 100)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
    setIsZoomed(false)
    document.body.style.overflow = "unset"

    // Retourner le focus à l'image qui a ouvert le lightbox
    setTimeout(() => {
      const trigger = document.querySelector(`[data-gallery-index="${selectedIndex}"]`) as HTMLElement
      if (trigger) {
        trigger.focus()
      }
    }, 100)
  }

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
      setIsZoomed(false)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
      setIsZoomed(false)
    }
  }

  const handleDownload = () => {
    if (selectedIndex !== null) {
      const link = document.createElement("a")
      link.href = images[selectedIndex].src
      link.download = images[selectedIndex].title || `image-${selectedIndex + 1}`
      link.click()
    }
  }

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return

      switch (e.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowLeft":
          e.preventDefault()
          goToPrevious()
          break
        case "ArrowRight":
          e.preventDefault()
          goToNext()
          break
        case "Home":
          e.preventDefault()
          setSelectedIndex(0)
          break
        case "End":
          e.preventDefault()
          setSelectedIndex(images.length - 1)
          break
      }
    }

    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex, images.length])

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}
        role="grid"
        aria-label="Galerie d'images du projet"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500"
            role="gridcell"
          >
            <button
              className="w-full h-full focus-visible"
              onClick={() => openLightbox(index)}
              data-gallery-index={index}
              aria-label={`Ouvrir l'image ${index + 1} sur ${images.length} : ${image.alt}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn
                  className="size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-description"
        >
          <div
            id="lightbox-container"
            className="relative w-full h-full flex items-center justify-center"
            tabIndex={-1}
          >
            {/* Controls */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsZoomed(!isZoomed)}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 focus-visible"
                aria-label={isZoomed ? "Dézoomer l'image" : "Zoomer sur l'image"}
                aria-pressed={isZoomed}
              >
                <ZoomIn className="size-4" aria-hidden="true" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleDownload}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 focus-visible"
                aria-label="Télécharger l'image"
              >
                <Download className="size-4" aria-hidden="true" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={closeLightbox}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 focus-visible"
                aria-label="Fermer la galerie"
              >
                <X className="size-4" aria-hidden="true" />
              </Button>
            </div>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 focus-visible"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="size-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 focus-visible"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </Button>
              </>
            )}

            {/* Image */}
            <div
              className={cn(
                "relative max-w-[90vw] max-h-[90vh] transition-transform duration-300",
                isZoomed ? "scale-150" : "scale-100",
              )}
            >
              <Image
                src={images[selectedIndex].src || "/placeholder.svg"}
                alt={images[selectedIndex].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 id="lightbox-title" className="text-white text-lg font-medium mb-1">
                {images[selectedIndex].title || `Image ${selectedIndex + 1}`}
              </h3>
              <p id="lightbox-description" className="text-white/80 text-sm mb-2">
                {images[selectedIndex].alt}
              </p>
              <p className="text-white/60 text-xs">
                {selectedIndex + 1} sur {images.length} images
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
