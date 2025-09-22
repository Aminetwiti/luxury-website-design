"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import type { Article } from "@/lib/google-sheets"

interface ArticleFiltersProps {
  articles: Article[]
  categories: string[]
  onFilter: (filteredArticles: Article[]) => void
}

export function ArticleFilters({ articles, categories, onFilter }: ArticleFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const handleFilter = (search: string, category: string) => {
    let filtered = articles

    // Filtrer par catégorie
    if (category !== "Tous") {
      filtered = filtered.filter((article) => article.category === category)
    }

    // Filtrer par terme de recherche
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
    }

    onFilter(filtered)
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    handleFilter(value, selectedCategory)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    handleFilter(searchTerm, category)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Barre de recherche */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Rechercher dans les articles..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 h-12 border-gray-200 focus:border-[#C9A568] focus:ring-[#C9A568]"
            />
          </div>
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
                  ? "bg-[#C9A568] hover:bg-[#B8956A] text-white border-[#C9A568]"
                  : "border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-transparent"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
