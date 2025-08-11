import SiteShell from "@/components/site-shell"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesSections from "@/components/services-sections"

export const metadata = {
  title: "Nos Services — Réhabilitation, Neuf, Durable",
  description:
    "Interventions structurelles, construction neuve haut de gamme, solutions bas carbone. Explications claires, bénéfices concrets, expertise avérée.",
}

export default function Page() {
  return (
    <SiteShell>
      <Header />
      <main>
        <section className="container mx-auto px-4 py-10">
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Nos Services
            </h1>
            <p className="text-muted-foreground mt-2 max-w-3xl">
              Des solutions techniques lisibles et éprouvées pour des projets d’exception : réhabilitation, ouvertures
              structurelles, renforts, soutènements, diagnostics, construction neuve et développement durable.
            </p>
          </div>
          <ServicesSections />
        </section>
      </main>
      <Footer />
    </SiteShell>
  )
}
