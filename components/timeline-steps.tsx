import { Check, Hammer, Layout, Truck } from "lucide-react"

const steps = [
  { icon: Layout, title: "AVP", desc: "Avant‑Projet : études, faisabilité, budget." },
  { icon: Hammer, title: "EXE", desc: "Exécution : détails techniques, coordination." },
  { icon: Truck, title: "Livraison", desc: "Réception et mise en service sans défaut." },
]

export default function TimelineSteps() {
  return (
    <div className="relative">
      <div className="absolute left-8 right-8 top-6 h-px bg-[var(--lux-border)] hidden md:block" />
      <ol className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <li key={s.title} className="relative">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="size-12 rounded-full bg-white border border-[var(--lux-border)] flex items-center justify-center">
                  <s.icon className="size-5 text-[var(--lux-gold)]" />
                </div>
                {i === steps.length - 1 && (
                  <Check className="size-4 text-green-600 absolute -right-1 -bottom-1 bg-white rounded-full" />
                )}
              </div>
              <div>
                <p className="font-medium">{s.title}</p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
