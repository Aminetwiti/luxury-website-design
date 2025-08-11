"use client"

import Image from "next/image"
import { useState } from "react"

type BeforeAfterProps = {
  beforeSrc?: string
  afterSrc?: string
  alt?: string
}

export default function BeforeAfter({
  beforeSrc = "/images/Rehabilitation_Avant_MurPorteur.png",
  afterSrc = "/images/Rehabilitation_Apres_EspaceRaffine.png",
  alt = "Avant et après",
}: BeforeAfterProps = {}) {
  const [pos, setPos] = useState(50)
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--lux-border)] bg-white">
      <Image src={beforeSrc || "/placeholder.svg"} alt={`${alt} — avant`} fill className="object-cover" />
      <div className="absolute inset-y-0 left-0" style={{ width: `${pos}%` }} aria-hidden>
        <Image src={afterSrc || "/placeholder.svg"} alt={`${alt} — après`} fill className="object-cover" />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Comparer avant / après"
        className="absolute inset-x-0 bottom-4 mx-auto w-1/2 accent-[var(--lux-gold)]"
      />
      <div className="absolute top-0 bottom-0" style={{ left: `${pos}%` }} aria-hidden>
        <div className="h-full w-px bg-white/70 shadow" />
      </div>
    </div>
  )
}
