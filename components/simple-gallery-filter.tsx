"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, Filter, Grid, List } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterProps {
  onFilterChange: (filters: {
    search: string
    region: string
    type: string
    sort: string
  }) => void
  onViewChange: (view: "grid" | "list") => void
  currentView: "grid" | "list"
  totalProjects: number
  filteredCount: number
}

export function SimpleGalleryFilter({
  onFilterChange,
  onViewChange,
  currentView,
  totalProjects,
  filteredCount,
}: FilterProps) {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("all")
  const [type, setType] = useState("all")
  const [sort, setSort] = useState("date-desc")

  const handleFilterUpdate = (newFilters: Partial<{ search: string; region: string; type: string; sort: string }>) => {
    const filters = { search, region, type, sort, ...newFilters }
    onFilterChange(filters)
  }

  const handleSearchChange = (value: string) => {
    setSearch(value)
    handleFilterUpdate({ search: value })
  }

  const handleRegionChange = (value: string) => {
    setRegion(value)
    handleFilterUpdate({ region: value })
  }

  const handleTypeChange = (value: string) => {
    setType(value)
    handleFilterUpdate({ type: value })
  }

  const handleSortChange = (value: string) => {
    setSort(value)
    handleFilterUpdate({ sort: value })
  }

  const clearFilters = () => {
    setSearch("")
    setRegion("all")
    setType("all")
    setSort("date-desc")
    onFilterChange({ search: "", region: "all", type: "all", sort: "date-desc" })
  }

  return (
    <section
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"
      role="search"
      aria-labelledby="filter-heading"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="size-5 text-[var(--lux-gold)]" aria-hidden="true" />
          <h2 id="filter-heading" className="text-lg font-semibold">
            Filtrer les projets
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="text-sm text-gray-600"
            role="status"
            aria-live="polite"
            aria-label={`${filteredCount} projets trouvés sur ${totalProjects} au total`}
          >
            <span className="font-medium">{filteredCount}</span> sur {totalProjects} projets
          </div>
          <fieldset className="flex border border-gray-200 rounded-md">
            <legend className="sr-only">Mode d'affichage des projets</legend>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onViewChange("grid")}
              className={cn(
                "rounded-r-none focus-visible",
                currentView === "grid" && "bg-[var(--lux-gold)] text-white",
              )}
              aria-label="Affichage en grille"
              aria-pressed={currentView === "grid"}
            >
              <Grid className="size-4" aria-hidden="true" />
              <span className="sr-only">Grille</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onViewChange("list")}
              className={cn(
                "rounded-l-none border-l focus-visible",
                currentView === "list" && "bg-[var(--lux-gold)] text-white",
              )}
              aria-label="Affichage en liste"
              aria-pressed={currentView === "list"}
            >
              <List className="size-4" aria-hidden="true" />
              <span className="sr-only">Liste</span>
            </Button>
          </fieldset>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Search */}
        <div className="relative">
          <Label htmlFor="search-projects" className="sr-only">
            Rechercher un projet
          </Label>
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400"
            aria-hidden="true"
          />
          <Input
            id="search-projects"
            placeholder="Rechercher un projet..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 focus-visible"
            aria-describedby="search-help"
          />
          <div id="search-help" className="sr-only">
            Tapez pour rechercher dans les titres et descriptions des projets
          </div>
        </div>

        {/* Region Filter */}
        <div>
          <Label htmlFor="region-filter" className="sr-only">
            Filtrer par région
          </Label>
          <Select value={region} onValueChange={handleRegionChange}>
            <SelectTrigger id="region-filter" className="focus-visible">
              <SelectValue placeholder="Toutes les régions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les régions</SelectItem>
              <SelectItem value="paris">Paris</SelectItem>
              <SelectItem value="paca">PACA</SelectItem>
              <SelectItem value="antilles">Antilles</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Type Filter */}
        <div>
          <Label htmlFor="type-filter" className="sr-only">
            Filtrer par type de projet
          </Label>
          <Select value={type} onValueChange={handleTypeChange}>
            <SelectTrigger id="type-filter" className="focus-visible">
              <SelectValue placeholder="Tous les types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="rehabilitation">Réhabilitation</SelectItem>
              <SelectItem value="construction-neuve">Construction neuve</SelectItem>
              <SelectItem value="durable">Développement durable</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div>
          <Label htmlFor="sort-filter" className="sr-only">
            Trier les projets
          </Label>
          <Select value={sort} onValueChange={handleSortChange}>
            <SelectTrigger id="sort-filter" className="focus-visible">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Plus récents</SelectItem>
              <SelectItem value="date-asc">Plus anciens</SelectItem>
              <SelectItem value="name-asc">Nom A-Z</SelectItem>
              <SelectItem value="name-desc">Nom Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Clear Filters */}
      {(search || region !== "all" || type !== "all" || sort !== "date-desc") && (
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="text-gray-600 hover:text-gray-800 bg-transparent focus-visible"
            aria-label="Effacer tous les filtres appliqués"
          >
            Effacer les filtres
          </Button>
        </div>
      )}
    </section>
  )
}
