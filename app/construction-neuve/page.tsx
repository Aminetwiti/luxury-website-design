import { copy } from "@/lib/copy"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/ConstructionNeuve_Hero_VillaIconique.png"
              alt="Construction neuve haut de gamme"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {copy.construction.title}
              </h1>
              <p className="text-lg text-white/90 max-w-3xl">{copy.construction.subtitle}</p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-gray-600 text-lg max-w-3xl">{copy.construction.description}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Phases de projet
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AVP",
              desc: "Avant‑Projet : plans, études, faisabilité.",
              src: "/images/ConstructionNeuve_Phase_AVP_PlanElegant.png",
            },
            {
              title: "EXE",
              desc: "Exécution : chantier, détails techniques.",
              src: "/images/ConstructionNeuve_Phase_EXE_ChantierAction.png",
            },
            {
              title: "Livraison",
              desc: "Rendu final : mise en service, finitions.",
              src: "/images/ConstructionNeuve_Phase_Final_Render3D.png",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={c.src || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
