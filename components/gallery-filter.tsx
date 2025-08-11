"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { projects } from "@/lib/projects"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GalleryFilter() {
  const [loc, setLoc] = useState<"Tous" | "Paris" | "PACA" | "Antilles">("Tous")
  const [typ, setTyp] = useState<"Tous" | "Réhabilitation" | "Construction neuve" | "Durable">("Tous")
  const [sort, setSort] = useState<"recent" | "oldest">("recent")

  const filtered = useMemo(() => {
    const base = projects.filter((i) => (loc === "Tous" || i.location === loc) && (typ === "Tous" || i.type === typ))
    return base.sort((a, b) =>
      sort === "recent"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime(),
    )
  }, [loc, typ, sort])

  return (
    <div>
      <div className="flex flex-wrap gap-3 items-center mb-6">
        <span className="text-sm text-muted-foreground">Filtrer par :</span>
        <div className="flex gap-2">
          {(["Tous", "Paris", "PACA", "Antilles"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLoc(l as any)}
              className={cn(
                "px-3 py-1 rounded-full text-sm border",
                loc === l
                  ? "border-[var(--lux-gold)] text-[var(--lux-gold)]"
                  : "border-[var(--lux-border)] hover:border-[var(--lux-gold)]",
              )}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {(["Tous", "Réhabilitation", "Construction neuve", "Durable"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTyp(t as any)}
              className={cn(
                "px-3 py-1 rounded-full text-sm border",
                typ === t
                  ? "border-[var(--lux-gold)] text-[var(--lux-gold)]"
                  : "border-[var(--lux-border)] hover:border-[var(--lux-gold)]",
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Tri</span>
          <Select value={sort} onValueChange={(v: "recent" | "oldest") => setSort(v)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Plus récents</SelectItem>
              <SelectItem value="oldest">Plus anciens</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/realisations/${p.slug}`}
            className="rounded-2xl overflow-hidden border border-[var(--lux-border)] bg-white group"
          >
            <div className="relative h-56">
              <Image
                src={p.cover || "/placeholder.svg"}
                alt={p.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-sm text-white/80">
                  {p.type} · {p.location}
                </p>
                <p className="text-lg">{p.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
