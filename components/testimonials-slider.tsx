"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Architecte",
    location: "Cannes",
    image: "/testimonial-marie-dubois.jpg",
    rating: 5,
    text: "B.E StructiBA a su transformer notre vision architecturale en réalité technique. Leur expertise en calculs de structure nous a permis de réaliser des ouvertures audacieuses tout en garantissant la sécurité. Un partenaire de confiance pour tous nos projets de prestige.",
  },
  {
    id: 2,
    name: "Thomas Bernard",
    role: "Promoteur Immobilier",
    location: "Antilles Françaises",
    image: "/testimonial-thomas-bernard.jpg",
    rating: 5,
    text: "Pour nos projets en zone sismique aux Antilles, l'expertise parasismique de StructiBA est incontournable. Leurs calculs précis selon l'Eurocode 8 et leur accompagnement technique nous ont permis de livrer des résidences parfaitement sécurisées et conformes.",
  },
  {
    id: 3,
    name: "Sophie Leroy",
    role: "Maître d'Ouvrage",
    location: "Nice",
    image: "/testimonial-sophie-leroy.jpg",
    rating: 5,
    text: "La réhabilitation de notre hôtel particulier nécessitait une expertise pointue. L'équipe de StructiBA a su diagnostiquer l'existant et proposer des solutions de renforcement innovantes. Résultat : un projet livré dans les délais avec une qualité exceptionnelle.",
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Témoignages <span className="text-[#C9A568]">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            La satisfaction de nos clients est notre priorité. Découvrez leurs retours d'expérience sur nos prestations
            d'ingénierie structurelle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 md:h-auto">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-[#C9A568] mb-4" />
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                      "{currentTestimonial.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#C9A568] text-[#C9A568]" />
                    ))}
                  </div>

                  <div>
                    <h4 className="font-bold text-xl text-gray-900">{currentTestimonial.name}</h4>
                    <p className="text-[#C9A568] font-medium">{currentTestimonial.role}</p>
                    <p className="text-gray-600">{currentTestimonial.location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-[#C9A568]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
