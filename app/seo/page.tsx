import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Hammer, Leaf, Search, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Bureau d'Études Structure - Ingénierie Bâtiment - B.E StructiBA",
  description:
    "Bureau d'études structure expert en calculs béton armé, réhabilitation, construction durable. Ingénieurs spécialisés Paris, PACA, Antilles. Devis gratuit 48h.",
  keywords: [
    "bureau études structure",
    "ingénierie bâtiment",
    "calculs béton armé",
    "réhabilitation structure",
    "construction durable",
    "renforcement carbone",
    "expertise structure",
    "BET structure",
    "ingénieur structure",
    "dimensionnement béton",
    "eurocodes",
    "modélisation 3D",
    "pathologies bâtiment",
    "diagnostic structure",
    "tirants précontraints",
    "fibres carbone",
    "génie civil",
    "maîtrise d'œuvre",
    "coordination BIM",
    "HQE BREEAM",
    "RE2020",
    "parasismique",
    "fondations spéciales",
    "charpente métallique",
    "béton précontraint",
    "structures mixtes",
    "bois lamellé",
    "géothermie",
    "matériaux biosourcés",
    "expertise judiciaire",
    "sinistre bâtiment",
    "contre expertise",
    "audit technique",
    "due diligence",
    "réception travaux",
    "contrôle qualité",
    "assistance MOE",
    "formation technique",
  ].join(", "),
  robots: "noindex, nofollow",
}

const motsCles = {
  techniques: [
    "Bureau d'études structure",
    "Ingénierie bâtiment",
    "Calculs béton armé",
    "Dimensionnement Eurocodes",
    "Modélisation 3D Robot Structural",
    "Éléments finis dynamiques",
    "Calculs sismiques",
    "Structures précontraintes",
    "Béton post-contraint",
    "Charpente métallique",
    "Structures mixtes acier-béton",
    "Bois lamellé-collé CLT",
    "Fondations spéciales",
    "Micropieux",
    "Géotechnique",
    "Pathologies structure",
  ],
  rehabilitation: [
    "Réhabilitation structure",
    "Renforcement fibres carbone",
    "Tirants précontraints",
    "Injection résines structurelles",
    "Ouverture trémies",
    "Reprise en sous-œuvre",
    "Diagnostic pathologies",
    "Expertise désordres",
    "Consolidation maçonnerie",
    "Renforcement poutres",
    "Murs porteurs",
    "Planchers collaborants",
    "Escaliers suspendus",
    "Terrasses accessibles",
    "Verrières structurelles",
    "Mezzanines",
  ],
  durable: [
    "Construction durable",
    "Développement durable",
    "Matériaux biosourcés",
    "Béton de chanvre",
    "Bois local certifié",
    "Géothermie",
    "Énergies renouvelables",
    "Panneaux solaires intégrés",
    "Récupération eaux pluviales",
    "Ventilation naturelle",
    "Architecture bioclimatique",
    "Certification HQE",
    "BREEAM",
    "Passivhaus",
    "RE2020",
    "Analyse cycle de vie",
  ],
  expertise: [
    "Expertise structure",
    "Expertise judiciaire",
    "Contre-expertise",
    "Diagnostic technique",
    "Audit bâtiment",
    "Due diligence immobilière",
    "Pathologies bâtiment",
    "Sinistre structure",
    "Évaluation dommages",
    "Médiation technique",
    "Assistance assurance",
    "Réception travaux",
    "Contrôle qualité",
    "Assistance MOE",
    "Formation équipes",
    "Veille réglementaire",
  ],
  geographique: [
    "Paris ingénierie",
    "PACA structure",
    "Antilles parasismique",
    "Cannes bureau études",
    "Nice calculs structure",
    "Antibes ingénieur",
    "Monaco BET",
    "Marseille structure",
    "Toulon génie civil",
    "Martinique construction",
    "Guadeloupe bâtiment",
    "Saint-Martin expertise",
    "Guyane structure",
    "Réunion ingénierie",
    "Mayotte construction",
    "DOM-TOM structure",
  ],
}

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Référencement SEO - B.E StructiBA
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Page technique dédiée au référencement naturel avec l'ensemble des mots-clés stratégiques de l'ingénierie
              structure et du bâtiment.
            </p>
            <Badge variant="secondary" className="mt-4">
              Page non indexée - Usage interne SEO
            </Badge>
          </div>

          {/* Mots-clés par catégorie */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Techniques */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="size-6 text-blue-600" />
                  <h2 className="text-xl font-bold">Mots-clés Techniques</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {motsCles.techniques.map((mot, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {mot}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Réhabilitation */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Hammer className="size-6 text-orange-600" />
                  <h2 className="text-xl font-bold">Réhabilitation</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {motsCles.rehabilitation.map((mot, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {mot}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Durable */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="size-6 text-green-600" />
                  <h2 className="text-xl font-bold">Développement Durable</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {motsCles.durable.map((mot, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {mot}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expertise */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="size-6 text-purple-600" />
                  <h2 className="text-xl font-bold">Expertise & Conseil</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {motsCles.expertise.map((mot, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {mot}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Géographique */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="size-6 text-red-600" />
                <h2 className="text-xl font-bold">Mots-clés Géographiques</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {motsCles.geographique.map((mot, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {mot}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contenu SEO structuré */}
          <div className="mt-12 prose max-w-none">
            <h2>Bureau d'Études Structure B.E StructiBA - Expertise Technique Reconnue</h2>

            <p>
              <strong>B.E StructiBA</strong> est un bureau d'études structure spécialisé en ingénierie bâtiment, reconnu
              pour son expertise en calculs béton armé et dimensionnement selon Eurocodes. Nos ingénieurs maîtrisent la
              modélisation 3D Robot Structural et les calculs aux éléments finis pour tous vos projets de construction
              neuve et réhabilitation structure.
            </p>

            <h3>Réhabilitation Structure et Renforcement</h3>
            <p>
              Spécialistes du renforcement par fibres carbone et tirants précontraints, nous intervenons sur tous types
              de pathologies structure. Nos techniques d'injection résines structurelles et d'ouverture de trémies
              sécurisées permettent la transformation de vos espaces existants avec les plus hautes exigences
              techniques.
            </p>

            <h3>Construction Durable et Matériaux Biosourcés</h3>
            <p>
              Pionniers de la construction durable, nous développons des solutions innovantes avec matériaux biosourcés
              : béton de chanvre, bois lamellé-collé CLT, géothermie intégrée. Nos projets bénéficient des
              certifications HQE, BREEAM et Passivhaus pour une performance énergétique optimale conforme RE2020.
            </p>

            <h3>Expertise Judiciaire et Diagnostic Technique</h3>
            <p>
              Agréés pour l'expertise judiciaire, nos ingénieurs interviennent en diagnostic pathologies,
              contre-expertise et évaluation dommages. Notre service d'audit technique et due diligence immobilière
              accompagne vos projets d'acquisition avec des rapports détaillés sous 48h.
            </p>

            <h3>Zones d'Intervention : Paris, PACA, Antilles</h3>
            <p>
              Basés à Cannes, nous intervenons sur Paris et toute la région PACA (Nice, Antibes, Monaco, Marseille,
              Toulon) ainsi que dans les Antilles françaises avec une expertise parasismique reconnue (Martinique,
              Guadeloupe, Saint-Martin). Notre connaissance des spécificités climatiques tropicales garantit des
              solutions adaptées.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
