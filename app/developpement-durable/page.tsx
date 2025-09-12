import AnimatedMaterialCards from "@/components/animated-material-cards"
import Image from "next/image"
import Link from "next/link"
import { copy } from "@/lib/copy"
import { BarChart, LineChart, PieChart, ArrowRight, Leaf, Recycle, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const sustainableApproaches = [
  {
    title: "Matériaux Éco-Responsables",
    description: "Sélection rigoureuse de matériaux durables et recyclables",
    image: "/images/Developpement_Durable_Eco_Materials.jpg",
    icon: Leaf,
    benefits: ["Béton de chanvre", "Bois certifié FSC", "Matériaux recyclés"],
    impact: "Réduction de 40% de l'empreinte carbone",
  },
  {
    title: "Bâtiments Verts",
    description: "Conception bioclimatique et performance énergétique optimale",
    image: "/images/Developpement_Durable_Green_Building.jpg",
    icon: Recycle,
    benefits: ["Isolation renforcée", "Ventilation naturelle", "Toitures végétalisées"],
    impact: "Économies d'énergie jusqu'à 60%",
  },
  {
    title: "Innovation & Recherche",
    description: "Laboratoire de recherche pour les matériaux de demain",
    image: "/images/Developpement_Durable_Innovation_Lab.jpg",
    icon: Zap,
    benefits: ["Tests de performance", "Nouveaux composites", "Solutions brevetées"],
    impact: "Technologies d'avant-garde",
  },
]

const certifications = [
  { name: "HQE", description: "Haute Qualité Environnementale", logo: "/images/logo-hqe.png" },
  { name: "CSTB", description: "Centre Scientifique et Technique du Bâtiment", logo: "/images/logo-cstb.png" },
  { name: "ISO 9001", description: "Management de la Qualité", logo: "/images/logo-iso9001.png" },
]

export const metadata = {
  title: "Développement Durable — Construire Demain",
  description:
    "Solutions innovantes et éco-responsables pour la construction. Béton de chanvre, bois, bas carbone. Performance et durabilité.",
}

export default function DeveloppementDurablePage() {
  const c = copy.sustainable
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Enhanced */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm animate-in fade-in-0 zoom-in-95 duration-1000">
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/Durable_Hero_MateriauxNobles.png"
              alt="Construction durable — matériaux nobles"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <Badge className="mb-4 bg-green-600 text-white border-none">Développement Durable</Badge>
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 animate-in slide-in-from-bottom-8 duration-1000 delay-300"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {c.title}
              </h1>
              <p className="text-lg text-white/90 max-w-3xl animate-in slide-in-from-bottom-8 duration-1000 delay-500">
                {c.subtitle}
              </p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-gray-600 text-lg max-w-3xl animate-in slide-in-from-bottom-8 duration-1000 delay-700 mb-8">
              {c.introduction}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/contact" className="flex items-center">
                  Consultation Éco-Responsable
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/realisations">Projets Durables</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Approches Durables */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 animate-in slide-in-from-left-8 duration-1000"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Nos Approches Durables
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Une démarche globale pour construire l'avenir de manière responsable et innovante.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sustainableApproaches.map((approach, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 animate-in slide-in-from-bottom-8"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64">
                <Image
                  src={approach.image || "/placeholder.svg"}
                  alt={approach.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <approach.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                <p className="text-gray-600 mb-4">{approach.description}</p>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500 mb-2 block">Avantages :</span>
                    <div className="space-y-1">
                      {approach.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Leaf className="w-3 h-3 text-green-500 mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {approach.impact}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Fiches matériaux interactives */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 animate-in slide-in-from-left-8 duration-1000"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Fiches matériaux interactives
        </h2>
        <AnimatedMaterialCards />
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[c.materials.chanvre, c.materials.bois, c.materials.bascarbone].map((material, index) => (
            <div
              key={material.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-500 animate-in slide-in-from-bottom-8"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-lg font-semibold mb-2">{material.title}</h3>
              <p className="text-gray-600">{material.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Infographies & Comparatifs */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 animate-in slide-in-from-left-8 duration-1000"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Infographies & Comparatifs
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mb-12 animate-in slide-in-from-left-8 duration-1000 delay-200">
          Présentations visuelles modernes illustrant la comparaison entre matériaux classiques et durables en termes
          d'impact carbone, de coûts sur le cycle de vie et d'efficacité énergétique.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BarChart, title: "Impact Carbone", desc: "Réduction des émissions de CO2.", color: "#10B981" },
            {
              icon: PieChart,
              title: "Coût Global",
              desc: "Analyse sur le cycle de vie du bâtiment.",
              color: "#F59E0B",
            },
            {
              icon: LineChart,
              title: "Performance Énergétique",
              desc: "Optimisation de la consommation.",
              color: "#8B5CF6",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 p-8 bg-white text-center shadow-sm hover:shadow-lg transition-all duration-500 animate-in slide-in-from-bottom-8"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <item.icon
                className="size-12 mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:rotate-12"
                style={{ color: item.color }}
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Labels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos engagements qualité reconnus par les organismes de référence du secteur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image src={cert.logo || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-2xl border border-gray-200 p-12 bg-white text-center shadow-sm hover:shadow-lg transition-all duration-500 animate-in zoom-in-95 duration-1000">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {c.cta}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Construisons ensemble un avenir plus durable avec des solutions innovantes et respectueuses de
            l'environnement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C9A568] hover:bg-[#B8941F] text-white">
              <Link href="/contact" className="flex items-center">
                Contactez nos experts durables
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/realisations">Découvrir nos Projets Verts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
