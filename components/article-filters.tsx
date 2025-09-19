"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface ArticleFiltersProps {
  categories: string[]
  onCategoryChange: (category: string) => void
  onSearchChange: (search: string) => void
  activeCategory: string
}

export function ArticleFilters({ categories, onCategoryChange, onSearchChange, activeCategory }: ArticleFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Rechercher un article..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-3 w-full border-gray-300 focus:border-[#C9A568] focus:ring-[#C9A568]"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onCategoryChange(category)}
            variant={category === activeCategory ? "default" : "outline"}
            className={
              category === activeCategory
                ? "bg-[#C9A568] hover:bg-[#B8941F] text-white border-[#C9A568]"
                : "border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-white"
            }
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
