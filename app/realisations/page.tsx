"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Calendar, Clock, Home, CheckCircle, Building } from "lucide-react"
import { projects, type Project } from "@/lib/projects"
import Breadcrumbs from "@/components/breadcrumbs"

export default function RealisationsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Réalisations", href: "/realisations" },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Nos Réalisations d'Exception
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ textAlign: "justify" }}>
              Découvrez nos projets emblématiques qui illustrent l'excellence technique de B.E StructiBA. De la villa
              provençale réhabilitée avec reprise en sous-œuvre à la villa contemporaine avec double piscine, chaque
              réalisation témoigne de notre capacité à relever les défis structurels les plus complexes avec innovation
              et expertise technique approfondie.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Building className="size-4" />
                <span>{projects.length} projets de référence</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>Région PACA</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.images.main || "/placeholder.svg?height=400&width=600&text=Projet+en+cours"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-[#C9A568] text-white">{project.type}</Badge>
                      <Badge variant="outline" className="bg-white/90 text-gray-800 border-gray-300">
                        {project.region}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3
                        className="text-2xl font-bold text-white mb-2"
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/90 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="size-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                      {project.description.length > 150
                        ? `${project.description.substring(0, 150)}...`
                        : project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-medium text-gray-500">Surface :</span>
                        <div className="font-semibold">{project.surface}</div>
                      </div>
                      <div>
                        <span className="font-medium text-gray-500">Budget :</span>
                        <div className="font-semibold">{project.budget}</div>
                      </div>
                      <div>
                        <span className="font-medium text-gray-500">Durée :</span>
                        <div className="font-semibold">{project.duration}</div>
                      </div>
                      <div>
                        <span className="font-medium text-gray-500">Année :</span>
                        <div className="font-semibold">{project.year}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Défis techniques :</h4>
                      <div className="space-y-1">
                        {project.challenges.slice(0, 3).map((challenge, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="size-1.5 rounded-full bg-[#C9A568] mt-2 flex-shrink-0" />
                            <span className="text-gray-600">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-[#C9A568] hover:bg-[#B8956A] text-white"
                          onClick={() => setSelectedProject(project)}
                        >
                          Voir les détails
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle
                            className="text-2xl font-bold"
                            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                          >
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Image principale */}
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                            <Image
                              src={project.images.main || "/placeholder.svg?height=400&width=600&text=Projet+principal"}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>

                          {/* Informations du projet */}
                          <div>
                            <div className="flex gap-2 mb-4">
                              <Badge className="bg-[#C9A568] text-white">{project.type}</Badge>
                              <Badge variant="outline">{project.region}</Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                              <div className="flex items-center gap-2">
                                <MapPin className="size-4 text-[#C9A568]" />
                                <span>{project.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="size-4 text-[#C9A568]" />
                                <span>{project.year}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="size-4 text-[#C9A568]" />
                                <span>{project.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Home className="size-4 text-[#C9A568]" />
                                <span>{project.surface}</span>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <div className="text-sm font-medium text-gray-500 mb-1">Budget</div>
                                <div className="font-semibold text-lg">{project.budget}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description complète */}
                        <div className="mt-6">
                          <h3 className="text-lg font-bold mb-3">Description du projet</h3>
                          <p className="text-gray-600 leading-relaxed mb-6" style={{ textAlign: "justify" }}>
                            {project.description}
                          </p>

                          <h3 className="text-lg font-bold mb-3">Défis techniques relevés</h3>
                          <div className="space-y-2">
                            {project.challenges.map((challenge, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className="size-4 text-[#C9A568] mt-1 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{challenge}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Galerie d'images */}
                        {project.images.gallery.length > 0 && (
                          <div className="mt-6">
                            <h3 className="text-lg font-bold mb-3">Galerie du projet</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {project.images.gallery.map((image, idx) => (
                                <div key={idx} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                  <Image
                                    src={image || `/placeholder.svg?height=200&width=300&text=Image+${idx + 2}`}
                                    alt={`${project.title} - Image ${idx + 2}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Votre Projet Sera Notre Prochaine Référence
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ textAlign: "justify" }}>
              Chaque projet est unique et mérite une approche sur mesure. Notre équipe d'ingénieurs experts analyse vos
              contraintes techniques et vous propose les solutions les plus innovantes. De la reprise en sous-œuvre aux
              calculs structurels les plus complexes, nous maîtrisons toutes les phases de votre projet, de l'AVP à
              l'EXE. Rejoignez nos clients satisfaits et concrétisez vos ambitions architecturales avec l'expertise
              technique de B.E StructiBA.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C9A568] mb-2">15+</div>
                <div className="text-gray-600">Années d'expertise</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C9A568] mb-2">100%</div>
                <div className="text-gray-600">Projets réussis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C9A568] mb-2">PACA</div>
                <div className="text-gray-600">Zone d'intervention</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8956A] text-white">
                <a href="/contact">Discuter de votre projet</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/services">Découvrir nos services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
