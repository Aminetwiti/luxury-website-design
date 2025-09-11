"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Architecte DPLG",
    company: "Atelier MD Architecture",
    location: "Nice",
    image: "/images/Testimonials_Portrait_Client1_BW.png",
    rating: 5,
    quote:
      "Collaboration exceptionnelle sur notre projet de villa contemporaine. L'équipe StructiBA a su optimiser la structure tout en respectant notre vision architecturale. Leur expertise parasismique a été déterminante.",
    project: "Villa 400m² - Antibes",
  },
  {
    id: 2,
    name: "Thomas Bernard",
    role: "Promoteur Immobilier",
    company: "Bernard Développement",
    location: "Cannes",
    image: "/images/Testimonials_Portrait_Client2_BW.png",
    rating: 5,
    quote:
      "Réactivité et professionnalisme remarquables. Les études ont été livrées dans les délais avec une qualité technique irréprochable. Je recommande vivement pour tous projets de construction neuve.",
    project: "Résidence 24 logements - Grasse",
  },
  {
    id: 3,
    name: "Sophie Leroy",
    role: "Maître d'Ouvrage",
    company: "Particulier",
    location: "Mougins",
    image: "/images/Testimonials_Portrait_Client3_BW.png",
    rating: 5,
    quote:
      "Accompagnement personnalisé tout au long de notre projet de réhabilitation. L'ouverture des murs porteurs a été réalisée avec une précision remarquable. Équipe à l'écoute et très compétente.",
    project: "Réhabilitation maison 250m²",
  },
  {
    id: 4,
    name: "Jean-Pierre Moreau",
    role: "Architecte",
    company: "Moreau & Associés",
    location: "Antibes",
    image: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "Expertise technique de haut niveau, particulièrement appréciable sur les projets complexes. Leur maîtrise des Eurocodes et leur capacité d'innovation nous permettent de repousser les limites architecturales.",
    project: "Immeuble R+4 - Juan-les-Pins",
  },
  {
    id: 5,
    name: "Isabelle Durand",
    role: "Promoteur",
    company: "Durand Immobilier",
    location: "Valbonne",
    image: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "Partenaire de confiance depuis 3 ans. Leur approche économique et leur optimisation des coûts structure nous permettent d'améliorer significativement la rentabilité de nos opérations.",
    project: "Programme mixte 18 logements",
  },
  {
    id: 6,
    name: "Michel Rousseau",
    role: "Particulier",
    company: "Propriétaire",
    location: "Antilles Françaises",
    image: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "Projet de villa aux Antilles mené avec brio malgré les contraintes parasismiques et climatiques. Suivi rigoureux et solutions techniques adaptées au contexte tropical. Résultat exceptionnel.",
    project: "Villa bioclimatique 300m²",
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ils Nous Font Confiance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Architectes, promoteurs et particuliers de la région PACA et des Antilles témoignent de leur collaboration
            avec notre bureau d'études.
          </p>
        </div>

        {/* Slider principal */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Contenu */}
              <div className="md:w-2/3 p-8 md:p-12">
                {/* Étoiles */}
                <div className="flex items-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Citation */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#C9A568] opacity-50" />
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed pl-6 text-justify">
                    {currentTestimonial.quote}
                  </blockquote>
                </div>

                {/* Informations client */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{currentTestimonial.name}</h4>
                      <p className="text-[#C9A568] font-medium">{currentTestimonial.role}</p>
                      <p className="text-gray-600 text-sm">
                        {currentTestimonial.company} • {currentTestimonial.location}
                      </p>
                    </div>
                    <div className="mt-3 md:mt-0 text-right">
                      <p className="text-sm text-gray-500 font-medium">{currentTestimonial.project}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contrôles */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              className="rounded-full w-12 h-12 p-0 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Indicateurs */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#C9A568] scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="rounded-full w-12 h-12 p-0 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Statistiques de satisfaction */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C9A568] mb-2">98%</div>
            <div className="text-sm text-gray-600">Satisfaction client</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C9A568] mb-2">200+</div>
            <div className="text-sm text-gray-600">Projets livrés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C9A568] mb-2">15+</div>
            <div className="text-sm text-gray-600">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C9A568] mb-2">24h</div>
            <div className="text-sm text-gray-600">Délai de réponse</div>
          </div>
        </div>
      </div>
    </section>
  )
}
