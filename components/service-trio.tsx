import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { copy } from "@/lib/copy"

type Service = {
  title: string
  href: string
  src: string
  description: string
  alt: string
}

const services: Service[] = [
  {
    title: copy.home.services.items.rehabilitation.subtitle,
    href: "/rehabilitation",
    src: "/images/Services_Rehabilitation_ChantierTechnique.png",
    description: copy.home.services.items.rehabilitation.description,
    alt: "Chantier structurel haut de gamme — renforcement",
  },
  {
    title: copy.home.services.items.neuf.subtitle,
    href: "/construction-neuve",
    src: "/images/Services_ConstructionNeuve_VillaConcept.png",
    description: copy.home.services.items.neuf.description,
    alt: "Villa contemporaine neuve — élégance conceptuelle",
  },
  {
    title: copy.home.services.items.durable.subtitle,
    href: "/developpement-durable",
    src: "/images/Services_Durable_TextureChanvreBois.png",
    description: copy.home.services.items.durable.description,
    alt: "Textures eco‑luxe — chanvre et bois",
  },
]

export default function ServiceTrio() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20" aria-label="Trois services principaux">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          {copy.home.services.title}
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group rounded-2xl overflow-hidden border border-[var(--lux-border)] bg-white hover:shadow-md transition-shadow"
          >
            <div className="relative h-56">
              <Image
                src={s.src || "/placeholder.svg"}
                alt={s.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                <span className="text-xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {s.title}
                </span>
                <ArrowUpRight className="size-5" />
              </div>
            </div>
            <div className="p-5 text-sm text-muted-foreground">{s.description}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
