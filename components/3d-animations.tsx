"use client"

import type React from "react"

import { useState } from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Hook pour détecter si on est sur mobile
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

// Animation d'entrée au scroll
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-in")
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}

// Composant pour animations 3D au hover
export function Card3D({
  children,
  className,
  disabled = false,
}: {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}) {
  const isMobile = useIsMobile()

  return (
    <div
      className={cn(
        "transform-gpu transition-all duration-300",
        !disabled && !isMobile && "hover:scale-105 hover:-rotate-1 hover:shadow-2xl",
        className,
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  )
}

// Animation de flip 3D pour témoignages
export function FlipCard({
  front,
  back,
  className,
}: {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const isMobile = useIsMobile()

  return (
    <div className={cn("relative w-full h-full", className)} style={{ perspective: "1000px" }}>
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-gpu",
          isFlipped && !isMobile ? "rotate-y-180" : "",
        )}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => !isMobile && setIsFlipped(!isFlipped)}
      >
        <div className="absolute inset-0 backface-hidden" style={{ backfaceVisibility: "hidden" }}>
          {front}
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180" style={{ backfaceVisibility: "hidden" }}>
          {back}
        </div>
      </div>
    </div>
  )
}
