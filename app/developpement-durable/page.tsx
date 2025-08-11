import SiteShell from "@/components/site-shell"
import AnimatedHeader from "@/components/animated-header"
import AnimatedFooter from "@/components/animated-footer"
import AnimatedMaterialCards from "@/components/animated-material-cards"
import Image from "next/image"
import { copy } from "@/lib/copy"
import { BarChart, LineChart, PieChart } from "lucide-react"

export const metadata = {
  title: "Développement Durable — Construire Demain",
  description:
    "Solutions innovantes et éco-responsables pour la construction. Béton de chanvre, bois, bas carbone. Performance et durabilité.",
}

export default function Page() {
  const c = copy.sustainable
  return (
    <SiteShell>
      <AnimatedHeader />
      <main>
        <section className="container mx-auto px-4 py-10">
          <div className="rounded-3xl overflow-hidden border border-[var(--lux-border)] bg-white animate-in fade-in-0 zoom-in-95 duration-1000">
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/Durable_Hero_MateriauxNobles.png"
                alt="Construction durable — matériaux nobles"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h1
                  className="text-3xl md:text-5xl animate-in slide-in-from-bottom-8 duration-1000 delay-300"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {c.title}
                </h1>
                <p className="mt-2 text-sm md:text-base text-white/90 max-w-3xl animate-in slide-in-from-bottom-8 duration-1000 delay-500">
                  {c.subtitle}
                </p>
              </div>
            </div>
            <div className="p-6 md:p-10">
              <p className="text-muted-foreground max-w-3xl animate-in slide-in-from-bottom-8 duration-1000 delay-700">
                {c.introduction}
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <h2
            className="text-2xl md:text-3xl mb-6 animate-in slide-in-from-left-8 duration-1000"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Fiches matériaux interactives
          </h2>
          <AnimatedMaterialCards />
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            {[c.materials.chanvre, c.materials.bois, c.materials.bascarbone].map((material, index) => (
              <div
                key={material.title}
                className="rounded-xl border border-[var(--lux-border)] bg-white p-4 transform-gpu hover:scale-105 hover:shadow-lg transition-all duration-500 animate-in slide-in-from-bottom-8"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="font-medium">{material.title}</h3>
                <p className="text-muted-foreground mt-1">{material.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <h2
            className="text-2xl md:text-3xl mb-6 animate-in slide-in-from-left-8 duration-1000"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Infographies & Comparatifs
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8 animate-in slide-in-from-left-8 duration-1000 delay-200">
            Présentations visuelles modernes illustrant la comparaison entre matériaux classiques et durables en termes
            d'impact carbone, de coûts sur le cycle de vie et d'efficacité énergétique.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: BarChart, title: "Impact Carbone", desc: "Réduction des émissions de CO2.", color: "#10B981" },
              {
                icon: PieChart,
                title: "Coût Global",
                desc: "Analyse sur le cycle de vie du bâtiment.",
                color: "#F59E0B",
              },
              {
                icon: LineChart,
                title: "Performance Énergétique",
                desc: "Optimisation de la consommation.",
                color: "#8B5CF6",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--lux-border)] p-6 bg-white text-center transform-gpu hover:scale-105 hover:shadow-xl transition-all duration-500 animate-in slide-in-from-bottom-8"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <item.icon
                  className="size-12 mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  style={{ color: item.color }}
                />
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="rounded-2xl border border-[var(--lux-border)] p-8 bg-white text-center transform-gpu hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-in zoom-in-95 duration-1000">
            <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {c.cta}
            </h2>
            <div className="mt-4 flex justify-center">
              <a
                href="/contact"
                className="rounded-full bg-[var(--lux-gold)] text-[var(--lux-text)] px-6 py-2 hover:opacity-90 transition-all duration-300 transform-gpu hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contactez nos experts durables
              </a>
            </div>
          </div>
        </section>
      </main>
      <AnimatedFooter />
    </SiteShell>
  )
}
