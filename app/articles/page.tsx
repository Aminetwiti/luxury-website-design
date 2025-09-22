import type { Metadata } from "next"
import { getArticlesFromSheet, getUniqueCategories } from "@/lib/google-sheets"
import { ArticlesClient } from "./articles-client"

export const metadata: Metadata = {
  title: "Articles & Actualités | B.E Structiba - Ingénierie Structure",
  description:
    "Découvrez nos articles techniques sur l'ingénierie structurelle, les innovations en béton armé et les actualités du secteur de la construction.",
  keywords: "articles ingénierie, actualités construction, béton armé, structure, innovation technique",
}

export const revalidate = 60 // ISR - Revalidation toutes les 60 secondes

export default async function ArticlesPage() {
  console.log("🚀 Chargement de la page Articles...")

  console.log("📊 Récupération des articles...")
  const articles = await getArticlesFromSheet()
  console.log("✅ Articles récupérés pour la page:", articles.length)

  console.log("🏷️ Extraction des catégories...")
  const categories = getUniqueCategories(articles)
  console.log("✅ Catégories extraites:", categories)

  console.log("🎨 Rendu du composant ArticlesClient avec:", {
    articlesCount: articles.length,
    categoriesCount: categories.length,
  })

  return <ArticlesClient articles={articles} categories={categories} />
}
