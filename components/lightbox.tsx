"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { useState } from "react"

export default function Lightbox({
  images = [{ src: "/images/Realisations_VillaHorizon_ExtDrone.png", alt: "Image" }],
}: {
  images?: { src: string; alt: string }[]
} = {}) {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            className="relative h-48 rounded-xl overflow-hidden border border-[var(--lux-border)] bg-white"
            onClick={() => {
              setIdx(i)
              setOpen(true)
            }}
          >
            <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={images[idx]?.src || images[0].src}
              alt={images[idx]?.alt || "Image"}
              fill
              className="object-contain bg-black"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
