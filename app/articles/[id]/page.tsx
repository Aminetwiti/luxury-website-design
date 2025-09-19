import type { Metadata } from "next"
import { getArticlesFromSheet } from "@/lib/google-sheets"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"

interface ArticlePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const articles = await getArticlesFromSheet()
  const article = articles.find((a) => a.id === params.id)

  if (!article) {
    return {
      title: "Article non trouvé | B.E Structiba",
    }
  }

  return {
    title: `${article.title} | B.E Structiba`,
    description: article.excerpt,
    keywords: `${article.category}, ingénierie, structure, béton armé`,
  }
}

export async function generateStaticParams() {
  const articles = await getArticlesFromSheet()
  return articles.map((article) => ({
    id: article.id,
  }))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const articles = await getArticlesFromSheet()
  const article = articles.find((a) => a.id === params.id)

  if (!article) {
    notFound()
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button
              asChild
              variant="outline"
              className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/articles" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour aux articles
              </Link>
            </Button>

            <div className="text-white">
              <Badge className="bg-[#C9A568] text-white border-none mb-4">{article.category}</Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(article.date).toLocaleDateString("fr-FR")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <p className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-3xl">{article.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-12">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">{article.content}</div>
              </div>

              {/* Share Section */}
              <div className="border-t border-gray-200 pt-8 mt-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Partager cet article</h3>
                  <Button
                    variant="outline"
                    className="border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-transparent"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Articles similaires</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedArticles.map((relatedArticle) => (
                    <Link key={relatedArticle.id} href={`/articles/${relatedArticle.id}`} className="group">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={relatedArticle.image || "/placeholder.svg"}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <Badge className="bg-[#C9A568] text-white border-none mb-3">{relatedArticle.category}</Badge>
                          <h3 className="font-bold text-gray-900 group-hover:text-[#C9A568] transition-colors line-clamp-2">
                            {relatedArticle.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
