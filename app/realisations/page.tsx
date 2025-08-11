"use client"

import { useState, useMemo } from "react"
import { SiteShell } from "@/components/site-shell"
import { SimpleGalleryFilter } from "@/components/simple-gallery-filter"
import { projects } from "@/lib/projects"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, Building } from "lucide-react"

type ViewMode = "grid" | "list"

interface Filters {
  search: string
  region: string
  type: string
  sort: string
}

export default function RealisationsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [filters, setFilters] = useState<Filters>({
    search: "",
    region: "",
    type: "",
    sort: "date-desc",
  })

  const filteredProjects = useMemo(() => {
    let filtered = [...projects]

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
    if (filters.region) {
      filtered = filtered.filter((project) => project.region === filters.region)
    }

    // Type filter
    if (filters.type) {
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
    <SiteShell>
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Nos Réalisations
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Découvrez nos 19 projets d'exception à travers Paris, PACA et les Antilles. Chaque réalisation témoigne
                de notre expertise technique et de notre vision architecturale.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Building className="size-4" />
                  <span>19 projets réalisés</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  <span>3 régions d'intervention</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>2020-2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <SimpleGalleryFilter
              onFilterChange={setFilters}
              onViewChange={setViewMode}
              currentView={viewMode}
              totalProjects={projects.length}
              filteredCount={filteredProjects.length}
            />

            {/* Projects Grid/List */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.slug}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {getTypeLabel(project.type)}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-gray-800 border-gray-300">
                          {getRegionLabel(project.region)}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <MapPin className="size-4" />
                        <span>{project.location}</span>
                        <span>•</span>
                        <Calendar className="size-4" />
                        <span>{new Date(project.date).getFullYear()}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {project.surface} • {project.budget}
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/realisations/${project.slug}`}>
                            Voir le projet
                            <ArrowRight className="size-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.slug}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 relative aspect-[4/3] md:aspect-auto">
                        <Image
                          src={project.images[0] || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3
                              className="text-2xl font-bold mb-2"
                              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                            >
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                              <MapPin className="size-4" />
                              <span>{project.location}</span>
                              <span>•</span>
                              <Calendar className="size-4" />
                              <span>{new Date(project.date).getFullYear()}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant="secondary">{getTypeLabel(project.type)}</Badge>
                            <Badge variant="outline">{getRegionLabel(project.region)}</Badge>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            {project.surface} • {project.budget}
                          </div>
                          <Button asChild>
                            <Link href={`/realisations/${project.slug}`}>
                              Voir le projet
                              <ArrowRight className="size-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Building className="size-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun projet trouvé</h3>
                <p className="text-gray-600 mb-4">Essayez de modifier vos critères de recherche</p>
                <Button
                  variant="outline"
                  onClick={() => setFilters({ search: "", region: "", type: "", sort: "date-desc" })}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
