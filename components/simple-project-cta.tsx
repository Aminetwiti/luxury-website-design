"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface SimpleProjectCTAProps {
  projectTitle: string
  projectType: string
  className?: string
}

export function SimpleProjectCTA({ projectTitle, projectType, className }: SimpleProjectCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Bonjour, je suis intéressé(e) par le projet "${projectTitle}" et souhaiterais obtenir plus d'informations sur vos services en ${projectType}.`,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      // Annoncer les erreurs aux lecteurs d'écran
      const errorCount = Object.keys(errors).length
      const announcement = `${errorCount} erreur${errorCount > 1 ? "s" : ""} dans le formulaire. Veuillez corriger les champs indiqués.`
      announceToScreenReader(announcement)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    announceToScreenReader("Votre message a été envoyé avec succès. Nous vous recontacterons bientôt.")

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: `Bonjour, je suis intéressé(e) par le projet "${projectTitle}" et souhaiterais obtenir plus d'informations sur vos services en ${projectType}.`,
      })
    }, 3000)
  }

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = message
    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <section
        className={cn("bg-white rounded-lg shadow-lg border border-gray-200 p-8", className)}
        role="status"
        aria-live="polite"
      >
        <div className="text-center">
          <CheckCircle className="size-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
          <p className="text-gray-600">
            Merci pour votre intérêt. Nous vous recontacterons dans les plus brefs délais.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      className={cn("bg-white rounded-lg shadow-lg border border-gray-200 p-8", className)}
      aria-labelledby="cta-heading"
    >
      {/* Header */}
      <header className="text-center mb-8">
        <h3 id="cta-heading" className="text-2xl font-bold text-gray-900 mb-2">
          Intéressé par ce projet ?
        </h3>
        <p className="text-gray-600">Contactez-nous pour discuter de votre projet similaire</p>
      </header>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <a
          href="tel:+33142123456"
          className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-[var(--lux-gold)] hover:bg-[var(--lux-gold)]/5 transition-colors duration-200 focus-visible"
          aria-label="Appeler le 01 42 12 34 56"
        >
          <Phone className="size-5 text-[var(--lux-gold)]" aria-hidden="true" />
          <div>
            <p className="font-medium text-gray-900">Téléphone</p>
            <p className="text-sm text-gray-600">01 42 12 34 56</p>
          </div>
        </a>

        <a
          href="mailto:contact@atelier-structure.fr"
          className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-[var(--lux-gold)] hover:bg-[var(--lux-gold)]/5 transition-colors duration-200 focus-visible"
          aria-label="Envoyer un email à contact@atelier-structure.fr"
        >
          <Mail className="size-5 text-[var(--lux-gold)]" aria-hidden="true" />
          <div>
            <p className="font-medium text-gray-900">Email</p>
            <p className="text-sm text-gray-600">contact@atelier-structure.fr</p>
          </div>
        </a>

        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
          <MessageSquare className="size-5 text-[var(--lux-gold)]" aria-hidden="true" />
          <div>
            <p className="font-medium text-gray-900">Formulaire</p>
            <p className="text-sm text-gray-600">Réponse sous 24h</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <fieldset>
          <legend className="sr-only">Informations de contact</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="required-field">
                Nom complet
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={cn(
                  "mt-1 focus-visible",
                  errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500",
                )}
                placeholder="Votre nom"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <div id="name-error" className="error-message" role="alert">
                  <AlertCircle className="size-4" aria-hidden="true" />
                  {errors.name}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="required-field">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={cn(
                  "mt-1 focus-visible",
                  errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500",
                )}
                placeholder="votre@email.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <div id="email-error" className="error-message" role="alert">
                  <AlertCircle className="size-4" aria-hidden="true" />
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="mt-1 focus-visible"
              placeholder="06 12 34 56 78"
              aria-describedby="phone-help"
            />
            <div id="phone-help" className="text-xs text-gray-500 mt-1">
              Optionnel - pour vous recontacter plus rapidement
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="required-field">
              Message
            </Label>
            <Textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={cn(
                "mt-1 focus-visible",
                errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500",
              )}
              placeholder="Décrivez votre projet..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : "message-help"}
            />
            {errors.message ? (
              <div id="message-error" className="error-message" role="alert">
                <AlertCircle className="size-4" aria-hidden="true" />
                {errors.message}
              </div>
            ) : (
              <div id="message-help" className="text-xs text-gray-500 mt-1">
                Décrivez votre projet, vos besoins et vos contraintes
              </div>
            )}
          </div>
        </fieldset>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--lux-gold)] text-[var(--lux-text)] hover:opacity-90 rounded-full py-3 focus-visible min-h-[48px]"
          aria-describedby="submit-help"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" aria-hidden="true" />
              <span>Envoi en cours...</span>
              <span className="sr-only">Veuillez patienter, votre message est en cours d'envoi</span>
            </>
          ) : (
            <>
              <Send className="size-4 mr-2" aria-hidden="true" />
              Envoyer le message
            </>
          )}
        </Button>

        <div id="submit-help" className="text-xs text-gray-500 text-center">
          En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
        </div>
      </form>
    </section>
  )
}
