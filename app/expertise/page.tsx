import { Building2, Ruler, ShieldCheck, Leaf, Zap } from "lucide-react"
import { copy } from "@/lib/copy"
import Image from "next/image"

export const metadata = {
  title: "Notre Expertise — Ingénierie d'Excellence",
  description:
    "Rigueur technique, innovation et savoir-faire pour des projets durables et performants. Diagnostic, conception, réalisation, suivi qualité.",
}

export default function Page() {
  const c = copy.expertise
  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {c.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">{c.introduction}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/images/Expertise_EquipeTerrain_ChantierAction.png"
              alt="Équipe terrain en action sur un chantier"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-8">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Processus complet
            </h2>
            {[c.process.diagnostic, c.process.conception, c.process.realisation, c.process.suivi].map((step, i) => (
              <div key={i} className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-3">
                  <span className="inline-block size-3 rounded-full bg-[#C9A568]" aria-hidden />
                  {step.title}
                </h3>
                <p className="text-gray-600 pl-6">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {c.certifications.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mb-12">{c.certifications.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {c.certifications.logos.map((logo, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 p-6 bg-white flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-shadow duration-300"
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

        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {c.competencies.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Ruler, ...c.competencies.items[0] },
              { icon: Building2, ...c.competencies.items[1] },
              { icon: Leaf, ...c.competencies.items[2] },
              { icon: ShieldCheck, ...c.competencies.items[3] },
              { icon: Zap, ...c.competencies.items[4] },
            ].map((comp, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <comp.icon className="size-8 text-[#C9A568] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{comp.title}</h3>
                <p className="text-gray-600">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="py-16">
          <div className="rounded-2xl border border-gray-200 p-12 bg-white text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {c.cta.text}
            </h2>
            <p className="text-gray-600 text-lg mb-8">{c.cta.microcopy}</p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#C9A568] text-white px-8 py-4 hover:bg-[#B8941F] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                {c.cta.button}
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
