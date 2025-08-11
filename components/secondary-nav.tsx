"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type Item = { href: string; label: string }
type Props = { items?: Item[] }

export default function SecondaryNav({
  items = [
    { href: "#ouverture", label: "Ouverture trémie" },
    { href: "#murs-porteurs", label: "Murs porteurs" },
    { href: "#renforcement", label: "Renforcement" },
    { href: "#soutenement", label: "Soutènement" },
    { href: "#diagnostic", label: "Diagnostic" },
  ],
}: Props = {}) {
  const pathname = usePathname()
  return (
    <div className="sticky top-16 z-40 bg-[var(--lux-bg)] border-b border-[var(--lux-border)]">
      <div className="container mx-auto px-4">
        <nav className="flex gap-4 overflow-x-auto no-scrollbar py-3">
          {items.map((it) => {
            const active = pathname + it.href === pathname + window?.location?.hash // guard in SSR
            return (
              <Link
                key={it.href + it.label}
                href={it.href}
                className={cn(
                  "px-3 py-1 rounded-full border text-sm whitespace-nowrap",
                  "border-[var(--lux-border)] hover:border-[var(--lux-gold)] hover:text-[var(--lux-gold)]",
                )}
              >
                {it.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
