"use client"

import { useState, useEffect } from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Article } from "@/lib/google-sheets"

interface ArticleFiltersProps {
  articles: Article[]
  categories: string[]
  onFilter: (filteredArticles: Article[]) => void
}

export function ArticleFilters({ articles, categories, onFilter }: ArticleFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  useEffect(() => {
    console.log("🔍 Filtrage des articles - Recherche:", searchQuery, "Catégorie:", selectedCategory)

    let filtered = articles

    // Filtrer par catégorie
    if (selectedCategory !== "Tous") {
      filtered = filtered.filter((article) => article.category === selectedCategory)
      console.log("📂 Articles après filtrage par catégorie:", filtered.length)
    }

    // Filtrer par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query) ||
          article.author.toLowerCase().includes(query),
      )
      console.log("🔎 Articles après filtrage par recherche:", filtered.length)
    }

    console.log("✅ Articles filtrés finaux:", filtered.length)
    onFilter(filtered)
  }, [searchQuery, selectedCategory, articles, onFilter])

  return (
    <div className="mb-12 space-y-6">
      {/* Barre de recherche */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A568] focus:border-transparent"
        />
      </div>

      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Filter className="w-4 h-4" />
          Catégories :
        </div>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "bg-[#C9A568] hover:bg-[#B8956A] text-white border-[#C9A568]"
                : "border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-transparent"
            }
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Bouton de réinitialisation */}
      {(searchQuery || selectedCategory !== "Tous") && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setSearchQuery("")
            setSelectedCategory("Tous")
          }}
          className="text-gray-500 hover:text-gray-700"
        >
          Réinitialiser les filtres
        </Button>
      )}
    </div>
  )
}
