"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building, User, MessageSquare } from "lucide-react"
import Image from "next/image"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "263 Avenue de Grasse\n06400 Cannes, France",
    color: "text-blue-600",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "06 68 84 20 10",
    color: "text-green-600",
    href: "tel:+33668842010",
  },
  {
    icon: Mail,
    title: "Email",
    content: "rb@structiba.fr",
    color: "text-orange-600",
    href: "mailto:rb@structiba.fr",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Ven : 8h00 - 18h00\nSur RDV : Sam matin",
    color: "text-purple-600",
  },
]

const projectTypes = [
  "Construction neuve - Villa/Maison individuelle",
  "Construction neuve - Immeuble/Collectif",
  "Réhabilitation - Ouverture murs porteurs",
  "Réhabilitation - Renforcement structure",
  "Ingénierie parasismique",
  "Ouvrages extérieurs - Piscine",
  "Ouvrages extérieurs - Soutènement",
  "Diagnostic structural",
  "Autre projet",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    societe: "",
    typeProjet: "",
    localisation: "",
    budget: "",
    delais: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Message envoyé avec succès !</h1>
            <p className="text-lg text-gray-600 mb-8">
              Merci pour votre demande. Notre équipe vous contactera dans les plus brefs délais pour étudier votre
              projet.
            </p>
            <Button asChild className="bg-[#C9A568] hover:bg-[#B8956A]">
              <a href="/">Retour à l'accueil</a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/Contact_Professional_Office.jpg"
            alt="Bureau professionnel d'ingénierie"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactez <span className="text-[#C9A568]">nos Experts</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 text-center">
              Partagez-nous votre projet et obtenez une étude personnalisée de nos ingénieurs spécialisés.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-[#C9A568] to-[#B8956A] text-white p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                    Demande d'étude personnalisée
                  </CardTitle>
                  <p className="text-gray-100 text-sm sm:text-base">
                    Remplissez ce formulaire pour recevoir une proposition technique adaptée à votre projet.
                  </p>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Informations personnelles */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-[#C9A568]" />
                        Vos informations
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="prenom">Prénom *</Label>
                          <Input
                            id="prenom"
                            value={formData.prenom}
                            onChange={(e) => handleInputChange("prenom", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="nom">Nom *</Label>
                          <Input
                            id="nom"
                            value={formData.nom}
                            onChange={(e) => handleInputChange("nom", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="telephone">Téléphone</Label>
                          <Input
                            id="telephone"
                            type="tel"
                            value={formData.telephone}
                            onChange={(e) => handleInputChange("telephone", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <Label htmlFor="societe">Société / Organisation</Label>
                          <Input
                            id="societe"
                            value={formData.societe}
                            onChange={(e) => handleInputChange("societe", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Informations projet */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Building className="w-5 h-5 text-[#C9A568]" />
                        Votre projet
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="typeProjet">Type de projet *</Label>
                          <Select
                            value={formData.typeProjet}
                            onValueChange={(value) => handleInputChange("typeProjet", value)}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Sélectionnez le type de projet" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="localisation">Localisation</Label>
                            <Input
                              id="localisation"
                              value={formData.localisation}
                              onChange={(e) => handleInputChange("localisation", e.target.value)}
                              placeholder="Ville, département"
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="budget">Budget prévisionnel</Label>
                            <Select
                              value={formData.budget}
                              onValueChange={(value) => handleInputChange("budget", value)}
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Fourchette budgétaire" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="<5k">Moins de 5 000 €</SelectItem>
                                <SelectItem value="5k-15k">5 000 € - 15 000 €</SelectItem>
                                <SelectItem value="15k-30k">15 000 € - 30 000 €</SelectItem>
                                <SelectItem value="30k-50k">30 000 € - 50 000 €</SelectItem>
                                <SelectItem value=">50k">Plus de 50 000 €</SelectItem>
                                <SelectItem value="confidentiel">Confidentiel</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="delais">Délais souhaités</Label>
                          <Select value={formData.delais} onValueChange={(value) => handleInputChange("delais", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Échéance du projet" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">Urgent (&lt; 1 mois)</SelectItem>
                              <SelectItem value="court">Court terme (1-3 mois)</SelectItem>
                              <SelectItem value="moyen">Moyen terme (3-6 mois)</SelectItem>
                              <SelectItem value="long">Long terme (&gt; 6 mois)</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="message">Description du projet *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            placeholder="Décrivez votre projet, vos contraintes techniques, vos objectifs..."
                            rows={6}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C9A568] hover:bg-[#B8956A] text-white py-3 text-base sm:text-lg"
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer ma demande
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-xl">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon
                      const content = info.href ? (
                        <a href={info.href} className={`${info.color} hover:underline`}>
                          {info.content}
                        </a>
                      ) : (
                        <span className="text-gray-700">{info.content}</span>
                      )

                      return (
                        <div key={index} className="flex items-start gap-2 sm:gap-3">
                          <div className={`p-1.5 sm:p-2 rounded-full bg-gray-100`}>
                            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${info.color}`} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{info.title}</h4>
                            <div className="whitespace-pre-line text-sm sm:text-base break-words">{content}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader className="bg-[#C9A568] text-white">
                  <CardTitle className="text-xl">Réponse garantie</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        24h
                      </Badge>
                      <span className="text-sm text-gray-700">Première réponse</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Gratuit
                      </Badge>
                      <span className="text-sm text-gray-700">Devis et conseil initial</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Sur-mesure
                      </Badge>
                      <span className="text-sm text-gray-700">Solution adaptée</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-gray-50 to-gray-100">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Zones d'intervention</h4>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                    <div>
                      • <strong>PACA :</strong> Cannes, Nice, Antibes, Grasse , Paris
                    </div>
                    <div>
                      • <strong>Antilles :</strong> Martinique, Guadeloupe
                    </div>
                    <div>
                      • <strong>Projets spéciaux :</strong> France entière
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
