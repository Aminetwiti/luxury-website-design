import Hero from "@/components/hero"
import ServiceTrio from "@/components/service-trio"
import ProjectsGrid from "@/components/projects-grid"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Quote, Star, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Propriétaire",
    location: "Villa Cannes",
    content:
      "L'équipe de B.E StructiBA a su transformer notre projet de rénovation en véritable réussite. Leur expertise technique et leur accompagnement personnalisé ont été déterminants.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Thomas Bernard",
    role: "Architecte",
    location: "Antilles Françaises",
    content:
      "Une collaboration exemplaire sur plusieurs projets complexes. Leur maîtrise des contraintes sismiques et leur réactivité font la différence.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Sophie Leroy",
    role: "Promoteur",
    location: "Côte d'Azur",
    content:
      "Des études précises, des délais respectés et une qualité irréprochable. B.E StructiBA est notre partenaire de confiance pour tous nos projets structurels.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServiceTrio />

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C9A568] text-white border-none">Nos Réalisations</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Projets <span className="text-[#C9A568]">de Référence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Découvrez quelques-unes de nos réalisations qui illustrent notre expertise en ingénierie structurelle et
              notre capacité à transformer les défis techniques en succès.
            </p>
          </div>

          <ProjectsGrid limit={2} />

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8956A] text-white shadow-lg">
              <Link href="/realisations" className="flex items-center gap-2">
                Voir toutes nos réalisations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F8F8F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C9A568] text-white border-none">Témoignages</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ce que disent <span className="text-[#C9A568]">nos clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur notre expertise et
              notre accompagnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-[#C9A568] mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-justify italic leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Démarrer <span className="text-[#C9A568]">Votre Projet</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-justify">
            Notre équipe d'experts est à votre disposition pour étudier votre projet et vous proposer des solutions
            techniques innovantes adaptées à vos besoins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8941F] shadow-lg">
              <Link href="/contact" className="flex items-center gap-2">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent shadow-lg"
            >
              <Link href="/expertise">Découvrir notre expertise</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
