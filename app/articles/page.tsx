import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Articles & Actualités | B.E Structiba - Ingénierie Structure",
  description:
    "Découvrez nos articles techniques sur l'ingénierie structurelle, les innovations en béton armé et les actualités du secteur de la construction.",
  keywords: "articles ingénierie, actualités construction, béton armé, structure, innovation technique",
}

const articles = [
  {
    id: 1,
    title: "Les innovations en béton armé pour la construction durable",
    excerpt:
      "Découvrez les dernières avancées technologiques en matière de béton armé et leur impact sur la construction durable et écologique.",
    image: "/images/Materiaux_BetonBasCarbone_Texture.png",
    category: "Innovation",
    date: "2024-03-15",
    author: "Équipe Structiba",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Réhabilitation parasismique : enjeux et solutions techniques",
    excerpt:
      "Analyse des défis techniques de la réhabilitation parasismique et présentation des solutions modernes de renforcement structurel.",
    image: "/images/Rehabilitation_Structural_Reinforcement.jpg",
    category: "Technique",
    date: "2024-03-10",
    author: "Équipe Structiba",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Modélisation 3D et BIM : révolution dans l'ingénierie structure",
    excerpt:
      "Comment les outils de modélisation 3D et le BIM transforment les méthodes de conception et de coordination en ingénierie structurelle.",
    image: "/images/Construction_Neuve_3D_Modeling.jpg",
    category: "Technologie",
    date: "2024-03-05",
    author: "Équipe Structiba",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Diagnostic non-destructif : technologies et applications",
    excerpt:
      "Présentation des techniques de diagnostic non-destructif utilisées pour l'évaluation des structures existantes.",
    image: "/images/Rehabilitation_Non_Destructive_Testing.jpg",
    category: "Diagnostic",
    date: "2024-02-28",
    author: "Équipe Structiba",
    readTime: "4 min",
  },
  {
    id: 5,
    title: "Construire en zone sismique : normes et bonnes pratiques",
    excerpt:
      "Guide complet sur les exigences réglementaires et les meilleures pratiques pour la construction en zone à risque sismique.",
    image: "/images/Service_Parasismique_Icon.jpg",
    category: "Réglementation",
    date: "2024-02-20",
    author: "Équipe Structiba",
    readTime: "8 min",
  },
  {
    id: 6,
    title: "Matériaux composites en renforcement structurel",
    excerpt:
      "Étude des applications des matériaux composites (fibres de carbone, aramide) dans le renforcement des structures existantes.",
    image: "/images/Rehabilitation_Composite_Reinforcement.jpg",
    category: "Matériaux",
    date: "2024-02-15",
    author: "Équipe Structiba",
    readTime: "6 min",
  },
]

const categories = ["Tous", "Innovation", "Technique", "Technologie", "Diagnostic", "Réglementation", "Matériaux"]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Articles & Actualités</h1>
            <p className="text-xl text-gray-200 leading-relaxed text-justify">
              Découvrez nos analyses techniques, innovations et actualités dans le domaine de l'ingénierie structurelle
              et du béton armé. Restez informé des dernières évolutions du secteur.
            </p>
          </div>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tous" ? "default" : "outline"}
                className={
                  category === "Tous"
                    ? "bg-[#C9A568] hover:bg-[#B8941F] text-white"
                    : "border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
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
                  <p className="text-gray-600 text-justify mb-4">{article.excerpt}</p>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#C9A568] text-[#C9A568] hover:bg-[#C9A568] hover:text-white bg-transparent"
                  >
                    <Link href={`/articles/${article.id}`} className="flex items-center justify-center gap-2">
                      Lire l'article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
