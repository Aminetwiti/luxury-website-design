"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { copy } from "@/lib/copy"

type Kind = "Particulier" | "Architecte" | "Promoteur"

export default function ContactForm() {
  const [kind, setKind] = useState<Kind>("Particulier")
  const c = copy.contact.form.fields

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault()
        alert("Formulaire soumis (démo). Nous vous recontacterons.")
      }}
    >
      <div className="flex gap-2">
        {(["Particulier", "Architecte", "Promoteur"] as const).map((k) => (
          <button
            key={k}
            type="button"
            className={cn(
              "px-3 py-1 rounded-full text-sm border",
              kind === k
                ? "border-[var(--lux-gold)] text-[var(--lux-gold)]"
                : "border-[var(--lux-border)] hover:border-[var(--lux-gold)]",
            )}
            onClick={() => setKind(k)}
            aria-pressed={kind === k}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input placeholder={c.name} required />
        <Input placeholder={c.firstName} required />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input placeholder={c.email} type="email" required />
        <Input placeholder={c.phone} type="tel" />
      </div>

      {kind !== "Particulier" && (
        <div className="grid md:grid-cols-2 gap-4">
          <Input placeholder={c.company} />
          <Input placeholder={c.function} />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <Input placeholder={c.projectLocation} />
        <Input placeholder={c.budget} />
      </div>

      <Textarea placeholder={c.message} rows={6} required />

      <div className="flex items-center justify-between">
        <label className="text-xs text-muted-foreground">
          <input type="checkbox" className="mr-2 align-middle" required /> {copy.contact.form.privacy}
        </label>
        <Button className="bg-[var(--lux-gold)] text-[var(--lux-text)] rounded-full px-6 hover:opacity-90">
          {copy.contact.form.submit}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-right">{copy.contact.form.microcopy}</p>
    </form>
  )
}
