"use client"

import { useState } from "react"
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
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    onSearchChange(value)
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10 py-3 text-lg border-gray-200 focus:border-[#C9A568] focus:ring-[#C9A568]"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className={
              activeCategory === category
                ? "bg-[#C9A568] text-white hover:bg-[#B8956A] border-[#C9A568]"
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
