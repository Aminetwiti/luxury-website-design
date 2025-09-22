"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import type { Article } from "@/lib/google-sheets"

interface ArticleFiltersProps {
  articles: Article[]
  categories: string[]
  onFilteredArticles: (articles: Article[]) => void
}

export function ArticleFilters({ articles, categories, onFilteredArticles }: ArticleFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [searchTerm, setSearchTerm] = useState("")

  console.log("🎛️ ArticleFilters rendu avec:", {
    articlesCount: articles.length,
    categoriesCount: categories.length,
    selectedCategory,
    searchTerm,
  })

  const filterArticles = (category: string, search: string) => {
    console.log("🔍 Filtrage des articles avec:", { category, search })

    let filtered = articles

    // Filtrage par catégorie
    if (category !== "Tous") {
      filtered = filtered.filter((article) => article.category === category)
      console.log("📂 Articles après filtrage par catégorie:", filtered.length)
    }

    // Filtrage par recherche
    if (search.trim()) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchLower) ||
          article.excerpt.toLowerCase().includes(searchLower) ||
          article.content.toLowerCase().includes(searchLower) ||
          article.category.toLowerCase().includes(searchLower) ||
          article.author.toLowerCase().includes(searchLower),
      )
      console.log("🔎 Articles après filtrage par recherche:", filtered.length)
    }

    console.log("✅ Articles filtrés finaux:", filtered.length)
    onFilteredArticles(filtered)
  }

  const handleCategoryChange = (category: string) => {
    console.log("📂 Changement de catégorie:", category)
    setSelectedCategory(category)
    filterArticles(category, searchTerm)
  }

  const handleSearchChange = (search: string) => {
    console.log("🔎 Changement de recherche:", search)
    setSearchTerm(search)
    filterArticles(selectedCategory, search)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Barre de recherche */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Rechercher dans les articles..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10 pr-4 py-3 border-gray-200 focus:border-[#C9A568] focus:ring-[#C9A568]"
        />
      </div>

      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => handleCategoryChange(category)}
            className={
              selectedCategory === category
                ? "bg-[#C9A568] hover:bg-[#B8956A] text-white border-none"
                : "border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-transparent"
            }
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
