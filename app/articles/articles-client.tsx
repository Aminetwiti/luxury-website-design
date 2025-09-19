"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Articles & Actualités</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Découvrez nos analyses techniques, innovations et actualités dans le domaine de l'ingénierie structurelle
              et du béton armé. Restez informé des dernières évolutions du secteur.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg border-gray-300 focus:border-[#C9A568] focus:ring-[#C9A568]"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
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
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Aucun article trouvé pour votre recherche.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#C9A568] text-white border-none">{article.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString("fr-FR")}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C9A568] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-transparent"
                    >
                      <Link href={`/articles/${article.slug}`} className="flex items-center justify-center gap-2">
                        Lire l'article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Restez informé</h2>
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
