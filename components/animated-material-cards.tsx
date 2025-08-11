"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, TrendingUp, Leaf, Zap } from "lucide-react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"
import { useScrollAnimation, useIsMobile, Card3D } from "./3d-animations"
import { cn } from "@/lib/utils"
import { useState } from "react"

type Material = {
  key: string
  title: string
  desc: string
  icon: React.ComponentType<any>
  color: string
  data: { metric: string; value: number }[]
  benefits: string[]
}

const materials: Material[] = [
  {
    key: "chanvre",
    title: "Béton chanvre",
    desc: "Excellent confort hygrothermique, faible empreinte carbone.",
    icon: Leaf,
    color: "#10B981",
    data: [
      { metric: "Performance", value: 85 },
      { metric: "Coût", value: 65 },
      { metric: "Durabilité", value: 80 },
    ],
    benefits: ["Isolation naturelle", "Régulation humidité", "Carbone négatif"],
  },
  {
    key: "bois",
    title: "Structure bois",
    desc: "Rapidité de mise en œuvre, esthétique chaleureuse.",
    icon: TrendingUp,
    color: "#F59E0B",
    data: [
      { metric: "Performance", value: 80 },
      { metric: "Coût", value: 70 },
      { metric: "Durabilité", value: 75 },
    ],
    benefits: ["Montage rapide", "Flexibilité design", "Renouvelable"],
  },
  {
    key: "bascarbone",
    title: "Béton bas carbone",
    desc: "Réduction significative des émissions ; robustesse équivalente.",
    icon: Zap,
    color: "#8B5CF6",
    data: [
      { metric: "Performance", value: 90 },
      { metric: "Coût", value: 72 },
      { metric: "Durabilité", value: 90 },
    ],
    benefits: ["-40% CO2", "Résistance optimale", "Innovation ciment"],
  },
]

export default function AnimatedMaterialCards() {
  const scrollRef = useScrollAnimation()
  const isMobile = useIsMobile()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  return (
    <div ref={scrollRef} className="opacity-0 translate-y-8 transition-all duration-1000 animate-in">
      <div className="grid md:grid-cols-3 gap-6">
        {materials.map((m, index) => (
          <Card3D key={m.key} disabled={isMobile}>
            <Card
              className={cn(
                "border-[var(--lux-border)] cursor-pointer transition-all duration-500 transform-gpu h-full",
                hoveredCard === m.key && !isMobile ? "shadow-2xl border-[var(--lux-gold)]" : "",
                selectedCard === m.key ? "ring-2 ring-[var(--lux-gold)] ring-opacity-50" : "",
              )}
              onMouseEnter={() => setHoveredCard(m.key)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(selectedCard === m.key ? null : m.key)}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div
                    className={cn(
                      "p-2 rounded-lg transition-all duration-300 transform-gpu",
                      !isMobile && hoveredCard === m.key ? "scale-110 rotate-12" : "",
                    )}
                    style={{ backgroundColor: `${m.color}20` }}
                  >
                    <m.icon className="size-5 transition-all duration-300" style={{ color: m.color }} />
                  </div>
                  <span className="flex-1">{m.title}</span>
                  <span
                    className={cn(
                      "inline-block size-3 rounded-full transition-all duration-300 transform-gpu",
                      !isMobile && hoveredCard === m.key ? "scale-125 animate-pulse" : "",
                    )}
                    style={{ backgroundColor: m.color }}
                    aria-hidden
                  />
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>

                {/* Benefits badges avec animations */}
                <div className="flex flex-wrap gap-2">
                  {m.benefits.map((benefit, i) => (
                    <span
                      key={benefit}
                      className={cn(
                        "px-2 py-1 bg-gray-100 rounded-full text-xs font-medium transition-all duration-300 transform-gpu",
                        !isMobile && hoveredCard === m.key ? "scale-105" : "",
                        selectedCard === m.key ? "bg-[var(--lux-gold)]/20 text-[var(--lux-gold)]" : "",
                      )}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Chart avec animation */}
                <div
                  className={cn(
                    "h-40 transition-all duration-500 transform-gpu",
                    selectedCard === m.key ? "scale-105" : "",
                  )}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={m.data} margin={{ left: -20, right: 0, top: 10, bottom: 0 }}>
                      <XAxis
                        dataKey="metric"
                        tickLine={false}
                        axisLine={{ stroke: "var(--lux-border)" }}
                        fontSize={12}
                      />
                      <YAxis tickLine={false} axisLine={{ stroke: "var(--lux-border)" }} fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          borderRadius: 12,
                          borderColor: "var(--lux-border)",
                          backgroundColor: "white",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Bar
                        dataKey="value"
                        fill={m.color}
                        radius={[6, 6, 0, 0]}
                        className="transition-all duration-300"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Info footer avec animation */}
                <div
                  className={cn(
                    "flex items-center gap-2 text-xs text-muted-foreground transition-all duration-300 transform-gpu",
                    hoveredCard === m.key ? "translate-x-1" : "",
                  )}
                >
                  <Info className="size-4 flex-shrink-0" />
                  <span>Comparatif indicatif : valeurs normalisées sur 100.</span>
                </div>

                {/* Expanded content */}
                {selectedCard === m.key && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-in fade-in-0 slide-in-from-top-2">
                    <h4 className="font-medium mb-2">Détails techniques</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Mise en œuvre spécialisée</li>
                      <li>• Certifications environnementales</li>
                      <li>• Garanties étendues</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </Card3D>
        ))}
      </div>
    </div>
  )
}
