import SiteShell from "@/components/site-shell"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <SiteShell>
      <Header />
      <main className="container mx-auto px-4 py-10 space-y-10">
        <section>
          <h1 className="text-3xl md:text-5xl mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Design System — Foundations
          </h1>
          <p className="text-muted-foreground">Couleurs, typographies, composants, icônes.</p>
        </section>

        <section className="grid md:grid-cols-4 gap-6">
          <div className="rounded-xl border border-[var(--lux-border)] p-4 bg-white">
            <div className="h-16 rounded-md" style={{ background: "#F8F8F5" }} />
            <p className="mt-2 text-sm">Blanc cassé #F8F8F5</p>
          </div>
          <div className="rounded-xl border border-[var(--lux-border)] p-4 bg-white">
            <div className="h-16 rounded-md" style={{ background: "#1C1C1C" }} />
            <p className="mt-2 text-sm">Anthracite #1C1C1C</p>
          </div>
          <div className="rounded-xl border border-[var(--lux-border)] p-4 bg-white">
            <div className="h-16 rounded-md" style={{ background: "#C9A568" }} />
            <p className="mt-2 text-sm">Doré mat #C9A568</p>
          </div>
          <div className="rounded-xl border border-[var(--lux-border)] p-4 bg-white">
            <div className="h-16 rounded-md bg-[var(--lux-muted)]" />
            <p className="mt-2 text-sm">Muted</p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[var(--lux-border)] p-6 bg-white">
            <h3 className="text-lg mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Typographies
            </h3>
            <p className="text-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Playfair Display — Titres
            </p>
            <p className="mt-2">Lato — Corps de texte</p>
          </div>
          <div className="rounded-xl border border-[var(--lux-border)] p-6 bg-white">
            <h3 className="text-lg mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Boutons
            </h3>
            <div className="flex gap-3">
              <Button className="bg-[var(--lux-gold)] text-[var(--lux-text)] rounded-full">CTA principal</Button>
              <Button variant="outline" className="rounded-full bg-transparent">
                Secondaire
              </Button>
              <Badge className="rounded-full">Badge</Badge>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  )
}
