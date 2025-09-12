"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { projects } from "@/lib/projects"
import Breadcrumbs from "@/components/breadcrumbs"

export default function RealisationsPage() {
  // Afficher uniquement les 2 projets réels
  const displayedProjects = projects.filter(
    (project) => project.id === "villa-provencale-mandelieu" || project.id === "villa-contemporaine-construction",
  )

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/Realisations_VillaHorizon_ExtDrone.png"
            alt="Nos réalisations"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos <span className="text-[#C9A568]">Réalisations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 text-justify">
              Découvrez nos projets d'ingénierie structurelle qui illustrent notre expertise technique et notre capacité
              à transformer les défis architecturaux en réussites concrètes.
            </p>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Projets <span className="text-[#C9A568]">Remarquables</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Chaque projet est unique et nécessite une approche sur-mesure. Découvrez comment nous avons relevé les
              défis techniques de nos clients avec innovation et expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {displayedProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.images.main || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#C9A568] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-8">
                  <p className="text-gray-600 text-lg leading-relaxed text-justify">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Nos <span className="text-[#C9A568]">Chiffres</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Plus de 15 ans d'expérience au service de l'excellence technique et de la satisfaction client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#C9A568] mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#C9A568] mb-2">15</div>
              <div className="text-gray-600 font-medium">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#C9A568] mb-2">12</div>
              <div className="text-gray-600 font-medium">Ingénieurs experts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#C9A568] mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'intervention */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Domaines <span className="text-[#C9A568]">d'Intervention</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Notre expertise s'étend sur de nombreux types de projets et secteurs d'activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#C9A568] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Résidentiel</h3>
              <p className="text-gray-600 text-justify">Villas, maisons individuelles, résidences de prestige</p>
            </Card>

            <Card className="text-center p-6 border-0 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#C9A568] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Commercial</h3>
              <p className="text-gray-600 text-justify">Bureaux, commerces, bâtiments d'activité</p>
            </Card>

            <Card className="text-center p-6 border-0 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#C9A568] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Hôtellerie</h3>
              <p className="text-gray-600 text-justify">Hôtels, resorts, établissements de luxe</p>
            </Card>

            <Card className="text-center p-6 border-0 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#C9A568] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Patrimoine</h3>
              <p className="text-gray-600 text-justify">Monuments historiques, bâtiments classés</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
