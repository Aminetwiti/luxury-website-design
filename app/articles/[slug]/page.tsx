import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getArticleBySlug, getArticlesFromSheet } from "@/lib/google-sheets"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export const revalidate = 60 // ISR - Revalidation toutes les 60 secondes

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  console.log("🏷️ Génération des métadonnées pour le slug:", params.slug)

  const article = await getArticleBySlug(params.slug)

  if (!article) {
    console.log("❌ Article non trouvé pour les métadonnées")
    return {
      title: "Article non trouvé | B.E Structiba",
    }
  }

  console.log("✅ Métadonnées générées pour:", article.title)
  return {
    title: `${article.title} | B.E Structiba`,
    description: article.excerpt,
    keywords: `${article.category}, ingénierie structure, béton armé, construction`,
  }
}

export async function generateStaticParams() {
  console.log("🔧 Génération des paramètres statiques pour les articles...")

  const articles = await getArticlesFromSheet()
  console.log("📊 Articles disponibles pour generateStaticParams:", articles.length)

  const params = articles.map((article) => {
    console.log("📄 Génération du paramètre pour:", article.slug)
    return {
      slug: article.slug,
    }
  })

  console.log("✅ Paramètres statiques générés:", params.length)
  return params
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  console.log("🚀 Chargement de la page article pour le slug:", params.slug)

  const article = await getArticleBySlug(params.slug)

  if (!article) {
    console.log("❌ Article non trouvé, redirection vers 404")
    notFound()
  }

  console.log("✅ Article trouvé:", article.title)
  console.log("🔍 Recherche d'articles similaires...")

  const allArticles = await getArticlesFromSheet()
  const relatedArticles = allArticles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3)

  console.log("📚 Articles similaires trouvés:", relatedArticles.length)
  relatedArticles.forEach((related, index) => {
    console.log(`  ${index + 1}. ${related.title}`)
  })

  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button
              asChild
              variant="outline"
              className="mb-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/articles" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour aux articles
              </Link>
            </Button>

            <div className="mb-6">
              <Badge className="bg-[#C9A568] text-white border-none mb-4">{article.category}</Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-200 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(article.date).toLocaleDateString("fr-FR")}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {article.author}
              </div>
              <span>{article.readTime}</span>
            </div>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">{article.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 sm:h-96 mb-12 rounded-lg overflow-hidden">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
              <div className="prose prose-lg max-w-none">
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: article.content
                      .replace(/\n/g, "<br />")
                      .replace(/## (.*)/g, "<h2 class='text-2xl font-bold text-gray-900 mt-8 mb-4'>$1</h2>")
                      .replace(/### (.*)/g, "<h3 class='text-xl font-semibold text-gray-800 mt-6 mb-3'>$1</h3>")
                      .replace(/#### (.*)/g, "<h4 class='text-lg font-medium text-gray-700 mt-4 mb-2'>$1</h4>")
                      .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-gray-900'>$1</strong>")
                      .replace(/- \*\*(.*?)\*\* :/g, "• <strong class='font-semibold text-gray-900'>$1</strong> :"),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">Articles similaires</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative h-48">
                      <Image
                        src={relatedArticle.image || "/placeholder.svg"}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#C9A568] text-white border-none">{relatedArticle.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C9A568] transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{relatedArticle.excerpt}</p>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-transparent"
                      >
                        <Link
                          href={`/articles/${relatedArticle.slug}`}
                          className="flex items-center justify-center gap-2"
                        >
                          Lire l'article
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
