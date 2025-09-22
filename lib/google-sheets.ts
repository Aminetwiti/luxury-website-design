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
  console.log("🚀 Début de getArticlesFromSheet()")

  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`
    console.log("📡 URL de la requête:", url)

    const response = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        Accept: "application/json",
      },
    })

    console.log("📊 Statut de la réponse:", response.status)

    if (!response.ok) {
      console.error("❌ Erreur HTTP:", response.status)
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const text = await response.text()
    console.log("📄 Longueur du texte reçu:", text.length)

    // Nettoyage du JSONP - Google Sheets retourne du JSONP, pas du JSON pur
    const jsonString = text.substring(47, text.length - 2)
    console.log("🧹 Texte nettoyé, longueur:", jsonString.length)

    const json = JSON.parse(jsonString)
    console.log("📋 Structure JSON parsée:", {
      hasTable: !!json.table,
      hasRows: !!(json.table && json.table.rows),
      rowsCount: json.table?.rows?.length || 0,
    })

    if (!json.table || !json.table.rows) {
      console.log("⚠️ Aucune donnée trouvée dans Google Sheet")
      console.log("🔄 Appel de getFallbackArticles()...")
      const fallbackArticles = getFallbackArticles()
      console.log("✅ Articles de fallback retournés:", fallbackArticles.length)
      return fallbackArticles
    }

    console.log("🔄 Traitement des lignes du Google Sheet...")
    const articles = json.table.rows
      .map((row: any, index: number) => {
        const cells = row.c || []

        const article = {
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

        console.log(`📄 Article ${index + 1} traité:`, {
          id: article.id,
          slug: article.slug,
          title: article.title.substring(0, 30) + "...",
          published: article.published,
        })

        return article
      })
      .filter((article: Article) => {
        const isValid = article.title && article.published
        if (!isValid) {
          console.log("❌ Article filtré (titre vide ou non publié):", article.id)
        }
        return isValid
      })

    console.log("✅ Articles valides après filtrage:", articles.length)

    if (articles.length === 0) {
      console.log("⚠️ Aucun article valide trouvé")
      console.log("🔄 Appel de getFallbackArticles()...")
      const fallbackArticles = getFallbackArticles()
      console.log("✅ Articles de fallback retournés:", fallbackArticles.length)
      return fallbackArticles
    }

    console.log("🎉 Articles récupérés avec succès depuis Google Sheets:", articles.length)
    return articles
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des articles:", error)
    console.log("🔄 Appel de getFallbackArticles()...")
    const fallbackArticles = getFallbackArticles()
    console.log("✅ Articles de fallback retournés:", fallbackArticles.length)
    return fallbackArticles
  }
}

function getFallbackArticles(): Article[] {
  console.log("🔄 Génération des articles de fallback...")

  const articles = [
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
    },
    {
      id: "2",
      slug: "rehabilitation-parasismique-enjeux-solutions",
      title: "Réhabilitation parasismique : enjeux et solutions techniques",
      excerpt:
        "Analyse des défis techniques de la réhabilitation parasismique et présentation des solutions modernes de renforcement structurel.",
      content: `La réhabilitation parasismique représente un défi majeur dans l'ingénierie moderne, particulièrement dans les zones à risque sismique comme la région PACA.

## Diagnostic et évaluation

### Méthodes d'investigation

Le Bureau d'études Structiba utilise des techniques de diagnostic non-destructif pour évaluer la vulnérabilité sismique des structures existantes :

- **Auscultation dynamique** : Mesure des fréquences propres de la structure
- **Carottage sélectif** : Évaluation de la résistance des matériaux en place
- **Modélisation numérique** : Simulation du comportement sismique

## Solutions de renforcement

### Techniques modernes

Les solutions de renforcement que nous mettons en œuvre s'appuient sur les dernières innovations technologiques :

#### Renforcement par matériaux composites
- **Fibres de carbone** : Collage de tissus haute résistance
- **Fibres d'aramide** : Solutions pour environnements agressifs
- **Fibres de verre** : Alternative économique pour certaines applications

#### Renforcement par ajout d'éléments
- **Voiles en béton armé** : Contreventement additionnel
- **Portiques métalliques** : Structures de reprise des efforts
- **Dispositifs parasismiques** : Amortisseurs et isolateurs

## Réglementation et normes

La mise en conformité avec les normes parasismiques actuelles (Eurocode 8) nécessite une approche méthodique et rigoureuse que notre bureau d'études maîtrise parfaitement.`,
      image: "/images/Rehabilitation_Structural_Reinforcement.jpg",
      category: "Technique",
      date: "2024-03-10",
      author: "Équipe Structiba",
      readTime: "7 min",
      published: true,
    },
    {
      id: "3",
      slug: "modelisation-3d-bim-revolution-ingenierie",
      title: "Modélisation 3D et BIM : révolution dans l'ingénierie structure",
      excerpt:
        "Comment les outils de modélisation 3D et le BIM transforment les méthodes de conception et de coordination en ingénierie structurelle.",
      content: `La modélisation 3D et le Building Information Modeling (BIM) révolutionnent les pratiques de l'ingénierie structurelle, offrant une précision et une efficacité inégalées.

## Qu'est-ce que le BIM ?

Le BIM (Building Information Modeling) est une méthode de travail collaborative qui s'appuie sur la création et l'exploitation d'un modèle numérique 3D contenant toutes les informations du projet.

### Avantages du BIM en ingénierie structure

- **Visualisation réaliste** : Compréhension immédiate des solutions techniques
- **Détection des conflits** : Identification précoce des interférences
- **Optimisation des coûts** : Quantification précise des matériaux
- **Coordination améliorée** : Synchronisation entre tous les corps d'état

## Outils et logiciels

### Logiciels de calcul structure
Le Bureau d'études Structiba utilise les logiciels les plus performants du marché :

- **Robot Structural Analysis** : Calculs de structures complexes
- **Tekla Structures** : Modélisation détaillée béton et métal
- **Revit Structure** : Intégration BIM complète
- **RFEM/RSTAB** : Analyses dynamiques avancées`,
      image: "/images/Construction_Neuve_3D_Modeling.jpg",
      category: "Technologie",
      date: "2024-03-05",
      author: "Équipe Structiba",
      readTime: "6 min",
      published: true,
    },
  ]

  console.log("✅ Articles de fallback générés:", articles.length, "articles")
  articles.forEach((article, index) => {
    console.log(`📄 Article fallback ${index + 1}:`, {
      id: article.id,
      slug: article.slug,
      title: article.title.substring(0, 50) + "...",
      category: article.category,
    })
  })

  return articles
}

export function getUniqueCategories(articles: Article[]): string[] {
  console.log("🏷️ Extraction des catégories uniques depuis", articles.length, "articles")

  const categories = articles.map((article) => article.category)
  const uniqueCategories = ["Tous", ...Array.from(new Set(categories))]

  console.log("✅ Catégories uniques trouvées:", uniqueCategories)
  return uniqueCategories
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  console.log("🔍 Recherche de l'article avec le slug:", slug)

  const articles = await getArticlesFromSheet()
  console.log("📚 Articles disponibles pour la recherche:", articles.length)

  const article = articles.find((article) => article.slug === slug)

  if (article) {
    console.log("✅ Article trouvé:", {
      id: article.id,
      slug: article.slug,
      title: article.title.substring(0, 50) + "...",
    })
  } else {
    console.log("❌ Aucun article trouvé avec le slug:", slug)
  }

  return article || null
}
