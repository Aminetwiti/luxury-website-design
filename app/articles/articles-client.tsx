"use client"

import { useState } from "react"
import { ArticleCard } from "@/components/article-card"
import { ArticleFilters } from "@/components/article-filters"
import type { Article } from "@/lib/google-sheets"

interface ArticlesClientProps {
  articles: Article[]
  categories: string[]
}

export function ArticlesClient({ articles, categories }: ArticlesClientProps) {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles)

  console.log("🎨 ArticlesClient rendu avec:", {
    articlesCount: articles.length,
    categoriesCount: categories.length,
    filteredCount: filteredArticles.length,
  })

  console.log("📚 Articles reçus en props:")
  articles.forEach((article, index) => {
    console.log(`  ${index + 1}. ${article.title} (${article.category})`)
  })

  const handleFilteredArticles = (filtered: Article[]) => {
    console.log("🔄 Mise à jour des articles filtrés:", filtered.length)
    setFilteredArticles(filtered)
  }

  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Articles & Actualités</h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Découvrez nos articles techniques sur l'ingénierie structurelle, les innovations en béton armé et les
              actualités du secteur de la construction.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filtres */}
            <ArticleFilters articles={articles} categories={categories} onFilteredArticles={handleFilteredArticles} />

            {/* Résultats */}
            <div className="mb-8">
              <p className="text-gray-600">
                {filteredArticles.length} article{filteredArticles.length > 1 ? "s" : ""} trouvé
                {filteredArticles.length > 1 ? "s" : ""}
              </p>
            </div>

            {/* Grille d'articles */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => {
                  console.log("🎨 Rendu de l'article:", article.slug)
                  return <ArticleCard key={article.id} article={article} />
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">Aucun article trouvé pour ces critères.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
