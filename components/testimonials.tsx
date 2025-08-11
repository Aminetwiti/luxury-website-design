import Image from "next/image"

const items = [
  {
    name: "S. Delacroix",
    role: "Propriétaire — Paris 7e",
    quote:
      "Équipe d’une rigueur rare. Ouverture de murs porteurs et finitions impeccables. Un partenariat de confiance.",
    avatarQuery: "portrait%20architectural%20luxury%20style",
  },
  {
    name: "Atelier L.",
    role: "Agence d’architecture — PACA",
    quote: "Coordination chantier exemplaire et expertise structurelle pointue. Délais tenus malgré la complexité.",
    avatarQuery: "portrait%20architect%20studio%20minimal",
  },
  {
    name: "C. Moreau",
    role: "Promoteur — Antilles",
    quote: "Solutions bas carbone pertinentes, sans compromis esthétique. Un référent technique fiable.",
    avatarQuery: "portrait%20developer%20premium",
  },
]

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20" aria-label="Témoignages">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <figure key={i} className="rounded-2xl border border-[var(--lux-border)] bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={`/abstract-geometric-shapes.png?height=96&width=96&query=${t.avatarQuery}`}
                  alt={`Portrait de ${t.name}`}
                  fill
                />
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
