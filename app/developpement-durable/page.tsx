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
    <>
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm animate-in fade-in-0 zoom-in-95 duration-1000">
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/Durable_Hero_MateriauxNobles.png"
              alt="Construction durable — matériaux nobles"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 animate-in slide-in-from-bottom-8 duration-1000 delay-300"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {c.title}
              </h1>
              <p className="text-lg text-white/90 max-w-3xl animate-in slide-in-from-bottom-8 duration-1000 delay-500">
                {c.subtitle}
              </p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-gray-600 text-lg max-w-3xl animate-in slide-in-from-bottom-8 duration-1000 delay-700">
              {c.introduction}
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 animate-in slide-in-from-left-8 duration-1000"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Fiches matériaux interactives
        </h2>
        <AnimatedMaterialCards />
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[c.materials.chanvre, c.materials.bois, c.materials.bascarbone].map((material, index) => (
            <div
              key={material.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-500 animate-in slide-in-from-bottom-8"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-lg font-semibold mb-2">{material.title}</h3>
              <p className="text-gray-600">{material.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 animate-in slide-in-from-left-8 duration-1000"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Infographies & Comparatifs
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mb-12 animate-in slide-in-from-left-8 duration-1000 delay-200">
          Présentations visuelles modernes illustrant la comparaison entre matériaux classiques et durables en termes
          d'impact carbone, de coûts sur le cycle de vie et d'efficacité énergétique.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
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
              className="rounded-2xl border border-gray-200 p-8 bg-white text-center shadow-sm hover:shadow-lg transition-all duration-500 animate-in slide-in-from-bottom-8"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <item.icon
                className="size-12 mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:rotate-12"
                style={{ color: item.color }}
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="rounded-2xl border border-gray-200 p-12 bg-white text-center shadow-sm hover:shadow-lg transition-all duration-500 animate-in zoom-in-95 duration-1000">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {c.cta}
          </h2>
          <div className="mt-8 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#C9A568] text-white px-8 py-4 hover:bg-[#B8941F] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              Contactez nos experts durables
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
