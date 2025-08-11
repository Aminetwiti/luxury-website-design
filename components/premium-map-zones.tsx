"use client"

import Image from "next/image"
import { MapPin, ArrowRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

type Zone = {
  id: string
  name: string
  description: string
  projects: number
  x: number
  y: number
}

const zones: Zone[] = [
  {
    id: "paris",
    name: "Paris & Île‑de‑France",
    description: "Chantiers urbains et patrimoines classés. Réhabilitations d'exception.",
    projects: 24,
    x: 49,
    y: 25,
  },
  {
    id: "paca",
    name: "PACA",
    description: "Villas d'exception, littoral & arrière‑pays. Construction neuve haut de gamme.",
    projects: 18,
    x: 59,
    y: 68,
  },
  {
    id: "antilles",
    name: "Antilles",
    description: "Projets insulaires, construction durable. Expertise climat tropical.",
    projects: 12,
    x: 20,
    y: 55,
  },
]

export default function PremiumMapZones() {
  const [active, setActive] = useState<Zone | null>(zones[0])

  return (
    <section className="container mx-auto px-4 py-12 md:py-20" aria-label="Zones d'intervention">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Présence nationale & projets insulaires
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nous intervenons sur les zones à forte exigence technique et architecturale
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[var(--lux-border)] bg-white">
          <Image
            src="/images/Carte_Interactive_Zones_Minimaliste.png"
            alt="Carte stylisée des zones d'intervention"
            fill
            className="object-cover"
          />
          {zones.map((z) => (
            <button
              key={z.id}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300",
                active?.id === z.id ? "scale-110" : "hover:scale-105",
              )}
              style={{ left: `${z.x}%`, top: `${z.y}%` }}
              onMouseEnter={() => setActive(z)}
              onFocus={() => setActive(z)}
              aria-label={`Zone ${z.name}`}
            >
              <div
                className={cn(
                  "rounded-full backdrop-blur-sm border shadow-lg px-4 py-2 flex items-center gap-2 transition-all",
                  active?.id === z.id
                    ? "bg-[var(--lux-gold)] border-[var(--lux-gold)] text-[var(--lux-text)]"
                    : "bg-white/95 border-[var(--lux-border)] hover:border-[var(--lux-gold)]",
                )}
              >
                <MapPin className="size-4" />
                <span className="text-sm font-medium">{z.name}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="space-y-8">
          {active && (
            <div className="rounded-3xl border border-[var(--lux-border)] p-8 bg-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {active.name}
                </h3>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[var(--lux-gold)]">{active.projects}</p>
                  <p className="text-xs text-muted-foreground">projets réalisés</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{active.description}</p>
              <button className="inline-flex items-center gap-2 text-sm text-[var(--lux-gold)] hover:gap-3 transition-all">
                Voir les projets
                <ArrowRight className="size-4" />
              </button>
            </div>
          )}
          <div className="grid grid-cols-3 gap-4">
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setActive(z)}
                className={cn(
                  "p-4 rounded-2xl border text-left transition-all",
                  active?.id === z.id
                    ? "border-[var(--lux-gold)] bg-[var(--lux-gold)]/5"
                    : "border-[var(--lux-border)] hover:border-[var(--lux-gold)]",
                )}
              >
                <p className="font-medium text-sm">{z.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{z.projects} projets</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
