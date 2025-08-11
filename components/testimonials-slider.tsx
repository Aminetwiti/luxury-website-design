"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const items = [
  {
    name: "S. Delacroix",
    role: "Propriétaire — Paris 7e",
    quote: "Rigueur rare. Ouvertures de murs porteurs, renforts invisibles, finitions impeccables. Confiance absolue.",
    avatar: "/images/APropos_Equipe_StudioArchitectural.png",
  },
  {
    name: "Atelier L.",
    role: "Agence d’architecture — PACA",
    quote: "Coordination chantier exemplaire et expertise structurelle pointue. Délais tenus, rendu impeccable.",
    avatar: "/images/Realisations_LoftAtelier_Indus.png",
  },
  {
    name: "C. Moreau",
    role: "Promoteur — Antilles",
    quote: "Solutions bas carbone pertinentes, sans compromis esthétique. Un référent technique fiable et exigeant.",
    avatar: "/images/Realisations_EcoLodge_Tropical.png",
  },
]

export default function TestimonialsSlider() {
  const ref = useRef<HTMLDivElement | null>(null)
  const scrollBy = (dir: -1 | 1) => {
    if (!ref.current) return
    ref.current.scrollBy({ left: dir * (ref.current.clientWidth * 0.9), behavior: "smooth" })
  }
  return (
    <section className="container mx-auto px-4 py-12 md:py-20" aria-label="Témoignages">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Témoignages
        </h2>
        <div className="hidden md:flex gap-2">
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
      </div>
      <div ref={ref} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar">
        {items.map((t, i) => (
          <figure
            key={i}
            className="min-w-[85%] md:min-w-[45%] lg:min-w-[32%] snap-start rounded-2xl border border-[var(--lux-border)] bg-white p-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[var(--lux-border)]">
                <Image src={t.avatar || "/placeholder.svg"} alt={`Portrait ${t.name}`} fill className="object-cover" />
              </div>
              <div>
                <figcaption className="font-medium">{t.name}</figcaption>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
            <blockquote className="mt-4 text-sm text-muted-foreground leading-relaxed">“{t.quote}”</blockquote>
          </figure>
        ))}
      </div>
    </section>
  )
}
