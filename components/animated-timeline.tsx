"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Hammer, Layout, Truck } from "lucide-react"
import { useScrollAnimation, useIsMobile } from "./3d-animations"

const steps = [
  { icon: Layout, title: "AVP", desc: "Avant‑Projet : études, faisabilité, budget." },
  { icon: Hammer, title: "EXE", desc: "Exécution : détails techniques, coordination." },
  { icon: Truck, title: "Livraison", desc: "Réception et mise en service sans défaut." },
]

export default function AnimatedTimeline() {
  const scrollRef = useScrollAnimation()
  const isMobile = useIsMobile()
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    if (isMobile) {
      setVisibleSteps([0, 1, 2])
      return
    }

    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, index])
            }, index * 200)
          }
        },
        { threshold: 0.5 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [isMobile])

  return (
    <div ref={scrollRef} className="relative opacity-0 translate-y-8 transition-all duration-1000 animate-in">
      {/* Ligne de connexion animée */}
      <div className="absolute left-8 right-8 top-6 h-px bg-[var(--lux-border)] hidden md:block overflow-hidden">
        <div
          className="h-full bg-[var(--lux-gold)] transition-all duration-2000 ease-out"
          style={{
            width: `${(visibleSteps.length / steps.length) * 100}%`,
            transformOrigin: "left",
          }}
        />
      </div>

      <ol className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <li key={s.title} ref={(el) => (stepRefs.current[i] = el)} className="relative">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div
                  className={`size-12 rounded-full bg-white border border-[var(--lux-border)] flex items-center justify-center transition-all duration-700 transform-gpu ${
                    visibleSteps.includes(i) ? "scale-100 opacity-100 rotate-0" : "scale-75 opacity-50 rotate-45"
                  } ${!isMobile && visibleSteps.includes(i) ? "hover:scale-110 hover:-rotate-12" : ""}`}
                  style={{
                    transitionDelay: `${i * 200}ms`,
                    boxShadow: visibleSteps.includes(i) ? "0 4px 20px rgba(201, 165, 104, 0.3)" : "none",
                  }}
                >
                  <s.icon
                    className={`size-5 transition-all duration-500 ${
                      visibleSteps.includes(i) ? "text-[var(--lux-gold)]" : "text-gray-400"
                    }`}
                  />
                </div>
                {i === steps.length - 1 && visibleSteps.includes(i) && (
                  <Check
                    className="size-4 text-green-600 absolute -right-1 -bottom-1 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "1s" }}
                  />
                )}
              </div>
              <div
                className={`transition-all duration-700 transform-gpu ${
                  visibleSteps.includes(i) ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 200 + 300}ms` }}
              >
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
