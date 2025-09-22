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
            <ArticleFilters articles={articles} categories={categories} onFilter={setFilteredArticles} />

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
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun article trouvé</h3>
                  <p className="text-gray-600">
                    Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
