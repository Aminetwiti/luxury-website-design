"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface ArticleFiltersProps {
  categories: string[]
  selectedCategory: string
  searchTerm: string
  onCategoryChange: (category: string) => void
  onSearchChange: (search: string) => void
}

export function ArticleFilters({
  categories,
  selectedCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
}: ArticleFiltersProps) {
  return (
    <div className="space-y-6">
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 border-gray-300 focus:border-[#C9A568] focus:ring-[#C9A568]"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === selectedCategory ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className={
              category === selectedCategory
                ? "bg-[#C9A568] hover:bg-[#B8941F] text-white"
                : "border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white"
            }
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
