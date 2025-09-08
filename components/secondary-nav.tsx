"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface NavItem {
  id: string
  label: string
  href: string
}

const defaultNavItems: NavItem[] = [
  { id: "diagnostic", label: "Diagnostic", href: "#diagnostic" },
  { id: "conception", label: "Conception", href: "#conception" },
  { id: "realisation", label: "Réalisation", href: "#realisation" },
  { id: "suivi", label: "Suivi", href: "#suivi" },
]

interface SecondaryNavProps {
  items?: NavItem[]
  className?: string
}

export default function SecondaryNav({ items = defaultNavItems, className }: SecondaryNavProps) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => document.getElementById(item.id)).filter(Boolean)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id)
          break
        }
      }
    }

    // Only add scroll listener if window is available
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      handleScroll() // Call once to set initial state

      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [items])

  const scrollToSection = (href: string) => {
    if (typeof window === "undefined") return

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className={cn("sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <div className="flex space-x-8 overflow-x-auto">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
                  activeSection === item.id
                    ? "bg-[#C9A568] text-white"
                    : "text-gray-600 hover:text-[#C9A568] hover:bg-gray-50",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
