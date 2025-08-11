import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { copy } from "@/lib/copy"

type Service = {
  title: string
  href: string
  iconSrc: string
  imageSrc: string
  description: string
  alt: string
}

const services: Service[] = [
  {
    title: copy.home.services.items.rehabilitation.subtitle,
    href: "/rehabilitation",
    iconSrc: "/images/Services_Icon_Rehabilitation.png",
    imageSrc: "/images/Services_Rehabilitation_ChantierTechnique.png",
    description: copy.home.services.items.rehabilitation.description,
    alt: "Réhabilitation — transformation d'un bâtiment ancien",
  },
  {
    title: copy.home.services.items.neuf.subtitle,
    href: "/construction-neuve",
    iconSrc: "/images/Services_Icon_ConstructionNeuve.png",
    imageSrc: "/images/Services_ConstructionNeuve_VillaConcept.png",
    description: copy.home.services.items.neuf.description,
    alt: "Construction neuve — villa contemporaine d'exception",
  },
  {
    title: copy.home.services.items.durable.subtitle,
    href: "/developpement-durable",
    iconSrc: "/images/Services_Icon_Durable.png",
    imageSrc: "/images/Services_Durable_TextureChanvreBois.png",
    description: copy.home.services.items.durable.description,
    alt: "Développement durable — matériaux écologiques nobles",
  },
]

export default function PremiumServiceTrio() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20" aria-label="Trois services principaux">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          {copy.home.services.title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trois domaines d'excellence pour répondre à tous vos projets architecturaux
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group rounded-3xl overflow-hidden border border-[var(--lux-border)] bg-white hover:shadow-xl transition-all duration-500"
          >
            <div className="relative h-64">
              <Image
                src={s.imageSrc || "/placeholder.svg"}
                alt={s.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <Image src={s.iconSrc || "/placeholder.svg"} alt="" width={24} height={24} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-medium" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {s.title}
                  </span>
                  <ArrowUpRight className="size-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
