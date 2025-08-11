"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { projects } from "@/lib/projects"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Grid, List, Calendar, MapPin, Building, Leaf, ArrowUpRight, Eye } from "lucide-react"
import { useScrollAnimation, useIsMobile, Card3D } from "./3d-animations"

type ViewMode = "grid" | "list"
type SortOption = "recent" | "oldest" | "title" | "budget"

export default function EnhancedGalleryFilter() {
  const scrollRef = useScrollAnimation()
  const isMobile = useIsMobile()

  // Filters state
  const [location, setLocation] = useState<"Tous" | "Paris" | "PACA" | "Antilles">("Tous")
  const [type, setType] = useState<"Tous" | "Réhabilitation" | "Construction neuve" | "Durable">("Tous")
  const [sort, setSort] = useState<SortOption>("recent")
  const [search, setSearch] = useState("")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesLocation = location === "Tous" || project.location === location
      const matchesType = type === "Tous" || project.type === type
      const matchesSearch =
        search === "" ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.materials?.some((m) => m.toLowerCase().includes(search.toLowerCase()))

      return matchesLocation && matchesType && matchesSearch
    })

    // Sort projects
    filtered.sort((a, b) => {
      switch (sort) {
        case "recent":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "title":
          return a.title.localeCompare(b.title)
        case "budget":
          const budgetA = Number.parseFloat(a.budget?.replace(/[^\d.]/g, "") || "0")
          const budgetB = Number.parseFloat(b.budget?.replace(/[^\d.]/g, "") || "0")
          return budgetB - budgetA
        default:
          return 0
      }
    })

    return filtered
  }, [location, type, sort, search])

  const getTypeIcon = (projectType: string) => {
    switch (projectType) {
      case "Réhabilitation":
        return Building
      case "Construction neuve":
        return Grid
      case "Durable":
        return Leaf
      default:
        return Building
    }
  }

  const getTypeColor = (projectType: string) => {
    switch (projectType) {
      case "Réhabilitation":
        return "bg-blue-100 text-blue-800"
      case "Construction neuve":
        return "bg-green-100 text-green-800"
      case "Durable":
        return "bg-emerald-100 text-emerald-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div ref={scrollRef} className="opacity-0 translate-y-8 transition-all duration-1000 animate-in">
      {/* Search and Filters Header */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par nom, description, matériaux..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 h-12 text-base"
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Location Filter */}
          <div className="flex gap-2">
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="size-4" />
              Région :
            </span>
            {(["Tous", "Paris", "PACA", "Antilles"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLocation(l)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm border transition-all duration-300 transform-gpu",
                  !isMobile && "hover:scale-105",
                  location === l
                    ? "border-[var(--lux-gold)] text-[var(--lux-gold)] bg-[var(--lux-gold)]/10"
                    : "border-[var(--lux-border)] hover:border-[var(--lux-gold)]",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            <span className="text-sm text-muted-foreground">Type :</span>
            {(["Tous", "Réhabilitation", "Construction neuve", "Durable"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm border transition-all duration-300 transform-gpu",
                  !isMobile && "hover:scale-105",
                  type === t
                    ? "border-[var(--lux-gold)] text-[var(--lux-gold)] bg-[var(--lux-gold)]/10"
                    : "border-[var(--lux-border)] hover:border-[var(--lux-gold)]",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Sort and View Controls */}
          <div className="ml-auto flex items-center gap-3">
            <Select value={sort} onValueChange={(v: SortOption) => setSort(v)}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Plus récents</SelectItem>
                <SelectItem value="oldest">Plus anciens</SelectItem>
                <SelectItem value="title">Nom A-Z</SelectItem>
                <SelectItem value="budget">Budget décroissant</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex border border-[var(--lux-border)] rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 transition-all duration-200",
                  viewMode === "grid" ? "bg-[var(--lux-gold)] text-white" : "hover:bg-gray-100",
                )}
              >
                <Grid className="size-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 transition-all duration-200",
                  viewMode === "list" ? "bg-[var(--lux-gold)] text-white" : "hover:bg-gray-100",
                )}
              >
                <List className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {filteredProjects.length} projet{filteredProjects.length > 1 ? "s" : ""} trouvé
            {filteredProjects.length > 1 ? "s" : ""}
          </span>
          {(search || location !== "Tous" || type !== "Tous") && (
            <button
              onClick={() => {
                setSearch("")
                setLocation("Tous")
                setType("Tous")
              }}
              className="text-[var(--lux-gold)] hover:underline"
            >
              Effacer les filtres
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, index) => (
            <Card3D key={p.slug} disabled={isMobile}>
              <Link
                href={`/realisations/${p.slug}`}
                className="group block rounded-3xl overflow-hidden border border-[var(--lux-border)] bg-white hover:shadow-xl transition-all duration-500"
                onMouseEnter={() => setHoveredProject(p.slug)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={p.cover || "/placeholder.svg"}
                    alt={p.alt}
                    fill
                    className={cn(
                      "object-cover transition-all duration-700",
                      hoveredProject === p.slug ? "scale-110" : "scale-100",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Featured Badge */}
                  {p.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-[var(--lux-gold)] text-[var(--lux-text)]">Projet phare</Badge>
                    </div>
                  )}

                  {/* View Icon */}
                  <div className="absolute top-3 right-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300",
                        hoveredProject === p.slug ? "opacity-100 scale-110" : "opacity-0 scale-90",
                      )}
                    >
                      <Eye className="size-4 text-white" />
                    </div>
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={cn("text-xs", getTypeColor(p.type))}>{p.type}</Badge>
                          <span className="text-xs text-white/80">{p.location}</span>
                        </div>
                        <p
                          className="text-lg font-medium"
                          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                        >
                          {p.title}
                        </p>
                        {p.budget && <p className="text-sm text-white/90 mt-1">{p.budget}</p>}
                      </div>
                      <ArrowUpRight
                        className={cn(
                          "size-5 transition-all duration-300",
                          hoveredProject === p.slug ? "opacity-100 translate-x-1 -translate-y-1" : "opacity-80",
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.excerpt}</p>

                  {/* Materials Tags */}
                  {p.materials && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {p.materials.slice(0, 3).map((material, i) => (
                        <span
                          key={material}
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs text-muted-foreground"
                        >
                          {material}
                        </span>
                      ))}
                      {p.materials.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-muted-foreground">
                          +{p.materials.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Project Stats */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="size-3" />
                      {new Date(p.date).toLocaleDateString("fr-FR")}
                    </div>
                    {p.duration && <span className="text-xs text-muted-foreground">{p.duration}</span>}
                  </div>
                </div>
              </Link>
            </Card3D>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="space-y-4">
          {filteredProjects.map((p, index) => (
            <Card3D key={p.slug} disabled={isMobile}>
              <Link
                href={`/realisations/${p.slug}`}
                className="group flex rounded-2xl overflow-hidden border border-[var(--lux-border)] bg-white hover:shadow-lg transition-all duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative w-48 h-32 flex-shrink-0">
                  <Image
                    src={p.cover || "/placeholder.svg"}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-[var(--lux-gold)] text-[var(--lux-text)] text-xs">Phare</Badge>
                    </div>
                  )}
                </div>

                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={cn("text-xs", getTypeColor(p.type))}>{p.type}</Badge>
                      <span className="text-sm text-muted-foreground">{p.location}</span>
                      {p.budget && <span className="text-sm font-medium text-[var(--lux-gold)]">{p.budget}</span>}
                    </div>

                    <h3
                      className="text-lg font-medium mb-2"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {p.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="size-3" />
                      {new Date(p.date).toLocaleDateString("fr-FR")}
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-[var(--lux-gold)] transition-colors" />
                  </div>
                </div>
              </Link>
            </Card3D>
          ))}
        </div>
      )}

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="size-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">Aucun projet trouvé</h3>
          <p className="text-muted-foreground mb-4">Essayez de modifier vos critères de recherche ou de filtrage.</p>
          <button
            onClick={() => {
              setSearch("")
              setLocation("Tous")
              setType("Tous")
            }}
            className="text-[var(--lux-gold)] hover:underline"
          >
            Effacer tous les filtres
          </button>
        </div>
      )}
    </div>
  )
}
