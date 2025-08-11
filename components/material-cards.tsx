"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

type Material = {
  key: string
  title: string
  desc: string
  data: { metric: string; value: number }[]
}

const materials: Material[] = [
  {
    key: "chanvre",
    title: "Béton chanvre",
    desc: "Excellent confort hygrothermique, faible empreinte carbone.",
    data: [
      { metric: "Performance", value: 85 },
      { metric: "Coût", value: 65 },
      { metric: "Durabilité", value: 80 },
    ],
  },
  {
    key: "bois",
    title: "Structure bois",
    desc: "Rapidité de mise en œuvre, esthétique chaleureuse.",
    data: [
      { metric: "Performance", value: 80 },
      { metric: "Coût", value: 70 },
      { metric: "Durabilité", value: 75 },
    ],
  },
  {
    key: "bascarbone",
    title: "Béton bas carbone",
    desc: "Réduction significative des émissions ; robustesse équivalente.",
    data: [
      { metric: "Performance", value: 90 },
      { metric: "Coût", value: 72 },
      { metric: "Durabilité", value: 90 },
    ],
  },
]

export default function MaterialCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {materials.map((m) => (
        <Card key={m.key} className="border-[var(--lux-border)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-[var(--lux-gold)]" aria-hidden />
              {m.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{m.desc}</p>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={m.data} margin={{ left: -20, right: 0, top: 10, bottom: 0 }}>
                  <XAxis dataKey="metric" tickLine={false} axisLine={{ stroke: "var(--lux-border)" }} />
                  <YAxis tickLine={false} axisLine={{ stroke: "var(--lux-border)" }} />
                  <Tooltip contentStyle={{ borderRadius: 12, borderColor: "var(--lux-border)" }} />
                  <Bar dataKey="value" fill="#C9A568" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Info className="size-4" />
              Comparatif indicatif : valeurs normalisées sur 100.
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
