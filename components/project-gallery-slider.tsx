"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectGallerySlider({
  images = [{ src: "/images/Realisations_VillaHorizon_ExtDrone.png", alt: "Image" }],
}: {
  images?: { src: string; alt: string }[]
} = {}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const scrollBy = (dir: -1 | 1) => {
    if (!ref.current) return
    ref.current.scrollBy({ left: dir * (ref.current.clientWidth * 0.9), behavior: "smooth" })
  }
  return (
    <div>
      <div className="flex justify-end gap-2 mb-3">
        <button
          aria-label="Précédent"
          onClick={() => scrollBy(-1)}
          className="size-9 rounded-full border border-[var(--lux-border)] bg-white flex items-center justify-center"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          aria-label="Suivant"
          onClick={() => scrollBy(1)}
          className="size-9 rounded-full border border-[var(--lux-border)] bg-white flex items-center justify-center"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div ref={ref} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar">
        {images.map((img, i) => (
          <div key={i} className="min-w-[85%] md:min-w-[60%] lg:min-w-[45%] snap-start">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--lux-border)] bg-white">
              <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
