"use client"

import Link from "next/link"
import { Phone } from "lucide-react"

export default function StickyCta() {
  return (
    <div className="fixed bottom-4 inset-x-0 px-4 z-40 md:hidden">
      <div className="mx-auto max-w-md rounded-full border border-[var(--lux-border)] bg-white/90 backdrop-blur shadow-sm">
        <div className="flex items-center justify-between p-2">
          <Link
            href="/contact"
            className="flex-1 text-center py-2 rounded-full bg-[var(--lux-gold)] text-[var(--lux-text)] font-medium"
          >
            Demander un diagnostic
          </Link>
          <a
            href="tel:+33123456789"
            className="ml-2 px-4 py-2 rounded-full border border-[var(--lux-border)] flex items-center gap-2"
          >
            <Phone className="size-4" />
            <span>Appeler</span>
          </a>
        </div>
      </div>
    </div>
  )
}
