import SiteShell from "@/components/site-shell"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Building2, Ruler, ShieldCheck, Leaf, Zap } from "lucide-react"
import { copy } from "@/lib/copy"
import Image from "next/image"

export const metadata = {
  title: "Notre Expertise — Ingénierie d’Excellence",
  description:
    "Rigueur technique, innovation et savoir-faire pour des projets durables et performants. Diagnostic, conception, réalisation, suivi qualité.",
}

export default function Page() {
  const c = copy.expertise
  return (
    <SiteShell>
      <Header />
      <main>
        <section className="container mx-auto px-4 py-10">
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {c.title}
            </h1>
            <p className="text-muted-foreground mt-2 max-w-3xl">{c.introduction}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--lux-border)]">
              <Image
                src="/images/Expertise_EquipeTerrain_ChantierAction.png"
                alt="Équipe terrain en action sur un chantier"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Processus complet
              </h2>
              {[c.process.diagnostic, c.process.conception, c.process.realisation, c.process.suivi].map((step, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <span className="inline-block size-2 rounded-full bg-[var(--lux-gold)]" aria-hidden />
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {c.certifications.title}
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-8">{c.certifications.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {c.certifications.logos.map((logo, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[var(--lux-border)] p-4 bg-white flex items-center justify-center h-24"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {c.competencies.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Ruler, ...c.competencies.items[0] },
                { icon: Building2, ...c.competencies.items[1] },
                { icon: Leaf, ...c.competencies.items[2] },
                { icon: ShieldCheck, ...c.competencies.items[3] },
                { icon: Zap, ...c.competencies.items[4] },
              ].map((comp, i) => (
                <div key={i} className="rounded-2xl border border-[var(--lux-border)] p-6 bg-white">
                  <comp.icon className="size-5 text-[var(--lux-gold)]" />
                  <h3 className="mt-3 font-medium">{comp.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <section className="container mx-auto px-4 py-12 md:py-20">
            <div className="rounded-2xl border border-[var(--lux-border)] p-8 bg-white text-center">
              <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                {c.cta.text}
              </h2>
              <p className="mt-2 text-muted-foreground">{c.cta.microcopy}</p>
              <div className="mt-4 flex justify-center">
                <a
                  href="/contact"
                  className="rounded-full bg-[var(--lux-gold)] text-[var(--lux-text)] px-6 py-2 hover:opacity-90"
                >
                  {c.cta.button}
                </a>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </SiteShell>
  )
}
