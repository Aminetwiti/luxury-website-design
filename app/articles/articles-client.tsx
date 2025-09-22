"use client"

import { useState, useMemo } from "react"
import { ArticleCard } from "@/components/article-card"
import { ArticleFilters } from "@/components/article-filters"
import type { Article } from "@/lib/google-sheets"

interface ArticlesClientProps {
  articles: Article[]
  categories: string[]
}

export function ArticlesClient({ articles, categories }: ArticlesClientProps) {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = activeCategory === "Tous" || article.category === activeCategory
      const matchesSearch =
        searchTerm === "" ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [articles, activeCategory, searchTerm])

  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Articles & Actualités</h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Découvrez nos dernières réflexions sur l'ingénierie structurelle, les innovations techniques et les
              actualités du secteur de la construction.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filters */}
            <div className="mb-12">
              <ArticleFilters
                categories={categories}
                onCategoryChange={setActiveCategory}
                onSearchChange={setSearchTerm}
                activeCategory={activeCategory}
              />
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                {filteredArticles.length} article{filteredArticles.length > 1 ? "s" : ""} trouvé
                {filteredArticles.length > 1 ? "s" : ""}
                {searchTerm && ` pour "${searchTerm}"`}
                {activeCategory !== "Tous" && ` dans "${activeCategory}"`}
              </p>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Aucun article trouvé</h3>
                  <p className="text-gray-600 mb-6">
                    Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("Tous")
                      setSearchTerm("")
                    }}
                    className="text-[#C9A568] hover:text-[#B8956A] font-medium"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
