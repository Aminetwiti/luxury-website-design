export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  author: string
  readTime: string
  published: boolean
}

const SHEET_ID = "1D81NCaQmQ5bHNLZZiep-BeoWnJgcOCb3ziaXfk8Ud0M"

export async function getArticlesFromSheet(): Promise<Article[]> {
  try {
    // Utilisation de l'endpoint public Google Sheets (pas besoin d'API key)
    const response = await fetch(`https://docs.google.com/spreadsheets/d/1D81NCaQmQ5bHNLZZiep-BeoWnJgcOCb3ziaXfk8Ud0M/gviz/tq?tqx=out:json`, {
      next: { revalidate: 3600 }, // Cache pendant 1 heure
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const text = await response.text()

    // Nettoyage du JSONP - Google Sheets retourne du JSONP, pas du JSON pur
    const jsonString = text.substring(47, text.length - 2)
    const json = JSON.parse(jsonString)

    if (!json.table || !json.table.rows) {
      console.warn("No data found in Google Sheet")
      return getFallbackArticles()
    }

    // Mapper les colonnes selon le Google Sheet
    const articles = json.table.rows
      .map((row: any, index: number) => {
        const cells = row.c || []
        return {
          id: cells[0]?.v?.toString() || `article-${index + 1}`,
          slug: cells[1]?.v?.toString() || `article-${index + 1}`,
          title: cells[2]?.v?.toString() || "",
          excerpt: cells[3]?.v?.toString() || "",
          content: cells[4]?.v?.toString() || "",
          image: cells[5]?.v?.toString() || "/images/placeholder-article.jpg",
          category: cells[6]?.v?.toString() || "Général",
          date: cells[7]?.v?.toString() || new Date().toISOString().split("T")[0],
          author: cells[8]?.v?.toString() || "Équipe Structiba",
          readTime: cells[9]?.v?.toString() || "5 min",
          published: cells[10]?.v === true || cells[10]?.v === "TRUE" || cells[10]?.v === "true",
        }
      })
      .filter((article: Article) => article.title && article.published) // Filtrer les articles vides et non publiés

    return articles.length > 0 ? articles : getFallbackArticles()
  } catch (error) {
    console.error("Error fetching articles from Google Sheets:", error)
    return getFallbackArticles()
  }
}

function getFallbackArticles(): Article[] {
  return [
    {
      id: "1",
      slug: "innovations-beton-arme-construction-durable",
      title: "Les innovations en béton armé pour la construction durable",
      excerpt:
        "Découvrez les dernières avancées technologiques en matière de béton armé et leur impact sur la construction durable et écologique.",
      content: `Le béton armé connaît une révolution avec l'émergence de nouvelles technologies qui transforment radicalement notre approche de la construction durable.

## Les nouveaux bétons bas carbone

Les bétons bas carbone représentent une avancée majeure dans la réduction de l'empreinte environnementale du secteur de la construction. Ces matériaux innovants permettent de réduire jusqu'à 50% les émissions de CO2 par rapport aux bétons traditionnels.

### Composition et avantages

- **Ciments alternatifs** : Utilisation de laitiers de haut fourneau et de cendres volantes
- **Granulats recyclés** : Intégration de matériaux de démolition traités
- **Adjuvants écologiques** : Réducteurs d'eau et accélérateurs de prise naturels

## Applications pratiques

Le Bureau d'études Structiba intègre ces innovations dans tous ses projets de construction neuve et de réhabilitation, garantissant ainsi des structures performantes et respectueuses de l'environnement.

### Projets de référence

Nos récentes réalisations démontrent l'efficacité de ces nouveaux matériaux dans des contextes variés, de la villa individuelle aux grands ensembles résidentiels.

## Perspectives d'avenir

L'évolution constante des technologies du béton armé ouvre de nouvelles possibilités pour l'architecture de demain, alliant performance structurelle et responsabilité environnementale.`,
      image: "/images/Materiaux_BetonBasCarbone_Texture.png",
      category: "Innovation",
      date: "2024-03-15",
      author: "Équipe Structiba",
      readTime: "5 min",
      published: true,
    }
    
  ]
}

export function getUniqueCategories(articles: Article[]): string[] {
  const categories = articles.map((article) => article.category)
  return ["Tous", ...Array.from(new Set(categories))]
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getArticlesFromSheet()
  return articles.find((article) => article.slug === slug) || null
}
