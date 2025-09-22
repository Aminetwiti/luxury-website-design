import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import type { Article } from "@/lib/google-sheets"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
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

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C9A568] transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

        <Link
          href={`/articles/${article.slug}`}
          className="inline-flex items-center gap-2 text-[#C9A568] hover:text-[#B8956A] font-medium transition-colors"
        >
          Lire l'article
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
