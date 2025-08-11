"use client"

import type React from "react"

import { useState } from "react"
import { SiteShell } from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building, Users, Award } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      })
    }, 5000)
  }

  return (
    <SiteShell>
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/Contact_Fond_TextureBetonLisse.png" alt="Texture béton" fill className="object-cover" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Parlons de votre projet. Notre équipe d'experts est à votre écoute pour transformer vos idées en réalité
                architecturale.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Building className="size-4" />
                  <span>15 ans d'expérience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4" />
                  <span>50+ projets réalisés</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="size-4" />
                  <span>Certifié HQE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2
                    className="text-3xl font-bold mb-8"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Nos coordonnées
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <Phone className="size-6 text-[var(--lux-gold)] mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Téléphone</h3>
                        <p className="text-gray-600">+33 1 42 12 34 56</p>
                        <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <Mail className="size-6 text-[var(--lux-gold)] mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">contact@atelier-structure.fr</p>
                        <p className="text-sm text-gray-500">Réponse sous 24h</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <MapPin className="size-6 text-[var(--lux-gold)] mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Adresse</h3>
                        <p className="text-gray-600">
                          123 Avenue des Champs-Élysées
                          <br />
                          75008 Paris, France
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <Clock className="size-6 text-[var(--lux-gold)] mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Horaires</h3>
                        <p className="text-gray-600">
                          Lundi - Vendredi : 9h00 - 18h00
                          <br />
                          Samedi : 9h00 - 12h00
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-semibold mb-4">Notre localisation</h3>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <MapPin className="size-8 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="size-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                      <p className="text-gray-600">
                        Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2
                        className="text-3xl font-bold mb-6"
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        Votre projet
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Nom complet *</Label>
                            <Input
                              id="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              className="mt-1"
                              placeholder="Votre nom"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              className="mt-1"
                              placeholder="votre@email.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Téléphone</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className="mt-1"
                              placeholder="06 12 34 56 78"
                            />
                          </div>
                          <div>
                            <Label htmlFor="company">Société</Label>
                            <Input
                              id="company"
                              type="text"
                              value={formData.company}
                              onChange={(e) => handleInputChange("company", e.target.value)}
                              className="mt-1"
                              placeholder="Nom de votre société"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="projectType">Type de projet</Label>
                          <select
                            id="projectType"
                            value={formData.projectType}
                            onChange={(e) => handleInputChange("projectType", e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)] focus:border-[var(--lux-gold)]"
                          >
                            <option value="">Sélectionnez un type</option>
                            <option value="rehabilitation">Réhabilitation</option>
                            <option value="construction-neuve">Construction neuve</option>
                            <option value="durable">Développement durable</option>
                            <option value="diagnostic">Diagnostic technique</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>

                        <div>
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            className="mt-1"
                            placeholder="Décrivez votre projet, vos besoins, vos contraintes..."
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[var(--lux-gold)] text-[var(--lux-text)] hover:opacity-90 rounded-full py-3"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send className="size-4 mr-2" />
                              Envoyer le message
                            </>
                          )}
                        </Button>
                      </form>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe et nos{" "}
                        <a href="#" className="text-[var(--lux-gold)] hover:underline">
                          conditions d'utilisation
                        </a>
                        .
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-3xl font-bold text-center mb-12"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Questions fréquentes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Quels sont vos délais d'intervention ?</h3>
                    <p className="text-gray-600 text-sm">
                      Nous proposons un premier diagnostic sous 48h et un devis détaillé sous 5 jours ouvrés.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Intervenez-vous sur toute la France ?</h3>
                    <p className="text-gray-600 text-sm">
                      Nos équipes sont basées à Paris, PACA et aux Antilles. Nous étudions les projets dans d'autres
                      régions au cas par cas.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Proposez-vous un suivi post-livraison ?</h3>
                    <p className="text-gray-600 text-sm">
                      Oui, nous assurons un suivi technique pendant 2 ans après la livraison de votre projet.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Quelles sont vos certifications ?</h3>
                    <p className="text-gray-600 text-sm">
                      Nous sommes certifiés ISO 9001, HQE et agréés par le CSTB pour nos solutions techniques.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Comment se déroule un projet type ?</h3>
                    <p className="text-gray-600 text-sm">
                      Diagnostic → Conception → Validation → Réalisation → Livraison → Suivi. Chaque étape fait l'objet
                      d'une validation client.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Travaillez-vous avec des architectes ?</h3>
                    <p className="text-gray-600 text-sm">
                      Absolument. Nous collaborons régulièrement avec des architectes et bureaux d'études partenaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
