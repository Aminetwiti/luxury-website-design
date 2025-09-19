import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#C9A568] text-white border-none shadow-lg">{article.category}</Badge>
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

        <Button
          asChild
          variant="outline"
          className="w-full border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-transparent transition-all duration-300"
        >
          <Link href={`/articles/${article.slug}`} className="flex items-center justify-center gap-2">
            Lire l'article
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
