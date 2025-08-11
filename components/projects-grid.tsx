import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { copy } from "@/lib/copy"

type Project = {
  title: keyof typeof copy.realisations.items | "Penthouse V."
  location: string
  type: string
  href: string
  src: string
  alt: string
  description: string
}

const projects: Project[] = [
  {
    title: "Villa Horizon",
    location: "Saint‑Tropez",
    type: "Construction neuve",
    href: "/realisations",
    src: "/images/Realisations_VillaHorizon_ExtDrone.png",
    alt: "Villa Horizon — vue drone extérieure",
    description: copy.realisations.items["Villa Horizon"],
  },
  {
    title: "Hôtel Particulier",
    location: "Paris 7e",
    type: "Réhabilitation",
    href: "/realisations",
    src: "/images/Realisations_HotelParticulier_Interieur.png",
    alt: "Hôtel Particulier — intérieur rénové",
    description: copy.realisations.items["Hôtel Particulier"],
  },
  {
    title: "Eco‑Lodge",
    location: "Martinique",
    type: "Développement durable",
    href: "/realisations",
    src: "/images/Realisations_EcoLodge_Tropical.png",
    alt: "Eco‑Lodge durable — ambiance tropicale",
    description: copy.realisations.items["Eco‑Lodge"],
  },
  {
    title: "Penthouse V.",
    location: "Monaco",
    type: "Réhabilitation",
    href: "/realisations",
    src: "/images/Realisations_Penthouse_Nuit.png",
    alt: "Penthouse — vue nocturne",
    description: copy.realisations.items["Penthouse V."],
  },
  {
    title: "Maison Patio",
    location: "Aix‑en‑Provence",
    type: "Construction neuve",
    href: "/realisations",
    src: "/images/Realisations_MaisonPatio_BetonBois.png",
    alt: "Maison Patio — béton et bois, lumière douce",
    description: copy.realisations.items["Maison Patio"],
  },
  {
    title: "Boutique Heritage",
    location: "Paris 1er",
    type: "Réhabilitation",
    href: "/realisations",
    src: "/images/Realisations_BoutiqueHeritage_Interieur.png",
    alt: "Boutique Heritage — intérieur luxe",
    description: copy.realisations.items["Boutique Heritage"],
  },
]

export default function ProjectsGrid() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20" aria-label="Projets récents">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Projets récents
        </h2>
        <Link href="/realisations" className="text-sm hover:text-[var(--lux-gold)]">
          Tout voir
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Link
            key={i}
            href={p.href}
            className="group rounded-2xl overflow-hidden border border-[var(--lux-border)] bg-white"
          >
            <div className="relative h-56">
              <Image
                src={p.src || "/placeholder.svg"}
                alt={p.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80">{p.type}</p>
                  <p className="text-lg">{p.title}</p>
                </div>
                <ArrowUpRight className="size-5 opacity-90" />
              </div>
            </div>
            <div className="p-4 text-xs text-muted-foreground">
              {p.location}
              <span className="sr-only"> — {p.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
