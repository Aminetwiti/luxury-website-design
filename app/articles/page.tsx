import type { Metadata } from "next"
import { getArticlesFromSheet, getUniqueCategories } from "@/lib/google-sheets"
import { ArticlesClient } from "./articles-client"

export const metadata: Metadata = {
  title: "Articles & Actualités | B.E Structiba - Ingénierie Structure",
  description:
    "Découvrez nos articles techniques sur l'ingénierie structurelle, les innovations en béton armé et les actualités du secteur de la construction.",
  keywords: "articles ingénierie, actualités construction, béton armé, structure, innovation technique",
}

export default async function ArticlesPage() {
  const articles = await getArticlesFromSheet()
  const categories = getUniqueCategories(articles)

  return <ArticlesClient articles={articles} categories={categories} />
}
