import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Calculator, Building, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Ingénierie Parasismique | B.E Structiba",
  description:
    "Expertise en calculs parasismiques et conception de structures résistantes aux séismes. Solutions techniques avancées pour la sécurité structurelle.",
}

export default function IngenierieparasismiquePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Service_Parasismique_Icon.jpg"
            alt="Ingénierie parasismique"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-[#C9A568]/20 border border-[#C9A568]/30 rounded-full px-6 py-2 mb-6">
              <Shield className="w-5 h-5 text-[#C9A568] mr-2" />
              <span className="text-[#C9A568] font-medium">Sécurité Structurelle</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ingénierie{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A568] to-[#E6C78A]">
                Parasismique
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expertise technique en calculs parasismiques et conception de structures résistantes aux séismes. Nous
              garantissons la sécurité et la conformité réglementaire de vos projets dans les zones à risque sismique.
            </p>
          </div>
        </div>
      </section>

      {/* Spécialités */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Spécialités</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions techniques avancées pour la résistance aux séismes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#C9A568]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A568]/20 transition-colors">
                  <Calculator className="w-8 h-8 text-[#C9A568]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Calculs Parasismiques</h3>
                <p className="text-gray-600 text-justify">
                  Analyse dynamique des structures selon les normes Eurocode 8. Modélisation des efforts sismiques et
                  dimensionnement des éléments résistants.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#C9A568]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A568]/20 transition-colors">
                  <Building className="w-8 h-8 text-[#C9A568]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Conception Parasismique</h3>
                <p className="text-gray-600 text-justify">
                  Conception de structures neuves intégrant les principes de résistance aux séismes. Optimisation des
                  systèmes structurels pour la sécurité.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#C9A568]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A568]/20 transition-colors">
                  <Shield className="w-8 h-8 text-[#C9A568]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Renforcement Parasismique</h3>
                <p className="text-gray-600 text-justify">
                  Études de renforcement des structures existantes pour améliorer leur résistance sismique. Solutions
                  techniques adaptées au bâti existant.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#C9A568]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A568]/20 transition-colors">
                  <FileText className="w-8 h-8 text-[#C9A568]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expertise Réglementaire</h3>
                <p className="text-gray-600 text-justify">
                  Vérification de conformité aux normes parasismiques en vigueur. Accompagnement dans les démarches
                  administratives et certifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Méthodologie rigoureuse pour garantir la sécurité parasismique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A568] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analyse des Besoins</h3>
              <p className="text-gray-600 text-justify">
                Évaluation du contexte sismique local et des exigences réglementaires. Définition des objectifs de
                performance parasismique.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A568] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modélisation Dynamique</h3>
              <p className="text-gray-600 text-justify">
                Création de modèles numériques avancés pour simuler le comportement sismique. Analyse modale et
                temporelle des structures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A568] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dimensionnement</h3>
              <p className="text-gray-600 text-justify">
                Calcul des éléments structurels selon les sollicitations sismiques. Optimisation des sections et des
                armatures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A568] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Validation et Suivi</h3>
              <p className="text-gray-600 text-justify">
                Vérification de la conformité réglementaire et suivi de la mise en œuvre. Contrôle qualité des solutions
                parasismiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#C9A568] to-[#B8941F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sécurisez vos projets avec notre expertise parasismique
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Bénéficiez de notre savoir-faire technique pour garantir la résistance sismique de vos structures.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#C9A568] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Demander une étude parasismique
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
