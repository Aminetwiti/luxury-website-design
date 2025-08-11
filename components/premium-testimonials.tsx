import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "S. Delacroix",
    role: "Propriétaire — Paris 7e",
    quote:
      "Équipe d'une rigueur rare. Ouverture de murs porteurs et finitions impeccables. Un partenariat de confiance absolue.",
    avatar: "/images/Testimonials_Portrait_Client1_BW.png",
    rating: 5,
  },
  {
    name: "Atelier L.",
    role: "Agence d'architecture — PACA",
    quote:
      "Coordination chantier exemplaire et expertise structurelle pointue. Délais tenus malgré la complexité technique.",
    avatar: "/images/Testimonials_Portrait_Client2_BW.png",
    rating: 5,
  },
  {
    name: "C. Moreau",
    role: "Promoteur — Antilles",
    quote: "Solutions bas carbone pertinentes, sans compromis esthétique. Un référent technique fiable et visionnaire.",
    avatar: "/images/Testimonials_Portrait_Client3_BW.png",
    rating: 5,
  },
]

export default function PremiumTestimonials() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20" aria-label="Témoignages clients">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Ils nous font confiance
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez les retours de nos clients sur nos projets d'exception
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="rounded-3xl border border-[var(--lux-border)] bg-white p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--lux-border)]">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={`Portrait de ${t.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <figcaption className="font-medium text-lg">{t.name}</figcaption>
                <p className="text-sm text-muted-foreground">{t.role}</p>
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <div key={j} className="w-3 h-3 rounded-full bg-[var(--lux-gold)]" />
                  ))}
                </div>
              </div>
            </div>
            <Quote className="size-6 text-[var(--lux-gold)] mb-4" />
            <blockquote className="text-muted-foreground leading-relaxed italic">"{t.quote}"</blockquote>
          </figure>
        ))}
      </div>
    </section>
  )
}
