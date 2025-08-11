import SiteShell from "@/components/site-shell"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { copy } from "@/lib/copy"
import { Check, Lightbulb, Users, Handshake } from "lucide-react" // Example icons for values

export const metadata = {
  title: "À Propos — Notre Histoire et Équipe",
  description:
    "Découvrez l'histoire, les valeurs et l'équipe dirigeante d'Atelier Structure. Innovation, engagement et excellence au cœur de nos projets.",
}

export default function Page() {
  const c = copy.about
  return (
    <SiteShell>
      <Header />
      <main>
        <section className="container mx-auto px-4 py-10">
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {c.title}
            </h1>
            <p className="text-muted-foreground mt-2 max-w-3xl">{c.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--lux-border)]">
              <Image
                src="/images/APropos_Bureau_ReunionEquipe.png"
                alt="Réunion d'équipe au bureau"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <p>{c.history}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Jalons clés
            </h2>
            <ol className="relative border-l border-[var(--lux-border)] ml-4 pl-6 space-y-8">
              {c.timeline.map((item, i) => (
                <li key={i}>
                  <div className="absolute w-3 h-3 bg-[var(--lux-gold)] rounded-full mt-1.5 -left-1.5 border border-white" />
                  <p className="text-sm font-medium">{item.year}</p>
                  <p className="text-muted-foreground text-sm">{item.event}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {c.team.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.team.members.map((member, i) => (
                <div key={i} className="rounded-2xl border border-[var(--lux-border)] p-4 bg-white text-center">
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border border-[var(--lux-border)] mb-4">
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={`Portrait de ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                  <p className="text-xs mt-2 text-muted-foreground italic">“{member.quote}”</p>
                  <p className="text-xs mt-2 text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {c.values.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Check, text: c.values.items[0].text },
                { icon: Lightbulb, text: c.values.items[1].text },
                { icon: Users, text: c.values.items[2].text },
                { icon: Handshake, text: c.values.items[3].text },
              ].map((value, i) => (
                <div key={i} className="rounded-2xl border border-[var(--lux-border)] p-6 bg-white text-center">
                  <value.icon className="size-6 text-[var(--lux-gold)] mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">{value.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {c.partners.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {c.partners.quotes.map((q, i) => (
                <figure key={i} className="rounded-2xl border border-[var(--lux-border)] p-6 bg-white">
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">“{q.quote}”</blockquote>
                  <figcaption className="mt-3 font-medium text-sm">
                    {q.name} <span className="text-xs text-muted-foreground">— {q.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <section className="container mx-auto px-4 py-12 md:py-20">
            <div className="rounded-2xl border border-[var(--lux-border)] p-8 bg-white text-center">
              <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                {c.cta}
              </h2>
              <div className="mt-4 flex justify-center">
                <a
                  href="/contact"
                  className="rounded-full bg-[var(--lux-gold)] text-[var(--lux-text)] px-6 py-2 hover:opacity-90"
                >
                  Contactez-nous
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
