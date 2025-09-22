"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface ArticleFiltersProps {
  categories: string[]
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
  selectedCategory: string
}

export function ArticleFilters({ categories, onSearch, onCategoryChange, selectedCategory }: ArticleFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-gray-200 focus:border-[#C9A568] focus:ring-[#C9A568]"
            />
          </div>
        </form>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
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
    </div>
  )
}
