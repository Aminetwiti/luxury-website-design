"use client"

import type React from "react"

import Image from "next/image"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn, Download, Share2, Maximize2 } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "./3d-animations"

type GalleryImage = {
  src: string
  alt: string
  type?: "photo" | "render" | "plan"
}

type ProjectImageGalleryProps = {
  images: GalleryImage[]
  title?: string
}

export default function ProjectImageGallery({ images, title = "Galerie" }: ProjectImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const isMobile = useIsMobile()
  const imageRef = useRef<HTMLImageElement>(null)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    setIsLightboxOpen(true)
    setZoomLevel(1)
    setImagePosition({ x: 0, y: 0 })
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setZoomLevel(1)
    setImagePosition({ x: 0, y: 0 })
  }

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length)
    setZoomLevel(1)
    setImagePosition({ x: 0, y: 0 })
  }

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
    setZoomLevel(1)
    setImagePosition({ x: 0, y: 0 })
  }

  const handleZoom = (delta: number) => {
    const newZoom = Math.max(1, Math.min(4, zoomLevel + delta))
    setZoomLevel(newZoom)
    if (newZoom === 1) {
      setImagePosition({ x: 0, y: 0 })
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case "render":
        return "🎨"
      case "plan":
        return "📐"
      default:
        return "📷"
    }
  }

  const getTypeBadge = (type?: string) => {
    switch (type) {
      case "render":
        return "Rendu 3D"
      case "plan":
        return "Plan technique"
      default:
        return "Photo"
    }
  }

  return (
    <>
      {/* Main Gallery Grid */}
      <div className="space-y-4">
        {/* Featured Image */}
        <div className="relative group">
          <div
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--lux-border)] bg-white cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={images[0]?.src || "/placeholder.svg"}
              alt={images[0]?.alt || "Image"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

            {/* Overlay Controls */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  className="bg-white/90 text-black hover:bg-white backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    openLightbox(0)
                  }}
                >
                  <ZoomIn className="size-4 mr-2" />
                  Agrandir
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/90 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    // Share functionality
                  }}
                >
                  <Share2 className="size-4" />
                </Button>
              </div>
            </div>

            {/* Type Badge */}
            {images[0]?.type && (
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
                  {getTypeIcon(images[0].type)} {getTypeBadge(images[0].type)}
                </span>
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-3 right-3">
              <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
                1 / {images.length}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.slice(1).map((img, i) => (
              <div key={i + 1} className="relative group cursor-pointer" onClick={() => openLightbox(i + 1)}>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-[var(--lux-border)] bg-white">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Type Badge */}
                  {img.type && (
                    <div className="absolute top-2 left-2">
                      <span className="px-1.5 py-0.5 bg-black/70 text-white text-xs rounded backdrop-blur-sm">
                        {getTypeIcon(img.type)}
                      </span>
                    </div>
                  )}

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Maximize2 className="size-4 text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-7xl w-full h-full p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="size-6" />
            </Button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  onClick={prevImage}
                >
                  <ChevronLeft className="size-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  onClick={nextImage}
                >
                  <ChevronRight className="size-8" />
                </Button>
              </>
            )}

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => handleZoom(-0.5)}
                disabled={zoomLevel <= 1}
              >
                <ZoomIn className="size-4 rotate-180" />
              </Button>
              <span className="text-white text-sm px-2">{Math.round(zoomLevel * 100)}%</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => handleZoom(0.5)}
                disabled={zoomLevel >= 4}
              >
                <ZoomIn className="size-4" />
              </Button>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 z-50 text-white">
              <div className="flex items-center gap-3">
                {images[selectedIndex]?.type && (
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                    {getTypeIcon(images[selectedIndex].type)} {getTypeBadge(images[selectedIndex].type)}
                  </span>
                )}
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  {selectedIndex + 1} / {images.length}
                </span>
              </div>
              <p className="mt-2 text-sm opacity-80 max-w-md">{images[selectedIndex]?.alt}</p>
            </div>

            {/* Download Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute bottom-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={() => {
                // Download functionality
                const link = document.createElement("a")
                link.href = images[selectedIndex]?.src || ""
                link.download = `${title}-${selectedIndex + 1}.jpg`
                link.click()
              }}
            >
              <Download className="size-4 mr-2" />
              Télécharger
            </Button>

            {/* Main Image */}
            <div
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <Image
                ref={imageRef}
                src={images[selectedIndex]?.src || "/placeholder.svg"}
                alt={images[selectedIndex]?.alt || "Image"}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain transition-transform duration-200"
                style={{
                  transform: `scale(${zoomLevel}) translate(${imagePosition.x / zoomLevel}px, ${imagePosition.y / zoomLevel}px)`,
                  cursor: zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                }}
                onWheel={(e) => {
                  e.preventDefault()
                  const delta = e.deltaY > 0 ? -0.2 : 0.2
                  handleZoom(delta)
                }}
              />
            </div>

            {/* Keyboard Navigation Hint */}
            {!isMobile && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 text-white/60 text-xs">
                Utilisez les flèches ← → pour naviguer, molette pour zoomer
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
