import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Eye } from "lucide-react"
import { copy } from "@/lib/copy"

type Project = {
  title: keyof typeof copy.realisations.items | "Penthouse V."
  location: string
  type: string
  href: string
  src: string
  alt: string
  description: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Villa Horizon",
    location: "Saint‑Tropez",
    type: "Construction neuve",
    href: "/realisations",
    src: "/images/Projets_Villa_Moderne_Facade.png",
    alt: "Villa Horizon — façade contemporaine exceptionnelle",
    description: copy.realisations.items["Villa Horizon"],
    featured: true,
  },
  {
    title: "Hôtel Particulier",
    location: "Paris 7e",
    type: "Réhabilitation",
    href: "/realisations",
    src: "/images/Projets_Interieur_Salon_Design.png",
    alt: "Hôtel Particulier — salon design après rénovation",
    description: copy.realisations.items["Hôtel Particulier"],
  },
  {
    title: "Eco‑Lodge",
    location: "Martinique",
    type: "Développement durable",
    href: "/realisations",
    src: "/images/Projets_Detail_Escalier_Suspendu.png",
    alt: "Eco‑Lodge — détail architectural escalier suspendu",
    description: copy.realisations.items["Eco‑Lodge"],
  },
  {
    title: "Penthouse V.",
    location: "Monaco",
    type: "Réhabilitation",
    href: "/realisations",
    src: "/images/Projets_Jardin_Contemporain.png",
    alt: "Penthouse — jardin contemporain en terrasse",
    description: copy.realisations.items["Penthouse V."],
  },
]

export default function PremiumProjectsGrid() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20" aria-label="Projets récents">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Projets récents
          </h2>
          <p className="text-muted-foreground">Découvrez nos dernières réalisations d'exception</p>
        </div>
        <Link
          href="/realisations"
          className="inline-flex items-center gap-2 text-sm hover:text-[var(--lux-gold)] transition-colors"
        >
          Tout voir
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {projects.map((p, i) => (
          <Link
            key={i}
            href={p.href}
            className={`group rounded-3xl overflow-hidden border border-[var(--lux-border)] bg-white hover:shadow-xl transition-all duration-500 ${
              p.featured ? "lg:col-span-8" : "lg:col-span-4"
            }`}
          >
            <div className={`relative ${p.featured ? "h-80" : "h-64"}`}>
              <Image
                src={p.src || "/placeholder.svg"}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="size-5 text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-white/80 mb-1">{p.type}</p>
                    <p
                      className={`font-medium ${p.featured ? "text-2xl" : "text-lg"}`}
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {p.title}
                    </p>
                    <p className="text-sm text-white/90 mt-1">{p.location}</p>
                  </div>
                  <ArrowUpRight className="size-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
