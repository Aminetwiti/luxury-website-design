"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

type Zone = {
  id: string
  name: string
  description: string
  // approximate positions (percent) on the image
  x: number
  y: number
}

const zones: Zone[] = [
  {
    id: "paris",
    name: "Paris & Île‑de‑France",
    description: "Chantiers urbains et patrimoines classés.",
    x: 49,
    y: 25,
  },
  { id: "paca", name: "PACA", description: "Villas d’exception, littoral & arrière‑pays.", x: 59, y: 68 },
  { id: "antilles", name: "Antilles", description: "Projets insulaires, construction durable.", x: 20, y: 55 },
]

export default function MapZones() {
  const [active, setActive] = useState<Zone | null>(zones[0])

  return (
    <section className="container mx-auto px-4 py-12 md:py-20" aria-label="Zones d’intervention">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--lux-border)] bg-white">
          <Image
            src="/stylized-map-europe-caribbean.png"
            alt="Carte stylisée des zones d’intervention"
            fill
            className="object-cover"
          />
          {zones.map((z) => (
            <button
              key={z.id}
              className={cn("absolute -translate-x-1/2 -translate-y-1/2 group", "transition-transform")}
              style={{ left: `${z.x}%`, top: `${z.y}%` }}
              onMouseEnter={() => setActive(z)}
              onFocus={() => setActive(z)}
              aria-label={`Zone ${z.name}`}
            >
              <div className="rounded-full bg-white/90 backdrop-blur border border-[var(--lux-border)] shadow-sm px-3 py-1 flex items-center gap-2">
                <MapPin className="size-4 text-[var(--lux-gold)]" />
                <span className="text-xs">{z.name}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Présence nationale & projets insulaires
          </h2>
          <p className="text-muted-foreground">
            Nous intervenons sur les zones à forte exigence technique et architecturale : Paris & Île‑de‑France, région
            PACA et Antilles.
          </p>
          <div className="rounded-xl border border-[var(--lux-border)] p-5 bg-white">
            <p className="text-sm text-muted-foreground">Zone active</p>
            <p className="mt-1 text-lg">{active?.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{active?.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
