import ServicesSections from "@/components/services-sections"

export const metadata = {
  title: "Nos Services — Réhabilitation, Neuf, Durable",
  description:
    "Interventions structurelles, construction neuve haut de gamme, solutions bas carbone. Explications claires, bénéfices concrets, expertise avérée.",
}

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Nos Services
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Des solutions techniques lisibles et éprouvées pour des projets d'exception : réhabilitation, ouvertures
          structurelles, renforts, soutènements, diagnostics, construction neuve et développement durable.
        </p>
      </div>
      <ServicesSections />
    </section>
  )
}
