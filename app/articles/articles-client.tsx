"use client"

import { useState, useMemo } from "react"
import { ArticleCard } from "@/components/article-card"
import { ArticleFilters } from "@/components/article-filters"
import { Button } from "@/components/ui/button"
import type { Article } from "@/lib/google-sheets"

interface ArticlesClientProps {
  articles: Article[]
  categories: string[]
}

export function ArticlesClient({ articles, categories }: ArticlesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory
      const matchesSearch =
        searchTerm === "" ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [articles, selectedCategory, searchTerm])

  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Articles & Actualités</h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Découvrez nos analyses techniques, innovations et actualités dans le domaine de l'ingénierie structurelle
              et du béton armé. Restez informé des dernières évolutions du secteur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <ArticleFilters
            categories={categories}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            onCategoryChange={setSelectedCategory}
            onSearchChange={setSearchTerm}
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aucun article trouvé</h3>
              <p className="text-gray-600 mb-8">
                Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("Tous")
                  setSearchTerm("")
                }}
                className="bg-[#C9A568] hover:bg-[#B8941F] text-white"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Restez informé</h2>
            <p className="text-lg text-gray-600 mb-8">
              Recevez nos derniers articles et actualités techniques directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A568] focus:border-transparent"
              />
              <Button className="bg-[#C9A568] hover:bg-[#B8941F] text-white px-6 py-3">S'abonner</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
