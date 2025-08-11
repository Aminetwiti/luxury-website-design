import SiteShell from "@/components/site-shell"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SecondaryNav from "@/components/secondary-nav"
import BeforeAfter from "@/components/before-after"
import { copy } from "@/lib/copy"

export default function Page() {
  return (
    <SiteShell>
      <Header />
      <main>
        <section className="container mx-auto px-4 py-10">
          <div className="rounded-3xl overflow-hidden border border-[var(--lux-border)] bg-white">
            <div className="relative h-64 md:h-96">
              <img
                src="/images/Rehabilitation_Hero_StructureElegante.png"
                alt="Réhabilitation structurelle"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h1 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {copy.rehabilitation.title}
                </h1>
                <p className="mt-2 text-sm md:text-base text-white/90 max-w-3xl">{copy.rehabilitation.subtitle}</p>
              </div>
            </div>
            <div className="p-6 md:p-10">
              <p className="text-muted-foreground max-w-3xl">{copy.rehabilitation.description}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {copy.rehabilitation.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 inline-block size-1.5 rounded-full bg-[var(--lux-gold)]" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <SecondaryNav />

        <section id="avant-apres" className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Avant / Après
          </h2>
          <BeforeAfter
            beforeSrc="/images/Rehabilitation_Avant_MurPorteur.png"
            afterSrc="/images/Rehabilitation_Apres_EspaceRaffine.png"
          />
        </section>
      </main>
      <Footer />
    </SiteShell>
  )
}
