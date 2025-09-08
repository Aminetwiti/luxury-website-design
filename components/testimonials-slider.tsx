"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Propriétaire Villa Antibes",
      company: "Projet Villa Horizon",
      image: "/testimonial-marie-dubois.jpg",
      imageAlt:
        "Portrait professionnel de Marie Dubois, cliente satisfaite, femme élégante d'affaires, sourire confiant, style contemporain",
      rating: 5,
      quote:
        "L'équipe de StructiBA a transformé notre vision en réalité. Leur expertise technique et leur attention aux détails sont remarquables. La villa dépasse toutes nos attentes.",
      project: "Villa avec piscine à débordement",
      location: "Antibes, PACA",
      year: "2023",
    },
    {
      id: 2,
      name: "Thomas Bernard",
      role: "Directeur Immobilier",
      company: "Luxury Properties Monaco",
      image: "/testimonial-thomas-bernard.jpg",
      imageAlt:
        "Portrait professionnel de Thomas Bernard, directeur immobilier, homme d'affaires distingué, costume élégant, environnement luxueux",
      rating: 5,
      quote:
        "Nous collaborons avec StructiBA depuis 5 ans. Leur professionnalisme et leur capacité à livrer des projets complexes dans les délais sont exceptionnels.",
      project: "Penthouse Trocadéro",
      location: "Paris 16ème",
      year: "2023",
    },
    {
      id: 3,
      name: "Sophie Leroy",
      role: "Architecte DPLG",
      company: "Atelier Architecture Durable",
      image: "/testimonial-sophie-leroy.jpg",
      imageAlt:
        "Portrait professionnel de Sophie Leroy, architecte créative, femme moderne et dynamique, environnement architectural contemporain",
      rating: 5,
      quote:
        "La collaboration avec StructiBA sur nos projets éco-responsables est fluide et enrichissante. Leur expertise en développement durable est remarquable.",
      project: "Éco-Resort Martinique",
      location: "Martinique",
      year: "2022",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients, notre plus belle récompense
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F8F8F5] to-white shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="mb-6">
                        <Quote className="w-12 h-12 text-[#C9A568] mb-4" />
                        <blockquote
                          className="text-2xl md:text-3xl font-light text-[#1C1C1C] leading-relaxed mb-6"
                          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                        >
                          "{testimonial.quote}"
                        </blockquote>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#C9A568] text-[#C9A568]" />
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-[#1C1C1C] mb-1">{testimonial.name}</h4>
                        <p className="text-[#C9A568] font-medium mb-1">{testimonial.role}</p>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      </div>

                      {/* Project Info */}
                      <div className="bg-white/80 rounded-lg p-4 border border-gray-100">
                        <h5 className="font-semibold text-[#1C1C1C] mb-2">Projet réalisé :</h5>
                        <p className="text-gray-600 text-sm mb-1">{testimonial.project}</p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.location} • {testimonial.year}
                        </p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex items-center justify-center">
                      <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#C9A568] hover:bg-white hover:scale-110 transition-all duration-200"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#C9A568] hover:bg-white hover:scale-110 transition-all duration-200"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-[#C9A568] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div
              className="text-4xl font-bold text-[#C9A568] mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              98%
            </div>
            <div className="text-gray-600">Satisfaction Client</div>
          </div>
          <div className="text-center">
            <div
              className="text-4xl font-bold text-[#C9A568] mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              150+
            </div>
            <div className="text-gray-600">Projets Livrés</div>
          </div>
          <div className="text-center">
            <div
              className="text-4xl font-bold text-[#C9A568] mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              25
            </div>
            <div className="text-gray-600">Années d'Expérience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider
