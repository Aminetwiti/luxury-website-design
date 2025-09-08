import Image from "next/image"
import { copy } from "@/lib/copy"
import { Check, Lightbulb, Users, Handshake } from "lucide-react"

export const metadata = {
  title: "À Propos — Notre Histoire et Équipe",
  description:
    "Découvrez l'histoire, les valeurs et l'équipe dirigeante d'Atelier Structure. Innovation, engagement et excellence au cœur de nos projets.",
}

export default function Page() {
  const c = copy.about
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
          <p className="text-gray-600 text-lg max-w-3xl">{c.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/images/APropos_Bureau_ReunionEquipe.png"
              alt="Réunion d'équipe au bureau"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">{c.history}</p>
          </div>
        </div>

        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Jalons clés
          </h2>
          <ol className="relative border-l border-gray-200 ml-6 pl-8 space-y-10">
            {c.timeline.map((item, i) => (
              <li key={i}>
                <div className="absolute w-4 h-4 bg-[#C9A568] rounded-full -left-2 border-4 border-white shadow" />
                <p className="text-lg font-semibold text-[#C9A568] mb-1">{item.year}</p>
                <p className="text-gray-600 leading-relaxed">{item.event}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {c.team.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.team.members.map((member, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 p-6 bg-white text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-100 mb-4">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={`Portrait de ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-[#C9A568] font-medium text-sm mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm italic mb-3">"{member.quote}"</p>
                <p className="text-gray-600 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {c.values.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Check, text: c.values.items[0].text },
              { icon: Lightbulb, text: c.values.items[1].text },
              { icon: Users, text: c.values.items[2].text },
              { icon: Handshake, text: c.values.items[3].text },
            ].map((value, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 p-8 bg-white text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <value.icon className="size-8 text-[#C9A568] mx-auto mb-4" />
                <p className="text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {c.partners.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {c.partners.quotes.map((q, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <blockquote className="text-gray-600 leading-relaxed mb-4 text-lg italic">"{q.quote}"</blockquote>
                <figcaption className="font-semibold">
                  {q.name} <span className="text-gray-500 font-normal">— {q.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <section className="py-16">
          <div className="rounded-2xl border border-gray-200 p-12 bg-white text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {c.cta}
            </h2>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#C9A568] text-white px-8 py-4 hover:bg-[#B8941F] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
