"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { copy } from "@/lib/copy"
import { useIsMobile } from "./3d-animations"
import { Check, AlertCircle } from "lucide-react"

type Kind = "Particulier" | "Architecte" | "Promoteur"

export default function MobileOptimizedForm() {
  const [kind, setKind] = useState<Kind>("Particulier")
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isMobile = useIsMobile()
  const formRef = useRef<HTMLFormElement>(null)
  const c = copy.contact.form.fields

  const validateField = (name: string, value: string) => {
    const errors: Record<string, string> = {}

    switch (name) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors[name] = "Email invalide"
        }
        break
      case "name":
      case "firstName":
        if (value.length < 2) {
          errors[name] = "Minimum 2 caractères"
        }
        break
      case "message":
        if (value.length < 10) {
          errors[name] = "Message trop court (min. 10 caractères)"
        }
        break
    }

    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false)
      formRef.current?.reset()
    }, 3000)
  }

  const handleFieldChange = (name: string, value: string) => {
    const errors = validateField(name, value)
    setValidationErrors((prev) => ({
      ...prev,
      ...errors,
      ...(Object.keys(errors).length === 0 ? { [name]: "" } : {}),
    }))
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="size-8 text-green-600" />
        </div>
        <h3 className="text-xl font-medium mb-2">Message envoyé !</h3>
        <p className="text-muted-foreground">Nous vous recontacterons sous 24h.</p>
      </div>
    )
  }

  return (
    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
      {/* Sélecteur de type avec animations */}
      <div className="flex gap-2 flex-wrap">
        {(["Particulier", "Architecte", "Promoteur"] as const).map((k) => (
          <button
            key={k}
            type="button"
            className={cn(
              "px-4 py-2 rounded-full text-sm border transition-all duration-300 transform-gpu",
              "min-h-[44px] min-w-[100px]", // Taille tactile optimale
              kind === k
                ? "border-[var(--lux-gold)] text-[var(--lux-gold)] bg-[var(--lux-gold)]/5 scale-105"
                : "border-[var(--lux-border)] hover:border-[var(--lux-gold)] hover:scale-105",
            )}
            onClick={() => setKind(k)}
            aria-pressed={kind === k}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Champs avec animations de focus */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <Input
            name="name"
            placeholder={c.name}
            required
            className={cn(
              "transition-all duration-300 transform-gpu min-h-[48px]",
              focusedField === "name" && !isMobile ? "scale-105 shadow-lg" : "",
              validationErrors.name ? "border-red-500" : "",
            )}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            onChange={(e) => handleFieldChange("name", e.target.value)}
          />
          {validationErrors.name && (
            <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
              <AlertCircle className="size-3" />
              {validationErrors.name}
            </div>
          )}
        </div>
        <div className="relative">
          <Input
            name="firstName"
            placeholder={c.firstName}
            required
            className={cn(
              "transition-all duration-300 transform-gpu min-h-[48px]",
              focusedField === "firstName" && !isMobile ? "scale-105 shadow-lg" : "",
              validationErrors.firstName ? "border-red-500" : "",
            )}
            onFocus={() => setFocusedField("firstName")}
            onBlur={() => setFocusedField(null)}
            onChange={(e) => handleFieldChange("firstName", e.target.value)}
          />
          {validationErrors.firstName && (
            <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
              <AlertCircle className="size-3" />
              {validationErrors.firstName}
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <Input
            name="email"
            placeholder={c.email}
            type="email"
            required
            className={cn(
              "transition-all duration-300 transform-gpu min-h-[48px]",
              focusedField === "email" && !isMobile ? "scale-105 shadow-lg" : "",
              validationErrors.email ? "border-red-500" : "",
            )}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            onChange={(e) => handleFieldChange("email", e.target.value)}
          />
          {validationErrors.email && (
            <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
              <AlertCircle className="size-3" />
              {validationErrors.email}
            </div>
          )}
        </div>
        <Input
          name="phone"
          placeholder={c.phone}
          type="tel"
          className={cn(
            "transition-all duration-300 transform-gpu min-h-[48px]",
            focusedField === "phone" && !isMobile ? "scale-105 shadow-lg" : "",
          )}
          onFocus={() => setFocusedField("phone")}
          onBlur={() => setFocusedField(null)}
        />
      </div>

      {kind !== "Particulier" && (
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            name="company"
            placeholder={c.company}
            className={cn(
              "transition-all duration-300 transform-gpu min-h-[48px]",
              focusedField === "company" && !isMobile ? "scale-105 shadow-lg" : "",
            )}
            onFocus={() => setFocusedField("company")}
            onBlur={() => setFocusedField(null)}
          />
          <Input
            name="function"
            placeholder={c.function}
            className={cn(
              "transition-all duration-300 transform-gpu min-h-[48px]",
              focusedField === "function" && !isMobile ? "scale-105 shadow-lg" : "",
            )}
            onFocus={() => setFocusedField("function")}
            onBlur={() => setFocusedField(null)}
          />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          name="projectLocation"
          placeholder={c.projectLocation}
          className={cn(
            "transition-all duration-300 transform-gpu min-h-[48px]",
            focusedField === "projectLocation" && !isMobile ? "scale-105 shadow-lg" : "",
          )}
          onFocus={() => setFocusedField("projectLocation")}
          onBlur={() => setFocusedField(null)}
        />
        <Input
          name="budget"
          placeholder={c.budget}
          className={cn(
            "transition-all duration-300 transform-gpu min-h-[48px]",
            focusedField === "budget" && !isMobile ? "scale-105 shadow-lg" : "",
          )}
          onFocus={() => setFocusedField("budget")}
          onBlur={() => setFocusedField(null)}
        />
      </div>

      <div className="relative">
        <Textarea
          name="message"
          placeholder={c.message}
          rows={6}
          required
          className={cn(
            "transition-all duration-300 transform-gpu resize-none",
            focusedField === "message" && !isMobile ? "scale-105 shadow-lg" : "",
            validationErrors.message ? "border-red-500" : "",
          )}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          onChange={(e) => handleFieldChange("message", e.target.value)}
        />
        {validationErrors.message && (
          <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
            <AlertCircle className="size-3" />
            {validationErrors.message}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <label className="text-xs text-muted-foreground flex items-start gap-2">
          <input type="checkbox" className="mt-1" required />
          <span>{copy.contact.form.privacy}</span>
        </label>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "bg-[var(--lux-gold)] text-[var(--lux-text)] rounded-full px-8 py-3 font-medium transition-all duration-300 transform-gpu min-h-[48px] min-w-[200px]",
            "hover:opacity-90 hover:scale-105 disabled:opacity-50 disabled:scale-100",
          )}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Envoi...
            </div>
          ) : (
            copy.contact.form.submit
          )}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center sm:text-right">{copy.contact.form.microcopy}</p>
    </form>
  )
}
