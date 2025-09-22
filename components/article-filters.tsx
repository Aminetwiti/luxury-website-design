"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface ArticleFiltersProps {
  categories: string[]
  onSearch: (query: string) => void
  onCategoryFilter: (category: string) => void
  selectedCategory: string
  searchQuery: string
}

export function ArticleFilters({
  categories,
  onSearch,
  onCategoryFilter,
  selectedCategory,
  searchQuery,
}: ArticleFiltersProps) {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(localSearchQuery)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Rechercher dans les articles..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 border-gray-200 focus:border-[#C9A568] focus:ring-[#C9A568]"
            />
          </div>
        </form>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategoryFilter(category)}
              className={
                selectedCategory === category
                  ? "bg-[#C9A568] text-white hover:bg-[#B8956A] border-[#C9A568]"
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
