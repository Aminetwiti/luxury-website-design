import SiteShell from "@/components/site-shell"
import Header from "@/components/header"
import Footer from "@/components/footer"
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
                src="/images/ConstructionNeuve_Hero_VillaIconique.png"
                alt="Construction neuve haut de gamme"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h1 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {copy.construction.title}
                </h1>
                <p className="mt-2 text-sm md:text-base text-white/90 max-w-3xl">{copy.construction.subtitle}</p>
              </div>
            </div>
            <div className="p-6 md:p-10">
              <p className="text-muted-foreground max-w-3xl">{copy.construction.description}</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Phases de projet
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AVP",
                desc: "Avant‑Projet : plans, études, faisabilité.",
                src: "/images/ConstructionNeuve_Phase_AVP_PlanElegant.png",
              },
              {
                title: "EXE",
                desc: "Exécution : chantier, détails techniques.",
                src: "/images/ConstructionNeuve_Phase_EXE_ChantierAction.png",
              },
              {
                title: "Livraison",
                desc: "Rendu final : mise en service, finitions.",
                src: "/images/ConstructionNeuve_Phase_Final_Render3D.png",
              },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-[var(--lux-border)] bg-white">
                <img src={c.src || "/placeholder.svg"} alt={c.title} className="w-full h-56 object-cover" />
                <div className="p-5">
                  <h3 className="font-medium">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  )
}
