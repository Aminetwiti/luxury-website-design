"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Architecte",
      company: "Atelier MD Architecture",
      image: "/images/Testimonials_Portrait_Client1_BW.png",
      rating: 5,
      text: "B.E StructiBA a transformé notre vision architecturale en réalité technique. Leur expertise en béton précontraint nous a permis de créer des espaces exceptionnels sans compromis structurel.",
      project: "Villa Contemporaine Antibes",
      location: "PACA",
    },
    {
      id: 2,
      name: "Thomas Bernard",
      role: "Promoteur Immobilier",
      company: "Bernard Développement",
      image: "/images/Testimonials_Portrait_Client2_BW.png",
      rating: 5,
      text: "Collaboration exemplaire sur notre projet de penthouse parisien. L'équipe a su allier innovation technique et respect du patrimoine haussmannien. Résultat à la hauteur de nos attentes.",
      project: "Penthouse Trocadéro",
      location: "Paris",
    },
    {
      id: 3,
      name: "Sophie Leroy",
      role: "Maître d'Ouvrage",
      company: "Éco-Resort Caraïbes",
      image: "/images/Testimonials_Portrait_Client3_BW.png",
      rating: 5,
      text: "Approche durable remarquable pour notre éco-resort. B.E StructiBA a intégré parfaitement les contraintes environnementales tout en optimisant les performances structurelles.",
      project: "Éco-Resort Martinique",
      location: "Martinique",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23C9A568%22 fillOpacity%3D%220.1%22%3E%3Cpath d%3D%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#C9A568]/10 rounded-full mb-6">
            <Star className="w-4 h-4 mr-2 text-[#C9A568]" />
            <span className="text-sm font-medium text-[#C9A568]">Témoignages Clients</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les retours de nos clients sur nos projets d'exception
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-4 border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#C9A568]/20">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                            sizes="96px"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Quote Icon */}
                        <Quote className="w-8 h-8 text-[#C9A568] mb-4 mx-auto md:mx-0" />

                        {/* Rating */}
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="border-t border-gray-200 pt-6">
                          <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                          <div className="text-[#C9A568] font-medium">{testimonial.role}</div>
                          <div className="text-gray-600 text-sm">{testimonial.company}</div>

                          {/* Project Info */}
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-600">Projet réalisé :</div>
                            <div className="font-medium text-gray-900">{testimonial.project}</div>
                            <div className="text-sm text-[#C9A568]">{testimonial.location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-[#C9A568] hover:text-white hover:border-[#C9A568] transition-all duration-300"
            onClick={prevSlide}
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-[#C9A568] hover:text-white hover:border-[#C9A568] transition-all duration-300"
            onClick={nextSlide}
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#C9A568] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-[#C9A568] mb-2">98%</div>
            <div className="text-gray-600">Clients Satisfaits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#C9A568] mb-2">150+</div>
            <div className="text-gray-600">Projets Réalisés</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#C9A568] mb-2">4.9/5</div>
            <div className="text-gray-600">Note Moyenne</div>
          </div>
        </div>
      </div>
    </section>
  )
}
