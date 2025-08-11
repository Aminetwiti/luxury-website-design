"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, MessageCircle, Phone, Mail, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "./3d-animations"

type ProjectCTASectionProps = {
  projectTitle: string
  projectType: string
  projectBudget?: string
}

export default function ProjectCTASection({ projectTitle, projectType, projectBudget }: ProjectCTASectionProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Bonjour, je suis intéressé(e) par un projet similaire à "${projectTitle}". Pourriez-vous me contacter pour discuter de mes besoins ?`,
  })
  const isMobile = useIsMobile()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setIsFormOpen(false)
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-[var(--lux-border)] p-8 bg-white text-center animate-in fade-in-0 zoom-in-95 duration-500">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="size-8 text-green-600" />
        </div>
        <h3 className="text-xl font-medium mb-2">Demande envoyée !</h3>
        <p className="text-muted-foreground">Nous vous recontacterons sous 24h pour discuter de votre projet.</p>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-[var(--lux-border)] bg-white overflow-hidden shadow-lg">
      {!isFormOpen ? (
        /* CTA Initial */
        <div className="p-8 text-center">
          <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Un projet similaire en tête ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Inspiré par ce projet de {projectType.toLowerCase()} ? Nos experts vous accompagnent pour concrétiser votre
            vision avec la même excellence technique et esthétique.
          </p>

          {/* Project Reference */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--lux-gold)]/10 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-[var(--lux-gold)] rounded-full"></span>
            <span>Référence : {projectTitle}</span>
            {projectBudget && (
              <>
                <span className="text-muted-foreground">•</span>
                <span className="font-medium">{projectBudget}</span>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => setIsFormOpen(true)}
              className={cn(
                "bg-[var(--lux-gold)] text-[var(--lux-text)] hover:opacity-90 rounded-full px-8 py-3 font-medium transition-all duration-300 transform-gpu shadow-lg",
                !isMobile && "hover:scale-105 hover:shadow-xl",
              )}
            >
              <MessageCircle className="size-4 mr-2" />
              Demander un devis personnalisé
              <ArrowRight className="size-4 ml-2" />
            </Button>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className={cn(
                  "rounded-full px-6 py-3 transition-all duration-300 transform-gpu",
                  !isMobile && "hover:scale-105",
                )}
                onClick={() => window.open("tel:+33123456789")}
              >
                <Phone className="size-4 mr-2" />
                Appeler
              </Button>

              <Button
                variant="outline"
                className={cn(
                  "rounded-full px-6 py-3 transition-all duration-300 transform-gpu",
                  !isMobile && "hover:scale-105",
                )}
                onClick={() => window.open("mailto:contact@atelier-structure.com")}
              >
                <Mail className="size-4 mr-2" />
                Email
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle className="size-4 text-green-600" />
              <span>Devis gratuit</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="size-4 text-green-600" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="size-4 text-green-600" />
              <span>Sans engagement</span>
            </div>
          </div>
        </div>
      ) : (
        /* Contact Form */
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-medium" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Parlez-nous de votre projet
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFormOpen(false)}
              className="text-muted-foreground hover:text-[var(--lux-text)]"
            >
              ← Retour
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Nom complet *"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="h-12"
              />
              <Input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="h-12"
              />
            </div>

            <Input
              type="tel"
              placeholder="Téléphone (optionnel)"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="h-12"
            />

            <Textarea
              placeholder="Décrivez votre projet..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={4}
              required
              className="resize-none"
            />

            <div className="flex items-center justify-between pt-4">
              <p className="text-xs text-muted-foreground">* Champs obligatoires. Vos données sont protégées.</p>
              <Button
                type="submit"
                className={cn(
                  "bg-[var(--lux-gold)] text-[var(--lux-text)] hover:opacity-90 rounded-full px-8 py-3 font-medium transition-all duration-300 transform-gpu",
                  !isMobile && "hover:scale-105",
                )}
              >
                Envoyer ma demande
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
