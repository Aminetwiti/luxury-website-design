"use client"

import { useState, useMemo } from "react"
import { projects } from "@/lib/projects"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, MapPin, Calendar, Building, Search, Filter } from "lucide-react"

// Sélection des 4 projets phares uniquement
const featuredProjects = ["penthouse-trocadero", "villa-antibes", "eco-resort-martinique", "immeuble-passif"]
  .map((slug) => projects.find((p) => p.slug === slug)!)
  .filter(Boolean)

interface Filters {
  search: string
  region: string
  type: string
  sort: string
}

export default function RealisationsPage() {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    region: "all", // Updated default value
    type: "all", // Updated default value
    sort: "date-desc",
  })

  const filteredProjects = useMemo(() => {
    let filtered = [...featuredProjects]

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.location.toLowerCase().includes(searchLower),
      )
    }

    // Region filter
    if (filters.region !== "all") {
      filtered = filtered.filter((project) => project.region === filters.region)
    }

    // Type filter
    if (filters.type !== "all") {
      filtered = filtered.filter((project) => project.type === filters.type)
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sort) {
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "name-asc":
          return a.title.localeCompare(b.title)
        case "name-desc":
          return b.title.localeCompare(a.title)
        default:
          return 0
      }
    })

    return filtered
  }, [filters])

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "rehabilitation":
        return "Réhabilitation"
      case "construction-neuve":
        return "Construction neuve"
      case "durable":
        return "Développement durable"
      default:
        return type
    }
  }

  const getRegionLabel = (region: string) => {
    switch (region) {
      case "paris":
        return "Paris"
      case "paca":
        return "PACA"
      case "antilles":
        return "Antilles"
      default:
        return region
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Nos Réalisations d'Exception
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-justify">
              Découvrez 4 projets emblématiques qui illustrent l'excellence technique de B.E StructiBA. Du penthouse
              parisien avec terrasse suspendue à l'éco-resort tropical, chaque réalisation témoigne de notre capacité à
              relever les défis structurels les plus complexes avec innovation et expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Building className="size-4" />
                <span>4 projets phares</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>3 régions d'intervention</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>2022-2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Filter className="size-5 text-gray-600" />
              <h2 className="text-lg font-semibold">Filtrer les projets</h2>
              <Badge variant="secondary">
                {filteredProjects.length} projet{filteredProjects.length > 1 ? "s" : ""} trouvé
                {filteredProjects.length > 1 ? "s" : ""}
              </Badge>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
                <Input
                  placeholder="Rechercher..."
                  value={filters.search}
                  onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
                  className="pl-10"
                />
              </div>

              <Select
                value={filters.region}
                onValueChange={(value) => setFilters((prev) => ({ ...prev, region: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Toutes les régions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les régions</SelectItem>
                  <SelectItem value="paris">Paris</SelectItem>
                  <SelectItem value="paca">PACA</SelectItem>
                  <SelectItem value="antilles">Antilles</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.type} onValueChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Tous les types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  <SelectItem value="rehabilitation">Réhabilitation</SelectItem>
                  <SelectItem value="construction-neuve">Construction neuve</SelectItem>
                  <SelectItem value="durable">Développement durable</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.sort} onValueChange={(value) => setFilters((prev) => ({ ...prev, sort: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-desc">Plus récent</SelectItem>
                  <SelectItem value="date-asc">Plus ancien</SelectItem>
                  <SelectItem value="name-asc">Nom A-Z</SelectItem>
                  <SelectItem value="name-desc">Nom Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-12">
                {filteredProjects.map((project) => (
                  <Card key={project.slug} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-[#C9A568] text-white">{getTypeLabel(project.type)}</Badge>
                        <Badge variant="outline" className="bg-white/90 text-gray-800 border-gray-300">
                          {getRegionLabel(project.region)}
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
                            <span>{new Date(project.date).getFullYear()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4 text-justify line-clamp-3">{project.description}</p>

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
                          <div className="font-semibold">{new Date(project.date).getFullYear()}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Défis techniques :</h4>
                        <div className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <div className="size-1.5 rounded-full bg-[#C9A568] mt-2 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="w-full bg-[#C9A568] hover:bg-[#B8956A] text-white">
                        <Link href={`/realisations/${project.slug}`}>
                          Découvrir le projet
                          <ArrowRight className="size-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Building className="size-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun projet trouvé</h3>
                <p className="text-gray-600 mb-4">Essayez de modifier vos critères de recherche</p>
                <Button
                  variant="outline"
                  onClick={() => setFilters({ search: "", region: "all", type: "all", sort: "date-desc" })}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
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
            <p className="text-lg text-gray-600 mb-8 text-justify">
              Chaque projet est unique et mérite une approche sur mesure. Notre équipe d'ingénieurs experts analyse vos
              contraintes techniques et vous propose les solutions les plus innovantes. Rejoignez nos clients satisfaits
              et concrétisez vos ambitions architecturales.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C9A568] mb-2">500+</div>
                <div className="text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C9A568] mb-2">98%</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C9A568] mb-2">15</div>
                <div className="text-gray-600">Années d'expertise</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-[#C9A568] hover:bg-[#B8956A] text-white">
                <Link href="/contact">Discuter de votre projet</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
